import { TableCustomHeader } from "../../../component/table-custom-v2/columns/TableCustomHeader";
import { TableCustomCell } from "../../../component/table-custom-v2/columns/TableCustomCell";
import { Column } from "react-table";
import { DanhSachBenhNhanInterface } from "../../models/DanhSachBenhNhanModel";

export const DanhSachBenhNhanColumns: ReadonlyArray<Column<DanhSachBenhNhanInterface>> = [
  {
    Header: (props) => (
      <TableCustomHeader<DanhSachBenhNhanInterface>
        tableProps={props}
        title={"STT"}
        className="text-center text-white align-middle bg-pri"
      />
    ),
    id: "index",
    Cell: ({ ...props }) => (
      <TableCustomCell data={String(props.row.index + 1)} className="text-center"/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<DanhSachBenhNhanInterface>
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
  {
    Header: (props) => (
      <TableCustomHeader<DanhSachBenhNhanInterface>
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
      <TableCustomHeader<DanhSachBenhNhanInterface>
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
      <TableCustomHeader<DanhSachBenhNhanInterface>
        tableProps={props}
        title={"Giới tính"}
        className="text-center text-white align-middle bg-pri min-w-80px"
      />
    ),
    id: "gender",
    Cell: ({ ...props }) => (
      <TableCustomCell data={props.data[props.row.index].gioiTinh} className="text-center"/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<DanhSachBenhNhanInterface>
        tableProps={props}
        title={"Ngày sinh"}
        className="text-center text-white align-middle bg-pri min-w-100px"
      />
    ),
    id: "dateOfBirth",
    Cell: ({ ...props }) => (
      <TableCustomCell data={props.data[props.row.index].ngaySinh} className="text-center"/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<DanhSachBenhNhanInterface>
        tableProps={props}
        title={"Tuổi"}
        className="text-center text-white align-middle bg-pri min-w-50px"
      />
    ),
    id: "age",
    Cell: ({ ...props }) => (
      <TableCustomCell data={String(props.data[props.row.index].tuoi)} className="text-center"/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<DanhSachBenhNhanInterface>
        tableProps={props}
        title={"Địa chỉ"}
        className="text-center text-white align-middle bg-pri min-w-300px"
      />
    ),
    id: "address",
    Cell: ({ ...props }) => (
      <TableCustomCell data={String(props.data[props.row.index].diaChi)} />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<DanhSachBenhNhanInterface>
        tableProps={props}
        title={"Mã BHYT"}
        className="text-center text-white align-middle bg-pri min-w-150px"
      />
    ),
    id: "healthInsuranceCode",
    Cell: ({ ...props }) => (
      <TableCustomCell data={props.data[props.row.index].maBHYT} className="text-center"/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<DanhSachBenhNhanInterface>
        tableProps={props}
        title={"Từ ngày"}
        className="text-center text-white align-middle bg-pri min-w-100px"
      />
    ),
    id: "fromDate",
    Cell: ({ ...props }) => (
      <TableCustomCell data={props.data[props.row.index].tuNgay} className="text-center"/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<DanhSachBenhNhanInterface>
        tableProps={props}
        title={"Đến ngày"}
        className="text-center text-white align-middle bg-pri min-w-100px"
      />
    ),
    id: "toDate",
    Cell: ({ ...props }) => (
      <TableCustomCell data={props.data[props.row.index].denNgay} className="text-center pe-3"/>
    ),
  },
];