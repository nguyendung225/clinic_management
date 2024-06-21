import React from 'react'
import { Col, Row } from 'react-bootstrap'
import LabelRequired from '../../../component/LabelRequired'
import CustomTextarea from '../../../component/custom-textarea/CustomTextarea'
import { TableCustom } from '../../../component/table/table-custom/TableCustom'
import { xetNghiemColumn } from './Columns'

type Props = {}

const TabXetNghiem = (props: Props) => {
  return (
    <div>
        <TableCustom columns={xetNghiemColumn} data={[]}/>
    </div>
  )
}

export default TabXetNghiem