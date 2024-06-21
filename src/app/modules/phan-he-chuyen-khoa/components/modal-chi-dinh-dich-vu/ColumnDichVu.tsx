import { Column } from "react-table";
import { TableCustomHeader } from "../../../component/table/components/TableCustomHeader";
import { TableCustomCell } from "../../../component/table/components/TableCustomCell";
import { IDichVu } from "../../models/ChiDinhDichVuModel";

export const DichVuColumn: ReadonlyArray<Column<IDichVu>> = [
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Mã Dịch Vụ"}
        className='text-center'
      />
    ),
    id: 'maDichVu',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.maDichVu}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"PĐ"}
        className='text-center'
      />
    ),
    id: 'pd',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.pd}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Tên Dịch Vụ"}
        className='text-center'
      />
    ),
    id: 'tenDichVu',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.tenDichVu}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"SL"}
        className='text-center'
      />
    ),
    id: 'sl',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-center"
        data={props?.row?.original?.sl}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Giá BHYT"}
        className='text-center'
      />
    ),
    id: 'giaBHYT',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-end"
        data={props?.row?.original?.giaBHYT}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Giá Viện Phí"}
        className='text-center'
      />
    ),
    id: 'giaVienPhi',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-end"
        data={props?.row?.original?.giaVienPhi}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Giá Dịch Vụ"}
        className='text-center'
      />
    ),
    id: 'giaDichVu',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-end"
        data={props?.row?.original?.giaDichVu}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Cần Nộp"}
        className='text-center'
      />
    ),
    id: 'canNop',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-end"
        data={props?.row?.original?.canNop}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Đối Tượng"}
        className='text-center'
      />
    ),
    id: 'doiTuong',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.doiTuong}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Phòng Thực Hiện"}
        className='text-center'
      />
    ),
    id: 'phongThucHien',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.phongThucHien}
      />
    ),
  },
];