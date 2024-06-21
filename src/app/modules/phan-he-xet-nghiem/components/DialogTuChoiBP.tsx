import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { DanhSachBenhPhamInterface } from "../models/DanhSachBenhPhamModels";
import "../PhanHeXetNghiem.scss";

type Props = {
  benhNhan: Partial<DanhSachBenhPhamInterface>;
  handleCloseDialog: () => void;
};

const DialogTuChoiBP = (props: Props) => {
  const { handleCloseDialog, benhNhan } = props;

  return (
    <Modal show={true} centered onHide={handleCloseDialog} size="lg">
      <Modal.Header closeButton className="py-5 header-modal">
        <Modal.Title className="title-dialog-color">
          Từ chối bệnh phẩm
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="py-4">
        <Row>
          <Col>
            <Form.Label>Mã bệnh nhân</Form.Label>
            <Form.Control disabled value={benhNhan?.maBN} size="sm" />
          </Col>
          <Col>
            <Form.Label>Tên bệnh nhân</Form.Label>
            <Form.Control disabled value={benhNhan?.tenBN} size="sm" />
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Label>Barcode</Form.Label>
            <Form.Control disabled value={benhNhan?.barcode} size="sm" />
          </Col>
          <Col>
            <Form.Label>Số phiếu</Form.Label>
            <Form.Control disabled value={benhNhan?.soPhieu} size="sm" />
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Label>Lý do từ chối</Form.Label>
            <Form.Control type="text" as="textarea" size="sm" />
          </Col>
        </Row>
      </Modal.Body>

      <Modal.Footer className="d-flex justify-content-center py-2">
        <Button className="btn-navy min-w-80px" size="sm">
          Lưu
        </Button>
        <Button
          className="btn-navy-outlined min-w-80px"
          size="sm"
          onClick={handleCloseDialog}
        >
          Hủy
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DialogTuChoiBP;
