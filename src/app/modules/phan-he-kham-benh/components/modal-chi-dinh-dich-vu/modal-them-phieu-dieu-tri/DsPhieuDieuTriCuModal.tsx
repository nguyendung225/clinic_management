import React, { useState } from 'react'
import { Button, Col, FormCheck, Modal, Row } from 'react-bootstrap'
import InputSearch from '../../../../component/InputSearch'
import { DS_PHIEU_DIEU_TRI_CU_DATA } from '../../FakeData'
import { DsPhieuDieuTriCuColumn } from '../modal-ds-mau-phieu-dieu-tri/DsPhieuDieuTriColumn'
import PhieuDieuTriCuModal from './PhieuDieuTriCuModal'
import { TableCustom } from '../../../../component/table/table-custom/TableCustom'

type Props = {
    handleClose: () => void
}

const DsPhieuDieuTriCuModal = ({
    handleClose,
}: Props) => {
    const [shouldOpenPhieuDieuTriCuModal, setShouldOpenPhieuDieuTriCuModal] = useState<boolean>(false);

    return (
        <>
            <Modal show={true} onHide={handleClose} centered className='dialog-background' size='lg'>
                <Modal.Header closeButton className='header-modal'>
                    <Modal.Title>
                        Danh sách phiếu điều trị
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputSearch placeholder='Tìm kiếm' handleChange={() => {}}/>
                    <Row className='mt-2 min-h-300px'>
                        <Col xs={12}>
                            <TableCustom
                                columns={DsPhieuDieuTriCuColumn}
                                data={DS_PHIEU_DIEU_TRI_CU_DATA}
                                handleDoubleClick={() => setShouldOpenPhieuDieuTriCuModal(true)}
                            />
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer className='d-flex justify-content-end p-2 pe-5'>
                    <div className='flex-grow-1'>
                        <Row className='mb-2'>
                            <Col xs={3}>
                                <FormCheck 
                                    label="Diễn biến bệnh"
                                />
                            </Col>
                            <Col xs={4}>
                                <FormCheck
                                    label="Xét nghiệm"
                                />
                            </Col>
                            <Col xs={2}>
                                <FormCheck
                                    label="Thuốc"
                                />
                            </Col>
                            <Col xs={3}>
                                <FormCheck
                                    label="Dịch vụ khác"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={3}>
                                <FormCheck
                                    label="Chẩn đoán HA"
                                />
                            </Col>
                            <Col xs={4}>
                                <FormCheck
                                    label="Chuyên khoa, PTTT"
                                />
                            </Col>
                            <Col xs={2}>
                                <FormCheck
                                    label="Vật tư"
                                />
                            </Col>
                        </Row>
                    </div>
                    <Button className="btn-fill"
                    >
                        Sử dụng phiếu điều trị
                    </Button>
                </Modal.Footer>
            </Modal>
            {shouldOpenPhieuDieuTriCuModal && (
                <PhieuDieuTriCuModal handleClose={() => setShouldOpenPhieuDieuTriCuModal(false)} />
            )}
        </>
    )
}

export default DsPhieuDieuTriCuModal