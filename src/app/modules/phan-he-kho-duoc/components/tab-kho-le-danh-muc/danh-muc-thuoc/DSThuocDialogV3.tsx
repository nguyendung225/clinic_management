import { useFormik } from "formik";
import { Button, Col, Form, FormCheck, Modal, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import * as Yup from "yup";
import Autocomplete from "../../../../component/AutocompleteObject";
import TextValidator from "../../../../component/TextValidator";
import { CODE, SEARCH_OBJECT_MAX_SIZE } from "../../../../utils/Constant";
import { convertObjectToArray } from "../../../utils/Utils";
import { initFormThuoc } from "../../../consts/ThuocConst";
import { TYPE_PRODUCT, TYPE_SIMPLE_CATEGORIES } from "../../../consts/PhanHeKhoDuocConst";
import { ThuocConvert, optionSelect } from "../../../models/ThuocModel";
import { addDSThuoc, editDSThuoc, getListCategory, getListType } from "../../../services/DSThuocServices";
import LabelRequired from "../../../../component/LabelRequired";
import { IResponseData } from "../../../../utils/models";
import { heightSelectMutil } from "../../../../component/StyleComponent";

interface IProps {
    handleCloseModal: () => void;
    thongTinThuoc: ThuocConvert;
    titleDialog: string;
    isView: boolean;
    handleReload: Function;
}
export default function DSThuocDialogV3(props: IProps) {
    const { handleCloseModal, thongTinThuoc, titleDialog, isView, handleReload } = props;
    const initialValues: ThuocConvert = thongTinThuoc || initFormThuoc;
    const validationSchema = Yup.object({
        name: Yup.string().required("Bắt buộc nhập").nullable(),
        unit: Yup.object().required("Bắt buộc chọn").nullable(),
    });

    const handleSubmit = async (values: ThuocConvert) => {
        try {
            let { data }: IResponseData = await getListType({ keyword: TYPE_PRODUCT.THUOC });
            const thuocInfo = {
                ...values,
                attributeValues: convertObjectToArray(values?.attributeValues),
                typeId: data?.data?.content?.[0]?.id,
                unitId: values?.unit?.id,
            };
            const status = initialValues?.id
                ? await editDSThuoc(thuocInfo, initialValues?.id)
                : await addDSThuoc(thuocInfo);
            if (CODE.SUCCESS === status.data.code) {
                toast.success("Thành Công");
                handleReload();
                handleCloseModal();
                return;
            }
        } catch (error) {
            toast.error("Xảy ra lỗi, vui lòng thử lại");
        }
    };

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: handleSubmit,
    });

    const handleChangeSelect = (name: string, value: optionSelect) => {
        if (Array.isArray(value)) {
            formik.setFieldValue(name, value);
        } else {
            formik.setFieldValue(name, [value]);
        }
    };

    return (
        <Modal centered className="modal fade p-5 d-flex justify-content-center spaces custom-size-dialog-98" role="dialog" show={true} size="xl" aria-hidden="true" fullscreen>
            <Modal.Header closeButton onHide={handleCloseModal} className="header-modal">
                <Modal.Title className="fs-2">{titleDialog}</Modal.Title>
            </Modal.Header>
            <Form onSubmit={formik.handleSubmit}>
                <Modal.Body className="scroll-modal p-4">
                    <Row>
                        <div className="my-2">
                            <h3 className="m-0">Thông tin cơ bản</h3>
                            <div className="d-flex">
                                <div className="spaces width-10 px-3">
                                    <LabelRequired
                                        label="Mã thuốc"
                                    />
                                    <TextValidator
                                        onChange={formik.handleChange}
                                        readOnly={isView}
                                        type="text"
                                        name="maThuoc"
                                        className="px-1"
                                    />
                                </div>
                                <div className="spaces width-10 px-3">
                                    <LabelRequired
                                        label="Mã thuốc BHYT"
                                    />
                                    <TextValidator
                                        onChange={formik.handleChange}
                                        readOnly={isView}
                                        type="text"
                                        name="maThuocBHYT"
                                        className="px-1"
                                    />
                                </div>
                                <div className="spaces width-15 px-3">
                                    <LabelRequired
                                        label="Tên thuốc"
                                    />
                                    <TextValidator
                                        onChange={formik.handleChange}
                                        readOnly={isView}
                                        type="text"
                                        name="tenThuoc"
                                        className="px-1"
                                    />
                                </div>
                                <div className="spaces width-15 px-3">
                                    <LabelRequired
                                        label="Tên thuốc BHYT"
                                    />
                                    <TextValidator
                                        onChange={formik.handleChange}
                                        readOnly={isView}
                                        type="text"
                                        name="tenThuocBHYT"
                                        className="px-1"
                                    />
                                </div>
                                <div className="spaces width-8 px-3">
                                    <LabelRequired
                                        label="Đơn vị tính"
                                    />
                                    <Autocomplete
                                        options={[]}
                                    />
                                </div>
                                <div className="spaces width-8 px-3">
                                    <LabelRequired
                                        label="Đơn vị SD"
                                    />
                                    <Autocomplete
                                        options={[]}
                                    />
                                </div>
                                <div className="spaces width-8 px-3">
                                    <LabelRequired
                                        label="Hàm lượng"
                                    />
                                    <TextValidator
                                        onChange={formik.handleChange}
                                        readOnly={isView}
                                        type="text"
                                        name="hamLuong"
                                        className="px-1"
                                    />
                                </div>
                                <div className="spaces width-8 px-3">
                                    <LabelRequired
                                        label="Nồng độ"
                                    />
                                    <TextValidator
                                        onChange={formik.handleChange}
                                        readOnly={isView}
                                        type="text"
                                        name="nongDo"
                                        className="px-1"
                                    />
                                </div>
                                <div className="spaces width-8 px-3">
                                    <LabelRequired
                                        label="Thể tích"
                                    />
                                    <TextValidator
                                        onChange={formik.handleChange}
                                        readOnly={isView}
                                        type="theTich"
                                        name="nongDo"
                                        className="px-1"
                                    />
                                </div>
                                <div className="spaces width-10 px-3">
                                    <LabelRequired
                                        label="Dung môi"
                                    />
                                    <Autocomplete
                                        options={[]}
                                    />
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="spaces width-20 px-3">
                                    <LabelRequired
                                        label="Mã hoạt chất"
                                    />
                                    <TextValidator
                                        onChange={formik.handleChange}
                                        readOnly={isView}
                                        type="text"
                                        name="maThuoc"
                                        className="px-1"
                                    />
                                </div>
                                <div className="spaces width-15 px-3">
                                    <LabelRequired
                                        label="Tên hoạt chất"
                                    />
                                    <TextValidator
                                        onChange={formik.handleChange}
                                        readOnly={isView}
                                        type="text"
                                        name="tenHoatChat"
                                        className="px-1"
                                    />
                                </div>
                                <div className="spaces width-10 px-3">
                                    <LabelRequired
                                        label="Đường dùng"
                                    />
                                    <Autocomplete
                                        options={[]}
                                    />
                                </div>
                                <div className="spaces width-21 px-3">
                                    <LabelRequired
                                        label="Hướng dẫn sử dụng"
                                    />
                                    <TextValidator
                                        onChange={formik.handleChange}
                                        readOnly={isView}
                                        type="text"
                                        name="huongDanSD"
                                        className="px-1"
                                    />
                                </div>
                                <div className="spaces width-16 px-3">
                                    <LabelRequired
                                        label="Nhà nhập khẩu"
                                    />
                                    <TextValidator
                                        onChange={formik.handleChange}
                                        readOnly={isView}
                                        type="text"
                                        name="nhaNhapKhau"
                                        className="px-1"
                                    />
                                </div>
                                <div className="spaces width-18 px-3">
                                    <LabelRequired
                                        label="Chỉ đối tượng này mới được BHTT"
                                    />
                                    <TextValidator
                                        onChange={formik.handleChange}
                                        readOnly={isView}
                                        type="theTich"
                                        name="doiTuongBHTT"
                                        className="px-1"
                                    />
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="spaces width-20 px-3">
                                    <LabelRequired
                                        label="Nước sản xuẩt"
                                    />
                                    <Autocomplete
                                        options={[]}
                                    />
                                </div>
                                <div className="spaces width-15 px-3">
                                    <LabelRequired
                                        label="Hãng sản xuẩt"
                                    />
                                    <Autocomplete
                                        options={[]}
                                    />
                                </div>
                                <div className="spaces width-15 px-3">
                                    <LabelRequired
                                        label="Số đăng ký"
                                    />
                                    <TextValidator
                                        onChange={formik.handleChange}
                                        readOnly={isView}
                                        type="text"
                                        name="soDangKy"
                                        className="px-1"
                                    />
                                </div>
                                <div className="spaces width-16 px-3">
                                    <LabelRequired
                                        label="Quy cách đóng gói"
                                    />
                                    <TextValidator
                                        onChange={formik.handleChange}
                                        readOnly={isView}
                                        type="text"
                                        name="quyCachDongGoi"
                                        className="px-1"
                                    />
                                </div>
                                <div className="spaces width-8 px-3">
                                    <LabelRequired
                                        label="Biệt dược"
                                    />
                                    <Autocomplete
                                        options={[]}
                                    />
                                </div>
                                <div className="spaces width-8 px-3">
                                    <LabelRequired
                                        label="Số lô nhập"
                                    />
                                    <TextValidator
                                        onChange={formik.handleChange}
                                        readOnly={isView}
                                        type="text"
                                        name="soLoNhap"
                                        className="px-1"
                                    />
                                </div>
                                <div className="spaces width-18 px-3">
                                    <LabelRequired
                                        label="Hạn sử dụng"
                                    />
                                    <div className='spaces ms-0 d-flex'>
                                        <div className='spaces width-25'>
                                            <TextValidator
                                                onChange={formik.handleChange}
                                                readOnly={isView}
                                                type="text"
                                                name="ngay"
                                                className="px-1"
                                            />
                                        </div>
                                        <div className='spaces width-25'>
                                            <TextValidator
                                                onChange={formik.handleChange}
                                                readOnly={isView}
                                                type="text"
                                                name="thang"
                                                className="px-1"
                                            />
                                        </div>
                                        <div className='spaces width-50'>
                                            <TextValidator
                                                onChange={formik.handleChange}
                                                readOnly={isView}
                                                type="text"
                                                name="nam"
                                                className="px-1"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="spaces width-10 px-3">
                                    <LabelRequired
                                        label="Mã vạch"
                                    />
                                    <TextValidator
                                        onChange={formik.handleChange}
                                        readOnly={isView}
                                        type="text"
                                        name="maVach"
                                        className="px-1"
                                    />
                                </div>
                                <div className="spaces width-10 px-3">
                                    <LabelRequired
                                        label="Mã ATC"
                                    />
                                    <TextValidator
                                        onChange={formik.handleChange}
                                        readOnly={isView}
                                        type="text"
                                        name="maATC"
                                        className="px-1"
                                    />
                                </div>
                                <div className="spaces width-7 px-3">
                                    <LabelRequired
                                        label="Số QĐTT"
                                    />
                                    <TextValidator
                                        onChange={formik.handleChange}
                                        readOnly={isView}
                                        type="text"
                                        name="soQDTT"
                                        className="px-1"
                                    />
                                </div>
                                <div className="spaces width-8 px-3">
                                    <LabelRequired
                                        label="Số gói thầu"
                                    />
                                    <TextValidator
                                        onChange={formik.handleChange}
                                        readOnly={isView}
                                        type="text"
                                        name="soGoiThau"
                                        className="px-1"
                                    />
                                </div>
                                <div className="spaces width-7 px-3">
                                    <LabelRequired
                                        label="Nhóm thầu"
                                    />
                                    <TextValidator
                                        onChange={formik.handleChange}
                                        readOnly={isView}
                                        type="text"
                                        name="nhomThau"
                                        className="px-1"
                                    />
                                </div>
                                <div className="spaces width-6 px-3">
                                    <LabelRequired
                                        label="Năm thầu"
                                    />
                                    <TextValidator
                                        onChange={formik.handleChange}
                                        readOnly={isView}
                                        type="text"
                                        name="namThau"
                                        className="px-1"
                                    />
                                </div>
                                <div className="spaces width-6 px-3">
                                    <LabelRequired
                                        label="STT thầu"
                                    />
                                    <TextValidator
                                        onChange={formik.handleChange}
                                        readOnly={isView}
                                        type="text"
                                        name="sttThau"
                                        className="px-1"
                                    />
                                </div>


                                <div className="spaces width-12 px-3">
                                    <LabelRequired
                                        label="Ngày hết hạn thầu"
                                    />
                                    <TextValidator
                                        onChange={formik.handleChange}
                                        readOnly={isView}
                                        type="text"
                                        name="ngayHetHanThau"
                                        className="px-1"
                                    />
                                </div>
                                <div className="spaces width-8 px-3">
                                    <LabelRequired
                                        label="Cảnh báo SLT"
                                    />
                                    <TextValidator
                                        onChange={formik.handleChange}
                                        readOnly={isView}
                                        type="text"
                                        name="canhBaoSLThau"
                                        className="px-1"
                                    />
                                </div>
                                <div className="spaces width-8 px-3">
                                    <LabelRequired
                                        label="Mã dược QG"
                                    />
                                    <TextValidator
                                        onChange={formik.handleChange}
                                        readOnly={isView}
                                        type="text"
                                        name="maDuocQuocGia"
                                        className="px-1"
                                    />
                                </div>
                                <div className="spaces width-18 px-3">
                                    <LabelRequired
                                        label="Điều kiện bảo quản"
                                    />
                                    <TextValidator
                                        onChange={formik.handleChange}
                                        readOnly={isView}
                                        type="text"
                                        name="dieuKienBaoQuan"
                                        className="px-1"
                                    />
                                </div>
                            </div>
                            <div className="d-flex mt-2">
                                <div className="d-flex spaces width-35 px-3">
                                    <LabelRequired
                                        label="Chú thích"
                                        className="min-w-70px"
                                    />
                                    <TextValidator
                                        onChange={formik.handleChange}
                                        readOnly={isView}
                                        type="text"
                                        name="chuThich"
                                        className="px-1"
                                    />
                                </div>
                                <div className="d-flex spaces width-19 px-3">
                                    <LabelRequired
                                        label="Liều tối đa"
                                        className="min-w-80px"
                                    />
                                    <TextValidator
                                        onChange={formik.handleChange}
                                        readOnly={isView}
                                        type="text"
                                        name="lieuToiDa"
                                        className="px-1"
                                    />
                                </div>
                                <div className="d-flex spaces width-46 px-3">
                                    <LabelRequired
                                        label="Cơ sở phân tán"
                                        className="spaces W-110 "
                                    />
                                    <TextValidator
                                        onChange={formik.handleChange}
                                        readOnly={isView}
                                        type="text"
                                        name="coSoPhanTan"
                                        className="px-1"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="my-2">
                            <h3 className="m-0">Thông tin kế toán, xuất nhập kho</h3>
                            <div className="d-flex">
                                <div className="spaces width-20 px-3">
                                    <LabelRequired
                                        label="Nhóm thuốc"
                                    />
                                    <Autocomplete
                                        options={[]}
                                    />
                                </div>
                                <div className="spaces width-15 px-3">
                                    <LabelRequired
                                        label="Loại thuốc"
                                    />
                                    <Autocomplete
                                        options={[]}
                                    />
                                </div>
                                <div className="spaces width-15 px-3">
                                    <LabelRequired
                                        label="Nhóm chi phí BHYT"
                                    />
                                    <Autocomplete
                                        options={[]}
                                    />
                                </div>
                                <div className="spaces width-16 px-3">
                                    <LabelRequired
                                        label="Nhóm tài khoản thu tiền"
                                    />
                                    <Autocomplete
                                        options={[]}
                                    />
                                </div>
                                <div className="spaces width-16 px-3">
                                    <LabelRequired
                                        label="Nhóm báo cáo"
                                    />
                                    <Autocomplete
                                        options={[]}
                                    />
                                </div>
                                <div className="spaces width-18 px-3">
                                    <LabelRequired
                                        label="Luôn chọn ĐT này khi chỉ định"
                                    />
                                    <Autocomplete
                                        options={[]}
                                    />
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="spaces width-10 px-3">
                                    <LabelRequired
                                        label="Giá BHYT"
                                    />
                                    <TextValidator
                                        onChange={formik.handleChange}
                                        readOnly={isView}
                                        type="text"
                                        name="giaBHYT"
                                        className="px-1"
                                    />
                                </div>
                                <div className="spaces width-10 px-3">
                                    <LabelRequired
                                        label="Giá viện phí"
                                    />
                                    <TextValidator
                                        onChange={formik.handleChange}
                                        readOnly={isView}
                                        type="text"
                                        name="giaVienPhi"
                                        className="px-1"
                                    />
                                </div>
                                <div className="spaces width-7 px-3">
                                    <LabelRequired
                                        label="Giá yêu cầu"
                                    />
                                    <TextValidator
                                        onChange={formik.handleChange}
                                        readOnly={isView}
                                        type="text"
                                        name="giaYeuCau"
                                        className="px-1"
                                    />
                                </div>
                                <div className="spaces width-8 px-3">
                                    <LabelRequired
                                        label="Giá nước ngoài"
                                    />
                                    <TextValidator
                                        onChange={formik.handleChange}
                                        readOnly={isView}
                                        type="text"
                                        name="giaNuocNgoai"
                                        className="px-1"
                                    />
                                </div>
                                <div className="spaces width-7 px-3">
                                    <LabelRequired
                                        label="%TT ĐT"
                                    />
                                    <TextValidator
                                        onChange={formik.handleChange}
                                        readOnly={isView}
                                        type="text"
                                        name="ttDungTuyen"
                                        className="px-1"
                                    />
                                </div>
                                <div className="spaces width-8 px-3">
                                    <LabelRequired
                                        label="%TT TT"
                                    />
                                    <TextValidator
                                        onChange={formik.handleChange}
                                        readOnly={isView}
                                        type="text"
                                        name="ttTraiTuyen"
                                        className="px-1"
                                    />
                                </div>
                                <div className="spaces width-16 px-3">
                                    <LabelRequired
                                        label="Chặn chuyển đối tượng dịch vụ"
                                    />
                                    <TextValidator
                                        onChange={formik.handleChange}
                                        readOnly={isView}
                                        type="text"
                                        name="chanChuyenDTDV"
                                        className="px-1"
                                    />
                                </div>
                                <div className="spaces width-16 px-3">
                                    <LabelRequired
                                        label="Khoa được chỉ định"
                                    />
                                    <TextValidator
                                        onChange={formik.handleChange}
                                        readOnly={isView}
                                        type="text"
                                        name="khoaDuocChiDinh"
                                        className="px-1"
                                    />
                                </div>
                                <div className="spaces width-18 px-3">
                                    <LabelRequired
                                        label="Phòng được chỉ định"
                                    />
                                    <TextValidator
                                        onChange={formik.handleChange}
                                        readOnly={isView}
                                        type="text"
                                        name="phongDuocChiDinh"
                                        className="px-1"
                                    />
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="spaces width-10 px-3">
                                    <LabelRequired
                                        label="Giá mua"
                                    />
                                    <TextValidator
                                        onChange={formik.handleChange}
                                        readOnly={isView}
                                        type="text"
                                        name="giaMua"
                                        className="px-1"
                                    />
                                </div>
                                <div className="spaces width-10 px-3">
                                    <LabelRequired
                                        label="VAT(%) mua"
                                    />
                                    <TextValidator
                                        onChange={formik.handleChange}
                                        readOnly={isView}
                                        type="text"
                                        name="VATMua"
                                        className="px-1"
                                    />
                                </div>
                                <div className="spaces width-7 px-3">
                                    <LabelRequired
                                        label="Giá bán"
                                    />
                                    <TextValidator
                                        onChange={formik.handleChange}
                                        readOnly={isView}
                                        type="text"
                                        name="giaBan"
                                        className="px-1"
                                    />
                                </div>
                                <div className="spaces width-8 px-3">
                                    <LabelRequired
                                        label="VAT(%) bán"
                                    />
                                    <TextValidator
                                        onChange={formik.handleChange}
                                        readOnly={isView}
                                        type="text"
                                        name="VATBan"
                                        className="px-1"
                                    />
                                </div>
                                <div className="spaces width-8 px-3">
                                    <LabelRequired
                                        label="Cảnh báo HSD"
                                    />
                                    <TextValidator
                                        onChange={formik.handleChange}
                                        readOnly={isView}
                                        type="number"
                                        name="canhBaoHSD"
                                        className="px-1"
                                    />
                                </div>
                                <div className="spaces width-8 px-3">
                                    <LabelRequired
                                        label="Cảnh báo TK"
                                    />
                                    <TextValidator
                                        onChange={formik.handleChange}
                                        readOnly={isView}
                                        type="number"
                                        name="canhBaoTonKho"
                                        className="px-1"
                                    />
                                </div>
                                <div className="spaces width-8 px-3">
                                    <LabelRequired
                                        label="Cảnh báo KD"
                                    />
                                    <TextValidator
                                        onChange={formik.handleChange}
                                        readOnly={isView}
                                        type="number"
                                        name="canhBaoKhaDung"
                                        className="px-1"
                                    />
                                </div>
                                <div className="spaces width-14 px-3">
                                    <LabelRequired
                                        label="Cảnh báo SD sau số ngày"
                                    />
                                    <TextValidator
                                        onChange={formik.handleChange}
                                        readOnly={isView}
                                        type="text"
                                        name="chanChuyenDTDV"
                                        className="px-1"
                                    />
                                </div>
                                <div className="spaces width-17 px-3">
                                    <LabelRequired
                                        label="Nhóm hoa hồng người giới thiệu"
                                    />
                                    <Autocomplete
                                        options={[]}
                                    />
                                </div>
                                <div className="spaces width-10 px-3">
                                    <LabelRequired
                                        label="Mã kế toán"
                                    />
                                    <TextValidator
                                        onChange={formik.handleChange}
                                        readOnly={isView}
                                        type="text"
                                        name="maKeToan"
                                        className="px-1"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="my-2">
                            <h3 className="m-0">Thông tin lâm sàng - Khác</h3>
                            <div className="d-flex">
                                <div className="spaces width-20 px-3">
                                    <LabelRequired
                                        label="Nhóm quản lý"
                                    />
                                    <Autocomplete
                                        options={[]}
                                    />
                                </div>
                                <div className="spaces width-15 px-3">
                                    <LabelRequired
                                        label="Nhóm nghiên cứu"
                                    />
                                    <Autocomplete
                                        options={[]}
                                    />
                                </div>
                                <div className="spaces width-15 px-3">
                                    <LabelRequired
                                        label="Nhóm bệnh lý"
                                    />
                                    <Autocomplete
                                        options={[]}
                                    />
                                </div>
                                <div className="spaces width-16 px-3">
                                    <LabelRequired
                                        label="Nhóm phác đồ"
                                    />
                                    <Autocomplete
                                        options={[]}
                                    />
                                </div>
                                <div className="spaces width-16 px-3">
                                    <LabelRequired
                                        label="Nhóm ABC/VEN"
                                    />
                                    <Autocomplete
                                        options={[]}
                                    />
                                </div>
                                <div className="spaces width-18 px-3">
                                    <LabelRequired
                                        label="Nhóm dược lý"
                                    />
                                    <Autocomplete
                                        options={[]}
                                    />
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="spaces width-20 px-3">
                                    <LabelRequired
                                        label="Tiểu nhóm dược lý"
                                    />
                                    <Autocomplete
                                        options={[]}
                                    />
                                </div>
                                <div className="spaces width-15 px-3">
                                    <LabelRequired
                                        label="Nhóm quy chế"
                                    />
                                    <Autocomplete
                                        options={[]}
                                    />
                                </div>
                                <div className="spaces width-15 px-3">
                                    <LabelRequired
                                        label="Nhóm chia lợi nhuận"
                                    />
                                    <Autocomplete
                                        options={[]}
                                    />
                                </div>
                                <div className="spaces width-16 px-3">
                                    <LabelRequired
                                        label="Nhóm sắp xếp tờ điều trị"
                                    />
                                    <Autocomplete
                                        options={[]}
                                    />
                                </div>
                                <div className="spaces width-16 px-3">
                                    <LabelRequired
                                        label="Thuốc đi kèm"
                                    />
                                    <TextValidator
                                        onChange={formik.handleChange}
                                        readOnly={isView}
                                        type="text"
                                        name="thuocDiKem"
                                        className="px-1"
                                    />
                                </div>
                                <div className="spaces width-18 px-3">
                                    <LabelRequired
                                        label="Hoạt chất đi kèm"
                                    />
                                    <TextValidator
                                        onChange={formik.handleChange}
                                        readOnly={isView}
                                        type="text"
                                        name="hoatChatDiKem"
                                        className="px-1"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="my-2">
                            <div className='ms-2 d-flex flex-wrap'>
                                <div className="d-flex mb-2" >
                                    <FormCheck
                                        type='checkbox'
                                        label="Thuốc kháng sinh"
                                        className='d-flex align-items-end gap-2 max-content-width me-4 max-content-width'
                                    />
                                </div>

                                <div className="d-flex mb-2" >
                                    <FormCheck
                                        type='checkbox'
                                        label="Thuốc tân dược"
                                        className='d-flex align-items-end gap-2 max-content-width me-4 max-content-width'
                                    />
                                </div>

                                <div className="d-flex mb-2" >
                                    <FormCheck
                                        type='checkbox'
                                        label="Thuốc kê đơn"
                                        className='d-flex align-items-end gap-2 max-content-width me-4 max-content-width'
                                    />
                                </div>
                                <div className="d-flex mb-2" >
                                    <FormCheck
                                        type='checkbox'
                                        label="Thuốc kê đơn trẻ em"
                                        className='d-flex align-items-end gap-2 max-content-width me-4 max-content-width'
                                    />
                                </div>
                                <div className="d-flex mb-2" >
                                    <FormCheck
                                        type='checkbox'
                                        label="Vị thuốc y học cổ truyền"
                                        className='d-flex align-items-end gap-2 max-content-width me-4 max-content-width'
                                    />
                                </div>
                                <div className="d-flex mb-2" >
                                    <FormCheck
                                        type='checkbox'
                                        label="Chế phẩm y học cổ truyền"
                                        className='d-flex align-items-end gap-2 max-content-width me-4 max-content-width'
                                    />
                                </div>

                                <div className="d-flex mb-2" >
                                    <FormCheck
                                        type='checkbox'
                                        label="Đánh STT trong tờ điều trị"
                                        className='d-flex align-items-end gap-2 max-content-width me-4 max-content-width'
                                    />
                                </div>
                                <div className="d-flex mb-2" >
                                    <FormCheck
                                        type='checkbox'
                                        label="Thực phẩm chức năng"
                                        className='d-flex align-items-end gap-2 max-content-width me-4 max-content-width'
                                    />
                                </div>
                                <div className="d-flex mb-2" >
                                    <FormCheck
                                        type='checkbox'
                                        label="Thuốc tài trợ"
                                        className='d-flex align-items-end gap-2 max-content-width me-4 max-content-width'
                                    />
                                </div>
                                <div className="d-flex mb-2" >
                                    <FormCheck
                                        type='checkbox'
                                        label="Tự động làm tròn số lượng"
                                        className='d-flex align-items-end gap-2 max-content-width me-4 max-content-width'
                                    />
                                </div>
                                <div className="d-flex mb-2" >
                                    <FormCheck
                                        type='checkbox'
                                        label="Kê theo đơn vị liều dùng/thể tích"
                                        className='d-flex align-items-end gap-2 max-content-width me-4 max-content-width'
                                    />
                                </div>
                                <div className="d-flex mb-2" >
                                    <FormCheck
                                        type='checkbox'
                                        label="Tạo phiếu truyền dịch"
                                        className='d-flex align-items-end gap-2 max-content-width me-4 max-content-width'
                                    />
                                </div>
                                <div className="d-flex mb-2" >
                                    <FormCheck
                                        type='checkbox'
                                        label="Kê theo thể tích cho dịch truyền đi kèm"
                                        className='d-flex align-items-end gap-2 max-content-width me-4 max-content-width'
                                    />
                                </div>
                                <div className="d-flex mb-2" >
                                    <FormCheck
                                        type='checkbox'
                                        label="Không in hoạt chất, hàm lượng"
                                        className='d-flex align-items-end gap-2 max-content-width me-4 max-content-width'
                                    />
                                </div>
                                <div className="d-flex mb-2" >
                                    <FormCheck
                                        type='checkbox'
                                        label="Thuốc khí dung"
                                        className='d-flex align-items-end gap-2 max-content-width me-4 max-content-width'
                                    />
                                </div>
                                <div className="d-flex mb-2" >
                                    <FormCheck
                                        type='checkbox'
                                        label="Yêu cầu biên bản hội chẩn"
                                        className='d-flex align-items-end gap-2 max-content-width me-4 max-content-width'
                                    />
                                </div>
                                <div className="d-flex mb-2" >
                                    <FormCheck
                                        type='checkbox'
                                        label="Dừng nhập nhà cung cấp"
                                        className='d-flex align-items-end gap-2 max-content-width me-4 max-content-width'
                                    />
                                </div>
                                <div className="d-flex mb-2" >
                                    <FormCheck
                                        type='checkbox'
                                        label="YC trả vỏ thuốc"
                                        className='d-flex align-items-end gap-2 max-content-width me-4 max-content-width'
                                    />
                                </div>
                                <div className="d-flex mb-2" >
                                    <FormCheck
                                        type='checkbox'
                                        label="Khóa"
                                        className='d-flex align-items-end gap-2 max-content-width me-4 max-content-width'
                                    />
                                </div>
                                <div className="d-flex mb-2" >
                                    <FormCheck
                                        type='checkbox'
                                        label="Không in hoạt chất vào tên thuốc"
                                        className='d-flex align-items-end gap-2 max-content-width me-4 max-content-width'
                                    />
                                </div>
                                <div className="d-flex mb-2" >
                                    <FormCheck
                                        type='checkbox'
                                        label="Không in hàm lượng/nồng độ vào tên thuốc"
                                        className='d-flex align-items-end gap-2 max-content-width me-4 max-content-width'
                                    />
                                </div>
                                <div className="d-flex mb-2" >
                                    <FormCheck
                                        type='checkbox'
                                        label="Cho phép miễn giảm"
                                        className='d-flex align-items-end gap-2 max-content-width me-4 max-content-width'
                                    />
                                </div>
                                <div className="d-flex mb-2" >
                                    <FormCheck
                                        type='checkbox'
                                        label="Cho phép BS sửa tỉ lệ TT"
                                        className='d-flex align-items-end gap-2 max-content-width me-4 max-content-width'
                                    />
                                </div>
                                <div className="d-flex mb-2" >
                                    <FormCheck
                                        type='checkbox'
                                        label="Xuất XML theo QĐ5937"
                                        className='d-flex align-items-end gap-2 max-content-width me-4 max-content-width'
                                    />
                                </div>
                                <div className="d-flex mb-2" >
                                    <FormCheck
                                        type='checkbox'
                                        label="Cho phép kê số lượng bằng 0"
                                        className='d-flex align-items-end gap-2 max-content-width me-4 max-content-width'
                                    />
                                </div>
                            </div>
                        </div>
                    </Row>
                </Modal.Body>
                <Modal.Footer className="p-0 py-2 d-flex justify-content-center w-100 position-absolute bottom-0 bg-white">
                    <Button className="btn-navy-outlined mr-5 w-80px" onClick={handleCloseModal}>
                        Hủy
                    </Button>
                    {!isView && (
                        <Button className="btn-navy mr-5 w-80px" type="submit">
                            Lưu
                        </Button>
                    )}
                </Modal.Footer>
            </Form>
        </Modal>
    );
}
