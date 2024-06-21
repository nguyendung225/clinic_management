import { Formik } from 'formik';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';
import TextField from '../../component/TextField';
import CombinedTable from '../../component/table/combined-table/CombinedTable';
import { DsPhieuColumn, vatTuColumns } from '../const/columns';
import { dataTTVatTu, listContextDSVatTuTrongKho, listContextPhieuThanhToan } from '../const/constants';
import LabelRequired from '../../component/LabelRequired';
import Autocomplete from '../../component/AutocompleteObject';
import TextValidator from '../../component/TextValidator';
import { TableCustom } from '../../component/table/table-custom/TableCustom';
import CustomMenu from '../../component/menu/Menu';
import { IContextMenu } from '../../phan-he-tiep-nhan-thanh-toan/models/ModelTabDSDangKy';
import { useRef, useState } from 'react';
import ContextMenu from '../../component/ContextMenuV2';
import ModalPhieuIn from '../../component/ModalPhieuIn';
import { stylePrint, stylePrintLandscapeA5 } from '../../component/phieu-in/constant';
import PhieuChiHoaDon from './phieu-in/PhieuChiHoaDon';
import { dataDsPhieu } from '../const/FakeData';

type Props = {
    handleClose: () => void
    TTPhieu: any

}

export default function DialogThongTinPhieu({ handleClose, TTPhieu }: Props) {
    const [openPhieuThu, setOpenPhieuThu] = useState(false);
    const contextRef = useRef<HTMLDivElement | null>(null);
    const [contextMenu, setContextMenu] = useState<null | {
        x: number;
        y: number;
    }>(null);
    const [contextClientX, setContextClientX] = useState<number>(0);

    const handleContextMenu = (e: any, row: any) => {
        e.preventDefault();
        setContextClientX(e.clientX);

        const heightDropList = document.getElementById("drop-list")?.clientHeight || 0;
        const isOnRight = (window.innerWidth - e.clientX) < 200;
        const newX = isOnRight ? e.clientX - 200 : e.clientX;
        const isBottom = (window.innerHeight - e.clientY) < 200;
        const newY = isBottom ? e.clientY - heightDropList : e.clientY;

        setContextMenu({ x: newX, y: newY });
    };

    const handleClickOptionContextMenu = (value: IContextMenu) => {
        setOpenPhieuThu(true);
    }

    return (
        <Modal
            className="modal-thuoc page-full"
            fullscreen
            show={true}
            animation={false}
            centered
            backdropClassName="spaces top-50"
            onHide={handleClose}
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    Thông tin phiếu
                </Modal.Title>
            </Modal.Header>
            <Formik
                initialValues={TTPhieu}
                onSubmit={(values) => {
                    handleClose()
                    toast.success("Thêm miễn giảm thành công")
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <Modal.Body className="p-0 spaces bg-white overflow-hidden">
                            <Row className='border-bottom'>
                                <Col className='py-1 d-flex align-items-center'>
                                    <CustomMenu
                                        className='ms-1'
                                        handleSelectOption={() => { }}
                                        listMenuItem={[]}
                                        menuLabel={
                                            <Button className="btn-outline spaces h-29 d-flex justify-content-center min-w-40px">
                                                <i className="bi bi-list spaces scale-15 m-0 p-0"></i>
                                            </Button>
                                        }
                                    />

                                    <CustomMenu
                                        className='h-29 me-2 min-w-70px'
                                        handleSelectOption={() => { }}
                                        listMenuItem={[]}
                                        menuLabel={
                                            <Button className='btn-fill '>In phiếu</Button>
                                        }
                                    />

                                    <CustomMenu
                                        className='h-29 me-2 spaces min-w-140'
                                        handleSelectOption={() => { }}
                                        listMenuItem={[]}
                                        menuLabel={
                                            <Button className='btn-fill '>Biên bản kiểm nhập</Button>
                                        }
                                    />
                                </Col>
                            </Row>

                            <Row className=' px-1 py-2'>
                                <div className='d-flex mb-1'>
                                    <div className='spaces width-24 pe-2'>
                                        <TextField
                                            name="noiLapPhieu"
                                            type="text "
                                            label="Kho lập"
                                            labelClassName="spaces min-w-90"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='spaces width-24 pe-2'>
                                        <TextField
                                            name="ngayTao"
                                            type="text "
                                            label="Ngày lập"
                                            labelClassName="spaces min-w-80"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='spaces width-24 pe-2'>
                                        <TextField
                                            name="nguoiLap"
                                            type="text "
                                            label="Người lập"
                                            value="Quản trị hệ thống"
                                            labelClassName="spaces min-w-70"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className='d-flex mb-1'>
                                    <div className='spaces width-24 pe-2'>
                                        <TextField
                                            name="ngayNhapXuat"
                                            type="text "
                                            label="Ngày hóa đơn"
                                            labelClassName="spaces min-w-90"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='spaces width-24 pe-2'>
                                        <TextField
                                            name="soHoaDon"
                                            type="text "
                                            label="Số hóa đơn"
                                            labelClassName="spaces min-w-80"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='spaces width-24 pe-2'>
                                        <TextField
                                            name="nhaCungCap"
                                            type="text "
                                            label="Tên NCC"
                                            labelClassName="spaces min-w-70"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='spaces width-28 pe-2'>
                                        <TextField
                                            name="diaChi"
                                            type="text "
                                            label="Địa chỉ"
                                            value="Số 467 Nguyễn Trãi, Thanh Xuân"
                                            labelClassName="spaces min-w-80"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    <div className='spaces width-24 pe-2'>
                                        <TextField
                                            name="dienThoai"
                                            type="text "
                                            label="Điện thoại"
                                            value="033222929"
                                            labelClassName="spaces min-w-90"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='spaces width-24 pe-2'>
                                        <TextField
                                            name="nguoiGiao"
                                            type="text "
                                            label="Người giao"
                                            value="N.Chung"
                                            labelClassName="spaces min-w-80"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='spaces width-24 pe-2'>
                                        <TextField
                                            name="noiDung"
                                            type="text "
                                            label="Nội dung"
                                            labelClassName="spaces min-w-70"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='spaces width-28 pe-2'>
                                        <TextField
                                            name="nguoiNhan"
                                            type="text "
                                            value="BS N.Thung"
                                            label="Người nhận"
                                            labelClassName="spaces min-w-80"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </Row>

                            <Row>
                                <Col xs={9} className='pe-0'>
                                    <CombinedTable className='h-table-ds-vat-tu' userColumns={vatTuColumns} data={dataTTVatTu} />
                                </Col>

                                <Col xs={3} className='ps-0 border'>
                                    <div className='border-bottom text-center'>Thanh toán hóa đơn</div>

                                    <div className='p-1'>
                                        <div className='mb-1'>
                                            <LabelRequired label='Số phiếu:' />
                                        </div>

                                        <div className='d-flex mb-1'>
                                            <LabelRequired label='Loại phiếu:' className="min-w-80px" />
                                            <Autocomplete options={[]} className='spaces h-25 autocomplete-custom-tiep-nhan w-100' />
                                        </div>

                                        <div className='d-flex mb-1'>
                                            <LabelRequired label='Số tiền:' className="min-w-80px" />
                                            <TextValidator type="number" className="no-spinners" />
                                        </div>

                                        <div className='d-flex mb-1'>
                                            <LabelRequired label='Ghi chú:' className="min-w-80px" />
                                            <TextValidator type="text" as="textarea" rows={1} />
                                        </div>

                                        <div className='d-flex justify-content-around mb-1'>
                                            <Button className='btn-fill'>Thêm</Button>
                                            <Button className='btn-fill'>Lưu</Button>
                                            <Button className='btn-fill'>Hủy</Button>
                                            <Button className='btn-fill'>Hủy Phiếu</Button>
                                        </div>

                                        <div>
                                            <TableCustom className='h-table-ds-phieu-ttp' columns={DsPhieuColumn} data={dataDsPhieu} handleContextMenu={handleContextMenu} />
                                            {contextMenu && (
                                                <div ref={contextRef}>
                                                    <ContextMenu
                                                        contextClientX={contextClientX}
                                                        data={listContextPhieuThanhToan}
                                                        x={contextMenu.x}
                                                        y={contextMenu.y}
                                                        handleClickOptionContextMenu={handleClickOptionContextMenu}
                                                        contextRef={contextRef}
                                                        setContextMenu={setContextMenu}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            <div className='d-flex justify-content-between bg-light py-2'>
                                <div className="d-flex gap-16 spaces fw-5">
                                    <div className="d-flex">
                                        <div className="min-w-80px">
                                            Tổng chi phí
                                        </div>{" "}
                                        <div className="min-w-70px text-end text-danger">
                                            {TTPhieu?.tongChiPhi || "36.000.000"}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="d-flex">
                                            <div className="min-w-80px">Đã thu</div>{" "}
                                            <div className="min-w-70px text-end text-pri">
                                                {TTPhieu?.daThu || "36.000.000"}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="min-w-80px">Còn nợ</div>{" "}
                                        <div className="min-w-70px  text-end text-warning">
                                            {TTPhieu?.thucThu - TTPhieu?.daThu || 0}
                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex spaces gap-4'>
                                    <Button className="btn-fill min-w-80px" type='submit' size="sm" onClick={handleClose}>
                                        In nhãn
                                    </Button>
                                    <Button className="btn-fill min-w-80px" type='submit' size="sm" onClick={handleClose}>
                                        In Phiếu
                                    </Button>
                                    <Button
                                        onClick={handleClose}
                                        className="btn-fill min-w-80px me-2"
                                        size="sm"
                                    >
                                        Hủy nhập
                                    </Button>
                                </div>
                            </div>
                        </Modal.Body>
                    </form>
                )}
            </Formik>

            <ModalPhieuIn
                show={openPhieuThu}
                handleCloseDialog={() => setOpenPhieuThu(false)}
                title={"Phiếu chi tiền"}
                stylePrint={stylePrintLandscapeA5}
                size={"lg"}
            >
                <PhieuChiHoaDon />
            </ModalPhieuIn>
        </Modal>
    )
}