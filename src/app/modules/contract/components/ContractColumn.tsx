import { Column } from "react-table";
import { useIntl } from "react-intl";
import { ContractInfo } from "../models/ContractModels";
import { TableCustomHeader } from "../../component/table/components/TableCustomHeader";
import { TableCustomCell } from "../../component/table/components/TableCustomCell";

function useCustomIntl(messageId: string) {
  const intl = useIntl();
  return intl.formatMessage({ id: messageId });
}
const ContractColumn: ReadonlyArray<Column<ContractInfo>> = [
  {
    Header: (props) => (
      <TableCustomHeader<ContractInfo>
        tableProps={props}
        title={useCustomIntl("CONTRACT.SIGNINGDATE")}
        className="text-center text-light min-w-175px "
      />
    ),
    id: "CONTRACT.SIGNINGDATE",
    Cell: ({ ...props }) => <TableCustomCell data={props.data[props.row.index].signingDate} />,
  },
  {
    Header: (props) => (
      <TableCustomHeader<ContractInfo>
        tableProps={props}
        title={useCustomIntl("CONTRACT.NUMBER")}
        className="text-center text-light min-w-175px"
      />
    ),
    id: "CONTRACT.NUMBER",
    Cell: ({ ...props }) => (
      <TableCustomCell data={props.data[props.row.index].number} action={true} />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<ContractInfo>
        tableProps={props}
        title={useCustomIntl("CONTRACT.WORKERFULLNAME")}
        className="text-center text-light min-w-175px"
      />
    ),
    id: "CONTRACT.WORKERFULLNAME",
    Cell: ({ ...props }) => <TableCustomCell data={props.data[props.row.index].workerFullName} />,
  },
  {
    Header: (props) => (
      <TableCustomHeader<ContractInfo>
        tableProps={props}
        title={useCustomIntl("CONTRACT.JOBPOSITION")}
        className="text-center text-light min-w-175px"
      />
    ),
    id: "CONTRACT.JOBPOSITION",
    Cell: ({ ...props }) => <TableCustomCell data={props.data[props.row.index].jobPosition} />,
  },
  {
    Header: (props) => (
      <TableCustomHeader<ContractInfo>
        tableProps={props}
        title={useCustomIntl("CONTRACT.SIGNINGUNIT")}
        className="text-center text-light min-w-175px"
      />
    ),
    id: "CONTRACT.SIGNINGUNIT",
    Cell: ({ ...props }) => <TableCustomCell data={props.data[props.row.index].signingUnit} />,
  },
  {
    Header: (props) => (
      <TableCustomHeader<ContractInfo>
        tableProps={props}
        title={useCustomIntl("CONTRACT.TYPE")}
        className="text-center text-light min-w-175px"
      />
    ),
    id: "CONTRACT.TYPE",
    Cell: ({ ...props }) => <TableCustomCell data={props.data[props.row.index].type} />,
  },
  {
    Header: (props) => (
      <TableCustomHeader<ContractInfo>
        tableProps={props}
        title={useCustomIntl("CONTRACT.DURATION")}
        className="text-center text-light min-w-175px"
      />
    ),
    id: "CONTRACT.DURATION",
    Cell: ({ ...props }) => <TableCustomCell data={props.data[props.row.index].duration} />,
  },
  {
    Header: (props) => (
      <TableCustomHeader<ContractInfo>
        tableProps={props}
        title={useCustomIntl("CONTRACT.EFFECTIVEDATE")}
        className="text-center text-light min-w-175px"
      />
    ),
    id: "CONTRACT.EFFECTIVEDATE",
    Cell: ({ ...props }) => <TableCustomCell data={props.data[props.row.index].effectiveDate} />,
  },
  {
    Header: (props) => (
      <TableCustomHeader<ContractInfo>
        tableProps={props}
        title={useCustomIntl("CONTRACT.EXPIRATIONDATE")}
        className="text-center text-light min-w-175px"
      />
    ),
    id: "CONTRACT.EXPIRATIONDATE",
    Cell: ({ ...props }) => <TableCustomCell data={props.data[props.row.index].expirationDate} />,
  },
  {
    Header: (props) => (
      <TableCustomHeader<ContractInfo>
        tableProps={props}
        title={useCustomIntl("CONTRACT.BASESALARY")}
        className="text-center text-light min-w-175px"
      />
    ),
    id: "CONTRACT.BASESALARY",
    Cell: ({ ...props }) => <TableCustomCell data={props.data[props.row.index].baseSalary} />,
  },
  {
    Header: (props) => (
      <TableCustomHeader<ContractInfo>
        tableProps={props}
        title={useCustomIntl("CONTRACT.INSURANCECONTRIBUTION")}
        className="text-center text-light min-w-175px"
      />
    ),
    id: "CONTRACT.INSURANCECONTRIBUTION",
    Cell: ({ ...props }) => (
      <TableCustomCell data={props.data[props.row.index].insuranceContribution} />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<ContractInfo>
        tableProps={props}
        title={useCustomIntl("CONTRACT.SIGNINGSTATUS")}
        className="text-center text-light min-w-175px"
      />
    ),
    id: "CONTRACT.SIGNINGSTATUS",
    Cell: ({ ...props }) => <TableCustomCell data={props.data[props.row.index].signingStatus} />,
  },
  {
    Header: (props) => (
      <TableCustomHeader<ContractInfo>
        tableProps={props}
        title={useCustomIntl("CONTRACT.STATUS")}
        className="text-center text-light min-w-175px"
      />
    ),
    id: "CONTRACT.STATUS",
    Cell: ({ ...props }) => <TableCustomCell data={props.data[props.row.index].status} />,
  },
];

export { ContractColumn };
