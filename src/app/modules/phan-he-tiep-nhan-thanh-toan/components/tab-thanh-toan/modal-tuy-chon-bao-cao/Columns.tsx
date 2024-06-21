import { Column } from "react-table";
import { IPTTT } from "../../../models/ThanhToanModel";
import { TableCustomHeader } from "../../../../component/table/components/TableCustomHeader";
import { TableCustomCell } from "../../../../component/table/components/TableCustomCell";

export const PTTTColumn: ReadonlyArray<Column<IPTTT>> = [
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"mã pttt"}
        className="text-center min-w-100px"
      />
    ),
    id: "ma",
    Cell: ({...props}) => (
      <TableCustomCell tableProps={props} className="text-center" data={props?.row?.original?.ma} />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"tên loại pttt"}
        className="text-center min-w-850px"
      />
    ),
    id: "ten",
    Cell: ({...props}) => (
      <TableCustomCell tableProps={props} data={props?.row?.original?.ten} />
    ),
  },
]

export const locDuLieuColumn: ReadonlyArray<Column<any>> = [
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Tên bộ lọc"}
        className="text-start min-w-100px"
      />
    ),
    id: "ten",
    Cell: ({...props}) => (
      <TableCustomCell tableProps={props} data={props?.row?.original?.ten} />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Dữ liệu"}
        className="text-start min-w-850px"
      />
    ),
    id: "duLieu",
    Cell: ({...props}) => (
      <TableCustomCell tableProps={props} data={props?.row?.original?.duLieu} />
    ),
  },
]