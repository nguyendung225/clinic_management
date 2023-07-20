import { TableCustomHeader } from "../../../component/table-custom-v2/columns/TableCustomHeader";
import { TableCustomCell } from "../../../component/table-custom-v2/columns/TableCustomCell";
import { Column } from "react-table";
import { NoiTruCapCuuInterface } from "../../models/NoiTruCapCuuModel";

export const NoiTruCapCuuColumns: ReadonlyArray<Column<NoiTruCapCuuInterface>> = [
  {
    Header: (props) => (
      <TableCustomHeader<NoiTruCapCuuInterface>
        tableProps={props}
        title={"STT"}
        className="text-center text-white align-middle bg-pri"
      />
    ),
    id: "index",
    Cell: ({ ...props }) => (
      <TableCustomCell data={String(props.row.index + 1)} className="text-center ps-3"/>
    ),
  },
  
  {
    Header: (props) => (
      <TableCustomHeader<NoiTruCapCuuInterface>
        tableProps={props}
        title={"Mã BN"}
        className="text-center text-white align-middle bg-pri min-w-100px"
      />
    ),
    id: "patientCode",
    Cell: ({ ...props }) => (
      <TableCustomCell data={props.data[props.row.index].maBN} className="text-center"/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<NoiTruCapCuuInterface>
        tableProps={props}
        title={"Tên bệnh nhân"}
        className="text-center text-white align-middle bg-pri min-w-200px"
      />
    ),
    id: "patientName",
    Cell: ({ ...props }) => (
      <TableCustomCell data={props.data[props.row.index].tenBN} className=""/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<NoiTruCapCuuInterface>
        tableProps={props}
        title={"CMT/CCCD"}
        className="text-center text-white align-middle bg-pri min-w-150px"
      />
    ),
    id: "cmtcccd",
    Cell: ({ ...props }) => (
      <TableCustomCell data={props.data[props.row.index].CCCD} className="text-center"/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<NoiTruCapCuuInterface>
        tableProps={props}
        title={"SĐT"}
        className="text-center text-white align-middle bg-pri min-w-150px"
      />
    ),
    id: "address",
    Cell: ({ ...props }) => (
      <TableCustomCell data={String(props.data[props.row.index].SDT)} className="text-center"/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<NoiTruCapCuuInterface>
        tableProps={props}
        title={"Yêu cầu khám"}
        className="text-center text-white align-middle bg-pri min-w-100px"
      />
    ),
    id: "yeuCauKham",
    Cell: ({ ...props }) => (
      <TableCustomCell data={props.data[props.row.index].yeuCauKham} className="text-center"/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<NoiTruCapCuuInterface>
        tableProps={props}
        title={"Phòng khám"}
        className="text-center text-white align-middle bg-pri min-w-100px"
      />
    ),
    id: "phongKham",
    Cell: ({ ...props }) => (
      <TableCustomCell data={props.data[props.row.index].phongKham} className="text-center"/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<NoiTruCapCuuInterface>
        tableProps={props}
        title={"Ngày hẹn"}
        className="text-center text-white align-middle bg-pri min-w-100px"
      />
    ),
    id: "ngayHen",
    Cell: ({ ...props }) => (
      <TableCustomCell data={props.data[props.row.index].ngayHen} className="text-center"/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<NoiTruCapCuuInterface>
        tableProps={props}
        title={"Trạng thái"}
        className="text-center text-white align-middle bg-pri min-w-150px"
      />
    ),
    id: "status",
    Cell: ({ ...props }) => (
      <TableCustomCell data={props.data[props.row.index].trangThai} className="text-center"/>
    )
  },
];