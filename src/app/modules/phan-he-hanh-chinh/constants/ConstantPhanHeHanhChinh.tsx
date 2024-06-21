import { IconCabinet, IconHome } from "../../component/IconSvg";
import TabCdhaTdcn from "../../phan-he-kham-benh/tabs/tab-cdha-tdcn/TabCdhaTdcn";
import TabChuyenKhoa from "../../phan-he-kham-benh/tabs/tab-chuyen-khoa/TabChuyenKhoa";
import TabThuoc from "../../phan-he-kham-benh/tabs/tab-thuoc/TabThuoc";
import TabVatTu from "../../phan-he-kham-benh/tabs/tab-vat-tu/TabVatTu";
import TabXetNghiem from "../../phan-he-kham-benh/tabs/tab-xet-nghiem/TabXetNghiem";
import TabXuTri from "../../phan-he-kham-benh/tabs/tab-xu-tri/TabXuTri";
import TabLichSu from "../../phan-he-tiep-nhan-thanh-toan/components/tab-tiep-nhan/tab-lich-su-kham/TabLichSu";
import TabXacThuc from "../../phan-he-tiep-nhan-thanh-toan/components/tab-tiep-nhan/tab-xac-thuc/TabXacThuc";
import { IContextMenu } from "../../phan-he-tiep-nhan-thanh-toan/models/ModelTabDSDangKy";
import TabBenhNhan from "../tabs/tab-benh-nhan/TabBenhNhan";

export const CONSTANTS_HANH_CHINH = {
  VAT_TU: "vatTu",
  THUOC: "thuoc",
  MAU: "mau",
  CHUYEN_PHONG: "chuyenPhong",
  BENH_AN: "benhAn",
  THANH_TOAN: "thanhToan"
}

export const danhSachTabHanhChinh = [
  {
    eventKey: "0",
    title: "Bệnh nhân",
    component: <TabBenhNhan />
  },
  {
    eventKey: "1",
    title: "Xét nghiệm",
    component: <TabXetNghiem />
  },
  {
    eventKey: "2",
    title: "CĐHA-TDCN",
    component: <TabCdhaTdcn />
  },
  {
    eventKey: "3",
    title: "Chuyên khoa",
    component: <TabChuyenKhoa />
  },
  {
    eventKey: "4",
    title: "Thuốc",
    component: <TabThuoc />
  },
  {
    eventKey: "5",
    title: "Vật tư",
    component: <TabVatTu />
  },
  {
    eventKey: "6",
    title: "Xử trí",
    component: <TabXuTri />
  },
]

export const danhSachTabLichSuKham = [
  {
    eventKey: "0",
    title: "Lịch sử khám",
    component: <TabLichSu />
  },
  {
    eventKey: "1",
    title: "TT Xác thực",
    component: <TabXacThuc />
  },
]



export const treeTimKiemBenhNhan = {
  code: "all",
  name: "Tất cả bệnh nhân",
  icon: <IconHome />,
  filter: [
    {
      code: "doTuoi",
      name: "Độ tuổi",
      icon: <IconCabinet />,
      filter: [
        { code: "duoi6", name: "Trẻ em dưới 6 tuổi" },
      ],
    },
    {
      code: "gioiTinh",
      name: "Giới tính",
      icon: <IconCabinet />,
      filter: [
        { code: "nam", name: "Nam" },
        { code: "nu", name: "Nữ" },
      ],
    },
    {
      code: "doiTuong",
      name: "Đối tượng",
      icon: <IconCabinet />,
      filter: [
        { code: "bhyt", name: "BHYT" },
        { code: "thuPhi", name: "Thu Phí" },
        { code: "yeuCau", name: "Yêu cầu" },
        { code: "mienPhi", name: "Miễn Phí" },
      ],
    },
    {
      code: "trangThai",
      name: "Trạng thái",
      icon: <IconCabinet />,
      filter: [
        { code: "choNhapVien", name: "Chờ nhập viện" },
        { code: "dangDieuTri", name: "Đang điều trị" },
      ],
    },
    {
      code: "khoaDieuTri",
      name: "Khoa điều trị",
      icon: <IconCabinet />,
      filter: [
        { code: "covid1", name: "Khoa covid-1" },
        { code: "covid2", name: "Khoa covid-2" },
      ],
    },
    {
      code: "benhNhanSapHetTien",
      name: "Bệnh nhân sắp hết tiền",
      icon: <IconCabinet />,
      filter: [
        { code: "dsBenhNhanSapHetTien", name: "Danh sách bệnh nhân" },
      ],
    },
    {
      code: "benhNhanConNoTien",
      name: "Bệnh nhân còn nợ tiền",
      icon: <IconCabinet />,
      filter: [
        { code: "dsBenhNhanConNoTien", name: "Danh sách bệnh nhân" },
      ],
    },
  ]
}

export const listContextDSBenhNhan: IContextMenu[] = [
  {
    title: "Bệnh án"
  },
  {
    code: "LSKB",
    name: "Lịch sử khám bệnh"
  },
  {
    code: "PKQBS",
    name: "Phiếu ký quỹ bổ sung"
  },
  {
    code: "XDSBN",
    name: "Xuất danh sách bệnh nhân"
  },
]

export const treeQuanLyThuoc = {
  code: "all",
  name: "Tất cả phiếu",
  icon: <IconHome />,
  filter: [
    {
      code: "loaiPhieu",
      name: "Loại Phiếu",
      icon: <IconCabinet />,
      filter: [
        { code: "yLenh", name: "Y lệnh" },
      ],
    },
  ]
}

export const listTrangThai = ["Chưa tiếp nhận vào khoa", "Đã tiếp nhận vào khoa"];
export const listTamUng = ["Chưa tạm ứng", "Đã tạm ứng"]