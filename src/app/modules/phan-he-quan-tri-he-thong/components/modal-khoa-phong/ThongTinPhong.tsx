import {Button, Col, Form, Row} from "react-bootstrap"
import {IDepartment, IPriceType, IRoom, IRowData} from "../../models/ModelKhoaPhong"
import {Column} from "react-table"
import CustomIconButton from "../../../component/custom-icon-button/CustomIconButton"
import {useEffect, useState} from "react"
import DialogConfirmDelete from "../../../component/dialog-confirm-delete/DialogConfirmDelete"
import {addRoom, deleteRoom, getPriceType, updateRoom} from "../../services/TabKhoaPhongServices"
import {toast} from "react-toastify"
import {CODE_SUCCESS, ERROR_MESSAGE} from "../../../utils/Constant"
import {useFormik} from "formik"
import * as Yup from "yup"
import {MESSAGE_SUCCESS} from "../../constants/TabKhoaPhongConst"
import AutocompleteField from "../../../component/AutocompleteField"
import { TableCustom } from "../../../component/table/table-custom/TableCustom"
import { TableCustomHeader } from "../../../component/table/components/TableCustomHeader"
import { TableCustomCell } from "../../../component/table/components/TableCustomCell"

type Props = {
  formikDepartment: IDepartment
  listRoom: IRoom[]
  setListRoom: React.Dispatch<React.SetStateAction<IRoom[]>>
  reloadData: boolean
  setReloadData: React.Dispatch<React.SetStateAction<boolean>>
}

const ThongTinPhong = ({
  listRoom,
  setListRoom,
  reloadData,
  setReloadData,
  formikDepartment,
}: Props) => {
  const [shouldOpenConfirmDeleteDialog, setShouldOpenConfirmDeleteDialog] = useState(false)
  const [rowData, setRowData] = useState<Partial<IRowData>>({})
  const [listPriceType, setListPriceType] = useState<IPriceType[]>([])

  useEffect(() => {
    handleGetPriceType()
  }, [])

  const handleGetPriceType = async () => {
    const result = await getPriceType()
    setListPriceType(result?.data?.data?.content)
  }

  const formik = useFormik<IRoom>({
    initialValues: {
      name: "",
      code: "",
      tenantId: 0,
      departmentId: formikDepartment.id || "",
      index: undefined,
      priceType: null,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Vui lòng nhập tên phòng").max(36, "Nhập tối đa 36 ký tự"),
      code: Yup.string().required("Vui lòng nhập mã phòng").max(36, "Nhập tối đa 36 ký tự"),
      priceType: Yup.object().nullable().required("Vui lòng chọn loại giá"),
    }),
    onSubmit: (values) => {
      values.index !== undefined ? handleUpdateRoom(values) : handleAddRoom(values)
      delete values.index
    },
  })

  const handleAddRoom = async (values: IRoom) => {
    if (formikDepartment.id) {
      try {
        const result = await addRoom(values)
        if (result?.data?.code === CODE_SUCCESS) {
          toast.success(MESSAGE_SUCCESS.addRoom)
          setReloadData(!reloadData)
          formik.resetForm()
        } else {
          toast.error(ERROR_MESSAGE)
        }
      } catch (error) {
        toast.error(ERROR_MESSAGE)
      }
    } else {
      setListRoom([...listRoom, values])
      toast.success(MESSAGE_SUCCESS.addRoom)
    }
  }

  const handleUpdateRoom = async (values: IRoom) => {
    if (formikDepartment.id) {
      try {
        const result = await updateRoom(values)
        if (result?.data?.code === CODE_SUCCESS) {
          toast.success(MESSAGE_SUCCESS.updateRoom)
          setReloadData(!reloadData)
          formik.resetForm()
        } else {
          toast.error(ERROR_MESSAGE)
        }
      } catch (error) {
        toast.error(ERROR_MESSAGE)
      }
    } else {
      const newListRoom = listRoom
      const indexRoom = listRoom.findIndex((item, index) => index === values.index)
      newListRoom[indexRoom] = values
      setListRoom([...newListRoom])
      toast.success(MESSAGE_SUCCESS.updateRoom)
    }
  }

  const handleOpenDialogDelete = (rowData: IRowData) => {
    setShouldOpenConfirmDeleteDialog(true)
    setRowData(rowData)
  }

  const handleDeleteRoom = async () => {
    if (rowData?.original?.id) {
      try {
        const result = await deleteRoom(rowData?.original?.id)
        if (result?.data?.code === CODE_SUCCESS) {
          setShouldOpenConfirmDeleteDialog(false)
          setReloadData(!reloadData)
          toast.success(MESSAGE_SUCCESS.deleteRoom)
        }
      } catch (error) {
        toast.error(ERROR_MESSAGE)
      }
    } else {
      setListRoom(listRoom.filter((item, index) => index !== rowData.index))
      setShouldOpenConfirmDeleteDialog(false)
      toast.success(MESSAGE_SUCCESS.deleteRoom)
    }
    formik.resetForm()
  }

  const columnsTableRoom: ReadonlyArray<Column<IRoom>> = [
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
              <CustomIconButton
                variant="edit"
                onClick={() =>
                  formik.setValues({
                    ...props.row.original,
                    index: props.row.index,
                  })
                }
              >
                <i className="bi bi-pencil-square text-navy"></i>
              </CustomIconButton>

              <CustomIconButton variant="delete" onClick={() => handleOpenDialogDelete(props.row)}>
                <i className="bi bi-trash3-fill text-danger"></i>
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
      Cell: ({...props}) => <TableCustomCell data={props.data[props.row.index].name} />,
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Mã phòng"}
          className="col-1 text-center text-white px-3"
        />
      ),
      id: "Mã phòng",
      Cell: ({...props}) => (
        <TableCustomCell className="text-center" data={props.data[props.row.index].code} />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Loại giá"}
          className="col-1 text-center text-white px-3"
        />
      ),
      id: "Loại giá",
      Cell: ({...props}) => (
        <TableCustomCell
          className="text-center"
          data={listPriceType.map((item) => {
            if (item.id === props.row.original.priceType?.id) {
              return item.name
            }
          })}
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Giá"}
          className="col-1 text-center text-white px-3"
        />
      ),
      id: "Giá",
      Cell: ({...props}) => (
        <TableCustomCell
          className="text-center"
          data={listPriceType.map((item) => {
            if (item.id === props.row.original.priceType?.id) {
              return item?.attributeValues[0]?.value
            }
          })}
        />
      ),
    },
  ]

  return (
    <fieldset className="scheduler-border">
      <legend className="float-none scheduler-border">Thông tin phòng</legend>
      <Row className="mb-3">
        <Row className="mb-3">
          <Col>
            <Form.Label>Tên phòng</Form.Label>
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
            <Form.Label>Mã phòng</Form.Label>
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
            <Form.Label>Loại giá</Form.Label>
            <AutocompleteField
              name="priceType"
              value={formik.values.priceType}
              options={listPriceType}
              onChange={(e) => formik.setFieldValue("priceType", e)}
              errors={formik.errors.priceType}
              touched={formik.touched.priceType}
            />
          </Col>

          <Col>
            <Form.Label>Giá</Form.Label>
            <Form.Control
              type="text"
              size="sm"
              value={formik.values.priceType?.attributeValues?.[0]?.value || ""}
              readOnly
            />
          </Col>

          <Col className="d-flex justify-content-end align-items-end gap-2">
            <Button className="btn-navy min-w-50px" type="submit" onClick={() => formik.handleSubmit()}>
              Lưu
            </Button>
            <Button className="btn-navy-outlined">
              Hủy
            </Button>
          </Col>
        </Row>
      </Row>

      <Row className="mb-3">
        <TableCustom height="height-dialog" data={listRoom} columns={columnsTableRoom} />
      </Row>

      {shouldOpenConfirmDeleteDialog && (
        <DialogConfirmDelete
          dialogDelete={shouldOpenConfirmDeleteDialog}
          setDialogDelete={setShouldOpenConfirmDeleteDialog}
          handleDelete={handleDeleteRoom}
        />
      )}
    </fieldset>
  )
}

export default ThongTinPhong
