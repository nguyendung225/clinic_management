import moment from "moment";
import { KEY_DS_TAB_THANH_TOAN } from "../../utils/Constant";
import { NoiTruCapCuu } from "../components/tab-thanh-toan/NoiTruCapCuu";
import { IThanhToanMenu, fillterDSBenhNhan, thanhToan } from "../models/ThanhToanModel";
import { ChiTietDichVuInterface } from "../models/ChiTietDichVuModel";
import { NgoaiTru } from "../components/tab-thanh-toan/ThanhToanNgoaiTru";
import { IContextMenu } from "../models/ModelTabDSDangKy";
import { CODE_HINH_THUC } from "./TabThanhToanConstant";
import { CODE_LIST_CONTEXT_VAT_TU } from "../../phan-he-kho-vat-tu/const/constants";

export const danhsachTabThanhToan = [
  {
    eventKey: "0",
    title: "Ngoại trú",
    component: <NgoaiTru />,
  },
  {
    eventKey: "1",
    title: "Nội trú/Cấp cứu",
    component: <NoiTruCapCuu />,
  },
];

export const danhSachMenuThanhToan = [
  {
    id: "0",
    title: "Thanh toán",
    to: "/fee-and-insurance",
    children: [
      {
        id: "0",
        key: KEY_DS_TAB_THANH_TOAN,
        title: "Ngoại trú",
        to: "/fee-and-insurance",
        fontIcon: "bi-file-earmark-person",
      },
      {
        id: "1",
        key: KEY_DS_TAB_THANH_TOAN,
        title: "Nội trú/Cấp cứu",
        to: "/fee-and-insurance",
        fontIcon: "bi-list-ul",
      },
    ],
  },
];

export const loaiPhieuOptions = [
  { value: 1, name: "Biên lai" },
  { value: 2, name: "Tạm ứng" },
  { value: 3, name: "Hoàn ứng" },
];

export const voucherTypeConst = {
  bienLai: { value: 1, name: "Biên lai" },
  tamUng: { value: 2, name: "Tạm ứng" },
  hoanUng: { value: 3, name: "Hoàn ứng" },
  tatCa: { value: 0, name: "Tất cả" },
};

export const phuongThucTTOptions = [
  { value: "tienMat", name: "Tiền mặt" },
  { value: "chuyenKhoan", name: "Chuyển khoản" },
];

export const doiTuongOptions = [
  { value: "all", name: "Tất cả" },
  { value: "vienPhi", name: "Viện phí" },
  { value: "BHYT", name: "BHYT" },
];

export const trangThaiOptions = [
  { value: "all", name: "Tất cả" },
  { value: "choThanhToan", name: "Chờ thanh toán" },
  { value: "daThanhToan", name: "Đã thanh toán" },
];
export const statusOptions = {
  chuaThanhToan: { value: 1, name: "Chưa thanh toán" },
  daThanhToan: { value: 2, name: "Đã thanh toán" },
  tamUng: { value: 3, name: "Tạm ứng" },
};
export const loaiPhieu = [
  { value: 0, name: "Tất cả" },
  { value: 1, name: "Biên lai" },
  { value: 2, name: "Tạm ứng" },
  { value: 3, name: "Hoàn ứng" },
];

export const optionsNgay = [
  { value: 0, name: "Tất cả" },
  { value: 1, name: "Ngày vào viện" },
  { value: 2, name: "Ngày ra viện" },
  { value: 3, name: "Ngày thanh toán" },
];


export const initialValuesThanhToan: thanhToan = {
  advanceMoney: 0,
  benhNhanId: "",
  caseId: "",
  createDate: moment().format("YYYY-MM-DDThh:mm:ss"),
  orders: [
    {
      conceptCode: "",
      conceptId: 0,
      conceptName: "",
      departmentId: "",
      departmentName: "",
      id: "",
      orderTypeId: 0,
      price: 0,
      promotionPercent: 0,
      promotionPrice: 0,
      quantity: 0,
      roomId: "",
      roomName: "",
      totalPrice: 0,
    },
  ],
  id: "",
  locationId: "",
  modifiedBy: "",
  modifyDate: "",
  payMoney: 0,
  paymentMethod: "",
  promotionPercent: 0,
  promotionPrice: 0,
  statusId: "",
  tenantId: "",
  totalMoney: 0,
  voucherType: null,
  tongTienDichVu: 0,
  tenBenhNhan: "",
  mpi: "",
  danhSachPhieuThanhToan: [],
  description: "",
  tienHoanUng: 0,
};

export const initialValuesTableChiTietDichVu: ChiTietDichVuInterface = {
  id: "",
  conceptName: "",
  quantity: 0,
  price: 0,
  totalPrice: 0,
  // BHYTTra: 0,
  promotionPercent: 0,
  promotionPrice: 0,
  statusName: 0,
  statusId: 0,
  selected: false,
};

export const ThanhToanMenu: IThanhToanMenu[] = [
  {
    groupName: "",
    listItem: [
      {
        code: "CSLPT",
        name: "Chốt số liệu phiếu thu"
      }
    ]

  },
  {
    groupName: "Quản lý",
    listItem: [
      {
        code: "DSPT",
        name: "Danh sách phiếu thu"
      },
      {
        code: "DSSTT",
        name: "Danh sách sổ thu tiền"
      },
      {
        code: "CSTT",
        name: "Chọn sổ thu tiền"
      },
      {
        code: "LKP",
        name: "Lọc khoa phòng"
      },
      {
        code: "MHC",
        name: "Màn hình chờ"
      },
      {
        code: "DSPT",
        name: "Cấu hình phát loa"
      },
    ]

  },
  {
    groupName: "Hóa đơn điện tử",
    listItem: [
      {
        code: "HDDT",
        name: "Danh sách phiếu thu (Hóa đơn điện tử)"
      },
    ]
  }
]

export const CODE_LIST_BAO_CAO = {
  CHON_SO_THU_TIEN: "CSTT",
  XUAT_XXML: "XXML",
  PHIEU: {
    KHAM_CHUA_BENH_6556: "KCB-6556",
    KHAM_CHUA_BENH_6556_BHYT: "KCB-6556-BHYT",
    KHAM_CHUA_BENH_6556_VIEN_PHI: "KCB-6556-VIEN-PHI",
    KHAM_CHUA_BENH_6556_VP_CHUA_THU_TIEN: "KCB-6556-VP-CHUA-THU-TIEN",
    THU_TIEN_CHI_TIET: "TTCT",
    VIEN_PHI_NGOAI_TRU: "VPNT",
    BHYT_NGOAI_TRU: "BHYT-NT",
    CONG_KHAI_CHI_PHI: "CKCP",
    BANG_KE_CHI_PHI_DICH_VU: "BKCPDV",
    BANG_THANH_TOAN_THUOC_VAT_TU_TRONG_MO: "BTTTVTTM"
  },
  BAO_CAO: {
    HOAT_DONG_TAI_CHINH: "HDTC",
    DOANH_THU_THEO_PHIEU_THU: "DTT-PT",
    DOANH_THU_THEO_DICH_VU_CHI_TIET: "DTT-DVCT",
    DOANH_THU_THEO_DICH_VU_KY_THUAT: "DTT-DVKT",
    THU_TIEN_DICH_VU: "TTDV",
    SU_DUNG_HOA_DON_DIEN_TU: "SD-HDDT",
    DS_MIEN_GIAM: "DS-MG",
    DS_PHIEU_THU_TIEN: "DS-PTT",
    DS_PHIEU_TAM_UNG: "DS-PTU",
    DS_PHIEU_HOAN_UNG: "DS-PHU",
    DS_PHIEU_HUY: "DS-PH",
    NOP_TIEN_VE_QUY: "NTVQ",
    DS_PHOI_THANH_TOAN: "DS-PHOI_TT",
    LO_LAI_THU_THUAT: "LLTT",
    LO_LAI_PHAU_THUAT: "LLPT",
    PHU_CAP_THU_THUAT: "PCTT",
    PHU_CAP_PHAU_THUAT: "PCPT",
    DOANH_THU_TONG_HOP: "DTTH",
    THU_TIEN_DICH_VU_VIEN_PHI: "TTDV-VP"
  }
}

export const CODE_LIST_REPORT_TIME = [
  CODE_LIST_BAO_CAO.XUAT_XXML,
  CODE_LIST_BAO_CAO.BAO_CAO.DOANH_THU_THEO_PHIEU_THU,
  CODE_LIST_BAO_CAO.BAO_CAO.THU_TIEN_DICH_VU,
  CODE_LIST_BAO_CAO.BAO_CAO.DOANH_THU_THEO_DICH_VU_KY_THUAT,
  CODE_LIST_BAO_CAO.BAO_CAO.DS_MIEN_GIAM,
  CODE_LIST_BAO_CAO.BAO_CAO.DS_PHIEU_THU_TIEN,
  CODE_LIST_BAO_CAO.BAO_CAO.DS_PHIEU_TAM_UNG,
  CODE_LIST_BAO_CAO.BAO_CAO.NOP_TIEN_VE_QUY,
  CODE_LIST_BAO_CAO.BAO_CAO.DS_PHIEU_HOAN_UNG,
  CODE_LIST_BAO_CAO.BAO_CAO.DS_PHIEU_HUY,
  CODE_LIST_BAO_CAO.BAO_CAO.DS_PHOI_THANH_TOAN,
  CODE_LIST_BAO_CAO.BAO_CAO.LO_LAI_THU_THUAT,
  CODE_LIST_BAO_CAO.BAO_CAO.LO_LAI_PHAU_THUAT,
  CODE_LIST_BAO_CAO.BAO_CAO.PHU_CAP_THU_THUAT,
  CODE_LIST_BAO_CAO.BAO_CAO.PHU_CAP_PHAU_THUAT
];

export const CODE_LIST_OPTION = [
  CODE_LIST_BAO_CAO.XUAT_XXML,
  CODE_LIST_BAO_CAO.BAO_CAO.DOANH_THU_THEO_PHIEU_THU,
  CODE_LIST_BAO_CAO.BAO_CAO.DOANH_THU_THEO_DICH_VU_CHI_TIET,
  CODE_LIST_BAO_CAO.BAO_CAO.THU_TIEN_DICH_VU,
  CODE_LIST_BAO_CAO.BAO_CAO.DOANH_THU_THEO_DICH_VU_KY_THUAT,
  CODE_LIST_BAO_CAO.BAO_CAO.SU_DUNG_HOA_DON_DIEN_TU,
  CODE_LIST_BAO_CAO.BAO_CAO.DS_MIEN_GIAM,
  CODE_LIST_BAO_CAO.BAO_CAO.DS_PHIEU_THU_TIEN,
  CODE_LIST_BAO_CAO.BAO_CAO.DS_PHIEU_TAM_UNG,
  CODE_LIST_BAO_CAO.BAO_CAO.NOP_TIEN_VE_QUY,
  CODE_LIST_BAO_CAO.BAO_CAO.DS_PHIEU_HOAN_UNG,
  CODE_LIST_BAO_CAO.BAO_CAO.DS_PHIEU_HUY,
  CODE_LIST_BAO_CAO.BAO_CAO.DS_PHOI_THANH_TOAN,
  CODE_LIST_BAO_CAO.BAO_CAO.LO_LAI_THU_THUAT,
  CODE_LIST_BAO_CAO.BAO_CAO.LO_LAI_PHAU_THUAT,
  CODE_LIST_BAO_CAO.BAO_CAO.PHU_CAP_THU_THUAT,
  CODE_LIST_BAO_CAO.BAO_CAO.PHU_CAP_PHAU_THUAT,
  CODE_LIST_BAO_CAO.BAO_CAO.DOANH_THU_TONG_HOP,
  CODE_LIST_BAO_CAO.BAO_CAO.THU_TIEN_DICH_VU_VIEN_PHI,
  CODE_LIST_CONTEXT_VAT_TU.THE_KHO
];

export const CODE_LIST_OPTION_DOANH_THU_THEO_PHIEU_THU = [
  CODE_LIST_BAO_CAO.BAO_CAO.DOANH_THU_THEO_PHIEU_THU,
  CODE_LIST_BAO_CAO.BAO_CAO.THU_TIEN_DICH_VU,
  CODE_LIST_BAO_CAO.BAO_CAO.DS_MIEN_GIAM,
  CODE_LIST_BAO_CAO.BAO_CAO.DS_PHIEU_THU_TIEN,
  CODE_LIST_BAO_CAO.BAO_CAO.DS_PHIEU_TAM_UNG,
  CODE_LIST_BAO_CAO.BAO_CAO.NOP_TIEN_VE_QUY,
  CODE_LIST_BAO_CAO.BAO_CAO.DS_PHIEU_HOAN_UNG,
  CODE_LIST_BAO_CAO.BAO_CAO.DS_PHIEU_HUY
];

export const CODE_LIST_TIEP_TUC_LAY_BAO_CAO = [
  CODE_LIST_BAO_CAO.BAO_CAO.DOANH_THU_THEO_PHIEU_THU,
  CODE_LIST_BAO_CAO.BAO_CAO.DOANH_THU_THEO_DICH_VU_CHI_TIET,
  CODE_LIST_BAO_CAO.BAO_CAO.THU_TIEN_DICH_VU,
  CODE_LIST_BAO_CAO.BAO_CAO.DS_MIEN_GIAM,
  CODE_LIST_BAO_CAO.BAO_CAO.DS_PHIEU_THU_TIEN,
  CODE_LIST_BAO_CAO.BAO_CAO.DS_PHIEU_TAM_UNG,
  CODE_LIST_BAO_CAO.BAO_CAO.NOP_TIEN_VE_QUY,
  CODE_LIST_BAO_CAO.BAO_CAO.DS_PHIEU_HOAN_UNG,
  CODE_LIST_BAO_CAO.BAO_CAO.DS_PHIEU_HUY,
  CODE_LIST_BAO_CAO.BAO_CAO.DS_PHOI_THANH_TOAN
];

export const CODE_LIST_LO_LAI_PTTT = [CODE_LIST_BAO_CAO.BAO_CAO.LO_LAI_THU_THUAT, CODE_LIST_BAO_CAO.BAO_CAO.LO_LAI_PHAU_THUAT]
export const CODE_LIST_PHU_CAP_PTTT = [CODE_LIST_BAO_CAO.BAO_CAO.PHU_CAP_THU_THUAT, CODE_LIST_BAO_CAO.BAO_CAO.PHU_CAP_PHAU_THUAT]
export const CODE_LIST_HUONG_DAN_SU_DUNG = [CODE_LIST_BAO_CAO.BAO_CAO.DOANH_THU_TONG_HOP, CODE_LIST_BAO_CAO.BAO_CAO.THU_TIEN_DICH_VU_VIEN_PHI]

export const CODE_LIST_PATIENT = [CODE_LIST_BAO_CAO.XUAT_XXML];

export const LIST_BAO_CAO: IThanhToanMenu[] = [
  {
    groupName: "Xuất XML",
    listItem: [
      {
        code: CODE_LIST_BAO_CAO.XUAT_XXML,
        name: "Xuất XML 4210 (Tất cả bệnh nhân)"
      },
    ]
  },
  {
    groupName: "Phiếu",
    listItem: [
      {
        code: CODE_LIST_BAO_CAO.PHIEU.KHAM_CHUA_BENH_6556,
        name: "Bảng kê khám bệnh, chữa bệnh (6556)"
      },
      {
        code: CODE_LIST_BAO_CAO.PHIEU.KHAM_CHUA_BENH_6556_BHYT,
        name: "Bảng kê khám bệnh, chữa bệnh (6556 - BHYT)"
      },
      {
        code: CODE_LIST_BAO_CAO.PHIEU.KHAM_CHUA_BENH_6556_VIEN_PHI,
        name: "Bảng kê khám bệnh, chữa bệnh (6556 - Viện phí)"
      },
      {
        code: CODE_LIST_BAO_CAO.PHIEU.KHAM_CHUA_BENH_6556_VP_CHUA_THU_TIEN,
        name: "Bảng kê khám bệnh, chữa bệnh (6556 - Viện phí - Chưa thu tiền)"
      },
      {
        code: CODE_LIST_BAO_CAO.PHIEU.THU_TIEN_CHI_TIET,
        name: "Phiếu thu tiền chi tiết"
      },
      {
        code: CODE_LIST_BAO_CAO.PHIEU.VIEN_PHI_NGOAI_TRU,
        name: "Phiếu thanh toán viện phí ngoại trú"
      },
      {
        code: CODE_LIST_BAO_CAO.PHIEU.BHYT_NGOAI_TRU,
        name: "Phiếu thanh toán BHYT ngoại trú"
      },
      {
        code: CODE_LIST_BAO_CAO.PHIEU.CONG_KHAI_CHI_PHI,
        name: "Phiếu công khai chi phí khám chữa bệnh"
      },
    ]
  },
  {
    groupName: "Báo cáo",
    listItem: [
      {
        code: CODE_LIST_BAO_CAO.BAO_CAO.HOAT_DONG_TAI_CHINH,
        name: "Báo cáo hoạt động tài chính"
      },
      {
        code: CODE_LIST_BAO_CAO.BAO_CAO.DOANH_THU_THEO_PHIEU_THU,
        name: "Báo cáo doanh thu theo phiếu thu"
      },
      {
        code: CODE_LIST_BAO_CAO.BAO_CAO.DOANH_THU_THEO_DICH_VU_CHI_TIET,
        name: "Báo cáo doanh thu theo dịch vụ chi tiết"
      },
      {
        code: CODE_LIST_BAO_CAO.BAO_CAO.THU_TIEN_DICH_VU,
        name: "Báo cáo thu tiền dịch vụ"
      },
      {
        code: CODE_LIST_BAO_CAO.BAO_CAO.DOANH_THU_THEO_DICH_VU_KY_THUAT,
        name: "Báo cáo doanh thu theo dịch vụ kỹ thuật"
      },
      {
        code: CODE_LIST_BAO_CAO.BAO_CAO.SU_DUNG_HOA_DON_DIEN_TU,
        name: "Báo cáo sử dụng hóa đơn điện tử"
      },
      {
        code: CODE_LIST_BAO_CAO.BAO_CAO.DS_MIEN_GIAM,
        name: "Tài chính - Danh sách miễn giảm"
      },
      {
        code: CODE_LIST_BAO_CAO.BAO_CAO.DS_PHIEU_THU_TIEN,
        name: "Tài chính - Danh sách phiếu thu tiền"
      },
      {
        code: CODE_LIST_BAO_CAO.BAO_CAO.DS_PHIEU_TAM_UNG,
        name: "Tài chính - Danh sách phiếu tạm ứng"
      },
      {
        code: CODE_LIST_BAO_CAO.BAO_CAO.NOP_TIEN_VE_QUY,
        name: "Tài chính - Báo cáo nộp tiền về quỹ"
      },
      {
        code: CODE_LIST_BAO_CAO.BAO_CAO.DS_PHIEU_HOAN_UNG,
        name: "Tài chính - Danh sách phiếu hoàn ứng"
      },
      {
        code: CODE_LIST_BAO_CAO.BAO_CAO.DS_PHIEU_HUY,
        name: "Tài chính - Danh sách phiếu hủy"
      },
      {
        code: CODE_LIST_BAO_CAO.BAO_CAO.DS_PHOI_THANH_TOAN,
        name: "Báo cáo danh sách phơi thanh toán"
      },
      {
        code: CODE_LIST_BAO_CAO.BAO_CAO.LO_LAI_THU_THUAT,
        name: "Tài chính - Báo cáo lỗ lãi thủ thuật"
      },
      {
        code: CODE_LIST_BAO_CAO.BAO_CAO.LO_LAI_PHAU_THUAT,
        name: "Tài chính - Báo cáo lỗ lãi phẫu thuật"
      },
      {
        code: CODE_LIST_BAO_CAO.BAO_CAO.PHU_CAP_THU_THUAT,
        name: "Tài chính - Báo cáo phụ cấp thủ thuật"
      },
      {
        code: CODE_LIST_BAO_CAO.BAO_CAO.PHU_CAP_PHAU_THUAT,
        name: "Tài chính - Báo cáo phụ cấp phẫu thuật"
      },
      {
        code: CODE_LIST_BAO_CAO.BAO_CAO.DOANH_THU_TONG_HOP,
        name: "T ckt_002_Doanh thu tổng hợp (Khoa chỉ định)"
      },
      {
        code: CODE_LIST_BAO_CAO.BAO_CAO.THU_TIEN_DICH_VU_VIEN_PHI,
        name: "Vandinh_Báo cáo thu tiền dịch vụ - Viện phí"
      },
    ]
  }
]

export const KEY_SEARCH = {
  SDT: "soDienThoaiSearch",
  CCCD: "soCCCD",
}

export const CHUYEN_PHIEU ={
  NOI_TRU: "NOI_TRU",
  NGOAI_TRU: "NGOAI_TRU",
  DOT_TIEP_THEO: "DOT_TIEP_THEO",
  CHINH_SUA_THOI_GIAN: "CHINH_SUA_THOI_GIAN",
}

export const listNguoiTao = [
  { code: "QTHT", name: "Quản trị hệ thống" },
];

export const listLoaiSo = [
  { code: "TH", name: "Tổng hợp" },
  { code: "TT", name: "Thu tiền" },
  { code: "TU-HU", name: "Tạm ứng, hoàn ứng" },
  { code: "TU", name: "Tạm ứng" },
  { code: "HU", name: "Hoàn ứng" },
  { code: "MG", name: "Miễn giảm" },
];

export const CODE_ITEM_MENU = {
  IN_PHIEU_KHAM_BENH: "IPKB",
  THAY_DOI_PHONG_KHAM: "TDPK",
  HUY_DANG_KY_KHAM: "HDKK",
  SUA_SO_LUONG: "SSL",
  SUA_GIA: "SG",
  BO_DICH_VU: "BDV",
  LICH_SU_KHAM_BENH: "LSKB",
  PHIEU_QUY_BO_SUNG: "PQBS",
  XUAT_DANH_SACH_BENH_NHAN: "XDSBN"
}

export const contextMenuDSDangKy: IContextMenu[] = [
  {
    title: "Bệnh án",
  },
  {
    icon: <i className="fa-solid fa-print"></i>,
    code: CODE_ITEM_MENU.IN_PHIEU_KHAM_BENH,
    name: "In phiếu khám bệnh",
  },
  {
    icon: <i className="fa-solid fa-repeat text-primary"></i>,
    code: CODE_ITEM_MENU.THAY_DOI_PHONG_KHAM,
    name: "Thay đổi phòng khám"
  },
  {
    icon: <i className="fa-solid fa-x text-danger"></i>,
    code: CODE_ITEM_MENU.HUY_DANG_KY_KHAM,
    name: "Hủy đăng ký khám"
  },
]

export const contextMenuDSThanhToan: IContextMenu[] = [
  {
    title: "Dịch vụ",
  },
  {
    code: "MG",
    name: "Miễn giảm",
    children: [
      {
        code: "0",
        name: "0%",
      },
      {
        code: "5",
        name: "5%",
      },
      {
        code: "10",
        name: "10%",
      },
      {
        code: "15",
        name: "15%",
      },
      {
        code: "20",
        name: "20%",
      },
      {
        code: "30",
        name: "30%",
      },
      {
        code: "50",
        name: "50%",
      },
      {
        code: "100",
        name: "100%",
      },
      {
        code: "NMG",
        name: "Nhập miễn giảm",
      },
    ]
  },
  {
    code: "SSL",
    name: "Sửa số lượng"
  },
  {
    code: "SG",
    name: "Sửa giá dịch vụ"
  },
  {
    code: "BDV",
    name: "Bỏ dịch vụ không làm"
  },
  {
    code: "XDV",
    name: "Xóa dịch vụ"
  },
]

export const KEY_TAB = {
  TT_PHONG_KHAM: "2"
}

export const contextMenuLichSuKham: IContextMenu[] = [
  {
    title: "Bệnh án",
  },
  {
    code: CHUYEN_PHIEU.CHINH_SUA_THOI_GIAN,
    name: "Chỉnh sửa thời gian",
  },
  {
    code: CHUYEN_PHIEU.NOI_TRU,
    name: "Chuyển sang viện phí nội trú"
  },
  {
    code: CHUYEN_PHIEU.NGOAI_TRU,
    name: "Chuyển sang viện phí ngoại trú"
  },
  {
    code: CHUYEN_PHIEU.DOT_TIEP_THEO,
    name: "Chuyển các phiếu bệnh án sang đợt tiếp theo"
  },
]

export const contextMenuDsPhieu: IContextMenu[] = [
  {
    name: "Sửa hình thức thanh toán",
    icon: <i className="bi bi-pencil-square"></i>,
    children: [
      {
        code: CODE_HINH_THUC.TIEN_MAT,
        name: "Tiền mặt",
      },
      {
        code: CODE_HINH_THUC.CHUYEN_KHOAN,
        name: "Chuyển khoản",
      },
    ]
  },
  {
    icon: <i className="fa-solid fa-check text-danger"></i>,
    code: CODE_HINH_THUC.TAT_TOAN,
    name: "Phiếu thu tất toán",
  }
]

export const treeModalDSBenhNhan = {
  name: "Tất cả bệnh nhân",
  code: "all",
  filter: [
    {
      name: "Độ tuổi",
      code: "Age",
      filter: [{ name: "Trẻ em dưới 6 tuổi", code: "nhoHonSau", quantity: 4 }],
    },
    {
      name: "Giới tính",
      code: "gioiTinh",
      filter: [
        { name: "Nam", code: "nam", quantity: 12 },
        { name: "Nữ", code: "nu", quantity: 3 },
      ],
    },
    {
      name: "Đối tượng",
      code: "doiTuong",
      filter: [
        { name: "BHYT", code: "bhyt", quantity: 4 },
        { name: "Thu phí", code: "thuPhi", quantity: 4 },
        { name: "Yêu cầu", code: "yeuCau", quantity: 4 },
        { name: "Miễn phí", code: "mienPhi", quantity: 4 },
      ],
    },
    {
      name: "Trạng thái",
      code: "trangThai",
      filter: [
        { name: "Chờ nhập viện", code: "choNhapVien", quantity: 4 },
        { name: "Đang điều trị", code: "dangDieuTri", quantity: 5 },
      ],
    },
    {
      name: "Khoa điều trị",
      code: "khoaDieuTri",
      filter: [
        { name: "Khoa Covid-1", code: "cv-1", quantity: 2 },
        { name: "Khoa Covid-2", code: "cv-2", quantity: 3 },
        { name: "Khoa Giải Phẫu Bệnh", code: "gpb", quantity: 1 },
        { name: "Khoa Liên Chuyên Khoa", code: "lck", quantity: 3 },
        { name: "Khoa Ngoại Tổng Hợp", code: "nth", quantity: 3 },
        { name: "Khoa Nhi", code: "nhi", quantity: 3 },
        { name: "Khoa Nội Tim Mạch", code: "ntm", quantity: 3 },
        { name: "Khoa Nội Tổng Hợp", code: "noith", quantity: 3 },
        { name: "Khoa Sản", code: "san", quantity: 3 },
        { name: "Khoa Y Học Cổ Truyền", code: "yhct", quantity: 3 },
      ],
    },
    {
      name: "Bệnh nhân sắp hết tiền",
      code: "bnsht",
      filter: [
        { name: "Danh sách bệnh nhân", code: "dsbnsht", quantity: 4 },
      ],
    },
    {
      name: "Bệnh nhân còn nợ tiền",
      code: "bncnt",
      filter: [
        { name: "Danh sách bệnh nhân", code: "dsbncnt", quantity: 4 },
      ],
    },
  ],
};

export const contextMenuModalDSBenhNhan: IContextMenu[] = [
  {
    title: "Bệnh án",
  },
  {
    icon: <i className="fa-solid fa-clock-rotate-left text-warning"></i>,
    name: "Lịch sử khám bệnh",
    code: "LSKB",
  },
  {
    name: "Phiếu quỹ bổ sung",
    code: "PQBS",
  },
  {
    name: "Xuất danh sách bệnh nhân",
    code: "XDSBN",
  },
]