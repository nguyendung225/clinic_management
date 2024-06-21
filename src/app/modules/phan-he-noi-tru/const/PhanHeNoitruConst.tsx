import { DS_NOI_TRU_TIEP_DON } from "../../utils/Constant";
import DSGiuongBenh from "../components/giuong-benh/DSGiuongBenh";
import DSPhongBenh from "../components/phong-benh/DSPhongBenh";
import DSTiepDon from "../components/tiep-don/DSTiepDon";
import { IDichVu } from "../models/IDichVu";
import { IGiuongBenh } from "../models/IGiuongBenh";
import { IPhongBenh } from "../models/IPhongBenh";

export const fakeData = [
    {   
        maBA: "BA0000065",
        maBN: "BN202300006",
        vaoKhoa: "24/06/2023 10:34:25",
        raKhoa: "30/07/2023 10:34:25",
        tenBN: "Nguyễn Văn A",
        maBHYT: "DA9329349939",
        gioiTinh: "Nam",
        tuoi: "46",
        ngaySinh: "05/02/2004",
        doiTuong: "Đối tượng 1",
        tuyen: "Tuyến 1",
        trangThai: "Chờ nhập khoa",
        lydo: "Bị cúm",
        cdVaoVien: "Bị cúm",
        cdDieuTri: "Điều trị 1",
        diaChi: "Nguyễn Trãi-Thanh Xuân-Hà Nội",
        ngayRaVien: "03/08/2023",
        kqDieuTri: "Nguy hiểm",
        tamUng: "300.000",
        tong: "6.000.000",
        bhThanToan: "BH thanh toán",
        daNop: "5.000.000"
    }
];

export const danhSachMenu = [
    {
        id: "0",
        title: "DS tiếp đón",
        to: '/phan-he-noi-tru/tiep-don',
        key: DS_NOI_TRU_TIEP_DON,
        children: []
    },
    {
        id: "1",
        title: "Phòng bệnh",
        to: '/phan-he-noi-tru/quan-ly-phong-benh',
        key: DS_NOI_TRU_TIEP_DON,
        children: [
            {
                id: "1",
                key: DS_NOI_TRU_TIEP_DON,
                title: "Quản lý phòng bệnh",
                to: '/phan-he-noi-tru/quan-ly-phong-benh',
                fontIcon: "bi-file-earmark-person"
            }, 
            {
                id: "2",
                key: DS_NOI_TRU_TIEP_DON,
                title: "Quản lý giường bệnh",
                to: '/phan-he-noi-tru/quan-ly-giuong-benh',
                fontIcon: "bi-file-earmark-person"
            }, 
        ]
    }
];

export const danhSachTabTiepDon = [
    {
        eventKey: "0",
        title: "DS tiếp đón",
        component: <DSTiepDon />
    },
    {
        eventKey: "1",
        title: "Quản lý phòng bệnh",
        component: <DSPhongBenh />
    },
    {
        eventKey: "2",
        title: "Quản lý giường bệnh",
        component: <DSGiuongBenh />
    }
]

export const phongBenhOptions = [
  { value: '', name: 'Chọn phòng' },
  { value: 1, name: 'D504' },
  { value: 2, name: 'D505' },
  { value: 3, name: 'D506' },
  { value: 4, name: 'D507' },
  { value: 5, name: 'D508' },
  { value: 6, name: 'Tất cả' }
];

export const loaiPhongOptions = [
  { value: '', name: 'Chọn loại phòng' },
  { value: 1, name: 'BHYT' },
  { value: 2, name: 'Dịch vụ' },
  { value: 3, name: 'Tất cả' }
];

export const trangThaiOptions = [
  { value: '', name: 'Chọn trạng thái' },
  { value: 1, name: 'Đang trong khoa' },
  { value: 2, name: 'Đang ở ngoài khoa' },
  { value: 3, name: 'Tất cả' }
];

export const dsPhongBenh: IPhongBenh[] = [
  {
    id: 'phong1',
    tenPhong: 'Phòng 501',
    dsBenhNhan: [
      {
        id: '1',
        maGiuong: 'HNTH.501.01',
        namGhep: 0,
        tenBenhNhan: 'Nguyễn Văn A',
        maBenhNhan: 'BN202300078',
        maDieuTri: '0000157',
        maBenhAn: 'BA3493999',
        ngaySinh: '14/09/1981',
        gioiTinh: 'Nam',
        doiTuong: 'BHYT',
        soBHYT: 'DA943943993',
        hanTheBHYT: '01/01/2028',
        diaChi: '26 Trương Định, Định Công, Hoàng Mai, Hà Nội',
        benhChinh: 'U tiền liệt tuyến',
        benhPhu: 'Sỏi thận',
        bacSiDieuTri: 'BS. Nguyễn Thanh Sơn',
        dsDichVu: [
            {
                id: '1',
                maDichVu: 'DVCLS01',
                tenDichVu: 'Dịch vụ CLS',
                doiTuongTT: 'BHYT',
                soLuong: 2,
                ghiChu: 'Ghi chú CLS',
            },
            {
                id: '2',
                maDichVu: 'DVT01',
                tenDichVu: 'Dịch vụ thuốc',
                doiTuongTT: 'BHYT',
                soLuong: 4,
                ghiChu: 'Ghi chú thuốc',
            },
            {
                id: '3',
                maDichVu: 'DVM01',
                tenDichVu: 'Dịch vụ máu',
                doiTuongTT: 'BHYT',
                soLuong: 1,
                ghiChu: 'Ghi chú máu',
            },
            {
                id: '4',
                maDichVu: 'DVK01',
                tenDichVu: 'Dịch vụ khác',
                doiTuongTT: 'BHYT',
                soLuong: 5,
                ghiChu: 'Ghi chú khác',
            }
        ]
      },
      {
        id: '2',
        maGiuong: 'HNTH.501.02',
        namGhep: 0,
        tenBenhNhan: 'Phùng Xuân N',
        maBenhNhan: 'BN202300278',
        maDieuTri: '0000075',
        maBenhAn: 'BA3411979',
        ngaySinh: '18/02/1972',
        gioiTinh: 'Nam',
        doiTuong: 'BHYT',
        soBHYT: 'DA943954378',
        hanTheBHYT: '01/01/2029',
        diaChi: '26 Trương Định, Định Công, Hoàng Mai, Hà Nội',
        benhChinh: 'U tiền liệt tuyến',
        benhPhu: 'Sỏi thận',
        bacSiDieuTri: 'BS. Nguyễn Văn Nhiệm',
        dsDichVu: [
            {
                id: '3',
                maDichVu: 'DVCLS02',
                tenDichVu: 'Dịch vụ CLS',
                doiTuongTT: 'BHYT',
                soLuong: 2,
                ghiChu: 'Ghi chú CLS',
            },
            {
                id: '4',
                maDichVu: 'DVT02',
                tenDichVu: 'Dịch vụ thuốc',
                doiTuongTT: 'BHYT',
                soLuong: 4,
                ghiChu: 'Ghi chú thuốc',
            }
        ]
      },
      {
        id: '3',
        maGiuong: 'HNTH.501.03',
        namGhep: 0,
        tenBenhNhan: 'Lý Thị T',
        maBenhNhan: 'BN202300118',
        maDieuTri: '0000165',
        maBenhAn: 'BA3413239',
        ngaySinh: '24/06/1976',
        gioiTinh: 'Nữ',
        doiTuong: 'BHYT',
        soBHYT: 'DA975154684',
        hanTheBHYT: '15/04/2027',
        diaChi: '26 Trương Định, Định Công, Hoàng Mai, Hà Nội',
        benhChinh: 'U tiền liệt tuyến',
        benhPhu: 'Sỏi thận',
        bacSiDieuTri: 'BS. Nguyễn Xuân Bách',
        dsDichVu: []
      }
    ]
  },
  {
    id: 'phong2',
    tenPhong: 'Phòng 502',
    dsBenhNhan: [
      {
        id: '4',
        maGiuong: 'HNTH.502.01',
        namGhep: 1,
        tenBenhNhan: 'Hoàng Thị T',
        maBenhNhan: 'BN202300098',
        maDieuTri: '0000257',
        maBenhAn: 'BA2348399',
        ngaySinh: '24/06/1976',
        gioiTinh: 'Nữ',
        doiTuong: 'BHYT',
        soBHYT: 'DA975154684',
        hanTheBHYT: '15/04/2027',
        diaChi: '26 Trương Định, Định Công, Hoàng Mai, Hà Nội',
        benhChinh: 'U tiền liệt tuyến',
        benhPhu: 'Sỏi thận',
        bacSiDieuTri: 'BS. Nguyễn Xuân Bách',
        dsDichVu: [
            {
                id: '5',
                maDichVu: 'DVT03',
                tenDichVu: 'Dịch vụ thuốc',
                doiTuongTT: 'BHYT',
                soLuong: 6,
                ghiChu: 'Ghi chú thuốc',
            },
            {
                id: '6',
                maDichVu: 'DVM03',
                tenDichVu: 'Dịch vụ máu',
                doiTuongTT: 'BHYT',
                soLuong: 3,
                ghiChu: 'Ghi chú máu',
            },
            {
                id: '7',
                maDichVu: 'DVK03',
                tenDichVu: 'Dịch vụ khác',
                doiTuongTT: 'BHYT',
                soLuong: 7,
                ghiChu: 'Ghi chú khác',
            }
        ]
      },
      {
        id: '5',
        maGiuong: 'HNTH.502.01',
        namGhep: 1,
        tenBenhNhan: 'Phạm Thị Hải Y',
        maBenhNhan: 'BN202300189',
        maDieuTri: '0000149',
        maBenhAn: 'BA4389933',
        ngaySinh: '24/06/1976',
        gioiTinh: 'Nữ',
        doiTuong: 'BHYT',
        soBHYT: 'DA975154684',
        hanTheBHYT: '15/04/2027',
        diaChi: '26 Trương Định, Định Công, Hoàng Mai, Hà Nội',
        benhChinh: 'U tiền liệt tuyến',
        benhPhu: 'Sỏi thận',
        bacSiDieuTri: 'BS. Nguyễn Xuân Bách',
        dsDichVu: [
            {
                id: '8',
                maDichVu: 'DVM04',
                tenDichVu: 'Dịch vụ máu',
                doiTuongTT: 'BHYT',
                soLuong: 6,
                ghiChu: 'Ghi chú máu',
            }
        ]
      }
    ]
  }
];

export const dichVuCLS: IDichVu[] = [
    {
        id: '1',
        maDichVu: 'DVCLS01',
        tenDichVu: 'Dịch vụ CLS',
        doiTuongTT: 'BHYT',
        soLuong: 2,
        ghiChu: 'Ghi chú CLS',
    }
]

export const dichVuThuoc: IDichVu[] = [
    {
        id: '2',
        maDichVu: 'DVT01',
        tenDichVu: 'Dịch vụ thuốc',
        doiTuongTT: 'BHYT',
        soLuong: 4,
        ghiChu: 'Ghi chú thuốc',
    }
]

export const dichVuMau: IDichVu[] = [
    {
        id: '3',
        maDichVu: 'DVM01',
        tenDichVu: 'Dịch vụ máu',
        doiTuongTT: 'BHYT',
        soLuong: 1,
        ghiChu: 'Ghi chú máu',
    }
]

export const dichVuKhac: IDichVu[] = [
    {
        id: '4',
        maDichVu: 'DVK01',
        tenDichVu: 'Dịch vụ khác',
        doiTuongTT: 'BHYT',
        soLuong: 5,
        ghiChu: 'Ghi chú khác',
    }
]

export const trangThaiGiuongOptions = [
  { value: 1, name: 'Giường trống' },
  { value: 2, name: 'Có 1 bệnh nhân' },
  { value: 3, name: 'Có 2 bệnh nhân' }
];

export const enum GIUONG_IMG {
    GIUONG_TRONG = 'giuong0.png',
    GIUONG_CO_1BN = 'giuong1.png',
    GIUONG_CO_2BN = 'giuong2.png'
}

export const loaiGiuong = {
    0: 'giuong0.png',
    1: 'giuong1.png',
    2: 'giuong2.png'
}

export const dsGiuongBenh: IGiuongBenh[] = [
    {
        id: '1',
        maGiuong: 'HNTH.505.01',
        dsBenhNhan: []
    },
    {
        id: '2',
        maGiuong: 'HNTH.505.02',
        dsBenhNhan: [
            {
                tenBenhNhan: 'Nguyễn Văn C'
            }
        ]
    },
    {
        id: '3',
        maGiuong: 'HNTH.505.03',
        dsBenhNhan: [
            {
                tenBenhNhan: 'Nguyễn Thị L'
            },
            {
                tenBenhNhan: 'Trần Thị N'
            }
        ]
    },
    {
        id: '4',
        maGiuong: 'HNTH.505.04',
        dsBenhNhan: []
    },
    {
        id: '5',
        maGiuong: 'HNTH.505.05',
        dsBenhNhan: []
    },
    {
        id: '6',
        maGiuong: 'HNTH.505.06',
        dsBenhNhan: [
            {
                tenBenhNhan: 'Hoàng Văn V'
            },
            {
                tenBenhNhan: 'Lương Thế X'
            }
        ]
    }
]

export const trangThaiNhapVienOptions = [
  { value: '', name: 'Chọn trạng thái' },
  { value: 2, name: 'Đang nhập viện' },
  { value: 1, name: 'Chờ nhập viện' }
];

export const dsPhongBenhColumns = [
  {
    name: 'Mã giường',
    field: 'maGiuong',
    headerCellProps: {
      minWidth: 100
    }
  },
  {
    name: 'Nằm ghép',
    field: 'namGhep',
    headerCellProps: {
      minWidth: 100
    }
  },
  {
    name: 'Tên bệnh nhân',
    field: 'tenBenhNhan',
    headerCellProps: {
      minWidth: 125
    }
  },
  {
    name: 'Mã bệnh nhân',
    field: 'maBenhNhan',
    headerCellProps: {
      minWidth: 125
    }
  },
  {
    name: 'Mã điều trị',
    field: 'maDieuTri',
    headerCellProps: {
      minWidth: 100
    }
  },
  {
    name: 'Mã bệnh án',
    field: 'maBenhAn',
    headerCellProps: {
      minWidth: 125
    }
  }
];