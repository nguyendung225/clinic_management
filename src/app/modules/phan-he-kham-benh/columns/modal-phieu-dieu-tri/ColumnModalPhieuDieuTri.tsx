import { Column } from "react-table";
import { TableCustomHeader } from "../../../component/table/components/TableCustomHeader";
import { TableCustomCell } from "../../../component/table/components/TableCustomCell";

export const PhieuDieuTriColumn: ReadonlyArray<Column<any>> = [
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Mẫu Phiếu Điều Trị"}
        className='text-center spaces min-w-155'
      />
    ),
    id: 'mauPhieuDieuTri',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.mauPhieuDieuTri}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Thợ máy"}
        className='text-center min-w-85px'
      />
    ),
    id: 'thoMay',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.thoMay}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Khám Bộ Phận"}
        className='text-center min-w-125px'
      />
    ),
    id: 'khamBoPhan',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.khamBoPhan}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Khám Toàn Thân"}
        className='text-center min-w-150px'
      />
    ),
    id: 'khamToanThan',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.khamToanThan}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Thuốc Tự túc"}
        className='text-center min-w-125px'
      />
    ),
    id: 'thuocTuTuc',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.thuocTuTuc}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Chế Độ Ăn Uống"}
        className='text-center spaces min-w-140'
      />
    ),
    id: 'cheDoAnUong',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.cheDoAnUong}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Chế Độ Chăm Sóc"}
        className='text-center min-w-150px'
      />
    ),
    id: 'cheDoChamSoc',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.cheDoChamSoc}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Hướng Xử Lý"}
        className='text-center spaces min-w-115'
      />
    ),
    id: 'huongXuLy',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.huongXuLy}
      />
    ),
  },
];

export const PhieuDieuTriCuColumn: ReadonlyArray<Column<any>> = [
  {
    Header: (props) => (
      <></>
    ),
    id: 'mauPhieuDieuTri',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.mauPhieuDieuTri}
      />
    ),
  },
]