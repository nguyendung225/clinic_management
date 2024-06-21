export type searchPatientParams = {
  pageIndex?: number;
  pageSize?: number;
  pin?: string;
  status?: number;
  tuNngay?: string;
  denNngay?: string;
  hoTen?: string;
  locationId?: string;
  mpi?: string;
  soDinhDanh?: string;
  tenantId?: number;
}

export type updatePatientStatusParams = {
  billNumber: number;
  conceptCode?: string;
  conceptId?: number;
  conceptName?: string;
  departmentId: string;
  departmentName?: string;
  orderTypeId?: number;
  price?: number;
  quantity?: number;
  roomId: string;
  roomName?: string;
  status?: boolean;
}