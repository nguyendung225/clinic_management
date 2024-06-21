import { TableCustom } from '../../../component/table/table-custom/TableCustom'
import { chuyenKhoaColumn } from './Columns'

type Props = {}

const TabChuyenKhoa = (props: Props) => {
  return (
    <div>
      <TableCustom columns={chuyenKhoaColumn} data={[]} />
    </div>
  )
}

export default TabChuyenKhoa