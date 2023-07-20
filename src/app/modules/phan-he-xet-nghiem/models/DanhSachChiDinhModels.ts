export interface DSChiDinh {
  idNhom?: string
  tenNhom: string
  dsDichVu: DSDichVu[]
}

export interface DSDichVu {
  maDichVu: string
  tenDichVu: string
  soLuong: number
  trangThai: string
  ghiChu: string
}