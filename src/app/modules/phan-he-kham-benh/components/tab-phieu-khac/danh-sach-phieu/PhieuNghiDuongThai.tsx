import { Field, useFormikContext } from "formik";
import React, { useContext } from "react";
import { Button, Col, Row } from "react-bootstrap";
import AutocompleteV2 from "../../../../component/AutocompleteObjectV2";
import LabelRequired from "../../../../component/LabelRequired";
import TextField from "../../../../component/TextField";
import { PhanHeTiepDonContext } from "../../../contexts/PhanHeTiepDonContext";
import { IconButtonSave } from "../../../../component/IconSvg";

const PhieuNghiDuongThai = () => {
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
        <Row>
          <TextField
            label="Chẩn đoán và phương pháp điều trị"
            labelClassName="pe-2 text-break w-130px text-start mb-3 text-uppercase d-flex align-items-start h-54"
            name="chanDoan"
            as="textarea"
            rows={2}
            value={values?.chanDoan?.value || ""}
            onChange={handleChangeKhamBenh}
            readOnlyText={benhNhanInfo?.isView}
          />
        </Row>
        <Row className="mb-2">
          <Col xs={6} className="d-flex gap-2 mb-1 flex-column text-lable-input">
            <TextField
              className="w-100 flex-auto spaces "
              label="Số ngày nghỉ"
              name="soNgayNghi"
              labelClassName="ms-0 min-w-130px"
            />
          </Col>
          <Col xs={6} className="d-flex gap-2 mb-1 flex-column text-lable-input">
            <TextField
              className="w-100 flex-auto spaces "
              label="Mã số BHYT"
              name="maSoBHYT"
              type="number"
              labelClassName="ms-0 min-w-130px"
            />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col xs={6} className="d-flex gap-2 mb-1 flex-column text-lable-input">
            <TextField
              className="w-100 flex-auto spaces "
              label="Từ ngày"
              name="tuNgay"
              type="date"
              labelClassName="ms-0 min-w-130px"
            />
          </Col>
          <Col xs={6} className="d-flex gap-2 mb-1 flex-column text-lable-input">
            <TextField
              className="w-100 flex-auto spaces "
              label="Đến ngày"
              name="denNgay"
              type="date"
              labelClassName="ms-0 min-w-130px"
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <TextField
            label="Đơn vị làm việc"
            labelClassName="pe-2 text-break w-130px text-start mb-3 text-uppercase d-flex align-items-start h-54"
            name="donViLamViec"
            as="textarea"
            rows={2}
            value={values?.donViLamViec?.value || ""}
            onChange={handleChangeKhamBenh}
            readOnlyText={benhNhanInfo?.isView}
          />
        </Row>
        <Row className="mb-2">
          <Col xs={6} className="d-flex gap-2 mb-1 flex-column text-lable-input">
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
          <Col xs={6} className="d-flex gap-2 mb-1 flex-column text-lable-input">
            <div className="spaces d-flex w-100">
              <LabelRequired label="Thủ trưởng đơn vị" className="min-w-130px " />
              <AutocompleteV2
                options={[]}
                value={values?.thuTruongDonVi}
                name="thuTruongDonVi"
                className="autocomplete-custom radius spaces width-100 "
              />
            </div>
          </Col>
        </Row>
        <Row className="mb-2">
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

      <div className="flex flex-center justify-content-between pt-3 mt-16 pb-2 btn-luu">
        <Button className="btn-fill">
          <span>Danh sách</span>
        </Button>
        <div className="d-flex gap-2">
          <Button className="btn-fill">
            <span>Thêm</span>
          </Button>
          <Button className="btn-fill">
            <span>Xóa</span>
          </Button>
          <Button className="btn-fill" type="submit">
            <IconButtonSave/>
            <span>Lưu</span>
          </Button>
          <Button className="btn-fill">
            <span>In</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default PhieuNghiDuongThai;
