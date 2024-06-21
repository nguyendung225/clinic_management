import React, { FC, useEffect, useState } from "react";
import { Button, Col, FormCheck, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import AutocompleteV2 from "../../../../component/AutocompleteObjectV2";
import LabelRequired from "../../../../component/LabelRequired";
import TextField from "../../../../component/TextField";
import { GIOI_TINH } from "../../../../component/phieu-in/constant";
import { DOI_TUONG, LOAI_DOI_TUONG } from "../../../../phan-he-tiep-nhan-thanh-toan/constants/PhanHeTiepNhan";
import {
  getAllCategory,
  getAllProvince,
  getCommuneByDistrictId,
  getDSPhongKham,
  getDanhSachYeuCauKham,
  getDistrictByProvinceId,
} from "../../../../phan-he-tiep-nhan-thanh-toan/services/TiepNhanServices";
import {
  CODE,
  CODE_SELECT,
  SEARCH_OBJECT_MAX_SIZE,
  SIMPLE_CATEGORY_TYPE,
  TRANG_THAI,
  VARIABLE_STRING,
} from "../../../../utils/Constant";
import { generateRandomId } from "../../../../utils/FormatUtils";
import { IResponseData } from "../../../../utils/models";
import ThoiGianKhamDialog from "./ThoiGianKhamDialog";
import { benhNhanProps } from "../../../tab-them-lich-hen/ThemLichHen";
import { DanhMucChonThoiGianKhamModel } from "../../../../phan-he-quan-tri-he-thong/models/ModelDatHen";
import { dataChonThoiGianKhamFake } from "../../../../phan-he-quan-tri-he-thong/tab-cau-hinh-dat-hen/CauHinhDatHen";

const TTHanhChinhDatLichHen: FC<benhNhanProps> = React.memo(
  ({
    values,
    setFieldValue,
    errors,
    touched,
    onAgeCalculate,
    handleChangeSelect,
    handleClearValue,
    handleOpenTKBNDialog,
    isDatLichHen,
    handleAddDSDichVu,
    DSDichVu,
  }) => {
    const [dataDanToc, setDataDanToc] = useState<any>([]);
    const [dataQuocTinh, setDataQuocTinh] = useState<any>([]);
    const [isBHYT, setIsBHYT] = useState<boolean>(false);
    const [isDichVuDaChon, setIsDichVuDaChon] = useState<boolean>(false);
    const [openDialogTGKham, setOpenDialogTGKham] = useState<boolean>(false);
    const [dataTGKham, setDataTGKham] = useState<DanhMucChonThoiGianKhamModel[]>([]);

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
          const itemQuocGia = data?.data?.content?.find((item: any) => item?.code === CODE_SELECT.QG_VIET_NAM);

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
          const itemDanToc = data?.data?.content?.find((item: any) => item?.code === CODE_SELECT.DT_KINH);

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
        let checkDichVu = DSDichVu?.some((dichVu) => dichVu.roomId === values?.phongKham?.id);

        if (checkDichVu) {
          setIsDichVuDaChon(false);
        } else {
          setIsDichVuDaChon(true);
        }
        return;
      }
      setIsDichVuDaChon(false);
    }, [values?.tenDichVu, values?.phongKham]);

    const handleAddNewDichVu = () => {
      const order = {
        conceptId: values?.tenDichVu?.id,
        orderId: generateRandomId(),
        conceptName: values?.tenDichVu?.name,
        conceptCode: values?.tenDichVu?.code,
        departmentId: values?.phongKham?.departmentId,
        departmentcode: values?.phongKham?.code,
        departmentName: values?.phongKham?.departmentName,
        roomName: values?.phongKham?.name,
        roomId: values?.phongKham?.id,
        price: values?.tenDichVu?.price,
        totalPrice: values?.tenDichVu?.price,
        promotionPrice: 0,
        promotionPercent: 0,
        quantity: 1,
        insurancePrice: values?.tenDichVu?.insurancePrice,
        statusId: TRANG_THAI.CHUA_THANH_TOAN,
      };
      handleAddDSDichVu && handleAddDSDichVu(order);
    };

    return (
      <>
        <Col xs={8} className="border border-left-0 border-top-0 py-2 ps-4 ">
          <div className="d-flex mb-4px position-relative">
            <div className="spaces width-25 d-flex">
              <LabelRequired className="ms-0 min-w-90px" label="Đối tượng" />
              <AutocompleteV2
                options={LOAI_DOI_TUONG}
                value={values?.loaiDoiTuong}
                name="loaiDoiTuong"
                onChange={(selectedOption) => handleChangeSelect(selectedOption, "loaiDoiTuong", setFieldValue)}
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
            <div className="spaces d-flex ms-4">
              <FormCheck
                type="checkbox"
                label="Đã sàng lọc Covid"
                className="min-w-150px d-flex align-items-end gap-2"
              />
            </div>
            <div className="spaces d-flex ms-4">
              <FormCheck type="checkbox" label="BN ưu tiên" className="min-w-150px d-flex align-items-end gap-2" />
            </div>
          </div>

          <div className="d-flex mb-4px ">
            <div className="spaces width-25">
              <TextField
                
                label="Mã BN"
                name="maBn"
                labelClassName="ms-0 min-w-90px"
                disabled
              />
            </div>
            <div className="spaces width-25">
              <TextField
                label="Họ và tên"
                name="hoTen"
                labelClassName="ps-2 min-w-90px"
              />
            </div>
            <div className="spaces width-25 d-flex">
              <LabelRequired label="Ngày sinh" className="ps-2 min-w-90px" />
              <div className="spaces ms-0 d-flex">
                <div className="spaces width-25">
                  <TextField name="ngaySinh" type="text" maxLength="2" className="text-center " />
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
                  <TextField name="namSinh" type="text" maxLength="4" className="text-center " />
                </div>
              </div>
            </div>
            <div className="spaces width-25 d-flex">
              <LabelRequired label="Giới tính" className="ps-2 min-w-90px" />
              <AutocompleteV2
                options={[GIOI_TINH]}
                value={values?.gender}
                name="gender"
                onChange={(selectedOption) => handleChangeSelect(selectedOption, "gender", setFieldValue)}
                touched={touched?.gender}
                errors={errors?.gender}
                className="autocomplete-custom-tiep-nhan radius spaces width-100 h-26"
              />
            </div>
          </div>

          <div className="d-flex mb-4px">
            <div className="spaces width-25">
              <TextField
                
                label="Điện thoại"
                name="soDienThoai"
                labelClassName="min-w-90px"
              />
            </div>
            <div className="spaces width-25">
              <TextField
                
                label="Email"
                name="email"
                labelClassName="ps-2 min-w-90px"
              />
            </div>
            <div className="spaces width-25">
              <TextField
                
                label="Số KCB"
                name="soVaoVien"
                labelClassName="ps-2 min-w-90px"
                disabled
              />
            </div>
            <div className="spaces width-25">
              <TextField
                
                label="CCCD"
                name="CCCD"
                type="number"
                labelClassName="ps-2 min-w-90px"
              />
            </div>
          </div>
          <div className="d-flex mb-4px">
            <div className="spaces width-25 d-flex">
              <LabelRequired label="Dân tộc" className="min-w-90px" />
              <AutocompleteV2
                options={dataDanToc}
                value={values.danToc}
                name="danToc"
                onChange={(selectedOption) =>
                  handleChangeSelect(selectedOption, VARIABLE_STRING.DAN_TOC, setFieldValue)
                }
                touched={touched?.danToc}
                errors={errors?.danToc}
                className="autocomplete-custom-tiep-nhan radius spaces width-100 h-26"
                getOptionLabel={(option) => `${option.code} - ${option.name}`}
              />
            </div>

            <div className="spaces width-25 d-flex">
              <LabelRequired label="Quốc tịch" className="ps-2 min-w-90px" />
              <AutocompleteV2
                options={dataQuocTinh}
                name="quocTich"
                value={values?.quocTich}
                valueField="code"
                onChange={(selectedOption) => {
                  handleChangeSelect(selectedOption, VARIABLE_STRING.QUOC_TINH, setFieldValue);
                }}
                className="autocomplete-custom-tiep-nhan radius spaces width-100 h-26"
                getOptionLabel={(option) => `${option.code} - ${option.name}`}
              />
            </div>
            <div className="spaces width-25 d-flex">
              <LabelRequired className="ps-2 min-w-90px" label="Nơi sinh" />
              <AutocompleteV2
                options={[]}
                value={values?.noiSinh}
                name="noiSinh"
                valueField="id"
                onChange={(selectedOption) => {
                  handleChangeSelect(selectedOption, "noiSinh", setFieldValue);
                }}
                touched={touched?.province}
                errors={errors?.province}
                searchFunction={getAllProvince}
                searchObject={SEARCH_OBJECT_MAX_SIZE}
                className="autocomplete-custom-tiep-nhan radius spaces width-100 h-26"
              />
            </div>
            <div className="spaces width-25">
              <TextField
                
                label="SN/Thôn/Phố"
                name="soNha"
                labelClassName="ps-2 min-w-90px"
              />
            </div>
          </div>

          <div className="d-flex mb-4px">
            <div className="spaces width-25">
              <TextField
                
                label="Tt/Hq/Xp"
                name="tinhHuyenXa"
                labelClassName="min-w-90px"
              />
            </div>
            <div className="spaces width-25 d-flex">
              <LabelRequired label="T/TP" className="ps-2 min-w-90px" />
              <AutocompleteV2
                options={[]}
                value={values?.province}
                name="province"
                valueField="id"
                onChange={(selectedOption) => {
                  handleChangeSelect(selectedOption, "province", setFieldValue);
                }}
                touched={touched?.province}
                errors={errors?.province}
                searchFunction={getAllProvince}
                searchObject={SEARCH_OBJECT_MAX_SIZE}
                className="autocomplete-custom-tiep-nhan radius spaces width-100 h-26"
              />
            </div>
            <div className="spaces width-25 d-flex">
              <LabelRequired label="H/Q" className="ps-2 min-w-90px" />
              <AutocompleteV2
                options={[]}
                value={values?.district}
                name="district"
                onChange={(selectedOption) => {
                  handleChangeSelect(selectedOption, "district", setFieldValue);
                }}
                touched={touched?.district}
                errors={errors?.district}
                searchFunction={getListDistrictByProvinceId}
                searchObject={{
                  ...SEARCH_OBJECT_MAX_SIZE,
                  provinceId: values?.province?.id,
                }}
                dependencies={[values?.province]}
                className="autocomplete-custom-tiep-nhan radius spaces width-100 h-26"
              />
            </div>
            <div className="spaces width-25 d-flex">
              <LabelRequired label="X/P" className="ps-2 min-w-90px" />
              <AutocompleteV2
                options={[]}
                value={values?.ward}
                name="ward"
                onChange={(selectedOption) => {
                  handleChangeSelect(selectedOption, "ward", setFieldValue);
                }}
                touched={touched?.ward}
                errors={errors?.ward}
                searchFunction={getListCommuneByDistrictId}
                searchObject={{
                  ...SEARCH_OBJECT_MAX_SIZE,
                  districtId: values?.district?.id,
                }}
                dependencies={[values?.province, values?.district]}
                className="autocomplete-custom-tiep-nhan radius spaces width-100 h-26"
              />
            </div>
          </div>

          <div className="d-flex mb-4px">
          <div className="spaces width-50 d-flex">
              <LabelRequired label="Nghề nghiệp" className="min-w-90px" />
              <AutocompleteV2
                options={[]}
                value={values?.ngheNghiep}
                name="ngheNghiep"
                onChange={(selectedOption) => {
                  handleChangeSelect(selectedOption, "ngheNghiep", setFieldValue);
                }}
                touched={touched?.ngheNghiep}
                errors={errors?.ngheNghiep}
                className="autocomplete-custom-tiep-nhan radius spaces width-100 h-26"
              />
            </div>
            <div className="spaces width-50">
              <TextField
                
                label="Nơi làm việc"
                name="noiLamViec"
                labelClassName="ps-2 min-w-90px"
              />
            </div>
          </div>

          <div className="d-flex mb-4px">
            <div className="spaces width-25 d-flex">
              <LabelRequired className=" min-w-90px" label="Người nhà" />
              <AutocompleteV2
                options={[]}
                value={values?.quanHe}
                name="quanHe"
                onChange={(selectedOption) => handleChangeSelect(selectedOption, "quanHe", setFieldValue)}
                searchFunction={getAllCategory}
                searchObject={{
                  ...SEARCH_OBJECT_MAX_SIZE,
                  type: SIMPLE_CATEGORY_TYPE.MOI_QUAN_HE,
                }}
                touched={touched?.quanHe}
                errors={errors?.quanHe}
                isClearable={false}
                className="autocomplete-custom-tiep-nhan radius spaces width-100 h-26"
              />
            </div>
            <div className="spaces width-25">
              <TextField
                
                label="Họ tên"
                name="hoTenNguoiNha"
                labelClassName="ps-2 min-w-90px"
              />
            </div>
            <div className="spaces width-25">
              <TextField
                
                label="Điện thoại"
                name="dienThoai"
                labelClassName="ps-2 min-w-90px"
              />
            </div>
            <div className="spaces width-25">
              <TextField
                
                label="CCCD"
                name="CCCDNguoiNha"
                type="number"
                labelClassName="ps-2 min-w-90px"
              />
            </div>
          </div>

          <div className="d-flex mb-4px">
            <div className="spaces width-50">
              <TextField  label="Địa chỉ" name="diaChi" labelClassName="min-w-90px" />
            </div>
            <div className="spaces width-50">
              <TextField
                
                label="Học vấn"
                name="lyDoKham"
                labelClassName="ps-2 min-w-90px"
              />
            </div>
          </div>

          <div className="d-flex mb-4px">
            <div className="spaces width-50 d-flex">
              <LabelRequired className=" min-w-90px" label="Dịch vụ" />
              <AutocompleteV2
                options={[]}
                value={values?.tenDichVu || null}
                name="tenDichVu"
                onChange={(selectedOption) => {
                  handleChangeSelect(selectedOption, "tenDichVu", setFieldValue);
                }}
                getOptionLabel={(option) => `${option.code} - ${option.name}`}
                touched={touched?.tenDichVu}
                errors={errors?.tenDichVu}
                searchFunction={getDanhSachYeuCauKham}
                searchObject={{}}
                urlData={"data.data"}
                className="autocomplete-custom-tiep-nhan radius spaces width-100 h-26"
              />
            </div>
            <div className="spaces d-flex width-50">
              <LabelRequired className="ps-2 min-w-90px" label="P.Khám" />
              <AutocompleteV2
                options={[]}
                value={values?.phongKham || ""}
                name="phongKham"
                onChange={(selectedOption) => handleChangeSelect(selectedOption, "phongKham", setFieldValue)}
                searchFunction={values.tenDichVu?.id ? getDSPhongKham : undefined}
                searchObject={{ ...SEARCH_OBJECT_MAX_SIZE }}
                getOptionLabel={(option) => `${option.code} - ${option.name}`}
                touched={touched?.phongKham}
                errors={errors?.phongKham}
                className="autocomplete-custom-tiep-nhan radius spaces width-100 h-26"
              />
            </div>
          </div>

          <div className="d-flex mb-4px">
            <div className="spaces width-50">
              <TextField  label="Bác sĩ" name="bacSi" labelClassName="min-w-90px" />
            </div>
            <div className="spaces width-50">
              <TextField
                
                label="LD khám"
                name="lyDoKham"
                labelClassName="ps-2 min-w-90px"
              />
            </div>
          </div>
          <div className="d-flex mb-4px">
            <div className="spaces flex-auto">
              <TextField
                name="ngayKham"
                type="date"
                
                label="Ngày khám"
                labelClassName="min-w-90px"
                placeholder="Ngày"
              />
            </div>

            <div className="ms-2">
              <Button className="btn-fill spaces h-26 radius-3px" onClick={() => setOpenDialogTGKham(true)}>
                <span>Chọn TG khám</span>
              </Button>
            </div>
            <div className="spaces width-25">
              <TextField
                name="sttKham"
                
                label="STT khám"
                labelClassName="ps-2 min-w-90px"
                value={dataTGKham[0]?.stt}
              />
            </div>
            <div className="spaces width-25">
              <TextField
                
                name="tgKham"
                labelClassName="ps-2 min-w-90px"
                placeholder="Giờ"
                label="TG khám"
                value={dataTGKham[0]?.stt ? `${dataTGKham[0]?.tu} - ${dataTGKham[0]?.den}` : ""}
              />
            </div>
          </div>
        </Col>

        <Col xs={4} className="border border-right-0 border-top-0 py-2">
          <Row className="ms-n4px">
            <Row xxl={9} xs={12} className="d-flex mb-4px position-relative">
              <Col xs={12} xxl="4" lg="12">
                <div className="spaces d-flex">
                  <FormCheck type="checkbox" label="Nợ thẻ BHYT" className="min-w-150px d-flex align-items-end gap-2" />
                </div>
              </Col>
              <Col xs={12} xxl="4" lg="12">
                <div className="spaces d-flex">
                  <FormCheck
                    type="checkbox"
                    label="Không giữ thẻ BHYT"
                    className="min-w-150px d-flex align-items-end gap-2"
                  />
                </div>
              </Col>
                <div className="spaces d-flex">
                  <div className="position-absolute end-n7 top-n6 min-width-150">
                    <Button className="btn-fill">
                      <span>Kiểm tra thẻ BHYT</span>
                    </Button>
                  </div>
                </div>
            </Row>

            <Row>
              <Col xs={12} lg="auto" className="d-flex mb-4px">
                <div className="spaces d-flex">
                  <FormCheck
                    type="checkbox"
                    label="Giấy chứng nhận không cùng chi trả trong năm"
                    name="giayChungNhanKhongCungChiTraTrongNam"
                    className="min-w-150px d-flex align-items-end gap-2"
                  />
                </div>
              </Col>
              <Col xs={12} lg="auto" className="d-flex mb-4px">
                <div className="spaces d-flex">
                  <FormCheck
                    type="checkbox"
                    label="TE có giấy khai sinh, chứng sinh"
                    name="tECoGiayKhaiSinh"
                    className="min-w-150px d-flex align-items-end gap-2"
                  />
                </div>
              </Col>
            </Row>
          </Row>

          <div className="d-flex mb-4px">
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
              className="spaces width-100 d-flex align-items-center
            "
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
              <i className="bi bi-arrow-right fs-1 ms-2"></i>
              <div className="spaces d-flex ps-2">
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
              <LabelRequired label="Nơi sống" className="ps-2 min-w-80px " />
              <AutocompleteV2
                options={[]}
                value={values?.noiSong}
                name="BHYT.noiSong"
                valueField="id"
                onChange={(selectedOption) => {
                  handleChangeSelect(selectedOption, "noiSong", setFieldValue);
                }}
                touched={touched?.province}
                errors={errors?.province}
                searchFunction={getAllProvince}
                searchObject={SEARCH_OBJECT_MAX_SIZE}
                className="autocomplete-custom-tiep-nhan radius spaces width-100 h-26"
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
            <div className="spaces width-50 d-flex">
              <LabelRequired label="Tuyến KCB" className="ps-2 min-w-80px" />
              <AutocompleteV2
                options={[]}
                name="tuyenKCB"
                className="autocomplete-custom-tiep-nhan radius spaces width-100 h-26"
                isDisabled={!isBHYT}
              />
            </div>
            <div className="spaces width-50 position-relative">
              <TextField
                className=" ps-13"
                label="Mức hưởng"
                name="BHYT.mucThuong"
                type="text"
                labelClassName="ps-2 min-w-90px"
                disabled={!isBHYT}
              />
              <div className="spaces width-4">
                <h6 className="position-absolute muc-huong border border-end-0">%</h6>
              </div>
            </div>
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
        </Col>
        {openDialogTGKham && (
          <ThoiGianKhamDialog
            open={openDialogTGKham}
            handleClose={setOpenDialogTGKham}
            setDataTGKham={setDataTGKham}
            data={dataChonThoiGianKhamFake}
          />
        )}
      </>
    );
  }
);
export default TTHanhChinhDatLichHen;
