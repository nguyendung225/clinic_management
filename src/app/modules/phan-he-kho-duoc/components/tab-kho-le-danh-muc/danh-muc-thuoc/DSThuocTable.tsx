import { Column } from "react-table";
import ActionTable from "../../../../component/action-table/ActionTable";
import { TableCustomCell } from "../../../../component/table/components/TableCustomCell";
import { TableCustomHeader } from "../../../../component/table/components/TableCustomHeader";
import { STATUS_ACTION } from "../../../../utils/Constant";
import { Thuoc } from "../../../models/ThuocModel";
import { TableCustom } from "../../../../component/table/table-custom/TableCustom";

type Props = {
  handleOpenDSThuocDialog: (data: Thuoc, method?: string) => void;
  dsThuoc: Thuoc[];
  handleOpenDeleteDialog: (data: Thuoc) => void;
  rowsPerPage: number;
  page: number;
};

export default function DSThuocTable({
  handleOpenDSThuocDialog,
  dsThuoc,
  handleOpenDeleteDialog,
  rowsPerPage,
  page,
}: Props) {
  const handleSelectAction = (data: Thuoc, method: string) => {
    switch (method) {
      case STATUS_ACTION.VIEW:
        handleOpenDSThuocDialog(data, STATUS_ACTION.VIEW);
        break;
      case STATUS_ACTION.DELETE:
        handleOpenDeleteDialog(data);
        break;
      case STATUS_ACTION.EDIT:
        handleOpenDSThuocDialog(data, STATUS_ACTION.EDIT);
        break;
    }
  };
  const DSThuocColumns: ReadonlyArray<Column<Thuoc>> = [
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"STT"}
          className="text-center text-white px-3 w-60px"
        />
      ),
      id: "stt",
      Cell: ({ ...props }) => (
        <TableCustomCell
          className="text-center"
          data={String((page - 1) * rowsPerPage + props?.row?.index + 1)}
        />
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
      id: "actions",
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
          title={"Tên thuốc"}
          className="text-center text-white px-3 min-w-200px"
        />
      ),
      id: "name",
      Cell: ({ ...props }) => (
        <TableCustomCell className="text-center" data={props.data[props.row.index].name} />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Mã thuốc"}
          className="text-center text-white px-3 min-w-125px"
        />
      ),
      id: "code",
      Cell: ({ ...props }) => (
        <TableCustomCell className="text-center" data={props.data[props.row.index].code} />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Nước sản xuất"}
          className="text-center text-white px-3 min-w-125px"
        />
      ),
      id: "manufacturer",
      Cell: ({ ...props }) => (
        <TableCustomCell
          className="text-center"
          data={
            props.data[props.row.index].attributeValues?.manufacturingCountry?.valueObject?.[0]?.name
          }
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Tên hoạt chất"}
          className="text-center text-white px-3 min-w-250px"
        />
      ),
      id: "activeGradient",
      Cell: ({ ...props }) => (
        <TableCustomCell
          className="text-center"
          data={props.data[props.row.index].attributeValues?.activeGradient?.valueObject?.[0]?.name}
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Nồng độ"}
          className="text-center text-white px-3 min-w-100px"
        />
      ),
      id: "intensity",
      Cell: ({ ...props }) => (
        <TableCustomCell
          className="text-center"
          data={props.data[props.row.index].attributeValues?.intensity?.valueText}
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Hàm lượng"}
          className="text-center text-white px-3 min-w-100px"
        />
      ),
      id: "concentration",
      Cell: ({ ...props }) => (
        <TableCustomCell
          className="text-center"
          data={props.data[props.row.index].attributeValues?.concentration?.valueText}
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Số đăng kí"}
          className="text-center text-white px-3 min-w-125px"
        />
      ),
      id: "registrationNumber",
      Cell: ({ ...props }) => (
        <TableCustomCell
          className="text-center"
          data={props.data[props.row.index].registrationNumber}
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Loại thuốc"}
          className="text-center text-white px-3 min-w-150px"
        />
      ),
      id: "drugType",
      Cell: ({ ...props }) => (
        <TableCustomCell
          className="text-center"
          data={props.data[props.row.index].attributeValues?.drugType?.valueObject?.[0]?.name}
        />
      ),
    },
  ];
  return (
    <div className="dsThuoc-table">
      <TableCustom<Thuoc>
        data={dsThuoc}
        hasToolbar={false}
        minHeight={400}
        columns={DSThuocColumns}
      />
    </div>
  );
}
