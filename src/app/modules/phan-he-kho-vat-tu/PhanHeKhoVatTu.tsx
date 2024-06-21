import { useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import Autocomplete from '../component/AutocompleteObject';
import ContextMenu from '../component/ContextMenuV2';
import InputSearch from '../component/InputSearch';
import LabelRequired from '../component/LabelRequired';
import SelectTree from '../component/SelectTree';
import CustomMenu from '../component/menu/Menu';
import CombinedTable from '../component/table/combined-table/CombinedTable';
import { TreeKhoNoiTru } from '../phan-he-kho-duoc/consts/PhanHeKhoDuocConst';
import { IContextMenu } from '../phan-he-tiep-nhan-thanh-toan/models/ModelTabDSDangKy';
import { IItemMenu } from '../phan-he-tiep-nhan-thanh-toan/models/ThanhToanModel';
import './PhanHeKhoVatTu.scss';
import DialogThongTinPhieu from './components/DialogThongTinPhieu';
import ModalDSVatTuTrongKho from './components/modal-danh-sach-vat-tu-trong-kho/ModalDSVatTuTrongKho';
import ModalDSVatTuTrongTatCaCacKho from './components/modal-ds-vat-tu-trong-tat-ca-cac-kho/ModalDSVatTuTrongTatCaCacKho';
import ModalNhapTuNhaCungCap from './components/modal-nhap-tu-nha-cung-cap/ModalNhapTuNhaCungCap';
import { dsPhieuKhoVatTuColumn } from './const/columns';
import { CODE_LIST_VAT_TU, OPTION_BO_LOC_KHO, baoCaoMenu, danhSachMenu, dataDsKhoVatTu, listContextDSPhieu, taoPhieuMenu } from './const/constants';
import ModalNhapChietKhau from './modals/ModalNhapChietKhau';
import ModalSuaNgayHoaDon from './modals/ModalSuaNgayHoaDon';
import ModalSuaNgayNhapXuat from './modals/ModalSuaNgayNhapXuat';
type Props = {}

const PhanHeKhoVatTu = (props: Props) => {
    const [codeCollapses, setCodeCollapses] = useState<string[]>([]);
    const [idSelected, setIdSelected] = useState<string>("");
    const [openTTPhieu, setOpenTTPhieu] = useState(false)
    const [TTPhieu, setTTPhieu] = useState<any>()
    const [openModalNhapChietKhau, setOpenModalNhapChietKhau] = useState(false);
    const [openModalSuaNgayHoaDon, setOpenModalSuaNgayHoaDon] = useState(false);
    const [openModalSuaNgayNhapXuat, setOpenModalSuaNgayNhapXuat] = useState(false);
    const [openModalDSVatTuTrongKho, setOpenModalDSVatTuTrongKho] = useState(false);
    const [openModalDSVatTuTatCaCacKho, setOpenModalDSVatTuTatCaCacKho] = useState(false);
    const [openModalNhapTuNhaCungCap, setOpenModalNhapTuNhaCungCap] = useState(false);

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
        setContextMenu(null);
        const options = {
            [CODE_LIST_VAT_TU.NHAP_CHIET_KHAU]: () => setOpenModalNhapChietKhau(true),
            [CODE_LIST_VAT_TU.SUA_NGAY_HOA_DON]: () => setOpenModalSuaNgayHoaDon(true),
            [CODE_LIST_VAT_TU.SUA_NGAY_NHAP_XUAT]: () => setOpenModalSuaNgayNhapXuat(true)
        }

        options[value?.code as string]();
    }

    const handleSelectOptionMenu = (option: IItemMenu) => {
        const options = {
            [CODE_LIST_VAT_TU.DANH_SACH_VAT_TU_TRONG_KHO]: () => setOpenModalDSVatTuTrongKho(true),
            [CODE_LIST_VAT_TU.DANH_SACH_VAT_TU_TAT_CA_CAC_KHO]: () => setOpenModalDSVatTuTatCaCacKho(true),
            [CODE_LIST_VAT_TU.NHAP_TU_NHA_CUNG_CAP]: () => setOpenModalNhapTuNhaCungCap(true),
        }

        options[option?.code]();
    }

    return (
        <div className='kho-vat-tu-container'>
            <div className='kho-vat-tu-menu border'>
                <div className='d-flex spaces h-53 align-items-center gap-5'>
                    <CustomMenu
                        handleSelectOption={() => { }}
                        listMenuItem={[]}
                        menuLabel={
                            <Button className="btn-outline spaces h-29 d-flex justify-content-center min-w-40px">
                                <i className="bi bi-list spaces scale-15 m-0 p-0"></i>
                            </Button>
                        }
                    />
                    <CustomMenu
                        className='h-29 min-w-70px'
                        handleSelectOption={() => { }}
                        listMenuItem={baoCaoMenu}
                        menuLabel={
                            <Button className='btn-fill'>Báo cáo</Button>
                        }
                    />
                    <CustomMenu
                        className='h-29 min-w-85px'
                        handleSelectOption={handleSelectOptionMenu}
                        listMenuItem={danhSachMenu}
                        menuLabel={
                            <Button className='btn-fill '>Danh sách</Button>
                        }
                    />
                    <CustomMenu
                        className='h-29 min-w-90px'
                        handleSelectOption={handleSelectOptionMenu}
                        listMenuItem={taoPhieuMenu}
                        menuLabel={
                            <Button className='btn-fill'>Tạo phiếu</Button>
                        }
                    />
                </div>
                <div className='d-flex align-items-center'>
                    <LabelRequired label="Mã phiếu:" className="min-w-70px" />
                    <input type="text" className='form-control customs-input' />
                </div>
            </div>
            <div className="kho-vat-tu-content">

                <div className='border spaces width-20 bg-white'>
                    <div className='d-flex justify-content-between spaces p-10 gap-8'>
                        <div className="fw-bold fs-4 spaces min-w-76">Kho vật tư</div>
                        <Autocomplete
                            placeholder='Danh sách kho'
                            options={OPTION_BO_LOC_KHO}
                            className="autocomplete-custom-tiep-nhan radius spaces h-26 flex-fill "
                        />
                    </div>
                    <SelectTree
                        className="w-100 border border-top-0"
                        codeCollapses={codeCollapses}
                        handleChangeCollapsesCode={setCodeCollapses}
                        idSelected={idSelected}
                        handleChangeSelectId={setIdSelected}
                        selectTree={TreeKhoNoiTru}
                    />
                </div>
                <div className='spaces width-80 bg-white p-10'>
                    <div className="d-flex align-items-center justify-content-between pb-2">
                        <div className='d-flex align-items-center'>
                            <LabelRequired label="Tìm theo:" className="min-w-100px" />
                            <input type="text" className='form-control customs-input' />
                        </div>
                        <div className='d-flex align-items-center'>
                            <LabelRequired label="Từ ngày:" className="min-w-100px" />
                            <input type="date" className='form-control customs-input' />
                        </div>
                        <div className='d-flex align-items-center'>
                            <LabelRequired label="Đến ngày:" className="min-w-100px" />
                            <input type="date" className='form-control customs-input' />
                        </div>
                        <Button className="btn-fill min-w-50px" type="submit">
                            <i className="bi bi-search"></i>
                            Tìm kiếm
                        </Button>
                    </div>
                    <div className='table-ds-phieu'>
                        <div className='bg-table-gray border spaces px-10 py-4'>
                            <InputSearch
                                handleChange={() => { }}

                                placeholder="Tìm kiếm"
                                type="text"
                                className="spaces w-100" />
                        </div>
                        <CombinedTable
                            handleDoubleClick={(row: any) => {
                                setOpenTTPhieu(true)
                                setTTPhieu(row?.original)
                            }}
                            userColumns={dsPhieuKhoVatTuColumn}
                            data={dataDsKhoVatTu}
                            handleRightClick={handleContextMenu}
                        />

                        {contextMenu && (
                            <div ref={contextRef}>
                                <ContextMenu
                                    contextClientX={contextClientX}
                                    data={listContextDSPhieu}
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
            </div>
            {
                openTTPhieu && <DialogThongTinPhieu TTPhieu={TTPhieu} handleClose={() => setOpenTTPhieu(false)} />
            }

            <ModalNhapChietKhau show={openModalNhapChietKhau} handleCloseDialog={() => setOpenModalNhapChietKhau(false)} />
            <ModalSuaNgayHoaDon show={openModalSuaNgayHoaDon} handleCloseDialog={() => setOpenModalSuaNgayHoaDon(false)} />
            <ModalSuaNgayNhapXuat show={openModalSuaNgayNhapXuat} handleCloseDialog={() => setOpenModalSuaNgayNhapXuat(false)} />
            <ModalDSVatTuTrongKho show={openModalDSVatTuTrongKho} handleCloseDialog={() => setOpenModalDSVatTuTrongKho(false)} />
            <ModalDSVatTuTrongTatCaCacKho show={openModalDSVatTuTatCaCacKho} handleCloseDialog={() => setOpenModalDSVatTuTatCaCacKho(false)} />
            <ModalNhapTuNhaCungCap show={openModalNhapTuNhaCungCap} handleCloseDialog={() => setOpenModalNhapTuNhaCungCap(false)} />
        </div>
    )
}

export default PhanHeKhoVatTu