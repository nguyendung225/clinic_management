import { Button } from "react-bootstrap"
import { useState } from "react"
import { CSKhamChuaBenhColumns } from "./TabCSKCBColumns"
import { TablePagination } from "../../component/table/components/TablePagination"
import { handlePagesChange, handleRowsPerPageChange, rowsForPage } from "../../utils/PageUtils"
import DialogConfirmDelete from "../../component/dialog-confirm-delete/DialogConfirmDelete"
import { CSKhamChuaBenh } from "../models/ModelSoKhamChuaBenh"
import { CSKhamChuaBenhData, INITIAL_VALUE } from "../constants/TabCoSoKhamChuaBenhConstant"
import { DanhMucCSKCBContext } from "../contexts/TabCoSoKhamChuaBenhContext"
import DanhMucCSKCBDialog from "../modals/modal-co-so-kham-chua-benh/ModalCoSoKhamChuaBenh"
import { TableCustom } from "../../component/table/table-custom/TableCustom"

const DanhMucCSKCBTab = () => {
  const [page, setPage] = useState<number>(1)
  const [rowsPerPage, setRowsPerPage] = useState<number>(10)
  const [totalPages, setTotalPages] = useState<number>(50)
  const [totalElements, setTotalElements] = useState<number>(500)
  const [openDanhMucCSKCBDialog, setOpenDanhMucCSKCBDialog] = useState<boolean>(false)
  const [data, setData] = useState<CSKhamChuaBenh>({...INITIAL_VALUE})
  const [state, setState] = useState<boolean>(false)
  const [openConfirmDialog, setOpenConfirmDialog] = useState<boolean>(false)

  const handleOpenDanhMucCSKCBDialog = () => {
    setData(INITIAL_VALUE)
    setOpenDanhMucCSKCBDialog(true)
  }
  const handleCloseDialog = () => {
    setOpenDanhMucCSKCBDialog(false)
    setOpenConfirmDialog(false)
  }

  const handleEdit = (data: CSKhamChuaBenh) => {
    handleOpenDanhMucCSKCBDialog()
    setData(data)
  }

  const handleOpenConfirmDialog = (data: CSKhamChuaBenh) => {
    setData(data)
    setOpenConfirmDialog(true)
  }

  const handleDelete = () => {
  }

  return (
    <DanhMucCSKCBContext.Provider value={{handleEdit, handleOpenConfirmDialog}}>
      <div className="p-5 bg-white">
        <Button className="btn-navy min-w-50px" onClick={handleOpenDanhMucCSKCBDialog}>
          Thêm mới
        </Button>
        <div className="mt-4">
          <TableCustom<CSKhamChuaBenh>
            data={CSKhamChuaBenhData}
            columns={CSKhamChuaBenhColumns}
          />
          <TablePagination
            handlePagesChange={handlePagesChange}
            handleRowsPerPageChange={handleRowsPerPageChange}
            rowsForPage={rowsForPage}
            page={page}
            rowsPerPage={rowsPerPage}
            setPage={setPage}
            setRowsPerPage={setRowsPerPage}
            totalPages={totalPages}
            totalElements={totalElements}
          />
        </div>
        {openDanhMucCSKCBDialog && (
          <DanhMucCSKCBDialog
            show={openDanhMucCSKCBDialog}
            handleClose={handleCloseDialog}
            data={data}
            state={state}
            setState={setState}
          />
        )}
        {openConfirmDialog && (
          <DialogConfirmDelete
            dialogDelete={openConfirmDialog}
            setDialogDelete={setOpenConfirmDialog}
            handleDelete={() => handleDelete()}
          />
        )}
      </div>
    </DanhMucCSKCBContext.Provider>
  )
}

export default DanhMucCSKCBTab
