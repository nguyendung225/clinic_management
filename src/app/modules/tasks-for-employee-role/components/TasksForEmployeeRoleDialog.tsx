import {
  ErrorMessage,
  Field,
  FieldArray,
  Formik,
  FormikErrors,
  FormikProps,
} from 'formik'
import moment from 'moment'
import React, {
  FC,
  useState,
  useEffect,
  KeyboardEvent,
  Dispatch,
  SetStateAction,
} from 'react'
import {
  Button,
  Col,
  Modal,
  Row,
  Form,
  Spinner,
  ButtonToolbar,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap'
import {useIntl} from 'react-intl'
import * as Yup from 'yup'
import {ProjectType} from '../../projects/models/ProjectModels'
import {Task, TaskType} from '../models/TaskModels'
import {addTask, editTask} from '../services/TaskForEmployeeRoleServices'
import {toast} from 'react-toastify'
import {INIT_TASK} from '../const/TasksForEmployeeRoleConst'
import { SUCCESS_RESPONSE } from '../../users/const/UserConst'

interface Props {
  show: boolean
  onClose: () => void
  data?: TaskType
  state: boolean
  setState: Dispatch<SetStateAction<boolean>>
  projectList: ProjectType[]
}

interface FormValues {
  tasks: Task[]
}

interface CustomFormikProps {
  values: FormValues
  setFieldValue: FormikProps<FormValues>['setFieldValue']
}

const TasksForEmployeeRolesDialog: FC<Props> = (props) => {
  const intl = useIntl()
  let {show, onClose, data, state, setState, projectList} = props

  const [dayOff, setDayOff] = useState(data?.dayOff ? data?.dayOff : false)
  const [currentDate, setCurrentDate] = useState<string>(
    moment(data?.dateWorking).format('yyyy-MM-DD')
  )
  const [loading, setLoading] = useState(false)
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const isAddNew = data?.tasks ? false : true

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>, index: number) => {
    const projectId = e?.target?.value;
    setSelectedIds(prevSelectedIds => {
      const newSelectedIds = [...prevSelectedIds];
      if (projectId) {
        newSelectedIds[index] = projectId;
      } else {
        newSelectedIds.splice(index, 1);
      }
      return newSelectedIds;
    });
  };

  const handleChangeTextArea = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    index: number,
    {values, setFieldValue}: CustomFormikProps
  ) => {
    const {value, name} = e?.target
    if (!value || value.charAt(0) !== '-') {
      setFieldValue(name, ('- ' + value))
    } else {
      setFieldValue(name, value)
    }
  }

  const handleEnterPress = (
    e: KeyboardEvent<HTMLTextAreaElement>,
    index: number,
    {values, setFieldValue}: CustomFormikProps
  ) => {
    const target = e.target as HTMLTextAreaElement
    if (e.key === 'Enter') {
      e.preventDefault()
      const {value, selectionStart, name} = target as HTMLTextAreaElement
      const newValue =
        selectionStart === 0
          ? '- ' + value.substring(0, selectionStart) + '\n' + value.substring(selectionStart)
          : value.substring(0, selectionStart) + '\n- ' + value.substring(selectionStart)
      setFieldValue(name, newValue)
    }
  }

  const handleAddTask = (obj: TaskType) => {
    setLoading(true)
    addTask(obj)
      .then((res) => {
        setLoading(false)
        setState(!state)
        onClose()
        if(res.data.code === SUCCESS_RESPONSE){
          toast.success(intl.formatMessage({id: 'TOAST.CREATE.SUCCESS'}))
        }else{
          toast.error(res.data.message)
        }
      })
      .catch((err) => {
        setLoading(false)
        onClose()
        toast.error(intl.formatMessage({id: 'TOAST.CREATE.ERROR'}))
      })
  }

  const handleEditTask = (id: string | undefined, obj: TaskType) => {
    setLoading(true)
    editTask(id, obj).then((res) => {
      setLoading(false)
      setState(!state)
      onClose()
      if(res.data.code === SUCCESS_RESPONSE){
        toast.success(intl.formatMessage({id: 'TOAST.EDIT.SUCCESS'}))
      }else{
        toast.error(res.data.message)
      }
    })
    .catch((err) => {
      setLoading(false)
      onClose()
      toast.error(intl.formatMessage({id: 'TOAST.EDIT.ERROR'}))
    })
  }

  const totalHours = (data: TaskType): number => {
    let total = 0;
    data?.tasks?.forEach((item) => {
      let officeHour = parseFloat(String(item.officeHour));
      let overtimeHour = item.overtimeHour ? parseFloat(String(item.overtimeHour)) : 0;
      total += officeHour + overtimeHour;
    });
    return total;
  }

  const totalOfficeHours = (data: TaskType): number => {
    let total = 0
    data?.tasks?.forEach((item) => {
      let officeHour = parseFloat(String(item.officeHour))
      total += officeHour
    })
    return total
  }

  const isSunday = (): boolean => {
    let date = data?.dateWorking
    if(moment(date).day() === 0){
      return true
    }else{
      return false
    }
  }

  const handleFormSubmit = (values: any) => {
    let submitObject = {
      dateWorking: moment(currentDate).format('yyyy-MM-DD'),
      dayOff: dayOff,
      tasks: !dayOff ? [...values.tasks] : null,
    }
    if(totalHours(submitObject) > 24){
      toast.warning(intl.formatMessage({id: 'TASK.TOTALHOURS.MAX'}))
    }
    else if(totalOfficeHours(submitObject) > 8){
      toast.warning(intl.formatMessage({id: 'TASK.OFFICEHOURS.MAX'}) + ' 8' )
    }
    else{
      isAddNew 
        ? handleAddTask(submitObject) 
        : handleEditTask(data?.id, submitObject)
    }
  }

  let initialValues: FormValues = {
    tasks: data?.tasks ? [...data?.tasks] : [{...INIT_TASK}],
  }

  const validationSchema = Yup.object({
    tasks: Yup.array().of(
      Yup.object().shape({
        project: Yup.object({
          id: !dayOff
            ? Yup.string().required(intl.formatMessage({id: 'VALIDATE.REQUIRED'}))
            : Yup.string().notRequired(),
        }),
        officeHour: !dayOff
          ? Yup.number()
              .max(8, intl.formatMessage({id: 'VALIDATE.HOUR.MAXIMUM.IS'}) + ' 8')
              .min(
                0,
                intl.formatMessage({id: 'TASK.OFFICEHOURS'}) +
                  ' ' +
                  intl.formatMessage({id: 'VALIDATE.NUMBER.POSITIVE'})
              )
              .notRequired()
          : Yup.number().notRequired(),
        overtimeHour: !dayOff
          ? Yup.number()
              .min(
                0,
                intl.formatMessage({id: 'TASK.OVERTIME'}) +
                  ' ' +
                  intl.formatMessage({id: 'VALIDATE.NUMBER.POSITIVE'})
              )
              .notRequired()
          : Yup.number().notRequired(),
        taskOffice: !dayOff
          ? Yup.string()
              .max(255, intl.formatMessage({id: 'VALIDATION.MAX255'}))
              .when('officeHour', {
                is: (val: number) => val && val > 0,
                then: Yup.string().required(intl.formatMessage({id: 'VALIDATE.REQUIRED'})),
                otherwise: Yup.string().notRequired(),
              })
          : Yup.string()
              .notRequired()
              .max(255, intl.formatMessage({id: 'VALIDATION.MAX255'})),
        taskOverTime: !dayOff 
          ? Yup.string()
              .max(255, intl.formatMessage({id: 'VALIDATION.MAX255'}))
              .when('overtimeHour', {
                is: (val: number) => val && val > 0,
                then: Yup.string().required(intl.formatMessage({id: 'VALIDATE.REQUIRED'})),
                otherwise: Yup.string().notRequired()
              })
          : Yup.string().notRequired()
      })
    ),
  })

  useEffect(() => {
    if(!dayOff){
      const initialSelectedIds = data?.tasks?.map((task: any) => task.project.id) ?? [];
      setSelectedIds(initialSelectedIds.filter(item => item !== undefined));
    }
  }, [dayOff]);

  return (
    <>
      {loading && (
        <div className='loading-full-screen'>
          <Spinner animation='border' variant='primary' className='spinner-lg' />
        </div>
      )}
      <Modal size='lg' show={show} animation centered>
        <Formik<FormValues>
          initialValues={initialValues}
          validationSchema={validationSchema}
          validateOnChange={true}
          validate={(values) => {
            const errors: FormikErrors<FormValues> = {}
            return errors
          }}
          onSubmit={(values) => {
            handleFormSubmit(values)
          }}
        >
          {({setFieldValue, values, errors, handleSubmit}) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Modal.Header className='py-4'>
                <Modal.Title className='text-pri'>
                  {intl.formatMessage({id: 'TASK.INFORMATION.FILL'})}
                </Modal.Title>
                <button className='btn-close' onClick={() => onClose()}></button>
              </Modal.Header>
              <Modal.Body className={!dayOff ? 'pb-0' : ''}>
                <Row>
                  <Col xs={3}></Col>
                  <Col xs={6}>
                    <div className='d-flex justify-content-center gap-2'>
                      <b>{intl.formatMessage({id: 'TASK.DATE'})}</b>
                      <b className='text-pri'>{moment(currentDate).format('DD/MM/yyyy')}</b>
                    </div>
                  </Col>
                  <Col xs={3}>
                    <div className='d-flex justify-content-end'>
                      <div className='form-check form-switch'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          id='flexCheckDefault'
                          checked={dayOff}
                          onChange={() => setDayOff(!dayOff)}
                        />
                        <label className='form-check-label' htmlFor='flexCheckDefault'>
                          {intl.formatMessage({id: 'TASK.DAYOFF'})}
                        </label>
                      </div>
                    </div>
                  </Col>
                </Row>
                {!dayOff && (
                  <FieldArray name='tasks'>
                    {({form, push, remove}) => {
                      return (
                        <>
                          {form.values?.tasks?.map((task: any, index: number) => {
                            return (
                              <Row key={index}>
                                <div className='card card-custom p-0 mt-5'>
                                  <div className='card-header bg-secondary px-4 mx-4 card__header'>
                                    <h3 className='card-title'>
                                      {intl.formatMessage({id: 'MENU.CATEGORY.PROJECT'}) +
                                        ' ' +
                                        (index + 1)}
                                    </h3>
                                    <div className='card-toolbar'>
                                      <ButtonToolbar>
                                        <OverlayTrigger
                                          placement='right'
                                          overlay={
                                            <Tooltip id='tooltip'>
                                              <b>
                                                {intl.formatMessage({id: 'BTN.DELETE'}) +
                                                  ' ' +
                                                  intl
                                                    .formatMessage({id: 'MENU.CATEGORY.PROJECT'})
                                                    .toLowerCase()}
                                              </b>
                                            </Tooltip>
                                          }
                                        >
                                          <button
                                            type='button'
                                            className='btn-close'
                                            onClick={() => remove(index)}
                                          ></button>
                                        </OverlayTrigger>
                                      </ButtonToolbar>
                                    </div>
                                  </div>
                                  <div className='card-body pb-0 pt-4'>
                                    <Row>
                                      <Col xs={6}>
                                        <div className='mb-5'>
                                          <label className='form-label'>
                                            <span className='text-danger'> * </span>
                                            {intl.formatMessage({id: 'MENU.CATEGORY.PROJECT'})}
                                          </label>
                                          <Form.Select
                                            name={`tasks[${index}].project.id`}
                                            id={`tasks[${index}].project.id`}
                                            className='form-control'
                                            value={task.project.id}
                                            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                                              setFieldValue(e.target.name, e.target.value);
                                              handleSelect(e, index)
                                            }}
                                          >
                                            <option value={''} hidden>
                                              {intl.formatMessage({id: 'CATEGORY.PROJECT.SELECT'})}
                                            </option>
                                            {projectList
                                              ?.filter((project: ProjectType) => 
                                                project?.id !== undefined && 
                                                (!selectedIds.includes(project.id) || project.id === task.project.id))
                                              ?.map((item: ProjectType, index) => {
                                                return (
                                                  <option key={index} value={item.id}>
                                                    {item.code}
                                                  </option>
                                                )
                                              })}
                                          </Form.Select>
                                          <div className='text-danger'>
                                            <ErrorMessage name={`tasks[${index}].project.id`} />
                                          </div>
                                        </div>
                                      </Col>
                                      <Col xs={3}>
                                        <div className='mb-5'>
                                          <label className='form-label'>
                                            {intl.formatMessage({id: 'TASK.OFFICEHOURS'})}
                                          </label>
                                          <Field
                                            type='number'
                                            name={`tasks[${index}].officeHour`}
                                            id={`tasks[${index}].officeHour`}
                                            className='form-control'
                                            min={0}
                                            value={task?.officeHour}
                                            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                                              setFieldValue(e.target.name, Number(e.target.value))
                                            }}
                                            onBlur={(e: React.ChangeEvent<HTMLSelectElement>) => {
                                              if(task?.officeHour !== 0){
                                                setFieldValue(e.target.name, Number(e.target.value).toFixed(2))
                                              }
                                            }}
                                            disabled={isSunday()}
                                          />
                                          <div className='text-danger'>
                                            <ErrorMessage name={`tasks[${index}].officeHour`} />
                                          </div>
                                        </div>
                                      </Col>
                                      <Col xs={3}>
                                        <div className='mb-5'>
                                          <label className='form-label'>
                                            {intl.formatMessage({id: 'TASK.OVERTIME'})}
                                          </label>
                                          <Field
                                            type='number'
                                            name={`tasks[${index}].overtimeHour`}
                                            id={`tasks[${index}].overtimeHour`}
                                            className='form-control'
                                            value={task?.overtimeHour}
                                            min={0}
                                            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                                              setFieldValue(e.target.name, Number(e.target.value))
                                            }}
                                            onBlur={(e: React.ChangeEvent<HTMLSelectElement>) => {
                                              if(task?.overtimeHour !== 0){
                                                setFieldValue(e.target.name, Number(e.target.value).toFixed(2))
                                              }
                                            }}
                                          />
                                          <div className='text-danger'>
                                            <ErrorMessage name={`tasks[${index}].overtimeHour`} />
                                          </div>
                                        </div>
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col xs={6}>
                                        <div className='mb-5'>
                                          <label className='form-label'>
                                            {task?.officeHour > 0 && <span className='text-danger'> * </span>}
                                            {intl.formatMessage({id: 'TASK.OFFICEHOURS.TASKS'})}
                                          </label>
                                          <Field
                                            as='textarea'
                                            rows={3}
                                            name={`tasks[${index}].taskOffice`}
                                            id={`tasks[${index}].taskOffice`}
                                            className='form-control resize-none'
                                            value={task?.taskOffice}
                                            onChange={(
                                              e: React.ChangeEvent<HTMLTextAreaElement>
                                            ) => {
                                              handleChangeTextArea(e, index, {
                                                values,
                                                setFieldValue,
                                              })
                                              setFieldValue(e.target.name, e.target.value)
                                            }}
                                            onKeyDown={(e: KeyboardEvent<HTMLTextAreaElement>) => {
                                              handleEnterPress(e, index, {values, setFieldValue})
                                            }}
                                            disabled={isSunday()}
                                            placeholder={intl.formatMessage({id: 'TASK.SUMMARY'})}
                                          />
                                          <div className='text-danger'>
                                            <ErrorMessage name={`tasks[${index}].taskOffice`} />
                                          </div>
                                        </div>
                                      </Col>
                                      <Col xs={6}>
                                        <div className='mb-5'>
                                          <label className='form-label'>
                                            {task?.overtimeHour > 0 && <span className='text-danger'> * </span>}
                                            {intl.formatMessage({id: 'TASK.OVERTIME.TASKS'})}
                                          </label>
                                          <Field
                                            as='textarea'
                                            rows={3}
                                            name={`tasks[${index}].taskOverTime`}
                                            id={`tasks[${index}].taskOverTime`}
                                            className='form-control resize-none'
                                            value={task?.taskOverTime}
                                            onChange={(
                                              e: React.ChangeEvent<HTMLTextAreaElement>
                                            ) => {
                                              handleChangeTextArea(e, index, {
                                                values,
                                                setFieldValue,
                                              })
                                              setFieldValue(e.target.name, e.target.value)
                                            }}
                                            onKeyDown={(e: KeyboardEvent<HTMLTextAreaElement>) =>
                                              handleEnterPress(e, index, {values, setFieldValue})
                                            }
                                            placeholder={intl.formatMessage({id: 'TASK.SUMMARY'})}
                                          />
                                          <div className='text-danger'>
                                            <ErrorMessage name={`tasks[${index}].taskOverTime`} />
                                          </div>
                                        </div>
                                      </Col>
                                    </Row>
                                  </div>
                                </div>
                              </Row>
                            )
                          })}
                          <div className='d-flex justify-content-center mb-5'>
                            <ButtonToolbar>
                              <OverlayTrigger
                                placement='right'
                                overlay={
                                  <Tooltip id='tooltip'>
                                    <b>
                                      {intl.formatMessage({id: 'BTN.ADD'}) +
                                        ' ' +
                                        intl
                                          .formatMessage({id: 'MENU.CATEGORY.PROJECT'})
                                          .toLowerCase()}
                                    </b>
                                  </Tooltip>
                                }
                              >
                                <Button
                                  className='btn btn-outline btn-outline-primary btn-active-light-primary'
                                  onClick={() => push(INIT_TASK)}
                                >
                                  <i className='fa-solid fa-plus fs-4 p-0'></i>
                                </Button>
                              </OverlayTrigger>
                            </ButtonToolbar>
                          </div>
                        </>
                      )
                    }}
                  </FieldArray>
                )}
              </Modal.Body>
              <Modal.Footer className='justify-content-center py-2'>
                <Button className='bg-pri' type='submit'>
                  {intl.formatMessage({id: 'BTN.SAVE'})}
                </Button>
                <Button variant='secondary' onClick={() => onClose()}>
                  {intl.formatMessage({id: 'BTN.CANCEL'})}
                </Button>
              </Modal.Footer>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  )
}

export {TasksForEmployeeRolesDialog}
