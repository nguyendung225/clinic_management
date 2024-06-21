import React, { useState } from 'react'
import CombinedTable from '../../component/table/combined-table/CombinedTable'
import { CODE_MG, CODE_MG_KHAC, dataDsThuocVatTu, menuDsChiTietPhieu } from '../const/Constants'
import { dsPhieuColumn } from '../const/Columns'
import ContextMenu from '../../component/ContextMenuV3'
import DialogMienGiam from './DialogMienGiam'

type Props = {
    dataChiTietPhieu: any
    getThongTinMienGiam: any
}

const TableChiTietPhieu = ({ dataChiTietPhieu, getThongTinMienGiam }: Props) => {
    const [openDialogMienGiam, setOpenDialogMienGiam] = useState(false)
    const [TTMienGiam, setTTMienGiam] = useState<any>()
    const [rowSelected, setRowSelected] = useState<any>()
    const [contextMenu, setContextMenu] = useState<null | {
        x: number;
        y: number;
    }>(null);


    const handleRightClick = (e: any, row: any) => {
        e.preventDefault()
        setContextMenu({ x: e.clientX, y: e.clientY });
        setRowSelected(row)
        setTTMienGiam({ mienGiam: row?.original?.mienGiam, lyDoMienGiam: row?.original?.lyDoMienGiam })
    }

    const handleClickOptionContextMenu = (value: any) => {
        setContextMenu(null)
        if (value?.code === CODE_MG) {
            setTTMienGiam({ ...TTMienGiam, mienGiam: value?.name?.replace(/%/g, '') })
        }
        else if (value?.code === CODE_MG_KHAC) {
            setTTMienGiam({ name: 0 })
        }
        setOpenDialogMienGiam(true)
    };

    const handleChangeTTMienGiam = (data: any) => {
        dataDsThuocVatTu?.forEach((item) => {
            if (item.ma === rowSelected?.original?.ma) {
                item.mienGiam = data?.mienGiam
                item.lyDoMienGiam = data?.lyDoMienGiam
            }
            getThongTinMienGiam(data)
        })


    }
    return (
        <>
            <CombinedTable handleRightClick={handleRightClick} className='bg-white' userColumns={dsPhieuColumn} data={dataChiTietPhieu || []} height={"100%"} />
            {contextMenu && <ContextMenu data={menuDsChiTietPhieu} target={contextMenu} handleCloseMenu={() => setContextMenu(null)} handleClickOptionContextMenu={handleClickOptionContextMenu} />}
            {openDialogMienGiam && <DialogMienGiam handleChangeTTMienGiam={handleChangeTTMienGiam} TTMienGiam={TTMienGiam} handleClose={() => setOpenDialogMienGiam(false)} />}
        </>
    )
}

export default TableChiTietPhieu