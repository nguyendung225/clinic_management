import { Button, Modal } from "react-bootstrap"
import LabelRequired from "../../../component/LabelRequired";
import Autocomplete from "../../../component/AutocompleteObject";
import TextValidator from "../../../component/TextValidator";

type Props = {
  show: boolean;
  handleCloseDialog: () => void;
}

const ModalSuaNgayDieuTri = ({ show, handleCloseDialog }: Props) => {
  return (
    <Modal centered show={show} onHide={handleCloseDialog}>
      <Modal.Header closeButton>
        <Modal.Title>
          Sửa đợt thanh toán + ngày điều trị
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="d-flex mb-1">
          <LabelRequired label="Đợt thanh toán" className="min-w-100px" />
          <Autocomplete options={[]} />
        </div>

        <div className="d-flex">
          <LabelRequired label="Phiếu điều trị" className="min-w-100px" />
          <TextValidator type="datetime-local" />
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button className="btn-fill">Lưu</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalSuaNgayDieuTri