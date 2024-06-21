import React, {useEffect, useState} from "react"
import {Col, Collapse, Row, Table} from "react-bootstrap"
import "./CollapseCustom.scss"
import CollapseCustomChildren from "./collapse-custom-children/CollapseCustomChildren"
import {deleteDichVuGia, getDsByIdLoaiDichVu} from "../../../services/TabDichVuGiaServices"
import {IDichVu, IDichVuItem, ILoaiDichVu} from "../../../models/ModelDichVuGia"
import {toast} from "react-toastify"
import DanhMucDichVuGiaDialog from "../DanhMucDichVuGiaDialog"
import {MESSAGE_SUCCESS} from "../../../constants/TabDichVuGiaConstant"
import { CODE_SUCCESS, ERROR_MESSAGE } from "../../../../utils/Constant"
import CustomIconButton from "../../../../component/custom-icon-button/CustomIconButton"
import DialogConfirmDelete from "../../../../component/dialog-confirm-delete/DialogConfirmDelete"

type Props = {
  item: ILoaiDichVu
  index: number
  handleIconDelete: (data: IDichVuItem) => void
  handleIconUpdate: (data: IDichVuItem) => void
  reloadData: boolean
  setReloadData: React.Dispatch<React.SetStateAction<boolean>>
  danhSachLoaiDichVu: ILoaiDichVu[]
  searchDVByName: string
  searchDVByCode: string
}
const CollapseCustom = (props: Props) => {
  const {
    item,
    index,
    handleIconDelete,
    handleIconUpdate,
    reloadData,
    setReloadData,
    danhSachLoaiDichVu,
    searchDVByName,
    searchDVByCode,
  } = props
  const [openCollapse, setOpenCollapse] = useState<Number[]>([])
  const [listDichVuChildren, setListDichVuChildren] = useState<IDichVuItem[]>([])
  const [idDichVu, setIdDichVu] = useState<any>()
  const [shouldOpenConfirmDeleteDialog, setShouldOpenConfirmDeleteDialog] = useState<boolean>(false)
  const [shouldOpenDMDVGDialog, setShouldOpenDMDVGDialog] = useState(false)
  const [rowData, setRowData] = useState<Partial<IDichVu>>({})
  const [idServiceType, setIdServiceType] = useState<number>()

  const getListByIdTypeService = async (id: number | string, name: string, code: string) => {
    try {
      const result = await getDsByIdLoaiDichVu(id, name, code)
      setListDichVuChildren(result?.data?.data)
    } catch (error) {
      toast.error(ERROR_MESSAGE)
    }
  }

  useEffect(() => {
    if (idServiceType) {
      getListByIdTypeService(idServiceType, searchDVByName, searchDVByCode)
    }
  }, [idServiceType, reloadData, searchDVByName, searchDVByCode])

  const handleClickCollapse = (index: number) => {
    if (openCollapse.includes(index)) {
      const newOpen = openCollapse.filter((num) => num !== index)
      setOpenCollapse(newOpen)
    } else {
      const newOpen = [...openCollapse]
      newOpen.push(index)
      setOpenCollapse(newOpen)
    }
    setIdServiceType(item?.id)
  }

  const handleOpenDMDVGDeleteDialog = (data: IDichVu) => {
    setIdDichVu(data?.id)
    setShouldOpenConfirmDeleteDialog(true)
  }

  const handleDeleteDMDVG = async () => {
    try {
      const result = await deleteDichVuGia(idDichVu)
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

  const handleUpdateDMDVG = (data: IDichVu) => {
    setShouldOpenDMDVGDialog(true)
    setRowData(data)
  }

  const handleCloseDMDVGDialog = () => {
    setShouldOpenDMDVGDialog(false)
    setReloadData(!reloadData)
    setRowData({})
  }

  return (
    <div>
      <div
        onClick={() => handleClickCollapse(index)}
        className="collapse-custom d-flex align-items-center position-relative"
      >
        <h6 className="mb-0 ms-4">{item?.name}</h6>
        <span className="collapse-icon">
          {openCollapse.includes(index) ? (
            <i className="fa-solid fa-angle-down"></i>
          ) : (
            <i className="fa-solid fa-angle-up"></i>
          )}
        </span>
      </div>

      <Collapse in={openCollapse.includes(index)}>
        <Row>
          <Col className="collapse-body">
            <Table className="table-collapse" id="example-collapse-text">
              <tbody className="table-collapse-body">
                {listDichVuChildren.length > 0 ? (
                  listDichVuChildren?.map((item: IDichVuItem, index) => {
                    return !item?.services ? (
                      <tr key={index} className="table-collapse-list">
                        <td className="table-collapse-item">
                          <Row>
                            <Col className="d-flex justify-content-center">
                              <CustomIconButton
                                variant="edit"
                                onClick={() => handleIconUpdate(item)}
                              >
                                <i className="bi bi-pencil-square text-navy"></i>
                              </CustomIconButton>

                              <CustomIconButton
                                variant="delete"
                                onClick={() => handleIconDelete(item)}
                              >
                                <i className="bi bi-trash3-fill text-danger"></i>
                              </CustomIconButton>
                            </Col>
                          </Row>
                        </td>
                        <td className="table-collapse-item">{item?.conceptAnswerName}</td>
                        <td className="table-collapse-item">{item?.serviceCode}</td>
                        <td className="table-collapse-item">{item?.servicePrice}</td>
                        <td className="table-collapse-item">{item?.insurancePrice}</td>
                      </tr>
                    ) : (
                      <CollapseCustomChildren
                        key={index}
                        data={item?.services}
                        item={item}
                        index={index}
                        handleIconDelete={handleOpenDMDVGDeleteDialog}
                        handleIconUpdate={handleUpdateDMDVG}
                      />
                    )
                  })
                ) : (
                  <tr>
                    <td>
                      <h5>Không có bản ghi nào</h5>
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Collapse>

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
    </div>
  )
}

export default CollapseCustom
