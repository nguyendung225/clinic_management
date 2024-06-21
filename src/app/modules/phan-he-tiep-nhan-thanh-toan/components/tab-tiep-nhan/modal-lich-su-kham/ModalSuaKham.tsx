import { Button, Modal, Row } from 'react-bootstrap'
import TextField from '../../../../component/TextField';

type Props = {
  show: boolean;
  handleCloseDialog: () => void;
}

const ModalSuaKham = ({ show, handleCloseDialog }: Props) => {

  const handleOnClick = () => {
    handleCloseDialog();
  }

  return (
    <div>
      <Modal centered show={show} size="sm" onHide={handleCloseDialog} className='dialog-background'>
        <Modal.Header className="py-4" closeButton>
          <Modal.Title>
            Sửa khám/Điều trị
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Row className='mb-2'>
            <TextField
              
              label="Thời gian bắt đầu"
              name="batDau"
              type="date"
              labelClassName="min-w-125px"
            />
          </Row>

          <Row>
            <TextField
              
              label="Thời gian kết thúc"
              name="ketThuc"
              type="date"
              labelClassName="min-w-125px"
            />
          </Row>
        </Modal.Body>

        <Modal.Footer className='py-3'>
          <Button className='btn-fill' onClick={handleOnClick}>Lưu</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ModalSuaKham