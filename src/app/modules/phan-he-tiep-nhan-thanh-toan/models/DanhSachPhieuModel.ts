export interface DanhSachPhieuProps {
  open: boolean;
  handleClose: () => void;
}

export interface BangDsPhieuModel {
  id: string;
  caseId: string;
  patientId: string;
  locationId: string;
  tenantId: number;
  soPhieu: string;
  maThanhToan: string;
  loaiPhieu: number;
  tenLoaiPhieu: string;
  phuongThucThanhToan: string;
  ngayTao: string;
  nguoiTao: string;
  advanceMoney: number;
  totalMoney: number;
  payMoney: number;
  promotionPrice: number;
  promotionPercent: number;
  tienConThieu: number;
  tienHoanUng: number;
  tongTienDichVu: number;
  noiDung: string;
  danhSachDichVuThanhToan: null;
}

export interface PhieuThanhToanModel {
    id: string;
    createDate: string;
    createdBy: string;
    modifyDate: string;
    modifiedBy: string;
    billNumber: string;
    paidMoney: number;
    code: string;
    totalMoney: number;
    statusId: number;
    statusName: string;
    voucherType: number;
    voucherName: string;
    advanceMoney: number;
    promotionMoney: number;
    promotionPercent: number;
    tenantId: number;
    locationId: string;
    patientId: string;
    caseId: string;
    cashierName: string;
    cashierCode: null;
    description: null;
    benhNhanDichVus: [
      {
        id: string;
        createDate: string;
        createdBy: string;
        modifyDate: string;
        modifiedBy: string;
        soPhieu: null;
        conceptId: 56;
        conceptCode: string;
        conceptName: string;
        departmentId: string;
        departmentName: string;
        roomId: string;
        roomName: string;
        quantity: number;
        statusId: number;
        statusName: string;
        caseId: string;
        price: number;
        totalPrice: number;
        promotionPercent: number;
        promotionPrice: number;
        deleted: false;
        deleteDate: null;
        deletedBy: null;
        deleteReason: null;
        phieuThanhToanId: null
      },
    ];
    benhNhan: {
      id: string;
      createDate: string;
      createdBy: string;
      modifyDate: string;
      modifiedBy: string;
      personId: string;
      mpi: string;
      pin: string;
      hoTen: string ;
      ngaySinh: string;
      gioiTinh: string;
      soDinhDanh: string;
      tenantId: number;
      soVaoVien: string;
      locationId: string;
      avatar: null;
      soDienThoai: null;
      diaChi: string;
      caseId: null;
      benhNhanBhyt: any;
      benhNhanCase: null;
      benhNhanMqh: any;
      person: null;
      sinhHieu: null;
      danhSachDichVu: null
    }
}

export interface SearchObject {
  pageIndex: number;
  pageSize: number;
  keyword: string;
  ipm?: string;
  loaiPhieu?: string;
  tuNgay?: string;
  denNgay?: string;
}

