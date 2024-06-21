export const CODE_MENU_DIEU_TRI = {
  CHI_DINH_MAU: "mau",
  CHI_DINH_THUC_PHAM_CHUC_NANG: "thucPhamChucNang",
  DANH_SACH_PHAC_DO: "danhSachPhacDo"
}

export const listMenuThuocVatTuSA = [
  {
    groupName: "Chỉ định",
    listItem: [
      {
        code: "thuocVatTu",
        name: "Chỉ định thuốc + vật tư"
      },
      {
        code: "thuoc",
        name: "Chỉ định thuốc"
      },
      {
        code: "vatTu",
        name: "Chỉ định vật tư"
      },
      {
        code: "mau",
        name: "Chỉ định máu"
      },
      {
        code: "thucPhamChucNang",
        name: "Chỉ định thực phẩm chức năng"
      },
      {
        code: "suatAn",
        name: "Chỉ định suất ăn"
      },
    ]
  },
  {
    groupName: "Hoàn trả",
    listItem: [
      {
        code: "hoanTraThuoc",
        name: "Hoàn trả thuốc"
      },
      {
        code: "hoanTraVatTu",
        name: "Hoàn trả vật tư"
      },
    ]
  }
]

export const listMenuPhacDoDieuTri = [
  {
    groupName: "",
    listItem: [
      {
        code: "danhSachPhacDo",
        name: "Danh sách phác đồ"
      },
    ]
  },
  {
    groupName: "Chọn phác đồ",
    listItem: [
      {
        code: "ungThuVomHong",
        name: "Ung thư vòm họng",
      },
      {
        code: "ungThuVu",
        name: "Ung thư vú"
      },
    ]
  }
]