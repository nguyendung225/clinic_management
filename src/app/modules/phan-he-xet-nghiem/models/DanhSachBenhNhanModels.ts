import { ObjectSelectAutocomplete, benhNhanBhyt, benhNhanCase, benhNhanMqh, obs, xacThuc } from "../../phan-he-tiep-nhan-thanh-toan/models/PhanHeTiepNhanModel";

export interface IBenhNhanModel {
  gioiTinh: string;
  maBn: string;
  cccd?: string;
  hoTen: string;
  soDinhDanh?: string;
  diaChi?: string;
  age?: number;
  loaiDoiTuong?: number;
  loaiTiepNhan?: number;
  trangThai?: number;
  uuTien: number;
  dsDichVu?: any[];
  thuoc?: any[];
  barCode?: string;
  maBenhPham?: string;
}
export interface ILichSuModel {
  trangThaiXetNghiem?: number;
  batDau?: string;
  khoa?: string;
  phong?: string;
  ketThuc?: string;
  xuTri?: string;
  dich?: string;
}
export interface benhNhan {
  mpi: string;
  hoTen: string;
  ngaySinh?: number | null;
  thangSinh?: number | null;
  namSinh?: number | null;
  soVaoVien?: string;
  gioiTinh: any;
  soDinhDanh: string;
  tuoi?: string;
  tenantId?: number;
  soDienThoai?: string;
  maDanToc: string;
  maQuocTich: string;
  soNha: string;
  diaChi?: string;
  wardId: string;
  districtId: string;
  provinceId: string;
  professionCode: string;
  benhNhanMqh: benhNhanMqh;
  benhNhanBhyt: benhNhanBhyt;
  benhNhanCase: benhNhanCase;
  province: ObjectSelectAutocomplete | null;
  district: ObjectSelectAutocomplete | null;
  ward: ObjectSelectAutocomplete | null;
  danToc: ObjectSelectAutocomplete | null;
  quocTich: ObjectSelectAutocomplete | null;
  gender: ObjectSelectAutocomplete | null;
  job: ObjectSelectAutocomplete | null;
  quanHe: ObjectSelectAutocomplete | null;
  loaiDoiTuong: ObjectSelectAutocomplete | null;
  loaiTiepNhan: ObjectSelectAutocomplete | null;
  tenDichVu: any;
  phongKham?: any;
  avatar?: any;
  obs: obs;
  caseId?: string;
  id?: string;
  danhSachDichVu?: any;
  email?: string | null;
  isDatLichHen?: boolean;
  maHBBA?: string;
  nguoiNhap?: string;
  thoiDiemTaiNan: string;
  noiXayRaTaiNan: string;
  thx?: string;
  tinhTaiNan: ObjectSelectAutocomplete | null;
  tinhTaiNanId: string;
  huyenTaiNan: ObjectSelectAutocomplete | null;
  huyenTaiNanId: string;
  xaTaiNan: ObjectSelectAutocomplete | null;
  xaTaiNanId: string;
  thongTinDieuTri?: string;
  tinhTrangThuongTich?: string;
  tinhTrangThuongTichRaVien?: string;
  diaDiemXayRa: ObjectSelectAutocomplete | null;
  boPhanChanThuong: ObjectSelectAutocomplete | null;
  nguyenNhanTaiNan: ObjectSelectAutocomplete | null;
  loaiNgoDoc?: ObjectSelectAutocomplete | null;
  loaiTaiNanGiaoThong?: ObjectSelectAutocomplete | null;
  loaiTaiNanLaoDong?: ObjectSelectAutocomplete | null;
  xuTriTaiNan: ObjectSelectAutocomplete | null;
  dienBienSauTaiNan: ObjectSelectAutocomplete | null;
  muBaoHiem?: ObjectSelectAutocomplete | null;
  suDungChatKichThich?: ObjectSelectAutocomplete | null;
  xacThuc?: xacThuc | null;

  // test
  noiSinh?: ObjectSelectAutocomplete | null;
  noiSong?: ObjectSelectAutocomplete | null;
  dangKyKham?: ObjectSelectAutocomplete | null;
  BHYT?: {
    soThe1?: string;
    soThe2?: string;
    soThe3?: string;
    soThe4?: string;
    KCBBD?: string;
    hanThe?: {
      ngayStart?: string;
      thangStart?: string;
      namStart?: string;
      ngayEnd?: string;
      thangEnd?: string;
      namEnd?: string;
    };
  };

  //
  luc?: string;
  dkKham?: string;
  dichVu?: {
    code?: string;
    id?: number;
    insurancePrice?: string;
    name?: string;
    price?: string;
  };
  pkham?: {
    createDate?: string;
    createdBy?: string;
    modifyDate?: string;
    modifiedBy?: unknown;
    id?: string;
    name?: string;
    code?: string;
    tenantId?: number;
    locationId?: null;
    departmentId?: string;
    departmentName?: string;
    priceType?: {
      createDate?: string;
      createdBy?: unknown;
      modifyDate?: string;
      modifiedBy?: unknown;
      id?: string;
      parentId?: null;
      path?: string;
      uuidKey?: null;
      code?: string;
      name?: string;
      description?: null;
      type?: number;
      tenantId?: number;
      attributeValues?: [];
    };
  };
  encounter?: any;
  sinhHieu?: {
    mach: string;
    nhietDo: string;
    huyetAp1: string;
    huyetAp2: string;
    nhipTho: string;
    canNang: string;
    chieuCao: string;
    BMI: string;
  };
  chucVu?: string;
  donVi?: string;
  hoTenNguoiNha?: string;
  CCCDNguoiNha?: string;
  CCCD?: string;
  dienThoai?: string;
  capBac?: string;
}