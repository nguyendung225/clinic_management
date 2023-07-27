import React from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import Divider from '../../../../component/Divider';

interface IProps {
  handleCloseModal?: () => void;
  isOpenNhapVienModal: boolean;
}

export default function NhapVienModal(props: IProps) {
  const { handleCloseModal, isOpenNhapVienModal } = props;

  return (
    <Modal
      centered
      className='modal fade'
      role='dialog'
      show={isOpenNhapVienModal}
      dialogClassName='modal-xl'
      aria-hidden='true'
    >
      <Modal.Header closeButton onHide={handleCloseModal} className='p-3'>
        <Modal.Title className='text-pri'>Thông tin nhập viện</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row className='form-border pt-4 justify-content-center'>
            <Form.Group as={Row} className='align-items-center py-2'>
              <Col sm='3'>
                <label className='min-w-100px'>Mã BN</label>
                <Form.Text>BN202300009</Form.Text>
              </Col>
              <Col sm='1'>
                Tên BN:
              </Col>
              <Col sm='2'>
                <Form.Text>Nguyễn Văn A</Form.Text>
              </Col>
              <Col sm='1'>
                Sinh ngày
              </Col>
              <Col sm='1'>
                <Form.Text>1990</Form.Text>
              </Col>
              <Col sm='1'>
                Tuổi
              </Col>
              <Col sm='1'>
                <Form.Text>60</Form.Text>
              </Col>
              <Col sm='1'>
                Giới tính
              </Col>
              <Col sm='1'>
                <Form.Text>Nam</Form.Text>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className='align-items-center py-2'>
              <Col sm='3'>
                <label className='min-w-100px'>Nghề nghiệp</label>
                <Form.Text>Công nhân</Form.Text>
              </Col>
              <Col sm='1'>
                Dân tộc
              </Col>
              <Col sm='2'>
                <Form.Text>Kinh</Form.Text>
              </Col>
              <Col sm='1'>
                Địa chỉ
              </Col>
              <Col sm='3'>
                <Form.Text>26 Láng Hạ, Đống Đa, Hà Nội</Form.Text>
              </Col>
              <Col sm='1'>
                Đối tượng
              </Col>
              <Col sm='1'>
                <Form.Text>BHYT</Form.Text>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className='align-items-center py-2'>
              <Col sm='3'>
                <label className='min-w-100px'>Nơi làm việc</label>
                <Form.Text>Hà Nội</Form.Text>
              </Col>
              <Col sm='1'>
                Số BHYT
              </Col>
              <Col sm='2'>
                <Form.Text>DN9349545945</Form.Text>
              </Col>
              <Col sm='1'>
                Giá trị đến
              </Col>
              <Col sm='4'>
                <Form.Text>27/07/2024</Form.Text>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className='align-items-center py-2'>
              <Col sm='3'>
                <label className='min-w-100px'>Người liên hệ</label>
                <Form.Text>Nguyễn Văn B</Form.Text>
              </Col>
              <Col sm='1'>
                Số ĐT
              </Col>
              <Col sm='2'>
                <Form.Text>0123456789</Form.Text>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className='align-items-center py-2'>
              <Col sm='3'>
                <label className='min-w-100px'>Đến khám lúc</label>
                <Form.Text>25/07/2023 13:50:00</Form.Text>
              </Col>
              <Col sm='3'>
                Chẩn đoán của nơi giới thiệu
              </Col>
              <Col sm='6'>
                <Form.Text>Xuất huyết dạ dày</Form.Text>
              </Col>
            </Form.Group>
            <Divider className='h-2px' dark={true} />
            <Form.Group as={Row} className='align-items-center py-1'>
              <Col sm='2'>
                Lý do vào viện
              </Col>
              <Col sm='4'>
                <Form.Control className='customs-input'></Form.Control>
              </Col>
              <Col sm='2'>
                Tiền sử bệnh
              </Col>
              <Col sm='4'>
                <Form.Text></Form.Text>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className='align-items-center py-1'>
              <Col sm='2'>
                Quá trình bệnh lý
              </Col>
              <Col sm='4'>
                <Form.Control as='textarea' rows={2}></Form.Control>
              </Col>
              <Col sm='6'>
                <Form.Group as={Row} className='align-items-center w-100'>
                  <Col sm='4' className='py-1'>
                    Bản thân
                  </Col>
                  <Col sm='8' className='py-1'>
                    <Form.Control className='customs-input'></Form.Control>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className='align-items-center w-100'>
                  <Col sm='4' className='py-1'>
                    Gia đình
                  </Col>
                  <Col sm='8' className='py-1'>
                    <Form.Control className='customs-input'></Form.Control>
                  </Col>
                </Form.Group>
              </Col>
            </Form.Group>
            <Divider className='h-2px' dark={true} />
            <Row>
              <Col sm='8'>
                <Form.Group as={Row} className='align-items-center py-1'>
                  <Col sm='12'>
                    Khám xét
                  </Col>
                  <Col sm='3' className='px-10 py-1'>
                    Toàn thân
                  </Col>
                  <Col sm='9' className='py-1'>
                    <Form.Control className='customs-input'></Form.Control>
                  </Col>
                  <Col sm='3' className='px-10 py-1'>
                    Các bộ phận
                  </Col>
                  <Col sm='9' className='py-1'>
                    <Form.Control className='customs-input'></Form.Control>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className='align-items-center py-1'>
                  <Col sm='3'>
                    Kết quả lâm sàng
                  </Col>
                  <Col sm='9'>
                    <Form.Control className='customs-input'></Form.Control>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className='align-items-center py-1'>
                  <Col sm='3'>
                    Chẩn đoán vào viện
                  </Col>
                  <Col sm='9'>
                    <Form.Control className='customs-input'></Form.Control>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className='align-items-center py-1'>
                  <Col sm='3'>
                    Đã xử lý(thuốc...)
                  </Col>
                  <Col sm='9'>
                    <Form.Control className='customs-input'></Form.Control>
                  </Col>
                </Form.Group>
              </Col>
              <Col sm='4'>
                <Form.Group as={Row} className='align-items-center justify-content-center'>
                  <Col sm='12' className='text-center fw-bold'>
                    Sinh hiệu
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className='align-items-center py-1'>
                  <Col sm='4'>
                    Mạch
                  </Col>
                  <Col sm='4'>
                    <Form.Text>80</Form.Text>
                  </Col>
                  <Col sm='4'>
                    <Col>lần/phút</Col>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className='align-items-center py-1'>
                  <Col sm='4'>
                    Nhiệt độ
                  </Col>
                  <Col sm='4'>
                    <Form.Text>37</Form.Text>
                  </Col>
                  <Col sm='4'>
                    <Col>C</Col>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className='align-items-center py-1'>
                  <Col sm='4'>
                    Nhịp thở
                  </Col>
                  <Col sm='4'>
                    <Form.Text>80</Form.Text>
                  </Col>
                  <Col sm='4'>
                    <Col>lần/phút</Col>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className='align-items-center py-1'>
                  <Col sm='4'>
                    Huyết áp
                  </Col>
                  <Col sm='4'>
                    <Form.Text>/</Form.Text>
                  </Col>
                  <Col sm='4'>
                    <Col>mmHg</Col>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className='align-items-center py-1'>
                  <Col sm='4'>
                    Chiều cao
                  </Col>
                  <Col sm='4'>
                    <Form.Text>170</Form.Text>
                  </Col>
                  <Col sm='4'>
                    <Col>cm</Col>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className='align-items-center py-1'>
                  <Col sm='4'>
                    Cân nặng
                  </Col>
                  <Col sm='4'>
                    <Form.Text>70</Form.Text>
                  </Col>
                  <Col sm='4'>
                    <Col>kg</Col>
                  </Col>
                </Form.Group>
              </Col>
            </Row>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer className='flex flex-center pt-3 pb-3'>
        <Button className='btn-navy mr-5 w-125px'>Lưu & In</Button>
        <Button className='btn-navy-outlined mr-5 w-125px'>Lưu</Button>
        <Button className='btn-navy mr-5 w-125px' onClick={handleCloseModal}>
          Đóng
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
