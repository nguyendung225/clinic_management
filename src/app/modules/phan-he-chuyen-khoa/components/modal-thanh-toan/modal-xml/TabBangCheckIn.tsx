import React from 'react'
import { TableCustom } from '../../../../component/table/table-custom/TableCustom'
import { bangCheckInColumn } from './XMLColumns'
import { fakeDataBangCheckIn } from '../../fakeData'

type Props = {}

const TabBangCheckIn = (props: Props) => {
  return (
    <div>
      <TableCustom columns={bangCheckInColumn} data={fakeDataBangCheckIn}/>
    </div>
  )
}

export default TabBangCheckIn