import React, { useState } from 'react'
import { Button, Col, Form, FormCheck, FormGroup, Modal, ModalBody, ModalFooter, ModalHeader, Row, Tab, Tabs } from 'react-bootstrap'
import LabelRequired from '../../../component/LabelRequired'
import AutocompleteV2 from '../../../component/AutocompleteObjectV2'

type Props = {
    open: boolean
    handleCloseModal: () => void
}

const KEY_TAB_CHUYEN_TUYEN = {
    THONG_TIN_CHUYEN_TUYEN: "0",
    THONG_TIN_RA_VIEN: "1"
}

const ChuyenTuyenModal = ({
    open,
    handleCloseModal
}: Props) => {
    const [activeKey, setActiveKey] = useState<string>(KEY_TAB_CHUYEN_TUYEN.THONG_TIN_CHUYEN_TUYEN);

    const handleTabSelect = (key: string | null) => {
        if (key !== null) {
            setActiveKey(key);
        }
    };

    return (
        <Modal
            centered
            className='modal fade'
            role='dialog'
            show={open}
            dialogClassName='modal-xl'
            aria-hidden='true'
        >
            <ModalHeader closeButton onHide={handleCloseModal} className='py-4'>
                <h4>Cập nhật phiếu chuyển tuyến</h4>
            </ModalHeader>
            <ModalBody>
                <Tabs
                    className="tabs"
                    activeKey={activeKey}
                    onSelect={handleTabSelect}>
                    <Tab eventKey={KEY_TAB_CHUYEN_TUYEN.THONG_TIN_CHUYEN_TUYEN} title="Thông tin chuyển tuyến">
                        <Row>
                            <Col xs={6}>
                                <Row>
                                    <Col xs={5}>
                                        <LabelRequired label="Thời gian chuyển tuyến" className="min-w-125px" />
                                        <AutocompleteV2
                                            options={[]}
                                            name="name autocomplete-custom radius spaces width-100 "
                                        />
                                    </Col>
                                    <Col xs={7}>
                                        <LabelRequired label="Người chuyển" className="min-w-125px" />
                                        <AutocompleteV2
                                            options={[]}
                                            name="name autocomplete-custom radius spaces width-100 "
                                        />
                                    </Col>
                                </Row>
                                <Row className='align-items-center mt-2'>
                                    <Col xs={5}>
                                        <LabelRequired label="Bệnh chính" className="min-w-125px" />
                                        <AutocompleteV2
                                            options={[]}
                                            name="name autocomplete-custom radius spaces width-100 "
                                        />
                                    </Col>
                                    <Col xs={7}>
                                        <LabelRequired label="Label" className="min-w-125px text-transparent" />
                                        <FormGroup>
                                            <Form.Control size='sm'/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row className='align-items-center mt-2'>
                                    <Col xs={5}>
                                        <LabelRequired label="Bệnh kèm theo" className="min-w-125px" />
                                        <AutocompleteV2
                                            options={[]}
                                            name="name autocomplete-custom radius spaces width-100 "
                                        />
                                    </Col>
                                    <Col xs={7}>
                                        <LabelRequired label="Label" className="min-w-125px text-transparent" />
                                        <FormGroup>
                                            <Form.Control size='sm' />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row className='align-items-center mt-2'>
                                    <Col xs={5}>
                                        <LabelRequired label="Mã bệnh viện" className="min-w-125px" />
                                        <AutocompleteV2
                                            options={[]}
                                            name="name autocomplete-custom radius spaces width-100 "
                                        />
                                    </Col>
                                    <Col xs={7}>
                                        <LabelRequired label="Tên bệnh viện" className="min-w-125px" />
                                        <AutocompleteV2
                                            options={[]}
                                            name="name autocomplete-custom radius spaces width-100 "
                                        />
                                    </Col>
                                </Row>
                                <Row className='align-items-center mt-2'>
                                    <Col xs={12}>
                                        <LabelRequired label="Dấu hiệu lâm sàng" className="min-w-125px" />
                                        <FormGroup>
                                            <Form.Control
                                                as={"textarea"}
                                                rows={4}
                                                className='resize-none'
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row className='align-items-center mt-2'>
                                    <Col xs={12}>
                                        <LabelRequired label="Kết quả lâm sàng" className="min-w-125px" />
                                        <FormGroup>
                                            <Form.Control
                                                as={"textarea"}
                                                rows={4}
                                                className='resize-none'
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row className='align-items-center mt-2'>
                                    <Col xs={12}>
                                        <LabelRequired label="Lời dặn bác sĩ" className="min-w-125px" />
                                        <FormGroup>
                                            <Form.Control
                                                as={"textarea"}
                                                rows={4}
                                                className='resize-none'
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row className='align-items-center mt-2'>
                                    <Col xs={12}>
                                        <LabelRequired label="Ghi chú" className="min-w-125px" />
                                        <FormGroup>
                                            <Form.Control
                                                as={"textarea"}
                                                rows={4}
                                                className='resize-none'
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={6}>
                                <Row>
                                    <Col xs={12}>
                                        <LabelRequired label="Phương pháp kỹ thuật, thủ thuật, thuốc đã được sử dụng trong điều trị" />
                                        <FormGroup>
                                            <Form.Control
                                                as={"textarea"}
                                                rows={3}
                                                className='resize-none'
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row className='mt-4'>
                                    <Col xs={12}>
                                        <LabelRequired label="Tình trạng người bệnh lúc chuyển tuyến" />
                                        <FormGroup>
                                            <Form.Control
                                                size='sm'
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row className='mt-2'>
                                    <Col xs={12}>
                                        <LabelRequired label="Hướng điều trị" />
                                        <FormGroup>
                                            <Form.Control
                                                size='sm'
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row className='mt-2'>
                                    <Col xs={12}>
                                        <LabelRequired label="Phương tiện vận chuyển" />
                                        <FormGroup>
                                            <Form.Control
                                                size='sm'
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row className='mt-2'>
                                    <Col xs={12}>
                                        <LabelRequired label="Họ tên, chức danh người hộ tống" />
                                        <FormGroup>
                                            <Form.Control
                                                size='sm'
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row className='mt-4'>
                                    <Col xs={6}>
                                        <FormCheck
                                            type='radio'
                                            label="Chuyển đúng tuyến CMKT"
                                        />
                                    </Col>
                                    <Col xs={6}>
                                        <FormCheck
                                            type='radio'
                                            label="Chuyển trái tuyến CMKT"
                                        />
                                    </Col>
                                </Row>
                                <Row className='mt-2'>
                                    <Col xs={12}>
                                        <LabelRequired label="Hình thức chuyển tuyến" className="min-w-125px" />
                                        <AutocompleteV2
                                            options={[]}
                                            name="name autocomplete-custom radius spaces width-100 "
                                        />
                                    </Col>
                                </Row>
                                <Row className='mt-2'>
                                    <Col xs={12}>
                                        <LabelRequired label="Lý do chuyển tuyến" className="min-w-125px" />
                                        <AutocompleteV2
                                            options={[]}
                                            name="name autocomplete-custom radius spaces width-100 "
                                        />
                                    </Col>
                                </Row>
                                <Row className='mt-2'>
                                    <Col xs={12}>
                                        <LabelRequired label="Lý do chuyển tuyến của bác sĩ" className="min-w-125px" />
                                        <AutocompleteV2
                                            options={[]}
                                            name="name autocomplete-custom radius spaces width-100 "
                                        />
                                        <FormGroup>
                                            <Form.Control
                                                as={"textarea"}
                                                rows={3}
                                                className='resize-none'
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row className='mt-2'>
                                    <Col xs={12}>
                                        <LabelRequired label="Chuyển tuyến" className="min-w-125px" />
                                        <AutocompleteV2
                                            options={[]}
                                            name="name autocomplete-custom radius spaces width-100 "
                                        />
                                    </Col>
                                </Row>
                                <Row className='mt-2'>
                                    <Col xs={12}>
                                        <LabelRequired label="Thông tin điều trị tuyến dưới" className="min-w-125px" />
                                        <Row>
                                            <Col xs={6} className="d-flex mb-3 align-items-center text-lable-input">
                                                <LabelRequired label="Từ ngày" className="min-w-60px" />
                                                <AutocompleteV2
                                                    options={[]}
                                                    name="name"
                                                    className="autocomplete-custom radius spaces width-100 "
                                                />
                                            </Col>
                                            <Col xs={6} className="d-flex mb-3 align-items-center text-lable-input">
                                                <LabelRequired label="Đến ngày" className="min-w-65px" />
                                                <AutocompleteV2
                                                    options={[]}
                                                    name="name"
                                                    className="autocomplete-custom radius spaces width-100 "
                                                />
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey={KEY_TAB_CHUYEN_TUYEN.THONG_TIN_RA_VIEN} title="Thông tin ra viện">
                        <Row className="my-2">
                            <Col xs={6}>
                                <LabelRequired label="Tình trạng bệnh nhân" className="min-w-125px" />
                                <FormGroup>
                                    <Form.Control
                                        as={"textarea"}
                                        rows={6}
                                        className='resize-none'
                                    />
                                </FormGroup>
                            </Col>
                            <Col xs={6}>
                                <LabelRequired label="Quá trình bệnh lý và diễn biến lâm sàng" className="min-w-125px" />
                                <FormGroup>
                                    <Form.Control
                                        as={"textarea"}
                                        rows={6}
                                        className='resize-none'
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row className="my-2">
                            <Col xs={6}>
                                <LabelRequired label="Hướng điều trị tiếp theo" className="min-w-125px" />
                                <FormGroup>
                                    <Form.Control
                                        as={"textarea"}
                                        rows={6}
                                        className='resize-none'
                                    />
                                </FormGroup>
                            </Col>
                            <Col xs={6}>
                                <LabelRequired label="Tóm tắt kết quả CLS có giá trị chẩn đoán" className="min-w-125px" />
                                <FormGroup>
                                    <Form.Control
                                        as={"textarea"}
                                        rows={6}
                                        className='resize-none'
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row className="my-2">
                            <Col xs={6}>
                                <LabelRequired label="Lời dặn bác sĩ" className="min-w-125px" />
                                <FormGroup>
                                    <Form.Control
                                        as={"textarea"}
                                        rows={6}
                                        className='resize-none'
                                    />
                                </FormGroup>
                            </Col>
                            <Col xs={6}>
                                <LabelRequired label="Phương pháp điều trị" className="min-w-125px" />
                                <FormGroup>
                                    <Form.Control
                                        as={"textarea"}
                                        rows={6}
                                        className='resize-none'
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                    </Tab>
                </Tabs>
            </ModalBody>
            <ModalFooter className='d-flex justify-content-end py-2'>
                    <Button className='btn-navy'>Mẫu</Button>
                    <Button className='btn-navy'>Cập nhật từ bệnh án</Button>
                    <Button className='btn-navy'>Lưu</Button>
            </ModalFooter>
        </Modal>
    )
}

export default ChuyenTuyenModal