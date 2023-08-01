import { IResponse } from './IResponse';

interface IBenhNhanBHYT {
  benhNhanId: string;
  createDate?: string;
  createdBy?: string;
  denNngay: string;
  is5nam: boolean;
  is6thang: boolean;
  loaiTuyen: string;
  maKv: string;
  mienDongct: string;
  modifiedBy?: string;
  modifyDate?: string;
  noiDangKy: string;
  soBhyt: string;
  tuNngay: string;
}

interface IBenhNhanCase {
  cin: string;
  createDate?: string;
  createdBy?: string;
  isCapCuu: boolean;
  isUuTien: boolean;
  loaiDoiTuongCode: string;
  loaiDoiTuongId: string;
  loaiDoiTuongName: string;
  loaiTiepNhanCode: string;
  loaiTiepNhanId: string;
  loaiTiepNhanName: string;
  modifiedBy?: string;
  modifyDate: string;
  ngayHen: string;
  patientId: string;
  thoiGianTiepNhan: string;
}

interface IBenhNhanMQH {
  benhNhanId: string;
  createDate?: string;
  createdBy?: string;
  diaChi: string;
  hoTen: string;
  maQuanHe: string;
  modifiedBy?: string;
  modifyDate?: string;
  soDienThoai: string;
}

interface IPerson {
  address: string;
  birthDay: string;
  citizenId: string;
  communeCode: string;
  communeId: number;
  communeName: string;
  createDate: string;
  createdBy: string;
  districtCode: string;
  districtId: number;
  districtName: string;
  ethnicCode: string;
  ethnicId: string;
  ethnicName: string;
  fullAddress: string;
  gender: string;
  houseNumber: string;
  jobCode: string;
  jobId: string;
  jobName: string;
  modifiedBy: string;
  modifyDate: string;
  name: string;
  nationalityCode: string;
  nationalityId: string;
  nationalityName: string;
  orgId: string | null;
  phoneNumber: string;
  provinceCode: string;
  provinceId: number;
  provinceName: string;
  tenantId: number;
  userId: string | null;
}

export interface IBenhNhan {
  benhNhanBhyt: IBenhNhanBHYT;
  benhNhanCase: IBenhNhanCase;
  benhNhanMqh: IBenhNhanMQH;
  createDate?: string;
  createdBy?: string;
  gioiTinh: string;
  hoTen: string;
  id: string;
  locationId: string;
  modifiedBy: string;
  modifyDate: string;
  mpi: string;
  ngaySinh: string;
  person: IPerson;
  personId: string;
  pin: string;
  soDinhDanh: string;
  soVaoVien: number;
  status: string;
  tenantId: number;
}

export interface IBenhNhanResponse extends IResponse<IBenhNhan> {}

export interface IUpdateStatusResponse extends Omit<IResponse<null>, 'data'> {
  data: boolean;
}

export interface ThuocInfo {
  tenDuoc: string;
  sang: string;
  trua: string;
  chieu: string;
  toi: string;
  soNgay: string;
  soLuong: string;
  donGia: string;
  thanhTien: string;
  duongDung: string;
  loaiThuoc: string;
  cachDung: string;
  ghiChu: string;
}

export interface LichSuKhamInfo {
  ngayKham: string;
  yeuCauKham: string;
  benhChinh: string;
  benhPhu: string;
  ghiChu: string;
}

export interface LichSuHoiChanInterface {
  index: number,
  ngayTao:string
}

export enum GIOI_TINH {
  MALE = 'Nam',
  FEMALE = 'Nữ'
}