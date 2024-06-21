import { Column } from "react-table";
import { TableCustomHeader } from "../../component/table/components/TableCustomHeader";
import { TableCustomCell } from "../../component/table/components/TableCustomCell";

export const NhatKyColumn: ReadonlyArray<Column<any>> = [
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Thời Gian"}
        className='text-center'
      />
    ),
    id: 'thoiGian',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className='text-center'
        data={props?.row?.original?.thoiGian}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Mã Người Dùng"}
        className='text-center'
      />
    ),
    id: 'maNguoiDung',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className='text-center'
        data={props?.row?.original?.maNguoiDung}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Người Dùng"}
        className='text-center'
      />
    ),
    id: 'nguoiDung',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.nguoiDung}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Nội Dung"}
        className='text-center'
      />
    ),
    id: 'noiDung',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.noiDung}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"PR_ID"}
        className='text-center'
      />
    ),
    id: 'prId',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className='text-center'
        data={props?.row?.original?.prId}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"PR_VP_ID"}
        className='text-center'
      />
    ),
    id: 'prVpId',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className='text-center'
        data={props?.row?.original?.prVpId}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"MR_ID"}
        className='text-center'
      />
    ),
    id: 'mrId',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className='text-center'
        data={props?.row?.original?.mrId}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"ServiceDataID"}
        className='text-center'
      />
    ),
    id: 'serviceDataId',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className='text-center'
        data={props?.row?.original?.serviceDataId}
      />
    ),
  },
];