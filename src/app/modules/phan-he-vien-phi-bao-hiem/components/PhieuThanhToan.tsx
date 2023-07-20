import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Autocomplete } from "../../component/Autocomplete";
import { Formik } from "formik";
import { loaiPhieuOptions, phuongThucTTOptions } from "../const/constants";

const PhieuThanhToan = (props: any) => {
  return (
    <div className="table-box-shadow rounded border mt-3 p-3">
      <Form>
        <Row>
          <Col xs={4}>
            <div className="mb-3">
              <label className="form-label">Người lập</label>
              <Autocomplete options={[]} />
            </div>
            <div className="mb-3">
              <label className="form-label">Ngày lập</label>
              <input
                className="form-control customs-input"
                type="date"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Người thu</label>
              <Autocomplete options={[]} />
            </div>
            <div>
              <label className="form-label">Ngày thu</label>
              <input
                className="form-control customs-input"
                type="date"
              />
            </div>
          </Col>

          <Col xs={4}>
            <div className="mb-3">
              <label className="form-label">Họ tên bệnh nhân</label>
              <input
                className="form-control customs-input"
                type="text"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Loại phiếu</label>
              <Autocomplete className="customs-input" options={loaiPhieuOptions}/>
            </div>
            <div className="mb-3">
              <label className="form-label">Miễn giảm BHYT</label>
              <div className="d-flex align-items-center">
                <input
                  className="form-control customs-input"
                  type="text"
                />
                <h4 className="m-0 ms-3">%</h4>
              </div>
            </div>
            <div>
              <label className="form-label">
                Phương thức thanh toán
              </label>
              <Autocomplete className="customs-input" options={phuongThucTTOptions}/>
            </div>
          </Col>

          <Col xs={4}>
            <div className="mb-3">
              <label className="form-label">Mã BHYT</label>
              <input
                className="form-control customs-input"
                type="text"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Tổng tiền dịch vụ</label>
              <input
                className="form-control customs-input"
                type="text"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Bệnh nhân tạm ứng</label>
              <input
                className="form-control customs-input"
                type="text"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Bệnh viện hoàn ứng</label>
              <input
                className="form-control customs-input"
                type="text"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Bệnh nhân đã nộp</label>
              <input
                className="form-control customs-input"
                type="text"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Bệnh nhân nộp thêm</label>
              <input
                className="form-control customs-input"
                type="text"
              />
            </div>
            <div>
              <label className="form-label">
                <b>THANH TOÁN</b>
              </label>
              <input
                className="form-control customs-input"
                type="text"
              />
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export { PhieuThanhToan };
