import { IconCabinet, IconHome } from "../../component/IconSvg";
import BaoCao from "../components/tab-kho-le-bao-cao/BaoCao";
import TabKhoNgoaiTru from "../components/tab-kho-ngoai-tru/TabKhoNgoaiTru";
import TabKhoNoiTru from "../components/tab-kho-noi-tru/TabKhoNoiTru";
import KhoLe from "../tab-kho-le/KhoLe";

export const KEY_TAB_DS_KHO_DUOC = {
    KHO_THUOC_NOI_TRU: "0",
    KHO_THUOC_NGOAI_TRU: "1",
    KHO_TONG: "2",

}

export const DS_TAB_KHO_DUOC = [
    {
        eventKey: KEY_TAB_DS_KHO_DUOC.KHO_THUOC_NOI_TRU,
        title: "Kho nội trú",
        component: <TabKhoNoiTru />
    },
    {
        eventKey: KEY_TAB_DS_KHO_DUOC.KHO_THUOC_NGOAI_TRU,
        title: "Kho ngoại trú",
        component: <TabKhoNgoaiTru />
    },
    {
        eventKey: KEY_TAB_DS_KHO_DUOC.KHO_TONG,
        title: "Kho tổng",
        component: <BaoCao />
    },
    // {
    //     eventKey: KEY_TAB_DS_KHO_DUOC.KHO_LE,
    //     title: "Kho lẻ",
    //     component: <KhoLe />
    // },
    // {
    //     eventKey: KEY_TAB_DS_KHO_DUOC.TU_TRUC,
    //     title: "Tủ trực",
    //     component: <BaoCao />
    // },
    // {
    //     eventKey: KEY_TAB_DS_KHO_DUOC.NHA_THUOC,
    //     title: "Nhà thuốc",
    //     component: <BaoCao />
    // },
];

export enum TYPE_PRODUCT {
    THUOC = "1",
    VAT_TU = "2",
    MAU = "3",
    VAC_XIN = "4",
    HOA_CHAT = "5",
}

export enum TYPE_SIMPLE_CATEGORIES {
    UNIT = "1", // Đơn vị
    VARIABLE_SYSTEM = "2", // Biến hệ thống
    LOAI_NHA_CUNG_CAP = "3", // Loại nhà cung cấp
    LOAI_KHO = "4", // Loại kho
    NUOC_SAN_XUAT = "5", // Nước sản xuất
    HANG_SAN_XUAT = "6", // Hãng sản xuất
    NHA_NHAP_KHAU = "7", // Nhà nhập khẩu
    DUNG_MOI = "8", // Dung môi
    HOAT_CHAT = "9", // Hoạt chất
    HOAT_CHAT_DI_KEM = "10", // Hoạt chất đi kèm
    DUONG_DUNG = "11", // Đường dùng
    DAC_TINH = "12", // Đặc tính
    NHOM_ABC_VEN = "13", // Nhóm ABC/VEN
    NHOM_DUOC_LY = "14", // Nhóm dược lý
    NHOM_THUOC = "15", // Nhóm thuốc
    LOAI_THUOC = "16", // Loại thuốc
    DOI_TUONG_BHYT = "17", // Đối tượng bhyt
    NHOM_CHI_PHI_BHYT = "18", // Nhóm chi phí bhyt
    MA_KE_TOAN = "19", // Mã kế toán
    LOAI_THAU = "20", // Loại thầu
    HINH_THUC_THAU = "21", // Hình thức thầu
    NHA_THAU = "22", // Nhà thầu
    LOAI_VAT_TU = "23" // Loại vật tư
}

export const TreeKhoNoiTru = {
    code: "all",
    name: "Tất cả loại phiếu",
    icon: <IconHome />,
    filter: [
        {
            code: "loaiPhieu",
            name: "Loại phiếu",
            icon: <IconCabinet />,
            filter: [
                { code: "1", name: "Nhập nhà cung cấp" },
                { code: "2", name: "Chuyển thuốc, vật tư" },
            ],
        },
        {
            code: "khoaNhapPhieu",
            name: "Khoa nhập phiếu",
            icon: <IconCabinet />,
            filter: [
                { code: "3", name: "Khoa dược" },
            ],
        },
        {
            code: "trangThaiPhieu",
            name: "Trạng thái phiếu",
            icon: <IconCabinet />,
            filter: [
                { code: "4", name: "Đã duyệt" },
                { code: "5", name: "Đã kết thúc" },
            ],
        },
    ],
};
export const TreeKhoNgoaiTru = {
    code: "all",
    name: "Tất cả loại phiếu",
    icon: <IconHome />,
    filter: [
        {
            code: "loaiPhieu",
            name: "Loại phiếu",
            icon: <IconCabinet />,
            filter: [
                { code: "1", name: "Nhập nhà cung cấp" },
                { code: "2", name: "Chuyển thuốc, vật tư" },
            ],
        },
        {
            code: "trangThaiPhieu",
            name: "Trạng thái phiếu",
            icon: <IconCabinet />,
            filter: [
                { code: "4", name: "Đã duyệt" },
                { code: "5", name: "Đã kết thúc" },
            ],
        },
    ],
};

export const dataDsPhieuKhoNoiTru = [
    {
        tt: 1,
        trangThaiPhieu: "Trạng thái 1",
        maPhieu: "MP001",
        loaiPhieu: "Loại 1",
        ngayTao: "2024-02-20",
        ngayDuyet: "2024-02-21",
        ngayNhapXuat: "2024-02-22",
        noiLapPhieu: "Nơi 1",
        nhaCungCap: "Nhà cung cấp 1",
        soHoaDon: "SHD001",
        ngayHoaDon: "2024-02-23",
        chietKhau: "10%",
        noiDung: "Nội dung 1",
    },
    {
        tt: 2,
        trangThaiPhieu: "Trạng thái 2",
        maPhieu: "MP002",
        loaiPhieu: "Loại 2",
        ngayTao: "2024-02-24",
        ngayDuyet: "2024-02-25",
        ngayNhapXuat: "2024-02-26",
        noiLapPhieu: "Nơi 2",
        nhaCungCap: "Nhà cung cấp 2",
        soHoaDon: "SHD002",
        ngayHoaDon: "2024-02-27",
        chietKhau: "15%",
        noiDung: "Nội dung 2",
    },
    {
        tt: 3,
        trangThaiPhieu: "Trạng thái 3",
        maPhieu: "MP003",
        loaiPhieu: "Loại 3",
        ngayTao: "2024-02-28",
        ngayDuyet: "2024-02-29",
        ngayNhapXuat: "2024-03-01",
        noiLapPhieu: "Nơi 3",
        nhaCungCap: "Nhà cung cấp 3",
        soHoaDon: "SHD003",
        ngayHoaDon: "2024-03-02",
        chietKhau: "20%",
        noiDung: "Nội dung 3",
    },
    {
        tt: 4,
        trangThaiPhieu: "Trạng thái 4",
        maPhieu: "MP004",
        loaiPhieu: "Loại 4",
        ngayTao: "2024-03-03",
        ngayDuyet: "2024-03-04",
        ngayNhapXuat: "2024-03-05",
        noiLapPhieu: "Nơi 4",
        nhaCungCap: "Nhà cung cấp 4",
        soHoaDon: "SHD004",
        ngayHoaDon: "2024-03-06",
        chietKhau: "25%",
        noiDung: "Nội dung 4",
    },
    {
        tt: 5,
        trangThaiPhieu: "Trạng thái 5",
        maPhieu: "MP005",
        loaiPhieu: "Loại 5",
        ngayTao: "2024-03-07",
        ngayDuyet: "2024-03-08",
        ngayNhapXuat: "2024-03-09",
        noiLapPhieu: "Nơi 5",
        nhaCungCap: "Nhà cung cấp 5",
        soHoaDon: "SHD005",
        ngayHoaDon: "2024-03-10",
        chietKhau: "30%",
        noiDung: "Nội dung 5",
    },
];
export const dataDsPhieuKhoNgoaiTru = [
    {
        tt: 1,
        trangThaiPhieu: 'Pending',
        ngayTao: '2024-02-20',
        maPhieu: 'MP001',
        loaiPhieu: 'Type A',
        maBenhNhan: 'BN001',
        tenBenhNhan: 'John Doe',
        gioiTinh: 'Male',
        tuoi: 30,
        khoXuat: 'Warehouse A',
        khoNhap: 'Warehouse B',
        nhaCungCap: 'Supplier XYZ',
        soHoaDon: 'SHD001',
        ngayHoaDon: '2024-02-21',
        chietKhau: 10,
        noiDung: 'Lorem Ipsum',
    },
    {
        tt: 2,
        trangThaiPhieu: 'Approved',
        ngayTao: '2024-02-19',
        maPhieu: 'MP002',
        loaiPhieu: 'Type B',
        maBenhNhan: 'BN002',
        tenBenhNhan: 'Jane Doe',
        gioiTinh: 'Female',
        tuoi: 25,
        khoXuat: 'Warehouse C',
        khoNhap: 'Warehouse D',
        nhaCungCap: 'Supplier ABC',
        soHoaDon: 'SHD002',
        ngayHoaDon: '2024-02-20',
        chietKhau: 5,
        noiDung: 'Dolor Sit Amet',
    },
    {
        tt: 3,
        trangThaiPhieu: 'Pending',
        ngayTao: '2024-02-18',
        maPhieu: 'MP003',
        loaiPhieu: 'Type A',
        maBenhNhan: 'BN003',
        tenBenhNhan: 'Alice Smith',
        gioiTinh: 'Female',
        tuoi: 40,
        khoXuat: 'Warehouse A',
        khoNhap: 'Warehouse B',
        nhaCungCap: 'Supplier XYZ',
        soHoaDon: 'SHD003',
        ngayHoaDon: '2024-02-19',
        chietKhau: 8,
        noiDung: 'Consectetur Adipiscing',
    },
    {
        tt: 4,
        trangThaiPhieu: 'Rejected',
        ngayTao: '2024-02-17',
        maPhieu: 'MP004',
        loaiPhieu: 'Type C',
        maBenhNhan: 'BN004',
        tenBenhNhan: 'Bob Johnson',
        gioiTinh: 'Male',
        tuoi: 35,
        khoXuat: 'Warehouse D',
        khoNhap: 'Warehouse E',
        nhaCungCap: 'Supplier LMN',
        soHoaDon: 'SHD004',
        ngayHoaDon: '2024-02-18',
        chietKhau: 12,
        noiDung: 'Sed Do Eiusmod',
    },
    {
        tt: 5,
        trangThaiPhieu: 'Approved',
        ngayTao: '2024-02-16',
        maPhieu: 'MP005',
        loaiPhieu: 'Type B',
        maBenhNhan: 'BN005',
        tenBenhNhan: 'Eve Williams',
        gioiTinh: 'Female',
        tuoi: 28,
        khoXuat: 'Warehouse C',
        khoNhap: 'Warehouse B',
        nhaCungCap: 'Supplier PQR',
        soHoaDon: 'SHD005',
        ngayHoaDon: '2024-02-17',
        chietKhau: 15,
        noiDung: 'Ut Enim Ad Minim',
    },
];

