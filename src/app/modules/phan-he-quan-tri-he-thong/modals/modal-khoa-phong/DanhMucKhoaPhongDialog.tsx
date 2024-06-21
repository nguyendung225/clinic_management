import React, {useEffect, useState} from "react"
import {Button, Col, Form, Modal, Row} from "react-bootstrap"
import ThongTinPhong from "../../components/modal-khoa-phong/ThongTinPhong"
import {useFormik} from "formik"
import * as Yup from "yup"
import {IDepartment, IRoom} from "../../models/ModelKhoaPhong"
import {addDepartment, getListRoom, updateDepartment} from "../../services/TabKhoaPhongServices"
import {toast} from "react-toastify"
import {MESSAGE_SUCCESS} from "../../constants/TabKhoaPhongConst"
import { CODE_SUCCESS, ERROR_MESSAGE } from "../../../utils/Constant"

type Props = {
  department: IDepartment
  setDialog: React.Dispatch<React.SetStateAction<boolean>>
  handleCloseDialog: () => void
}

const DanhMucKhoaPhongDialog = (props: Props) => {
  const {department, handleCloseDialog} = props
  const [reloadData, setReloadData] = useState(false)
  const [danhSachPhong, setDanhSachPhong] = useState<IRoom[]>([])

  useEffect(() => {
    if (department?.id) {
      getDanhSachPhong(department?.id)
    }
  }, [reloadData, department?.id])

  const getDanhSachPhong = async (id: string) => {
    try {
      const result = await getListRoom(id)
      if (result?.data?.code === CODE_SUCCESS) {
        setDanhSachPhong(result?.data?.data?.content)
      } else {
        toast.error(ERROR_MESSAGE)
      }
    } catch (error) {
      toast.error(ERROR_MESSAGE)
    }
  }

  const formik = useFormik<IDepartment>({
    initialValues: {
      ...department,
      id: department.id || "",
      name: department.name || "",
      code: department.code || "",
      path: department.path || "",
      rooms: department.rooms || [],
      tenantId: 0,
      place: department.place || "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Vui lòng nhập tên khoa").max(36, "Nhập tối đa 36 ký tự"),
      code: Yup.string().required("Vui lòng nhập mã khoa").max(36, "Nhập tối đa 36 ký tự"),
      place: Yup.string().required("Vui lòng nhập vị trí khoa").max(150, "Nhập tối đa 150 ký tự"),
    }),
    onSubmit: (values) => {
      const data = {...values, rooms: danhSachPhong ? danhSachPhong : []}
      values?.id ? handleUpdateDepartment(data) : handleAddDepartment(data)
    },
  })

  const handleAddDepartment = async (data: IDepartment) => {
    try {
      const result = await addDepartment(data)
      if (result?.data?.code === CODE_SUCCESS) {
        handleCloseDialog()
        toast.success(MESSAGE_SUCCESS.addDepartment)
      } else {
        toast.error(ERROR_MESSAGE)
      }
    } catch (error) {
      toast.error(ERROR_MESSAGE)
    }
  }

  const handleUpdateDepartment = async (data: IDepartment) => {
    try {
      const result = await updateDepartment(data)
      if (result?.data?.code === CODE_SUCCESS) {
        handleCloseDialog()
        toast.success(MESSAGE_SUCCESS.updateDepartment)
      } else {
        toast.error(ERROR_MESSAGE)
      }
    } catch (error) {
      toast.error(ERROR_MESSAGE)
    }
  }

  return (
    <Modal centered show={true} scrollable size="lg" onHide={handleCloseDialog}>
      <Modal.Header className="py-5 header-modal" closeButton>
        <Modal.Title>
          <h2 className="text-white">Thông tin khoa/phòng</h2>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="py-4">
        <Form>
          <Row className="mb-3">
            <Col>
              <Form.Label>Tên khoa</Form.Label>
              <Form.Control
                name="name"
                type="text"
                size="sm"
                isInvalid={Boolean(formik.touched.name && formik.errors.name)}
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              <Form.Control.Feedback type="invalid">{formik.errors.name}</Form.Control.Feedback>
            </Col>

            <Col>
              <Form.Label>Mã khoa</Form.Label>
              <Form.Control
                name="code"
                type="text"
                size="sm"
                isInvalid={Boolean(formik.touched.code && formik.errors.code)}
                value={formik.values.code}
                onChange={formik.handleChange}
              />
              <Form.Control.Feedback type="invalid">{formik.errors.code}</Form.Control.Feedback>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label>Vị trí khoa</Form.Label>
              <Form.Control
                name="place"
                type="text"
                size="sm"
                isInvalid={Boolean(formik.touched.place && formik.errors.place)}
                value={formik.values.place}
                onChange={formik.handleChange}
              />
              <Form.Control.Feedback type="invalid">{formik.errors.place}</Form.Control.Feedback>
            </Col>
          </Row>

          <ThongTinPhong
            formikDepartment={formik.values}
            reloadData={reloadData}
            setReloadData={setReloadData}
            listRoom={danhSachPhong}
            setListRoom={setDanhSachPhong}
          />
        </Form>
      </Modal.Body>

      <Modal.Footer className="d-flex justify-content-center py-2 position-sticky fixed-bottom bg-white">
        <Button className="btn-navy min-w-50px" type="submit" onClick={() => formik.handleSubmit()}>
          Lưu
        </Button>
        <Button className="btn-navy-outlined" onClick={handleCloseDialog}>
          Đóng
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default DanhMucKhoaPhongDialog
