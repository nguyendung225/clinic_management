import { IconCabinet, IconHome } from "../../component/IconSvg"
import { CODE_LIST_BAO_CAO } from "../../phan-he-tiep-nhan-thanh-toan/constants/constants"
import { IContextMenu } from "../../phan-he-tiep-nhan-thanh-toan/models/ModelTabDSDangKy"
import { IThanhToanMenu } from "../../phan-he-tiep-nhan-thanh-toan/models/ThanhToanModel"
import TabDSDichVu from "../components/modal-chi-dinh-dich-vu/TabDSDichVu"
import TabPhieuChiDinh from "../components/modal-chi-dinh-dich-vu/TabPhieuChiDinh"
import TabCDHATDCN from "../components/modal-quan-ly-dich-vu/TabCDHA-TDCN"
import TabChuyenKhoa from "../components/modal-quan-ly-dich-vu/TabChuyenKhoa"
import TabDVKhac from "../components/modal-quan-ly-dich-vu/TabDVKhac"
import TabXetNghiem from "../components/modal-quan-ly-dich-vu/TabXetNghiem"
import TabBangCheckIn from "../components/modal-thanh-toan/modal-xml/TabBangCheckIn"
import TabXML1 from "../components/modal-thanh-toan/modal-xml/TabXML1"
import TabXML2 from "../components/modal-thanh-toan/modal-xml/TabXML2"
import TabXML3 from "../components/modal-thanh-toan/modal-xml/TabXML3"
import TabXML4 from "../components/modal-thanh-toan/modal-xml/TabXML4"
import TabXML5 from "../components/modal-thanh-toan/modal-xml/TabXML5"

export const HUY = {
  THUC_HIEN: "thực hiện",
  TRA_KET_QUA: "trả kết quả"
}

export const CODE_LIST_DICH_VU = {
  THANH_TOAN: "thanhToan",
  NHAP_THONG_TIN_PTTT: "nhapThongTinPTTT",
  QUAN_LY_DICH_VU: "quanLyDichVu",
  CHI_DINH_DICH_VU: "chiDinhDichVu"
}

export const listContextDichVu: IContextMenu[] = [
  {
    title: "Dịch vụ"
  },
  {
    code: "thanhToan",
    name: "Thanh toán",
  },
  {
    code: "nhapThongTinPTTT",
    name: "Nhập thông tin PTTT",
  },
  {
    code: "dichVuDiKem",
    name: "Dịch vụ đi kèm",
    children: [
      {
        code: "quanLyDichVu",
        name: "Quản lý dịch vụ"
      },
      {
        code: "chiDinhDichVu",
        name: "Chỉ định dịch vụ"
      },
    ]
  },
  {
    code: "thuocVatTuDiKem",
    name: "Thuốc, vật tư đi kèm",
    children: [
      {
        code: "quanLyThuocVatTuDiKem",
        name: "Quản lý thuốc, vật tư đi kèm"
      },
      {
        code: "chiDinhThuocDiKem",
        name: "Chỉ định thuốc đi kèm"
      },
      {
        code: "chiDinhVatTuDiKem",
        name: "Chỉ định vật tư đi kèm"
      },
      {
        code: "hoanTraThuocDiKem",
        name: "Hoàn trả thuốc đi kèm"
      },
      {
        code: "hoanTraVatTuDiKem",
        name: "Hoàn trả vật tư đi kèm"
      },
    ]
  },
  {
    code: "thuocVatTuHaoPhi",
    name: "Thuốc, vật tư hao phí",
  },
]


export const listContextBangThanhToan: IContextMenu[] = [
  {
    title: "Sửa đối tượng dịch vụ"
  },
  {
    code: "BHYT",
    name: "Bảo hiểm y tế",
  },
  {
    code: "BHYT-DV",
    name: "Bảo hiểm y tế + dịch vụ",
  },
  {
    code: "thuPhi",
    name: "Thu phí",
  },
  {
    code: "dichVu",
    name: "Dịch vụ",
  },
  {
    code: "mienPhi",
    name: "Miễn phí",
  },
  {
    code: "haoPhi",
    name: "Hao phí",
  },
  {
    code: "diKem",
    name: "Đi kèm (Thanh toán gộp)",
  },
  {
    code: "diKemRieng",
    name: "Đi kèm (Thanh toán riêng)",
  },
  {
    code: "lichSuChuyenDoiTuongDichVu",
    name: "Lịch sử chuyển đối tượng dịch vụ",
  },
  {
    code: "khoaDoiTuongDichVu",
    name: "Khóa đối tượng dịch vụ",
  },
  {
    code: "boKhoaDoiTuongDichVu",
    name: "Bỏ khóa đối tượng dịch vụ",
  },
  {
    title: "Nguồn chi trả"
  },
  {
    code: "cauHinhNguonChiTraDichVu",
    name: "Cấu hình nguồn chi trả dịch vụ",
    children: [
      {
        code: "boKhoaDoiTuongDichVu",
        name: "Bỏ khóa đối tượng dịch vụ",
      },{
        code: "boKhoaDoiTuongDichVu",
        name: "Bỏ khóa đối tượng dịch vụ",
      },{
        code: "boKhoaDoiTuongDichVu",
        name: "Bỏ khóa đối tượng dịch vụ",
      },{
        code: "boKhoaDoiTuongDichVu",
        name: "Bỏ khóa đối tượng dịch vụ",
      },
    ]
  },
  {
    title: "Dịch vụ thu tiền nhiều lần"
  },
  {
    code: "yeuCauNopTien",
    name: "Yêu cầu nộp tiền"
  },
  {
    title: "Chỉnh sửa dịch vụ",
  },
  {
    code: "chuyenDVSangDotThanhToanKhac",
    name: "Chuyển dịch vụ sang đợt thanh toán khác"
  },
  {
    code: "thayTheDV",
    name: "Thay thế dịch vụ"
  },
  {
    code: "suaDonGia",
    name: "Sửa đơn giá, giá BHYT bằng giá viện phí"
  },
  {
    title: "Quy trình chuyên môn kỹ thuật"
  },
  {
    code: "quyTrinhChuyenMon",
    name: "Quy trình chuyên môn"
  }
]

export const listMenuIn: IThanhToanMenu[] = [
  {
    groupName: "Phiếu thanh toán",
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
        name: "Bảng kê khám bệnh, chữa bệnh (6556 - Nguồn khác)"
      },
      {
        code: CODE_LIST_BAO_CAO.PHIEU.CONG_KHAI_CHI_PHI,
        name: "Phiếu công khai chi phí khám chữa bệnh"
      },
      {
        code: CODE_LIST_BAO_CAO.PHIEU.BANG_KE_CHI_PHI_DICH_VU,
        name: "Bảng kê chi phí dịch vụ"
      },
      {
        code: CODE_LIST_BAO_CAO.PHIEU.BANG_THANH_TOAN_THUOC_VAT_TU_TRONG_MO,
        name: "Bảng thanh toán thuốc, vật tư trong mổ"
      },
    ]
  }
]

export const CODE_CONTEXT_BENH_NHAN = {
  GOI_BENH_NHAN: "GBN",
  CHUYEN_PHIEU_SANG_NGAY_KHAC: "CPSNK",
  SUA_THONG_TIN_PHIEU: "STTP",
  LICH_SU_KHAM_BENH: "LSKB"
}

export const listContextBenhNhan: IContextMenu[] = [
  {
   title: "Phiếu chuyên khoa"
  },
  {
    code: "GBN",
    name: "Gọi bệnh nhân",
    icon: <i className="bi bi-megaphone-fill text-primary"></i>
  },
  {
    code: "CPSNK",
    name: "Chuyển phiếu sang ngày khác"
  },
  {
    code: "STTP",
    name: "Sửa thông tin phiếu",
    icon: <i className="fa-solid fa-file-pen"></i>
  },
  {
    title: "Bệnh án"
  },
  {
    code: "LSKB",
    name: "Lịch sử khám bệnh",
    icon: <i className="fa-solid fa-clock-rotate-left text-info"></i>
  }
]

export const TreeDichVu = {
  code: "all",
  name: "Tất cả dịch vụ (50.000.000)",
  icon: <IconHome />,
  filter: [
    {
      code: "doiTuongDichVu",
      name: "Đối tượng dịch vụ",
      icon: <IconCabinet />,
      filter: [
        { code: "1", name: "Dịch vụ (50.000.000)" },
      ],
    },
    {
      code: "loaiChiPhi",
      name: "Loại chi phí",
      icon: <IconCabinet />,
      filter: [
        { code: "3", name: "Phẫu thuật (50.000.000)" },
      ],
    },
    {
      code: "ngayYLenh",
      name: "Ngày y lệnh",
      icon: <IconCabinet />,
      filter: [
        { code: "4", name: "19/02/2024 (50.000.000)" },
      ],
    },
    {
      code: "khoaChiDinh",
      name: "Khoa chỉ định",
      icon: <IconCabinet />,
      filter: [
        { code: "5", name: "Khoa khám bệnh (50.000.000)" },
      ],
    },
    {
      code: "nguoiChiDinh",
      name: "Người chỉ định",
      icon: <IconCabinet />,
      filter: [
        { code: "6", name: "Quản trị hệ thống (50.000.000)" },
      ],
    },
    {
      code: "phieuThu",
      name: "Phiếu thu",
      icon: <IconCabinet />,
      filter: [
        { code: "7", name: "TamUngHoanUng/29 (10.000.000)" },
        { code: "7", name: "TamUngHoanUng/69 (10.000.000)" },
      ],
    },
  ],
};

export const DSMenuXML = [
  {
    eventKey: "0",
    title: "Bảng Check-in",
    component: <TabBangCheckIn />,
  },
  {
    eventKey: "1",
    title: "XML1 - Tổng hợp",
    component: <TabXML1 />,
  },
  {
    eventKey: "2",
    title: "XML2 - Thuốc",
    component: <TabXML2 />,
  },
  {
    eventKey: "3",
    title: "XML3 - Dịch vụ, vật tư",
    component: <TabXML3 />,
  },
  {
    eventKey: "4",
    title: "XML4 - Cân lâm sàng",
    component: <TabXML4 />,
  },
  {
    eventKey: "5",
    title: "XML5 -Diễn biến",
    component: <TabXML5 />,
  },
];

export const DSMenuQuanLyDichVu = [
  {
    eventKey: "0",
    title: "Xét nghiệm",
    component: <TabXetNghiem />,
  },
  {
    eventKey: "1",
    title: "CDHA-TDCN",
    component: <TabCDHATDCN />,
  },
  {
    eventKey: "2",
    title: "Chuyên khoa",
    component: <TabChuyenKhoa />,
  },
  {
    eventKey: "3",
    title: "DV khác",
    component: <TabDVKhac />,
  },
]

export const DSMenuChiDinhDichVu = [
  {
    eventKey: "0",
    title: "Danh sách dịch vụ",
    component: <TabDSDichVu />,
  },
  {
    eventKey: "1",
    title: "Phiếu chỉ định",
    component: <TabPhieuChiDinh />,
  },
]