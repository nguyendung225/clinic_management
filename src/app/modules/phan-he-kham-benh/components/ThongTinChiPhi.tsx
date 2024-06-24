import { FunctionComponent } from "react";
import { Col, Row } from "react-bootstrap";

interface ThongTinChiPhiProps {
}

const ThongTinChiPhi: FunctionComponent<ThongTinChiPhiProps> = () => {
    return (
        <Row className="info-patient px-12 py-16 spaces min-h-124 mx-0">
            <Col xs="8">
                <div className="fs-14px line-height-22 spaces mb-5 w-100">
                    <span className="d-inline-block spaces W-150 fw-bold">Tiền dịch vụ:</span>
                    <span className="fw-light">100.000.000</span>
                </div>
                <div className="fs-14px line-height-22 spaces mb-5 w-100">
                    <span className="d-inline-block spaces W-150 fw-bold">Tiền thuốc & vật tư:</span>
                    <span className="fw-light">30.000.000</span>
                </div>
                <div className="fs-14px line-height-22 spaces mb-5 w-100">
                    <span className="d-inline-block spaces W-150 fw-bold">Miễn giảm phiếu thu:</span>
                    <span className="fw-light">0</span>
                </div>
                <div className="fs-14px line-height-22 spaces mb-5 w-100">
                    <span className="d-inline-block spaces W-150 fw-bold">Miễn giảm dịch vụ:</span>
                    <span className="fw-light">0</span>
                </div>
            </Col>
            <Col xs="4" className="text-center border-start border-secondary">
                <div className="fs-14px line-height-22 spaces mb-10 text-danger">
                    <p className=" fw-bold mb-0">Tổng chi phí:</p>
                    <span className="fw-normal text-danger">130.000.000</span>
                </div>
                <div className="fs-14px line-height-22 spaces text-title">
                    <p className=" fw-bold mb-0">Còn lại:</p>
                    <span className="fw-normal">30.000.000</span>
                </div>
            </Col>
        </Row>
    );
}

export default ThongTinChiPhi;