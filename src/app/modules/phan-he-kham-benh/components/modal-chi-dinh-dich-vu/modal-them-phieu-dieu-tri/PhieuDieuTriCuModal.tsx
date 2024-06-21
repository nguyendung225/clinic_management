import { Formik, useFormik } from 'formik'
import React, { useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import LabelRequired from '../../../../component/LabelRequired'
import CustomTextarea from '../../../../component/custom-textarea/CustomTextarea'
import TextField from '../../../../component/TextField'

type Props = {
    handleClose: () => void
    className?: string
}

const PhieuDieuTriCuModal = ({
    handleClose,
    className,
}: Props) => {

    return (
        <>
            <Modal
                show={true} onHide={handleClose}
                centered className={`dialog-background ${className}`}
                size='lg'
            >
                <Modal.Header closeButton className='header-modal'>
                    <Modal.Title>
                        Phiếu điều trị cũ
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        initialValues={{}}
                        onSubmit={() => { }}
                    >
                        <Form className="h-100">
                            <Row>
                                <Col xs className="d-flex mb-3 align-items-center text-lable-input">
                                    <TextField
                                        name="mach"
                                        label="Mạch (lần/phút)"
                                        labelClassName="min-w-125px"
                                    />
                                </Col>
                                <Col xs className="d-flex mb-3 align-items-center text-lable-input">
                                    <TextField
                                        name="nhietDo"
                                        label="Nhiệt độ (C)"
                                        labelClassName="min-w-100px"
                                    />
                                </Col>
                                <Col xs={5} className="d-flex mb-3 align-items-center text-lable-input">
                                    <TextField
                                        name="huyetAp1"
                                        label="Huyết áp (mmHg)"
                                        labelClassName="min-w-125px"
                                        className="min-w-55px"
                                    />
                                    <div className='mx-2'>/</div>
                                    <TextField
                                        name="huyetAp2"
                                    />
                                </Col>
                                {/* <Col xs={4} className="d-flex mb-3 align-items-center text-lable-input">
                                    
                                </Col> */}
                            </Row>
                            <Row>
                                <Col xs className="d-flex mb-3 align-items-center text-lable-input">
                                    <TextField
                                        name="nhipTho"
                                        label="Nhịp thở (lần/phút)"
                                        labelClassName="min-w-125px"
                                    />
                                </Col>
                                <Col xs className="d-flex mb-3 align-items-center text-lable-input">
                                    <TextField
                                        name="canNang"
                                        label="Cân nặng (kg)"
                                        labelClassName="min-w-100px"
                                    />
                                </Col>
                                <Col xs className="d-flex mb-3 align-items-center text-lable-input">
                                    <TextField
                                        name="chieuCao"
                                        label="Chiều cao (cm)"
                                        labelClassName="min-w-125px"
                                        className="min-w-55px"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={4} className="d-flex mb-3 align-items-center text-lable-input">
                                    <TextField
                                        name="targetAUC"
                                        label="TargetAUC"
                                        labelClassName="min-w-125px"
                                    />
                                </Col>
                                <Col xs={5} className="d-flex mb-3 align-items-center text-lable-input">
                                    <TextField
                                        name="creatinin"
                                        label="Serum Creatinin (µmol/L)"
                                        labelClassName="min-w-175px"
                                        className="min-w-55px"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} className="d-flex mb-3 align-items-center text-lable-input">
                                    <div className='d-flex'>
                                        <LabelRequired
                                            label="BMI (kg/m3): min-w-90px mb-1"
                                        />
                                        <CustomTextarea disabled
                                            marginUnderline={8}
                                            className="spaces width-25"
                                        />
                                    </div>
                                    <div className='d-flex ps-2'>
                                        <LabelRequired
                                            label="Diện tích da (m2): spaces min-w-120 mb-1"
                                        />
                                        <CustomTextarea disabled
                                            marginUnderline={8}
                                            className="spaces width-25"
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={5} className="d-flex mb-3 align-items-center text-lable-input flex-grow-1">
                                    <div className='d-flex'>
                                        <LabelRequired
                                            label="GFR (mL/min): min-w-100px"
                                        />
                                        <CustomTextarea disabled
                                            marginUnderline={8}
                                        // className="spaces width-40"
                                        />
                                    </div>
                                    <div className='d-flex ps-2'>
                                        <LabelRequired
                                            label="Carboplatin Dose: spaces min-w-120 mb-1"
                                        />
                                        <CustomTextarea disabled
                                            marginUnderline={8}
                                        // className="spaces width-25"
                                        />
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={12} className="d-flex mb-3 align-items-center text-lable-input">
                                    <TextField
                                        name="khamToanThan"
                                        label="Khám toàn thân"
                                        labelClassName="min-w-125px"
                                        className="w-100"
                                        as="textarea"
                                        rows="3"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} className="d-flex mb-3 align-items-center text-lable-input">
                                    <TextField
                                        name="huongXuLy"
                                        label="Hướng xử lý"
                                        labelClassName="min-w-125px"
                                        className="w-100"
                                        as="textarea"
                                        rows="3"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} className="d-flex mb-3 align-items-center text-lable-input">
                                    <TextField
                                        name="cheDoAn"
                                        label="Chế độ ăn"
                                        labelClassName="min-w-125px"
                                        className="w-100"
                                        as="textarea"
                                        rows="3"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} className="d-flex mb-3 align-items-center text-lable-input">
                                    <TextField
                                        name="cheDoChamSoc"
                                        label="Chế chăm sóc"
                                        labelClassName="min-w-125px"
                                        className="w-100"
                                        as="textarea"
                                        rows="3"
                                    />
                                </Col>
                            </Row>
                        </Form>
                    </Formik>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default PhieuDieuTriCuModal