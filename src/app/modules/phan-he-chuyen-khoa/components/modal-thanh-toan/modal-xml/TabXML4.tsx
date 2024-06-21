import { TableCustom } from '../../../../component/table/table-custom/TableCustom'
import { fakeDataXML4 } from '../../fakeData'
import { XML4Column } from './XMLColumns'

type Props = {}

const TabXML4 = (props: Props) => {
  return (
    <div>
      <TableCustom columns={XML4Column} data={fakeDataXML4} />
    </div>
  )
}

export default TabXML4