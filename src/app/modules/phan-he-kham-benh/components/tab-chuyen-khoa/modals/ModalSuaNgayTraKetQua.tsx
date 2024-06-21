import { Button, Modal } from "react-bootstrap";
import LabelRequired from "../../../../component/LabelRequired";
import TextValidator from "../../../../component/TextValidator";
import { toast } from "react-toastify";

type Props = {
  show: boolean;
  handleCloseDialog: () => void;
}

const ModalSuaNgayTraKetQua = ({ show, handleCloseDialog }: Props) => {
  const handleSave = () => {
    // Nếu phiếu chưa được trả KQ thì sau khi lưu sẽ hiển thị thông báo. Còn nếu đã trả KQ thì thông tin sẽ được lưu vào cột “Kết thúc” ở bảng dịch vụ TabChuyenKhoa
    toast.warning("Phiếu chưa có ngày trả kết quả!")
  }

  return (
    <Modal centered show={show} onHide={handleCloseDialog}>
      <Modal.Header closeButton>
        <Modal.Title>
          Cập nhật ngày trả kết quả
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <LabelRequired label="Ngày trả kết quả" />
        <TextValidator type="datetime-local" />
      </Modal.Body>

      <Modal.Footer>
        <Button className='btn-fill' onClick={handleSave}>Lưu</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalSuaNgayTraKetQua