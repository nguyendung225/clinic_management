export interface DanhSachSoThu {
    maSoThu:string,
    tenSoThu:string,
    ngayTao:string,
    nguoiTao:string,
    daSuDung:number,
    soBatDau:number,
    tongSoPhieu:number,
    vat?:number,
    ghiChu?:string
}

export interface IDsNhanVien {
    maNV: string,
    tenNV: string,
    khoa: string,
    module: string
    items?: IDsNhanVien[]
}