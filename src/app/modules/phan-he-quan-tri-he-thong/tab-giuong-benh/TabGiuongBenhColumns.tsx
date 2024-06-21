import { Column } from "react-table"
import { IGiuongBenh } from "../models/ModelGiuongBenh"
import { DanhMucGiuongBenhTableAction } from "./TabGiuongBenhTableAction"
import { TableCustomHeader } from "../../component/table/components/TableCustomHeader"
import { TableCustomCell } from "../../component/table/components/TableCustomCell"

export const columns: ReadonlyArray<Column<IGiuongBenh>> = [
    {
        Header: (props) => (
            <TableCustomHeader
                tableProps={props}
                title={"STT"}
                className='col-1 text-center text-white px-3 min-w-50px'
            />
        ),
        id: 'stt',
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={(+props.row.id + 1).toString()} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader
                tableProps={props}
                title={"Thao tác"}
                className='col-1 text-center text-white px-3 min-w-100px'
            />
        ),
        id: 'action',
        Cell: ({ ...props }) => <TableCustomCell
            className="d-flex justify-content-center"
            data={
                <DanhMucGiuongBenhTableAction data={props.row.original} />
            } />,
    },
    {
        Header: (props) => (
            <TableCustomHeader
                tableProps={props}
                title={"Mã giường"}
                className='col-1 text-center text-white px-3 min-w-150px'
            />
        ),
        id: 'maGiuong',
        Cell: ({ ...props }) => <TableCustomCell className="min-w-150px" data={props.row.original.maGiuong || ""} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader
                tableProps={props}
                title={"Tên giường"}
                className='col-1 text-center text-white px-3 min-w-250px'
            />
        ),
        id: 'tenGiuong',
        Cell: ({ ...props }) => <TableCustomCell className="min-w-250px" data={props.row.original.tenGiuong || ""} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader
                tableProps={props}
                title={"Khoa"}
                className='col-1 text-center text-white px-3 min-w-250px'
            />
        ),
        id: 'departement',
        Cell: ({ ...props }) => <TableCustomCell className="min-w-250px" data={props.row.original.department.name ||  ""} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader
                tableProps={props}
                title={"Phòng"}
                className='col-1 text-center text-white px-3 min-w-200px'
            />
        ),
        id: 'room',
        Cell: ({ ...props }) => <TableCustomCell data={props.row.original.room.name || ""} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader
                tableProps={props}
                title={"Số lượng nằm ghép tối đa"}
                className='col-1 text-center text-white px-3 min-w-250px'
            />
        ),
        id: 'namGhepToiDa',
        Cell: ({ ...props }) => <TableCustomCell data={props.row.original.namGhepToiDa.toString()} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader
                tableProps={props}
                title={"Giá giường"}
                className='col-1 text-center text-white px-3 min-w-200px'
            />
        ),
        id: 'giaGiuong',
        Cell: ({ ...props }) => <TableCustomCell data={props.row.original.giaGiuong || ""} />,
    },
]