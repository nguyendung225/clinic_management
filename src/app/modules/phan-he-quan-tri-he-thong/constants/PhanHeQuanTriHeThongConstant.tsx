import CauHinhDatHen from '../tab-cau-hinh-dat-hen/CauHinhDatHen';
import DanhMucCSKCBTab from '../tab-co-so-kham-chua-benh/TabCoSoKhamChuaBenh';
import DanhMucDichVuGiaTab from '../tab-dich-vu-gia/components/DanhMucDichVuGiaTab';
import DanhMucGiuongBenhTab from '../tab-giuong-benh/TabDanhMucGiuongBenh';
import DanhMucKhoaPhongTab from '../tab-khoa-phong/TabKhoaPhong';
import DanhMucNhanVienTab from '../tab-nhan-vien/TabNhanVien';
import DMTaiKhoanTab from '../tab-tai-khoan/TabTaiKhoan';
import DanhMucThietBiCLSTab from '../tab-thiet-bi-cls/TabThietBiCLS';
export const DS_Tab_MENU = [
  {
    eventKey: "0",
    title: "Tài khoản",
    component: <DMTaiKhoanTab />,
  },
  {
    eventKey: "1",
    title: "Khoa/Phòng",
    component: <DanhMucKhoaPhongTab />,
  },
  {
    eventKey: "2",
    title: "Nhân viên",
    component: <DanhMucNhanVienTab />,
  },
  {
    eventKey: "3",
    title: "Dịch vụ & Giá",
    component: <DanhMucDichVuGiaTab />,
  },
  {
    eventKey: "4",
    title: "Thiết bị CLS",
    component: <DanhMucThietBiCLSTab />,
  },
  {
    eventKey: "5",
    title: "Cơ sở KCB",
    component: <DanhMucCSKCBTab />,
  },
  {
    eventKey: "6",
    title: "Giường bệnh",
    component: <DanhMucGiuongBenhTab />,
  },
  {
    eventKey: "7",
    title: "Cấu hình đặt hẹn",
    component: <CauHinhDatHen/>
  },
];