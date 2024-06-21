import { Column } from "react-table";
import { TableCustomHeader } from "../../component/table/components/TableCustomHeader";
import { TableCustomCell } from "../../component/table/components/TableCustomCell";
import { listTamUng, listTrangThai } from "../constants/ConstantPhanHeHanhChinh";
import { renderTrangThaiHanhChinh } from "../../utils/FormatUtils";

export const dsBenhNhanColumn: ReadonlyArray<Column<any>> = [
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"TT"}
        className='text-center min-w-30px'
      />
    ),
    id: 'trangThai',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-center"
        data={renderTrangThaiHanhChinh(props?.row?.original?.trangThai, listTrangThai)}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"STT"}
        className='text-center min-w-30px'
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
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Tên bệnh nhân"}
        className='text-center min-w-200px'
      />
    ),
    id: 'hoTen',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={
          <div>
            <div className="fw-bolder text-uppercase">{props?.row?.original?.hoTen}</div>
            <div>{props?.row?.original?.maBn} - {props?.row?.original?.doiTuong}</div>
          </div>
        }
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Tuổi"}
        className='text-center min-w-50px'
      />
    ),
    id: 'age',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-center"
        data={props?.row?.original?.age}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Giường"}
        className='text-center min-w-100px'
      />
    ),
    id: 'giuong',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.giuong}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"BHYT"}
        className='text-center min-w-50px'
      />
    ),
    id: 'bhyt',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-center"
        data={renderTrangThaiHanhChinh(props?.row?.original?.bhyt)}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Tạm ứng"}
        className='text-center min-w-90px'
      />
    ),
    id: 'tamUng',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-center"
        data={renderTrangThaiHanhChinh(props?.row?.original?.tamUng, listTamUng)}
      />
    ),
  }
]