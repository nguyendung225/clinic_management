import React, { FC, useCallback, useEffect, useState } from "react";
import { Col, Form, FormControl, Row } from "react-bootstrap";
import { Autocomplete } from "../../../component/Autocomplete";
import { GIOI_TINH, HUYEN, MOI_QUAN_HE, NGHE_NGHIEP, QUOC_TICH, TINH, XA, options } from "../../const/PhanHeTiepNhan";
import { benhNhanProps } from "./TiepNhan";
import LabelRequired from "../../../component/LabelRequired";
import TextField from "../../../component/TextField";
import AutocompleteField from "../../../component/AutocompleteField";
import { getAllCategory, getAllJobs, getAllNation, getAllProvince, getCommuneByDistrictId, getDistrictByProvinceId } from "../../services/TiepNhan";
import { SearchObject } from "../../models/DSTiepNhanModel";
import { SIMPLE_CATEGORY_TYPE, SEARCH_OBJECT_MAX_SIZE } from "../../../utils/Constant";
import moment from "moment";
import { FormattedDate } from "react-intl";

const TTHanhChinh: FC<benhNhanProps> = React.memo(({
    values,
    setFieldValue,
    handleSelectChange,
    handleInputChange,
    errors,
    touched
}) => {
    const [nationList, setNationList] = useState([]);
    const [provinceList, setProvinceList] = useState([]);
    const [districtList, setDistrictList] = useState([]);
    const [communeList, setCommuneList] = useState([]);
    const [listDanToc, setListDanToc] = useState([]);
    const [professionList, setProfessionList] = useState([]);
    const [selectedProvinceId, setSelectedProvinceId] = useState(0);
    const [selectedDistrictId, setSelectedDistrictId] = useState(0);
    const checkDiaChi = useCallback(() => {
        let { provinceId, districtId, wardId, soNha } = values
        if (provinceId && districtId && wardId && soNha) {
            let diaChi = [soNha, wardId, districtId, provinceId]
            setFieldValue("diaChi", diaChi.join(", "))
        } else {
            setFieldValue("diaChi", "")
        }
    }, [
        values?.provinceId,
        values?.districtId,
        values?.wardId,
        values?.soNha
    ]);

    const getListDistrictByProvinceId = (searchObject: object) => selectedProvinceId 
        ? getDistrictByProvinceId(searchObject) : null

    const getListCommuneByDistrictId = (searchObject: object) => selectedDistrictId 
        ? getCommuneByDistrictId(searchObject) : null

    useEffect(() => {
        checkDiaChi();
    }, [checkDiaChi]);

      useEffect(() => {
          console.log(values);
      }, [values]);

      return (
        <div className="reception-list__container">
            <Row>
                <h2>Thông tin hành chính</h2>
            </Row>
            <Row className="spaces mt-4">
                <Col xs={3} className="spaces pr-0" >
                    <div >
                        <LabelRequired
                            label="Tên bệnh nhân"
                            isRequired
                        />
                        <TextField
                            name="hoTen"
                            value={values?.hoTen}
                            type="text"
                        />
                    </div>
                </Col>
                <Col xs={2} className="spaces pr-0">
                    <div >
                        <LabelRequired
                            label="Mã bệnh nhân"
                            isRequired
                        />
                        <TextField
                            name="mpi"
                            value={values?.mpi}
                            type="text"
                        />
                    </div>
                </Col>
                <Col xs={2} className="spaces pr-0">
                    <div >
                        <LabelRequired
                            label="Giới tính"
                            isRequired
                        />
                        <AutocompleteField
                            options={GIOI_TINH}
                            value={values?.gioiTinh}
                            name="gioiTinh"
                            onChange={(selectedOption) => handleSelectChange(selectedOption, "gioiTinh")}
                            touched={touched?.gioiTinh}
                            errors={errors?.gioiTinh}
                        />
                    </div>
                </Col>
                <Col xs={2} className="spaces pr-0">
                    <div >
                        <LabelRequired
                            label="Ngày sinh"
                            isRequired
                        />
                        <TextField
                            name="ngaySinh"
                            placeholder=""
                            value={values?.ngaySinh}
                            type="date"
                        />
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
                            value={values?.tuoi}
                            type="text"
                        />
                    </div>
                </Col>
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
            </Row>
            <Row className="spaces mt-4">
                <Col xs={3} className="spaces pr-0" >
                    <div >
                        <LabelRequired
                            label="CMND/CCCD"
                            isRequired
                        />
                        <TextField
                            name="soDinhDanh"
                            value={values?.soDinhDanh}
                            type="text"
                        />
                    </div>
                </Col>
                <Col xs={2} className="spaces pr-0">
                    <div >
                        <LabelRequired
                            label="Quốc tịch"
                            isRequired
                        />
                        <AutocompleteField
                            options={[]}
                            name={values?.maQuocTich}
                            value={values?.maQuocTich}
                            onChange={(selectedOption) => {handleSelectChange(selectedOption, "maQuocTich");}}
                            touched={touched?.maQuocTich}
                            errors={errors?.maQuocTich}
                            searchFunction={getAllNation}
                            searchObject={SEARCH_OBJECT_MAX_SIZE}
                        />
                    </div>
                </Col>
                <Col xs={2} className="spaces pr-0">
                    <div >
                        <LabelRequired
                            label="Dân tộc"
                        />
                        <AutocompleteField
                            options={[]}
                            name={values?.maDanToc}
                            onChange={(selectedOption) => handleSelectChange(selectedOption, "maDanToc")}
                            touched={touched?.maDanToc}
                            errors={errors?.maDanToc}
                            searchFunction={getAllCategory}
                            searchObject={{...SEARCH_OBJECT_MAX_SIZE, type: SIMPLE_CATEGORY_TYPE.DAN_TOC}}
                        />
                    </div>
                </Col>
                <Col xs={2} className="spaces pr-0">
                    <div >
                        <LabelRequired
                            label="Điện thoại"
                        />

                        <TextField
                            name="soDienThoai"
                            value={values?.soDienThoai}
                            type="text"
                        />
                    </div>
                </Col>
                <Col xs={3}>
                    <div >
                        <LabelRequired
                            label="Nghề nghiệp"
                        />
                        <AutocompleteField
                            options={[]}
                            value={values?.professionCode}
                            name="professionCode"
                            onChange={(selectedOption) => handleSelectChange(selectedOption, "professionCode")}
                            touched={touched?.professionCode}
                            errors={errors?.professionCode}
                            searchFunction={getAllJobs}
                            searchObject={SEARCH_OBJECT_MAX_SIZE}
                        />
                    </div>
                </Col>
            </Row>
            <Row className="spaces mt-4">
                <Col xs={3}>
                    <div >
                        <LabelRequired
                            label="Tỉnh/Thành"
                            isRequired
                        />
                        <AutocompleteField
                            options={provinceList}
                            value={values?.provinceId}
                            name="provinceId"
                            getOptionLabel={option => option.name}
                            onChange={(selectedOption) => {
                                setSelectedProvinceId(selectedOption?.id)
                                handleSelectChange(selectedOption, "provinceId"); 
                            }}
                            touched={touched?.provinceId}
                            errors={errors?.provinceId}
                            searchFunction={getAllProvince}
                            searchObject={SEARCH_OBJECT_MAX_SIZE}
                        />
                    </div>
                </Col>
                <Col xs={3} className="spaces pr-0">
                    <div >
                        <LabelRequired
                            label=" Quận/Huyện"
                            isRequired
                        />
                        <AutocompleteField
                            options={districtList}
                            value={values?.districtId}
                            name="districtId"
                            onChange={(selectedOption) => {
                                setSelectedDistrictId(selectedOption?.id)
                                handleSelectChange(selectedOption, "districtId")
                            }}
                            touched={touched?.districtId}
                            errors={errors?.districtId}
                            searchFunction={getListDistrictByProvinceId}
                            searchObject={{...SEARCH_OBJECT_MAX_SIZE, provinceId: selectedProvinceId}}
                        />
                    </div>
                </Col>
                <Col xs={3} className="spaces pr-0">
                    <div >
                        <LabelRequired
                            label="Phường/Xã"
                            isRequired
                        />
                        <AutocompleteField
                            options={[]}
                            value={values?.wardId}
                            name="wardId"
                            onChange={(selectedOption) => handleSelectChange(selectedOption, "wardId")}
                            touched={touched?.wardId}
                            errors={errors?.wardId}
                            searchFunction={getListCommuneByDistrictId}
                            searchObject={{...SEARCH_OBJECT_MAX_SIZE, districtId: selectedDistrictId}}    
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
                            value={values?.soNha}
                            type="text"
                        />
                    </div>
                </Col>
            </Row>
            <Row className="spaces mt-4">
                <Col xs={12} >
                    <div >
                        <LabelRequired
                            label="Địa chỉ"
                        />
                        <TextField
                            name="diaChi"
                            value={values?.diaChi}
                            type="text"
                            readOnly={true}
                            disabled
                        />
                    </div>
                </Col>
            </Row>
            <Row className="spaces mt-4">
                <Col xs={3} className="spaces pr-0">
                    <div >
                        <LabelRequired
                            label="Người nhà"
                        />
                        <TextField
                            name="benhNhanMqh.hoTen"
                            value={values?.benhNhanMqh?.hoTen}
                            type="text"
                        />
                    </div>
                </Col>
                <Col xs={2} className="spaces pr-0">
                    <div >
                        <LabelRequired
                            label="Mối quan hệ"
                        />
                        <AutocompleteField
                            options={[]}
                            value={values?.benhNhanMqh?.maQuanHe}
                            name="benhNhanMqh.maQuanHe"
                            onChange={(selectedOption) => handleSelectChange(selectedOption, "benhNhanMqh.maQuanHe")}
                            touched={touched?.benhNhanMqh?.maQuanHe}
                            errors={errors?.benhNhanMqh?.maQuanHe}
                            searchFunction={getAllCategory}
                            searchObject={{...SEARCH_OBJECT_MAX_SIZE, type: SIMPLE_CATEGORY_TYPE.MOI_QUAN_HE}}
                        />
                    </div>
                </Col>
                <Col xs={2} className="spaces pr-0">
                    <div >
                        <LabelRequired
                            label="SĐT người nhà"
                        />
                        <TextField
                            name="benhNhanMqh.soDienThoai"
                            value={values?.benhNhanMqh?.soDienThoai}
                            type="text"
                        />
                    </div>
                </Col>
                <Col xs={5}>
                    <div >
                        <LabelRequired
                            label="Địa chỉ người nhà"
                        />
                        <TextField
                            name="benhNhanMqh.diaChi"
                            value={values?.benhNhanMqh?.diaChi}
                            type="text"
                        />
                    </div>
                </Col>

            </Row>
        </div>
    );
}
);
export default TTHanhChinh;
