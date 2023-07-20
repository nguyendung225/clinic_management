export interface BenhNhanKhamBenhInfo {
    soKham: string;
    hoTen: string;
    gioiTinh: string;
    tuoi: string;
    maBenhNhan: string;
    maBenhAn: string;
    soBHYT: string;
    soLanGoi: string;
    uuTien: boolean;
    trangThai: string;
}

export const fakeData = [
    { 
        soKham: '001', 
        hoTen: "Nguyễn Văn A", 
        gioiTinh: 'Nam', 
        tuoi: '36', 
        maBenhNhan: 'BN00001',
        maBenhAn: 'BA00001',
        soBHYT: '040100000',
        soLanGoi: '1',
        uuTien: true,
        trangThai: 'Đang khám'
    },
    { 
        soKham: '002', 
        hoTen: "Nguyễn Văn C", 
        gioiTinh: 'Nam', 
        tuoi: '20', 
        maBenhNhan: 'BN00002',
        maBenhAn: 'BA00002',
        soBHYT: '040100001',
        soLanGoi: '0',
        uuTien: false,
        trangThai: 'Chờ khám'
    }
];

export interface ThuocInfo {
    tenDuoc: string;
    sang: string;
    trua: string;
    chieu: string;
    toi: string;
    soNgay: string;
    soLuong: string;
    donGia: string;
    thanhTien: string;
    duongDung: string;
    loaiThuoc: string;
    cachDung: string;
    ghiChu: string;
}

export interface LichSuKhamInfo {
    ngayKham: string;
    yeuCauKham: string;
    benhChinh: string;
    benhPhu: string;
    ghiChu: string;
}