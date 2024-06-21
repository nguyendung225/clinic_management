export interface IDSDangKy {
  ngayDenKham: string;
  hinhThucVao: string;
  phongKham: string;
  dichVuKham: string;
  sttKham: string;
  trangThai: string;
  ngayKham: string;
  bacSiKham: string;
  ngayRa: string;
}

export interface IContextMenu {
  title?: string;
  icon?: JSX.Element;
  code?: string;
  name?: string;
  children?: IContextMenu[];
}