import { TableCustom } from '../../../../component/table/table-custom/TableCustom'
import { fakeDataXML5 } from '../../fakeData'
import { XML5Column } from './XMLColumns'

type Props = {}

const TabXML5 = (props: Props) => {
  return (
    <div>
      <TableCustom columns={XML5Column} data={fakeDataXML5} />
    </div>
  )
}

export default TabXML5