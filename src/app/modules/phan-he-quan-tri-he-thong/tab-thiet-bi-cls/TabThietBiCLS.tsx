import {useState} from "react"
import {Button, Col, Container, Row} from "react-bootstrap"
import {Column} from "react-table"
import CustomIconButton from "../../component/custom-icon-button/CustomIconButton"
import DialogConfirmDelete from "../../component/dialog-confirm-delete/DialogConfirmDelete"
import {IThietBiCLS} from "../models/ModelThietBiCLS"
import DanhMucThietBiCLSDialog from "../modals/modal-thiet-bi-cls/ModalThietBiCLS"
import {TablePagination} from "../../component/table/components/TablePagination"
import {handlePagesChange, handleRowsPerPageChange, rowsForPage} from "../../utils/PageUtils"
import { TableCustomHeader } from "../../component/table/components/TableCustomHeader"
import { TableCustomCell } from "../../component/table/components/TableCustomCell"
import { TableCustom } from "../../component/table/table-custom/TableCustom"

type Props = {}

const DanhMucThietBiCLSTab = (props: Props) => {
  const [danhSachThietBiCLS, setDanhSachThietBiCLS] = useState<IThietBiCLS[]>([])
  const [shouldOpenDMTBCLSDialog, setShouldOpenDMTBCLSDialog] = useState(false)
  const [shouldOpenConfirmDeleteDialog, setShouldOpenConfirmDeleteDialog] = useState(false)
  const [pageIndex, setPageIndex] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(10)
  const [totalElements, setTotalElements] = useState<number>(10)
  const [totalPages, setTotalPages] = useState<number>(10)

  const handleOpenDialogSubmit = () => {
    setShouldOpenDMTBCLSDialog(true)
  }

  const handleCloseDialog = () => {
    setShouldOpenDMTBCLSDialog(false)
  }

  const handleOpenDialogDelete = () => {
    setShouldOpenConfirmDeleteDialog(true)
  }

  const handleDeleteEquipment = () => {
  }

  const columnsTableEquipment: ReadonlyArray<Column<IThietBiCLS>> = [
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"STT"}
          className="col-1 text-center text-white px-3"
        />
      ),
      id: "STT",
      Cell: ({...props}: any) => (
        <TableCustomCell
          className="text-center"
          data={((props.row.pageIndex - 1) * pageSize + (+props.row.id + 1)).toString()}
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
              <CustomIconButton variant="edit" onClick={() => {}}>
                <i className="bi bi-pencil-square text-navy"></i>
              </CustomIconButton>

              <CustomIconButton variant="delete" onClick={handleOpenDialogDelete}>
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
          title={"Tên thiết bị"}
          className="col-1 text-center text-white px-3"
        />
      ),
      id: "Tên thiết bị",
      Cell: ({...props}) => <TableCustomCell data={props.data[props.row.index].name} />,
    },

    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Mã thiết bị"}
          className="col-1 text-center text-white px-3"
        />
      ),
      id: "Mã thiết bị",
      Cell: ({...props}) => <TableCustomCell data={props.data[props.row.index].code} />,
    },

    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Loại thiết bị"}
          className="col-1 text-center text-white px-3"
        />
      ),
      id: "Loại thiết bị",
      Cell: ({...props}) => <TableCustomCell data={props.data[props.row.index].type} />,
    },

    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Vị trí"}
          className="col-1 text-center text-white px-3"
        />
      ),
      id: "Vị trí",
      Cell: ({...props}) => <TableCustomCell data={props.data[props.row.index].location} />,
    },
  ]

  return (
    <Container fluid className="p-5 border bg-white">
      <Row>
        <Col>
          <Button className="btn-navy min-w-50px" onClick={handleOpenDialogSubmit}>
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
            data={danhSachThietBiCLS}
            columns={columnsTableEquipment}
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

      {shouldOpenDMTBCLSDialog && (
        <DanhMucThietBiCLSDialog
          handleOnCloseDialog={handleCloseDialog}
          listEquipment={danhSachThietBiCLS}
          setListEquipment={setDanhSachThietBiCLS}
        />
      )}

      {shouldOpenConfirmDeleteDialog && (
        <DialogConfirmDelete
          dialogDelete={shouldOpenConfirmDeleteDialog}
          setDialogDelete={setShouldOpenConfirmDeleteDialog}
          handleDelete={handleDeleteEquipment}
        />
      )}
    </Container>
  )
}

export default DanhMucThietBiCLSTab
