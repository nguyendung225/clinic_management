export interface DanhMucDichVuModel {
  id?: string;
  maDichVu?: string;
  tenDichVu?: string;
  giaBhyt?: number;
  giaVienPhi?: number;
  giaDichVu?: number;
}

export interface DanhMucPhongKhamModel {
  id?: string;
  maPhong?: string;
  tenKhoaPhong?: string;
  soPhong?: number;
}

export interface DanhMucBacSiModel {
  id?: string;
  maChucDanh?: string;
  hoTen?: string;
  phongBan?: string;
}

export interface DanhMucNgayLamViecModel {
  id?: string;
  ngay?: string;
}

export interface DanhMucChonThoiGianKhamModel {
  id?: string;
  tu?: string;
  den?: string;
  stt?: number;
}

export interface DanhMucNgayNghiModel {
  id?: string;
  tu?: string;
  den?: string;
}