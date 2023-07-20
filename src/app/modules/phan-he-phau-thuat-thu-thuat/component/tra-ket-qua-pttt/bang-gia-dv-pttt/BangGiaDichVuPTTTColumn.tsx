// @ts-nocheck
import { Column } from 'react-table'
import { useIntl } from 'react-intl'
import { TableCustomHeader } from "../../../../component/table-custom/columns/TableCustomHeader";
import { ChiTietGiaDichVuPTTTModel } from "../../../model/GiaDichVuPTTTModel";
function useCustomIntl(messageId: string) {
  const intl = useIntl()
  return intl.formatMessage({ id: messageId })
}
const GiaDichVuPTTTColumn: ReadonlyArray<Column<ChiTietGiaDichVuPTTTModel>> = [
  {
    Header: (props) => (
      <TableCustomHeader<ChiTietGiaDichVuPTTTModel>
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
      <TableCustomHeader<ChiTietGiaDichVuPTTTModel>
        tableProps={props}
        title={useCustomIntl("PTTT.PRICE.CODE")}
        className="text-center text-light w-60px"
      />
    ),
    id: 'maDV',
    Cell: ({ ...props }) => (
      <div className='min-w-60px text-center'>{props.data[props.row.index].maDV}</div>
    )
  },
  {
    Header: (props) => (
      <TableCustomHeader<ChiTietGiaDichVuPTTTModel>
        tableProps={props}
        title={useCustomIntl("PTTT.PRICE.NAME")}
        className="text-center text-light w-150px"
      />
    ),
    id: 'tenDV',
    Cell: ({ ...props }) => (
      <div className='text-center'>{props.data[props.row.index].tenDV}</div>
    )
  },
  {
    Header: (props) => (
      <TableCustomHeader<ChiTietGiaDichVuPTTTModel>
        tableProps={props}
        title={useCustomIntl("PTTT.PRICE.QUANTITY")}
        className="text-center text-light w-20px"
      />
    ),
    id: 'soLuong',
    Cell: ({ ...props }) => (
      <div className='text-center'>{props.data[props.row.index].soLuong}</div>
    )
  },
  {
    Header: (props) => (
      <TableCustomHeader<ChiTietGiaDichVuPTTTModel>
        tableProps={props}
        title={useCustomIntl("PTTT.PRICE.TYPE")}
        className="text-center text-light w-120px"
      />
    ),
    id: 'loaiPTTT',
    Cell: ({ ...props }) => (
      <div className='text-center'>{props.data[props.row.index].loaiPTTT}</div>
    )
  },
  {
    Header: (props) => (
      <TableCustomHeader<ChiTietGiaDichVuPTTTModel>
        tableProps={props}
        title={useCustomIntl("PTTT.PRICE.RATE")}
        className="text-center text-light w-40px"
      />
    ),
    id: 'tyLe',
    Cell: ({ ...props }) => (
      <div className='text-center'>{props.data[props.row.index].tyLe}</div>
    )
  },
  {
    Header: (props) => (
      <TableCustomHeader<ChiTietGiaDichVuPTTTModel>
        tableProps={props}
        title={useCustomIntl("PTTT.PRICE.COST")}
        className="text-center text-light w-60px"
      />
    ),
    id: 'tienChiTra',
    Cell: ({ ...props }) => (
      <div className='text-center'>{props.data[props.row.index].tienChiTra}</div>
    )
  },
  {
    Header: (props) => (
      <TableCustomHeader<ChiTietGiaDichVuPTTTModel>
        tableProps={props}
        title={useCustomIntl("PTTT.STATUS")}
        className="text-center text-light w-80px"
      />
    ),
    id: 'trangThai',
    Cell: ({ ...props }) => (
      <div className='text-center'>{props.data[props.row.index].trangThai}</div>
    )
  },
  {
    Header: (props) => (
      <TableCustomHeader<ChiTietGiaDichVuPTTTModel>
        tableProps={props}
        title={useCustomIntl("PTTT.PRICE.BY")}
        className="text-center text-light w-100px"
      />
    ),
    id: 'nguoiLap',
    Cell: ({ ...props }) => (
      <div className='text-center'>{props.data[props.row.index].nguoiLap}</div>
    )
  },
  {
    Header: (props) => (
      <TableCustomHeader<ChiTietGiaDichVuPTTTModel>
        tableProps={props}
        title={useCustomIntl("PTTT.NOTE")}
        className="text-center text-light w-100px"
      />
    ),
    id: 'ghiChu',
    Cell: ({ ...props }) => (
      <div className='text-center'>{props.data[props.row.index].ghiChu}</div>
    )
  },
]

export { GiaDichVuPTTTColumn }
