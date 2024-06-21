import { Button, Modal } from 'react-bootstrap';
import TextValidator from '../../../component/TextValidator';
import { Dispatch, SetStateAction, useState } from 'react';

type Props = {
    handleClose: () => void
    ngay: {
        batDau: string,
        ketThuc: string,
    }
    handleSetNgay: Dispatch<SetStateAction<Props["ngay"]>>
}

export default function ModalPickTimeBDThucHien({ handleClose, ngay, handleSetNgay }: Props) {
    const [ngayBD, setNgayBD] = useState<string>("");

    const handleChangeNgay = (e: any) => {
        const { value } = e.target;
        setNgayBD(value);
    }

    return (
        <Modal show animation centered className="dialog-background" dialogClassName='modal-md'>
            <Modal.Header className="py-3 header-modal">
                <Modal.Title className="text-pri">
                    Chọn thời gian bắt đầu
                </Modal.Title>
                <button
                    className="btn-close"
                    onClick={handleClose}
                ></button>
            </Modal.Header>
            <Modal.Body className="py-16 px-24 spaces">
                <div className="d-flex align-items-center">
                    <label className="min-w-70px form-label m-0">Thời gian</label>
                    <TextValidator
                        name="batDau"
                        type="dateTime-local"
                        className="custom-input "
                        label="Thời gian"
                        labelClassName="min-w-70px"
                        value={ngayBD || ngay.batDau}
                        onChange={handleChangeNgay}
                    />
                </div>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-end py-1">
                <Button
                    className="btn-fill"
                    type="submit"
                    onClick={() => {
                        handleSetNgay({ ...ngay, batDau: ngayBD || "" });
                        handleClose();
                    }}
                >
                    <span>OK</span>
                </Button>
            </Modal.Footer>
        </Modal>
    )
}