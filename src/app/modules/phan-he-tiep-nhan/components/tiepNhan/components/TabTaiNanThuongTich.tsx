import { Col, Row } from "react-bootstrap";
import LabelRequired from "../../../../component/LabelRequired";
import TextField from "../../../../component/TextField";
import AutocompleteObject from "../../../../component/AutocompleteObject";
import { ObjectSelectAutocomplete, benhNhan } from "../../../../phan-he-tiep-nhan-thanh-toan/models/PhanHeTiepNhanModel";
import { FC } from "react";
import { FormikErrors, FormikTouched } from "formik";
import { getAllProvince, getCommuneByDistrictId, getDistrictByProvinceId } from "../../../../phan-he-tiep-nhan-thanh-toan/services/TiepNhanServices";
import { SEARCH_OBJECT_MAX_SIZE } from "../../../../utils/Constant";

type taiNanThuongTichProps = {
    values: benhNhan;
    errors?: FormikErrors<benhNhan>;
    touched?: FormikTouched<benhNhan>;
    setFieldValue: (field: string, value: any) => void;
    handleChangeSelect: (selectedObject: ObjectSelectAutocomplete, name: string, setFieldValue: (field: string, value: any) => void) => void;
}

const options = [
    { code: 0, name: 'option 1' },
    { code: 1, name: 'option 2' },
    { code: 2, name: 'option 3' },
    { code: 3, name: 'opions 4' },
]

const TabTaiNanThuongTich: FC<taiNanThuongTichProps> = ({
    values,
    handleChangeSelect,
    setFieldValue,
    errors,
    touched,
}) => {

    const getListDistrictByProvinceId = (searchObject: object) => values.tinhTaiNan ? getDistrictByProvinceId(searchObject) : null;
    const getListCommuneByDistrictId = (searchObject: object) => values.huyenTaiNan ? getCommuneByDistrictId(searchObject) : null;

    return (
        <>
            <Row className="space-row spaces mr-0 ml-0">
                <Col xs={3} className="spaces pr-0">
                    <div>
                        <LabelRequired
                            label="Mã HBBA"
                        />
                        <TextField
                            name="maHBBA"
                            type="text"
                            value={values?.maHBBA || ""}
                        />
                    </div>
                </Col>
                <Col xs={3} className="spaces pr-0">
                    <div>
                        <LabelRequired
                            label="Người nhập"
                        />
                        <TextField
                            name="nguoiNhap"
                            type="text"
                            value={values?.nguoiNhap || ""}
                        />
                    </div>
                </Col>
                <Col xs={6} className="spaces">
                    <div>
                        <LabelRequired
                            label="Thời điểm xảy ra tai nạn"
                            isRequired
                        />
                        <TextField
                            name="thoiDiemTaiNan"
                            type="text"
                            value={values?.thoiDiemTaiNan || ""}
                        />
                    </div>
                </Col>
                <Col xs={12} className="spaces">
                    <div>
                        <LabelRequired
                            label="Nơi xảy ra tai nạn"
                            isRequired
                        />
                        <TextField
                            name="noiXayRaTaiNan"
                            type="text"
                            value={values?.noiXayRaTaiNan}
                        />
                    </div>
                </Col>
                <Col xs={12} className="spaces">
                    <div>
                        <LabelRequired
                            label="T/H/X"
                        />
                        <TextField
                            name="THX"
                            type="text"
                            value={values?.thx || ""}
                        />
                    </div>
                </Col>
                <Col xs={4} className="spaces pr-0">
                    <div >
                        <LabelRequired
                            label="Tỉnh/Thành"
                            isRequired
                        />
                        <AutocompleteObject
                            options={[]}
                            value={values?.tinhTaiNan}
                            name="tinhTaiNan"
                            valueField="id"
                            getOptionLabel={option => `${option.code} - ${option.name}`}
                            onChange={(selectedOption) => {
                                handleChangeSelect(selectedOption, "tinhTaiNan", setFieldValue);
                            }}
                            touched={touched?.tinhTaiNan}
                            errors={errors?.tinhTaiNan}
                            searchFunction={getAllProvince}
                            searchObject={SEARCH_OBJECT_MAX_SIZE}
                        />
                    </div>
                </Col>
                <Col xs={4} className="spaces pr-0">
                    <div >
                        <LabelRequired
                            label=" Quận/Huyện"
                            isRequired
                        />
                        <AutocompleteObject
                            options={[]}
                            value={values?.huyenTaiNan}
                            name="huyenTaiNan"
                            onChange={(selectedOption) => {
                                handleChangeSelect(selectedOption, "huyenTaiNan", setFieldValue);
                            }}
                            touched={touched?.huyenTaiNan}
                            errors={errors?.huyenTaiNan}
                            searchFunction={getListDistrictByProvinceId}
                            searchObject={{ ...SEARCH_OBJECT_MAX_SIZE, provinceId: values?.tinhTaiNan?.id }}
                            dependencies={[values?.tinhTaiNan]}
                            getOptionLabel={option => `${option.code} - ${option.name}`}
                        />
                    </div>
                </Col>
                <Col xs={4} className="spaces">
                    <div >
                        <LabelRequired
                            label="Phường/Xã"
                            isRequired
                        />
                        <AutocompleteObject
                            options={[]}
                            value={values?.xaTaiNan}
                            name="xaTaiNan"
                            onChange={(selectedOption) => {
                                handleChangeSelect(selectedOption, "xaTaiNan", setFieldValue);
                            }}
                            touched={touched?.xaTaiNan}
                            errors={errors?.xaTaiNan}
                            searchFunction={getListCommuneByDistrictId}
                            searchObject={{ ...SEARCH_OBJECT_MAX_SIZE, districtId: values?.huyenTaiNan?.id }}
                            dependencies={[values?.tinhTaiNan, values?.huyenTaiNan]}
                            getOptionLabel={option => `${option.code} - ${option.name}`}
                        />
                    </div>
                </Col>
                <Col xs={6} className="spaces pr-0">
                    <div >
                        <LabelRequired
                            label="Địa điểm xảy ra"
                            isRequired
                        />
                        <AutocompleteObject
                            options={options}
                            value={values?.diaDiemXayRa}
                            name="diaDiemXayRa"
                            onChange={(selectedOption) => {
                                handleChangeSelect(selectedOption, "diaDiemXayRa", setFieldValue);
                            }}
                            touched={touched?.diaDiemXayRa}
                            errors={errors?.diaDiemXayRa}
                            getOptionLabel={option => `${option.code} - ${option.name}`}
                        />
                    </div>
                </Col>
                <Col xs={6} className="spaces">
                    <div >
                        <LabelRequired
                            label="Bộ phận chấn thương"
                            isRequired
                        />
                        <AutocompleteObject
                            options={options}
                            value={values?.boPhanChanThuong}
                            name="boPhanChanThuong"
                            onChange={(selectedOption) => {
                                handleChangeSelect(selectedOption, "ward", setFieldValue);
                            }}
                            touched={touched?.boPhanChanThuong}
                            errors={errors?.boPhanChanThuong}
                            getOptionLabel={option => `${option.code} - ${option.name}`}
                        />
                    </div>
                </Col>
                <Col xs={6} className="spaces pr-0">
                    <div >
                        <LabelRequired
                            label="Nguyên nhân"
                            isRequired
                        />
                        <AutocompleteObject
                            options={options}
                            value={values?.nguyenNhanTaiNan}
                            name="nguyenNhanTaiNan"
                            onChange={(selectedOption) => {
                                handleChangeSelect(selectedOption, "nguyenNhanTaiNan", setFieldValue);
                            }}
                            touched={touched?.nguyenNhanTaiNan}
                            errors={errors?.nguyenNhanTaiNan}
                            getOptionLabel={option => `${option.code} - ${option.name}`}
                        />
                    </div>
                </Col>
                <Col xs={6} className="spaces">
                    <div >
                        <LabelRequired
                            label="Loại ngộ độc"
                        />
                        <AutocompleteObject
                            options={options}
                            value={values?.loaiNgoDoc}
                            name="loaiNgoDoc"
                            onChange={(selectedOption) => {
                                handleChangeSelect(selectedOption, "loaiNgoDoc", setFieldValue);
                            }}
                            touched={touched?.loaiNgoDoc}
                            errors={errors?.loaiNgoDoc}
                            getOptionLabel={option => `${option.code} - ${option.name}`}
                        />
                    </div>
                </Col>
                <Col xs={6} className="spaces pr-0">
                    <div >
                        <LabelRequired
                            label="Loại tai nạn giao thông"
                        />
                        <AutocompleteObject
                            options={options}
                            value={values?.loaiTaiNanGiaoThong}
                            name="loaiTaiNan"
                            onChange={(selectedOption) => {
                                handleChangeSelect(selectedOption, "loaiTaiNanGiaoThong", setFieldValue);
                            }}
                            touched={touched?.loaiTaiNanGiaoThong}
                            errors={errors?.loaiTaiNanGiaoThong}
                            getOptionLabel={option => `${option.code} - ${option.name}`}
                        />
                    </div>
                </Col>
                <Col xs={6} className="spaces">
                    <div>
                        <LabelRequired
                            label="Loại tai nạn lao động"
                        />
                        <AutocompleteObject
                            options={options}
                            value={values?.loaiTaiNanLaoDong}
                            onChange={(selectedOption) => {
                                handleChangeSelect(selectedOption, "loaiTaiNanLaoDong", setFieldValue);
                            }}
                            touched={touched?.loaiTaiNanLaoDong}
                            errors={errors?.loaiTaiNanLaoDong}
                            getOptionLabel={option => `${option.code} - ${option.name}`}
                        />
                    </div>
                </Col>
                <Col xs={6} className="spaces pr-0">
                    <div >
                        <LabelRequired
                            label="Sử dụng rượu bia, ma tuý"
                        />
                        <AutocompleteObject
                            options={options}
                            value={values?.suDungChatKichThich}
                            name="suDungChatKichThich"
                            onChange={(selectedOption) => {
                                handleChangeSelect(selectedOption, "suDungChatKichThich", setFieldValue);
                            }}
                            touched={touched?.suDungChatKichThich}
                            errors={errors?.suDungChatKichThich}
                            getOptionLabel={option => `${option.code} - ${option.name}`}
                        />
                    </div>
                </Col>
                <Col xs={6} className="spaces">
                    <div>
                        <LabelRequired
                            label="Mũ"
                        />
                        <AutocompleteObject
                            options={[]}
                            value={values?.muBaoHiem}
                            name="muBaoHiem"
                            onChange={(selectedOption) => {
                                handleChangeSelect(selectedOption, "muBaoHiem", setFieldValue);
                            }}
                            touched={touched?.muBaoHiem}
                            errors={errors?.muBaoHiem}
                            getOptionLabel={option => `${option.code} - ${option.name}`}
                        />
                    </div>
                </Col>
                <Col xs={6} className="spaces pr-0">
                    <div >
                        <LabelRequired
                            label="Xử trí tai nạn"
                            isRequired
                        />
                        <AutocompleteObject
                            options={options}
                            value={values?.xuTriTaiNan}
                            name="xuTriTaiNan"
                            onChange={(selectedOption) => {
                                handleChangeSelect(selectedOption, "xuTriTaiNan", setFieldValue);
                            }}
                            touched={touched?.xuTriTaiNan}
                            errors={errors?.xuTriTaiNan}
                            getOptionLabel={option => `${option.code} - ${option.name}`}
                        />
                    </div>
                </Col>
                <Col xs={6} className="spaces">
                    <div>
                        <LabelRequired
                            label="Diễn biến sau tai nạn"
                            isRequired
                        />
                        <AutocompleteObject
                            options={options}
                            value={values?.dienBienSauTaiNan}
                            name="dienBienSauTaiNan"
                            onChange={(selectedOption) => {
                                handleChangeSelect(selectedOption, "dienBienSauTaiNan", setFieldValue);
                            }}
                            touched={touched?.dienBienSauTaiNan}
                            errors={errors?.dienBienSauTaiNan}
                            getOptionLabel={option => `${option.code} - ${option.name}`}
                        />
                    </div>
                </Col>
                <Col xs={12} className="spaces">
                    <div>
                        <LabelRequired
                            label="Thông tin điều trị"
                        />
                        <TextField
                            name="thongTinDieuTri"
                            as='textarea'
                            rows={2}
                            value={values?.thongTinDieuTri || ""}
                        />
                    </div>
                </Col>
                <Col xs={12} className="spaces">
                    <div>
                        <LabelRequired
                            label="Tình trạng thương tích vào viện"
                        />
                        <TextField
                            name="tinhTrangThuongTich"
                            as='textarea'
                            rows={2}
                            value={values?.tinhTrangThuongTich || ""}
                        />
                    </div>
                </Col>
                <Col xs={12} className="spaces">
                    <div>
                        <LabelRequired
                            label="Tình trạng thương tích ra viện"
                        />
                        <TextField
                            name="tinhTrangThuongTichRaVien"
                            as='textarea'
                            rows={2}
                            value={values?.tinhTrangThuongTichRaVien || ""}
                        />
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default TabTaiNanThuongTich;