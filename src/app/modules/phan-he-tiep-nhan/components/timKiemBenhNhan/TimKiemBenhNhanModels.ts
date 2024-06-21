import { Person, benhNhan } from "../../../phan-he-tiep-nhan-thanh-toan/models/PhanHeTiepNhanModel";

export interface TimKiemBenhNhanInterface {
  id?: string;
  mpi: string;
  hoTen: string;
  ngaySinh: string;
  gioiTinh: string;
  healthInsuranceCode: string;
  soDinhDanh: string;
  phone: string;
  receiveDate: string;
  appointmentClinic: string;
  address: string;
}
export interface TimKiemBenhNhanModel extends benhNhan {
  id?: string | string
  receiveDate?: string
  appointmentClinic?: string
  person?: Person;
  soBhyt?: string;
  soDienThoai?: string;
  diaChi?: string;
}