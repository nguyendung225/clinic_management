import React from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap'
import CustomTabMenu from '../../../../component/CustomTabMenu';
import { DSMenuXML } from '../../../constants/PhanHeChuyenKhoaConstants';

type Props = {
  show: boolean;
  handleCloseDialog: () => void;
}

const ModalXML = ({ show, handleCloseDialog }: Props) => {
  return (
    <Modal
      className="modal-thuoc page-full"
      fullscreen
      show={show}
      animation={false}
      centered
      backdropClassName="spaces top-50"
      onHide={handleCloseDialog}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          Nội dung file xml
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className='p-0 px-10 spaces bg-white'>
        <Row className='border-bottom py-1 px-0'>
          <Col xs={8} className='d-flex'>
            <Button className='btn-fill me-2'>Mở rộng</Button>
            <Button className='btn-fill me-2'>Thu nhỏ</Button>
            <Button className='btn-fill me-2'>Xuất XML</Button>
            <Button className='btn-fill me-2'>Xem XMl</Button>
            <Button className='btn-fill me-2'>Dạng bảng</Button>
            <Button className='btn-fill me-2'>Kiểm tra XML</Button>
          </Col>

          <Col className='d-flex justify-content-end align-items-center'>
            <div className='border-end pe-1 text-uppercase fw-bold'>Trần Miến | 2000320001 | 2000 | Nam</div>

            <div className='ps-1 text-center'>
              <div className='text-danger fw-bold'>BHYT</div>
              <div className='text-info fw-bold'>100%</div>
            </div>
          </Col>
        </Row>

        <Row>
          <CustomTabMenu danhsachTabs={DSMenuXML} />
        </Row>
      </Modal.Body>
    </Modal>
  )
}

export default ModalXML