import React from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import { Autocomplete } from '../../../component/Autocomplete';
import GridThuoc from './GridThuoc';

interface modalProps {
    handleCloseModal?: () => void;
    shouldOpenThuocModal: boolean;
}

export const ChiDinhThuocModal = (props: modalProps) => {
    const { handleCloseModal, shouldOpenThuocModal } = props;

    return (
        <Modal
            className='modal fade'
            role='dialog'
            show={shouldOpenThuocModal}
            dialogClassName='modal-xl'
            aria-hidden='true'
        >
            <Modal.Header closeButton onHide={handleCloseModal} className="p-3">
                <Modal.Title className='text-pri'>Thông tin đơn thuốc</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row className='form-border p-0'>
                        <Form.Group as={Row} className='align-items-center'>
                            <Form.Label column sm="1">Mã BN:</Form.Label>
                            <Col sm="1">
                                <Form.Text >BN202300009</Form.Text>
                            </Col>
                            <Form.Label column sm="1">Tên BN:</Form.Label>
                            <Col sm="2">
                                <Form.Text>Nguyễn Văn A</Form.Text>
                            </Col>
                            <Form.Label column sm="1">Năm sinh:</Form.Label>
                            <Col sm="1">
                                <Form.Text>1990</Form.Text>
                            </Col>
                            <Form.Label column sm="1">Giới tính:</Form.Label>
                            <Col sm="1">
                                <Form.Text>Nam</Form.Text>
                            </Col>
                            <Form.Label column sm="2">Đối tượng/Tỷ lệ:</Form.Label>
                            <Col sm="1">
                                <Form.Text>BHYT/85%</Form.Text>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className='align-items-center'>
                            <Form.Label column sm="1">Địa chỉ:</Form.Label>
                            <Col sm="4">
                                <Form.Text>26 Láng Hạ, Đống Đa, Hà Nội</Form.Text>
                            </Col>
                            <Form.Label column sm="1">Số BHYT:</Form.Label>
                            <Col sm="3">
                                <Form.Text>DN9439540409</Form.Text>
                            </Col>
                            <Form.Label column sm="2">Ngày BHYT còn:</Form.Label>
                            <Col sm="1">
                                <Form.Text>56</Form.Text>
                            </Col>
                        </Form.Group>
                    </Row>

                    <Row className="m-0 pb-3">
                        <Col sm="8" className='form-border pt-3'>
                            <Form.Group as={Row} className='align-items-center'>
                                <Form.Label column sm="2">Bệnh chính:</Form.Label>
                                <Col sm="5">
                                    <Form.Control className='customs-input'></Form.Control>
                                </Col>
                                <Form.Label column sm="2">Ngày chỉ định:</Form.Label>
                                <Col sm="3">
                                    <Form.Control className='customs-input' type="date"></Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="2">Bệnh phụ:</Form.Label>
                                <Col sm="5" className='pt-2'>
                                    <Form.Control as="textarea" rows={2}></Form.Control>
                                </Col>
                                <Form.Label column sm="2">Số ngày hẹn TK:</Form.Label>
                                <Col sm="3" className='pt-2'>
                                    <Form.Control className='customs-input'></Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className='pt-3'>
                                <Form.Label column sm="2">Lời dặn bác sĩ:</Form.Label>
                                <Col sm="5">
                                    <Form.Control as="textarea" rows={2}></Form.Control>
                                </Col>
                                <Form.Label column sm="2">Ngày dùng:</Form.Label>
                                <Col sm="3">
                                    <Form.Control className='customs-input'></Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className='pt-2'>
                                <Form.Label column sm="2">Kho thuốc:</Form.Label>
                                <Col sm="5" className='pt-2'>
                                    <Autocomplete options={[]} />
                                </Col>
                                <Col sm="5">
                                    <Form.Check className='customs-form-check' label="Có thai"></Form.Check>
                                    <Form.Check className='pt-1 customs-form-check' label="Đã cấp phiếu hẹn khám"></Form.Check>
                                </Col>
                            </Form.Group>
                        </Col>
                        <Col sm="4" className='form-border pt-3'>
                            <p className='text-center fw-bold'>Sinh hiệu</p>
                            <Form.Group as={Row} className='align-items-center'>
                                <Form.Label column sm="5">Mạch (lần/phút):</Form.Label>
                                <Col sm="2">
                                    <Form.Text>86</Form.Text>
                                </Col>
                                <Form.Label column sm="4" className='spaces pr-0'>SPO2 (%):</Form.Label>
                                <Col sm="1" className='spaces pl-0'>
                                    <Form.Text>96</Form.Text>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className='align-items-center'>
                                <Form.Label column sm="5">Nhiệt độ (C):</Form.Label>
                                <Col sm="2">
                                    <Form.Text>37.5</Form.Text>
                                </Col>
                                <Form.Label column sm="4" className='spaces pr-0'>Chiều cao (cm):</Form.Label>
                                <Col sm="1" className='spaces pl-0'>
                                    <Form.Text>172</Form.Text>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className='align-items-center'>
                                <Form.Label column sm="5">Nhịp thở (lần/phút):</Form.Label>
                                <Col sm="2">
                                    <Form.Text>21</Form.Text>
                                </Col>
                                <Form.Label column sm="4" className='spaces pr-0'>Cân nặng (kg):</Form.Label>
                                <Col sm="1" className='spaces pl-0'>
                                    <Form.Text>77</Form.Text>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className='align-items-center'>
                                <Form.Label column sm="5">Huyết áp (mmHg):</Form.Label>
                                <Col sm="2">
                                    <Form.Text>135/84</Form.Text>
                                </Col>
                                <Form.Label column sm="4" className='spaces pr-0'>BMI (kg/m2):</Form.Label>
                                <Col sm="1" className='spaces pl-0'>
                                    <Form.Text>26.3</Form.Text>
                                </Col>
                            </Form.Group>
                        </Col>
                    </Row>
                    <GridThuoc />
                </Form>
            </Modal.Body>
            <Modal.Footer className="flex flex-center pt-3 pb-3">
                <Button className="btn-navy mr-5 w-50px">Lưu</Button>
                <Button className="btn-navy mr-5 w-125px">In phiếu thuốc</Button>
                <Button className="btn-navy mr-5 w-110px">Kết quả CLS</Button>
                <Button className="btn-navy mr-5 w-110px">Chỉ định CLS</Button>
                <Button className="btn-navy mr-5 w-100px">Khám bệnh</Button>
                <Button className="btn-navy mr-5 w-90px">Bệnh án</Button>
                <Button className="btn-navy mr-5 w-90px">Phiếu thu</Button>
                <Button className="btn-navy mr-5 w-100px">Chuyển PK</Button>
                <Button className="btn-navy mr-5 w-80px">Kết thúc</Button>
            </Modal.Footer>
        </Modal >
    )
}

export default ChiDinhThuocModal