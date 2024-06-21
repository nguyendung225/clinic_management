import { TableCustom } from '../../../../component/table/table-custom/TableCustom'
import { fakeDataXML2 } from '../../fakeData'
import { XML2Column } from './XMLColumns'

type Props = {}

const TabXML2 = (props: Props) => {
  return (
    <div>
      <TableCustom columns={XML2Column} data={fakeDataXML2}/>
    </div>
  )
}

export default TabXML2