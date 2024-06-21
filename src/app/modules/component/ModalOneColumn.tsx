import { Button, Modal } from "react-bootstrap"
import LabelRequired from "./LabelRequired";
import TextValidator from "./TextValidator";

type Props = {
  show: boolean;
  handleCloseDialog: () => void;
  title: string;
  label: string;
  type: string;
  name: string;
}

const ModalOneColumn = ({ show, handleCloseDialog, title, label, type, name }: Props) => {
  return (
    <Modal centered show={show} onHide={handleCloseDialog} size="sm">
      <Modal.Header closeButton>
        <Modal.Title>
          {title}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div>
          <LabelRequired label={label} />
          <TextValidator name={name} type={type ? type : "text"} />
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button className="btn-fill">Lưu</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalOneColumn