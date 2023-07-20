import { Column } from "react-table";
import { TableCustomHeader } from "../../component/table-custom/columns/TableCustomHeader";
import { TableCustomCell } from "../../component/table-custom/columns/TableCustomCell";
import { useIntl } from "react-intl";
import { AllowanceInfo } from "../models/ContractModels";

function useCustomIntl(messageId: string) {
  const intl = useIntl();
  return intl.formatMessage({ id: messageId });
}
const AllowanceColumn: ReadonlyArray<Column<AllowanceInfo>> = [
  {
    Header: (props) => (
      <TableCustomHeader<AllowanceInfo>
        tableProps={props}
        title={useCustomIntl("ALLOWANCE.NAME")}
        className="text-center text-light min-w-175px"
      />
    ),
    id: "ALLOWANCE.NAME",
    Cell: ({ ...props }) => <TableCustomCell data={props.data[props.row.index].name} />,
  },
  {
    Header: (props) => (
      <TableCustomHeader<AllowanceInfo>
        tableProps={props}
        title={useCustomIntl("ALLOWANCE.VALUE")}
        className="text-center text-light min-w-175px"
      />
    ),
    id: "ALLOWANCE.VALUE",
    Cell: ({ ...props }) => <TableCustomCell data={props.data[props.row.index].value} />,
  },
  {
    Header: (props) => (
      <TableCustomHeader<AllowanceInfo>
        tableProps={props}
        title={useCustomIntl("ALLOWANCE.PAYROLL")}
        className="text-center text-light min-w-175px"
      />
    ),
    id: "ALLOWANCE.PAYROLL",
    Cell: ({ ...props }) => <TableCustomCell data={props.data[props.row.index].payroll} />,
  },
  {
    Header: (props) => (
      <TableCustomHeader<AllowanceInfo>
        tableProps={props}
        title={useCustomIntl("CONTRACT.STATUS")}
        className="text-center text-light min-w-175px"
      />
    ),
    id: "ALLOWANCE.NOTE",
    Cell: ({ ...props }) => <TableCustomCell data={props.data[props.row.index].note} />,
  },
];

export { AllowanceColumn };
