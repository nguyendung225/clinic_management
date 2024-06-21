export interface iThongTinKhamBenh {
    dienBienBenhVaTrieuChung: iItemKhamBenh | string;
    tienSuCuaBenhNhan: iItemKhamBenh | string;
    tienSuBenhCuaGiaDinh: iItemKhamBenh | string;
    chanDoanBanDau: iItemKhamBenh | string;
    chanDoan: iItemKhamBenh | string;
    huongDieuTri: iItemKhamBenh | string;
    phuongPhapDieuTri: iItemKhamBenh | string;
    khamToanThan: iItemKhamBenh | string;
    benhChinh: iItemKhamBenh;
    benhPhu: iItemKhamBenh;
    tomTatKetQuaCLS: iItemKhamBenh | string;
    xuTri: iItemKhamBenh;
    ghiChu: iItemKhamBenh;
    sinhHieu?: iSinhHieu;
    khamBoPhan?: iKhamBoPhan;
}

export interface iSinhHieu {
    mach?: iItemKhamBenh;
    nhietDo?: iItemKhamBenh;
    huyetApTren?: iItemKhamBenh;
    huyetApDuoi?: iItemKhamBenh;
    nhipTho?: iItemKhamBenh;
    canNang?: iItemKhamBenh;
    chieuCao?: iItemKhamBenh;
    SPO2?: iItemKhamBenh;
    BMI?: iItemKhamBenh;
}
export interface iKhamBoPhan {
    khamBoPhan: {
        TMH?: iItemKhamBenh;
        RHM?: iItemKhamBenh;
        mat?: iItemKhamBenh;
        noiTiet?: iItemKhamBenh;
        tamThan?: iItemKhamBenh;
        dinhDuong?: iItemKhamBenh;
        vanDong?: iItemKhamBenh;
        sanPhuKhoa?: iItemKhamBenh;
        chung?: iItemKhamBenh;
        tuanHoan?: iItemKhamBenh;
        hoHap?: iItemKhamBenh;
        tieuHoa?: iItemKhamBenh;
        thanTietNieu?: iItemKhamBenh;
        thanKinh?: iItemKhamBenh;
        coXuongKhop?: iItemKhamBenh;
    },
}

export interface iItemKhamBenh {
    code?: string,
    datatype?: number | string,
    value?: number | string,
    datetime?: string;
    name: string
    units?: string
    children?: any
}

export interface iCreateEncounter {
    id?: number | null;
    caseId?: string;
    departmentId: string;
    departmentName?: string;
    roomId: string;
    roomName?: string;
    patientId?: string;
    encounterId?: number | string;
}

export interface KetQuaDichVu {
    id?: string,
    tenDichVu: string;
    ketQua: string | null;
    khoaChiDinh: string;
    ngayYLenh: string;
    ngayTraKetQua: string | null;
}

export interface MauKhamBenh {
    id?: number,
    nguoiTaoMau?: string,
    tenMau: string;
    lyDoKham?: string;
    quaTrinhBenhLy: string;
    trieuChung: string;
    tienSuBanThan: string;
    tienSuGiaDinh: string;
    khamBoPhan: string;
    khamToanThan: string;
    huongXuLy: string;
}

export interface TrieuChung {
    id?: number,
    trieuChung: string;
}

export interface DungMoi {
    id?: number,
    maDungMoi: string;
    tenDungMoi: string;
}