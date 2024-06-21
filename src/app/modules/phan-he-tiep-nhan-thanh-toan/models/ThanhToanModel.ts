import { ObjectSelectAutocomplete } from "./PhanHeTiepNhanModel";

export type orders = {
  conceptCode: string;
  conceptId: number;
  conceptName: string;
  departmentId: string;
  departmentName: string;
  id: string;
  orderTypeId: number;
  price: number;
  promotionPercent: number;
  promotionPrice: number;
  quantity: number;
  roomId: string;
  roomName: string;
  totalPrice: number;
};

export interface dsBenhNhan {
  data: [];
  totalElements: number;
  totalPages: number;
}

export interface thanhToan {
  advanceMoney: number;
  benhNhanId: string;
  caseId: string;
  createDate: string;
  orders: [orders];
  id: string;
  locationId: string;
  modifiedBy: string;
  modifyDate: string;
  payMoney: number;
  paymentMethod: any;
  promotionPercent: number;
  promotionPrice: number;
  statusId: string;
  tenantId: string;
  totalMoney: number;
  voucherType: any;
  tongTienDichVu: number;
  tenBenhNhan: string;
  mpi: string;
  danhSachPhieuThanhToan: any;
  description: string;
  tienHoanUng: number;
}

export interface fillterDSBenhNhan {
  hoTen: string;
  pin: string;
}

export interface IItemMenu {
  code: string;
  name: string;
}
export interface IThanhToanMenu {
  groupName: string;
  listItem: IItemMenu[];
}

export interface IPhieu {
  loaiPhieu: ObjectSelectAutocomplete | null;
  soTien: string;
  mienGiam: string;
  hinhThuc: ObjectSelectAutocomplete | null;
  noiDungThu: string;
  lyDoMienGiam: string;
  soPhieu?: string;
  ngayThu?: string;
  nguoiThu?: string;
}

export interface IValuePhieuIn {
  title: string;
  stylePrint: string;
  size?: "xl" | "sm" | "lg";
  component: JSX.Element;
}

export interface IRenderPhieuIn {
  [key: string]: IValuePhieuIn
}

export interface IPTTT {
  ma?: string;
  ten?: string;
}