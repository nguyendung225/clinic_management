import moment from "moment";
import {
  benhNhan
} from "../../phan-he-tiep-nhan-thanh-toan/models/PhanHeTiepNhanModel";
export const KEY_TAB_KHAM_BENH_HEN_KHAM = {
  LICH_SU: "0",
  GIA_DINH: "1",
  DAT_HEN: "2",
  TIEM_CHUNG: "3",
};
export const KEY_TAB_BENH_NHAN = {
  LICH_SU: "0",
  DICH_VU: "1",
};
export interface bangLichSuKham {
  lan: string;
  ngay: string;
  // dichVus: string
  xuLy: string;
  bacSi: string;
  khoa: string;
  phong: string;
  chuanDoan: string;
}
export interface danhSachHenKham {
  id?: string;
  mpt?: string;
  vienPhi?: string;
  thoiGianHenKham?: string;
  isUuTien?: boolean;
  trangThai?: number;
  lienHe?: string;
  soDatHen?: number;
  maBN?: string;
  hoTen?: string;
  ngaySinh?: string;
  gioiTinh?: string;
  sdt?: string;
  cccd?: string;
  doiTuong?: string;
  soTheKCB?: string;
  ngayHenKham?: string;
  dichVuKham?: string;
  phongKham?: string;
  tuoi?: number;
}
export interface bangKhamBenh {
  id: string;
  orderId?: string;
  conceptId: string;
  conceptName: string;
  conceptCode: string;
  departmentId: string;
  departmentcode: string;
  departmentName: string;
  roomName?: string;
  roomId?: string;
  price: number;
  totalPrice: number;
  promotionPrice?: number;
  promotionPercent?: number;
  quantity: number;
  insurancePrice: string;
  statusId: number;
}
export const KEY_TAB_DS_HEN_KHAM = {
  TIEP_NHAN: "0",
  DS_TIEP_NHAN: "1",
  THANH_TOAN: "2",
  CD_DICH_VU: "3",
  DS_HEN_KHAM: "4",
  DS_CHO_GOI: "5",
  DV_KHAM: "6",
};

export const trangThaiHenKham = {
  choXacNhan:{ code: 1, name: "Chờ xác nhận" },
  daXacNhan:{ code: 2, name: "Đã xác nhận" },
  daTiepNhan:{ code: 3, name: "Đã tiếp nhận" },
  chuaToi:{ code: 4, name: "Chưa tới" },
  khHuy:{ code: 5, name: "KH hủy" },
  heThongHuy:{ code: 6, name: "Hệ thống hủy" },
}

export const initialValuesTiepNhan: benhNhan = {
  mpi: "",
  hoTen: "",
  ngaySinh: null,
  namSinh: null,
  thangSinh: null,
  gioiTinh: "",
  soDinhDanh: "",
  soDienThoai: "",
  maDanToc: "",
  maQuocTich: "",
  soNha: "",
  tenantId: 0,
  tuoi: "",
  diaChi: "",
  wardId: "",
  districtId: "",
  provinceId: "",
  professionCode: "",
  benhNhanMqh: {
    hoTen: "",
    maQuanHe: "",
    diaChi: "",
    soDienThoai: "",
  },
  benhNhanBhyt: {
    soBhyt: "",
    noiDangKy: "",
    tuNgay: "",
    denNgay: "",
    mienDongCt: "",
    loaiTuyen: "",
    maKv: "",
    is5nam: false,
    is6thang: false,
  },
  benhNhanCase: {
    loaiDoiTuong: "",
    loaiTiepNhan: "",
    thoiGianTiepNhan: moment().format("DD/MM/YYYY HH:mm:ss"),
    isUuTien: false,
    isCapCuu: false,
    yeuCauKham: [],
  },
  province: null,
  district: null,
  ward: null,
  danToc: null,
  quocTich: null,
  gender: null,
  job: null,
  quanHe: null,
  loaiDoiTuong: null,
  loaiTiepNhan: null,
  tenDichVu: null,
  phongKham: null,
  thoiDiemTaiNan: "",
  noiXayRaTaiNan: "",
  tinhTaiNan: null,
  tinhTaiNanId: "",
  huyenTaiNan: null,
  huyenTaiNanId: "",
  xaTaiNan: null,
  xaTaiNanId: "",
  diaDiemXayRa: null,
  boPhanChanThuong: null,
  nguyenNhanTaiNan: null,
  xuTriTaiNan: null,
  dienBienSauTaiNan: null,
  obs: {
    mach: {
      code: "",
      datatype: "",
      value: "",
      datetime: "",
    },
    nhietDo: {
      code: "",
      datatype: "",
      value: "",
      datetime: "",
    },
    huyetApTren: {
      code: "",
      datatype: "",
      value: "",
      datetime: "",
    },
    huyetApDuoi: {
      code: "",
      datatype: "",
      value: "",
      datetime: "",
    },
    nhipTho: {
      code: "",
      datatype: "",
      value: "",
      datetime: "",
    },
    canNang: {
      code: "",
      datatype: "",
      value: "",
      datetime: "",
    },
    chieuCao: {
      code: "",
      datatype: "",
      value: "",
      datetime: "",
    },
    SPO2: {
      code: "",
      datatype: "",
      value: "",
      datetime: "",
    },
    BMI: {
      code: "",
      datatype: "",
      value: "",
      datetime: "",
    },
  },
  sangLocCovid: false,
  uuTien: false,
  thongTinNguoiNha1: {
    hoVaTen: "",
    ngaySinh: "",
    thangSinh: "",
    namSinh: "",
    ngheNghiep: "",
    nguoiNha: null,
    trinhDoVanHoa: "",
    cccd: "",
    sdt: "",
    diaChi: "",
  },
  thongTinNguoiNha2: {
    hoVaTen: "",
    ngaySinh: "",
    thangSinh: "",
    namSinh: "",
    ngheNghiep: "",
    nguoiNha: null,
    trinhDoVanHoa: "",
    cccd: "",
    sdt: "",
    diaChi: "",
  },
  thongTinNguoiGiamHo: {
    hoVaTen: "",
    ngaySinh: "",
    thangSinh: "",
    namSinh: "",
    ngheNghiep: "",
    nguoiNha: null,
    trinhDoVanHoa: "",
    cccd: "",
    sdt: "",
    diaChi: "",
  },
  BHYT: {
    soThe1: "",
    soThe2: "",
    soThe3: "",
    soThe4: "",
    KCBBD: "",
    hanThe: {
      ngayStart: "",
      thangStart: "",
      namStart: "",
      ngayEnd: "",
      thangEnd: "",
      namEnd: "",
    },
    noiSong:null,
    tuyenKCB:null,
    chungNhanKhongCungChiTra: false,
    TECoMaBHXH: false,
    noTheBHYT: false,
    khongGiuTheBHYT: false,
  }
};
