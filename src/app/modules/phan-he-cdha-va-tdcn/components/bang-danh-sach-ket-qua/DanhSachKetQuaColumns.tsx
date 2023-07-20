import { Column } from "react-table";
import { TableCustomHeader } from "../../../component/table-custom-v2/columns/TableCustomHeader";
import { TableCustomCell } from "../../../component/table-custom-v2/columns/TableCustomCell";
import { DSKetQua } from "../../models/DanhSachKetQuaModels";
import { Form } from "react-bootstrap";

export const DanhSachKetQuaColumns: ReadonlyArray<Column<DSKetQua>> = [
  {
    Header: (props) => (
      <TableCustomHeader<DSKetQua>
        tableProps={props}
        title={"Mã dịch vụ"}
        className="text-center text-white align-middle bg-pri min-w-150px"
      />
    ),
    id: "maDV",
    Cell: ({ ...props }) => (
      <TableCustomCell
        data={String(props.data[props.row.index].maDichVu)}
        className="text-center"
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<DSKetQua>
        tableProps={props}
        title={"Tên dịch vụ"}
        className="text-center text-white align-middle bg-pri min-w-250px"
      />
    ),
    id: "tenDV",
    Cell: ({ ...props }) => (
      <TableCustomCell
        data={String(props.data[props.row.index].tenDichVu)}
        className="text-start"
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<DSKetQua>
        tableProps={props}
        title={"Kết luận"}
        className="text-center text-white align-middle bg-pri min-w-250px"
      />
    ),
    id: "ketLuan",
    Cell: ({ ...props }) => (
      <TableCustomCell
        data={String(props.data[props.row.index].ketLuan)}
        className="text-start"
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<DSKetQua>
        tableProps={props}
        title={"TVT đi kèm"}
        className="text-center text-white align-middle bg-pri min-w-150px"
      />
    ),
    id: "TVTDiKem",
    Cell: ({ ...props }) => (
      <TableCustomCell
        data={String(props.data[props.row.index].TVTDiKem)}
        className="text-center"
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<DSKetQua>
        tableProps={props}
        title={"Trạng thái"}
        className="text-center text-white align-middle bg-pri min-w-150px"
      />
    ),
    id: "trangThai",
    Cell: ({ ...props }) => (
      <TableCustomCell
        data={props.data[props.row.index].trangThai}
        className="text-center"
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<DSKetQua>
        tableProps={props}
        title={"Mã máy XN"}
        className="text-center text-white align-middle bg-pri min-w-150px"
      />
    ),
    id: "maMayXN",
    Cell: ({ ...props }) => (
      <>
        <Form>
          <Form.Select value={props.data[props.row.index].maMayXN} size="sm">
            <option value={"MAY1"}>Máy 1</option>
            <option value={"MAY2"}>Máy 2</option>
            <option value={"MAY3"}>Máy 3</option>
          </Form.Select>
        </Form>
      </>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<DSKetQua>
        tableProps={props}
        title={"Ghi chú"}
        className="text-center text-white align-middle bg-pri min-w-150px"
      />
    ),
    id: "ghiChu",
    Cell: ({ ...props }) => (
      <TableCustomCell
        data={props.data[props.row.index].ghiChu || ""}
        className="text-center"
      />
    ),
  },
];
