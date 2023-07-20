import { Column } from "react-table";
import { TableCustomCell } from "../../../component/table-custom-v2/columns/TableCustomCell";
import { TableCustomHeader } from "../../../component/table-custom-v2/columns/TableCustomHeader";
import { TimKiemBenhNhanModel } from "./TimKiemBenhNhanModels";

export const TimKiemBenhNhanColumns: ReadonlyArray<Column<TimKiemBenhNhanModel>> = [
  {
    Header: (props) => (
      <TableCustomHeader<TimKiemBenhNhanModel>
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
      <TableCustomHeader<TimKiemBenhNhanModel>
        tableProps={props}
        title={"Mã BN"}
        className="text-center text-white align-middle bg-pri min-w-100px"
      />
    ),
    id: "patientCode",
    Cell: ({ ...props }) => (
      <TableCustomCell data={props.data[props.row.index].mpi} className="text-center"/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<TimKiemBenhNhanModel>
        tableProps={props}
        title={"Tên bệnh nhân"}
        className="text-center text-white align-middle bg-pri min-w-200px"
      />
    ),
    id: "patientName",
    Cell: ({ ...props }) => (
      <TableCustomCell data={props.data[props.row.index].hoTen} />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<TimKiemBenhNhanModel>
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
      <TableCustomHeader<TimKiemBenhNhanModel>
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
      <TableCustomHeader<TimKiemBenhNhanModel>
        tableProps={props}
        title={"Mã BHYT"}
        className="text-center text-white align-middle bg-pri min-w-150px"
      />
    ),
    id: "healthInsuranceCode",
    Cell: ({ ...props }) => (
      <TableCustomCell data={props.data[props.row.index].benhNhanBhyt.soBhyt} className="text-center"/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<TimKiemBenhNhanModel>
        tableProps={props}
        title={"CMND"}
        className="text-center text-white align-middle bg-pri min-w-150px"
      />
    ),
    id: "identificationNumber",
    Cell: ({ ...props }) => (
      <TableCustomCell
        data={props.data[props.row.index].soDinhDanh}
        className="text-center"
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<TimKiemBenhNhanModel>
        tableProps={props}
        title={"SĐT"}
        className="text-center text-white align-middle bg-pri min-w-150px"
      />
    ),
    id: "phone",
    Cell: ({ ...props }) => (
      <TableCustomCell data={props.data[props.row.index].soDienThoai} className="text-center"/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<TimKiemBenhNhanModel>
        tableProps={props}
        title={"Ngày tiếp nhận"}
        className="text-center text-white align-middle bg-pri min-w-200px"
      />
    ),
    id: "receiveDate",
    Cell: ({ ...props }) => (
      <TableCustomCell data={props.data[props.row.index].receiveDate} className="text-center"/>
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<TimKiemBenhNhanModel>
        tableProps={props}
        title={"PK/KĐT hẹn"}
        className="text-center text-white align-middle bg-pri min-w-200px"
      />
    ),
    id: "appointmentClinic",
    Cell: ({ ...props }) => (
      <TableCustomCell data={props.data[props.row.index].appointmentClinic} />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<TimKiemBenhNhanModel>
        tableProps={props}
        title={"Địa chỉ"}
        className="text-center text-white align-middle bg-pri min-w-300px"
      />
    ),
    id: "address",
    Cell: ({ ...props }) => (
      <TableCustomCell data={props.data[props.row.index].diaChi} className="pe-3"/>
    ),
  },
];