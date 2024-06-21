import { Column } from "react-table";
import { ITaiKhoan } from "../models/ModelTaiKhoan";
import { TableCustomHeader } from "../../component/table/components/TableCustomHeader";
import { TableCustomCell } from "../../component/table/components/TableCustomCell";

export const columns: ReadonlyArray<Column<ITaiKhoan>> = [
    {
        Header: (props) => (
            <TableCustomHeader
                tableProps={props}
                title={"STT"}
                className='col-1 fs-7 text-center text-white px-3 min-w-50px'
            />
        ),
        id: 'stt',
        Cell: ({ ...props }: any) => {
            return <TableCustomCell
                className="text-center"
                data={((props.row.pageIndex - 1) * props.row.pageSize + +props.row.id + 1).toString()}
            />
        },
    },
    {
        Header: (props) => (
            <TableCustomHeader
                tableProps={props}
                title={"Tên tài khoản"}
                className='col-1 fs-7 text-center text-white px-3 min-w-150px'
            />
        ),
        id: 'userName',
        Cell: ({ ...props }) => <TableCustomCell
            data={props.row.original.userName || ""} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader
                tableProps={props}
                title={"Họ và tên"}
                className='col-1 fs-7 text-center text-white px-3 min-w-250px'
            />
        ),
        id: 'name',
        Cell: ({ ...props }) => <TableCustomCell
            data={props.row.original.staffName || ""} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader
                tableProps={props}
                title={"Mã nhân viên"}
                className='col-1 fs-7 text-center text-white px-3 min-w-150px'
            />
        ),
        id: 'code',
        Cell: ({ ...props }) => <TableCustomCell
            className="text-center"
            data={props.row.original.staffCode || ""} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader
                tableProps={props}
                title={"Role"}
                className='col-1 fs-7 text-center text-white px-3 min-w-150px'
            />
        ),
        id: 'role',
        Cell: ({ ...props }) => <TableCustomCell
            data={props.row.original.roles?.map((role: { id: string; display: string; }) => role.display).join(", ")} />,
    },
]
