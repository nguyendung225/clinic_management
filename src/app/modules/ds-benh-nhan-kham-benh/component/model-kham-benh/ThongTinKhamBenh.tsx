import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import GridLichSuKham from "./GridLichSuKham";
import { useContext, useState } from "react";
import { localStorageItem } from "../../../utils/LocalStorage";
import { KEY_DS_TAB_TIEP_DON } from "../../../utils/Constant";
import { AppContext } from "../../../appContext/AppContext";
import DienBienBenh from "./DienBienBenh";

export const ThongTinKhamBenh = () => {
    const { setEventKey } = useContext(AppContext)
    const handleAddTab = (eventKey: string) => {
        let data = localStorageItem.get(KEY_DS_TAB_TIEP_DON) ? localStorageItem.get(KEY_DS_TAB_TIEP_DON) : [];
        if (!data.includes(eventKey)) {
            data.push(eventKey);
            data.sort((a: string, b: string) => a > b ? 1 : -1);
            localStorageItem.set(KEY_DS_TAB_TIEP_DON, data)
        }
        setEventKey(eventKey)
    }
    return (
        <div>
            <Form>
                <Row>
                    <Col sm="9" className="spaces pr-0">
                        <div className=" box_shadow-93">
                            <p className='text-center fw-bold mb-2 pt-2'>Lịch sử khám</p>
                            <GridLichSuKham />
                        </div>
                        <div className=" box_shadow-93" style={{ height: 'calc(100vh - 170px)', overflowY: 'auto'}}>
                            <DienBienBenh />
                        </div>
                    </Col>
                    <Col sm="3" className="spaces pl-0">
                        <div className="box_shadow-93 p-2">
                            <p className='text-center fw-bold mb-2'>Thông tin hành chính</p>
                            <div className="d-flex align-items-center pt-2">
                                <label className='col-sm-4 label-fw'>Mã BN:</label>
                                <p className='col-sm-8 text-fw'>BN202300005</p>
                            </div>
                            <div className="d-flex align-items-center pt-3">
                                <label className='col-sm-4 label-fw'>Họ tên:</label>
                                <p className='col-sm-8 text-fw'>Nguyễn Văn A</p>
                            </div>
                            <div className="d-flex align-items-center pt-3">
                                <label className='col-sm-4 label-fw'>Ngày sinh:</label>
                                <p className='col-sm-3 text-fw'>16/02/1980</p>
                                <label className='col-sm-3 label-fw spaces pl-5'>Giới tính:</label>
                                <p className='col-sm-2 text-fw'>Nam</p>
                            </div>
                            <div className="d-flex align-items-center pt-3">
                                <label className='col-sm-4 label-fw'>Đối tượng:</label>
                                <p className='col-sm-8 text-fw'>BHYT</p>
                            </div>
                            <div className="d-flex align-items-center pt-3">
                                <label className='col-sm-4 label-fw'>Địa chỉ:</label>
                                <p className='col-sm-8 text-fw'>26 Láng Hạ, Đống Đa, Hà Nội</p>
                            </div>
                            <div className="d-flex align-items-center pt-3">
                                <label className='col-sm-4 label-fw'>Nghề nghiệp:</label>
                                <p className='col-sm-8 text-fw'>Công nhân</p>
                            </div>
                            <div className="d-flex align-items-center pt-3">
                                <label className='col-sm-4 label-fw'>Số BHYT:</label>
                                <p className='col-sm-8 text-fw'>DN9349545945</p>
                            </div>
                        </div>
                        <div className="box_shadow-93 p-2">
                            <p className='text-center fw-bold mb-0'>Sinh hiệu</p>
                            <Form.Group as={Row} className='align-items-center'>
                                <Form.Label column sm="6" className="spaces pr-0">Mạch (lần/phút):</Form.Label>
                                <Col sm="6">
                                    <Form.Control className="customs-input"></Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className='align-items-center'>
                                <Form.Label column sm="6" className="spaces pr-0">Nhiệt độ (C):</Form.Label>
                                <Col sm="6">
                                    <Form.Control className="customs-input"></Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} >
                                <Col className="d-flex align-items-center">
                                    <Form.Label column sm="6">Huyết áp (mmHg):</Form.Label>
                                    <Form.Control className="customs-input m-3"></Form.Control>
                                    <h4 className="m-0 p-2">/</h4>
                                    <Form.Control className="customs-input"></Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className='align-items-center'>
                                <Form.Label column sm="6" className="spaces pr-0">Nhịp thở (lần/phút):</Form.Label>
                                <Col sm="6">
                                    <Form.Control className="customs-input"></Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className='align-items-center'>
                                <Form.Label column sm="6" className="spaces pr-0">Cân nặng (kg):</Form.Label>
                                <Col sm="6">
                                    <Form.Control className="customs-input"></Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className='align-items-center'>
                                <Form.Label column sm="6" className="spaces pr-0">Chiều cao (cm):</Form.Label>
                                <Col sm="6">
                                    <Form.Control className="customs-input"></Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className='align-items-center'>
                                <Form.Label column sm="6" className="spaces pr-0">SPO2 (%):</Form.Label>
                                <Col sm="6">
                                    <Form.Control className="customs-input"></Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className='align-items-center'>
                                <Form.Label column sm="6" className="spaces pr-0">BMI (kg/m2):</Form.Label>
                                <Col sm="6">
                                    <Form.Text className="text-error">26.03 - Bạn bị thừa cân!</Form.Text>
                                </Col>
                            </Form.Group>
                        </div>
                    </Col>
                </Row>
            </Form>
            <div className="flex flex-center pt-6 pb-3">
                <Button className="btn-navy mr-5 w-50px">Lưu</Button>
                <Button className="btn-navy mr-5 w-110px">Chỉ định CLS</Button>
                <Button className="btn-navy mr-5 w-100px">Thuốc</Button>
                <Button className="btn-navy mr-5 w-90px">Bệnh án</Button>
                <Button className="btn-navy mr-5 w-90px">Phiếu thu</Button>
                <Button className="btn-navy mr-5 w-100px">Chuyển PK</Button>
                <Button className="btn-navy mr-5 w-110px" onClick={() => handleAddTab('3')}>Xem kết quả CLS</Button>
                <Button className="btn-navy mr-5 w-80px">Kết thúc</Button>
            </div>
        </div>
    )
}

export default ThongTinKhamBenh