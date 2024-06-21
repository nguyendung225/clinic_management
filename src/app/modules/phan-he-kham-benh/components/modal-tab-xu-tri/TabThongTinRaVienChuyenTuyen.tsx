import { Col, Row } from "react-bootstrap"
import LabelRequired from "../../../component/LabelRequired"
import TextValidator from "../../../component/TextValidator"

type Props = {}

const TabThongTinRaVienChuyenTuyen = (props: Props) => {
  return (
    <>
      <Row className="mb-1">
        <Col xs={6}>
          <LabelRequired label="Tình trạng bệnh nhân" />
          <TextValidator as="textarea" rows={4} />
        </Col>

        <Col xs={6}>
          <LabelRequired label="Quá trình bệnh lý và diễn biến lâm sàng" />
          <TextValidator as="textarea" rows={4} />
        </Col>
      </Row>

      <Row className="mb-1">
        <Col xs={6}>
          <LabelRequired label="Hướng điều trị tiếp theo" />
          <TextValidator as="textarea" rows={4} />
        </Col>

        <Col xs={6}>
          <div className="d-flex justify-content-between">
            <LabelRequired label="Tóm tắt kết quả CLS có giá trị chẩn đoán" />
            <a href="/" onClick={(e) => { e.preventDefault() }}><u>Chọn kết quả</u></a>
          </div>
          <TextValidator as="textarea" rows={4} />
        </Col>
      </Row>

      <Row className="mb-1">
        <Col xs={6}>
          <LabelRequired label="Lời dặn của bác sĩ" />
          <TextValidator as="textarea" rows={4} />
        </Col>

        <Col xs={6}>
          <LabelRequired label="Phương pháp điều trị" />
          <TextValidator as="textarea" rows={4} />
        </Col>
      </Row>
    </>
  )
}

export default TabThongTinRaVienChuyenTuyen