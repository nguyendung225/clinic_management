import { Column } from "react-table";
import { DanhMucCSKCBActions } from "./TabCSKCBActions";
import { TableCustomHeader } from "../../component/table/components/TableCustomHeader";
import { TableCustomCell } from "../../component/table/components/TableCustomCell";
import { CSKhamChuaBenh } from "../models/ModelSoKhamChuaBenh";

export const CSKhamChuaBenhColumns: ReadonlyArray<Column<CSKhamChuaBenh>> = [
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"STT"}
        className="text-center text-white px-3 w-30px"
      />
    ),
    id: "STT",
    Cell: ({...props}) => (
      <TableCustomCell className="text-center" data={String(props.row.index + 1)} />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Thao tác"}
        className="text-center text-white px-3 max-w-50px"
      />
    ),
    id: "Thao tác",
    Cell: ({...props}) => (
      <DanhMucCSKCBActions data={props.cell.row.original}/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Mã cơ sở"}
        className="text-center text-white px-3 max-w-100px"
      />
    ),
    id: "Mã cơ sở",
    Cell: ({...props}) => (
      <TableCustomCell className="text-center" data={props.data[props.row.index].maCoSo} />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Tên cơ sở"}
        className="text-center text-white px-3 min-w-200px"
      />
    ),
    id: "Tên cơ sở",
    Cell: ({...props}) => (
      <TableCustomCell className="text-start" data={props.data[props.row.index].tenCoSo} />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Tuyến"}
        className="text-center text-white px-3 min-w-200px"
      />
    ),
    id: "Tuyến",
    Cell: ({...props}) => (
      <TableCustomCell className="text-start" data={props.data[props.row.index].tuyen} />
    ),
  },
]