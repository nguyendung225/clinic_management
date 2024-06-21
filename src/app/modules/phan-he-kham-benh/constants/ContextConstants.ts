import { IContextMenu } from "../../phan-he-tiep-nhan-thanh-toan/models/ModelTabDSDangKy";

export const CODE_CONTEXT_TAB_XET_NGHIEM = {
  CHUYEN_PHONG_THUC_HIEN: "CPTH",
  BO_DICH_VU_KHONG_LAM: "BDVKL",
  TRA_KET_QUA_SAU_KHI_XU_TRI: "TKQSKXT",
  THAY_THE_DICH_VU_KHAC: "TTDVK",
  SUA_NGAY_TRA_KET_QUA: "SNTKQ",
  SUA_CHAN_DOAN_BENH: "SCDB",
  PHIEU_CHI_DINH: "phieuChiDinh",
  PHIEU_KHAM_BENH: "phieuKhamBenh",
  PHIEU_KET_QUA_CHAN_DOAN_HINH_ANH: "phieuKQCDHA",
  PHIEU_XET_NGHIEM_VI_SINH: "phieuXetNghiemViSinh",
  HUY_GUI_PHIEU: "huyGuiPhieu",
  XOA_PHIEU: "xoaPhieu",
  GUI_PHIEU: "guiPhieu",
  CHUYEN_NGAY_Y_LENH: "CNYL",
  CHUYEN_PHIEU_DIEU_TRI: "CPDT",
  CHUYEN_NGUOI_CHI_DINH: "CNCD",
  DS_PHIEU: "dsPhieu",
  DS_DICH_VU: "dsDICHVU"
}

export const listContextXetNghiem: IContextMenu[] = [
  {
    title: "Phiếu thực hiện"
  },
  {
    code: "phieuChiDinh",
    name: "In phiếu chỉ định"
  },
  {
    code: "CPTH",
    name: "Chuyển phòng thực hiện"
  },
  {
    code: "BDVKL",
    name: "Bỏ dịch vụ không làm"
  },
  {
    code: "TKQSKXT",
    name: "Trả kết quả sau khi xử trí"
  },
  {
    title: "Thay thế dịch vụ"
  },
  {
    code: "TTDVK",
    name: "Thay thế dịch vụ khác"
  },
  {
    title: "Công cụ"
  },
  {
    code: "SNTKQ",
    name: "Sửa ngày trả kết quả"
  },
  {
    code: "SCDB",
    name: "Sửa chẩn đoán bệnh"
  }
]

export const listContextPhieuXetNghiem: IContextMenu[] = [
  {
    code: "CNYL",
    name: "Chuyển ngày y lệnh"
  },
  {
    code: "CPDT",
    name: "Chuyển phiếu điều trị"
  },
  {
    code: "CNCD",
    name: "Chuyển người chỉ định"
  },
]

export const listContextPhieuChuyenKhoa: IContextMenu[] = [
  {
    code: "CNYL",
    name: "Chuyển ngày y lệnh"
  },
  {
    code: "CPDT",
    name: "Chuyển phiếu điều trị"
  },
]


export const listContextVatTu: IContextMenu[] = [
  {
    title: "Dịch vụ"
  },
  {
    code: "chonStent",
    name: "Chọn Stent",
    children: [
      {
        code: "kpStent",
        name: "(Không phải Stent)"
      },
      {
        code: "lan1",
        name: "Lần 1"
      },
      {
        code: "lan2",
        name: "Lần 2"
      },
      {
        code: "lan3",
        name: "Lần 3"
      },
    ]
  },
  {
    code: "SCDB",
    name: "Sửa chẩn đoán bệnh"
  }
]

export const listContextDichVuCongKham: IContextMenu[] = [
  {
    title: "Công khám"
  },
  {
    code: "CLCK",
    name: "Chuyển lại công khám",
    children: [
      {
        code: "KL1",
        name: "Khám lần 1"
      },
      {
        code: "KL2",
        name: "Khám lần 2"
      },
      {
        code: "KL3",
        name: "Khám lần 3"
      },
      {
        code: "KL4",
        name: "Khám lần 4"
      },
      {
        code: "KL5",
        name: "Khám lần 5"
      },
      {
        code: "KL6",
        name: "Khám lần 6"
      },
      {
        code: "KL7",
        name: "Khám lần 7"
      },
      {
        code: "KCCK",
        name: "Khám cùng chuyên khoa"
      },
    ]
  },
  {
    code: "QLTVTDK",
    name: "Quản lý thuốc, vật tư đi kèm (thanh toán riêng)"
  },
  {
    code: "QLTVTHP",
    name: "Quản lý thuốc, vật tư hao phí"
  },
  {
    title: "Thay thế dịch vụ"
  },
  {
    code: "TTDVK",
    name: "Thay thế dịch vụ khác"
  }
]

export const listContextPhieuCongKham: IContextMenu[] = [
  {
    code: "CNYL",
    name: "Chuyển ngày y lệnh"
  },
]