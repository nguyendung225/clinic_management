import React, {useState} from "react"
import {Button, Col, Container, Form, Modal, Row} from "react-bootstrap"
import DialogConfirmDelete from "../../../component/dialog-confirm-delete/DialogConfirmDelete"
import CustomIconButton from "../../../component/custom-icon-button/CustomIconButton"
import {Column} from "react-table"
import {IPhanCa} from "../../models/ModelNhanVien"
import {useFormik} from "formik"
import * as Yup from "yup"
import { TableCustom } from "../../../component/table/table-custom/TableCustom"
import { TableCustomHeader } from "../../../component/table/components/TableCustomHeader"
import { TableCustomCell } from "../../../component/table/components/TableCustomCell"

type Props = {
  handleClosePhanCaDialog: () => void
}

const PhanCaDialog = (props: Props) => {
  const {handleClosePhanCaDialog} = props
  const [shouldOpenConfirmDeleteDialog, setShouldOpenConfirmDeleteDialog] = useState(false)

  const formik = useFormik({
    initialValues: {
      room: "",
      fromTime: "",
      toTime: "",
      doctor: "",
      nursing: "",
    },
    validationSchema: Yup.object({
      room: Yup.string().required("Vui lòng nhập đầy đủ thông tin"),
      fromTime: Yup.string().required("Vui lòng nhập đầy đủ thông tin"),
      toTime: Yup.string().required("Vui lòng nhập đầy đủ thông tin"),
      doctor: Yup.string().required("Vui lòng nhập đầy đủ thông tin"),
      nursing: Yup.string().required("Vui lòng nhập đầy đủ thông tin"),
    }),
    onSubmit: (values) => {
    },
  })

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const handleOpenDialogDelete = () => {}

  const handleDeletePhanCa = () => {
  }

  const columnsTablePhanCa: ReadonlyArray<Column<IPhanCa>> = [
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"STT"}
          className="col-1 text-center text-white px-3"
        />
      ),
      id: "STT",
      Cell: ({...props}) => (
        <TableCustomCell className="text-center" data={(props.row.index + 1).toString()} />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Thao tác"}
          className="col-1 text-center text-white px-3"
        />
      ),
      id: "Thao tác",
      Cell: ({...props}) => (
        <TableCustomCell
          className="d-flex justify-content-center"
          data={
            <>
              <CustomIconButton variant="delete" onClick={() => handleOpenDialogDelete()}>
                <i className="bi bi-trash-fill"></i>
              </CustomIconButton>

              <CustomIconButton variant="edit" onClick={() => {}}>
                <i className="bi bi-pen-fill"></i>
              </CustomIconButton>
            </>
          }
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Tên phòng"}
          className="col-1 text-center text-white px-3"
        />
      ),
      id: "Tên phòng",
      Cell: ({...props}) => <TableCustomCell data={props.data[props.row.index].room} />,
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Thời gian từ"}
          className="col-1 text-center text-white px-3"
        />
      ),
      id: "Thời gian từ",
      Cell: ({...props}) => <TableCustomCell data={props.data[props.row.index].fromTime} />,
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Thời gian đến"}
          className="col-1 text-center text-white px-3"
        />
      ),
      id: "Thời gian đến",
      Cell: ({...props}) => <TableCustomCell data={props.data[props.row.index].toTime} />,
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Bác sĩ"}
          className="col-1 text-center text-white px-3"
        />
      ),
      id: "Bác sĩ",
      Cell: ({...props}) => <TableCustomCell data={props.data[props.row.index].doctor} />,
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Điều dưỡng"}
          className="col-1 text-center text-white px-3"
        />
      ),
      id: "Điều dưỡng",
      Cell: ({...props}) => <TableCustomCell data={props.data[props.row.index].nursing} />,
    },
  ]

  return (
    <Modal show={true} centered onHide={handleClosePhanCaDialog} size="lg">
      <Modal.Header className="py-5 header-modal" closeButton>
        <Modal.Title>Thông tin phân ca</Modal.Title>
      </Modal.Header>

      <Form onSubmit={handleOnSubmit}>
        <Modal.Body className="py-4">
          <Container className="scheduler-border">
            <Row className="mb-3">
              <Row className="mb-3">
                <Col>
                  <Form.Label>Tên phòng</Form.Label>
                  <Form.Select
                    value={formik.values.room}
                    onChange={formik.handleChange}
                    name="room"
                    size="sm"
                    isInvalid={Boolean(formik.touched.room && formik.errors.room)}
                  >
                    <option value=""> </option>
                    <option value="1">Phòng 1</option>
                    <option value="2">Phòng 2</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">{formik.errors.room}</Form.Control.Feedback>
                </Col>

                <Col>
                  <Form.Label>Thời gian từ</Form.Label>
                  <Form.Control
                    name="fromTime"
                    type="date"
                    size="sm"
                    isInvalid={Boolean(formik.touched.fromTime && formik.errors.fromTime)}
                    value={formik.values.fromTime}
                    onChange={formik.handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.fromTime}
                  </Form.Control.Feedback>
                </Col>

                <Col>
                  <Form.Label>Thời gian đến</Form.Label>
                  <Form.Control
                    name="toTime"
                    type="date"
                    size="sm"
                    isInvalid={Boolean(formik.touched.toTime && formik.errors.toTime)}
                    value={formik.values.toTime}
                    onChange={formik.handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.toTime}
                  </Form.Control.Feedback>
                </Col>
              </Row>

              <Row>
                <Col md={4} xs={4} lg={4} xl={4}>
                  <Form.Label>Bác sĩ</Form.Label>
                  <Form.Select
                    value={formik.values.doctor}
                    onChange={formik.handleChange}
                    name="doctor"
                    size="sm"
                    isInvalid={Boolean(formik.touched.doctor && formik.errors.doctor)}
                  >
                    <option value=""> </option>
                    <option value="1">Bác sĩ Chung</option>
                    <option value="2">Bác sĩ Huy</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.doctor}
                  </Form.Control.Feedback>
                </Col>

                <Col md={4} xs={4} lg={4} xl={4}>
                  <Form.Label>Điều dưỡng</Form.Label>
                  <Form.Select
                    value={formik.values.nursing}
                    onChange={formik.handleChange}
                    name="nursing"
                    size="sm"
                    isInvalid={Boolean(formik.touched.nursing && formik.errors.nursing)}
                  >
                    <option value=""> </option>
                    <option value="1">Điều dưỡng Chung</option>
                    <option value="2">Điều dưỡng Huy</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.nursing}
                  </Form.Control.Feedback>
                </Col>

                <Col md xs lg xl className="d-flex justify-content-end align-items-end gap-1">
                  <Button className="btn-navy min-w-50px" type="submit" onClick={() => formik.handleSubmit()}>
                    Lưu
                  </Button>
                  <Button className="btn-navy-outlined" onClick={handleClosePhanCaDialog}>
                     Hủy
                  </Button>
                </Col>
              </Row>
            </Row>

            <Row className="mb-3">
              <TableCustom height="height-dialog" data={[]} columns={columnsTablePhanCa} />
            </Row>

            {shouldOpenConfirmDeleteDialog && (
              <DialogConfirmDelete
                dialogDelete={shouldOpenConfirmDeleteDialog}
                setDialogDelete={setShouldOpenConfirmDeleteDialog}
                handleDelete={handleDeletePhanCa}
              />
            )}
          </Container>
        </Modal.Body>

        <Modal.Footer className="flex flex-middle flex-center py-1">
          <Button className="btn-navy min-w-50px" type="submit">
            Lưu
          </Button>
          <Button className="btn-navy-outlined" onClick={handleClosePhanCaDialog}>
            Đóng
          </Button>
      </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default PhanCaDialog
