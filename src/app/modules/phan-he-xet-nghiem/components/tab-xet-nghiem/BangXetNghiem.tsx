//@ts-nocheck
import { useEffect, useState } from 'react';
import { Column } from 'react-table';
import ContextMenu from '../../../component/ContextMenuV3';
import { TableCustomHeader } from '../../../component/table/components/TableCustomHeader';
import { TableCustomCell } from '../../../component/table/components/TableCustomCell';
import { CODE_XN_MENU, contextMenuDV } from '../../const/constants';
import CombinedTable from '../../../component/table/combined-table/CombinedTable';
import DialogChonMayCLS from './menu-xet-nghiem/DialogChonMayCLS';
import { toast } from 'react-toastify';
import QuanLyThuocVatTuDialog from './menu-xet-nghiem/quan-ly-thuoc-va-vat-tu/QuanLyThuocVatTuDialog';
import ChiDinhThuocDialog from './menu-xet-nghiem/chi-dinh-thuoc/ChiDinhThuocDialog';

type Props = {
    data: any,
    dangThucHien: boolean
}

export default function BangXetNghiem({ dangThucHien, data }: Props) {
    const [loading, setLoading] = useState(true);

    const columnsTableTest: ReadonlyArray<Column<any>> = [
        {
            Header: (props) => (
                <TableCustomHeader
                    tableProps={props}
                    title={"TT"}
                    className="d-flex justify-content-center text-center text-light min-w-30px p-2 border-x"
                />
            ),
            id: "TT",
            isSticky: true,
            Cell: ({ ...props }: any) => (
                <TableCustomCell
                    cellChildIndex={1}
                    tableProps={props}
                    className="text-center spaces py-4 h-100"
                    data={props.cell?.row?.depth ? <div className="text-center">
                        <i className="bi bi-circle-fill text-status-green"></i>
                    </div> : ""}
                />
            ),
        },

        {
            Header: (props: any) => {
                return (
                    <TableCustomHeader
                        tableProps={props}
                        title={"Tên xét nghiệm"}
                        className="text-start min-w-200px p-2 border-x"
                    />
                )
            },
            accessor: "tenXetNghiem",
            id: "tenXetNghiem",
            isSticky: true,
            Cell: (props: any) => (
                <TableCustomCell
                    cellChildIndex={1}
                    tableProps={props}
                    className="text-start spaces py-4 h-100"
                    data={props?.value}
                />
            ),
        },
        {
            Header: (props: any) => (
                <TableCustomHeader
                    tableProps={props}
                    title={"Kết Quả"}
                    className="text-center min-w-150px p-2 border-x"
                />
            ),
            accessor: "ketQua",
            id: "ketQua",
            isSticky: true,
            editable: dangThucHien,
            Cell: (props: any) => (
                <TableCustomCell
                    tableProps={props}
                    className="text-start spaces py-4 h-100"
                    data={props?.value}
                />
            ),
        },
        {
            Header: (props: any) => (
                <TableCustomHeader
                    tableProps={props}
                    title={""}
                    className="text-center min-w-80px p-2 border-x"
                />
            ),
            id: "ketQua2",
            isSticky: true,
            Cell: (props: any) => (
                <TableCustomCell
                    tableProps={props}
                    className="text-start spaces py-4 h-100"
                />
            ),
        },
        {
            Header: (props: any) => (
                <TableCustomHeader
                    tableProps={props}
                    title={"Số lượng"}
                    className="text-center min-w-90px p-2 border-x"
                />
            ),
            accessor: "soLuong",
            id: "soLuong",
            Cell: (props: any) => (
                <TableCustomCell
                    tableProps={props}
                    className="text-center spaces py-4 h-100"
                    data={props?.value}
                />
            ),
        },
        {
            Header: (props: any) => (
                <TableCustomHeader
                    tableProps={props}
                    title={"Đơn vị"}
                    className="text-center min-w-150px p-2 border-x"
                />
            ),
            accessor: "donVi",
            id: "donVi",
            Cell: (props: any) => (
                <TableCustomCell
                    tableProps={props}
                    className="text-start spaces py-4 h-100"
                    data={props?.value}
                />
            ),
        },
        {
            Header: (props: any) => (
                <TableCustomHeader
                    tableProps={props}
                    title={"Bình thường"}
                    className="text-center min-w-150px p-2 border-x"
                />
            ),
            accessor: "binhThuong",
            id: "binhThuong",
            Cell: (props: any) => (
                <TableCustomCell
                    tableProps={props}
                    className="text-start spaces py-4 h-100"
                    data={props?.value}
                />
            ),
        },
        {
            Header: (props: any) => (
                <TableCustomHeader
                    tableProps={props}
                    title={"Loại Bệnh Phẩm"}
                    className="text-center min-w-150px p-2 border-x"
                />
            ),
            accessor: "loaiBenhPham",
            id: "loaiBenhPham",
            Cell: (props: any) => (
                <TableCustomCell
                    tableProps={props}
                    className="text-start spaces py-4 h-100"
                    data={props?.value}
                />
            ),
        },
        {
            Header: (props: any) => (
                <TableCustomHeader
                    tableProps={props}
                    title={"DownLoad"}
                    className="text-center min-w-100px p-2 border-x"
                />
            ),
            accessor: "download",
            id: "download",
            Cell: (props: any) => (
                <TableCustomCell
                    tableProps={props}
                    className="text-start spaces py-4 h-100"
                    data={props?.value}
                />
            ),
        },
        {
            Header: (props: any) => (
                <TableCustomHeader
                    tableProps={props}
                    title={"Máy DownLoad"}
                    className="text-center min-w-125px p-2 border-x"
                />
            ),
            accessor: "mayDownLoad",
            id: "mayDownLoad",
            Cell: (props: any) => (
                <TableCustomCell
                    tableProps={props}
                    className="text-start spaces py-4 h-100"
                    data={props?.value}
                />
            ),
        },
        {
            Header: (props: any) => (
                <TableCustomHeader
                    tableProps={props}
                    title={"Ghi chú(Thực hiện)"}
                    className="text-center min-w-175px p-2 border-x"
                />
            ),
            accessor: "mayDownLoad",
            id: "mayDownLoad2",
            Cell: (props: any) => (
                <TableCustomCell
                    tableProps={props}
                    className="text-start spaces py-4 h-100"
                    data={props?.value}
                />
            ),
        },
        {
            Header: (props: any) => (
                <TableCustomHeader
                    tableProps={props}
                    title={"Máy XN/Người nhập"}
                    className="text-center min-w-175px p-2 border-x"
                />
            ),
            accessor: "mayDownLoad",
            id: "mayDownLoad3",
            Cell: (props: any) => (
                <TableCustomCell
                    tableProps={props}
                    className="text-start spaces py-4 h-100"
                    data={props?.value}
                />
            ),
        },
        {
            Header: (props: any) => (
                <TableCustomHeader
                    tableProps={props}
                    title={"Máy cận lâm sàng"}
                    className="text-center min-w-175px p-2 border-x"
                />
            ),
            accessor: "mayCLS",
            id: "mayDownLoad4",
            Cell: (props: any) => (
                <TableCustomCell
                    tableProps={props}
                    className="text-start spaces py-4 h-100"
                    data={props?.value}
                />
            ),
        },
        {
            Header: (props: any) => (
                <TableCustomHeader
                    tableProps={props}
                    title={"Mã quy trình"}
                    className="text-center min-w-125px p-2 border-x"
                />
            ),
            accessor: "mayDownLoad",
            id: "mayDownLoad5",
            Cell: (props: any) => (
                <TableCustomCell
                    tableProps={props}
                    className="text-start spaces py-4 h-100"
                    data={props?.value}
                />
            ),
        },

    ]

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    const handleRightClick = (e, row) => {
        e.preventDefault()
        if (row?.depth > 0) {
            setContextMenu({ x: e.clientX, y: e.clientY });
            setRowSelect(row)
        }
    }
    const [contextMenu, setContextMenu] = useState<null | {
        x: number;
        y: number;
    }>(null);

    const [openMayCLS, setOpenMayCLS] = useState(false)
    const [openQLThuocVatTuDialog, setOpenQLThuocVatTuDialog] = useState(false)
    const [openChiDinhThuoc, setOpenChiDinhThuoc] = useState(false)
    const [dataKQ, setDataKQ] = useState([])
    const [rowSelect, setRowSelect] = useState([])

    const handleClickOptionContextMenu = (value: any) => {
        setContextMenu(null)
        const menuActions = {
            [CODE_XN_MENU.MAY_CLS]: () => setOpenMayCLS(true),
            [CODE_XN_MENU.SUA_SL]: () => toast.warning("Không thể sửa số lượng dịch vụ này"),
            [CODE_XN_MENU.QUAN_LY_THUOC_VT]: () => setOpenQLThuocVatTuDialog(true),
            [CODE_XN_MENU.CHI_DINH_THUOC_DK]: () => setOpenChiDinhThuoc(true)

        };
        menuActions[value?.code]?.();
    };

    const handleChonMayCLS = (mayCLS) => {
        setOpenMayCLS(false)
        for (let i = 0; i < dataKQ.length; i++) {
            for (let j = 0; j < dataKQ[i].items.length; j++) {
                if (dataKQ[i].items[j].tenXetNghiem === rowSelect?.original?.tenXetNghiem) {
                    dataKQ[i].items[j].mayCLS = mayCLS?.[0]?.original?.tentb
                    break;
                }
            }
        }
        toast.success("Chọn máy cận lâm sàng thành công")
        setDataKQ(dataKQ)
    }

    useEffect(() => {
        setDataKQ(data)
    }, [data])

    return (
        <>
            <CombinedTable userColumns={columnsTableTest} data={dataKQ || []} treeTable loading={loading} height={"calc(100vh - 395px)"} handleRightClick={handleRightClick} />
            {contextMenu && <ContextMenu data={contextMenuDV} target={contextMenu} handleCloseMenu={() => setContextMenu(null)} handleClickOptionContextMenu={handleClickOptionContextMenu} />}
            {openMayCLS && <DialogChonMayCLS selectMayCLS={handleChonMayCLS} handleClose={() => setOpenMayCLS(false)} />}
            {openQLThuocVatTuDialog && <QuanLyThuocVatTuDialog handleClose={() => setOpenQLThuocVatTuDialog(false)} />}
            {openChiDinhThuoc && <ChiDinhThuocDialog handleClose={() => setOpenChiDinhThuoc(false)} />}
        </>
    )
}
