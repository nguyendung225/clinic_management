import { FormikErrors, FormikTouched } from "formik";
import React, { FC, useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { toast } from "react-toastify";
import AutocompleteV2 from "../../../component/AutocompleteObjectV2";
import LabelRequired from "../../../component/LabelRequired";
import TextField from "../../../component/TextField";
import { GIOI_TINH } from "../../../component/phieu-in/constant";
import { DOI_TUONG, LOAI_DOI_TUONG } from "../../../phan-he-tiep-nhan-thanh-toan/constants/PhanHeTiepNhan";
import { ObjectSelectAutocomplete } from "../../../phan-he-tiep-nhan-thanh-toan/models/PhanHeTiepNhanModel";
import { getAllCategory, getCommuneByDistrictId, getDistrictByProvinceId } from "../../../phan-he-tiep-nhan-thanh-toan/services/TiepNhanServices";
import { CODE, CODE_SELECT, SEARCH_OBJECT_MAX_SIZE, SIMPLE_CATEGORY_TYPE, VARIABLE_STRING } from "../../../utils/Constant";
import { IResponseData } from "../../../utils/models";
import { HINH_THUC_ARRAY } from "../../constants/BenhNhanConst";
import { BenhNhan } from "../../models/BenhNhanModel";

export type benhNhanProps = {
  values: BenhNhan;
  setFieldValue: (field: string, value: any) => void;
  handleSelectChange: (selectedOption: any, name: string) => void;
  handleChecked?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors?: FormikErrors<BenhNhan>;
  touched?: FormikTouched<BenhNhan>;
  handleAddDSDichVu?: (dichVu: any) => void;
  DSDichVu?: any[];
  setValues?: (value: BenhNhan) => void;
  onAgeCalculate?: (DOB: string) => string;
  handleClearValue: (
    name: string,
    setFieldValue: (field: string, value: any) => void
  ) => void;
  handleChangeSelect: (
    selectedObject: ObjectSelectAutocomplete,
    name: string,
    setFieldValue: (field: string, value: any) => void
  ) => void;
  handleDeleteDichVu?: (data: any) => void;
  handleOpenTKBNDialog?: () => void;
  isHenKham?: boolean;
  handleChangeHenKham?: (value: boolean) => void;
};
const TTHanhChinhBenhNhan: FC<benhNhanProps> = React.memo(
  ({
    values,
    setFieldValue,
    errors,
    touched,
    onAgeCalculate,
    handleChangeSelect,
    handleClearValue,
    handleOpenTKBNDialog,
    isHenKham,
    handleAddDSDichVu,
    DSDichVu,
  }) => {
    const [dataDanToc, setDataDanToc] = useState<any>([]);
    const [dataQuocTinh, setDataQuocTinh] = useState<any>([]);
    const [isBHYT, setIsBHYT] = useState<boolean>(false);
    const [isDichVuDaChon, setIsDichVuDaChon] = useState<boolean>(false);

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
        setIsBHYT(values?.loaiDoiTuong?.name === DOI_TUONG.BHTY);
        return;
      }
      setIsBHYT(false);
    }, [values?.loaiDoiTuong]);

    useEffect(() => {
      if (values?.tenDichVu && values?.phongKham) {
        let checkDichVu = DSDichVu?.some(
          (dichVu: any) => dichVu.roomId === values?.phongKham?.id
        );

        if (checkDichVu) {
          setIsDichVuDaChon(false);
        } else {
          setIsDichVuDaChon(true);
        }
        return;
      }
      setIsDichVuDaChon(false);
    }, [values?.tenDichVu, values?.phongKham]);
    
    const handleChangeSdt = (value: string) => {
      const regex = /^[0-9]*$/;
      if (regex.test(value) || value === "") {
        setFieldValue("soDienThoai", value);
      }
    };

    return (
      <>
        <Col xs={12} className="">
          <div className="d-flex mb-4px">
            <div className="spaces width-25">
              <TextField
                label="Mã BN"
                name="maBn"
                labelClassName="min-w-85px"
              />
            </div>
            <div className="spaces width-25">
              <TextField
                label="Bệnh nhân"
                name="benhNhan"
                labelClassName="ms-2 min-w-85px"
              />
            </div>
            <div className="spaces width-25">
              <TextField
                label="Bệnh án"
                name="benhAn"
                labelClassName="ms-2 min-w-85px"
                disabled
              />
            </div>
            <div className="spaces width-25">
              <TextField
                
                label="Người nhà"
                name="nguoiNha"
                labelClassName="ms-2 min-w-85px"
              />
            </div>
          </div>

          <div className="d-flex mb-4px ">
            <div className="spaces width-25">
              <TextField
                
                label="Tuổi"
                name="age"
                labelClassName="ms-0 min-w-85px"
                disabled
              />
            </div>
            <div className="spaces width-25 d-flex">
              <LabelRequired label="Ngày sinh" className="ms-2 min-w-85px" />
              <div className="spaces ms-0 d-flex">
                <div className="spaces width-25">
                  <TextField
                    name="ngaySinh"
                    type="text"
                    maxLength="2"
                    className="text-center "
                  />
                </div>
                <div className="spaces width-25">
                  <TextField
                    name="thangSinh"
                    type="text"
                    maxLength="2"
                    className="text-center "
                  />
                </div>
                <div className="spaces width-50">
                  <TextField
                    name="namSinh"
                    type="text"
                    maxLength="4"
                    className="text-center "
                  />
                </div>
              </div>
            </div>
            <div className="spaces width-25">
              <TextField
                label="Mã BA"
                name="maBA"
                labelClassName="ms-2 min-w-85px"
                className="text-uppercase "
              />
            </div>
            
            <div className="spaces width-25 d-flex">
              <LabelRequired label="Giới tính" className="ms-2 min-w-85px" />
              <AutocompleteV2
                options={HINH_THUC_ARRAY}
                value={values?.gender}
                name="gender"
                onChange={(selectedOption) =>
                  handleChangeSelect(selectedOption, "gender", setFieldValue)
                }
                touched={touched?.gender}
                errors={errors?.gender}
                className="autocomplete-custom-tiep-nhan radius spaces width-100 h-26"
              />
            </div>
          </div>

          <div className="d-flex mb-4px">
            <div className="spaces width-50">
              <TextField
                
                label="Địa chỉ"
                name="diaChi"
                labelClassName="min-w-85px"
              />
            </div>
            <div className="spaces width-25">
              <TextField
                
                label="Bác sĩ"
                name="bacSi"
                labelClassName="ms-2 min-w-85px"
              />
            </div>
            <div className="spaces width-25">
              <TextField
                
                label="Khoa"
                name="khoa"
                labelClassName="ms-2 min-w-85px"
              />
            </div>
          </div>
          
          <div className="d-flex mb-4px">
            <div className="spaces width-25">
              <TextField
                
                label="CCCD"
                name="CCCD"
                type="number"
                labelClassName="min-w-85px"
              />
            </div>
            <div className="spaces width-25 d-flex">
              <LabelRequired label="Giới tính" className="ms-2 min-w-85px" />
              <AutocompleteV2
                options={[GIOI_TINH]}
                value={values?.gender}
                name="gender"
                onChange={(selectedOption) =>
                  handleChangeSelect(selectedOption, "gender", setFieldValue)
                }
                touched={touched?.gender}
                errors={errors?.gender}
                className="autocomplete-custom-tiep-nhan radius spaces width-100 h-26"
              />
            </div>
            <div className="spaces width-25">
              <TextField
                
                label="Mã điều trị"
                name="maDieuTri"
                labelClassName="ms-2 min-w-85px"
              />
            </div>
            <div className="spaces width-25">
              <TextField
                
                label="Phòng"
                name="phong"
                labelClassName="ms-2 min-w-85px"
              />
            </div>
          </div>

          <div className="d-flex mb-4px">
            <div className="spaces width-25">
              <TextField
                
                label="Điện thoại"
                name="soDienThoai"
                labelClassName="min-w-85px"
                onChange={(e: any) => handleChangeSdt(e.target.value)}
                values={values.soDienThoai}
              />
            </div>
            <div className="spaces width-25 d-flex">
              <LabelRequired label="Quốc tịch" className="ms-2 min-w-85px" />
              <AutocompleteV2
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
                className="autocomplete-custom-tiep-nhan radius spaces width-100 h-26"
                getOptionLabel={option => `${option.code} - ${option.name}`}
              />
            </div>
            <div className="spaces width-25">
              <TextField
                
                label="Số vào khoa"
                name="soVaoKhoa"
                labelClassName="ms-2 min-w-85px"
              />
            </div>
            <div className="spaces width-25">
              <TextField
                className=" w-100"
                label="Ngày vào"
                name="ngayVao"
                type="date"
                labelClassName="ms-2 min-w-85px"
                disabled
              />
            </div>
          </div>

          <div className="d-flex mb-4px">
          <div className="spaces width-25">
              <TextField
                
                label="Đón tiếp lúc"
                name="donTiepLuc"
                type="time"
                labelClassName="min-w-85px"
              />
            </div>
            <div className="spaces width-25 d-flex">
              <LabelRequired label="Dân tộc" className="ms-2 min-w-85px" />
              <AutocompleteV2
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
                className="autocomplete-custom-tiep-nhan radius spaces width-100 h-26"
                getOptionLabel={option => `${option.code} - ${option.name}`}
              />
            </div>
            <div className="spaces width-25">
              <TextField
                
                label="Số vào viện"
                name="soVaoVien"
                labelClassName="ms-2 min-w-85px"
              />
            </div>
            <div className="spaces width-25">
              <TextField
                className=" w-100"
                label="Ngày ra"
                name="ngayRa"
                type="date"
                labelClassName="ms-2 min-w-85px"
              />
            </div>
          </div>

          <div className="d-flex mb-4px position-relative">
            <div className="spaces width-25 d-flex">
              <LabelRequired className="ms-0 pe-2 min-w-85px" label="Đối tượng" />
              <AutocompleteV2
                options={LOAI_DOI_TUONG}
                value={values?.loaiDoiTuong}
                name="loaiDoiTuong"
                onChange={(selectedOption) =>
                  handleChangeSelect(
                    selectedOption,
                    "loaiDoiTuong",
                    setFieldValue
                  )
                }
                searchFunction={getAllCategory}
                searchObject={{
                  ...SEARCH_OBJECT_MAX_SIZE,
                  type: SIMPLE_CATEGORY_TYPE.DOI_TUONG,
                }}
                touched={touched?.loaiDoiTuong}
                errors={errors?.loaiDoiTuong}
                isClearable={false}
                className="autocomplete-custom-tiep-nhan radius spaces width-100 h-26"
              />
            </div>
            <div className="spaces width-25 d-flex">
              <LabelRequired className="ms-2 ms-0 min-w-85px" label="Nghề nghiệp" />
              <AutocompleteV2
                options={[]}
                value={values?.loaiDoiTuong}
                name="ngheNghiep"
                isClearable={false}
                className="autocomplete-custom-tiep-nhan radius spaces width-100 h-26"
              />
            </div>
            <div className="spaces width-50">
                  <TextField
                    label="Lý do khám"
                    name="lyDoKham"
                    type="text"
                    maxLength="2"
                    labelClassName="ms-2 ms-0 min-w-85px"
                    className="text-center "
                  />
                </div>
          </div>

          <div className="d-flex mb-4px position-relative">
            <div className="spaces width-50">
                  <TextField
                    label="Chẩn đoán"
                    name="chuanDoan"
                    type="text"
                    maxLength="2"
                    labelClassName="ms-0 min-w-85px"
                    className="text-center "
                  />
                </div>
                <div className="spaces width-50">
                  <TextField
                    label="Xử trí"
                    name="xuTri"
                    type="text"
                    maxLength="2"
                    labelClassName="ms-2 ms-0 min-w-85px"
                    className="text-center "
                  />
                </div>
          </div>
        </Col>
      </>
    );
  }
);
export default TTHanhChinhBenhNhan;
