import { useFormikContext } from "formik";
import React, { useContext } from "react";
import { Button, Col, Row } from "react-bootstrap";
import AutocompleteV2 from "../../../../component/AutocompleteObjectV2";
import LabelRequired from "../../../../component/LabelRequired";
import TextField from "../../../../component/TextField";
import { PhanHeTiepDonContext } from "../../../contexts/PhanHeTiepDonContext";
import { donViDoNongDoCon } from "../../../constants/tab-phieu-khac/ConstantTabPhieuKhac";

const KhamSucKhoeLaiXe = () => {
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
      <div className="me-4">
        <Row className="mb-2">
          <Col
            xs={6}
            className="d-flex gap-2 mb-1 flex-column text-lable-input"
          >
            <TextField
              className="w-100 flex-auto spaces "
              label="Số CCCD/Hộ chiếu"
              name="cccd"
              labelClassName="ms-0 min-w-140px"
            />
          </Col>
          <Col
            xs={6}
            className="d-flex gap-2 mb-1 flex-column text-lable-input"
          >
            <TextField
              className="w-100 flex-auto spaces "
              label="Ngày cấp"
              name="ngayCap"
              type="date"
              labelClassName="ms-0 min-w-140px"
            />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col
            xs={12}
            className="d-flex gap-2 mb-1 flex-column text-lable-input"
          >
            <TextField
              className="w-100 flex-auto spaces "
              label="Nơi cấp"
              name="noiCap"
              labelClassName="ms-0 min-w-140px"
            />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col
            xs={6}
            className="d-flex gap-2 mb-1 flex-column text-lable-input"
          >
            <TextField
              className="w-100 flex-auto spaces "
              label="Hạng bằng lái"
              name="hangBangLai"
              labelClassName="ms-0 min-w-140px"
            />
          </Col>
          <Col
            xs={6}
            className="d-flex gap-2 mb-1 text-lable-input"
          >
            <div className="spaces width-50 d-flex">
              <TextField
                className="flex-auto spaces "
                label="Kết quả nồng độ cồn"
                name="ketQuaNongDoCon"
                labelClassName="ms-0 min-w-140px"
              />
            </div>
            <div className="spaces width-50 d-flex">
              <AutocompleteV2
                defaultValue={donViDoNongDoCon[0]}
                options={donViDoNongDoCon}
                value={values?.donViDoNongDoCon}
                name="donViDoNongDoCon"
                isClearable={false}
                className="autocomplete-custom radius spaces width-100 "
              />
            </div>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col
            xs={6}
            className="d-flex gap-2 mb-1 flex-column text-lable-input"
          >
            <div className="spaces d-flex w-100">
              <LabelRequired
                label="Kết quả XN ma túy"
                className="min-w-140px"
              />
              <AutocompleteV2
                options={[]}
                value={values?.ketQuaXNMaTuy}
                name="ketQuaXNMaTuy"
                className="autocomplete-custom radius spaces width-100 "
              />
            </div>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col
            xs={6}
            className="d-flex gap-2 mb-1 flex-column text-lable-input"
          >
            <TextField
              className="w-100 flex-auto spaces "
              label="Ngày kết luận"
              name="ngayKetLuan"
              type="date"
              labelClassName="ms-0 min-w-140px"
            />
          </Col>
          <Col
            xs={6}
            className="d-flex gap-2 mb-1 flex-column text-lable-input"
          >
             <div className="spaces d-flex w-100">
              <LabelRequired
                label="Bác sĩ kết luận"
                className="min-w-140px"
              />
              <AutocompleteV2
                options={[]}
                value={values?.bacSiKetLuan}
                name="bacSiKetLuan"
                className="autocomplete-custom radius spaces width-100 "
              />
            </div>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col
            xs={12}
            className="d-flex gap-2 mb-1 flex-column text-lable-input"
          >
            <div className="spaces d-flex w-100">
              <LabelRequired
                label="Kết luận của bác sĩ"
                className="min-w-140px"
              />
              <AutocompleteV2
                options={[]}
                value={values?.ketLuanCuaBacSi}
                name="ketLuanCuaBacSi"
                className="autocomplete-custom radius spaces width-100 "
              />
            </div>
          </Col>
        </Row>
        <Row className="mb-2">
          <TextField
            label="Lý do sức khỏe không đạt"
            labelClassName="pe-2 w-140px text-start mb-3 d-flex align-items-start h-54"
            name="lyDoKhongDat"
            as="textarea"
            rows={2}
            value={values?.lyDoKhongDat?.value || ""}
            onChange={handleChangeKhamBenh}
            readOnlyText={benhNhanInfo?.isView}
          />
        </Row>
        <Row className="mb-2 mt-3">
          <TextField
            label="Tình trạng bệnh tật hiện tại"
            labelClassName="pe-2 w-140px text-start mb-3 d-flex align-items-start h-54"
            name="tinhTrangBenh"
            as="textarea"
            rows={2}
            value={values?.tinhTrangBenh?.value || ""}
            onChange={handleChangeKhamBenh}
            readOnlyText={benhNhanInfo?.isView}
          />
        </Row>
        <Row className="mb-2 mt-3">
          <Col
            xs={6}
            className="d-flex gap-2 mb-1 flex-column text-lable-input"
          >
            <TextField
              className="w-100 flex-auto spaces "
              label="Ngày khám lại"
              name="ngayKhamLai"
              type="date"
              labelClassName="ms-0 min-w-140px"
            />
          </Col>
          <Col
            xs={6}
            className="d-flex gap-2 mb-1 flex-column text-lable-input"
          >
            <div className="spaces d-flex w-100">
              <LabelRequired
                label="Trạng thái giấy KSK"
                className="min-w-140px "
              />
              <AutocompleteV2
                options={[]}
                value={values?.trangThaiGiayKSK}
                name="trangThaiGiayKSK"
                className="autocomplete-custom radius spaces width-100 "
              />
            </div>
          </Col>
        </Row>
        <div className="fw-bold mb-1 mt-5 fs-3">Liên thông</div>
        <Row className="mb-2">
          <Col
            xs={6}
            className="d-flex gap-2 mb-1 flex-column text-lable-input"
          >
            <div className="spaces d-flex w-100">
              <LabelRequired
                label="Trạng thái"
                className="min-w-140px "
              />
              <AutocompleteV2
                options={[]}
                value={values?.trangThai}
                name="trangThai"
                className="autocomplete-custom radius spaces width-100 "
              />
            </div>
          </Col>
          <Col
            xs={6}
            className="d-flex gap-2 mb-1 flex-column text-lable-input"
          >
            <TextField
              className="w-100 flex-auto spaces "
              label="Ngày gửi"
              name="ngayGui"
              type="date"
              labelClassName="ms-0 min-w-140px"
            />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col
            xs={6}
            className="d-flex gap-2 mb-1 flex-column text-lable-input"
          >
            <TextField
              className="w-100 flex-auto spaces "
              label="UUID"
              name="uuid"
              labelClassName="ms-0 min-w-140px"
            />
          </Col>
          <Col
            xs={6}
            className="d-flex gap-2 mb-1 flex-column text-lable-input"
          >
            <TextField
              className="w-100 flex-auto spaces "
              label="Thông báo"
              name="thongBao"
              labelClassName="ms-0 min-w-140px"
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default KhamSucKhoeLaiXe;
