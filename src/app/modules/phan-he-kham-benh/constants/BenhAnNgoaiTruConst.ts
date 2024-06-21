import { loaiBenhAn } from "../models/BenhAnNgoaiTruModel";

export const danhSachLoaiBenhAn: loaiBenhAn[] = [
  { id: 0, code: "BANOIKHOA", name: "Bệnh án nội khoa", description: "" },
  { id: 1, code: "BANHIKHOA", name: "Bệnh án nhi khoa", description: "" },
  { id: 2, code: "BATRUYENNHIEM", name: "Bệnh án truyền nhiễm", description: "" },
  { id: 3, code: "BADALIEU", name: "Bệnh án da liễu", description: "" },
  { id: 4, code: "BAHHVTM", name: "Bệnh án huyết học và truyền máu", description: "" },
  { id: 5, code: "BABONG", name: "Bệnh án bỏng", description: "" },
  { id: 6, code: "BAUNGBUOU", name: "Bệnh án ung bướu", description: "" },
  { id: 7, code: "BARHM", name: "Bệnh án răng - hàm - mặt", description: "" },
  { id: 8, code: "BATMH", name: "Bệnh án tai - mũi - họng", description: "" },
  { id: 9, code: "BANGOAITRU", name: "Bệnh án ngoại trú (chung)", description: "" },
  { id: 10, code: "BANGOAITRURHM", name: "Bệnh án ngoại trú răng hàm mặt", description: "" },
  { id: 11, code: "BANGOAITRUTMH", name: "Bệnh án ngoại trú tai mũi họng", description: "" },
  { id: 12, code: "BANGOAIKHOA", name: "Bệnh án ngoại khoa", description: "" },
  { id: 13, code: "BAYHCTNGOAITRU", name: "Bệnh án YHCT ngoại trú", description: "" },
  { id: 14, code: "BANOITRUYHCT", name: "Bệnh án nội trú YHCT", description: "" },
  { id: 15, code: "BADDVPHCN", name: "Bệnh án điều dưỡng và phục hồi chức năng", description: "" },
]
export const danhSachNguoiNha = [
  { id: 0, name: "Ông" },
  { id: 1, name: "Bà" },
  { id: 2, name: "Bố" },
  { id: 3, name: "Mẹ" },
  { id: 4, name: "Cô" },
  { id: 5, name: "Dì" },
  { id: 6, name: "Chú" },
  { id: 7, name: "Bác" },
  { id: 8, name: "Cậu" },
  { id: 9, name: "Mợ" },
  { id: 10, name: "Anh trai" },
  { id: 11, name: "Chị gái" },
  { id: 12, name: "Em gái" },
  { id: 13, name: "Em Trai" },
  { id: 14, name: "Cháu trai" },
  { id: 15, name: "Cháu gái" },
]

export const gioiTinh = [
  { id: 1, name: "Nam" },
  { id: 2, name: "Nữ" },
  { id: 3, name: "Khác" },
]

export const danToc = [
  { id: 1, name: "Kinh" },
  { id: 2, name: "Mường" },
  { id: 3, name: "Thái" },
  { id: 3, name: "Tày" },
  { id: 3, name: "Nùng" },
  { id: 3, name: "Khơ-me" },
  { id: 3, name: "Khơ-mú" },
  { id: 3, name: "H-Mông" },
  { id: 3, name: "Ê đê" },
  { id: 3, name: "Gia rai" },
]

export const quocTich = [
  { id: 1, name: "Việt Nam" },
  { id: 2, name: "Hoa Kỳ" },
  { id: 3, name: "Trung Quốc" },
  { id: 4, name: "Nhật Bản" },
  { id: 5, name: "Hàn Quốc" },
  { id: 6, name: "Lào" },
  { id: 7, name: "Campuchia" },
  { id: 8, name: "Thái Lan" },
  { id: 9, name: "Malaysia" },
  { id: 10, name: "Indonesia" },
  { id: 11, name: "Ấn Độ" },
  { id: 12, name: "Nga" },
  { id: 13, name: "Anh" },
  { id: 14, name: "Đức" },
]

export const doiTuong = [
  { id: 0, name: "BHYT" },
  { id: 1, name: "Viện phí" },
  { id: 2, name: "Quân đội" },
  { id: 3, name: "Công an" },
]

export const noiDangKyKCBBD = [
  { id: 0, name: "Bệnh viện phục hồi chức năng Quảng Nam" },
]

export const KEY_NAME = {
  thongTinKhamBenh: "Thông tin khám bệnh",
  sinhHieu: "Sinh hiệu",
  chieuCao: "Chiều cao",
  canNang: "Cân nặng",
  BMI: "BMI"
}

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