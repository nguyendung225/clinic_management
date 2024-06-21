import { Dispatch, FC, SetStateAction } from "react";
import { Modal } from "react-bootstrap";
import PhanHeKhamBenh from "../../phan-he-kham-benh/PhanHeKhamBenh";

interface Props {
  open: boolean;
  handleClose: Dispatch<SetStateAction<boolean>>;
}

const ModalLichSuKhamCDHA: FC<Props> = (props) => {
  let { open, handleClose } = props;

  return (
    <Modal contentClassName="modal-full-custom-2" fullscreen show={open} animation centered size="xl" onHide={() => handleClose(false)}>
      <div >
        <Modal.Header className="py-3 header-modal">
          <Modal.Title className="text-pri">Lịch sử khám</Modal.Title>
          <button className="btn-close" onClick={() => handleClose(false)}></button>
        </Modal.Header>
        <Modal.Body className="py-16 px-24 spaces">
          <PhanHeKhamBenh isLichSuKham />
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default ModalLichSuKhamCDHA;
