// @ts-nocheck
import { Column } from 'react-table'
import { useIntl } from 'react-intl'
import { ChiTietGiaDichVuPTTTModel } from "../../../model/GiaDichVuPTTTModel";
import { TableCustomHeader } from '../../../../component/table/components/TableCustomHeader';
import { TableCustomCell } from '../../../../component/table/components/TableCustomCell';
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
        className="text-center text-light min-w-50px"
      />
    ),
    id: 'stt',
    Cell: ({ ...props }) => (
      <TableCustomCell
        className='cell-first-child text-center'
        data={props.row.index + 1}
      />
    )
  },
  {
    Header: (props) => (
      <TableCustomHeader<ChiTietGiaDichVuPTTTModel>
        tableProps={props}
        title={useCustomIntl("PTTT.PRICE.CODE")}
        className="text-center text-light min-w-150px"
      />
    ),
    id: 'maDV',
    Cell: ({ ...props }) => (
      <TableCustomCell
        className='min-w-60px text-center'
        data={props.data[props.row.index].maDV}
      />
    )
  },
  {
    Header: (props) => (
      <TableCustomHeader<ChiTietGiaDichVuPTTTModel>
        tableProps={props}
        title={useCustomIntl("PTTT.PRICE.NAME")}
        className="text-center text-light min-w-150px"
      />
    ),
    id: 'tenDV',
    Cell: ({ ...props }) => (
      <TableCustomCell
        className='text-center'
        data={props.data[props.row.index].tenDV}
      />
    )
  },
  {
    Header: (props) => (
      <TableCustomHeader<ChiTietGiaDichVuPTTTModel>
        tableProps={props}
        title={useCustomIntl("PTTT.PRICE.QUANTITY")}
        className="text-center text-light min-w-150px"
      />
    ),
    id: 'soLuong',
    Cell: ({ ...props }) => (
      <TableCustomCell
        className='text-center'
        data={props.data[props.row.index].soLuong}
      />
    )
  },
  {
    Header: (props) => (
      <TableCustomHeader<ChiTietGiaDichVuPTTTModel>
        tableProps={props}
        title={useCustomIntl("PTTT.PRICE.TYPE")}
        className="text-center text-light min-w-150px"
      />
    ),
    id: 'loaiPTTT',
    Cell: ({ ...props }) => (
      <TableCustomCell
        className='text-center'
        data={props.data[props.row.index].loaiPTTT}
      />
    )
  },
  {
    Header: (props) => (
      <TableCustomHeader<ChiTietGiaDichVuPTTTModel>
        tableProps={props}
        title={useCustomIntl("PTTT.PRICE.RATE")}
        className="text-center text-light min-w-150px"
      />
    ),
    id: 'tyLe',
    Cell: ({ ...props }) => (
      <TableCustomCell
        className='text-center'
        data={props.data[props.row.index].tyLe}
      />
    )
  },
  {
    Header: (props) => (
      <TableCustomHeader<ChiTietGiaDichVuPTTTModel>
        tableProps={props}
        title={useCustomIntl("PTTT.PRICE.COST")}
        className="text-center text-light min-w-150px"
      />
    ),
    id: 'tienChiTra',
    Cell: ({ ...props }) => (
      <TableCustomCell
        className='text-center'
        data={props.data[props.row.index].tienChiTra}
      />
    )
  },
  {
    Header: (props) => (
      <TableCustomHeader<ChiTietGiaDichVuPTTTModel>
        tableProps={props}
        title={useCustomIntl("PTTT.STATUS")}
        className="text-center text-light min-w-150px"
      />
    ),
    id: 'trangThai',
    Cell: ({ ...props }) => (
      <TableCustomCell
        className='text-center'
        data={props.data[props.row.index].trangThai}
      />
    )
  },
  {
    Header: (props) => (
      <TableCustomHeader<ChiTietGiaDichVuPTTTModel>
        tableProps={props}
        title={useCustomIntl("PTTT.PRICE.BY")}
        className="text-center text-light min-w-150px"
      />
    ),
    id: 'nguoiLap',
    Cell: ({ ...props }) => (
      <TableCustomCell
        className='text-center'
        data={props.data[props.row.index].nguoiLap}
      />
    )
  },
  {
    Header: (props) => (
      <TableCustomHeader<ChiTietGiaDichVuPTTTModel>
        tableProps={props}
        title={useCustomIntl("PTTT.NOTE")}
        className="text-center text-light min-w-150px"
      />
    ),
    id: 'ghiChu',
    Cell: ({ ...props }) => (
      <TableCustomCell
        className='text-center'
        data={props.data[props.row.index].ghiChu}
      />
    )
  },
]

export { GiaDichVuPTTTColumn }
