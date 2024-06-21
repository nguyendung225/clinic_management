import { Column } from "react-table";
import { TableCustomHeader } from "../../../../component/table/components/TableCustomHeader";
import { TableCustomCell } from "../../../../component/table/components/TableCustomCell";
import ActionTable from "../../../../component/action-table/ActionTable";
import { IPhieuNhapKho } from "../../../models/NhapKhoModels";
import { formatDateAdvanceToString } from "../../../../utils/FormatUtils";
import { STATUS } from "../../../consts/QuanLyKhoConst";
import { TableCustom } from "../../../../component/table/table-custom/TableCustom";

type Props = {
  data: IPhieuNhapKho[];
  method?: string;
  handleSelectAction: (rowData: IPhieuNhapKho, method: string) => void
};

export default function NhapKhoTable(props: Props) {
  const { data, handleSelectAction } = props

  const DSThuocColumns: ReadonlyArray<Column<IPhieuNhapKho>> = [
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
          title={"Tên kho"}
          className="text-center text-white px-3 min-w-150px"
        />
      ),
      id: "tenKho",
      Cell: ({ ...props }) => (
        <TableCustomCell className="text-center" data={props?.data[props?.row?.index]?.warehouseReceipt?.name} />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Tên nhà cung cấp"}
          className="text-center text-white px-3 min-w-150px"
        />
      ),
      id: "name",
      Cell: ({ ...props }) => (
        <TableCustomCell className="text-center" data={props?.data[props?.row?.index]?.supplier?.name} />
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
      id: "loaiHangHoa",
      Cell: ({ ...props }) => (
        <TableCustomCell className="text-center" data={props?.data[props?.row?.index]?.productType?.name} />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Số hợp đồng"}
          className="text-center text-white px-3 min-w-150px"
        />
      ),
      id: "soHopDong",
      Cell: ({ ...props }) => (
        <TableCustomCell className="text-center" data={props?.data[props?.row?.index]?.attribute?.contractNumber} />
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
      id: "ngayLap",
      Cell: ({ ...props }) => (
        <TableCustomCell
          className="text-center"
          data={formatDateAdvanceToString(props?.data[props?.row?.index]?.inputDate)}
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Số lô"}
          className="text-center text-white px-3 min-w-150px"
        />
      ),
      id: "soLo",
      Cell: ({ ...props }) => (
        <TableCustomCell
          className="text-center"
          data={props?.data[props?.row?.index]?.attribute?.consignment}
        />
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
      id: "trangThai",
      Cell: ({ ...props }) => (
        <TableCustomCell
          className="text-center"
          data={STATUS[props?.data[props?.row?.index]?.status as number]?.name}
        />
      ),
    },
  ];
  return (
    <TableCustom<IPhieuNhapKho>
      data={data}
      hasToolbar={false}
      minHeight={450}
      columns={DSThuocColumns}
    />
  );
}
