import {useEffect, useState} from "react"
import {Button, Col, Container, Row} from "react-bootstrap"
import {Column} from "react-table"
import DanhMucKhoaPhongDialog from "../modals/modal-khoa-phong/DanhMucKhoaPhongDialog"
import {IDepartment} from "../models/ModelKhoaPhong"
import {
  deleteDepartment,
  getListDepartment,
} from "../services/TabKhoaPhongServices"
import {toast} from "react-toastify"
import {MESSAGE_SUCCESS} from "../constants/TabKhoaPhongConst"
import { CODE_SUCCESS, ERROR_MESSAGE } from "../../utils/Constant"
import { TableCustomHeader } from "../../component/table/components/TableCustomHeader"
import { TableCustomCell } from "../../component/table/components/TableCustomCell"
import CustomIconButton from "../../component/custom-icon-button/CustomIconButton"
import { TablePagination } from "../../component/table/components/TablePagination"
import { handlePagesChange, handleRowsPerPageChange, rowsForPage } from "../../utils/PageUtils"
import DialogConfirmDelete from "../../component/dialog-confirm-delete/DialogConfirmDelete"
import { TableCustom } from "../../component/table/table-custom/TableCustom"

type Props = {}

const DanhMucKhoaPhongTab = (props: Props) => {
  const [shouldOpenDMKPDialog, setShouldOpenDMKPDialog] = useState(false)
  const [shouldOpenConfirmDeleteDialog, setShouldOpenConfirmDeleteDialog] = useState(false)
  const [danhSachKhoa, setDanhSachKhoa] = useState<IDepartment[]>([])
  const [khoa, setKhoa] = useState<Partial<IDepartment>>({})
  const [idKhoa, setIdKhoa] = useState("")
  const [reloadData, setReloadData] = useState(false)
  const [pageIndex, setPageIndex] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(10)
  const [totalElements, setTotalElements] = useState<number>(10)
  const [totalPages, setTotalPages] = useState<number>(10)

  useEffect(() => {
    getDanhSachKhoa(pageIndex, pageSize)
  }, [reloadData, pageSize, pageIndex])

  const getDanhSachKhoa = async (page: number, rowPerPage: number) => {
    try {
      const result = await getListDepartment(page, rowPerPage)

      if (result?.data?.code === CODE_SUCCESS) {
        setDanhSachKhoa(result?.data?.data?.content)
        setTotalElements(result?.data?.data?.totalElements)
        setTotalPages(result?.data?.data?.totalPages)
      } else {
        toast.error(ERROR_MESSAGE)
      }
    } catch (error) {
      toast.error(ERROR_MESSAGE)
    }
  }

  const handleOpenDMKPDialog = () => {
    setShouldOpenDMKPDialog(true)
  }

  const handleUpdateDepartment = (data: IDepartment) => {
    setKhoa(data)
    setShouldOpenDMKPDialog(true)
  }

  const handleOpenConfirmDeleteDialog = (id: string) => {
    setShouldOpenConfirmDeleteDialog(true)
    setIdKhoa(id)
  }

  const handleDeleteDepartment = async () => {
    try {
      const result = await deleteDepartment(idKhoa)
      if (result?.data?.code === CODE_SUCCESS) {
        setReloadData(!reloadData)
        toast.success(MESSAGE_SUCCESS.deleteDepartment)
        setShouldOpenConfirmDeleteDialog(false)
      } else {
        toast.error(ERROR_MESSAGE)
      }
    } catch (error) {
      toast.error(ERROR_MESSAGE)
    }
  }

  const handleCloseDMKPDialog = () => {
    setReloadData(!reloadData)
    setKhoa({})
    setShouldOpenDMKPDialog(false)
  }

  const columnsTableDepartment: ReadonlyArray<Column<IDepartment>> = [
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"STT"}
          className="col-1 text-center text-white px-3 w-30px"
        />
      ),
      id: "STT",
      Cell: ({...props}: any) => (
        <TableCustomCell
          className="text-center"
          data={Number((pageIndex - 1) * pageSize + props?.row?.index + 1)}
        />
      ),
    },

    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Thao tác"}
          className="col-2 text-center text-white px-3"
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
                onClick={() => handleUpdateDepartment(props.row.original)}
              >
                <i className="bi bi-pencil-square text-navy"></i>
              </CustomIconButton>

              <CustomIconButton
                variant="delete"
                onClick={() => handleOpenConfirmDeleteDialog(props.row.original.id)}
              >
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
          title={"Tên khoa"}
          className="col-1 text-center text-white px-3 min-w-200px"
        />
      ),
      id: "Tên khoa",
      Cell: ({...props}) => <TableCustomCell data={props.data[props.row.index].name} />,
    },

    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Mã khoa"}
          className="col-1 text-center text-white px-3 min-w-100px"
        />
      ),
      id: "Mã khoa",
      Cell: ({...props}) => (
        <TableCustomCell className="text-center" data={props.data[props.row.index].code} />
      ),
    },

    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Vị trí khoa"}
          className="col-1 text-center text-white px-3 min-w-350px"
        />
      ),
      id: "Vị trí khoa",
      Cell: ({...props}) => (
        <TableCustomCell data={props.data[props.row.index].place} />
      ),
    },
  ]

  return (
    <Container fluid className="p-5 border bg-white">
      <Row>
        <Col>
          <Button className="btn-navy min-w-50px" onClick={handleOpenDMKPDialog}>
            Thêm mới
          </Button>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <TableCustom
            pageIndex={pageIndex}
            pageSize={pageSize}
            verticalScroll={true}
            data={danhSachKhoa}
            columns={columnsTableDepartment}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <TablePagination
            handlePagesChange={handlePagesChange}
            handleRowsPerPageChange={handleRowsPerPageChange}
            rowsPerPage={pageSize}
            rowsForPage={rowsForPage}
            page={pageIndex}
            setPage={setPageIndex}
            setRowsPerPage={setPageSize}
            totalPages={totalPages}
            totalElements={totalElements}
          />
        </Col>
      </Row>

      {shouldOpenDMKPDialog && (
        <DanhMucKhoaPhongDialog
          department={khoa as IDepartment}
          setDialog={setShouldOpenDMKPDialog}
          handleCloseDialog={handleCloseDMKPDialog}
        />
      )}

      {shouldOpenConfirmDeleteDialog && (
        <DialogConfirmDelete
          dialogDelete={shouldOpenConfirmDeleteDialog}
          setDialogDelete={setShouldOpenConfirmDeleteDialog}
          handleDelete={handleDeleteDepartment}
        />
      )}
    </Container>
  )
}

export default DanhMucKhoaPhongTab
