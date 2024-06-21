import { Column } from "react-table";
import ActionTable from "../../../../component/action-table/ActionTable";
import { TableCustomCell } from "../../../../component/table/components/TableCustomCell";
import { TableCustomHeader } from "../../../../component/table/components/TableCustomHeader";
import { STATUS_ACTION } from "../../../../utils/Constant";
import { VatTuHoaChat } from "../../../models/VatTuHoaChatModel";
import { TableCustom } from "../../../../component/table/table-custom/TableCustom";
type Props = {
  handleOpenDSVatTuDialog: (data: VatTuHoaChat, method?: string) => void;
  handleOpenDeleteDialog: (data: VatTuHoaChat, method?: string) => void;
  danhSachVatTuHoaChat: VatTuHoaChat[];
  rowsPerPage: number;
  page: number;
};
export default function VatTuHoaChatTable({ 
  rowsPerPage,
  page,
  handleOpenDSVatTuDialog,
  handleOpenDeleteDialog,
  danhSachVatTuHoaChat

}: Props) {

  const handleSelectAction = (data: VatTuHoaChat, method: string) => {
    switch (method) {
      case STATUS_ACTION.VIEW:
        handleOpenDSVatTuDialog(data, STATUS_ACTION.VIEW);
        break;
      case STATUS_ACTION.DELETE:
        handleOpenDeleteDialog(data);
        break;
      case STATUS_ACTION.EDIT:
        handleOpenDSVatTuDialog(data, STATUS_ACTION.EDIT);
        break;
    };
  }

  const VatTuHoaChatColumns: ReadonlyArray<Column<VatTuHoaChat>> = [
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
          title={"Tên vật tư, hóa chất"}
          className="text-center text-white px-3 min-w-150px"
        />
      ),
      id: "name",
      Cell: ({ ...props }) => <TableCustomCell data={props.data[props.row.index].name} />,
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Mã vật tư, hóa chất"}
          className="text-center text-white px-3 min-w-200px"
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
          title={"Nhóm"}
          className="text-center text-white px-3 min-w-200px"
        />
      ),
      id: "nhom",
      Cell: ({ ...props }) => (
        <TableCustomCell
          className="text-start"
          data={
            (props.data[props.row.index] as any)?.attributeValues?.medicalInsuranceCostGroups?.valueObject[0]?.name
          }
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Hãng"}
          className="text-center text-white px-3 min-w-200px"
        />
      ),
      id: "hang",
      Cell: ({ ...props }) => (
        <TableCustomCell
          className="text-start"
          data={
            (props.data[props.row.index] as any)?.attributeValues?.manufacturer?.valueObject[0]?.name
          }
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Nơi sản xuất"}
          className="text-center text-white px-3 min-w-200px"
        />
      ),
      id: "noiSx",
      Cell: ({ ...props }) => (
        <TableCustomCell
          className="text-center"
          data={
            (props.data[props.row.index] as any)?.attributeValues?.manufacturingCountry?.valueObject[0]?.name
          }
        />
      ),
    },
  ];
  return (
    <>
      <TableCustom<VatTuHoaChat>
        data={danhSachVatTuHoaChat || []}
        hasToolbar={false}
        minHeight={450}
        columns={VatTuHoaChatColumns}
      />
    </>
  );
}
