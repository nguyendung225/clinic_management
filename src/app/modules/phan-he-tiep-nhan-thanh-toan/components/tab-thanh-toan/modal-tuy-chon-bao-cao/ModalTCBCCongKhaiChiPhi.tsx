import { Button, Col, Modal, Row } from 'react-bootstrap'
import TextField from '../../../../component/TextField';
import { useState } from 'react';
import ModalPhieuIn from '../../../../component/ModalPhieuIn';
import PhieuCongKhaiChiPhi from '../modal-phieu-in/PhieuCongKhaiChiPhi';
import { stylePrint, stylePrintLandscape } from '../../../../component/phieu-in/constant';

type Props = {
  show: boolean;
  handleCloseDialog: () => void;
}

const ModalTCBCCongKhaiChiPhi = ({ show, handleCloseDialog }: Props) => {
  const [openPhieuCongKhaiChiPhi, setOpenPhieuCongKhaiChiPhi] = useState(false);

  const handleOpenPhieuCongKhaiChiPhi = () => {
    setOpenPhieuCongKhaiChiPhi(true);
  }

  return (
    <>
      <Modal centered show={show} onHide={handleCloseDialog} contentClassName='spaces W-620 h-240 m-auto' fullscreen>
        <Modal.Header closeButton className='py-4'>
          <Modal.Title>
            Tùy chọn báo cáo
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Row className='mb-3'>
            <Col>
              <TextField
                label="Từ ngày"
                type="dateTime-local"
                name="tuNgay"
                className="spaces max-w-160"
                labelClassName="spaces min-w-62"
              />
            </Col>
            <Col>
              <TextField
                label="Từ ngày"
                type="dateTime-local"
                name="tuNgay"
                className="spaces max-w-160"
                labelClassName="spaces min-w-62"
              />
            </Col>
          </Row>

          <Row className='mb-3'>
            <Col><a href="" onClick={(e) => { e.preventDefault(); }}><u>Trong ngày</u></a></Col>
            <Col><a href="" onClick={(e) => { e.preventDefault(); }}><u>Trong tuần</u></a></Col>
            <Col><a href="" onClick={(e) => { e.preventDefault(); }}><u>Trong tháng</u></a></Col>
          </Row>

          <Row>
            <Col><a href="" onClick={(e) => { e.preventDefault(); }}><u>Hôm qua</u></a></Col>
            <Col><a href="" onClick={(e) => { e.preventDefault(); }}><u>7 ngày gần đây</u></a></Col>
            <Col><a href="" onClick={(e) => { e.preventDefault(); }}><u>30 ngày gần đây</u></a></Col>
          </Row>
        </Modal.Body>

        <Modal.Footer className='py-3'>
          <Button className='btn-fill' onClick={handleOpenPhieuCongKhaiChiPhi}>Lưu</Button>
        </Modal.Footer>
      </Modal>

      <ModalPhieuIn
        show={openPhieuCongKhaiChiPhi}
        handleCloseDialog={() => setOpenPhieuCongKhaiChiPhi(false)}
        title='Phiếu công khai chi phí khám chữa bệnh'
        stylePrint={stylePrintLandscape}
        size='xl'
      >
        <PhieuCongKhaiChiPhi />
      </ModalPhieuIn>
    </>
  )
}

export default ModalTCBCCongKhaiChiPhi