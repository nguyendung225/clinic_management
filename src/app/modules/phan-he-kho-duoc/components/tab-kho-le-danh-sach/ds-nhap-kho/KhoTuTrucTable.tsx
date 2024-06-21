import { Column } from "react-table";
import { TableCustomCell } from "../../../../component/table/components/TableCustomCell";
import { TableCustomHeader } from "../../../../component/table/components/TableCustomHeader";
import { IXuatKho } from "../../../models/QuanLyKhoModels";
import ActionTable from "../../../../component/action-table/ActionTable";
import { CheckStatusKhoTuTruc } from "../../../utils/Utils";
import { TableCustom } from "../../../../component/table/table-custom/TableCustom";

type Props = {
  handleSelectAction: (data: any, method: string) => void
}

const KhoTuTrucTable = (props: Props) => {
  const { handleSelectAction } = props;


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
          className="text-center text-white min-w-100px"
        />
      ),
      id: "actions",
      Cell: ({ ...props }) => (
        <ActionTable
          data={props.data[props.row.index]}
          handleSelectAction={handleSelectAction}
          isImport
          isView
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Kho tủ trực"}
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
          title={"Trạng thái"}
          className="text-center text-white px-3 min-w-150px"
        />
      ),
      id: "status",
      Cell: ({ ...props }) => {
        const status = props.data[props.row.index]?.status
        return (
          <TableCustomCell className="text-center" data={CheckStatusKhoTuTruc(status)?.name || ""} />
        )
      }
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Ngày xuất phiếu"}
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
          title={"Mã phiếu xuất"}
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
          wareHouse: "Kho tủ trực 1",
          receiver: "Nguời giao 1",
          deliver: "Người nhận 1",
          createDate: "10/10/2023",
          creator: "Người tạo 1",
          code: "12345",
          status: "1",
          typeGoods: {
            id: 1, name: "Máu"
          },
          wareHouseFor: { id: 1, name: "Trả hàng" },
        },
      ]}
      hasToolbar={false}
      minHeight={450}
      columns={DSXuatKho}
    />
  );
}

export default KhoTuTrucTable