import { Modal } from 'react-bootstrap';
import { TableCustom } from '../../../component/table/table-custom/TableCustom';
import { DSPTTTColumn } from './ModalNhapThongTinPTTTColumns';
import { fakeDataDanhSachPTTT } from '../fakeData';

type Props = {
  show: boolean;
  handleCloseDialog: () => void;
}

const ModalSuDungPTTTCu = ({ show, handleCloseDialog }: Props) => {
  return (
    <Modal centered show={show} onHide={handleCloseDialog} size='xl'>
      <Modal.Header closeButton>
        <Modal.Title>
          Danh sách phẫu thuật thủ thuật
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <TableCustom columns={DSPTTTColumn} data={fakeDataDanhSachPTTT} />
      </Modal.Body>
    </Modal>
  )
}

export default ModalSuDungPTTTCu