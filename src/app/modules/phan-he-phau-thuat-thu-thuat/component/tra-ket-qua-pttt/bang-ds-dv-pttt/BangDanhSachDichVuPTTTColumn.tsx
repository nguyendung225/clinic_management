// @ts-nocheck
import { Column } from 'react-table'
import { useIntl } from 'react-intl'
import { danhSachDichVuPTTT } from "../../../model/DanhSachDichVuPTTTModel";
import { TableCustomHeader } from "../../../../component/table-custom/columns/TableCustomHeader";
function useCustomIntl(messageId: string) {
  const intl = useIntl()
  return intl.formatMessage({ id: messageId })
}
const DanhSachDichVu: ReadonlyArray<Column<danhSachDichVuPTTT>> = [
  {
    Header: (props) => (
      <TableCustomHeader<danhSachDichVuPTTT>
        tableProps={props}
        title={useCustomIntl("TABLE.INDEX")}
        className="text-center text-light w-20px"
      />
    ),
    id: 'stt',
    Cell: ({ ...props }) => (
      <div className='cell-first-child text-center'>{props.row.index + 1}</div>
    )
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachDichVuPTTT>
        tableProps={props}
        title={useCustomIntl("PTTT.STATUS")}
        className="text-center text-light w-60px"
      />
    ),
    id: 'status',
    Cell: ({ ...props }) => (
      <div className='min-w-60px  text-center'>{props.data[props.row.index].status}</div>
    )
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachDichVuPTTT>
        tableProps={props}
        title={useCustomIntl("PTTT.CODE.CASE")}
        className="text-center text-light w-80px"
      />
    ),
    id: 'maBA',
    Cell: ({ ...props }) => (
      <div className='text-center'>{props.data[props.row.index].maBA}</div>
    )
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachDichVuPTTT>
        tableProps={props}
        title={useCustomIntl("PTTT.CODE.PATIENT")}
        className="text-center text-light w-80px"
      />
    ),
    id: 'maBN',
    Cell: ({ ...props }) => (
      <div className='text-center'>{props.data[props.row.index].maBN}</div>
    )
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachDichVuPTTT>
        tableProps={props}
        title={useCustomIntl("PTTT.NAME")}
        className="text-center text-light w-120px"
      />
    ),
    id: 'tenBN',
    Cell: ({ ...props }) => (
      <div className='text-center'>{props.data[props.row.index].tenBN}</div>
    )
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachDichVuPTTT>
        tableProps={props}
        title={useCustomIntl("PTTT.NUMBER")}
        className="text-center text-light w-60px"
      />
    ),
    id: 'soPhieu',
    Cell: ({ ...props }) => (
      <div className='text-center'>{props.data[props.row.index].soPhieu}</div>
    )
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachDichVuPTTT>
        tableProps={props}
        title={useCustomIntl("PTTT.APPOINTED.DOCTOR")}
        className="text-center text-light w-120px"
      />
    ),
    id: 'bsChiDinh',
    Cell: ({ ...props }) => (
      <div className='text-center'>{props.data[props.row.index].bsChiDinh}</div>
    )
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachDichVuPTTT>
        tableProps={props}
        title={useCustomIntl("PTTT.APPOINTED.TIME")}
        className="text-center text-light w-80px"
      />
    ),
    id: 'tgChiDinh',
    Cell: ({ ...props }) => (
      <div className='text-center'>{props.data[props.row.index].tgChiDinh}</div>
    )
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachDichVuPTTT>
        tableProps={props}
        title={useCustomIntl("PTTT.DEPARTMENT.MAIN")}
        className="text-center text-light w-100px"
      />
    ),
    id: 'khoa',
    Cell: ({ ...props }) => (
      <div className='text-center'>{props.data[props.row.index].khoa}</div>
    )
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachDichVuPTTT>
        tableProps={props}
        title={useCustomIntl("PTTT.APPOINTED.DEPARTMENT")}
        className="text-center text-light w-100px"
      />
    ),
    id: 'phongChiDinh',
    Cell: ({ ...props }) => (
      <div className='text-center'>{props.data[props.row.index].phongChiDinh}</div>
    )
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachDichVuPTTT>
        tableProps={props}
        title={useCustomIntl("PTTT.DEPARTMENT.PERFORM")}
        className="text-center text-light w-100px"
      />
    ),
    id: 'phongThucHien',
    Cell: ({ ...props }) => (
      <div className='text-center'>{props.data[props.row.index].phongThucHien}</div>
    )
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachDichVuPTTT>
        tableProps={props}
        title={useCustomIntl("PTTT.ANESTHESIA.TIME")}
        className="text-center text-light w-80px"
      />
    ),
    id: 'tgGayMe',
    Cell: ({ ...props }) => (
      <div className='cell-last-child text-center'>{props.data[props.row.index].tgGayMe}</div>
    )
  },
]

export { DanhSachDichVu }
