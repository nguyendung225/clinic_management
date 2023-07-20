import { Column } from "react-table";
import { TableCustomHeader } from "../../../component/table-custom-v2/columns/TableCustomHeader";
import { TableCustomCell } from "../../../component/table-custom-v2/columns/TableCustomCell";
import { ChiTietDichVuInterface } from "../../models/ChiTietDichVuModel";

export const ChiTietDichVuColumns: ReadonlyArray<Column<ChiTietDichVuInterface>> = [
  {
    Header: (props) => (
      <TableCustomHeader<ChiTietDichVuInterface>
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
      <TableCustomHeader<ChiTietDichVuInterface>
        tableProps={props}
        title={"Tên dịch vụ"}
        className="text-center text-white align-middle bg-pri min-w-150px"
      />
    ),
    id: "tenDV",
    Cell: ({ ...props }) => (
      <TableCustomCell data={props.data[props.row.index].tenDV} />
    )
  },
  {
    Header: (props) => (
      <TableCustomHeader<ChiTietDichVuInterface>
        tableProps={props}
        title={"SL"}
        className="text-center text-white align-middle bg-pri"
      />
    ),
    id: "soLuong",
    Cell: ({ ...props }) => (
      <TableCustomCell data={(props.data[props.row.index].soLuong).toLocaleString()} className="text-center"/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<ChiTietDichVuInterface>
        tableProps={props}
        title={"Đơn giá"}
        className="text-center text-white align-middle bg-pri min-w-80px"
      />
    ),
    id: "donGia",
    Cell: ({ ...props }) => (
      <TableCustomCell data={(props.data[props.row.index].donGia).toLocaleString()} className="text-center"/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<ChiTietDichVuInterface>
        tableProps={props}
        title={"Thành tiền"}
        className="text-center text-white align-middle bg-pri min-w-80px"
      />
    ),
    id: "thanhTien",
    Cell: ({ ...props }) => (
      <TableCustomCell data={(props.data[props.row.index].thanhTien).toLocaleString()} className="text-center"/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<ChiTietDichVuInterface>
        tableProps={props}
        title={"BTYT Trả"}
        className="text-center text-white align-middle bg-pri min-w-80px"
      />
    ),
    id: "BHYTTra",
    Cell: ({ ...props }) => (
      <TableCustomCell data={(props.data[props.row.index].BHYTTra).toLocaleString()} className="text-center pe-3"/>
    ),
  },
];