import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Autocomplete } from "../../component/Autocomplete";
import { doiTuongOptions, trangThaiOptions } from "../const/constants";

const Filter = () => {
  return (
    <>
      <Form>
        <Row xs={12} className="d-flex justify-content-between">
          <Col xs={3}>
            <label className="form-label">
              <b>Đối tượng</b>
            </label>
            <Autocomplete className="customs-input" options={doiTuongOptions}/>
          </Col>
          <Col xs={3}>
            <label className="form-label">
              <b>Trạng thái</b>
            </label>
            <Autocomplete className="customs-input" options={trangThaiOptions}/>
          </Col>
          <Col xs={3}>
            <label className="form-label">
              <b>Từ ngày</b>
            </label>
            <input
              placeholder="DD/MM/YYYY"
              className="form-control customs-input"
              type="date"
            />
          </Col>
          <Col xs={3}>
            <label className="form-label">
              <b>Đến ngày</b>
            </label>
            <input
              placeholder="DD/MM/YYYY"
              className="form-control customs-input"
              type="date"
            />
          </Col>
        </Row>
      </Form>
    </>
  );
};

export { Filter };
