import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Filter } from "./Filter";
import { BangDanhSachBenhNhan } from "./bang-danh-sach-benh-nhan/BangDanhSachBenhNhan";
import { BangChiTietDichVu } from "./bang-chi-tiet-dich-vu/BangChiTietDichVu";
import { PhieuThanhToan } from "./PhieuThanhToan";
import DanhSachPhieuDialog from "./danh-sach-phieu/DanhSachPhieu";

const NgoaiTru = () => {
  const [shouldOpenDanhSachPhieuDialog, setShouldOpenDanhSachPhieuDialog] = useState<boolean>(false);


  const handleOpenPhieuKhamTienMeDialog = () => {
    setShouldOpenDanhSachPhieuDialog(true);
  }

  const handleCloseDialog = () => {
    setShouldOpenDanhSachPhieuDialog(false);
  }

  return (
    <div className="p-5">
      <Filter/>
      <BangDanhSachBenhNhan/>
      <Row>
        <Col xs={6} className="pe-1">
          <BangChiTietDichVu/>
        </Col>
        <Col xs={6} className="ps-1">
          <PhieuThanhToan/>
        </Col>
      </Row>
      <div className="flex flex-center pt-5">
        <Button className="btn-navy min-w-80px" size="sm">Thêm phiếu</Button>
        <Button className="btn-navy min-w-80px" size="sm">Thanh toán</Button>
        <Button className="btn-navy min-w-80px" size="sm">In</Button>
        <Button className="btn-navy min-w-80px" size="sm">Hủy bỏ</Button>
        <Button
          className="btn-navy min-w-80px"
          size="sm"
          onClick={handleOpenPhieuKhamTienMeDialog}
        >
          DS Phiếu
        </Button>
      </div>

      {shouldOpenDanhSachPhieuDialog && <DanhSachPhieuDialog
        open={shouldOpenDanhSachPhieuDialog}
        handleClose={handleCloseDialog}
      />}
    </div>
  );
};

export { NgoaiTru };
