import {useEffect, useState} from "react"
import {Button, Col, Row} from "react-bootstrap"
import DanhMucNhanVienDialog from "../modals/modal-nhan-vien/DanhMucNhanVienDialog"
import {INhanVien} from "../models/ModelNhanVien"
import DialogConfirmDelete from "../../component/dialog-confirm-delete/DialogConfirmDelete"
import {NhanVienContext} from "../contexts/TabNhanVienContext"
import {deleteNhanVien, getDanhSachNhanVien} from "../services/TabNhanVienServices"
import {CODE_SUCCESS, ERROR_MESSAGE} from "../../utils/Constant"
import {toast} from "react-toastify"
import {DELETE_NHAN_VIEN_SUCCESS} from "../constants/TabNhanVienConstant"
import PhanCaDialog from "../modals/modal-nhan-vien/PhanCaDialog"
import { TablePagination } from "../../component/table/components/TablePagination"
import { handlePagesChange, handleRowsPerPageChange, rowsForPage } from "../../utils/PageUtils"
import { IParamsSearchNhanVien } from "../../models/params"
import { Column } from "react-table"
import { TableCustomHeader } from "../../component/table/components/TableCustomHeader"
import { TableCustomCell } from "../../component/table/components/TableCustomCell"
import { DanhMucNhanVienTableAction } from "./TabNhanVienTableAction"
import moment from "moment"
import { TableCustom } from "../../component/table/table-custom/TableCustom"

type Props = {}

const DanhMucNhanVienTab = (props: Props) => {
  const [pageIndex, setPageIndex] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [totalElements, setTotalElements] = useState<number>(10);
  const [totalPages, setTotalPages] = useState<number>(10);

  const [dataNhanVien, setDataNhanVien] = useState<INhanVien>()
  const [listDataNhanVien, setListDataNhanVien] = useState<INhanVien[]>([])
  const [shouldOpenDMNVDialog, setShouldOpenDMNVDialog] = useState<boolean>(false)
  const [shouldOpenPhanCaDialog, setShouldOpenPhanCaDialog] = useState<boolean>(false)
  const [shouldOpenConfirmDeleteDialog, setShouldOpenConfirmDeleteDialog] = useState<boolean>(false)
  const [shouldUpdateTableData, setShouldUpdateTableData] = useState<boolean>(false)

  const handleOpenDMNVDialog = (data?: any): void => {
    if (data?.id) {
      setDataNhanVien(data)
    } else {
      setDataNhanVien(undefined)
    }
    setShouldOpenDMNVDialog(true)
  }

  const handleOpenPhanCaDialog = () => {
    setShouldOpenPhanCaDialog(true)
  }

  const handleCloseDMNVDialog = (): void => {
    setShouldOpenDMNVDialog(false)
  }

  const handleOpenConfirmDeleteDialog = (data: INhanVien): void => {
    setDataNhanVien(data)
    setShouldOpenConfirmDeleteDialog(true)
  }

  const handleCloseConfirmDeleteDialog = (): void => {
    setShouldOpenConfirmDeleteDialog(false)
  }

  const handleDeleteNhanVien = async () => {
    try {
      const response = await deleteNhanVien(dataNhanVien as INhanVien);
      if (response?.data?.code === CODE_SUCCESS) {
        handleUpdateTableData()
        handleCloseConfirmDeleteDialog()
        toast.success(DELETE_NHAN_VIEN_SUCCESS)
      } else {
        toast.error(ERROR_MESSAGE)
      }
    } catch (e) {
      toast.error(ERROR_MESSAGE)
    }
  }

  const handleGetDanhSachNhanVien = async (params: IParamsSearchNhanVien) => {
    try {
      const response = await getDanhSachNhanVien(params)
      if (response?.data?.code === CODE_SUCCESS) {
        setTotalElements(response.data.data.totalElements);
        setTotalPages(response.data.data.totalPages);
        setListDataNhanVien(response.data.data.content);
      } else {
        toast.error(ERROR_MESSAGE)
      }
    } catch (e) {
      toast.error(ERROR_MESSAGE)
    }
  }

  const handleUpdateTableData = (): void => {
    setShouldUpdateTableData(!shouldUpdateTableData)
  }

  const handleClosePhanCaDialog = () => {
    setShouldOpenPhanCaDialog(false)
  }

  useEffect(() => {
    handleGetDanhSachNhanVien({
      pageIndex,
      pageSize
    })
  }, [pageIndex, pageSize, shouldUpdateTableData])

  const columns: ReadonlyArray<Column<INhanVien>> = [
    {
        Header: (props) => (
            <TableCustomHeader
                tableProps={props}
                title={"STT"}
                className='col-1 text-center text-white px-3 min-w-50px'
            />
        ),
        id: 'STT',
        Cell: ({ ...props } : any) => <TableCustomCell className="text-center" data={Number((pageIndex - 1) * pageSize + props?.row?.index + 1)} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader
                tableProps={props}
                title={"Thao tác"}
                className='col-1 text-center text-white px-3 min-w-100px'
            />
        ),
        id: 'action',
        Cell: ({ ...props }) => <TableCustomCell
            className="d-flex justify-content-center"
            data={
                <DanhMucNhanVienTableAction data={props?.row?.original??props?.row?.original}/>
            } />,
    },
    {
        Header: (props) => (
            <TableCustomHeader
                tableProps={props}
                title={"Mã nhân viên"}
                className='col-1 text-center text-white px-3 min-w-150px'
            />
        ),
        id: 'mnv',
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={props.row.original.code || ""} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader
                tableProps={props}
                title={"Họ và tên"}
                className='col-1 text-center text-white px-3 min-w-250px'
            />
        ),
        id: 'hovaten',
        Cell: ({ ...props }) => <TableCustomCell data={props.row.original.person?.name || ""} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader
                tableProps={props}
                title={"Ngày sinh"}
                className='col-1 text-center text-white px-3 min-w-150px'
            />
        ),
        id: 'ngaysinh',
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={props.row.original.person?.birthDay ? moment(props.row.original.person?.birthDay).format("DD/MM/YYYY") : ""} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader
                tableProps={props}
                title={"Chức danh"}
                className='col-1 text-center text-white px-3 min-w-200px'
            />
        ),
        id: 'chucDanh',
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={props.row.original.title?.name || ""} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader
                tableProps={props}
                title={"Chức vụ"}
                className='col-1 text-center text-white px-3 min-w-200px'
            />
        ),
        id: 'chucVu',
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={props.row.original.position?.name || ""} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader
                tableProps={props}
                title={"Học hàm"}
                className='col-1 text-center text-white px-3 min-w-200px'
            />
        ),
        id: 'academicLevel',
        Cell: ({ ...props }) => <TableCustomCell data={props.row.original.academicLevel || ""} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader
                tableProps={props}
                title={"Học vị"}
                className='col-1 text-center text-white px-3 min-w-200px'
            />
        ),
        id: 'academicDegree',
        Cell: ({ ...props }) => <TableCustomCell data={props.row.original.academicDegree || ""} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader
                tableProps={props}
                title={"Bằng cấp"}
                className='col-1 text-center text-white px-3 min-w-200px'
            />
        ),
        id: 'educationalQualification',
        Cell: ({ ...props }) => <TableCustomCell data={props.row.original.educationalQualification || ""} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader
                tableProps={props}
                title={"Chứng chỉ"}
                className='col-1 text-center text-white px-3 min-w-200px'
            />
        ),
        id: 'certification',
        Cell: ({ ...props }) => <TableCustomCell data={props.row.original.certification || ""} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader
                tableProps={props}
                title={"Khoa"}
                className='col-1 text-center text-white px-3 min-w-200px'
            />
        ),
        id: 'department',
        Cell: ({ ...props }) => <TableCustomCell data={props.row.original.department?.name || ""} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader
                tableProps={props}
                title={"Phòng"}
                className='col-1 text-center text-white px-3 min-w-200px'
            />
        ),
        id: 'room',
        Cell: ({ ...props }) => <TableCustomCell data={props.row.original.room?.name || ""} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader
                tableProps={props}
                title={"Số năm công tác"}
                className='col-1 text-center text-white px-3 min-w-150px'
            />
        ),
        id: 'totalWorkingYears',
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={props.row.original.totalWorkingYears.toString() || ""} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader
                tableProps={props}
                title={"Trạng thái"}
                className='col-1 text-center text-white px-3 min-w-150px'
            />
        ),
        id: 'status',
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={props.row.original.status?.name || ""} />,
    },
]
  
  return (
    <NhanVienContext.Provider value={{ handleOpenDMNVDialog, handleOpenConfirmDeleteDialog}}>
      <div className="p-5 border bg-white min-h-550px">
        <Button className="btn-navy min-w-50px" variant="primary" onClick={() => handleOpenDMNVDialog()}>
          Thêm mới
        </Button>

        <Row>
          <Col>
            <TableCustom<INhanVien>
              verticalScroll
              data={listDataNhanVien}
              columns={columns}
              pageIndex={pageIndex}
              pageSize={pageSize}
              height="height-55vh"
              hasToolbar
            />

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

        <Row className="mt-4">
          <Col className="d-flex justify-content-center">
            <Button className="btn-navy min-w-50px" onClick={handleOpenPhanCaDialog}>
              Phân ca
            </Button>
          </Col>
        </Row>

        {shouldOpenDMNVDialog && (
          <DanhMucNhanVienDialog
            data={dataNhanVien as INhanVien}
            handleClose={handleCloseDMNVDialog}
            shouldUpdateTableData={handleUpdateTableData}
          />
        )}
        {shouldOpenConfirmDeleteDialog && (
          <DialogConfirmDelete
            dialogDelete={shouldOpenConfirmDeleteDialog}
            setDialogDelete={setShouldOpenConfirmDeleteDialog}
            handleDelete={() => handleDeleteNhanVien()}
          />
        )}

        {shouldOpenPhanCaDialog && (
          <PhanCaDialog handleClosePhanCaDialog={handleClosePhanCaDialog} />
        )}
      </div>
    </NhanVienContext.Provider>
  )
}

export default DanhMucNhanVienTab
