import { TableCustom } from '../../../component/table/table-custom/TableCustom'
import { DVKhacColumn } from './Columns'

type Props = {}

const TabDVKhac = (props: Props) => {
  return (
    <div>
      <TableCustom columns={DVKhacColumn} data={[]} />
    </div>
  )
}

export default TabDVKhac