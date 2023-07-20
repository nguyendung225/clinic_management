import {FC, useEffect, useState} from 'react'
import {useIntl} from 'react-intl'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Field, Form, Formik, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {User, Gender,UsersDialogProps } from '../models/UserModels'
import {LIST_GENDER, LIST_ROLE, SUCCESS_RESPONSE} from '../const/UserConst'
import {addUser, updateUser} from '../services/userService'
import {toast} from 'react-toastify'
import Select from 'react-select'
import '../../component/style.scss'
const UsersDialog: FC<UsersDialogProps> = (props) => {
  const intl = useIntl()
  const initialValidationSchema = Yup.object({
    username: Yup.string()
      .required(intl.formatMessage({id: 'VALIDATION.REQUIRE'}))
      .matches(/^[a-zA-Z0-9_-]{6,255}$/, intl.formatMessage({id: 'VALIDATE.USER.USERNAME.ERR'})),
    gender: Yup.mixed<Gender>()
      .oneOf([1, 2, 3])
      .required(intl.formatMessage({id: 'VALIDATE.USER.GENDER'})),
    email: Yup.string()
      .email(intl.formatMessage({id: 'EMAIL.ERR'}))
      .required(intl.formatMessage({id: 'VALIDATION.REQUIRE'})),
    roles: Yup.array()
      .min(1, intl.formatMessage({id: 'VALIDATE.ROLE.ATLEAST.ONE'}))
      .required(),
  })
  const updatedValidationSchema = initialValidationSchema.concat(
    Yup.object({
      password: Yup.string()
        .min(6, intl.formatMessage({id: 'VALIDATE.MIN6'}))
        .required(intl.formatMessage({id: 'VALIDATE.REQUIRED'}))
        .max(255, intl.formatMessage({id: 'VALIDATION.MAX255'})),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], intl.formatMessage({id: 'VALIDATE.PASSWORD.SAME'}))
        .required(intl.formatMessage({id: 'VALIDATE.REQUIRED'})),
    })
  )
  const {shouldOpenUsersDialog, handleCloseUserDialog, user, setUser} = props
  const [isEdit, setIsEdit] = useState(user.id ? true : false)
  const [isChangePass, setIsChangePass] = useState(user.id ? true : true)

  const [validationSchema, setValidationSchema] = useState(updatedValidationSchema)
  const [roles, setRoles] = useState<any[]>(
    user.roles ? user.roles.map((item) => LIST_ROLE.find((role) => item === role.value)) : []
  )
  const InitialValues: User = {
    displayName: user.displayName ? user.displayName : '',
    username: user.username ? user.username : '',
    gender: user.gender ? user.gender : 1,
    email: user.email ? user.email : '',
    roles: user.roles ? user.roles : [],
    password: user.password ? user.password : '',
    confirmPassword: user.confirmPassword ? user.confirmPassword : '',
    active: true,
    justCreated: true,
    accountNonLocked: true,
    accountNonExpired: true,
    credentialsNonExpired: true,
  }
  const handleChangePass = () => {
    setIsChangePass(!isChangePass)
    if (isChangePass === false) {
      setIsChangePass(true)
    } else if (isChangePass === true) {
      setIsChangePass(false)
    }
  }
  const processUserResponse = (status: number, kindOfResponse: string) => {
    if (status === SUCCESS_RESPONSE) {
      toast.success(intl.formatMessage({id: `TOAST.${kindOfResponse}.SUCCESS`}))
      handleCloseUserDialog()
    } else {
      toast.error(intl.formatMessage({id: `TOAST.${kindOfResponse}.FALSE`}))
    }
  }

  return (
    <>
      <Modal show={shouldOpenUsersDialog} onHide={handleCloseUserDialog} centered size='lg'>
        <Formik
          initialValues={InitialValues}
          validationSchema={validationSchema}
          validateOnChange={true}
          onSubmit={(values) => {
            if (user.id) {
              if (isChangePass === true) {
                updateUser(user, user.id)
                  .then((response) => {
                    processUserResponse(response.status, 'EDIT')
                  })
                  .catch((err) => toast.error(err))
              } else if (isChangePass === false) {
                const {password, confirmPassword, ...updatedUserNotChangePassword} = user
                if (updatedUserNotChangePassword.id) {
                  updateUser(updatedUserNotChangePassword, updatedUserNotChangePassword.id)
                    .then((response) => {
                      processUserResponse(response.status, 'EDIT')
                    })
                    .catch((err) => toast.error(err))
                }
              }
            } else {
              addUser(user)
                .then((response) => {
                  processUserResponse(response.status, 'ADD')
                })
                .catch((err) => toast.error(err))
            }
          }}
        >
          {({values, setFieldValue}) => (
            <Form>
              <Modal.Header closeButton>
                <Modal.Title className='text-pri '>
                  {!isEdit
                    ? intl.formatMessage({id: 'USER.DIALOG.TITLE.ADD'})
                    : intl.formatMessage({id: 'USER.DIALOG.TITLE.EDIT'})}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Container>
                  <Row className='mb-4'>
                    <Col>
                      <label className='form-label' htmlFor='username'>
                        {intl.formatMessage({id: 'USER.USERNAME'})}
                      </label>
                      <span className='text-danger'>*</span>
                      <Field
                        className='form-control'
                        id='username'
                        name='username'
                        type='text'
                        disabled={isEdit}
                        value={values.username}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          setUser({...user, username: e.target.value})
                          setFieldValue('username', e.target.value)
                        }}
                      />
                      <ErrorMessage name='username'>
                        {(msg) => <div className='text-danger'>{msg}</div>}
                      </ErrorMessage>
                    </Col>
                    <Col>
                      <div>
                        <label className='form-label' htmlFor='gender'>
                          {intl.formatMessage({id: 'USER.GENDER'})}
                        </label>
                        <span className='text-danger'>*</span>
                        <Field
                          className='form-select form-control'
                          id='gender'
                          name='gender'
                          as='select'
                          value={values.gender}
                          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                            setUser({...user, gender: parseInt(e.target.value) as Gender})
                            setFieldValue('gender', parseInt(e.target.value) as Gender)
                          }}
                        >
                          {LIST_GENDER.map((gender) => (
                            <option key={gender.id} value={gender.id}>
                              {intl.formatMessage({id: gender.name})}
                            </option>
                          ))}
                        </Field>
                        <span className='arrow-down'></span>
                        <ErrorMessage name='gender'>
                          {(msg) => <div className='text-danger'>{msg}</div>}
                        </ErrorMessage>
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <label className='form-label' htmlFor='email'>
                        {intl.formatMessage({id: 'USER.EMAIL'})}
                      </label>
                      <span className='text-danger'>*</span>
                      <Field
                        className='form-control'
                        id='email'
                        name='email'
                        type='text'
                        value={values.email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          setUser({...user, email: e.target.value})
                          setFieldValue('email', e.target.value)
                        }}
                      />
                      <ErrorMessage name='email'>
                        {(msg) => <div className='text-danger'>{msg}</div>}
                      </ErrorMessage>
                    </Col>
                    <Col>
                      <label className='form-label' htmlFor='roles'>
                        {intl.formatMessage({id: 'USER.ROLE'})}
                      </label>
                      <span className='text-danger'>*</span>
                      <Select
                        defaultValue={roles}
                        isMulti
                        id='roles'
                        name='roles[]'
                        options={LIST_ROLE}
                        className='basic-multi-select mb-3'
                        classNamePrefix='select'
                        placeholder={intl.formatMessage({id: 'USER.ROLE.PLACEHOLDER'})}
                        onChange={(selectedOptions) => {
                          setUser({...user, roles: selectedOptions.map((option) => option.value)})
                          setFieldValue(
                            'roles',
                            selectedOptions.map((option) => option.value)
                          )
                        }}
                      />
                      <ErrorMessage name='roles'>
                        {(msg) => <div className='text-danger'>{msg}</div>}
                      </ErrorMessage>
                    </Col>
                  </Row>
                  <Row className='mb-4'>
                    {isEdit && (
                      <Col>
                        <div className='form-group row align-items-center'>
                          <div className='d-flex align-items-center gap-2 '>
                            <Field
                              className='form-check-input mt-5 mb-5 '
                              type='checkbox'
                              value=''
                              name='pass'
                              aria-label='Checkbox for following text input'
                              checked={isChangePass}
                              onChange={handleChangePass}
                            />
                            <label className='col col-form-label' htmlFor='pass'>
                              {isEdit
                                ? intl.formatMessage({id: 'USER.PASSWORD'})
                                : intl.formatMessage({id: 'USER.CHANGEPASSWORD'})}
                            </label>
                          </div>
                        </div>
                      </Col>
                    )}
                  </Row>
                  {isChangePass && (
                    <Row>
                      <Col>
                        <label className='form-label' htmlFor='password'>
                          {intl.formatMessage({id: 'USER.PASSWORD'})}
                        </label>
                        <span className='text-danger'>*</span>
                        <Field
                          className='form-control'
                          id='password'
                          name='password'
                          type='password'
                          autoComplete='off'
                          value={values.password}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setUser({...user, password: e.target.value})
                            setFieldValue('password', e.target.value)
                          }}
                        />
                        <ErrorMessage name='password'>
                          {(msg) => <div className='text-danger'>{msg}</div>}
                        </ErrorMessage>
                      </Col>
                      <Col>
                        <label className='form-label' htmlFor='confirmPassword'>
                          {intl.formatMessage({id: 'USER.CONFIRMPASSWORD'})}
                        </label>
                        <span className='text-danger'>*</span>
                        <Field
                          className='form-control'
                          id='confirmPassword'
                          name='confirmPassword'
                          autoComplete='off'
                          type='password'
                          value={values.confirmPassword}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setUser({...user, confirmPassword: e.target.value})
                            setFieldValue('confirmPassword', e.target.value)
                          }}
                        />
                        <ErrorMessage name='confirmPassword'>
                          {(msg) => <div className='text-danger'>{msg}</div>}
                        </ErrorMessage>
                      </Col>
                    </Row>
                  )}
                </Container>
              </Modal.Body>
              <Modal.Footer className='pt-2 pb-2'>
                <Button
                  variant='secondary'
                  onClick={handleCloseUserDialog}
                  className='btn btn-outline-primary'
                >
                  {intl.formatMessage({id: 'BTN.CANCEL'})}
                </Button>
                <button type='submit' className='btn bg-pri'>
                  {!isEdit
                    ? intl.formatMessage({id: 'BTN.SAVE'})
                    : intl.formatMessage({id: 'BTN.EDIT'})}
                </button>
              </Modal.Footer>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  )
}
export {UsersDialog}
