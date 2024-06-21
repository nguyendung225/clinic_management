import React from "react";
import { Column } from "react-table";
import { TableCustomHeader } from "../../../../component/table/components/TableCustomHeader";
import { TableCustomCell } from "../../../../component/table/components/TableCustomCell";
import ActionTable from "../../../../component/action-table/ActionTable";
import { IKho } from "../../../models/QuanLyKhoModels";
import { TableCustom } from "../../../../component/table/table-custom/TableCustom";

type Props = {
  data: any;
  handleShouldOpenConfirmDialog: (rowData: IKho) => void
  handleSelectAction: (data: IKho, method: string) => void
  rowsPerPage: number
  page: number
};

export default function DSKhoTable(props: Props) {
  const { handleSelectAction, data, rowsPerPage, page } = props;

  const DSThuocColumns: ReadonlyArray<Column<IKho>> = [
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"STT"}
          className="text-center text-white min-w-30px"
        />
      ),
      id: "stt",
      Cell: ({ ...props }) => (
        <TableCustomCell className="text-center cell-first-child" data={String(((page - 1) * rowsPerPage + props?.row?.index) + 1)} />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Thao tác"}
          className="text-center text-white min-w-60px"
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
          title={"Mã kho"}
          className="text-center text-white px-3 min-w-100px"
        />
      ),
      id: "code",
      Cell: ({ ...props }) => (
        <TableCustomCell className="text-center" data={props.data[props.row.index]?.code} />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Tên kho"}
          className="text-center text-white px-3 min-w-150px"
        />
      ),
      id: "name",
      Cell: ({ ...props }) => (
        <TableCustomCell className="text-center" data={props.data[props.row.index]?.name} />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Địa điểm"}
          className="text-center text-white px-3 min-w-150px"
        />
      ),
      id: "address",
      Cell: ({ ...props }) => (
        <TableCustomCell className="text-center" data={props.data[props.row.index]?.address} />
      ),
    },

  ];
  return (
    <div className="dsKho-table">
      <TableCustom<IKho>
        data={data}
        hasToolbar={false}
        minHeight={400}
        columns={DSThuocColumns}
      />
    </div>
  );
}
