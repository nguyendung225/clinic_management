import { Column } from "react-table";
import { ThuocInfo } from "../../models/DSBenhNhanKhamBenhModels";
import { TableCustomHeader } from "../../../component/table/components/TableCustomHeader";
import { TableCustomCell } from "../../../component/table/components/TableCustomCell";

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
                title={"Tên thuốc"}
                className="text-center text-light min-w-250px"
            />
        ),
        id: "Tên thuốc",
        Cell: ({ ...props }) => <TableCustomCell className="text-start" data={props?.data[props.row.index]?.tenThuoc} />,
    },{
        Header: (props) => (
            <TableCustomHeader<ThuocInfo>
                tableProps={props}
                title={"Hoạt chất"}
                className="text-center text-light min-w-250px"
            />
        ),
        id: "Hoạt chất",
        Cell: ({ ...props }) => <TableCustomCell className="text-start" data={props?.data[props.row.index]?.hoatChat} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader<ThuocInfo>
                tableProps={props}
                title={"Đơn vị"}
                className="text-center text-light min-w-75px"
            />
        ),
        id: "Đơn vị",
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={props?.data[props.row.index]?.donVi} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader<ThuocInfo>
                tableProps={props}
                title={"Số lượng"}
                className="text-center text-light min-w-100px"
            />
        ),
        id: "Số lượng",
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={props?.data[props.row.index]?.soLuong} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader<ThuocInfo>
                tableProps={props}
                title={"Đường dùng"}
                className="text-center text-light min-w-125px"
            />
        ),
        id: "Đường dùng",
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={props?.data[props.row.index]?.duongDung} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader<ThuocInfo>
                tableProps={props}
                title={"Liều dùng"}
                className="text-center text-light min-w-125px"
            />
        ),
        id: "Liều dùng",
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={props?.data[props.row.index]?.lieuDung} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader<ThuocInfo>
                tableProps={props}
                title={"Hướng dẫn sử dụng"}
                className="text-center text-light min-w-250px"
            />
        ),
        id: "Hướng dẫn sử dụng",
        Cell: ({ ...props }) => <TableCustomCell className="text-start" data={props?.data[props.row.index]?.huongDanSuDungThuoc} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader<ThuocInfo>
                tableProps={props}
                title={"Đơn giá"}
                className="text-center text-light min-w-150px"
            />
        ),
        id: "Đơn giá",
        Cell: ({ ...props }) => <TableCustomCell className="text-end" data={props?.data[props.row.index]?.donGia} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader<ThuocInfo>
                tableProps={props}
                title={"Thành tiền"}
                className="text-center text-light min-w-150px"
            />
        ),
        id: "THANHTIEN",
        Cell: ({ ...props }) => <TableCustomCell className="text-end" data={props?.data[props.row.index]?.thanhTien} />,
    },
]

export const columnThuocThayThe = [
    { title: "Mã thuốc", field: "maThuoc", className: "spaces min-w-150 text-center" },
    { title: "Tên thuốc", field: "tenThuoc", className: "spaces min-w-300" },
    { title: "Đơn vị", field: "donVi", className: "spaces min-w-70 text-center" },
    { title: "Tồn kho", field: "tonKho", className: "spaces min-w-70 text-center" },
    { title: "Kho", field: "kho", className: "spaces min-w-150" },
    { title: "Giá BHYT", field: "giaBhyt", className: "spaces min-w-100 text-end" },
    { title: "Giá viện phí", field: "giaVienPhi", className: "spaces min-w-100 text-end" },
    { title: "Giá dịch vụ", field: "giaDichVu", className: "spaces min-w-100 text-end" },
    { title: "Hoạt chất", field: "hoatChat", className: "spaces min-w-150 text-center" },
    { title: "Hàm lượng", field: "hamLuong", className: "spaces min-w-100 text-center" },
    { title: "Nồng độ", field: "nongDo", className: "spaces min-w-100" },
    { title: "Hãng sản xuất", field: "hangSanXuat", className: "spaces min-w-200 text-center" },
  ]