import React from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import Divider from '../../../../component/Divider';

interface IProps {
  handleCloseModal?: () => void;
  isOpenHenKhamModal: boolean;
}

export default function HenKhamModal(props: IProps) {
  const { handleCloseModal, isOpenHenKhamModal } = props;

  return (
    <Modal
      centered
      className='modal fade'
      role='dialog'
      show={isOpenHenKhamModal}
      dialogClassName='modal-lg'
      aria-hidden='true'
    >
      <Modal.Header closeButton onHide={handleCloseModal} className='p-3'>
        <Modal.Title className='text-pri'>Thông tin hẹn khám</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row className='form-border py-4 justify-content-center'>
            <Form.Group as={Row} className='align-items-center py-1'>
              <Col sm='2'>
                Họ và tên
              </Col>
              <Col sm='5'>
                <Form.Text>Nguyễn Văn A</Form.Text>
              </Col>
              <Col sm='2'>
                Giới tính
              </Col>
              <Col sm='3'>
                <Form.Text>Nam</Form.Text>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className='align-items-center py-1'>
              <Col sm='2'>
                Địa chỉ
              </Col>
              <Col sm='5'>
                <Form.Text>Số 21 Láng Hạ, Đống Đa, Hà Nội</Form.Text>
              </Col>
              <Col sm='2'>
                Sinh ngày
              </Col>
              <Col sm='3'>
                <Form.Text>05/12/1980</Form.Text>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className='align-items-center py-1'>
              <Col sm='2'>
                Số thẻ BHYT
              </Col>
              <Col sm='10'>
                <Form.Text>DN09439540409</Form.Text>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className='align-items-center py-1'>
              <Col sm='2'>
                Từ ngày
              </Col>
              <Col sm='5'>
                <Form.Text>28/07/2023</Form.Text>
              </Col>
              <Col sm='2'>
                Đến ngày
              </Col>
              <Col sm='3'>
                <Form.Text>28/07/2024</Form.Text>
              </Col>
            </Form.Group>
            <Divider />
            <Form.Group as={Row} className='align-items-center py-1'>
              <Col lg='2'>
                Ngày khám bệnh
              </Col>
              <Col lg='5'>
                <Form.Control className='customs-input'></Form.Control>
              </Col>
              <Col lg='2'>
                Ngày vào viện
              </Col>
              <Col lg='3'>
                <Form.Control className='customs-input'></Form.Control>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className='align-items-center py-1'>
              <Col lg='2'>
                Chẩn đoán
              </Col>
              <Col lg='5'>
                <Form.Control as='textarea' rows={2}></Form.Control>
              </Col>
              <Col lg='2'>
                Ngày ra viện
              </Col>
              <Col lg='3'>
                <Form.Control className='customs-input'></Form.Control>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className='align-items-center py-1'>
              <Col lg='2'>
                Bệnh phụ
              </Col>
              <Col lg='5'>
                <Form.Control className='customs-input'></Form.Control>
              </Col>
              <Col lg='5'></Col>
            </Form.Group>
            <Form.Group as={Row} className='align-items-center py-1'>
              <Col lg='2'>
                Hẹn khám lại vào
              </Col>
              <Col lg='5' className='d-flex align-items-center gap-4'>
                <Form.Control className='customs-input w-50px'></Form.Control>
                <Form.Text>giờ</Form.Text>
                <Form.Control className='customs-input w-50px'></Form.Control>
                <Form.Text>phút</Form.Text>
              </Col>
              <Col lg='1'>
                Ngày
              </Col>
              <Col lg='4'>
                <Form.Control className='customs-input'></Form.Control>
              </Col>
            </Form.Group>
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
