import { IconCabinet, IconHome } from "../../component/IconSvg";
import TabBenhNhan from "../../phan-he-hanh-chinh/tabs/tab-benh-nhan/TabBenhNhan";
import TabCdhaTdcn from "../../phan-he-kham-benh/tabs/tab-cdha-tdcn/TabCdhaTdcn";
import TabChuyenKhoa from "../../phan-he-kham-benh/tabs/tab-chuyen-khoa/TabChuyenKhoa";
import TabCongKham from "../../phan-he-kham-benh/tabs/tab-cong-kham/TabCongKham";
import TabMau from "../../phan-he-kham-benh/tabs/tab-mau/TabMau";
import TabTaiLieu from "../../phan-he-kham-benh/tabs/tab-tai-lieu/TabTaiLieu";
import TabThuoc from "../../phan-he-kham-benh/tabs/tab-thuoc/TabThuoc";
import TabVatTu from "../../phan-he-kham-benh/tabs/tab-vat-tu/TabVatTu";
import TabXetNghiem from "../../phan-he-kham-benh/tabs/tab-xet-nghiem/TabXetNghiem";
import TabXuTri from "../../phan-he-kham-benh/tabs/tab-xu-tri/TabXuTri";
import TabDsMauVaChePhamMau from "../components/modal-chi-dinh-mau/tab-danh-sach-mau-va-che-pham-mau/TabDsMauVaChePhamMau";
import TabPhieuChiDinh from "../components/modal-chi-dinh-mau/tab-phieu-chi-dinh/TabPhieuChiDinh";
import TabDanhSachThuoc from "../components/modal-chi-dinh-thuc-pham-chuc-nang/tab-danh-sach-thuoc/TabDanhSachThuoc";
import TabBenhAn from "../components/modal-thong-tin-dieu-tri/ho-so-benh-an/TabBenhAn";
import TabTongKetBenhAn from "../components/modal-thong-tin-dieu-tri/ho-so-benh-an/TabTongKetBenhAn";
import TabTrang1 from "../components/modal-thong-tin-dieu-tri/ho-so-benh-an/TabTrang1";
import TabDichVuThuoc from "../components/modal-thong-tin-dieu-tri/phieu-dieu-tri/TabDichVuThuoc";
import TabKetQuaCLS from "../components/modal-thong-tin-dieu-tri/phieu-dieu-tri/TabKetQuaCLS";

export const danhSachTabDieuTri = [
  {
    eventKey: "0",
    title: "Bệnh nhân",
    component: <TabBenhNhan />
  },
  {
    eventKey: "1",
    title: "Công khám",
    component: <TabCongKham />
  },
  {
    eventKey: "2",
    title: "Xét nghiệm",
    component: <TabXetNghiem />
  },
  {
    eventKey: "3",
    title: "CĐHA",
    component: <TabCdhaTdcn />
  },
  {
    eventKey: "4",
    title: "Chuyên khoa",
    component: <TabChuyenKhoa />
  },
  {
    eventKey: "5",
    title: "Thuốc",
    component: <TabThuoc />
  },
  {
    eventKey: "6",
    title: "Vật tư",
    component: <TabVatTu />
  },
  {
    eventKey: "7",
    title: "Máu",
    component: <TabMau />
  },
  {
    eventKey: "8",
    title: "Xử trí",
    component: <TabXuTri />
  },
  {
    eventKey: "9",
    title: "Tài liệu",
    component: <TabTaiLieu />
  },
]

export const danhSachTabChiDinhMau = [
  {
    eventKey: "0",
    title: "Danh sách máu và chế phẩm máu",
    component: <TabDsMauVaChePhamMau />
  },
  {
    eventKey: "1",
    title: "Phiếu chỉ định",
    component: <TabPhieuChiDinh />
  },
]

export const danhSachTabChiDinhThucPhamChucNang = [
  {
    eventKey: "0",
    title: "Danh sách thuốc",
    component: <TabDanhSachThuoc />
  },
  {
    eventKey: "1",
    title: "Phiếu chỉ định",
    component: <TabPhieuChiDinh />
  },
]

export const TAB_ACTIVE ={
  BENH_AN: "1",
  TONG_KET_BENH_AN: "2",
}

export const danhSachTabHoSoBenhAn = [
  {
    eventKey: "0",
    title: "TRANG 1",
    component: <TabTrang1 />
  },
  {
    eventKey: "1",
    title: "A - BỆNH ÁN",
    component: <TabBenhAn />
  },
  {
    eventKey: "1",
    title: "B - TỔNG KẾT BỆNH ÁN",
    component: <TabTongKetBenhAn />
  },
]

export const treePhacDo = {
  code: "all",
  name: "Tất cả phác đồ",
  icon: <IconHome />,
  filter: [

  ]
}

export const dacDiemLienQuanBenh = [
  {
    stt: 1,
    kyHieu: "Dị ứng",
    thoiGian: ""
  },
  {
    stt: 2,
    kyHieu: "Ma túy",
    thoiGian: ""
  },
  {
    stt: 3,
    kyHieu: "Rượu bia",
    thoiGian: ""
  }
]

export const dacDiemLienQuanBenh2 = [
  {
    stt: 4,
    kyHieu: "Thuốc lá",
    thoiGian: ""
  },
  {
    stt: 5,
    kyHieu: "Thuốc lào",
    thoiGian: ""
  },
  {
    stt: 6,
    kyHieu: "Khác",
    thoiGian: ""
  }
]

export const danhSachTabPhieuDieuTri = [
  {
    eventKey: "0",
    title: "Dịch vụ, thuốc",
    component: <TabDichVuThuoc />
  },
  {
    eventKey: "1",
    title: "Kết quả CLS",
    component: <TabKetQuaCLS />
  },
]