import { Column } from 'react-table'
import { TableCustomCell } from '../../../component/table/components/TableCustomCell'
import { LIST_COLOR_TRANG_THAI_PHIEU } from '../../../utils/Constant';

const chiDinhXetNghiemColumn: ReadonlyArray<Column<any>> = [
    {
        Header: (props) => (<div className='p-0'></div>),
        id: "dv",
        Cell: ({ ...props }) => (
            <TableCustomCell
                tableProps={props}
                listColorPhieu={LIST_COLOR_TRANG_THAI_PHIEU}
                className='d-flex justify-content-between'
                data={
                    <div className='ms-5'>
                        <p className='my-1'>{props.data[props.row.index]?.date}</p>
                        <p className='my-1'>{props.data[props.row.index]?.title}</p>
                    </div>
                } />
        ),
    },
];

const columnsDSXetNghiem = [
    { title: "Tên dịch vụ", field: "tenDichVu", className: "spaces w-30" },
    { title: "SL", field: "soLuong", className: "spaces w-10 text-center" },
    { title: "Kết quả", field: "ketQua", className: "spaces w-20" },
    { title: "Loại bệnh phẩm", field: "loaiBenhPham", className: "spaces w-20" },
    { title: "Đối tượng", field: "doiTuong", className: "spaces w-20" },
]


export { chiDinhXetNghiemColumn, columnsDSXetNghiem }
