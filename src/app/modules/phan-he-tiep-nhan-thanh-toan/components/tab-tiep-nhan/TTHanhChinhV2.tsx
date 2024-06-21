import moment from "moment";
import React, { FC, useEffect, useState } from "react";
import { Button, FormCheck } from "react-bootstrap";
import { toast } from "react-toastify";
import AutocompleteObjectV2 from "../../../component/AutocompleteObjectV2";
import LabelRequired from "../../../component/LabelRequired";
import TextField from "../../../component/TextField";
import ModalTimKiemBenhNhan from "../../../component/modal-tim-kiem-benh-nhan/ModalTimKiemBenhNhan";
import {
  CODE,
  CODE_SELECT,
  KEY,
  SEARCH_OBJECT_MAX_SIZE,
  SIMPLE_CATEGORY_TYPE,
  VARIABLE_STRING
} from "../../../utils/Constant";
import { IResponseData } from "../../../utils/models";
import {
  DOI_TUONG,
  GIOI_TINH,
  LIST_DOI_TUONG_TIEP_NHAN,
  LOAI_DK_KHAM
} from "../../constants/PhanHeTiepNhan";
import { KEY_SEARCH } from "../../constants/constants";
import {
  getAllCategory,
  getAllProvince,
  getCommuneByDistrictId,
  getDistrictByProvinceId
} from "../../services/TiepNhanServices";
import { benhNhanProps } from "../../tab-tiep-nhan/TiepNhan";
import { LIST_CAP_BAC, LIST_CHUC_VU, LIST_DICH_VU, LIST_DISTRICT, LIST_DON_VI, LIST_HOC_VAN, LIST_NGHE_NGHIEP, LIST_NOI_SONG, LIST_PHONG_KHAM, LIST_PROVINCE, LIST_TUYEN_KCB, LIST_WARD } from "../fakeData";
import ModalNhapTheBH from "./ModalNhapTheBH";

const TTHanhChinhV2: FC<benhNhanProps> = React.memo(
  ({
    values,
    errors,
    touched,
    onAgeCalculate,
    setFieldValue,
    handleChangeSelect,
    handleClearValue,
    handleOpenTKBNDialog,
    isDatLichHen,
    handleChecked
  }) => {
    const [dataDanToc, setDataDanToc] = useState<any>([{
      name: "Kinh",
    }]);
    const [dataQuocTinh, setDataQuocTinh] = useState<any>([
      {
        code: "VN",
        name: "Việt Nam"
      },
      {
        code: "Lao",
        name: "Lào"
      },
    ]);
    const [isBHYT, setIsBHYT] = useState<boolean>(false);
    const [objectSearch, setObjectSearch] = useState({
      soDienThoaiSearch: "",
      soTheKCB: "",
      soCCCD: "",
    })
    const regexNumber = /^[0-9]*$/;
    const [shouldOpenNhapTheBHDialog, setShouldOpenNhapTheBHDialog] = useState(false);
    const [openTimKiemBNDialog, setOpenTimKiemBNDialog] = useState(false);
    const tinhHuyenXa = [values?.province?.code, values?.district?.code, values?.ward?.code]

    useEffect(() => {
      setFieldValue("tinhHuyenXa", ((values?.province?.code && values?.district?.code && values?.ward?.code) ? tinhHuyenXa?.join("") : ""));
    }, [values?.province?.code, values?.district?.code, values?.ward?.code]);

    useEffect(() => {
      setFieldValue("loaiDoiTuong", LIST_DOI_TUONG_TIEP_NHAN[2]);
    }, [])

    useEffect(() => {
      if (!values?.caseId) {
        getDataQuocTich();
        getDataDanToc();
      }
    }, [values?.caseId]);


    const getDataQuocTich = async () => {
      try {
        const { data }: IResponseData = await getAllCategory({
          ...SEARCH_OBJECT_MAX_SIZE,
          type: SIMPLE_CATEGORY_TYPE.QUOC_GIA,
        });
        if (CODE.SUCCESS === data?.code) {
          setDataQuocTinh(data?.data?.content);
          const itemQuocGia = data?.data?.content?.find(
            (item: any) => item?.code === CODE_SELECT.QG_VIET_NAM
          );

          setFieldValue(VARIABLE_STRING.QUOC_TINH, itemQuocGia || null);
          return;
        }
      } catch (error) {
        toast.warning("Xảy ra lỗi, vui lòng thử lại!");
      }
    };

    const getDataDanToc = async () => {
      try {
        const { data }: IResponseData = await getAllCategory({
          ...SEARCH_OBJECT_MAX_SIZE,
          type: SIMPLE_CATEGORY_TYPE.DAN_TOC,
        });
        if (CODE.SUCCESS === data?.code) {
          setDataDanToc(data?.data?.content);
          const itemDanToc = data?.data?.content?.find(
            (item: any) => item?.code === CODE_SELECT.DT_KINH
          );

          setFieldValue(VARIABLE_STRING.DAN_TOC, itemDanToc || null);
          return;
        }
      } catch (error) {
        toast.warning("Xảy ra lỗi, vui lòng thử lại!");
      }
    };

    const getListDistrictByProvinceId = (searchObject: object) =>
      values.province ? getDistrictByProvinceId(searchObject) : null;

    const getListCommuneByDistrictId = (searchObject: object) =>
      values.district ? getCommuneByDistrictId(searchObject) : null;

    useEffect(() => {
      if (values?.loaiDoiTuong) {
        setIsBHYT(values?.loaiDoiTuong?.code === DOI_TUONG.BAO_HIEM);
        return;
      }
      setIsBHYT(false);
    }, [values?.loaiDoiTuong]);

    const handleChangeSdt = (e: any) => {
      const { name, value } = e.target;
      if (regexNumber.test(value) || value === "") {
        setFieldValue(name, value);
      }
    };

    const handleChangeTextSearch = (e: any) => {
      const { name, value } = e.target;
      if (name === KEY_SEARCH.SDT || name === KEY_SEARCH.CCCD) {
        if (regexNumber.test(value) || value === "") {
          setObjectSearch({ ...objectSearch, [name]: value });
        }
      } else {
        setObjectSearch({ ...objectSearch, [name]: value });
      }
    }

    const handleSearch = (e: any) => {
      if (e.key === KEY.ENTER) {
        console.log(objectSearch, values?.maBn);
        // tìm kiếm ra nhiều bệnh nhân thì mới hiện dialog, còn không thì fill ra bảng thông tin luôn
        setOpenTimKiemBNDialog(true);
      }
    }

    const handleNhapTheBH = () => {
      setShouldOpenNhapTheBHDialog(true);
    }

    return (
      <div className="d-flex">
        <div className="border border-left-0 border-top-0 py-2 spaces width-72 pe-2">
          <div className="border-bottom pb-2">
            <div className="d-flex align-items-end">
              <div className="spaces width-25 position-relative">
                <TextField
                  label="SĐT"
                  name="soDienThoaiSearch"
                  labelClassName="min-w-85px"
                  className=" min-w-130px ps-29px"
                  value={objectSearch?.soDienThoaiSearch}
                  onChange={handleChangeTextSearch}
                  onKeyDown={(e: any) => handleSearch(e)}
                />
                <div className="spaces width-4">
                  <h6 className="position-absolute muc-huong border border-end-0">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </h6>
                </div>
              </div>

              <div className="d-flex spaces width-50">
                <div className="spaces width-50 position-relative">
                  <TextField
                    label="Số CCCD"
                    name="soCCCD"
                    labelClassName="ps-2 min-w-85px"
                    className=" ps-29px"
                    value={objectSearch?.soCCCD}
                    onChange={handleChangeTextSearch}
                    onKeyDown={(e: any) => handleSearch(e)}
                  />
                  <div className="spaces width-4">
                    <h6 className="position-absolute muc-huong border border-end-0">
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </h6>
                  </div>
                </div>

                <div className="spaces width-50 position-relative">
                  <TextField
                    label="Số thẻ KCB"
                    name="soTheKCB"
                    labelClassName="ps-2 min-w-85px"
                    className=" ps-29px"
                    value={objectSearch?.soTheKCB}
                    onChange={handleChangeTextSearch}
                    onKeyDown={(e: any) => handleSearch(e)}
                  />
                  <div className="spaces width-4">
                    <h6 className="position-absolute muc-huong border border-end-0">
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </h6>
                  </div>
                </div>
              </div>

              <div className="spaces width-25 d-flex ps-2 justify-content-end">
                <Button className="btn-fill me-2 min-w-90px spaces h-26" onClick={handleNhapTheBH}>
                  <span>Nhập thẻ BH</span>
                </Button>

                <Button className="btn-fill min-w-100px spaces h-26">
                  <span>Kiểm tra thẻ BH</span>
                </Button>
              </div>
            </div>
          </div>

          <div className="d-flex mb-4px position-relative mt-2">
            <div className="spaces width-25 d-flex">
              <LabelRequired className="ms-0 min-w-85px" label="Đối tượng" />
              <AutocompleteObjectV2
                options={LIST_DOI_TUONG_TIEP_NHAN}
                value={values?.loaiDoiTuong || null}
                name="loaiDoiTuong"
                onChange={(selectedOption) =>
                  handleChangeSelect(
                    selectedOption,
                    "loaiDoiTuong",
                    setFieldValue
                  )
                }
                // searchFunction={getAllCategory}
                // searchObject={{
                //   ...SEARCH_OBJECT_MAX_SIZE,
                //   type: SIMPLE_CATEGORY_TYPE.DOI_TUONG,
                // }}
                touched={touched?.loaiDoiTuong}
                errors={errors?.loaiDoiTuong}
                isClearable={false}
                className="autocomplete-custom-tiep-nhan radius spaces width-100 h-25"
              />
            </div>
            <div className="spaces width-50 d-flex">
              <div className="spaces width-50 d-flex">
                <LabelRequired label="ĐT chi tiết" className="ps-2 min-w-85px" />
                <AutocompleteObjectV2
                  options={[]}
                  value={values?.dtChiTiet}
                  name="dtChiTiet"
                  onChange={(selectedOption) =>
                    handleChangeSelect(selectedOption, "dtChiTiet", setFieldValue)
                  }
                  touched={touched?.dtChiTiet}
                  errors={errors?.dtChiTiet}
                  className="autocomplete-custom-tiep-nhan radius spaces width-100 h-25 min-w-130px"
                />
              </div>
              <div className="spaces width-50 d-flex ps-2">
                <FormCheck
                  type="checkbox"
                  label="Ưu tiên"
                  name="uuTien"
                  onChange={(e) => handleChecked?.(e)}
                  className="min-w-70px d-flex align-items-center gap-2"
                />
                <FormCheck
                  type="checkbox"
                  label="Đã sàng lọc Covid"
                  name="sangLocCovid"
                  onChange={(e) => handleChecked?.(e)}
                  className="min-w-150px d-flex align-items-center gap-2"
                />
              </div>
            </div>
          </div>

          <div className="d-flex mb-4px ">
            <div className="spaces width-25">
              <TextField
                className=" min-w-130px"
                label="Mã BN"
                name="maBn"
                labelClassName="ms-0 min-w-85px"
                onKeyDown={(e: any) => handleSearch(e)}
              />
            </div>
            <div className="spaces width-50">
              <TextField
                label="Họ và tên"
                name="hoTen"
                labelClassName="ps-2 min-w-85px"
                className="spaces min-w-342px"
              />
            </div>
            <div className="spaces width-25">
              <TextField
                className=" min-w-130px"
                label="Số KCB"
                name="soVaoVien"
                labelClassName="ps-2 min-w-90px"
              />
            </div>
          </div>

          <div className="d-flex mb-4px">
            <div className="spaces width-25 d-flex">
              <LabelRequired label="Giới tính" className="min-w-85px" />
              <AutocompleteObjectV2
                options={GIOI_TINH}
                value={values?.gender}
                name="gender"
                onChange={(selectedOption) =>
                  handleChangeSelect(selectedOption, "gender", setFieldValue)
                }
                touched={touched?.gender}
                errors={errors?.gender}
                className="autocomplete-custom-tiep-nhan radius spaces width-100 h-25"
              />
            </div>

            <div className="spaces width-50 d-flex">
              <div className="spaces width-50 d-flex">
                <LabelRequired label="Ngày sinh" className="ps-2 min-w-85px" />
                <div className="spaces ms-0 d-flex min-w-130px">
                  <div className="spaces width-25">
                    <TextField
                      name="ngaySinh"
                      type="text"
                      maxLength="2  text-center "
                    />
                  </div>
                  <div className="spaces width-25">
                    <TextField
                      name="thangSinh"
                      type="text"
                      maxLength="2  text-center "
                    />
                  </div>
                  <div className="spaces width-50">
                    <TextField
                      name="namSinh"
                      type="text"
                      maxLength="4  text-center "
                    />
                  </div>
                </div>
              </div>

              <div className="spaces width-50">
                <TextField
                  className=" min-w-130px no-spinners"
                  label="CCCD"
                  name="CCCD"
                  type="number"
                  labelClassName="ps-2 min-w-90px"
                />
              </div>
            </div>

            <div className="spaces width-25 d-flex">
              <LabelRequired label="Dân tộc" className="ps-2 min-w-90px" />
              <AutocompleteObjectV2
                options={dataDanToc}
                value={values.danToc}
                name="danToc"
                onChange={(selectedOption) =>
                  handleChangeSelect(
                    selectedOption,
                    VARIABLE_STRING.DAN_TOC,
                    setFieldValue
                  )
                }
                touched={touched?.danToc}
                errors={errors?.danToc}
                className="autocomplete-custom-tiep-nhan radius spaces width-100 h-25"
                getOptionLabel={(option) => `${option.name}`}
              />
            </div>
          </div>

          <div className="d-flex mb-4px">
            <div className="spaces width-25 d-flex">
              <LabelRequired label="Quốc tịch" className="min-w-85px" />
              <AutocompleteObjectV2
                options={dataQuocTinh}
                name="quocTich"
                value={values?.quocTich}
                valueField="code"
                onChange={(selectedOption) => {
                  handleChangeSelect(
                    selectedOption,
                    VARIABLE_STRING.QUOC_TINH,
                    setFieldValue
                  );
                }}
                className="autocomplete-custom-tiep-nhan radius spaces width-100 h-25"
                getOptionLabel={(option) => `${option.code} - ${option.name}`}
              />
            </div>

            <div className="d-flex spaces width-50">
              <div className="spaces width-50">
                <TextField
                  className=" min-w-130px"
                  label="Điện thoại"
                  name="soDienThoai"
                  labelClassName="ps-2 min-w-85px"
                  onChange={handleChangeSdt}
                  values={values.soDienThoai}
                />
              </div>

              <div className="spaces width-50">
                <TextField
                  className=" min-w-130px"
                  label="Email"
                  name="email"
                  labelClassName="ps-2 min-w-90px"
                />
              </div>
            </div>

            <div className="spaces width-25">
              <TextField
                className=" min-w-130px"
                label="SN/thôn/phố"
                name="soNha"
                labelClassName="ps-2 min-w-90px"
              />
            </div>
          </div>

          <div className="d-flex mb-4px">
            <div className="spaces width-25">
              <TextField
                className=" min-w-130px text-center"
                label="Tt/Hq/Xp"
                name="tinhHuyenXa"
                labelClassName="min-w-85px"
              />
            </div>

            <div className="d-flex spaces width-50">
              <div className="spaces width-50 d-flex">
                <LabelRequired label="T/TP" className="ps-2 min-w-85px" />
                <AutocompleteObjectV2
                  options={LIST_PROVINCE}
                  value={values?.province}
                  name="province"
                  onChange={(selectedOption) => {
                    handleChangeSelect(selectedOption, "province", setFieldValue);
                  }}
                  touched={touched?.province}
                  errors={errors?.province}
                  // searchFunction={getAllProvince}
                  // searchObject={SEARCH_OBJECT_MAX_SIZE}
                  className="autocomplete-custom-tiep-nhan radius spaces width-100 h-25"
                  getOptionLabel={(option) => `${option.code} - ${option.name}`}
                  placeholder="Tỉnh/Thành phố"
                />
              </div>

              <div className="spaces width-50 d-flex">
                <LabelRequired label="H/Q" className="ps-2 min-w-90px" />
                <AutocompleteObjectV2
                  options={LIST_DISTRICT}
                  value={values?.district}
                  name="district"
                  onChange={(selectedOption) => {
                    handleChangeSelect(selectedOption, "district", setFieldValue);
                  }}
                  touched={touched?.district}
                  errors={errors?.district}
                  // searchFunction={getListDistrictByProvinceId}
                  // searchObject={{
                  //   ...SEARCH_OBJECT_MAX_SIZE,
                  //   provinceId: values?.province?.id,
                  // }}
                  dependencies={[values?.province]}
                  className="autocomplete-custom-tiep-nhan radius spaces width-100 h-25"
                  getOptionLabel={(option) => `${option.code} - ${option.name}`}
                  placeholder="Huyện/Quận"
                />
              </div>
            </div>

            <div className="spaces width-25 d-flex">
              <LabelRequired label="X/P" className="ps-2 min-w-90px" />
              <AutocompleteObjectV2
                options={LIST_WARD}
                value={values?.ward}
                name="ward"
                onChange={(selectedOption) => {
                  handleChangeSelect(selectedOption, "ward", setFieldValue);
                }}
                touched={touched?.ward}
                errors={errors?.ward}
                // searchFunction={getListCommuneByDistrictId}
                // searchObject={{
                //   ...SEARCH_OBJECT_MAX_SIZE,
                //   districtId: values?.district?.id,
                // }}
                dependencies={[values?.province, values?.district]}
                className="autocomplete-custom-tiep-nhan radius spaces width-100 h-25"
                getOptionLabel={(option) => `${option.code} - ${option.name}`}
                placeholder="Xã/Phường"
              />
            </div>
          </div>

          <div className="d-flex mb-4px">
            <div className="spaces width-25 d-flex">
              <LabelRequired className="min-w-85px" label="Nơi sinh" />
              <AutocompleteObjectV2
                options={LIST_PROVINCE}
                value={values?.noiSinh}
                name="noiSinh"
                valueField="id"
                onChange={(selectedOption) => {
                  handleChangeSelect(selectedOption, "noiSinh", setFieldValue);
                }}
                touched={touched?.noiSinh}
                errors={errors?.noiSinh}
                // searchFunction={getAllProvince}
                // searchObject={SEARCH_OBJECT_MAX_SIZE}
                className="autocomplete-custom-tiep-nhan radius spaces width-100 h-25"
                placeholder="Tỉnh/Thành phố"
              />
            </div>

            <div className="d-flex spaces width-50">
              <div className="spaces width-50 d-flex">
                <LabelRequired className="ps-2 min-w-85px" label="Học vấn" />
                <AutocompleteObjectV2
                  options={LIST_HOC_VAN}
                  value={values?.hocVan}
                  name="hocVan"
                  onChange={(selectedOption) =>
                    handleChangeSelect(
                      selectedOption,
                      "hocVan",
                      setFieldValue
                    )
                  }
                  touched={touched?.hocVan}
                  errors={errors?.hocVan}
                  className="autocomplete-custom-tiep-nhan radius spaces width-100 h-25"
                />
              </div>

              <div className="spaces width-50 d-flex">
                <LabelRequired className="ps-2 min-w-90px" label="Nghề nghiệp" />
                <AutocompleteObjectV2
                  options={LIST_NGHE_NGHIEP}
                  value={values?.ngheNghiep}
                  name="ngheNghiep"
                  valueField="id"
                  onChange={(selectedOption) => {
                    handleChangeSelect(selectedOption, "ngheNghiep", setFieldValue);
                  }}
                  touched={touched?.ngheNghiep}
                  errors={errors?.ngheNghiep}
                  className="autocomplete-custom-tiep-nhan radius spaces width-100 h-25"
                />
              </div>
            </div>

            <div className="spaces width-25">
              <TextField
                className=" min-w-130px"
                label="Nơi làm việc"
                name="noiLamViec"
                labelClassName="ps-2 min-w-90px"
              />
            </div>
          </div>

          <div className="d-flex mb-4px">
            <div className="spaces d-flex width-25">
              <LabelRequired className="min-w-85px" label="Cấp bậc" />
              <AutocompleteObjectV2
                options={LIST_CAP_BAC}
                value={values?.capBac}
                name="capBac"
                valueField="id"
                onChange={(selectedOption) => {
                  handleChangeSelect(selectedOption, "capBac", setFieldValue);
                }}
                className="autocomplete-custom-tiep-nhan radius spaces width-100 h-25"
              />
              {/* <TextFieldV2
                className=" min-w-130px"
                label="Cấp bậc"
                name="capBac"
                labelClassName="min-w-85px"
              /> */}
            </div>

            <div className="d-flex spaces width-50">
              <div className="spaces width-50 d-flex">
                <LabelRequired className="ps-2 min-w-85px" label="Chức vụ" />
                <AutocompleteObjectV2
                  options={LIST_CHUC_VU}
                  value={values?.chucVu}
                  name="chucVu"
                  valueField="id"
                  onChange={(selectedOption) => {
                    handleChangeSelect(selectedOption, "chucVu", setFieldValue);
                  }}
                  className="autocomplete-custom-tiep-nhan radius spaces width-100 h-25"
                />
              </div>

              <div className="spaces width-50 d-flex">
                <LabelRequired className="ps-2 min-w-90px" label="Đơn vị" />
                <AutocompleteObjectV2
                  options={LIST_DON_VI}
                  value={values?.donVi}
                  name="donVi"
                  valueField="id"
                  onChange={(selectedOption) => {
                    handleChangeSelect(selectedOption, "donVi", setFieldValue);
                  }}
                  className="autocomplete-custom-tiep-nhan radius spaces width-100 h-25"
                />
              </div>
            </div>

            <div className="spaces width-25">
              <TextField
                className=" min-w-130px"
                label="ĐV chi tiết"
                name="donViChiTiet"
                labelClassName="ps-2 min-w-90px"
              />
            </div>
          </div>

          <div className="d-flex mb-4px">
            <div className="spaces width-25">
              <TextField
                className=" min-w-130px"
                label="TT khác"
                name="ttKhac"
                labelClassName="min-w-85px"
              />
            </div>

            <div className="spaces width-50 d-flex">
              <div className="spaces width-50 d-flex">
                <LabelRequired className="ps-2 min-w-85px" label="ĐK khám" />
                <AutocompleteObjectV2
                  options={LOAI_DK_KHAM}
                  value={values?.dangKyKham}
                  name="dangKyKham"
                  onChange={(selectedOption) =>
                    handleChangeSelect(
                      selectedOption,
                      "dangKyKham",
                      setFieldValue
                    )
                  }
                  touched={touched?.dangKyKham}
                  errors={errors?.dangKyKham}
                  className="autocomplete-custom-tiep-nhan radius spaces width-100 h-25"
                />
              </div>

              <div className="spaces width-50">
                <TextField
                  className=" min-w-130px"
                  label="Lúc"
                  name="luc"
                  labelClassName="ps-2 min-w-90px"
                  value={moment().format("HH:mm - DD/MM/YYYY")}
                />
              </div>
            </div>

            <div className="spaces width-25">
              <TextField
                className=" min-w-130px"
                label="LD khám"
                name="lyDoKham"
                labelClassName="ps-2 min-w-90px"
              />
            </div>
          </div>

          <div className="d-flex mb-4px">
            <div className="spaces width-50 d-flex">
              <LabelRequired className=" min-w-85px" label="Dịch vụ" />
              <AutocompleteObjectV2
                options={LIST_DICH_VU}
                value={values?.tenDichVu || null}
                name="tenDichVu"
                onChange={(selectedOption) => {
                  handleChangeSelect(
                    selectedOption,
                    "tenDichVu",
                    setFieldValue
                  );
                }}
                getOptionLabel={(option) => `${option.code} - ${option.name}`}
                touched={touched?.tenDichVu}
                errors={errors?.tenDichVu}
                // searchFunction={getDanhSachYeuCauKham}
                // searchObject={{}}
                urlData={"data.data"}
                className="autocomplete-custom-tiep-nhan radius spaces width-100 h-25 min-w-343px"
              />
            </div>
            <div className="spaces d-flex width-50">
              <LabelRequired className="ps-2 min-w-90px" label="P.Khám" />
              <AutocompleteObjectV2
                options={LIST_PHONG_KHAM}
                value={values?.phongKham || ""}
                name="phongKham"
                onChange={(selectedOption) =>
                  handleChangeSelect(selectedOption, "phongKham", setFieldValue)
                }
                // searchFunction={
                //   values.tenDichVu?.id ? getDSPhongKham : undefined
                // }
                // searchObject={{ ...SEARCH_OBJECT_MAX_SIZE }}
                getOptionLabel={(option) => `${option.code} - ${option.name}`}
                touched={touched?.phongKham}
                errors={errors?.phongKham}
                className="autocomplete-custom-tiep-nhan radius spaces width-100 h-25 min-w-343px"
              />
            </div>
          </div>
        </div>

        <div className="border border-right-0 border-top-0 py-2 spaces width-28">
          <div className="d-flex mt-2 ps-2">
            <div className="spaces d-flex">
              <FormCheck
                type="checkbox"
                label="TE có mã BHXH"
                name="BHYT.TECoMaBHXH"
                onChange={(e) => handleChecked?.(e)}
                className="min-w-125px d-flex align-items-center gap-2"
              />
            </div>

            <div className="spaces d-flex">
              <FormCheck
                type="checkbox"
                label="Nợ thẻ BHYT"
                name="BHYT.noTheBHYT"
                onChange={(e) => handleChecked?.(e)}
                className="min-w-100px d-flex align-items-center gap-2"
              />
            </div>
          </div>

          <div className="spaces d-flex ps-2">
            <FormCheck
              type="checkbox"
              label="Không giữ thẻ BHYT"
              name="BHYT.khongGiuTheBHYT"
              onChange={(e) => handleChecked?.(e)}
              className="min-w-125px d-flex align-items-center gap-2"
            />
          </div>

          <div className="d-flex mb-4px mt-1">
            <div className="spaces width-100 d-flex">
              <LabelRequired label="Số BHYT" className="ps-2 min-w-80px" />
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
          </div>

          <div className="d-flex mb-4px">
            <div className="spaces width-100">
              <TextField
                
                label="KCBBĐ"
                name="BHYT.KCBBD"
                type="text"
                labelClassName="ps-2 min-w-80px"
                disabled={!isBHYT}
              />
            </div>
          </div>

          <div className="d-flex mb-4px">
            <div
              className="spaces width-100 d-flex align-items-center"
            >
              <LabelRequired label="Hạn thẻ" className="ps-2 min-w-80px" />

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
              <i className="bi bi-arrow-right"></i>
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
          </div>

          <div className="d-flex mb-4px">
            <div className="spaces d-flex w-100">
              <LabelRequired label="Tuyến KCB" className="ps-2 min-w-80px" />
              <AutocompleteObjectV2
                options={LIST_TUYEN_KCB}
                name="BHYT.tuyenKCB"
                value={values?.BHYT?.tuyenKCB}
                onChange={(selectedOption) => {
                  handleChangeSelect(selectedOption, "BHYT.tuyenKCB", setFieldValue);
                }}
                className="autocomplete-custom-tiep-nhan radius spaces h-25"
                isDisabled={!isBHYT}
              />

            </div>
          </div>

          <div className="d-flex mb-4px">
            <div className="spaces width-100">
              <TextField
                
                label="Địa chỉ thẻ"
                name="BHYT.diaChiThe"
                type="text"
                labelClassName="ps-2 min-w-80px"
                disabled={!isBHYT}
              />
            </div>
          </div>

          <div className="d-flex mb-4px">
            <div className="spaces d-flex width-60">
              <LabelRequired label="Nơi sống" className="ps-2 min-w-80px " />
              <AutocompleteObjectV2
                options={LIST_NOI_SONG}
                value={values?.BHYT?.noiSong}
                name="BHYT.noiSong"
                onChange={(selectedOption) => {
                  handleChangeSelect(selectedOption, "BHYT.noiSong", setFieldValue);
                }}
                className="autocomplete-custom-tiep-nhan radius spaces width-100 h-25"
                isDisabled={!isBHYT}
              />
            </div>

            <div className="spaces width-40 position-relative">
              <TextField
                className=" ps-29px"
                label="Mức hưởng"
                name="BHYT.mucThuong"
                type="text"
                labelClassName="ps-2 min-w-80px"
                disabled={!isBHYT}
              />
              <div className="spaces width-4">
                <h6 className="position-absolute muc-huong border border-end-0">
                  %
                </h6>
              </div>
            </div>
          </div>

          <div className="spaces d-flex ps-2">
            <FormCheck
              type="checkbox"
              label="Giấy chứng nhận không cùng chi trả trong năm"
              name="BHYT.chungNhanKhongCungChiTra"
              onChange={(e) => handleChecked?.(e)}
              className="min-w-150px d-flex align-items-center gap-2"
            />
          </div>

          <div className="d-flex mb-4px">
            <div className="spaces d-flex ms-2 flex-grow-1">
              <LabelRequired
                label="Ngày miễn cùng chi trả" //Ngày miễn cùng chi trả
                className=" min-w-200px"
              />
              <div className="spaces d-flex flex-auto">
                <div className="spaces width-25">
                  <TextField
                    name="BHYT.ngayStart1"
                    type="text"
                    maxLength="2"
                    className="text-center "
                    disabled={!isBHYT}
                  />
                </div>
                <div className="spaces width-25">
                  <TextField
                    name="BHYT.thangStart1"
                    type="text"
                    maxLength="2"
                    className="text-center "
                    disabled={!isBHYT}
                  />
                </div>
                <div className="spaces width-50">
                  <TextField
                    name="BHYT.namStart1"
                    type="text"
                    maxLength="4"
                    className="text-center "
                    disabled={!isBHYT}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex mb-4px">
            <div className="spaces d-flex ms-2 flex-grow-1">
              <LabelRequired
                label="Ngày đóng đủ 5 năm liên tục" //Ngày đóng đủ 5 năm liên tục
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

        <ModalNhapTheBH show={shouldOpenNhapTheBHDialog} handleCloseDialog={() => setShouldOpenNhapTheBHDialog(false)} />

        <ModalTimKiemBenhNhan
          // onSelectedPatient={(patient) => getPatientInformation(setValues, patient)}
          open={openTimKiemBNDialog}
          handleClose={() => setOpenTimKiemBNDialog(false)}
        />
      </div>
    );
  }
);
export default TTHanhChinhV2;
