import { useFormikContext } from "formik";
import React, { FC, useContext, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { iSinhHieu } from "../../models/ThongTinKhamBenhModel";
import { PhanHeTiepDonContext } from "../../contexts/PhanHeTiepDonContext";
import { formatDateDTO } from "../../../utils/FormatUtils";
import { MUC_BMI, PHAN_LOAI } from "../../constants/BenhAnNgoaiTruConst";
import { VARIABLE_STRING } from "../../../utils/Constant";
import TextField from "../../../component/TextField";
import LabelRequired from "../../../component/LabelRequired";

type sinhHieu = {
  sinhHieu: iSinhHieu;
  setSinhHieu: ((data: iSinhHieu) => void) | undefined;
};
const SinhHieu: FC<sinhHieu> = (props) => {
  let { values, touched } = useFormikContext<any>();
  const { benhNhanInfo } = useContext(PhanHeTiepDonContext);

  const handleBMI = () => {
    let chieuCao = Number(values?.sinhHieu?.chieuCao?.valueText) / 100;
    let canNang = Number(values?.sinhHieu?.canNang?.valueText);
    let bmi: string | number = "";
    let phanLoai: string = "";

    if (chieuCao && canNang) {
      bmi = chieuCao !== 0 ? (canNang / (chieuCao * chieuCao)).toFixed(1) : "";
      let bmiValue = parseFloat(bmi);

      for (const [tenPhanLoai, mucBMI] of Object.entries(MUC_BMI)) {
        if (bmiValue < mucBMI) {
          phanLoai = PHAN_LOAI[tenPhanLoai];
          break;
        } else {
          const listPhanLoai = Object.values(PHAN_LOAI);
          const lastPhanLoai = listPhanLoai[listPhanLoai.length - 1];
          phanLoai = lastPhanLoai;
        }
      }
    }

    let value = bmi + " " + phanLoai;
    let itemSinhHieu = {
      code: VARIABLE_STRING.BMI,
      datatype: "string",
      valueText: value,
      datetime: formatDateDTO(new Date().toString()),
    };
    // setFieldValue(`sinhHieu.${VARIABLE_STRING.BMI}`, itemSinhHieu);
  };

  useEffect(() => {
    handleBMI();
  }, [values?.sinhHieu?.chieuCao?.valueText, values?.sinhHieu?.canNang?.valueText]);

  return (
    <>
      <Row className="spaces pr-0">
        <Col xs="4">
          <TextField
            className="w-100 flex-auto spaces mb-4"
            label="Mạch (lần/phút)"
            name="mach"
            labelClassName="ms-0 min-w-140 spaces px-0"
            disabled={!benhNhanInfo?.isKhamBenh}
            value={values?.mach}
            touched={touched?.mach}
          />
        </Col>
        <Col xs="4">
          <TextField
            className="w-100 flex-auto spaces mb-4"
            label="Nhiệt độ (°C)"
            name="nhietDo"
            labelClassName="ms-0 min-w-140 spaces px-0"
            disabled={!benhNhanInfo?.isKhamBenh}
            value={values?.nhietDo}
          />
        </Col>
        <Col xs="4">
          <TextField
            className="w-100 flex-auto spaces mb-4"
            label="SPO2 (%)"
            name="spo2"
            labelClassName="ms-0 min-w-140 spaces px-0"
            disabled={!benhNhanInfo?.isKhamBenh}
            value={values?.spo2}
          />
        </Col>
        <Col xs="4">
          <TextField
            className="w-100 flex-auto spaces mb-4"
            label="Nhịp thở (lần/phút)"
            name="nhipTho"
            labelClassName="ms-0 min-w-140 spaces px-0"
            disabled={!benhNhanInfo?.isKhamBenh}
            value={values?.nhipTho}
          />
        </Col>
        <Col xs="4">
          <TextField
            name="huyetAp"
            label="Huyết áp (mmHg)"
            labelClassName="ms-0 min-w-140 spaces px-0"
            disabled={!benhNhanInfo?.isKhamBenh}
            value={values?.huyetAp}
            className="w-100 flex-auto spaces mb-4"
          />
        </Col>
      </Row>
      <Row className="mt-10 spaces pr-0">
        <Col xs="4">
          <TextField
            className="w-100 flex-auto spaces mb-4"
            label="Cân nặng (kg)"
            name="canNang"
            labelClassName="ms-0 min-w-140 spaces px-0"
            disabled={!benhNhanInfo?.isKhamBenh}
            value={values?.canNang}
          />
        </Col>
        <Col xs="4">
          <TextField
            className="w-100 flex-auto spaces mb-4"
            label="Chiều cao (cm)"
            name="chieuCao"
            labelClassName="ms-0 min-w-140 spaces px-0"
            disabled={!benhNhanInfo?.isKhamBenh}
            value={values?.chieuCao}
          />
        </Col>
        <Col xs="4">
          <TextField
            className="w-100 flex-auto spaces mb-4"
            label="BMI"
            name="bmi"
            labelClassName="ms-0 min-w-140 spaces px-0"
            disabled={!benhNhanInfo?.isKhamBenh}
            value={values?.bmi}
          />
        </Col>
        <Col xs="4">
          <TextField
            className="w-100 flex-auto spaces mb-4"
            label="Creatinin"
            name="creatinin"
            labelClassName="ms-0 min-w-140 spaces px-0"
            disabled={!benhNhanInfo?.isKhamBenh}
            value={values?.creatinin}
          />
        </Col>
        <Col xs="4">
          <TextField
            className="w-100"
            inputClassName="flex-auto spaces h-26"
            label="CrCl"
            name="crcl"
            labelClassName="ms-0 min-w-140 spaces px-0"
            disabled={!benhNhanInfo?.isKhamBenh}
            value={values?.crcl}
          />
        </Col>
        <Col xs="4">
          <TextField
            className="w-100 flex-auto spaces mb-4"
            label="eGFR"
            name="egfr"
            labelClassName="ms-0 min-w-140 spaces px-0"
            disabled={!benhNhanInfo?.isKhamBenh}
            value={values?.eGFR}
          />
        </Col>
      </Row>
    </>
  );
};

export default SinhHieu;
