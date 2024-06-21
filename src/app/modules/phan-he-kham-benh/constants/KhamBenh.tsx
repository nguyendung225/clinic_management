import { IconCabinet, IconHome, IconMenu } from "../../component/IconSvg"
import { IContextMenu } from "../../phan-he-tiep-nhan-thanh-toan/models/ModelTabDSDangKy"
import { VARIABLE_STRING } from "../../utils/Constant"
import TabQD130 from "../components/modal-tab-xu-tri/TabQD130"
import TabThongTinChuyenTuyen from "../components/modal-tab-xu-tri/TabThongTinChuyenTuyen"
import TabThongTinDieuTri from "../components/modal-tab-xu-tri/TabThongTinDieuTri"
import TabThongTinRaVien from "../components/modal-tab-xu-tri/TabThongTinRaVien"
import TabThongTinRaVienChuyenTuyen from "../components/modal-tab-xu-tri/TabThongTinRaVienChuyenTuyen"
import { MauKhamBenh } from "../models/ThongTinKhamBenhModel"

export const KHAM_BO_PHAN = {
    code: "khamBoPhan",
    dataType: "checkboxText",
    name: "Khám bộ phận",
    units: null,
    value: null,
    children: [
        {
            code: "TMH",
            dataType: "string",
            name: "TMH",
            units: null,
            value: null,
        },
        {
            code: "RHM",
            dataType: "string",
            name: "RHM",
            units: null,
            value: null,
        },
        {
            code: "mat",
            dataType: "string",
            name: "Mắt",
            units: null,
            value: null,
        },
        {
            code: "noiTiet",
            dataType: "string",
            name: "Nội tiết",
            units: null,
            value: null,
        },
        {
            code: "tamThan",
            dataType: "string",
            name: "Tâm thần",
            units: null,
            value: null,
        },
        {
            code: "dinhDuong",
            dataType: "string",
            name: "Dinh dưỡng",
            units: null,
            value: null,
        },
        {
            code: "vanDong",
            dataType: "string",
            name: "Vận động",
            units: null,
            value: null,
        },
        {
            code: "sanPhuKhoa",
            dataType: "string",
            name: "Sản phụ khoa",
            units: null,
            value: null,
        },
        {
            code: "chung",
            dataType: "string",
            name: "Chung",
            units: null,
            value: null,
        },
        {
            code: "tuanHoan",
            dataType: "string",
            name: "Tuần hoàn",
            units: null,
            value: null,
        },
        {
            code: "hoHap",
            dataType: "string",
            name: "Hô hấp",
            units: null,
            value: null,
        },
        {
            code: "tieuHoa",
            dataType: "string",
            name: "Tiêu hóa",
            units: null,
            value: null,
        },
        {
            code: "thanTietNieu",
            dataType: "string",
            name: "Thận tiết niệu",
            units: null,
            value: null,
        },
        {
            code: "thanKinh",
            dataType: "string",
            name: "Thần kinh",
            units: null,
            value: null,
        },
        {
            code: "coXuongKhop",
            dataType: "string",
            name: "Cơ xương khớp",
            units: null,
            value: null,
        },
    ]
}

export const THONG_TIN_KHAM_BENH = {
    dienBienBenhVaTrieuChung: {
        code: "dienBienBenhVaTrieuChung",
        dataType: "textarea",
        name: "Diễn biến bệnh & triệu chứng LS",
        units: null,
        value: null,
    },
    tienSuCuaBenhNhan: {
        code: "tienSuCuaBenhNhan",
        dataType: "textarea",
        name: "Tiền sử của BN",
        units: null,
        value: null,
    },
    tienSuBenhCuaGiaDinh: {
        code: "tienSuBenhCuaGiaDinh",
        dataType: "textarea",
        name: "Tiền sử bệnh của gia đình",
        units: null,
        value: null,
    },
    chanDoanBanDau: {
        code: "chanDoanBanDau",
        dataType: "textarea",
        name: "Chẩn đoán ban đầu",
        units: null,
        value: null,
    },
    chanDoan: {
        code: "chanDoan",
        dataType: "textarea",
        name: "Chẩn đoán",
        units: null,
        value: null,
    },
    huongDieuTri: {
        code: "huongDieuTri",
        dataType: "textarea",
        name: "Hướng điều trị",
        units: null,
        value: null,
    },
    phuongPhapDieuTri: {
        code: "phuongPhapDieuTri",
        dataType: "textarea",
        name: "Phương pháp điều trị",
        units: null,
        value: null,
    },
    khamToanThan: {
        code: "khamToanThan",
        dataType: "textarea",
        name: "Khám toàn thân",
        units: null,
        value: null,
    },
    khamBoPhan: { ...KHAM_BO_PHAN },
    benhChinh: {},
    benhPhu: {},
    tomTatKetQuaCLS: {
        code: "tomTatKetQuaCLS",
        dataType: "list",
        name: "Tóm tắt kết quả CLS",
        units: null,
        value: null,
        children: []
    },
    xuTri: {
        code: "xuTri",
        dataType: "list",
        name: "Xử trí",
        units: null,
        value: null,
        children: [
            {
                code: "traVe",
                dataType: "string",
                name: "Trả về",
                units: null,
                value: null,
            },
            {
                code: "nhapVien",
                dataType: "string",
                name: "Nhập viện",
                units: null,
                value: null,
            },
            {
                code: "chuyenVien",
                dataType: "string",
                name: "Chuyển viện",
                units: null,
                value: null,
            },
            {
                code: "dieuTriNgoaiTru",
                dataType: "string",
                name: "Điều trị ngoại trú",
                units: null,
                value: null,
            },
            {
                code: "henKhamMoi",
                dataType: "string",
                name: "Hẹn khám mới",
                units: null,
                value: null,
            },
            {
                code: "tuVong",
                dataType: "string",
                name: "Tử vong",
                units: null,
                value: null,
            },
            {
                code: "chuyenPK",
                dataType: "string",
                name: "Chuyển phòng khám",
                units: null,
                value: null,
            },
            {
                code: "khac",
                dataType: "string",
                name: "Khác",
                units: null,
                value: null,
            },
        ]
    },
    ghiChu: {
        code: "ghiChu",
        dataType: "list",
        name: "Ghi chú",
        units: null,
        value: null,
        children: []
    },
}

export const SINH_HIEU = {
    BMI: {
        code: "BMI",
        dataType: "string",
        name: "BMI",
        units: null,
        value: null,
    },
    SPO2: {
        code: "SPO2",
        dataType: "number",
        name: "SPO2",
        units: "kg",
        value: null,
    },
    canNang: {
        code: "canNang",
        dataType: "number",
        name: "Cân nặng",
        units: "kg",
        value: null,
    },
    chieuCao: {
        code: "chieuCao",
        dataType: "number",
        name: "chieuCao",
        units: "cm",
        value: null,
    },
    huyetAp: {
        code: "BMI",
        dataType: "listInput",
        name: "Huyết áp (mmHg)",
        units: "mmHg",
        value: null,
        children: [
            {
                code: "huyetApTren",
                dataType: "string",
                name: "Huyết áp trên",
                units: "mmHg",
                value: null,
            },
            {
                code: "huyetApDuoi",
                dataType: "string",
                name: "Huyết áp dưới",
                units: "mmHg",
                value: null,
            },
        ]
    },
    mach: {
        code: "mach",
        dataType: "number",
        name: "Mạch",
        units: "l/p",
        value: null,
    },
    nhietDo: {
        code: "nhietDo",
        dataType: "number",
        name: "Nhiệt độ",
        units: "℃",
        value: null,
    },
    nhipTho: {
        code: "nhipTho",
        dataType: "number",
        name: "Nhịp thở",
        units: "l/p",
        value: null,
    },
}

export const INITIALVALUES = {
    sinhHieu: {
        mach: {
            code: "",
            datatype: "",
            valueText: "",
            datetime: "",
        },
        nhietDo: {
            code: "",
            datatype: "",
            valueText: "",
            datetime: "",
        },
        huyetApTren: {
            code: "",
            datatype: "",
            valueText: "",
            datetime: "",
        },
        huyetApDuoi: {
            code: "",
            datatype: "",
            valueText: "",
            datetime: "",
        },
        nhipTho: {
            code: "",
            datatype: "",
            valueText: "",
            datetime: "",
        },
        canNang: {
            code: "",
            datatype: "",
            valueText: "",
            datetime: "",
        },
        chieuCao: {
            code: "",
            datatype: "",
            valueText: "",
            datetime: "",
        },
        SPO2: {
            code: "",
            datatype: "",
            valueText: "",
            datetime: "",
        },
        BMI: {
            code: "",
            datatype: "",
            valueText: "",
            datetime: "",
        },
    },
    dienBienBenhVaTrieuChung: "",
    tienSuCuaBenhNhan: "",
    tienSuBenhCuaGiaDinh: "",
    chanDoanBanDau: "",
    chanDoan: {
        code: "",
        value: "",
    },
    huongDieuTri: "",
    phuongPhapDieuTri: "",
    khamToanThan: "",
    benhChinh: null,
    benhPhu: [],
    tomTatKetQuaCLS: "",
    xuTri: {
        code: "",
        value: "",
    },
    ghiChu: {
        code: "",
        value: "",
    },
}

export const XU_TRI = [
    {
        code: "ketThucKham",
        dataType: "string",
        name: "Kết thúc khám bệnh",
        units: null,
        value: null,
    },
    {
        code: "capToaChoVe",
        dataType: "string",
        name: "Cấp toa cho về",
        units: null,
        value: null,
    },
    
    // {
    //     code: "traVe",
    //     dataType: "string",
    //     name: "Trả về",
    //     units: null,
    //     value: null,
    // },
    // {
    //     code: "nhapVien",
    //     dataType: "string",
    //     name: "Nhập viện",
    //     units: null,
    //     value: null,
    // },
    // {
    //     code: "chuyenVien",
    //     dataType: "string",
    //     name: "Chuyển viện",
    //     units: null,
    //     value: null,
    // },
    // {
    //     code: "dieuTriNgoaiTru",
    //     dataType: "string",
    //     name: "Điều trị ngoại trú",
    //     units: null,
    //     value: null,
    // },
    // {
    //     code: "henTaiKham",
    //     dataType: "string",
    //     name: "Hẹn tái khám",
    //     units: null,
    //     value: null,
    // },
     {
        code: "chuyenPhongKham",
        dataType: "string",
        name: "Chuyển phòng khám",
        units: null,
        value: null,
    },
    {
        code: "boKham",
        dataType: "string",
        name: "Bỏ khám",
        units: null,
        value: null,
    },
    {
        code: "tuVong",
        dataType: "string",
        name: "Tử vong",
        units: null,
        value: null,
    },
   
    // {
    //     code: "khac",
    //     dataType: "string",
    //     name: "Khác",
    //     units: null,
    //     value: null,
    // },
]

export const BENH_CHINH = [
    {
        id: 1,
        code: "chuyenPK",
        dataType: "string",
        name: "Chuyển phòng khám",
        units: null,
        value: null,
    },
    {
        id: 2,
        code: "khac",
        dataType: "string",
        name: "Khác",
        units: null,
        value: null,
    },
]

export const BENH_PHU = [
    { id: 1, code: "Spring", name: "Spring" },
    { id: 2, code: "Summer", name: "Summer" },
    { id: 3, code: "Autumn", name: "Autumn" },
    { id: 4, code: "Winter", name: "Winter" }
]

export const BENH = {
    BENH_CHINH: "benhChinh",
    BENH_PHU: "benhPhu",
}

export const DICH_VU_CAN_LAM_SANG = {
    KET_QUA_CAN_LAM_SANG:{code: "ketQuaCanLamSang", name: "Kết quả cận lâm sàng"},
    XET_NGHIEM_MAU:{code: "xetNghiemMau", name: "Xét nghiệm máu"},
    XET_NGHIEM_NUOC_TIEU:{code: "xetNghiemNuocTieu", name: "Xét nghiệm nước tiểu"},
    X_QUANG:{code: "xquang", name: "X-Quang"},
    SIEU_AM:{code: "sieuAm", name: "Siêu âm"},
    NOI_SOI_TDCN:{code: "noiSoiTDCN", name: "Nội soi - TDCN"},
    GIAI_PHAU_BENH:{code: "giaiPhauBenh", name: "Giải phẫu bệnh"},
    XET_NGHIEM_TE_BAO:{code: "xetNghiemTeBao", name: "Xét nghiệm tế bào"},
    XET_NGHIEM_KHAC:{code: "xetNghiemKhac", name: "Xét nghiệm khác"},
}

export const initialValuesMauKhamBenh: MauKhamBenh = {
  nguoiTaoMau:"Quản trị hệ thống",
  khamBoPhan: "",
  khamToanThan: "",
  quaTrinhBenhLy: "",
  tenMau: "",
  tienSuBanThan: "",
  tienSuGiaDinh: "",
  trieuChung: "",
  lyDoKham: "",
  huongXuLy: ""
};

export const CODE_ITEM_MENU_MAU_KHAM_BENH = {
    UPDATE: "update",
    DELETE: "delete",
  }

export const contextMenuDSMauKhamBenh: IContextMenu[] = [
    {
      title: "Danh sách",
    },
    {
      icon: <i className="fa-solid fa-file-pen text-primary"></i>,
      code: CODE_ITEM_MENU_MAU_KHAM_BENH.UPDATE,
      name: "Sửa mẫu",
    },
    {
      icon: <i className="fa-solid fa-trash text-danger"></i>,
      code: CODE_ITEM_MENU_MAU_KHAM_BENH.DELETE,
      name: "Xóa"
    },
  ]
export const OptionKetQuaDieuTri = [
    {code: "khoi", name: "Khỏi"},
    {code: "doGiam", name: "Đỡ, giảm"},
    {code: "khongThayDoi", name: "Không thay đổi"},
    {code: "nangHon", name: "Nặng hơn"},
    {code: "tuVong", name: "Tử vong"},
]

export const constTypeBenhKemTheo = {
    ICD10: {code: "benhKemTheo", name: "Bệnh kèm theo ICD10"},
    YHCT: {code: "benhKemTheoYHCT", name: "Bệnh kèm theo YHCT"}
}
export const CODE_ITEM_MENU_THUOC = {
    CHUYEN_PHIEU_SANG_LAM_TRON: "chuyenPhieuSangLamTron",
    CHUYEN_PHIEU_DIEU_TRI: "chuyenPhieuDieuTri",
    DUNG_MOI: "dungMoi",
    TIEM_TRUYEN: "tiemTruyen",
    PHA_TIEM: "phaTiem",
    TRUYEN_DICH: "truyenDich",
    IN_NHAN_PHA_CHE: "inNhanPhaChe",
    SUA_CHAN_DOAN_BENH: "suaChanDoanBenh",
    NHOM_THUOC_PHA_CHE: "nhomThuocPhaChe",
    SUA_HUONG_DAN_SU_DUNG: "suaHuongDanSuDung",
  };
export const contextMenuTabThuoc: IContextMenu[] = [
{
    title: "Đơn thuốc",
},
{
    title: "Thuốc",
},
{
    icon: <i className="bi bi-arrow-right-circle text-primary"></i>,
    code: CODE_ITEM_MENU_THUOC.DUNG_MOI,
    name: "Dung môi hoàn nguyên",
},
{
    icon: <i className="bi bi-arrow-right-circle text-primary"></i>,
    code: CODE_ITEM_MENU_THUOC.TIEM_TRUYEN,
    name: "Tiêm truyền",
    children: [
    {
        name: "Pha tiêm",
        code: CODE_ITEM_MENU_THUOC.PHA_TIEM,
    },
    {
        name: "Truyền dịch",
        code: CODE_ITEM_MENU_THUOC.TRUYEN_DICH,
    },
    ],
},
{
    icon: <i className="bi bi-arrow-right-circle text-primary"></i>,
    code: CODE_ITEM_MENU_THUOC.IN_NHAN_PHA_CHE,
    name: "In nhãn pha chế",
},
{
    icon: <i className="bi bi-arrow-right-circle text-primary"></i>,
    code: CODE_ITEM_MENU_THUOC.SUA_CHAN_DOAN_BENH,
    name: "Sửa chẩn đoán bệnh",
},
];

export const contextMenuTabThuocKhac: IContextMenu[] = [
    {
        title: "Đơn thuốc",
    },
    {
        icon: <i className="bi bi-arrow-right-circle text-primary"></i>,
        code: CODE_ITEM_MENU_THUOC.CHUYEN_PHIEU_DIEU_TRI,
        name: "Chuyển phiếu điều trị",
    },
    {
        icon: <i className="bi bi-arrow-right-circle text-primary"></i>,
        code: CODE_ITEM_MENU_THUOC.CHUYEN_PHIEU_SANG_LAM_TRON,
        name: "Chuyển phiếu sang làm tròn",
    },
    {
        title: "Thuốc",
    },
    {
        icon: <i className="fa-solid fa-layer-group text-primary"></i>,
        code: CODE_ITEM_MENU_THUOC.NHOM_THUOC_PHA_CHE,
        name: "Nhóm thuốc pha chế",
    },
    {
        icon: <i className="bi bi-pencil-square text-primary"></i>,
        code: CODE_ITEM_MENU_THUOC.SUA_HUONG_DAN_SU_DUNG,
        name: "Sửa hướng dẫn sử dụng",
    },
    {
        icon: <i className="bi bi-arrow-right-circle text-primary"></i>,
        code: CODE_ITEM_MENU_THUOC.DUNG_MOI,
        name: "Dung môi hoàn nguyên",
    },
    {
        icon: <i className="bi bi-arrow-right-circle text-primary"></i>,
        code: CODE_ITEM_MENU_THUOC.TIEM_TRUYEN,
        name: "Tiêm truyền",
        children: [
            {
                name: "Pha tiêm",
                code: CODE_ITEM_MENU_THUOC.PHA_TIEM,
            },
            {
                name: "Truyền dịch",
                code: CODE_ITEM_MENU_THUOC.TRUYEN_DICH,
            },
        ],
    },
    {
        icon: <i className="bi bi-printer text-primary"></i>,
        code: CODE_ITEM_MENU_THUOC.IN_NHAN_PHA_CHE,
        name: "In nhãn pha chế",
    },
    {
        icon: <i className="bi bi-pencil-square text-primary"></i>,
        code: CODE_ITEM_MENU_THUOC.SUA_CHAN_DOAN_BENH,
        name: "Sửa chẩn đoán bệnh",
    },
];

export const contextPhieuTabThuoc: IContextMenu[] = [
    {
        code: "CNYL",
        name: "Chuyển ngày y lệnh"
    },
    {
        code: "CPDT",
        name: "Chuyển phiếu điều trị"
    },
    {
        code: "CNCD",
        name: "Chuyển người chỉ định"
    },
]

export const optionThoiDiemTuVong = [
  { code: "24h", name: "Trong 24h vào" },
  { code: "48h", name: "Trong 48h vào" },
  { code: "72h", name: "Trong 72h vào" },
  { code: "khac", name: "Khác" },
];

export const optionNguyenNhanTuVong = [
    { code: "doBenh", name: "Do bệnh" },
    { code: "doTaiBienDieuTri", name: "Do tai biến điều trị" },
    { code: "khac", name: "Khác" },
];

export const TreeChiDinhDichVu = {
    code:"all",
    name:"Tất cả dịch vụ",
    icon:<IconMenu/>,
    filter: [
      {
        code: "all.khamBenh",
        name: "Khám bệnh",
        filter: [
          { code: "khamBenh", name: "Khám bệnh" },
          { code: "khamSucKhoe", name: "Khám sứa khỏe"},
        ],
      },
      {
        code: "xetNghiem",
        name: "Xét nghiệm",
      },
      {
        code: "chanDoanHinhAnh",
        name: "Chẩn đoán hình ảnh",
      },
    ],
};
  
export const TreeChiDinhThuoc = {
    code:"all",
    name:"Tất cả thuốc",
    icon:<IconHome/>,
    filter: [
      {
        code: "thuoc",
        name: "Thuốc",
        icon:<IconCabinet/>,
        filter: [
            { code: "1", name: "Thuốc viên" },
            { code: "2", name: "Thuốc ống" },
            { code: "3", name: "Dịch truyền" },
            { code: "4", name: "Thuốc kháng sinh viên" },
            { code: "5", name: "Thuốc đông y" },
            { code: "6", name: "Thuốc sirô" },
            { code: "7", name: "Thuốc hỗn dịch" },
            { code: "8", name: "Thuốc dùng ngoài" },
            { code: "9", name: "Thuốc bột" },
            { code: "10", name: "Thuốc gây nghiện" },
            { code: "11", name: "Thuốc hướng tâm thần" },
            { code: "12", name: "Nhóm corticoid" },
          ],
      },
    ],
};

export const CODE_LIST_HINH_THUC_XU_TRI = [VARIABLE_STRING.RA_VIEN,VARIABLE_STRING.XIN_VE,VARIABLE_STRING.TRON_VIEN, VARIABLE_STRING.DUA_VE, VARIABLE_STRING.CHUYEN_TUYEN]

export const HINH_THUC_XU_TRI=[
    {
        code: "chuyenKhoa",
        name: "Chuyển khoa"
    },
    {
        code: "raVien",
        name: "Ra viện"
    },
    {
        code: "xinVe",
        name: "Xin về"
    },
    {
        code: "duaVe",
        name: "Đưa về"
    },
    {
        code: "tronVien",
        name: "Trốn viện"
    },
    {
        code: "chuyenTuyen",
        name: "Chuyển tuyến"
    },
    {
        code: "tuVong",
        name: "Tử vong"
    },
]

export const danhSachTabCapNhatThongTin = [
    {
        eventKey: "0",
        title: "Thông tin ra viện",
        component: <TabThongTinRaVien />
    },
    {
        eventKey: "1",
        title: "Thông tin điều trị",
        component: <TabThongTinDieuTri />
    },
    {
        eventKey: "2",
        title: "QĐ130",
        component: <TabQD130 />
    },
]

export const danhSachTabCapNhatChuyenTuyen = [
    {
        eventKey: "0",
        title: "Thông tin chuyển tuyến",
        component: <TabThongTinChuyenTuyen />
    },
    {
        eventKey: "1",
        title: "Thông tin ra viện",
        component: <TabThongTinRaVienChuyenTuyen />
    },
    {
        eventKey: "2",
        title: "QĐ130",
        component: <TabQD130 />
    },
]
