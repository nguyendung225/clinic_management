import { Button, Modal } from 'react-bootstrap';
import AutocompleteV2 from '../../../../component/AutocompleteObjectV2';
import LabelRequired from '../../../../component/LabelRequired';

type Props = {
  show: boolean;
  handleCloseDialog: () => void;
}

const ModalChuyenPhongKham = ({show, handleCloseDialog}: Props) => {
  return (
    <div>
      <Modal centered show={show} onHide={handleCloseDialog}>
        <Modal.Header className="py-4" closeButton>
          <Modal.Title>
          Chuyển phòng khám
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <LabelRequired label="Chuyển bệnh nhân sang phòng khám" />
          <AutocompleteV2
            options={[]}
            name="phongKham"
          />
        </Modal.Body>

        <Modal.Footer className='py-3'>
          <Button className='btn-outline' onClick={handleCloseDialog}>
            Hủy
          </Button>

          <Button className="btn-fill">Lưu</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ModalChuyenPhongKham