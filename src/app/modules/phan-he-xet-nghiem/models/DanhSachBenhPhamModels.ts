import { DSChiDinh } from "./DanhSachChiDinhModels"

export interface DanhSachBenhPhamInterface {
  soGoi: number
  trangThai: string
  idTrangThai:number
  soPhieu: string
  barcode: string
  maBN: string
  tenBN: string
  gioiTinh: string
  ngaySinh: string
  BHYT: string
  khoa: string
  phongChiDinh: string
  TGChiDinh: string
  TGLayMau: string
  DSChiDinh: DSChiDinh[]
}

export interface BenhNhanBhyt {
  createDate: string;
  createdBy: string;
  modifyDate: string;
  modifiedBy: string;
  benhNhanId: string;
  soBhyt: string;
  noiDangKy: string;
  tuNngay: null | string;
  denNngay: null | string;
  mienDongct: null | string;
  loaiTuyen: string;
  maKv: string;
  is5nam: boolean;
  is6thang: boolean;
}

export interface BenhNhanCase {
  createDate: string;
  createdBy: string;
  modifyDate: string;
  modifiedBy: string;
  patientId: string;
  cin: string;
  loaiDoiTuongId: null | string;
  loaiDoiTuongName: null | string;
  loaiDoiTuongCode: null | string;
  loaiTiepNhanId: null | string;
  loaiTiepNhanName: null | string;
  loaiTiepNhanCode: null | string;
  thoiGianTiepNhan: string;
  ngayHen: null | string;
  isUuTien: boolean;
  isCapCuu: boolean;
}

export interface BenhNhanMqh {
  createDate: string;
  createdBy: string;
  modifyDate: string;
  modifiedBy: string;
  benhNhanId: string;
  hoTen: string;
  maQuanHe: string;
  diaChi: string;
  soDienThoai: string;
}

export interface IDichVus {
  parent: {
    code: string;
    hasGroupService: boolean;
    name: string;
    id: number;
  };
  hasServiceGroup: string;
  serviceCode: string;
  servicePrice: string;
  insurancePrice: string;
  conceptAnswerName: string;
  concept: {
    code: string;
    name: string;
    id: number;
  };
  id: number;
  isChecked: boolean;
  parentCode: string;
  quantity: number;
  departmentName: string;
  departmentId: string;
}

export interface Person {
  createDate: null | string;
  createdBy: null | string;
  modifyDate: null | string;
  modifiedBy: null | string;
  name: null | string;
  birthDay: null | string;
  gender: null | string;
  ethnicCode: null | string;
  ethnicId: null | string;
  ethnicName: null | string;
  nationalityCode: null | string;
  nationalityName: null | string;
  nationalityId: null | string;
  address: null | string;
  houseNumber: null | string;
  fullAddress: null | string;
  communeCode: null | string;
  communeName: null | string;
  communeId: null | string;
  districtCode: null | string;
  districtName: null | string;
  districtId: null | string;
  provinceCode: null | string;
  provinceName: null | string;
  provinceId: null | string;
  phoneNumber: null | string;
  citizenId: null | string;
  jobCode: null | string;
  jobName: null | string;
  jobId: null | string;
  tenantId: null | string;
  userId: null | string;
  orgId: null | string;
}

export interface IDanhSachBenhPham {
  id: string;
  createDate: string;
  createdBy: string;
  modifyDate: string;
  modifiedBy: string;
  personId: string;
  mpi: string;
  pin: string;
  hoTen: string;
  ngaySinh: string;
  gioiTinh: string;
  soDinhDanh: string;
  tenantId: number;
  soVaoVien: number;
  locationId: string;
  benhNhanBhyt: BenhNhanBhyt;
  benhNhanCase: BenhNhanCase;
  benhNhanMqh: BenhNhanMqh;
  person: Person;
  status: string;
  queueNumber: number;
  benhNhanId: string;
  DSChiDinh: DSChiDinh[];
}
