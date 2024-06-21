import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useIntl } from "react-intl";
import * as Yup from "yup";
import AutocompleteV2 from "../../../component/AutocompleteObjectV2";
import LabelRequired from "../../../component/LabelRequired";
import TextField from "../../../component/TextField";
import {
  defaultOptionSelect,
  initialValuesTiepNhan,
  optionsBoPhanChanThuong,
  optionsDienBienSauTaiNan,
  optionsLoaiNgoDoc,
  optionsMu,
  optionsSuDungBiaRuouMaTuy,
  optionsTNGT
} from "../../../phan-he-tiep-nhan-thanh-toan/constants/PhanHeTiepNhan";
import { ObjectSelectAutocomplete, benhNhan } from "../../../phan-he-tiep-nhan-thanh-toan/models/PhanHeTiepNhanModel";
import {
  getAllProvince,
  getCommuneByDistrictId,
  getDistrictByProvinceId,
} from "../../../phan-he-tiep-nhan-thanh-toan/services/TiepNhanServices";
import { SEARCH_OBJECT_MAX_SIZE, VARIABLE_STRING } from "../../../utils/Constant";
import { useFormikContext } from "formik";

const options = [
  { code: 0, name: "option 1" },
  { code: 1, name: "option 2" },
  { code: 2, name: "option 3" },
  { code: 3, name: "opions 4" },
];

const TaiNanThuongTich = () => {
  //   const { setFieldValue, values, errors, touched } =
  //     useFormikContext<benhNhan>();
  const [benhNhan, setBenhNhan] = useState<benhNhan>(initialValuesTiepNhan);

  const intl = useIntl();
  const { values, setFieldValue, touched, errors } = useFormikContext<any>();

  let validationSchema = Yup.object({
    thoiDiemTaiNan: Yup.string()
      .required(intl.formatMessage({ id: "VALIDATION.REQUIRE" }))
      .nullable(),
    noiXayRaTaiNan: Yup.string()
      .required(intl.formatMessage({ id: "VALIDATION.REQUIRE" }))
      .nullable(),
    tinhTaiNan: Yup.object()
      .required(intl.formatMessage({ id: "VALIDATION.REQUIRE" }))
      .nullable(),
    huyenTaiNan: Yup.object()
      .required(intl.formatMessage({ id: "VALIDATION.REQUIRE" }))
      .nullable(),
    xaTaiNan: Yup.object()
      .required(intl.formatMessage({ id: "VALIDATION.REQUIRE" }))
      .nullable(),
    diaDiemXayRa: Yup.object()
      .required(intl.formatMessage({ id: "VALIDATION.REQUIRE" }))
      .nullable(),
    boPhanChanThuong: Yup.object()
      .required(intl.formatMessage({ id: "VALIDATION.REQUIRE" }))
      .nullable(),
    nguyenNhanTaiNan: Yup.object()
      .required(intl.formatMessage({ id: "VALIDATION.REQUIRE" }))
      .nullable(),
    xuTriTaiNan: Yup.object()
      .required(intl.formatMessage({ id: "VALIDATION.REQUIRE" }))
      .nullable(),
    dienBienSauTaiNan: Yup.object()
      .required(intl.formatMessage({ id: "VALIDATION.REQUIRE" }))
      .nullable(),
  });

  const handleChangeSelect = (
    selectedObject: ObjectSelectAutocomplete,
    name: string,
    setFieldValue: (field: string, value: any) => void
  ) => {
    switch (name) {
      case VARIABLE_STRING.PROVINCE:
        setBenhNhan({
          ...benhNhan,
          district: defaultOptionSelect,
          ward: defaultOptionSelect,
        });
        setFieldValue(`${name}`, selectedObject);
        setFieldValue(VARIABLE_STRING.DISTRICT, null);
        setFieldValue(VARIABLE_STRING.WARD, null);
        break;
      case VARIABLE_STRING.DISTRICT:
        setBenhNhan({ ...benhNhan, ward: defaultOptionSelect });
        setFieldValue(`${name}`, selectedObject);
        setFieldValue(VARIABLE_STRING.WARD, null);
        break;
      case VARIABLE_STRING.TEN_DICH_VU:
        setFieldValue(VARIABLE_STRING.PHONG_KHAM, null);
        setFieldValue(`${name}`, selectedObject);
        break;
      default:
        setBenhNhan({ ...benhNhan, [name]: selectedObject });
        setFieldValue(`${name}`, selectedObject);
        break;
    }
  };
  const handleFormSubmit = async (values: benhNhan) => {};
  return (
    <>
              <Row className="mt-2 mx-2">
                <Col xs={4}>
                  <Row className="d-flex mb-2 align-items-center">
                    <LabelRequired label="Thời gian xảy ra tai nạn" />
                    <Col className="w-input-tai-nan">
                      <TextField name="thoiGianXayRaTaiNan" value={values?.thoiGianXayRaTaiNan || ""} />
                    </Col>
                  </Row>

                  <Row className="d-flex mb-2 align-items-center">
                    <LabelRequired label="Địa điểm xảy ra tai nạn" isRequired />
                    <Col className="w-input-tai-nan">
                      <AutocompleteV2
                        className="autocomplete-custom spaces  w-100"
                        options={options}
                        value={values?.diaDiemXayRa}
                        name="diaDiemXayRa"
                        valueField="id"
                        getOptionLabel={(option) => `${option.code} - ${option.name}`}
                        onChange={(selectedOption) => {
                          handleChangeSelect(selectedOption, "diaDiemXayRa", setFieldValue);
                        }}
                        touched={touched?.diaDiemXayRa}
                        errors={errors?.diaDiemXayRa}
                        searchFunction={getAllProvince}
                        searchObject={SEARCH_OBJECT_MAX_SIZE}
                      />
                    </Col>
                  </Row>

                  <Row className="d-flex mb-2 align-items-center">
                    <LabelRequired label="Tỉnh (thành phố)" isRequired />
                    <Col className="w-input-tai-nan">
                      <AutocompleteV2
                        className="autocomplete-custom spaces  w-100"
                        options={options}
                        value={values?.tinhTaiNan}
                        name="tinhTaiNan"
                        valueField="id"
                        getOptionLabel={(option) => `${option.code} - ${option.name}`}
                        onChange={(selectedOption) => {
                          handleChangeSelect(selectedOption, "tinhTaiNan", setFieldValue);
                        }}
                        touched={touched?.tinhTaiNan}
                        errors={errors?.tinhTaiNan}
                        searchFunction={getAllProvince}
                        searchObject={SEARCH_OBJECT_MAX_SIZE}
                      />
                    </Col>
                  </Row>
                  <Row className="d-flex mb-2 align-items-center">
                    <LabelRequired label="Địa điểm" isRequired />
                    <Col className="w-input-tai-nan">
                      <AutocompleteV2
                        className="autocomplete-custom spaces  w-100"
                        options={options}
                        value={values?.diaDiemTaiNan}
                        name="diaDiemTaiNan"
                        valueField="id"
                        getOptionLabel={(option) => `${option.code} - ${option.name}`}
                        onChange={(selectedOption) => {
                          handleChangeSelect(selectedOption, "diaDiemTaiNan", setFieldValue);
                        }}
                        touched={touched?.diaDiemTaiNan}
                        errors={errors?.diaDiemTaiNan}
                        searchFunction={getAllProvince}
                        searchObject={SEARCH_OBJECT_MAX_SIZE}
                      />
                    </Col>
                  </Row>
                  <Row className="d-flex mb-2 align-items-center">
                    <LabelRequired label="Loại tai nạn giao thông" />
                    <Col className="w-input-tai-nan">
                      <AutocompleteV2
                        className="autocomplete-custom spaces  w-100"
                        options={optionsTNGT}
                        value={values?.loaiTaiNanGiaoThong}
                        name="loaiTaiNan"
                        onChange={(selectedOption) => {
                          handleChangeSelect(selectedOption, "loaiTaiNanGiaoThong", setFieldValue);
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
                    <LabelRequired label="Loại tai nạn" />
                    <Col className="w-input-tai-nan">
                      <AutocompleteV2
                        className="autocomplete-custom spaces  w-100"
                        options={optionsTNGT}
                        value={values?.loaiTaiNan}
                        name="loaiTaiNan"
                        onChange={(selectedOption) => {
                          handleChangeSelect(selectedOption, "loaiTaiNan", setFieldValue);
                        }}
                        touched={touched?.loaiTaiNan}
                        errors={errors?.loaiTaiNan}
                        getOptionLabel={(option) => option.name}
                      />
                    </Col>
                  </Row>
                  <Row className="d-flex mb-2 align-items-center">
                    <LabelRequired label="T/H/X" />
                    <Col className="w-input-tai-nan">
                      <TextField name="THX" type="text" value={values?.thx || ""} />
                    </Col>
                  </Row>

                  <Row className="d-flex mb-2 align-items-center">
                    <LabelRequired label="Huyện (quận)" isRequired />
                    <Col className="w-input-tai-nan">
                      <AutocompleteV2
                        className="autocomplete-custom spaces  w-100"
                        options={options}
                        value={values?.huyenTaiNan}
                        name="huyenTaiNan"
                        onChange={(selectedOption) => {
                          handleChangeSelect(selectedOption, "huyenTaiNan", setFieldValue);
                        }}
                        touched={touched?.huyenTaiNan}
                        errors={errors?.huyenTaiNan}
                        searchFunction={getDistrictByProvinceId}
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
                    <LabelRequired label="Bộ phận chấn thương" isRequired />
                    <Col className="w-input-tai-nan">
                      <AutocompleteV2
                        className="autocomplete-custom spaces  w-100 spaces spaces "
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
                    <LabelRequired label="Xử trí" />
                    <Col className="w-input-tai-nan">
                      <AutocompleteV2
                        className="autocomplete-custom spaces  w-100"
                        options={optionsLoaiNgoDoc}
                        value={values?.xuTriTaiNan}
                        name="xuTriTaiNan"
                        onChange={(selectedOption) => {
                          handleChangeSelect(selectedOption, "xuTriTaiNan", setFieldValue);
                        }}
                        touched={touched?.xuTriTaiNan}
                        errors={errors?.xuTriTaiNan}
                        getOptionLabel={(option) => option.name}
                      />
                    </Col>
                  </Row>
                </Col>
                <Col xs={4}>
                  <Row className="d-flex mb-2 align-items-center">
                    <LabelRequired label="Ngộ độc" />
                    <Col className="w-input-tai-nan">
                      <AutocompleteV2
                        className="autocomplete-custom spaces  w-100"
                        options={optionsLoaiNgoDoc}
                        value={values?.ngoDoc}
                        name="ngoDoc"
                        onChange={(selectedOption) => {
                          handleChangeSelect(selectedOption, "ngoDoc", setFieldValue);
                        }}
                        touched={touched?.ngoDoc}
                        errors={errors?.ngoDoc}
                        getOptionLabel={(option) => option.name}
                      />
                    </Col>
                  </Row>
                  <Row className="d-flex mb-2 align-items-center">
                    <LabelRequired label="Tai nạn do cồn" />
                    <Col className="w-input-tai-nan">
                      <AutocompleteV2
                        className="autocomplete-custom spaces  w-100"
                        options={optionsSuDungBiaRuouMaTuy}
                        value={values?.taiNanDoCon}
                        name="taiNanDoCon"
                        onChange={(selectedOption) => {
                          handleChangeSelect(selectedOption, "taiNanDoCon", setFieldValue);
                        }}
                        touched={touched?.taiNanDoCon}
                        errors={errors?.taiNanDoCon}
                        getOptionLabel={(option) => option.name}
                      />
                    </Col>
                  </Row>
                  <Row className="d-flex mb-2 align-items-center">
                    <LabelRequired label="Xã (phường)" isRequired />
                    <Col className="w-input-tai-nan">
                      <AutocompleteV2
                        className="autocomplete-custom spaces  w-100"
                        options={options}
                        value={values?.xaTaiNan}
                        name="xaTaiNan"
                        onChange={(selectedOption) => {
                          handleChangeSelect(selectedOption, "xaTaiNan", setFieldValue);
                        }}
                        touched={touched?.xaTaiNan}
                        errors={errors?.xaTaiNan}
                        searchFunction={getCommuneByDistrictId}
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
                    <LabelRequired label="Nguyên nhân" />
                    <Col className="w-input-tai-nan">
                      <AutocompleteV2
                        className="autocomplete-custom spaces  w-100"
                        options={optionsMu}
                        value={values?.nguyenNhanTaiNan}
                        name="nguyenNhanTaiNan"
                        onChange={(selectedOption) => {
                          handleChangeSelect(selectedOption, "nguyenNhanTaiNan", setFieldValue);
                        }}
                        touched={touched?.nguyenNhanTaiNan}
                        errors={errors?.nguyenNhanTaiNan}
                        getOptionLabel={(option) => option.name}
                      />
                    </Col>
                  </Row>

                  <Row className="d-flex mb-2 align-items-center">
                    <LabelRequired label="Tai nạn do mũ bảo hiểm" isRequired />
                    <Col className="w-input-tai-nan">
                      <AutocompleteV2
                        className="autocomplete-custom spaces  w-100"
                        options={optionsDienBienSauTaiNan}
                        value={values?.taiNanDoMuBaoHiem}
                        name="taiNanDoMuBaoHiem"
                        onChange={(selectedOption) => {
                          handleChangeSelect(selectedOption, "taiNanDoMuBaoHiem", setFieldValue);
                        }}
                        touched={touched?.taiNanDoMuBaoHiem}
                        errors={errors?.taiNanDoMuBaoHiem}
                        getOptionLabel={(option) => option.name}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="d-flex mb-2 align-items-center mx-2">
                <LabelRequired label="Thông tin điều trị" isRequired />
                <Col className="w-input-tai-nan">
                  <AutocompleteV2
                    className="autocomplete-custom spaces  w-100"
                    options={optionsDienBienSauTaiNan}
                    value={values?.thongTinDieuTri}
                    name="thongTinDieuTri"
                    onChange={(selectedOption) => {
                      handleChangeSelect(selectedOption, "thongTinDieuTri", setFieldValue);
                    }}
                    touched={touched?.thongTinDieuTri}
                    errors={errors?.thongTinDieuTri}
                    getOptionLabel={(option) => option.name}
                  />
                </Col>
              </Row>
    </>
  );
};

export default TaiNanThuongTich;
