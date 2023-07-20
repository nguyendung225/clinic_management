import React from 'react';
import { Column } from 'react-table';
import { TableCustomHeader } from '../../../../component/table-custom/columns/TableCustomHeader';
import { BangDanhSachDichVuModel } from '../../../models/ChiDinhCLSModel';
import { TableCustomCell } from '../../../../component/table-custom/columns/TableCustomCell';

const DSDichVuChiDinhColumn: ReadonlyArray<Column<BangDanhSachDichVuModel>> = [
    {
        Header: (props) => (
            <TableCustomHeader<BangDanhSachDichVuModel>
                tableProps={props}
                title={"STT"}
                className="text-center text-light min-w-20px "
            />
        ),
        id: "INDEX",
        Cell: ({ ...props }) => <TableCustomCell data={(props.row.index + 1).toString()} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader<BangDanhSachDichVuModel>
                tableProps={props}
                title={"Xóa"}
                className="text-center text-light min-w-40px "
            />
        ),
        id: "Delete",
        Cell: ({ ...props }) => <div className="d-flex justify-content-center">
            {/* <ProjectsActions data={props.cell.row.original} /> */}
            <i className="fa-solid fa-trash"></i>
        </div>,
    },
    {
        Header: (props) => (
            <TableCustomHeader<BangDanhSachDichVuModel>
                tableProps={props}
                title={"Tên dịch vụ"}
                className="text-center text-light min-w-125px "
            />
        ),
        id: "TenDV",
        Cell: ({ ...props }) => <TableCustomCell data={props.data[props.row.index].tenDV} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader<BangDanhSachDichVuModel>
                tableProps={props}
                title={"Số lượng"}
                className="text-center text-light min-w-50px "
            />
        ),
        id: "soLuong",
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={props.data[props.row.index].soLuong.toString()} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader<BangDanhSachDichVuModel>
                tableProps={props}
                title={"Loại MBP"}
                className="text-center text-light min-w-30px "
            />
        ),
        id: "loaiMBP",
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={props.data[props.row.index].loaiMBP} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader<BangDanhSachDichVuModel>
                tableProps={props}
                title={"Phòng thực hiện"}
                className="text-center text-light min-w-50px "
            />
        ),
        id: "phongThucHien",
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={props.data[props.row.index].phongThucHien} />,
    }
]

export default DSDichVuChiDinhColumn;