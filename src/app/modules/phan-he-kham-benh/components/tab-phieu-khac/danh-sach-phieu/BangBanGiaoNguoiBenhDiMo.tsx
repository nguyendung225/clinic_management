import { Field, useFormikContext } from "formik";
import React, { ChangeEvent, useContext, useState } from "react";
import { Button, Col, Dropdown, DropdownButton, Row } from "react-bootstrap";
import AutocompleteV2 from "../../../../component/AutocompleteObjectV2";
import LabelRequired from "../../../../component/LabelRequired";
import TextField from "../../../../component/TextField";
import { PhanHeTiepDonContext } from "../../../contexts/PhanHeTiepDonContext";
import moment from "moment";
import {
  dataBanGiaoNguoiBenh1,
  dataBanGiaoNguoiBenh2,
  dataHoSo,
  dataKqCdha,
  dataNgayBanGiao,
  dataNguoiNhan,
  dataThuocVatTu,
  dsPhieu,
} from "../../../constants/tab-phieu-khac/ConstantTabPhieuKhac";
import { IconButtonSave } from "../../../../component/IconSvg";

const BangBanGiaoNguoiBenhDiMo = () => {
  let { values, setFieldValue } = useFormikContext<any>();
  const { benhNhanInfo } = useContext(PhanHeTiepDonContext);
  const [arrBenhPhu, setArrBenhPhu] = useState<
    { id: string; code: string; name: string }[]
  >([]);
  const handleChangeKhamBenh = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    let itemTTKhamBenh = {
      code: name,
      value: value,
    };

    setFieldValue(name, itemTTKhamBenh);
  };

  const addBenhPhu = () => {
    let uniqueID = Date.now().toString();
    const arr = [...arrBenhPhu, { id: uniqueID, code: "", name: "" }];
    setArrBenhPhu(arr);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    console.log(e, index);
  };

  const customRow = (data: any, type?: any) => {
    return data?.map((item: any) => (
      <tr>
        <td className="text-center ">{item.stt}</td>
        <td className="">{item?.noiDung}</td>
        <td className="">
          <input
            className={
              "form-control customs-input w-100 px-2 text-left no-spinners"
            }
            value={item?.khoa}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e, 1)}
            name="khoa"
            type={type ? type : "text"}
          />
        </td>
        <td className="">
          <input
            className={
              "form-control customs-input w-100 px-2 text-left no-spinners"
            }
            value={item?.phongMo}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e, 1)}
            name="phongMo"
            type={type ? type : "text"}
          />
        </td>
        <td className="">
          <input
            className={
              "form-control customs-input w-100 px-2 text-left no-spinners"
            }
            value={item?.phongHoiTinh}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e, 1)}
            name="phongHoiTinh"
            type={type ? type : "text"}
          />
        </td>
        <td className="">
          <input
            className={
              "form-control customs-input w-100 px-2 text-left no-spinners"
            }
            value={item?.troVeKhoa}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e, 1)}
            name="troVeKhoa"
            type={type ? type : "text"}
          />
        </td>
      </tr>
    ));
  };

  return (
    <>
      <div>
        <Row className="mb-2">
          <Col
            xs={6}
            className="d-flex gap-2 mb-1 flex-column text-lable-input"
          >
            <TextField
              className="w-100 flex-auto spaces "
              label="Người nhập"
              name="nguoiNhap"
              labelClassName="ms-0 min-w-130px"
            />
          </Col>
          <Col
            xs={6}
            className="d-flex gap-2 mb-1 flex-column text-lable-input"
          >
            <TextField
              className="w-100 flex-auto spaces "
              label="Thời gian tạo"
              name="thoiGianTao"
              type="date"
              labelClassName="ms-0 min-w-130px"
            />
          </Col>
        </Row>
        <Row className="mb-2">
          <div className="d-flex mb-3">
            <LabelRequired label="Chẩn đoán" className="min-w-130px" />
            <AutocompleteV2
              options={[]}
              name="chanDoan autocomplete-custom radius spaces width-100 "
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
            <Button
              className="btn-fill spaces width-15 "
              onClick={() => addBenhPhu()}
            >
              +
            </Button>
          </div>
          {arrBenhPhu?.length !== 0 &&
            arrBenhPhu?.map(
              (item: { id: string; code: string; name: string }, index) => {
                return (
                  <div
                    key={index}
                    id={arrBenhPhu.length.toString()}
                    className="d-flex mb-4px"
                  >
                    <div className="spaces d-flex width-85 me-2">
                      <div className="min-w-130px"></div>
                      <AutocompleteV2
                        options={[]}
                        value={item || { code: "", name: "" }}
                        name="benhPhu"
                        className="autocomplete-custom radius spaces width-100 "
                        getOptionLabel={(option) =>
                          option.code ? `${option.code} - ${option.name}` : ""
                        }
                      />
                    </div>
                    <Button
                      id={arrBenhPhu.length.toString()}
                      className="btn-fill spaces width-15"
                      onClick={() => {
                        setArrBenhPhu(
                          arrBenhPhu?.filter((i) => i.id !== item.id)
                        );
                      }}
                    >
                      -
                    </Button>
                  </div>
                );
              }
            )}
        </Row>

        <table className="w-100 border">
          <tr className="bg-pri">
            <th className="text-center ">TT</th>
            <th className="text-center  w-275px">NỘI DUNG</th>
            <th className="text-center ">KHOA</th>
            <th className="text-center ">PHÒNG MỔ</th>
            <th className="text-center ">PHÒNG HỒI TỈNH</th>
            <th className="text-center ">TRỞ VỀ KHOA</th>
          </tr>
          <th colSpan={6} className="text-bold">
            Bàn giao người bệnh:
          </th>
          {customRow(dataBanGiaoNguoiBenh1)}
          <tr>
            <td className="text-center">5</td>
            <td>Tình trạng ven truyền: Đánh dấu X vào số khoa tương ứng</td>
            <td>
              <div className="spaces width-100">
                <label className="me-4 d-flex align-items-center min-w-150px">
                  <Field type="checkbox" name="sucKhoe" />
                  &nbsp;1. Sạch
                </label>
                <label className="me-4 d-flex align-items-center min-w-150px">
                  <Field type="checkbox" name="manKinh" />
                  &nbsp;2. Bẩn
                </label>
                <label className="me-4 d-flex align-items-center min-w-150px">
                  <Field type="checkbox" name="caNhan" />
                  &nbsp;3. Thông
                </label>
                <label className="me-4 d-flex align-items-center min-w-150px">
                  <Field type="checkbox" name="caNhan" />
                  &nbsp;4. Tắc
                </label>
              </div>
            </td>
            <td>
              <div className="spaces width-100">
                <label className="me-4 d-flex align-items-center min-w-150px">
                  <Field type="checkbox" name="sucKhoe" />
                  &nbsp;1. Sạch
                </label>
                <label className="me-4 d-flex align-items-center min-w-150px">
                  <Field type="checkbox" name="manKinh" />
                  &nbsp;2. Bẩn
                </label>
                <label className="me-4 d-flex align-items-center min-w-150px">
                  <Field type="checkbox" name="caNhan" />
                  &nbsp;3. Thông
                </label>
                <label className="me-4 d-flex align-items-center min-w-150px">
                  <Field type="checkbox" name="caNhan" />
                  &nbsp;4. Tắc
                </label>
              </div>
            </td>
            <td>
              <div className="spaces width-100">
                <label className="me-4 d-flex align-items-center min-w-150px">
                  <Field type="checkbox" name="sucKhoe" />
                  &nbsp;1. Sạch
                </label>
                <label className="me-4 d-flex align-items-center min-w-150px">
                  <Field type="checkbox" name="manKinh" />
                  &nbsp;2. Bẩn
                </label>
                <label className="me-4 d-flex align-items-center min-w-150px">
                  <Field type="checkbox" name="caNhan" />
                  &nbsp;3. Thông
                </label>
                <label className="me-4 d-flex align-items-center min-w-150px">
                  <Field type="checkbox" name="caNhan" />
                  &nbsp;4. Tắc
                </label>
              </div>
            </td>
            <td>
              <div className="spaces width-100">
                <label className="me-4 d-flex align-items-center min-w-150px">
                  <Field type="checkbox" name="sucKhoe" />
                  &nbsp;1. Sạch
                </label>
                <label className="me-4 d-flex align-items-center min-w-150px">
                  <Field type="checkbox" name="manKinh" />
                  &nbsp;2. Bẩn
                </label>
                <label className="me-4 d-flex align-items-center min-w-150px">
                  <Field type="checkbox" name="caNhan" />
                  &nbsp;3. Thông
                </label>
                <label className="me-4 d-flex align-items-center min-w-150px">
                  <Field type="checkbox" name="caNhan" />
                  &nbsp;4. Tắc
                </label>
              </div>
            </td>
          </tr>
          {customRow(dataBanGiaoNguoiBenh2)}
          <th colSpan={6} className="text-bold">
            Hồ sơ:
          </th>
          {customRow(dataHoSo)}
          <th colSpan={6} className="text-bold">
            Các kết quả CĐHA: (ghi rõ số lượng nếu có):
          </th>
          {customRow(dataKqCdha)}
          <th colSpan={6} className="text-bold">
            Thuốc và vật tư:
          </th>
          {customRow(dataThuocVatTu)}
          {customRow(dataNgayBanGiao, "date")}
          {customRow(dataNguoiNhan)}
        </table>
      </div>

      <div className="flex flex-center justify-content-between pt-3 mt-16 pb-2 btn-luu">
        <div>
          <DropdownButton
            id="dropdown-basic-button"
            title={
              <div>
                Danh sách
                <i className="ps-1 bi bi-chevron-down m-0"></i>
              </div>
            }
            className="dropdown-btn"
          >
            {dsPhieu.map((item) => (
              <>
                <Dropdown.Item>{item?.name}</Dropdown.Item>
              </>
            ))}
          </DropdownButton>
        </div>
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

export default BangBanGiaoNguoiBenhDiMo;
