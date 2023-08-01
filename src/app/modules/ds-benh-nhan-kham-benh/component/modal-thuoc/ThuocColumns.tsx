import { Column } from "react-table";
import { ThuocInfo } from "../../models/DSBenhNhanKhamBenhModels";
import { TableCustomHeader } from "../../../component/table-custom-v2/columns/TableCustomHeader";
import { TableCustomCell } from "../../../component/table-custom-v2/columns/TableCustomCell";

export const ThuocColumns: ReadonlyArray<Column<ThuocInfo>> = [
    {
        Header: (props) => (
            <TableCustomHeader<ThuocInfo>
                tableProps={props}
                title={"STT"}
                className="text-center text-light min-w-20px"
            />
        ),
        id: "INDEX",
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={(props.row.index + 1).toString()} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader<ThuocInfo>
                tableProps={props}
                title={"Dược"}
                className="text-center text-light min-w-150px"
            />
        ),
        id: "DUOC",
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={props?.data[props.row.index]?.tenDuoc} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader<ThuocInfo>
                tableProps={props}
                title={"Sáng"}
                className="text-center text-light min-w-50px"
            />
        ),
        id: "SANG",
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={props?.data[props.row.index]?.sang} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader<ThuocInfo>
                tableProps={props}
                title={"Trưa"}
                className="text-center text-light min-w-50px"
            />
        ),
        id: "TRUA",
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={props?.data[props.row.index]?.trua} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader<ThuocInfo>
                tableProps={props}
                title={"Chiều"}
                className="text-center text-light min-w-50px"
            />
        ),
        id: "CHIEU",
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={props?.data[props.row.index]?.chieu} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader<ThuocInfo>
                tableProps={props}
                title={"Tối"}
                className="text-center text-light min-w-40px"
            />
        ),
        id: "TOI",
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={props?.data[props.row.index]?.toi} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader<ThuocInfo>
                tableProps={props}
                title={"Số ngày"}
                className="text-center text-light min-w-80px"
            />
        ),
        id: "SONGAY",
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={props?.data[props.row.index]?.soNgay} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader<ThuocInfo>
                tableProps={props}
                title={"Số lượng"}
                className="text-center text-light min-w-90px"
            />
        ),
        id: "SOLUONG",
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={props?.data[props.row.index]?.soLuong} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader<ThuocInfo>
                tableProps={props}
                title={"Đơn giá"}
                className="text-center text-light min-w-80px"
            />
        ),
        id: "DONGIA",
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={props?.data[props.row.index]?.donGia} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader<ThuocInfo>
                tableProps={props}
                title={"Thành tiền"}
                className="text-center text-light min-w-100px"
            />
        ),
        id: "THANHTIEN",
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={props?.data[props.row.index]?.thanhTien} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader<ThuocInfo>
                tableProps={props}
                title={"Đường dùng"}
                className="text-center text-light min-w-150px"
            />
        ),
        id: "DUONGDUNG",
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={props?.data[props.row.index]?.duongDung} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader<ThuocInfo>
                tableProps={props}
                title={"Loại thuốc"}
                className="text-center text-light min-w-150px"
            />
        ),
        id: "LOAITHUOC",
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={props?.data[props.row.index]?.loaiThuoc} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader<ThuocInfo>
                tableProps={props}
                title={"Cách dùng"}
                className="text-center text-light min-w-200px"
            />
        ),
        id: "CACHDUNG",
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={props?.data[props.row.index]?.cachDung} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader<ThuocInfo>
                tableProps={props}
                title={"Ghi chú"}
                className="text-center text-light min-w-150px"
            />
        ),
        id: "GHICHU",
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={props?.data[props.row.index]?.ghiChu} />,
    },
]