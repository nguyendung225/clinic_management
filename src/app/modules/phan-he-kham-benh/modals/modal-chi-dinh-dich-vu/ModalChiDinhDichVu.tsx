import { Formik } from 'formik';
import { useEffect, useRef, useState } from 'react';
import { Button, Col, Form, FormCheck, Modal, Row } from 'react-bootstrap';
import * as Yup from "yup";
import AutocompleteV2 from '../../../component/AutocompleteObjectV2';
import { ConfirmDialog } from '../../../component/ConfirmDialog';
import InputSearch from '../../../component/InputSearch';
import LabelRequired from '../../../component/LabelRequired';
import SelectTree from '../../../component/SelectTree';
import DropList from '../../../component/drop-list/DropList';
import GhiChuPopup from '../../components/modal-chi-dinh-dich-vu/GhiChuPopup';
import ModalLuuMau from '../../components/modal-chi-dinh-dich-vu/ModalLuuMau';
import SoLuongPopup from '../../components/modal-chi-dinh-dich-vu/SoLuongPopup';
import ModalDsMauDaTao from '../../components/modal-chi-dinh-dich-vu/modal-ds-mau-da-tao/ModalDsMauDaTao';
import ModalThemPhieuDieuTri from '../../components/modal-chi-dinh-dich-vu/modal-them-phieu-dieu-tri/ModalThemPhieuDieuTri';
import { DsDichVuTree, chidinhDVData } from '../../components/FakeData';
import { DsDichVuChiDinhColumn, DsDichVuColumn } from './ChiDinhDichVuColumn';
import ContextMenu from '../../../component/ContextMenu';
import { SELECTION_MODE } from '../../../utils/Constant';
import { TableCustom } from '../../../component/table/table-custom/TableCustom';

type Props = {
    handleClose: () => void
}

const ChiDinhDichVuModal = ({
    handleClose,
}: Props) => {
    const [codeCollapses, setCodeCollapses] = useState<string[]>([]);
    const [idSelected, setIdSelected] = useState<string>("");
    const [shouldOpenLuuMauModal, setShouldOpenLuuMauModal] = useState<boolean>(false);
    const [shouldOpenDsMauModal, setShouldOpenDsMauModal] = useState<boolean>(false);
    const [shouldOpenPhieuChiDinhCuModal, setShouldOpenPhieuChiDinhCuModal] = useState<boolean>(false);
    const [shouldOpenPhieuDieuTriModal, setShouldOpenPhieuDieuTriModal] = useState<boolean>(false);
    const [dsDichVuChiDinh, setDSDichVuChiDinh] = useState<any[]>([]);
    const [contextMenu, setContextMenu] = useState<null | {
        x: number;
        y: number;
    }>(null);
    const contextRef = useRef<HTMLDivElement | null>(null);
    const [shouldOpenGhiChuPopup, setShouldOpenGhiChuPopup] = useState<boolean>(false);
    const [shouldOpenSoLuongPopup, setShouldOpenSoLuongPopup] = useState<boolean>(false);
    const [shouldOpenConfirmDialog, setShouldOpenConfirmDialog] = useState<boolean>(false);
    const [indexRowContext, setIndexRowContext] = useState<number>();

    const handleClickOutside = (e: any) => {
        if (contextRef.current && !contextRef.current.contains(e.target as Node)) {
            setContextMenu(null);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const validationSchema = Yup.object({});

    const handleContextMenu = (e: any, row: any) => {
        e.preventDefault();
        setContextMenu({ x: e.clientX, y: e.clientY });
        setIndexRowContext(row?.index);
    };

    const handleSelectDroplist = (name: string, value: any) => {
        let newArr = [...dsDichVuChiDinh];
        if (indexRowContext || indexRowContext === 0) {
            newArr[indexRowContext] = {
                ...newArr[indexRowContext],
                [name]: value
            };

            setDSDichVuChiDinh(newArr);
        }
    }

    const handleDelete = () => {
        let newArr = [...dsDichVuChiDinh];
        if (indexRowContext || indexRowContext === 0) {
            newArr.splice(indexRowContext, 1);
        }
        setDSDichVuChiDinh(newArr);
    }

    const dropListChiDinhDichVu = [
        {
            title: "Vị trí răng",
            children: [
                {
                    title: "Hàm trên",
                    children: [
                        { title: "R1" },
                        { title: "R2" },
                    ]
                },
                {
                    title: "Hàm dưới",
                    children: [
                        { title: "R3" },
                        { title: "R4" },
                    ]
                },
                { title: "Tất cả hàm trên" },
                { title: "Tất cả hàm dưới" },
                { title: "Tất cả 2 hàm" },
                { title: "Nhiều vị trí" },
            ]
        },
        {
            title: "Sửa đối tượng",
            children: [
                {
                    title: "Bảo hiểm y tế",
                    action: () => handleSelectDroplist("doiTuong", "Bảo hiểm y tế")
                },
                {
                    title: "Bảo hiểm y tế + dịch vụ",
                    action: () => handleSelectDroplist("doiTuong", "Bảo hiểm y tế + dịch vụ")
                },
                {
                    title: "Thu phí",
                    action: () => handleSelectDroplist("doiTuong", "Thu phí")
                },
                {
                    title: "Dịch vụ",
                    action: () => handleSelectDroplist("doiTuong", "Dịch vụ")
                },
                {
                    title: "Hao phí khác",
                    action: () => handleSelectDroplist("doiTuong", "Hao phí khác")
                },
            ]
        },
        {
            title: "Sửa số lượng",
            children: [
                {
                    title: "1",
                    action: () => handleSelectDroplist("soLuong", "1")
                },
                {
                    title: "2",
                    action: () => handleSelectDroplist("soLuong", "2")
                },
                {
                    title: "3",
                    action: () => handleSelectDroplist("soLuong", "3")
                },
                {
                    title: "Nhập số lượng",
                    action: () => setShouldOpenSoLuongPopup(true),
                    component: <SoLuongPopup
                        className='z-index-1060'
                        open={shouldOpenSoLuongPopup}
                        handleClose={() => setShouldOpenSoLuongPopup(false)}
                        handleSelectDroplist={(value: any) => handleSelectDroplist("soLuong", value)}
                    />
                },
            ]
        },
        {
            title: "Ghi chú",
            action: () => setShouldOpenGhiChuPopup(true),
            component: <GhiChuPopup
                className='z-index-1060'
                open={shouldOpenGhiChuPopup}
                handleClose={() => setShouldOpenGhiChuPopup(false)}
                handleSelectDroplist={(value: any) => handleSelectDroplist("ghiChu", value)}
            />
        },
        {
            title: "Xóa dịch vụ",
            action: () => setShouldOpenConfirmDialog(true),
            component: <ConfirmDialog
                className='z-index-1060'
                show={shouldOpenConfirmDialog}
                title="Thông báo"
                message="Bạn có chắc chắn muốn bỏ dịch vụ này không ?"
                yes="Xác nhận"
                close="Đóng"
                onCloseClick={() => setShouldOpenConfirmDialog(false)}
                onYesClick={() => handleDelete()}
            />
        }
    ]
    
    return (
        <>
            <Modal
                show={true}
                onHide={handleClose}
                size='xl'
                className='dialog__container modal-chinh-dinh-dich-vu'
                centered
            >
                <Modal.Header closeButton className='header-modal'>
                    <Modal.Title>
                        Chỉ định dịch vụ
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='dialog__content pt-0'>
                    <Formik
                        initialValues={{}}
                        validationSchema={validationSchema}
                        onSubmit={() => { }}
                    >
                        <Form className="px-0 h-100 form-chi-dinh-dich-vu">
                            <Row>
                                <Col xs={3} className="d-flex mb-3 align-items-center text-lable-input">
                                    <LabelRequired label="Ngày y lệnh" className="min-w-85px" />
                                    <AutocompleteV2
                                        options={[]}
                                        name="ngayYLenh"
                                        className="autocomplete-custom radius spaces width-100 "
                                    />
                                </Col>
                                <Col xs={3} className="d-flex mb-3 align-items-center text-lable-input">
                                    <LabelRequired label="Người y lệnh" className="min-w-85px" />
                                    <AutocompleteV2
                                        options={[]}
                                        name="nguoiYLenh"
                                        className="autocomplete-custom radius spaces width-100 "
                                    />
                                </Col>
                                <Col xs={1} className="d-flex mb-3 align-items-center text-lable-input me-7">
                                    <FormCheck
                                        type="checkbox"
                                        label="Cấp cứu"
                                        className="min-w-150px d-flex align-items-center gap-2"
                                    />
                                </Col>
                                <Col xs={3} className="d-flex mb-3 align-items-center text-lable-input">
                                    <LabelRequired label="Phiếu điều trị" className="min-w-95px" />
                                    <AutocompleteV2
                                        options={[]}
                                        name="phieuDieuTri"
                                        className="autocomplete-custom radius spaces width-100 "
                                    />
                                </Col>
                                <Col xs className="d-flex mb-3 align-items-center text-lable-input">
                                    <a href="" className="text-underline" onClick={(e) => {
                                        e.preventDefault();
                                        setShouldOpenPhieuDieuTriModal(true);
                                    }}>
                                        <u>Thêm phiếu điều trị</u>
                                    </a>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6} className="d-flex mb-3 align-items-center text-lable-input">
                                    <LabelRequired label="Chẩn đoán" className="min-w-85px" />
                                    <AutocompleteV2
                                        options={[]}
                                        name="chuanDoan"
                                        className="autocomplete-custom radius spaces width-100 "
                                    />
                                </Col>
                                <Col xs={6} className="d-flex mb-3 align-items-center text-lable-input">
                                    <LabelRequired label="Bệnh kèm theo" className="spaces min-w-110" />
                                    <AutocompleteV2
                                        options={[]}
                                        name="benhKemTheo"
                                        className="autocomplete-custom radius spaces width-100 "
                                    />
                                </Col>
                            </Row>
                        </Form>
                    </Formik>

                    <div>
                      <div className="spaces h-100 d-flex">
                                    <SelectTree
                                        codeCollapses={codeCollapses}
                                        handleChangeCollapsesCode={setCodeCollapses}
                                        idSelected={idSelected}
                                        handleChangeSelectId={setIdSelected}
                                        selectTree={DsDichVuTree as any}
                                        className='spaces width-20 h-50vh overflow-auto position-sticky top-160'
                                    />
                                    <div className='spaces width-80'>
                                        <div className='ms-2 mb-2'>
                                            <InputSearch placeholder='Tìm kiếm' handleChange={() => { }} />
                                        </div>
                                        <TableCustom
                                            columns={DsDichVuColumn}
                                            data={chidinhDVData}
                                            selectionMode={SELECTION_MODE.MULTI}
                                            getSelectedRowsData={setDSDichVuChiDinh}
                                            maxHeight={250}
                                            minHeight={250}
                                        />
                                        <div className='d-flex spaces m-8'>
                                            <FormCheck
                                                type="checkbox"
                                                label="Mặc định"
                                                className="min-w-100px d-flex align-items-center gap-2"
                                            />
                                            <FormCheck
                                                type="checkbox"
                                                label="BHYT"
                                                className="min-w-100px d-flex align-items-center gap-2"
                                            />
                                            <FormCheck
                                                type="checkbox"
                                                label="BHYT + DV"
                                                className="min-w-100px d-flex align-items-center gap-2"
                                            />
                                            <FormCheck
                                                type="checkbox"
                                                label="Viện phí"
                                                className="min-w-100px d-flex align-items-center gap-2"
                                            />
                                            <FormCheck
                                                type="checkbox"
                                                label="Dich vụ"
                                                className="min-w-100px d-flex align-items-center gap-2"
                                            />
                                        </div>
                                        <TableCustom
                                            columns={DsDichVuChiDinhColumn}
                                            data={dsDichVuChiDinh || []}
                                            handleContextMenu={handleContextMenu}
                                            maxHeight={250}
                                            minHeight={250}
                                        />
                                    </div>
                                </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between p-5 gap-2">
                    <div className='flex-grow-1'>
                        <Row>
                            <Col xs={3}>
                                Tổng chi phí: <span></span>
                            </Col>
                            <Col xs={3}>
                                BHYT: <span></span>
                            </Col>
                            <Col xs={3}>
                                Miễn giảm: <span></span>
                            </Col>
                            <Col xs={3}>
                                Nguồn khác: <span></span>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={3}>
                                Tạm ứng: <span></span>
                            </Col>
                            <Col xs={3}>
                                Tổng chi phí: <span></span>
                            </Col>
                            <Col xs={3}>
                                Còn nợ: <span></span>
                            </Col>
                            <Col xs={3}>
                                Bệnh nhân: <span></span>
                            </Col>
                        </Row>
                    </div>
                    <div className='d-flex justify-content-center gap-2'>
                        <Button className="btn-fill min-w-50px" type="submit">
                            Lưu
                        </Button>
                        <Button className="btn-fill"
                            onClick={() => setShouldOpenDsMauModal(true)}
                        >
                            Mẫu chỉ định/Phiếu chỉ định cũ
                        </Button>
                        <Button className="btn-fill" onClick={() => { setShouldOpenLuuMauModal(true) }}>
                            Lưu mẫu chỉ định mới
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
            {shouldOpenLuuMauModal && <ModalLuuMau handleClose={() => setShouldOpenLuuMauModal(false)} />}
            {shouldOpenDsMauModal && <ModalDsMauDaTao dsDichVuChiDinh={dsDichVuChiDinh} setDsDichVuChiDinh={(data: any) => setDSDichVuChiDinh(data)} handleClose={() => setShouldOpenDsMauModal(false)} />}
            {shouldOpenPhieuDieuTriModal && <ModalThemPhieuDieuTri handleClose={() => setShouldOpenPhieuDieuTriModal(false)} />}

            <div ref={contextRef}>
                {contextMenu && (
                    <ContextMenu className="w-200px h-fit z-index-1056 p-0" x={contextMenu.x} y={contextMenu.y}>
                        <div>
                            <DropList children={dropListChiDinhDichVu} />
                        </div>
                    </ContextMenu>
                )}
            </div>
        </>
    )
}

export default ChiDinhDichVuModal