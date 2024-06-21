import { useEffect, useState } from 'react';
import { Column } from 'react-table';
import { toast } from 'react-toastify';
import ContextMenu from '../../../component/ContextMenuV3';
import CombinedTable from '../../../component/table/combined-table/CombinedTable';
import { CODE_DV_MENU, contextMenuDichVu } from '../../const/constants';
import DialogChuyenDV from './menu-dich-vu/DialogChuyenDV';
import { TableCustomHeader } from '../../../component/table/components/TableCustomHeader';
import { TableCustomCell } from '../../../component/table/components/TableCustomCell';

type Props = {
    data: any
}

const BangLayMauBenhPham = ({ data }: Props) => {
    const [loading, setLoading] = useState(true);

    const columnDV: ReadonlyArray<Column<any>> = [
        {
            Header: (props) => (
                <TableCustomHeader
                    tableProps={props}
                    title={"TT"}
                    className="d-flex justify-content-center text-center text-light min-w-30px p-2 border-x"
                />
            ),
            id: "TT",
            Cell: ({ ...props }: any) => (
                <TableCustomCell
                    cellChildIndex={1}
                    tableProps={props}
                    className="text-center spaces py-4 h-100"
                    data={props.cell?.row?.depth ? <div className="text-center">
                        <i className="bi bi-circle-fill text-status-green"></i>&nbsp;
                    </div> : ""}
                />
            ),
        },

        {
            Header: (props: any) => (
                <TableCustomHeader
                    tableProps={props}
                    title={"Tên xét nghiệm"}
                    className="text-start text-light min-w-400px p-2 border-x"
                />
            ),
            accessor: "tenXetNghiem",
            id: "tenXetNghiem",
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
                    title={"Số lượng"}
                    className="text-center text-light min-w-80px p-2 border-x"
                />
            ),
            accessor: "soluong",
            id: "soluong",
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
                    className="text-center text-light min-w-150px p-2 border-x"
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
                    title={"Ghi chú(Chỉ định)"}
                    className="text-center text-light min-w-150px p-2 border-x"
                />
            ),
            accessor: "ghichu",
            id: "ghichu",
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

    const handleRightClick = (e: any, row: any) => {
        e.preventDefault()
        if (row?.depth === 0) {
            setContextMenu({ x: e.clientX, y: e.clientY });
            setRowSelect(row)
        }
    }

    const [contextMenu, setContextMenu] = useState<null | {
        x: number;
        y: number;
    }>(null);


    const [openChuyenDV, setOpenChuyenDV] = useState(false)

    const handleClickOptionContextMenu = (value: any) => {
        const menuActions = {
            [CODE_DV_MENU.CHUYEM_DV]: () => setOpenChuyenDV(true),

        };
        menuActions[value?.code]?.();
    };

    const [dataKQ, setDataKQ] = useState<any>([])
    const [rowSelect, setRowSelect] = useState<any>([])

    const handleChuyenPhongDV = (phong: any) => {
        setOpenChuyenDV(false)
        for (let i = 0; i < dataKQ.length; i++) {
            if (dataKQ[i].tenXetNghiem === rowSelect?.original?.tenXetNghiem) {
                dataKQ[i].tenXetNghiem = phong?.[0]?.original?.tenPhong
                break;
            }
        }
        setDataKQ(dataKQ)

        toast.success("Chuyển phòng dịch vụ thành công")
    }

    useEffect(() => {
        setDataKQ(data)
    }, [data])


    return (
        <>
            <CombinedTable userColumns={columnDV} data={dataKQ || []} treeTable loading={loading} height={"calc(100vh - 340px)"} handleRightClick={handleRightClick} getRowsSelected={setRowSelect} />

            {contextMenu && (
                <ContextMenu handleClickOptionContextMenu={handleClickOptionContextMenu} handleCloseMenu={() => setContextMenu(null)} data={contextMenuDichVu} target={contextMenu} />
            )}
            {
                openChuyenDV && <DialogChuyenDV handleClose={() => setOpenChuyenDV(false)} handleChuyenPhongDV={handleChuyenPhongDV} />
            }
        </>
    )
}

export default BangLayMauBenhPham