import { TableCustom } from '../../../../component/table/table-custom/TableCustom'
import { fakeDataXML3 } from '../../fakeData'
import { XML3Column } from './XMLColumns'

type Props = {}

const TabXML3 = (props: Props) => {
  return (
    <div>
      <TableCustom columns={XML3Column} data={fakeDataXML3} />
    </div>
  )
}

export default TabXML3