import { FC, useState } from "react";
import { Col, Row, Tab, Tabs } from "react-bootstrap";
import { BangDanhSachDichVuModel } from "../../../../phan-he-tiep-nhan-thanh-toan/models/ChiDinhCLSModel";
import { dataDanhSachDichVu } from "../../../../phan-he-tiep-nhan-thanh-toan/constants/ChiDinhCLSConst";
import DSDichVuChiDinhColumn from "./DSDichVuChiDinhColumn";
import { TableCustom } from "../../../../component/table/table-custom/TableCustom";

const DichVu: FC = () => {
    const [activeTab, setActiveTab] = useState<string>("0");

    const handleTabSelect: (eventKey: string | null) => void = (eventKey) => {
        if (eventKey) {
            setActiveTab(eventKey);
        }
    };
    return (
        <div>
            <div className="spaces px-16">
                <Row className="spaces py-5">
                    <Col sm={2} >
                        <label>Mã BN:</label>
                    </Col>
                    <Col sm={4} >
                        <label>Họ và tên:</label>
                    </Col>
                    <Col sm={2} className="spaces p-0">
                        <label>Năm sinh:</label>
                    </Col>
                    <Col sm={4} >
                        <label>Đối tượng:</label>
                    </Col>
                </Row>
                <Row className="spaces py-5">
                    <Col sm={6} >
                        <label>Địa chỉ:</label>
                    </Col>
                    <Col sm={6} className="spaces p-0">
                        <label>Số BHYT:</label>
                    </Col>
                </Row>
                <Row className="spaces py-5">
                    <Col sm={12} >
                        <label>TG chỉ định:</label>
                    </Col>
                </Row>
                <Row className="spaces py-5">
                    <Col sm={12}>
                        <label>Chẩn đoán:</label>
                    </Col>
                </Row>
            </div>
            <div className="pt-4">
                <Tabs className="customs-tabs tabXetNghiem" fill justify activeKey={activeTab} onSelect={handleTabSelect}>
                    <Tab eventKey={"0"} title="Danh sách dich vụ chỉ định">
                        <div className="mt-4">
                            <TableCustom<BangDanhSachDichVuModel>
                                data={dataDanhSachDichVu}
                                columns={DSDichVuChiDinhColumn}
                            />
                        </div>
                    </Tab>
                    <Tab eventKey={"1"} title="Danh sách dịch  vụ đã chỉ định">
                        <div className="mt-4">
                            <TableCustom<BangDanhSachDichVuModel>
                                data={dataDanhSachDichVu}
                                columns={DSDichVuChiDinhColumn}
                            />
                        </div>
                    </Tab>
                </Tabs>
            </div>

            <div className="spaces p-16">
                <Row className="spaces py-5">
                    <Col sm={4} >
                        <label>Tổng chi phí:</label>
                    </Col>
                    <Col sm={4} >
                        <label>Bảo hiểm trả:</label>
                    </Col>
                    <Col sm={4} className="spaces p-0">
                        <label>Bệnh nhân trả:</label>
                    </Col>
                </Row>
                <Row className="spaces py-5">
                    <Col sm={4} >
                        <label>Tạm ứng:</label>
                    </Col>
                    <Col sm={4} >
                        <label>Miễn giảm:</label>
                    </Col>
                    <Col sm={4} className="spaces p-0">
                        <label>Đã thanh toán:</label>
                    </Col>
                </Row>
                <Row className="spaces py-5">
                    <Col sm={8} >
                        <label>Chênh lệch tạm ứng - phải nộp:</label>
                    </Col>

                    <Col sm={4} className="spaces p-0">
                        <label>Thanh toán thêm:</label>
                    </Col>
                </Row>
            </div>
        </div>
    )
};


export default DichVu;
