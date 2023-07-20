
export interface ProjectType {
  id?: string;
  code: string;
  name: string;
  status: string;
  description?: string;
}
export interface receptionList {
  id?: string;
  mpi?: string;
  hoTen?: string;
  soDinhDanh?: string;
  person?: object;
  yeuCauKham?: string | null;
  phongKham?: string;
  receptionDate?: string;
  fee?: string;
  prioritize?: boolean;
}
export interface SearchObject {
  pageIndex: number,
  pageSize: number,
  keyword: string,
  id?: string;
  code?: string;
  name?: string;
  CCCD?: string;
  phone?: string;
  address?: string;
  yeuCauKham?: string;
  phongKham?: string;
  receptionDate?: string;
  fee?: string;
  prioritize?: boolean;
}