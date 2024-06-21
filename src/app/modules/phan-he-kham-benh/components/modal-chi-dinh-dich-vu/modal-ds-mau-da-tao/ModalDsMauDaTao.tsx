import React, { useState } from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap'
import SelectTree from '../../../../component/SelectTree'
import InputSearch from '../../../../component/InputSearch'
import { DsMauTree, loaiPhieuChiDinhCuData } from '../../FakeData'
import { DsMauColumn } from './DsMauColumn'
import ThemMauChiDinhDichVuModal from './ThemMauChiDinhDichVuModal'
import { DsLoaiPhieuColumn, DsPhieuColumn } from './PhieuChiDinhCuColumn'
import { SELECTION_MODE } from '../../../../utils/Constant'
import { TableCustom } from '../../../../component/table/table-custom/TableCustom'

type Props = {
    handleClose: () => void
    setDsDichVuChiDinh: (data: any) => void
    dsDichVuChiDinh: any
}

const ModalDsMauDaTao = ({
    handleClose,
    setDsDichVuChiDinh,
    dsDichVuChiDinh
}: Props) => {
    const [codeCollapses, setCodeCollapses] = useState<string[]>([]);
    const [idSelected, setIdSelected] = useState<string>("");
    const [shouldOpenThemMauChiDinhDichVuModal, setShouldOpenThemMauChiDinhDichVuModal] = useState<boolean>(false);
    const [dsPhieu, setDsPhieu] = useState<any[]>([]);

    const handleSuDungPhieu = () => {
        setDsDichVuChiDinh(dsPhieu);
        handleClose();
    }

    return (
        <>
            <Modal show={true} onHide={handleClose} centered className='dialog-background' size='xl' contentClassName='h-100'>
                <Modal.Header closeButton className='header-modal'>
                    <Modal.Title>
                        Danh sách các mẫu đã tạo
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='border'>
                        <div className="spaces h-100 d-flex border-bottom">
                            <SelectTree
                                codeCollapses={codeCollapses}
                                handleChangeCollapsesCode={setCodeCollapses}
                                idSelected={idSelected}
                                handleChangeSelectId={setIdSelected}
                                selectTree={DsMauTree as any}
                                className='spaces width-24 h-25vh overflow-auto'
                            />
                            <div className='w-100'>
                                <InputSearch placeholder='Tìm kiếm' handleChange={() => { }} />
                                <TableCustom
                                    columns={DsMauColumn}
                                    data={[]}
                                />
                            </div>
                        </div>
                        <Row >
                            <div className='fw-bold pt-2 ps-4'>Phiếu chỉ định cũ</div>
                            <Col xs={12} className='mb-1'>
                                <InputSearch placeholder='Tìm kiếm' handleChange={() => { }} />
                            </Col>
                            <Col xs={7} className='pe-0'>
                                <TableCustom
                                    columns={DsLoaiPhieuColumn}
                                    data={loaiPhieuChiDinhCuData}
                                    selectionMode={SELECTION_MODE.SINGLE_NO_RADIO_BUTTON}
                                    getSelectedRowsData={(rowData: any[]) => {
                                        setDsPhieu(rowData?.[0]?.dichVu);
                                    }}
                                    minHeight={250}
                                />
                            </Col>
                            <Col xs={5} className='ps-0'>
                                <TableCustom
                                    columns={DsPhieuColumn}
                                    data={dsPhieu || []}
                                />
                            </Col>
                        </Row>
                    </div>
                </Modal.Body>
                <Modal.Footer className='d-flex justify-content-end p-2 pe-5'>
                    <Button
                        className="btn-fill"
                        onClick={handleSuDungPhieu}
                    >
                        Sử dụng phiếu + Chẩn đoán
                    </Button>
                    <Button
                        className="btn-fill"
                        onClick={handleSuDungPhieu}
                    >
                        Sử dụng phiếu
                    </Button>
                    {dsDichVuChiDinh?.length > 0 && (<Button className="btn-fill"
                        onClick={() => setShouldOpenThemMauChiDinhDichVuModal(true)}>
                        Thêm mẫu chỉ định
                    </Button>)}

                </Modal.Footer>
            </Modal>
            {shouldOpenThemMauChiDinhDichVuModal && <ThemMauChiDinhDichVuModal handleClose={() => setShouldOpenThemMauChiDinhDichVuModal(false)} />}
        </>
    )
}

export default ModalDsMauDaTao