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
        <div className="spaces width-23">
          <TextField
            className="w-100 flex-auto spaces"
            label="Mạch (lần/phút)"
            name="mach"
            labelClassName="ms-0 min-w-140 spaces px-0"
            disabled={!benhNhanInfo?.isKhamBenh}
            value={values?.mach}
            touched={touched?.mach}
          />
        </div>
        <div className="spaces width-21 pl-0">
          <TextField
            className="w-100 flex-auto spaces"
            label="Nhịp thở (lần/phút)"
            name="nhipTho"
            labelClassName="ms-0 min-w-127 spaces px-0"
            disabled={!benhNhanInfo?.isKhamBenh}
            value={values?.nhipTho}
          />
        </div>
        <div className="spaces width-17 pl-0">
          <TextField
            className="w-100 flex-auto spaces"
            label="Nhiệt độ (°C)"
            name="nhietDo"
            labelClassName="ms-0 min-w-100 spaces px-0"
            disabled={!benhNhanInfo?.isKhamBenh}
            value={values?.nhietDo}
          />
        </div>
        <div className="spaces width-18">
          <TextField
            className="w-100 flex-auto spaces"
            label="Chiều cao (cm)"
            name="chieuCao"
            labelClassName="ms-0 min-w-100px px-0"
            disabled={!benhNhanInfo?.isKhamBenh}
            value={values?.chieuCao}
          />
        </div>
        <div className="spaces width-21 pr-0">
          <TextField
            className="w-100 flex-auto spaces"
            label="Cân nặng (kg)"
            name="canNang"
            labelClassName="ms-0 min-w-108 spaces px-0"
            disabled={!benhNhanInfo?.isKhamBenh}
            value={values?.canNang}
          />
        </div>
      </Row>
      <Row className="mt-10 spaces pr-0">
        <div className="spaces width-30">
          <div className="d-flex gap-2 mb-1 align-items-center text-lable-input pe-0">
            <div className="d-flex justify-content-between align-items-center">
              <LabelRequired className="ms-0 min-w-140 spaces" label="Huyết áp (mmHg)" />
              <div className="flex-auto">
                <TextField
                  name="huyetAp1"
                  labelClassName="ms-0"
                  disabled={!benhNhanInfo?.isKhamBenh}
                  value={values?.huyetAp1}
                  className="spaces"
                />
              </div>
              <div className="spaces mx-4">/</div>
              <div className="flex-auto">
                <TextField
                  name="huyetAp2"
                  value={values?.huyetAp2}
                  className="spaces"
                  disabled={!benhNhanInfo?.isKhamBenh}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="spaces width-14">
          <TextField
            className="w-100 flex-auto spaces"
            label="SPO2 (%)"
            name="spo2"
            labelClassName="ms-0 mr-2 min-w-60 spaces"
            disabled={!benhNhanInfo?.isKhamBenh}
            value={values?.spo2}
          />
        </div>
        <div className="spaces width-14 px-0">
          <TextField
            className="w-100 flex-auto spaces"
            label="BMI (kg/m2)"
            name="bmi"
            labelClassName="ms-0 mr-2 min-w-60 spaces"
            disabled={!benhNhanInfo?.isKhamBenh}
            value={values?.bmi}
          />
        </div>
        <div className="spaces width-14">
          <TextField
            className="w-100"
            inputClassName="flex-auto spaces h-26"
            label="CrCl"
            name="crcl"
            labelClassName="ms-0 min-w-60 spaces"
            disabled={!benhNhanInfo?.isKhamBenh}
            value={values?.crcl}
          />
        </div>
        <div className="spaces width-14">
          <TextField
            className="w-100 flex-auto spaces"
            label="Creatinin"
            name="creatinin"
            labelClassName="ms-0 min-w-60 spaces"
            disabled={!benhNhanInfo?.isKhamBenh}
            value={values?.creatinin}
          />
        </div>
        <div className="spaces width-14 pr-0">
          <TextField
            className="w-100 flex-auto spaces"
            label="eGFR"
            name="egfr"
            labelClassName="ms-0 min-w-60 spaces"
            disabled={!benhNhanInfo?.isKhamBenh}
            value={values?.eGFR}
          />
        </div>
      </Row>
    </>
  );
};

export default SinhHieu;
