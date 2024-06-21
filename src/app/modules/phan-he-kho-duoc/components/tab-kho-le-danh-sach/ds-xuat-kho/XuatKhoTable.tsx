import { Column } from "react-table";
import { TableCustomCell } from "../../../../component/table/components/TableCustomCell";
import { TableCustomHeader } from "../../../../component/table/components/TableCustomHeader";
import { STATUS_ACTION } from "../../../../utils/Constant";
import { IKho, IXuatKho } from "../../../models/QuanLyKhoModels";
import ActionTable from "../../../../component/action-table/ActionTable";
import { TableCustom } from "../../../../component/table/table-custom/TableCustom";

type Props = {}

const XuatKhoTable = (props: Props) => {
  const handleSelectAction = (data: IXuatKho, method: string) => {
    switch (method) {
      case STATUS_ACTION.VIEW:
        break;
      case STATUS_ACTION.DELETE:
        break;
      case STATUS_ACTION.EDIT:
        break;
    }
  };

  const DSXuatKho: ReadonlyArray<Column<IXuatKho>> = [
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
        <TableCustomCell className="text-center" data={String(props.row.index + 1)} />
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
          title={"Kho xuất"}
          className="text-center text-white px-3 min-w-150px"
        />
      ),
      id: "wareHouse",
      Cell: ({ ...props }) => (
        <TableCustomCell className="text-center" data={props.data[props.row.index]?.wareHouse} />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Người giao"}
          className="text-center text-white px-3 min-w-150px"
        />
      ),
      id: "deliver",
      Cell: ({ ...props }) => (
        <TableCustomCell className="text-center" data={props.data[props.row.index]?.deliver} />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Người nhận"}
          className="text-center text-white px-3 min-w-150px"
        />
      ),
      id: "receiver",
      Cell: ({ ...props }) => (
        <TableCustomCell className="text-center" data={props.data[props.row.index]?.receiver} />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Ngày lập"}
          className="text-center text-white px-3 min-w-150px"
        />
      ),
      id: "createDate",
      Cell: ({ ...props }) => (
        <TableCustomCell className="text-center" data={props.data[props.row.index]?.createDate} />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Người lập"}
          className="text-center text-white px-3 min-w-150px"
        />
      ),
      id: "creator",
      Cell: ({ ...props }) => (
        <TableCustomCell className="text-center" data={props.data[props.row.index]?.creator} />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Mã phiếu"}
          className="text-center text-white px-3 min-w-150px"
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
          title={"Trạng thái"}
          className="text-center text-white px-3 min-w-150px"
        />
      ),
      id: "status",
      Cell: ({ ...props }) => (
        <TableCustomCell className="text-center" data={props.data[props.row.index]?.status} />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Loại hàng hóa"}
          className="text-center text-white px-3 min-w-150px"
        />
      ),
      id: "typeGoods",
      Cell: ({ ...props }) => (
        <TableCustomCell className="text-center" data={props.data[props.row.index]?.typeGoods?.name} />
      ),
    },
  ];
  return (
    <TableCustom<IXuatKho>
      data={[
        {
          id: "123",
          wareHouse: "Kho 1",
          receiver: "Nguời giao 1",
          deliver: "Người nhận 1",
          createDate: "10/10/2023",
          creator: "Người tạo 1",
          code: "12345",
          status: "Đang giao",
          typeGoods: {
            id: 1, name: "Máu"
          },
          wareHouseFor: {id: 1, name: "Trả hàng"},
        },
      ]}
      hasToolbar={false}
      minHeight={450}
      columns={DSXuatKho}
    />
  );
}

export default XuatKhoTable