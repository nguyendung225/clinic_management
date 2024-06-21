import { IContextMenu } from "../../phan-he-tiep-nhan-thanh-toan/models/ModelTabDSDangKy";

export const CODE_CONTEXT_HANH_CHINH = {
  SUA_DOT_THANH_TOAN: "SDTT",
  LICH_SU_KHAM_VA_DIEU_TRI: "LSKVDT",
  HUY_TIEP_NHAN: "HTN"
}

export const listContextQuanLyThuoc: IContextMenu[] = [
  {
    title: "Phiếu"
  },
  {
    code: "SDTT",
    name: "Sửa đợt thanh toán + ngày điều trị"
  },
]

export const listContextDsBenhNhan: IContextMenu[] = [
  {
    title: "Bệnh án"
  },
  {
    code: "LSKVDT",
    name: "Lịch sử khám và điều trị"
  },
  {
    code: "DH",
    name: "Đặt hẹn"
  },
  {
    code: "STTGGT",
    name: "Sửa thông tin giấy giới thiệu"
  },
  {
    code: "TTG",
    name: "Thông tin giường"
  },
  {
    code: "HTN",
    name: "Huỷ tiếp nhận"
  },
  {
    code: "TLM",
    name: "Thêm lịch mổ"
  },
  {
    title: "In"
  },
  {
    code: "TKCB",
    name: "Thẻ khám chữa bệnh"
  }
]