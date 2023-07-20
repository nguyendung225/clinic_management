export interface DSKQ {
  idNhom?: string;
  tenNhom: string;
  dsDichVu: DSDV[];
}

export interface DSDV {
  barcode: string;
  maChiSo: string;
  tenChiSo: string;
  ketQua: number;
  triSoBinhThuong: string;
  donViTinh: string;
  soLuong: number;
  trangThai: string;
  maMayXN: string;
  ghiChu: string;
}