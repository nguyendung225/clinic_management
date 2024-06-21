import { FC } from "react";
import { useIntl } from "react-intl";
import { TableCustomCell } from "../../../component/table/components/TableCustomCell";
import { Column } from "react-table";
import { TableCustomHeader } from "../../../component/table/components/TableCustomHeader";
import moment from "moment";
import { TableCustom } from "../../../component/table/table-custom/TableCustom";

function useCustomIntl(messageId: string) {
  const intl = useIntl();
  return intl.formatMessage({ id: messageId });
}
type Props = {
  data: any;
  updatePageData: () => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  page: number;
  rowsPerPage: number;
};

const DanhSachChoGoiTable: FC<Props> = (props) => {
  let { data, updatePageData, handleChange, page, rowsPerPage } = props;
  const convertTime = (seconds: number)=> {
    const duration = moment.duration(seconds, 'seconds');
    const formattedTime = moment.utc(duration.asMilliseconds()).format('HH:mm:ss');
    return formattedTime;
  }
  const danhSachTiepNhanColumn: ReadonlyArray<Column<any>> = [
    {
      Header: (props) => (
        <TableCustomHeader<any>
          tableProps={props}
          title={useCustomIntl("TABLE.INDEX")}
          className="text-center min-w-30px"
        />
      ),
      id: "STT",
      Cell: ({ ...props }) => (
        <TableCustomCell
          data={String((page - 1) * rowsPerPage + props?.row?.index + 1)}
          className="text-center"
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader<any>
          tableProps={props}
          title={"Mã BN"}
          className="text-center min-w-30px"
        />
      ),
      id: "Mã BN",
      Cell: ({ ...props }) => (
        <TableCustomCell
          data={`${
            props?.data[props?.row?.index]?.id
              ? "BN00" + props?.data[props?.row?.index]?.id
              : ""
          }`}
          // data={props?.data[props?.row?.index]?.maBn || ""}
          className="text-center"
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader<any>
          tableProps={props}
          title={"Tên BN"}
          className="text-center min-w-300px"
        />
      ),
      id: "Tên BN",
      Cell: ({ ...props }) => (
        <TableCustomCell
          className="text-align-left text-uppercase"
          data={props?.data[props?.row?.index]?.hoTen || ""}
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader<any>
          tableProps={props}
          title={"Năm sinh"}
          className="text-center min-w-30px"
        />
      ),
      id: "namSinh",
      Cell: ({ ...props }) => (
        <TableCustomCell
          data={props?.data[props?.row?.index]?.namSinh || ""}
          className="text-center"
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader<any>
          tableProps={props}
          title={"Thời gian đợi (s)"}
          className="text-center min-w-30px"
        />
      ),
      id: "thoiGianDoi",
      Cell: ({ ...props }) => (
        <TableCustomCell
          // data={props?.data[props?.row?.index]?.thoiGianDoi || ""}
          data={`${
            props?.data[props?.row?.index]?.luc
              ? convertTime(moment().diff(moment(props?.data[props?.row?.index]?.luc,"HH:mm - DD/MM/YYYY"), 's'))
              : "0"
          }`}
          className="text-center"
        />
      ),
    },
  ];

  return (
    <TableCustom<any>
      className="h-100"
      hasToolbar={false}
      data={data}
      columns={danhSachTiepNhanColumn}
      handleSearchByPage={updatePageData}
      handleChangeValueInput={handleChange}
      verticalScroll={true}
    />
  );
};

export default DanhSachChoGoiTable;
