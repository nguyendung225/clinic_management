import { benhNhan } from "../../models/PhanHeTiepNhanModel";

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
  id?: string
  receiveDate?: string
  appointmentClinic?: string
}