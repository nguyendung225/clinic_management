import { Field, useFormikContext } from "formik";
import React, { useContext } from "react";
import { Button, Col, Row } from "react-bootstrap";
import AutocompleteV2 from "../../../../component/AutocompleteObjectV2";
import LabelRequired from "../../../../component/LabelRequired";
import TextField from "../../../../component/TextField";
import { PhanHeTiepDonContext } from "../../../contexts/PhanHeTiepDonContext";

const SoDatVong = () => {
  let { values, setFieldValue } = useFormikContext<any>();
  const { benhNhanInfo } = useContext(PhanHeTiepDonContext);

  const handleChangeKhamBenh = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    let itemTTKhamBenh = {
      code: name,
      value: value,
    };

    setFieldValue(name, itemTTKhamBenh);
  };
  return (
    <>
      <div>
        <Row className="mb-2">
          <Col
            xs={4}
            className="d-flex gap-2 mb-1 flex-column text-lable-input"
          >
            <TextField
              className="w-100 flex-auto spaces "
              label="Ngày Đặt vòng"
              name="ngayDatVong"
              type="date"
              labelClassName="ms-0 min-w-130px"
            />
          </Col>
          <Col
            xs={4}
            className="d-flex gap-2 mb-1 flex-column text-lable-input"
          >
            <TextField
              className="w-100 flex-auto spaces "
              label="Số con trai"
              name="soConTrai"
              type="number"
              min={0}
              max={10}
              labelClassName="ms-0 min-w-130px"
            />
          </Col>
          <Col
            xs={4}
            className="d-flex gap-2 mb-1 flex-column text-lable-input"
          >
            <TextField
              className="w-100 flex-auto spaces "
              label="Số con gái"
              name="soConGai"
              type="number"
              min={0}
              max={10}
              labelClassName="ms-0 min-w-130px"
            />
          </Col>
        </Row>
        <Row className="mb-2">
          <TextField
            label="Tình hình khi đặt"
            labelClassName="pe-2 text-break w-130px text-start mb-3 text-uppercase d-flex align-items-start h-54"
            name="loaiDungCuTuCung"
            as="textarea"
            rows={2}
            value={values?.loaiDungCuTuCung?.value || ""}
            onChange={handleChangeKhamBenh}
            readOnlyText={benhNhanInfo?.isView}
          />
        </Row>
        <Row className="mb-2 mt-3">
          <TextField
            label="Loại dụng cụ tử cung"
            labelClassName="pe-2 text-break w-130px text-start mb-3 text-uppercase d-flex align-items-start h-54"
            name="tinhHinhKhiDat"
            as="textarea"
            rows={2}
            value={values?.tinhHinhKhiDat?.value || ""}
            onChange={handleChangeKhamBenh}
            readOnlyText={benhNhanInfo?.isView}
          />
        </Row>
        <Row className="mb-2 d-flex ">
          <div className="spaces d-flex width-100">
            <div className="ms-0 min-w-130px">&nbsp;</div>
            <label className="me-4 d-flex align-items-center min-w-150px">
              <Field type="checkbox" name="coThai" />
              &nbsp;Có thai
            </label>
            <label className="me-4 d-flex align-items-center min-w-150px">
              <Field type="checkbox" name="rongKinh" />
              &nbsp;Rong kinh, rong huyết
            </label>
            <label className="me-4 d-flex align-items-center min-w-150px">
              <Field type="checkbox" name="keHoach" />
              &nbsp;Kế hoạch
            </label>
            <label className="me-4 d-flex align-items-center min-w-150px">
              <Field type="checkbox" name="tut" />
              &nbsp;Tụt
            </label>
          </div>
        </Row>
        <Row className="mb-2 d-flex ">
          <div className="spaces d-flex width-100">
            <div className="ms-0 min-w-130px">&nbsp;</div>
            <label className="me-4 d-flex align-items-center min-w-150px">
              <Field type="checkbox" name="sucKhoe" />
              &nbsp;Sức khỏe
            </label>
            <label className="me-4 d-flex align-items-center min-w-150px">
              <Field type="checkbox" name="manKinh" />
              &nbsp;Mãn kinh
            </label>
            <label className="me-4 d-flex align-items-center min-w-150px">
              <Field type="checkbox" name="caNhan" />
              &nbsp;Cá nhân
            </label>
          </div>
        </Row>
        <Row className="mb-2">
          <TextField
            label="Cách xử trí tiếp tục"
            labelClassName="pe-2 text-break w-130px text-start mb-3 text-uppercase d-flex align-items-start h-54"
            name="cachXuTri"
            as="textarea"
            rows={2}
            value={values?.cachXuTri?.value || ""}
            onChange={handleChangeKhamBenh}
            readOnlyText={benhNhanInfo?.isView}
          />
        </Row>
        <Row className="mb-2 mt-3">
          <TextField
            label="Ghi chú"
            labelClassName="pe-2 text-break w-130px text-start mb-3 text-uppercase d-flex align-items-start h-54"
            name="ghiChu"
            as="textarea"
            rows={2}
            value={values?.ghiChu?.value || ""}
            onChange={handleChangeKhamBenh}
            readOnlyText={benhNhanInfo?.isView}
          />
        </Row>
        <Row className="mb-2 mt-3">
          <Col
            xs={6}
            className="d-flex gap-2 mb-1 flex-column text-lable-input"
          >
            <div className="spaces d-flex w-100">
              <LabelRequired label="Người thực hiện" className="min-w-130px " />
              <AutocompleteV2
                options={[]}
                value={values?.nguoiThucHien}
                name="nguoiThucHien"
                className="autocomplete-custom radius spaces width-100 "
              />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default SoDatVong;
