import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

type Props = {
    handleClose: () => void
}

const ModalLuuMau = ({
    handleClose,
}: Props) => {
    return (
        <Modal show={true} onHide={handleClose} centered className='dialog-background'>
            <Modal.Header closeButton className='header-modal'>
                <Modal.Title>
                    Lưu mẫu mới
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Tên mẫu</Form.Label>
                    <Form.Control as="textarea" rows={3} className='resize-none' />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer className='d-flex justify-content-end p-2 pe-5'>
                <Button className="btn-fill w-60px"
                    onClick={handleClose}>
                    Lưu
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalLuuMau