import { danhSachDichVuPTTT } from "./DanhSachDichVuPTTTModel";

export interface DanhSachTiepNhanGayMeModel {
  id: string;
  soGoi: string;
  status: string;
  maBA?: string;
  maBN?: string;
  tenBN?: string;
  soPhieu?: string;
  bsChiDinh?: string;
  khoa?: string;
  phongChiDinh?: string;
}

export interface SearchObject {
  pageIndex: number,
  pageSize: number,
  keyword: string,
}

export interface BangDanhSachTiepNhanGayMeProps {
  listData: danhSachDichVuPTTT[];
  keyword: string;
}