import { Column } from "react-table";
import { TableCustomHeader } from "../../component/table/components/TableCustomHeader";
import { TableCustomCell } from "../../component/table/components/TableCustomCell";

export const mayCLSColumn: ReadonlyArray<Column<any>> = [
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"STT"}
                className='text-center min-w-50px p-2 border-x'
            />
        ),
        id: 'stt',
        Cell: ({ ...props }: any) => {
            return <TableCustomCell
                tableProps={props}
                className="text-center border spaces py-4 h-100"
                data={+props.row.id + 1}
            />
        },
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Mã thiết bị"}
                className='text-center min-w-125px p-2 border-x'
            />
        ),
        id: 'matb',
        accessor: "matb",
        Cell: ({ ...props }: any) => {
            return <TableCustomCell
                tableProps={props}
                className="text-center border spaces py-4 h-100"
                data={props.row.original.matb}
            />
        },
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Tên thiết bị"}
                className='text-center min-w-50px p-2 border-x'
            />
        ),
        id: 'tentb',
        accessor: "tentb",
        Cell: ({ ...props }: any) => {
            return <TableCustomCell
                tableProps={props}
                className="text-center border spaces py-4 h-100"
                data={props.row.original.tentb}
            />
        },
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Khoa sử dụng"}
                className='text-center text-white min-w-50px p-2 border-x'
            />
        ),
        id: 'khoasudung',
        accessor: "khoaSuDung",
        Cell: ({ ...props }: any) => {
            return <TableCustomCell
                tableProps={props}
                className="text-center border spaces py-4 h-100"
                data={props.row.original.khoaSuDung}
            />
        },
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Model"}
                className='text-center text-white min-w-50px p-2 border-x'
            />
        ),
        id: 'model',
        accessor: "model",
        Cell: ({ ...props }: any) => {
            return <TableCustomCell
                tableProps={props}
                className="text-center border spaces py-4 h-100"
                data={props.row.original.model}
            />
        },
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Serial"}
                className='text-center text-white min-w-50px p-2 border-x'
            />
        ),
        id: 'Serial',
        accessor: "serial",
        Cell: ({ ...props }: any) => {
            return <TableCustomCell
                tableProps={props}
                className="text-center border spaces py-4 h-100"
                data={props.row.original.serial}
            />
        },
    },
];

export const columnsPhongThucHien: ReadonlyArray<Column<any>> = [
    {
        Header: (props) => (
            <TableCustomHeader<any>
                tableProps={props}
                title={"Số phòng"}
                className="d-flex justify-content-center text-center text-light min-w-30px p-2 border-x"
            />
        ),
        id: "Số phòng",
        Cell: ({ ...props }) => (
            <TableCustomCell
                tableProps={props}
                className="text-center border spaces py-4 h-100"
                data={props?.data[props?.row?.index]?.soPhong}
            />
        ),
    },
    {
        Header: (props) => (
            <TableCustomHeader<any>
                tableProps={props}
                title={"Tên Phòng thực hiện"}
                className="d-flex justify-content-center text-center text-light min-w-150px p-2 border-x"
            />
        ),
        id: "Tên Phòng thực hiện",
        Cell: ({ ...props }) => (
            <TableCustomCell
                tableProps={props}
                className="text-center border spaces py-4 h-100"
                data={props?.data[props?.row?.index]?.tenPhong}

            />
        ),
    },
];
export const columnsDanhSachThuoc: ReadonlyArray<Column<any>> = [
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"STT"}
                className='text-center min-w-50px p-2 border-x'
            />
        ),
        id: 'stt',
        Cell: ({ ...props }: any) => {
            return <TableCustomCell
                tableProps={props}
                className="text-center border spaces py-4 h-100"
                data={+props.row.id + 1}
            />
        },
    },
    {
        Header: (props) => (
            <TableCustomHeader<any>
                tableProps={props}
                title={"Tên thuốc"}
                className="d-flex justify-content-center text-center text-light min-w-30px p-2 border-x"
            />
        ),
        id: "Tên thuốc",
        Cell: ({ ...props }) => (
            <TableCustomCell
                tableProps={props}
                className="text-center border spaces py-4 h-100"
                data={props?.data[props?.row?.index]?.soPhong}
            />
        ),
    },
    {
        Header: (props) => (
            <TableCustomHeader<any>
                tableProps={props}
                title={"Mã thuốc"}
                className="d-flex justify-content-center text-center text-light min-w-150px p-2 border-x"
            />
        ),
        id: "Mã thuốc",
        Cell: ({ ...props }) => (
            <TableCustomCell
                tableProps={props}
                className="text-center border spaces py-4 h-100"
                data={props?.data[props?.row?.index]?.tenPhong}

            />
        ),
    },
    {
        Header: (props) => (
            <TableCustomHeader<any>
                tableProps={props}
                title={"Đơn vị"}
                className="d-flex justify-content-center text-center text-light min-w-150px p-2 border-x"
            />
        ),
        id: "Đơn vị",
        Cell: ({ ...props }) => (
            <TableCustomCell
                tableProps={props}
                className="text-center border spaces py-4 h-100"
                data={props?.data[props?.row?.index]?.tenPhong}

            />
        ),
    },
    {
        Header: (props) => (
            <TableCustomHeader<any>
                tableProps={props}
                title={"Kê"}
                className="d-flex justify-content-center text-center text-light min-w-150px p-2 border-x"
            />
        ),
        id: "Kê",
        Cell: ({ ...props }) => (
            <TableCustomCell
                tableProps={props}
                className="text-center border spaces py-4 h-100"
                data={props?.data[props?.row?.index]?.tenPhong}

            />
        ),
    },
    {
        Header: (props) => (
            <TableCustomHeader<any>
                tableProps={props}
                title={"Lĩnh"}
                className="d-flex justify-content-center text-center text-light min-w-150px p-2 border-x"
            />
        ),
        id: "Lĩnh",
        Cell: ({ ...props }) => (
            <TableCustomCell
                tableProps={props}
                className="text-center border spaces py-4 h-100"
                data={props?.data[props?.row?.index]?.tenPhong}

            />
        ),
    },
    {
        Header: (props) => (
            <TableCustomHeader<any>
                tableProps={props}
                title={"Hướng dẫn sử dụng"}
                className="d-flex justify-content-center text-center text-light min-w-150px p-2 border-x"
            />
        ),
        id: "Hướng dẫn sử dụng",
        Cell: ({ ...props }) => (
            <TableCustomCell
                tableProps={props}
                className="text-center border spaces py-4 h-100"
                data={props?.data[props?.row?.index]?.tenPhong}

            />
        ),
    },
    {
        Header: (props) => (
            <TableCustomHeader<any>
                tableProps={props}
                title={"Số lượng"}
                className="d-flex justify-content-center text-center text-light min-w-150px p-2 border-x"
            />
        ),
        id: "Số lượng",
        Cell: ({ ...props }) => (
            <TableCustomCell
                tableProps={props}
                className="text-center border spaces py-4 h-100"
                data={props?.data[props?.row?.index]?.tenPhong}

            />
        ),
    },
];
export const columnsDanhSachVatTu: ReadonlyArray<Column<any>> = [
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"STT"}
                className='text-center min-w-50px p-2 border-x'
            />
        ),
        id: 'stt',
        Cell: ({ ...props }: any) => {
            return <TableCustomCell
                tableProps={props}
                className="text-center border spaces py-4 h-100"
                data={+props.row.id + 1}
            />
        },
    },
    {
        Header: (props) => (
            <TableCustomHeader<any>
                tableProps={props}
                title={"Mã vật tư"}
                className="d-flex justify-content-center text-center text-light min-w-30px p-2 border-x"
            />
        ),
        id: "Mã vật tư",
        Cell: ({ ...props }) => (
            <TableCustomCell
                tableProps={props}
                className="text-center border spaces py-4 h-100"
                data={props?.data[props?.row?.index]?.soPhong}
            />
        ),
    },
    {
        Header: (props) => (
            <TableCustomHeader<any>
                tableProps={props}
                title={"Tên vật tư"}
                className="d-flex justify-content-center text-center text-light min-w-150px p-2 border-x"
            />
        ),
        id: "Tên vật tư",
        Cell: ({ ...props }) => (
            <TableCustomCell
                tableProps={props}
                className="text-center border spaces py-4 h-100"
                data={props?.data[props?.row?.index]?.tenPhong}

            />
        ),
    },
    {
        Header: (props) => (
            <TableCustomHeader<any>
                tableProps={props}
                title={"Đơn vị"}
                className="d-flex justify-content-center text-center text-light min-w-150px p-2 border-x"
            />
        ),
        id: "Đơn vị",
        Cell: ({ ...props }) => (
            <TableCustomCell
                tableProps={props}
                className="text-center border spaces py-4 h-100"
                data={props?.data[props?.row?.index]?.tenPhong}

            />
        ),
    },
    {
        Header: (props) => (
            <TableCustomHeader<any>
                tableProps={props}
                title={"Số lượng"}
                className="d-flex justify-content-center text-center text-light min-w-150px p-2 border-x"
            />
        ),
        id: "Số lượng",
        Cell: ({ ...props }) => (
            <TableCustomCell
                tableProps={props}
                className="text-center border spaces py-4 h-100"
                data={props?.data[props?.row?.index]?.tenPhong}

            />
        ),
    },
];
export const columnsPhieuChiDinh = [
    {
        Header: (props: any) => (
            <TableCustomHeader<any>
                tableProps={props}
                title={"STT"}
                className="p-table text-center min-w-80x"
            />
        ),
        id: "STT",
        Cell: ({ ...props }) => (
            <TableCustomCell
                className="p-table text-center text-uppercase"
                data={props?.data[props?.row?.index]?.tenThuoc || ""}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader<any>
                tableProps={props}
                title={"Mã thuốc"}
                className="p-table text-center min-w-175px"
            />
        ),
        id: "Mã thuốc",
        Cell: ({ ...props }) => (
            <TableCustomCell
                className="p-table text-center text-uppercase"
                data={props?.data[props?.row?.index]?.tenThuoc || ""}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader<any>
                tableProps={props}
                title={"Tên thuốc"}
                className="p-table text-center min-w-175px"
            />
        ),
        id: "Tên thuốc",
        Cell: ({ ...props }) => (
            <TableCustomCell
                className="p-table text-center text-uppercase"
                data={props?.data[props?.row?.index]?.tenThuoc || ""}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader<any>
                tableProps={props}
                title={"Đơn vị"}
                className="p-table text-center min-w-175px"
            />
        ),
        id: "Đơn vị",
        Cell: ({ ...props }) => (
            <TableCustomCell
                className="p-table text-center text-uppercase"
                data={props?.data[props?.row?.index]?.donVi || ""}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader<any>
                tableProps={props}
                title={"Số lượng"}
                className="p-table text-center min-w-175px"
            />
        ),
        id: "Số lượng",
        Cell: ({ ...props }) => (
            <TableCustomCell
                className="p-table text-center text-uppercase"
                data={props?.data[props?.row?.index]?.nongDo || ""}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader<any>
                tableProps={props}
                title={"Ngày dùng"}
                className="p-table text-center min-w-250px"
            />
        ),
        id: "Ngày dùng",
        Cell: ({ ...props }) => (
            <TableCustomCell
                className="p-table text-center text-uppercase"
                data={props?.data[props?.row?.index]?.quyCach || ""}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader<any>
                tableProps={props}
                title={"Đường dùng"}
                className="p-table text-center min-w-250px"
            />
        ),
        id: "Hoạt chất",
        Cell: ({ ...props }) => (
            <TableCustomCell
                className="p-table text-center text-uppercase"
                data={props?.data[props?.row?.index]?.hoatChat || ""}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader<any>
                tableProps={props}
                title={"HDSD"}
                className="p-table text-center min-w-250px"
            />
        ),
        id: "Giá BHYT",
        Cell: ({ ...props }) => (
            <TableCustomCell
                className="p-table text-center text-uppercase"
                data={props?.data[props?.row?.index]?.giaBhyt || ""}
            />
        ),
    },
];
export const columnsDSMauChiDinhThuoc = [
    {
        Header: (props: any) => (
            <TableCustomHeader<any>
                tableProps={props}
                title={"Tên thuốc"}
                className="p-table text-center min-w-175px"
            />
        ),
        id: "Tên thuốc",
        Cell: ({ ...props }) => (
            <TableCustomCell
                className="p-table text-center text-uppercase"
                data={props?.data[props?.row?.index]?.tenThuoc || ""}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader<any>
                tableProps={props}
                title={"Đơn vị"}
                className="p-table text-center min-w-175px"
            />
        ),
        id: "Đơn vị",
        Cell: ({ ...props }) => (
            <TableCustomCell
                className="p-table text-center text-uppercase"
                data={props?.data[props?.row?.index]?.donVi || ""}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader<any>
                tableProps={props}
                title={"Tồn kho"}
                className="p-table text-center min-w-175px"
            />
        ),
        id: "Tồn kho",
        Cell: ({ ...props }) => (
            <TableCustomCell
                className="p-table text-center text-uppercase"
                data={props?.data[props?.row?.index]?.nongDo || ""}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader<any>
                tableProps={props}
                title={"Đơn giá"}
                className="p-table text-center min-w-250px"
            />
        ),
        id: "Đơn giá",
        Cell: ({ ...props }) => (
            <TableCustomCell
                className="p-table text-center text-uppercase"
                data={props?.data[props?.row?.index]?.quyCach || ""}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader<any>
                tableProps={props}
                title={"Giá bán"}
                className="p-table text-center min-w-250px"
            />
        ),
        id: "Hoạt chất",
        Cell: ({ ...props }) => (
            <TableCustomCell
                className="p-table text-center text-uppercase"
                data={props?.data[props?.row?.index]?.hoatChat || ""}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader<any>
                tableProps={props}
                title={"Đối tượng"}
                className="p-table text-center min-w-250px"
            />
        ),
        id: "Đối tượng",
        Cell: ({ ...props }) => (
            <TableCustomCell
                className="p-table text-center text-uppercase"
                data={props?.data[props?.row?.index]?.giaBhyt || ""}
            />
        ),
    },
];
