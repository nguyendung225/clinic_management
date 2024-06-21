// @ts-nocheck
import { Column } from 'react-table'
import { useIntl } from 'react-intl'
import { danhSachDichVuPTTT } from "../../../model/DanhSachDichVuPTTTModel";
import { TableCustomHeader } from '../../../../component/table/components/TableCustomHeader';
import { TableCustomCell } from '../../../../component/table/components/TableCustomCell';
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
      <TableCustomHeader<danhSachDichVuPTTT>
        tableProps={props}
        title={useCustomIntl("PTTT.STATUS")}
        className="text-center text-light min-w-150px"
      />
    ),
    id: 'status',
    Cell: ({ ...props }) => (
      <TableCustomCell
        className='min-w-60px  text-center'
        data={props.data[props.row.index].status}
      />
    )
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachDichVuPTTT>
        tableProps={props}
        title={useCustomIntl("PTTT.CODE.CASE")}
        className="text-center text-light min-w-150px"
      />
    ),
    id: 'maBA',
    Cell: ({ ...props }) => (
      <TableCustomCell
        className='text-center'
        data={props.data[props.row.index].maBA}
      />
    )
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachDichVuPTTT>
        tableProps={props}
        title={useCustomIntl("PTTT.CODE.PATIENT")}
        className="text-center text-light min-w-150px"
      />
    ),
    id: 'maBN',
    Cell: ({ ...props }) => (
      <TableCustomCell
        className='text-center'
        data={props.data[props.row.index].maBN}
      />
    )
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachDichVuPTTT>
        tableProps={props}
        title={useCustomIntl("PTTT.NAME")}
        className="text-center text-light min-w-150px"
      />
    ),
    id: 'tenBN',
    Cell: ({ ...props }) => (
      <TableCustomCell
        className='text-center'
        data={props.data[props.row.index].tenBN}
      />
    )
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachDichVuPTTT>
        tableProps={props}
        title={useCustomIntl("PTTT.NUMBER")}
        className="text-center text-light min-w-150px"
      />
    ),
    id: 'soPhieu',
    Cell: ({ ...props }) => (
      <TableCustomCell
        className='text-center'
        data={props.data[props.row.index].soPhieu}
      />
    )
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachDichVuPTTT>
        tableProps={props}
        title={useCustomIntl("PTTT.APPOINTED.DOCTOR")}
        className="text-center text-light min-w-150px"
      />
    ),
    id: 'bsChiDinh',
    Cell: ({ ...props }) => (
      <TableCustomCell
        className='text-center'
        data={props.data[props.row.index].bsChiDinh}
      />
    )
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachDichVuPTTT>
        tableProps={props}
        title={useCustomIntl("PTTT.APPOINTED.TIME")}
        className="text-center text-light min-w-150px"
      />
    ),
    id: 'tgChiDinh',
    Cell: ({ ...props }) => (
      <TableCustomCell
        className='text-center'
        data={props.data[props.row.index].tgChiDinh}
      />
    )
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachDichVuPTTT>
        tableProps={props}
        title={useCustomIntl("PTTT.DEPARTMENT.MAIN")}
        className="text-center text-light min-w-150px"
      />
    ),
    id: 'khoa',
    Cell: ({ ...props }) => (
      <TableCustomCell
        className='text-center'
        data={props.data[props.row.index].khoa}
      />
    )
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachDichVuPTTT>
        tableProps={props}
        title={useCustomIntl("PTTT.APPOINTED.DEPARTMENT")}
        className="text-center text-light min-w-150px"
      />
    ),
    id: 'phongChiDinh',
    Cell: ({ ...props }) => (
      <TableCustomCell
        className='text-center'
        data={props.data[props.row.index].phongChiDinh}
      />
    )
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachDichVuPTTT>
        tableProps={props}
        title={useCustomIntl("PTTT.DEPARTMENT.PERFORM")}
        className="text-center text-light min-w-150px"
      />
    ),
    id: 'phongThucHien',
    Cell: ({ ...props }) => (
      <TableCustomCell
        className='text-center'
        data={props.data[props.row.index].phongThucHien}
      />
    )
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachDichVuPTTT>
        tableProps={props}
        title={useCustomIntl("PTTT.ANESTHESIA.TIME")}
        className="text-center text-light min-w-150px"
      />
    ),
    id: 'tgGayMe',
    Cell: ({ ...props }) => (
      <TableCustomCell
        className='cell-last-child text-center'
        data={props.data[props.row.index].tgGayMe}
      />
    )
  },
]

export { DanhSachDichVu }
