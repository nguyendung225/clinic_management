import { Column } from "react-table";
import { TableCustomHeader } from "../../component/table/components/TableCustomHeader";
import { TableCustomCell } from "../../component/table/components/TableCustomCell";
import { CONSTANTS_HANH_CHINH } from "../constants/ConstantPhanHeHanhChinh";

export const PhieuColumn = (loaiQuanLy: string) => {
  const quanLyMau = loaiQuanLy === CONSTANTS_HANH_CHINH.MAU
  return ([
    {
      Header: (props: any) => (
        <TableCustomHeader
          tableProps={props}
          title={""}
          className='text-center min-w-30px'
        />
      ),
      id: 'tt',
      Cell: ({ ...props }) => (
        <TableCustomCell
          tableProps={props}
          data={props?.row?.original?.tt}
        />
      ),
    },
    {
      Header: (props: any) => (
        <TableCustomHeader
          tableProps={props}
          title={"Trạng Thái Phiếu"}
          className='text-center min-w-150px'
        />
      ),
      id: 'trangThaiPhieu',
      Cell: ({ ...props }) => (
        <TableCustomCell
          tableProps={props}
          data={props?.row?.original?.trangThaiPhieu}
        />
      ),
    },
    {
      Header: (props: any) => (
        <TableCustomHeader
          tableProps={props}
          title={"Mã Phiếu"}
          className='text-center min-w-100px'
        />
      ),
      id: 'maPhieu',
      Cell: ({ ...props }) => (
        <TableCustomCell
          tableProps={props}
          className="text-center"
          data={props?.row?.original?.maPhieu}
        />
      ),
    },
    {
      Header: (props: any) => (
        <TableCustomHeader
          tableProps={props}
          title={"Mã Phiếu TH"}
          className='text-center min-w-125px'
        />
      ),
      id: 'maPhieuTH',
      Cell: ({ ...props }) => (
        <TableCustomCell
          tableProps={props}
          data={props?.row?.original?.maPhieuTH}
        />
      ),
    },
    {
      Header: (props: any) => (
        <TableCustomHeader
          tableProps={props}
          title={"Loại Phiếu"}
          className='text-center min-w-100px'
        />
      ),
      id: 'loaiPhieu',
      Cell: ({ ...props }) => (
        <TableCustomCell
          tableProps={props}
          data={props?.row?.original?.loaiPhieu}
        />
      ),
    },
    ...(quanLyMau ? [] : [{
      Header: (props: any) => (
        <TableCustomHeader
          tableProps={props}
          title={"Mã BN"}
          className='text-center min-w-100px'
        />
      ),
      id: 'maBN',
      Cell: ({ ...props }) => (
        <TableCustomCell
          tableProps={props}
          data={props?.row?.original?.maBN}
        />
      ),
    },
    {
      Header: (props: any) => (
        <TableCustomHeader
          tableProps={props}
          title={"Tên Bệnh Nhân"}
          className='text-center min-w-150px'
        />
      ),
      id: 'tenBenhNhan',
      Cell: ({ ...props }) => (
        <TableCustomCell
          tableProps={props}
          data={props?.row?.original?.tenBenhNhan}
        />
      ),
    },
    {
      Header: (props: any) => (
        <TableCustomHeader
          tableProps={props}
          title={"Giới Tính"}
          className='text-center min-w-90px'
        />
      ),
      id: 'gioiTinh',
      Cell: ({ ...props }) => (
        <TableCustomCell
          tableProps={props}
          className="text-center"
          data={props?.row?.original?.gioiTinh}
        />
      ),
    },
    {
      Header: (props: any) => (
        <TableCustomHeader
          tableProps={props}
          title={"Tuổi"}
          className='text-center min-w-50px'
        />
      ),
      id: 'tuoi',
      Cell: ({ ...props }) => (
        <TableCustomCell
          tableProps={props}
          className="text-center"
          data={props?.row?.original?.tuoi}
        />
      ),
    }]),
    {
      Header: (props: any) => (
        <TableCustomHeader
          tableProps={props}
          title={"Ngày Chỉ Định"}
          className='text-center min-w-125px'
        />
      ),
      id: 'ngayChiDinh',
      Cell: ({ ...props }) => (
        <TableCustomCell
          tableProps={props}
          className="text-center"
          data={props?.row?.original?.ngayChiDinh}
        />
      ),
    },
    ...(quanLyMau ? [] : [{
      Header: (props: any) => (
        <TableCustomHeader
          tableProps={props}
          title={"Ngày Y Lệnh"}
          className='text-center min-w-125px'
        />
      ),
      id: 'ngayYLenh',
      Cell: ({ ...props }) => (
        <TableCustomCell
          tableProps={props}
          className="text-center"
          data={props?.row?.original?.ngayYLenh}
        />
      ),
    },
    {
      Header: (props: any) => (
        <TableCustomHeader
          tableProps={props}
          title={"Khoa Phòng"}
          className='text-center min-w-125px'
        />
      ),
      id: 'khoaPhong',
      Cell: ({ ...props }) => (
        <TableCustomCell
          tableProps={props}
          data={props?.row?.original?.khoaPhong}
        />
      ),
    }]),
    {
      Header: (props: any) => (
        <TableCustomHeader
          tableProps={props}
          title={"Kho Thuốc"}
          className='text-center min-w-100px'
        />
      ),
      id: 'khoThuoc',
      Cell: ({ ...props }) => (
        <TableCustomCell
          tableProps={props}
          data={props?.row?.original?.khoThuoc}
        />
      ),
    },
  ]
  )
}

export const BuongColumn: ReadonlyArray<Column<any>> = [
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"Mã buồng"}
        className='text-center spaces W-120'
      />
    ),
    id: 'maBuong',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.maBuong}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"Tên buồng"}
        className='text-center min-w-150px'
      />
    ),
    id: 'tenBuong',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.tenBuong}
      />
    ),
  },
]

export const ThuocColumn: ReadonlyArray<Column<any>> = [
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"stt"}
        className='text-center'
      />
    ),
    id: 'stt',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-center"
        data={props?.row?.index + 1}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"Mã Thuốc"}
        className='text-center'
      />
    ),
    id: 'maThuoc',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.maThuoc}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"Tên Thuốc"}
        className='text-center'
      />
    ),
    id: 'tenThuoc',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.tenThuoc}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"Đơn Vị"}
        className='text-center'
      />
    ),
    id: 'donVi',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-center"
        data={props?.row?.original?.donVi}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"Số Lượng"}
        className='text-center'
      />
    ),
    id: 'soLuong',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-end"
        data={props?.row?.original?.soLuong}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"Đơn Giá"}
        className='text-center'
      />
    ),
    id: 'donGia',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-end"
        data={props?.row?.original?.donGia}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"VAT"}
        className='text-center'
      />
    ),
    id: 'vat',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-end"
        data={props?.row?.original?.vat}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"Thành Tiền"}
        className='text-center'
      />
    ),
    id: 'thanhTien',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-end"
        data={props?.row?.original?.thanhTien}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"SĐK"}
        className='text-center'
      />
    ),
    id: 'sdk',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-center"
        data={props?.row?.original?.sdk}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"Số Lô"}
        className='text-center'
      />
    ),
    id: 'soLo',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-center"
        data={props?.row?.original?.soLo}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"Hạn Sử Dụng"}
        className='text-center'
      />
    ),
    id: 'hanSuDung',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-center"
        data={props?.row?.original?.hanSuDung}
      />
    ),
  },
];
export const MauColumn: ReadonlyArray<Column<any>> = [
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"stt"}
        className='text-center'
      />
    ),
    id: 'stt',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-center"
        data={props?.row?.index + 1}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"Mã máu"}
        className='text-center'
      />
    ),
    id: 'maMau',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.maMau}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"Tên máu"}
        className='text-center'
      />
    ),
    id: 'tenMau',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.tenMau}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"Đơn Vị"}
        className='text-center'
      />
    ),
    id: 'donVi',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-center"
        data={props?.row?.original?.donVi}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"Số Lượng"}
        className='text-center'
      />
    ),
    id: 'soLuong',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-end"
        data={props?.row?.original?.soLuong}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"Đơn Giá"}
        className='text-center'
      />
    ),
    id: 'donGia',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-end"
        data={props?.row?.original?.donGia}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"VAT"}
        className='text-center'
      />
    ),
    id: 'vat',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-end"
        data={props?.row?.original?.vat}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"Thành Tiền"}
        className='text-center'
      />
    ),
    id: 'thanhTien',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-end"
        data={props?.row?.original?.thanhTien}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"SĐK"}
        className='text-center'
      />
    ),
    id: 'sdk',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-center"
        data={props?.row?.original?.sdk}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"Số Lô"}
        className='text-center'
      />
    ),
    id: 'soLo',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-center"
        data={props?.row?.original?.soLo}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"Hạn Sử Dụng"}
        className='text-center'
      />
    ),
    id: 'hanSuDung',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-center"
        data={props?.row?.original?.hanSuDung}
      />
    ),
  },
];

export const vatTuColumn: ReadonlyArray<Column<any>> = [
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"stt"}
        className='text-center'
      />
    ),
    id: 'stt',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-center"
        data={props?.row?.index + 1}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"Mã vật tư"}
        className='text-center'
      />
    ),
    id: 'maVatTu',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.maVatTu}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"Tên vật tư"}
        className='text-center'
      />
    ),
    id: 'tenVatTu ',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.tenVatTu}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"Đơn Vị"}
        className='text-center'
      />
    ),
    id: 'donVi',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-center"
        data={props?.row?.original?.donVi}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"Số Lượng"}
        className='text-center'
      />
    ),
    id: 'soLuong',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-end"
        data={props?.row?.original?.soLuong}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"Đơn Giá"}
        className='text-center'
      />
    ),
    id: 'donGia',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-end"
        data={props?.row?.original?.donGia}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"VAT"}
        className='text-center'
      />
    ),
    id: 'vat',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-end"
        data={props?.row?.original?.vat}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"Thành Tiền"}
        className='text-center'
      />
    ),
    id: 'thanhTien',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-end"
        data={props?.row?.original?.thanhTien}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"SĐK"}
        className='text-center'
      />
    ),
    id: 'sdk',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-center"
        data={props?.row?.original?.sdk}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"Số Lô"}
        className='text-center'
      />
    ),
    id: 'soLo',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-center"
        data={props?.row?.original?.soLo}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"Hạn Sử Dụng"}
        className='text-center'
      />
    ),
    id: 'hanSuDung',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-center"
        data={props?.row?.original?.hanSuDung}
      />
    ),
  },
];