import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';

import ModalKeThuoc from '../../phan-he-kham-benh/modals/modal-ke-thuoc/ModalKeThuoc';
import ModalKeVatTu from '../../phan-he-kham-benh/modals/modal-ke-vat-tu/ModalKeVatTu';
import { columnsDSDVCdhaTdcn } from '../constants/Columns';
import { LIST_CODE_DIALOG_BANG_CDHA, listItemContextMenuCDHA } from '../constants/Constants';
import KhongThucHienDVDialog from '../modals/ModalKhongThucHienDV';
import ModalNhapThongTinPTTT from '../modals/ModalNhapThongTinPTTT';
import { IDanhSachDVCdhaTdcn } from '../models/ModelsPhanHeCDHAVaTDCN';
import ContextMenu from '../../component/ContextMenuV3';
import DialogChonMayCLS from '../../phan-he-xet-nghiem/components/tab-xet-nghiem/menu-xet-nghiem/DialogChonMayCLS';
import { TableCustom } from '../../component/table/table-custom/TableCustom';

type Props = {
    dataDanhSachDVCdha: IDanhSachDVCdhaTdcn[];
}

const BangDsDichVuCDHA = (props: Props) => {
    const [contextMenu, setContextMenu] = useState<null | {
        x: number;
        y: number;
    }>(null);
    const [openPTTTDialog, setOpenPTTTDialog] = useState(false);
    const [openQuanLyThuocVatTuDialog, setOpenQuanLyThuocVatTuDialog] = useState(false);
    const [openChiDinhThuocVatTuDialog, setOpenChiDinhThuocVatTuDialog] = useState(false);
    const [openHoanTraVatTuDialog, setOpenHoanTraVatTuDialog] = useState(false);
    const [openChiDinhThuocDialog, setOpenChiDinhThuocDialog] = useState(false);
    const [openHoanTraThuocDialog, setOpenHoanTraThuocDialog] = useState(false);
    const [openKhongThucHienDVDialog, setOpenKhongThucHienDVDialog] = useState(false);
    const [openMayThucHienCLS, setOpenMayThucHienCLS] = useState(false);
    const [rowSelect, setRowSelect] = useState<any>([]);
    const [dataSubmit, setDataSubmit] = useState(props.dataDanhSachDVCdha)

    const handleContextMenu = (e: any, row: any) => {
        e.preventDefault();
        setRowSelect(row)
        setContextMenu({ x: e.clientX, y: e.clientY });
    };

    const handleClickOptionContextMenu = (value: any) => {
        const menuActions = {
            [LIST_CODE_DIALOG_BANG_CDHA.NHAP_THONG_TIN_PTTT]: () => setOpenPTTTDialog(true),
            [LIST_CODE_DIALOG_BANG_CDHA.QUAN_LY_THUOC_VAT_TU]: () => setOpenQuanLyThuocVatTuDialog(true),
            [LIST_CODE_DIALOG_BANG_CDHA.CHI_DINH_THUOC_VAT_TU]: () => setOpenChiDinhThuocVatTuDialog(true),
            [LIST_CODE_DIALOG_BANG_CDHA.HOAN_TRA_VAT_TU]: () => setOpenHoanTraVatTuDialog(true),
            [LIST_CODE_DIALOG_BANG_CDHA.CHI_DINH_THUOC]: () => setOpenChiDinhThuocDialog(true),
            [LIST_CODE_DIALOG_BANG_CDHA.HOAN_TRA_THUOC]: () => setOpenHoanTraThuocDialog(true),
            [LIST_CODE_DIALOG_BANG_CDHA.KHONG_THUC_HIEN]: () => setOpenKhongThucHienDVDialog(true),
            [LIST_CODE_DIALOG_BANG_CDHA.MAY_THUC_HIEN_CLS]: () => setOpenMayThucHienCLS(true),
            [LIST_CODE_DIALOG_BANG_CDHA.SUA_SO_LUONG]: () => toast.warning("Không thể sửa số lượng dịch vụ này"),
        };
        menuActions[value?.code]?.();
    };

    const handleChonMayCLS = (mayCLS: any) => {
        setOpenMayThucHienCLS(false)
        for (let i = 0; i < dataSubmit.length; i++) {
            if (dataSubmit[i].mayThucHien === rowSelect.original.mayThucHien) {
                dataSubmit[i].mayThucHien = mayCLS?.[0]?.original?.tentb
                break;
            }
        }
        toast.success("Chọn máy cận lâm sàng thành công")
        setDataSubmit(dataSubmit)
    }

    useEffect(() => {
        setDataSubmit(props.dataDanhSachDVCdha)
    }, [props.dataDanhSachDVCdha])

    return (
        <>
            <div className='mt-2 p-0 flex-1'>
                <TableCustom<IDanhSachDVCdhaTdcn>
                    data={props.dataDanhSachDVCdha}
                    columns={columnsDSDVCdhaTdcn}
                    handleContextMenu={handleContextMenu}
                    verticalScroll={true}
                    className='p-0'
                    maxHeight={"calc(100vh - 525px)"}
                />
            </div>
            {contextMenu && (
                <ContextMenu handleCloseMenu={() => setContextMenu(null)} handleClickOptionContextMenu={handleClickOptionContextMenu} data={listItemContextMenuCDHA} target={contextMenu} />
            )}
            {openPTTTDialog && <ModalNhapThongTinPTTT handleClose={() => setOpenPTTTDialog(false)} />}
            {<ModalKeVatTu open={openQuanLyThuocVatTuDialog} handleClose={() => { setOpenQuanLyThuocVatTuDialog(false) }} />}
            {<ModalKeVatTu open={openChiDinhThuocVatTuDialog} handleClose={() => { setOpenChiDinhThuocVatTuDialog(false) }} />}
            {<ModalKeVatTu open={openHoanTraVatTuDialog} handleClose={() => { setOpenHoanTraVatTuDialog(false) }} />}
            {<ModalKeThuoc open={openChiDinhThuocDialog} handleClose={() => setOpenChiDinhThuocDialog(false)} />}
            {<ModalKeThuoc open={openHoanTraThuocDialog} handleClose={() => setOpenHoanTraThuocDialog(false)} />}
            {openKhongThucHienDVDialog && <KhongThucHienDVDialog handleClose={() => setOpenKhongThucHienDVDialog(false)} />}
            {openMayThucHienCLS && <DialogChonMayCLS selectMayCLS={handleChonMayCLS} handleClose={() => setOpenMayThucHienCLS(false)} />}
        </>
    )
}

export default BangDsDichVuCDHA