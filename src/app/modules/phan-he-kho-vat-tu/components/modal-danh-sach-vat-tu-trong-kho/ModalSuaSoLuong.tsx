import { Button, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from 'react-bootstrap';
import LabelRequired from '../../../component/LabelRequired';
import TextValidator from '../../../component/TextValidator';

type Props = {
  show: boolean;
  handleCloseDialog: () => void;
  title: string;
  label: string;
}

const ModalSuaSoLuong = ({ show, handleCloseDialog, title, label }: Props) => {
  return (
    <Modal centered show={show} onHide={handleCloseDialog}>
      <ModalHeader closeButton>
        <ModalTitle>
          {title}
        </ModalTitle>
      </ModalHeader>

      <ModalBody>
        <LabelRequired label={label} />
        <TextValidator type="number" className="no-spinners" />
      </ModalBody>

      <ModalFooter>
        <Button className='btn-fill'>Lưu</Button>
      </ModalFooter>
    </Modal>
  )
}

export default ModalSuaSoLuong