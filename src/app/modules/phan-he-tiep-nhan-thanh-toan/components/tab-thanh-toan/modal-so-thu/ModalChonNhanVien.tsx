import { Button, Modal } from 'react-bootstrap'
import { columnDsNhanVien } from './ColumnModalChonNhanVien';
import { fakeDataDsNhanVien } from '../../fakeData';
import { IDsNhanVien } from '../../../models/SoThuModel';
import { Dispatch, SetStateAction, useState } from 'react';
import CombinedTable from '../../../../component/table/combined-table/CombinedTable';

type Props = {
  show: boolean;
  handleCloseDialog: () => void;
  setListNhanVien: Dispatch<SetStateAction<IDsNhanVien[]>>
}

const ModalChonNhanVien = ({ show, handleCloseDialog, setListNhanVien }: Props) => {
      const [selectRowData, setSelectedRowData] = useState<IDsNhanVien[]>([]);
  
      const handleSubmit = () => {
        setListNhanVien(selectRowData);
        handleCloseDialog();
      }

  return (
    <div>
      <Modal centered show={show} onHide={handleCloseDialog} className='dialog-background' size='xl'>
        <Modal.Header closeButton className='py-4'>
          <Modal.Title>
            Chọn nhân viên
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <CombinedTable userColumns={columnDsNhanVien} data={fakeDataDsNhanVien} selectedTable treeTable getRowsSelected={setSelectedRowData}/>
        </Modal.Body>

        <Modal.Footer className='py-3'>  
          <Button
            className="btn-fill"
          >
            Chọn nhân viên hiện tại
          </Button>
          <Button
            className="btn-fill"
          >
            Hiện nhân viên đã chọn
          </Button>
          <Button
            className="btn-fill"
            onClick={handleSubmit}
          >
            Lưu
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ModalChonNhanVien