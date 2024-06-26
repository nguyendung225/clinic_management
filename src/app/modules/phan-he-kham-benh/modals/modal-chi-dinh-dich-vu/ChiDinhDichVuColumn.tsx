import React from "react";
import { Column } from "react-table";
import { TableCustomHeader } from "../../../component/table/components/TableCustomHeader";
import { TableCustomCell } from "../../../component/table/components/TableCustomCell";

const DsDichVuColumn: ReadonlyArray<Column<any>> = [
  {
    Header: (props) => (
      <TableCustomHeader<any>
        tableProps={props}
        title={"Mã DV"}
        className="text-center  text-light min-w-100px fs-8"
      />
    ),
    id: "Mã dịch vụ",
    Cell: ({ ...props }) => (
      <TableCustomCell className="text-center " data={props?.data[props?.row?.index].maDichVu} />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<any>
        tableProps={props}
        title={"Tên dịch vụ"}
        className="text-center  text-light min-w-175px fs-8"
      />
    ),
    id: "Tên dịch vụ",
    Cell: ({ ...props }) => {
      return <TableCustomCell className="" data={props?.data[props?.row?.index].tenDichVu} />;
    },
  },
  {
    Header: (props) => (
      <TableCustomHeader<any>
        tableProps={props}
        title={"Số lượng"}
        className="text-center  text-light min-w-100px fs-8"
      />
    ),
    id: "Số lượng",
    Cell: ({ ...props }) => {
      return <TableCustomCell className="text-center " data={props?.data[props?.row?.index].soLuong} />;
    },
  },
  {
    Header: (props) => (
      <TableCustomHeader<any>
        tableProps={props}
        title={"Giá BHTY"}
        className="text-center  text-light min-w-100px fs-8"
      />
    ),
    id: "Giá BHTY",
    Cell: ({ ...props }) => {
      return <TableCustomCell className="text-end " data={props?.data[props?.row?.index].giaBHYT} />;
    },
  },
  {
    Header: (props) => (
      <TableCustomHeader<any>
        tableProps={props}
        title={"Giá viện phí"}
        className="text-center  text-light min-w-120-px fs-8"
      />
    ),
    id: "Giá viện phí",
    Cell: ({ ...props }) => {
      return <TableCustomCell className="text-end " data={props?.data[props?.row?.index].giaVienPhi} />;
    },
  },
  {
    Header: (props) => (
      <TableCustomHeader<any>
        tableProps={props}
        title={"Giá dịch vụ"}
        className="text-center  text-light min-w-80px fs-8"
      />
    ),
    id: "Giá dịch vụ",
    Cell: ({ ...props }) => {
      return <TableCustomCell className="text-end " data={props?.data[props?.row?.index].giaDV} />;
    },
  },
  {
    Header: (props) => (
      <TableCustomHeader<any>
        tableProps={props}
        title={"Đơn giá"}
        className="text-center  text-light min-w-100px fs-8"
      />
    ),
    id: "Đơn giá",
    Cell: ({ ...props }) => {
      return <TableCustomCell className="text-end " data={props?.data[props?.row?.index].donGia} />;
    },
  },
  {
    Header: (props) => (
      <TableCustomHeader<any>
        tableProps={props}
        title={"Thành tiền"}
        className="text-center  text-light min-w-125px fs-8"
      />
    ),
    id: "Thành tiền",
    Cell: ({ ...props }) => {
      return <TableCustomCell className="text-end " data={props?.data[props?.row?.index].thanhTien} />;
    },
  },
  {
    Header: (props) => (
      <TableCustomHeader<any>
        tableProps={props}
        title={"Phòng thực hiện"}
        className="text-center  text-light min-w-150px fs-8"
      />
    ),
    id: "Phòng thực hiện",
    Cell: ({ ...props }) => {
      return <TableCustomCell className="" data={props?.data[props?.row?.index].phongThucHien} />;
    },
  },
];

const DsDichVuChiDinhColumn: ReadonlyArray<Column<any>> = [
  {
    Header: (props) => (
      <TableCustomHeader<any>
        tableProps={props}
        title={"STT"}
        className="text-center  text-light min-w-40px fs-8"
      />
    ),
    id: "STT",
    Cell: ({ ...props }) => <TableCustomCell className="text-center " data={props?.row?.index + 1} />,
  },
  {
    Header: (props) => (
      <TableCustomHeader<any>
        tableProps={props}
        title={"Tên dịch vụ"}
        className="text-center  text-light min-w-250px fs-8"
      />
    ),
    id: "Tên dịch vụ",
    Cell: ({ ...props }) => {
      let data = props?.data[props?.row?.index].tenDichVu;
      return <TableCustomCell className="" data={data} />;
    },
  },
  {
    Header: (props) => (
      <TableCustomHeader<any>
        tableProps={props}
        title={"Mã DV"}
        className="text-center  text-light min-w-100px fs-8"
      />
    ),
    id: "Mã dịch vụ",
    Cell: ({ ...props }) => (
      <TableCustomCell className="text-center " data={props?.data[props?.row?.index].maDichVu} />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<any>
        tableProps={props}
        title={"Số lượng"}
        className="text-center  text-light min-w-60px fs-8"
      />
    ),
    id: "Số lượng",
    Cell: ({ ...props }) => {
      let data = props?.data[props?.row?.index].soLuong;
      return <TableCustomCell className="text-center " data={data} />;
    },
  },
  {
    Header: (props) => (
      <TableCustomHeader<any>
        tableProps={props}
        title={"Đơn giá"}
        className="text-center  text-light min-w-60px fs-8"
      />
    ),
    id: "Đơn giá",
    Cell: ({ ...props }) => {
      let data = props?.data[props?.row?.index].donGia;
      return <TableCustomCell className="text-end " data={data} />;
    },
  },
  {
    Header: (props) => (
      <TableCustomHeader<any>
        tableProps={props}
        title={"Ghi chú"}
        className="text-center  text-light min-w-100px fs-8"
      />
    ),
    id: "Ghi chú",
    Cell: ({ ...props }) => {
      let data = props?.data[props?.row?.index].ghiChu;
      return <TableCustomCell className="" data={data} />;
    },
  },
  {
    Header: (props) => (
      <TableCustomHeader<any>
        tableProps={props}
        title={"Phòng thực hiện"}
        className="text-center  text-light min-w-100px fs-8"
      />
    ),
    id: "Phòng thực hiện",
    Cell: ({ ...props }) => {
      let data = props?.data[props?.row?.index].phongThucHien;
      return <TableCustomCell className="" data={data} />;
    },
  },
];

export { DsDichVuColumn, DsDichVuChiDinhColumn };
