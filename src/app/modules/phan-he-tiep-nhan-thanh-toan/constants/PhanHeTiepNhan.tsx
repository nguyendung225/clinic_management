import moment from "moment";
import { KEY_DS_TAB_TIEP_NHAN } from "../../utils/Constant";
import { benhNhan } from "../models/PhanHeTiepNhanModel";
import { Reception } from "../tab-danh-sach-tiep-nhan/DanhSachTiepNhan";
import { PhanHeVienPhiBaoHiem } from "../tab-thanh-toan/ThanhToan";
import TiepNhan from "../tab-tiep-nhan/TiepNhan";

export enum DOI_TUONG {
    BHTY = 'BHYT',
    BAO_HIEM = 0,
}
export const yeuCauKhamOptions = [
    {
        id: 'rehrstcgjh',
        code: "RHTR011",
        name: "Khám sức khỏe tổng thể",
        noiThucHien: "Phòng khám tổng thể",
        donGia: "100000",
    },
    {
        id: 'fhjrearherh',
        code: "KAWD011",
        name: "Khám răng",
        noiThucHien: "Phòng khám răng hàm mặt",
        donGia: "500000",
    },
    {
        id: 'hetjsrtdr',
        code: "AERH011",
        name: "Khám mắt",
        noiThucHien: "Phòng khám mắt Hà Nội",
        donGia: "300000",
    },
];

export const options = [
    { code: 'opt', name: 'Option 1' },
    { code: 'opt2', name: 'Option 2' },
    { code: 'opn3', name: 'Option 3' }
];

export const GIOI_TINH = [
    { id: 'MALE', name: 'Nam' },
    { id: 'Female', name: 'Nữ' },
    { id: 'KXD', name: 'Không xác định' },
];
export const QUOC_TICH = [
    { code: '0', name: 'Viêt Nam' },
    { code: '1', name: 'Lào' },
    { code: '2', name: 'Thái Lan' }
];

export const XA = [
    { code: 'dinh cong', name: 'Định công' },
    { code: 'binh phu', name: 'Bình phú' },
    { code: 'huu bang', name: 'Hữu bằng' }
];

export const HUYEN = [
    { code: 'thach that', name: 'Thạch Thất' },
    { code: 'quoc oai', name: 'Quốc Oai' },
    { code: 'hoang mai', name: 'Hoàng Mai' }
];

export const TINH = [
    { code: 'ha noi', name: 'Hà Nội' },
    { code: 'ho chi minh', name: 'Hồ Chí Minh' },
];

export const LOAI_TIEP_NHAN = [
    { code: 0, name: "Bệnh mới" },
    { code: 1, name: "Tái khám" },
    { code: 2, name: "Đặt lịch hẹn khám" }
];

export const LOAI_DOI_TUONG = [
    { code: 0, name: 'BHYT' },
    { code: 1, name: 'Dịch vụ' },
    { code: 2, name: 'Miễn giảm' },
    { code: 3, name: 'khác' },
];

export const NGHE_NGHIEP = [
    { code: 'ky su', name: 'Kỹ sư' },
    { code: 'IT', name: 'Công nghệ thông tin' },
];

export const MOI_QUAN_HE = [
    { code: 'bo', name: 'Bố' },
    { code: 'me', name: 'Mẹ' },
    { code: 'anh', name: 'Anh' },
];

export const LOAI_BENH_NHAN = [
    { code: 'benh moi', name: 'Bệnh mới' },
    { code: 'benh cu', name: 'Bệnh cũ' },
];

export const THONGTINTUYEN = [
    { code: '1', name: 'Đúng tuyến' },
    { code: '2', name: 'Trái tuyến' },
    { code: '3', name: 'Thông tuyến' },
    { code: '4', name: 'Giới thiệu' }
];

export const danhSachMenu = [
    {
        id: "0",
        title: "Tiếp nhận",
        to: '/phan-he-tiep-nhan',
        children: [
            {
                id: "0",
                key: KEY_DS_TAB_TIEP_NHAN,
                title: "Tiếp nhận",
                to: '/phan-he-tiep-nhan',
                fontIcon: "bi-file-earmark-person"
            },
            {
                id: "1",
                key: KEY_DS_TAB_TIEP_NHAN,
                title: "DS hẹn khám",
                to: '/phan-he-tiep-nhan',
                fontIcon: "bi-list-ul"
            },
            {
                id: "2",
                key: KEY_DS_TAB_TIEP_NHAN,
                title: "DS tiếp nhận",
                to: '/phan-he-tiep-nhan',
                fontIcon: "bi-list-stars"
            },
            {
                id: "3",
                key: KEY_DS_TAB_TIEP_NHAN,
                title: "DS gọi lại",
                to: '/phan-he-tiep-nhan',
                fontIcon: "bi-telephone"
            },
            {
                id: "4",
                key: KEY_DS_TAB_TIEP_NHAN,
                title: "Chỉ định dịch vụ",
                to: '/phan-he-tiep-nhan',
                fontIcon: "bi-list-ul"
            }
        ]
    },
];

export const KEY_TAB_DS_TIEP_NHAN = {
    TIEP_NHAN: "0",
    DS_TIEP_NHAN: "1",
    THANH_TOAN: "2",
    CD_DICH_VU: "3",
    DS_HEN_KHAM: "4",
    DS_CHO_GOI: "5",
    DV_KHAM: "6",
}

export const danhSachTabTiepNhan = [
  {
    eventKey: KEY_TAB_DS_TIEP_NHAN.TIEP_NHAN,
    title: "Tiếp nhận",
    component: <TiepNhan />,
  },
  {
    eventKey: KEY_TAB_DS_TIEP_NHAN.DS_TIEP_NHAN,
    title: "DS tiếp nhận",
    component: <Reception eventkey={KEY_TAB_DS_TIEP_NHAN.DS_TIEP_NHAN} />,
  },
  {
    eventKey: KEY_TAB_DS_TIEP_NHAN.THANH_TOAN,
    title: "Thanh toán",
    component: <PhanHeVienPhiBaoHiem />,
  },
];


export const KEY_TAB_KHAM_BENH = {
    DICH_VU: "0",
    SINH_HIEU: "1",
    NGUOI_NHA: "2",
    LICH_SU: "3",
    TAI_NAN_THUONG_TICH: "4",
    XAC_THUC: "5",
    DS_CHO_GOI: "6",
    THONG_TIN_PHONG_KHAM: "7",
    ZALO: "8",
    GIA_DINH: "9",
    GOP_PCR: "10",
    DS_DANG_KY: "11",
}

export const initialValuesTiepNhan: benhNhan = {
    mpi: "",
    hoTen: "",
    ngaySinh: undefined,
    namSinh: null,
    thangSinh: null,
    gioiTinh: "",
    soDinhDanh: "",
    soDienThoai: "",
    maDanToc: "",
    maQuocTich: "",
    soNha: "",
    tenantId: 0,
    tuoi: '',
    diaChi: "",
    wardId: "",
    districtId: "",
    provinceId: "",
    professionCode: "",
    benhNhanMqh: {
        hoTen: "",
        maQuanHe: "",
        diaChi: "",
        soDienThoai: "",
    },
    benhNhanBhyt: {
        soBhyt: "",
        noiDangKy: "",
        tuNgay: "",
        denNgay: "",
        mienDongCt: "",
        loaiTuyen: "",
        maKv: "",
        is5nam: false,
        is6thang: false,
    },
    benhNhanCase: {
        loaiDoiTuong: "",
        loaiTiepNhan: "",
        thoiGianTiepNhan: moment().format("DD/MM/YYYY HH:mm:ss"),
        isUuTien: false,
        isCapCuu: false,
        yeuCauKham: [],
    },
    province: null,
    district: null,
    ward: null,
    danToc: null,
    quocTich: null,
    gender: null,
    job: null,
    quanHe: null,
    loaiDoiTuong: null,
    loaiTiepNhan: null,
    tenDichVu: null,
    phongKham: null,
    thoiDiemTaiNan: "",
    noiXayRaTaiNan: "", 
    tinhTaiNan: null, 
    tinhTaiNanId: "",
    huyenTaiNan: null, 
    huyenTaiNanId: "", 
    xaTaiNan: null, 
    xaTaiNanId: "",
    diaDiemXayRa: null, 
    boPhanChanThuong: null, 
    nguyenNhanTaiNan: null, 
    xuTriTaiNan: null, 
    dienBienSauTaiNan: null,
    obs: {
        mach: {
            code: "",
            datatype: "",
            value: "",
            datetime: "",
        },
        nhietDo: {
            code: "",
            datatype: "",
            value: "",
            datetime: "",
        },
        huyetApTren: {
            code: "",
            datatype: "",
            value: "",
            datetime: "",
        },
        huyetApDuoi: {
            code: "",
            datatype: "",
            value: "",
            datetime: "",
        },
        nhipTho: {
            code: "",
            datatype: "",
            value: "",
            datetime: "",
        },
        canNang: {
            code: "",
            datatype: "",
            value: "",
            datetime: "",
        },
        chieuCao: {
            code: "",
            datatype: "",
            value: "",
            datetime: "",
        },
        SPO2: {
            code: "",
            datatype: "",
            value: "",
            datetime: "",
        },
        BMI: {
            code: "",
            datatype: "",
            value: "",
            datetime: "",
        },
    },
    BHYT: {
        soThe1: "",
        soThe2: "",
        soThe3: "",
        soThe4: "",
        KCBBD: "",
        hanThe: {
            ngayStart:"",
            thangStart:"",
            namStart:"",
            ngayEnd:"",
            thangEnd:"",
            namEnd:"",
        }
    },
    dangKyKham: null,

    email: "",
    chucVu: "",
    donVi: "",
    id: "",
    hoTenNguoiNha: "",
    CCCDNguoiNha: "",
    CCCD: "",
    dienThoai:"",
    capBac:"",
    dtChiTiet: null,
};

export const initialBenhNhanCase = {
    cin: "",
    loaiDoiTuong: "",
    loaiTiepNhan: "",
    thoiGianTiepNhan: "",
    ngayHen: "",
    isUuTien: false,
    isCapCuu: false,
    yeuCauKham: [],
    phongKham: "",
    loaiGia: "",
};

export const initialBenhNhanBhyt = {
    soBhyt: "",
    noiDangKy: "",
    tuNngay: "",
    denNngay: "",
    mienDongCt: "",
    loaiTuyen: "",
    maKv: "",
    is5nam: false,
    is6thang: false,
};

export const defaultOptionSelect = {
    id: '',
    name: ''
};
export const defaultOptionSelectIdNumber = {
    id: 0,
    name: ''
};

export const MUC_BMI = {
    "gầy": 18.5,
    "bình thường": 24.9,
    "tiền béo": 29.9,
    "béo phì độ I": 34.9,
    "béo phì độ II": 39.9,
};

export const PHAN_LOAI: { [key: string]: string } = {
    "gầy": "gầy",
    "bình thường": "bình thường",
    "tiền béo": "tiền béo",
    "béo phì độ I": "béo phì độ I",
    "béo phì độ II": "béo phì độ II",
    "béo phì độ III": "béo phì độ III",
}; 

export const optionsDiaDiemXayRa = [
    { code: 0, name: "Hồ, ao, sông" },
    { code: 1, name: "Nơi công cộng" },
    { code: 2, name: "Nơi làm việc" },
    { code: 3, name: "Trên đường đi" },
    { code: 4, name: "Trường học" },
    { code: 5, name: "Tại nhà" },
    { code: 6, name: "Khác" },
]

export const optionsBoPhanChanThuong = [
    { code: 0, name: "Chấn thương sọ" },
    { code: 1, name: "Các chi" },
    { code: 2, name: "Thân mình" },
    { code: 3, name: "Đa chấn thương" },
    { code: 4, name: "Trường học" },
    { code: 5, name: "Đầu, mắt, cổ" },
    { code: 6, name: "Khác" },
]

export const optionsNguyenNhan = [
    { code: 0, name: "Bạo lực, xung đột" },
    { code: 1, name: "Bỏng" },
    { code: 2, name: "Chất nổ khác" },
    { code: 3, name: "Ngộ độc các loại" },
    { code: 4, name: "Pháo nổ" },
    { code: 5, name: "Tai nạn dưới nước" },
    { code: 6, name: "Tai nạn giao thông" },
    { code: 7, name: "Tai nạn lao động" },
    { code: 8, name: "Tai nạn sinh hoạt" },
    { code: 9, name: "Tai nạn ẩu đả" },
    { code: 10, name: "Tự tử" },
    { code: 11, name: "Không" },
    { code: 12, name: "Khác" },
]

export const optionsLoaiNgoDoc = [
    { code: 0, name: "Ngộ độc Acetaminophen" },
    { code: 1, name: "Aspirin và Ngộ độc Salicylate khác" },
    { code: 2, name: "Ngộ độc Carbon Monoxide" },
    { code: 3, name: "Ngộ độc cá & động vật có vỏ" },
    { code: 4, name: "Ngộ độc Hydrocacbon" },
    { code: 5, name: "Ngộ độc sắt" },
    { code: 6, name: "Ngộ độc chì" },
    { code: 7, name: "Ngộ độc nấm" },
    { code: 8, name: "Ngộ độc Phospho hữu cơ & Carbamate" },
    { code: 9, name: "Ngộ độc thực vật" },
    { code: 10, name: "Chất độc đặc biệt" },
]

export const optionsSuDungBiaRuouMaTuy = [
    { code: 0, name: "Có" },
    { code: 1, name: "Không" },
]

export const optionsMu = [
    { code: 0, name: "Có" },
    { code: 1, name: "Không" },
]

export const optionsTNLĐ = [
    { code: 0, name: "TNLĐ làm chết người lao động" },
    { code: 1, name: "TNLĐ làm người lao động bị thương nặng" },
    { code: 2, name: "TNLĐ làm người lao động bị thương nhẹ" },
]

export const optionsTNGT = [
    { code: 0, name: "TNGT làm chết người" },
    { code: 1, name: "TNGT làm người bị thương nặng" },
    { code: 2, name: "TNGT làm người bị thương nhẹ" },
]

export const optionsDienBienSauTaiNan = [
    { code: 0, name: "Diễn biến không nguy hiểm" },
    { code: 1, name: "Diễn biến thương tích vật lý" },
    { code: 2, name: "Diễn biến tâm lý và tâm thần" },
    { code: 3, name: "Diễn biến y tế khác" },
]

export const LOAI_DK_KHAM = [
    { code: 0, name: "Khám ngoại trú" },
    { code: 1, name: "Cấp cứu" },
]

export const initialValues = {
    hoTenBenhNhan: "",
    ngaySinh: "",
    thangSinh: "",
    namSinh: "",
    gioiTinh: null,
    cccd: "",
    quocTich: null,
    soDienThoai: "",
    address: "",
}

export const CODE_DOI_TUONG = {
    BAO_HIEM: 0,
    VIEN_PHI: 1,
    YEU_CAU: 2,
    MIEN_PHI: 3
}

export const LIST_DOI_TUONG_TIEP_NHAN = [
    { code: CODE_DOI_TUONG.BAO_HIEM, name: 'Bảo hiểm' },
    { code: CODE_DOI_TUONG.VIEN_PHI, name: 'Viện phí' },
    { code: CODE_DOI_TUONG.YEU_CAU, name: 'Yêu cầu' },
    { code: CODE_DOI_TUONG.MIEN_PHI, name: 'Miễn phí' },
]

export const fakeDSTiepNhan = [
    {
        "mpi": "",
        "hoTen": "Vũ Trọng Khánh",
        "ngaySinh": "5",
        "namSinh": "2003",
        "thangSinh": "6",
        "gioiTinh": "MALE",
        "soDinhDanh": "",
        "soDienThoai": "09457574737",
        "maDanToc": "c9db30da-2792-11ee-be56-0242ac120002",
        "maQuocTich": "4694642d-943f-4551-bf9a-f7fe3b1b0f62",
        "soNha": "30",
        "tenantId": 0,
        "tuoi": "20 tuổi",
        "diaChi": "Hà Nội",
        "professionCode": "",
        "benhNhanMqh": {
            "hoTen": "",
            "maQuanHe": "1",
            "diaChi": "",
            "soDienThoai": "",
            "tenQuanHe": "Bố"
        },
        "benhNhanBhyt": {
            "soBhyt": "",
            "noiDangKy": "",
            "tuNgay": "",
            "denNgay": "",
            "mienDongCt": "",
            "loaiTuyen": "",
            "maKv": "",
            "is5nam": false,
            "is6thang": false
        },
        "tenDichVu": null,
        "phongKham": null,
        "thoiDiemTaiNan": "",
        "noiXayRaTaiNan": "",
        "tinhTaiNan": null,
        "tinhTaiNanId": "",
        "huyenTaiNan": null,
        "huyenTaiNanId": "",
        "xaTaiNan": null,
        "xaTaiNanId": "",
        "diaDiemXayRa": null,
        "boPhanChanThuong": null,
        "nguyenNhanTaiNan": null,
        "xuTriTaiNan": null,
        "dienBienSauTaiNan": null,
        xetNghiem: [
            {
                trangThaiXetNghiem: 1,
                batDau: moment().subtract(1, "h"),
                khoa: "Khoa nhi",
                phòng: "101",
                ketThuc: moment(),
                xuTri: "Nhập viện",
                dich: "Khoa Nhi"
            },
            {
                trangThaiXetNghiem: 2,
                batDau: moment().subtract(1, "h"),
                khoa: "Khoa khám bệnh",
                phòng: "P117 - Khoa mắt",
                ketThuc: moment(),
                xuTri: "Điều trị ngoại trú",
                dich: "Khoa Nhi"
            }
        ],
        "BHYT": {
            "soThe1": "",
            "soThe2": "",
            "soThe3": "",
            "soThe4": "",
            "KCBBD": "",
            "hanThe": {
                "ngayStart": "",
                "thangStart": "",
                "namStart": "",
                "ngayEnd": "",
                "thangEnd": "",
                "namEnd": ""
            }
        },
        "dangKyKham": {
            "code": 0,
            "name": "Khám ngoại trú"
        },
        "isDatLichHen": false,
        "email": "nva@gmail.com",
        "CCCD": 1455567894,
        "capBac": "1",
        "chucVu": "Nhân Viên",
        "hoTenNguoiNha": "NGUYỄN VĂN CƯƠNG",
        "dienThoai": "0988679465",
        "CCCDNguoiNha": 1458893840,
        "luc": "10:07 - 20/11/2023",
        "tinhHuyenXa": "30, Phường Phúc Xá, Quận Ba Đình,  Hà Nội",
        "noiSinh": {
            "createDate": "2023-09-18T00:00:00",
            "createdBy": "ADMIN",
            "modifyDate": null,
            "modifiedBy": null,
            "id": 1,
            "tenantId": -1234,
            "code": "01",
            "name": " Hà Nội",
            "population": null,
            "acreage": null,
            "note": null,
            "districts": null
        },
        "person": {
            "name": "Vũ Trọng Khánh",
            "ngaySinh": "5",
            "thangSinh": "6",
            "namSinh": "2003",
            "gender": "MALE",
            "ethnicId": "c9db30da-2792-11ee-be56-0242ac120002",
            "nationalityId": "4694642d-943f-4551-bf9a-f7fe3b1b0f62",
            "address": "30",
            "fullAddress": "Hà Nội",
            "communeId": 1,
            "districtId": 1,
            "provinceId": 1,
            "phoneNumber": "09457574737",
            "citizenId": "",
            "jobId": ""
        },
        "encounter": {
            "id": null,
            "patentId": null,
            "soPhieu": null,
            "departmentId": "0f0b6fcd-90c9-42e4-b5b0-e953d71d72c1",
            "departmentName": "Khoa nhi",
            "roomName": "R1-001",
            "roomId": "1189af0f-3134-483b-9d8e-3d2a87e413b8",
            "encounterType": 1,
            "encounterDatetime": "2023-11-20T10:13:49",
            "orders": [
                {
                    "conceptId": 60,
                    "orderId": "pfnCh1LQkx",
                    "conceptName": "Khám ngoại chấn tương chỉnh hình",
                    "conceptCode": "KNCCTH",
                    "departmentId": "9affe48f-6eed-490d-ba09-f3d4a451991b",
                    "departmentcode": "PH1",
                    "departmentName": "Khoa thần kinh",
                    "roomName": "Phòng khám 1",
                    "roomId": "bc7f0757-2085-45e0-afe9-7b06d9d1ba83",
                    "price": "23000",
                    "totalPrice": "23000",
                    "promotionPrice": 0,
                    "promotionPercent": 0,
                    "quantity": 1,
                    "insurancePrice": "0.0",
                    "statusId": 1
                }
            ],
            "caseRequest": {
                "id": null,
                "patientId": null,
                "cin": null,
                "loaiDoiTuong": "fd1503ed-0759-4ae0-8c71-85fb93127c31",
                "tenLoaiDoiTuong": "Dịch vụ",
                "loaiTiepNhan": "0dda657e-247b-11ee-9130-0242ac110002",
                "tenLoaiTiepNhan": "Bệnh mới",
                "thoiGianTiepNhan": "2023-11-20T10:13:49",
                "isUuTien": false,
                "isCapCuu": false
            },
            "obs": [
                {
                    "code": "",
                    "datatype": "",
                    "value": "",
                    "datetime": ""
                },
                {
                    "code": "",
                    "datatype": "",
                    "value": "",
                    "datetime": ""
                },
                {
                    "code": "",
                    "datatype": "",
                    "value": "",
                    "datetime": ""
                },
                {
                    "code": "",
                    "datatype": "",
                    "value": "",
                    "datetime": ""
                },
                {
                    "code": "",
                    "datatype": "",
                    "value": "",
                    "datetime": ""
                },
                {
                    "code": "",
                    "datatype": "",
                    "value": "",
                    "datetime": ""
                },
                {
                    "code": "",
                    "datatype": "",
                    "value": "",
                    "datetime": ""
                },
                {
                    "code": "",
                    "datatype": "",
                    "value": "",
                    "datetime": ""
                },
                {
                    "code": "",
                    "datatype": "",
                    "value": "",
                    "datetime": ""
                }
            ]
        },
        "id": 8
    },
    {
        "mpi": "",
        "hoTen": "Vũ Phong Tư",
        "ngaySinh": "5",
        "namSinh": "2003",
        "thangSinh": "6",
        "gioiTinh": "MALE",
        "soDinhDanh": "",
        "soDienThoai": "09457574737",
        "maDanToc": "c9db30da-2792-11ee-be56-0242ac120002",
        "maQuocTich": "4694642d-943f-4551-bf9a-f7fe3b1b0f62",
        "soNha": "30",
        "tenantId": 0,
        "tuoi": "20 tuổi",
        "diaChi": "Hà Nội",
        "professionCode": "",
        "benhNhanMqh": {
            "hoTen": "",
            "maQuanHe": "2",
            "diaChi": "",
            "soDienThoai": "",
            "tenQuanHe": "Mẹ"
        },
        "benhNhanBhyt": {
            "soBhyt": "",
            "noiDangKy": "",
            "tuNgay": "",
            "denNgay": "",
            "mienDongCt": "",
            "loaiTuyen": "",
            "maKv": "",
            "is5nam": false,
            "is6thang": false
        },
        "tenDichVu": null,
        "phongKham": null,
        "thoiDiemTaiNan": "",
        "noiXayRaTaiNan": "",
        "tinhTaiNan": null,
        "tinhTaiNanId": "",
        "huyenTaiNan": null,
        "huyenTaiNanId": "",
        "xaTaiNan": null,
        "xaTaiNanId": "",
        "diaDiemXayRa": null,
        "boPhanChanThuong": null,
        "nguyenNhanTaiNan": null,
        "xuTriTaiNan": null,
        "dienBienSauTaiNan": null,
        "BHYT": {
            "soThe1": "",
            "soThe2": "",
            "soThe3": "",
            "soThe4": "",
            "KCBBD": "",
            "hanThe": {
                "ngayStart": "",
                "thangStart": "",
                "namStart": "",
                "ngayEnd": "",
                "thangEnd": "",
                "namEnd": ""
            }
        },
        "dangKyKham": {
            "code": 0,
            "name": "Khám ngoại trú"
        },
        "isDatLichHen": false,
        "email": "nva@gmail.com",
        "CCCD": 1455567894,
        "tinhHuyenXa": "30, Phường Phúc Xá, Quận Ba Đình,  Hà Nội",
        "capBac": "1",
        "chucVu": "Nhân Viên",
        "hoTenNguoiNha": "NGUYỄN THỊ HOA",
        "dienThoai": "0988679465",
        "CCCDNguoiNha": 1458893840,
        "luc": "10:13 - 20/11/2023",
        "noiSinh": {
            "createDate": "2023-09-18T00:00:00",
            "createdBy": "ADMIN",
            "modifyDate": null,
            "modifiedBy": null,
            "id": 1,
            "tenantId": -1234,
            "code": "01",
            "name": " Hà Nội",
            "population": null,
            "acreage": null,
            "note": null,
            "districts": null
        },
        "person": {
            "name": "Vũ Phong Tư",
            "ngaySinh": "5",
            "thangSinh": "6",
            "namSinh": "2003",
            "gender": "MALE",
            "ethnicId": "c9db30da-2792-11ee-be56-0242ac120002",
            "nationalityId": "4694642d-943f-4551-bf9a-f7fe3b1b0f62",
            "address": "30",
            "fullAddress": "Hà Nội",
            "communeId": 1,
            "districtId": 1,
            "provinceId": 1,
            "phoneNumber": "09457574737",
            "citizenId": "",
            "jobId": ""
        },
        "encounter": {
            "id": null,
            "patentId": null,
            "soPhieu": null,
            "departmentId": "0f0b6fcd-90c9-42e4-b5b0-e953d71d72c1",
            "departmentName": "Khoa nhi",
            "roomName": "R1-001",
            "roomId": "1189af0f-3134-483b-9d8e-3d2a87e413b8",
            "encounterType": 1,
            "encounterDatetime": "2023-11-20T10:25:34",
            "orders": [
                {
                    "conceptId": 60,
                    "orderId": "ZyVdNpA65W",
                    "conceptName": "Khám ngoại chấn tương chỉnh hình",
                    "conceptCode": "KNCCTH",
                    "departmentId": "9affe48f-6eed-490d-ba09-f3d4a451991b",
                    "departmentcode": "PK2",
                    "departmentName": "Khoa thần kinh",
                    "roomName": "Phòng khám 2",
                    "roomId": "4011e67a-42a2-49e9-8194-4adc4234eaca",
                    "price": "23000",
                    "totalPrice": "23000",
                    "promotionPrice": 0,
                    "promotionPercent": 0,
                    "quantity": 1,
                    "insurancePrice": "0.0",
                    "statusId": 1
                }
            ],
            "caseRequest": {
                "id": null,
                "patientId": null,
                "cin": null,
                "loaiDoiTuong": "fd1503ed-0759-4ae0-8c71-85fb93127c31",
                "tenLoaiDoiTuong": "Dịch vụ",
                "loaiTiepNhan": "0dda657e-247b-11ee-9130-0242ac110002",
                "tenLoaiTiepNhan": "Bệnh mới",
                "thoiGianTiepNhan": "2023-11-20T10:25:34",
                "isUuTien": false,
                "isCapCuu": false
            },
            "obs": [
                {
                    "code": "",
                    "datatype": "",
                    "value": "",
                    "datetime": ""
                },
                {
                    "code": "",
                    "datatype": "",
                    "value": "",
                    "datetime": ""
                },
                {
                    "code": "",
                    "datatype": "",
                    "value": "",
                    "datetime": ""
                },
                {
                    "code": "",
                    "datatype": "",
                    "value": "",
                    "datetime": ""
                },
                {
                    "code": "",
                    "datatype": "",
                    "value": "",
                    "datetime": ""
                },
                {
                    "code": "",
                    "datatype": "",
                    "value": "",
                    "datetime": ""
                },
                {
                    "code": "",
                    "datatype": "",
                    "value": "",
                    "datetime": ""
                },
                {
                    "code": "",
                    "datatype": "",
                    "value": "",
                    "datetime": ""
                },
                {
                    "code": "",
                    "datatype": "",
                    "value": "",
                    "datetime": ""
                }
            ]
        },
        "id": 9
    },
    {
        "hoTen": "Vũ Phong Tư",
        "ngaySinh": "5",
        "namSinh": "2003",
        "thangSinh": "6",
        "gioiTinh": "MALE",
        "soDinhDanh": "",
        "soDienThoai": "09457574737",
        "maDanToc": "c9db30da-2792-11ee-be56-0242ac120002",
        "maQuocTich": "4694642d-943f-4551-bf9a-f7fe3b1b0f62",
        "soNha": "30",
        "tenantId": 0,
        "tuoi": "20 tuổi",
        "diaChi": "Hà Nội",
        "professionCode": "",
        "benhNhanMqh": {
            "hoTen": "",
            "maQuanHe": "2",
            "diaChi": "",
            "soDienThoai": "",
            "tenQuanHe": "Mẹ"
        },
        "benhNhanBhyt": {
            "soBhyt": "",
            "noiDangKy": "",
            "tuNgay": "",
            "denNgay": "",
            "mienDongCt": "",
            "loaiTuyen": "",
            "maKv": "",
            "is5nam": false,
            "is6thang": false
        },
        "tenDichVu": null,
        "phongKham": null,
        "thoiDiemTaiNan": "",
        "noiXayRaTaiNan": "",
        "tinhTaiNan": null,
        "tinhTaiNanId": "",
        "huyenTaiNan": null,
        "huyenTaiNanId": "",
        "xaTaiNan": null,
        "xaTaiNanId": "",
        "diaDiemXayRa": null,
        "boPhanChanThuong": null,
        "nguyenNhanTaiNan": null,
        "xuTriTaiNan": null,
        "dienBienSauTaiNan": null,
        "BHYT": {
            "soThe1": "",
            "soThe2": "",
            "soThe3": "",
            "soThe4": "",
            "KCBBD": "",
            "hanThe": {
                "ngayStart": "",
                "thangStart": "",
                "namStart": "",
                "ngayEnd": "",
                "thangEnd": "",
                "namEnd": ""
            }
        },
        "dangKyKham": {
            "code": 0,
            "name": "Khám ngoại trú"
        },
        "isDatLichHen": false,
        "email": "nva@gmail.com",
        "CCCD": 1455567894,
        "tinhHuyenXa": "30, Phường Phúc Xá, Quận Ba Đình,  Hà Nội",
        "capBac": "1",
        "chucVu": "Nhân Viên",
        "hoTenNguoiNha": "NGUYỄN THỊ HOA",
        "dienThoai": "0988679465",
        "CCCDNguoiNha": 1458893840,
        "luc": "10:13 - 20/11/2023",
        "noiSinh": {
            "createDate": "2023-09-18T00:00:00",
            "createdBy": "ADMIN",
            "modifyDate": null,
            "modifiedBy": null,
            "id": 1,
            "tenantId": -1234,
            "code": "01",
            "name": " Hà Nội",
            "population": null,
            "acreage": null,
            "note": null,
            "districts": null
        },
        "mach": "144",
        "nhietdo": "37",
        "huyetAp1": "70",
        "huyetap2": "100",
        "nhiptho": "60",
        "canNang": "50",
        "chieuCao": "150",
        "BMI": "2",
        "person": {
            "name": "Vũ Phong Tư",
            "ngaySinh": "5",
            "thangSinh": "6",
            "namSinh": "2003",
            "gender": "MALE",
            "ethnicId": "c9db30da-2792-11ee-be56-0242ac120002",
            "nationalityId": "4694642d-943f-4551-bf9a-f7fe3b1b0f62",
            "address": "30",
            "fullAddress": "Hà Nội",
            "communeId": 1,
            "districtId": 1,
            "provinceId": 1,
            "phoneNumber": "09457574737",
            "citizenId": "",
            "jobId": ""
        },
        "encounter": {
            "id": null,
            "patentId": null,
            "soPhieu": null,
            "departmentId": "0f0b6fcd-90c9-42e4-b5b0-e953d71d72c1",
            "departmentName": "Khoa nhi",
            "roomName": "R1-001",
            "roomId": "1189af0f-3134-483b-9d8e-3d2a87e413b8",
            "encounterType": 1,
            "encounterDatetime": "2023-11-20T10:28:17",
            "orders": [
                {
                    "conceptId": 60,
                    "orderId": "ZyVdNpA65W",
                    "conceptName": "Khám ngoại chấn tương chỉnh hình",
                    "conceptCode": "KNCCTH",
                    "departmentId": "9affe48f-6eed-490d-ba09-f3d4a451991b",
                    "departmentcode": "PK2",
                    "departmentName": "Khoa thần kinh",
                    "roomName": "Phòng khám 2",
                    "roomId": "4011e67a-42a2-49e9-8194-4adc4234eaca",
                    "price": "23000",
                    "totalPrice": "23000",
                    "promotionPrice": 0,
                    "promotionPercent": 0,
                    "quantity": 1,
                    "insurancePrice": "0.0",
                    "statusId": 1
                }
            ],
            "caseRequest": {
                "id": null,
                "patientId": null,
                "cin": null,
                "loaiDoiTuong": "fd1503ed-0759-4ae0-8c71-85fb93127c31",
                "tenLoaiDoiTuong": "Dịch vụ",
                "loaiTiepNhan": "0dda657e-247b-11ee-9130-0242ac110002",
                "tenLoaiTiepNhan": "Bệnh mới",
                "thoiGianTiepNhan": "2023-11-20T10:28:17",
                "isUuTien": false,
                "isCapCuu": false
            },
            "obs": [
                {
                    "code": "",
                    "datatype": "",
                    "value": "",
                    "datetime": ""
                },
                {
                    "code": "",
                    "datatype": "",
                    "value": "",
                    "datetime": ""
                },
                {
                    "code": "",
                    "datatype": "",
                    "value": "",
                    "datetime": ""
                },
                {
                    "code": "",
                    "datatype": "",
                    "value": "",
                    "datetime": ""
                },
                {
                    "code": "",
                    "datatype": "",
                    "value": "",
                    "datetime": ""
                },
                {
                    "code": "",
                    "datatype": "",
                    "value": "",
                    "datetime": ""
                },
                {
                    "code": "",
                    "datatype": "",
                    "value": "",
                    "datetime": ""
                },
                {
                    "code": "",
                    "datatype": "",
                    "value": "",
                    "datetime": ""
                },
                {
                    "code": "",
                    "datatype": "",
                    "value": "",
                    "datetime": ""
                }
            ]
        },
        "id": 10
    },]