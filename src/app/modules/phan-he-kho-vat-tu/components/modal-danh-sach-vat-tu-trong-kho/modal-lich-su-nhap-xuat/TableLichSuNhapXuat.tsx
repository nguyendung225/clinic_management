import { useState } from 'react'
import InputSearch from '../../../../component/InputSearch'
import { TableCustom } from '../../../../component/table/table-custom/TableCustom'
import { lichSuNhapXuat } from '../../../const/FakeData'
import { LichSuNhapXuatColumn } from './LichSuNhapXuatColumn'
import DialogThongTinPhieu from '../../DialogThongTinPhieu'

type Props = {}

const TableLichSuNhapXuat = (props: Props) => {
  const [openModalThongTinPhieu, setOpenModalThongTinPhieu] = useState(false);
  const [thongTinPhieu, setThongTinPhieu] = useState<any>();
  
  const handleDoubleClick = (row: any) => {
    setThongTinPhieu(row?.original)
    setOpenModalThongTinPhieu(true);
  }

  return (
    <div>
      <InputSearch
        handleChange={() => { }}
        placeholder='Tìm kiếm'
      />

      <TableCustom className='h-table-lich-su-nhap-xuat' columns={LichSuNhapXuatColumn} data={lichSuNhapXuat} handleDoubleClick={handleDoubleClick}/>

      {
        openModalThongTinPhieu && <DialogThongTinPhieu TTPhieu={thongTinPhieu} handleClose={() => setOpenModalThongTinPhieu(false)} />
      }
    </div>
  )
}

export default TableLichSuNhapXuat