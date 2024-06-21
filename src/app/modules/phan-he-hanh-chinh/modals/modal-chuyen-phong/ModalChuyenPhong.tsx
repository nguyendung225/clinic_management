import { Button, Col, Modal, Row } from 'react-bootstrap';
import LabelRequired from '../../../component/LabelRequired';
import TextValidator from '../../../component/TextValidator';
import Autocomplete from '../../../component/AutocompleteObject';

type Props = {
  show: boolean;
  handleCloseDialog: () => void;
}

const ModalChuyenPhong = ({ show, handleCloseDialog }: Props) => {
  return (
    <Modal centered show={show} onHide={handleCloseDialog} size='lg'>
      <Modal.Header closeButton>
        <Modal.Title>
          Cập nhật thông tin điều trị
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Row className="mb-1">
          <Col>
            <LabelRequired label='Ngày cập nhật' />
            <TextValidator type="datetime-local" />
          </Col>
          <Col>
            <LabelRequired label='Khoa' />
            <Autocomplete options={[]} />
          </Col>
        </Row>

        <Row className="mb-1">
          <Col>
            <LabelRequired label='Phòng' />
            <Autocomplete options={[]} />
          </Col>
          <Col>
            <LabelRequired label='Buồng' />
            <Autocomplete options={[]} />
          </Col>
        </Row>

        <Row className="mb-1">
          <Col>
            <LabelRequired label='Giường' />
            <Autocomplete options={[]} />
          </Col>
          <Col>
            <LabelRequired label='Dịch vụ ngày giường' />
            <Autocomplete options={[]} />
          </Col>
        </Row>

        <Row className="mb-1">
          <Col>
            <LabelRequired label='Bác sĩ điều trị' />
            <Autocomplete options={[]} />
          </Col>
          <Col>
            <LabelRequired label='Loại bệnh án' />
            <Autocomplete options={[]} />
          </Col>
        </Row>

        <Row className="mb-1">
          <Col>
            <LabelRequired label='Chuẩn đoán vào khoa' />
            <div className='d-flex mb-1'>
              <Autocomplete options={[]} className='w-50 pe-3' />
              <div className='w-50 ps-3'>
                <a href='/' onClick={(e) => { e.preventDefault() }}><u>Sử dụng chẩn đoán ở khám bệnh</u></a>
              </div>
            </div>
            <TextValidator type="text" as="textarea" rows={2} className='w-100' />
          </Col>
        </Row>

        <Row className="mb-1">
          <Col>
            <div className='d-flex mb-1'>
              <LabelRequired label='Chẩn đoán kèm theo' />
              <Button className='btn-fill spaces h-25 ms-2'>Bệnh kèm theo</Button>
            </div>

            <TextValidator type="text" as="textarea" rows={2} />
          </Col>
        </Row>

        <Row className="mb-1">
        <div className='d-flex justify-content-between'>
          <LabelRequired label='Bệnh chính - YHCT' />
          <a href='/' onClick={(e) => { e.preventDefault() }}><u>Bệnh kèm theo - YHCT</u></a>
        </div>

        <div className='d-flex'>
        <Autocomplete options={[]} className='w-25' />
        <Autocomplete options={[]} className='' />
        </div>
        </Row>
      </Modal.Body>

      <Modal.Footer>
        <Button className='btn-fill'>Lưu</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalChuyenPhong