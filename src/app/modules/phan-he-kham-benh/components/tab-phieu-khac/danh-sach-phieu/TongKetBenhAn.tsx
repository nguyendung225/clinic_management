import { useFormikContext } from "formik";
import React, { useContext } from "react";
import { Row } from "react-bootstrap";
import TextField from "../../../../component/TextField";
import { PhanHeTiepDonContext } from "../../../contexts/PhanHeTiepDonContext";

const TongKetBenhAn = () => {
  let { values, setFieldValue, touched } = useFormikContext<any>();
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
            label="Quá trình bệnh lý và diễn biến lâm sàng"
            labelClassName="pe-2 text-break min-w-140 max-w-140 spaces text-start mb-1 d-flex align-items-start flex-column h-54"
            name="quaTrinhBenhLy"
            as="textarea"
            rows={2}
            value={values?.quaTrinhBenhLy?.value || ""}
            onChange={handleChangeKhamBenh}
            readOnlyText={benhNhanInfo?.isView}
            touched={touched.quaTrinhBenhLy}
          />
        </Row>
        <Row className="mb-2">
          <TextField
            label="Tóm tắt kết quả CLS có giá trị chẩn đoán"
            labelClassName="pe-2 text-break min-w-140 max-w-140 spaces text-start mb-1 d-flex align-items-start flex-column h-54"
            name="tomTatKQCLS"
            as="textarea"
            rows={2}
            value={values?.tomTatKQCLS?.value || ""}
            onChange={handleChangeKhamBenh}
            readOnlyText={benhNhanInfo?.isView}
          />
        </Row>
        <Row className="mb-2">
          <TextField
            label="Phương pháp điều trị"
            labelClassName="pe-2 text-break min-w-140 max-w-140 spaces text-start mb-1 d-flex align-items-start flex-column h-54"
            name="phuongPhapDieuTri"
            as="textarea"
            rows={2}
            value={values?.phuongPhapDieuTri?.value || ""}
            onChange={handleChangeKhamBenh}
            readOnlyText={benhNhanInfo?.isView}
          />
        </Row>
        <Row className="mb-2">
          <TextField
            label="Tình trạng người bệnh ra viện"
            labelClassName="pe-2 text-break min-w-140 max-w-140 spaces text-start mb-1 d-flex align-items-start flex-column h-54"
            name="tinhTrangRaVien"
            as="textarea"
            rows={2}
            value={values?.tinhTrangRaVien?.value || ""}
            onChange={handleChangeKhamBenh}
            readOnlyText={benhNhanInfo?.isView}
          />
        </Row>
        <Row className="mb-2">
          <TextField
            label="Hướng điều trị và các chế độ tiếp theo"
            labelClassName="pe-2 text-break min-w-140 max-w-140 spaces text-start mb-1 d-flex align-items-start flex-column h-54"
            name="huongDieuTri"
            as="textarea"
            rows={2}
            value={values?.huongDieuTri?.value || ""}
            onChange={handleChangeKhamBenh}
            readOnlyText={benhNhanInfo?.isView}
          />
        </Row>
      </div>
    </>
  );
};

export default TongKetBenhAn;
