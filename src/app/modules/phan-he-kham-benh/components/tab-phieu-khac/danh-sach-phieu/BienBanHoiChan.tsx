import { useFormikContext } from "formik";
import React, { useContext, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import AutocompleteV2 from "../../../../component/AutocompleteObjectV2";
import LabelRequired from "../../../../component/LabelRequired";
import TextField from "../../../../component/TextField";
import { PhanHeTiepDonContext } from "../../../contexts/PhanHeTiepDonContext";

const BienBanHoiChan = () => {
  let { values, setFieldValue } = useFormikContext<any>();
  const { benhNhanInfo } = useContext(PhanHeTiepDonContext);
  const [arrThanhVien, setArrThanhVien] = useState<{ id: string; code: string; name: string }[]>([]);

  const handleChangeKhamBenh = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    let itemTTKhamBenh = {
      code: name,
      value: value,
    };

    setFieldValue(name, itemTTKhamBenh);
  };
  const addThanhVien = () => {
    let uniqueID = Date.now().toString();
    const arr = [...arrThanhVien, { id: uniqueID, code: "", name: "" }];
    setArrThanhVien(arr);
  };
  return (
    <>
      <div>
        <Row className="mb-2">
          <Col xs={4} className="d-flex gap-2 mb-1 flex-column text-lable-input">
            <TextField
              className="w-100 mb-2 flex-auto spaces "
              label="Người nhập"
              name="nguoiNhap"
              labelClassName="spaces min-w-100"
            />
            <div className="spaces d-flex w-100 mb-2">
              <LabelRequired label="Chủ tọa" className="spaces min-w-100" />
              <AutocompleteV2
                options={[]}
                value={values?.chuToa}
                name="chuToa"
                className="autocomplete-custom radius spaces width-100 "
              />
            </div>
            <div className="spaces d-flex w-100 mb-2">
              <LabelRequired label="Thư ký" className="spaces min-w-100" />
              <AutocompleteV2
                options={[]}
                value={values?.thuKy}
                name="thuKy"
                className="autocomplete-custom radius spaces width-100 "
              />
            </div>
            <div className="spaces d-flex w-100 mb-2">
              <div className="spaces d-flex width-85 me-2">
                <LabelRequired label="Thành viên" className="spaces min-w-100" />
                <AutocompleteV2
                  options={[]}
                  name="thanhVien"
                  className="autocomplete-custom radius spaces width-100 "
                  getOptionLabel={(option) => `${option.code} - ${option.name}`}
                />
              </div>
              <Button className="btn-fill spaces width-15" onClick={() => addThanhVien()}>
                +
              </Button>
            </div>
            {arrThanhVien?.length !== 0 &&
              arrThanhVien?.map((item: { id: string; code: string; name: string }, index) => {
                return (
                  <div key={index} id={arrThanhVien.length.toString()} className="d-flex w-100 mb-2">
                    <div className="spaces d-flex width-85 me-2">
                      <div className="spaces min-w-100"></div>
                      <AutocompleteV2
                        options={[]}
                        value={item || { code: "", name: "" }}
                        name="ThanhVien"
                        className="autocomplete-custom radius spaces width-100 "
                        getOptionLabel={(option) => (option.code ? `${option.code} - ${option.name}` : "")}
                      />
                    </div>
                    <Button
                      id={arrThanhVien.length.toString()}
                      className="btn-fill spaces width-15"
                      onClick={() => {
                        setArrThanhVien(arrThanhVien?.filter((i) => i.id !== item.id));
                      }}
                    >
                      -
                    </Button>
                  </div>
                );
              })}
            <div className="spaces d-flex w-100 mb-2">
              <TextField
                label="Thành viên khác (dự thính)"
                labelClassName="pe-2 text-break text-start mb-2"
                className="d-flex flex-column align-items-start h-54 w-100"
                name="tomTat"
                as="textarea"
                rows={4}
                value={values?.tomTat?.value || ""}
                onChange={handleChangeKhamBenh}
                readOnlyText={benhNhanInfo?.isView}
              />
            </div>
          </Col>
          <Col xs={8}>
            <Row>
              <Col xs={6}>
                <TextField
                  className="flex-auto spaces "
                  label="Ngày nhập"
                  name="ngayNhap"
                  type="date"
                  labelClassName="spaces min-w-100"
                />
              </Col>
              <Col xs={6}>
                <TextField
                  className="flex-auto spaces "
                  label="Phiếu điều trị"
                  name="phieuDieuTri"
                  labelClassName="spaces min-w-100"
                />
              </Col>
            </Row>
            <Row>
              <Col
                xs={12}
                className="d-flex gap-2 mb-2 text-lable-input"
              >
                <div className="spaces width-50 d-flex pe-2">
                  <LabelRequired label="Chẩn đoán" className="spaces min-w-100" />
                  <AutocompleteV2
                    options={[]}
                    value={values?.chanDoanLoai}
                    name="chanDoan"
                    className="autocomplete-custom radius spaces width-100 "
                  />
                </div>
                <div className="spaces width-50 d-flex ">
                  <AutocompleteV2
                    options={[]}                 
                    value={values?.chanDoanBenh}
                    name="chanDoan"
                    className="autocomplete-custom radius spaces width-100 " 
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <div className="spaces d-flex w-100 mb-2">
                  <LabelRequired label="Loại" className="spaces min-w-100" />
                  <AutocompleteV2
                    options={[]}
                    value={values?.loai}
                    name="loai"
                    className="autocomplete-custom radius spaces width-100 "
                  />
                </div>
              </Col>
              <Col xs={6}>
                <TextField
                  className="flex-auto spaces "
                  label="Hình thức"
                  name="hinhThuc"
                  labelClassName="spaces min-w-100"
                />
              </Col>
            </Row>
            <Row >
              <TextField
                label="Tóm tát quá trình diễn biến bệnh, quá trình chăm sóc và điều trị người bệnh"
                labelClassName="pe-2 text-break text-start mb-2"
                className="d-flex flex-column align-items-start h-54"
                name="tomTat"
                as="textarea"
                rows={4}
                value={values?.tomTat?.value || ""}
                onChange={handleChangeKhamBenh}
                readOnlyText={benhNhanInfo?.isView}
              />
            </Row>
            <Row className="mt-2">
              <TextField
                label="Kết luận (sau khi đá khám lại và thảo luận)"
                labelClassName="pe-2 text-break text-start mb-2"
                className="d-flex flex-column align-items-start h-54"
                name="ketLuan"
                as="textarea"
                rows={4}
                value={values?.ketLuan?.value || ""}
                onChange={handleChangeKhamBenh}
                readOnlyText={benhNhanInfo?.isView}
              />
            </Row>
            <Row className="mt-2">
              <TextField
                label="Hướng điều trị tiếp"
                labelClassName="pe-2 text-break text-start mb-2"
                className="d-flex flex-column align-items-start h-54"
                name="huongDieuTri"
                as="textarea"
                rows={4}
                value={values?.huongDieuTri?.value || ""}
                onChange={handleChangeKhamBenh}
                readOnlyText={benhNhanInfo?.isView}
              />
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default BienBanHoiChan;
