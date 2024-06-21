import React from 'react'
import { Button, Modal, Row } from 'react-bootstrap'
import CustomTabMenu from '../../component/CustomTabMenu'
import { dsTabPTTT } from '../constants/Constants'

type Props = {
    handleClose: () => void
}

export default function ModalNhapThongTinPTTT({ handleClose }: Props) {
    return (
        <>
            <Modal
                show={true}
                onHide={handleClose}
                size='xl'
                centered
                className='modal-xl-bigger'
            >
                <Modal.Header className='p-4 header-modal'>
                    <Modal.Title>
                        Thông tin PTTT
                    </Modal.Title>
                    <button
                        className="btn-close"
                        onClick={handleClose}
                    ></button>
                </Modal.Header>
                <Modal.Body className='dialog-body'>
                    <CustomTabMenu
                        danhsachTabs={dsTabPTTT}
                        isCloseTab={false}
                    />
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-end p-5">
                    <Button className='btn-fill min-w-80px'
                    >
                        Giấy chứng nhận
                    </Button>
                    <Button className='btn-fill min-w-80px'
                    >
                        Phiếu phẫu thuật
                    </Button>
                    <Button
                        onClick={handleClose}
                        className='btn-fill min-w-80px'
                    >
                        Lưu
                    </Button>
                    <Button
                        onClick={handleClose}
                        className='btn-fill min-w-80px'
                    >
                        Lưu + Đóng
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}