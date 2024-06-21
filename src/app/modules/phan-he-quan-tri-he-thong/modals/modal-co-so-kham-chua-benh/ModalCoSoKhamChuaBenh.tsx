import {FC, useEffect} from "react"
import {Button, Form, Modal} from "react-bootstrap"
import * as Yup from "yup"
import {useIntl} from "react-intl"
import {ErrorMessage, Field, Formik} from "formik"
import { CSKhamChuaBenh } from "../../models/ModelSoKhamChuaBenh"
import { INITIAL_VALUE } from "../../constants/TabCoSoKhamChuaBenhConstant"

interface Props {
  show: boolean
  handleClose: () => void
  data: CSKhamChuaBenh
  state?: any
  setState?: any
}

const DanhMucCSKCBDialog: FC<Props> = (props) => {
  const {show, handleClose, data, state, setState} = props
  const isAddNew = data === INITIAL_VALUE 
  const intl = useIntl()

  const initialValues: CSKhamChuaBenh = isAddNew ? {...INITIAL_VALUE} : {...data}

  const validationSchema = Yup.object({
    maCoSo: Yup.string()
      .required(intl.formatMessage({id: "VALIDATE.REQUIRED"}))
      .max(255, intl.formatMessage({id: "VALIDATE.CHARACTER.MAX"})),
    tenCoSo: Yup.string()
      .required(intl.formatMessage({id: "VALIDATE.REQUIRED"}))
      .max(255, intl.formatMessage({id: "VALIDATE.CHARACTER.MAX"})),
    tuyen: Yup.string()
      .required(intl.formatMessage({id: "VALIDATE.REQUIRED"}))
      .max(255, intl.formatMessage({id: "VALIDATE.CHARACTER.MAX"})),
  })

  const handleFormSubmit = (values: CSKhamChuaBenh) => {
  }

  useEffect(() => {
  }, []);

  return (
    <Modal show={show} centered animation>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnChange={true}
        onSubmit={(values) => handleFormSubmit(values)}
      >
        {({setFieldValue, values, errors, handleSubmit}) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Modal.Header className="py-2 header-modal">
              <Modal.Title className="text-pri">{isAddNew ? "Thêm mới" : "Cập nhật"}</Modal.Title>
              <button className="btn-close" onClick={() => handleClose()}></button>
            </Modal.Header>
            <Modal.Body>
              <div className="mb-3">
                <label className="form-label">
                  <span className="text-danger"> * </span>
                  Mã cơ sở
                </label>
                <Field
                  type="text"
                  name="maCoSo"
                  id="maCoSo"
                  className="form-control form-control-sm"
                  value={values?.maCoSo}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    setFieldValue(e.target.name, e.target.value)
                  }}
                  isInvalid={!!errors.maCoSo}
                />
                <div className="text-danger fs-7 mt-1">
                  <ErrorMessage name="maCoSo" />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">
                  <span className="text-danger"> * </span>
                  Tên cơ sở
                </label>
                <Field
                  type="text"
                  name="tenCoSo"
                  id="tenCoSo"
                  className="form-control form-control-sm"
                  value={values?.tenCoSo}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    setFieldValue(e.target.name, e.target.value)
                  }}
                  isInvalid={!!errors.tenCoSo}
                />
                <div className="text-danger fs-7 mt-1">
                  <ErrorMessage name="tenCoSo" />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">
                  <span className="text-danger"> * </span>
                  Tuyến
                </label>
                <Field
                  type="text"
                  name="tuyen"
                  id="tuyen"
                  className="form-control form-control-sm"
                  value={values?.tuyen}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    setFieldValue(e.target.name, e.target.value)
                  }}
                  isInvalid={!!errors.tuyen}
                />
                <div className="text-danger fs-7 mt-1">
                  <ErrorMessage name="tuyen" />
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center py-1">
              <Button className="btn-navy min-w-50px" type="submit">
                Lưu
              </Button>
              <Button className="btn-navy-outlined" onClick={handleClose}>
                Đóng
              </Button>
            </Modal.Footer>
          </Form>
        )}
      </Formik>
    </Modal>
  )
}

export default DanhMucCSKCBDialog
