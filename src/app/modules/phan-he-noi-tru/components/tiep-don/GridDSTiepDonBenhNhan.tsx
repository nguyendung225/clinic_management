import React from 'react'
import { TableCustom } from '../../../component/table-custom/TableCustom';
import DsBenhNhanColumn from './DsTiepDonBenhNhanColumn';
import { TiepDonBenhNhanInfo } from '../../models/TiepDonModels';
import { fakeData } from '../../const/PhanHeNoitruConst';

type Props = {}

const GridDSTiepDonBenhNhan = (props: Props) => {
    return (
        <TableCustom<TiepDonBenhNhanInfo>
            data={fakeData}
            columns={DsBenhNhanColumn}
            compact={true}
        />
    )
}

export default GridDSTiepDonBenhNhan;