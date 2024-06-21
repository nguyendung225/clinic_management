import React from 'react'
import InputSearch from '../../../../component/InputSearch'
import { TableCustom } from '../../../../component/table/table-custom/TableCustom'
import { DsVatTuColumn } from './ColumnDsVatTu'
import { mangDsVatTu } from '../../../const/FakeData'

type Props = {}

const TableDsVatTu = (props: Props) => {
  return (
    <div>
       <InputSearch
        handleChange={() => { }}
        placeholder='Tìm kiếm'
      />

      <TableCustom className='h-table-ds-vat-tu' columns={DsVatTuColumn} data={mangDsVatTu}/>
    </div>
  )
}

export default TableDsVatTu