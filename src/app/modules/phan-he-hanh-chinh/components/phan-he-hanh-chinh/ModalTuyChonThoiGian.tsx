import { Button, Col, Modal, Row } from "react-bootstrap"
import LabelRequired from "../../../component/LabelRequired";
import TextValidator from "../../../component/TextValidator";

type Props = {
  show: boolean;
  handleCloseDialog: () => void;
}

const ModalTuyChonThoiGian = ({ show, handleCloseDialog }: Props) => {
  return (
    <Modal centered show={show} onHide={handleCloseDialog} contentClassName="spaces min-w-545">
      <Modal.Header closeButton>
        <Modal.Title>
          Tìm kiếm
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Row className="mb-2">
          <Col xl={6} className="d-flex">
            <LabelRequired label="Từ ngày" className="min-w-70px"/>
            <TextValidator type="datetime-local" className="spaces W-175"/>
          </Col>

          <Col xl={6} className="d-flex">
            <LabelRequired label="Đến ngày" className="min-w-70px"/>
            <TextValidator type="datetime-local" className="spaces W-175"/>
          </Col>
        </Row>

        <Row>
          <Col xl={4}><a href="/" onClick={(e) => { e.preventDefault() }}><u>Trong ngày</u></a></Col>
          <Col xl={4}><a href="/" onClick={(e) => { e.preventDefault() }}><u>Trong tuần</u></a></Col>
          <Col xl={4}><a href="/" onClick={(e) => { e.preventDefault() }}><u>Trong tháng</u></a></Col>
        </Row>

        <Row>
          <Col xl={4}><a href="/" onClick={(e) => { e.preventDefault() }}><u>Hôm qua</u></a></Col>
          <Col xl={4}><a href="/" onClick={(e) => { e.preventDefault() }}><u>7 ngày gần đây</u></a></Col>
          <Col xl={4}><a href="/" onClick={(e) => { e.preventDefault() }}><u>30 ngày gần đây</u></a></Col>
        </Row>
      </Modal.Body>

      <Modal.Footer>
        <Button className="btn-fill">Lưu</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalTuyChonThoiGian