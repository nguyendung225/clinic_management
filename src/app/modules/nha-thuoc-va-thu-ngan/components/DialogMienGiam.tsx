import { Formik } from 'formik';
import { Button, Modal, Row } from 'react-bootstrap';
import LabelRequired from '../../component/LabelRequired';
import TextField from '../../component/TextField';
import { toast } from 'react-toastify';

type Props = {
    handleClose: () => void
    TTMienGiam: any
    handleChangeTTMienGiam: any

}

export default function DialogMienGiam({ handleClose, TTMienGiam, handleChangeTTMienGiam }: Props) {
    
    return (
        <Modal show={true} centered onHide={handleClose}>
            <Modal.Header closeButton className="py-5 header-modal">

                <Modal.Title className="title-dialog-color">
                    Miễn giảm thuốc, vật tư
                </Modal.Title>
            </Modal.Header>
            <Formik
                initialValues={TTMienGiam as any}
                onSubmit={(values) => {
                    handleChangeTTMienGiam(values)
                    handleClose()
                    toast.success("Thêm miễn giảm thành công")
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
                        <Modal.Body >
                            <Row className='gap-4'>
                                <div className='form-field spaces'>
                                    <LabelRequired label="Miễn giảm" className="min-w-80px" />
                                    <TextField
                                        name="mienGiam"
                                        type="text "
                                        value={values.mienGiam}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className='form-field spaces'>
                                    <LabelRequired label="Lý do Miễn giảm" className="min-w-80px" />
                                    <TextField
                                        name="lyDoMienGiam"
                                        type="text "
                                        value={values.lyDoMienGiam}
                                        onChange={handleChange}
                                    />
                                </div>
                                <span className='color-gray'>- Miễn giảm ≤ 100 sẽ tương ứng với số 9% miễn giảm <br /> - Miễn giảm &gt; 100 sẽ tương ứng với số tiền miễn giảm</span>
                            </Row>

                        </Modal.Body>

                        <Modal.Footer>
                            <Button className="btn-fill min-w-80px" type='submit' size="sm" onClick={() => {
                            }}>
                                Lưu
                            </Button>
                            <Button
                                onClick={handleClose}
                                className="btn-fill min-w-80px"
                                size="sm"
                            >
                                Hủy
                            </Button>
                        </Modal.Footer>

                    </form>
                )}
            </Formik>
        </Modal>
    )
}