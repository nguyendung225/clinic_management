import {Formik, Form, Field, ErrorMessage} from 'formik'
import {FC, useState, useEffect} from 'react'
import {Button, Modal, Spinner} from 'react-bootstrap'
import * as Yup from 'yup'
import {useIntl} from 'react-intl'
import {ProjectType} from '../models/ProjectModels'
import {addProject, editProject} from '../services/ProjectServices'
import {toast} from 'react-toastify'
import {INIT_PROJECT, PROJECT_STATUS} from '../const/ProjectConst'
import { SUCCESS_RESPONSE } from '../../users/const/UserConst'

interface Props {
  show: boolean
  handleClose: () => void
  data: ProjectType
  state?: any
  setState?: any
}

const ProjectsDialog: FC<Props> = (props) => {
  const {show, handleClose, data, state, setState} = props
  const intl = useIntl()
  const isAddNew = data !== INIT_PROJECT ? false : true
  const [project, setProject] = useState<ProjectType>({...INIT_PROJECT})
  const [loading, setLoading] = useState(false)

  const initialValues: ProjectType = {
    code: data.code ? data.code : '',
    name: data.name ? data.name : '',
    status: data.status ? data.status : '',
    description: data.description ? data.description : '',
  }

  const validationSchema = Yup.object({
    name: Yup.string()
      .required(intl.formatMessage({id: 'VALIDATE.REQUIRED'}))
      .max(
        255,
        intl.formatMessage({id: 'CATEGORY.PROJECT.NAME'}) +
          ' ' +
          intl.formatMessage({id: 'VALIDATE.CHARACTER.MAX'})
      ),
    status: Yup.string().required(intl.formatMessage({id: 'VALIDATE.REQUIRED'})),
    code: Yup.string()
      .required(intl.formatMessage({id: 'VALIDATE.REQUIRED'}))
      .max(
        255,
        intl.formatMessage({id: 'CATEGORY.PROJECT.CODE'}) +
          ' ' +
          intl.formatMessage({id: 'VALIDATE.CHARACTER.MAX'})
      ),
    description: Yup.string().max(
      255,
      intl.formatMessage({id: 'CATEGORY.PROJECT.DESCRIPTION'}) +
        ' ' +
        intl.formatMessage({id: 'VALIDATE.CHARACTER.MAX'})
    ),
  })

  useEffect(() => {
    if (!isAddNew) {
      setProject({...data})
    }
  }, [])

  const handleSubmit = () => {
    if (isAddNew) {
      handleAddItem()
    } else {
      handleEditItem()
    }
  }

  const handleAddItem = () => {
    setLoading(true)
    addProject(project)
      .then((res) => {
        setState(!state)
        setLoading(false)
        handleClose()
        if(res.data.code === SUCCESS_RESPONSE){
          toast.success(intl.formatMessage({id: 'TOAST.CREATE.SUCCESS'}))
        }else{
          toast.error(res.data.message)
        }
      })
      .catch((err) => {
        setLoading(false)
        handleClose()
        toast.error(intl.formatMessage({id: 'TOAST.CREATE.ERROR'}))
      })
  }

  const handleEditItem = () => {
    setLoading(true)
    editProject(project.id, project)
      .then((res) => {
        setState(!state)
        setLoading(false)
        handleClose()
        if(res.data.code === SUCCESS_RESPONSE){
          toast.success(intl.formatMessage({id: "TOAST.EDIT.SUCCESS"}))
        }else{
          toast.error(res.data.message)
        }
      })
      .catch((err) => {
        setLoading(false)
        handleClose()
        toast.error(intl.formatMessage({id: "TOAST.EDIT.ERROR"}))
      })
  }

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setProject({...project, [e?.target?.name]: e?.target?.value})
  }

  return (
    <>
      {loading && (
        <div className='loading-full-screen'>
          <Spinner animation='border' variant='primary' className='spinner-lg' />
        </div>
      )}
      <Modal show={show} centered animation>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          validateOnChange={true}
          onSubmit={() => handleSubmit()}
        >
          {({setFieldValue, values, errors}) => (
            <Form noValidate>
              <Modal.Header className='py-4'>
                <Modal.Title className='text-pri'>
                  {(isAddNew
                    ? intl.formatMessage({id: 'BTN.ADD'}) 
                    : intl.formatMessage({id: 'BTN.EDIT'})) +
                      ' ' +
                      intl.formatMessage({id: 'MENU.CATEGORY.PROJECT'}).toLowerCase()}
                </Modal.Title>
                <button className='btn-close' onClick={() => handleClose()}></button>
              </Modal.Header>
              <Modal.Body>
                <div className='mb-5'>
                  <label className='form-label'>
                    <span className='text-danger'> * </span>
                    {intl.formatMessage({id: 'CATEGORY.PROJECT.CODE'})}
                  </label>
                  <Field
                    type='text'
                    name='code'
                    id='code'
                    className='form-control'
                    value={project?.code}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                      handleChange(e)
                      setFieldValue(e.target.name, e.target.value)
                    }}
                    isInvalid={!!errors.code}
                  />
                  <div className='text-danger'>
                    <ErrorMessage name='code' />
                  </div>
                </div>
                <div className='mb-5'>
                  <label className='form-label'>
                    <span className='text-danger'> * </span>
                    {intl.formatMessage({id: 'CATEGORY.PROJECT.NAME'})}
                  </label>
                  <Field
                    type='text'
                    className='form-control'
                    name='name'
                    id='name'
                    value={project?.name}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                      handleChange(e)
                      setFieldValue(e.target.name, e.target.value)
                    }}
                    isInvalid={!!errors.name}
                  />
                  <div className='text-danger'>
                    <ErrorMessage name='name' />
                  </div>
                </div>
                <div className='mb-5'>
                  <label className='form-label'>
                    <span className='text-danger'> * </span>
                    {intl.formatMessage({id: 'CATEGORY.PROJECT.STATUS'})}
                  </label>
                  <Field
                    as='select'
                    id='status'
                    name='status'
                    className='form-control form-select'
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                      handleChange(e)
                      setFieldValue(e.target.name, e.target.value)
                    }}
                    value={project?.status}
                    isInvalid={!!errors.status}
                  >
                    <option value={""} selected hidden>
                      {intl.formatMessage({id: 'CATEGORY.PROJECT.STATUS.SELECT'})}
                    </option>
                    {PROJECT_STATUS.map((item, index) => {
                      return (
                        <option value={item.value} key={index}>{intl.formatMessage({id: item.title})}</option>
                      )
                    })}
                  </Field>
                  <div className='text-danger'>
                    <ErrorMessage name='status' />
                  </div>
                </div>
                <div className='mb-5'>
                  <label className='form-label'>
                    {intl.formatMessage({id: 'CATEGORY.PROJECT.DESCRIPTION'})}
                  </label>
                  <Field
                    as='textarea'
                    id='description'
                    name='description'
                    className='form-control resize-none'
                    rows={4}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                      handleChange(e)
                      setFieldValue(e.target.name, e.target.value)
                    }}
                    value={project?.description}
                    isInvalid={!!errors.description}
                  />
                  <div className='text-danger'>
                    <ErrorMessage name='description' />
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer className='d-flex justify-content-center py-2'>
                <Button className='bg-pri' type='submit'>
                  {intl.formatMessage({id: 'BTN.SAVE'})}
                </Button>
                <Button
                  variant='secondary'
                  onClick={() => handleClose()}
                >
                  {intl.formatMessage({id: 'BTN.CLOSE'})}
                </Button>
              </Modal.Footer>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  )
}

export {ProjectsDialog}
