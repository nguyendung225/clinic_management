import React from 'react'
import { TableCustomV2 } from '../../../component/table-custom-v2/TableCustomV2'
import { LichSuKhamInfo } from '../../models/DSBenhNhanKhamBenhModels'
import { LichSuKhamColumns } from './LichSuKhamColumns'

type Props = {}

const GridLichSuKham = (props: Props) => {
    return (
        <TableCustomV2<LichSuKhamInfo>
            data={[]}
            columns={LichSuKhamColumns}
        />
    )
}

export default GridLichSuKham