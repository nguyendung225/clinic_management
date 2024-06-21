import { Button, Col, Modal, Row } from 'react-bootstrap'
import LabelRequired from '../../../component/LabelRequired';
import Autocomplete from '../../../component/AutocompleteObject';
import TextValidator from '../../../component/TextValidator';

type Props = {
  show: boolean;
  handleCloseDialog: () => void;
}

const ModalThemPhacDoDieuTri = ({ show, handleCloseDialog }: Props) => {
  return (
    <Modal centered show={show} onHide={handleCloseDialog}>
      <Modal.Header closeButton>
        <Modal.Title>
          Cập nhật phác đồ điều trị
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Row className='mb-1'>
          <Col xl={8}>
            <LabelRequired label='Người tạo' />
            <Autocomplete options={[]} />
          </Col>

          <Col xl={4}>
            <LabelRequired label='Số ngày điều trị' />
            <TextValidator type="number" />
          </Col>
        </Row>

        <Row className='mb-1'>
          <LabelRequired label='Tên phác đồ điều trị' />
          <TextValidator type="text" />
        </Row>

        <Row className='mb-1'>
          <LabelRequired label='Nhóm phác đồ' />
          <Autocomplete options={[]} />
        </Row>

        <Row className='mb-1'>
          <a href='/' onClick={(e) => { e.preventDefault() }}><u>Danh sách ICD10</u></a>
          <TextValidator type="text" as="textarea" />
        </Row>

        <Row className='mb-1'>
          <LabelRequired label='Ghi chú' />
          <TextValidator type="text" as="textarea" />
        </Row>
      </Modal.Body>

      <Modal.Footer>
        <Button className='btn-fill'>Lưu</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalThemPhacDoDieuTri