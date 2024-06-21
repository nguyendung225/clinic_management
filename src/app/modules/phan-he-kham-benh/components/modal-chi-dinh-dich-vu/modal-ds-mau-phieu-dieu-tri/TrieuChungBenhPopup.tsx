import React from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap'
import InputSearch from '../../../../component/InputSearch'
import { SELECTION_MODE } from '../../../../utils/Constant'
import { TrieuChungBenhColumn } from './DsPhieuDieuTriColumn'
import { TRIEU_CHUNG_BENH_DATA } from '../../FakeData'
import { TableCustom } from '../../../../component/table/table-custom/TableCustom'

type Props = {
    handleClose: () => void
}

const TrieuChungBenhPopup = ({
    handleClose,
}: Props) => {

    return (
        <>
            <Modal show={true} onHide={handleClose} centered className='dialog-background'>
                <Modal.Header closeButton className='header-modal'>
                    <Modal.Title>
                        Danh sách mẫu phiếu điều trị
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputSearch placeholder='Tìm kiếm' handleChange={() => {}}/>
                    <Row className='mt-2'>
                        <Col xs={12}>
                            <TableCustom
                                columns={TrieuChungBenhColumn}
                                selectionMode={SELECTION_MODE.MULTI}
                                data={TRIEU_CHUNG_BENH_DATA}
                            />
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer className='d-flex justify-content-end p-2 pe-5'>
                    <Button className="btn-fill"
                    >
                        Lưu
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default TrieuChungBenhPopup