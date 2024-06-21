import { Column } from "react-table";
import { LichSuHoiChanInterface } from "../../models/DSBenhNhanKhamBenhModels";
import { TableCustomHeader } from "../../../component/table/components/TableCustomHeader";
import { TableCustomCell } from "../../../component/table/components/TableCustomCell";

export const ThuocLichSuHoiChanColumnColumns: ReadonlyArray<Column<LichSuHoiChanInterface>> = [
  {
    Header: (props) => (
      <TableCustomHeader<LichSuHoiChanInterface>
        tableProps={props}
        title={"STT"}
        className="text-center text-light min-w-20px"
      />
    ),
    id: "INDEX",
    Cell: ({ ...props }) => <TableCustomCell className="text-center" data={(props.row.index + 1).toString()} />,
  },
  {
    Header: (props) => (
      <TableCustomHeader<LichSuHoiChanInterface>
        tableProps={props}
        title={"Dược"}
        className="text-center text-light min-w-150px"
      />
    ),
    id: "DUOC",
    Cell: ({ ...props }) => <TableCustomCell className="text-center" data={props.data[props.row.index].ngayTao} />,
  },
];