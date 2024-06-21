import { useFormikContext } from "formik";
import React, { ReactNode, useContext } from "react";
import { Button, Col, Row } from "react-bootstrap";
import AutocompleteV2 from "../../../../component/AutocompleteObjectV2";
import LabelRequired from "../../../../component/LabelRequired";
import TextField from "../../../../component/TextField";
import { PhanHeTiepDonContext } from "../../../contexts/PhanHeTiepDonContext";
import { renderItemKhamBoPhan } from "../../../../utils/FormatUtils";
import { KHAM_BO_PHAN } from "../../../constants/KhamBenh";
import { IconButtonSave } from "../../../../component/IconSvg";

const KhamChuyenKhoa = () => {
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
          <Col xs={6} className="d-flex gap-2 mb-1 flex-column text-lable-input">
            <TextField
              className="w-100 flex-auto spaces h-26"
              label="Mạch (lần/phút)"
              name="mach"
              labelClassName="ms-0 min-w-125px"
            />
            <TextField
              className="w-100 flex-auto spaces h-26"
              label="Nhiệt độ (°C)"
              name="nhietDo"
              labelClassName="ms-0 min-w-125px"
            />
            <div className="d-flex w-100 justify-content-between align-items-center">
              <LabelRequired
                className="ms-0 min-w-125px"
                label="Huyết áp (mmHg)"
              />
              <div className="flex-auto">
                <TextField
                  name="huyetAp1"
                  labelClassName="ms-0 min-w-125px"
                  className="spaces h-26"
                />
              </div>
              <div className="spaces mx-4">/</div>
              <div className="flex-auto">
                <TextField name="huyetap2" className="spaces h-26" />
              </div>
            </div>
            <TextField
              className="w-100 flex-auto spaces h-26"
              label="SPO2 (%)"
              name="spo2"
              labelClassName="ms-0 min-w-125px"
            />
          </Col>
          <Col
            xs={6}
            className="d-flex gap-2 mb-1 flex-column text-lable-input"
          >
            <TextField
              className="w-100 flex-auto spaces h-26"
              label="Nhịp thở (lần/phút)"
              name="nhipTho"
              labelClassName="ms-0 min-w-125px"
            />
            <TextField
              className="w-100 flex-auto spaces h-26"
              label="Cân nặng (kg)"
              name="canNang"
              labelClassName="ms-0 min-w-125px"
            />
            <TextField
              className="w-100 flex-auto spaces h-26"
              label="Chiều cao (cm)"
              name="chieuCao"
              labelClassName="ms-0 min-w-125px"
            />
            <TextField
              className="w-100 flex-auto spaces h-26"
              label="BMI (kg/m2)"
              name="BMI"
              labelClassName="ms-0 min-w-125px"
            />
          </Col>
        </Row>
        <Row className="mt-8">
          <Col xs={6}>
            <Row className="mb-1">
              <TextField
                label="Lý do vào viện"
                labelClassName="pe-2 w-100 text-start mb-2 mt-1"
                className="text-uppercase d-flex flex-column align-items-start h-54"
                name="lyDoVaoVien"
                as="textarea"
                rows={2}
                value={values?.lyDoVaoVien?.value || ""}
                onChange={handleChangeKhamBenh}
                readOnlyText={benhNhanInfo?.isView}
                disabled={!benhNhanInfo?.isKhamBenh}
              />
            </Row>
            <Row className="mb-1">
              <TextField
                label="Tiền sử bệnh bản thân: (phát triển thể lực từ nhỏ đến lớn, những bệnh đã mắc,...)"
                labelClassName="pe-2 w-100 text-start mb-2 mt-4"
                className="text-uppercase d-flex flex-column align-items-start h-54"
                name="tienSuCuaBanThan"
                as="textarea"
                rows={2}
                value={values?.tienSuCuaBanThan?.value || ""}
                onChange={handleChangeKhamBenh}
                readOnlyText={benhNhanInfo?.isView}
                disabled={!benhNhanInfo?.isKhamBenh}
              />
            </Row>
            <Row className="mb-1">
              <TextField
                label="Khám toàn thân"
                labelClassName="pe-2 w-100 text-start mb-2 mt-4"
                className="text-uppercase d-flex flex-column align-items-start h-54"
                name="khamToanThan"
                as="textarea"
                rows={2}
                value={values?.khamToanThan?.value || ""}
                onChange={handleChangeKhamBenh}
                readOnlyText={benhNhanInfo?.isView}
                disabled={!benhNhanInfo?.isKhamBenh}
              />
            </Row>
            <Row className="mb-1">
                <LabelRequired className="ms-0 min-w-75px mb-2 mt-4" label="Chẩn đoán ban đầu" />
                <AutocompleteV2
                  options={[]}
                  value={values?.chanDoanBanDau}
                  name="chanDoanBanDau"
                  isClearable={false}
                  className="autocomplete-custom radius spaces width-100 "
                />
              </Row>
              <Row className="mb-1">
                <LabelRequired className="ms-0 min-w-75px mb-2 mt-3" label="Bệnh kèm theo" />
                <AutocompleteV2
                  options={[]}
                  value={values?.benhKemTheo}
                  name="benhKemTheo"
                  isClearable={false}
                  className="autocomplete-custom radius spaces width-100 "
                />
              </Row>
              <Row className="mb-1">
              <TextField
                labelClassName="pe-2 w-100 text-start mb-2 mt-4"
                className="text-uppercase d-flex flex-column align-items-start h-54"
                name="benhKemTheo"
                value={values?.phuongPhapDieuTri?.value}
                onChange={handleChangeKhamBenh}
                as="textarea"
                rows={2}
                readOnlyText={benhNhanInfo?.isView}
                disabled={!benhNhanInfo?.isKhamBenh}
              />
            </Row>
          </Col>
          <Col xs={6}>
            <Row className="mb-1">
              <TextField
                label="Quá trình bệnh lý: (khởi phát, diễn biến, chẩn đoán, điều trị của tuyến dưới,...)"
                labelClassName="pe-2 w-100 text-start mb-2 mt-1"
                className="text-uppercase d-flex flex-column align-items-start h-54"
                name="quaTrinhBenhLy"
                as="textarea"
                rows={2}
                value={values?.quaTrinhBenhLy?.value || ""}
                onChange={handleChangeKhamBenh}
                readOnlyText={benhNhanInfo?.isView}
                disabled={!benhNhanInfo?.isKhamBenh}
              />
            </Row>
            <Row className="mb-1">
              <TextField
                label="Tiền sử bệnh gia đình: (Những người trong gia đình: Bệnh đã mắc, đời sống,...)"
                labelClassName="pe-2 w-100 text-start mb-2 mt-4"
                className="text-uppercase d-flex flex-column align-items-start h-54"
                name="tienSuBenhGiaDinh"
                as="textarea"
                rows={2}
                value={values?.tienSuBenhGiaDinh?.value || ""}
                onChange={handleChangeKhamBenh}
                readOnlyText={benhNhanInfo?.isView}
                disabled={!benhNhanInfo?.isKhamBenh}
              />
            </Row>
            {/* <Row className="mb-1">
              <TextFieldV2
                label="Khám bộ phận"
                labelClassName="pe-2 w-100 text-start mb-2 mt-4"
                className="d-flex flex-column align-items-start h-54"
                name="khamBoPhan"
                value={values?.khamBoPhan?.value}
                onChange={handleChangeKhamBenh}
                as="textarea"
                rows={2}
                readOnly={benhNhanInfo?.isView}
                disabled={!benhNhanInfo?.isKhamBenh}
              />
            </Row> */}
            <Row className="mb-1">
              <TextField
                label="Tóm tắt kết quả CLS"
                labelClassName="pe-2 w-100 text-start mb-2 mt-4"
                className="text-uppercase d-flex flex-column align-items-start h-54"
                name="tomTatKQCLS"
                value={values?.tomTatKQCLS?.value}
                onChange={handleChangeKhamBenh}
                as="textarea"
                rows={2}
                readOnly={benhNhanInfo?.isView}
                disabled={!benhNhanInfo?.isKhamBenh}
              />
            </Row>
            <Row className="mb-1">
              <TextField
                label="Đã xử lý thuốc, chăm sóc"
                labelClassName="pe-2 w-100 text-start mb-2 mt-4"
                className="text-uppercase d-flex flex-column align-items-start h-54"
                name="daXuLy"
                as="textarea"
                rows={2}
                value={values?.daXuLy?.value || ""}
                onChange={handleChangeKhamBenh}
                readOnlyText={benhNhanInfo?.isView}
                disabled={!benhNhanInfo?.isKhamBenh}
              />
            </Row>
          </Col>
          <Row>
            <div className="fw-bold fs-4 mt-4">Khám bộ phận</div>
            {renderItemKhamBoPhan(KHAM_BO_PHAN.children) as ReactNode}
        </Row>
        </Row>
      </div>
      <div className="flex flex-center pt-3 mt-16 pb-2 btn-luu">
          <Button
            className="btn-fill"
            type="submit"
          >
            <IconButtonSave/>
            <span>Lưu</span>
          </Button>
          <Button
            className="btn-fill"
          >
            <span>In</span>
          </Button>
        </div>
    </>
  );
};

export default KhamChuyenKhoa;
