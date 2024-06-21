import { Button, Col, Row } from "react-bootstrap"
import LabelRequired from "../../../component/LabelRequired"
import TextValidator from "../../../component/TextValidator"
import Autocomplete from "../../../component/AutocompleteObject"

type Props = {}

const TabThongTinRaVien = (props: Props) => {
  return (
    <>
      <Row className="mb-1">
        <Col xs={4} className="d-flex">
          <LabelRequired label="Thời gian ra viện" className="min-w-150px" />
          <TextValidator type="datetime-local" />
        </Col>
      </Row>

      <Row className="mb-1">
        <Col className="d-flex">
          <LabelRequired label="Bệnh chính - ICD10" className="min-w-150px" />
          <Autocomplete options={[]} />
        </Col>
      </Row>

      <Row className="mb-1">
        <Col className="d-flex">
          <LabelRequired label="Bệnh kèm theo - ICD10" className="min-w-150px" />
          <TextValidator as="textarea" rows={4} />
          <Button className="btn-fill ms-1 spaces W-40">Bệnh kèm theo</Button>
        </Col>
      </Row>

      <Row className="mb-1">
        <Col xs={5}>
          <LabelRequired label="Tình trạng bệnh nhân" />
          <TextValidator as="textarea" rows={4} />
        </Col>

        <Col xs={7}>
          <LabelRequired label="Quá trình bệnh lý và diễn biến lâm sàng" />
          <TextValidator as="textarea" rows={4} />
        </Col>
      </Row>

      <Row className="mb-1">
        <Col xs={5}>
          <LabelRequired label="Hướng điều trị tiếp theo" />
          <TextValidator as="textarea" rows={4} />
        </Col>

        <Col xs={7}>
          <div className="d-flex justify-content-between">
            <LabelRequired label="Tóm tắt kết quả KLS có giá trị chẩn đoán" />
            <a href="/" onClick={(e) => { e.preventDefault() }}><u>Chọn kết quả</u></a>
          </div>
          <TextValidator as="textarea" rows={4} />
        </Col>
      </Row>

      <Row className="mb-1">
        <Col xs={5}>
          <LabelRequired label="Lời dặn của bác sĩ" />
          <TextValidator as="textarea" rows={4} />
        </Col>

        <Col xs={7}>
          <LabelRequired label="Phương pháp điều trị" />
          <TextValidator as="textarea" rows={4} />
        </Col>
      </Row>

      <div className="d-flex">
        <div className="spaces min-w-165">
          <LabelRequired label="Ghi chú:" />
          <div>
            <a href="/" onClick={(e) => { e.preventDefault() }}><u>Lấy thông tin người nhà</u></a>
          </div>
          <div>
            <a href="/" onClick={(e) => { e.preventDefault() }}><u>Lấy thông tin nơi làm việc</u></a>
          </div>
        </div>
        <TextValidator as="textarea" rows={3} />
      </div>
    </>
  )
}

export default TabThongTinRaVien