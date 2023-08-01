import { useContext } from 'react';
import { TableCustomV2 } from '../../../component/table-custom-v2/TableCustomV2';
import { PhanHeTiepDonContext } from '../../PhanHeTiepDonContext';
import { IBenhNhan } from '../../models/DSBenhNhanKhamBenhModels';
import DsBenhNhanColumn from './DsBenhNhanColumn';

const GridDsBenhNhan = () => {
  const { setBenhNhanInfo, benhNhanList } = useContext(PhanHeTiepDonContext);

  const handleSelectedBenhNhan = (benhNhanInfo: IBenhNhan[]) => {
    setBenhNhanInfo(benhNhanInfo[0]);
  };

  return (
    <TableCustomV2<IBenhNhan>
      data={benhNhanList}
      columns={DsBenhNhanColumn}
      selectionMode='single'
      getSelectedRowsData={handleSelectedBenhNhan}
    />
  );
};

export default GridDsBenhNhan;
