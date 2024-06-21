export interface DanhSachBenhNhanInterface {
  id:string;
  status: string;
  mpt: string;
  hoTen: string;
  gioiTinh: string;
  personId: string;
  caseId: string;
  loaiDoiTuong: string;
  age: number;
  loaiTiepNhan: string;
  duyetChiDinh?: string;
  ngoaiGio?: string;
}
export interface IDSBenhNhan {
  maBN: string;
  tenBN: string;
  soBHYT: string;
  gioiTinh: string;
  tuoi: string;
  khoaDieuTri: string;
  phongDieuTri: string;
  giuong: string;
  bacSiDieuTri: string;
  batDauBHYT: string;
  ketThucBHYT: string;
}