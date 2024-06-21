import { Tab, Tabs } from 'react-bootstrap';
import { IDichVu } from '../../models/IDichVu';
import {
  dichVuCLS,
  dichVuKhac,
  dichVuMau,
  dichVuThuoc
} from '../../const/PhanHeNoitruConst';
import DichVuColumn from './DichVuColumn';
import { PhanHeNoiTruContext } from '../../PhanHeNoiTruContext';
import { useContext } from 'react';
import { TableCustom } from '../../../component/table/table-custom/TableCustom';

export const TabDichVu = () => {
  const { servicesByPatient } = useContext(PhanHeNoiTruContext);
  return (
    <div className='phongbenh__dichvu form-border border-top-0 border-bottom-0 flex-1'>
      <Tabs className='tabs p-2'>
        <Tab eventKey={'0'} title='Tất cả'>
          <div className='p-2'>
            <TableCustom<IDichVu>
              data={servicesByPatient}
              columns={DichVuColumn}
              selectionMode='single'
            />
          </div>
        </Tab>
        <Tab eventKey={'1'} title='CLS'>
          <div className='p-2'>
            <TableCustom<IDichVu>
              data={dichVuCLS}
              columns={DichVuColumn}
              selectionMode='single'
            />
          </div>
        </Tab>
        <Tab eventKey={'2'} title='Thuốc'>
          <div className="p-2">
            <TableCustom<IDichVu>
              data={dichVuThuoc}
              columns={DichVuColumn}
              selectionMode='single'
            />
          </div>
        </Tab>
        <Tab eventKey={'3'} title='Máu'>
          <div className="p-2">
            <TableCustom<IDichVu>
              data={dichVuMau}
              columns={DichVuColumn}
              selectionMode='single'
            />
          </div>
        </Tab>
        <Tab eventKey={'4'} title='Khác'>
          <div className="p-2">
            <TableCustom<IDichVu>
              data={dichVuKhac}
              columns={DichVuColumn}
              selectionMode='single'
            />
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};
