import { Column } from "react-table";
import ActionTable from "../../../../component/action-table/ActionTable";
import { TableCustomCell } from "../../../../component/table/components/TableCustomCell";
import { TableCustomHeader } from "../../../../component/table/components/TableCustomHeader";
import { STATUS_ACTION } from "../../../../utils/Constant";
import { INhaCungCap, NhaCungCap } from "../../../models/NhaCungCapModel";
import { TableCustom } from "../../../../component/table/table-custom/TableCustom";

type Props = {
  listNhaCungCap: INhaCungCap[];
  handleOpenNCCDialog: (rowData: INhaCungCap, method?: string) => void;
  handleShouldOpenConfirmDialog: (rowData: INhaCungCap) => void
  rowsPerPage: number
  page: number
};

export default function NhaCungCapTable(props: Props) {
  const { listNhaCungCap, handleOpenNCCDialog, handleShouldOpenConfirmDialog, rowsPerPage, page } = props;

  const handleSelectAction = (data: INhaCungCap, method: string) => {
    switch (method) {
      case STATUS_ACTION.VIEW:
        handleOpenNCCDialog(data, STATUS_ACTION.VIEW);
        break;
      case STATUS_ACTION.DELETE:
        handleShouldOpenConfirmDialog(data);
        break;
      case STATUS_ACTION.EDIT:
        handleOpenNCCDialog(data, STATUS_ACTION.EDIT);
        break;
    }
  };
  const NhaCungCapColumns: ReadonlyArray<Column<INhaCungCap>> = [
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"STT"}
          className="text-center text-white px-3 w-60px"
        />
      ),
      id: "STT",
      Cell: ({ ...props }) => (
        <TableCustomCell className="text-center" data={String(((page - 1) * rowsPerPage + props?.row?.index) + 1)} />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Thao tác"}
          className="text-center text-white px-3 min-w-100px"
        />
      ),
      id: "Thao tác",
      Cell: ({ ...props }) => (
        <ActionTable
          data={props.data[props.row.index]}
          handleSelectAction={handleSelectAction}
          isDelete
          isEdit
          isView
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Mã nhà cung cấp"}
          className="text-center text-white px-3 min-w-150px"
        />
      ),
      id: "Mã nhà cung cấp",
      Cell: ({ ...props }) => (
        <TableCustomCell className="text-center" data={props.data[props.row.index]?.code} />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Tên nhà cung cấp"}
          className="text-center text-white px-3 min-w-200px"
        />
      ),
      id: "Tên nhà cung cấp",
      Cell: ({ ...props }) => (
        <TableCustomCell className="text-start" data={props.data[props.row.index]?.name} />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Điện thoại"}
          className="text-center text-white px-3 min-w-200px"
        />
      ),
      id: "Điện thoại",
      Cell: ({ ...props }) => (
        <TableCustomCell className="text-start" data={props.data[props.row.index]?.phone} />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Địa chỉ"}
          className="text-center text-white px-3 min-w-200px"
        />
      ),
      id: "Địa chỉ",
      Cell: ({ ...props }) => (
        <TableCustomCell className="text-start" data={props.data[props.row.index]?.address} />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Ghi chú"}
          className="text-center text-white px-3 min-w-200px"
        />
      ),
      id: "Ghi chú",
      Cell: ({ ...props }) => (
        <TableCustomCell className="text-start" data={props.data[props.row.index]?.note} />
      ),
    },
  ];
  return (
    <TableCustom<INhaCungCap>
      data={listNhaCungCap}
      hasToolbar={false}
      maxHeight={710}
      columns={NhaCungCapColumns}
      verticalScroll={true}
    />
  );
}
