import { Formik } from 'formik';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';
import ContextMenu from '../../component/ContextMenuV3';
import TextField from '../../component/TextField';
import CombinedTable from '../../component/table/combined-table/CombinedTable';
import { codeMenuSuaChiTietPhieu, menuSuaChiTietPhieu } from '../const/Constants';
import { dsThuocColumn } from '../const/Columns';

type Props = {
    handleClose: () => void
    TTPhieu: any
    handleLuuPhieuSua: any
    setTTPhieu: any

}

export default function SuaPhieuDialog({ handleClose, TTPhieu, handleLuuPhieuSua, setTTPhieu }: Props) {

    const [contextMenu, setContextMenu] = useState<null | {
        x: number;
        y: number;
    }>(null);


    const handleRightClick = (e: any, row: any) => {
        e.preventDefault()
        setContextMenu({ x: e.clientX, y: e.clientY });
    }

    const handleClickOptionContextMenu = (value: any) => {
        setContextMenu(null)
        if (value?.code === codeMenuSuaChiTietPhieu.XOA_THUOC) {
            toast.success("Xóa thuốc thành công")
        }

    };


    return (
        <Modal show={true} centered onHide={handleClose} contentClassName='spaces width-90 pe-2 margin-x-auto radius-8 height-max-content' fullscreen>
            <Modal.Header closeButton className="py-5 header-modal">
                <Modal.Title className="title-dialog-color">
                    Xuất thuốc cho khách mua lẻ
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
                    initialValues,
                    setValues,
                }) => {
                    const handleGetTTThuoc = (data: any) => {
                        setValues({ ...values, ...data?.original })
                    }

                    const handleUpdateTTThuoc = () => {
                        if (values?.ma) {
                            toast.success("Cập nhật thành công")
                        }
                        else {
                            toast.success("Thêm mới thành công")

                        }
                        setValues({
                            ...values,
                            yeuCau: "",
                            tenThuocVatTu: "",
                            ma: "",
                            tonKho: "",
                            maVach: "",
                            hamLuong: "",
                            donVi: "",
                            quyCach: "",
                            nuocSx: "",
                            hdsd: "",
                            donGia: "",
                            thanhTien: "",
                            vat: "",
                            hangSX: "",
                            sdk: "",
                            soLo: "",
                            hsd: "",
                            chanDoan: ""
                        })




                    }

                    return (<form onSubmit={handleSubmit}>
                        <Modal.Body >
                            <div className="sua-phieu-container">
                                <div className='d-flex'>
                                    <div className='spaces width-24 pe-2'>
                                        <TextField
                                            name="khoThuoc"
                                            type="text "
                                            label="Kho thuốc"
                                            labelClassName="spaces min-w-76"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='spaces width-24 pe-2'>
                                        <TextField
                                            name="ngayLap"
                                            type="text "
                                            label="Ngày lập"
                                            labelClassName="spaces min-w-70"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='spaces width-24 pe-2'>
                                        <TextField
                                            name="nguoiLap"
                                            type="text "
                                            label="Người lập"
                                            labelClassName="spaces min-w-70"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    <div className='spaces width-24 pe-2'>
                                        <TextField
                                            name="maBenhNhan"
                                            type="text "
                                            labelClassName="spaces min-w-76"
                                            label="Mã BN"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='spaces width-24 pe-2'>
                                        <TextField
                                            name="hoTen"
                                            type="text "
                                            label="Họ tên"
                                            labelClassName="spaces min-w-70"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='spaces width-24 pe-2 d-flex'>
                                        <TextField
                                            name="age"
                                            type="text "
                                            label="Tuổi"
                                            labelClassName="spaces min-w-70"
                                            onChange={handleChange}
                                        />
                                        <TextField
                                            name="gioiTinh"
                                            type="text "
                                            label="Giới tính"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='spaces width-28'>
                                        <TextField
                                            name="diaChi"
                                            type="text "
                                            label="Địa chỉ"
                                            labelClassName="spaces min-w-60"
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
                                            labelClassName="spaces min-w-76"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='spaces width-24 pe-2'>
                                        <TextField
                                            name="email"
                                            type="text "
                                            label="Email"
                                            labelClassName="spaces min-w-70"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='spaces width-24 pe-2'>
                                        <TextField
                                            name="ghiChu"
                                            type="text "
                                            label="Ghi chú"
                                            labelClassName="spaces min-w-70"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='spaces width-28'>
                                        <TextField
                                            name="bacSi"
                                            type="text "
                                            label="Bác sĩ"
                                            labelClassName="spaces min-w-60"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className='d-flex mt-4'>
                                    <div className='spaces width-54 pe-2'>
                                        <TextField
                                            name="tenThuocVatTu"
                                            type="text "
                                            label="Tên thuốc"
                                            labelClassName="spaces min-w-76"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='spaces width-18 pe-2'>
                                        <TextField
                                            name="ma"
                                            type="text "
                                            label="Mã thuốc"
                                            labelClassName="spaces min-w-70"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='spaces width-14 pe-2'>
                                        <TextField
                                            name="tonKho"
                                            type="text "
                                            label="Tồn kho"
                                            labelClassName="spaces min-w-70"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='spaces width-14'>
                                        <TextField
                                            name="maVach"
                                            type="text "
                                            label="Mã vạch"
                                            labelClassName="spaces min-w-60"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    <div className='spaces width-18 pe-2'>
                                        <TextField
                                            name="hamLuong"
                                            type="text "
                                            label="Hàm lượng"
                                            labelClassName="spaces min-w-76"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='spaces width-18 pe-2'>
                                        <TextField
                                            name="donVi"
                                            type="text "
                                            label="Đơn vị"
                                            labelClassName="spaces min-w-60"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='spaces width-18 pe-2'>
                                        <TextField
                                            name="quyCach"
                                            type="text "
                                            label="Quy cách"
                                            labelClassName="spaces min-w-60"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='spaces width-18 pe-2'>
                                        <TextField
                                            name="nuocSx"
                                            type="text "
                                            label="Nước SX"
                                            labelClassName="spaces min-w-70"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='spaces width-28'>
                                        <TextField
                                            name="hdsd"
                                            type="text "
                                            labelClassName="spaces min-w-70"
                                            label="HDSD"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    <div className='spaces width-18 pe-2'>
                                        <TextField
                                            name="yeuCau"
                                            type="text "
                                            label="Số lượng"
                                            labelClassName="spaces min-w-76"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='spaces width-18 pe-2'>
                                        <TextField
                                            name="donGia"
                                            type="text "
                                            label="Giá bán"
                                            labelClassName="spaces min-w-60"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='spaces width-18 pe-2'>
                                        <TextField
                                            name="vat"
                                            type="text "
                                            label="%VAT"
                                            labelClassName="spaces min-w-60"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='spaces width-18 pe-2'>
                                        <TextField
                                            name="thanhTien"
                                            type="text "
                                            label="Thành tiền"
                                            labelClassName="spaces min-w-70"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='spaces width-28'>
                                        <TextField
                                            name="hdsd"
                                            type="text "
                                            label="Hãng SX"
                                            labelClassName="spaces min-w-70"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    <div className='spaces width-18 pe-2'>
                                        <TextField
                                            name="sdk"
                                            type="text "
                                            label="Số ĐK"
                                            labelClassName="spaces min-w-76"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='spaces width-18 pe-2'>
                                        <TextField
                                            name="soLo"
                                            type="text "
                                            label="Số lô"
                                            labelClassName="spaces min-w-60"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='spaces width-18 pe-2'>
                                        <TextField
                                            name="hsd"
                                            type="text "
                                            labelClassName="spaces min-w-60"
                                            label="HSD"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='spaces width-18 pe-2 d-flex gap-2'>
                                        <Button className='btn-fill w-100' onClick={handleUpdateTTThuoc}>Cập nhật</Button>
                                    </div>
                                    <div className='spaces width-28'>
                                        <TextField
                                            name="chanDoan"
                                            type="text "
                                            label="Chẩn đoán"
                                            labelClassName="spaces min-w-70"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className="table-chi-tiet-phieu mt-2">
                                    <CombinedTable getRowData={handleGetTTThuoc} handleRightClick={handleRightClick} className='bg-white' userColumns={dsThuocColumn} data={TTPhieu?.dataChiTietPhieu || []} height={"100%"} />
                                    {contextMenu && <ContextMenu data={menuSuaChiTietPhieu} target={contextMenu} handleCloseMenu={() => setContextMenu(null)} handleClickOptionContextMenu={handleClickOptionContextMenu} />}

                                </div>


                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className="btn-fill min-w-80px" type='submit' size="sm" onClick={handleLuuPhieuSua}>
                                Lưu
                            </Button>
                            <Button className="btn-fill min-w-80px" type='submit' size="sm" onClick={handleLuuPhieuSua}>
                                Lưu + In
                            </Button>
                        </Modal.Footer>
                    </form>)
                }}
            </Formik>
        </Modal>
    )
}