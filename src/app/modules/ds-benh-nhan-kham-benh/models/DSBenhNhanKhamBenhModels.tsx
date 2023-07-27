export interface BenhNhanKhamBenhInfo {
    soKham?: string;
    hoTen?: string;
    gioiTinh?: string;
    tuoi?: string;
    maBenhNhan?: string;
    maBenhAn?: string;
    soBHYT?: string;
    soLanGoi?: string;
    uuTien?: boolean;
    trangThai?: string;
    diaChi?: string;
    ngaySinh?: string;
    yeuCauKham?: string;
    doiTuong?: string;
    thoiHanBHYT?: string;
    tuyen?: string;
    noiKCBBD?: string;
    xuTri?: string;
    chanDoanTD?: string;
    chanDoanChinh?: string;
    chanDoanPhu?: string;
    tongChiPhi?: number;
    daNop?: number;
    tienTamUng?: string;
    ngheNghiep?: string;
}

export const fakeData:BenhNhanKhamBenhInfo[] = [
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
        trangThai: 'Chờ khám',
        diaChi: '467 Nguyễn Trãi, Thanh Xuân, Hà Nội',
        ngaySinh: '17/06/1986',
        yeuCauKham: 'Nội soi dạ dày',
        doiTuong: 'BHYT',
        thoiHanBHYT: '5 năm',
        tuyen: 'Trung ương',
        noiKCBBD: '26 Thanh Liệt',
        xuTri: 'Nhập viện',
        chanDoanTD: 'Chẩn đoán TD',
        chanDoanChinh: 'Chẩn đoán chính',
        chanDoanPhu: 'Chẩn đoán phụ',
        tongChiPhi: 200000,
        daNop: 200000,
        tienTamUng: '0',
        ngheNghiep: 'Nông dân'
    },
    { 
        soKham: '002', 
        hoTen: "Nguyễn Văn B", 
        gioiTinh: 'Nam', 
        tuoi: '20', 
        maBenhNhan: 'BN00002',
        maBenhAn: 'BA00002',
        soBHYT: '040100001',
        soLanGoi: '0',
        uuTien: false,
        trangThai: 'Chờ khám',
        diaChi: '25 Yên Hòa, Cầu Giấy, Hà Nội',
        ngaySinh: '15/09/1972',
        yeuCauKham: 'Tuyến giáp',
        doiTuong: 'BHYT',
        thoiHanBHYT: '3 năm',
        tuyen: 'Trung ương',
        noiKCBBD: '258 Cầu Giấy',
        xuTri: 'Chuyển viện',
        chanDoanTD: 'Chẩn đoán TD',
        chanDoanChinh: 'Chẩn đoán chính',
        chanDoanPhu: 'Chẩn đoán phụ',
        tongChiPhi: 500000,
        daNop: 0,
        tienTamUng: '0',
        ngheNghiep: 'Giáo viên'
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