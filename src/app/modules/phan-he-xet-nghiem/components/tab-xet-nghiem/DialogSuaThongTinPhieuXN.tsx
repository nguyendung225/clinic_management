import { Formik } from "formik";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import TextField from './../../../component/TextField';
import LabelRequired from './../../../component/LabelRequired';

type Props = {
    handleCloseDialog: () => void;
};

const DialogSuathongTinPhieuXN = (props: Props) => {
    const { handleCloseDialog } = props;

    return (
        <Modal show={true} centered onHide={handleCloseDialog} >
            <Modal.Header closeButton className="py-5 header-modal">
                <Modal.Title className="title-dialog-color">
                    Sửa phiếu xét nghiệm
                </Modal.Title>
            </Modal.Header>
            <Formik
                initialValues={{}}

                onSubmit={(values) => {

                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form onSubmit={handleSubmit}>

                        <Modal.Body className="py-4">
                            <Row className="spaces gap-4">
                                <Col xs={12}>
                                    <TextField labelClassName="min-w-140px" label="Thời gian lấy mẫu" name="laymau" type="datetime-local" />
                                </Col>
                                <Col xs={12}>
                                    <TextField labelClassName="min-w-140px" label="Thời tiếp nhận" name="tiepnhan" type="datetime-local" />
                                </Col>
                                <Col xs={12}>
                                    <TextField labelClassName="min-w-140px" label="Thời gian thực hiện" name="thuchien" type="datetime-local" />
                                </Col>
                                <Col xs={12}>
                                    <TextField labelClassName="min-w-140px" label="Thời gian trả kết quả" name="trakq" type="datetime-local" />
                                </Col>
                                <Col xs={12}>
                                    <TextField labelClassName="min-w-140px" label="Người lấy mẫu" name="nguoilaymau" />
                                </Col>
                                <Col xs={12} className="d-flex">
                                    <LabelRequired label="" className="min-w-140px" />
                                    <Form.Check label="Sửa thông tin dịch vụ" className='d-flex align-items-center gap-2 text-lable-input' />
                                </Col>
                            </Row>
                        </Modal.Body>

                        <Modal.Footer className="d-flex justify-content-center py-2">
                            <Button className="btn-fill min-w-80px" size="sm">
                                Lưu
                            </Button>
                            <Button
                                className="btn-fill min-w-80px"
                                size="sm"
                                onClick={handleCloseDialog}
                            >
                                Hủy
                            </Button>
                        </Modal.Footer>
                    </form>
                )}
            </Formik>
        </Modal>
    );
};

export default DialogSuathongTinPhieuXN;
