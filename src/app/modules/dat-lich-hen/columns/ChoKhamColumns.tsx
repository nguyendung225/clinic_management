import { FC } from "react";
import { Column } from "react-table";
import { TableCustomCell } from "../../component/table/components/TableCustomCell";
import { TableCustomHeader } from "../../component/table/components/TableCustomHeader";
import { danhSachChoKham } from "../models/datLichHenModels";

export const ChoKhamColumns: ReadonlyArray<Column<danhSachChoKham>> = [
  {
    Header: (props) => (
      <TableCustomHeader<danhSachChoKham>
        tableProps={props}
        title={"Phòng"}
        className="p-table text-center min-w-175px"
      />
    ),
    id: "phong",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className="p-table text-center text-uppercase"
        data={props?.data[props?.row?.index]?.phongKham || ""}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachChoKham>
        tableProps={props}
        title={"Hẹn"}
        className="p-table text-center min-w-175px"
      />
    ),
    id: "hen",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className="p-table text-start text-uppercase"
        data={props?.data[props?.row?.index]?.ngayHenKham || ""}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachChoKham>
        tableProps={props}
        title={"DK"}
        className="p-table text-center min-w-175px"
      />
    ),
    id: "dk",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className="p-table text-start text-uppercase"
        data={props?.data[props?.row?.index]?.ngayHenKham || ""}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachChoKham>
        tableProps={props}
        title={"Khám"}
        className="p-table text-center min-w-175px"
      />
    ),
    id: "kham",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className="p-table text-align-left text-uppercase"
        data={props?.data[props?.row?.index]?.dichVuKham || ""}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachChoKham>
        tableProps={props}
        title={"Tổng"}
        className="p-table text-center min-w-175px"
      />
    ),
    id: "tong",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className="p-table text-align-left text-uppercase"
        data={props?.data[props?.row?.index]?.thoiGianHenKham || ""}
      />
    ),
  },
];
