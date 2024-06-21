import { ObjectSelectAutocomplete, Person, benhNhan } from "./PhanHeTiepNhanModel";

export interface ProjectType {
  id?: string;
  code: string;
  name: string;
  status: string;
  description?: string;
}
export interface receptionList {
  id?: string;
  mpi?: string;
  hoTen?: string;
  soDinhDanh?: string;
  person?: object;
  yeuCauKham?: string | null;
  phongKham?: string;
  receptionDate?: string;
  fee?: string;
  prioritize?: boolean;
}

export interface danhSachTiepNhan extends benhNhan {
  id?: string;
  mpt?:string;
  vienPhi?: string;
  thoiGianTiepNhan?: string;
  isUuTien?: boolean;
  person?: Person;
}

export interface danhSachHenKham extends benhNhan {
  id?: string;
  mpt?:string;
  vienPhi?: string;
  thoiGianHenKham?: string;
  isUuTien?: boolean;
  person?: Person;
}

export interface SearchObject {
  pageIndex: number,
  pageSize: number,
  keyword: string,
  id?: string;
  code?: string;
  name?: string;
  CCCD?: string;
  phone?: string;
  address?: string;
  yeuCauKham?: string;
  phongKham?: string;
  receptionDate?: string;
  fee?: string;
  prioritize?: boolean;
}

export type INguoiGioiThieu = {
  id?: string | number;
  maNguoiGioiThieu: string | null;
  tenNguoiGioiThieu: string | null;
  khoa: ObjectSelectAutocomplete | null;
  soDienThoai: string | null;
  diaChi: string | null;
  thongTinChuyenTien: string | null;
  nhomHoaHong: ObjectSelectAutocomplete | null;
  ghiChu: string | null;
}