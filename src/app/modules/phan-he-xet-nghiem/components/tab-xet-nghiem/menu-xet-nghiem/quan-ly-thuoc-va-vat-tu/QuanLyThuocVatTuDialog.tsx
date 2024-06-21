import { Button, Modal } from 'react-bootstrap';
import CustomTabMenu from '../../../../../component/CustomTabMenu';
import { QL_THUOC_VT_TAB } from '../../../../const/constants';
type Props = {
    handleClose: () => void
}

export default function QuanLyThuocVatTuDialog({ handleClose }: Props) {

    return (
        <Modal show animation centered className="dialog-background" size='xl' onHide={handleClose}>
            <Modal.Header className="py-3 header-modal">
                <Modal.Title className="text-pri">
                    Danh sách thuốc vật tư
                </Modal.Title>
                <button
                    className="btn-close"
                    onClick={handleClose}
                ></button>
            </Modal.Header>
            <Modal.Body>
                <div className='d-flex spaces align-items-center gap-10'>
                    <Button className="btn-outline spaces h-29 d-flex justify-content-center min-w-40px">
                        <i className="bi bi-list spaces scale-15 m-0 p-0"></i>
                    </Button>
                    <Button className='btn-fill h-auto min-w-50px'>Kê thuốc</Button>
                    <Button className='btn-fill h-auto'>Hoàn trả thuốc</Button>
                    <Button className='btn-fill h-auto'>Kê vật tư</Button>
                    <Button className='btn-fill h-auto'>Hoàn trả vật tư</Button>
                </div>
                <div>
                    <CustomTabMenu
                        className='mt-2'
                        danhsachTabs={QL_THUOC_VT_TAB}
                        childrenTab
                    />
                </div>

            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-end py-1">
            </Modal.Footer>
        </Modal>
    )
}