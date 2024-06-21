import { Column } from "react-table";
import { TableCustomCell } from "../../component/table/components/TableCustomCell";
import { TableCustomHeader } from "../../component/table/components/TableCustomHeader";

export const dsPhieuKhoVatTuColumn = [
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"TT"}
                className='text-center min-w-30px p-2 border-x'
            />
        ),
        id: 'tt',
        accessor: 'tt',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center spaces py-4 h-100"
                data={<i className="bi bi-circle-fill text-status-green"></i>}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Trạng thái phiếu"}
                className='text-center min-w-150px p-2 border-x'
            />
        ),
        id: 'trangThaiPhieu',
        accessor: 'trangThaiPhieu',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center spaces py-4 h-100"
                data={props.row.original.trangThaiPhieu}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Mã phiếu"}
                className='text-center min-w-100px p-2 border-x'
            />
        ),
        id: 'maPhieu',
        accessor: 'maPhieu',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center spaces py-4 h-100"
                data={props.row.original.maPhieu}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Loại phiếu"}
                className='text-center text-white min-w-100px p-2 border-x'
            />
        ),
        id: 'loaiPhieu',
        accessor: 'loaiPhieu',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center spaces py-4 h-100"
                data={props.row.original.loaiPhieu}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Ngày tạo"}
                className='text-center text-white min-w-100px p-2 border-x'
            />
        ),
        id: 'ngayTao',
        accessor: 'ngayTao',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center spaces py-4 h-100"
                data={props.row.original.ngayTao}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Ngày duyệt"}
                className='text-center text-white min-w-100px p-2 border-x'
            />
        ),
        id: 'ngayDuyet',
        accessor: 'ngayDuyet',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center spaces py-4 h-100"
                data={props.row.original.ngayDuyet}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Ngày nhập xuất"}
                className='text-center text-white min-w-140px p-2 border-x'
            />
        ),
        id: 'ngayNhapXuat',
        accessor: 'ngayNhapXuat',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center spaces py-4 h-100"
                data={props.row.original.ngayNhapXuat}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Nơi lập phiếu"}
                className='text-center text-white min-w-125px p-2 border-x'
            />
        ),
        id: 'noiLapPhieu',
        accessor: 'noiLapPhieu',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center spaces py-4 h-100"
                data={props.row.original.noiLapPhieu}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Nhà cung cấp"}
                className='text-center text-white min-w-175px p-2 border-x'
            />
        ),
        id: 'nhaCungCap',
        accessor: 'nhaCungCap',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center spaces py-4 h-100"
                data={props.row.original.nhaCungCap}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Số hóa đơn"}
                className='text-center text-white min-w-100px p-2 border-x'
            />
        ),
        id: 'soHoaDon',
        accessor: 'soHoaDon',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center spaces py-4 h-100"
                data={props.row.original.soHoaDon}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Ngày hóa đơn"}
                className='text-center text-white min-w-125px p-2 border-x'
            />
        ),
        id: 'ngayHoaDon',
        accessor: 'ngayHoaDon',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center spaces py-4 h-100"
                data={props.row.original.ngayHoaDon}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Chiết khấu"}
                className='text-center text-white min-w-100px p-2 border-x'
            />
        ),
        id: 'chietKhau',
        accessor: 'chietKhau',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center spaces py-4 h-100"
                data={props.row.original.chietKhau}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Nội dung"}
                className='text-center text-white min-w-100px p-2 border-x'
            />
        ),
        id: 'noiDung',
        accessor: 'noiDung',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-start spaces py-4 h-100"
                data={props.row.original.noiDung}
            />
        ),
    },
];

export const vatTuColumns = [
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"STT"}
                className='text-center text-white min-w-30px p-2 border-x'
            />
        ),
        id: 'stt',
        accessor: 'stt',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-start spaces py-4 h-100"
                data={props.row.index + 1}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Mã vật tư"}
                className='text-center text-white min-w-100px p-2 border-x'
            />
        ),
        id: 'maVatTu',
        accessor: 'maVatTu',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-start spaces py-4 h-100"
                data={props.row.original.maVatTu}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Đơn vị"}
                className='text-center text-white min-w-175px p-2 border-x'
            />
        ),
        id: 'donVi',
        accessor: 'donVi',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-start spaces py-4 h-100"
                data={props.row.original.donVi}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Số lượng"}
                className='text-center text-white min-w-100px p-2 border-x'
            />
        ),
        id: 'soLuong',
        accessor: 'soLuong',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-start spaces py-4 h-100"
                data={props.row.original.soLuong}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Giá mua"}
                className='text-center text-white min-w-100px p-2 border-x'
            />
        ),
        id: 'giaMua',
        accessor: 'giaMua',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-start spaces py-4 h-100"
                data={props.row.original.giaMua}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"VAT"}
                className='text-center text-white min-w-40px p-2 border-x'
            />
        ),
        id: 'vat',
        accessor: 'vat',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-start spaces py-4 h-100"
                data={props.row.original.vat}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Chiết khấu"}
                className='text-center text-white min-w-100px p-2 border-x'
            />
        ),
        id: 'chietKhau',
        accessor: 'chietKhau',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-start spaces py-4 h-100"
                data={props.row.original.chietKhau}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Giá mua thực"}
                className='text-center text-white min-w-150px p-2 border-x'
            />
        ),
        id: 'giaMuaThuc',
        accessor: 'giaMuaThuc',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-start spaces py-4 h-100"
                data={props.row.original.giaMuaThuc}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Thành tiền"}
                className='text-center text-white min-w-100px p-2 border-x'
            />
        ),
        id: 'thanhTien',
        accessor: 'thanhTien',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-start spaces py-4 h-100"
                data={props.row.original.thanhTien}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Số lô"}
                className='text-center text-white min-w-100px p-2 border-x'
            />
        ),
        id: 'soLo',
        accessor: 'soLo',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-start spaces py-4 h-100"
                data={props.row.original.soLo}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"HSD"}
                className='text-center text-white min-w-100px p-2 border-x'
            />
        ),
        id: 'hanSuDung',
        accessor: 'hanSuDung',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-start spaces py-4 h-100"
                data={props.row.original.hanSuDung}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Giá bán"}
                className='text-center text-white min-w-100px p-2 border-x'
            />
        ),
        id: 'giaBan',
        accessor: 'giaBan',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-start spaces py-4 h-100"
                data={props.row.original.giaBan}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Giá viện phí"}
                className='text-center text-white min-w-100px p-2 border-x'
            />
        ),
        id: 'giaVienPhi',
        accessor: 'giaVienPhi',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-start spaces py-4 h-100"
                data={props.row.original.giaVienPhi}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Giá BHYT"}
                className='text-center text-white min-w-100px p-2 border-x'
            />
        ),
        id: 'giaBHYT',
        accessor: 'giaBHYT',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-start spaces py-4 h-100"
                data={props.row.original.giaBHYT}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Đơn vị nhập"}
                className='text-center text-white min-w-125px p-2 border-x'
            />
        ),
        id: 'donViNhap',
        accessor: 'donViNhap',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-start spaces py-4 h-100"
                data={props.row.original.donViNhap}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"SL nhập"}
                className='text-center text-white min-w-100px p-2 border-x'
            />
        ),
        id: 'soLuongNhap',
        accessor: 'soLuongNhap',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-start spaces py-4 h-100"
                data={props.row.original.soLuongNhap}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"QD trúng thầu"}
                className='text-center text-white min-w-125px p-2 border-x'
            />
        ),
        id: 'quyetDinhTrungThau',
        accessor: 'quyetDinhTrungThau',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-start spaces py-4 h-100"
                data={props.row.original.quyetDinhTrungThau}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Số gói thầu"}
                className='text-center text-white min-w-100px p-2 border-x'
            />
        ),
        id: 'soGoiThau',
        accessor: 'soGoiThau',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-start spaces py-4 h-100"
                data={props.row.original.soGoiThau}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Nhóm thầu"}
                className='text-center text-white min-w-100px p-2 border-x'
            />
        ),
        id: 'nhomThau',
        accessor: 'nhomThau',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-start spaces py-4 h-100"
                data={props.row.original.nhomThau}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Năm thầu"}
                className='text-center text-white min-w-100px p-2 border-x'
            />
        ),
        id: 'namThau',
        accessor: 'namThau',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-start spaces py-4 h-100"
                data={props.row.original.namThau}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Nguồn"}
                className='text-center text-white min-w-100px p-2 border-x'
            />
        ),
        id: 'nguon',
        accessor: 'nguon',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-start spaces py-4 h-100"
                data={props.row.original.nguon}
            />
        ),
    },
];


export const DsVatTuColumn: ReadonlyArray<Column<any>> = [
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Mã Thuốc"}
          className='text-center min-w-100px'
        />
      ),
      id: 'maThuoc',
      Cell: ({ ...props }) => (
        <TableCustomCell
          tableProps={props}
          className='text-center'
          data={props?.row?.original?.maThuoc}
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Tên Thuốc"}
          className='text-center min-w-100px'
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
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Gói Thầu"}
          className='text-center min-w-100px'
        />
      ),
      id: 'goiThau',
      Cell: ({ ...props }) => (
        <TableCustomCell
          tableProps={props}
          data={props?.row?.original?.goiThau}
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Đơn Vị"}
          className='text-center min-w-70px'
        />
      ),
      id: 'donVi',
      Cell: ({ ...props }) => (
        <TableCustomCell
          tableProps={props}
          className='text-center'
          data={props?.row?.original?.donVi}
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Số Lượng"}
          className='text-center min-w-100px'
        />
      ),
      id: 'soLuong',
      Cell: ({ ...props }) => (
        <TableCustomCell
          tableProps={props}
          className='text-center'
          data={props?.row?.original?.soLuong}
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Giá Mua"}
          className='text-center min-w-100px'
        />
      ),
      id: 'giaMua',
      Cell: ({ ...props }) => (
        <TableCustomCell
          tableProps={props}
          className="text-end"
          data={props?.row?.original?.giaMua}
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"VAT(%)"}
          className='text-center min-w-100px'
        />
      ),
      id: 'vat',
      Cell: ({ ...props }) => (
        <TableCustomCell
          tableProps={props}
          className='text-center'
          data={props?.row?.original?.vat}
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Chiết Khấu(%)"}
          className='text-center min-w-125px'
        />
      ),
      id: 'chietKhau',
      Cell: ({ ...props }) => (
        <TableCustomCell
          tableProps={props}
          className='text-center'
          data={props?.row?.original?.chietKhau}
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Giá Mua Thực"}
          className='text-center min-w-125px'
        />
      ),
      id: 'giaMuaThuc',
      Cell: ({ ...props }) => (
        <TableCustomCell
          tableProps={props}
          className="text-end"
          data={props?.row?.original?.giaMuaThuc}
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Thành Tiền"}
          className='text-center spaces min-w-105'
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
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"SDK"}
          className='text-center min-w-50px'
        />
      ),
      id: 'sdk',
      Cell: ({ ...props }) => (
        <TableCustomCell
          tableProps={props}
          className='text-center'
          data={props?.row?.original?.sdk}
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Số Lô"}
          className='text-center min-w-70px'
        />
      ),
      id: 'soLo',
      Cell: ({ ...props }) => (
        <TableCustomCell
          tableProps={props}
          className='text-center'
          data={props?.row?.original?.soLo}
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Hạn Sử Dụng"}
          className='text-center min-w-125px'
        />
      ),
      id: 'hanSuDung',
      Cell: ({ ...props }) => (
        <TableCustomCell
          tableProps={props}
          className='text-center'
          data={props?.row?.original?.hanSuDung}
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Giá Bán"}
          className='text-center min-w-100px'
        />
      ),
      id: 'giaBan',
      Cell: ({ ...props }) => (
        <TableCustomCell
          tableProps={props}
          className="text-end"
          data={props?.row?.original?.giaBan}
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Đơn Vị Nhập"}
          className='text-center min-w-125px'
        />
      ),
      id: 'donViNhap',
      Cell: ({ ...props }) => (
        <TableCustomCell
          tableProps={props}
          className='text-center'
          data={props?.row?.original?.donViNhap}
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Quy Cách Đóng Gói"}
          className='text-center spaces min-w-165'
        />
      ),
      id: 'quyCachDongGoi',
      Cell: ({ ...props }) => (
        <TableCustomCell
          tableProps={props}
          className='text-center'
          data={props?.row?.original?.quyCachDongGoi}
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Nhà Cung Cấp"}
          className='text-center min-w-125px'
        />
      ),
      id: 'nhaCungCap',
      Cell: ({ ...props }) => (
        <TableCustomCell
          tableProps={props}
          data={props?.row?.original?.nhaCungCap}
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Số Lượng Nhập"}
          className='text-center spaces min-w-135'
        />
      ),
      id: 'soLuongNhap',
      Cell: ({ ...props }) => (
        <TableCustomCell
          tableProps={props}
          className='text-center'
          data={props?.row?.original?.soLuongNhap}
        />
      ),
    },
  ];

export const DsPhieuColumn: ReadonlyArray<Column<any>> = [
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Mã phiếu"}
        className='text-center'
      />
    ),
    id: 'maPhieu',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className='text-center'
        data={props?.row?.original?.maPhieu}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Ngày thu"}
        className='text-center'
      />
    ),
    id: 'ngayThu',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className='text-center'
        data={props?.row?.original?.ngayThu}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"số tiền"}
        className='text-center'
      />
    ),
    id: 'soTien',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className='text-end'
        data={props?.row?.original?.soTien}
      />
    ),
  }
]