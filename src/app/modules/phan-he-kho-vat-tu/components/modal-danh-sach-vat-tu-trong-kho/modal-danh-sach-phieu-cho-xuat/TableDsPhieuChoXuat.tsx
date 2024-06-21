import InputSearch from '../../../../component/InputSearch'
import { TableCustom } from '../../../../component/table/table-custom/TableCustom'
import { dsPhieuChoXuat } from '../../../const/FakeData'
import { DsPhieuChoXuatColumn } from './DsPhieuChoXuatColumn'

type Props = {}

const TableDsPhieuChoXuat = (props: Props) => {
  return (
    <div>
      <InputSearch
        handleChange={() => { }}
        placeholder='Tìm kiếm'
      />

      <TableCustom className='h-table-lich-su-nhap-xuat' columns={DsPhieuChoXuatColumn} data={dsPhieuChoXuat} />
    </div>
  )
}

export default TableDsPhieuChoXuat