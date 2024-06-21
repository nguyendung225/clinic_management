import { IconCabinet, IconHome } from "../../component/IconSvg";
import { IContextMenu } from "../../phan-he-tiep-nhan-thanh-toan/models/ModelTabDSDangKy";
import { IThanhToanMenu } from "../../phan-he-tiep-nhan-thanh-toan/models/ThanhToanModel";

export const dataDsKhoVatTu = [
    {
        tt: 1,
        trangThaiPhieu: "Đã xác nhận",
        maPhieu: "MP001",
        loaiPhieu: "Nhập vật tư",
        ngayTao: "2024-02-20",
        ngayDuyet: "2024-02-21",
        ngayNhapXuat: "2024-02-22",
        noiLapPhieu: "Bệnh viện A",
        nhaCungCap: "Công ty Pharma",
        soHoaDon: "SHD001",
        ngayHoaDon: "2024-02-23",
        chietKhau: "10%",
        noiDung: "Nhập vật tư cần thiết",
    },
    {
        tt: 2,
        trangThaiPhieu: "Chờ duyệt",
        maPhieu: "MP002",
        loaiPhieu: "Xuất vật tư",
        ngayTao: "2024-02-24",
        ngayDuyet: "2024-02-25",
        ngayNhapXuat: "2024-02-26",
        noiLapPhieu: "Bệnh viện B",
        nhaCungCap: "Công ty Med Supply",
        soHoaDon: "SHD002",
        ngayHoaDon: "2024-02-27",
        chietKhau: "15%",
        noiDung: "Xuất vật tư cho các bệnh nhân",
    },
    {
        tt: 3,
        trangThaiPhieu: "Chờ xác nhận",
        maPhieu: "MP003",
        loaiPhieu: "Nhập vật tư",
        ngayTao: "2024-03-01",
        ngayDuyet: "",
        ngayNhapXuat: "",
        noiLapPhieu: "Phòng mạch C",
        nhaCungCap: "Công ty Health Supplies",
        soHoaDon: "",
        ngayHoaDon: "",
        chietKhau: "",
        noiDung: "Nhập vật tư cần thiết cho phòng mạch",
    },
    {
        tt: 4,
        trangThaiPhieu: "Đã xác nhận",
        maPhieu: "MP004",
        loaiPhieu: "Xuất vật tư",
        ngayTao: "2024-03-05",
        ngayDuyet: "2024-03-06",
        ngayNhapXuat: "2024-03-07",
        noiLapPhieu: "Bệnh viện D",
        nhaCungCap: "Công ty Medical Solutions",
        soHoaDon: "SHD004",
        ngayHoaDon: "2024-03-08",
        chietKhau: "20%",
        noiDung: "Xuất vật tư cho các ca phẫu thuật",
    },
    {
        tt: 5,
        trangThaiPhieu: "Chờ xác nhận",
        maPhieu: "MP005",
        loaiPhieu: "Nhập vật tư",
        ngayTao: "2024-03-10",
        ngayDuyet: "",
        ngayNhapXuat: "",
        noiLapPhieu: "Bệnh viện E",
        nhaCungCap: "Công ty Health Products",
        soHoaDon: "",
        ngayHoaDon: "",
        chietKhau: "",
        noiDung: "Nhập vật tư mới",
    },
    {
        tt: 6,
        trangThaiPhieu: "Đã xác nhận",
        maPhieu: "MP006",
        loaiPhieu: "Xuất vật tư",
        ngayTao: "2024-03-12",
        ngayDuyet: "2024-03-13",
        ngayNhapXuat: "2024-03-14",
        noiLapPhieu: "Bệnh viện F",
        nhaCungCap: "Công ty MedTech",
        soHoaDon: "SHD006",
        ngayHoaDon: "2024-03-15",
        chietKhau: "12%",
        noiDung: "Xuất vật tư cho các bộ môn khám chữa bệnh",
    },
    {
        tt: 7,
        trangThaiPhieu: "Chờ xác nhận",
        maPhieu: "MP007",
        loaiPhieu: "Nhập vật tư",
        ngayTao: "2024-03-18",
        ngayDuyet: "",
        ngayNhapXuat: "",
        noiLapPhieu: "Bệnh viện G",
        nhaCungCap: "Công ty BioHealth",
        soHoaDon: "",
        ngayHoaDon: "",
        chietKhau: "",
        noiDung: "Nhập vật tư cho phòng thí nghiệm",
    },
    {
        tt: 8,
        trangThaiPhieu: "Đã xác nhận",
        maPhieu: "MP008",
        loaiPhieu: "Xuất vật tư",
        ngayTao: "2024-03-20",
        ngayDuyet: "2024-03-21",
        ngayNhapXuat: "2024-03-22",
        noiLapPhieu: "Bệnh viện H",
        nhaCungCap: "Công ty MedLife",
        soHoaDon: "SHD008",
        ngayHoaDon: "2024-03-23",
        chietKhau: "18%",
        noiDung: "Xuất vật tư cho bệnh nhân nội trú",
    },
    {
        tt: 9,
        trangThaiPhieu: "Chờ xác nhận",
        maPhieu: "MP009",
        loaiPhieu: "Nhập vật tư",
        ngayTao: "2024-03-25",
        ngayDuyet: "",
        ngayNhapXuat: "",
        noiLapPhieu: "Bệnh viện I",
        nhaCungCap: "Công ty Health Innovations",
        soHoaDon: "",
        ngayHoaDon: "",
        chietKhau: "",
        noiDung: "Nhập vật tư phòng chống dịch",
    },
    {
        tt: 10,
        trangThaiPhieu: "Đã xác nhận",
        maPhieu: "MP010",
        loaiPhieu: "Xuất vật tư",
        ngayTao: "2024-03-28",
        ngayDuyet: "2024-03-29",
        ngayNhapXuat: "2024-03-30",
        noiLapPhieu: "Bệnh viện J",
        nhaCungCap: "Công ty Health Solutions",
        soHoaDon: "SHD010",
        ngayHoaDon: "2024-03-31",
        chietKhau: "25%",
        noiDung: "Xuất vật tư cần thiết cho các bệnh nhân",
    },
];


export const OPTION_BO_LOC_KHO = [
    {
        name: "Kho vật tư Huyết Học",
        code: "khoVatTuHuyetHoc",
    },
    {
        name: "Kho Vật Tư Nội Trú",
        code: "khoVatTuNoiTru",
    },
    {
        name: "Kho vật tư Sinh Hóa",
        code: "khoVatTuSinhHoa",
    },
    {
        name: "Máy AU480",
        code: "mayAU480",
    },
    {
        name: "Máy Cobas E411",
        code: "mayCobasE411",
    },
    {
        name: "Máy MEK6420",
        code: "mayMEK6420",
    },
    {
        name: "Máy MEK6510",
        code: "mayMEK6510",
    },
    {
        name: "Máy Swelba Alfa",
        code: "maySwelbaAlfa",
    },
    {
        name: "Máy XN 330",
        code: "mayXN330",
    },
];
export const dataTTVatTu = [
    {
        stt: 1,
        maVatTu: 'VT001',
        donVi: 'Bệnh Viện Trung Ương',
        soLuong: 200,
        giaMua: 502500,  // 50.25 * 10,000 VND
        vat: 0.15,
        chietKhau: 0.05,
        giaMuaThuc: 500000,  // 50.0 * 10,000 VND
        thanhTien: 10050000,  // 10050.0 * 1,000 VND
        soLo: 'LOT001',
        hanSuDung: '2023-12-31',
        giaBan: 750000,  // 75.0 * 10,000 VND
        giaVienPhi: 150000,  // 15.0 * 10,000 VND
        giaBHYT: 450000,  // 45.0 * 10,000 VND
        donViNhap: 'DN001',
        soLuongNhap: 180,
        quyetDinhTrungThau: 'QDTT001',
        soGoiThau: 'SGT001',
        nhomThau: 'NT001',
        namThau: 2022,
        nguon: 'NguonYTe001',
    },
    {
        stt: 2,
        maVatTu: 'VT002',
        donVi: 'Bệnh Viện Đa Khoa Hà Nội',
        soLuong: 150,
        giaMua: 300000,  // 30.0 * 10,000 VND
        vat: 0.1,
        chietKhau: 0.02,
        giaMuaThuc: 295000,  // 29.5 * 10,000 VND
        thanhTien: 4425000,  // 4425.0 * 1,000 VND
        soLo: 'LOT002',
        hanSuDung: '2023-11-30',
        giaBan: 500000,  // 50.0 * 10,000 VND
        giaVienPhi: 80000,  // 8.0 * 10,000 VND
        giaBHYT: 350000,  // 35.0 * 10,000 VND
        donViNhap: 'DN002',
        soLuongNhap: 120,
        quyetDinhTrungThau: 'QDTT002',
        soGoiThau: 'SGT002',
        nhomThau: 'NT002',
        namThau: 2022,
        nguon: 'NguonYTe002',
    },
    {
        stt: 3,
        maVatTu: 'VT003',
        donVi: 'Bệnh Viện Tâm Thần Học',
        soLuong: 80,
        giaMua: 220000,  // 22.0 * 10,000 VND
        vat: 0.08,
        chietKhau: 0.03,
        giaMuaThuc: 210000,  // 21.0 * 10,000 VND
        thanhTien: 1680000,  // 1680.0 * 1,000 VND
        soLo: 'LOT003',
        hanSuDung: '2023-10-31',
        giaBan: 350000,  // 35.0 * 10,000 VND
        giaVienPhi: 50000,  // 5.0 * 10,000 VND
        giaBHYT: 250000,  // 25.0 * 10,000 VND
        donViNhap: 'DN003',
        soLuongNhap: 70,
        quyetDinhTrungThau: 'QDTT003',
        soGoiThau: 'SGT003',
        nhomThau: 'NT003',
        namThau: 2022,
        nguon: 'NguonYTe003',
    },
    {
        stt: 4,
        maVatTu: 'VT004',
        donVi: 'Phòng Mạch Đa Khoa',
        soLuong: 120,
        giaMua: 185000,  // 18.5 * 10,000 VND
        vat: 0.07,
        chietKhau: 0.02,
        giaMuaThuc: 180000,  // 18.0 * 10,000 VND
        thanhTien: 2160000,  // 2160.0 * 1,000 VND
        soLo: 'LOT004',
        hanSuDung: '2023-09-30',
        giaBan: 300000,  // 30.0 * 10,000 VND
        giaVienPhi: 40000,  // 4.0 * 10,000 VND
        giaBHYT: 220000,  // 22.0 * 10,000 VND
        donViNhap: 'DN004',
        soLuongNhap: 100,
        quyetDinhTrungThau: 'QDTT004',
        soGoiThau: 'SGT004',
        nhomThau: 'NT004',
        namThau: 2022,
        nguon: 'NguonYTe004',
    },
    {
        stt: 5,
        maVatTu: 'VT005',
        donVi: 'Trung Tâm Y Tế Xa',
        soLuong: 180,
        giaMua: 400000,  // 40.0 * 10,000 VND
        vat: 0.12,
        chietKhau: 0.04,
        giaMuaThuc: 390000,  // 39.0 * 10,000 VND
        thanhTien: 7020000,  // 7020.0 * 1,000 VND
        soLo: 'LOT005',
        hanSuDung: '2023-08-31',
        giaBan: 600000,  // 60.0 * 10,000 VND
        giaVienPhi: 100000,  // 10.0 * 10,000 VND
        giaBHYT: 420000,  // 42.0 * 10,000 VND
        donViNhap: 'DN005',
        soLuongNhap: 160,
        quyetDinhTrungThau: 'QDTT005',
        soGoiThau: 'SGT005',
        nhomThau: 'NT005',
        namThau: 2022,
        nguon: 'NguonYTe005',
    },
    {
        stt: 6,
        maVatTu: 'VT006',
        donVi: 'Bệnh Viện Nhi Đồng',
        soLuong: 90,
        giaMua: 150000,  // 15.0 * 10,000 VND
        vat: 0.06,
        chietKhau: 0.02,
        giaMuaThuc: 145000,  // 14.5 * 10,000 VND
        thanhTien: 1305000,  // 1305.0 * 1,000 VND
        soLo: 'LOT006',
        hanSuDung: '2023-07-31',
        giaBan: 250000,  // 25.0 * 10,000 VND
        giaVienPhi: 40000,  // 4.0 * 10,000 VND
        giaBHYT: 180000,  // 18.0 * 10,000 VND
        donViNhap: 'DN006',
        soLuongNhap: 80,
        quyetDinhTrungThau: 'QDTT006',
        soGoiThau: 'SGT006',
        nhomThau: 'NT006',
        namThau: 2022,
        nguon: 'NguonYTe006',
    },
    {
        stt: 7,
        maVatTu: 'VT007',
        donVi: 'Bệnh Viện Ung Bướu',
        soLuong: 60,
        giaMua: 350000,  // 35.0 * 10,000 VND
        vat: 0.1,
        chietKhau: 0.03,
        giaMuaThuc: 340000,  // 34.0 * 10,000 VND
        thanhTien: 2040000,  // 2040.0 * 1,000 VND
        soLo: 'LOT007',
        hanSuDung: '2023-06-30',
        giaBan: 550000,  // 55.0 * 10,000 VND
        giaVienPhi: 70000,  // 7.0 * 10,000 VND
        giaBHYT: 400000,  // 40.0 * 10,000 VND
        donViNhap: 'DN007',
        soLuongNhap: 50,
        quyetDinhTrungThau: 'QDTT007',
        soGoiThau: 'SGT007',
        nhomThau: 'NT007',
        namThau: 2022,
        nguon: 'NguonYTe007',
    },
    {
        stt: 8,
        maVatTu: 'VT008',
        donVi: 'Bệnh Viện Tai Mũi Họng',
        soLuong: 130,
        giaMua: 280000,  // 28.0 * 10,000 VND
        vat: 0.09,
        chietKhau: 0.04,
        giaMuaThuc: 270000,  // 27.0 * 10,000 VND
        thanhTien: 3510000,  // 3510.0 * 1,000 VND
        soLo: 'LOT008',
        hanSuDung: '2023-05-31',
        giaBan: 450000,  // 45.0 * 10,000 VND
        giaVienPhi: 60000,  // 6.0 * 10,000 VND
        giaBHYT: 350000,  // 35.0 * 10,000 VND
        donViNhap: 'DN008',
        soLuongNhap: 110,
        quyetDinhTrungThau: 'QDTT008',
        soGoiThau: 'SGT008',
        nhomThau: 'NT008',
        namThau: 2022,
        nguon: 'NguonYTe008',
    },
    {
        stt: 9,
        maVatTu: 'VT009',
        donVi: 'Bệnh Viện Da Liễu',
        soLuong: 70,
        giaMua: 200000,  // 20.0 * 10,000 VND
        vat: 0.08,
        chietKhau: 0.03,
        giaMuaThuc: 190000,  // 19.0 * 10,000 VND
        thanhTien: 1330000,  // 1330.0 * 1,000 VND
        soLo: 'LOT009',
        hanSuDung: '2023-04-30',
        giaBan: 320000,  // 32.0 * 10,000 VND
        giaVienPhi: 50000,  // 5.0 * 10,000 VND
        giaBHYT: 250000,  // 25.0 * 10,000 VND
        donViNhap: 'DN009',
        soLuongNhap: 60,
        quyetDinhTrungThau: 'QDTT009',
        soGoiThau: 'SGT009',
        nhomThau: 'NT009',
        namThau: 2022,
        nguon: 'NguonYTe009',
    },
    {
        stt: 10,
        maVatTu: 'VT010',
        donVi: 'Bệnh Viện Răng Hàm Mặt',
        soLuong: 110,
        giaMua: 420000,  // 42.0 * 10,000 VND
        vat: 0.12,
        chietKhau: 0.05,
        giaMuaThuc: 400000,  // 40.0 * 10,000 VND
        thanhTien: 4400000,  // 4400.0 * 1,000 VND
        soLo: 'LOT010',
        hanSuDung: '2023-03-31',
        giaBan: 600000,  // 60.0 * 10,000 VND
        giaVienPhi: 80000,  // 8.0 * 10,000 VND
        giaBHYT: 450000,  // 45.0 * 10,000 VND
        donViNhap: 'DN010',
        soLuongNhap: 100,
        quyetDinhTrungThau: 'QDTT010',
        soGoiThau: 'SGT010',
        nhomThau: 'NT010',
        namThau: 2022,
        nguon: 'NguonYTe010',
    },
];

export  const CODE_LIST_VAT_TU = {
    NHAP_CHIET_KHAU: "NCK",
    SUA_NGAY_NHAP_XUAT: "SNNX",
    SUA_NGAY_HOA_DON: "SNHD",
    DANH_SACH_VAT_TU_TRONG_KHO: "DSVTTK",
    DANH_SACH_VAT_TU_TAT_CA_CAC_KHO: "DSVTTCCK",
    DANH_SACH_PHIEU_XUAT_LE: "DSPXL",
    DU_TRU: "DT",
    THE_KHO: "TK",
    NHAP_TU_NHA_CUNG_CAP: "NTNCC",
    IN_PHIEU_THU: "IPT"
}

export const listContextDSPhieu: IContextMenu[] = [
    {
      title: "Phiếu"
    },
    {
      code: "NCK",
      name: "Nhập chiết khấu",
      icon: <i className="fa-solid fa-file-pen"></i>
    },
    {
      code: "SNNX",
      name: "Sửa ngày nhập xuất",
    },
    {
      code: "SNHD",
      name: "Sửa ngày hóa đơn, số hóa đơn",
    },
]

export const baoCaoMenu: IThanhToanMenu[] = [
    {
        groupName: "",
        listItem: [
            {
                code: "BaoCaoNhapXuatTon",
                name: "Báo Cáo Nhập Xuất Tổn",
            },
            {
                code: "Vattu_BaoCaoSuDungKhoaPhong",
                name: "Vật Tư_Báo Cáo Sử Dụng Khoa Phòng",
            },
            {
                code: "BaoCaoDoanhThuVatTuBanLe",
                name: "Báo Cáo Doanh Thu Vật Tư Bản Lê",
            },
            {
                code: "BaoCaoLoiNhuanVatTu",
                name: "Báo Cáo Lợi Nhuận Vật Tư",
            },
            {
                code: "BaoCaoPhieuNhapNhaCungCap",
                name: "Báo Cáo Phiếu Nhập Nhà Cung Cấp",
            },
            {
                code: "BaoCaoXuatHaoPhiPhongKham",
                name: "Báo Cáo Xuất Hao Phí Phòng Khám",
            },
            {
                code: "BaoCaoKiemNhapThuocVatTu",
                name: "Báo Cáo Kiếm Nhập Thuốc Vật Tư (Nc)",
            },
            {
                code: "InGopPhieuLinhTraTongHopYLenhTủTruc",
                name: "In Gộp Phiếu Lĩnh/Trả Tổng Hợp Y Lệnh + Tủ Trực",
            },
            {
                code: "BaoCaoXuatNhapTonFinish",
                name: "Báo Cáo Xuất Nhập Tồn (Finish)",
            },
            {
                code: "Vattu_BaoCaoNhapXuatTonTongHop",
                name: "Vattu_Báo Cáo Nhập Xuất Tồn Tổng Hợp (Kho Vật Tư)",
            },
            {
                code: "BaoCaoNhapXuatTonTongHopTachNhapPmCu",
                name: "Báo Cáo Nhập Xuất Tồn (Tổng Hợp - Tách Nhập Pm Cũ)",
            },
            {
                code: "BienBanKiemNhapThuocTuNhaCungCap",
                name: "Biên Bản Kiếm Nhập Thuốc Từ Nhà Cung Cấp",
            },
            {
                code: "Duoc_BaoCaoLinhTraThuoc",
                name: "Duoc_Báo Cáo Lĩnh Trả Thuốc",
            },
            {
                code: "Vattu_BaoCaoThuocNhapNhaCungCap",
                name: "Vattu_Báo Cáo Thuốc Nhập Nhà Cung Cấp",
            },
            {
                code: "Bvctn_017_BaoCaoLinhHaoPhiKhoaPhong",
                name: "Bvctn_017_Báo Cáo Lĩnh Hao Phí Khoa Phòng",
            },
        ]
    },
]

export const danhSachMenu: IThanhToanMenu[] = [
    {
        groupName: "",
        listItem: [
            {
                code: "DSVTTK",
                name: "Danh sách vật tư trong kho",
            },
            {
                code: "DSVTTCCK",
                name: "Danh sách vật tư tất cả các kho",
            },
            {
                code: "DSPXL",
                name: "Danh sách phiếu xuất lẻ",
            },
            {
                code: "DT",
                name: "Dự trù",
            },
        ]
    }
]

export const treeDSVatTuTrongKho = {
    code: "all",
    name: "Tất cả thuốc, vật tư (5)",
    icon: <IconHome />,
    filter: [
        {
            code: "vatTu",
            name: "Vật tư",
            icon: <IconCabinet />,
            filter: [
                { code: "VTYT", name: "Vật tư y tế" },
                { code: "VTTH", name: "Vật tư tiêu hao" },
            ],
        },
        {
            code: "phongLuu",
            name: "Phòng lưu",
            icon: <IconCabinet />,
            filter: [
                { code: "KCPL", name: "Không có phòng lưu" },
            ],
        },
        {
            code: "nhomBHYT",
            name: "Nhóm BHYT",
            icon: <IconCabinet />,
            filter: [
                { code: "VTNDM", name: "Vật tư ngoài danh mục" },
            ],
        },
    ]
}

export const treeLichSuNhapXuat = {
    code: "all",
    name: "Tất cả loại phiếu",
    icon: <IconHome />,
    filter: [
        {
            code: "loaiPhieu",
            name: "Loại phiếu",
            icon: <IconCabinet />,
            filter: [
                { code: "NNCC", name: "Nhập nhà cung cấp" },
            ],
        },
        {
            code: "khoa",
            name: "Khoa",
            icon: <IconCabinet />,
            filter: [
                { code: "KHH", name: "Khoa huyết học" },
            ],
        },
    ]
}

export const treeDSVatTuTrongTatCaCacKho = {
    code: "all",
    name: "Tất cả thuốc, vật tư (5)",
    icon: <IconHome />,
    filter: [
        {
            code: "thuoc",
            name: "Thuốc",
            icon: <IconCabinet />,
            filter: [
                { code: "TV", name: "Thuốc viên" },
                { code: "TO", name: "Thuốc ống" },
            ],
        },
        {
            code: "vatTu",
            name: "Vật tư",
            icon: <IconCabinet />,
            filter: [
                { code: "VTYT", name: "Vật tư y tế" },
                { code: "VTTH", name: "Vật tư tiêu hao" },
            ],
        },
        {
            code: "canhBaoHetHanSuDung",
            name: "Cảnh báo hết hạn sử dụng",
            icon: <IconCabinet />,
            filter: [
                { code: "90day", name: "90 ngày tới (3)" },
            ],
        },
    ]
}

export const taoPhieuMenu: IThanhToanMenu[] = [
    {
        groupName: "Nhà cung cấp",
        listItem: [
            {
                code: "NTNCC",
                name: "Nhập từ nhà cung cấp",
            },
            {
                code: "XTCNCC",
                name: "Xuất trả cho nhà cung cấp",
            },
        ]
    },
    {
        groupName: "Khách hàng",
        listItem: [
            {
                code: "XCKH",
                name: "Xuất cho khách hàng",
            },
        ]
    },
    {
        groupName: "Kho tổng",
        listItem: [
            {
                code: "NTKT",
                name: "Nhập từ kho tổng",
            },
            {
                code: "XTCKT",
                name: "Xuất trả cho kho tổng",
            },
        ]
    },
    {
        groupName: "Khoa phòng",
        listItem: [
            {
                code: "XHPPK",
                name: "Xuất hao phí phòng khám",
            },
            {
                code: "XSDK",
                name: "Xuất sử dụng khoa",
            },
            {
                code: "XSDP",
                name: "Xuất sử dụng phòng",
            },
        ]
    },
    {
        groupName: "Khoa vật tư",
        listItem: [
            {
                code: "NB",
                name: "Nhập bù",
            },
            {
                code: "XTL",
                name: "Xuất kiểm nghiệm",
            },
            {
                code: "XH",
                name: "Xuất hủy (Mất/Hỏng/Vỡ)",
            },
            {
                code: "XK",
                name: "Xuất khác",
            },
        ]
    },
    {
        groupName: "Kho khác",
        listItem: [
            {
                code: "LTKK",
                name: "Lĩnh từ kho khác",
            },
            {
                code: "XTDKK",
                name: "Xuất trả đến kho khác",
            },
        ]
    },
    {
        groupName: "Máy xét nghiệm",
        listItem: [
            {
                code: "XMXT",
                name: "Xuất máy xét nghiệm",
            },
        ]
    },
]

export const CODE_LIST_CONTEXT_VAT_TU = {
    LICH_SU_NHAP_XUAT: "LSNX",
    LICH_SU_THAY_DOI_DAU_KY: "LSTDDK",
    DANH_SACH_PHIEU_CHO_XUAT: "DSPCX",
    THE_KHO: "TK",
    XUAT_DANH_SACH_DUOC_CHON: "XDSDC",
    SUA_SO_LUONG_DONG_BANG: "SSLDB",
    SUA_SO_LUONG_SU_DUNG: "SSLSD",
    THEM_SUA_PHONG_LUU: "TSPL",
    XOA_PHONG_LUU: "XPL",
    BO_KHOA_VAT_TU: "BKVT",
    KHOA_VAT_TU: "KVT",
    DANH_SACH_VAT_TU: "DSVT",
    DANH_DACH_NHA_CUNG_CAP: "DSNCC",
    THEM_MOI_VAT_TU: "TMVT",
    NHAP_DANH_SACH_DA_DUOC_PHE_DUYET: "NDSDDPD",
    NHAP_DANH_SACH_VAT_TU: "NDSVT",
    XUAT_DANH_SACH_VAT_TU: "XDSVT"
}

export const listContextDSVatTuTrongKho: IContextMenu[] = [
    {
        title: "Vật tư"
    },
    {
        code: "LSNX",
        name: "Lịch sử nhập xuất"
    },
    {
        code: "LSTDDK",
        name: "Lịch sử thay đổi đầu kỳ, tồn kho, duyệt xuất"
    },
    {
        code: "DSPCX",
        name: "Danh sách phiếu chờ xuất"
    },
    {
        code: "TK",
        name: "Thẻ kho"
    },
    {
        code: "XDSDC",
        name: "Xuất danh sách được chọn"
    },
    {
        title: "Sửa"
    },
    {
        code: "SSLDB",
        name: "Sửa số lượng đóng băng"
    },
    {
        code: "SSLSD",
        name: "Sửa số lượng sử dụng"
    },
    {
        code: "TSPL",
        name: "Thêm/Sửa phòng lưu"
    },
    {
        code: "XPL",
        name: "Xóa phòng lưu"
    },
    {
        title: "Khóa vật tư"
    },
    {
        code: "BKVT",
        name: "Bỏ khóa vật tư"
    },
    {
        code: "KVT",
        name: "Khóa vật tư"
    }
]


export const baoCaoLichSuNhapXuatMenu: IThanhToanMenu[] = [
    {
        groupName: "",
        listItem: [
            {
                code: "TK",
                name: "Thẻ kho",
            },
        ]
    }
]

export const listMenuDSVatTuTrongKho: IThanhToanMenu[] = [
    {
        groupName: "Kiểm kê",
        listItem: [
            {
                code: "DSKK",
                name: "Danh sách kiểm kê",
            },
        ]
    },
    {
        groupName: "Công cụ",
        listItem: [
            {
                code: "XDSTVT",
                name: "Xuất danh sách thuốc, vật tư trong kho",
            },
            {
                code: "XDSTVTHH",
                name: "Xuất danh sách thuốc, vật tư hết hạn trong kho",
            },
        ]
    }
]

export const listContextPhieuThanhToan: IContextMenu[] = [
    {
        title: "Phiếu thu"
    },
    {
        code: "IPT",
        name: "In phiếu thu"
    },
]

export const listContextDSVatTuTrongTatCaKho: IContextMenu[] = [
    {
        title: "Vật tư"
    },
    {
        code: "LSNX",
        name: "Lịch sử nhập xuất"
    },
    {
        code: "LSTDDK",
        name: "Lịch sử thay đổi đầu kỳ, tồn kho, duyệt xuất"
    },
    {
        code: "DSPCX",
        name: "Danh sách phiếu chờ xuất"
    },
    {
        code: "TK",
        name: "Thẻ kho"
    },
]

export const listMenuNhapTuNhacungCap: IThanhToanMenu[] = [
    {
        groupName: "",
        listItem: [
            {
                code: "DSVT",
                name: "Danh sách vật tư",
            },
            {
                code: "DSNCC",
                name: "Danh sách nhà cung cấp",
            },
        ]
    },
]

export const listMenuDSVatTu: IThanhToanMenu[] = [
    {
        groupName: "File",
        listItem: [
            {
                code: "TMVT",
                name: "Thêm mới vật tư",
            },
            {
                code: "NDSDDPD",
                name: "Nhập danh sách đã được phê duyệt",
            },
            {
                code: "NDSVT",
                name: "Nhập danh sách vật tư",
            },
            {
                code: "XDSVT",
                name: "Xuất danh sách vật tư",
            },
        ]
    },
]

export const treeDSVatTu = {
    code: "all",
    name: "Tất cả vật tư (5)",
    icon: <IconHome />,
    filter: [
        {
            code: "loaiVatTu",
            name: "Loại vật tư",
            icon: <IconCabinet />,
            filter: [
                { code: "VTNT", name: "Vật tư nhà thuốc" },
                { code: "VTYT", name: "Vật tư y tế" },
                { code: "VTTH", name: "Vật tư tiêu hao" },
                { code: "VTHC", name: "Vật tư hóa chất" },
                { code: "VTTBYT", name: "Vật tư thiết bị y tế" },
                { code: "VTK", name: "Vật tư khác" },
            ],
        },
    ]
}