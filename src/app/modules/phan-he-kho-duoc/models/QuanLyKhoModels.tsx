import { INhaCungCap, NhaCungCap } from "./NhaCungCapModel";

export interface IPhieuNhapKho {
  id?: string | null;
  khoNhap: IKho | null;
  nhaCungCap: NhaCungCap | null;
  maSoThue: string;
  hopDong: string;
  soHopDong: string;
  ngayLap: string;
  maPhieu: string;
  nguoiGiao: string;
  nguoiNhan: string;
  loaiHangHoa: ILoaiHangHoa | null;
  soLo: string;
  trangThai: ITrangThaiNhapKho | null;
  listHangHoa?: any[];
}

export interface IHangHoaNhap {
  code?: string;
  product?: any;
  donVi?: any;
  soLo?: string;
  soQDTT?: string;
  soQuanLy?: string;
  theTich?: string;
  ngayLayMau?: string;
  ngayNhap?: string;
  barcode?: string;
  namSX?: string;
  hangSX?: string;
  nongDo?: string;
  hamLuong?: string;
  hanSuDung?: string;
  soLuongNhap?: string;
  soNhap?: string;
  ghiChu?: string;
}

export interface INguoiThamGia {
  id?: number;
  name?: string;
}

export interface ITrangThaiNhapKho {
  id?: number;
  name?: string;
}

export interface IQuyetDinhTT {
  index?: number;
  winningBidDecisionCode: string;
  numbersBidWinning: string;
  bidWinningDecisionGroup: string;
  yearOfWinBidDecision: number | null;
  bidQuantity: number | null;
}

export interface ILoaiHangHoa {
  id?: number;
  name?: string;
  code?: string;
}

export interface IHangHoaVatTu {
  maHang?: string;
  tenHang: any;
  donVi: string;
  namSX: string;
  hangSX: string;
  maQDTT: string;
  soLo: string;
  hanSuDung: string;
}

export interface IHangHoaMau {
  maMau: string;
  tenMau: string;
  chePhamMau: string;
  donVi: string;
  ngayLayMau: string;
  soQuanLy: string;
  ngayNhap: string;
  theTich: number;
}

export interface IHangHoaThuoc {
  maThuoc: string;
  tenThuoc: string;
  donVi: string;
  namSX: number;
  hangSX: string;
  maQDTT: string;
  soLo: string;
}

export interface IHangSanXuat {
  id: number;
  name: string;
}

export interface IStatus {
  code?: string;
  name?: string;
}

export interface IKho {
    id?: string;
    code: string;
    name: string;
    address: string;
    areaQuantity?: string | number;
    floorQuantity?: string | number;
    areas?: any[];
    floors?: any[];
    productTypes?: any[];
    productTypeIds?: string[];
    isView?: boolean;
  }
  
  export interface IXuatKho {
    id?: string;
    wareHouse: string;
    receiver: string;
    deliver: string;
    createDate: string;
    creator: string;
    code: string;
    status: string;
    typeGoods: ILoaiHangHoa | null;
    wareHouseFor: ILoaiHangHoa | null;
    someContract?: string;
    supplier?: string;
    patientCode?: string;
    reason?: string;
  }
  export interface ILoaiHangHoa {
    id?: number;
    name?: string;
  }
  interface commonHangHoa {
    ma: string;
    ten: string;
    donVi: string;
    hanSuDung: string;
    soDangKi: string;
    soLuongTon: string;
    soLo:string;
    soLuongXuat:string
  }
  export interface xuatKhoMau extends commonHangHoa {
    nongDo: string;
    theTich: string;
    ngayLay: string;
    hamLuong: string;
  }
  
  export interface xuatKhoVatTu extends commonHangHoa {
    hangSanXuat: string;
    nuocSanXuat: string;
    
  }
  export interface xuatKhoThuoc extends commonHangHoa {
    hoatChat: string;
    hamLuong: string;
    nongDo: string;
    hangSanXuat: string;
    nuocSanXuat: string;
    theTich: string;
    ngayLay: string;
  }
  