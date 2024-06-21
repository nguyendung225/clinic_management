import { Formik } from 'formik';
import { useRef } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import LabelRequired from '../../../component/LabelRequired';
import TextField from '../../../component/TextField';

type Props = {
  show: boolean;
  handleCloseDialog: () => void;
}

const ModalNhapTheBH = ({ show, handleCloseDialog }: Props) => {
  const refForm = useRef<any>();

  const initialValues = {
    soThe1: "",
    soThe2: "",
    soThe3: "",
    soThe4: "",
    hoTen: "",
    namSinh: "",
    cccd: "",
  }

  const handleSubmitForm = () => {
    refForm.current.handleSubmit();
  }

  return (
    <div>
      <Modal centered show={show} onHide={handleCloseDialog}>
        <Modal.Header className='py-4' closeButton>
          <Modal.Title>
            Nhập thông tin thẻ BHYT/CCCD
          </Modal.Title>
        </Modal.Header>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            console.log(values);
          }}
          innerRef={refForm}
        >
          {({ values, handleChange }) =>
            <Form>
              <Modal.Body>
                <div className="d-flex mb-3">
                  <LabelRequired label="Số BHYT" className=" min-w-80px" />
                  <div className="spaces ms-0 d-flex">
                    <div className="spaces width-25">
                      <TextField
                        name="soThe1"
                        type="text"
                        maxLength="2"
                        className="text-center "
                      />
                    </div>
                    <div className="spaces width-25">
                      <TextField
                        name="soThe2"
                        type="text"
                        maxLength="2"
                        className="text-center "
                      />
                    </div>
                    <div className="spaces width-25">
                      <TextField
                        name="soThe3"
                        type="text"
                        maxLength="2"
                        className="text-center "
                      />
                    </div>
                    <div className="spaces width-40">
                      <TextField
                        name="soThe4"
                        type="text"
                        className="text-center "
                      />
                    </div>
                  </div>
                </div>

                <Form.Group className="mb-3 d-flex">
                  <Form.Label className='min-w-80px'>Họ tên</Form.Label>

                  <Form.Control
                    className='customs-input '
                    name='hoTen'
                    value={values?.hoTen}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3 d-flex">
                  <Form.Label className='min-w-80px'>Năm sinh</Form.Label>

                  <Form.Control
                    className='customs-input '
                    name='namSinh'
                    value={values?.namSinh}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3 d-flex">
                  <Form.Label className='min-w-80px'>CCCD</Form.Label>

                  <Form.Control
                    className='customs-input '
                    name='cccd'
                    value={values?.cccd}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Modal.Body>

              <Modal.Footer className='py-3'>
                <Button className="btn-fill" onClick={handleSubmitForm}>Lưu</Button>
              </Modal.Footer>
            </Form>
          }
        </Formik>
      </Modal>
    </div>
  )
}

export default ModalNhapTheBH