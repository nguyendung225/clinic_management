import { Button, Modal } from 'react-bootstrap'
import TextValidator from '../../../component/TextValidator';
import LabelRequired from '../../../component/LabelRequired';

type Props = {
  show: boolean;
  handleCloseDialog: () => void;
}

const ModalLuuMauMoi = ({ show, handleCloseDialog }: Props) => {
  return (
    <Modal centered show={show} onHide={handleCloseDialog}>
      <Modal.Header closeButton>
        <Modal.Title>
          Thêm mẫu mới
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <LabelRequired label='Tên mẫu' />
        <TextValidator as="textarea" rows={4} type="text" />
      </Modal.Body>

      <Modal.Footer className='py-2'>
        <Button className='btn-fill'>Lưu</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalLuuMauMoi