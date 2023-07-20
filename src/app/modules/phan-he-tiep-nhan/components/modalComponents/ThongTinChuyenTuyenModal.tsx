import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';


interface chuyenTuyenProps {
    handleCloseModal?: () => void;
    onSave?: (value: any) => void;
    shouldOpenTuyenModal: boolean;
}


const ThongTinChuyenTuyenModal = (props: chuyenTuyenProps) => {
    const { handleCloseModal, shouldOpenTuyenModal, onSave } = props;
    const [thongtinTuyen, setThongtinTuyen] = useState({});

    const handleChange = (event: any) => {
        setThongtinTuyen({...thongtinTuyen, [event?.target?.name]: event?.target?.value});
    }

    const handleSubmit = () => {
        onSave?.(thongtinTuyen);
        handleCloseModal?.();
    }

    return (
        <Modal
            className='modal fade'
            role='dialog'
            show={shouldOpenTuyenModal}
            dialogClassName='modal-lg'
            aria-hidden='true'
            centered
        >
            <Modal.Header closeButton onHide={handleCloseModal} className="p-4">
                <Modal.Title className='text-pri'>Thông tin chuyển tuyến</Modal.Title>
            </Modal.Header>
            <Modal.Body className='p-4'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group as={Row} className="mb-3 align-items-center">
                        <Form.Label column sm="2">Số chuyển</Form.Label>
                        <Col sm="4">
                            <Form.Control className="p-2" />
                        </Col>
                        <Form.Label column sm="2">Nơi giới thiệu</Form.Label>
                        <Col sm="4">
                            <Form.Select className="p-2" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3 align-items-center">
                        <Form.Label column sm="2">Ngày chuyển</Form.Label>
                        <Col sm="4">
                            <Form.Control className="p-2" type="date" />
                        </Col>
                        <Form.Label column sm="2">Tuyến trước</Form.Label>
                        <Col sm="4">
                            <Form.Select className="p-2" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3 align-items-center">
                        <Form.Label column sm="2">Lý do chuyển</Form.Label>
                        <Col sm="4">
                            <Form.Select className="p-2" />
                        </Col>
                        <Form.Label column sm="2">Tuyến chuyển</Form.Label>
                        <Col sm="4">
                            <Form.Select className="p-2" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3 align-items-center">
                        <Form.Label column sm="2">Chẩn đoán chính</Form.Label>
                        <Col sm="4">
                            <Form.Select className="p-2" />
                        </Col>
                        <Col sm="6"></Col>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer className='pt-2 pb-2 justify-content-center'>
                <Button
                    type='submit'
                    className='btn-navy p-2 min-w-60px'
                >
                    {'Lưu'}
                </Button>
                <Button
                    className='btn-navy-outlined p-2 min-w-60px'
                    onClick={handleCloseModal}
                >
                    {'Đóng'}
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ThongTinChuyenTuyenModal;