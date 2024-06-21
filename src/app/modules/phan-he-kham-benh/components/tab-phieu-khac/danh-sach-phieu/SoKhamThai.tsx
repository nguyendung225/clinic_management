import { Field, useFormikContext } from "formik";
import React, { useContext } from "react";
import { Button, Col, Row } from "react-bootstrap";
import AutocompleteV2 from "../../../../component/AutocompleteObjectV2";
import LabelRequired from "../../../../component/LabelRequired";
import TextField from "../../../../component/TextField";
import { PhanHeTiepDonContext } from "../../../contexts/PhanHeTiepDonContext";

const SoKhamThai = () => {
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
      <div className="pe-2 pb-2">
        <Row className="mb-2">
          <Col xs={4} className="d-flex gap-2 mb-1 flex-column text-lable-input">
            <TextField
              className="w-100 flex-auto spaces "
              label="Ngày khám"
              name="ngayKham"
              type="date"
              labelClassName="ms-0 min-w-145px"
            />
          </Col>
          <Col xs={4} className="d-flex gap-2 mb-1 flex-column text-lable-input">
            <TextField
              className="w-100 flex-auto spaces "
              label="Số con hiện có"
              name="ngayCap"
              type="number"
              min={0}
              max={10}
              labelClassName="ms-0 min-w-145px"
            />
          </Col>
          <Col xs={4} className="d-flex gap-2 mb-1 flex-column text-lable-input">
            <TextField
              className="w-100 flex-auto spaces "
              label="Lần có thai thứ"
              name="lanCoThai"
              type="number"
              min={0}
              max={10}
              labelClassName="ms-0 min-w-145px"
            />
          </Col>
        </Row>
        <Row className="mb-2">
          <TextField
            label="Tiền sử sức khỏe và sinh sản"
            labelClassName="pe-2 text-break w-145px text-start mb-3 text-uppercase d-flex align-items-start h-54"
            name="tienSu"
            as="textarea"
            rows={2}
            value={values?.tienSu?.value || ""}
            onChange={handleChangeKhamBenh}
            readOnlyText={benhNhanInfo?.isView}
          />
        </Row>
        <Row className="mb-2 mt-3">
          <Col xs={4} className="d-flex gap-2 mb-1 flex-column text-lable-input">
            <TextField
              className="w-100 flex-auto spaces "
              label="Ngày kinh cuối"
              name="ngayKinhCuoi"
              type="date"
              labelClassName="ms-0 min-w-145px"
            />
          </Col>
          <Col xs={4} className="d-flex gap-2 mb-1 flex-column text-lable-input">
            <TextField
              className="w-100 flex-auto spaces "
              label="Tuần thai"
              name="tuanThai"
              type="number"
              min={0}
              max={10}
              labelClassName="ms-0 min-w-145px"
            />
          </Col>
          <Col xs={4} className="d-flex gap-2 mb-1 flex-column text-lable-input">
            <TextField
              className="w-100 flex-auto spaces "
              label="Ngày sinh dự đoán"
              name="ngaySinhDuDoan"
              type="date"
              labelClassName="ms-0 min-w-145px"
            />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col xs={3} className="d-flex gap-2 mb-1 flex-column text-lable-input">
            <TextField
              className="w-100 flex-auto spaces "
              label="Trọng lượng"
              name="trongLuong"
              type="number"
              min={0}
              labelClassName="ms-0 min-w-145px"
            />
          </Col>
          <Col xs={3} className="d-flex gap-2 mb-1 flex-column text-lable-input">
            <TextField
              className="w-100 flex-auto spaces "
              label="Vòng bụng"
              name="vongBung"
              type="number"
              min={0}
              labelClassName="ms-0 min-w-145px"
            />
          </Col>
          <Col xs={3} className="d-flex gap-2 mb-1 flex-column text-lable-input">
            <TextField
              className="w-100 flex-auto spaces "
              label="Cao CT"
              name="caoCT"
              type="number"
              min={0}
              labelClassName="ms-0 min-w-145px"
            />
          </Col>
          <Col xs={3} className="d-flex gap-2 mb-1 flex-column text-lable-input">
            <TextField
              className="w-100 flex-auto spaces "
              label="Khung chậu"
              name="khungChau"
              type="number"
              min={0}
              labelClassName="ms-0 min-w-145px"
            />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col xs={6} className="d-flex gap-2 mb-1 flex-column text-lable-input">
            <TextField
              className="w-100 flex-auto spaces "
              label="Protein niệu"
              name="proteinNieu"
              labelClassName="ms-0 min-w-145px"
            />
          </Col>
          <Col xs={6} className="d-flex gap-2 mb-1 flex-column text-lable-input">
            <TextField
              className="w-100 flex-auto spaces "
              label="Huyết áp (mmHg)"
              name="huyetAp"
              labelClassName="ms-0 min-w-145px"
            />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col xs={6} className="d-flex gap-2 mb-1 flex-column text-lable-input">
            <TextField
              className="w-100 flex-auto spaces "
              label="Tình trạng thiếu máu"
              name="tinhTrangThieuMau"
              labelClassName="ms-0 min-w-145px"
            />
          </Col>
          <Col xs={6} className="d-flex gap-2 mb-1 flex-column text-lable-input">
            <TextField
              className="w-100 flex-auto spaces "
              label="Uống viên sắt"
              name="uongVienSat"
              labelClassName="ms-0 min-w-145px"
            />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col xs={6} className="d-flex gap-2 mb-1 flex-column text-lable-input">
            <TextField
              className="w-100 flex-auto spaces "
              label="Xét nghiệm nước tiểu"
              name="xetNghiemNuocTieu"
              labelClassName="ms-0 min-w-145px"
            />
          </Col>
          <Col xs={6} className="d-flex gap-2 mb-1 flex-column text-lable-input">
            <TextField
              className="w-100 flex-auto spaces "
              label="Xét nghiệm HIV"
              name="xetNghiemHiv"
              labelClassName="ms-0 min-w-145px"
            />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col xs={6} className="d-flex gap-2 mb-1 flex-column text-lable-input">
            <TextField
              className="w-100 flex-auto spaces "
              label="Điều trị ARV"
              name="dieuTriArv"
              labelClassName="ms-0 min-w-145px"
            />
          </Col>
          <Col xs={6} className="d-flex gap-2 mb-1 flex-column text-lable-input">
            <TextField
              className="w-100 flex-auto spaces "
              label="Xét nghiệm khác"
              name="xetNghiemKhac"
              labelClassName="ms-0 min-w-145px"
            />
          </Col>
        </Row>
        <Row className="mb-2">
          <TextField
            label="Số mũi UV đã tiêm"
            labelClassName="pe-2 text-break w-145px text-start mb-3 text-uppercase d-flex align-items-start h-54"
            name="soMuiUVDaTiem"
            as="textarea"
            rows={2}
            value={values?.soMuiUVDaTiem?.value || ""}
            onChange={handleChangeKhamBenh}
            readOnlyText={benhNhanInfo?.isView}
          />
        </Row>
        <Row className="mb-2 mt-3">
          <Col xs={6} className="d-flex gap-2 mb-1 flex-column text-lable-input">
            <TextField
              className="w-100 flex-auto spaces "
              label="Tim thai"
              name="timThai"
              labelClassName="ms-0 min-w-145px"
            />
          </Col>
          <Col xs={6} className="d-flex gap-2 mb-1 flex-column text-lable-input">
            <TextField
              className="w-100 flex-auto spaces "
              label="Ngôi thai"
              name="ngoiThai"
              labelClassName="ms-0 min-w-145px"
            />
          </Col>
        </Row>
        <Row className="mb-2 d-flex ">
        <div className="spaces d-flex width-100">
          <div className="ms-0 min-w-145px">&nbsp;</div>
            <label className="me-4 d-flex align-items-center">
              <Field type="checkbox" name="deThuong" />
              &nbsp;Đẻ thường
            </label>
            <label className="me-4 d-flex align-items-center">
              <Field type="checkbox" name="coNguyCo" />
              &nbsp;Có nguy cơ
            </label></div>
        </Row>
        <Row className="mb-2">
          <Col xs={6} className="d-flex gap-2 mb-1 flex-column text-lable-input">
            <div className="spaces d-flex w-100">
              <LabelRequired
                label="Người khám"
                className="min-w-145px "
              />
              <AutocompleteV2
                options={[]}
                value={values?.nguoiKham}
                name="nguoiKham"
                className="autocomplete-custom radius spaces width-100 "
              />
            </div>
          </Col>
        </Row>
        <Row className="mb-2">
          <TextField
            label="Ghi chú"
            labelClassName="pe-2 text-break w-145px text-start mb-3 text-uppercase d-flex align-items-start h-54"
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

export default SoKhamThai;
