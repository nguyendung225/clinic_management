import { Col, Row } from 'react-bootstrap'
import { IPhongKham } from '../../../models/PhongKhamModel'
import { columnsThongTinPhongKham } from './ThongTinPhongKhamColumn'
import { useContext } from 'react'
import { AppContext } from '../../../../appContext/AppContext'
import { TableCustom } from '../../../../component/table/table-custom/TableCustom'
import { listPhongKham } from '../../fakeData'

type Props = {}

const TabThongTinPhongKham = (props: Props) => {
  const { currentTabChildren } = useContext(AppContext);
  
  const splitArray = (listPhongKham: IPhongKham[], size1: number, size2: number) => {
    const array1 = listPhongKham.slice(0, size1);
    const remainingArray = listPhongKham.slice(size1);
    const array2 = remainingArray.slice(0, size2);
    const array3 = remainingArray.slice(size2);

    return [array1, array2, array3];
  }

  const [array1, array2, array3] = splitArray(listPhongKham, 10, 10);

  return (
    <Row className="tableKhamBenh">
      <Col xl={4} className='p-1'>
        <TableCustom columns={columnsThongTinPhongKham} data={array1} />
      </Col>
      <Col xl={4} className='p-1'>
        <TableCustom columns={columnsThongTinPhongKham} data={array2} />
      </Col>
      <Col xl={4} className='p-1'>
        <TableCustom columns={columnsThongTinPhongKham} data={array3} />
      </Col>
    </Row>
  )
}

export default TabThongTinPhongKham