import { Button, Col, Form, FormGroup, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'react-bootstrap'
import LabelRequired from '../../../component/LabelRequired'
import AutocompleteV2 from '../../../component/AutocompleteObjectV2'

type Props = {
    open: boolean
    handleCloseModal: () => void
}

const HetDotDieuTriNgoaiTruModal = ({
    open,
    handleCloseModal
}: Props) => {
    return (
        <Modal
            centered
            className='modal fade'
            role='dialog'
            show={open}
            dialogClassName='modal-lg'
            aria-hidden='true'
        >
            <ModalHeader closeButton onHide={handleCloseModal} className='py-4'>
                <h4>Hết đợt điều trị ngoại trú</h4>
            </ModalHeader>
            <ModalBody>
                <Row className="mb-4">
                    <Col xs={5} className="d-flex mb-3 align-items-center text-lable-input">
                        <LabelRequired label="Thời gian ra viện" className="min-w-125px" />
                        <AutocompleteV2
                            options={[]}
                            name="name"
                            className="autocomplete-custom radius spaces width-100 "
                        />
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col xs={6}>
                        <LabelRequired label="Tình trạng bệnh nhân" />
                        <FormGroup>
                            <Form.Control
                                as={"textarea"}
                                rows={3}
                                className='resize-none'
                            />
                        </FormGroup>
                    </Col>
                    <Col xs={6}>
                        <LabelRequired label="Quá trình bệnh lý và diễn biến lâm sàng" />
                        <FormGroup>
                            <Form.Control
                                as={"textarea"}
                                rows={3}
                                className='resize-none'
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col xs={6}>
                        <LabelRequired label="Hướng điều trị tiếp theo" />
                        <FormGroup>
                            <Form.Control
                                as={"textarea"}
                                rows={3}
                                className='resize-none'
                            />
                        </FormGroup>
                    </Col>
                    <Col xs={6}>
                        <LabelRequired label="Tóm tắt kết quả CLS có giá trị chẩn đoán" />
                        <FormGroup>
                            <Form.Control
                                as={"textarea"}
                                rows={3}
                                className='resize-none'
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col xs={6}>
                        <LabelRequired label="Lời dặn của bác sĩ" />
                        <FormGroup>
                            <Form.Control
                                as={"textarea"}
                                rows={3}
                                className='resize-none'
                            />
                        </FormGroup>
                    </Col>
                    <Col xs={6}>
                        <LabelRequired label="Phương pháp điều trị" />
                        <FormGroup>
                            <Form.Control
                                as={"textarea"}
                                rows={3}
                                className='resize-none'
                            />
                        </FormGroup>
                    </Col>
                </Row>
            </ModalBody>
            <ModalFooter className='d-flex justify-content-between py-2'>
                <div>
                    <Button className='btn-navy'>Đặt lịch hẹn</Button>
                </div>
                <div className='d-flex gap-2'>
                    <Button className='btn-navy'>Cập nhật từ bệnh án</Button>
                    <Button className='btn-navy'>Lưu</Button>
                </div>
            </ModalFooter>
        </Modal>
    )
}

export default HetDotDieuTriNgoaiTruModal