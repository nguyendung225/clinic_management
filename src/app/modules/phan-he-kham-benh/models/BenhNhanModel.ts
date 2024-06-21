import { ObjectSelectAutocomplete } from "../../phan-he-tiep-nhan-thanh-toan/models/PhanHeTiepNhanModel";

export interface BenhNhan {
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
    province: ObjectSelectAutocomplete | null,
    district: ObjectSelectAutocomplete | null,
    ward: ObjectSelectAutocomplete | null,
    danToc: ObjectSelectAutocomplete | null,
    quocTich: ObjectSelectAutocomplete | null,
    gender: ObjectSelectAutocomplete | null,
    job: ObjectSelectAutocomplete | null
    quanHe: ObjectSelectAutocomplete | null;
    loaiDoiTuong: ObjectSelectAutocomplete | null;
    loaiTiepNhan: ObjectSelectAutocomplete | null;
    tenDichVu: any;
    phongKham?: any;
    avatar?: any;
    caseId?: string;
    id?: string;
    danhSachDichVu?: any,
    email?: string | null,
    isHenKham?: boolean,
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
    // test
    noiSinh?: ObjectSelectAutocomplete | null;
    noiSong?: ObjectSelectAutocomplete | null;
    dangKyKham?: ObjectSelectAutocomplete | null;
  }
  
  export interface bangLichSuKham {
    lan: string
    ngayVao: string
    hinhThuc: number
    bhyt: string
    ngaySinh: string
    ngayRa: string
    xuTri: string
    // dichVus: string
    ghiChu?: string
    bacSi: string
    khoa: string
    phong: string
    chuanDoan: string
  }