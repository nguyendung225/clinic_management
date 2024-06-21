import { Column } from 'react-table';
import { TableCustomHeader } from '../../../component/table/components/TableCustomHeader';
import { TableCustomCell } from '../../../component/table/components/TableCustomCell';
import { IDichVu } from '../../models/IDichVu';

const DichVuColumn: ReadonlyArray<Column<IDichVu>> = [
    {
        Header: (props) => (
            <TableCustomHeader<IDichVu>
                tableProps={props}
                title={"STT"}
                className="text-center text-light min-w-20px "
            />
        ),
        id: "INDEX",
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={(props.row.index + 1).toString()} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader<IDichVu>
                tableProps={props}
                title={"Mã dịch vụ"}
                className="text-center text-light min-w-100px"
            />
        ),
        id: "MADICHVU",
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={props?.data[props.row.index]?.maDichVu} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader<IDichVu>
                tableProps={props}
                title={"Tên dịch vụ"}
                className="text-center text-light min-w-125px "
            />
        ),
        id: "TENDICHVU",
        Cell: ({ ...props }) => <TableCustomCell data={props?.data[props.row.index]?.tenDichVu} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader<IDichVu>
                tableProps={props}
                title={"Đối tượng TT"}
                className="text-center text-light min-w-125px "
            />
        ),
        id: "DOITUONGTT",
        Cell: ({ ...props }) => {
            return (
                <TableCustomCell className="text-center" data={props?.data[props.row.index]?.doiTuongTT} />
            )
        }   
    },
    {
        Header: (props) => (
            <TableCustomHeader<IDichVu>
                tableProps={props}
                title={"Số lượng"}
                className="text-center text-light min-w-90px "
            />
        ),
        id: "SOLUONG",
        Cell: ({ ...props }) => {
            return (
                <TableCustomCell className="text-center" data={props?.data[props.row.index]?.soLuong.toString()} />
            )
        } 
    },
    {
        Header: (props) => (
            <TableCustomHeader<IDichVu>
                tableProps={props}
                title={"Ghi chú"}
                className="text-center text-light min-w-150px "
            />
        ),
        id: "GHICHU",
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={props?.data[props.row.index]?.ghiChu} />,
    }
]

export default DichVuColumn;