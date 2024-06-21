import { Button, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from "react-bootstrap";
import InputSearch from "../../../component/InputSearch";
import { TableCustom } from "../../../component/table/table-custom/TableCustom";
import { phongLuuColumn } from "./DSVatTuTrongKhoColumn";

type Props = {
  show: boolean;
  handleCloseDialog: () => void;
}

const ModalThemSuaPhongLuu = ({ show, handleCloseDialog }: Props) => {
  return (
    <Modal centered show={show} onHide={handleCloseDialog} size="lg">
      <ModalHeader closeButton>
        <ModalTitle>
          Chọn phòng lưu
        </ModalTitle>
      </ModalHeader>

      <ModalBody>
        <InputSearch
          handleChange={() => { }}
          placeholder='Tìm kiếm'
        />

        <TableCustom className='h-table-lich-su-nhap-xuat' columns={phongLuuColumn} data={[]} />
      </ModalBody>

      <ModalFooter>
        <Button className="btn-fill">Lưu</Button>
      </ModalFooter>
    </Modal>
  )
}

export default ModalThemSuaPhongLuu