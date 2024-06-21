import { Button, Col, FormCheck, Modal, Row } from "react-bootstrap"
import LabelRequired from "../../../../component/LabelRequired";
import TextValidator from "../../../../component/TextValidator";
import Autocomplete from "../../../../component/AutocompleteObject";

type Props = {
  show: boolean;
  handleCloseDialog: () => void;
}

const ModalThongTinKhac = ({ show, handleCloseDialog }: Props) => {
  return (
    <Modal centered show={show} onHide={handleCloseDialog} size="xl">
      <Modal.Header closeButton>
        <Modal.Title>
          Thông tin khác
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Row>
          <Col xl={3}>
            <LabelRequired label="Số lượng thầu" />
            <TextValidator />
          </Col>

          <Col xl={3}>
            <LabelRequired label="Công bố" />
            <TextValidator type="date" />
          </Col>

          <Col xl={3}>
            <LabelRequired label="Mã hiệu" />
            <TextValidator />
          </Col>

          <Col xl={3}>
            <LabelRequired label="Từ ngày" />
            <TextValidator type="date" />
          </Col>
        </Row>

        <Row>
          <Col xl={3}>
            <LabelRequired label="Nhóm vật tư" />
            <TextValidator />
          </Col>

          <Col xl={3}>
            <LabelRequired label="loại thầu" />
            <Autocomplete options={[]}/>
          </Col>

          <Col xl={3}>
            <LabelRequired label="Hình thức thầu" />
            <Autocomplete options={[]}/>
          </Col>

          <Col xl={3} className="d-flex align-items-end">
            <FormCheck type="checkbox" label="YC trả vỏ vật tư" />
          </Col>
        </Row>

        <Row>
          <Col xl={3}>
            <LabelRequired label="VTYT tự sản xuất - Số quyết định" />
            <TextValidator />
          </Col>

          <Col xl={3}>
            <LabelRequired label="VTYT tự sản xuất - Năm quyết định" />
            <TextValidator />
          </Col>

          <Col xl={3}>
            <LabelRequired label="Số hộp đồng" />
            <TextValidator />
          </Col>

          <Col xl={3}>
            <LabelRequired label="Ngày hợp đồng" />
            <TextValidator type="date" />
          </Col>
        </Row>
      </Modal.Body>

      <Modal.Footer>
        <Button className="btn-fill">Lưu</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalThongTinKhac