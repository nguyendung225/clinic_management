import React, { FC, useCallback, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import AutocompleteObject from "../../../../component/AutocompleteObject";
import LabelRequired from "../../../../component/LabelRequired";
import TextField from "../../../../component/TextField";
import { CODE, CODE_SELECT, SEARCH_OBJECT_MAX_SIZE, SIMPLE_CATEGORY_TYPE, VARIABLE_STRING } from "../../../../utils/Constant";
import { GIOI_TINH } from "../../../../phan-he-tiep-nhan-thanh-toan/constants/PhanHeTiepNhan";
import {
    getAllCategory,
    getAllProvince,
    getCommuneByDistrictId,
    getDistrictByProvinceId,
} from "../../../../phan-he-tiep-nhan-thanh-toan/services/TiepNhanServices";
import { benhNhanProps } from "../../../../phan-he-tiep-nhan-thanh-toan/tab-tiep-nhan/TiepNhan";
import { toAbsoluteUrl } from "../../../../../../_metronic/helpers";
import UploadImagePopup from "../../../../component/upload-image/UploadImagePopup";
import { iUploadImage } from "../../../../phan-he-tiep-nhan-thanh-toan/models/PhanHeTiepNhanModel";
import { newDate, numberExceptThisSymbols } from "../../../../utils/FormatUtils";
import { IResponseData } from "../../../../utils/models";
import { toast } from "react-toastify";

const TTHanhChinh: FC<benhNhanProps> = React.memo(({
    values,
    setFieldValue,
    errors,
    touched,
    onAgeCalculate,
    handleChangeSelect,
    handleClearValue,
    handleOpenTKBNDialog,
    isDatLichHen,
}) => {
    const [isOpenUploadImage, setIsOpenUploadImage] = useState<boolean>(false);
    const [dataDanToc, setDataDanToc] = useState<any>([]);
    const [dataQuocTinh, setDataQuocTinh] = useState<any>([]);
    const API_PATH_BENH_NHAN_IMAGE = (process.env.REACT_APP_PMS_API_URL || "") + "/v3/files/avatar/";

    const checkDiaChi = useCallback(() => {
        let { province, district, ward, soNha } = values;
        let diaChi = (
            (soNha ? soNha + ", " : "") +
            (ward?.name ? ward?.name + ", " : "") +
            (district?.name ? district?.name + ", " : "") +
            (province?.name ? province?.name : "")
        );
        setFieldValue("diaChi", diaChi);
    }, [values.province, values.district, values.ward, values.soNha]);

    const getListDistrictByProvinceId = (searchObject: object) => values.province ? getDistrictByProvinceId(searchObject) : null;

    const getListCommuneByDistrictId = (searchObject: object) => values.district ? getCommuneByDistrictId(searchObject) : null;

    useEffect(() => {
        checkDiaChi();
    }, [checkDiaChi]);

    useEffect(() => {
        if (!values?.caseId) {
            getDataQuocTich();
            getDataDanToc();
        }
    }, [values?.caseId])

    const handleOpenUploadImage = () => {
        setIsOpenUploadImage(true)
    }

    const handleClose = () => {
        setIsOpenUploadImage(false)
    }

    const handleUploadImage = (files: iUploadImage) => {
        let formData = new FormData();
        formData.append('avatar', files?.files[0])
        files.formData = formData
        setFieldValue(`avatar`, files);
        handleClose();
    }

    const checkUrlImage = () => {
        let urlImage = values?.avatar?.src
            ? values?.avatar?.src
            : values?.avatar?.split
                ? API_PATH_BENH_NHAN_IMAGE + values?.avatar.split("..").join('')
                : toAbsoluteUrl('/media/avatars/blank.png')
        return urlImage;
    }

    const getDataQuocTich = async () => {
        try {
            const { data }: IResponseData = await getAllCategory({ ...SEARCH_OBJECT_MAX_SIZE, type: SIMPLE_CATEGORY_TYPE.QUOC_GIA })
            if (CODE.SUCCESS === data?.code) {
                setDataQuocTinh(data?.data?.content)
                const itemQuocGia = data?.data?.content?.find((item: any) => item?.code === CODE_SELECT.QG_VIET_NAM)

                setFieldValue(VARIABLE_STRING.QUOC_TINH, itemQuocGia || null)
                return;
            }
        } catch (error) {
            toast.warning("Xảy ra lỗi, vui lòng thử lại!");
        }
    }
    
    const getDataDanToc = async () => {
        try {
            const { data }: IResponseData = await getAllCategory({ ...SEARCH_OBJECT_MAX_SIZE, type: SIMPLE_CATEGORY_TYPE.DAN_TOC })
            if (CODE.SUCCESS === data?.code) {
                setDataDanToc(data?.data?.content)
                const itemDanToc = data?.data?.content?.find((item: any) => item?.code === CODE_SELECT.DT_KINH)
                
                setFieldValue(VARIABLE_STRING.DAN_TOC, itemDanToc || null)
                return;
            }
        } catch (error) {
            toast.warning("Xảy ra lỗi, vui lòng thử lại!");
        }
    }

    return (
        <div className="reception-list__container administrativeInformation">
            <Row className="space-row">
                <Col xs={10}>
                    <Row>
                        <Col xs={3} className="spaces pr-0" >
                            <div>
                                <LabelRequired
                                    label="Tên bệnh nhân"
                                    isRequired
                                />
                                <TextField
                                    className="text-uppercase"
                                    name="hoTen"
                                    value={values?.hoTen || ""}
                                    type="text"
                                    isSearch={true}
                                    handleSearch={handleOpenTKBNDialog}
                                />
                            </div>
                        </Col>
                        {!isDatLichHen && 
                            <Col xs={2} className="spaces pr-0">
                                <div >
                                    <LabelRequired
                                        label="Mã bệnh nhân"
                                    />
                                    <TextField
                                        name="mpi"
                                        disabled
                                        value={values?.mpi || ""}
                                        type="text"
                                    />
                                </div>
                            </Col>
                        }
                        <Col xs={4} className="spaces pr-0">
                            <div className="d-flex">
                                <div className="spaces w-140px pr-10">
                                    <LabelRequired
                                        label="Giới tính"
                                        isRequired
                                    />
                                    <AutocompleteObject
                                        options={GIOI_TINH}
                                        value={values?.gender}
                                        name="gender"
                                        onChange={(selectedOption) => handleChangeSelect(selectedOption, "gender", setFieldValue)}
                                        touched={touched?.gender}
                                        errors={errors?.gender}
                                    />
                                </div>
                                <div className="flex-1">
                                    <LabelRequired
                                        label="Ngày sinh"
                                    />
                                    <div className="flex flex-space-between">
                                        <div className="spaces pr-4 flex-1">
                                            <TextField
                                                className="no-spinners w-100"
                                                name="ngaySinh"
                                                placeholder="Ngày"
                                                value={values?.ngaySinh || ""}
                                                type="number"
                                            />
                                        </div>
                                        <div className="spaces pr-4 flex-1">
                                            <TextField
                                                className="no-spinners w-100"
                                                name="thangSinh"
                                                placeholder="Tháng"
                                                value={values?.thangSinh || ""}
                                                type="number"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <TextField
                                                className="no-spinners w-100"
                                                name="namSinh"
                                                placeholder="Năm"
                                                value={values?.namSinh || ""}
                                                type="number"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={1} className="spaces pr-0">
                            <div >
                                <LabelRequired
                                    label="Tuổi"
                                />
                                <input
                                    disabled
                                    className="form-control customs-input"
                                    name="tuoi"
                                    value={values?.namSinh ? onAgeCalculate?.(newDate(values?.namSinh || 0, values?.thangSinh || 0, values?.ngaySinh || 0)) : ""}
                                    type="text"
                                />
                            </div>
                        </Col>
                        {!isDatLichHen &&
                            <Col xs={2}>
                                <div >
                                    <LabelRequired
                                        label="Số vào viện"
                                    />
                                    <input
                                        disabled
                                        className="form-control customs-input"
                                        value={values.soVaoVien || ""}
                                        name="soVaoVien"
                                        type="text"
                                    />
                                </div>
                            </Col>
                        }
                        {isDatLichHen &&
                            <Col xs={4}>
                                <div >
                                    <LabelRequired
                                        label="Email"
                                        isRequired
                                    />
                                    <TextField
                                        value={values.email || ""}
                                        name="email"
                                        type="text"
                                    />
                                </div>
                            </Col>
                        }
                    </Row>
                    <Row className="space-row">
                        <Col xs={3} className="spaces pr-0" >
                            <div >
                                <LabelRequired
                                    label="Số CMND/CCCD"
                                />
                                <TextField
                                    name="soDinhDanh"
                                    value={values?.soDinhDanh || ""}
                                    type="text"
                                    onKeyDown={numberExceptThisSymbols}
                                />
                            </div>
                        </Col>
                        <Col xs={2} className="spaces pr-0">
                            <div >
                                <LabelRequired
                                    label="Quốc tịch"
                                />
                                <AutocompleteObject
                                    options={dataQuocTinh}
                                    name="quocTich"
                                    value={values?.quocTich}
                                    valueField="code"
                                    onChange={(selectedOption) => { handleChangeSelect(selectedOption, VARIABLE_STRING.QUOC_TINH, setFieldValue); }}
                                    getOptionLabel={option => `${option.code} - ${option.name}`}
                                />
                            </div>
                        </Col>
                        <Col xs={4} className="spaces pr-0">
                            <div className="d-flex">
                                <div className="spaces w-140px pr-10">
                                    <LabelRequired
                                        label="Dân tộc"
                                    />
                                    <AutocompleteObject
                                        options={dataDanToc}
                                        value={values.danToc}
                                        name='danToc'
                                        onChange={(selectedOption) => handleChangeSelect(selectedOption, VARIABLE_STRING.DAN_TOC, setFieldValue)}
                                        touched={touched?.danToc}
                                        errors={errors?.danToc}
                                        getOptionLabel={option => `${option.code} - ${option.name}`}
                                    />
                                </div>
                                <div className="flex-1">
                                    <LabelRequired
                                        label="Điện thoại"
                                        isRequired={isDatLichHen}
                                    />

                                    <TextField
                                        name="soDienThoai"
                                        value={values?.soDienThoai || ""}
                                        type="text"
                                    />
                                </div>
                            </div>
                        </Col>
                        <Col xs={3}>
                            <div >
                                <LabelRequired
                                    label="Nghề nghiệp"
                                />
                                <AutocompleteObject
                                    options={[]}
                                    value={values?.job}
                                    name="job"
                                    onChange={(selectedOption) => handleChangeSelect(selectedOption, "job", setFieldValue)}
                                    touched={touched?.job}
                                    errors={errors?.job}
                                    searchFunction={getAllCategory}
                                    searchObject={{ ...SEARCH_OBJECT_MAX_SIZE, type: SIMPLE_CATEGORY_TYPE.NGHE_NGHIEP }}
                                    getOptionLabel={option => `${option.code} - ${option.name}`}
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row className="space-row">
                        <Col xs={3} className="spaces pr-0">
                            <div >
                                <LabelRequired
                                    label="Tỉnh/Thành"
                                />
                                <AutocompleteObject
                                    options={[]}
                                    value={values?.province}
                                    name="province"
                                    valueField="id"
                                    getOptionLabel={option => `${option.code} - ${option.name}`}
                                    onChange={(selectedOption) => {
                                        handleChangeSelect(selectedOption, "province", setFieldValue);
                                    }}
                                    touched={touched?.province}
                                    errors={errors?.province}
                                    searchFunction={getAllProvince}
                                    searchObject={SEARCH_OBJECT_MAX_SIZE}
                                />
                            </div>
                        </Col>
                        <Col xs={3} className="spaces pr-0">
                            <div >
                                <LabelRequired
                                    label=" Quận/Huyện"
                                />
                                <AutocompleteObject
                                    options={[]}
                                    value={values?.district}
                                    name="district"
                                    onChange={(selectedOption) => {
                                        handleChangeSelect(selectedOption, "district", setFieldValue);
                                    }}
                                    touched={touched?.district}
                                    errors={errors?.district}
                                    searchFunction={getListDistrictByProvinceId}
                                    searchObject={{ ...SEARCH_OBJECT_MAX_SIZE, provinceId: values?.province?.id }}
                                    dependencies={[values?.province]}
                                    getOptionLabel={option => `${option.code} - ${option.name}`}
                                />
                            </div>
                        </Col>
                        <Col xs={3} className="spaces pr-0">
                            <div >
                                <LabelRequired
                                    label="Phường/Xã"
                                />
                                <AutocompleteObject
                                    options={[]}
                                    value={values?.ward}
                                    name="ward"
                                    onChange={(selectedOption) => {
                                        handleChangeSelect(selectedOption, "ward", setFieldValue);
                                    }}
                                    touched={touched?.ward}
                                    errors={errors?.ward}
                                    searchFunction={getListCommuneByDistrictId}
                                    searchObject={{ ...SEARCH_OBJECT_MAX_SIZE, districtId: values?.district?.id }}
                                    dependencies={[values?.province, values?.district]}
                                    getOptionLabel={option => `${option.code} - ${option.name}`}
                                />
                            </div>
                        </Col>
                        <Col xs={3} >
                            <div >
                                <LabelRequired
                                    label="Số nhà"
                                />
                                <TextField
                                    name="soNha"
                                    value={values?.soNha || ""}
                                    type="text"
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row className="space-row">
                        <Col xs={12} >
                            <div >
                                <LabelRequired
                                    label="Địa chỉ"
                                />
                                <TextField
                                    name="diaChi"
                                    value={values?.diaChi || ""}
                                    type="text"
                                    disabled
                                />
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col xs={2}>
                    <LabelRequired
                        label="Ảnh"
                        className="d-flex flex-center"
                    />
                    <div className="d-flex flex-center" onClick={handleOpenUploadImage}>
                        <img src={checkUrlImage()} className="avatar" />
                    </div>

                    {
                        isOpenUploadImage &&
                        <UploadImagePopup
                            open={isOpenUploadImage}
                            handleClose={handleClose}
                            handleUpdate={handleUploadImage}
                        />
                    }
                </Col>
            </Row>
        </div>
    );
}
);
export default TTHanhChinh;
