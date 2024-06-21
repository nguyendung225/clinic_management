import { Column } from "react-table";
import { TableCustomHeader } from "../../../../component/table/components/TableCustomHeader";
import { TableCustomCell } from "../../../../component/table/components/TableCustomCell";

export const DsPhieuChoXuatColumn: ReadonlyArray<Column<any>> = [
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"ID"}
        className='text-center min-w-50px'
      />
    ),
    id: 'idPhieu',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.idPhieu}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Số Phiếu"}
        className='text-center min-w-100px'
      />
    ),
    id: 'soPhieu',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.soPhieu}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Phiếu Tổng Hợp"}
        className='text-center min-w-150px'
      />
    ),
    id: 'phieuTongHop',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.phieuTongHop}
      />
    ),
  },
  {
    Header: (props) => (
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
    Header: (props) => (
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
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Khoa Duyệt"}
        className='text-center min-w-125px'
      />
    ),
    id: 'khoaDuyet',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.khoaDuyet}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Ngày Duyệt"}
        className='text-center min-w-125px'
      />
    ),
    id: 'ngayDuyet',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-center"
        data={props?.row?.original?.ngayDuyet}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Người Duyệt"}
        className='text-center min-w-125px'
      />
    ),
    id: 'nguoiDuyet',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.nguoiDuyet}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"SL Yêu Cầu"}
        className='text-center min-w-100px'
      />
    ),
    id: 'slYeuCau',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-center"
        data={props?.row?.original?.slYeuCau}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Sl Duyệt"}
        className='text-center min-w-100px'
      />
    ),
    id: 'slDuyet',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-center"
        data={props?.row?.original?.slDuyet}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Diễn Giải"}
        className='text-center min-w-150px'
      />
    ),
    id: 'dienGiai',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.dienGiai}
      />
    ),
  },
];