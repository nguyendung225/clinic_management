import { ObjectSelectAutocomplete } from "../../phan-he-tiep-nhan-thanh-toan/models/PhanHeTiepNhanModel";

export interface IMauChiDinhThuoc {
    maThuoc?: string;
    tenThuoc?: string;
    donVi?: string;
    ngayDung?: string | number;
    soLuong?: string;
    duongDung?: string;
    huongDanSuDungThuoc?: string;
    nongDo?: string;
    quyCach?: string;
    hoatChat?: string;
    giaBhyt?: number;
    giaVienPhi?: number;
    giaDichVu?: number;
}

export interface IDanhSachMauThuocCu {
    ngayYLenh?: string;
    nguoiKe?: string;
    phongKham?: string;
    chanDoan?: string | ObjectSelectAutocomplete;
    danhSachThuoc?: IMauThuocCu[]
}

export interface IMauThuocCu {
    tenThuoc?: string;
    soLuong?: number;
    donVi?: string;
    ngayDung?: string;
    duongDung?: string ,
    doiTuongDichVu?: string
    tonKho?: number,
    kho?: number | string,
    giaBhyt?: number,
    giaVienPhi?: number,
    giaDichVu?: number,
    huongDanSuDungThuoc?: string
}

export interface IMauThuocCu {
    maThuoc?: string,
    tenThuoc?: string;
    soLuong?: number;
    donVi?: string;
    ngayDung?: string;
    duongDung?: string ,
    doiTuongDichVu?: string
    tonKho?: number,
    kho?: number | string,
    giaBhyt?: number,
    giaVienPhi?: number,
    giaDichVu?: number,
    huongDanSuDungThuoc?: string,
    hamLuong?: string,
    nongDo?: string,
    hangSanXuat?: string
}

export interface IVatTu {
    hinhThucXuTri: ObjectSelectAutocomplete | null
}