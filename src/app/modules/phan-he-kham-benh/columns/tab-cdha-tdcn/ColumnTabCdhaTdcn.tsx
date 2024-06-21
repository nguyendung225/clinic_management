import { Column } from 'react-table';
import { TableCustomCell } from '../../../component/table/components/TableCustomCell';
import { LIST_COLOR_TRANG_THAI_PHIEU } from '../../../utils/Constant';

const chiDinhCdhaTdcnColumn: ReadonlyArray<Column<any>> = [
    {
        Header: (props) => (<></>),
        id: "dv",
        Cell: ({ ...props }) => (
            <TableCustomCell
                tableProps={props}
                listColorPhieu={LIST_COLOR_TRANG_THAI_PHIEU}
                className='d-flex justify-content-between'
                data={
                    <div className='ms-2'>
                        <p className='my-1'>{props.data[props.row.index]?.date}</p>
                        <p className='my-1'>{props.data[props.row.index]?.title}</p>
                    </div>
                } />
        ),
    },
];

const columnsDSCdhaTdcn = [
    { title: "Tên dịch vụ", field: "tenDichVu", className: "spaces text-start W-300" },
    { title: "SL", field: "soLuong", className: "spaces text-center min-w-50px" },
    { title: "Ghi chú (Chỉ định)", field: "ghiChu", className: "spaces min-w-200px" },
    { title: "Kết luận", field: "ketLuan", className: "spaces min-w-200px" },
    { title: "Đối tượng", field: "doiTuong", className: "spaces text-center min-w-150px" },
]


export { chiDinhCdhaTdcnColumn, columnsDSCdhaTdcn };

