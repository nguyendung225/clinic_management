import moment from "moment";
import { DanhSachSoThu, IDsNhanVien } from "../models/SoThuModel";
import { NoiTruCapCuuInterface } from "../models/NoiTruCapCuuModel";
import { bangLichSuKham } from "../models/PhanHeTiepNhanModel";
import { IColumnTree, ITreeItem } from "../../component/tree-explorer/TreeExplorerModel";
import { convertNumberPrice } from "../../utils/FormatUtils";
import { TimKiemBenhNhanModel } from "../../component/modal-tim-kiem-benh-nhan/ModelsTimKiemBenhNhan";

export const dataFake = {
  advanceMoney: 200000,
  benhNhan: {
    id: "f6ed6d43-ffaa-4ff9-b251-570cf76c5ed1",
    createDate: "2023-09-22T16:47:40",
    createdBy: "doctor",
    modifyDate: "2023-09-25T14:37:08",
    modifiedBy: "doctor",
    personId: "bfcb2b5b-5d62-4843-949a-242dd112573f",
    mpi: "BN202392200002",
    pin: "BN202392200002",
    hoTen: "Nguyễn Văn AB",
    ngaySinh: "2023-09-13",
    gioiTinh: "MALE",
    soDinhDanh: "000000000",
    tenantId: -1234,
    soVaoVien: "202309220003",
    locationId: "2b2a1096-93d6-43fb-9b7b-33a7eacc915d",
    avatar: null,
    soDienThoai: "",
    diaChi: "",
    caseId: null,
    benhNhanBhyt: {
      id: "6f3471c8-f8b9-4fd7-afa1-247518544e8c",
      createDate: "2023-09-22T16:47:40",
      createdBy: "doctor",
      modifyDate: "2023-09-22T16:47:40",
      modifiedBy: "doctor",
      benhNhanId: null,
      soBhyt: "",
      noiDangKy: "",
      tuNgay: null,
      denNgay: null,
      mienDongct: null,
      loaiTuyen: "",
      maKv: "",
      is5nam: false,
      is6thang: false,
    },
    benhNhanCase: null,
    benhNhanMqh: {
      id: "7552bd3d-0097-44bb-b6bc-9bb81966181e",
      createDate: "2023-09-22T16:47:40",
      createdBy: "doctor",
      modifyDate: "2023-09-22T16:47:40",
      modifiedBy: "doctor",
      benhNhanId: null,
      hoTen: "",
      maQuanHe: null,
      tenQuanHe: null,
      diaChi: "",
      soDienThoai: "",
    },
    person: null,
    sinhHieu: null,
    danhSachDichVu: null,
  },
  benhNhanDichVus: [
    {
      code: "thuthuat",
      hasGroupService: true,
      name: "Thủ thuật",
      id: 1264,
      services: [
        {
          parent: {
            code: "thuthuat",
            hasGroupService: true,
            name: "Thủ thuật",
            id: 1264,
          },
          id: "dc91b163-4624-4e2f-a8d6-f483b7413cb9",
          createDate: "2023-09-22T16:47:40",
          createdBy: "doctor",
          modifyDate: "2023-09-22T16:47:40",
          modifiedBy: "doctor",
          soPhieu: "202309220003",
          conceptId: 56,
          conceptCode: "KTMH",
          conceptName: "Khám tai mũi họng",
          departmentId: "9affe48f-6eed-490d-ba09-f3d4a451991b",
          departmentName: "Khoa thần kinh",
          roomId: "bc7f0757-2085-45e0-afe9-7b06d9d1ba83",
          roomName: "Phòng khám 1",
          quantity: 1,
          statusId: 3,
          statusName: "Thanh toán/Tạm ứng",
          caseId: "f4f2d3b3-0a4f-4675-b102-91725e699d77",
          price: 23000,
          totalPrice: 21620,
          promotionPercent: 0.0006,
          promotionPrice: 1380,
          deleted: false,
          deleteDate: null,
          deletedBy: null,
          deleteReason: null,
          phieuThanhToanId: "87146917-557f-4f79-a927-b4d7a33e3430",
          hasServiceGroup: true,
          serviceCode: "08.0486.0238",
          servicePrice: 44100.0,
          insurancePrice: "37.8C00.0238",
          conceptAnswerName: "Nắn bó trật khớp bằng phương pháp YHCT",
          concept: {
            code: "yhoccotruyen",
            name: "Y học cổ truyền",
            id: 1265,
          },
        },
        {
          parent: {
            code: "thuthuat",
            hasGroupService: true,
            name: "Thủ thuật",
            id: 1264,
          },
          id: "dc91b163-4624-4e2f-a8d6-f483b7413cb8",
          createDate: "2023-09-22T16:47:40",
          createdBy: "doctor",
          modifyDate: "2023-09-22T16:47:40",
          modifiedBy: "doctor",
          soPhieu: "202309220003",
          conceptId: 56,
          conceptCode: "KTMH",
          conceptName: "Khám tai mũi họng",
          departmentId: "9affe48f-6eed-490d-ba09-f3d4a451991b",
          departmentName: "Khoa thần kinh",
          roomId: "bc7f0757-2085-45e0-afe9-7b06d9d1ba83",
          roomName: "Phòng khám 1",
          quantity: 1,
          statusId: 3,
          statusName: "Thanh toán/Tạm ứng",
          caseId: "f4f2d3b3-0a4f-4675-b102-91725e699d77",
          price: 23000,
          totalPrice: 21620,
          promotionPercent: 0.0006,
          promotionPrice: 1380,
          deleted: false,
          deleteDate: null,
          deletedBy: null,
          deleteReason: null,
          phieuThanhToanId: "87146917-557f-4f79-a927-b4d7a33e3430",
          hasServiceGroup: true,
          serviceCode: "08.0485.0235",
          servicePrice: 32800.0,
          insurancePrice: "37.8C00.0235",
          conceptAnswerName: "Giác hơi",
          concept: { code: "yhoccotruyen", name: "Y học cổ truyền", id: 1265 },
        },
        {
          parent: {
            code: "thuthuat",
            hasGroupService: true,
            name: "Thủ thuật",
            id: 1264,
          },
          id: "dc91b163-4624-4e2f-a8d6-f483b7413cb0",
          createDate: "2023-09-22T16:47:40",
          createdBy: "doctor",
          modifyDate: "2023-09-22T16:47:40",
          modifiedBy: "doctor",
          soPhieu: "202309220003",
          conceptId: 56,
          conceptCode: "KTMH",
          conceptName: "Khám tai mũi họng",
          departmentId: "9affe48f-6eed-490d-ba09-f3d4a451991b",
          departmentName: "Khoa thần kinh",
          roomId: "bc7f0757-2085-45e0-afe9-7b06d9d1ba83",
          roomName: "Phòng khám 1",
          quantity: 1,
          statusId: 3,
          statusName: "Thanh toán/Tạm ứng",
          caseId: "f4f2d3b3-0a4f-4675-b102-91725e699d77",
          price: 23000,
          totalPrice: 21620,
          promotionPercent: 0.0006,
          promotionPrice: 1380,
          deleted: false,
          deleteDate: null,
          deletedBy: null,
          deleteReason: null,
          phieuThanhToanId: "87146917-557f-4f79-a927-b4d7a33e3430",
          hasServiceGroup: true,
          serviceCode: "08.0484.0281",
          servicePrice: 27200.0,
          insurancePrice: "37.8C00.0281",
          conceptAnswerName: "Xoa bóp bấm huyệt bằng máy",
          concept: {
            code: "yhoccotruyen",
            name: "Y học cổ truyền",
            id: 1265,
          },
        },
        {
          parent: {
            code: "thuthuat",
            hasGroupService: true,
            name: "Thủ thuật",
            id: 1264,
          },
          id: "dc91b163-4624-4e2f-a8d6-f483b7413cb6",
          createDate: "2023-09-22T16:47:40",
          createdBy: "doctor",
          modifyDate: "2023-09-22T16:47:40",
          modifiedBy: "doctor",
          soPhieu: "202309220003",
          conceptId: 56,
          conceptCode: "KTMH",
          conceptName: "Khám tai mũi họng",
          departmentId: "9affe48f-6eed-490d-ba09-f3d4a451991b",
          departmentName: "Khoa thần kinh",
          roomId: "bc7f0757-2085-45e0-afe9-7b06d9d1ba83",
          roomName: "Phòng khám 1",
          quantity: 1,
          statusId: 3,
          statusName: "Thanh toán/Tạm ứng",
          caseId: "f4f2d3b3-0a4f-4675-b102-91725e699d77",
          price: 23000,
          totalPrice: 21620,
          promotionPercent: 0.0006,
          promotionPrice: 1380,
          deleted: false,
          deleteDate: null,
          deletedBy: null,
          deleteReason: null,
          phieuThanhToanId: "87146917-557f-4f79-a927-b4d7a33e3430",
          hasServiceGroup: true,
          serviceCode: "08.0483.0280",
          servicePrice: 64200.0,
          insurancePrice: "37.8C00.0280",
          conceptAnswerName: "Xoa bóp bấm huyệt bằng tay",
          concept: {
            code: "yhoccotruyen",
            name: "Y học cổ truyền",
            id: 1265,
          },
        },
        {
          parent: {
            code: "thuthuat",
            hasGroupService: true,
            name: "Thủ thuật",
            id: 1264,
          },
          id: "dc91b163-4624-4e2f-a8d6-f483b7413cb5",
          createDate: "2023-09-22T16:47:40",
          createdBy: "doctor",
          modifyDate: "2023-09-22T16:47:40",
          modifiedBy: "doctor",
          soPhieu: "202309220003",
          conceptId: 56,
          conceptCode: "KTMH",
          conceptName: "Khám tai mũi họng",
          departmentId: "9affe48f-6eed-490d-ba09-f3d4a451991b",
          departmentName: "Khoa thần kinh",
          roomId: "bc7f0757-2085-45e0-afe9-7b06d9d1ba83",
          roomName: "Phòng khám 1",
          quantity: 1,
          statusId: 3,
          statusName: "Thanh toán/Tạm ứng",
          caseId: "f4f2d3b3-0a4f-4675-b102-91725e699d77",
          price: 23000,
          totalPrice: 21620,
          promotionPercent: 0.0006,
          promotionPrice: 1380,
          deleted: false,
          deleteDate: null,
          deletedBy: null,
          deleteReason: null,
          phieuThanhToanId: "87146917-557f-4f79-a927-b4d7a33e3430",
          hasServiceGroup: true,
          serviceCode: "08.0482.0235",
          servicePrice: "32800.0",
          insurancePrice: "37.8C00.0235",
          conceptAnswerName: "Giác hơi điều trị cảm cúm",
          concept: {
            code: "yhoccotruyen",
            name: "Y học cổ truyền",
            id: 1265,
          },
        },
      ],
    },
    {
      code: "khambenh",
      hasGroupService: true,
      name: "Khám bệnh",
      id: 1265,
      services: [
        {
          parent: {
            code: "thuthuat",
            hasGroupService: true,
            name: "Thủ thuật",
            id: 1264,
          },
          id: "dc91b163-4624-4e2f-a8d6-f483b7413ch7",
          createDate: "2023-09-22T16:47:40",
          createdBy: "doctor",
          modifyDate: "2023-09-22T16:47:40",
          modifiedBy: "doctor",
          soPhieu: "202309220003",
          conceptId: 56,
          conceptCode: "KTMH",
          conceptName: "Khám tai mũi họng",
          departmentId: "9affe48f-6eed-490d-ba09-f3d4a451991b",
          departmentName: "Khoa thần kinh",
          roomId: "bc7f0757-2085-45e0-afe9-7b06d9d1ba83",
          roomName: "Phòng khám 1",
          quantity: 1,
          statusId: 3,
          statusName: "Thanh toán/Tạm ứng",
          caseId: "f4f2d3b3-0a4f-4675-b102-91725e699d77",
          price: 23000,
          totalPrice: 21620,
          promotionPercent: 0.0006,
          promotionPrice: 1380,
          deleted: false,
          deleteDate: null,
          deletedBy: null,
          deleteReason: null,
          phieuThanhToanId: "87146917-557f-4f79-a927-b4d7a33e3430",
          hasServiceGroup: true,
          serviceCode: "08.0486.0238",
          servicePrice: 44100.0,
          insurancePrice: "37.8C00.0238",
          conceptAnswerName: "Nắn bó trật khớp bằng phương pháp YHCT",
          concept: {
            code: "yhoccotruyen",
            name: "Y học cổ truyền",
            id: 1265,
          },
        },
        {
          parent: {
            code: "thuthuat",
            hasGroupService: true,
            name: "Thủ thuật",
            id: 1264,
          },
          id: "dc91b163-4624-4e2f-a8d6-f483b7417cb7",
          createDate: "2023-09-22T16:47:40",
          createdBy: "doctor",
          modifyDate: "2023-09-22T16:47:40",
          modifiedBy: "doctor",
          soPhieu: "202309220003",
          conceptId: 56,
          conceptCode: "KTMH",
          conceptName: "Khám tai mũi họng",
          departmentId: "9affe48f-6eed-490d-ba09-f3d4a451991b",
          departmentName: "Khoa thần kinh",
          roomId: "bc7f0757-2085-45e0-afe9-7b06d9d1ba83",
          roomName: "Phòng khám 1",
          quantity: 1,
          statusId: 3,
          statusName: "Thanh toán/Tạm ứng",
          caseId: "f4f2d3b3-0a4f-4675-b102-91725e699d77",
          price: 23000,
          totalPrice: 21620,
          promotionPercent: 0.0006,
          promotionPrice: 1380,
          deleted: false,
          deleteDate: null,
          deletedBy: null,
          deleteReason: null,
          phieuThanhToanId: "87146917-557f-4f79-a927-b4d7a33e3430",
          hasServiceGroup: true,
          serviceCode: "08.0485.0235",
          servicePrice: 32800.0,
          insurancePrice: "37.8C00.0235",
          conceptAnswerName: "Giác hơi",
          concept: { code: "yhoccotruyen", name: "Y học cổ truyền", id: 1265 },
        },
        {
          parent: {
            code: "thuthuat",
            hasGroupService: true,
            name: "Thủ thuật",
            id: 1264,
          },
          id: "dc91b163-4624-4e2f-a8d6-f483b7413cb7",
          createDate: "2023-09-22T16:47:40",
          createdBy: "doctor",
          modifyDate: "2023-09-22T16:47:40",
          modifiedBy: "doctor",
          soPhieu: "202309220003",
          conceptId: 56,
          conceptCode: "KTMH",
          conceptName: "Khám tai mũi họng",
          departmentId: "9affe48f-6eed-490d-ba09-f3d4a451991b",
          departmentName: "Khoa thần kinh",
          roomId: "bc7f0757-2085-45e0-afe9-7b06d9d1ba83",
          roomName: "Phòng khám 1",
          quantity: 1,
          statusId: 3,
          statusName: "Thanh toán/Tạm ứng",
          caseId: "f4f2d3b3-0a4f-4675-b102-91725e699d77",
          price: 23000,
          totalPrice: 21620,
          promotionPercent: 0.0006,
          promotionPrice: 1380,
          deleted: false,
          deleteDate: null,
          deletedBy: null,
          deleteReason: null,
          phieuThanhToanId: "87146917-557f-4f79-a927-b4d7a33e3430",
          hasServiceGroup: true,
          serviceCode: "08.0484.0281",
          servicePrice: 27200.0,
          insurancePrice: "37.8C00.0281",
          conceptAnswerName: "Xoa bóp bấm huyệt bằng máy",
          concept: {
            code: "yhoccotruyen",
            name: "Y học cổ truyền",
            id: 1265,
          },
        },
      ],
    },
  ],
  billNumber: "202309220003",
  caseId: "f4f2d3b3-0a4f-4675-b102-91725e699d77",
  cashierCode: null,
  cashierName: "doctor",
  code: "TT20239220001",
  createDate: "2023-09-22T18:12:53",
  createdBy: "doctor",
  description: "Ứng tiền 1",
  id: "87146917-557f-4f79-a927-b4d7a33e3430",
  locationId: "2b2a1096-93d6-43fb-9b7b-33a7eacc915d",
  modifiedBy: "doctor",
  modifyDate: "2023-09-22T18:12:53",
  paidMoney: 200000,
  patientId: "f6ed6d43-ffaa-4ff9-b251-570cf76c5ed1",
  promotionMoney: 0,
  promotionPercent: 0,
  statusId: 3,
  statusName: "Thanh toán/Tạm ứng",
  tenantId: -1234,
  totalMoney: 42550,
  voucherName: "Tạm ứng",
  voucherType: 2,
};

export const TreeSoThu = {
  code: "all",
  name: "Tất cả",
  filter: [
    {
      code: "1",
      name: "Loại sổ thu",
      filter: [{ code: "1.1", name: "Tổng hợp", quantity: 2 }],
    },
    {
      code: "2",
      name: "Trạng thái sổ thu",
      filter: [
        { code: "2.1", name: "Đang khóa", quantity: 1 },
        { code: "2.2", name: "Đang mở", quantity: 1 },
      ],
    },
    {
      code: "3",
      name: "Loại sổ thu",
      filter: [
        { code: "3.1", name: "Thu ngân 1", quantity: 1 },
        { code: "3.2", name: "Thu ngân 2", quantity: 2 },
      ],
    },
  ],
};

export const danhSachSoThu: DanhSachSoThu[] = [
  {
    maSoThu: "S01",
    tenSoThu: "Sổ 1",
    ngayTao: moment().format("DD/MM/YYYY"),
    nguoiTao: "admin",
    daSuDung: 20,
    soBatDau:1,
    tongSoPhieu:20,
    vat: 0,
    ghiChu: "",
  },
  {
    maSoThu: "S02",
    tenSoThu: "Sổ 2",
    ngayTao: moment().format("DD/MM/YYYY"),
    nguoiTao: "admin2",
    daSuDung: 10,
    soBatDau:1,
    tongSoPhieu:20,
    vat: 0,
    ghiChu: "",
  },
];

export const NoiTruCapCuuFakeData: NoiTruCapCuuInterface[] = [
  {
    maBN: 'BN22020001',
    tenBN: "Nguyễn Vũ Thanh Tùng",
    CCCD: '9089325345',
    SDT: '09944386456',
    diaChi: "Mễ Trì Hạ, Nam Từ Liêm, Hà Nội",
    yeuCauKham: 'Khám mắt',
    phongKham: 'Phòng khám số 2',
    ngayHen: '05/06/2023',
    trangThai: 'Chờ tiếp nhận'
  },
  {
    maBN: 'BN22020001',
    tenBN: "Nguyễn Vũ Thanh Tùng",
    CCCD: '9089325345',
    SDT: '09944386456',
    diaChi: "Mễ Trì Hạ, Nam Từ Liêm, Hà Nội",
    yeuCauKham: 'Khám mắt',
    phongKham: 'Phòng khám số 2',
    ngayHen: '05/06/2023',
    trangThai: 'Chờ tiếp nhận'
  },
  {
    maBN: 'BN22020001',
    tenBN: "Nguyễn Vũ Thanh Tùng",
    CCCD: '9089325345',
    SDT: '09944386456',
    diaChi: "Mễ Trì Hạ, Nam Từ Liêm, Hà Nội",
    yeuCauKham: 'Khám mắt',
    phongKham: 'Phòng khám số 2',
    ngayHen: '05/06/2023',
    trangThai: 'Chờ tiếp nhận'
  },
]

export const Tree = {
  name: "Tất cả bệnh nhân",
  code: "all",
  filter: [
    {
      name: "Độ tuổi",
      code: "Age",
      filter: [{ name: "Trẻ em dưới 6 tuổi", code: "nhoHonSau", quantity: 4 }],
    },
    {
      name: "Giới tính",
      code: "gioiTinh",
      filter: [
        { name: "Nam", code: "nam", quantity: 12 },
        { name: "Nữ", code: "nu", quantity: 3 },
      ],
    },
    {
      name: "Đối tượng",
      code: "doiTuong",
      filter: [{ name: "Thu phí", code: "thuPhi", quantity: 4 }],
    },
    {
      name: "Trạng thái",
      code: "trangThai",
      filter: [
        { name: "BN chờ khám", code: "choKham", quantity: 4 },
        { name: "BN đang khám", code: "dangKham", quantity: 5 },
      ],
    },
    {
        name: "Phòng khám",
        code: "phongKham",
        filter: [
          { name: "P101 - Cấp cứu", code: "p101", quantity: 2 },
          { name: "P102 - Khám nội BHYT", code: "p102", quantity: 3 },
        ],
      },
  ],
};

export const fakeDataDSDangKy = [
  {
    ngayDenKham: moment().format("hh:mm DD/MM/YYYY"),
    hinhThucVao: "Trực tiếp",
    phongKham: "Điều trị nội tim mạch",
    dichVuKham: "",
    sttKham: "0",
    trangThai: "Đang điều trị",
    ngayKham: moment().format("hh:mm DD/MM/YYYY"),
    bacSiKham: "",
    ngayRa: "",
  },
]
export const fakeDataLichSuKham: bangLichSuKham[] = [
  {
    bacSi: "Nguyễn Thị Hằng",
    ngay: moment().format("DD/MM/YYYY"),
    khoa: "1985",
    phong: " 11",
    hinhThucVao: "",
    theBHYT: "",
    ngaySinh: "",
    ngayRa: "",
    dich: "",
    thongTinKhac: "",
    prId: "",
    prVpId: "",
    mrId: "",
    xuTri: "Ăn ít mỡ",
    chuanDoan: "Tiểu đường, mỡ máu",
  },
  {
    xuTri: "Ăn ít mỡ",
    chuanDoan: "Tiểu đường, mỡ máu",
    bacSi: "Trần Văn Nam",
    ngay: moment().format("DD/MM/YYYY"),
    khoa: "1990",
    phong: "12",
    hinhThucVao: "",
    theBHYT: "",
    ngaySinh: "",
    ngayRa: "",
    dich: "",
    thongTinKhac: "",
    prId: "",
    prVpId: "",
    mrId: "",
  },
  {
    xuTri: "Ăn ít mỡ",
    chuanDoan: "Tiểu đường, mỡ máu",
    bacSi: "Lê Thị Hoa",
    ngay: moment().format("DD/MM/YYYY"),
    khoa: "1980",
    phong: "13",
    hinhThucVao: "",
    theBHYT: "",
    ngaySinh: "",
    ngayRa: "",
    dich: "",
    thongTinKhac: "",
    prId: "",
    prVpId: "",
    mrId: "",
  },
  {
    xuTri: "Ăn ít mỡ",
    chuanDoan: "Tiểu đường, mỡ máu",
    bacSi: "Phạm Văn Bình",
    ngay: moment().format("DD/MM/YYYY"),
    khoa: "1975",
    phong: "14",
    hinhThucVao: "",
    theBHYT: "",
    ngaySinh: "",
    ngayRa: "",
    dich: "",
    thongTinKhac: "",
    prId: "",
    prVpId: "",
    mrId: "",
  },
  {
    xuTri: "Ăn ít mỡ",
    chuanDoan: "Tiểu đường, mỡ máu",
    bacSi: "Nguyễn Văn An",
    ngay: moment().format("DD/MM/YYYY"),
    khoa: "1970",
    phong: "15",
    hinhThucVao: "",
    theBHYT: "",
    ngaySinh: "",
    ngayRa: "",
    dich: "",
    thongTinKhac: "",
    prId: "",
    prVpId: "",
    mrId: "",
  },
  {
    xuTri: "Ăn ít mỡ",
    chuanDoan: "Tiểu đường, mỡ máu",
    bacSi: "Lê Thị Lan",
    ngay: moment().format("DD/MM/YYYY"),
    khoa: "1988",
    phong: "16",
    hinhThucVao: "",
    theBHYT: "",
    ngaySinh: "",
    ngayRa: "",
    dich: "",
    thongTinKhac: "",
    prId: "",
    prVpId: "",
    mrId: "",
  },
  {
    xuTri: "Ăn ít mỡ",
    chuanDoan: "Tiểu đường, mỡ máu",
    bacSi: "Phan Văn Đức",
    ngay: moment().format("DD/MM/YYYY"),
    khoa: "1982",
    phong: '17',
    hinhThucVao: "",
    theBHYT: "",
    ngaySinh: "",
    ngayRa: "",
    dich: "",
    thongTinKhac: "",
    prId: "",
    prVpId: "",
    mrId: "",
  },
  {
    xuTri: "Ăn ít mỡ",
    chuanDoan: "Tiểu đường, mỡ máu",
    bacSi: "Hoàng Thị Mai",
    ngay: moment().format("DD/MM/YYYY"),
    khoa: "1984",
    phong: '18',
    hinhThucVao: "",
    theBHYT: "",
    ngaySinh: "",
    ngayRa: "",
    dich: "",
    thongTinKhac: "",
    prId: "",
    prVpId: "",
    mrId: "",
  },
  {
    xuTri: "Ăn ít mỡ",
    chuanDoan: "Tiểu đường, mỡ máu",
    bacSi: "Trần Văn Tèo",
    ngay: moment().format("DD/MM/YYYY"),
    khoa: "1992",
    phong: "19",
    hinhThucVao: "",
    theBHYT: "",
    ngaySinh: "",
    ngayRa: "",
    dich: "",
    thongTinKhac: "",
    prId: "",
    prVpId: "",
    mrId: "",
  },
  {
    xuTri: "Ăn ít mỡ",
    chuanDoan: "Tiểu đường, mỡ máu",
    bacSi: "Nguyễn Văn Tùng",
    ngay: moment().format("DD/MM/YYYY"),
    khoa: "1995",
    phong: '20',
    hinhThucVao: "",
    theBHYT: "",
    ngaySinh: "",
    ngayRa: "",
    dich: "",
    thongTinKhac: "",
    prId: "",
    prVpId: "",
    mrId: "",
  },
];


export const columnChinhSuaThoiGian: IColumnTree[] = [
  {
    title: "Nội dung",
    field: "noiDung",
    className: "min-w-200px",
  },
  {
    title: "Bắt đầu",
    field: "batDau",
    className: "min-w-75px",
  },
  {
    title: "Kết thúc",
    field: "ketThuc",
    className: "min-w-75px",
  },
  {
    title: "TG Y Lệnh",
    field: "tgYLenh",
    className: "min-w-75px",
  },
  {
    title: "Khoa",
    field: "khoa",
    className: "min-w-150px",
  },
  {
    title: "Phòng",
    field: "phong",
    className: "min-w-150px",
  },
]

export const directoryTree: ITreeItem[] = [
  {
    noiDung: 'Đón tiếp',
    batDau: '16:20 30/01/2023',
    ketThuc: '16:20 30/01/2024',
    tgYLenh: '16:20 30/01/2024',
    khoa: 'khoa 1',
    phong: 'phong 1',
    children: [
      {
        noiDung: 'Khám bệnh',
        batDau: '17:20 30/01/2023',
        ketThuc: '18:20 30/01/2023',
        tgYLenh: '17:20 30/01/2023',
        khoa: 'khoa 2',
        phong: 'phong 2',
        children: [
          {
            noiDung: 'Phiếu khám bệnh',
            batDau: '17:20 30/01/2023',
            ketThuc: '18:20 30/01/2023',
            tgYLenh: '17:20 30/01/2023',
            khoa: 'khoa 2',
            phong: 'phong 2',
            children: [
              {
                noiDung: 'Ngoại khám',
                batDau: '17:20 30/01/2023',
                ketThuc: '18:20 30/01/2023',
                tgYLenh: '17:20 30/01/2023',
                khoa: 'khoa 2',
                phong: 'phong 2',
              },
            ],
          },
        ],
      },
    ],
  },
];

export const LOAI_PHIEU =[
  {
    code: "TT",
    name: "Thu tiền"
  },
  {
    code: "HT",
    name: "Hoàn tiền"
  },
  {
    code: "TU",
    name: "Tạm ứng"
  },
  {
    code: "HU",
    name: "Hoàn ứng"
  },
  {
    code: "TT0D",
    name: "Thu tiền 0 đồng"
  },
]

export const dataDSBenhNhan = [
  {
    hoTen: "Nguyễn Trần Trung Quân",
    age: 25,
    barCode: "1042",
    maBenhPham: "XN2321152",
    trangThai: 5,
    gioiTinh: "Nam",
    loaiDoiTuong: 0,
    loaiTiepNhan: 1,
    maBn: "BN20023",
    cccd: "00323335967",
    uuTien: 1,
    diaChi: "29 Cát Linh, P. Giảng Võ, Q.Ba Đình, Hà Nội",
    dsDichVu: [
      {
        tenDichVu: 'Khám bệnh',
        items: [
          {
            tenDichVu: 'Khám Bóng',
            donVi: 'Lần',
            doiTuong: 'Dịch vụ',
            sl: '1',
            donGia: 84500,
            tt: '100%',
            thanhTien: 84500,
            bhytTra: 84500,
            bh: '100%',
            bnTra: 0,
            bncct: 0,
            bntt: 0,
            daThu: 0,
            daThuCtt: 0,
            daThuBntt: 0,
            yeuCauThu: 0,
          },
        ],
      },
      {
        tenDichVu: 'Xét nghiệm',
        items: [
          {
            tenDichVu: 'Beta HCG',
            donVi: 'Lần',
            doiTuong: 'Dịch vụ',
            sl: '1',
            donGia: 100000,
            tt: '100%',
            thanhTien: 100000,
            mienGiam: 10000,
            bhytTra: 0,
            bh: '100%',
            bnTra: 90000,
            bncct: 0,
            bntt: 0,
            daThu: 0,
            daThuCtt: 0,
            daThuBntt: 0,
            yeuCauThu: 0,
          },
        ],
      },
    ],
  },
  {
    hoTen: "Nguyễn Trần Trung Bình",
    age: 25,
    barCode: "1042",
    maBenhPham: "XN2321152",
    trangThai: 4,
    gioiTinh: "Nam",
    loaiDoiTuong: 3,
    loaiTiepNhan: 1,
    maBn: "BN20023",
    cccd: "00323335967",
    uuTien: 1,
    diaChi: "29 Cát Linh, P. Giảng Võ, Q.Ba Đình, Hà Nội",
    dsDichVu: [
      {
        tenDichVu: 'Khám bệnh',
        items: [
          {
            tenDichVu: 'Khám Bóng',
            donVi: 'Lần',
            doiTuong: 'Dịch vụ',
            sl: '1',
            donGia: 84500,
            tt: '100%',
            thanhTien: 84500,
            bh: '100%',
            bnTra: 84500,
            bncct: 0, 
            bntt: 0, 
            daThu: 0, 
            daThuCtt: 0, 
            daThuBntt: 0, 
            yeuCauThu: 0, 
          },
        ],
      },
      {
        tenDichVu: 'Xét nghiệm',
        items: [
          {
            tenDichVu: 'Beta HCG',
            donVi: 'Lần',
            doiTuong: 'Dịch vụ',
            sl: '1',
            donGia: 100000,
            tt: '100%',
            thanhTien: 100000,
            bh: '100%',
            bnTra: 100000,
            bncct: 0,
            bntt: 0,
            daThu: 0,
            daThuCtt: 0,
            daThuBntt: 0,
            yeuCauThu: 0,
          },
        ],
      },
    ],
  },
  {
    hoTen: "Nguyễn Trần Trung Quốc",
    age: 25,
    barCode: "1042",
    maBenhPham: "XN2321152",
    trangThai: 1,
    gioiTinh: "Nam",
    loaiDoiTuong: 1,
    loaiTiepNhan: 1,
    maBn: "BN20023",
    cccd: "00323335967",
    uuTien: 1,
    diaChi: "29 Cát Linh, P. Giảng Võ, Q.Ba Đình, Hà Nội",
    dsDichVu: [
      {
        tenDichVu: 'Khám bệnh',
        items: [
          {
            tenDichVu: 'Khám Bóng',
            donVi: 'Lần',
            doiTuong: 'Dịch vụ',
            sl: '1',
            donGia: 84500,
            tt: '100%',
            thanhTien: 84500,
            bh: '100%',
            bnTra: 84500,
            bncct: 0,
            bntt: 0,
            daThu: 0,
            daThuCtt: 0,
            daThuBntt: 0,
            yeuCauThu: 0,
          },
        ],
      },
      {
        tenDichVu: 'Xét nghiệm',
        items: [
          {
            tenDichVu: 'Beta HCG',
            donVi: 'Lần',
            doiTuong: 'Dịch vụ',
            sl: '1',
            donGia: 100000,
            tt: '100%',
            thanhTien: 100000,
            bh: '100%',
            bnTra: 100000,
            bncct: 0,
            bntt: 0,
            daThu: 0,
            daThuCtt: 0,
            daThuBntt: 0,
            yeuCauThu: 0,
          },
        ],
      },
    ],
  },
]

export const dataBangThanhToan: any[] = [
  {
    tenDichVu: 'Khám bệnh',
    children: [
      {
        tenDichVu: 'Khám Bóng',
        donVi: 'Lần',
        doiTuong: 'Dịch vụ',
        sl: '1',
        donGia: 84500,
        tt: '100%',
        thanhTien: 84500,
        bnTra: '100%',
        bncct: '100%',
        bntt: '100%',
        daThu: '100%',
        daThuCtt: '100%',
        daThuBntt: '100%',
        yeuCauThu: '100%',
      },
    ],
  },
];

export const LIST_DICH_VU = [
  {
    code: "KN",
    name: "Khám Nội"
  },
  {
    code: "KL",
    name: "Khám Lao"
  },
  {
    code: "KM",
    name: "Khám mắt"
  },
]

export const LIST_HINH_THUC = [
  {
    code: "TM",
    name: "Tiền mặt"
  },
  {
    code: "CK",
    name: "Chuyển khoản"
  },
]

export const LIST_PHONG_KHAM = [
  {
    code: "P408",
    name: "Khám yêu cầu, sản phụ khoa"
  },
  {
    code: "P216",
    name: "Nội cơ xương khớp"
  },
  {
    code: "P217",
    name: "Nhi"
  },
]

export const LIST_NGHE_NGHIEP = [
  {
    code: "01",
    name: "Trẻ dưới 6 tuổi đi học, dưới 15 tuổi không đi học"
  },
  {
    code: "02",
    name: "Sinh viên, học sinh"
  },
  {
    code: "03",
    name: "Hưu và trên 60 tuổi"
  },
  {
    code: "13",
    name: "Nhân dân"
  },
]

export const LIST_NOI_SONG = [
  {
    code: "01",
    name: "K1"
  },
  {
    code: "02",
    name: "K2"
  },
  {
    code: "03",
    name: "K3"
  },
]

export const LIST_TUYEN_KCB = [
  {
    code: "DT",
    name: "Đúng tuyến"
  },
  {
    code: "DTGT",
    name: "Đúng tuyến (giới thiệu)"
  },
  {
    code: "DTGH",
    name: "Đúng tuyến (giấy hẹn)"
  },
  {
    code: "DTCC",
    name: "Đúng tuyến (cấp cứu)"
  },
  {
    code: "TTH",
    name: "Thông tuyến huyện"
  },
  {
    code: "TT",
    name: "Trái tuyến"
  },
  {
    code: "TTT",
    name: "Trái tuyến (thông tuyến tỉnh)"
  },
]

export const LIST_PROVINCE =[
  {
    code: "HN",
    name: "Thành phố Hà Nội"
  },
  {
    code: "HD",
    name: "Tỉnh Hải Dương"
  },
  {
    code: "HP",
    name: "Tỉnh Hải Phòng"
  },
]

export const LIST_DISTRICT =[
  {
    code: "TX",
    name: "Quận Thanh Xuân"
  },
  {
    code: "NS",
    name: "Huyện Nam Sách"
  },
  {
    code: "AD",
    name: "Huyện An Dương"
  },
]

export const LIST_WARD =[
  {
    code: "TXN",
    name: "Phường Thanh Xuân Nam"
  },
  {
    code: "NH",
    name: "Xã Nam Hưng"
  },
  {
    code: "QT",
    name: "Xã Quốc Tuấn"
  },
]

export const LIST_HOC_VAN = [
  {
    code: "TH",
    name: "Tiểu học"
  },
  {
    code: "THCS",
    name: "Trung học cơ sở"
  },
  {
    code: "THPT",
    name: "Trung học phổ thông"
  },
]

export const LIST_NGUOI_NHA = [
  {
    code: "BO",
    name: "Bố"
  },
  {
    code: "ME",
    name: "Mẹ"
  },
  {
    code: "ONG",
    name: "Ông"
  },
  {
    code: "BA",
    name: "Bà"
  },
  {
    code: "ANHTRAI",
    name: "Anh trai"
  },
  {
    code: "EMTRAI",
    name: "Em trai"
  },
  {
    code: "CHIGAI",
    name: "Chị gái"
  },
  {
    code: "EMGAI",
    name: "Em gái"
  },
]

export const LIST_CAP_BAC = [
  {
    code: "BINH_NHI",
    name: "Binh nhì"
  },
  {
    code: "BINH_NHAT",
    name: "Binh nhất"
  },
  {
    code: "TRUNG_SI",
    name: "Trung sĩ"
  },
]

export const LIST_CHUC_VU = [
  {
    code: "TB",
    name: "Tân binh"
  },
  {
    code: "TDT",
    name: "Tiểu đội trưởng"
  },
  {
    code: "TRUNGDT",
    name: "Trung đội trưởng"
  },
]

export const LIST_DON_VI = [
  {
    code: "TD1",
    name: "Tiểu đội 1"
  },
  {
    code: "TD2",
    name: "Tiểu đội 2"
  },
  {
    code: "TD3",
    name: "Tiểu đội 3"
  },
]

export const fakeDataDsNhanVien: IDsNhanVien[] = [
  {
    maNV: "admin",
    tenNV: "Nguyễn Văn B",
    khoa: "Phòng kế hoạch tổng hợp",
    module: "Viện phí, chuẩn đoán hình ảnh, lấy mẫu",
    items: [
      {
        maNV: "1",
        tenNV: "Nguyễn Văn D",
        khoa: "Phòng kế hoạch tổng hợp",
        module: "Viện phí, chuẩn đoán hình ảnh, lấy mẫu"
      },
      {
        maNV: "2",
        tenNV: "Nguyễn Văn G",
        khoa: "Phòng kế hoạch tổng hợp",
        module: "Viện phí, chuẩn đoán hình ảnh, lấy mẫu"
      },
      {
        maNV: "3",
        tenNV: "Nguyễn Văn F",
        khoa: "Phòng kế hoạch tổng hợp",
        module: "Viện phí, chuẩn đoán hình ảnh, lấy mẫu"
      },
    ],
  },
  {
    maNV: "Nhân viên",
    tenNV: "Nguyễn Văn A",
    khoa: "Phòng kế hoạch tổng hợp",
    module: "Viện phí, chuẩn đoán hình ảnh, lấy mẫu",
    items: [
      {
        maNV: "1",
        tenNV: "Nguyễn Văn D",
        khoa: "Phòng kế hoạch tổng hợp",
        module: "Viện phí, chuẩn đoán hình ảnh, lấy mẫu"
      },
      {
        maNV: "2",
        tenNV: "Nguyễn Văn D",
        khoa: "Phòng kế hoạch tổng hợp",
        module: "Viện phí, chuẩn đoán hình ảnh, lấy mẫu"
      },
    ]
  },
  {
    maNV: "admin2",
    tenNV: "Nguyễn Văn C",
    khoa: "Phòng kế hoạch tổng hợp",
    module: "Viện phí, chuẩn đoán hình ảnh, lấy mẫu"
  },
]

export const fakeDataDsPhieu = [
  {
    tenSoThu: "Sổ thu 1",
    soPhieu: "12345678",
    loaiPhieu: "Tạm ứng",
    ngayTao: "30/01/2023",
    nguoiTao: "Nguyễn Văn A",
    soTien: "1.000.000.000",
    ghiChu: "Ghi chú 1",
  }
]

export const fakeDataDSBenhNhan = [
  {
    maBN: "12345678",
    tenBN: "Nguyễn Văn A",
    soBHYT: "HD1234567890111",
    gioiTinh: "Nam",
    tuoi: "20",
    khoaDieuTri: "Khoa Sản",
    phongDieuTri: "Điều trị khoa sản",
    giuong: "Giường T001",
    bacSiDieuTri: "Nguyễn Thị B",
    batDauBHYT: "01/01/2024",
    ketThucBHYT: "31/12/2024",
  }
]

export 
const fakeData: TimKiemBenhNhanModel[] = [
  {
    trangThai: 1,
    soDatHen: 1,
    maBN: "BNHK1",
    hoTen: "Nguyễn Văn Cốc",
    gioiTinh: "Nam",
    sdt: "0987768965",
    cccd: "002400069874",
    diaChi: "Hà Nội"
  },
  {
    trangThai: 1,
    soDatHen: 2,
    maBN: "BNHK2",
    hoTen: "Nguyễn Văn Công",
    gioiTinh: "Nam",
    sdt: "0987768965",
    cccd: "002400069874",
    diaChi: "Hà Nội"
  },
  {
    trangThai: 2,
    soDatHen: 3,
    maBN: "BNHK3",
    hoTen: "Nguyễn Thị Nụ",
    gioiTinh: "Nữ",
    sdt: "0987768965",
    cccd: "002400069874",
    diaChi: "Hà Nội"
  },
  {
    trangThai: 4,
    soDatHen: 4,
    maBN: "BNHK5",
    hoTen: "Nguyễn Cao Kỳ",
    gioiTinh: "Nam",
    sdt: "0987768965",
    cccd: "002400069874",
    diaChi: "Hà Nội"
  },
  {
    trangThai: 3,
    soDatHen: 5,
    maBN: "BNHK8",
    hoTen: "Trần Văn Cường",
    gioiTinh: "Nam",
    sdt: "0987768965",
    cccd: "002400069874",
    diaChi: "Hà Nội"
  },
  {
    trangThai: 6,
    soDatHen: 6,
    maBN: "BNHK4",
    hoTen: "Nguyễn Thị Vân",
    gioiTinh: "Nữ",
    sdt: "0987768965",
    cccd: "002400069874",
    diaChi: "Hà Nội"
  },
  {
    trangThai: 4,
    soDatHen: 7,
    maBN: "BNHK7",
    hoTen: "Nguyễn Cao Kỳ",
    gioiTinh: "Nam",
    sdt: "0987768965",
    cccd: "002400069874",
    diaChi: "Hà Nội"
  },
  {
    trangThai: 3,
    soDatHen: 8,
    maBN: "BNHK10",
    hoTen: "Trần Văn Cường",
    gioiTinh: "Nam",
    sdt: "0987768965",
    cccd: "002400069874",
    diaChi: "Hà Nội"
  },
  {
    trangThai: 5,
    soDatHen: 9,
    maBN: "BNHK9",
    hoTen: "Nguyễn Thị Vân",
    gioiTinh: "Nữ",
    sdt: "0987768965",
    cccd: "002400069874",
    diaChi: "Hà Nội"
  },
  {
    trangThai: 6,
    soDatHen: 10,
    maBN: "BNHK11",
    hoTen: "Nguyễn Thị Vân",
    gioiTinh: "Nữ",
    sdt: "0987768965",
    cccd: "002400069874",
    diaChi: "Hà Nội"
  },
];

export const listPhongKham = [
  {
    ten: "Phòng khám 1",
    dangKy: "2",
    cho: "1",
    kham: "1",
  },
  {
    ten: "Phòng khám 2",
    dangKy: "2",
    cho: "1",
    kham: "1",
  },
  {
    ten: "Phòng khám 3",
    dangKy: "2",
    cho: "1",
    kham: "1",
  },
  {
    ten: "Phòng khám 4",
    dangKy: "2",
    cho: "1",
    kham: "1",
  },
  {
    ten: "Phòng khám 5",
    dangKy: "2",
    cho: "1",
    kham: "1",
  },
  {
    ten: "Phòng khám 6",
    dangKy: "2",
    cho: "1",
    kham: "1",
  },
  {
    ten: "Phòng khám 7",
    dangKy: "2",
    cho: "1",
    kham: "1",
  },
  {
    ten: "Phòng khám 8",
    dangKy: "2",
    cho: "1",
    kham: "1",
  },
  {
    ten: "Phòng khám 9",
    dangKy: "2",
    cho: "1",
    kham: "1",
  },
  {
    ten: "Phòng khám 10",
    dangKy: "2",
    cho: "1",
    kham: "1",
  },
  {
    ten: "Phòng khám 11",
    dangKy: "2",
    cho: "1",
    kham: "1",
  },
  {
    ten: "Phòng khám 12",
    dangKy: "2",
    cho: "1",
    kham: "1",
  },
  {
    ten: "Phòng khám 13",
    dangKy: "2",
    cho: "1",
    kham: "1",
  },
  {
    ten: "Phòng khám 14",
    dangKy: "2",
    cho: "1",
    kham: "1",
  },
  {
    ten: "Phòng khám 15",
    dangKy: "2",
    cho: "1",
    kham: "1",
  },
  {
    ten: "Phòng khám 16",
    dangKy: "2",
    cho: "1",
    kham: "1",
  },
]

export const dataPTTT = [
  { ma: "", ten: "Không phân loại" }, 
  { ma: "PDB", ten: "Phẫu thuật loại đặc biệt" }, 
  { ma: "P1", ten: "Phẫu thuật loại 1" }
]

export const locDuLieuData = [
  { ten: "Lọc đối tượng dịch vụ", duLieu: "" }, 
  { ten: "Lọc khoa", duLieu: "" }, 
]

export const DICH_VU = [
  {
    tenDichVu: 'Khám bệnh',
    items: [
      {
        tenDichVu: 'Khám Bóng',
        donVi: 'Lần',
        doiTuong: 'Dịch vụ',
        sl: '1',
        donGia: 84500,
        tt: '100%',
        thanhTien: 84500,
        bhytTra: 84500,
        bh: '100%',
        bnTra: 0,
        bncct: 0,
        bntt: 0,
        daThu: 0,
        daThuCtt: 0,
        daThuBntt: 0,
        yeuCauThu: 0,
      },
    ],
  },
  {
    tenDichVu: 'Xét nghiệm',
    items: [
      {
        tenDichVu: 'Beta HCG',
        donVi: 'Lần',
        doiTuong: 'Dịch vụ',
        sl: '1',
        donGia: 100000,
        tt: '100%',
        thanhTien: 100000,
        mienGiam: 10000,
        bhytTra: 0,
        bh: '100%',
        bnTra: 90000,
        bncct: 0,
        bntt: 0,
        daThu: 0,
        daThuCtt: 0,
        daThuBntt: 0,
        yeuCauThu: 0,
      },
    ],
  },
]