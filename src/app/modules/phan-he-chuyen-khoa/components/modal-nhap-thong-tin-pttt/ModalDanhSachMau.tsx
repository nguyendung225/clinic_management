import { Modal } from 'react-bootstrap';
import CustomMenu from '../../../component/menu/Menu';
import { TableCustom } from '../../../component/table/table-custom/TableCustom';
import { fakeDataDSMau } from '../fakeData';
import { DSMauColumn } from './ModalNhapThongTinPTTTColumns';
import InputSearch from '../../../component/InputSearch';

type Props = {
  show: boolean;
  handleCloseDialog: () => void;
}

const ModalDanhSachMau = ({ show, handleCloseDialog }: Props) => {

  return (
    <Modal centered show={show} onHide={handleCloseDialog} size='lg'>
      <Modal.Header closeButton>
        <Modal.Title>
          Danh sách mẫu
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>

        <div className="mb-2">
          <CustomMenu
            handleSelectOption={() => { }}
            listMenuItem={[]}
            menuLabel={<div className="text-center border">
              <i className="bi bi-list text-info" style={{ fontSize: "40px" }}></i>
            </div>}
          />
        </div>

        <InputSearch
          handleChange={() => { }}
          placeholder="Tìm kiếm"
          type="text"
        />
        <div>
          <TableCustom columns={DSMauColumn} data={fakeDataDSMau} />
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default ModalDanhSachMau