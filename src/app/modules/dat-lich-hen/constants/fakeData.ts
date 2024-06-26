import moment from "moment";
import { danhSachChoKham, danhSachHenKham } from "../models/datLichHenModels";

export const LIST_TUYEN_KCB = [
  {
    code: "DT",
    name: "Đúng tuyến",
  },
  {
    code: "DTGT",
    name: "Đúng tuyến (giới thiệu)",
  },
  {
    code: "DTGH",
    name: "Đúng tuyến (giấy hẹn)",
  },
  {
    code: "DTCC",
    name: "Đúng tuyến (cấp cứu)",
  },
  {
    code: "TTH",
    name: "Thông tuyến huyện",
  },
  {
    code: "TT",
    name: "Trái tuyến",
  },
  {
    code: "TTT",
    name: "Trái tuyến (thông tuyến tỉnh)",
  },
];

export const LIST_PROVINCE = [
  {
    code: "HN",
    name: "Thành phố Hà Nội",
  },
  {
    code: "HD",
    name: "Tỉnh Hải Dương",
  },
  {
    code: "HP",
    name: "Tỉnh Hải Phòng",
  },
];

export const LIST_DISTRICT = [
  {
    code: "TX",
    name: "Quận Thanh Xuân",
  },
  {
    code: "NS",
    name: "Huyện Nam Sách",
  },
  {
    code: "AD",
    name: "Huyện An Dương",
  },
];

export const LIST_WARD = [
  {
    code: "TXN",
    name: "Phường Thanh Xuân Nam",
  },
  {
    code: "NH",
    name: "Xã Nam Hưng",
  },
  {
    code: "QT",
    name: "Xã Quốc Tuấn",
  },
];


export const fakeDataDsHenKham: danhSachHenKham[] = [
  {
    id: "1",
    mpt: "MPT001",
    vienPhi: "VP001",
    thoiGianHenKham: "11:00",
    isUuTien: true,
    trangThai: 1,
    lienHe: "",
    soDatHen: 1,
    maBN: "OCT_0000000001",
    hoTen: "Nguyễn Thị Hoài Thương",
    ngaySinh: "11/11/1999",
    gioiTinh: "Không xác định",
    sdt: "0938574857",
    cccd: "",
    doiTuong: "Bảo hiểm",
    soTheKCB: "123145",
    ngayHenKham: "15/01/2024",
    dichVuKham: "Khám tổng quát",
    phongKham: "Phòng 101",
    tuoi: 24,
  },
  {
    id: "1",
    mpt: "MPT001",
    vienPhi: "VP001",
    thoiGianHenKham: "11:00",
    isUuTien: true,
    trangThai: 1,
    lienHe: "",
    soDatHen: 1,
    maBN: "OCT_0000000001",
    hoTen: "Nguyễn Thị Hoài Thương",
    ngaySinh: "11/11/1999",
    gioiTinh: "Không xác định",
    sdt: "0938574857",
    cccd: "",
    doiTuong: "Bảo hiểm",
    soTheKCB: "123145",
    ngayHenKham: "15/01/2024",
    dichVuKham: "Khám tổng quát",
    phongKham: "Phòng 101",
    tuoi: 24,
  },
  {
    id: "1",
    mpt: "MPT001",
    vienPhi: "VP001",
    thoiGianHenKham: "11:00",
    isUuTien: true,
    trangThai: 1,
    lienHe: "",
    soDatHen: 1,
    maBN: "OCT_0000000001",
    hoTen: "Nguyễn Thị Hoài Thương",
    ngaySinh: "11/11/1999",
    gioiTinh: "Không xác định",
    sdt: "0938574857",
    cccd: "",
    doiTuong: "Bảo hiểm",
    soTheKCB: "123145",
    ngayHenKham: "15/01/2024",
    dichVuKham: "Khám tổng quát",
    phongKham: "Phòng 101",
    tuoi: 24,
  },
  {
    id: "1",
    mpt: "MPT001",
    vienPhi: "VP001",
    thoiGianHenKham: "11:00",
    isUuTien: true,
    trangThai: 1,
    lienHe: "",
    soDatHen: 1,
    maBN: "OCT_0000000001",
    hoTen: "Nguyễn Thị Hoài Thương",
    ngaySinh: "11/11/1999",
    gioiTinh: "Không xác định",
    sdt: "0938574857",
    cccd: "",
    doiTuong: "Bảo hiểm",
    soTheKCB: "123145",
    ngayHenKham: "15/01/2024",
    dichVuKham: "Khám tổng quát",
    phongKham: "Phòng 101",
    tuoi: 24,
  },
  {
    id: "1",
    mpt: "MPT001",
    vienPhi: "VP001",
    thoiGianHenKham: "11:00",
    isUuTien: true,
    trangThai: 1,
    lienHe: "",
    soDatHen: 1,
    maBN: "OCT_0000000001",
    hoTen: "Nguyễn Thị Hoài Thương",
    ngaySinh: "11/11/1999",
    gioiTinh: "Không xác định",
    sdt: "0938574857",
    cccd: "",
    doiTuong: "Bảo hiểm",
    soTheKCB: "123145",
    ngayHenKham: "15/01/2024",
    dichVuKham: "Khám tổng quát",
    phongKham: "Phòng 101",
    tuoi: 24,
  },
  {
    id: "1",
    mpt: "MPT001",
    vienPhi: "VP001",
    thoiGianHenKham: "11:00",
    isUuTien: true,
    trangThai: 1,
    lienHe: "",
    soDatHen: 1,
    maBN: "OCT_0000000001",
    hoTen: "Nguyễn Thị Hoài Thương",
    ngaySinh: "11/11/1999",
    gioiTinh: "Không xác định",
    sdt: "0938574857",
    cccd: "",
    doiTuong: "Bảo hiểm",
    soTheKCB: "123145",
    ngayHenKham: "15/01/2024",
    dichVuKham: "Khám tổng quát",
    phongKham: "Phòng 101",
    tuoi: 24,
  },
  {
    id: "1",
    mpt: "MPT001",
    vienPhi: "VP001",
    thoiGianHenKham: "11:00",
    isUuTien: true,
    trangThai: 1,
    lienHe: "",
    soDatHen: 1,
    maBN: "OCT_0000000001",
    hoTen: "Nguyễn Thị Hoài Thương",
    ngaySinh: "11/11/1999",
    gioiTinh: "Không xác định",
    sdt: "0938574857",
    cccd: "",
    doiTuong: "Bảo hiểm",
    soTheKCB: "123145",
    ngayHenKham: "15/01/2024",
    dichVuKham: "Khám tổng quát",
    phongKham: "Phòng 101",
    tuoi: 24,
  },
  {
    id: "2",
    mpt: "MPT002",
    vienPhi: "VP002",
    thoiGianHenKham: "09:00",
    isUuTien: false,
    trangThai: 2,
    lienHe: "",
    soDatHen: 2,
    maBN: "BNHK2",
    hoTen: "Nguyễn Văn Công",
    ngaySinh: "01/01/1980",
    gioiTinh: "Nam",
    sdt: "0987768965",
    cccd: "002400069874",
    doiTuong: "Không",
    soTheKCB: "123146",
    ngayHenKham: "14/01/2024",
    dichVuKham: "Khám nhi",
    phongKham: "Phòng 102",
    tuoi: 44,
  },
  {
    id: "3",
    mpt: "MPT003",
    vienPhi: "VP003",
    thoiGianHenKham: "10:00",
    isUuTien: true,
    trangThai: 1,
    lienHe: "",
    soDatHen: 3,
    maBN: "BNHK3",
    hoTen: "Nguyễn Thị Nụ",
    ngaySinh: "05/05/1985",
    gioiTinh: "Nữ",
    sdt: "0987768965",
    cccd: "002400069874",
    doiTuong: "Ưu tiên",
    soTheKCB: "123147",
    ngayHenKham: "13/01/2024",
    dichVuKham: "Khám phụ khoa",
    phongKham: "Phòng 103",
    tuoi: 39,
  },
  {
    id: "4",
    mpt: "MPT004",
    vienPhi: "VP004",
    thoiGianHenKham: "11:30",
    isUuTien: false,
    trangThai: 2,
    lienHe: "",
    soDatHen: 4,
    maBN: "BNHK4",
    hoTen: "Nguyễn Cao Kỳ",
    ngaySinh: "20/02/1975",
    gioiTinh: "Nam",
    sdt: "0987768965",
    cccd: "002400069874",
    doiTuong: "BHYT",
    soTheKCB: "123148",
    ngayHenKham: "12/01/2024",
    dichVuKham: "Khám da liễu",
    phongKham: "Phòng 104",
    tuoi: 49,
  },
  {
    id: "5",
    mpt: "MPT005",
    vienPhi: "VP005",
    thoiGianHenKham: "08:30",
    isUuTien: false,
    trangThai: 3,
    lienHe: "",
    soDatHen: 5,
    maBN: "BNHK5",
    hoTen: "Trần Văn Cường",
    ngaySinh: "15/07/1987",
    gioiTinh: "Nam",
    sdt: "0987768965",
    cccd: "002400069874",
    doiTuong: "BHYT",
    soTheKCB: "123149",
    ngayHenKham: "11/01/2024",
    dichVuKham: "Khám tai mũi họng",
    phongKham: "Phòng 105",
    tuoi: 36,
  },
  {
    id: "6",
    mpt: "MPT006",
    vienPhi: "VP006",
    thoiGianHenKham: "14:00",
    isUuTien: false,
    trangThai: 4,
    lienHe: "",
    soDatHen: 6,
    maBN: "BNHK6",
    hoTen: "Nguyễn Thị Vân",
    ngaySinh: "10/10/1990",
    gioiTinh: "Nữ",
    sdt: "0987768965",
    cccd: "002400069874",
    doiTuong: "Không",
    soTheKCB: "123150",
    ngayHenKham: "10/01/2024",
    dichVuKham: "Khám mắt",
    phongKham: "Phòng 106",
    tuoi: 33,
  },
  {
    id: "7",
    mpt: "MPT007",
    vienPhi: "VP007",
    thoiGianHenKham: "09:30",
    isUuTien: false,
    trangThai: 3,
    lienHe: "",
    soDatHen: 7,
    maBN: "BNHK7",
    hoTen: "Nguyễn Cao Kỳ",
    ngaySinh: "25/03/1980",
    gioiTinh: "Nam",
    sdt: "0987768965",
    cccd: "002400069874",
    doiTuong: "BHYT",
    soTheKCB: "123151",
    ngayHenKham: "09/01/2024",
    dichVuKham: "Khám nội tiết",
    phongKham: "Phòng 107",
    tuoi: 44,
  },
  {
    id: "8",
    mpt: "MPT008",
    vienPhi: "VP008",
    thoiGianHenKham: "13:00",
    isUuTien: false,
    trangThai: 2,
    lienHe: "",
    soDatHen: 8,
    maBN: "BNHK8",
    hoTen: "Trần Văn Cường",
    ngaySinh: "30/09/1985",
    gioiTinh: "Nam",
    sdt: "0987768965",
    cccd: "002400069874",
    doiTuong: "BHYT",
    soTheKCB: "123152",
    ngayHenKham: "08/01/2024",
    dichVuKham: "Khám tiêu hóa",
    phongKham: "Phòng 108",
    tuoi: 38,
  },
  {
    id: "9",
    mpt: "MPT009",
    vienPhi: "VP009",
    thoiGianHenKham: "10:30",
    isUuTien: false,
    trangThai: 4,
    lienHe: "",
    soDatHen: 9,
    maBN: "BNHK9",
    hoTen: "Nguyễn Thị Vân",
    ngaySinh: "18/12/1992",
    gioiTinh: "Nữ",
    sdt: "0987768965",
    cccd: "002400069874",
    doiTuong: "Không",
    soTheKCB: "123153",
    ngayHenKham: "07/01/2024",
    dichVuKham: "Khám cơ xương khớp",
    phongKham: "Phòng 109",
    tuoi: 31,
  },
];

export const fakeDataDsChoKham: danhSachChoKham[] = [
  {
    trangThai: 1,
    lienHe: "",
    soDatHen: 1,
    maBN: "BNHK1",
    hoTen: "Nguyễn Văn Cốc",
    ngaySinh: moment().format("DD/MM/YYYY"),
    gioiTinh: "Nam",
    sdt: "0987768965",
    cccd: "002400069874",
    doiTuong: "Ưu tiên",
    phongKham: "Phòng khám đơn nguyên sơ sinh",
  },
  {
    trangThai: 1,
    lienHe: "",
    soDatHen: 2,
    maBN: "BNHK2",
    hoTen: "Nguyễn Văn Công",
    ngaySinh: moment().format("DD/MM/YYYY"),
    gioiTinh: "Nam",
    sdt: "0987768965",
    cccd: "002400069874",
    doiTuong: "Không",
    phongKham: "Phòng khám đơn nguyên sơ sinh",
  },
  {
    trangThai: 2,
    lienHe: "",
    soDatHen: 3,
    maBN: "BNHK3",
    hoTen: "Nguyễn Thị Nụ",
    ngaySinh: moment().format("DD/MM/YYYY"),
    gioiTinh: "Nữ",
    sdt: "0987768965",
    cccd: "002400069874",
    doiTuong: "Ưu tiên",
    phongKham: "Phòng khám đơn nguyên sơ sinh",
  },
  {
    trangThai: 4,
    lienHe: "",
    soDatHen: 4,
    maBN: "BNHK5",
    hoTen: "Nguyễn Cao Kỳ",
    ngaySinh: moment().format("DD/MM/YYYY"),
    gioiTinh: "Nam",
    sdt: "0987768965",
    cccd: "002400069874",
    doiTuong: "BHYT",
    phongKham: "Phòng khám đơn nguyên sơ sinh",
  },
  {
    trangThai: 3,
    lienHe: "",
    soDatHen: 5,
    maBN: "BNHK8",
    hoTen: "Trần Văn Cường",
    ngaySinh: moment().format("DD/MM/YYYY"),
    gioiTinh: "Nam",
    sdt: "0987768965",
    cccd: "002400069874",
    doiTuong: "BHYT",
    phongKham: "Phòng khám đơn nguyên sơ sinh",
  },
  {
    trangThai: 6,
    lienHe: "",
    soDatHen: 6,
    maBN: "BNHK4",
    hoTen: "Nguyễn Thị Vân",
    ngaySinh: moment().format("DD/MM/YYYY"),
    gioiTinh: "Nữ",
    sdt: "0987768965",
    cccd: "002400069874",
    doiTuong: "Không",
    phongKham: "Phòng khám đơn nguyên sơ sinh",
  },
  {
    trangThai: 4,
    lienHe: "",
    soDatHen: 7,
    maBN: "BNHK7",
    hoTen: "Nguyễn Cao Kỳ",
    ngaySinh: moment().format("DD/MM/YYYY"),
    gioiTinh: "Nam",
    sdt: "0987768965",
    cccd: "002400069874",
    doiTuong: "BHYT",
    phongKham: "Phòng khám đơn nguyên sơ sinh",
  },
  {
    trangThai: 3,
    lienHe: "",
    soDatHen: 8,
    maBN: "BNHK10",
    hoTen: "Trần Văn Cường",
    ngaySinh: moment().format("DD/MM/YYYY"),
    gioiTinh: "Nam",
    sdt: "0987768965",
    cccd: "002400069874",
    doiTuong: "BHYT",
    phongKham: "Phòng khám đơn nguyên sơ sinh",
  },
  {
    trangThai: 5,
    lienHe: "",
    soDatHen: 9,
    maBN: "BNHK9",
    hoTen: "Nguyễn Thị Vân",
    ngaySinh: moment().format("DD/MM/YYYY"),
    gioiTinh: "Nữ",
    sdt: "0987768965",
    cccd: "002400069874",
    doiTuong: "Không",
  },
  {
    trangThai: 6,
    lienHe: "",
    soDatHen: 10,
    maBN: "BNHK11",
    hoTen: "Nguyễn Thị Vân",
    ngaySinh: moment().format("DD/MM/YYYY"),
    gioiTinh: "Nữ",
    sdt: "0987768965",
    cccd: "002400069874",
    doiTuong: "Không",
    phongKham: "Phòng khám đơn nguyên sơ sinh",
  },
];