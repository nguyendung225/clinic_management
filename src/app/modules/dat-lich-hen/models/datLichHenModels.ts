// export interface bangLichSuKham {
//     lan: string;
//     ngay: string;
//     // dichVus: string
//     xuLy: string;
//     bacSi: string;
//     khoa: string;
//     phong: string;
//     chuanDoan: string;
//   }
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

export interface danhSachChoKham {
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
export interface ObjectSelectAutocomplete {
  id?: string;
  name?: string;
  code?: string | number;
}

export interface benhNhan {
  sangLocCovid?: boolean;
  uuTien?: boolean;
  tinhHuyenXa?: string;
  maBn?: string;
  mpi: string;
  hoTen: string;
  ngaySinh?: number | null;
  thangSinh?: number | null;
  namSinh?: number | null;
  soVaoVien?: string;
  gioiTinh: any;
  soDinhDanh: string;
  tuoi?: string;
  tenantId?: number;
  soDienThoai?: string;
  maDanToc: string;
  maQuocTich: string;
  soNha: string;
  diaChi?: string;
  wardId: string;
  districtId: string;
  provinceId: string;
  professionCode: string;
  benhNhanMqh: benhNhanMqh;
  benhNhanBhyt: benhNhanBhyt;
  benhNhanCase: benhNhanCase;
  province: ObjectSelectAutocomplete | null;
  district: ObjectSelectAutocomplete | null;
  ward: ObjectSelectAutocomplete | null;
  danToc: ObjectSelectAutocomplete | null;
  quocTich: ObjectSelectAutocomplete | null;
  gender: ObjectSelectAutocomplete | null;
  job: ObjectSelectAutocomplete | null;
  quanHe: ObjectSelectAutocomplete | null;
  loaiDoiTuong: ObjectSelectAutocomplete | null;
  loaiTiepNhan: ObjectSelectAutocomplete | null;
  tenDichVu: any;
  phongKham?: any;
  avatar?: any;
  obs: obs;
  caseId?: string;
  id?: string;
  danhSachDichVu?: any;
  email?: string | null;
  isDatLichHen?: boolean;
  maHBBA?: string;
  nguoiNhap?: string;
  thoiDiemTaiNan: string;
  noiXayRaTaiNan: string;
  thx?: string;
  tinhTaiNan: ObjectSelectAutocomplete | null;
  tinhTaiNanId: string;
  huyenTaiNan: ObjectSelectAutocomplete | null;
  huyenTaiNanId: string;
  xaTaiNan: ObjectSelectAutocomplete | null;
  xaTaiNanId: string;
  thongTinDieuTri?: string;
  tinhTrangThuongTich?: string;
  tinhTrangThuongTichRaVien?: string;
  diaDiemXayRa: ObjectSelectAutocomplete | null;
  boPhanChanThuong: ObjectSelectAutocomplete | null;
  nguyenNhanTaiNan: ObjectSelectAutocomplete | null;
  loaiNgoDoc?: ObjectSelectAutocomplete | null;
  loaiTaiNanGiaoThong?: ObjectSelectAutocomplete | null;
  loaiTaiNanLaoDong?: ObjectSelectAutocomplete | null;
  xuTriTaiNan: ObjectSelectAutocomplete | null;
  dienBienSauTaiNan: ObjectSelectAutocomplete | null;
  muBaoHiem?: ObjectSelectAutocomplete | null;
  suDungChatKichThich?: ObjectSelectAutocomplete | null;
  xacThuc?: xacThuc | null;

  diaDiemTaiNan?: ObjectSelectAutocomplete | null;
  ngoDoc?: ObjectSelectAutocomplete | null;
  loaiTaiNan?: ObjectSelectAutocomplete | null;
  taiNanDoCon?: ObjectSelectAutocomplete | null;
  thoiGianXayRaTaiNan?: string;
  taiNanDoMuBaoHiem?: ObjectSelectAutocomplete | null;

  // test
  noiSinh?: ObjectSelectAutocomplete | null;
  noiSong?: ObjectSelectAutocomplete | null;
  dangKyKham?: ObjectSelectAutocomplete | null;
  BHYT?: {
    soThe1?: string;
    soThe2?: string;
    soThe3?: string;
    soThe4?: string;
    KCBBD?: string;
    hanThe?: {
      ngayStart?: string;
      thangStart?: string;
      namStart?: string;
      ngayEnd?: string;
      thangEnd?: string;
      namEnd?: string;
    };
    noiSong?: ObjectSelectAutocomplete | null;
    tuyenKCB?: ObjectSelectAutocomplete | null;
    chungNhanKhongCungChiTra?: boolean;
    TECoMaBHXH?: boolean;
    noTheBHYT?: boolean;
    khongGiuTheBHYT?: boolean;
  };

  //
  luc?: string;
  dkKham?: string;
  dichVu?: {
    code?: string;
    id?: number;
    insurancePrice?: string;
    name?: string;
    price?: string;
  };
  pkham?: {
    createDate?: string;
    createdBy?: string;
    modifyDate?: string;
    modifiedBy?: unknown;
    id?: string;
    name?: string;
    code?: string;
    tenantId?: number;
    locationId?: null;
    departmentId?: string;
    departmentName?: string;
    priceType?: {
      createDate?: string;
      createdBy?: unknown;
      modifyDate?: string;
      modifiedBy?: unknown;
      id?: string;
      parentId?: null;
      path?: string;
      uuidKey?: null;
      code?: string;
      name?: string;
      description?: null;
      type?: number;
      tenantId?: number;
      attributeValues?: [];
    };
  };
  encounter?: any;
  sinhHieu?: {
    mach: string;
    nhietDo: string;
    huyetAp1: string;
    huyetAp2: string;
    nhipTho: string;
    canNang: string;
    chieuCao: string;
    BMI: string;
  };
  chucVu?: string;
  donVi?: string;
  hoTenNguoiNha?: string;
  CCCDNguoiNha?: string;
  CCCD?: string;
  dienThoai?: string;
  capBac?: string;
  dtChiTiet?: ObjectSelectAutocomplete | null;
  ngheNghiep?: ObjectSelectAutocomplete | null;
  noiLamViec?: string;
  hocVan?: ObjectSelectAutocomplete | null;
  thongTinNguoiNha1?: INguoiNha;
  thongTinNguoiNha2?: INguoiNha;
  thongTinNguoiGiamHo?: INguoiNha;
}

export interface INguoiNha {
  hoVaTen?: string;
  ngaySinh?: string;
  thangSinh?: string;
  namSinh?: string;
  ngheNghiep?: string;
  nguoiNha?: ObjectSelectAutocomplete | null;
  trinhDoVanHoa?: string;
  cccd?: string;
  sdt?: string;
  diaChi?: string;
}

export interface xacThuc {
  avatar?: any;
  cccdMatTruoc?: any;
  cccdMatSau?: any;
  bhyt?: any;
}

export interface obs {
  mach: itemObs;
  nhietDo: itemObs;
  huyetApTren: itemObs;
  huyetApDuoi: itemObs;
  nhipTho: itemObs;
  canNang: itemObs;
  chieuCao: itemObs;
  SPO2: itemObs;
  BMI: itemObs;
}

export interface itemObs {
  code?: string;
  datatype?: number | string;
  value?: number | string;
  datetime?: string;
}

export interface ObjectSelectAutocomplete {
  id?: string;
  name?: string;
  code?: string | number;
}

export type benhNhanCase = {
  cin?: string;
  loaiDoiTuong: string;
  loaiTiepNhan: string;
  thoiGianTiepNhan: string;
  ngayHen?: string;
  isUuTien?: boolean;
  isCapCuu?: boolean;
  isBnLao?: boolean;
  isBnHiv?: boolean;
  isGiayNghiOm?: boolean;
  isGiayCongTac?: boolean;
  isGiayTamTru?: boolean;
  vienPhi?: boolean;
  trangThai?: string;
  yeuCauKham?: any[];
  phongKham?: string;
  loaiGia?: string;
};

export type benhNhanBhyt = {
  soBhyt: string;
  noiDangKy: string;
  tuNgay: string;
  denNgay: string;
  mienDongCt: string;
  loaiTuyen: string;
  maKv: string;
  is5nam?: boolean;
  is6thang?: boolean;
};

export type benhNhanMqh = {
  hoTen: string;
  maQuanHe: string | undefined;
  diaChi: string;
  soDienThoai: string;
};

export type bangKhamBenhProps = {
  listData: bangKhamBenh[];
  keyword: string;
  handleDeleteDichVu?: (id: any) => void;
  className?: string;
};
export type bangLichSuKhamProps = {
  listData: bangLichSuKham[];
  keyword?: string;
};

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

export interface bangLichSuKham {
  lan?: string;
  ngay: string;
  // dichVus: string
  xuLy?: string;
  bacSi: string;
  khoa: string;
  phong: string;
  chuanDoan: string;
  xuTri?: string;
  hinhThucVao?: string;
  theBHYT?: string;
  ngaySinh?: string;
  ngayRa?: string;
  dich?: string;
  thongTinKhac?: string;
  prId?: string;
  prVpId?: string;
  mrId?: string;
}

export interface bangLichSuKhamTiepNhan {
  ngay?: string;
  bacSi?: string;
  khoa?: string;
  phong?: string;
  chuanDoan?: string;
  hinhThucVao?: string;
  theBHYT?: string;
  ngaySinh?: string;
  ngayRa?: string;
  dich?: string;
  thongTinKhac?: string;
  prId?: string;
  prVpId?: string;
  mrId?: string;
  xuTri?: string;
}

export interface SearchObject {
  pageIndex: number;
  pageSize: number;
  keyword: string;
  type: string;
  id?: string;
  code?: string;
  name?: string;
  CCCD?: string;
  phone?: string;
  address?: string;
}

export interface tinhModel {
  name: string;
  code: number;
  division_type: string;
  codename: string;
  phone_code: number;
  districts: huyenModel[];
}
export interface huyenModel {
  name: string;
  code: number;
  division_type: string;
  codename: string;
  phone_code: number;
  wards: xaModel[];
}

export interface xaModel {
  name: string;
  code: number;
  division_type: string;
  codename: string;
  district_code: number;
}
export interface personModel {
  id: string | null;
  createDate: string | null;
  createdBy: string | null;
  modifyDate: string | null;
  modifiedBy: string | null;
  name: string | null;
  birthDay: string | null;
  gender: "MALE" | "FEMALE" | null; // Assuming gender can only be MALE or FEMALE
  ethnicCode: string | null;
  ethnicId: string | null;
  ethnicName: string | null;
  nationalityCode: string | null;
  nationalityName: string | null;
  nationalityId: string | null;
  address: string | null;
  houseNumber: string | null;
  fullAddress: string | null;
  communeCode: string | null;
  communeName: string | null;
  communeId: number | null;
  districtCode: string | null;
  districtName: string | null;
  districtId: number | null;
  provinceCode: string | null;
  provinceName: string | null;
  provinceId: number | null;
  phoneNumber: string | null;
  citizenId: string | null;
  jobCode: string | null;
  jobName: string | null;
  jobId: string | null;
  tenantId: number | null;
  userId: string | null;
  orgId: string | null;
}

export interface iUploadImage {
  files: any;
  isEmpty: boolean;
  src: any;
  formData: any;
}

export type IBenhNhan = {
  id?: string | number;
  hoTenBenhNhan: string | null;
  ngaySinh: string | null;
  thangSinh: string | null;
  namSinh: string | null;
  gioiTinh: ObjectSelectAutocomplete | null;
  cccd: string | null;
  quocTich: ObjectSelectAutocomplete | null;
  soDienThoai: string | null;
  address: string | null;
};

export type benhNhanData = {
  data: any;
  totalPages: number;
  totalElements: number;
};
