import DsBenhNhanColumn from './DsTiepDonBenhNhanColumn';
import { TiepDonBenhNhanInfo } from '../../models/TiepDonModels';
import { fakeData } from '../../const/PhanHeNoitruConst';
import { TableCustom } from '../../../component/table/table-custom/TableCustom';

type Props = {
  handleClickRowData: (data: any) => void;
};

const GridDSTiepDonBenhNhan = (props: Props) => {
    const { handleClickRowData } = props;
    return (
        <TableCustom<TiepDonBenhNhanInfo>
            data={fakeData}
            columns={DsBenhNhanColumn}
            selectionMode='single'
            getSelectedRowsData={handleClickRowData}
            maxHeight={450}
            minHeight={450}
        />
    )
}

export default GridDSTiepDonBenhNhan;