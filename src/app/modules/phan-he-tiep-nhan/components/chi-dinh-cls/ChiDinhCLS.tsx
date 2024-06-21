import React, { FC } from "react";
import { Button, Col, Row } from "react-bootstrap";
import XetNghiem from "./components/XetNghiem";
import DichVu from "./components/DichVu";


const ChiDinhCLS: FC = () => {
    return (
        <div className="chiDinhCLS">
            <div >
                <Row className="m-4 mb-3">
                    <Col sm="5" className="box-shadow-36 p-0">
                        <XetNghiem />
                    </Col>
                    <Col sm="7" className="box-shadow-36 p-0" >
                        <DichVu />
                    </Col>
                </Row>
            </div>
            <div className="flex flex-center pb-3">
                <Button className="btn-navy mr-5 w-80px" type="submit">Lưu</Button>
            </div>
        </div>
    )
};


export default ChiDinhCLS;
