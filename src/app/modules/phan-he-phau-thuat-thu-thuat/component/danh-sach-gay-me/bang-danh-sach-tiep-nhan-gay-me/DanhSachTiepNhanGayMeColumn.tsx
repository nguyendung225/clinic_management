// @ts-nocheck
import { Column } from 'react-table'
import { useIntl } from 'react-intl'
import { DanhSachTiepNhanGayMeModel } from "../../../model/DanhSachTiepNhanGayMeModel";
import { TableCustomCell } from '../../../../component/table/components/TableCustomCell';
import { TableCustomHeader } from '../../../../component/table/components/TableCustomHeader';
function useCustomIntl(messageId: string) {
  const intl = useIntl()
  return intl.formatMessage({ id: messageId })
}
const DanhSachTiepNhanGayMeColumn: ReadonlyArray<Column<DanhSachTiepNhanGayMeModel>> = [
  {
    Header: (props) => (
      <TableCustomHeader<DanhSachTiepNhanGayMeModel>
        tableProps={props}
        title={useCustomIntl("TABLE.INDEX")}
        className="text-center text-light align-middle bg-pri min-w-50px"
      />
    ),
    id: 'stt',
    Cell: ({ ...props }) => (
      <TableCustomCell 
      className='cell-first-child text-center'
      data={(props.row.index + 1).toString()} />
    )
  },
  {
    Header: (props) => (
      <TableCustomHeader<DanhSachTiepNhanGayMeModel>
        tableProps={props}
        title={useCustomIntl("PTTT.STATUS")}
        className="text-center text-light align-middle bg-pri min-w-200px"
      />
    ),
    id: 'status',
    Cell: ({ ...props }) => (
      <TableCustomCell
       className='text-center' 
       data={props.data[props.row.index].status} 
       />
    )
  },
  {
    Header: (props) => (
      <TableCustomHeader<DanhSachTiepNhanGayMeModel>
        tableProps={props}
        title={useCustomIntl("PTTT.PRICE.STT")}
        className="text-center text-light align-middle bg-pri min-w-150px"
      />
    ),
    id: 'soGoi',
    Cell: ({ ...props }) => (
      <TableCustomCell
       className='text-center' 
       data={props.data[props.row.index].soGoi} 
       />
    )
  },
  {
    Header: (props) => (
      <TableCustomHeader<DanhSachTiepNhanGayMeModel>
        tableProps={props}
        title={useCustomIntl("PTTT.CODE.CASE")}
        className="text-center text-light align-middle bg-pri min-w-150px"
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
      <TableCustomHeader<DanhSachTiepNhanGayMeModel>
        tableProps={props}
        title={useCustomIntl("PTTT.CODE.PATIENT")}
        className="text-center text-light align-middle bg-pri min-w-150px"
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
      <TableCustomHeader<DanhSachTiepNhanGayMeModel>
        tableProps={props}
        title={useCustomIntl("PTTT.NAME")}
        className="text-center text-light align-middle bg-pri min-w-200px"
      />
    ),
    id: 'tenBN',
    Cell: ({ ...props }) => (
      <TableCustomCell
       data={props.data[props.row.index].tenBN} 
       />
    )
  },
  {
    Header: (props) => (
      <TableCustomHeader<DanhSachTiepNhanGayMeModel>
        tableProps={props}
        title={useCustomIntl("PTTT.NUMBER")}
        className="text-center text-light align-middle bg-pri min-w-150px"
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
      <TableCustomHeader<DanhSachTiepNhanGayMeModel>
        tableProps={props}
        title={useCustomIntl("PTTT.APPOINTED.DOCTOR")}
        className="text-center text-light align-middle bg-pri min-w-200px"
      />
    ),
    id: 'bsChiDinh',
    Cell: ({ ...props }) => (
      <TableCustomCell
       data={props.data[props.row.index].bsChiDinh} 
       />
    )
  },
  {
    Header: (props) => (
      <TableCustomHeader<DanhSachTiepNhanGayMeModel>
        tableProps={props}
        title={useCustomIntl("PTTT.DEPARTMENT.MAIN")}
        className="text-center text-light align-middle bg-pri min-w-150px"
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
      <TableCustomHeader<DanhSachTiepNhanGayMeModel>
        tableProps={props}
        title={useCustomIntl("PTTT.APPOINTED.DEPARTMENT")}
        className="text-center text-light align-middle bg-pri min-w-150px"
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
]

export { DanhSachTiepNhanGayMeColumn }
