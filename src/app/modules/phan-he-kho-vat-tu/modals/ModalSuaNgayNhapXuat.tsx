import { Button, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from 'react-bootstrap';
import LabelRequired from '../../component/LabelRequired';
import TextValidator from '../../component/TextValidator';

type Props = {
  show: boolean;
  handleCloseDialog: () => void;
}

const ModalSuaNgayNhapXuat = ({ show, handleCloseDialog }: Props) => {
  return (
    <Modal centered show={show} onHide={handleCloseDialog}>
      <ModalHeader closeButton>
        <ModalTitle>
          Cập nhật chết khấu
        </ModalTitle>
      </ModalHeader>

      <ModalBody>
        <div className='d-flex'>
          <LabelRequired label="Thời gian:" className='min-w-90px' />
          <TextValidator type="datetime-local" />
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

export default ModalSuaNgayNhapXuat