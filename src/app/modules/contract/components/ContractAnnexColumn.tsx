import { Column } from "react-table";
import { useIntl } from "react-intl";
import { ContractAnnexInfo } from "../models/ContractModels";
import { TableCustomHeader } from "../../component/table/components/TableCustomHeader";
import { TableCustomCell } from "../../component/table/components/TableCustomCell";

function useCustomIntl(messageId: string) {
  const intl = useIntl();
  return intl.formatMessage({ id: messageId });
}
const ContractAnnexColumn: ReadonlyArray<Column<ContractAnnexInfo>> = [
  {
    Header: (props) => (
      <TableCustomHeader<ContractAnnexInfo>
        tableProps={props}
        title={useCustomIntl("ANNEX.NUMBER")}
        className="text-center text-light min-w-175px "
      />
    ),
    id: "ANNEX.NUMBER",
    Cell: ({ ...props }) => <TableCustomCell data={props.data[props.row.index].number} />,
  },
  {
    Header: (props) => (
      <TableCustomHeader<ContractAnnexInfo>
        tableProps={props}
        title={useCustomIntl("ANNEX.NAME")}
        className="text-center text-light min-w-175px "
      />
    ),
    id: "ANNEX.NAME",
    Cell: ({ ...props }) => <TableCustomCell data={props.data[props.row.index].name} />,
  },
  {
    Header: (props) => (
      <TableCustomHeader<ContractAnnexInfo>
        tableProps={props}
        title={useCustomIntl("ANNEX.EFFECTIVEDATE")}
        className="text-center text-light min-w-175px "
      />
    ),
    id: "ANNEX.EFFECTIVEDATE",
    Cell: ({ ...props }) => (
      <TableCustomCell data={props.data[props.row.index].effectiveDateAnnex} />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<ContractAnnexInfo>
        tableProps={props}
        title={useCustomIntl("ANNEX.SIGNINGUNIT")}
        className="text-center text-light min-w-175px "
      />
    ),
    id: "ANNEX.SIGNINGUNIT",
    Cell: ({ ...props }) => <TableCustomCell data={props.data[props.row.index].signingUnit} />,
  },
  {
    Header: (props) => (
      <TableCustomHeader<ContractAnnexInfo>
        tableProps={props}
        title={useCustomIntl("CONTRACT.JOBPOSITION")}
        className="text-center text-light min-w-175px "
      />
    ),
    id: "CONTRACT.JOBPOSITION",
    Cell: ({ ...props }) => <TableCustomCell data={props.data[props.row.index].jobPosition} />,
  },
  {
    Header: (props) => (
      <TableCustomHeader<ContractAnnexInfo>
        tableProps={props}
        title={useCustomIntl("ANNEX.TYPECONTRACT")}
        className="text-center text-light min-w-175px "
      />
    ),
    id: "ANNEX.TYPECONTRACT",
    Cell: ({ ...props }) => <TableCustomCell data={props.data[props.row.index].typeContract} />,
  },
  {
    Header: (props) => (
      <TableCustomHeader<ContractAnnexInfo>
        tableProps={props}
        title={useCustomIntl("ANNEX.EFFECTIVEDATECONTRACT")}
        className="text-center text-light min-w-175px "
      />
    ),
    id: "ANNEX.EFFECTIVEDATECONTRACT",
    Cell: ({ ...props }) => (
      <TableCustomCell data={props.data[props.row.index].effectiveDateContract} />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<ContractAnnexInfo>
        tableProps={props}
        title={useCustomIntl("CONTRACT.EXPIRATIONDATE")}
        className="text-center text-light min-w-175px "
      />
    ),
    id: "CONTRACT.EXPIRATIONDATE",
    Cell: ({ ...props }) => <TableCustomCell data={props.data[props.row.index].expirationDate} />,
  },
  {
    Header: (props) => (
      <TableCustomHeader<ContractAnnexInfo>
        tableProps={props}
        title={useCustomIntl("CONTRACT.BASESALARY")}
        className="text-center text-light min-w-175px "
      />
    ),
    id: "CONTRACT.BASESALARY",
    Cell: ({ ...props }) => <TableCustomCell data={props.data[props.row.index].baseSalary} />,
  },
  {
    Header: (props) => (
      <TableCustomHeader<ContractAnnexInfo>
        tableProps={props}
        title={useCustomIntl("CONTRACT.INSURANCECONTRIBUTION")}
        className="text-center text-light min-w-175px "
      />
    ),
    id: "CONTRACT.INSURANCECONTRIBUTION",
    Cell: ({ ...props }) => (
      <TableCustomCell data={props.data[props.row.index].insuranceContribution} />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<ContractAnnexInfo>
        tableProps={props}
        title={useCustomIntl("CONTRACT.SALARYRATE")}
        className="text-center text-light min-w-175px "
      />
    ),
    id: "CONTRACT.SALARYRATE",
    Cell: ({ ...props }) => <TableCustomCell data={props.data[props.row.index].salaryRate} />,
  },
  {
    Header: (props) => (
      <TableCustomHeader<ContractAnnexInfo>
        tableProps={props}
        title={useCustomIntl("CONTRACT.ATTACHMENTS")}
        className="text-center text-light min-w-175px "
      />
    ),
    id: "CONTRACT.ATTACHMENTS",
    Cell: ({ ...props }) => <TableCustomCell data={props.data[props.row.index].attachments} />,
  },
];

export { ContractAnnexColumn };
