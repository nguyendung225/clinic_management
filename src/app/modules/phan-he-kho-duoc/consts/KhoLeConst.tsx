import DanhSachThuoc from "../components/tab-kho-le-danh-muc/danh-muc-thuoc/DanhSachThuoc";
import DSVatTuHoaChat from "../components/tab-kho-le-danh-muc/danh-muc-vat-tu-hoa-chat/DSVatTuHoaChat";
import DSNhaCungCap from "../components/tab-kho-le-danh-muc/danh-muc-nha-cung-cap/DSNhaCungCap";

export const KEY_COLLAPSE_TAB_KHO_LE = {
    DM_NCC: "0",
    DM_THUOC: "1",
    DM_VAT_TU_HOA_CHAT: "2",
    DM_NUOC_SAN_XUAT: "3",
    DM_HANG_SAN_XUAT: "4",
    DM_HOAT_CHAT: "5",
    DM_DUONG_DUNG: "6",
    DM_BIET_DUOC: "7",
    DS_HANG_HOA_TRONG_KHO: "8",
    DS_HANG_HOA_TAT_CA_CAC_KHO: "9",
    DS_KIEM_KE: "10",
    THE_KHO: "11",
    PHIEU_NHAP_KHO: "12",
    PHIEU_XUAT_KHO: "13",
    PHIEU_DIEU_CHUYEN: "14",
    BC_SUAT_NHAP_TON: "15",
    BC_TON: "16",
    BC_THUOC_NHAP: "17",
    BC_KIEM_NHAP_THUOC: "18",
}

export const DS_KHO_THUOC_KHO_LE = [
    { code: 0, name: "Kho thuốc ngoại trú" },
    { code: 1, name: "Kho thuốc nội trú" },
    { code: 2, name: "Kho thuốc BHYT" },
    { code: 3, name: "Kho thuốc tài trợ" },
]

export const DS_TAB_DANH_MUC_KHO_LE = [
    {
        eventKey: KEY_COLLAPSE_TAB_KHO_LE.DM_NCC,
        title: "Danh mục nhà cung cấp",
        component: <DSNhaCungCap />,
    },
    {
        eventKey: KEY_COLLAPSE_TAB_KHO_LE.DM_THUOC,
        title: "Danh mục thuốc",
        component: <DanhSachThuoc eventKey={KEY_COLLAPSE_TAB_KHO_LE.DM_THUOC} />,
    },
    {
        eventKey: KEY_COLLAPSE_TAB_KHO_LE.DM_VAT_TU_HOA_CHAT,
        title: "Danh mục vật tư,hóa chất",
        component: <DSVatTuHoaChat eventKey={KEY_COLLAPSE_TAB_KHO_LE.DM_VAT_TU_HOA_CHAT} />,
    },
    {
        eventKey: KEY_COLLAPSE_TAB_KHO_LE.DM_NUOC_SAN_XUAT,
        title: "Danh mục nước sản xuất",
        component:  <DSNhaCungCap />,
    },
    {
        eventKey: KEY_COLLAPSE_TAB_KHO_LE.DM_HANG_SAN_XUAT,
        title: "Danh mục hãng sản xuất",
        component: <DSNhaCungCap />,
    },
    {
        eventKey: KEY_COLLAPSE_TAB_KHO_LE.DM_HOAT_CHAT,
        title: "Danh mục hoạt chất",
        component: <DSNhaCungCap />,
    },
    {
        eventKey: KEY_COLLAPSE_TAB_KHO_LE.DM_BIET_DUOC,
        title: "Danh mục biệt dược",
        component: <DSNhaCungCap />,
    }
];

export const DS_TAB_DANH_SACH_KHO_LE = [
    {
        eventKey: KEY_COLLAPSE_TAB_KHO_LE.DS_HANG_HOA_TRONG_KHO,
        title: "DS hàng hoá trong kho",
        component: <DSNhaCungCap />,
    },
    {
        eventKey: KEY_COLLAPSE_TAB_KHO_LE.DS_HANG_HOA_TAT_CA_CAC_KHO,
        title: "DS hàng hoá tất cả các kho",
        component: <DSNhaCungCap />,
    },
    {
        eventKey: KEY_COLLAPSE_TAB_KHO_LE.DS_KIEM_KE,
        title: "DS kiểm kê",
        component: <DSNhaCungCap />,
    },
    {
        eventKey: KEY_COLLAPSE_TAB_KHO_LE.THE_KHO,
        title: "Thẻ kho",
        component: <DSNhaCungCap />,
    }
];

export const DS_TAB_PHIEU_KHO_KHO_LE = [
    {
        eventKey: KEY_COLLAPSE_TAB_KHO_LE.PHIEU_NHAP_KHO,
        title: "DS hàng hoá trong kho",
        component: <DSNhaCungCap />,
    },
    {
        eventKey: KEY_COLLAPSE_TAB_KHO_LE.PHIEU_XUAT_KHO,
        title: "DS hàng hoá tất cả các kho",
        component: <DSNhaCungCap />,
    },
    {
        eventKey: KEY_COLLAPSE_TAB_KHO_LE.PHIEU_DIEU_CHUYEN,
        title: "DS kiểm kê",
        component: <DSNhaCungCap />,
    }
]

export const DS_TAB_BAO_CAO_KHO_LE = [
    {
        eventKey: KEY_COLLAPSE_TAB_KHO_LE.BC_SUAT_NHAP_TON,
        title: "BC suất nhập tồn",
        component: <DSNhaCungCap />,
    },
    {
        eventKey: KEY_COLLAPSE_TAB_KHO_LE.BC_TON,
        title: "BC tồn",
        component: <DSNhaCungCap />,
    },
    {
        eventKey: KEY_COLLAPSE_TAB_KHO_LE.BC_THUOC_NHAP,
        title: "BC thuốc nhập",
        component: <DSNhaCungCap />,
    },
    {
        eventKey: KEY_COLLAPSE_TAB_KHO_LE.BC_KIEM_NHAP_THUOC,
        title: "BC kiểm nhập thuốc",
        component: <DSNhaCungCap />,
    }
]

export const DS_COLLAPSE_KHO_LE: any = [
    {
        title: "Danh mục",
        name: "danhMuc",
        collapseList: DS_TAB_DANH_MUC_KHO_LE
    },
    {
        title: "Danh sách",
        name: "danhSach",
        collapseList: DS_TAB_DANH_SACH_KHO_LE
    },
    {
        title: "Phiếu kho",
        name: "phieuKho",
        collapseList: DS_TAB_PHIEU_KHO_KHO_LE
    },
    {
        title: "Báo cáo",
        name: "baoCao",
        collapseList: DS_TAB_BAO_CAO_KHO_LE
    }
]