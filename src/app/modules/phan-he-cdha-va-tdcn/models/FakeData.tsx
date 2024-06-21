import moment from "moment";
import { IBenhNhanV3CDHA, IDanhSachDVCdhaTdcn, IEkip } from "./ModelsPhanHeCDHAVaTDCN"
import { templateMauKetQuaCDHA } from "../components/prints/TemplateMauKQCDHA";

export const dataDSDVCdhaTdcn: IDanhSachDVCdhaTdcn[] = [
    {
        trangThai: 1,
        tenDichVu: "Chụp Xquang hàm chếch một bên",
        soLuong: "1",
        ketLuan: "",
        traKetQua: <>
            <div className="d-flex flex-column">
                <span className="text-nowrap spaces line-height-20">Quản trị hệ thống <br />15:16 08/11/2023</span>
            </div>
        </>,
        mayThucHien: "X-Quang",
    },
    {
        trangThai: 1,
        tenDichVu: "Siêu âm Schuller",
        soLuong: "1",
        ketLuan: "",
        traKetQua: "",
        mayThucHien: "Siêu âm",
    },
    {
        trangThai: 1,
        tenDichVu: "Siêu âm Schuller",
        soLuong: "1",
        ketLuan: "",
        traKetQua: "",
        mayThucHien: "Siêu âm",
    },
    {
        trangThai: 1,
        tenDichVu: "Siêu âm Schuller",
        soLuong: "1",
        ketLuan: "",
        traKetQua: "",
        mayThucHien: "Siêu âm",
    },
    {
        trangThai: 1,
        tenDichVu: "Siêu âm Schuller",
        soLuong: "1",
        ketLuan: "",
        traKetQua: "",
        mayThucHien: "Siêu âm",
    },
];

export const fakeListMauDSKetQuaThucHien = [
    {
        tenMau: "Mẫu chấn thương chỉnh hình",
        noiDungMau: templateMauKetQuaCDHA
    },
    {
        tenMau: "Mẫu khám răng",
        noiDungMau: "Khám răng"
    },
    {
        tenMau: "Mẫu nội soi",
        noiDungMau: "Nội soi"
    }
]

export const fakeListBNCdha: IBenhNhanV3CDHA[] = [
    {
        hoTen: "Nguyễn Trần Trung Quân",
        age: 25,
        barCode: "1042",
        maBenhPham: "XN2321152",
        trangThai: 4,
        gioiTinh: "Nam",
        loaiDoiTuong: 1,
        loaiTiepNhan: 1,
        maBn: "BN20023",
        cccd: "00323335967",
        uuTien: 1,
        diaChi: "29 Cát Linh, P. Giảng Võ, Q.Ba Đình, Hà Nội",
        dsDichVu: [
            {
                title: "Khám bệnh",
                date: "31/10/2023",
                detail: [{ tenDichVu: "Khám ngoại", soLuong: "1", loaiCongKham: "Khám lần 1", ghiChu: "Ghi chú" }],
            },
            {
                title: "Khám bệnh",
                date: "20/11/2023",
                detail: [{ tenDichVu: "Khám nội", soLuong: "1", loaiCongKham: "Khám lần 1", ghiChu: "Ghi chú" }],
            },
        ],
        thuoc: [
            {
              maPhieu: "KB001",
              ngayChiDinh: moment().locale("vi").format("DD/MM/YYYY - dddd"),
              benhAn: "Bệnh án ngoại trú",
              thoiGian: moment().format("HH:mm - DD/MM/YYYY"),
              detail: [
                {
                  tenThuoc: "Bromelain - Alphachymotriosin(Bropa) 50mg; 4200iu",
                  maThuoc: "BROPA",
                  donVi: "Viên",
                  ke: 5,
                  linh: 1,
                  ngayDung: "",
                  duongDung: "Uống",
                  hdsd: "",
                  soLuong: "Sáng 1, trưa 1, chiều 1, tối 1",
                },
              ],
            },
            {
              maPhieu: "KB001",
              ngayChiDinh: moment().locale("vi").format("DD/MM/YYYY - dddd"),
              benhAn: "Bệnh án ngoại trú",
              thoiGian: moment().format("HH:mm - DD/MM/YYYY"),
              detail: [
                {
                  tenThuoc: "Acemuc kids 200mg",
                  maThuoc: "ACE1",
                  donVi: "Gói",
                  ke: 6,
                  linh: "",
                  ngayDung: "Sáng 2, tối 2",
                  duongDung: "Uống",
                  hdsd: "",
                  soLuong: "",
                },
              ],
            },
          ],
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
        chanDoanHinhAnh: [
            {
                soPhieu: "HA231108.01",
                sttThucHien: "3",
                ngayYLenh: "15:15 08/11/2023",
                nguoiChiDinh: "Quản trị hệ thống",
                noiChiDinh: "Phòng khám đa khoa",
                ngayThucHien: "15:15 08/11/2023",
                nguoiThucHien: "Quản trị hệ thống",
                noiThucHien: "Phòng khám đa khoa",
                ngayTraKetQua: "15:15 08/11/2023",
                nguoiTraKetQua: "Quản trị hệ thống",
                noiTraKetQua: "Phòng khám đa khoa",
                chanDoan: "V09.9 - Người đi bộ bị thương trong tai nạn giao thông không xác định",
                dsDichVuCDHA: [
                    {
                        trangThai: 4,
                        tenDichVu: "Chụp Xquang hàm chếch một bên",
                        soLuong: "1",
                        ketLuan: "Ổn",
                        traKetQua: <>
                            <div className="d-flex flex-column">
                                <span className="text-nowrap spaces line-height-20">Quản trị hệ thống <br />15:16 08/11/2023</span>
                            </div>
                        </>,
                        mayThucHien: "X-Quang"
                    },
                ]
            }
        ],
    },
    {
        hoTen: "Nguyễn Đức Cường",
        age: 25,
        barCode: "1042",
        maBenhPham: "XN2321152",
        trangThai: 3,
        gioiTinh: "Nam",
        loaiDoiTuong: 2,
        loaiTiepNhan: 2,
        maBn: "BN20024",
        cccd: "00323335967",
        uuTien: 2,
        diaChi: "29 Cát Linh, P. Giảng Võ, Q.Ba Đình, Hà Nội",
        dsDichVu: [],
        xetNghiem: [],
        chanDoanHinhAnh: [
            {
                soPhieu: "HA231108.02",
                sttThucHien: "4",
                ngayYLenh: "15:15 08/11/2023",
                nguoiChiDinh: "Quản trị hệ thống",
                noiChiDinh: "Phòng khám đa khoa",
                ngayThucHien: "15:15 08/11/2023",
                nguoiThucHien: "Quản trị hệ thống",
                noiThucHien: "Phòng khám đa khoa",
                ngayTraKetQua: "",
                nguoiTraKetQua: "",
                noiTraKetQua: "",
                chanDoan: "V09.9 - Người đi bộ bị thương trong tai nạn giao thông không xác định",
                dsDichVuCDHA: [
                    {
                        trangThai: 3,
                        tenDichVu: "Nội soi đại tràng - lấy dị vật",
                        soLuong: "1",
                        ketLuan: "Ổn",
                        traKetQua: <>
                            <div className="d-flex flex-column">
                                <span className="text-nowrap spaces line-height-20">Quản trị hệ thống <br />15:16 08/11/2023</span>
                            </div>
                        </>,
                        mayThucHien: "Nội soi"
                    },
                ]
            }
        ],
    },
    {
        hoTen: "Phan Mạnh Quỳnh",
        age: 25,
        barCode: "1042",
        maBenhPham: "XN2321152",
        trangThai: 5,
        gioiTinh: "Nam",
        loaiDoiTuong: 1,
        loaiTiepNhan: 1,
        maBn: "BN20025",
        cccd: "00323335967",
        uuTien: 1,
        diaChi: "29 Cát Linh, P. Giảng Võ, Q.Ba Đình, Hà Nội",
        dsDichVu: [],
        xetNghiem: [],
        chanDoanHinhAnh: [
            {
                soPhieu: "HA231108.03",
                sttThucHien: "",
                ngayYLenh: "15:15 08/11/2023",
                nguoiChiDinh: "Quản trị hệ thống",
                noiChiDinh: "Điều trị ngoại tổng hợp",
                ngayThucHien: "15:15 08/11/2023",
                nguoiThucHien: "Quản trị hệ thống",
                noiThucHien: "Phòng chụp X-Quang (P110)",
                ngayTraKetQua: "",
                nguoiTraKetQua: "",
                noiTraKetQua: "",
                chanDoan: "V09.9 - Người đi bộ bị thương trong tai nạn giao thông không xác định",
                dsDichVuCDHA: [
                    {
                        trangThai: 5,
                        tenDichVu: "Nội soi đại tràng - lấy dị vật",
                        soLuong: "1",
                        ketLuan: "",
                        traKetQua: <></>,
                        mayThucHien: ""
                    },
                ]
            }
        ],
    },
    {
        hoTen: "Phùng Thanh Độ",
        age: 25,
        barCode: "1042",
        maBenhPham: "XN2321152",
        trangThai: 2,
        gioiTinh: "Nam",
        loaiDoiTuong: 2,
        loaiTiepNhan: 2,
        maBn: "BN20026",
        cccd: "00323335967",
        uuTien: 1,
        diaChi: "29 Cát Linh, P. Giảng Võ, Q.Ba Đình, Hà Nội",
        dsDichVu: [],
        xetNghiem: [],
        chanDoanHinhAnh: [
            {
                soPhieu: "HA231108.042",
                sttThucHien: "",
                ngayYLenh: "15:15 08/11/2023",
                nguoiChiDinh: "Quản trị hệ thống",
                noiChiDinh: "Điều trị ngoại tổng hợp",
                ngayThucHien: "",
                nguoiThucHien: "",
                noiThucHien: "Phòng chụp X-Quang (P110)",
                ngayTraKetQua: "",
                nguoiTraKetQua: "",
                noiTraKetQua: "",
                chanDoan: "K04.9 - Bệnh viêm nướu không xác định",
                dsDichVuCDHA: [
                    {
                        trangThai: 2,
                        tenDichVu: "Khám răng",
                        soLuong: "1",
                        ketLuan: "Ổn",
                        traKetQua: <></>,
                        mayThucHien: ""
                    },
                ]
            }
        ],
    },
    {
        hoTen: "Nguyễn Du",
        age: 25,
        barCode: "1042",
        maBenhPham: "XN2321152",
        trangThai: 1,
        gioiTinh: "Nam",
        loaiDoiTuong: 2,
        loaiTiepNhan: 1,
        maBn: "BN20027",
        cccd: "00323335967",
        uuTien: 2,
        diaChi: "29 Cát Linh, P. Giảng Võ, Q.Ba Đình, Hà Nội",
        dsDichVu: [],
        xetNghiem: [],
        chanDoanHinhAnh: [
            {
                soPhieu: "HA231108.05",
                sttThucHien: "",
                ngayYLenh: "15:15 08/11/2023",
                nguoiChiDinh: "Quản trị hệ thống",
                noiChiDinh: "Điều trị ngoại tổng hợp",
                ngayThucHien: "",
                nguoiThucHien: "",
                noiThucHien: "Phòng chụp X-Quang (P110)",
                ngayTraKetQua: "",
                nguoiTraKetQua: "",
                noiTraKetQua: "",
                chanDoan: "K04.9 - Bệnh viêm nướu không xác định",
                dsDichVuCDHA: [
                    {
                        trangThai: 1,
                        tenDichVu: "Khám răng",
                        soLuong: "1",
                        ketLuan: "",
                        traKetQua: <></>,
                        mayThucHien: ""
                    },
                ]
            }
        ],
    },
    {
        hoTen: "Nguyễn Ánh Viên",
        age: 25,
        barCode: "1042",
        maBenhPham: "XN2321152",
        trangThai: 1,
        gioiTinh: "Nữ",
        loaiDoiTuong: 1,
        loaiTiepNhan: 2,
        maBn: "BN20028",
        cccd: "00323335967",
        uuTien: 2,
        diaChi: "29 Cát Linh, P. Giảng Võ, Q.Ba Đình, Hà Nội",
        dsDichVu: [],
        xetNghiem: [],
        chanDoanHinhAnh: [
            {
                soPhieu: "HA231108.06",
                sttThucHien: "",
                ngayYLenh: "15:15 08/11/2023",
                nguoiChiDinh: "Quản trị hệ thống",
                noiChiDinh: "Điều trị ngoại tổng hợp",
                ngayThucHien: "",
                nguoiThucHien: "",
                noiThucHien: "Phòng chụp X-Quang (P110)",
                ngayTraKetQua: "",
                nguoiTraKetQua: "",
                noiTraKetQua: "",
                chanDoan: "K04.9 - Bệnh viêm nướu không xác định",
                dsDichVuCDHA: [
                    {
                        trangThai: 1,
                        tenDichVu: "Khám răng",
                        soLuong: "1",
                        ketLuan: "",
                        traKetQua: <></>,
                        mayThucHien: ""
                    },
                ]
            }
        ],
    },
]

export const fakeDataEkip: IEkip[] = [
    {
        vaiTro: "Bác sĩ phẫu thuật 1",
        nhanVien: null,
        chiTra: "",
    },
    {
        vaiTro: "Bác sĩ phẫu thuật 2",
        nhanVien: null,
        chiTra: "",
    },
    {
        vaiTro: "Phụ mổ 1",
        nhanVien: null,
        chiTra: "",
    },
    {
        vaiTro: "Phụ mổ 2",
        nhanVien: null,
        chiTra: "",
    },
    {
        vaiTro: "Phụ mổ 3",
        nhanVien: null,
        chiTra: "",
    },
    {
        vaiTro: "Phụ mổ 4",
        nhanVien: null,
        chiTra: "",
    },
    {
        vaiTro: "Phụ mổ 5",
        nhanVien: null,
        chiTra: "",
    },
    {
        vaiTro: "Bác sĩ gây mê",
        nhanVien: null,
        chiTra: "",
    },
    {
        vaiTro: "Phụ mê 1",
        nhanVien: null,
        chiTra: "",
    },
    {
        vaiTro: "Phụ mê 2",
        nhanVien: null,
        chiTra: "",
    },
    {
        vaiTro: "Giúp việc",
        nhanVien: null,
        chiTra: "",
    },
    {
        vaiTro: "Dụng cụ viên",
        nhanVien: null,
        chiTra: "",
    },
    {
        vaiTro: "Kỹ thuật viên",
        nhanVien: null,
        chiTra: "",
    },
];

export const LIST_NHAN_VIEN = [
    {
        code: "NV1",
        name: "Nhân viên 1"
    },
    {
        code: "NV2",
        name: "Nhân viên 2"
    },
    {
        code: "NV3",
        name: "Nhân viên 3"
    },
    {
        code: "NV4",
        name: "Nhân viên 4"
    },
    {
        code: "NV5",
        name: "Nhân viên 5"
    },
]