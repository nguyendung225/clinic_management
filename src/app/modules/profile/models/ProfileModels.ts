export interface ProjectType {
  id?: string;
  code: string;
  name: string;
  status: string;
  description?: string;
}
export interface ProfileInfo {
  id?: string;
  code: string;
  name: string;
  gender: string;
  birthdate: string;
  phone: string;
  emailCaNhan: string;
  phongBan: string;
  viTriCongViecText: string;
  chucVuText: string;
}

export interface SearchObject {
  pageIndex: number,
  pageSize: number,
  keyword: string,
  id?: string;
  code?: string;
  name?: string;
  gender?: string;
  birthdate?: string;
  phone?: string;
  emailCaNhan?: string;
  phongBan?: string;
  viTriCongViecText?: string;
  chucVuText?: string;
}

export interface ItemListAPI {
  id?: string
  value?: string
  name?: string
  code?: string
  uuidKey?: string
  attributeId?: string
  departmentId?: string
  departmentName?: string
}