import { FormCheck } from 'react-bootstrap'
import InputSearch from '../../../component/InputSearch'
import { TableCustom } from '../../../component/table/table-custom/TableCustom'
import { SELECTION_MODE } from '../../../utils/Constant'
import { fakeDataThanhToan } from '../fakeData'
import { DichVuColumn } from './ColumnDichVu'

type Props = {}

const TableDichVu = (props: Props) => {
  return (
    <div>
      <InputSearch
        handleChange={() => { }}
        placeholder='Tìm kiếm'
      />

      <TableCustom className='h-table-dich-vu-chuyen-khoa' columns={DichVuColumn} data={fakeDataThanhToan} selectionMode={SELECTION_MODE.MULTI} />

      <div className='d-flex ps-2 bg-light border-bottom'>
        <FormCheck type='radio' label="(Mặc định)" className='me-5' />
        <FormCheck type='radio' label="BHYT" className='me-5' />
        <FormCheck type='radio' label="BHYT + DV" className='me-5' />
        <FormCheck type='radio' label="Viện phí" className='me-5' />
        <FormCheck type='radio' label="Dịch vụ" className='me-5' />
      </div>
    </div>
  )
}

export default TableDichVu