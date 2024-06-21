// @ts-nocheck
import { Column } from 'react-table'
import { TableCustomHeader } from '../../../component/table/components/TableCustomHeader'
import { TableCustomCell } from '../../../component/table/components/TableCustomCell'

const dichVuCongKhamColumn: ReadonlyArray<Column<any>> = [
    {
        Header: (props) => (
            <TableCustomHeader
                tableProps={props}
                title={"Danh sách dịch vụ"}
                className="col-1 text-center text-white px-3"
            />
        ),
        id: "dv",
        Cell: ({ ...props }) => (
            <TableCustomCell data={
                <div className='ms-2'>
                    <p className='my-1'>{props.data[props.row.index]?.date}</p>
                    <p className='my-1'>{props.data[props.row.index]?.title}</p>
                </div>
            } />
        ),
    },
];

const congKhamColumn: ReadonlyArray<Column<any>> = [
    {
        Header: (props) => (
            <TableCustomHeader
                tableProps={props}
                title={"STT"}
                className=" text-center text-white"
            />
        ),
        id: "STT",
        Cell: ({ ...props }) => (
            <TableCustomCell className="text-center" data={(props.row.index + 1).toString()} />
        ),
    },
    {
        Header: (props) => (
            <TableCustomHeader<any>
                tableProps={props}
                title='Tên dịch vụ'
                className=' min-w-200px text-center '
            />
        ),
        id: 'Tên dịch vụ',
        Cell: ({ ...props }) => (
            <TableCustomCell className='min-w-150px ' data={props.data[props.row.index]?.tenDichVu} />
        ),
    },
    {
        Header: (props) => (
            <TableCustomHeader<any>
                tableProps={props}
                title='SL'
                className=' text-center '
            />
        ),
        id: 'Số lượng',
        Cell: ({ ...props }) => (
            <TableCustomCell className='min-w-150px text-center ' data={props.data[props.row.index]?.soLuong} />
        ),
    },
    {
        Header: (props) => (
            <TableCustomHeader<any>
                tableProps={props}
                title='Loại công khám'
                className='min-w-200px  text-center'
            />
        ),
        id: 'Loại công khám',
        Cell: ({ ...props }) => (
            <TableCustomCell className='min-w-200px text-start ' data={props.data[props.row.index]?.loaiCongKham} />
        ),
    },
    {
        Header: (props) => (
            <TableCustomHeader<any>
                tableProps={props}
                title='Ghi chú'
                className='min-w-200px text-center'
            />
        ),
        id: 'ghiChu',
        Cell: ({ ...props }) => (
            <TableCustomCell className='min-w-200px text-start ' data={props.data[props.row.index]?.ghiChu} />
        ),
    },
]

export { dichVuCongKhamColumn, congKhamColumn }
