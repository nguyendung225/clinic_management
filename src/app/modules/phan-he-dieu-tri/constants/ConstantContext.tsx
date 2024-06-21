import { IContextMenu } from "../../phan-he-tiep-nhan-thanh-toan/models/ModelTabDSDangKy";

export const CODE_CONTEXT_DIEU_TRI = {
  NHAT_KY_SU_KIEN_BENH_AN: "NKSK"
}

export const listContextDsBenhNhan: IContextMenu[] = [
  {
    title: "Bệnh án"
  },
  {
    code: "LSKB",
    name: "Lịch sử khám và điều trị",
    icon: <i className="fa-solid fa-clock-rotate-left text-info"></i>
  },
  {
    code: "NKSK",
    name: "Nhật ký sự kiện của bệnh án",
    icon: <i className="fa-solid fa-circle-info text-info"></i>
  },
  {
    code: "DH",
    name: "Đặt hẹn",
    icon: <i className="fa-regular fa-calendar-days"></i>
  },
  {
    code: "TTGC",
    name: "Thông tin ghi chú",
    icon: <i className="fa-solid fa-file-pen text-warning"></i>
  },
  {
    code: "ADNCTK",
    name: "Áp dụng nguồn chi trả khác/Tham gia dự án",
    icon: <i className="fa-solid fa-clipboard text-info"></i>
  },
  {
    code: "DD",
    name: "Đánh dấu",
    icon: <i className="bi bi-pin-angle-fill text-danger"></i>
  },
  {
    code: "KBKH",
    name: "Khám bệnh kết hợp"
  },
  {
    code: "DTKH",
    name: "Điều trị kết hợp"
  },
  {
    code: "KQBS",
    name: "Ký quỹ bổ sung"
  },
  {
    code: "DNTU",
    name: "Đề nghị tạm ứng"
  },
  {
    code: "DMG",
    name: "Duyệt miễn giảm"
  },
  {
    code: "CNK",
    name: "Chức năng khác"
  },
  {
    code: "KMHS",
    name: "Khóa/Mở hồ sơ",
    icon: <i className="fa-solid fa-folder-open"></i>
  },
]