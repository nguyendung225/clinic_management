
export interface DanhSachPhieuProps {
  open: boolean;
  handleClose: () =>  void;
}

export interface BangDsPhieuModel {
  ipm: string;
  hoTen: string;
  soTien: string;
  loaiPhieu: string;
  ngayThanhToanh: string;
  trangThai: string;
}

export interface SearchObject {
  pageIndex: number,
  pageSize: number,
  keyword: string,
  ipm?: string;
  loaiPhieu?: string;
  tuNgay?: string;
  denNgay?: string;
}

export const fakeBangDanhSachPhieuData: BangDsPhieuModel[] = [
  {
    ipm: "BN000000001",
    hoTen: "Nguyễn Hoàng Thanh Thảo",
    soTien: "300,000,000",
    loaiPhieu: "Phiếu hoàn ứng",
    ngayThanhToanh: "29/01/2022 10:40:03",
    trangThai: "Chưa duyệt kế toán",
  }
]

