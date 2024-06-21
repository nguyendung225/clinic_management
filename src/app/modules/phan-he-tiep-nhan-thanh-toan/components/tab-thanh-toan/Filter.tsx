import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Autocomplete } from "../../../component/Autocomplete";
import TextField from "../../../component/TextField";
import { useFormikContext } from "formik";
import { fillterDSBenhNhan } from "../../models/ThanhToanModel";

const Filter = (props: any) => {
  const {
    handleSubmit,
    values,
    errors,
    touched,
    isValid,
  } = useFormikContext<fillterDSBenhNhan>();
  return (
    <Form onSubmit={handleSubmit}>
      <Row xs={12} className="d-flex justify-content-between">
        <Col xs={12} className="d-flex align-items-baseline">
          <span>
            <label className="form-label me-2">
              <b>Tìm kiếm</b>
            </label>
          </span>
          <span style={{width:"85%"}}>
            <TextField
              name="hoTen"
              value={values?.hoTen}
              type="text"
              isSearch={true}
              handleSearch={handleSubmit}
            />
          </span>
        </Col>
      </Row>
    </Form>
  );
};

export { Filter };
