import React from 'react'
import { TableCustom } from '../../../../component/table/table-custom/TableCustom'
import { bangCheckInColumn } from './XMLColumns'
import { fakeDataBangCheckIn } from '../../fakeData'

type Props = {}

const TabXML1 = (props: Props) => {

  return (
    <div>
      <TableCustom columns={bangCheckInColumn} data={fakeDataBangCheckIn}/>
    </div>
  )
}

export default TabXML1