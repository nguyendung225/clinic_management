import moment from "moment";
import { IBenhNhan, ThuocInfo } from "../models/DSBenhNhanKhamBenhModels";
import { DungMoi, KetQuaDichVu, MauKhamBenh, TrieuChung } from "../models/ThongTinKhamBenhModel";
import { ChanDoanHinhAnh, DichVu, DonThuoc, XetNghiem } from "../constants/Columns";
import { IDanhSachMauThuocCu, IMauChiDinhThuoc, IMauThuocCu } from "../models/ThuocModels";
require("moment/locale/vi");

export const DsDichVuTree = {
  name: "Tất cả dịch vụ",
  code: "all",
  filter: [
    {
      name: "Khám bệnh",
      code: "khamBenh",
      filter: [
        { name: "Khám bệnh", code: "khamBenh" },
        { name: "Khám sức khỏe", code: "khamSucKhoe" },
      ],
    },
    {
      name: "Xét nghiệm",
      code: "xetNghiem",
      filter: [
        { name: "Đường máu mao mạch", code: "duongMau" },
        { name: "Hóa sinh", code: "hoaSinh" },
        { name: "Huyết học", code: "huyetHoc" },
        { name: "Đông máu", code: "dongMau" },
        { name: "Nước tiểu", code: "nuocTieu" },
        { name: "Giải phẫu", code: "giaiPhau" },
        { name: "Vi sinh", code: "viSinh" },
        { name: "Miễn dịch", code: "mienDich" },
        { name: "Khác", code: "khac" },
      ],
    },
    {
      name: "Chẩn đoán hình ảnh",
      code: "cdha",
      filter: [
        { name: "PTTT CĐHA" },
        { name: "Nội soi CTC" },
        { name: "Nội soi CTC" },
        { name: "Nội soi dạ dày..." },
        { name: "Nội soi đại tràng" },
        { name: "X-quang" },
        { name: "Siêu âm" },
        { name: "Điện tim" },
        { name: "Điện não" },
        { name: "Cắt lớp vi tính" },
        { name: "Loãng xương" },
        { name: "Thăm dò chức năng" },
      ],
    },
    {
      name: "Chuyên khoa",
      code: "chuyenKhoa",
      filter: [{ name: "Phẫu thuật thủ thuật" }, { name: "Phẫu thuật" }],
    },
    {
      name: "Vận chuyển",
      code: "vanChuyen",
      filter: [{ name: "Vận chuyển" }],
    },
    {
      name: "Ngày giường C.Khoa",
      code: "ngck",
      filter: [{ name: "Giường nội trú" }],
    },
    {
      name: "Dịch vụ khác",
      code: "dvKhac",
      filter: [{ name: "Dịch vụ khác" }, { name: "Chăm sóc người bệnh" }],
    },
  ],
};

export const DsMauTree = {
  name: "Tất cả mẫu chỉ định",
  code: "all",
  filter: [
    {
      name: "Tổng hợp",
      code: "tongHop",
      filter: [],
    },
  ],
};
export const DsMauChiDinhTree = {
  name: "Tất cả mẫu chỉ định",
  code: "all",
  filter: [
    {
      name: "Nhóm đơn mẫu",
      code: "nhomDonMau",
      filter: [
        {
          name: "Tổng hợp",
          code: "tonghop",
        },
      ],
    },
  ],
};

export const loaiPhieuChiDinhCuData = [
  {
    ngayYLenh: "12/11/2023",
    nguoiChiDinh: "Quản trị hệ thống",
    khoaPhong: "Khoa khám bệnh",
    chanDoan: "Đau bụng",
    loaiPhieu: "Phiếu khám bệnh",
    dichVu: [
      {
        tenDichVu: "Siêu âm",
        donVi: "DV",
        soLuong: "1",
      },
      {
        tenDichVu: "X-quang",
        donVi: "DV",
        soLuong: "1",
      },
    ],
  },
  {
    ngayYLenh: "22/11/2023",
    nguoiChiDinh: "Quản trị hệ thống",
    khoaPhong: "Khoa khám bệnh",
    chanDoan: "Đau tay",
    loaiPhieu: "Phiếu chuyên khoa",
    dichVU: [],
  },
  {
    ngayYLenh: "22/11/2023",
    nguoiChiDinh: "Quản trị hệ thống",
    khoaPhong: "Khoa khám bệnh",
    chanDoan: "Đau bụng",
    loaiPhieu: "Phiếu chuyên khoa",
    dichVU: [],
  },
];

export const TRIEU_CHUNG_BENH_DATA = [
  { id: 1, name: "Đau mắt" },
  { id: 2, name: "Ho kéo dài" },
  { id: 3, name: "Tức ngực" },
  { id: 4, name: "Ngứa" },
  { id: 5, name: "Nổi mề đay" },
  { id: 6, name: "Cảm giác khó chịu, thở dốc" },
  { id: 7, name: "Chảy nước mũi" },
  { id: 8, name: "Đau bụng" },
  { id: 9, name: "Tiêu chảy" },
  { id: 10, name: "Trên bảo dưới không nghe" },
];
export const CHON_LOAI_PHIEU_DATA = [
  { code: 1, name: "Mẫu phiếu điều trị" },
  { code: 2, name: "Phiếu điều trị cũ" },
];

export const DS_PHIEU_DIEU_TRI_CU_DATA = [
  { ngayNhap: "00:00 26/11/2023", nguoiNhap: "Quản trị hệ thống", khoa: "Khoa Khám Bệnh" },
];

export const fakeListBN: IBenhNhan[] = [
  {
    hoTen: "Thạch hạo",
    age: 25,
    barCode: "1042",
    maBenhPham: "XN2321152",
    trangThai: 2,
    gioiTinh: "Nam",
    loaiDoiTuong: 1,
    loaiTiepNhan: 1,
    maBn: "BN20023",
    cccd: "00323335967",
    uuTien: 1,
    diaChi: "29 Cát Linh, P. Giảng Võ, Q.Ba Đình, Hà Nội",
    giuong: "buồng 1, giường 1",
    bhyt: 2,
    tamUng: 1,
    doiTuong: "BHYT",
    dsDichVu: [
      {
        title: "Khám bệnh",
        date: "31/10/2023",
        detail: [{ tenDichVu: "Khám ngoại", soLuong: "1", loaiCongKham: "Khám lần 1", ghiChu: "Ghi chú" }],
        nhomDichVu: [
          {
            idNhom: "123",
            tenNhom: "Xét nghiệm Đông máu,  ngày 18/09/2023, Barcode: 1066, Số thứ tự lấy mẫu: 4, Đang chờ",
            trangThai: 1,
            dsDichVu: [
              {
                id: "chocHutKimNhoTuyenGiap",
                tenDichVu: "Chọc hút kim nhỏ tuyến giáp",
                soLuong: "1",
                ketQua: "(Chưa thực hiện)",
                loaiBenhPham: "Máu toàn phần (EDTA...)",
                doiTuong: "BHYT",
              },
            ],
          },
          {
            idNhom: "124",
            tenNhom: "Xét nghiệm giải phẫu bệnh,  ngày 18/09/2023, Barcode: 1066, Số thứ tự lấy mẫu: 4, Đang chờ",
            trangThai: 2,
            dsDichVu: [
              {
                id: "thoiGianMauChayPhuongPhapDuke",
                tenDichVu: "Thời gian máu chảy phương pháp Duke",
                soLuong: "1",
                ketQua: "(Chưa thực hiện)",
                loaiBenhPham: "Dịch chọc đồ khác",
                doiTuong: "BHYT",
              },
            ],
          },
          {
            idNhom: "124",
            tenNhom: "Xét nghiệm giải phẫu bệnh,  ngày 18/09/2023, Barcode: 1066, Số thứ tự lấy mẫu: 4, Đang chờ",
            trangThai: 4,
            dsDichVu: [
              {
                id: "thoiGianMauChayPhuongPhapDuke",
                tenDichVu: "Thời gian máu chảy phương pháp Duke",
                soLuong: "1",
                ketQua: "(Chưa thực hiện)",
                loaiBenhPham: "Dịch chọc đồ khác",
                doiTuong: "BHYT",
              },
            ],
          },
        ], 
        chuyenKhoa: [
          {
            idNhom: "123",
            tenNhom: "Cấy chỉ,  ngày 18/09/2023, Barcode: 1066, Số thứ tự: 4, Đang chờ",
            dsDichVu: [
              {
                id: "chocHutKimNhoTuyenGiap",
                tenDichVu: "Phẫu thuật nâng ngực",
                soLuong: "1",
                doiTuong: "BHYT",
              },
            ],
          },
          {
            idNhom: "124",
            tenNhom: "Giác hơi,  ngày 18/09/2023, Barcode: 1066, Số thứ tự: 4, Đang chờ",
            dsDichVu: [
              {
                id: "thoiGianMauChayPhuongPhapDuke",
                tenDichVu: "Phẫu thuật nâng mông",
                soLuong: "1",
                doiTuong: "BHYT",
              },
            ],
          },
        ]
      },
      {
        title: "Khám bệnh",
        date: "20/11/2023",
        detail: [{ tenDichVu: "Khám nội", soLuong: "1", loaiCongKham: "Khám lần 1", ghiChu: "Ghi chú" }],
        nhomDichVu: [
          {
            idNhom: "123",
            tenNhom: "Xét nghiệm Đông máu,  ngày 18/09/2023, Barcode: 1066, Số thứ tự lấy mẫu: 4, Đang chờ",
            trangThai: 1,
            dsDichVu: [
              {
                id: "chocHutKimNhoTuyenGiap",
                tenDichVu: "Chọc hút kim nhỏ tuyến giáp",
                soLuong: "1",
                ketQua: "(Chưa thực hiện)",
                loaiBenhPham: "Máu toàn phần (EDTA...)",
                doiTuong: "BHYT",
              },
            ],
          },
          {
            idNhom: "123",
            tenNhom: "Xét nghiệm Đông máu,  ngày 18/09/2023, Barcode: 1066, Số thứ tự lấy mẫu: 4, Đang chờ",
            trangThai: 1,
            dsDichVu: [
              {
                id: "chocHutKimNhoTuyenGiap",
                tenDichVu: "Chọc hút kim nhỏ tuyến giáp",
                soLuong: "1",
                ketQua: "(Chưa thực hiện)",
                loaiBenhPham: "Máu toàn phần (EDTA...)",
                doiTuong: "BHYT",
              },
            ],
          },
        ],
        chuyenKhoa: [
          {
            idNhom: "123",
            tenNhom: "Cấy chỉ,  ngày 18/09/2023, Barcode: 1066, Số thứ tự: 4, Đang chờ",
            dsDichVu: [
              {
                id: "chocHutKimNhoTuyenGiap",
                tenDichVu: "Phẫu thuật nâng ngực",
                soLuong: "1",
                doiTuong: "BHYT",
              },
            ],
          },
          {
            idNhom: "124",
            tenNhom: "Giác hơi,  ngày 18/09/2023, Barcode: 1066, Số thứ tự: 4, Đang chờ",
            dsDichVu: [
              {
                id: "thoiGianMauChayPhuongPhapDuke",
                tenDichVu: "Phẫu thuật nâng mông",
                soLuong: "1",
                doiTuong: "BHYT",
              },
            ],
          },
        ]
      },
      {
        title: "Khám bệnh",
        date: "20/11/2023",
        detail: [{ tenDichVu: "Khám nội", soLuong: "1", loaiCongKham: "Khám lần 1", ghiChu: "Ghi chú" }],
        nhomDichVu: [
          {
            idNhom: "123",
            tenNhom: "Xét nghiệm Đông máu,  ngày 18/09/2023, Barcode: 1066, Số thứ tự lấy mẫu: 4, Đang chờ",
            trangThai: 1,
            dsDichVu: [
              {
                id: "chocHutKimNhoTuyenGiap",
                tenDichVu: "Chọc hút kim nhỏ tuyến giáp",
                soLuong: "1",
                ketQua: "(Chưa thực hiện)",
                loaiBenhPham: "Máu toàn phần (EDTA...)",
                doiTuong: "BHYT",
              },
            ],
          },
          {
            idNhom: "123",
            tenNhom: "Xét nghiệm Đông máu,  ngày 18/09/2023, Barcode: 1066, Số thứ tự lấy mẫu: 4, Đang chờ",
            trangThai: 1,
            dsDichVu: [
              {
                id: "chocHutKimNhoTuyenGiap",
                tenDichVu: "Chọc hút kim nhỏ tuyến giáp",
                soLuong: "1",
                ketQua: "(Chưa thực hiện)",
                loaiBenhPham: "Máu toàn phần (EDTA...)",
                doiTuong: "BHYT",
              },
            ],
          },
        ],
        chuyenKhoa: [
          {
            idNhom: "123",
            tenNhom: "Cấy chỉ,  ngày 18/09/2023, Barcode: 1066, Số thứ tự: 4, Đang chờ",
            dsDichVu: [
              {
                id: "chocHutKimNhoTuyenGiap",
                tenDichVu: "Phẫu thuật nâng ngực",
                soLuong: "1",
                doiTuong: "BHYT",
              },
            ],
          },
          {
            idNhom: "124",
            tenNhom: "Giác hơi,  ngày 18/09/2023, Barcode: 1066, Số thứ tự: 4, Đang chờ",
            dsDichVu: [
              {
                id: "thoiGianMauChayPhuongPhapDuke",
                tenDichVu: "Phẫu thuật nâng mông",
                soLuong: "1",
                doiTuong: "BHYT",
              },
            ],
          },
        ]
      },
      {
        title: "Khám bệnh",
        date: "20/11/2023",
        detail: [{ tenDichVu: "Khám nội", soLuong: "1", loaiCongKham: "Khám lần 1", ghiChu: "Ghi chú" }],
        nhomDichVu: [
          {
            idNhom: "123",
            tenNhom: "Xét nghiệm Đông máu,  ngày 18/09/2023, Barcode: 1066, Số thứ tự lấy mẫu: 4, Đang chờ",
            trangThai: 1,
            dsDichVu: [
              {
                id: "chocHutKimNhoTuyenGiap",
                tenDichVu: "Chọc hút kim nhỏ tuyến giáp",
                soLuong: "1",
                ketQua: "(Chưa thực hiện)",
                loaiBenhPham: "Máu toàn phần (EDTA...)",
                doiTuong: "BHYT",
              },
            ],
          },
          {
            idNhom: "123",
            tenNhom: "Xét nghiệm Đông máu,  ngày 18/09/2023, Barcode: 1066, Số thứ tự lấy mẫu: 4, Đang chờ",
            trangThai: 1,
            dsDichVu: [
              {
                id: "chocHutKimNhoTuyenGiap",
                tenDichVu: "Chọc hút kim nhỏ tuyến giáp",
                soLuong: "1",
                ketQua: "(Chưa thực hiện)",
                loaiBenhPham: "Máu toàn phần (EDTA...)",
                doiTuong: "BHYT",
              },
            ],
          },
        ]
      },
      {
        title: "Khám bệnh",
        date: "20/11/2023",
        detail: [{ tenDichVu: "Khám nội", soLuong: "1", loaiCongKham: "Khám lần 1", ghiChu: "Ghi chú" }],
        nhomDichVu: [
          {
            idNhom: "123",
            tenNhom: "Xét nghiệm Đông máu,  ngày 18/09/2023, Barcode: 1066, Số thứ tự lấy mẫu: 4, Đang chờ",
            trangThai: 1,
            dsDichVu: [
              {
                id: "chocHutKimNhoTuyenGiap",
                tenDichVu: "Chọc hút kim nhỏ tuyến giáp",
                soLuong: "1",
                ketQua: "(Chưa thực hiện)",
                loaiBenhPham: "Máu toàn phần (EDTA...)",
                doiTuong: "BHYT",
              },
            ],
          },
          {
            idNhom: "123",
            tenNhom: "Xét nghiệm Đông máu,  ngày 18/09/2023, Barcode: 1066, Số thứ tự lấy mẫu: 4, Đang chờ",
            trangThai: 1,
            dsDichVu: [
              {
                id: "chocHutKimNhoTuyenGiap",
                tenDichVu: "Chọc hút kim nhỏ tuyến giáp",
                soLuong: "1",
                ketQua: "(Chưa thực hiện)",
                loaiBenhPham: "Máu toàn phần (EDTA...)",
                doiTuong: "BHYT",
              },
            ],
          },
        ]
      },
      {
        title: "Khám bệnh",
        date: "20/11/2023",
        detail: [{ tenDichVu: "Khám nội", soLuong: "1", loaiCongKham: "Khám lần 1", ghiChu: "Ghi chú" }],
        nhomDichVu: [
          {
            idNhom: "123",
            tenNhom: "Xét nghiệm Đông máu,  ngày 18/09/2023, Barcode: 1066, Số thứ tự lấy mẫu: 4, Đang chờ",
            trangThai: 1,
            dsDichVu: [
              {
                id: "chocHutKimNhoTuyenGiap",
                tenDichVu: "Chọc hút kim nhỏ tuyến giáp",
                soLuong: "1",
                ketQua: "(Chưa thực hiện)",
                loaiBenhPham: "Máu toàn phần (EDTA...)",
                doiTuong: "BHYT",
              },
            ],
          },
          {
            idNhom: "123",
            tenNhom: "Xét nghiệm Đông máu,  ngày 18/09/2023, Barcode: 1066, Số thứ tự lấy mẫu: 4, Đang chờ",
            trangThai: 1,
            dsDichVu: [
              {
                id: "chocHutKimNhoTuyenGiap",
                tenDichVu: "Chọc hút kim nhỏ tuyến giáp",
                soLuong: "1",
                ketQua: "(Chưa thực hiện)",
                loaiBenhPham: "Máu toàn phần (EDTA...)",
                doiTuong: "BHYT",
              },
            ],
          },
        ]
      },
      {
        title: "Khám bệnh",
        date: "20/11/2023",
        detail: [{ tenDichVu: "Khám nội", soLuong: "1", loaiCongKham: "Khám lần 1", ghiChu: "Ghi chú" }],
        nhomDichVu: [
          {
            idNhom: "123",
            tenNhom: "Xét nghiệm Đông máu,  ngày 18/09/2023, Barcode: 1066, Số thứ tự lấy mẫu: 4, Đang chờ",
            trangThai: 1,
            dsDichVu: [
              {
                id: "chocHutKimNhoTuyenGiap",
                tenDichVu: "Chọc hút kim nhỏ tuyến giáp",
                soLuong: "1",
                ketQua: "(Chưa thực hiện)",
                loaiBenhPham: "Máu toàn phần (EDTA...)",
                doiTuong: "BHYT",
              },
            ],
          },
          {
            idNhom: "123",
            tenNhom: "Xét nghiệm Đông máu,  ngày 18/09/2023, Barcode: 1066, Số thứ tự lấy mẫu: 4, Đang chờ",
            trangThai: 1,
            dsDichVu: [
              {
                id: "chocHutKimNhoTuyenGiap",
                tenDichVu: "Chọc hút kim nhỏ tuyến giáp",
                soLuong: "1",
                ketQua: "(Chưa thực hiện)",
                loaiBenhPham: "Máu toàn phần (EDTA...)",
                doiTuong: "BHYT",
              },
            ],
          },
        ]
      },
      {
        title: "Khám bệnh",
        date: "20/11/2023",
        detail: [{ tenDichVu: "Khám nội", soLuong: "1", loaiCongKham: "Khám lần 1", ghiChu: "Ghi chú" }],
        nhomDichVu: [
          {
            idNhom: "123",
            tenNhom: "Xét nghiệm Đông máu,  ngày 18/09/2023, Barcode: 1066, Số thứ tự lấy mẫu: 4, Đang chờ",
            trangThai: 1,
            dsDichVu: [
              {
                id: "chocHutKimNhoTuyenGiap",
                tenDichVu: "Chọc hút kim nhỏ tuyến giáp",
                soLuong: "1",
                ketQua: "(Chưa thực hiện)",
                loaiBenhPham: "Máu toàn phần (EDTA...)",
                doiTuong: "BHYT",
              },
            ],
          },
          {
            idNhom: "123",
            tenNhom: "Xét nghiệm Đông máu,  ngày 18/09/2023, Barcode: 1066, Số thứ tự lấy mẫu: 4, Đang chờ",
            trangThai: 1,
            dsDichVu: [
              {
                id: "chocHutKimNhoTuyenGiap",
                tenDichVu: "Chọc hút kim nhỏ tuyến giáp",
                soLuong: "1",
                ketQua: "(Chưa thực hiện)",
                loaiBenhPham: "Máu toàn phần (EDTA...)",
                doiTuong: "BHYT",
              },
            ],
          },
        ]
      },
      {
        title: "Khám bệnh",
        date: "20/11/2023",
        detail: [{ tenDichVu: "Khám nội", soLuong: "1", loaiCongKham: "Khám lần 1", ghiChu: "Ghi chú" }],
        nhomDichVu: [
          {
            idNhom: "123",
            tenNhom: "Xét nghiệm Đông máu,  ngày 18/09/2023, Barcode: 1066, Số thứ tự lấy mẫu: 4, Đang chờ",
            trangThai: 1,
            dsDichVu: [
              {
                id: "chocHutKimNhoTuyenGiap",
                tenDichVu: "Chọc hút kim nhỏ tuyến giáp",
                soLuong: "1",
                ketQua: "(Chưa thực hiện)",
                loaiBenhPham: "Máu toàn phần (EDTA...)",
                doiTuong: "BHYT",
              },
            ],
          },
          {
            idNhom: "123",
            tenNhom: "Xét nghiệm Đông máu,  ngày 18/09/2023, Barcode: 1066, Số thứ tự lấy mẫu: 4, Đang chờ",
            trangThai: 1,
            dsDichVu: [
              {
                id: "chocHutKimNhoTuyenGiap",
                tenDichVu: "Chọc hút kim nhỏ tuyến giáp",
                soLuong: "1",
                ketQua: "(Chưa thực hiện)",
                loaiBenhPham: "Máu toàn phần (EDTA...)",
                doiTuong: "BHYT",
              },
            ],
          },
        ]
      },
      {
        title: "Khám bệnh",
        date: "20/11/2023",
        detail: [{ tenDichVu: "Khám nội", soLuong: "1", loaiCongKham: "Khám lần 1", ghiChu: "Ghi chú" }],
        nhomDichVu: [
          {
            idNhom: "123",
            tenNhom: "Xét nghiệm Đông máu,  ngày 18/09/2023, Barcode: 1066, Số thứ tự lấy mẫu: 4, Đang chờ",
            trangThai: 1,
            dsDichVu: [
              {
                id: "chocHutKimNhoTuyenGiap",
                tenDichVu: "Chọc hút kim nhỏ tuyến giáp",
                soLuong: "1",
                ketQua: "(Chưa thực hiện)",
                loaiBenhPham: "Máu toàn phần (EDTA...)",
                doiTuong: "BHYT",
              },
            ],
          },
          {
            idNhom: "123",
            tenNhom: "Xét nghiệm Đông máu,  ngày 18/09/2023, Barcode: 1066, Số thứ tự lấy mẫu: 4, Đang chờ",
            trangThai: 1,
            dsDichVu: [
              {
                id: "chocHutKimNhoTuyenGiap",
                tenDichVu: "Chọc hút kim nhỏ tuyến giáp",
                soLuong: "1",
                ketQua: "(Chưa thực hiện)",
                loaiBenhPham: "Máu toàn phần (EDTA...)",
                doiTuong: "BHYT",
              },
            ],
          },
        ]
      },
      {
        title: "Khám bệnh",
        date: "20/11/2023",
        detail: [{ tenDichVu: "Khám nội", soLuong: "1", loaiCongKham: "Khám lần 1", ghiChu: "Ghi chú" }],
        nhomDichVu: [
          {
            idNhom: "123",
            tenNhom: "Xét nghiệm Đông máu,  ngày 18/09/2023, Barcode: 1066, Số thứ tự lấy mẫu: 4, Đang chờ",
            trangThai: 1,
            dsDichVu: [
              {
                id: "chocHutKimNhoTuyenGiap",
                tenDichVu: "Chọc hút kim nhỏ tuyến giáp",
                soLuong: "1",
                ketQua: "(Chưa thực hiện)",
                loaiBenhPham: "Máu toàn phần (EDTA...)",
                doiTuong: "BHYT",
              },
            ],
          },
          {
            idNhom: "123",
            tenNhom: "Xét nghiệm Đông máu,  ngày 18/09/2023, Barcode: 1066, Số thứ tự lấy mẫu: 4, Đang chờ",
            trangThai: 1,
            dsDichVu: [
              {
                id: "chocHutKimNhoTuyenGiap",
                tenDichVu: "Chọc hút kim nhỏ tuyến giáp",
                soLuong: "1",
                ketQua: "(Chưa thực hiện)",
                loaiBenhPham: "Máu toàn phần (EDTA...)",
                doiTuong: "BHYT",
              },
            ],
          },
        ]
      },
      {
        title: "Khám bệnh",
        date: "20/11/2023",
        detail: [{ tenDichVu: "Khám nội", soLuong: "1", loaiCongKham: "Khám lần 1", ghiChu: "Ghi chú" }],
        nhomDichVu: [
          {
            idNhom: "123",
            tenNhom: "Xét nghiệm Đông máu,  ngày 18/09/2023, Barcode: 1066, Số thứ tự lấy mẫu: 4, Đang chờ",
            trangThai: 1,
            dsDichVu: [
              {
                id: "chocHutKimNhoTuyenGiap",
                tenDichVu: "Chọc hút kim nhỏ tuyến giáp",
                soLuong: "1",
                ketQua: "(Chưa thực hiện)",
                loaiBenhPham: "Máu toàn phần (EDTA...)",
                doiTuong: "BHYT",
              },
            ],
          },
          {
            idNhom: "123",
            tenNhom: "Xét nghiệm Đông máu,  ngày 18/09/2023, Barcode: 1066, Số thứ tự lấy mẫu: 4, Đang chờ",
            trangThai: 1,
            dsDichVu: [
              {
                id: "chocHutKimNhoTuyenGiap",
                tenDichVu: "Chọc hút kim nhỏ tuyến giáp",
                soLuong: "1",
                ketQua: "(Chưa thực hiện)",
                loaiBenhPham: "Máu toàn phần (EDTA...)",
                doiTuong: "BHYT",
              },
            ],
          },
        ]
      },
      {
        title: "Khám bệnh",
        date: "20/11/2023",
        detail: [{ tenDichVu: "Khám nội", soLuong: "1", loaiCongKham: "Khám lần 1", ghiChu: "Ghi chú" }],
        nhomDichVu: [
          {
            idNhom: "123",
            tenNhom: "Xét nghiệm Đông máu,  ngày 18/09/2023, Barcode: 1066, Số thứ tự lấy mẫu: 4, Đang chờ",
            trangThai: 1,
            dsDichVu: [
              {
                id: "chocHutKimNhoTuyenGiap",
                tenDichVu: "Chọc hút kim nhỏ tuyến giáp",
                soLuong: "1",
                ketQua: "(Chưa thực hiện)",
                loaiBenhPham: "Máu toàn phần (EDTA...)",
                doiTuong: "BHYT",
              },
            ],
          },
          {
            idNhom: "123",
            tenNhom: "Xét nghiệm Đông máu,  ngày 18/09/2023, Barcode: 1066, Số thứ tự lấy mẫu: 4, Đang chờ",
            trangThai: 1,
            dsDichVu: [
              {
                id: "chocHutKimNhoTuyenGiap",
                tenDichVu: "Chọc hút kim nhỏ tuyến giáp",
                soLuong: "1",
                ketQua: "(Chưa thực hiện)",
                loaiBenhPham: "Máu toàn phần (EDTA...)",
                doiTuong: "BHYT",
              },
            ],
          },
        ]
      },
      {
        title: "Khám bệnh",
        date: "20/11/2023",
        detail: [{ tenDichVu: "Khám nội", soLuong: "1", loaiCongKham: "Khám lần 1", ghiChu: "Ghi chú" }],
        nhomDichVu: [
          {
            idNhom: "123",
            tenNhom: "Xét nghiệm Đông máu,  ngày 18/09/2023, Barcode: 1066, Số thứ tự lấy mẫu: 4, Đang chờ",
            trangThai: 1,
            dsDichVu: [
              {
                id: "chocHutKimNhoTuyenGiap",
                tenDichVu: "Chọc hút kim nhỏ tuyến giáp",
                soLuong: "1",
                ketQua: "(Chưa thực hiện)",
                loaiBenhPham: "Máu toàn phần (EDTA...)",
                doiTuong: "BHYT",
              },
            ],
          },
          {
            idNhom: "123",
            tenNhom: "Xét nghiệm Đông máu,  ngày 18/09/2023, Barcode: 1066, Số thứ tự lấy mẫu: 4, Đang chờ",
            trangThai: 1,
            dsDichVu: [
              {
                id: "chocHutKimNhoTuyenGiap",
                tenDichVu: "Chọc hút kim nhỏ tuyến giáp",
                soLuong: "1",
                ketQua: "(Chưa thực hiện)",
                loaiBenhPham: "Máu toàn phần (EDTA...)",
                doiTuong: "BHYT",
              },
            ],
          },
        ]
      },
      {
        title: "Khám bệnh",
        date: "20/11/2023",
        detail: [{ tenDichVu: "Khám nội", soLuong: "1", loaiCongKham: "Khám lần 1", ghiChu: "Ghi chú" }],
        nhomDichVu: [
          {
            idNhom: "123",
            tenNhom: "Xét nghiệm Đông máu,  ngày 18/09/2023, Barcode: 1066, Số thứ tự lấy mẫu: 4, Đang chờ",
            trangThai: 1,
            dsDichVu: [
              {
                id: "chocHutKimNhoTuyenGiap",
                tenDichVu: "Chọc hút kim nhỏ tuyến giáp",
                soLuong: "1",
                ketQua: "(Chưa thực hiện)",
                loaiBenhPham: "Máu toàn phần (EDTA...)",
                doiTuong: "BHYT",
              },
            ],
          },
          {
            idNhom: "123",
            tenNhom: "Xét nghiệm Đông máu,  ngày 18/09/2023, Barcode: 1066, Số thứ tự lấy mẫu: 4, Đang chờ",
            trangThai: 1,
            dsDichVu: [
              {
                id: "chocHutKimNhoTuyenGiap",
                tenDichVu: "Chọc hút kim nhỏ tuyến giáp",
                soLuong: "1",
                ketQua: "(Chưa thực hiện)",
                loaiBenhPham: "Máu toàn phần (EDTA...)",
                doiTuong: "BHYT",
              },
            ],
          },
        ]
      },
      {
        title: "Khám bệnh",
        date: "20/11/2023",
        detail: [{ tenDichVu: "Khám nội", soLuong: "1", loaiCongKham: "Khám lần 1", ghiChu: "Ghi chú" }],
        nhomDichVu: [
          {
            idNhom: "123",
            tenNhom: "Xét nghiệm Đông máu,  ngày 18/09/2023, Barcode: 1066, Số thứ tự lấy mẫu: 4, Đang chờ",
            trangThai: 1,
            dsDichVu: [
              {
                id: "chocHutKimNhoTuyenGiap",
                tenDichVu: "Chọc hút kim nhỏ tuyến giáp",
                soLuong: "1",
                ketQua: "(Chưa thực hiện)",
                loaiBenhPham: "Máu toàn phần (EDTA...)",
                doiTuong: "BHYT",
              },
            ],
          },
          {
            idNhom: "123",
            tenNhom: "Xét nghiệm Đông máu,  ngày 18/09/2023, Barcode: 1066, Số thứ tự lấy mẫu: 4, Đang chờ",
            trangThai: 1,
            dsDichVu: [
              {
                id: "chocHutKimNhoTuyenGiap",
                tenDichVu: "Chọc hút kim nhỏ tuyến giáp",
                soLuong: "1",
                ketQua: "(Chưa thực hiện)",
                loaiBenhPham: "Máu toàn phần (EDTA...)",
                doiTuong: "BHYT",
              },
            ],
          },
        ]
      },
      {
        title: "Khám bệnh",
        date: "20/11/2023",
        detail: [{ tenDichVu: "Khám nội", soLuong: "1", loaiCongKham: "Khám lần 1", ghiChu: "Ghi chú" }],
        nhomDichVu: [
          {
            idNhom: "123",
            tenNhom: "Xét nghiệm Đông máu,  ngày 18/09/2023, Barcode: 1066, Số thứ tự lấy mẫu: 4, Đang chờ",
            trangThai: 1,
            dsDichVu: [
              {
                id: "chocHutKimNhoTuyenGiap",
                tenDichVu: "Chọc hút kim nhỏ tuyến giáp",
                soLuong: "1",
                ketQua: "(Chưa thực hiện)",
                loaiBenhPham: "Máu toàn phần (EDTA...)",
                doiTuong: "BHYT",
              },
            ],
          },
          {
            idNhom: "123",
            tenNhom: "Xét nghiệm Đông máu,  ngày 18/09/2023, Barcode: 1066, Số thứ tự lấy mẫu: 4, Đang chờ",
            trangThai: 1,
            dsDichVu: [
              {
                id: "chocHutKimNhoTuyenGiap",
                tenDichVu: "Chọc hút kim nhỏ tuyến giáp",
                soLuong: "1",
                ketQua: "(Chưa thực hiện)",
                loaiBenhPham: "Máu toàn phần (EDTA...)",
                doiTuong: "BHYT",
              },
            ],
          },
        ]
      },
    ],
    thuoc: [
      {
        maPhieu: "KB001",
        date: moment().locale("vi").format("DD/MM/YYYY - dddd"),
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
        date: moment().locale("vi").format("DD/MM/YYYY - dddd"),
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

    vatTu: [
      {
        date: "31/10/2023",
        detail: [{ tenVatTu: "Vật tư 1", soLuong: "1", maVatTu: "VT1", donVi: "Gói"}],
      },
      {
        date: "31/10/2023",
        detail: [{ tenVatTu: "Vật tư 2", soLuong: "1", maVatTu: "VT2", donVi: "Gói"}],
      },
    ],

    mau: [
      {
        date: "31/10/2023",
        detail: [{ tenMau: "Huyết tương đông lạnh 250ml", slChiDinh: "1", maMau: "VT1", donVi: "Gói", slPhat: "0"}],
      },
      {
        date: "31/10/2023",
        detail: [{ tenMau: "Huyết tương đông lạnh 250ml", slChiDinh: "1", maMau: "VT2", donVi: "Gói", slPhat: "0"}],
      },
    ],

    thongTinXetNghiem: {
      chanDoan: "Z-40 - Phẫu thuật dự phòng",
      thongTinChiDinh: "Quản Trị Hệ Thống chỉ định lúc 17:31 30/10/2023 (YL: 17:31 30/10/2023) tại Phòng khám sức khỏe",
      maPhieuThucHien: "MP00065",
      thongTinThucHien: "Quản Trị Hệ Thống trả kết quả lúc 17:33 30/10/2023 tại Xét nghiệm nước tiểu",
      datThucHien: false,
    },

    xetNghiem: [
      {
        trangThaiXetNghiem: 1,
        batDau: moment().subtract(1, "h"),
        khoa: "Khoa nhi",
        phòng: "101",
        ketThuc: moment(),
        xuTri: "Nhập viện",
        dich: "Khoa Nhi",
      },
      {
        trangThaiXetNghiem: 2,
        batDau: moment().subtract(1, "h"),
        khoa: "Khoa khám bệnh",
        phòng: "P117 - Khoa mắt",
        ketThuc: moment(),
        xuTri: "Điều trị ngoại trú",
        dich: "Khoa Nhi",
      },
    ],
    layMauBenhPham: {
      daLayMau: true,
      ngayChiDinh: moment().format("HH:mm - DD/MM/YYYY"),
      batDauLayMau: moment().format("HH:mm - DD/MM/YYYY"),
      nguoiChiDinh: "Bs Chung",
      noiChiDinh: "Phòng khám hô hấp",
      noiLayMau: "P.405 OCT",
      nguoiLayMau: "Trung",
    },
  },
  {
    hoTen: "Nguyễn Đức Cường",
    age: 25,
    barCode: "1043",
    maBenhPham: "XN2321952",
    trangThai: 1,
    gioiTinh: "Nam",
    loaiDoiTuong: 2,
    loaiTiepNhan: 2,
    maBn: "BN20024",
    cccd: "00323335967",
    uuTien: 2,
    diaChi: "29 Cát Linh, P. Giảng Võ, Q.Ba Đình, Hà Nội",
    giuong: "buồng 2, giường 1",
    bhyt: 0,
    tamUng: 2,
    doiTuong: "Yêu cầu",
    dsDichVu: [
      {
        title: "Khám bệnh",
        date: "20/11/2023",
        detail: [{ tenDichVu: "Khám nội", soLuong: "1", loaiCongKham: "Khám lần 1", ghiChu: "Ghi chú" }],
        nhomDichVu: [
          {
            idNhom: "123",
            tenNhom: "Xét nghiệm Đông máu,  ngày 18/09/2023, Barcode: 1066, Số thứ tự lấy mẫu: 4, Đang chờ",
            trangThai: 1,
            dsDichVu: [
              {
                id: "chocHutKimNhoTuyenGiap",
                tenDichVu: "Chọc hút kim nhỏ tuyến giáp",
                soLuong: "1",
                ketQua: "(Chưa thực hiện)",
                loaiBenhPham: "Máu toàn phần (EDTA...)",
                doiTuong: "BHYT",
              },
            ],
          },
          {
            idNhom: "123",
            tenNhom: "Xét nghiệm Đông máu,  ngày 18/09/2023, Barcode: 1066, Số thứ tự lấy mẫu: 4, Đang chờ",
            trangThai: 1,
            dsDichVu: [
              {
                id: "chocHutKimNhoTuyenGiap",
                tenDichVu: "Chọc hút kim nhỏ tuyến giáp",
                soLuong: "1",
                ketQua: "(Chưa thực hiện)",
                loaiBenhPham: "Máu toàn phần (EDTA...)",
                doiTuong: "BHYT",
              },
            ],
          },
        ]
      },
      {
        title: "Khám bệnh",
        date: "20/11/2023",
        detail: [{ tenDichVu: "Khám nội", soLuong: "1", loaiCongKham: "Khám lần 1", ghiChu: "Ghi chú" }],
        nhomDichVu: [
          {
            idNhom: "123",
            tenNhom: "Xét nghiệm Đông máu,  ngày 18/09/2023, Barcode: 1066, Số thứ tự lấy mẫu: 4, Đang chờ",
            trangThai: 1,
            dsDichVu: [
              {
                id: "chocHutKimNhoTuyenGiap",
                tenDichVu: "Chọc hút kim nhỏ tuyến giáp",
                soLuong: "1",
                ketQua: "(Chưa thực hiện)",
                loaiBenhPham: "Máu toàn phần (EDTA...)",
                doiTuong: "BHYT",
              },
            ],
          },
          {
            idNhom: "123",
            tenNhom: "Xét nghiệm Đông máu,  ngày 18/09/2023, Barcode: 1066, Số thứ tự lấy mẫu: 4, Đang chờ",
            trangThai: 1,
            dsDichVu: [
              {
                id: "chocHutKimNhoTuyenGiap",
                tenDichVu: "Chọc hút kim nhỏ tuyến giáp",
                soLuong: "1",
                ketQua: "(Chưa thực hiện)",
                loaiBenhPham: "Máu toàn phần (EDTA...)",
                doiTuong: "BHYT",
              },
            ],
          },
        ]
      },
    ],
    xetNghiem: [],
    mau: [
      {
        date: "31/10/2023",
        detail: [{ tenMau: "Huyết tương đông lạnh 250ml", slChiDinh: "1", maMau: "VT1", donVi: "Gói", slPhat: "0"}],
      },
      {
        date: "31/10/2023",
        detail: [{ tenMau: "Huyết tương đông lạnh 250ml", slChiDinh: "1", maMau: "VT2", donVi: "Gói", slPhat: "0"}],
      },
    ],
    layMauBenhPham: {
      ngayChiDinh: moment().format("HH:mm - DD/MM/YYYY"),
      batDauLayMau: moment().format("HH:mm - DD/MM/YYYY"),
      nguoiChiDinh: "Bs Chung",
      noiChiDinh: "Phòng khám P12",
      noiLayMau: "P.405 OCT",
      nguoiLayMau: "Trung",
      daLayMau: true,
    },
    thongTinXetNghiem: {
      chanDoan: "Z-45 - Phẫu thuật dự phòng",
      thongTinChiDinh: "Quản Trị Hệ Thống chỉ định lúc 17:31 30/10/2023 (YL: 17:31 30/10/2023) tại Phòng khám sức khỏe",
      maPhieuThucHien: "MP00065",
      thongTinThucHien: "Quản Trị Hệ Thống trả kết quả lúc 17:33 30/10/2023 tại Xét nghiệm nước tiểu",
      dangThucHien: true,
    },
  },
  {
    hoTen: "Phan Mạnh Quỳnh",
    age: 25,
    barCode: "1032",
    maBenhPham: "XN2321152",
    trangThai: 2,
    gioiTinh: "Nam",
    loaiDoiTuong: 1,
    loaiTiepNhan: 1,
    maBn: "BN20025",
    cccd: "00323338967",
    uuTien: 1,
    diaChi: "29 Cát Linh, P. Giảng Võ, Q.Ba Đình, Hà Nội",
    doiTuong: "Viện phí",
    dsDichVu: [],
    layMauBenhPham: {
      daLayMau: true,
      ngayChiDinh: moment().format("HH:mm - DD/MM/YYYY"),
      batDauLayMau: moment().format("HH:mm - DD/MM/YYYY"),
      nguoiChiDinh: "Bs Chung",
      noiChiDinh: "Phòng khám P16",
      noiLayMau: "P.405 OCT",
      nguoiLayMau: "Trung",
    },
    thongTinXetNghiem: {
      chanDoan: "Z-45 - Phẫu thuật dự phòng",
      thongTinChiDinh: "Quản Trị Hệ Thống chỉ định lúc 17:31 30/10/2023 (YL: 17:31 30/10/2023) tại Phòng khám sức khỏe",
      maPhieuThucHien: "MP00065",
      thongTinThucHien: "Quản Trị Hệ Thống trả kết quả lúc 17:33 30/10/2023 tại Xét nghiệm nước tiểu",
    },
  },
  {
    hoTen: "Phùng Thanh Độ",
    age: 25,
    barCode: "1342",
    maBenhPham: "XN2361152",
    trangThai: 2,
    gioiTinh: "Nam",
    loaiDoiTuong: 2,
    loaiTiepNhan: 2,
    maBn: "BN20026",
    cccd: "00323335967",
    uuTien: 1,
    diaChi: "29 Cát Linh, P. Giảng Võ, Q.Ba Đình, Hà Nội",
    doiTuong: "Yêu cầu",
    dsDichVu: [],
    layMauBenhPham: {
      daLayMau: true,
      ngayChiDinh: moment().format("HH:mm - DD/MM/YYYY"),
      batDauLayMau: moment().format("HH:mm - DD/MM/YYYY"),
      nguoiChiDinh: "Bs Chung",
      noiChiDinh: "Phòng khám P92",
      noiLayMau: "P.405 OCT",
      nguoiLayMau: "Trung",
    },
    thongTinXetNghiem: {
      chanDoan: "Z-40 - Phẫu thuật dự phòng",
      thongTinChiDinh: "Quản Trị Hệ Thống chỉ định lúc 17:31 30/10/2023 (YL: 17:31 30/10/2023) tại Phòng khám sức khỏe",
      maPhieuThucHien: "MP00065",
      thongTinThucHien: "Quản Trị Hệ Thống trả kết quả lúc 17:33 30/10/2023 tại Xét nghiệm nước tiểu",
    },
  },
  {
    hoTen: "Nguyễn Du",
    age: 25,
    barCode: "2042",
    maBenhPham: "XN2324152",
    trangThai: 1,
    gioiTinh: "Nam",
    loaiDoiTuong: 2,
    loaiTiepNhan: 1,
    maBn: "BN20027",
    cccd: "00323335967",
    uuTien: 2,
    diaChi: "29 Cát Linh, P. Giảng Võ, Q.Ba Đình, Hà Nội",
    doiTuong: "Yêu cầu",
    dsDichVu: [],
    layMauBenhPham: {
      daLayMau: true,
      ngayChiDinh: moment().format("HH:mm - DD/MM/YYYY"),
      batDauLayMau: moment().format("HH:mm - DD/MM/YYYY"),
      nguoiChiDinh: "Bs Chung",
      noiChiDinh: "Phòng khám hô hấp",
      noiLayMau: "P.405 OCT",
      nguoiLayMau: "Trung",
    },
    thongTinXetNghiem: {
      chanDoan: "Z-40 - Phẫu thuật dự phòng",
      thongTinChiDinh: "Quản Trị Hệ Thống chỉ định lúc 17:31 30/10/2023 (YL: 17:31 30/10/2023) tại Phòng khám sức khỏe",
      maPhieuThucHien: "MP00065",
      thongTinThucHien: "Quản Trị Hệ Thống trả kết quả lúc 17:33 30/10/2023 tại Xét nghiệm nước tiểu",
      dangThucHien: true,
    },
  },
  {
    hoTen: "Nguyễn Ánh Viên",
    age: 25,
    barCode: "5042",
    maBenhPham: "XN2321152",
    trangThai: 1,
    gioiTinh: "Nữ",
    loaiDoiTuong: 1,
    loaiTiepNhan: 2,
    maBn: "BN20028",
    cccd: "00323335967",
    uuTien: 2,
    diaChi: "29 Cát Linh, P. Giảng Võ, Q.Ba Đình, Hà Nội",
    doiTuong: "BHYT",
    dsDichVu: [],
    layMauBenhPham: {
      daLayMau: true,
      ngayChiDinh: moment().format("HH:mm - DD/MM/YYYY"),
      batDauLayMau: moment().format("HH:mm - DD/MM/YYYY"),
      nguoiChiDinh: "Bs Chung",
      noiChiDinh: "Phòng khám P38",
      noiLayMau: "P.405 OCT",
      nguoiLayMau: "Trung",
    },
    thongTinXetNghiem: {
      chanDoan: "Z-40 - Phẫu thuật dự phòng",
      thongTinChiDinh: "Quản Trị Hệ Thống chỉ định lúc 17:31 30/10/2023 (YL: 17:31 30/10/2023) tại Phòng khám sức khỏe",
      maPhieuThucHien: "MP00065",
      thongTinThucHien: "Quản Trị Hệ Thống trả kết quả lúc 17:33 30/10/2023 tại Xét nghiệm nước tiểu",
      dangThucHien: true,
    },
  },
  {
    hoTen: "Trịnh Ánh Hồng",
    age: 25,
    barCode: "5042",
    maBenhPham: "XN2321152",
    trangThai: 1,
    gioiTinh: "Nữ",
    loaiDoiTuong: 1,
    loaiTiepNhan: 2,
    maBn: "BN20028",
    cccd: "00323335967",
    uuTien: 2,
    diaChi: "29 Cát Linh, P. Giảng Võ, Q.Ba Đình, Hà Nội",
    doiTuong: "Viện phí",
    dsDichVu: [],
    layMauBenhPham: {
      daLayMau: false,
      ngayChiDinh: moment().format("HH:mm - DD/MM/YYYY"),
      batDauLayMau: moment().format("HH:mm - DD/MM/YYYY"),
      nguoiChiDinh: "Bs Chung",
      noiChiDinh: "Phòng khám P38",
      noiLayMau: "P.405 OCT",
      nguoiLayMau: "Trung",
    },
    thongTinXetNghiem: {
      chanDoan: "Z-40 - Phẫu thuật dự phòng",
      thongTinChiDinh: "Quản Trị Hệ Thống chỉ định lúc 17:31 30/10/2023 (YL: 17:31 30/10/2023) tại Phòng khám sức khỏe",
      maPhieuThucHien: "MP00065",
      thongTinThucHien: "Quản Trị Hệ Thống trả kết quả lúc 17:33 30/10/2023 tại Xét nghiệm nước tiểu",
      dangThucHien: false,
    },
  },
];

export const chidinhDVData = [
  {
    maDichVu: "LAB01",
    pd: "P001",
    tenDichVu: "Complete Blood Count",
    soLuong: "1",
    giaBHYT: "0",
    giaVienPhi: "500000",
    giaDV: "500000",
    donGia: "500000",
    thanhTien: "500000",
    doiTuong: "Insurance Holder",
    phongThucHien: "Laboratory A",
  },
  {
    maDichVu: "XR002",
    pd: "P002",
    tenDichVu: "Chest X-ray",
    soLuong: "1",
    giaBHYT: "500000",
    giaVienPhi: "500000",
    giaDV: "500000",
    donGia: "500000",
    thanhTien: "500000",
    doiTuong: "Dependent",
    phongThucHien: "Radiology Department",
  },
  {
    maDichVu: "US003",
    pd: "P003",
    tenDichVu: "Abdominal Ultrasound",
    soLuong: "1",
    giaBHYT: "500000",
    giaVienPhi: "500000",
    giaDV: "500000",
    donGia: "500000",
    thanhTien: "500000",
    doiTuong: "Self-pay",
    phongThucHien: "Imaging Suite",
  },
  {
    maDichVu: "DENT4",
    pd: "P004",
    tenDichVu: "Dental Cleaning",
    soLuong: "1",
    giaBHYT: "500000",
    giaVienPhi: "500000",
    giaDV: "500000",
    donGia: "500000",
    thanhTien: "500000",
    doiTuong: "Insurance Holder",
    phongThucHien: "Dental Clinic",
  },
  {
    maDichVu: "ECG05",
    pd: "P005",
    tenDichVu: "Electrocardiogram (ECG)",
    soLuong: "1",
    giaBHYT: "500000",
    giaVienPhi: "500000",
    giaDV: "500000",
    donGia: "500000",
    thanhTien: "500000",
    doiTuong: "Insurance Holder",
    phongThucHien: "Cardiology Department",
  },
];

export const DataKetQuaDichVuFake: KetQuaDichVu[] = [
  {
    id: "noiSoiHong",
    tenDichVu: "Nội soi họng",
    ketQua: null,
    khoaChiDinh: "Khoa khám bệnh",
    ngayYLenh: moment().subtract(1, "d").format("hh:mm DD/MM/YYYY"),
    ngayTraKetQua: null,
  },
  {
    id: "xQuangNguc",
    tenDichVu: "X-quang ngực",
    ketQua: "Gãy xương sườn",
    khoaChiDinh: "Khoa khám bệnh",
    ngayYLenh: moment().subtract(1, "d").format("hh:mm DD/MM/YYYY"),
    ngayTraKetQua: moment().format("hh:mm DD/MM/YYYY"),
  },
  {
    id: "noiSoiOBung",
    tenDichVu: "Nội soi ổ bụng",
    ketQua: null,
    khoaChiDinh: "Khoa khám bệnh",
    ngayYLenh: moment().subtract(3, "d").format("hh:mm DD/MM/YYYY"),
    ngayTraKetQua: null,
  },
  {
    id: "xQuangChan",
    tenDichVu: "X-quang chân",
    ketQua: "Gãy xương chân",
    khoaChiDinh: "Khoa khám bệnh",
    ngayYLenh: moment().subtract(4, "d").format("hh:mm DD/MM/YYYY"),
    ngayTraKetQua: moment().format("hh:mm DD/MM/YYYY"),
  },
];

export const DataDanhSachMauKhamBenh: MauKhamBenh[] = [
  {
    id: 1,
    lyDoKham: "Khám định kỳ sau phẫu thuật",
    tenMau: "Phẫu thuật thẩm mỹ",
    quaTrinhBenhLy: "Đau bất thường vùng ngực và cổ",
    trieuChung: "Tức ngực",
    tienSuBanThan: "Bình thường",
    tienSuGiaDinh: "Bình thường",
    khamBoPhan: "X-Quang ngực, cổ",
    khamToanThan: "Khám tổng hợp nội ngoại",
    huongXuLy: "Nhập viện",
  },
  {
    id: 2,
    tenMau: "Ho kéo dài",
    lyDoKham: "Ho kéo dài",
    quaTrinhBenhLy: "Ho kéo dài",
    trieuChung: "Có đờm, đau họng",
    tienSuBanThan: "Từng bị Covid",
    tienSuGiaDinh: "Bình thường",
    khamBoPhan: "Họng",
    khamToanThan: "Không",
    huongXuLy: "Kê thuốc",
  },
  {
    id: 3,
    tenMau: "Đau dạ dày",
    lyDoKham: "Đau dạ dày",
    quaTrinhBenhLy: "Đau quằn quại vùng bụng",
    trieuChung: "Đau quằn quại vùng bụng",
    tienSuBanThan: "Bình thường",
    tienSuGiaDinh: "Bình thường",
    khamBoPhan: "Nội soi dạ dày",
    khamToanThan: "Không",
    huongXuLy: "Nhập viện",
  },
];

export const DataTrieuChung: TrieuChung[] = [
  {
    id: 1,
    trieuChung: "Tức ngực",
  },
  {
    id: 2,
    trieuChung: "Có đờm, đau họng",
  },
  {
    id: 3,
    trieuChung: "Đau quằn quại vùng bụng",
  },
  {
    id: 4,
    trieuChung: "Ngứa nổi mề đay",
  },
  {
    id: 5,
    trieuChung: "Tiêu chảy",
  },
  {
    id: 6,
    trieuChung: "Khó chịu, thở dốc",
  },
];

export const OptionBenhKemTheo = [
  { code: "Z40.9", name: "Phẫu thuật dự phòng, không đặc hiệu" },
  { code: "Z41.8", name: "Các phẫu thuật, thủ thuật khác vì các mục đích khác không phải phục hồi sức khỏe" },
];
export const DataDungMoi: DungMoi[] = [
  {
    id: 1,
    maDungMoi: "SWI",
    tenDungMoi: "Sterile Water for Infusion",
  },
  {
    id: 2,
    maDungMoi: "D5W",
    tenDungMoi: "Glucose 5% or Dextrose 5%",
  },
  {
    id: 3,
    maDungMoi: "NS",
    tenDungMoi: "Natridorua Sodium 0.9%",
  },
  {
    id: 4,
    maDungMoi: "PI",
    tenDungMoi: "Product Insert",
  },
];
export const DataDichVu: DichVu[] = [
  {
    maDichVu: "KD",
    tenDichVu: "Khám lâm sàng chung",
    soLuong: "1",
  },
  {
    maDichVu: "xquang",
    tenDichVu: "X-quang",
    soLuong: "1",
  },
];

export const DataXetNghiemThongTinKhamBenh: XetNghiem[] = [
  {
    ngayXetNghiem: moment().format("DD/MM/YYYY"),
    tenXetNghiem: "Định tính dưỡng chấp ",
    ketQua: "Bình thường",
    donVi: "",
    chiSoBinhThuong: "",
    ghiChu: ""
  },
  {
    ngayXetNghiem: moment().format("DD/MM/YYYY"),
    tenXetNghiem: "Giun chỉ (sero Filariasis) IgG ",
    ketQua: "Bình thường",
    donVi: "",
    chiSoBinhThuong: "",
    ghiChu: ""
  },
  {
    ngayXetNghiem: moment().format("DD/MM/YYYY"),
    tenXetNghiem: "Thời gian thromboplastin một phần hoạt hóa (APTT)",
    items: [
      {
        ngayXetNghiem: moment().subtract(1, "d").format("DD/MM/YYYY"),
        tenXetNghiem: "APTT(S)",
        ketQua: "",
        donVi: "S",
        chiSoBinhThuong: "25-36",
        ghiChu: ""
      },
      {
        ngayXetNghiem: moment().subtract(1, "d").format("DD/MM/YYYY"),
        tenXetNghiem: "APTT(R)",
        ketQua: "",
        donVi: "R",
        chiSoBinhThuong: "0.9-1.3",
        ghiChu: ""
      }
    ],
  },
];

export const DataChanDoanHinhAnhThongTinKhamBenh: ChanDoanHinhAnh[] = [
  {
    tenDichVu: "Chụp x-quang cột sống cổ C1-C2",
    ketLuan: "(Đang chờ)",
    soLuong: "1",
    ghiChu: ""
  },
  {
    tenDichVu: "Soi cổ tử cung",
    ketLuan: "(Đang chờ)",
    soLuong: "1",
    ghiChu: ""
  },
];

export const DataDonThuocThongTinKhamBenh: DonThuoc[] = [
  {
    tenThuoc: "Bropa",
    maThuoc: "BROPA",
    donVi: "Viên",
    ngayDung: "1",
    lanDung: "0",
    luongDung: "0",
    duongDung: "Uống",
    soLuong: "5",
    huongDanSuDungThuoc: "Uống sau ăn"
  },
];
export const DataDanhSachThuoc: ThuocInfo[] = [
  {
    id: 1,
    slSang: "1",
    slTrua: "1",
    slChieu: "1",
    slToi: "1",
    soNgay: "30",
    soLuong: 120,
    donGia: 1000,
    thanhTien: 120000,
    duongDung: "Uống",
    loaiThuoc: "kháng sinh",
    cachDung: "",
    ghiChu: "",
    tenThuoc: "Pracetamol",
    huongDanSuDungThuoc: "",
  },
];

export const dataDSMauChiDinhThuoc = [
  {
    idNhom: "tongHop",
    tenNhom: "Tổng hợp",
    dsMau: [
      {
        id: "01",
        maChiDinh: "01",
        tenChiDinh: "01",
        nhomDichVu: "Thuốc",
        loaiDichVu: "Tổng hợp",
        maRiengCuaBacSi: "Nghiêm Anh Khoa",
      },
    ],
  },
];

export const DataDanhSachMauChiDinhThuoc: IMauChiDinhThuoc[] = [
  {
    maThuoc: "T224016",
    tenThuoc: "Bạch thược",
    hoatChat: "Bạch thược",
    donVi: "Gam",
    giaBhyt: 152,
    giaDichVu: 152,
    giaVienPhi: 152,
    duongDung: "Uống",
    huongDanSuDungThuoc: "Uống trước khi ăn",
    ngayDung: "",
    nongDo: "",
    quyCach: "1Gam/lít",
    soLuong: "2"
  },
];

export const DataDanhSachMauThuocCu: IDanhSachMauThuocCu[] = [
  {
    ngayYLenh: moment().format("DD/MM/YYYY"),
    nguoiKe: "Lệ Phi Vũ",
    phongKham: "Phòng chụp Xquang (P111)",
    chanDoan: "Người đi xe đạp bị thương",
    danhSachThuoc: [
      {
        tenThuoc: "Paracetamol",
        donVi: "Gói",
        soLuong: 6,
        ngayDung: "0",
        duongDung: "Uống",
        doiTuongDichVu: "Dịch vụ",
        tonKho: 9999,
        kho: "",
        giaBhyt: 2403,
        giaVienPhi: 2403,
        giaDichVu: 2403,
        huongDanSuDungThuoc: ""
      }
    ]
  },
  {
    ngayYLenh: moment().format("DD/MM/YYYY"),
    nguoiKe: "Hàn Lập",
    phongKham: "Phòng chụp Xquang (P111)",
    chanDoan: "Người đi xe đạp bị thương",
    danhSachThuoc: [
      {
        tenThuoc: "Acemuc kids",
        donVi: "Gói",
        soLuong: 6,
        ngayDung: "0",
        duongDung: "Uống",
        doiTuongDichVu: "Dịch vụ",
        tonKho: 9999,
        kho: "",
        giaBhyt: 2403,
        giaVienPhi: 2403,
        giaDichVu: 2403,
        huongDanSuDungThuoc: ""
      }
    ]
  },
];

export const dataDSThuocThayThe = [
  {
    idNhom: "thuocKhac",
    tenNhom: "Thuốc khác",
    dsThuoc: [
      {
        maThuoc: "BR01",
        tenThuoc: "Berodual 10ml",
        donVi: "Lọ",
        tonKho: "1",
        kho: "",
        giaBhyt: "132323",
        giaVienPhi: "132323",
        giaDichVu: "132323",
        hoatChat: "",
        hamLuong: "10ml",
        nongDo: "",
        hangSanXuat: "Boehringer Ingelheim"
      },
    ],
  },
  {
    idNhom: "thuocVien",
    tenNhom: "Thuốc viên",
    dsThuoc: [
      {
        maThuoc: "HH001933",
        tenThuoc: "Atusin 50mg 10mg+1mg+133mg+50ml",
        donVi: "Vỉ",
        tonKho: "20000",
        kho: "",
        giaBhyt: "4400",
        giaVienPhi: "4400",
        giaDichVu: "4400",
        hoatChat: "",
        hamLuong: "10mg+1mg",
        nongDo: "",
        hangSanXuat: "Công ty TNHH United"
      },
    ],
  },
];

export const dataDvXetNghiem = [
  {
    idNhom: "123",
    tenNhom: "Xét nghiệm Đông máu,  ngày 18/09/2023, Barcode: 1066, Số thứ tự lấy mẫu: 4, Đang chờ",
    dsDichVu: [
      {
        id: "chocHutKimNhoTuyenGiap",
        tenDichVu: "Chọc hút kim nhỏ tuyến giáp",
        soLuong: "1",
        ketQua: "(Chưa thực hiện)",
        loaiBenhPham: "Máu toàn phần (EDTA...)",
        doiTuong: "BHYT",
      },
    ],
  },
  {
    idNhom: "124",
    tenNhom: "Xét nghiệm giải phẫu bệnh,  ngày 18/09/2023, Barcode: 1066, Số thứ tự lấy mẫu: 4, Đang chờ",
    dsDichVu: [
      {
        id: "thoiGianMauChayPhuongPhapDuke",
        tenDichVu: "Thời gian máu chảy phương pháp Duke",
        soLuong: "1",
        ketQua: "(Chưa thực hiện)",
        loaiBenhPham: "Dịch chọc đồ khác",
        doiTuong: "BHYT",
      },
    ],
  },
];

export const dataDvChuyenKhoa = [
  {
    idNhom: "123",
    tenNhom: "Cấy chỉ,  ngày 18/09/2023, Barcode: 1066, Số thứ tự: 4, Đang chờ",
    dsDichVu: [
      {
        id: "chocHutKimNhoTuyenGiap",
        tenDichVu: "Phẫu thuật nâng ngực",
        soLuong: "1",
        doiTuong: "BHYT",
      },
    ],
  },
  {
    idNhom: "124",
    tenNhom: "Giác hơi,  ngày 18/09/2023, Barcode: 1066, Số thứ tự: 4, Đang chờ",
    dsDichVu: [
      {
        id: "thoiGianMauChayPhuongPhapDuke",
        tenDichVu: "Phẫu thuật nâng mông",
        soLuong: "1",
        doiTuong: "BHYT",
      },
    ],
  },
];

export const dataThuoc = [
  {
    maPhieu: "KB001",
    date: moment().locale("vi").format("DD/MM/YYYY - dddd"),
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
    date: moment().locale("vi").format("DD/MM/YYYY - dddd"),
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
]

export const dataVatTu = [
  {
    date: "31/10/2023",
    detail: [{ tenVatTu: "Vật tư 1", soLuong: "1", maVatTu: "VT1", donVi: "Gói" }],
  },
  {
    date: "31/10/2023",
    detail: [{ tenVatTu: "Vật tư 2", soLuong: "1", maVatTu: "VT2", donVi: "Gói" }],
  },
]

export const dataMau = [
  {
    date: "31/10/2023",
    detail: [{ tenMau: "Huyết tương đông lạnh 250ml", slChiDinh: "1", maMau: "VT1", donVi: "Gói", slPhat: "0" }],
  },
  {
    date: "31/10/2023",
    detail: [{ tenMau: "Huyết tương đông lạnh 250ml", slChiDinh: "1", maMau: "VT2", donVi: "Gói", slPhat: "0" }],
  },
]