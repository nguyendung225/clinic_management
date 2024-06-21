import {Button, Col, Form, Modal, Row} from "react-bootstrap"
import {IThietBiCLS} from "../../models/ModelThietBiCLS"
import {useFormik} from "formik"
import * as Yup from "yup"

type Props = {
  listEquipment: IThietBiCLS[]
  setListEquipment: React.Dispatch<React.SetStateAction<IThietBiCLS[]>>
  handleOnCloseDialog: () => void
}

const DanhMucThietBiCLSDialog = (props: Props) => {
  const {handleOnCloseDialog, setListEquipment, listEquipment} = props

  const formik = useFormik({
    initialValues: {
      id: "",
      name: "",
      code: "",
      type: "",
      location: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Vui lòng nhập tên"),
      code: Yup.string().required("Vui lòng nhập mã"),
      type: Yup.string().required("Vui lòng chọn loại"),
      location: Yup.string().required("Vui lòng nhập vị trí"),
    }),
    onSubmit: (values) => {
      setListEquipment([...listEquipment, values])
      handleOnCloseDialog()
      formik.resetForm()
    },
  })

  return (
    <Modal centered show={true} dialogClassName="modal-90w" size="lg" onHide={handleOnCloseDialog}>
      <Modal.Header className="py-5 header-modal" closeButton>
        <Modal.Title>
          <h2 className="text-white">Thông tin thiết bị</h2>
        </Modal.Title>
      </Modal.Header>

      <Form onSubmit={formik.handleSubmit}>
        <Modal.Body className="py-4">
          <Row className="mb-4">
            <Col>
              <Form.Label>Loại thiết bị</Form.Label>
              <Form.Select
                name="type"
                size="sm"
                value={formik.values.type}
                onChange={formik.handleChange}
                isInvalid={Boolean(formik.touched.type && formik.errors.type)}
              >
                <option value=""> </option>
                <option value="1">Xét nghiệm</option>
                <option value="2">Chẩn đoán hình ảnh</option>
                <option value="3">Thăm dò chức năng</option>
                <option value="4">Phẫu thuật thủ thuật</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">{formik.errors.type}</Form.Control.Feedback>
            </Col>

            <Col>
              <Form.Label>Tên thiết bị</Form.Label>
              <Form.Control
                name="name"
                type="text"
                size="sm"
                value={formik.values.name}
                onChange={formik.handleChange}
                isInvalid={Boolean(formik.touched.name && formik.errors.name)}
              />
              <Form.Control.Feedback type="invalid">{formik.errors.name}</Form.Control.Feedback>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label>Mã thiết bị</Form.Label>
              <Form.Control
                name="code"
                type="text"
                size="sm"
                value={formik.values.code}
                onChange={formik.handleChange}
                isInvalid={Boolean(formik.touched.code && formik.errors.code)}
              />
              <Form.Control.Feedback type="invalid">{formik.errors.code}</Form.Control.Feedback>
            </Col>

            <Col>
              <Form.Label>Vị trí</Form.Label>
              <Form.Control
                name="location"
                type="text"
                size="sm"
                value={formik.values.location}
                onChange={formik.handleChange}
                isInvalid={Boolean(formik.touched.location && formik.errors.location)}
              />
              <Form.Control.Feedback type="invalid">{formik.errors.location}</Form.Control.Feedback>
            </Col>
          </Row>
        </Modal.Body>

        <Modal.Footer className="d-flex justify-content-center py-2">
          <Button className="btn-navy min-w-50px" type="submit">
              Lưu
          </Button>
          <Button className="btn-navy-outlined" onClick={handleOnCloseDialog}>
              Đóng
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default DanhMucThietBiCLSDialog
