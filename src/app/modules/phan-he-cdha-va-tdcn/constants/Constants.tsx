import { IContextMenu } from "../../phan-he-tiep-nhan-thanh-toan/models/ModelTabDSDangKy";
import { templatePhieuChiDinh } from "../components/prints/TemplatePhieuChiDinh";
import TabBenhAnPTTT from "../components/tabs/TabBenhAnPTTT";
import TabEkipPTTT from "../components/tabs/TabEkipPTTT";
import TabThongTinPTTT from "../components/tabs/TabThongTinPTTT";

export const formatTrangThaiBenhNhanCDHA = (trangThai: number | undefined) => {
    switch (trangThai) {
        case trangThaiBenhNhanCDHA.choDenLuot.code:
            return (
                <i className="bi bi-circle-fill text-status-purple"></i>
            );
        case trangThaiBenhNhanCDHA.daCoKetLuan.code:
            return (
                <i className="bi bi-circle-fill text-status-orange"></i>
            );
        case trangThaiBenhNhanCDHA.bacSiDaKyKQ.code:
            return (
                <i className="bi bi-circle-fill text-status-blue"></i>
            );
        case trangThaiBenhNhanCDHA.daTraKetQua.code:
            return (
                <i className="bi bi-circle-fill text-status-ocean"></i>
            );
        case trangThaiBenhNhanCDHA.dangThucHien.code:
            return (
                <i className="bi bi-circle-fill text-status-green"></i>
            );
        default:
            break;
    }
};

export const dsTabPTTT = [
    {
        eventKey: "0",
        title: "Thông tin PTTT",
        component: <TabThongTinPTTT />,
    },
    {
        eventKey: "1",
        title: "Ê-Kip Phẫu thuật thủ thuật",
        component: <TabEkipPTTT />,
    },
    {
        eventKey: "2",
        title: "Bệnh Án",
        component: <TabBenhAnPTTT />,
    },
];

export const STATUS_DA_THANH_TOAN = "Đã thanh toán";

export const LIST_CODE_DIALOG_BANG_CDHA = {
    SUA_SO_LUONG: "suaSoLuong",
    NHAP_THONG_TIN_PTTT: "nhapThongTinPTTT",
    QUAN_LY_THUOC_VAT_TU: "quanLyThuocVatTu",
    CHI_DINH_THUOC_VAT_TU: "chiDinhThuocVatTu",
    HOAN_TRA_VAT_TU: "hoanTraVatTu",
    CHI_DINH_THUOC: "chiDinhThuoc",
    HOAN_TRA_THUOC: "hoanTraThuoc",
    KHONG_THUC_HIEN: "khongThucHien",
    MAY_THUC_HIEN_CLS: "mayThucHienCLS"
};

export const trangThaiBenhNhanCDHA = {
    choDenLuot: { code: 1, name: "Chờ đến lượt" },
    daCoKetLuan: { code: 2, name: "Đã có kết luận" },
    bacSiDaKyKQ: { code: 3, name: "BS đã ký KQ" },
    daTraKetQua: { code: 4, name: "Đã trả kết quả" },
    dangThucHien: { code: 5, name: "Đang thực hiện" },
};

export const listItemContextMenuCDHA: IContextMenu[] = [
    {
        code: "khongThucHien",
        name: "Không thực hiện",
    },
    {
        code: "suaSoLuong",
        name: "Sửa số lượng",
    },
    {
        code: "mayThucHienCLS",
        name: "Máy thực hiện CLS",
    },
    {
        code: "nhapThongTinPTTT",
        name: "Nhập thông tin PTTT",
    },
    {
        code: "thuocVatTuDiKem",
        name: "Thuốc, vật tư đi kèm",
        children: [
            { code: "quanLyThuocVatTu", name: "Quản lý thuốc, vật tư" },
            { code: "chiDinhThuocVatTu", name: "Chỉ định thuốc, vật tư" },
            { code: "hoanTraVatTu", name: "Hoàn trả vật tư" },
            { code: "chiDinhThuoc", name: "Chỉ định thuốc" },
            { code: "hoanTraThuoc", name: "Hoàn trả thuốc" },
        ],
    },
    {
        code: "thuocVatTuHaoPhi",
        name: "Thuốc, vật tư hao phí",
        children: [
            { code: "quanLyThuocVatTu", name: "Quản lý thuốc, vật tư" },
            { code: "chiDinhThuocVatTu", name: "Chỉ định thuốc, vật tư" },
            { code: "hoanTraVatTu", name: "Hoàn trả vật tư" },
            { code: "chiDinhThuoc", name: "Chỉ định thuốc" },
            { code: "hoanTraThuoc", name: "Hoàn trả thuốc" },
        ],
    },
    {
        code: "capNhatEkip",
        name: "Cập nhật Ê-kíp",
    },
]
export const LIST_PHIEU_IN = {
    PHIEU_CHI_DINH: {
        key: "phieuchidinh",
        title: "Phiếu chỉ định",
        template: templatePhieuChiDinh,
    },
}
