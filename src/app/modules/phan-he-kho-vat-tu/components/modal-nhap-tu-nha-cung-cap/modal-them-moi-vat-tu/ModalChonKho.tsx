import { Button, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from "react-bootstrap"
import InputSearch from "../../../../component/InputSearch"
import CombinedTable from "../../../../component/table/combined-table/CombinedTable"
import { dataDsKho } from "../../../const/FakeData"
import { dsKhoColumn } from "../modal-danh-sach-vat-tu/ColumnDsVatTu"

type Props = {
  show: boolean;
  handleCloseDialog: () => void;
}

const ModalChonKho = ({ show, handleCloseDialog }: Props) => {
  return (
    <Modal centered show={show} onHide={handleCloseDialog} size='lg'>
      <ModalHeader closeButton>
        <ModalTitle>
          Chọn kho
        </ModalTitle>
      </ModalHeader>

      <ModalBody>
        <div>
          <InputSearch handleChange={() => { }} />
          <CombinedTable userColumns={dsKhoColumn} data={dataDsKho} selectedTable treeTable />
        </div>
      </ModalBody>

      <ModalFooter>
        <Button className="btn-fill">Lưu</Button>
      </ModalFooter>
    </Modal>
  )
}

export default ModalChonKho