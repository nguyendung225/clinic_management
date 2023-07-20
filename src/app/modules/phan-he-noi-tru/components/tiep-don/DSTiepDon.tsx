import { FC } from "react";
import { Button, Col, Row } from "react-bootstrap";
import SearchAdvanced from "../../../component/SearchAdvanced";
import ThongTinDieuTri from "./ThongTinDieuTri";
import GridDSTiepDonBenhNhan from "./GridDSTiepDonBenhNhan";

const DSTiepDon: FC = () => {
    return (
        <div className="p-5">
            <Row>
                <Col sm="9">
                    <SearchAdvanced />
                    <div className='pt-3'>
                        <GridDSTiepDonBenhNhan />
                    </div>
                </Col>
                <Col sm="3">
                    <ThongTinDieuTri />
                </Col>
            </Row>
            <div className="flex flex-center pt-8 pb-0">
                <Button className="btn-navy mr-5 ">Nhập khoa</Button>
                <Button className="btn-navy mr-5 ">Bệnh án</Button>
                <Button className="btn-navy mr-5 ">Hủy tiếp nhận</Button>
            </div>
        </div>
    )
};
export default DSTiepDon;
