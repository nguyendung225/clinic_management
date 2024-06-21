import { tab } from "../../appContext/AppContextModel";
import { formatDateAdvanceToString } from "../../utils/FormatUtils";
import DSNhaCungCap from "../components/tab-kho-le-danh-muc/danh-muc-nha-cung-cap/DSNhaCungCap";
import DSKho from "../components/tab-kho-le-danh-sach/ds-kho/DSKho";
import NhapKhoTuTruc from "../components/tab-kho-le-danh-sach/ds-nhap-kho/NhapKhoTuTruc";
import DSNhapKho from "../components/tab-kho-le-danh-sach/ds-nhap-kho/DSNhapKho";
import { IPhieuNhapKho } from "../models/NhapKhoModels";
import SoDo from "../components/tab-kho-le-danh-sach/so-do-kho/SoDo";
import SoDoTong from "../components/tab-kho-le-danh-sach/so-do-kho/SoDoTong";
import XuatKho from "../components/tab-kho-le-danh-sach/ds-xuat-kho/XuatKho";
import { IKho, xuatKhoMau, xuatKhoThuoc, xuatKhoVatTu } from "../models/QuanLyKhoModels";
import { iTabSoDo } from "../models/PhanHeKhoDuocModels";
import { IHangHoaMau, IHangSanXuat, ILoaiHangHoa, INguoiThamGia, IQuyetDinhTT, ITrangThaiNhapKho } from "../models/QuanLyKhoModels";
import { NhaCungCap } from '../models/NhaCungCapModel';

export const KEY_TAB_DS_QUAN_LY_KHO = {
  DS_KHO: "0",
  NHAP_KHO: "1",
  XUAT_KHO: "2",
  DIEU_CHUYEN_NOI_BO: "3",
  NHAP_TU_TRUC: "4",
}

export const DS_TAB_QUAN_LY_KHO = [
  {
    eventKey: KEY_TAB_DS_QUAN_LY_KHO.DS_KHO,
    title: "Danh sách kho",
    component: <DSKho eventKey={KEY_TAB_DS_QUAN_LY_KHO.DS_KHO} />
  },
  {
    eventKey: KEY_TAB_DS_QUAN_LY_KHO.NHAP_KHO,
    title: "Nhập kho",
    component: <DSNhapKho eventKey={KEY_TAB_DS_QUAN_LY_KHO.NHAP_KHO} />
  },
  {
    eventKey: KEY_TAB_DS_QUAN_LY_KHO.XUAT_KHO,
    title: "Xuất kho",
    component: <XuatKho />
  },
  {
    eventKey: KEY_TAB_DS_QUAN_LY_KHO.DIEU_CHUYEN_NOI_BO,
    title: "Xuất chuyển nội bộ",
    component: <DSNhaCungCap />
  },
  {
    eventKey: KEY_TAB_DS_QUAN_LY_KHO.NHAP_TU_TRUC,
    title: "Nhập bù cơ số tủ trực",
    component: <NhapKhoTuTruc eventKey={KEY_TAB_DS_QUAN_LY_KHO.DS_KHO} />
  },
];

export const DS_SO_DO_KHO: iTabSoDo[] = [
  {
    eventKey: "0",
    code: "soDoTong",
    title: "Sơ đồ tổng",
    component: (data: any) => <SoDoTong data={data} />
  },
]

export const INITIAL_DS_KHO: IKho = {
  name: "",
  code: "",
  address: "",
  isView: false,
  productTypes: [],
}

export const XUAT_KHO_DE = [
  { id: 1, name: "Trả hàng" },
  { id: 2, name: "Bán háng" },
  { id: 3, name: "Khoa" },
  { id: 4, name: "Phòng" },
  { id: 5, name: "Hủy" },
  { id: 6, name: "Thanh lý" },
]

export const LOAI_HANG_HOA = [
  { name: "Máu" },
  { name: "Vật tư - Hóa chất" },
  { name: "Thuốc" },
  { name: "Vắc xin" },
]

export const CODE_LOAI_HANG_HOA = {
  MAU: "Máu",
  VAT_TU_HOA_CHAT: "Vật tư - Hóa chất",
  THUOC: "Thuốc",
  VAC_XIN: "Vắc xin",
}

export const CODE_XUAT_KHO_DE = {
  TRA_HANG: "Trả hàng",
  BAN_HANG: "Bán háng",
  PHONG: "Phòng",
  HUY: "Hủy",
  THANH_LY: "Thanh lý",
}

export const LABEL = {
  NGUOI_NHAN: "Người nhận",
  NGUOI_MUA: "Người mua",
  PHONG_NHAN: "Phòng nhận"
}

export const STATUS = [
  { id: 0, code: "CHO_XAC_NHAN", name: "Chờ xác nhận" },
  { id: 1, code: "DA_XAC_NHAN", name: "Đã xác nhận" },
]

export const XUAT_KHO_DE_CONST = "wareHouseFor"

export const LIST_STATUS = [
  { id: 1, name: "Tạo mới" },
  { id: 2, name: "Chờ xác nhận" },
  { id: 3, name: "Đã xong" },
  { id: 4, name: "Từ chối" },
]

export const LIST_STATUS_KHO_TU_TRUC = [
  { code: "1", name: "Chờ xác nhận" },
  { code: "2", name: "Đã xác nhận" },
  { code: "3", name: "Đang nhập bù" },
  { code: "4", name: "Đã nhập bù" },
  { code: "5", name: "Từ chối" },
]

export const LIST_PRODUCT_TYPE = [
  { code: "1", name: "Thuốc", show: true },
  { code: "2", name: "Vật tư", show: true },
  { code: "3", name: "Máu", show: true },
];

export const COUNTING_UNIT = [
  { id: 1, name: "Hộp" },
  { id: 2, name: "Lọ" },
  { id: 3, name: "Chai" },
  { id: 4, name: "Viên" },
]

export const INIT_PHIEUNHAPKHO: IPhieuNhapKho =
{
  id: "",
  warehouseReceiptId: null,
  code: "",
  inputDate: "",
  status: { id: 0 },
  productTypeId: null,
  supplierId: null,
  consignment: "",
  contractName: "",
  contractNumber: "",
  sender: "",
  receiver: "",
  items: []
}

export const INIT_HANGHOA_VATTU =
{
  maHang: "",
  tenHang: "",
  donVi: "",
  namSX: "",
  hangSX: "",
  maQDTT: "",
  soLo: "",
  hanSuDung: "",
}

export const INIT_QDTT: IQuyetDinhTT =
{
  winningBidDecisionCode: "",
  numbersBidWinning: "",
  bidWinningDecisionGroup: "",
  yearOfWinBidDecision: null,
  bidQuantity: null,
}

export const qdttData: IQuyetDinhTT[] = [
  {
    winningBidDecisionCode: "QDTT001",
    numbersBidWinning: "GT001",
    bidWinningDecisionGroup: "Nhom A",
    yearOfWinBidDecision: 2023,
    bidQuantity: 10,
  }
];

export const hangHoaVatTuData = [
  {
    maHang: "HH001",
    name: "Vat tu A",
    donVi: "Cái",
    namSX: "2022",
    hangSX: "Hang SX A",
    maQDTT: "QDTT001",
    soLo: "LO001",
    hanSuDung: "2023-11-11"
  },
  {
    maHang: "HH002",
    name: "Vat tu B",
    donVi: "Hộp",
    namSX: "2021",
    hangSX: "Hang SX B",
    maQDTT: "QDTT002",
    soLo: "LO002",
    hanSuDung: "2023-11-11"
  },
  {
    maHang: "HH003",
    name: "Vat tu C",
    donVi: "Cái",
    namSX: "2023",
    hangSX: "Hang SX C",
    maQDTT: "QDTT003",
    soLo: "LO003",
    hanSuDung: "2023-11-11"
  },
];

export const hangHoaMauData: IHangHoaMau[] = [
  {
    maMau: "M001",
    tenMau: "Mau A",
    chePhamMau: "Che pham A",
    donVi: "ml",
    ngayLayMau: "2023-11-11",
    soQuanLy: "QL001",
    ngayNhap: "2023-11-11",
    theTich: 100,
  },
];

export const NhaCungCapData: NhaCungCap[] = [
  {
    maNhaCungCap: "123",
    tenNhaCungCap: "Nha cung cap A",
    dienThoai: "0329923456",
    diaChi: "467 Nguyễn trãi",
    ghiChu: "Không có gì",
  },
  {
    maNhaCungCap: "234",
    tenNhaCungCap: "Nha cung cap B",
    dienThoai: "0329923456",
    diaChi: "467 Nguyễn trãi",
    ghiChu: "Không có gì",
  },
  {
    maNhaCungCap: "456",
    tenNhaCungCap: "Nha cung cap C",
    dienThoai: "0329923456",
    diaChi: "467 Nguyễn trãi",
    ghiChu: "Không có gì",
  },
  {
    maNhaCungCap: "234",
    tenNhaCungCap: "Nha cung cap B",
    dienThoai: "0329923456",
    diaChi: "467 Nguyễn trãi",
    ghiChu: "Không có gì",
  },
  {
    maNhaCungCap: "456",
    tenNhaCungCap: "Nha cung cap C",
    dienThoai: "0329923456",
    diaChi: "467 Nguyễn trãi",
    ghiChu: "Không có gì",
  },
]

export const KhoThuocData: IKho[] = [
  {
    id: "123",
    code: "123",
    name: "Kho 1",
    address: "HN",
  },
  {
    id: "567",
    code: "567",
    name: "Kho 2",
    address: "HN",
  },
  {
    id: "678",
    code: "678",
    name: "Kho 3",
    address: "HN",
  },
]

export const nguoiGiaoData: INguoiThamGia[] = [
  { id: 1, name: "Nguyen Van A" },
  { id: 2, name: "Nguyen Van C" },
  { id: 3, name: "Nguyen Van E" }
]

export const nguoiNhanData: INguoiThamGia[] = [
  { id: 1, name: "Nguyen Thi B" },
  { id: 2, name: "Nguyen Thi D" },
  { id: 3, name: "Nguyen Thi F" }
]

export const hangSanXuatData: IHangSanXuat[] = [
  { id: 1, name: "Hãng A" },
  { id: 2, name: "Hãng B" },
  { id: 3, name: "Hãng C" }
]
export const xuatKhoMauData: xuatKhoMau[] = [
  {
    ma: "Mau001",
    ten: "Mau thu nghiem",
    donVi: "ml",
    hanSuDung: "01/01/2024",
    soDangKi: "DangKi001",
    soLuongTon: "100",
    soLo: "12345",
    soLuongXuat: "0",
    nongDo: "5%",
    theTich: "50ml",
    ngayLay: "15/10/2023",
    hamLuong: "10mg/ml",
  },
];
export const xuatKhoThuocData: xuatKhoThuoc[] = [
  {
    ma: "Thuoc001",
    ten: "Thuoc vien trang da",
    donVi: "viên",
    hanSuDung: "01/01/2023",
    soDangKi: "DangKi003",
    soLuongTon: "2000",
    soLo: "54321",
    soLuongXuat: "300",
    hoatChat: "Axit hyaluronic",
    hamLuong: "100mg",
    nongDo: "2%",
    hangSanXuat: "XYZ Pharmaceuticals",
    nuocSanXuat: "My",
    theTich: "50 viên",
    ngayLay: "20/09/2023",
  },
];
export const xuatKhoVatTuData: xuatKhoVatTu[] = [
  {
    ma: "VTHC001",
    ten: "Vat tu hoa chat",
    donVi: "kg",
    hanSuDung: "01/01/2025",
    soDangKi: "DangKi002",
    soLuongTon: "500",
    soLo: "67890",
    soLuongXuat: "100",
    hangSanXuat: "ABC Company",
    nuocSanXuat: "Viet Nam",
  },
];