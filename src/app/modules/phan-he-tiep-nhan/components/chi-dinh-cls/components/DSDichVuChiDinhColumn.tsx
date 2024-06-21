import React from 'react';
import { Column } from 'react-table';
import { BangDanhSachDichVuModel } from '../../../../phan-he-tiep-nhan-thanh-toan/models/ChiDinhCLSModel';
import { TableCustomHeader } from '../../../../component/table/components/TableCustomHeader';
import { TableCustomCell } from '../../../../component/table/components/TableCustomCell';

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
            <i className="bi bi-trash3-fill text-danger"></i>
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