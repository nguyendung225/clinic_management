import { Dispatch, FC, SetStateAction } from "react";
import { Button, Modal } from "react-bootstrap";
import PhanHeKhamBenh from "../../../phan-he-kham-benh/PhanHeKhamBenh";

interface Props {
    open: boolean;
    handleClose: Dispatch<SetStateAction<boolean>>;
}

const DialogLichSuKham: FC<Props> = (props) => {
    let { open, handleClose } = props;

    return (
        <Modal className="modal-thuoc page-full" backdropClassName="spaces top-50" fullscreen show={open} animation={false} centered onHide={() => handleClose(false)}>
            <Modal.Header className="py-3 header-modal" closeButton>
                <Modal.Title className="text-pri"> <div className="my-1 d-flex ps-2">
                    <Button className="btn-fill me-2">Thanh toán</Button>
                    <Button className="btn-fill">Bệnh án</Button>
                </div></Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-0 spaces bg-white overflow-hidden">


                <PhanHeKhamBenh isLichSuKham childrenTab />
            </Modal.Body>
        </Modal>
    );
};

export default DialogLichSuKham;
