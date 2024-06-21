import { Button, Modal } from 'react-bootstrap';
import LabelRequired from '../../component/LabelRequired';
import TextValidator from '../../component/TextValidator';

type Props = {
    handleClose: () => void
}

export default function ModalKhongThucHienDV({ handleClose }: Props) {
    return (
        <Modal show animation centered className="dialog-background" onHide={handleClose}>
            <Modal.Header className="py-3 header-modal">
                <Modal.Title className="text-pri">
                    Không thực hiện dịch vụ
                </Modal.Title>
                <button
                    className="btn-close"
                    onClick={handleClose}
                ></button>
            </Modal.Header>
            <Modal.Body className="py-16 px-24 spaces">
                <div>
                    <div className="spaces d-flex flex-2 mb-4">
                        <LabelRequired
                            className="ms-0 min-w-125px"
                            label="Lý do không thực hiện dịch vụ"
                        />
                    </div>
                    <div className="spaces flex-2 mb-4">
                        <TextValidator
                            name="tenMau"
                            className="custom-input "
                            as="textarea"
                            rows={4}
                            labelClassName="min-w-125px"
                        />
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-end py-1">
                <Button
                    className="btn-fill"
                    type="submit"
                >
                    <span>Lưu</span>
                </Button>
            </Modal.Footer>
        </Modal>
    )
}