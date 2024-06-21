export interface NhaCungCap {
  maNhaCungCap: string;
  tenNhaCungCap: string;
  diaChi: string;
  dienThoai: string;
  ghiChu: string;
  id?: string;
}

export interface INhaCungCap{
  id?: string;
  code: string;
  name: string;
  address: string;
  province: {id?: string | number} | null;
  phone: string;
  taxCode: string;
  unit: {id?: string} | null;
  note: string;
}

export interface IPayloadNhaCungCap {
  id?: string;
  code: string;
  name: string;
  address: string;
  provinceId?: string | number;
  phone: string;
  taxCode: string;
  unitId?: string | number;
  note: string;
}
