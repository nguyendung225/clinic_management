import React from 'react'
import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap'
import { IGiuongBenh } from '../../models/ModelGiuongBenh'
import { useFormik } from 'formik'
import * as Yup from "yup";

type Props = {
    data?: IGiuongBenh
    handleClose: () => void
}

const initialValues: IGiuongBenh = {
    department: {
        id: ""
    },
    room: {
        id: ""
    },
    maGiuong: "",
    tenGiuong: "",
    giaGiuong: "100.000đ",
    namGhepToiDa: 0
}

const validationSchema = Yup.object({
    department: Yup.object({
        id: Yup.string().required("Trường này là bắt buộc"),
    }),
    room: Yup.object({
        id: Yup.string().required("Trường này là bắt buộc"),
    }),
    maGiuong: Yup.string().required("Trường này là bắt buộc"),
    tenGiuong: Yup.string().required("Trường này là bắt buộc"),
    namGhepToiDa: Yup.number().required("Trường này là bắt buộc"),
})

const DanhMucGiuongBenhDialog = ({
    handleClose,
    data
}: Props) => {

    const formik = useFormik({
        initialValues: data ? data : initialValues,
        validationSchema,
        onSubmit: (values) => {
            console.log(values);
            
        }
    })

  return (
      <Container>
          <Modal
              show={true}
              onHide={handleClose}
              size='lg'
              className='dialog__container'
              centered
          >
              <Modal.Header closeButton className='header-modal'>
                  <Modal.Title>
                      <h2 className='text-white'>Thông tin giường bệnh</h2>
                  </Modal.Title>
              </Modal.Header>
              <Modal.Body className='dialog__content'>
                  <Form onSubmit={formik.handleSubmit}>
                      <Row className="mb-5">
                          <Col>
                              <Form.Group>
                                  <Form.Label>Khoa</Form.Label>
                                  <Form.Select size='sm' aria-label="Default select example"
                                      name="department.id"
                                      value={formik.values.department?.id as string}
                                      onChange={formik.handleChange}
                                      isInvalid={formik.touched.department?.id && Boolean(formik.errors.department?.id)}
                                  >
                                      <option value="" className="disable-option"></option>
                                      <option value="1">Khoa khám bệnh</option>
                                      <option value="2">Khoa cấp cứu</option>
                                      <option value="3">Khoa điều dưỡng</option>
                                      {/* {
                                          danhSachKhoa.map((item) => {
                                              return <option key={item.id} value={item.id}>{item.name}</option>
                                          })
                                      } */}
                                  </Form.Select>
                                  <Form.Control.Feedback type="invalid">{formik.errors.department?.id}</Form.Control.Feedback>
                              </Form.Group>
                          </Col>
                          <Col>
                              <Form.Group>
                                  <Form.Label>Phòng</Form.Label>
                                  <Form.Select size='sm' aria-label="Default select example"
                                      name="room.id"
                                      value={formik.values.room?.id as string}
                                      onChange={formik.handleChange}
                                      isInvalid={formik.touched.room?.id && Boolean(formik.errors.room?.id)}
                                  >
                                      <option value="" className="disable-option"></option>
                                      <option value="1">Phòng khám bệnh</option>
                                      <option value="2">Phòng mổ</option>
                                      {/* {
                                          formik.values.department && danhSachPhong && danhSachPhong.map((item) => {
                                              return <option key={item.id} value={item.id}>{item.name}</option>
                                          })
                                      } */}
                                  </Form.Select>
                                  <Form.Control.Feedback type="invalid">{formik.errors.room?.id}</Form.Control.Feedback>
                              </Form.Group>
                          </Col>
                      </Row>
                   
                      <Row className='mb-5'>
                          <Col>
                              <Form.Group>
                                  <Form.Label>Mã giường</Form.Label>
                                  <Form.Control size='sm' type="text"
                                      name="maGiuong"
                                      value={formik.values.maGiuong}
                                      onChange={formik.handleChange}
                                      isInvalid={formik.touched.maGiuong && Boolean(formik.errors.maGiuong)}
                                  />
                                  <Form.Control.Feedback type="invalid">
                                      {formik.errors.maGiuong}
                                  </Form.Control.Feedback>
                              </Form.Group>
                          </Col>
                          <Col>
                              <Form.Group >
                                  <Form.Label>Tên giường</Form.Label>
                                  <Form.Control
                                      size='sm' type="text"
                                      name="tenGiuong"
                                      value={formik.values.tenGiuong}
                                      onChange={formik.handleChange}
                                      isInvalid={formik.touched.tenGiuong && Boolean(formik.errors.tenGiuong)}
                                  />
                                  <Form.Control.Feedback type="invalid">
                                      {formik.errors.tenGiuong}
                                  </Form.Control.Feedback>
                              </Form.Group>
                          </Col>
                      </Row>

                      <Row className='mb-5'>
                          <Col>
                              <Form.Group>
                                  <Form.Label>Số lượng nằm ghép tối đa</Form.Label>
                                  <Form.Control size='sm' type="number"
                                      name="namGhepToiDa"
                                    value={formik.values.namGhepToiDa}
                                    onChange={formik.handleChange}
                                    isInvalid={formik.touched.namGhepToiDa && Boolean(formik.errors.namGhepToiDa)}
                                  />
                                  <Form.Control.Feedback type="invalid">
                                      {formik.errors.namGhepToiDa}
                                  </Form.Control.Feedback>
                              </Form.Group>
                          </Col>
                          <Col>
                              <Form.Group >
                                  <Form.Label>Giá giường</Form.Label>
                                  <Form.Control
                                      size='sm' type="text"
                                      defaultValue={formik.values.giaGiuong}
                                      readOnly
                                    //   name="password"
                                    // value={formik.values.password}
                                    // onChange={formik.handleChange}
                                    // isInvalid={formik.touched.password && Boolean(formik.errors.password)}
                                  />
                                  <Form.Control.Feedback type="invalid">
                                      {/* {formik.errors.password} */}
                                  </Form.Control.Feedback>
                              </Form.Group>
                          </Col>
                      </Row>
                  </Form>
              </Modal.Body>
              <Modal.Footer className="d-flex justify-content-center p-5">
                  <Button className="btn-navy min-w-50px" onClick={() => formik.handleSubmit()} type="submit">
                        Lưu
                    </Button>
                    <Button className="btn-navy-outlined" onClick={handleClose}>
                        Đóng
                    </Button>
              </Modal.Footer>
          </Modal>
      </Container>
  )
}

export default DanhMucGiuongBenhDialog