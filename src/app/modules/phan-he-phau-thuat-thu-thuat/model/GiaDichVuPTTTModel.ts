
export interface ChiTietGiaDichVuPTTTModel {
  id: string;
  maDV?: string;
  tenDV?: string;
  soLuong?: string;
  loaiPTTT?: string;
  tyLe?: string;
  tienChiTra?: string;
  trangThai?: string;
  nguoiLap?: string;
  ghiChu?: string;
}

export interface SearchObject {
  pageIndex: number,
  pageSize: number,
  keyword: string,
}

export interface BangGiaDichVuProps {
  listData: ChiTietGiaDichVuPTTTModel[];
  keyword: string;
}