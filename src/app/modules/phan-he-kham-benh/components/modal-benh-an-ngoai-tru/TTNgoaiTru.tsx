import React, { FC, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Autocomplete } from "../../../component/Autocomplete";
import { danhSachLoaiBenhAn } from "../../constants/BenhAnNgoaiTruConst";

const TiepNhan: FC = () => {

  return (
    <div className="w-100">
      <Row xl={12}>
        <Col xs={3}>
          <Row className="spaces my-5">
            <Col xs={4} className="d-flex align-items-center">
              <label className='spaces pb-4'>Mã bệnh án</label>
            </Col>
            <Col xs={8}>
              <input
                className="form-control customs-input"
                type="text"
                name="maBenhAn"
              />
            </Col>
          </Row>
          <Row className="spaces my-5">
            <Col xs={4} className="d-flex align-items-center">
              <label className='spaces pb-4'>Sổ lưu trữ</label>
            </Col>
            <Col xs={8}>
              <input
                className="form-control customs-input"
                type="text"
                name="maBenhAn"
              />
            </Col>
          </Row>
          <Row className="spaces my-5">
            <Col xs={4} className="d-flex align-items-center">
              <label className='spaces pb-4'>Sổ vào viện</label>
            </Col>
            <Col xs={8}>
              <input
                className="form-control customs-input"
                type="text"
                name="maBenhAn"
              />
            </Col>
          </Row>
        </Col>
        <Col xs={6} className="text-uppercase d-flex justify-content-center align-items-center">
          <h1 >
            bệnh án ngoại trú
          </h1>
        </Col>
        <Col xs={3}>
          <Row className="spaces my-5">
            <Col xs={4} className="d-flex align-items-center">
              <label className='spaces pb-4'>Loại bệnh án</label>
            </Col>
            <Col xs={8}>
              <Autocomplete
                options={danhSachLoaiBenhAn}
                name="loaiBenhAn"
                placeholder="Loại bệnh án"
              />
            </Col>
          </Row>
          <Row className="spaces my-5">
            <Col xs={4} className="d-flex align-items-center">
              <label className='spaces pb-4'>Mã điều trị</label>
            </Col>
            <Col xs={8}>
              <input
                className="form-control customs-input"
                type="text"
                name="maBenhAn"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default TiepNhan;