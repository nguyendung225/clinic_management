import React, { useState } from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap'
import { DsMauPhieuDieuTriColumn } from './DsPhieuDieuTriColumn'
import MauPhieuDieuTriModal from './MauPhieuDieuTriModal'
import { TableCustom } from '../../../../component/table/table-custom/TableCustom'

type Props = {
    handleClose: () => void
}

const DsMauPhieuDieuTriModal = ({
    handleClose,
}: Props) => {
    const [shouldOpenMauPhieuDieuTriModal, setShouldOpenMauPhieuDieuTriModal] = useState<boolean>(false);

    return (
        <>
            <Modal show={true} onHide={handleClose} centered className='dialog-background' size='xl'>
                <Modal.Header closeButton className='header-modal'>
                    <Modal.Title>
                        Danh sách mẫu phiếu điều trị
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className='min-h-400px'>
                        <Col xs={12}>
                            <TableCustom
                                columns={DsMauPhieuDieuTriColumn}
                                data={[]}
                            />
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer className='d-flex justify-content-end p-2 pe-5'>
                    <Button className="btn-fill"
                        onClick={() => setShouldOpenMauPhieuDieuTriModal(true)}
                    >
                        Thêm
                    </Button>
                    <Button className="btn-fill"
                    >
                        Lưu
                    </Button>
                </Modal.Footer>
            </Modal>
            {shouldOpenMauPhieuDieuTriModal && (
                <MauPhieuDieuTriModal handleClose={() => setShouldOpenMauPhieuDieuTriModal(false)}/>
            )}
        </>
    )
}

export default DsMauPhieuDieuTriModal