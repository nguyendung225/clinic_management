import { useContext } from 'react';
import { TableCustomV2 } from '../../../component/table-custom-v2/TableCustomV2';
import { PhanHeTiepDonContext } from '../../PhanHeTiepDonContext';
import {
  BenhNhanKhamBenhInfo
} from '../../models/DSBenhNhanKhamBenhModels';
import DsBenhNhanColumn from './DsBenhNhanColumn';

const GridDsBenhNhan = () => {
  const { setBenhNhanInfo, benhNhanList } = useContext(PhanHeTiepDonContext);

  const handleSelectedBenhNhan = (benhNhanInfo: BenhNhanKhamBenhInfo[]) => {
    setBenhNhanInfo(benhNhanInfo[0]);
  };

  return (
    <TableCustomV2<BenhNhanKhamBenhInfo>
      data={benhNhanList}
      columns={DsBenhNhanColumn}
      selectionMode='single'
      getSelectedRowsData={handleSelectedBenhNhan}
    />
  );
};

export default GridDsBenhNhan;
