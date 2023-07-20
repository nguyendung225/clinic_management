import React, { FC } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Autocomplete } from "../../../component/Autocomplete";
import {
  doiTuong,
  noiDangKyKCBBD,
} from "../../const/BenhAnNgoaiTruConst";
import { THONGTINTUYEN } from "../../../phan-he-tiep-nhan/const/PhanHeTiepNhan";

const TTDieuTri: FC = () => {

  return (
    <div className="administrative">
      <Row>
        <h2 className="text-uppercase">Thông tin điều trị</h2>
      </Row>
      <Row className="spaces ml-16">
        <Col xs={6}>
          <Row className="spaces my-5">
            <Col xs={3} className="">
              <div>
                <label className='spaces pb-4'>
                  Đối tượng
                </label>
                <Autocomplete
                  options={doiTuong}
                  name=""
                  placeholder="Đối tượng..."
                />
              </div>
            </Col>
            <Col xs={5}>
              <div>
                <label className='spaces pb-4'>
                  Số BHYT
                </label>
                <input
                  type="text"
                  className="form-control customs-input"
                  name="doiTuong"
                />
              </div>
            </Col>
            <Col xs={4} className="d-flex align-items-end spaces pb-4">
              <Form.Check
                className="spaces customs-form-check"
                inline
                label="KT thẻ"
              />
              <Form.Check
                className="customs-form-check"
                inline
                label="Nợ thẻ"
              />
            </Col>
          </Row>
          <Row className="spaces my-5">
            <div>
              <label className='spaces pb-4'>
                Nơi ĐKKCB BĐ
              </label>
              <Autocomplete
                options={noiDangKyKCBBD}
                name=""
                placeholder="Nơi ĐKKCB BĐ..."
              />
            </div>
          </Row>
          <Row className="spaces my-5">
            <Col xs={8}>
              <div>
                <label className='spaces pb-4'>
                  Địa chỉ BHYT
                </label>
                <input
                  type="text"
                  className="form-control customs-input"
                  name="diaChiBHYT"
                />
              </div>
            </Col>
            <Col xs={4}>
              <div>
                <label className='spaces pb-4'>
                  Mã NS
                </label>
                <Autocomplete
                  options={doiTuong}
                  name=""
                  placeholder="Mã NS..."
                />
              </div>
            </Col>
          </Row>
          <Row className="spaces my-5">
            <Col xs={5}>
              <div>
                <label className='spaces pb-4'>
                  Vào khoa lúc
                </label>
                <input
                  type="text"
                  className="form-control customs-input"
                  name="diaChiBHYT"
                />
              </div>
            </Col>
            <Col xs={7}>
              <div>
                <label className='spaces pb-4 mb-8'>
                  Nơi GT
                </label>
                <Row >
                  <Col xs={4}>
                    <Form.Check
                      className="customs-form-check__radio"
                      inline
                      name="noiGT"
                      type="radio"
                      label="Y tế"
                    />
                  </Col>
                  <Col xs={4}>
                    <Form.Check
                      className="customs-form-check__radio"
                      inline
                      name="noiGT"
                      type="radio"
                      label="Tự đến"
                    />
                  </Col>
                  <Col xs={4}>
                    <Form.Check
                      className="customs-form-check__radio"
                      inline
                      name="noiGT"
                      type="radio"
                      label="Khác"
                    />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row className="spaces my-5">
            <Col xs={6}>
              <div>
                <label className='spaces pb-4'>
                  Vào phòng
                </label>
                <Autocomplete
                  options={doiTuong}
                  name=""
                  placeholder="Vào phòng..."
                />
              </div>
            </Col>
            <Col xs={6}>
              <div>
                <label className='spaces pb-4'>
                  Vào từ
                </label>
                <Autocomplete
                  options={doiTuong}
                  name=""
                  placeholder="Vào từ khoa..."
                />
              </div>
            </Col>
          </Row>
          <Row className="spaces my-5">
            <div>
              <label className='spaces pb-4'>
                CĐ nơi GT
              </label>
              <input
                type="text"
                className="form-control customs-input"
                name="diaChiBHYT"
              />
            </div>
          </Row>
          <Row className="spaces my-5">
            <div>
              <label className='spaces pb-4'>
                CĐ vào khoa
              </label>
              <Autocomplete
                options={doiTuong}
                name=""
                placeholder="Mã NS..."
              />
            </div>
          </Row>
          <Row className="spaces my-5">
            <div>
              <label className='spaces pb-4'>
                CĐ vào khoa KT
              </label>
              <input
                type="text"
                className="form-control customs-input"
                name="diaChiBHYT"
              />
            </div>
          </Row>
          <Row className="spaces mt-32 mb-16">
            <Col xs={3}>
              <Form.Check
                className="spaces customs-form-check "
                inline
                label="Thủ thuật"
              />
            </Col>
            <Col xs={3}>
              <Form.Check
                className="spaces customs-form-check "
                inline
                label="Phẫu thuật"
              />
            </Col>
            <Col xs={3}>
              <Form.Check
                className="spaces customs-form-check "
                inline
                label="Tai biến"
              />
            </Col>
            <Col xs={3}>
              <Form.Check
                className="spaces customs-form-check"
                inline
                label="Biến chứng"
              />
            </Col>
          </Row>
          <Row className="spaces my-5">
            <Col xs={8}>
              <div>
                <label className='spaces pb-4'>
                  Kết quả điều trị
                </label>
                <Autocomplete
                  options={doiTuong}
                  name=""
                  placeholder="Mã NS..."
                />
              </div>
            </Col>
            <Col xs={4}>
              <div>
                <label className='spaces pb-4'>
                  Số ngày điều trị
                </label>
                <input
                  type="text"
                  className="form-control customs-input"
                  name="diaChiBHYT"
                />
              </div>
            </Col>
          </Row>
          <Row className="spaces my-5">
            <Col xs={8}>
              <div>
                <label className='spaces pb-4'>
                  Giải phẫu bệnh
                </label>
                <Autocomplete
                  options={doiTuong}
                  name=""
                  placeholder="Mã NS..."
                />
              </div>
            </Col>
            <Col xs={4} className="d-flex align-items-end">
              <div>
                <label className='spaces pb-8'>
                  (Khi có sinh thiết)
                </label>
              </div>
            </Col>
          </Row>
        </Col>

        <Col xs={6}>
          <Row className="spaces my-5">
            <Col xs={4}>
              <div>
                <label className='spaces pb-4'>
                  Từ Ngày
                </label>
                <input
                  type="text"
                  className="form-control customs-input"
                  name="doiTuong"
                />
              </div>
            </Col>
            <Col xs={4}>
              <div>
                <label className='spaces pb-4'>
                  Đến ngày
                </label>
                <input
                  type="text"
                  className="form-control customs-input"
                  name="doiTuong"
                />
              </div>
            </Col>
            <Col xs={4}>
              <div>
                <label className='spaces pb-4'>
                  MG
                </label>
                <Autocomplete
                  options={doiTuong}
                  name=""
                  placeholder="Đối tượng..."
                />
              </div>
            </Col>
          </Row>
          <Row className="spaces my-5">
            <div>
              <label className='spaces pb-4'>
                Nơi chuyển đến
              </label>
              <Autocomplete
                options={doiTuong}
                name=""
                placeholder="Nơi chuyển đến..."
              />
            </div>
          </Row>
          <Row className="spaces my-5">
            <Col xs={4}>
              <div>
                <label className='spaces pb-4'>
                  Tuyến
                </label>
                <Autocomplete
                  options={THONGTINTUYEN}
                  name=""
                  placeholder="Tuyến..."
                />
              </div>
            </Col>
            <Col xs={4} className="d-flex align-items-end spaces pb-4 pr-0">
              <Form.Check
                className="customs-form-check"
                inline
                label="BH 5 năm"
              />
              <Form.Check
                className="customs-form-check"
                label="6 tháng"
              />
            </Col>
            <Col xs={4}>
              <div className="">
                <label className='spaces pb-4'>
                  TG đủ 5 năm
                </label>
                <input
                  type="text"
                  className="form-control customs-input"
                  name="doiTuong"
                />
              </div>
            </Col>
          </Row>
          <Row className="spaces my-5">
            <Col xs={4}>
              <div>
                <label className='spaces pb-4'>
                  Ra khoa lúc
                </label>
                <input
                  type="text"
                  className="form-control customs-input"
                  name="doiTuong"
                />
              </div>
            </Col>
            <Col xs={3}>
              <div>
                <label className='spaces pb-4'>
                  Mức Hưởng
                </label>
                <input
                  type="text"
                  className="form-control customs-input w-50"
                  name="doiTuong"
                />
              </div>
            </Col>
            <Col xs={1}></Col>
            <Col xs={4}>
              <div>
                <label className='spaces pb-4'>
                  TG hưởng ĐCT
                </label>
                <input
                  type="text"
                  className="form-control customs-input"
                  name="doiTuong"
                />
              </div>
            </Col>
          </Row>
          <Row className="spaces my-5">
            <Col xs={4}>
              <div>
                <label className='spaces pb-4'>
                  Vào lần
                </label>
                <input
                  type="text"
                  className="form-control customs-input"
                  name="doiTuong"
                />
              </div>
            </Col>
            <Col xs={8}>
              <div>
                <label className='spaces pb-4'>
                  Bác sĩ điều trị
                </label>
                <Autocomplete
                  options={THONGTINTUYEN}
                  name=""
                  placeholder="Tuyến..."
                />
              </div>
            </Col>
          </Row>
          <Row className="spaces my-5">
            <div>
              <label className='spaces pb-4'>
                CĐ vào viện
              </label>
              <input
                type="text"
                className="form-control customs-input"
                name="doiTuong"
              />
            </div>
          </Row>
          <Row className="spaces my-5">
            <div>
              <label className='spaces pb-4'>
                CĐ vào viện KT
              </label>
              <input
                type="text"
                className="form-control customs-input"
                name="doiTuong"
              />
            </div>
          </Row>
          <Row className="spaces my-5">
            <Col xs={8}>
              <div>
                <label className='spaces pb-4'>
                  Bệnh chính
                </label>
                <Autocomplete
                  options={THONGTINTUYEN}
                  name=""
                  placeholder="Bệnh chính..."
                />
              </div>
            </Col>
            <Col xs={4}>
              <div>
                <label className='spaces pb-4'>
                  Ghi chú
                </label>
                <input
                  type="text"
                  className="form-control customs-input"
                  name="doiTuong"
                />
              </div>
            </Col>
          </Row>
          <Row className="spaces my-5">
            <Col xs={8}>
              <div>
                <label className='spaces pb-4'>
                  Bệnh kèm theo
                </label>
                <input
                  type="text"
                  className="form-control customs-input"
                  name="doiTuong"
                />
              </div>
            </Col>
            <Col xs={4}>
              <div>
                <label className='spaces pb-4'>
                  Ghi chú
                </label>
                <input
                  type="text"
                  className="form-control customs-input"
                  name="doiTuong"
                />
              </div>
            </Col>
          </Row>
          <Row className="spaces my-5">
            <div>
              <label className='spaces pb-4'>
                Xử trí
              </label>
              <Autocomplete
                options={THONGTINTUYEN}
                name=""
                placeholder="Bệnh chính..."
              />
            </div>
          </Row>
        </Col>
      </Row>

    </div>
  );
};
export default TTDieuTri;
