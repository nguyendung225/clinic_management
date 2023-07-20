import React, { FC, useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Autocomplete } from "../../../component/Autocomplete";
import { DOI_TUONG, LOAI_DOI_TUONG, THONGTINTUYEN, options, yeuCauKhamOptions } from "../../const/PhanHeTiepNhan";
import GridPhongKhamModal from "../modalComponents/GridPhongKhamModal";
import ThongTinChuyenTuyenModal from "../modalComponents/ThongTinChuyenTuyenModal";
import { benhNhanProps } from "./TiepNhan";
import LabelRequired from "../../../component/LabelRequired";
import TextField from "../../../component/TextField";
import AutocompleteField from "../../../component/AutocompleteField";
import moment from "moment";
import { getAllCategory } from "../../services/TiepNhan";
import { SEARCH_OBJECT_MAX_SIZE, SIMPLE_CATEGORY_TYPE } from "../../../utils/Constant";

const TTKhamBenh: FC<benhNhanProps> = React.memo(({
    values,
    setFieldValue,
    handleSelectChange,
    handleChecked,
    errors,
    touched,
    handleAddDSDichVu,
    DSDichVu
}) => {
    const [shouldOpenModalPK, setShouldOpenModalPK] = useState<boolean>(false);
    const [shouldOpenTuyenModal, setShouldOpenTuyenModal] = useState<boolean>(false);
    const [selectedYCKham, setSelectedYCKham] = useState<any>({});

    const dichVuDaDuocChon = DSDichVu?.some((service) => service.id === selectedYCKham?.id)

    const handleOpenModalPK = () => {
        setShouldOpenModalPK(true);
    }

    const handleSelectTuyen = (valueSelected: any) => {
        if (valueSelected?.code === "4") {
            setShouldOpenTuyenModal(true);
        } else {
            setShouldOpenTuyenModal(false);
        }
    }

    const handleCloseModal = () => {
        setShouldOpenModalPK(false);
        setShouldOpenTuyenModal(false);
    }

    const handleSaveThongTinTuyen = (value: any) => {
        setFieldValue?.("benhNhanBhyt.loaiTuyen", value)
    }

    return (
        <div className="reception-list__container spaces p-16">
            <Row>
                <h2>Thông tin khám bệnh</h2>
            </Row>
            <Row className="spaces mt-4">
                <Col xs={3} className="spaces pr-0">
                    <div >
                        <LabelRequired
                            label="Loại tiếp nhận"
                            isRequired
                        />
                        <AutocompleteField
                            options={[]}
                            value={values?.benhNhanCase?.loaiTiepNhan}
                            name="benhNhanCase.loaiTiepNhan"
                            onChange={(selectedOption) => handleSelectChange(selectedOption, "benhNhanCase.loaiTiepNhan")}
                            touched={touched?.benhNhanCase?.loaiTiepNhan}
                            errors={errors?.benhNhanCase?.loaiTiepNhan}
                            searchFunction={getAllCategory}
                            searchObject={{...SEARCH_OBJECT_MAX_SIZE, type: SIMPLE_CATEGORY_TYPE.LOAI_TIEP_NHAN}}
                        />
                    </div>
                </Col>
                <Col xs={4} className="spaces pr-0">
                    <div >
                        <LabelRequired
                            label="Tiếp nhận lúc"
                        />
                        <TextField
                            name="benhNhanCase.thoiGianTiepNhan"
                            value={values?.benhNhanCase?.thoiGianTiepNhan}
                            type="text"
                            disabled
                        />
                    </div>
                </Col>
                <Col xs={3} className="spaces pr-0">
                    <div >
                        <LabelRequired
                            label="Số BHYT"
                            isRequired={values?.benhNhanCase?.loaiDoiTuong === DOI_TUONG.BHYT}
                        />
                        <TextField
                            name="benhNhanBhyt.soBhyt"
                            value={values?.benhNhanBhyt?.soBhyt}
                            type="text"
                            disabled={values?.benhNhanCase?.loaiDoiTuong !== DOI_TUONG.BHYT}
                        />
                    </div>
                </Col>
                <Col xs={2}>
                    <div >
                        <LabelRequired
                            label="Từ ngày"
                            isRequired={values?.benhNhanCase?.loaiDoiTuong === DOI_TUONG.BHYT}
                        />
                        <TextField
                            name="benhNhanBhyt.tuNngay"
                            value={values?.benhNhanBhyt.tuNngay
                              ? moment(values?.benhNhanBhyt.tuNngay)
                                .format('DD/MM/YYYY - HH:mm:ss')
                              : ""
                            }
                            type="text"
                            disabled={values?.benhNhanCase?.loaiDoiTuong !== DOI_TUONG.BHYT}
                        />
                    </div>
                </Col>
            </Row>
            <Row className="spaces mt-4">
                <Col xs={3} className="spaces pr-0">
                    <div>
                        <LabelRequired label="Yêu cầu khám" isRequired/>
                        <AutocompleteField
                            options={yeuCauKhamOptions}
                            value={values?.benhNhanCase?.yeuCauKham}
                            name="benhNhanCase.yeuCauKham"
                            onChange={(selectedOption) => {
                                handleSelectChange(selectedOption, "benhNhanCase.yeuCauKham");
                                setSelectedYCKham(selectedOption)
                            }}
                            touched={touched?.benhNhanCase?.yeuCauKham}
                            errors={errors?.benhNhanCase?.yeuCauKham}
                        />
                    </div>
                </Col>
                <Col xs={4} className="spaces pr-0">
                    <div>
                        <LabelRequired
                            label="Đối tượng"
                            isRequired
                        />
                        <AutocompleteField
                            options={[]}
                            value={values?.benhNhanCase?.loaiDoiTuong}
                            name="benhNhanCase.loaiDoiTuong"
                            onChange={(selectedOption) => handleSelectChange(selectedOption, "benhNhanCase.loaiDoiTuong")}
                            touched={touched?.benhNhanCase?.loaiDoiTuong}
                            errors={errors?.benhNhanCase?.loaiDoiTuong}
                            searchFunction={getAllCategory}
                            searchObject={{...SEARCH_OBJECT_MAX_SIZE, type: SIMPLE_CATEGORY_TYPE.DOI_TUONG}}
                        />
                    </div>
                </Col>
                <Col xs={3} className="spaces pr-0">
                    <div >
                        <LabelRequired
                            label="Nơi đăng ký"
                            isRequired={values?.benhNhanCase?.loaiDoiTuong === DOI_TUONG.BHYT}
                        />
                        <TextField
                            name="benhNhanBhyt.noiDangKy"
                            value={values?.benhNhanBhyt?.noiDangKy}
                            type="text"
                            disabled={values?.benhNhanCase?.loaiDoiTuong !== DOI_TUONG.BHYT}
                        />
                    </div>
                </Col>
                <Col xs={2}>
                    <div >
                        <LabelRequired
                            label="Đến Ngày"
                            isRequired={values?.benhNhanCase?.loaiDoiTuong === DOI_TUONG.BHYT}
                        />
                        <TextField
                            name="benhNhanBhyt.denNngay"
                            value={values?.benhNhanBhyt.denNngay
                              ? moment(values?.benhNhanBhyt.denNngay)
                                .format('DD/MM/YYYY - HH:mm:ss')
                              : ""
                            }
                            type="text"
                            disabled={values?.benhNhanCase?.loaiDoiTuong !== DOI_TUONG.BHYT}
                        />
                    </div>
                </Col>
            </Row>
            <Row className="spaces mt-4">
                <Col xs={3} className="spaces pr-0">
                    <div>
                        <LabelRequired
                            label="Phòng khám"
                            isRequired
                        />
                        <TextField 
                            name='benhNhanCase.phongKham'
                            type='select'
                            value={values?.benhNhanCase?.phongKham}
                            onClick={handleOpenModalPK}
                            readOnly
                        />
                    </div>
                </Col>
                <Col xs={3} className="spaces my-3 d-flex flex-align-items-end">
                    <div className="col-6">
                        <Form.Check
                            className="spaces customs-form-check"
                            inline
                            label="Ưu tiên"
                            name="benhNhanCase.isUuTien"
                            checked={values?.benhNhanCase?.isUuTien}
                            onChange={handleChecked}
                        />
                    </div>
                    <div className="col-6">
                        <Form.Check
                            className="customs-form-check"
                            inline
                            label="Cấp cứu"
                            name="benhNhanCase.isCapCuu"
                            checked={values?.benhNhanCase?.isCapCuu}
                            onChange={handleChecked}
                        />
                    </div>
                   
                </Col>
                <Col xs={1} className="d-flex align-items-end">
                    <Button 
                        className="spaces btn-navy px-0 py-4 w-60px " 
                        onClick={() => handleAddDSDichVu?.(selectedYCKham)}
                        disabled={!selectedYCKham || dichVuDaDuocChon}
                    > + </Button>
                </Col>
                <Col xs={3} className="spaces pr-0">
                    <div >
                        <label className="m-0">Miễn đồng CT</label>
                        <TextField
                            name="benhNhanBhyt.mienDongCt"
                            value={values?.benhNhanBhyt?.mienDongCt}
                            type="date"
                            disabled={values?.benhNhanCase?.loaiDoiTuong !== DOI_TUONG.BHYT}
                        />
                    </div>
                </Col>
                <Col xs={2}>
                    <div >
                        <label className="m-0">Mã KV</label>
                        <AutocompleteField
                            options={[]}
                            value={values?.benhNhanBhyt?.maKv}
                            name="benhNhanBhyt.maKv"
                            onChange={(selectedOption) => handleSelectChange(selectedOption, "benhNhanBhyt.maKv")}
                            touched={touched?.benhNhanBhyt?.maKv}
                            errors={errors?.benhNhanBhyt?.maKv}
                            disabled={values?.benhNhanCase?.loaiDoiTuong !== DOI_TUONG.BHYT}
                            searchFunction={getAllCategory}
                            searchObject={{...SEARCH_OBJECT_MAX_SIZE, type: SIMPLE_CATEGORY_TYPE.MA_KV}}
                        />
                    </div>
                </Col>
            </Row>
            <Row className="spaces mt-4">
                <Col xs={7} className="spaces pr-0">
                </Col>
                <Col xs={3} className="spaces pr-0">
                    <div >
                        <LabelRequired
                            label="Tuyến"
                            isRequired={values?.benhNhanCase?.loaiDoiTuong === DOI_TUONG.BHYT}
                        />
                        <AutocompleteField
                            options={[]}
                            placeholder="Chọn tuyến..."
                            value={values?.benhNhanBhyt?.loaiTuyen}
                            name="benhNhanBhyt.loaiTuyen"
                            onChange={(selectedOption) => {
                                handleSelectChange(selectedOption, "benhNhanBhyt.loaiTuyen");
                                handleSelectTuyen(selectedOption);
                            }}
                            touched={touched?.benhNhanBhyt?.loaiTuyen}
                            errors={errors?.benhNhanBhyt?.loaiTuyen}
                            disabled={values?.benhNhanCase?.loaiDoiTuong !== DOI_TUONG.BHYT}
                            searchFunction={getAllCategory}
                            searchObject={{...SEARCH_OBJECT_MAX_SIZE, type: SIMPLE_CATEGORY_TYPE.TUYEN}}
                        />
                    </div>
                </Col>
                <Col xs={2} className="spaces my-3 d-flex flex-align-items-end">
                    <Form.Check
                        className="spaces customs-form-check w-35"
                        inline
                        label="5 năm"
                        type="checkbox"
                        name="benhNhanBhyt.is5nam"
                        checked={values?.benhNhanBhyt?.is5nam}
                        onChange={handleChecked}
                        disabled={values?.benhNhanCase?.loaiDoiTuong !== DOI_TUONG.BHYT}
                    />
                    <Form.Check
                        className="customs-form-check"
                        inline
                        label="6 tháng"
                        type="checkbox"
                        name="benhNhanBhyt.is6thang"
                        checked={values?.benhNhanBhyt?.is6thang}
                        onChange={handleChecked}
                        disabled={values?.benhNhanCase?.loaiDoiTuong !== DOI_TUONG.BHYT}
                    />
                </Col>
            </Row>

            {shouldOpenModalPK && (
                <GridPhongKhamModal
                    shouldOpenModalPK={shouldOpenModalPK}
                    handleCloseModal={handleCloseModal}
                    setFieldValue={(value) => setFieldValue('benhNhanCase.phongKham', value)}
                />
            )}
            {shouldOpenTuyenModal && (
                <ThongTinChuyenTuyenModal
                    onSave={handleSaveThongTinTuyen}
                    shouldOpenTuyenModal={shouldOpenTuyenModal}
                    handleCloseModal={handleCloseModal}
                />
            )}
        </div>
    );
}
);
export default TTKhamBenh;
