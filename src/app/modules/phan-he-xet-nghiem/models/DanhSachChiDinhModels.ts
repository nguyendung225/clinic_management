export interface DSChiDinh {
  idNhom?: string
  tenNhom: string
  dsDichVu: DSDichVu[]
}

export interface IKetQua {
  moTa: string
  ketLuan: string
  ghiChu: string
  mayCLS: string
  tgThucHien: string
}

export interface DSDichVu {
  maDichVu: string
  tenDichVu: string
  soLuong: number
  trangThai: string
  ghiChu: string
  ketQua?: IKetQua
}