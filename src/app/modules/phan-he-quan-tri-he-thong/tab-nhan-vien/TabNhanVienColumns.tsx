import { Column } from "react-table"
import { INhanVien } from "../models/ModelNhanVien"
import moment from "moment"
import { DanhMucNhanVienTableAction } from "./TabNhanVienTableAction"
import { TableCustomHeader } from "../../component/table/components/TableCustomHeader"
import { TableCustomCell } from "../../component/table/components/TableCustomCell"

export const columns: ReadonlyArray<Column<INhanVien>> = [
    {
        Header: (props) => (
            <TableCustomHeader
                tableProps={props}
                title={"STT"}
                className='col-1 text-center text-white px-3 min-w-50px'
            />
        ),
        id: 'STT',
        Cell: ({ ...props } : any) => <TableCustomCell className="text-center" data={((props.row.pageIndex - 1) * props.row.pageSize + +props.row.id + 1).toString()} />,
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
                <DanhMucNhanVienTableAction data={props.row.original}/>
            } />,
    },
    {
        Header: (props) => (
            <TableCustomHeader
                tableProps={props}
                title={"Mã nhân viên"}
                className='col-1 text-center text-white px-3 min-w-150px'
            />
        ),
        id: 'mnv',
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={props.row.original.code || ""} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader
                tableProps={props}
                title={"Họ và tên"}
                className='col-1 text-center text-white px-3 min-w-250px'
            />
        ),
        id: 'hovaten',
        Cell: ({ ...props }) => <TableCustomCell data={props.row.original.person?.name || ""} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader
                tableProps={props}
                title={"Ngày sinh"}
                className='col-1 text-center text-white px-3 min-w-150px'
            />
        ),
        id: 'ngaysinh',
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={props.row.original.person?.birthDay ? moment(props.row.original.person?.birthDay).format("DD/MM/YYYY") : ""} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader
                tableProps={props}
                title={"Chức danh"}
                className='col-1 text-center text-white px-3 min-w-200px'
            />
        ),
        id: 'chucDanh',
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={props.row.original.title?.name || ""} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader
                tableProps={props}
                title={"Chức vụ"}
                className='col-1 text-center text-white px-3 min-w-200px'
            />
        ),
        id: 'chucVu',
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={props.row.original.position?.name || ""} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader
                tableProps={props}
                title={"Học hàm"}
                className='col-1 text-center text-white px-3 min-w-200px'
            />
        ),
        id: 'academicLevel',
        Cell: ({ ...props }) => <TableCustomCell data={props.row.original.academicLevel || ""} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader
                tableProps={props}
                title={"Học vị"}
                className='col-1 text-center text-white px-3 min-w-200px'
            />
        ),
        id: 'academicDegree',
        Cell: ({ ...props }) => <TableCustomCell data={props.row.original.academicDegree || ""} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader
                tableProps={props}
                title={"Bằng cấp"}
                className='col-1 text-center text-white px-3 min-w-200px'
            />
        ),
        id: 'educationalQualification',
        Cell: ({ ...props }) => <TableCustomCell data={props.row.original.educationalQualification || ""} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader
                tableProps={props}
                title={"Chứng chỉ"}
                className='col-1 text-center text-white px-3 min-w-200px'
            />
        ),
        id: 'certification',
        Cell: ({ ...props }) => <TableCustomCell data={props.row.original.certification || ""} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader
                tableProps={props}
                title={"Khoa"}
                className='col-1 text-center text-white px-3 min-w-200px'
            />
        ),
        id: 'department',
        Cell: ({ ...props }) => <TableCustomCell data={props.row.original.department?.name || ""} />,
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
        Cell: ({ ...props }) => <TableCustomCell data={props.row.original.room?.name || ""} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader
                tableProps={props}
                title={"Số năm công tác"}
                className='col-1 text-center text-white px-3 min-w-150px'
            />
        ),
        id: 'totalWorkingYears',
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={props.row.original.totalWorkingYears.toString() || ""} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader
                tableProps={props}
                title={"Trạng thái"}
                className='col-1 text-center text-white px-3 min-w-150px'
            />
        ),
        id: 'status',
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={props.row.original.status?.name || ""} />,
    },
]