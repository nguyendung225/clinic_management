import { Button, Form, Modal } from 'react-bootstrap'

type Props = {
    handleClose: () => void
}

const ModalLuuMauBenhAn = ({ handleClose }: Props) => {
    return (
        <Modal show={true} onHide={handleClose} centered className='dialog__container'>
            <Modal.Header closeButton className='header-modal'>
                <Modal.Title className='text-uppercase'>Lưu mẫu</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Tên mẫu</Form.Label>
                    <Form.Control type="email" />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer className='d-flex justify-content-end p-2 pt-0  border-top-0'>
                <Button className="btn-fill w-60px"
                    onClick={handleClose}>
                    Lưu
                </Button>
                <Button
                    className="btn-fill"
                    onClick={handleClose}>
                    Đóng
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalLuuMauBenhAn