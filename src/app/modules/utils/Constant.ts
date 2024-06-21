export const KEY_DS_TAB_TIEP_NHAN = "DSTIEPNHAN";
export const KEY_TAB_CHI_DINH_MAU = "CHIDINHMAU";
export const KEY_DS_TAB_HEN_KHAM = "DSHenKham";
export const KEY_DS_TAB_BENH_AN_DIEN_TU = "DSBENHANDIENTU";
export const KEY_DS_TAB_TIEP_DON = "DSTIEPDON";
export const KEY_DS_TAB_THANH_TOAN = "THANHTOAN"
export const KEY_DS_TAB_XET_NGHIEM = "XET_NGHIEM"
export const DS_NOI_TRU_TIEP_DON = "DS_NOI_TRU_TIEP_DON";
export const DS_NOI_TRU_PHONG_BENH = "DS_NOI_TRU_PHONG_BENH";
export const KEY_DS_TAB_PHAU_THUAT_THU_THUAT = "KEY_DS_TAB_PHAU_THUAT_THU_THUAT"
export const KEY_DS_TAB_CDHA_TDCN = "DS_CDHA_VA_TDCN";
export const DM_TAI_KHOAN = "DM_TAI_KHOAN"
export const DM_KHOA_PHONG = "DM_KHOA_PHONG"
export const DM_NHAN_VIEN = "DM_NHAN_VIEN"
export const DM_DICH_VU_GIA = "DM_DICH_VU_GIA"
export const DM_THIET_BI_CLS = "DM_THIET_BI_CLS"
export const DM_CO_SO_KHAM_CHUA_BENH = "DM_CO_SO_KHAM_CHUA_BENH"
export const DM_GIUONG_BENH = "DM_GIUONG_BENH"
export const KEY_DS_TAB_CHI_TIET_DV_DS_PHIEU = "CHITIETDV_DSPHIEU";
export const KEY_DS_TAB_BENH_AN = "KEY_DS_TAB_BENH_AN";
export const TOKEN = "TOKEN";

export const REGEX = {
  TEN: /^[^~`!@#$%^&*()+=\-[\]\\';,/{}|\\":<>?\d]+$/,
  AZ_09: /^[a-zA-Z0-9]*$/,
  CHARACTER20: /^.{6,20}$/,
  CHARACTER9or12: /^\d{9}(\d{3})?$/,
  CHARACTER50: /^.{1,50}$/,
  CHARACTER255: /^.{1,255}$/,
  CHECK_PHONE: /^(0|\+84)\d{9,10}$/,
  YEAR: /^.{4,5}$/,
}
export const NUMBER_EXCEPT_THIS_SYMBOLS = ["e", "E", "+", "-", "."]
export const TITLE_TYPE = 2
export const POSITION_TYPE = 3
export const STATUS_TYPE = 4

export const CODE = {
  SUCCESS: 200,
  ISE: 500,
}
export const TRANG_THAI = {
  CHUA_THANH_TOAN: 1,
  DA_HOAN_THANH: 2,
  TAM_UNG: 3,
}

export const KEY = {
  ENTER: 'Enter',
  SPACE: 'Space',
}

export const SIMPLE_CATEGORY_TYPE = {
  DAN_TOC: 1,
  CHUC_DANH: 2,
  CHUC_VU: 3,
  TRANG_THAI_NHAN_VIEN: 4,
  DOI_TUONG: 5,
  MOI_QUAN_HE: 7,
  LOAI_TIEP_NHAN: 8,
  LOAI_GIA: 9,
  TUYEN: 10,
  MA_KV: 11,
  TUYEN_CHUYEN: 12,
  LY_DO_CHUYEN: 13,
  NGHE_NGHIEP: 15,
  QUOC_GIA: 16,
}

export const CODE_SELECT = {
  QG_VIET_NAM: "000",
  DT_KINH: "1",
  LTT_BENH_MOI: "TIEPNHAN1",
  LTT_TAI_KHAM: "TIEPNHAN2",
}

export const DEFAULT_PAGE_INDEX = 1
export const DEFAULT_PAGE_SIZE = 10
export const DEFAULT_TOTAL_PAGES = 0
export const DEFAULT_TOTAL_ELEMENTS = 0
export const MAX_PAGE_SIZE = 99999

export const SEARCH_OBJECT_MAX_SIZE = {
  pageIndex: DEFAULT_PAGE_INDEX,
  pageSize: MAX_PAGE_SIZE,
}

export const SELECTION_MODE = {
  SINGLE: 'single',
  MULTI: 'multi',
  SINGLE_NO_RADIO_BUTTON: 'singleNoRadioButton',
}

export const RESPONSE_MESSAGE = {
  ADD: {
    SUCCESS: 'Thêm thành công',
  },
  UPDATE: {
    SUCCESS: 'Cập nhật thành công',
  },
  DELETE: {
    SUCCESS: "Xóa thành công"
  },

  ERROR: 'Xảy ra lỗi, vui lòng thử lại',
}

export const INPUT_VALUE = {
  BENH_NHAN: {
    LOAI_DOI_TUONG: "benhNhanCase.loaiDoiTuong",
    LOAI_TIEP_NHAN: "benhNhanCase.loaiTiepnNhan"
  }
}

export const CODE_SUCCESS = 200
export const ERROR_MESSAGE = "Có lỗi xảy ra, vui lòng thử lại!"

export const CHI_DINH_DV_TIEP_NHAN = 'CHI_DINH_DV_TIEP_NHAN';
export const CHI_DINH_DV_TIEP_DON = 'CHI_DINH_DV_TIEP_DON';

export const VARIABLE_STRING = {
  PROVINCE: "province",
  DAN_TOC: "danToc",
  QUOC_TINH: "quocTich",
  LOAI_TIEP_NHAN: "loaiTiepNhan",
  DISTRICT: "district",
  WARD: "ward",
  TEN_DICH_VU: "tenDichVu",
  PHONG_KHAM: "phongKham",
  BMI: "BMI",
  CODE_GIOI_THIEU: "TUYEN4",
  QUANTITY: "quantity",
  PROMOTION_PERCENT: "promotionPercent",
  XU_TRI: "xuTri",
  KHAM_BO_PHAN: "khamBoPhan",
  SINH_HIEU: "sinhHieu",
  BENH_CHINH: "benhChinh",
  BENH_PHU: "benhPhu",
  DEPARTMENT: "department",
  ROOM: "room",
  TRANG_THAI: "status",
  LOAI_HANG_HOA: "loaiHangHoa",
  QDTT: "QDTT",
  NOI_SINH: "noiSinh",
  CHUYEN_KHOA: "chuyenKhoa",
  RA_VIEN: "raVien",
  XIN_VE: "xinVe",
  DUA_VE: "duaVe",
  TRON_VIEN: "tronVien",
  CHUYEN_TUYEN: "chuyenTuyen",
  TU_VONG: "tuVong",
  HINH_THUC_XU_TRI: "hinhThucXuTri",
  DOUBLE_CLICK: "doubleClick",
}

export const TRANG_THAI_KHAM_BENH = [
  { status: 0, name: "Chờ khám" },
  { status: 1, name: "Đang khám" }
]

export enum STATUS_KHAM_BENH {
  CHO_KHAM = 0,
  DANG_KHAM = 1,
}

export const STATUS_ACTION = {
  VIEW: "VIEW",
  EDIT: "EDIT",
  DELETE: "DELETE",
  IMPORT: "IMPORT",
};

export enum TYPE_INPUT {
  STRING = "string",
  NUMBER = "number",
  OBJECT = "object",
}

export const TRANG_THAI_PHIEU = {
  CHUA_THUC_HIEN: 1,
  DA_LAY_MAU: 2,
  DA_THUC_HIEN_VA_TRA_KET_QUA: 3,
  DA_THUC_HIEN_VA_CHUA_TRA_KET_QUA: 4,
}

export const LIST_COLOR_TRANG_THAI_PHIEU = [
  {
    code: TRANG_THAI_PHIEU.CHUA_THUC_HIEN,
    name: "red",
  },
  {
    code: TRANG_THAI_PHIEU.DA_LAY_MAU,
    name: "purple",
  },
  {
    code: TRANG_THAI_PHIEU.DA_THUC_HIEN_VA_TRA_KET_QUA,
    name: "green",
  },
  {
    code: TRANG_THAI_PHIEU.DA_THUC_HIEN_VA_CHUA_TRA_KET_QUA,
    name: "orange",
  },
]

export const MESSAGE = {
  CONFIRM: {
    XOA_PHIEU: "Bạn có chắc chắn muốn xóa phiếu này không?",
    XOA_DON_THUOC: "Bạn có chắc chắn muốn xóa đơn thuốc này không?",
    BO_DICH_VU_KHONG_LAM: "Bạn có chắc chắn muốn bỏ dịch vụ này không?",
    HUY_GUI_PHIEU_CDHA: "Bạn có chắc chắn muốn hủy gửi phiếu chẩn đoán hình ảnh này không?",
    HUY_GUI_DON_THUOC: "Bạn có chắc chắn muốn hủy gửi đơn thuốc này không?",
    HUY_GUI_PHIEU_MAU: "Bạn có chắc chắn muốn hủy gửi phiếu máu này không?",
  },
  SUCCESS: {
    HUY_GUI_PHIEU: "Đã hủy gửi phiếu thành công!",
    HUY_DON_THUOC: "Đã hủy gửi đơn thuốc thành công!",
    GUI_PHIEU: "Gửi phiếu thành công!",
    GUI_DON_THUOC: "Đã gửi đơn thuốc thành công!",
    XOA_PHIEU: "Xóa phiếu thành công!",
  },
  WARNING: {
    THAY_THE_DICH_VU_KHAC: "Dịch vụ không được phép thay thế!",
    HUY_GUI_PHIEU: "Không thế hủy phiếu vì có dịch vụ đang thực hiện!"
  }
}

export const PATH_NAME = {
  KHAM_BENH: "/kham-benh",
  HANH_CHINH: "/hanh-chinh",
}