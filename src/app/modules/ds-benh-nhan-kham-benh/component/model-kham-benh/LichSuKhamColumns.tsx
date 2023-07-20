import { Column } from "react-table";
import { LichSuKhamInfo } from "../../models/DSBenhNhanKhamBenhModels";
import { TableCustomHeader } from "../../../component/table-custom-v2/columns/TableCustomHeader";
import { TableCustomCell } from "../../../component/table-custom-v2/columns/TableCustomCell";

export const LichSuKhamColumns: ReadonlyArray<Column<LichSuKhamInfo>> = [
    {
        Header: (props) => (
            <TableCustomHeader<LichSuKhamInfo>
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
            <TableCustomHeader<LichSuKhamInfo>
                tableProps={props}
                title={"Ngày khám"}
                className="text-center text-light min-w-20px"
            />
        ),
        id: "NGAYKHAM",
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={props.data[props.row.index].ngayKham} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader<LichSuKhamInfo>
                tableProps={props}
                title={"Yêu cầu khám"}
                className="text-center text-light min-w-150px"
            />
        ),
        id: "YEUCAUKHAM",
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={props.data[props.row.index].yeuCauKham} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader<LichSuKhamInfo>
                tableProps={props}
                title={"Bệnh chính"}
                className="text-center text-light min-w-150px"
            />
        ),
        id: "BENHCHINH",
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={props.data[props.row.index].benhChinh} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader<LichSuKhamInfo>
                tableProps={props}
                title={"Bệnh phụ"}
                className="text-center text-light min-w-150px"
            />
        ),
        id: "BENHPHU",
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={props.data[props.row.index].benhPhu} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader<LichSuKhamInfo>
                tableProps={props}
                title={"Ghi chú"}
                className="text-center text-light min-w-150px"
            />
        ),
        id: "GHICHU",
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={props.data[props.row.index].ghiChu} />,
    },
]