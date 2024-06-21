export interface TTNgoaiTruModel {
  maBenhAn: string;
  soLuuTru: string;
  soVaoVien: string;
  loaiBenhAn: string;
  maDieuTri: string;
}

export interface TTHanhChinhModel {
  id?: string
  ten?: string
  maBenhNhan?: string
  ngaySinh?: string
  namsinh?: string
  tuoi?: string
  gioiTinh?: string
  ngheNghiep?: string
  danToc?: string
  quocTich?: string
  soNha?: number
  duong?: string
  diaChi?: string
  xa?: string
  huyen?: string
  thanhPho?: string
  CCDC?: string
  dienThoai?: string
  lamViec?: string
  nguoiNha?: string
  TenNN?: string
  diaChiNN?: string
  sdtNN?: string
}

export interface TTDieuTriModel {
  doiTuong?: string
  soBHYT?: string
  ktThe?: boolean
  noThe?: boolean
  tuNgay?: string
  denNgay?: string
  mg?: string
  noiDKKCB?: string
  noiChuyenDen?: string
  diaChiBHYT?: string
  maNS?: string
  tuyen?: string
  bh5Nam?: boolean
  bh6Thang?: boolean
  tgDu5Nam?: string
  vaoKhoaLuc?: string
  noiGT?: string
  raKhoaLuc?: string
  mucHuong?: string
  tgHuongDCT?: string
  vaoPhong?: string
  vaoTu?: string
  vaoLan?: string
  bacSiDieuTri?: string
  cdNoiGT?: string
  cdVaoVien?: string
  cdVaoKhoa?: string
  cdVaoVienKT?: string
  cdVaoKhoaKT?: string
  benhChinh?: string
  ghiChuBC?: string
  benhKemTheo?: string
  ghiChuBKT?: string
  thuThuat?: boolean
  phauThuat?: boolean
  taiBien?: boolean
  bienChung?: boolean
  kqDieuTri?: string
  ngayDieuTri?: string
  xuTri?: string
  giaiPhauBenh?: string
}

export interface loaiBenhAn {
  id: number;
  code: string;
  name: string;
  description?: string;
}