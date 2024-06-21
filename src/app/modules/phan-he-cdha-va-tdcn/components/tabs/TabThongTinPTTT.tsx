import { useState } from 'react';
import Autocomplete from '../../../component/AutocompleteObject';
import LabelRequired from '../../../component/LabelRequired';
import TextValidator from '../../../component/TextValidator';
import { loaiPTTT } from '../../../phan-he-phau-thuat-thu-thuat/const/PhanHePhauThuatThuThuatconst';
import ModalMoTaChiTiet from '../../../phan-he-chuyen-khoa/components/modal-nhap-thong-tin-pttt/ModalMoTaChiTiet';

type Props = {}
export default function TabThongTinPTTT({ }: Props) {
    const [openModalMoTaChiTiet, setOpenModalMoTaChiTiet] = useState(false);
   
    const handleOpenModalMoTaChiTiet = () => {
        setOpenModalMoTaChiTiet(true);
    }

    return (
        <>
            <div className="d-flex mt-4">
                <div className="spaces width-40 pe-2 d-flex align-items-center">
                    <LabelRequired label="Ngày nhập thông tin" isRequired className="min-w-150px form-label m-0 d-flex" />
                    <TextValidator
                        type="datetime-local"
                    />
                </div>
                <div className="spaces width-30 d-flex align-items-center pe-2">
                    <label className="min-w-150px form-label m-0">Người nhập thông tin</label>
                    <TextValidator
                        type="text"
                        
                    />
                </div>
                <div className="spaces width-30 d-flex align-items-center">
                    <label className="min-w-150px form-label m-0">Thời gian PT dự kiến</label>
                    <TextValidator
                        type="datetime-local"
                    />
                </div>
            </div>
            <div className="d-flex mt-2">
                <div className="spaces width-40 pe-2 d-flex align-items-center">
                    <label className="min-w-150px form-label m-0">Thời gian khởi mê</label>
                    <TextValidator
                        type="datetime-local"
                    />
                </div>
                <div className="spaces width-30 d-flex align-items-center pe-2">
                    <LabelRequired label="Thời gian bắt đầu" isRequired className="min-w-150px form-label m-0 d-flex" />
                    <TextValidator
                        type="datetime-local"
                    />
                </div>
                <div className="spaces width-30 d-flex align-items-center">
                    <LabelRequired label="Thời gian kết thúc" isRequired className="min-w-150px form-label m-0 d-flex" />
                    <TextValidator
                        type="datetime-local"
                    />
                </div>
            </div>
            <div className="d-flex mt-2">
                <div className="spaces width-50 d-flex align-items-center pe-2">
                    <label className="min-w-150px form-label m-0">Khoa nhập thông tin</label>
                    <TextValidator
                        type="text"
                        
                    />
                </div>
                <div className="spaces width-50 d-flex align-items-center">
                    <label className="min-w-150px form-label m-0">Phòng nhập thông tin</label>
                    <TextValidator
                        type="text"
                        
                    />
                </div>
            </div>
            <div className="d-flex mt-2">
                <div className="spaces width-40 pe-2 d-flex align-items-center">
                    <label className="min-w-150px form-label m-0">Chẩn đoán</label>
                    <TextValidator
                        type="text"
                        
                    />
                </div>
                <div className="spaces width-60 d-flex align-items-center">
                    <TextValidator
                        type="text"
                        
                    />
                </div>
            </div>
            <div className="d-flex mt-2">
                <div className="spaces width-40 pe-2 d-flex align-items-center">
                    <label className="min-w-150px form-label m-0">Bệnh kèm theo</label>
                    <TextValidator
                        type="text"
                        
                    />
                </div>
                <div className="spaces width-60 d-flex align-items-center">
                    <TextValidator
                        type="text"
                        
                    />
                </div>
            </div>
            <div className="d-flex mt-2">
                <div className="spaces width-40 pe-2 d-flex align-items-center">
                    <label className="min-w-150px form-label m-0">Chẩn đoán trước PT</label>
                    <TextValidator
                        type="text"
                        
                    />
                </div>
                <div className="spaces width-60 d-flex align-items-center">
                    <TextValidator
                        type="text"
                        
                    />
                </div>
            </div>
            <div className="d-flex mt-2">
                <div className="spaces width-100 d-flex align-items-center">
                    <label className="min-w-150px form-label m-0">Dịch vụ PTTT</label>
                    <TextValidator
                        type="text"
                        
                    />
                </div>
            </div>
            <div className="d-flex mt-2">
                <div className="spaces width-100 d-flex align-items-center">
                    <label className="min-w-150px form-label m-0">Cách thức PTTT</label>
                    <TextValidator
                        type="text"
                        
                    />
                </div>
            </div>
            <div className="d-flex mt-2">
                <div className="spaces width-100 d-flex align-items-center">
                    <label className="min-w-150px form-label m-0">Phương pháp PTTT</label>
                    <TextValidator
                        type="text"
                        
                    />
                </div>
            </div>
            <div className="d-flex mt-2">
                <div className="spaces width-40 pe-2 d-flex align-items-center">
                    <label className="min-w-150px form-label m-0">Loại PTTT</label>
                    <Autocomplete
                        className="customs-input w-600px"
                        options={loaiPTTT}
                    />
                </div>
                <div className="spaces width-60 d-flex align-items-center">
                    <label className="min-w-150px form-label m-0">Phương pháp vô cảm</label>
                    <Autocomplete
                        className="customs-input w-100"
                        options={loaiPTTT}
                    />
                </div>
            </div>
            <div className="d-flex mt-2">
                <div className="spaces width-40 pe-2 d-flex align-items-center">
                    <label className="min-w-150px form-label m-0">Tình Hình PTTT</label>
                    <Autocomplete
                        className="customs-input w-600px"
                        options={loaiPTTT}
                    />
                </div>
                <div className="spaces width-30 d-flex align-items-center">
                    <label className="min-w-150px form-label m-0">Nhóm máu</label>
                    <Autocomplete
                        className="customs-input w-600px"
                        options={loaiPTTT}
                    />
                </div>
                <div className="spaces width-30 d-flex align-items-center ps-2">
                    <label className="min-w-80px form-label m-0">Yếu tố RH</label>
                    <Autocomplete
                        className="customs-input w-600px"
                        options={loaiPTTT}
                    />
                </div>
            </div>
            <div className="d-flex mt-2">
                <div className="spaces width-40 pe-2 d-flex align-items-center">
                    <label className="min-w-150px form-label m-0">Tai biến PTTT</label>
                    <Autocomplete
                        className="customs-input w-600px"
                        options={loaiPTTT}
                    />
                </div>
                <div className="spaces width-30 d-flex align-items-center">
                    <label className="min-w-150px form-label m-0">Tử vong</label>
                    <Autocomplete
                        className="customs-input w-600px"
                        options={loaiPTTT}
                    />
                </div>
            </div>
            <div className="d-flex mt-2">
                <div className="spaces width-40 pe-2 d-flex align-items-center">
                    <label className="min-w-150px form-label m-0">Dẫn lưu</label>
                    <TextValidator
                        type="text"
                        
                    />
                </div>
                <div className="spaces width-30 d-flex align-items-center">
                    <label className="min-w-150px form-label m-0">Bấc</label>
                    <TextValidator
                        type="text"
                        
                    />
                </div>
            </div>
            <div className="d-flex mt-2">
                <div className="spaces width-40 pe-2 d-flex align-items-center">
                    <label className="min-w-150px form-label m-0">Ngày rút</label>
                    <Autocomplete
                        className="customs-input w-600px"
                        options={loaiPTTT}
                    />
                </div>
                <div className="spaces width-30 d-flex align-items-center">
                    <label className="min-w-150px form-label m-0">Ngày cắt chỉ</label>
                    <Autocomplete
                        className="customs-input w-600px"
                        options={loaiPTTT}
                    />
                </div>
                <div className="spaces width-30 d-flex align-items-center ps-2">
                    <label className="min-w-80px form-label m-0">Khác</label>
                    <TextValidator
                        type="text"
                        
                    />
                </div>
            </div>
            <div className="d-flex mt-2">
                <div className="spaces width-70 pe-2">
                    <div className="d-flex"> <LabelRequired label="Mô tả thủ thuật" isRequired className="min-w-150px form-label m-0 d-flex" />
                        <a href='/' onClick={(e) => {
                            e.preventDefault();
                            handleOpenModalMoTaChiTiet();
                        }}>
                            <u className="text-cyan">Mô tả chi tiết</u>
                        </a>
                    </div>
                    <TextValidator
                        name="mota"
                        as='textarea'
                        rows={4}
                    />
                </div>
                <div className="spaces width-30">
                    <label className="min-w-150px form-label m-0">Ngày cắt chỉ</label>
                    <TextValidator
                        name="dienBienBenhVaTrieuChung"
                        as='textarea'
                        rows={4}
                    />
                </div>
            </div>

            <ModalMoTaChiTiet show={openModalMoTaChiTiet} handleCloseDialog={() => setOpenModalMoTaChiTiet(false)}/>
        </>
    )
}