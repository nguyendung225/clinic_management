import { Column } from "react-table";
import { TableCustomCell } from "../../../../component/table/components/TableCustomCell";
import { TableCustomHeader } from "../../../../component/table/components/TableCustomHeader";

export const DsMauPhieuDieuTriColumn: ReadonlyArray<Column<any>> = [
    {
        Header: (props) => (
            <TableCustomHeader<any>
                tableProps={props}
                title={"Tên mẫu phiếu điều trị"}
                className="text-center text-light min-w-80px fs-8"
            />
        ),
        id: "Tên mẫu phiếu điều trị",
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={props?.data[props?.row?.index].soGoi} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader<any>
                tableProps={props}
                title={"Thở máy"}
                className="text-center text-light min-w-125px fs-8"
            />
        ),
        id: "Thở máy",
        Cell: ({ ...props }) => {
            let status = props?.data[props?.row?.index].status;
            return <TableCustomCell className="text-center" data={status?.name} />
        }
    },
    {
        Header: (props) => (
            <TableCustomHeader<any>
                tableProps={props}
                title={"Triệu chứng"}
                className="text-center text-light min-w-60px fs-8"
            />
        ),
        id: "Triệu chứng",
        Cell: ({ ...props }) => {
            let status = props?.data[props?.row?.index].status;
            return <TableCustomCell className="text-center" data={status?.name} />
        },
    },
    {
        Header: (props) => (
            <TableCustomHeader<any>
                tableProps={props}
                title={"Khám bộ phận"}
                className="text-center text-light min-w-60px fs-8"
            />
        ),
        id: "Khám bộ phận",
        Cell: ({ ...props }) => {
            let status = props?.data[props?.row?.index].status;
            return <TableCustomCell className="text-center" data={status?.name} />
        },
    },
    {
        Header: (props) => (
            <TableCustomHeader<any>
                tableProps={props}
                title={"Khám toàn thân"}
                className="text-center text-light min-w-60px fs-8"
            />
        ),
        id: "Khám toàn thân",
        Cell: ({ ...props }) => {
            let status = props?.data[props?.row?.index].status;
            return <TableCustomCell className="text-center" data={status?.name} />
        },
    },
    {
        Header: (props) => (
            <TableCustomHeader<any>
                tableProps={props}
                title={"Khám tự túc"}
                className="text-center text-light min-w-60px fs-8"
            />
        ),
        id: "Khám tự túc",
        Cell: ({ ...props }) => {
            let status = props?.data[props?.row?.index].status;
            return <TableCustomCell className="text-center" data={status?.name} />
        },
    },
    {
        Header: (props) => (
            <TableCustomHeader<any>
                tableProps={props}
                title={"Chế độ ăn uống"}
                className="text-center text-light min-w-60px fs-8"
            />
        ),
        id: "Chế độ ăn uống",
        Cell: ({ ...props }) => {
            let status = props?.data[props?.row?.index].status;
            return <TableCustomCell className="text-center" data={status?.name} />
        },
    },
];

export const TrieuChungBenhColumn: ReadonlyArray<Column<any>> = [
    {
        Header: (props) => (
            <TableCustomHeader<any>
                tableProps={props}
                title={"ID"}
                className="text-center text-light min-w-80px fs-8"
            />
        ),
        id: "ID",
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={props?.data[props?.row?.index]?.id} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader<any>
                tableProps={props}
                title={"Triệu chứng bệnh"}
                className="text-center text-light min-w-125px fs-8"
            />
        ),
        id: "Triệu chứng bệnh",
        Cell: ({ ...props }) => {
            return <TableCustomCell data={props?.data[props?.row?.index]?.name} />
        }
    }
];

export const DsPhieuDieuTriCuColumn: ReadonlyArray<Column<any>> = [
    {
        Header: (props) => (
            <TableCustomHeader<any>
                tableProps={props}
                title={"Ngày nhập"}
                className="text-center text-light min-w-80px fs-8"
            />
        ),
        id: "Ngày nhập",
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={props?.data[props?.row?.index]?.ngayNhap} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader<any>
                tableProps={props}
                title={"Người nhập"}
                className="text-center text-light min-w-125px fs-8"
            />
        ),
        id: "Người nhập",
        Cell: ({ ...props }) => {
            return <TableCustomCell className="text-center" data={props?.data[props?.row?.index]?.nguoiNhap} />
        }
    },
    {
        Header: (props) => (
            <TableCustomHeader<any>
                tableProps={props}
                title={"Khoa"}
                className="text-center text-light min-w-125px fs-8"
            />
        ),
        id: "Khoa",
        Cell: ({ ...props }) => {
            return <TableCustomCell className="text-center" data={props?.data[props?.row?.index]?.khoa} />
        }
    }
];