import { IKhoa, IPhong } from "./ModelNhanVien";

export interface IGiuongBenh {
    department: IKhoa
    room: IPhong
    maGiuong: string
    tenGiuong: string
    giaGiuong: string
    namGhepToiDa: number 
}