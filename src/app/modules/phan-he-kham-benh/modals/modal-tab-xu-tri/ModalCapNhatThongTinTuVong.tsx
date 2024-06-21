import { Button, Col, FormCheck, Modal, Row } from 'react-bootstrap'
import LabelRequired from '../../../component/LabelRequired'
import TextValidator from '../../../component/TextValidator'
import Autocomplete from '../../../component/AutocompleteObject';

type Props = {
  show: boolean;
  handleCloseDialog: () => void;
}

const ModalCapNhatThongTinTuVong = ({ show, handleCloseDialog }: Props) => {
  return (
    <Modal centered show={show} onHide={handleCloseDialog} size="xl">
      <Modal.Header closeButton>
        <Modal.Title>
          Cập nhật thông tin tử vong
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Row className="mb-1">
          <Col xl={5} className='d-flex'>
            <LabelRequired label="Thời gian ra viện" className='spaces min-w-170' />
            <TextValidator type="datetime-local" />
          </Col>

          <Col xl={4} className='d-flex'>
            <LabelRequired label="Thời điểm tử vong" className='spaces min-w-120' />
            <TextValidator type="datetime-local" />
          </Col>

          <Col xl={3}>
            <FormCheck type="checkbox" label="Cấp giấy chứng tử" />
          </Col>
        </Row>

        <Row className="mb-1">
          <Col xl={5} className='d-flex'>
            <LabelRequired label="Thời gian tử vong" className='spaces min-w-170' />
            <TextValidator type="datetime-local" />
          </Col>

          <Col xl={7} className='d-flex'>
            <LabelRequired label="Nguyên nhân" className='spaces min-w-120' />
            <Autocomplete options={[]} />
          </Col>
        </Row>

        <Row className="mb-1">
          <Col className='d-flex'>
            <LabelRequired label="Nguyên nhân chính" className='spaces min-w-170' />
            <Autocomplete options={[]} />
          </Col>
        </Row>

        <Row className="mb-1">
          <Col xl={5} className='d-flex'>
            <LabelRequired label="" className='spaces min-w-170' />
            <FormCheck type="checkbox" label="Khám nghiệm tử thi" />
          </Col>
        </Row>

        <Row className="mb-1">
          <Col xl={12} className='d-flex'>
            <LabelRequired label="Chẩn đoán giải phẫu tử thi" className='spaces min-w-170' />
            <TextValidator />
          </Col>
        </Row>

        <Row className="mb-1">
          <LabelRequired label="Quá trình bệnh lý và diễn biến lâm sàng" />
          <TextValidator as="textarea" rows={3} />
        </Row>

        <Row className="mb-1">
          <div className='d-flex justify-content-between'>
            <LabelRequired label="Tóm tắt kết quả CLS có giá trị chẩn đoán" />
            <a href="/" onClick={(e) => { e.preventDefault() }}><u>Chọn kết quả</u></a>
          </div>
          <TextValidator as="textarea" rows={3} />
        </Row>

        <Row className="mb-1">
          <LabelRequired label="Phương pháp điều trị" />
          <TextValidator as="textarea" rows={3} />
        </Row>

        <Row className="mb-1">
          <LabelRequired label="Lời dặn của bác sĩ" />
          <TextValidator as="textarea" rows={3} />
        </Row>
      </Modal.Body>

      <Modal.Footer>
        <Button className='btn-fill'>Cập nhật từ bệnh án</Button>
        <Button className='btn-fill'>Lưu</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalCapNhatThongTinTuVong