import { Field, useFormikContext } from "formik";
import React, { useContext, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import AutocompleteV2 from "../../../../component/AutocompleteObjectV2";
import LabelRequired from "../../../../component/LabelRequired";
import TextField from "../../../../component/TextField";
import { PhanHeTiepDonContext } from "../../../contexts/PhanHeTiepDonContext";

const PhieuTruyenNhiem = () => {
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
  const addBenhKemTheo = (e: any) => {
    let uniqueID = Date.now().toString();
    const arr = [...arrBenhKemTheo, { id: uniqueID, code: "", name: "" }];
    setArrBenhKemTheo(arr);
  };
  return (
    <>
      <div>
        <Row className="mb-2">
          <Col xs={4} className="d-flex gap-2 mb-1 flex-column text-lable-input">
            <TextField
              className="w-100 flex-auto spaces "
              label="Người nhập"
              name="nguoiNhap"
              labelClassName="ms-0 min-w-130px"
            />
          </Col>
          <Col xs={4} className="d-flex gap-2 mb-1 flex-column text-lable-input">
            <TextField
              className="w-100 flex-auto spaces "
              label="Ngày nhập"
              name="ngayNhap"
              type="date"
              labelClassName="ms-0 min-w-130px"
            />
          </Col>
          <Col xs={4} className="d-flex gap-2 mb-1 flex-column text-lable-input">
            <TextField
              className="w-100 flex-auto spaces "
              label="Ngày khởi phát"
              name="ngayKhoiPhat"
              type="date"
              labelClassName="ms-0 min-w-130px"
            />
          </Col>
        </Row>
        <Row className="mb-2">
          <TextField
            label="Tình trạng hiện tại"
            labelClassName="pe-2 text-break w-130px text-start mb-3 text-uppercase d-flex align-items-start h-54"
            name="tinhTrangHienTai"
            as="textarea"
            rows={2}
            value={values?.tinhTrangHienTai?.value || ""}
            onChange={handleChangeKhamBenh}
            readOnlyText={benhNhanInfo?.isView}
          />
        </Row>
        <Row className="mb-2 d-flex ">
          <div className="spaces d-flex width-100">
            <div className="ms-0 min-w-230px fw-bold">Phân loại chẩn đoán</div>
            <label className="me-4 d-flex align-items-center min-w-150px">
              <Field type="checkbox" name="phanLoaiNghiNgo" />
              &nbsp;Nghi ngờ
            </label>
            <label className="me-4 d-flex align-items-center min-w-150px">
              <Field type="checkbox" name="phanLoaiCoThe" />
              &nbsp;Có thể
            </label>
            <label className="me-4 d-flex align-items-center min-w-150px">
              <Field type="checkbox" name="phanLoaiXacDinhPhongXN" />
              &nbsp;Xác định phòng XN
            </label>
          </div>
        </Row>
        <Row className="mb-2 d-flex ">
          <div className="spaces d-flex width-100">
            <div className="ms-0 min-w-230px fw-bold">Lấy mẫu xét nghiệm chẩn đoán</div>
            <label className="me-4 d-flex align-items-center min-w-150px">
              <Field type="radio" name="layMauXN" />
              &nbsp;Có
            </label>
            <label className="me-4 d-flex align-items-center min-w-150px">
              <Field type="radio" name="layMauXN" />
              &nbsp;Không
            </label>
          </div>
        </Row>
        <Row className="mb-2 d-flex ">
          <div className="spaces d-flex width-100">
            <LabelRequired isRequired label="Thông tin về tiêm, uống vắc xin &nbsp;" className="ms-0 min-w-230px" />
            <label className="me-4 d-flex align-items-center min-w-150px">
              <Field type="radio" name="layMauXN" />
              &nbsp;Có
            </label>
            <label className="me-4 d-flex align-items-center min-w-150px">
              <Field type="radio" name="layMauXN" />
              &nbsp;Không
            </label>
            <label className="me-4 d-flex align-items-center min-w-150px">
              <Field type="radio" name="layMauXN" />
              &nbsp;Không rõ
            </label>
          </div>
        </Row>
        <div>
          <div className="d-flex mt-2 mb-2">
            <LabelRequired label="Chẩn đoán chính" className="min-w-130px" />
            <AutocompleteV2
              options={[]}
              name="chanDoanChinh autocomplete-custom radius spaces width-100 "
              getOptionLabel={(option) => `${option.code} - ${option.name}`}
            />
          </div>
          <div className="d-flex">
            <div className="spaces d-flex width-85 me-2">
              <LabelRequired label="Chẩn đoán bệnh kèm theo" className="min-w-130px w-130px" />
              <AutocompleteV2
                options={[]}
                name="benhKemTheo"
                className="autocomplete-custom radius spaces width-100 "
                getOptionLabel={(option) => `${option.code} - ${option.name}`}
              />
            </div>
            <Button className="btn-fill spaces width-15 " onClick={(e) => addBenhKemTheo(e)}>
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
                      name="benhKemTheo  autocomplete-custom radius spaces width-100 "
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

          <div className="d-flex mt-1 mb-1">
            <LabelRequired label="Chẩn đoán biến chứng" className="min-w-130px" />
            <AutocompleteV2
              options={[]}
              name="chanDoanBienChung autocomplete-custom radius spaces width-100 "
              getOptionLabel={(option) => `${option.code} - ${option.name}`}
            />
          </div>
        </div>
        <Row className="mb-2">
          <TextField
            label="Tiền sử dịch tễ"
            labelClassName="pe-2 text-break w-130px text-start mb-3 text-uppercase d-flex align-items-start h-54"
            name="tienSuDichTe"
            as="textarea"
            rows={2}
            value={values?.tienSuDichTe?.value || ""}
            onChange={handleChangeKhamBenh}
            readOnlyText={benhNhanInfo?.isView}
          />
        </Row>
        <Row className="mb-2 mt-3">
          <TextField
            label="Ghi chú: Mô tả chi tiết trường hợp bệnh"
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

export default PhieuTruyenNhiem;
