import { Column } from "react-table";
import { TableCustomCell } from "../../../../component/table/components/TableCustomCell";
import { TableCustomHeader } from "../../../../component/table/components/TableCustomHeader";

export const DsMauColumn: ReadonlyArray<Column<any>> = [
    {
        Header: (props) => (
            <TableCustomHeader<any>
                tableProps={props}
                title={"Mã chỉ định"}
                className="text-center text-light min-w-100px fs-8"
            />
        ),
        id: "Mã chỉ định",
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={props?.data[props?.row?.index].soGoi} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader<any>
                tableProps={props}
                title={"Tên chỉ định"}
                className="text-center text-light min-w-125px fs-8"
            />
        ),
        id: "Tên chỉ định",
        Cell: ({ ...props }) => {
            let status = props?.data[props?.row?.index].status;
            return <TableCustomCell className="text-center" data={status?.name} />
        }
    },
    {
        Header: (props) => (
            <TableCustomHeader<any>
                tableProps={props}
                title={"Nhóm dịch vụ"}
                className="text-center text-light min-w-60px fs-8"
            />
        ),
        id: "Nhóm dịch vụ",
        Cell: ({ ...props }) => {
            let status = props?.data[props?.row?.index].status;
            return <TableCustomCell className="text-center" data={status?.name} />
        },
    },
    {
        Header: (props) => (
            <TableCustomHeader<any>
                tableProps={props}
                title={"Loại dịch vụ"}
                className="text-center text-light min-w-60px fs-8"
            />
        ),
        id: "Loại dịch vụ",
        Cell: ({ ...props }) => {
            let status = props?.data[props?.row?.index].status;
            return <TableCustomCell className="text-center" data={status?.name} />
        },
    },
    {
        Header: (props) => (
            <TableCustomHeader<any>
                tableProps={props}
                title={"Mẫu riêng của BS"}
                className="text-center text-light min-w-60px fs-8"
            />
        ),
        id: "Mẫu riêng của BS",
        Cell: ({ ...props }) => {
            let status = props?.data[props?.row?.index].status;
            return <TableCustomCell className="text-center" data={status?.name} />
        },
    },
];

export const DsMauChiDinhDichVuColumn: ReadonlyArray<Column<any>> = [
    {
        Header: (props) => (
            <TableCustomHeader<any>
                tableProps={props}
                title={"Mã dịch vụ"}
                className="text-center text-light min-w-80px fs-8"
            />
        ),
        id: "Mã dịch vụ",
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={props?.data[props?.row?.index].soGoi} />,
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
            let status = props?.data[props?.row?.index].status;
            return <TableCustomCell className="text-center" data={status?.name} />
        }
    },
    {
        Header: (props) => (
            <TableCustomHeader<any>
                tableProps={props}
                title={"Giá BHYT"}
                className="text-center text-light min-w-60px fs-8"
            />
        ),
        id: "Giá BHYT",
        Cell: ({ ...props }) => {
            let status = props?.data[props?.row?.index].status;
            return <TableCustomCell className="text-center" data={status?.name} />
        },
    },
    {
        Header: (props) => (
            <TableCustomHeader<any>
                tableProps={props}
                title={"Giá viện phí"}
                className="text-center text-light min-w-60px fs-8"
            />
        ),
        id: "Giá viện phí",
        Cell: ({ ...props }) => {
            let status = props?.data[props?.row?.index].status;
            return <TableCustomCell className="text-center" data={status?.name} />
        },
    },
    {
        Header: (props) => (
            <TableCustomHeader<any>
                tableProps={props}
                title={"Giá dịch vụ"}
                className="text-center text-light min-w-60px fs-8"
            />
        ),
        id: "Giá dịch vụ",
        Cell: ({ ...props }) => {
            let status = props?.data[props?.row?.index].status;
            return <TableCustomCell className="text-center" data={status?.name} />
        },
    },
    {
        Header: (props) => (
            <TableCustomHeader<any>
                tableProps={props}
                title={"Phòng thực hiện"}
                className="text-center text-light min-w-60px fs-8"
            />
        ),
        id: "Phòng thực hiện",
        Cell: ({ ...props }) => {
            let status = props?.data[props?.row?.index].status;
            return <TableCustomCell className="text-center" data={status?.name} />
        },
    },
];