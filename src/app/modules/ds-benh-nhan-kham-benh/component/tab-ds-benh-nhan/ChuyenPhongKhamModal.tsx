import React from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { Autocomplete } from '../../../component/Autocomplete';

type modalProps = {
    handleCloseModal?: () => void;
    shouldOpenChuyenPKModal: boolean;
}

export const ChuyenPhongKhamModal = (props: modalProps) => {
    const { handleCloseModal, shouldOpenChuyenPKModal } = props;

    return (
        <Modal
            className='modal fade'
            role='dialog'
            show={shouldOpenChuyenPKModal}
            dialogClassName='modal-md'
            aria-hidden='true'
            centered
        >
            <Modal.Header closeButton onHide={handleCloseModal} className="p-4">
                <Modal.Title className='text-pri'>Chuyển phòng khám</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group as={Row} className="mb-3 align-items-center">
                        <Form.Label column sm="3">Yêu cầu khám</Form.Label>
                        <Col sm="9">
                            <Autocomplete options={[]} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3 align-items-center">
                        <Form.Label column sm="3">Phòng khám</Form.Label>
                        <Col sm="9">
                            <Autocomplete options={[]} />
                        </Col>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer className='pt-2 pb-2 justify-content-center'>
                <Button
                    type='submit'
                    className='btn bg-pri p-2 min-w-60px'
                >
                    {'Lưu'}
                </Button>
                <Button
                    variant='secondary'
                    className='btn btn-outline-primary p-2 min-w-60px'
                    onClick={handleCloseModal}
                >
                    {'In phiếu khám'}
                </Button>
                <Button
                    variant='secondary'
                    className='btn btn-outline-primary p-2 min-w-60px'
                    onClick={handleCloseModal}
                >
                    {'Đóng'}
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ChuyenPhongKhamModal