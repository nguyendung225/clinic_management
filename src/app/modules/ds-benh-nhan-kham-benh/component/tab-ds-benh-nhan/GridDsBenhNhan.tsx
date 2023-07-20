import React from 'react'
import { TableCustom } from '../../../component/table-custom/TableCustom';
import { BenhNhanKhamBenhInfo, fakeData } from '../../models/DSBenhNhanKhamBenhModels';
import DsBenhNhanColumn from './DsBenhNhanColumn';
import { TableCustomV2 } from '../../../component/table-custom-v2/TableCustomV2';

type Props = {}

const GridDsBenhNhan = (props: Props) => {
    return (
        <TableCustomV2<BenhNhanKhamBenhInfo>
            data={fakeData}
            columns={DsBenhNhanColumn}
        />
    )
}

export default GridDsBenhNhan;