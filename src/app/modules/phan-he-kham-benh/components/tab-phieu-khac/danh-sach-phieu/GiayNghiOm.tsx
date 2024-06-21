import { Field, useFormikContext } from "formik";
import React, { useContext } from "react";
import { Button, Col, Row } from "react-bootstrap";
import AutocompleteV2 from "../../../../component/AutocompleteObjectV2";
import LabelRequired from "../../../../component/LabelRequired";
import TextField from "../../../../component/TextField";
import { PhanHeTiepDonContext } from "../../../contexts/PhanHeTiepDonContext";

const GiayNghiOm = () => {
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
          <TextField
            label="Chẩn đoán & Phương pháp điều trị"
            labelClassName="text-break w-130px text-start mb-1 text-uppercase d-flex align-items-start h-54"
            name="chanDoanVaDieuTri"
            as="textarea"
            rows={2}
            value={values?.chanDoanVaDieuTri?.value || ""}
            onChange={handleChangeKhamBenh}
            readOnlyText={benhNhanInfo?.isView}
          />
        </Row>
        <Row className="mb-2">
          <Col xs={4} className="d-flex gap-2 mb-1 flex-column text-lable-input">
            <TextField
              className="w-100 flex-auto spaces "
              label="Số ngày nghỉ"
              name="soNgayNghi"
              type="number"
              min={0}
              labelClassName="ms-0 min-w-130px"
            />
          </Col>
          <Col xs={4} className="d-flex gap-2 mb-1 flex-column text-lable-input">
            <TextField
              className="w-100 flex-auto spaces "
              label="Từ ngày"
              name="tuNgay"
              type="date"
              labelClassName="ms-0 min-w-130px"
            />
          </Col>
          <Col xs={4} className="d-flex gap-2 mb-1 flex-column text-lable-input">
            <TextField
              className="w-100 flex-auto spaces "
              label="Đến ngày"
              name="denNgay"
              type="date"
              labelClassName="ms-0 min-w-130px"
            />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col xs={4} className="d-flex gap-2 mb-1 flex-column text-lable-input">
            <div className="spaces d-flex w-100">
              <LabelRequired label="Bác sĩ" className="min-w-130px " />
              <AutocompleteV2
                options={[]}
                value={values?.bacSi}
                name="bacSi"
                className="autocomplete-custom radius spaces width-100 "
              />
            </div>
          </Col>
          <Col xs={4} className="d-flex gap-2 mb-1 flex-column text-lable-input">
            <div className="spaces d-flex w-100">
              <LabelRequired label="Thủ trưởng đơn vị" className="min-w-130px " />
              <AutocompleteV2
                options={[]}
                value={values?.thuTruong}
                name="thuTruong"
                className="autocomplete-custom radius spaces width-100 "
              />
            </div>
          </Col>
          <Col xs={4} className="d-flex gap-2 mb-1 flex-column text-lable-input">
            <TextField
              className="w-100 flex-auto spaces "
              label="Người đại diện"
              name="nguoiDaiDien"
              labelClassName="ms-0 min-w-130px"
            />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col xs={4} className="d-flex gap-2 mb-1 flex-column text-lable-input">
            <TextField
              className="w-100 flex-auto spaces "
              label="Số thẻ BHYT"
              name="soTheBhyt"
              labelClassName="ms-0 min-w-130px"
            />
          </Col>
          <Col xs={4} className="d-flex gap-2 mb-1 flex-column text-lable-input">
            <TextField
              className="w-100 flex-auto spaces "
              label="Mã số BHXH"
              name="maSoBhyt"
              labelClassName="ms-0 min-w-130px"
            />
          </Col>
          <Col xs={4} className="d-flex gap-2 mb-1 flex-column text-lable-input">
            <TextField
              className="w-100 flex-auto spaces "
              label="Đơn vị làm việc"
              name="donViLamViec"
              labelClassName="ms-0 min-w-130px"
            />
          </Col>
        </Row>
        <div className="mt-5 fs-4 mb-1">
          <b>Thông tin cha mẹ</b> <i>(chỉ áp dụng đối với trường hợp người bệnh là trẻ em dưới 7 tuổi)</i>
        </div>
        <Row className="mb-1">
          <Col xs={4} className="d-flex gap-2 mb-1 flex-column text-lable-input">
            <TextField
              className="w-100 flex-auto spaces "
              label="Họ tên cha"
              name="hoTenCha"
              labelClassName="ms-0 min-w-130px"
            />
          </Col>
          <Col xs={4} className="d-flex gap-2 mb-1 flex-column text-lable-input">
            <TextField
              className="w-100 flex-auto spaces "
              label="Họ tên mẹ"
              name="hoTenMe"
              labelClassName="ms-0 min-w-130px"
            />
          </Col>
          <Col xs={4} className="d-flex gap-2 mb-1 flex-column text-lable-input">
            <TextField
              className="w-100 flex-auto spaces "
              label="Tuổi thai (tuần)"
              name="tuoiThai"
              labelClassName="ms-0 min-w-130px"
            />
          </Col>
        </Row>
        <Row className="mb-2 d-flex ">
          <div className="spaces d-flex width-100">
            <div className="ms-0 min-w-130px">&nbsp;</div>
            <label className="me-4 d-flex align-items-center min-w-150px">
              <Field type="checkbox" name="coThai" />
              &nbsp;Đình chỉ thai nghén
            </label>
          </div>
        </Row>
        <Row className="mb-2">
          <TextField
            label="Nguyên nhân đình chỉ thai nghén"
            labelClassName="pe-2 text-break w-130px text-start mb-3 text-uppercase d-flex align-items-start h-54"
            name="nguyenNhan"
            as="textarea"
            rows={2}
            value={values?.nguyenNhan?.value || ""}
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
      </div>
    </>
  );
};

export default GiayNghiOm;
