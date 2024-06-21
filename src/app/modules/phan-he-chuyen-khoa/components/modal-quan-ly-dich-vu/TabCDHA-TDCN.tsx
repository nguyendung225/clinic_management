import React from 'react'
import { TableCustom } from '../../../component/table/table-custom/TableCustom'
import { CDHAColumn } from './Columns'

type Props = {}

const TabCDHATDCN = (props: Props) => {
  return (
    <div>
      <TableCustom columns={CDHAColumn} data={[]}/>
    </div>
  )
}

export default TabCDHATDCN