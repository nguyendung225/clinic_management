import { Button, Modal, Row } from 'react-bootstrap';
import TextValidator from '../../../component/TextValidator';
import { Dispatch, SetStateAction, useState } from 'react';
import moment from 'moment';

type Props = {
    handleClose: () => void
    ngay: {
        batDau: string,
        ketThuc: string,
    }
    handleSetNgay: Dispatch<SetStateAction<Props["ngay"]>>
}

export default function ModalPickTimeKTThucHien({ handleClose, ngay, handleSetNgay }: Props) {
    const [ngayKT, setNgayKT] = useState<string>("");

    const handleChangeNgay = (e: any) => {
        const { name, value } = e.target;
        setNgayKT(value);
    }

    return (
        <Modal show animation centered className="dialog-background" dialogClassName='modal-md'>
            <Modal.Header className="py-3 header-modal">
                <Modal.Title className="text-pri">
                    Chọn thời gian kết thúc
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
                        name="ketthuc"
                        type="dateTime-local"
                        className="custom-input "
                        label="Thời gian"
                        labelClassName="min-w-70px"
                        value={ngayKT || ngay.ketThuc}
                        onChange={handleChangeNgay}
                    />
                </div>
                <Row><a className='mt-5 w-100 text-center'>Tự động thời gian tối thiểu</a></Row>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-end py-1">
                <Button
                    className="btn-fill"
                    type="submit"
                    onClick={() => {
                        handleSetNgay({ ...ngay, ketThuc: ngayKT || ngay.ketThuc || "" });
                        handleClose();
                    }}
                >
                    <span>OK</span>
                </Button>
            </Modal.Footer>
        </Modal>
    )
}