import TextField from "../../component/TextField";
import { FormikProps, useFormikContext } from "formik";
import {
  DAN_TOC,
  GIOI_TINH,
  QUOC_TICH,
  DOI_TUONG,
} from "../constants/datLichHenConstants";
import { Col, Row, FormCheck } from "react-bootstrap";
import LabelRequired from "../../component/LabelRequired";
import TextValidator from "../../component/TextValidator";
import AutocompleteObjectV2 from "../../component/AutocompleteObjectV2";
import { useEffect, useState } from "react";
import { benhNhan } from "../models/datLichHenModels";
import {
  LIST_DISTRICT,
  LIST_PROVINCE,
  LIST_TUYEN_KCB,
  LIST_WARD,
} from "../constants/fakeData";
import { getAllCategory } from "../services/datLichHenServices";
import { ObjectSelectAutocomplete } from "../models/datLichHenModels";

const FormDatLich = () => {
  const { values, setFieldValue, handleChange, errors, touched } =
    useFormikContext<benhNhan>();
  const [isBHYT, setIsBHYT] = useState<boolean>(false);

  const handleChangeSelect = (
    selectedObject: ObjectSelectAutocomplete,
    name: string,
    setFieldValue: (field: string, value: any) => void
  ) => {
    setFieldValue(name, selectedObject);
  };

  const handleChecked = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFieldValue: FormikProps<benhNhan>["setFieldValue"]
  ) => {
    const { name, checked } = e.target;
    setFieldValue(`${name}`, checked);
  };

  useEffect(() => {
    if (values?.loaiDoiTuong) {
      setIsBHYT(values?.loaiDoiTuong?.code === DOI_TUONG.BAO_HIEM);
      return;
    }
    setIsBHYT(false);
  }, [values?.loaiDoiTuong]);

  // const handleContextMenu = (e: any, row: any) => {
  //   e.preventDefault();
  //   setSelectedRow(row);
  //   setContextMenu({ x: e.clientX, y: e.clientY });
  // };

  return (
    <div className="d-flex">
      <div className="spaces width-72 border-end border-4 bg-white p-10 position-relative">
        <Row>
          <Col xs={12} sm={6} lg={4} xl={3} className="mb-2">
            <div className="position-relative text-info">
              <TextField
                label="Điện thoại"
                name="soDienThoai"
                labelClassName="min-w-85px"
                className="ps-29px"
                value={values?.soDienThoai}
                // onKeyDown={(e: any) => handleSearch(e)}
              />
              <i className="fa-solid fa-magnifying-glass position-absolute text-info text-info cursor-pointer search-icon"></i>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={4} xl={3} className="mb-2">
            <div className="position-relative text-info">
              <TextField
                label="Họ và tên"
                name="hoTen"
                labelClassName="min-w-85px"
                className="ps-29px"
                value={values?.hoTen}
                // onKeyDown={(e: any) => handleSearch(e)}
              />
              <i className="fa-solid fa-magnifying-glass position-absolute text-info cursor-pointer search-icon"></i>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={4} xl={3} className="mb-2">
            <div className="position-relative text-info">
              <TextField
                label="Căn cước"
                name="cccd"
                labelClassName="min-w-85px"
                className="ps-29px"
                //value={objectSearch?.soTheKCB}
                //onChange={handleChangeTextSearch}
                //onKeyDown={(e: any) => handleSearch(e)}
              />
              <i className="fa-solid fa-magnifying-glass position-absolute text-info cursor-pointer search-icon"></i>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={4} xl={3} className="mb-2">
            <div className="position-relative text-info">
              <TextField
                label="Số thẻ KCB"
                name="soTheKCB"
                labelClassName="min-w-85px"
                className="ps-29px"
                //value={objectSearch?.soTheKCB}
                //onChange={handleChangeTextSearch}
                //onKeyDown={(e: any) => handleSearch(e)}
              />
              <i className="fa-solid fa-magnifying-glass position-absolute text-info cursor-pointer search-icon"></i>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={6} md={4} className="d-flex mb-2">
            <LabelRequired label="Đối tượng" className="min-w-85px" />
            <AutocompleteObjectV2
              options={[]}
              value={values?.gioiTinh}
              name="gioiTinh"
              onChange={(selectedOption) =>
                setFieldValue(selectedOption, "gioiTinh") 
              }
              touched={touched?.gioiTinh}
              errors={errors?.gioiTinh}
              className="autocomplete-custom-tiep-nhan radius spaces width-100 h-25"
            />
          </Col>
          <Col xs={12} sm={6} md={4} className="d-flex mb-2">
            <TextField
              label="Họ và tên"
              name="hoTen"
              labelClassName="min-w-85px"
              className="spaces width-100"
            />
          </Col>
          <Col xs={12} sm={6} md={4} className="d-flex mb-2">
            <TextField
              label="Điện thoại"
              name="sdt"
              labelClassName="min-w-85px"
              className="spaces width-100"
            />
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={6} md={4} className="d-flex mb-2">
            <TextField
              label="Mã BN"
              name="mabn"
              labelClassName="min-w-85px"
              className="spaces width-100"
            />
          </Col>
          <Col xs={12} sm={6} md={4} className="d-flex mb-2">
            <LabelRequired label="Ngày sinh" className="min-w-85px" />
            <div className="spaces ms-0 d-flex">
              <div className="spaces width-25">
                <TextValidator
                  name="ngaySinh"
                  type="text"
                  maxLength="2"
                  className="text-center"
                  value={values?.ngaySinh}
                  onChange={handleChange}
                  errors={errors?.ngaySinh}
                  touched={touched?.ngaySinh}
                />
              </div>
              <div className="spaces width-25">
                <TextValidator
                  name="thangSinh"
                  type="text"
                  maxLength="2"
                  className="text-center"
                  value={values?.thangSinh}
                  onChange={handleChange}
                  errors={errors?.thangSinh}
                  touched={touched?.thangSinh}
                />
              </div>
              <div className="spaces width-50">
                <TextValidator
                  name="namSinh"
                  type="text"
                  maxLength="4"
                  className="text-center"
                  value={values?.namSinh}
                  onChange={handleChange}
                  errors={errors?.namSinh}
                  touched={touched?.namSinh}
                />
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} className="d-flex mb-2">
            <TextField
              label="CCCD"
              name="cccd"
              labelClassName="min-w-85px"
              className="spaces width-100"
            />
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={6} md={4} className="d-flex mb-2">
            <LabelRequired label="Giới tính" className="min-w-85px" />
            <AutocompleteObjectV2
              options={GIOI_TINH}
              value={values?.gioiTinh}
              name="gioiTinh"
              onChange={(selectedOption) =>
                setFieldValue(selectedOption, "gioiTinh")
              }
              touched={touched?.gioiTinh}
              errors={errors?.gioiTinh}
              className="autocomplete-custom-tiep-nhan radius spaces width-100 h-25"
            />
          </Col>
          <Col xs={12} sm={6} md={4} className="d-flex mb-2">
            <LabelRequired label="Quốc tịch" className="min-w-85px" />
            <AutocompleteObjectV2
              options={QUOC_TICH}
              value={values?.quocTich}
              name="quocTich"
              onChange={(selectedOption) =>
                setFieldValue(selectedOption, "quocTich")
              }
              touched={touched?.quocTich}
              errors={errors?.quocTich}
              className="autocomplete-custom-tiep-nhan radius spaces width-100 h-25"
            />
          </Col>
          <Col xs={12} sm={6} md={4} className="d-flex mb-2">
            <LabelRequired label="Dân tộc" className="min-w-85px" />
            <AutocompleteObjectV2
              options={DAN_TOC}
              value={values?.danToc}
              name="danToc"
              onChange={(selectedOption) =>
                setFieldValue(selectedOption, "danToc")
              }
              touched={touched?.danToc}
              errors={errors?.danToc}
              className="autocomplete-custom-tiep-nhan radius spaces width-100 h-25"
            />
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={6} md={4} className="d-flex mb-2">
            <TextField
              label="SN/Tp"
              name="thon"
              labelClassName="min-w-85px"
              className="spaces width-100"
            />
          </Col>
          <Col xs={12} sm={6} md={4} className="d-flex mb-2">
            <TextField
              label="Tt/Hq/Xp"
              name="xaPhuong"
              labelClassName="min-w-85px"
              className="spaces width-100"
            />
          </Col>
          <Col xs={12} sm={6} md={4} className="spaces d-flex mb-2">
            <LabelRequired label="T/TP" className="min-w-85px" />
            <AutocompleteObjectV2
              options={LIST_PROVINCE}
              value={values?.tinhHuyenXa}
              name="tinhHuyenXa"
              onChange={(selectedOption) =>
                setFieldValue(selectedOption, "tinhHuyenXa")
              }
              touched={touched?.tinhHuyenXa}
              errors={errors?.tinhHuyenXa}
              className="autocomplete-custom-tiep-nhan radius spaces width-100 h-25"
            />
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={6} md={4} className="d-flex mb-2">
            <LabelRequired label="H/Q" className="min-w-85px" />
            <AutocompleteObjectV2
              options={LIST_DISTRICT}
              value={values?.tinhHuyenXa}
              name="tinhHuyenXa"
              onChange={(selectedOption) =>
                setFieldValue(selectedOption, "tinhHuyenXa")
              }
              touched={touched?.tinhHuyenXa}
              errors={errors?.tinhHuyenXa}
              className="autocomplete-custom-tiep-nhan radius spaces width-100 h-25"
            />
          </Col>
          <Col xs={12} sm={6} md={4} className="d-flex mb-2">
            <LabelRequired label="X/P" className="min-w-85px" />
            <AutocompleteObjectV2
              options={LIST_WARD}
              value={values?.tinhHuyenXa}
              name="tinhHuyenXa"
              onChange={(selectedOption) =>
                setFieldValue(selectedOption, "tinhHuyenXa")
              }
              touched={touched?.tinhHuyenXa}
              errors={errors?.tinhHuyenXa}
              className="autocomplete-custom-tiep-nhan radius spaces width-100 h-25"
            />
          </Col>
          <Col xs={12} sm={6} md={4} className="d-flex mb-2">
            <LabelRequired label="Nghề nghiệp" className="min-w-85px" />
            <AutocompleteObjectV2
              options={[]}
              value={values?.job}
              name="job"
              onChange={(selectedOption) =>
                handleChangeSelect(selectedOption, "job", setFieldValue)
              }
              touched={touched?.job}
              errors={errors?.job}
              searchFunction={getAllCategory}
              searchObject={{}}
              getOptionLabel={(option) => `${option.code} - ${option.name}`}
              className="autocomplete-custom-tiep-nhan radius spaces width-100 h-25"
            />
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={6} md={4} className="d-flex mb-2">
            <LabelRequired label="ĐK khám" className="min-w-85px" />
            <AutocompleteObjectV2
              options={[]}
              value={values?.gioiTinh}
              name="gioiTinh"
              onChange={(selectedOption) =>
                setFieldValue(selectedOption, "gioiTinh")
              }
              touched={touched?.gioiTinh}
              errors={errors?.gioiTinh}
              className="autocomplete-custom-tiep-nhan radius spaces width-100 h-25"
            />
          </Col>
          <Col xs={12} sm={6} md={4} className="d-flex mb-2">
            <LabelRequired label="Ngày hẹn" className="min-w-85px" />
            <TextValidator type="datetime-local" />
          </Col>
          <Col xs={12} sm={6} md={4} className="d-flex mb-2">
            <LabelRequired label="Lý do khám" className="min-w-85px" />
            <AutocompleteObjectV2
              options={[]}
              value={values?.gioiTinh}
              name="gioiTinh"
              onChange={(selectedOption) =>
                setFieldValue(selectedOption, "gioiTinh")
              }
              touched={touched?.gioiTinh}
              errors={errors?.gioiTinh}
              className="autocomplete-custom-tiep-nhan radius spaces width-100 h-25"
            />
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={6} className="d-flex mb-2">
            <LabelRequired label="Dịch vụ" className="min-w-85px" />
            <AutocompleteObjectV2
              options={[]}
              value={values?.dichVu}
              name="dichVu"
              onChange={(selectedOption) =>
                setFieldValue(selectedOption, "dichVu")
              }
              touched={touched?.dichVu}
              errors={errors?.dichVu}
              className="autocomplete-custom-tiep-nhan radius spaces width-100 h-25"
            />
          </Col>
          <Col xs={12} sm={6} className="d-flex mb-2">
            <TextField
              label="Phòng khám"
              name="phongKham"
              labelClassName="min-w-85px"
              className="spaces width-100"
            />
          </Col>
        </Row>
      </div>

      <div className="spaces width-28 p-10 pb-14 bg-white">
        <div className="d-flex">
          <FormCheck
            type="checkbox"
            label="TE có mã BHXH"
            name="BHYT.TECoMaBHXH"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChecked(e, setFieldValue)
            }
            className="min-w-125px d-flex align-items-center gap-2"
          />
          <FormCheck
            type="checkbox"
            label="Nợ thẻ BHYT"
            name="BHYT.noTheBHYT"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChecked(e, setFieldValue)
            }
            className="min-w-100px d-flex align-items-center gap-2"
          />
        </div>

        <div className="spaces width-100 d-flex mb-5">
          <LabelRequired label="Số BHYT" className="min-w-80px" />
          <div className="spaces ms-0 d-flex">
            <div className="spaces width-25">
              <TextField
                name="BHYT.soThe1"
                type="text"
                maxLength="2"
                disabled={!isBHYT}
                className="text-center "
              />
            </div>
            <div className="spaces width-25">
              <TextField
                name="BHYT.soThe2"
                type="text"
                maxLength="2"
                disabled={!isBHYT}
                className="text-center "
              />
            </div>
            <div className="spaces width-25">
              <TextField
                name="BHYT.soThe3"
                type="text"
                maxLength="2"
                disabled={!isBHYT}
                className="text-center "
              />
            </div>
            <div className="spaces width-40">
              <TextField
                name="BHYT.soThe4"
                type="text"
                disabled={!isBHYT}
                className="text-center "
              />
            </div>
          </div>
        </div>

        <div className="spaces width-100 d-flex mb-5">
          <LabelRequired label="KCB BD" className="min-w-80px" />
          <div className="d-flex spaces w-100">
            <div className="spaces width-25">
              <TextField
                name="BHYT.KCBBD"
                type="text"
                maxLength="6"
                disabled={!isBHYT}
                className="text-center"
              />
            </div>
            <div className="spaces width-75">
              <TextField
                name="BHYT.tuyenKCB"
                type="text"
                disabled={!isBHYT}
                className="text-center"
              />
            </div>
          </div>
        </div>

        <div className="spaces width-100 d-flex align-items-center mb-5 h-27">
          <LabelRequired label="Hạn thẻ" className="min-w-80px" />

          <div className="spaces d-flex">
            <div className="spaces width-25">
              <TextField
                name="BHYT.hanThe.ngayStart"
                type="text"
                maxLength="2"
                className="text-center "
                disabled={!isBHYT}
              />
            </div>
            <div className="spaces width-25">
              <TextField
                name="BHYT.hanThe.thangStart"
                type="text"
                maxLength="2"
                className="text-center "
                disabled={!isBHYT}
              />
            </div>
            <div className="spaces width-50">
              <TextField
                name="BHYT.hanThe.namStart"
                type="text"
                maxLength="4"
                className="text-center "
                disabled={!isBHYT}
              />
            </div>
          </div>
          &nbsp; &nbsp; &nbsp;  &nbsp; 
          <div className="spaces d-flex">
            <div className="spaces width-25">
              <TextField
                name="BHYT.hanThe.ngayEnd"
                type="text"
                maxLength="2"
                className="text-center "
                disabled={!isBHYT}
              />
            </div>
            <div className="spaces width-25">
              <TextField
                name="BHYT.hanThe.thangEnd"
                type="text"
                maxLength="2"
                className="text-center "
                disabled={!isBHYT}
              />
            </div>
            <div className="spaces width-50">
              <TextField
                name="BHYT.hanThe.namEnd"
                type="text"
                maxLength="4"
                className="text-center "
                disabled={!isBHYT}
              />
            </div>
          </div>
        </div>

        <div className="spaces d-flex w-100">
          <LabelRequired label="Tuyến KCB" className="min-w-80px" />
          <AutocompleteObjectV2
            options={LIST_TUYEN_KCB}
            name="BHYT.tuyenKCB"
            value={values?.BHYT?.tuyenKCB}
            onChange={(selectedOption) => {
              handleChangeSelect(
                selectedOption,
                "BHYT.tuyenKCB",
                setFieldValue
              );
            }}
            className="autocomplete-custom-tiep-nhan radius spaces width-100 h-25"
            isDisabled={!isBHYT}
          />
          <div className="spaces width-60 position-relative ml-10">
            <TextField
              className="text-center pr-30"
              label="Mức hưởng"
              name="BHYT.mucThuong"
              type="text"
              labelClassName="min-w-80px"
              disabled={!isBHYT}
              value={50}
            />
            <div className="spaces width-4">
              <h6 className="position-absolute muc-huong border border-end-0">
                %
              </h6>
            </div>
          </div>
        </div>

        <div className="spaces d-flex my-10">
          <FormCheck
            type="checkbox"
            label="Giấy chứng nhận không cùng chi trả trong năm"
            name="BHYT.chungNhanKhongCungChiTra"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChecked(e, setFieldValue)
            }
            className="min-w-150px d-flex align-items-center gap-2"
          />
        </div>

        <div className="spaces d-flex mb-5">
          <LabelRequired
            label="Ngày miễn cùng chi trả"
            className=" min-w-200px"
          />
          <div className="spaces d-flex flex-auto">
            <div className="spaces width-25">
              <TextField
                name="BHYT.ngayStart2"
                type="text"
                maxLength="2"
                className="text-center "
                disabled={!isBHYT}
              />
            </div>
            <div className="spaces width-25">
              <TextField
                name="BHYT.thangStart2"
                type="text"
                maxLength="2"
                className="text-center "
                disabled={!isBHYT}
              />
            </div>
            <div className="spaces width-50">
              <TextField
                name="BHYT.namStart2"
                type="text"
                maxLength="4"
                className="text-center "
                disabled={!isBHYT}
              />
            </div>
          </div>
        </div>

        <div className="spaces d-flex">
          <LabelRequired
            label="Ngày đóng đủ 5 năm liên tục"
            className=" min-w-200px"
          />
          <div className="spaces d-flex flex-auto">
            <div className="spaces width-25">
              <TextField
                name="BHYT.ngayStart2"
                type="text"
                maxLength="2"
                className="text-center "
                disabled={!isBHYT}
              />
            </div>
            <div className="spaces width-25">
              <TextField
                name="BHYT.thangStart2"
                type="text"
                maxLength="2"
                className="text-center "
                disabled={!isBHYT}
              />
            </div>
            <div className="spaces width-50">
              <TextField
                name="BHYT.namStart2"
                type="text"
                maxLength="4"
                className="text-center "
                disabled={!isBHYT}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormDatLich;
