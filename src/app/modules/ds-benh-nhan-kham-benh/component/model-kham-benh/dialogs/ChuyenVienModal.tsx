import React from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';

interface IProps {
  handleCloseModal?: () => void;
  isOpenChuyenVienModal: boolean;
}

export default function ChuyenVienModal(props: IProps) {
  const { handleCloseModal, isOpenChuyenVienModal } = props;

  return (
    <Modal
      centered
      className='modal fade'
      role='dialog'
      show={isOpenChuyenVienModal}
      dialogClassName='modal-xl'
      aria-hidden='true'
    >
      <Modal.Header closeButton onHide={handleCloseModal} className='p-3'>
        <Modal.Title className='text-pri'>Thông tin chuyển viện</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row className='form-border py-4 justify-content-center'>
            <Form.Group as={Row} className='align-items-center py-1'>
              <Col column lg='2'>
                Mã bệnh nhân
              </Col>
              <Col lg='2'>
                <Form.Control
                  disabled={true}
                  value={'BN202300009'}
                  className='customs-input'
                />
              </Col>
              <Col column lg='1'>
                Họ tên
              </Col>
              <Col lg='3'>
                <Form.Control
                  disabled={true}
                  value={'Nguyễn Văn A'}
                  className='customs-input'
                />
              </Col>
              <Col column lg='1'>
                Năm sinh
              </Col>
              <Col lg='3'>
                <Form.Control
                  disabled={true}
                  value={'1990'}
                  className='customs-input'
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className='align-items-center py-1'>
              <Col column lg='2'>
                Nghề nghiệp
              </Col>
              <Col lg='10'>
                <Form.Control
                  disabled={true}
                  value={'Công nhân'}
                  className='customs-input'
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className='align-items-center py-1'>
              <Col column lg='2'>
                Địa chỉ
              </Col>
              <Col lg='10'>
                <Form.Control
                  className='customs-input'
                  disabled={true}
                  value={
                    'số 30 Nghĩa Đô, phường Mai Dịch, quận Cầu Giấy, thành phố Hà Nội'
                  }
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className='align-items-center py-1'>
              <Col column lg='2'>
                Chuyển viện lúc
              </Col>
              <Col lg='3'>
                <Form.Control
                  className='customs-input'
                  disabled={true}
                  value={'05/07/2023 13:35:00'}
                />
              </Col>
              <Col column lg='2'>
                Chuyển đến viện
              </Col>
              <Col lg='5'>
                <Form.Select className='customs-input' value={''}></Form.Select>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className='align-items-center py-1'>
              <Col column lg='2'>
                Dấu hiệu lâm sàng
              </Col>
              <Col lg='5'>
                <Form.Control as='textarea' rows={2} />
              </Col>
              <Col lg='5'>
                <Form.Group as={Row} className='align-items-center py-1'>
                  <Col column lg='4' className='py-1'>
                    Địa chỉ bệnh viện
                  </Col>
                  <Col lg='8' className='py-1'>
                    <Form.Control
                      disabled={true}
                      value={''}
                      className='customs-input'
                    />
                  </Col>
                  <Col column lg='4' className='py-1'>
                    Hình thức chuyển
                  </Col>
                  <Col lg='8' className='py-1'>
                    <Form.Select
                      className='customs-input'
                      value={''}
                    ></Form.Select>
                  </Col>
                </Form.Group>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className='align-items-center py-1'>
              <Col column lg='2'>
                Kết quả cận lâm sàng
              </Col>
              <Col lg='5'>
                <Form.Control as='textarea' rows={2} />
              </Col>
              <Col lg='5'>
                <Form.Group as={Row} className='align-items-center py-1'>
                  <Col column lg='4' className='py-1'>
                    Lý do chuyển
                  </Col>
                  <Col lg='8' className='py-1'>
                    <Form.Select
                      className='customs-input'
                      value={''}
                    ></Form.Select>
                  </Col>
                  <Col column lg='4' className='py-1'>
                    Tuyến
                  </Col>
                  <Col lg='8' className='py-1'>
                    <Form.Select
                      className='customs-input'
                      value={''}
                    ></Form.Select>
                  </Col>
                </Form.Group>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className='align-items-center py-1'>
              <Col column lg='2'>
                Chuẩn đoán
              </Col>
              <Col lg='5'>
                <Form.Control as='textarea' rows={2} />
              </Col>
              <Col lg='5'>
                <Form.Group as={Row} className='align-items-center py-1'>
                  <Col column lg='4'>
                    Hướng điều trị
                  </Col>
                  <Col lg='8'>
                    <Form.Control as='textarea' rows={2} />
                  </Col>
                </Form.Group>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className='align-items-center py-1'>
              <Col column lg='2'>
                Phương pháp, thủ thuật, kỹ thuật, thuốc đã sử dụng trong điều
                trị
              </Col>
              <Col lg='5'>
                <Form.Control as='textarea' rows={2} />
              </Col>
              <Col lg='5'>
                <Form.Group as={Row} className='align-items-center py-1'>
                  <Col column lg='4'>
                    Phương tiện vận chuyển
                  </Col>
                  <Col lg='8'>
                    <Form.Select
                      className='customs-input'
                      value={''}
                    ></Form.Select>
                  </Col>
                </Form.Group>
              </Col>
              <Col column lg='2'>
                Tình trạng người bệnh lúc chuyển tuyến
              </Col>
              <Col lg='5'>
                <Form.Control as='textarea' rows={2} />
              </Col>
              <Col lg='5'>
                <Form.Group as={Row} className='align-items-center py-1'>
                  <Col column lg='4' className='py-1'>
                    Họ tên, chức danh, trình độ chuyên môn người hộ tống
                  </Col>
                  <Col lg='8' className='py-1'>
                    <Form.Control as='textarea' rows={2} />
                  </Col>
                  <Col column lg='4' className='py-1'>
                    Bác sĩ điều trị
                  </Col>
                  <Col lg='8' className='py-1'>
                    <Form.Select
                      className='customs-input'
                      value={''}
                    ></Form.Select>
                  </Col>
                </Form.Group>
              </Col>
            </Form.Group>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer className='flex flex-center pt-3 pb-3'>
        <Button className='btn-navy mr-5 w-125px'>Lưu & Tải</Button>
        <Button className='btn-navy-outlined mr-5 w-125px'>Lưu</Button>
        <Button className='btn-navy mr-5 w-125px' onClick={handleCloseModal}>
          Đóng
        </Button>
        <Button className='btn-navy mr-5 w-125px'>In phiếu</Button>
      </Modal.Footer>
    </Modal>
  );
}
