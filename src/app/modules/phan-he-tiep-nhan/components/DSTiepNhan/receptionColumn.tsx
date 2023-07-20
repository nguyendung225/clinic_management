import { Column } from "react-table";
import { useIntl } from "react-intl";
import { TableCustomHeader } from "../../../component/table-custom/columns/TableCustomHeader";
import { TableCustomCell } from "../../../component/table-custom/columns/TableCustomCell";
import { receptionList } from "../../models/DSTiepNhanModel";

function useCustomIntl(messageId: string) {
  const intl = useIntl();
  return intl.formatMessage({ id: messageId });
}
const receptionColumn: ReadonlyArray<Column<receptionList>> = [
  {
    Header: (props) =>
      <TableCustomHeader<receptionList>
        tableProps={props}
        title={useCustomIntl("TABLE.INDEX")}
        className="text-center text-light min-w-40px"
      />,
    id: "stt",
    Cell: ({ ...props }) => <TableCustomCell
      data={props.row.index + 1 || ""}
      className="cell-first-child"
    />,
  },
  {
    Header: (props) =>
      <TableCustomHeader<receptionList>
        tableProps={props}
        title={useCustomIntl("RECEPTION.CODE")}
        className="text-center text-light min-w-80px"
      />,
    id: "mpi",
    Cell: ({ ...props }) => <TableCustomCell
      data={props.data[props.row.index].mpi || ""}
    />,
  },
  {
    Header: (props) => (
      <TableCustomHeader<receptionList>
        tableProps={props}
        title={useCustomIntl("RECEPTION.NAME")}
        className="text-center text-light min-w-150px"
      />
    ),
    id: "hoTen",
    Cell: ({ ...props }) => <TableCustomCell
      className="text-align-left"
      data={props.data[props.row.index].hoTen || ""} />,
  },
  {
    Header: (props) => (
      <TableCustomHeader<receptionList>
        tableProps={props}
        title={useCustomIntl("RECEPTION.CCCD")}
        className="text-center text-light min-w-100px"
      />
    ),
    id: "soDinhDanh",
    Cell: ({ ...props }) => <TableCustomCell data={props.data[props.row.index].soDinhDanh || ""} />,
  },
  {
    Header: (props) => (
      <TableCustomHeader<receptionList>
        tableProps={props}
        title={useCustomIntl("RECEPTION.PHONE")}
        className="text-center text-light min-w-80px"
      />
    ),
    id: "phone",
    Cell: ({ ...props }) => <TableCustomCell data={props.data[props.row.index]?.person?.phone || ""} />,
  },
  {
    Header: (props) => (
      <TableCustomHeader<receptionList>
        tableProps={props}
        title={useCustomIntl("RECEPTION.ADDRESS")}
        className="text-center text-light min-w-250px"
      />
    ),
    id: "address",
    Cell: ({ ...props }) => <TableCustomCell
      className="text-align-left"
      data={props.data[props.row.index]?.person?.address || ""}
    />,
  },
  {
    Header: (props) => (
      <TableCustomHeader<receptionList>
        tableProps={props}
        title={useCustomIntl("RECEPTION.REQUESTS")}
        className="text-center text-light min-w-150px"
      />
    ),
    id: "yeuCauKham",
    Cell: ({ ...props }) => <TableCustomCell data={props.data[props.row.index].yeuCauKham || ""} />,
  },
  {
    Header: (props) => (
      <TableCustomHeader<receptionList>
        tableProps={props}
        title={useCustomIntl("RECEPTION.CLINIC")}
        className="text-center text-light min-w-200px"
      />
    ),
    id: "phongKham",
    Cell: ({ ...props }) => <TableCustomCell data={props.data[props.row.index].phongKham || ""} />,
  },
  {
    Header: (props) => (
      <TableCustomHeader<receptionList>
        tableProps={props}
        title={useCustomIntl("RECEPTION.RECEPTIONDATE")}
        className="text-center text-light min-w-80px"
      />
    ),
    id: "receptionDate",
    Cell: ({ ...props }) => <TableCustomCell data={props.data[props.row.index].receptionDate || ""} />,
  },
  {
    Header: (props) => (
      <TableCustomHeader<receptionList>
        tableProps={props}
        title={useCustomIntl("RECEPTION.FEE")}
        className="text-center text-light min-w-100px"
      />
    ),
    id: "fee",
    Cell: ({ ...props }) => <TableCustomCell data={props.data[props.row.index].fee || ""} />,
  },
  {
    Header: (props) => (
      <TableCustomHeader<receptionList>
        tableProps={props}
        title={useCustomIntl("RECEPTION.PRIORITIZE")}
        className="text-center text-light min-w-60px"
      />
    ),
    id: "prioritize",
    Cell: ({ ...props }) => <div className="flex-center cell-last-child">
      <input
        id="flexCheckDefault"
        className="form-check-input customs-input-check"
        type="checkbox"
        value=""
        checked={props.data[props.row.index].prioritize}
      />
    </div>,
  },
]

export { receptionColumn };
