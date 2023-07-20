// @ts-nocheck
import { Column } from 'react-table'
import { useIntl } from 'react-intl'
import { BangDsPhieuModel } from "../../models/DanhSachPhieuModel";
import { TableCustomHeader } from "../../../component/table-custom/columns/TableCustomHeader";
function useCustomIntl(messageId: string) {
  const intl = useIntl()
  return intl.formatMessage({ id: messageId })
}
const BangDanhSachPhieuColumn: ReadonlyArray<Column<BangDsPhieuModel>> = [
  {
    Header: (props) => (
      <TableCustomHeader<BangDsPhieuModel>
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
      <TableCustomHeader<BangDsPhieuModel>
        tableProps={props}
        title={useCustomIntl("FAI.PATIENT.CODE")}
        className="text-center text-light w-80px"
      />
    ),
    id: 'maBN',
    Cell: ({ ...props }) => (
      <div className='text-center'>{props.data[props.row.index].ipm}</div>
    )
  },
  {
    Header: (props) => (
      <TableCustomHeader<BangDsPhieuModel>
        tableProps={props}
        title={useCustomIntl("FAI.PATIENT.NAME")}
        className="text-center text-light w-150px"
      />
    ),
    id: 'hoTen',
    Cell: ({ ...props }) => (
      <div className='text-center'>{props.data[props.row.index].hoTen}</div>
    )
  },
  {
    Header: (props) => (
      <TableCustomHeader<BangDsPhieuModel>
        tableProps={props}
        title={useCustomIntl("FAI.PRICE")}
        className="text-center text-light w-80px"
      />
    ),
    id: 'soTien',
    Cell: ({ ...props }) => (
      <div className='text-center'>{props.data[props.row.index].soTien}</div>
    )
  },
  {
    Header: (props) => (
      <TableCustomHeader<BangDsPhieuModel>
        tableProps={props}
        title={useCustomIntl("FAI.VOUCHER.TYPE")}
        className="text-center text-light w-120px"
      />
    ),
    id: 'loaiPhieu',
    Cell: ({ ...props }) => (
      <div className='text-center'>{props.data[props.row.index].loaiPhieu}</div>
    )
  },
  {
    Header: (props) => (
      <TableCustomHeader<BangDsPhieuModel>
        tableProps={props}
        title={useCustomIntl("FAI.PAYMENT.DATE")}
        className="text-center text-light min-w-80px"
      />
    ),
    id: 'ngayThanhToanh',
    Cell: ({ ...props }) => (
      <div className='text-center min-w-80px'>{props.data[props.row.index].ngayThanhToanh}</div>
    )
  },
  {
    Header: (props) => (
      <TableCustomHeader<BangDsPhieuModel>
        tableProps={props}
        title={useCustomIntl("FAI.STATUS")}
        className="text-center text-light min-w-80px"
      />
    ),
    id: 'trangThai',
    Cell: ({ ...props }) => (
      <div className='min-w-60px  text-center'>{props.data[props.row.index].trangThai}</div>
    )
  },
]

export { BangDanhSachPhieuColumn }
