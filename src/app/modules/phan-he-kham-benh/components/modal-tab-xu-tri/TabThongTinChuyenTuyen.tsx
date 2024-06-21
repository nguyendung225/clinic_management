import { Button, Col, FormCheck, Row } from "react-bootstrap"
import LabelRequired from "../../../component/LabelRequired"
import TextValidator from "../../../component/TextValidator"
import Autocomplete from "../../../component/AutocompleteObject"

type Props = {}

const TabThongTinChuyenTuyen = (props: Props) => {
  return (
    <>
      <Row>
        <Col xl={6}>
          <Row className="mb-1">
            <Col xs={4} className="pe-0">
              <LabelRequired label="Thời gian chuyển tuyến" />
              <TextValidator type="datetime-local" />
            </Col>

            <Col xs={8} className="">
              <LabelRequired label="Người chuyển tuyến" />
              <Autocomplete options={[]} />
            </Col>
          </Row>

          <Row className="mb-1">
            <LabelRequired label="Bệnh chính - ICD10" />
            <Autocomplete options={[]} />
          </Row>

          <Row className="mb-1">
            <LabelRequired label="Bệnh kèm theo - ICD10" className="min-w-150px" />
            <div className="d-flex">
              <TextValidator as="textarea" rows={3} />
              <Button className="btn-fill ms-1 spaces W-75">Bệnh kèm theo</Button>
            </div>
          </Row>

          <Row className="mb-1">
            <Col xs={4} className="pe-0">
              <LabelRequired label="Mã bênh viện" />
              <TextValidator type="text" />
            </Col>

            <Col xs={8} className="">
              <LabelRequired label="Tên bệnh viện" />
              <TextValidator type="text" />
            </Col>
          </Row>

          <Row className="mb-1">
            <LabelRequired label="Dấu hiệu lâm sàn" />
            <TextValidator as="textarea" rows={2} />
          </Row>

          <Row className="mb-1">
            <div className="d-flex justify-content-between">
              <LabelRequired label="Kết quả lâm sàng" />
              <a href="/" onClick={(e) => { e.preventDefault() }}><u>Chọn kết quả</u></a>
            </div>
            <TextValidator as="textarea" rows={3} />
          </Row>

          <Row className="mb-1">
            <LabelRequired label="Lời dặn bác sĩ" />
            <TextValidator as="textarea" rows={3} />
          </Row>

          <Row className="mb-1">
            <LabelRequired label="Ghi chú" />
            <TextValidator as="textarea" rows={3} />
          </Row>
        </Col>

        <Col xl={6}>
          <Row className="mb-1">
            <LabelRequired label="Phương pháp, thủ thuật, kỹ thuật, thuốc đã được sử dụng trong điều trị" />
            <TextValidator as="textarea" rows={2} />
          </Row>

          <Row className="mb-1">
            <LabelRequired label="Tình trạng người bệnh lúc chuyển tuyến" />
            <TextValidator as="textarea" rows={2} />
          </Row>

          <Row className="mb-1">
            <LabelRequired label="Hướng điều trị" />
            <TextValidator as="textarea" rows={2} />
          </Row>

          <Row className="mb-1">
            <LabelRequired label="Phương tiện vận chuyển" />
            <TextValidator />
          </Row>

          <Row className="mb-1">
            <LabelRequired label="Họ tên, chức danh người hộ tống" />
            <TextValidator />
          </Row>

          <Row className="mb-1">
            <div className="d-flex justify-content-between">
              <LabelRequired label="Hình thức chuyển tuyến" />
              <FormCheck type="radio" label="Chuyển đúng tuyến CMKT" />
              <FormCheck type="radio" label="Chuyển vượt tuyến CMKT" />
            </div>
            <TextValidator />
          </Row>

          <Row className="mb-1">
            <div className="d-flex">
              <LabelRequired label="Lý do chuyển" className="align-items-start min-w-85px" />
              <div className="w-100">
                <TextValidator />
                <FormCheck type="checkbox" label="Phù hợp với quy định chuyển tuyến" />
                <FormCheck type="checkbox" label="Không phù hợp với khả năng đáp ứng của cơ sở khám bệnh, chữa bệnh" />
              </div>
            </div>
          </Row>

          <Row className="mb-1">
            <LabelRequired label="Lý do chuyển tuyến của bác sĩ" />
            <Autocomplete options={[]} className="mb-1" />
            <TextValidator as="textarea" rows={2} />
          </Row>

          <Row className="mb-1">
            <LabelRequired label="Chuyển tuyến" />
            <Autocomplete options={[]} />
          </Row>

          <Row className="mb-1">
            <div className="d-flex justify-content-between">
              <LabelRequired label="Thông tin điều trị tuyến dưới" className="spaces min-w-180"/>
              <div className="d-flex">
                <LabelRequired label="Từ ngày" className="min-w-55px"/>
                <TextValidator type="date" className="spaces W-110"/>
              </div>
              <div className="d-flex">
                <LabelRequired label="Đến ngày" className="min-w-60px"/>
                <TextValidator type="date" className="spaces W-110"/>
              </div>
            </div>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default TabThongTinChuyenTuyen