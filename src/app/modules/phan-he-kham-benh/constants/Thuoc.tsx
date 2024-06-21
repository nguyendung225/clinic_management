import { IContextMenu } from "../../phan-he-tiep-nhan-thanh-toan/models/ModelTabDSDangKy";

export const contextMenuChiTietMauThuocCu: IContextMenu[] = [
  {
    title: "Thuốc",
  },
  {
    icon: <i className="fa-solid fa-retweet text-pri"></i>,
    code: "thayTheThuocCungHoatChat",
    name: "Thay thế thuốc cùng hoạt chất",
  },
  {
    icon: <i className="fa-solid fa-retweet text-pri"></i>,
    code: "thayTheThuocBatKy",
    name: "Thay thế thuốc bất kỳ",
  },
  {
    icon: <i className="bi bi-x-lg text-danger"></i>,
    code: "xoa",
    name: "Xóa",
  },
];

export const CODE_MENU_THAY_THE_THUOC = {
  THAY_THE_THUOC_CUNG_HOAT_CHAT: "thayTheThuocCungHoatChat",
  THAY_THE_THUOC_BAT_KY: "thayTheThuocBatKy",
  XOA: "xoa",
}

export const CODE_MENU_DANH_SACH_MAU_CHI_DINH_THUOC = {
  SUA_MAU_THUOC: "suaMauThuoc",
  SUA_NHOM_DON_MAU: "suaNhomDonMau",
  XOA_MAU_THUOC: "xoaMauThuoc",
}

export const contextMenuDanhSachMauChiDinhThuoc: IContextMenu[] = [
  {
    title: "Mẫu thuốc",
  },
  {
    code: "suaMauThuoc",
    name: "Sửa mẫu thuốc",
  },
  {
    code: "suaNhomDonMau",
    name: "Sửa nhóm đơn mẫu",
  },
  {
    icon: <i className="bi bi-x-lg text-danger"></i>,
    code: "xoaMauThuoc",
    name: "Xóa mẫu thuốc",
  },
];