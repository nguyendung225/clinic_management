import { IconCabinet, IconHome } from "../../component/IconSvg";
export const CODE_TREE_DIEU_TRI = {
  HO_SO_BENH_AN: "HSBA",
  PHIEU_DIEU_TRI: "PDT",
  XET_NGHIEM:{
    DIEU_TRI_TRUYEN_NHIEM_1: "XN240307.1",
  },
  CDHA: {
    DIEU_TRI_TRUYEN_NHIEM_1: "HA240307.1",
  },
  CHUYEN_KHOA: {
    DIEU_TRI_TRUYEN_NHIEM_1: "CK240307.1"
  },
  DICH_VU_KHAC: {
    DIEU_TRI_TRUYEN_NHIEM_1: "DV240307.1"
  },
  DON_THUOC: {
    DIEU_TRI_TRUYEN_NHIEM_1: "TH240307.1"
  },
  VAT_TU: {
    DIEU_TRI_TRUYEN_NHIEM_1: "VT240307.1"
  },
  MAU: {
    DIEU_TRI_TRUYEN_NHIEM_1: "MAU240307.1"
  },
}

export const TreeThongTinDieuTri = {
  code: "all",
  name: "Bệnh nhân",
  icon: <IconHome />,
  filter: [
    {
      code: "thongTinBenhNhan",
      name: "Thông tin bệnh nhân",
      icon: <IconCabinet />,
      filter: [
        { code: "HSBA", name: "Hồ sơ bệnh án" },
        { code: "PDT", name: "Phiếu điều trị" },
        { code: "SK15NDT", name: "Sơ kết 15 ngày điều trị" },
        { code: "TDCNS", name: "Theo dõi chức năng sống" },
        { code: "PCS", name: "Phiếu chăm sóc" },
        { code: "PCSKH", name: "Phiếu chăm sóc (Kế hoạch)" },
        { code: "TDTD", name: "Theo dõi truyền dịch" },
        { code: "TSDU", name: "Tiền sử dị ứng" },
        { code: "YCSDKS", name: "Yêu cầu sử dụng kháng sinh" },
        { code: "PTM", name: "Phiếu truyền máu" },
        { code: "DCNHH", name: "Đo chức năng hô hấp" },
        { code: "GTPUT", name: "Giấy thử phản ứng thuốc" },
        { code: "TDDU", name: "Theo dõi dị ứng" },
        { code: "BKTATPT", name: "Bảng kiểm tra an toàn phẫu thuật" },
        { code: "KGMTM", name: "Khám gây mê trước mổ" },
        { code: "GMHS", name: "Gây mê hồi sức" },
        { code: "PCDPTTT", name: "Phiếu cam đoan PTTT" },
        { code: "BBHC", name: "Biên bản hội chẩn" },
        { code: "BBHCPT", name: "Biên bản hội chẩn phẫu thuật" },
        { code: "SHC", name: "Số hội chẩn" },
        { code: "CBBNTM", name: "Chuẩn bị bệnh nhân trước mổ" },
        { code: "GNO", name: "Giấy nghỉ ốm" },
        { code: "PDGDD", name: "Phiếu đánh giá dinh dưỡng" },
        { code: "PLGHDCN", name: "Phiếu lượng giá hoạt động chức năng" },
        { code: "PKVCDPH", name: "Phiếu khám và chỉ định phục hồi" },
        { code: "PTHKTPH", name: "Phiếu thực hiện kỹ thuật phục hồi" },
        { code: "PCT", name: "Phiếu chuyển tuyến" },
        { code: "CNTT", name: "Chứng nhận thương tích" },
        { code: "PTN", name: "Phiếu truyền nhiễm" },
        { code: "PPTSDT", name: "Phiếu phân tích sử dụng thuốc" },
        { code: "BKVTTSPT", name: "Bảng kiểm VT trước, sau PT" },
        { code: "PCDTV", name: "Phiếu chẩn đoán tử vong" },
        { code: "PCKSDDVYT", name: "Phiếu cam kết sử dụng dịch vụ y tế" },
        { code: "CDRV", name: "Chẩn đoán - Ra viện" },
        { code: "GBT", name: "Giấy báo tử" },
      ],
    },
    {
      code: "quaTrinhDieuTri",
      name: "Quá trình điều trị",
      icon: <IconCabinet />,
      filter: [
        { code: "KSNK", name: "Khoa sản - Nội khoa" },
      ]
    },
    {
      code: "phieuKhamBenh",
      name: "Phiếu khám bệnh",
      icon: <IconCabinet />,
      filter: [
        { code: "KB240320.6", name: "Điều trị truyền nhiễm -> Điều trị truyền nhiễm" },
      ]
    },
    {
      code: "phieuXetNghiem",
      name: "Phiếu xét nghiệm",
      icon: <IconCabinet />,
      filter: [
        { code: "XN240307.1", name: "Điều trị truyền nhiễm" },
      ]
    },
    {
      code: "phieuChanDoanHinhAnh",
      name: "Phiếu chẩn đoán hình ảnh",
      icon: <IconCabinet />,
      filter: [
        { code: "HA240307.1", name: "Điều trị truyền nhiễm" },
      ]
    },
    {
      code: "phieuChuyenKhoa",
      name: "Phiếu chuyên khoa",
      icon: <IconCabinet />,
      filter: [
        { code: "CK240307.1", name: "Điều trị truyền nhiễm" },
      ]
    },
    {
      code: "dichVuKhac",
      name: "Dịch vụ khác",
      icon: <IconCabinet />,
      filter: [
        { code: "DV240307.1", name: "Điều trị truyền nhiễm" },
      ]
    },
    {
      code: "donThuoc",
      name: "Đơn thuốc",
      icon: <IconCabinet />,
      filter: [
        { code: "TH240307.1", name: "Điều trị truyền nhiễm -> Nhà thuốc" },
      ]
    },
    {
      code: "phieuVatTu",
      name: "Phiếu vật tư",
      icon: <IconCabinet />,
      filter: [
        { code: "VT240307.1", name: "Điều trị truyền nhiễm -> Kho vật tư nội trú" },
      ]
    },
    {
      code: "mau",
      name: "Máu",
      icon: <IconCabinet />,
      filter: [
        { code: "MAU240307.1", name: "Điều trị truyền nhiễm -> Kho máu" },
      ]
    },
  ]
};