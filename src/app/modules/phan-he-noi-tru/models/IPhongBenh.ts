import { IDichVu } from "./IDichVu";

export interface IBenhNhan {
  id?: string;
  maGiuong?: string;
  namGhep?: number;
  tenBenhNhan?: string;
  maBenhNhan?: string;
  maDieuTri?: string;
  maBenhAn?: string;
  ngaySinh?: string;
  gioiTinh?: string;
  doiTuong?: string;
  soBHYT?: string;
  hanTheBHYT?: string;
  diaChi?: string;
  benhChinh?: string;
  benhPhu?: string;
  bacSiDieuTri?: string;
  dsDichVu?: IDichVu[]
}

export interface IPhongBenh {
  id?: string;
  tenPhong: string;
  dsBenhNhan: IBenhNhan[];
}