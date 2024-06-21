import React, { useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import TrieuChungBenhPopup from './TrieuChungBenhPopup'

type Props = {
    handleClose: () => void
}

const MauPhieuDieuTriModal = ({
    handleClose,
}: Props) => {
    const [shouldOpenTrieuChungBenhPopup, setShouldOpenTrieuChungBenhPopup] = useState<boolean>(false);

    return (
        <>
            <Modal show={true} onHide={handleClose} centered className='dialog-background' size='lg'>
                <Modal.Header closeButton className='header-modal'>
                    <Modal.Title>
                        Cập nhật mẫu phiếu điều trị
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col xs={12}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Tên mẫu tờ điều trị</Form.Label>
                                <Form.Control as="textarea" rows={1} className='resize-none' />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Thở máy</Form.Label>
                                <Form.Control as="textarea" rows={3} className='resize-none' />
                            </Form.Group>
                        </Col>
                        <Col xs={6}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Khám toàn thân</Form.Label>
                                <Form.Control as="textarea" rows={3} className='resize-none' />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                {/* <Form.Label>Triệu chứng bệnh</Form.Label> */}
                                <a href="" className="text-underline" onClick={(e) => {
                                    e.preventDefault();
                                    setShouldOpenTrieuChungBenhPopup(true);
                                }}>
                                    <u>Thêm phiếu điều trị</u>
                                </a>
                                <Form.Control as="textarea" rows={3} className='resize-none' />
                            </Form.Group>
                        </Col>
                        <Col xs={6}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Khám bộ phận</Form.Label>
                                <Form.Control as="textarea" rows={3} className='resize-none' />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Thuốc tự túc</Form.Label>
                                <Form.Control as="textarea" rows={3} className='resize-none' />
                            </Form.Group>
                        </Col>
                        <Col xs={6}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Chế độ ăn uống</Form.Label>
                                <Form.Control as="textarea" rows={3} className='resize-none' />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Chế độ chăm sóc</Form.Label>
                                <Form.Control as="textarea" rows={3} className='resize-none' />
                            </Form.Group>
                        </Col>
                        <Col xs={6}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Hướng xử lý</Form.Label>
                                <Form.Control as="textarea" rows={3} className='resize-none' />
                            </Form.Group>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer className='d-flex justify-content-end p-2 pe-5'>
                    <Button className="btn-fill w-60px"
                        onClick={handleClose}>
                        Lưu
                    </Button>
                </Modal.Footer>
            </Modal>
            {shouldOpenTrieuChungBenhPopup && (
                <TrieuChungBenhPopup handleClose={() => setShouldOpenTrieuChungBenhPopup(false)}/>
            )}
        </>
    )
}

export default MauPhieuDieuTriModal