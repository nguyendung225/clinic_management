import { TableCustomV2 } from '../../../component/table-custom-v2/TableCustomV2'
import { ThuocColumns } from './ThuocColumns'
import { ThuocInfo } from '../../models/DSBenhNhanKhamBenhModels'
import { Button, Col, Form, Row } from 'react-bootstrap'

type Props = {}

export const GridThuoc = (props: Props) => {
  return (
    <div>
      <Form>
        <Form.Group as={Row}>
          <Col sm="2" className='spaces pr-0 pb-5'>
            <Form.Control className='customs-input' placeholder="Dược"></Form.Control>
          </Col>
          <Col sm="1" className='spaces pr-0'>
            <Form.Control className='customs-input pl-0' placeholder="Sáng"></Form.Control>
          </Col>
          <Col sm="1" className='spaces pr-0'>
            <Form.Control className='customs-input pl-0' placeholder="Trưa"></Form.Control>
          </Col>
          <Col sm="1" className='spaces pr-0'>
            <Form.Control className='customs-input pl-0' placeholder="Chiều"></Form.Control>
          </Col>
          <Col sm="1" className='spaces pr-0'>
            <Form.Control className='customs-input pl-0' placeholder="Tối"></Form.Control>
          </Col>
          <Col sm="2" className='spaces pr-0'>
            <Form.Control className='customs-input' placeholder="Số ngày"></Form.Control>
          </Col>
          <Col sm="2" className='spaces pr-0'>
            <Form.Control className='customs-input' placeholder="Số lượng"></Form.Control>
          </Col>
          <Col sm="2">
            <Form.Control className='customs-input' placeholder="Đơn giá"></Form.Control>
          </Col>
          <Col sm="2" className='spaces pr-0'>
            <Form.Control className='customs-input' placeholder="Thành tiền"></Form.Control>
          </Col>
          <Col sm="2" className='spaces pr-0'>
            <Form.Control className='customs-input' placeholder="Đường dùng"></Form.Control>
          </Col>
          <Col sm="2" className='spaces pr-0'>
            <Form.Control className='customs-input' placeholder="Loại thuốc"></Form.Control>
          </Col>
          <Col sm="2" className='spaces pr-0'>
            <Form.Control className='customs-input' placeholder="Cách dùng"></Form.Control>
          </Col>
          <Col sm="2" className='spaces pr-0'>
            <Form.Control className='customs-input' placeholder="Ghi chú"></Form.Control>
          </Col>
          <Col sm="1" className='spaces pr-0'>
            <Button className="btn btn-primary p-2 mb-2 w-80px">Thêm</Button>
          </Col>
          <Col sm="1" className='spaces pl-4'>
            <Button className="btn bg-light text-dark p-2 mb-2 w-60px">Xóa</Button>
          </Col>
        </Form.Group>
      </Form>
      <TableCustomV2<ThuocInfo>
        data={[]}
        columns={ThuocColumns}
      />
    </div>
  )
}

export default GridThuoc