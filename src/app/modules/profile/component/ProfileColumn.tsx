import { Column } from "react-table";
import { TableCustomHeader } from "../../component/table-custom/columns/TableCustomHeader";
import { TableCustomCell } from "../../component/table-custom/columns/TableCustomCell";
import { useIntl } from "react-intl";
import { ProfileInfo } from "../models/ProfileModels";

function useCustomIntl(messageId: string) {
  const intl = useIntl();
  return intl.formatMessage({ id: messageId });
}
const ProfileColumn: ReadonlyArray<Column<ProfileInfo>> = [
  {
    Header: (props) => (
      <TableCustomHeader<ProfileInfo>
        tableProps={props}
        title={useCustomIntl("PROFILE.CODE")}
        className="text-center text-light min-w-150px"
      />
    ),
    id: "code",
    Cell: ({ ...props }) => <TableCustomCell data={props.data[props.row.index].code} />,
  },
  {
    Header: (props) => (
      <TableCustomHeader<ProfileInfo>
        tableProps={props}
        title={useCustomIntl("PROFILE.NAME")}
        className="text-center text-light min-w-175px"
      />
    ),
    id: "name",
    Cell: ({ ...props }) => <TableCustomCell data={props.data[props.row.index].name} />,
  },
  {
    Header: (props) => (
      <TableCustomHeader<ProfileInfo>
        tableProps={props}
        title={useCustomIntl("PROFILE.GENDER")}
        className="text-center text-light min-w-175px"
      />
    ),
    id: "gender",
    Cell: ({ ...props }) => <TableCustomCell data={props.data[props.row.index].gender} />,
  },
  {
    Header: (props) => (
      <TableCustomHeader<ProfileInfo>
        tableProps={props}
        title={useCustomIntl("PROFILE.BIRTHDAY")}
        className="text-center text-light min-w-175px"
      />
    ),
    id: "birthdate",
    Cell: ({ ...props }) => <TableCustomCell data={props.data[props.row.index].birthdate} />,
  },
  {
    Header: (props) => (
      <TableCustomHeader<ProfileInfo>
        tableProps={props}
        title={useCustomIntl("PROFILE.PHONE")}
        className="text-center text-light min-w-175px"
      />
    ),
    id: "phone",
    Cell: ({ ...props }) => <TableCustomCell data={props.data[props.row.index].phone} />,
  },
  {
    Header: (props) => (
      <TableCustomHeader<ProfileInfo>
        tableProps={props}
        title={useCustomIntl("PROFILE.EMAIL")}
        className="text-center text-light min-w-175px"
      />
    ),
    id: "email",
    Cell: ({ ...props }) => <TableCustomCell data={props.data[props.row.index].emailCaNhan} />,
  },
  {
    Header: (props) => (
      <TableCustomHeader<ProfileInfo>
        tableProps={props}
        title={useCustomIntl("PROFILE.DEPARTMENT")}
        className="text-center text-light min-w-175px"
      />
    ),
    id: "phongBan",
    Cell: ({ ...props }) => <TableCustomCell data={props.data[props.row.index].phongBan} />,
  },
  {
    Header: (props) => (
      <TableCustomHeader<ProfileInfo>
        tableProps={props}
        title={useCustomIntl("PROFILE.POSITION")}
        className="text-center text-light min-w-175px"
      />
    ),
    id: "viTriCongViecText",
    Cell: ({ ...props }) => <TableCustomCell data={props.data[props.row.index].viTriCongViecText} />,
  },
  {
    Header: (props) => (
      <TableCustomHeader<ProfileInfo>
        tableProps={props}
        title={useCustomIntl("PROFILE.ROLE")}
        className="text-center text-light min-w-175px"
      />
    ),
    id: "chucVuText",
    Cell: ({ ...props }) => <TableCustomCell data={props.data[props.row.index].chucVuText} />,
  },
];

export { ProfileColumn };
