import { Col, Row } from "react-bootstrap";
import LabelRequired from "../../../component/LabelRequired";
import TextField from "../../../component/TextField";
import {
  ObjectSelectAutocomplete,
  benhNhan,
} from "../../models/PhanHeTiepNhanModel";
import { FC } from "react";
import { FormikErrors, FormikTouched } from "formik";
import {
  getAllProvince,
  getCommuneByDistrictId,
  getDistrictByProvinceId,
} from "../../services/TiepNhanServices";
import { SEARCH_OBJECT_MAX_SIZE } from "../../../utils/Constant";
import AutocompleteV2 from "../../../component/AutocompleteObjectV2";
import { optionsBoPhanChanThuong, optionsDiaDiemXayRa, optionsDienBienSauTaiNan, optionsLoaiNgoDoc, optionsMu, optionsNguyenNhan, optionsSuDungBiaRuouMaTuy, optionsTNGT, optionsTNLĐ } from "../../constants/PhanHeTiepNhan";

type taiNanThuongTichProps = {
  values: benhNhan;
  errors?: FormikErrors<benhNhan>;
  touched?: FormikTouched<benhNhan>;
  setFieldValue: (field: string, value: any) => void;
  handleChangeSelect: (
    selectedObject: ObjectSelectAutocomplete,
    name: string,
    setFieldValue: (field: string, value: any) => void
  ) => void;
};

const options = [
  { code: 0, name: "option 1" },
  { code: 1, name: "option 2" },
  { code: 2, name: "option 3" },
  { code: 3, name: "opions 4" },
];

const TabTaiNanThuongTichV2: FC<taiNanThuongTichProps> = ({
  values,
  handleChangeSelect,
  setFieldValue,
  errors,
  touched,
}) => {
  const getListDistrictByProvinceId = (searchObject: object) =>
    values.tinhTaiNan ? getDistrictByProvinceId(searchObject) : null;
  const getListCommuneByDistrictId = (searchObject: object) =>
    values.huyenTaiNan ? getCommuneByDistrictId(searchObject) : null;

  return (
    <>
      <Row className="mt-2 mx-2">
        <Col xs={4}>
          <Row className="d-flex mb-2 align-items-center">
            <Col xs={4} className="w-label-tai-nan">
              <LabelRequired label="Mã HBBA" />
            </Col>
            <Col className="w-input-tai-nan">
              <TextField  name="maHBBA" value={values?.maHBBA || ""} />
            </Col>
          </Row>

          <Row className="d-flex mb-2 align-items-center">
            <Col xs={4} className="w-label-tai-nan">
              <LabelRequired label="Người nhập" />
            </Col>
            <Col className="w-input-tai-nan">
              <TextField  name="nguoiNhap" value={values?.nguoiNhap || ""} />
            </Col>
          </Row>

          <Row className="d-flex mb-2 align-items-center">
            <Col xs={4} className="w-label-tai-nan">
              <LabelRequired label="Thời điểm tai nạn" isRequired />
            </Col>
            <Col className="w-input-tai-nan">
              <TextField 
                name="thoiDiemTaiNan"
                value={values?.thoiDiemTaiNan || ""}
              />
            </Col>
          </Row>

          <Row className="d-flex mb-2 align-items-center">
            <Col xs={4} className="w-label-tai-nan">
              <LabelRequired label="Nơi xảy ra tai nạn" isRequired />
            </Col>
            <Col className="w-input-tai-nan">
              <TextField 
                name="noiXayRaTaiNan"
                value={values?.noiXayRaTaiNan}
              />
            </Col>
          </Row>

          <Row className="d-flex mb-2 align-items-center">
            <Col xs={4} className="w-label-tai-nan">
              <LabelRequired label="Địa điểm xảy ra" isRequired />
            </Col>
            <Col className="w-input-tai-nan">
              <AutocompleteV2
                className="autocomplete-custom-tiep-nhan w-100 spaces h-26"
                options={optionsDiaDiemXayRa}
                value={values?.diaDiemXayRa}
                name="diaDiemXayRa"
                onChange={(selectedOption) => {
                  handleChangeSelect(
                    selectedOption,
                    "diaDiemXayRa",
                    setFieldValue
                  );
                }}
                touched={touched?.diaDiemXayRa}
                errors={errors?.diaDiemXayRa}
                getOptionLabel={(option) => option.name}
              />
            </Col>
          </Row>

          <Row className="d-flex mb-2 align-items-center">
            <Col xs={4} className="w-label-tai-nan">
              <LabelRequired label="Nguyên nhân" isRequired />
            </Col>
            <Col className="w-input-tai-nan">
              <AutocompleteV2
                className="autocomplete-custom-tiep-nhan w-100 spaces h-26"
                options={optionsNguyenNhan}
                value={values?.nguyenNhanTaiNan}
                name="nguyenNhanTaiNan"
                onChange={(selectedOption) => {
                  handleChangeSelect(
                    selectedOption,
                    "nguyenNhanTaiNan",
                    setFieldValue
                  );
                }}
                touched={touched?.nguyenNhanTaiNan}
                errors={errors?.nguyenNhanTaiNan}
                getOptionLabel={(option) => option.name}
              />
            </Col>
          </Row>

          <Row className="d-flex mb-2 align-items-center">
            <Col xs={4} className="w-label-tai-nan">
              <LabelRequired label="Loại TNGT" />
            </Col>
            <Col className="w-input-tai-nan">
              <AutocompleteV2
                className="autocomplete-custom-tiep-nhan w-100 spaces h-26"
                options={optionsTNGT}
                value={values?.loaiTaiNanGiaoThong}
                name="loaiTaiNan"
                onChange={(selectedOption) => {
                  handleChangeSelect(
                    selectedOption,
                    "loaiTaiNanGiaoThong",
                    setFieldValue
                  );
                }}
                touched={touched?.loaiTaiNanGiaoThong}
                errors={errors?.loaiTaiNanGiaoThong}
                getOptionLabel={(option) => option.name}
              />
            </Col>
          </Row>
        </Col>
        <Col xs={4}>
          <Row className="d-flex mb-2 align-items-center">
            <Col xs={4} className="w-label-tai-nan">
              <LabelRequired label="T/H/X" />
            </Col>
            <Col className="w-input-tai-nan">
              <TextField  name="THX" type="text" value={`${values.xaTaiNan?.name ? values.xaTaiNan?.name + "," : ""} ${values.huyenTaiNan?.name ? values.huyenTaiNan?.name + "," : ""} ${values.tinhTaiNan?.name || ""}`} />
            </Col>
          </Row>

          <Row className="d-flex mb-2 align-items-center">
            <Col xs={4} className="w-label-tai-nan">
              <LabelRequired label="Tỉnh/Thành" isRequired />
            </Col>
            <Col className="w-input-tai-nan">
              <AutocompleteV2
                className="autocomplete-custom-tiep-nhan w-100 spaces h-26"
                options={options}
                value={values?.tinhTaiNan}
                name="tinhTaiNan"
                valueField="id"
                getOptionLabel={(option) => `${option.code} - ${option.name}`}
                onChange={(selectedOption) => {
                  handleChangeSelect(
                    selectedOption,
                    "tinhTaiNan",
                    setFieldValue
                  );
                }}
                touched={touched?.tinhTaiNan}
                errors={errors?.tinhTaiNan}
                searchFunction={getAllProvince}
                searchObject={SEARCH_OBJECT_MAX_SIZE}
              />
            </Col>
          </Row>

          <Row className="d-flex mb-2 align-items-center">
            <Col xs={4} className="w-label-tai-nan">
              <LabelRequired label=" Quận/Huyện" isRequired />
            </Col>
            <Col className="w-input-tai-nan">
              <AutocompleteV2
                className="autocomplete-custom-tiep-nhan w-100 spaces h-26"
                options={options}
                value={values?.huyenTaiNan}
                name="huyenTaiNan"
                onChange={(selectedOption) => {
                  handleChangeSelect(
                    selectedOption,
                    "huyenTaiNan",
                    setFieldValue
                  );
                }}
                touched={touched?.huyenTaiNan}
                errors={errors?.huyenTaiNan}
                searchFunction={getListDistrictByProvinceId}
                searchObject={{
                  ...SEARCH_OBJECT_MAX_SIZE,
                  provinceId: values?.tinhTaiNan?.id,
                }}
                dependencies={[values?.tinhTaiNan]}
                getOptionLabel={(option) => `${option.code} - ${option.name}`}
              />
            </Col>
          </Row>

          <Row className="d-flex mb-2 align-items-center">
            <Col xs={4} className="w-label-tai-nan">
              <LabelRequired label="Phường/Xã" isRequired />
            </Col>
            <Col className="w-input-tai-nan">
              <AutocompleteV2
                className="autocomplete-custom-tiep-nhan w-100 spaces h-26"
                options={options}
                value={values?.xaTaiNan}
                name="xaTaiNan"
                onChange={(selectedOption) => {
                  handleChangeSelect(selectedOption, "xaTaiNan", setFieldValue);
                }}
                touched={touched?.xaTaiNan}
                errors={errors?.xaTaiNan}
                searchFunction={getListCommuneByDistrictId}
                searchObject={{
                  ...SEARCH_OBJECT_MAX_SIZE,
                  districtId: values?.huyenTaiNan?.id,
                }}
                dependencies={[values?.tinhTaiNan, values?.huyenTaiNan]}
                getOptionLabel={(option) => `${option.code} - ${option.name}`}
              />
            </Col>
          </Row>
          <Row className="d-flex mb-2 align-items-center">
            <Col xs={4} className="w-label-tai-nan">
              <LabelRequired label="Sử dụng rượu bia, ma tuý" />
            </Col>
            <Col className="w-input-tai-nan">
              <AutocompleteV2
                className="autocomplete-custom-tiep-nhan w-100 spaces h-26"
                options={optionsSuDungBiaRuouMaTuy}
                value={values?.suDungChatKichThich}
                name="suDungChatKichThich"
                onChange={(selectedOption) => {
                  handleChangeSelect(
                    selectedOption,
                    "suDungChatKichThich",
                    setFieldValue
                  );
                }}
                touched={touched?.suDungChatKichThich}
                errors={errors?.suDungChatKichThich}
                getOptionLabel={(option) => option.name}
              />
            </Col>
          </Row>

          <Row className="d-flex mb-2 align-items-center">
            <Col xs={4} className="w-label-tai-nan">
              <LabelRequired label="Bộ phận chấn thương" isRequired />
            </Col>
            <Col className="w-input-tai-nan">
              <AutocompleteV2
                className="autocomplete-custom-tiep-nhan w-100 spaces h-26"
                options={optionsBoPhanChanThuong}
                value={values?.boPhanChanThuong}
                name="boPhanChanThuong"
                onChange={(selectedOption) => {
                  handleChangeSelect(selectedOption, "ward", setFieldValue);
                }}
                touched={touched?.boPhanChanThuong}
                errors={errors?.boPhanChanThuong}
                getOptionLabel={(option) => option.name}
              />
            </Col>
          </Row>

          <Row className="d-flex mb-2 align-items-center">
            <Col xs={4} className="w-label-tai-nan">
              <LabelRequired label="Loại ngộ độc" />
            </Col>
            <Col className="w-input-tai-nan">
              <AutocompleteV2
                className="autocomplete-custom-tiep-nhan w-100 spaces h-26"
                options={optionsLoaiNgoDoc}
                value={values?.loaiNgoDoc}
                name="loaiNgoDoc"
                onChange={(selectedOption) => {
                  handleChangeSelect(
                    selectedOption,
                    "loaiNgoDoc",
                    setFieldValue
                  );
                }}
                touched={touched?.loaiNgoDoc}
                errors={errors?.loaiNgoDoc}
                getOptionLabel={(option) => option.name}
              />
            </Col>
          </Row>
        </Col>
        <Col xs={4}>
          <Row className="d-flex mb-2 align-items-center">
            <Col xs={4} className="w-label-tai-nan">
              <LabelRequired label="Loại TNLĐ" />
            </Col>
            <Col className="w-input-tai-nan">
              <AutocompleteV2
                name="loaiTaiNanLaoDong"
                className="autocomplete-custom-tiep-nhan w-100 spaces h-26"
                options={optionsTNLĐ}
                value={values?.loaiTaiNanLaoDong}
                onChange={(selectedOption) => {
                  handleChangeSelect(
                    selectedOption,
                    "loaiTaiNanLaoDong",
                    setFieldValue
                  );
                }}
                touched={touched?.loaiTaiNanLaoDong}
                errors={errors?.loaiTaiNanLaoDong}
                getOptionLabel={(option) => option.name}
              />
            </Col>
          </Row>

          <Row className="d-flex mb-2 align-items-center">
            <Col xs={4} className="w-label-tai-nan">
              <LabelRequired label="Mũ" />
            </Col>
            <Col className="w-input-tai-nan">
              <AutocompleteV2
                className="autocomplete-custom-tiep-nhan w-100 spaces h-26"
                options={optionsMu}
                value={values?.muBaoHiem}
                name="muBaoHiem"
                onChange={(selectedOption) => {
                  handleChangeSelect(
                    selectedOption,
                    "muBaoHiem",
                    setFieldValue
                  );
                }}
                touched={touched?.muBaoHiem}
                errors={errors?.muBaoHiem}
                getOptionLabel={(option) => option.name}
              />
            </Col>
          </Row>

          <Row className="d-flex mb-2 align-items-center">
            <Col xs={4} className="w-label-tai-nan">
              <LabelRequired label="Diễn biến sau tai nạn" isRequired />
            </Col>
            <Col className="w-input-tai-nan">
              <AutocompleteV2
                className="autocomplete-custom-tiep-nhan w-100 spaces h-26"
                options={optionsDienBienSauTaiNan}
                value={values?.dienBienSauTaiNan}
                name="dienBienSauTaiNan"
                onChange={(selectedOption) => {
                  handleChangeSelect(
                    selectedOption,
                    "dienBienSauTaiNan",
                    setFieldValue
                  );
                }}
                touched={touched?.dienBienSauTaiNan}
                errors={errors?.dienBienSauTaiNan}
                getOptionLabel={(option) => option.name}
              />
            </Col>
          </Row>

          <Row className="d-flex mb-2">
            <Col xs={4} className="w-label-tai-nan">
              <LabelRequired label="Thông tin điều trị" />
            </Col>
            <Col className="w-input-tai-nan">
              <TextField 
                name="thongTinDieuTri"
                as="textarea"
                rows={4}
                value={values?.thongTinDieuTri || ""}
              />
            </Col>
          </Row>

          <Row className="d-flex mb-2">
            <Col xs={4} className="w-label-tai-nan">
              <LabelRequired label="Tình trạng thương tích" />
            </Col>
            <Col className="w-input-tai-nan">
              <TextField 
                name="tinhTrangThuongTich"
                as="textarea"
                rows={4}
                value={values?.tinhTrangThuongTichRaVien || ""}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default TabTaiNanThuongTichV2;
