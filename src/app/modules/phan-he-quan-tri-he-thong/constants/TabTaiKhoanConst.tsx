import DanhMucDichVuGiaTab from "../tab-dich-vu-gia/components/DanhMucDichVuGiaTab"
import DanhMucKhoaPhongTab from "../tab-khoa-phong/TabKhoaPhong"
import DanhMucNhanVienTab from "../tab-nhan-vien/TabNhanVien"
import {DM_CO_SO_KHAM_CHUA_BENH, DM_DICH_VU_GIA, DM_GIUONG_BENH, DM_KHOA_PHONG, DM_NHAN_VIEN, DM_TAI_KHOAN, DM_THIET_BI_CLS} from "../../utils/Constant"
import DanhMucThietBiCLSTab from "../tab-thiet-bi-cls/TabThietBiCLS"
import DanhMucTaiKhoanTab from "../tab-tai-khoan/TabTaiKhoan"
import DanhMucGiuongBenhTab from "../tab-giuong-benh/TabDanhMucGiuongBenh"
import DanhMucCSKCBTab from "../tab-co-so-kham-chua-benh/TabCoSoKhamChuaBenh"

export const DS_MENU = [
  {
    id: "0",
    title: "Tài khoản",
    key: DM_TAI_KHOAN,
    to: "/tab-tai-khoan",
  },
  {
    id: "0",
    title: "Khoa/Phòng",
    key: DM_KHOA_PHONG,
    to: "/tab-khoa-phong",
  },
  {
    id: "0",
    title: "Nhân viên",
    key: DM_NHAN_VIEN,
    to: "/tab-nhan-vien",
  },
  {
    id: "0",
    title: "Dịch vụ & Giá",
    key: DM_DICH_VU_GIA,
    to: "/dich-vu-va-gia",
  },
  {
    id: "0",
    title: "Thiết bị CLS",
    key: DM_THIET_BI_CLS,
    to: "/thiet-bi-can-lam-sang",
  },
  {
    id: "0",
    title: "Cơ sở khám chữa bệnh",
    key: DM_CO_SO_KHAM_CHUA_BENH,
    to: "/co-so-kham-chua-benh",
  },
  {
    id: "0",
    title: "Giường bệnh",
    key: DM_GIUONG_BENH,
    to: "/tab-giuong-benh",
  },
]

export const DS_TAB_MENU = [
  {
    eventKey: "0",
    title: "DS Tài khoản",
    component: <DanhMucTaiKhoanTab />,
  },
]

export const DS_TAB_MENU_KHOA_PHONG = [
  {
    eventKey: "0",
    title: "DS Khoa/Phòng",
    component: <DanhMucKhoaPhongTab />,
  },
]

export const DS_TAB_MENU_NHAN_VIEN = [
  {
    eventKey: "0",
    title: "DS Nhân viên",
    component: <DanhMucNhanVienTab />,
  },
]

export const DS_TAB_MENU_DV_GIA = [
  {
    eventKey: "0",
    title: "Dịch vụ & Giá",
    component: <DanhMucDichVuGiaTab />,
  },
]

export const DS_TAB_MENU_THIET_BI_CLS = [
  {
    eventKey: "0",
    title: "Thiết bị CLS",
    component: <DanhMucThietBiCLSTab />,
  },
]
export const DS_TAB_MENU_CS_KHAM_CHUA_BENH = [
  {
    eventKey: "0",
    title: "Cơ sở khám chữa bệnh",
    component: <DanhMucCSKCBTab />,
  },
]

export const DS_TAB_MENU_GIUONG_BENH = [
  {
    eventKey: "0",
    title: "DS giường bệnh",
    component: <DanhMucGiuongBenhTab />,
  },
]
