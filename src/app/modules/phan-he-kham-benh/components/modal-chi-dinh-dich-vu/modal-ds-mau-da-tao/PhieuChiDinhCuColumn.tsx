import { Column } from "react-table";
import { TableCustomCell } from "../../../../component/table/components/TableCustomCell";
import { TableCustomHeader } from "../../../../component/table/components/TableCustomHeader";

export const DsLoaiPhieuColumn: ReadonlyArray<Column<any>> = [
    {
        Header: (props) => (
            <TableCustomHeader<any>
                tableProps={props}
                title={"Ngày y lệnh"}
                className="text-center text-light min-w-100px fs-8"
            />
        ),
        id: "Ngày y lệnh",
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={props?.data[props?.row?.index].ngayYLenh} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader<any>
                tableProps={props}
                title={"Người chỉ định"}
                className="text-center text-light min-w-125px fs-8"
            />
        ),
        id: "Người chỉ định",
        Cell: ({ ...props }) => {
            let data = props?.data[props?.row?.index].nguoiChiDinh;
            return <TableCustomCell className="text-center" data={data} />
        }
    },
    {
        Header: (props) => (
            <TableCustomHeader<any>
                tableProps={props}
                title={"Khoa phòng"}
                className="text-center text-light min-w-60px fs-8"
            />
        ),
        id: "Khoa phòng",
        Cell: ({ ...props }) => {
            let data = props?.data[props?.row?.index].khoaPhong;
            return <TableCustomCell className="text-center" data={data} />
        },
    },
    {
        Header: (props) => (
            <TableCustomHeader<any>
                tableProps={props}
                title={"Chẩn đoán"}
                className="text-center text-light min-w-60px fs-8"
            />
        ),
        id: "Chẩn đoán",
        Cell: ({ ...props }) => {
            let data = props?.data[props?.row?.index].chanDoan;
            return <TableCustomCell className="text-center" data={data} />
        },
    },
    {
        Header: (props) => (
            <TableCustomHeader<any>
                tableProps={props}
                title={"Loại phiếu"}
                className="text-center text-light min-w-60px fs-8"
            />
        ),
        id: "Loại phiếu",
        Cell: ({ ...props }) => {
            let data = props?.data[props?.row?.index].loaiPhieu;
            return <TableCustomCell className="text-center" data={data} />
        },
    },
];

export const DsPhieuColumn: ReadonlyArray<Column<any>> = [
    {
        Header: (props) => (
            <TableCustomHeader<any>
                tableProps={props}
                title={"STT"}
                className="text-center text-light min-w-40px fs-8"
            />
        ),
        id: "STT",
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={props?.row?.index + 1} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader<any>
                tableProps={props}
                title={"Tên dịch vụ"}
                className="text-center text-light min-w-125px fs-8"
            />
        ),
        id: "Tên dịch vụ",
        Cell: ({ ...props }) => {
            let data = props?.data[props?.row?.index].tenDichVu;
            return <TableCustomCell className="text-center" data={data} />
        }
    },
    {
        Header: (props) => (
            <TableCustomHeader<any>
                tableProps={props}
                title={"Đơn vị"}
                className="text-center text-light min-w-60px fs-8"
            />
        ),
        id: "Đơn vị",
        Cell: ({ ...props }) => {
            let data = props?.data[props?.row?.index].donVi;
            return <TableCustomCell className="text-center" data={data} />
        },
    },
    {
        Header: (props) => (
            <TableCustomHeader<any>
                tableProps={props}
                title={"Số lượng"}
                className="text-center text-light min-w-60px fs-8"
            />
        ),
        id: "Số lượng",
        Cell: ({ ...props }) => {
            let data = props?.data[props?.row?.index].soLuong;
            return <TableCustomCell className="text-center" data={data} />
        },
    },
];