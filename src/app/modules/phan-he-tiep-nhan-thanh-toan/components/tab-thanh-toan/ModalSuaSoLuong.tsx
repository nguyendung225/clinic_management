import { Button, Modal } from 'react-bootstrap'
import TextField from '../../../component/TextField';

type Props = {
  show: boolean;
  handleCloseDialog: () => void;
}

const ModalSuaSoLuong = ({ show, handleCloseDialog }: Props) => {
  return (
    <div>
      <Modal centered show={show} onHide={handleCloseDialog}>
        <Modal.Header closeButton className='py-4'>
          <Modal.Title>
            Sửa số lượng
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <TextField
            label="Số lượng"
            name="soLuong"
            type="number"
          />
        </Modal.Body>

        <Modal.Footer className='py-3'>
          <Button
            className="btn-outline"
            onClick={handleCloseDialog}
          >
            Hủy
          </Button>

          <Button className="btn-fill" onClick={handleCloseDialog}>
            Lưu
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ModalSuaSoLuong