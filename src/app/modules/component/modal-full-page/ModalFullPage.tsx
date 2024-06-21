import { Modal } from "react-bootstrap"

type Props = {
  show: boolean;
  handleCloseDialog: () => void;
  children: JSX.Element;
  title: string;
}

const ModalFullPage = ({ show, handleCloseDialog, children, title }: Props) => {
  return (
    <Modal
      className="modal-thuoc page-full"
      fullscreen
      show={show}
      animation={false}
      centered
      backdropClassName="spaces top-50"
      onHide={handleCloseDialog}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {title}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="p-0 spaces bg-white overflow-hidden">
        {children}
      </Modal.Body>
    </Modal>
  )
}

export default ModalFullPage