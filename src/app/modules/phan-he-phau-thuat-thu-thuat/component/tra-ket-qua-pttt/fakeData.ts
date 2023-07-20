import { danhSachDichVuPTTT } from "../../model/DanhSachDichVuPTTTModel";
import { ChiTietGiaDichVuPTTTModel } from "../../model/GiaDichVuPTTTModel";
import { DanhSachTiepNhanGayMeModel } from "../../model/DanhSachTiepNhanGayMeModel";

export const danhSachDichVuPtttData: danhSachDichVuPTTT[] = [
  {
    id: "1",
    maBA: "012312312",
    maBN: "MV1231232",
    tenBN: "Nguyen Van A",
    soPhieu: "BN23123123",
    bsChiDinh: "Nguyen Thi B",
    tgChiDinh: "30/04/2023",
    khoa: "Khoa rang ham mat",
    phongChiDinh: "string",
    phongThucHien: "string",
    tgGayMe: "30/04/2023",
  }
]
export const chiTietGiaDichVuPtttData: ChiTietGiaDichVuPTTTModel[] = [
  {
    id: "1",
    maDV: "MV1231232",
    tenDV: "Mở khí quản",
    soLuong: "01",
    loaiPTTT: "PT chính",
    tyLe: "100%",
    tienChiTra: "75.000.000",
    trangThai: "Chưa hoàn thành",
    nguoiLap: "BS.Huỳnh Công Đến",
    ghiChu: "",
  }
]
export const danhSachTiepNhanGayMeData: DanhSachTiepNhanGayMeModel[] = [
  {
    id: "1",
    soGoi: "",
    status: "",
    maBA: "012312312",
    maBN: "MV1231232",
    tenBN: "Nguyen Van A",
    soPhieu: "BN23123123",
    bsChiDinh: "Nguyen Thi B",
    khoa: "Khoa rang ham mat",
    phongChiDinh: "string",
  }
]
