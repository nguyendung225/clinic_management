export interface danhSachDichVuPTTT {
  id: string;
  status?: string;
  maBA?: string;
  maBN?: string;
  tenBN?: string;
  soPhieu?: string;
  bsChiDinh?: string;
  tgChiDinh?: string;
  khoa?: string;
  phongChiDinh?: string;
  phongThucHien?: string;
  tgGayMe?: string;
}

export interface SearchObject {
  pageIndex: number,
  pageSize: number,
  keyword: string,
}

export interface BangDanhSachDichVuProps {
  listData: danhSachDichVuPTTT[];
  keyword: string;
}