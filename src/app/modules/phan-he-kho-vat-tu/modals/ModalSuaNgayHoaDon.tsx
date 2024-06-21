import { Button, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from 'react-bootstrap';
import LabelRequired from '../../component/LabelRequired';
import TextValidator from '../../component/TextValidator';

type Props = {
  show: boolean;
  handleCloseDialog: () => void;
}

const ModalSuaNgayHoaDon = ({ show, handleCloseDialog }: Props) => {
  return (
    <Modal centered show={show} onHide={handleCloseDialog} size='sm'>
      <ModalHeader closeButton>
        <ModalTitle>
          Cập nhật chết khấu
        </ModalTitle>
      </ModalHeader>

      <ModalBody>
        <div className='d-flex mb-1'>
          <LabelRequired label="Ngày hóa đơn:" className='min-w-100px' />
          <TextValidator type="date" />
        </div>

        <div className='d-flex'>
          <LabelRequired label="Số hóa đơn:" className='min-w-100px' />
          <TextValidator type="number" className="no-spinners"/>
        </div>
      </ModalBody>

      <ModalFooter>
        <Button className='btn-fill'>
          Lưu
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default ModalSuaNgayHoaDon