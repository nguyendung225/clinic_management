import { Field, useFormikContext } from "formik";
import React, { useContext, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import AutocompleteV2 from "../../../../component/AutocompleteObjectV2";
import LabelRequired from "../../../../component/LabelRequired";
import TextField from "../../../../component/TextField";
import { PhanHeTiepDonContext } from "../../../contexts/PhanHeTiepDonContext";
import { hinhThucChuyen, lyDoChuyen } from "../../../constants/tab-phieu-khac/ConstantTabPhieuKhac";

const PhieuChuyenTuyen = () => {
  let { values, setFieldValue } = useFormikContext<any>();
  const { benhNhanInfo } = useContext(PhanHeTiepDonContext);
  const [arrBenhKemTheo, setArrBenhKemTheo] = useState<{ id: string; code: string; name: string }[]>([]);
  const handleChangeKhamBenh = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    let itemTTKhamBenh = {
      code: name,
      value: value,
    };

    setFieldValue(name, itemTTKhamBenh);
  };
  const addBenhKemTheo = () => {
    let uniqueID = Date.now().toString();
    const arr = [...arrBenhKemTheo, { id: uniqueID, code: "", name: "" }];
    setArrBenhKemTheo(arr);
  };
  return (
    <>
      <div>
        <Row>
          <Col xs="6">
            <TextField
              className="w-100 mb-2 flex-auto spaces "
              label="Thời gian"
              name="thoiGian"
              type="date"
              labelClassName="ms-0 min-w-130px"
            />
            <div className="spaces d-flex w-100 mb-2">
              <LabelRequired label="Người chuyển" className="min-w-130px " />
              <AutocompleteV2
                options={[]}
                value={values?.nguoiChuyen}
                name="nguoiChuyen"
                className="autocomplete-custom radius spaces width-100 "
              />
            </div>
            <div className="d-flex mb-2 mt-2">
              <LabelRequired label="Bệnh chính" className="min-w-130px" />
              <AutocompleteV2
                options={[]}
                name="benhChinh"
                className="autocomplete-custom radius spaces width-100 "
                getOptionLabel={(option) => `${option.code} - ${option.name}`}
              />
            </div>
            <div className="d-flex mb-2">
              <div className="spaces d-flex width-85 me-2">
                <LabelRequired label="Bệnh kèm theo" className="min-w-130px" />
                <AutocompleteV2
                  options={[]}
                  name="benhKemTheo"
                  className="autocomplete-custom radius spaces width-100 "
                  getOptionLabel={(option) => `${option.code} - ${option.name}`}
                />
              </div>
              <Button className="btn-fill spaces width-15" onClick={() => addBenhKemTheo()}>
                +
              </Button>
            </div>
            {arrBenhKemTheo?.length !== 0 &&
              arrBenhKemTheo?.map((item: { id: string; code: string; name: string }, index) => {
                return (
                  <div key={index} id={arrBenhKemTheo.length.toString()} className="d-flex mb-2">
                    <div className="spaces d-flex width-85 me-2">
                      <div className="min-w-130px"></div>
                      <AutocompleteV2
                        options={[]}
                        value={item || { code: "", name: "" }}
                        name="benhKemTheo"
                        className="autocomplete-custom radius spaces width-100 "
                        getOptionLabel={(option) => (option.code ? `${option.code} - ${option.name}` : "")}
                      />
                    </div>
                    <Button
                      id={arrBenhKemTheo.length.toString()}
                      className="btn-fill spaces width-15"
                      onClick={() => {
                        setArrBenhKemTheo(arrBenhKemTheo?.filter((i) => i.id !== item.id));
                      }}
                    >
                      -
                    </Button>
                  </div>
                );
              })}

            <TextField
              className="w-100 mb-2 flex-auto spaces "
              label="Mã bệnh viện"
              name="maBenhVien"
              labelClassName="ms-0 min-w-130px"
            />
            <TextField
              className="w-100 mb-2 flex-auto spaces "
              label="Tên bệnh viện"
              name="tenBenhVien"
              labelClassName="ms-0 min-w-130px"
            />
            <TextField
              className="w-100 mb-2 flex-auto spaces "
              label="Phương tiện"
              name="phuongTienVanChuyen"
              labelClassName="ms-0 w-130px"
            />
            <TextField
              className="w-100 mb-2 flex-auto spaces "
              label="Người hộ tống"
              name="nguoiHoTong"
              labelClassName="ms-0 w-130px"
            />

            <div className="spaces d-flex w-100 mb-2">
              <LabelRequired label="Hình thức chuyển tuyến" className="w-130px" />
              <div className="w-calc-130px">
                <div className="d-flex">
                  <label className="me-4 d-flex align-items-center min-w-150px">
                    <Field type="radio" name="coThai" />
                    &nbsp;Chuyển đúng tuyến CMKT
                  </label>
                  <label className="me-4 d-flex align-items-center min-w-150px">
                    <Field type="radio" name="coThai" />
                    &nbsp;Chuyển vượt tuyến CMKT
                  </label>
                </div>
                <AutocompleteV2
                  options={hinhThucChuyen}
                  value={values?.hinhThucChuyen}
                  name="hinhThucChuyen"
                  className="autocomplete-custom radius spaces width-100 "
                />
              </div>
            </div>
            <div className="d-flex w-100 mb-2 mt-2">
              <LabelRequired label="Lý do chuyển tuyến" className="min-w-130px " />
              <AutocompleteV2
                options={lyDoChuyen}
                value={values?.lyDoChuyenTuyen}
                name="lyDoChuyenTuyen"
                className="autocomplete-custom radius spaces width-100 "
              />
            </div>
            <div className="d-flex w-100 mb-2 mt-2">
              <LabelRequired label="Lý do chuyển bác sĩ" className="min-w-130px " />
              <AutocompleteV2
                options={lyDoChuyen}
                value={values?.lyDoChuyenBacSi}
                name="lyDoChuyenBacSi"
                className="autocomplete-custom radius spaces width-100 "
              />
            </div>
            <TextField
              label="&nbsp;"
              labelClassName="pe-2 text-break text-start mb-1 w-130px  d-flex align-items-start h-54 mb-2"
              name="lyDoChuyenBacSi"
              as="textarea"
              rows={2}
              value={values?.lyDoChuyenBacSi?.value || ""}
              onChange={handleChangeKhamBenh}
              readOnlyText={benhNhanInfo?.isView}
            />
          </Col>
          <Col xs="6">
            <TextField
              label="Dấu hiệu lâm sàng"
              labelClassName="pe-2 text-break text-start mb-1  d-flex flex-column align-items-start h-54 mb-2"
              name="dauHieuLamSang"
              as="textarea"
              rows={2}
              value={values?.dauHieuLamSang?.value || ""}
              onChange={handleChangeKhamBenh}
              readOnlyText={benhNhanInfo?.isView}
            />
            <div className="position-relative mt-2">
              <TextField
                label="Kết quả cận lâm sàng"
                labelClassName="pe-2 text-break text-start mb-1"
                
                className="d-flex flex-column align-items-start h-54 mb-2"
                name="ketQuaCanLamSang"
                as="textarea"
                rows={2}
                value={values?.ketQuaCanLamSang?.value || ""}
                onChange={handleChangeKhamBenh}
                readOnlyText={benhNhanInfo?.isView}
              />
              <div className="spaces position-absolute chon-ket-qua text-decoration-underline text-cyan">
                Chọn kết quả
              </div>
            </div>
            <TextField
              label="Phương pháp, thủ thuật, kỹ thuật, thuốc đã được sử dụng trong điều trị"
              labelClassName="pe-2 text-break text-start mb-1 d-flex flex-column align-items-start h-54 mb-2"
              name="phuongPhap"
              as="textarea"
              rows={2}
              value={values?.phuongPhap?.value || ""}
              onChange={handleChangeKhamBenh}
              readOnlyText={benhNhanInfo?.isView}
            />
            <TextField
              label="Tình trạng người bệnh lúc chuyển tuyến"
              labelClassName="pe-2 text-break text-start mb-1 d-flex flex-column align-items-start h-54 mb-2"
              name="tinhTrang"
              as="textarea"
              rows={2}
              value={values?.tinhTrang?.value || ""}
              onChange={handleChangeKhamBenh}
              readOnlyText={benhNhanInfo?.isView}
            />
            <TextField
              label="Hướng điều trị"
              labelClassName="pe-2 text-break text-start mb-1 h-103px d-flex flex-column align-items-start h-54 mb-2"
              name="huongDieuTri"
              as="textarea"
              rows={2}
              value={values?.huongDieuTri?.value || ""}
              onChange={handleChangeKhamBenh}
              readOnlyText={benhNhanInfo?.isView}
            />
          </Col>
        </Row>
        <div className="mt-5">
          <div className="mb-2 fs-4">
            <b>Thông tin điều trị tuyến dưới</b>
          </div>
          <Row>
            <Col xs="6">
              <TextField
                className="w-100 mb-2 flex-auto spaces "
                label="Từ ngày"
                name="tuNgay"
                type="date"
                labelClassName="ms-0 min-w-130px"
              />
            </Col>
            <Col xs="6">
              <TextField
                className="w-100 mb-2 flex-auto spaces "
                label="Đến ngày"
                name="denNgay"
                type="date"
                labelClassName="ms-0 min-w-130px"
              />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default PhieuChuyenTuyen;
