export const KEY_DS_TAB_TIEP_NHAN = "DSTIEPNHAN";
export const KEY_DS_TAB_TIEP_DON = "DSTIEPDON";
export const KEY_DS_TAB_THANH_TOAN = "THANHTOAN"
export const KEY_DS_TAB_XET_NGHIEM = "XET_NGHIEM"
export const DS_NOI_TRU_TIEP_DON = "DS_NOI_TRU_TIEP_DON";
export const DS_NOI_TRU_PHONG_BENH = "DS_NOI_TRU_PHONG_BENH";
export const KEY_DS_TAB_PHAU_THUAT_THU_THUAT = "KEY_DS_TAB_PHAU_THUAT_THU_THUAT"
export const KEY_DS_TAB_CDHA_TDCN = "DS_CDHA_VA_TDCN";
export const TOKEN = "TOKEN";

export const REGEX = {
    TEN: /^[^~`!@#$%^&*()+=\-[\]\\';,/{}|\\":<>?\d]+$/,
    AZ_09: /^[a-zA-Z0-9]*$/,
    CHARACTER20: /^.{6,20}$/,
    CHARACTER50: /^.{1,50}$/,
    CHARACTER255: /^.{1,255}$/,
    CHECK_PHONE: /^(0|\+84)\d{9,10}$/
}

export const CODE = {
    SUCCESS: 200,
    ISE: 500,
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
  LY_DO_CHUYEN: 13
}

export const DEFAULT_PAGE_INDEX = 1
export const DEFAULT_PAGE_SIZE = 10
export const MAX_PAGE_SIZE = 99999

export const SEARCH_OBJECT_MAX_SIZE = {
  pageIndex: DEFAULT_PAGE_INDEX,
  pageSize: MAX_PAGE_SIZE,
}

export const SELECTION_MODE = {
  SINGLE: 'single',
  MULTI: 'multi'
}