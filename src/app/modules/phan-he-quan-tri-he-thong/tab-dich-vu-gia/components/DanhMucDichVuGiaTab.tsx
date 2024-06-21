import {useEffect, useState} from "react"
import {Button, Col, Container, Row, Table} from "react-bootstrap"
import DanhMucDichVuGiaDialog from "./DanhMucDichVuGiaDialog"
import CollapseCustom from "./collapse-custom/CollapseCustom"
import "../DanhMucDichVuGia.scss"
import {getDanhSachLoaiDichVu, deleteDichVuGia} from "../../services/TabDichVuGiaServices"
import {IDichVu, ILoaiDichVu} from "../../models/ModelDichVuGia"
import {toast} from "react-toastify"
import {HEADER_TABLE_DMDVG, MESSAGE_SUCCESS} from "../../constants/TabDichVuGiaConstant"
import { useDebounce } from "../../../../../_metronic/helpers"
import { CODE_SUCCESS, ERROR_MESSAGE } from "../../../utils/Constant"
import InputSearch from "../../../component/table-input-search/InputSearch"
import DialogConfirmDelete from "../../../component/dialog-confirm-delete/DialogConfirmDelete"

type Props = {}

const DanhMucDichVuGiaTab = (props: Props) => {
  const [danhSachLoaiDichVu, setDanhSachLoaiDichVu] = useState<ILoaiDichVu[]>([])
  const [shouldOpenDMDVGDialog, setShouldOpenDMDVGDialog] = useState(false)
  const [shouldOpenConfirmDeleteDialog, setShouldOpenConfirmDeleteDialog] = useState(false)
  const [rowData, setRowData] = useState<Partial<IDichVu>>({})
  const [idDichVuKCB, setIdDichVuKCB] = useState<number>()
  const [reloadData, setReloadData] = useState(false)
  const [searchDichVuByName, setSearchDichVuByName] = useState("")
  const [searchDichVuByCode, setSearchDichVuByCode] = useState("")

  const debounceName = useDebounce(searchDichVuByName, 500)
  const debounceCode = useDebounce(searchDichVuByCode, 500)

  const getListTypeServices = async () => {
    try {
      const result = await getDanhSachLoaiDichVu()
      setDanhSachLoaiDichVu(result?.data?.data)
    } catch (error) {
      toast.error(ERROR_MESSAGE)
    }
  }

  useEffect(() => {
    getListTypeServices()
  }, [])

  const handleOpenDMDVGDialog = () => {
    setShouldOpenDMDVGDialog(true)
  }

  const handleDeleteDMDVG = async () => {
    try {
      const result = await deleteDichVuGia(idDichVuKCB)
      if (result?.data?.code === CODE_SUCCESS) {
        toast.success(MESSAGE_SUCCESS.deleteService)
        setShouldOpenConfirmDeleteDialog(false)
        setReloadData(!reloadData)
      } else {
        toast.error(ERROR_MESSAGE)
      }
    } catch (error) {
      toast.error(ERROR_MESSAGE)
    }
  }

  const handleCloseDMDVGDialog = () => {
    setShouldOpenDMDVGDialog(false)
    setReloadData(!reloadData)
    setRowData({})
  }

  const handleOpenDMDVGDeleteDialog = (data: IDichVu) => {
    setIdDichVuKCB(data?.id)
    setShouldOpenConfirmDeleteDialog(true)
  }

  const handleUpdateDMDVG = (data: IDichVu) => {
    setShouldOpenDMDVGDialog(true)
    setRowData(data)
  }

  return (
    <Container fluid className="p-5 border bg-white">
      <Row>
        <Col>
          <Button className="btn-navy min-w-50px" onClick={handleOpenDMDVGDialog}>
            Thêm mới
          </Button>
        </Col>
      </Row>

      <div className="over-flow mt-4 table-collapse-scroll">
        <Row className="collapse-header">
          <Col>
            <Table className="services-table mb-0">
              <thead className="services-table-header bg-pri">
                <tr className="services-table-header-list">
                  {HEADER_TABLE_DMDVG.map((item, index) => {
                    return (
                      <th key={index} className="services-table-header-item fs-8 fw-bold text-uppercase">
                        {item.value}
                      </th>
                    )
                  })}
                </tr>
              </thead>

              <tbody className="table-search">
                <tr>
                  <th></th>
                  <th>
                    <InputSearch handleSearch={setSearchDichVuByName} />
                  </th>
                  <th>
                    <InputSearch handleSearch={setSearchDichVuByCode} />
                  </th>
                  <th></th>
                  <th></th>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>

        <Row>
          <Col>
            {danhSachLoaiDichVu.map((item, index) => {
              return item?.id ? (
                <CollapseCustom
                  searchDVByCode={debounceCode || ""}
                  searchDVByName={debounceName || ""}
                  danhSachLoaiDichVu={danhSachLoaiDichVu}
                  reloadData={reloadData}
                  setReloadData={setReloadData}
                  key={index}
                  item={item}
                  index={index}
                  handleIconDelete={handleOpenDMDVGDeleteDialog}
                  handleIconUpdate={handleUpdateDMDVG}
                />
              ) : (
                <div className="d-flex justify-content-center data-empty">Không có bản ghi nào</div>
              )
            })}
          </Col>
        </Row>
      </div>

      {shouldOpenDMDVGDialog && (
        <DanhMucDichVuGiaDialog
          rowData={rowData}
          danhSachLoaiDichVu={danhSachLoaiDichVu}
          handleCloseDMDVGDialog={handleCloseDMDVGDialog}
        />
      )}

      {shouldOpenConfirmDeleteDialog && (
        <DialogConfirmDelete
          dialogDelete={shouldOpenConfirmDeleteDialog}
          setDialogDelete={setShouldOpenConfirmDeleteDialog}
          handleDelete={handleDeleteDMDVG}
        />
      )}
    </Container>
  )
}

export default DanhMucDichVuGiaTab
