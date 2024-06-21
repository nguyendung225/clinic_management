import { Button, Col, Row } from "react-bootstrap"
import TextField from "../../../../component/TextField"
import AutocompleteV2 from "../../../../component/AutocompleteObjectV2"
import LabelRequired from "../../../../component/LabelRequired"
import { Field } from "formik"

const GiayBaoTu = () => {
    return (
        <>
            <div>
                <Row className="mb-2">
                    <Col
                        xs={6}
                        className="d-flex gap-2 mb-1 flex-column text-lable-input"
                    >
                        <TextField
                            className="flex-auto spaces "
                            label="Người nhập"
                            name="nguoiNhap"
                            labelClassName="spaces min-w-150"
                        />
                    </Col>
                    <Col
                        xs={6}
                        className="d-flex gap-2 mb-1 flex-column text-lable-input"
                    >
                        <TextField
                            className="flex-auto spaces "
                            label="Ngày nhập"
                            name="ngayNhap"
                            type="date"
                            labelClassName="spaces min-w-150"
                        />
                    </Col>
                </Row>
                <Row className="mb-2">
                    <Col
                        xs={12}
                        className="d-flex gap-2 mb-1 flex-column text-lable-input"
                    >
                        <TextField
                            className="flex-auto spaces "
                            label="Tt/Hq/Xp"
                            name="tinhHuyenXa"
                            labelClassName="spaces min-w-150"
                        />
                    </Col>
                </Row>
                <Row className="mb-2">
                    <Col
                        xs={4}
                        className="d-flex gap-2 mb-1 flex-column text-lable-input"
                    >
                        <div className="spaces d-flex w-100">
                            <LabelRequired
                                label="T/TP"
                                className="spaces min-w-150"
                            />
                            <AutocompleteV2
                                options={[]}
                                name="province"
                                className="autocomplete-custom radius spaces width-100 "
                            />
                        </div>
                    </Col>
                    <Col
                        xs={4}
                        className="d-flex gap-2 mb-1 flex-column text-lable-input"
                    >
                        <div className="spaces d-flex w-100">
                            <LabelRequired
                                label="H/Q"
                                className="spaces min-w-150"
                            />
                            <AutocompleteV2
                                options={[]}
                                name="district"
                                className="autocomplete-custom radius spaces width-100 "
                            />
                        </div>
                    </Col>
                    <Col
                        xs={4}
                        className="d-flex gap-2 mb-1 flex-column text-lable-input"
                    >
                        <div className="spaces d-flex w-100">
                            <LabelRequired
                                label="X/P"
                                className="spaces min-w-150"
                            />
                            <AutocompleteV2
                                options={[]}
                                name="subDistrict"
                                className="autocomplete-custom radius spaces width-100 "
                            />
                        </div>
                    </Col>
                </Row>
                <Row className="mb-2">
                    <Col
                        xs={12}
                        className="d-flex gap-2 mb-1 flex-column text-lable-input"
                    >
                        <TextField
                            className="flex-auto spaces "
                            label="Nơi thường trú, tạm trú"
                            name="noiThuongTru"
                            labelClassName="spaces max-w-150 min-w-150 line-height-16"
                        />
                    </Col>
                </Row>
                <Row className="mb-2">
                    <Col
                        xs={12}
                        className="d-flex gap-2 mb-1 flex-column text-lable-input"
                    >
                        <TextField
                            className="flex-auto spaces "
                            label="Mã định danh cá nhân (nếu có)"
                            name="maDinhDanhCaNhan"
                            labelClassName="spaces min-w-150 max-w-150 line-height-16"
                        />
                    </Col>
                </Row>
                <Row className="mb-2">
                    <Col
                        xs={4}
                        className="d-flex gap-2 mb-1 flex-column text-lable-input"
                    >
                        <TextField
                            className="flex-auto spaces "
                            label="Giấy tờ tuỳ thân số"
                            name="giayToTuyThan"
                            labelClassName="spaces min-w-150"
                        />
                    </Col>
                    <Col
                        xs={4}
                        className="d-flex gap-2 mb-1 flex-column text-lable-input"
                    >
                        <div className="spaces d-flex w-100">
                            <LabelRequired
                                label="Loại giấy tờ"
                                className="spaces min-w-150"
                            />
                            <AutocompleteV2
                                options={[]}
                                name="loaiGiayTo"
                                className="autocomplete-custom radius spaces width-100 "
                            />
                        </div>
                    </Col>
                    <Col
                        xs={4}
                        className="d-flex gap-2 mb-1 flex-column text-lable-input"
                    >
                       <TextField
                            className="flex-auto spaces "
                            label="Ngày cấp"
                            name="ngayCap"
                            type="date"
                            labelClassName="spaces min-w-150"
                        />
                    </Col>
                </Row>
                <Row className="mb-2">
                    <Col
                        xs={12}
                        className="d-flex gap-2 mb-1 flex-column text-lable-input"
                    >
                        <TextField
                            className="flex-auto spaces "
                            label="Nơi cấp"
                            name="noiCap"
                            labelClassName="spaces min-w-150"
                        />
                    </Col>
                </Row>
                <Row className="mb-2">
                    <Col
                        xs={6}
                        className="d-flex gap-2 mb-1 flex-column text-lable-input"
                    >
                        <TextField
                            className="flex-auto spaces "
                            label="Đã tử vong vào lúc"
                            name="daTuVongVaoLuc"
                            type="date"
                            labelClassName="spaces min-w-150"
                        />
                    </Col>
                    <Col
                        xs={6}
                        className="d-flex gap-2 mb-1 flex-column text-lable-input"
                    >
                        <TextField
                            className="flex-auto spaces "
                            label="Người thân thích"
                            name="nguoiThanThich"
                            labelClassName="spaces min-w-150"
                        />
                    </Col>
                </Row>
                <Row className="mb-2">
                    <TextField
                        label="Tình trạng tử vong"
                        labelClassName="pe-2 spaces min-w-150 text-start mb-3"
                        className="d-flex align-items-start h-54"
                        name="tinhTrangTuVong"
                        as="textarea"
                        rows={3}
                    />
                </Row>
                <Row className="mb-2">
                    <TextField
                        label="Nguyên nhân tử vong"
                        labelClassName="pe-2 spaces min-w-150 text-start mb-3"
                        className="d-flex align-items-start h-54"
                        name="nguyenNhanTuVong"
                        as="textarea"
                        rows={3}
                    />
                </Row>
                <Row className="mb-2 d-flex ">
                    <div className="spaces d-flex width-100">
                        <div className="spaces min-w-150 max-w-150 fw-bold">Tử vong trên đường cấp cứu</div>
                        <label className="me-4 d-flex align-items-center min-w-150px">
                            <Field type="radio" name="tuVongTrenDuongCapCuu" />
                            &nbsp;Có
                        </label>
                        <label className="me-4 d-flex align-items-center min-w-150px">
                            <Field type="radio" name="tuVongTrenDuongCapCuu" />
                            &nbsp;Không
                        </label>
                    </div>
                </Row>
            </div>
        </>
    )
}

export default GiayBaoTu