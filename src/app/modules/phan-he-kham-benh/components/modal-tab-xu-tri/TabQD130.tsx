import { Col, Row } from "react-bootstrap"
import LabelRequired from "../../../component/LabelRequired"
import TextValidator from "../../../component/TextValidator"

type Props = {}

const TabQD130 = (props: Props) => {
  return (
    <>
      <Row className="mb-1">
        <Col xl={6}>
          <LabelRequired label="Mã đình chỉ thai ghén" />
          <TextValidator />
        </Col>
        <Col xl={6}>
          <LabelRequired label="Nguyên nhân đình chỉ thai nghén" />
          <TextValidator />
        </Col>
      </Row>

      <Row className="mb-1">
        <Col xl={6}>
          <LabelRequired label="Thời gian đình chỉ thai ghén" />
          <TextValidator />
        </Col>
        <Col xl={6}>
          <LabelRequired label="Tuổi thai" />
          <TextValidator />
        </Col>
      </Row>

      <Row className="mb-1">
        <Col xl={6}>
          <LabelRequired label="Mã thủ trưởng đơn vị" />
          <TextValidator />
        </Col>
        <Col xl={6}>
          <LabelRequired label="Ngày chứng từ" />
          <TextValidator />
        </Col>
      </Row>

      <Row className="mb-1">
        <Col xl={6}>
          <LabelRequired label="Mã trưởng khoa" />
          <TextValidator />
        </Col>
        <Col xl={6}>
          <LabelRequired label="Tên trưởng khoa" />
          <TextValidator />
        </Col>
      </Row>

      <Row className="mb-1">
        <Col xl={6}>
          <LabelRequired label="Mã số định danh y tế (mã số BHXH) của cha" />
          <TextValidator />
        </Col>
        <Col xl={6}>
          <LabelRequired label="Mã số định danh y tế (mã số BHXH) của mẹ" />
          <TextValidator />
        </Col>
      </Row>

      <Row className="mb-1">
        <Col xl={6}>
          <LabelRequired label="Họ và tên cha" />
          <TextValidator />
        </Col>
        <Col xl={6}>
          <LabelRequired label="Họ và tên mẹ" />
          <TextValidator />
        </Col>
      </Row>

      <Row className="mb-1">
        <Col xl={6}>
          <LabelRequired label="Mã thẻ BHYT tạm thời của trẻ em" />
          <TextValidator />
        </Col>
        <Col xl={6}>
          <LabelRequired label="Số ngày nghỉ" />
          <TextValidator />
        </Col>
      </Row>

      <Row className="mb-1">
        <Col xl={6}>
          <LabelRequired label="Bắt đầu nghỉ ngoại trú" />
          <TextValidator />
        </Col>
        <Col xl={6}>
          <LabelRequired label="Kết thúc nghỉ ngoại trú" />
          <TextValidator />
        </Col>
      </Row>
    </>
  )
}

export default TabQD130