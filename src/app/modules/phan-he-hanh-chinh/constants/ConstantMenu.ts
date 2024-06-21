export const CODE_MENU_HANH_CHINH = {
  TUY_CHON_THOI_GIAN: "TCTG",
  TIM_KIEM_NANG_CAO: "timKiemNangCao",
  TONG_HOP_PHIEU_LINH_THUOC: "THPLT",
  TONG_HOP_PHIEU_HOAN_TRA_THUOC: "THPHTT",
  LINH_HAO_PHI_THUOC: "LHPT",
  TRA_HAO_PHI_THUOC: "THPT",
  TONG_HOP_PHIEU_LINH_VAT_TU: "THPLVT",
  TONG_HOP_PHIEU_HOAN_TRA_VAT_TU: "THPHTVT",
  LINH_HAO_PHI_VAT_TU: "LHPVT",
  TRA_HAO_PHI_VAT_TU: "THPVT",
  TONG_HOP_PHIEU_LINH_MAU: "THPLM",
  TONG_HOP_PHIEU_HOAN_TRA_MAU: "THPHTM",
  LINH_HAO_PHI_MAU: "LHPM",
  TRA_HAO_PHI_MAU: "THPM"
}

export const listMenuTaoPhieuThuoc = [
  {
    groupName: "Kho nội trú, vật tư",
    listItem: [
      {
        code: "THPLT",
        name: "Tổng hợp phiếu lĩnh thuốc"
      },
      {
        code: "THPHTT",
        name: "Tổng hợp phiếu hoàn trả thuốc"
      },
      {
        code: "LHPT",
        name: "Lĩnh hao phí thuốc"
      },
      {
        code: "THPT",
        name: "Trả hao phí thuốc"
      },
    ]
  }
]

export const listMenuTaoPhieuVatTu = [
  {
    groupName: "Kho nội trú, vật tư",
    listItem: [
      {
        code: "THPLVT",
        name: "Tổng hợp phiếu lĩnh vật tư"
      },
      {
        code: "THPHTVT",
        name: "Tổng hợp phiếu hoàn trả vật tư"
      },
      {
        code: "LHPVT",
        name: "Lĩnh hao phí vật tư"
      },
      {
        code: "THPVT",
        name: "Trả hao phí vật tư"
      },
    ]
  }
]

export const listMenuTaoPhieuMau = [
  {
    groupName: "Kho nội trú, vật tư",
    listItem: [
      {
        code: "THPLM",
        name: "Tổng hợp phiếu lĩnh máu"
      },
      {
        code: "THPHTM",
        name: "Tổng hợp phiếu hoàn trả máu"
      },
      {
        code: "LHPM",
        name: "Lĩnh hao phí máu"
      },
      {
        code: "THPM",
        name: "Trả hao phí máu"
      },
    ]
  }
]

export const listMenuBaoCaoMau = [
  {
    groupName: "",
    listItem: [
      {
        code: "BYLMHN",
        name: "Bảng y lệnh máu hàng ngày"
      },
      {
        code: "STHMHN",
        name: "Số tổng hợp máu hàng ngày"
      },
      {
        code: "IGPL",
        name: "In gộp phiếu lĩnh/Trả tổng hợp y lệnh + tú trực"
      },
    ]
  }
]

export const listMenuTimKiem = [
  {
    groupName: "",
    listItem: [
      {
        code: "TCTG",
        name: "Tùy chọn thời gian"
      },
      {
        code: "trongNgay",
        name: "Trong ngày"
      },
      {
        code: "trongTuan",
        name: "Trong tuần"
      },
      {
        code: "trongThang",
        name: "Trong tháng"
      },
      {
        code: "homQua",
        name: "Hôm qua"
      },
      {
        code: "7NgayGanDay",
        name: "7 ngày gần đây"
      },
      {
        code: "30NgayGanDay",
        name: "30 ngày gần đây"
      },
      {
        code: "timKiemNangCao",
        name: "(Tìm kiếm nâng cao)"
      },
    ]
  }
]