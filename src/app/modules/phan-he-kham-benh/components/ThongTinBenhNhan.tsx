import { FunctionComponent, useContext } from "react";
import { HINH_THUC, LOAI_DOI_TUONG_CONST, UU_TIEN } from "../constants/BenhNhanConst";
import { IBenhNhan } from "../models/DSBenhNhanKhamBenhModels";
import { Button, Col, Row } from "react-bootstrap";
import { PhanHeTiepDonContext } from "../contexts/PhanHeTiepDonContext";

interface ThongTinBenhNhanProps {
}

const ThongTinBenhNhan: FunctionComponent<ThongTinBenhNhanProps> = () => {

    const { benhNhanInfo, setBenhNhanInfo } = useContext(PhanHeTiepDonContext);

    return (
        <div className="bg-white mb-2">
            <div className="d-flex px-3 justify-content-between align-items-center border-bottom">
                <h4 className="text-title fw-bold fs-4 mb-0">Thông tin bệnh nhân</h4>
                <div className=" justify-content-start pl-4 spaces my-9 d-flex gap-4">
                    {benhNhanInfo?.isKhamBenh ? (
                        <>
                            <Button
                                className="btn-fill btn-kham-benh min-w-120 spaces mx-3"
                            // onClick={() => {
                            //     handleOpenChiDinhDichVu();
                            // }}
                            >
                                Chỉ định DV
                            </Button>
                            <Button className="btn-fill btn-kham-benh min-w-120 spaces mx-3"
                            // onClick={() => setOpenCapNhatMauChiDinhDialog(true)}
                            >
                                <span>Kê thuốc</span>
                            </Button>
                            <Button className="btn-fill btn-kham-benh min-w-120 spaces mx-3"
                            // onClick={() => setOpenCapNhatMauChiDinhVatTuDialog(true)}
                            >
                                <span>Kê vật tư</span>
                            </Button>
                        </>
                    ) : (
                        <Button
                            className="min-w-120 spaces mx-3 bg-success"
                            onClick={() => {
                                setBenhNhanInfo({ ...benhNhanInfo, isKhamBenh: true });
                            }}
                        >
                            {/* <i className="bi bi-play-fill"></i> */}
                            <span>Bắt đầu khám</span>
                        </Button>
                    )}

                    <Button className="btn-fill btn-kham-benh min-w-120 spaces mx-3">
                        <span>Xử trí</span>
                    </Button>
                </div>
            </div>
            <div className="p-3">
                <Row>
                    <Col xs="4">
                        <div className="spaces fw-5 mb-8">
                            <span className="d-inline-block spaces W-100">Mã BN:</span>
                            <span className="fw-light">BN202400001</span>
                        </div>
                    </Col>
                    <Col xs="4">
                        <div className="spaces fw-5 mb-8">
                            <span className="d-inline-block spaces W-100">Họ và tên:</span>
                            <span className="fw-light">Nguyễn Văn Quang Huy</span>
                        </div>
                    </Col>
                    <Col xs="4">
                        <div className="spaces fw-5 mb-8">
                            <span className="d-inline-block spaces W-100">Giới tính:</span>
                            <span className="fw-light">Nam</span>
                        </div>
                    </Col>
                    <Col xs="4">
                        <div className="spaces fw-5 mb-8">
                            <span className="d-inline-block spaces W-100">Ngày sinh:</span>
                            <span className="fw-light">1999 - 25 tuổi</span>
                        </div>
                    </Col>
                    <Col xs="4">
                        <div className="spaces fw-5 mb-8">
                            <span className="d-inline-block spaces W-100">Đối tượng:</span>
                            <span className="fw-light">Dịch vụ</span>
                        </div>
                    </Col>
                    <Col xs="4">
                        <div className="spaces fw-5 mb-8">
                            <span className="d-inline-block spaces W-100">SĐT:</span>
                            <span className="fw-light">0123456798</span>
                        </div>
                    </Col>
                    <Col xs="4">
                        <div className="spaces fw-5 mb-8">
                            <span className="d-inline-block spaces W-100">Địa chỉ:</span>
                            <span className="fw-light">Vạn Mỹ, Ngô Duyên, Hải Phòng</span>
                        </div>
                    </Col>
                    <Col xs="4">
                        <div className="spaces fw-5 mb-8">
                            <span className="d-inline-block spaces W-100">Quốc tịch:</span>
                            <span className="fw-light">Việt Nam</span>
                        </div>
                    </Col>
                    <Col xs="4">
                        <div className="spaces fw-5 mb-8">
                            <span className="d-inline-block spaces W-100">Dân tộc:</span>
                            <span className="fw-light">Kinh</span>
                        </div>
                    </Col>
                    <Col xs="4">
                        <div className="spaces fw-5 mb-8">
                            <span className="d-inline-block spaces W-100">Nghề nghiệp:</span>
                            <span className="fw-light">Tự do</span>
                        </div>
                    </Col>
                    <Col xs="4">
                        <div className="spaces fw-5 mb-8">
                            <span className="d-inline-block spaces W-100">Thời điểm tới:</span>
                            <span className="fw-light">03/05/2024 | 8:00</span>
                        </div>
                    </Col>
                    <Col xs="4">
                        <div className="spaces fw-5 mb-8">
                            <span className="d-inline-block spaces W-100">Khoa/phòng:</span>
                            <span className="fw-light">Khoa khám bệnh</span>
                        </div>
                    </Col>
                    <Col xs="4">
                        <div className="spaces fw-5 mb-8">
                            <span className="d-inline-block spaces W-100">Mã BA:</span>
                            <span className="fw-light">BA202400001</span>
                        </div>
                    </Col>
                    <Col xs="4">
                        <div className="spaces fw-5 mb-8">
                            <span className="d-inline-block spaces W-100">Bệnh án:</span>
                            <span className="fw-light">Bệnh án</span>
                        </div>
                    </Col>
                    <Col xs="4">
                        <div className="spaces fw-5 mb-8">
                            <span className="d-inline-block spaces W-100">Bác sĩ:</span>
                            <span className="fw-light">Nguyễn Văn A</span>
                        </div>
                    </Col>
                    <Col xs="8">
                        <div className="spaces fw-5 mb-8">
                            <span className="d-inline-block spaces W-100">Chẩn đoán:</span>
                            <span className="fw-light">...</span>
                        </div>
                    </Col>
                    <Col xs="4">
                        <div className="spaces fw-5 mb-8 text-pri">
                            <span className="d-inline-block spaces W-100">Người nhà:</span>
                            <span className="fw-light">Nguyễn Văn B - 0123456789</span>
                        </div>
                    </Col>
                    <Col xs="8">
                        <div className="spaces fw-5 mb-8">
                            <span className="d-inline-block spaces W-100">Lý do khám:</span>
                            <span className="fw-light">Ho, sốt</span>
                        </div>
                    </Col>
                    <Col xs="4">
                        <div className="spaces fw-5 mb-8">
                            <span className="d-inline-block spaces W-100">Xử trí:</span>
                            <span className="fw-light">...</span>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default ThongTinBenhNhan;