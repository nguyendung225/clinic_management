import { useState } from "react";
import { Button, Col, FormCheck, Modal, Row } from "react-bootstrap";
import ModalPhieuIn from "../../../../component/ModalPhieuIn";
import { ModalPhieuInDSBenhNhan } from "./ModalPhieuInDSBenhNhan";
import { stylePrintLandscape } from "../../../../component/phieu-in/constant";

type Props = {
  show: boolean;
  handleCloseDialog: () => void;
}

const ModalTuyChonBaoCao = ({ show, handleCloseDialog }: Props) => {
  const [nhom, setNhom] = useState("");
  const [openPhieuInDanhSachBenhNhan, setOpenPhieuInDanhSachBenhNhan] = useState(false);

  const handleChangeNhom = (e: any) => {
    setNhom(e.target.value);
  }

  const handleOpenPhieuInDanhSachBenhNhan = () =>{
    setOpenPhieuInDanhSachBenhNhan(true);
  }

  return (
    <Modal centered show={show} onHide={handleCloseDialog} className="dialog-background">
      <Modal.Header className="py-4" closeButton>
        <Modal.Title>
          Tùy chọn báo cáo
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Row className="mb-3">
          <Col>
            <FormCheck
              type="radio"
              name="nhom"
              value={"khongNhom"}
              checked={nhom === "khongNhom"}
              label="Không nhóm dữ liệu d-flex align-items-center gap-2"
              onChange={handleChangeNhom}
            />
          </Col>

          <Col>
            <FormCheck
              type="radio"
              name="nhom"
              value={"nhomTheoKhoa"}
              checked={nhom === "nhomTheoKhoa"}
              label="Nhóm theo khoa d-flex align-items-center gap-2"
              onChange={handleChangeNhom}
            />
          </Col>
        </Row>

        <Row>
          <a href="" onClick={(e) => { e.preventDefault(); }}>
            <u>Lọc theo khoa</u>
          </a>
        </Row>
      </Modal.Body>

      <Modal.Footer className="py-3">
        <Button className="btn-fill" onClick={handleOpenPhieuInDanhSachBenhNhan}>Xác nhận</Button>
      </Modal.Footer>

      <ModalPhieuIn
        show={openPhieuInDanhSachBenhNhan}
        handleCloseDialog={() => setOpenPhieuInDanhSachBenhNhan(false)}
        title='Phiếu danh sách bệnh nhân'
        stylePrint={stylePrintLandscape}
        size="xl"
      >
        <ModalPhieuInDSBenhNhan />
      </ModalPhieuIn>
    </Modal>
  )
}

export default ModalTuyChonBaoCao