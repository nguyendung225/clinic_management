import { Col, Row } from "react-bootstrap";

const ThongTinBenhNhan = () => {
  return (
    <div className="">
      <Row className="p-5">
        <Col xs={7}>
          <Row xs={12}>
            <h3>THÔNG TIN BỆNH NHÂN</h3>
          </Row>
          <Row xs={12} className="mt-3">
            <div className="d-flex col-4">
              <div className="min-w-100px">Mã bệnh nhân:</div>
              <div className="text-pri">BN2023000078</div>
            </div>
            <div className="d-flex col-5">
              <div className="min-w-100px">Tên bệnh nhân:</div>
              <div className="text-pri">Nguyễn Văn A</div>
            </div>
            <div className="d-flex col-3">
              <div className="min-w-80px">Giới tính:</div>
              <div className="text-pri">Nam</div>
            </div>
          </Row>
          <Row xs={12} className="mt-3">
            <div className="d-flex col-4">
              <div className="min-w-100px">Mã bệnh án:</div>
              <div className="text-pri">BA0000056</div>
            </div>
            <div className="d-flex col-5">
              <div className="min-w-100px">Ngày sinh:</div>
              <div className="text-pri">08/09/1981</div>
            </div>
            <div className="d-flex col-3">
              <div className="min-w-80px">Đối tượng:</div>
              <div className="text-pri">BHYT</div>
            </div>
          </Row>
          <Row xs={12} className="mt-3">
            <div className="d-flex col-4">
              <div className="min-w-100px">Số BHYT:</div>
              <div className="text-pri">DA5945496954</div>
            </div>
            <div className="d-flex col-8">
              <div className="min-w-100px">Địa chỉ:</div>
              <div className="text-pri">25 Trương Định, Hai Bà Trưng, Hà Nội</div>
            </div>
          </Row>
        </Col>
        <Col xs={5}>
          <Row xs={12}>
            <h3>THÔNG TIN KHÁM</h3>
          </Row>
          <Row xs={12} className="mt-3">
            <div className="d-flex col-6">
              <div className="min-w-100px">TG khám:</div>
              <div className="text-pri">BN2023000078</div>
            </div>
            <div className="d-flex col-6">
              <div className="min-w-80px">BS khám:</div>
              <div className="text-pri">BN2023000078</div>
            </div>
          </Row>
          <Row xs={12} className="mt-3">
            <div className="d-flex">
              <div className="min-w-100px">CĐ ban đầu:</div>
              <div className="text-pri">Viêm khớp chân</div>
            </div>
          </Row>
          <Row xs={12} className="mt-3">
            <div className="d-flex col-6">
              <div className="min-w-100px">Chi phí CĐHA:</div>
              <div className="text-pri">1.650.000 VNĐ</div>
            </div>
            <div className="d-flex col-6">
              <div className="min-w-80px">Tạm ứng:</div>
              <div className="text-pri">500.000 VNĐ</div>
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export { ThongTinBenhNhan };
