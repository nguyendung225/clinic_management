export interface benhNhan {
  mpi: string;
  hoTen: string;
  ngaySinh: string;
  soVaoVien?: string
  gioiTinh: string | undefined | object;
  soDinhDanh: string;
  tuoi?: string
  tenantId?: number;
  soDienThoai: string;
  maDanToc: string;
  maQuocTich: string;
  soNha: string;
  diaChi: string;
  wardId: string;
  districtId: string;
  provinceId: string;
  professionCode: string;
  benhNhanMqh: benhNhanMqh;
  benhNhanBhyt: benhNhanBhyt;
  benhNhanCase: benhNhanCase;
}

export type benhNhanCase = {
  cin?: string;
  loaiDoiTuong: string;
  loaiTiepNhan: string;
  thoiGianTiepNhan: string;
  ngayHen?: string;
  isUuTien?: boolean;
  isCapCuu?: boolean;
  isBnLao?: boolean;
  isBnHiv?: boolean;
  isGiayNghiOm?: boolean;
  isGiayCongTac?: boolean;
  isGiayTamTru?: boolean;
  vienPhi?: boolean;
  trangThai?: string;
  yeuCauKham?: string,
  phongKham?: string,
  loaiGia?: string,
}

export type benhNhanBhyt = {
  soBhyt: string;
  noiDangKy: string;
  tuNngay: string;
  denNngay: string;
  mienDongCt: string;
  loaiTuyen: string;
  maKv: string;
  is5nam?: boolean;
  is6thang?: boolean;
}

export type benhNhanMqh = {
  hoTen: string;
  maQuanHe: string;
  diaChi: string;
  soDienThoai: string;
}

export type bangKhamBenhProps = {
  listData: bangKhamBenh[]
  state: boolean
  keyword: string
  handleDeleteDichVu?: (id: any) => void  
}
export type bangLichSuKhamProps = {
  state: boolean
  keyword: string
}

export interface bangKhamBenh {
  id?: string
  code?: string
  name: string
  noiThucHien?: string
  donGia?: string
}

export interface bangLichSuKham {
  lan: string
  ngay: string
  kham: string
}

export interface SearchObject {
  pageIndex: number;
  pageSize: number;
  keyword: string;
  type: string;
  id?: string;
  code?: string;
  name?: string;
  CCCD?: string;
  phone?: string;
  address?: string;
}

export interface tinhModel {
  name: string,
  code: number,
  division_type: string,
  codename: string,
  phone_code: number,
  districts: huyenModel[]
}
export interface huyenModel {
  name: string,
  code: number,
  division_type: string,
  codename: string,
  phone_code: number,
  wards: xaModel[]
}

export interface xaModel {
  name: string,
  code: number,
  division_type: string,
  codename: string,
  district_code: number,
}



