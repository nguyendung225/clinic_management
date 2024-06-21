import { Button, Col, Dropdown, Modal, Row } from 'react-bootstrap';

import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';

import { Autocomplete } from '../../component/Autocomplete';
import CustomTextarea from '../../component/custom-textarea/CustomTextarea';
import LabelRequired from '../../component/LabelRequired';
import { IBenhNhanV3CDHA } from '../models/ModelsPhanHeCDHAVaTDCN';
import { useEffect, useState } from 'react';
import ModalDSMauKetQuaThucHien from '../components/modals/ModalDSMauKetQuaThucHien';
import ModalPickTimeBDThucHien from '../components/modals/ModalPickTimeBDThucHien';
import ModalPickTimeKTThucHien from '../components/modals/ModalPickTimeKTThucHien';
import moment from 'moment';
import { toast } from 'react-toastify';

type Props = {
    handleClose: () => void
    handleTraKetQua: () => void
    infoBenhNhan?: IBenhNhanV3CDHA;
}

export default function ModalThucHienCDHA({ handleClose, handleTraKetQua, infoBenhNhan }: Props) {

    const [shouldOpenModalDSMauKetQuaThucHien, setShouldOpenModalDSMauKetQuaThucHien] = useState<boolean>(false);
    const [shouldOpenModalPickTimeBDThucHien, setShouldOpenModalPickTimeBDThucHien] = useState<boolean>(false);
    const [shouldOpenModalPickTimeKTThucHien, setShouldOpenModalPickTimeKTThucHien] = useState<boolean>(false);
    const [noiDungMauKetQua, setNoiDungMauKetQua] = useState()
    const [ngay, setNgay] = useState({
        batDau: "",
        ketThuc: "",
    });

    const handleCloseModalMauKetQuaThucHien = () => {
        setShouldOpenModalDSMauKetQuaThucHien(false);
    }
    const handleCloseModalPickTimeBDThucHien = () => {
        setShouldOpenModalPickTimeBDThucHien(false);
    }
    const handleCloseModalPickTimeKTThucHien = () => {
        setShouldOpenModalPickTimeKTThucHien(false);
    }
    const handleLuuThucHien = () => {
        toast.success("Lưu thực hiện thành công");
        handleClose();
    }
    const handleLuuInTraKetQua = () => {
        handleTraKetQua();
        toast.success("Lưu / In / Trả kết quả thành công");
        handleClose();
    }
    const handleSelectMauKetQua = (mauKetQua: any) => {
        setShouldOpenModalDSMauKetQuaThucHien(false);
        setNoiDungMauKetQua(mauKetQua[0].original.noiDungMau);
    }

    return (
        <>
            <Modal
                show={true}
                onHide={handleClose}
                size='xl'
                centered
                className='modal-xl-bigger'
                contentClassName='h-100'
            >
                <Modal.Header className='p-4 header-modal header-modal-cdha'>
                    <Modal.Title>
                        Nhập kết quả chần đoán hình ảnh
                    </Modal.Title>
                    <button
                        className="btn-close"
                        onClick={handleClose}
                    ></button>
                </Modal.Header>
                <Modal.Body className='dialog-body border-bottom menu-button-cdha'>
                    <div className='flex gap-3 underline'>
                        <Dropdown className='dropdown-btn menu-icon'
                        >
                            <Dropdown.Toggle className='btn-outline'>
                                <i className="bi bi-list m-0 p-0"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>Nhập file kết quả</Dropdown.Item>
                                <Dropdown.Item>Xuất file kết quả</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item>Lấy ảnh từ máy tính</Dropdown.Item>
                                <Dropdown.Item>Lấy ảnh từ kết nối chẩn đoán hình ảnh</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item>Cấu hình thư viện nhận ảnh</Dropdown.Item>
                                <Dropdown.Item>Cấu hình tự động crop ảnh</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item>Xuất raw kết quả</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Button className='btn-fill min-w-50px' onClick={() => setShouldOpenModalDSMauKetQuaThucHien(true)}>
                            Mẫu kết quả
                        </Button>
                        <Button className='btn-fill min-w-50px'
                        >
                            Chụp ảnh
                        </Button>
                        <Button className='btn-fill min-w-50px'
                        >
                            PACS
                        </Button>
                        <Button className='btn-fill min-w-50px'
                        >
                            In kết quả
                        </Button>
                        <Button className='btn-fill min-w-50px'
                            onClick={handleLuuThucHien}
                        >
                            Lưu
                        </Button>
                        <Button className='btn-fill min-w-50px'
                            onClick={handleLuuInTraKetQua}
                        >
                            Lưu / In / Trả kết quả
                        </Button>
                        <Button className='btn-fill min-w-50px'
                        >
                            Gợi ý
                        </Button>
                        <Button className='btn-fill min-w-50px'
                        >
                            Xoá
                        </Button>
                        {infoBenhNhan ? <div>
                            <div className="text-break fw-500 info-patient-cdha text-end position-absolute top-0 bottom-0 end-0 spaces w-30">
                                <span className="text-uppercase fw-600 fs-7">
                                    {infoBenhNhan?.hoTen}&nbsp;|&nbsp;{infoBenhNhan?.maBn}&nbsp;|&nbsp;{infoBenhNhan?.age}&nbsp;|&nbsp;{infoBenhNhan?.gioiTinh}
                                </span>
                                <div className="text-truncate fs-7">
                                    {infoBenhNhan?.chanDoanHinhAnh?.[0]?.dsDichVuCDHA?.[0]?.tenDichVu}
                                </div>
                            </div>
                        </div> : <div className="info-patient spaces h-90"></div>}
                    </div>
                </Modal.Body>
                <Modal.Body className='dialog-body'>
                    <Row className='h-100'>
                        <Col
                            xs={4}
                            className="flex border"
                        >
                            <div className='flex-item-end pt-5'>
                                <Row className='h-100 border-bottom'>

                                </Row>
                                <Row className='mt-2'>
                                    <Col
                                        xs={6}
                                        className="d-flex mb-2 align-items-center text-lable-input spaces h-30"
                                        onClick={() => setShouldOpenModalPickTimeBDThucHien(true)}
                                    >
                                        <LabelRequired
                                            label="Bắt đầu: "
                                            className="spaces min-w-70px"
                                        />
                                        <CustomTextarea disabled marginUnderline={8} value={ngay.batDau !== "" ? moment(ngay.batDau).format("DD-MM-YYYY HH:mm") : ""} />
                                    </Col>
                                    <Col
                                        xs={6}
                                        className="d-flex mb-2 align-items-center text-lable-input spaces h-30"
                                        onClick={() => setShouldOpenModalPickTimeKTThucHien(true)}
                                    >
                                        <LabelRequired
                                            label="Kết thúc: "
                                            className="spaces min-w-70px"
                                        />
                                        <CustomTextarea disabled marginUnderline={8} value={ngay.ketThuc !== "" ? moment(ngay.ketThuc).format("DD-MM-YYYY HH:mm") : ""} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col
                                        xs={6}
                                        className="d-flex mb-2 align-items-center text-lable-input spaces h-30"
                                    >
                                        <LabelRequired
                                            label="TG thực hiện: "
                                            className="min-w-50"
                                        />
                                        <CustomTextarea disabled marginUnderline={8} />
                                    </Col>
                                    <Col
                                        xs={6}
                                        className="d-flex mb-2 align-items-center text-lable-input spaces h-30"
                                    >
                                        <LabelRequired
                                            label="TG kết thúc: "
                                            className="min-w-50"
                                        />
                                        <CustomTextarea disabled marginUnderline={8} className='' value={"Chưa cài đặt"} />
                                    </Col>
                                </Row>
                                <Row className='mb-2'>
                                    <Col
                                        xs={12}
                                        className="d-flex mb-2 align-items-center text-lable-input spaces h-30"
                                    >
                                        <LabelRequired
                                            label="Máy thực hiện: "
                                            className="spaces min-w-100"
                                        />
                                        <Autocomplete
                                            options={[]}
                                            name="mayThucHien"
                                            className="autocomplete-custom radius spaces width-100"
                                        />
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col
                            xs={8}
                            className="d-flex ckeditor-custom pe-0"
                        >
                            <CKEditor
                                editor={ClassicEditor}
                                onChange={(event: any, editor: any) => {
                                    setNoiDungMauKetQua(editor.getData());
                                }}
                                data={noiDungMauKetQua ? noiDungMauKetQua : ""}
                            />
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
            {shouldOpenModalDSMauKetQuaThucHien && <ModalDSMauKetQuaThucHien selectMauKetQua={handleSelectMauKetQua} handleClose={() => handleCloseModalMauKetQuaThucHien()} />}
            {shouldOpenModalPickTimeBDThucHien && <ModalPickTimeBDThucHien handleClose={() => handleCloseModalPickTimeBDThucHien()} ngay={ngay} handleSetNgay={setNgay} />}
            {shouldOpenModalPickTimeKTThucHien && <ModalPickTimeKTThucHien handleClose={() => handleCloseModalPickTimeKTThucHien()} ngay={ngay} handleSetNgay={setNgay} />}
        </>
    )
}