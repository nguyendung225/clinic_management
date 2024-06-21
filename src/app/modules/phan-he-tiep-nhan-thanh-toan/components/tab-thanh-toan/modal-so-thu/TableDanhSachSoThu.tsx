import { Column } from "react-table";
import { TableCustomCell } from "../../../../component/table/components/TableCustomCell";
import { TableCustomHeader } from "../../../../component/table/components/TableCustomHeader";
import { DanhSachSoThu } from "../../../models/SoThuModel";
import { TableCustom } from "../../../../component/table/table-custom/TableCustom";

const TableDanhSachSoThu = (props: any) => {
  let {
    dataDanhSachSoThu,
    handleDoubleClick
  } = props;

  const danhSachSoThuColumn: ReadonlyArray<Column<DanhSachSoThu>> = [
    {
      Header: (props) => (
        <TableCustomHeader<DanhSachSoThu>
          tableProps={props}
          title={"Mã sổ thu"}
          className="text-center min-w-100px"
        />
      ),
      id: "Mã sổ thu",
      Cell: ({ ...props }) => <TableCustomCell
        className="text-center"
        data={(props?.data[props?.row?.index]?.maSoThu)}
      />,
    },
    {
      Header: (props) =>
        <TableCustomHeader<DanhSachSoThu>
          tableProps={props}
          title={"Tên sổ thu"}
          className="text-center min-w-100px"
        />,
      id: "Tên sổ thu",
      Cell: ({ ...props }) => <TableCustomCell
        data={props?.data[props?.row?.index]?.tenSoThu || ""}
      />,
    },
    {
      Header: (props) => (
        <TableCustomHeader<DanhSachSoThu>
          tableProps={props}
          title={"Ngày tạo"}
          className="text-center min-w-100px"
        />
      ),
      id: "Ngày tạo",
      Cell: ({ ...props }) => <TableCustomCell
        className="text-center text-uppercase"
        data={props?.data[props?.row?.index]?.ngayTao || ""} />,
    },
    {
      Header: (props) => (
        <TableCustomHeader<DanhSachSoThu>
          tableProps={props}
          title={"Người tạo"}
          className="text-center text-white align-middle min-w-100px"
        />
      ),
      id: "Người tạo",
      Cell: ({ ...props }) => <TableCustomCell data={props?.data[props?.row?.index]?.nguoiTao || ""} className="text-center" />
    },
    {
      Header: (props) => (
        <TableCustomHeader<DanhSachSoThu>
          tableProps={props}
          title={"Đã sử dụng"}
          className="text-center min-w-100px"
        />
      ),
      id: "Đã sử dụng",
      Cell: ({ ...props }) => <TableCustomCell
        className="text-center"
        data={props?.data[props?.row?.index]?.daSuDung || ""}
      />,
    },
    {
      Header: (props) => (
        <TableCustomHeader<DanhSachSoThu>
          tableProps={props}
          title={"Số bắt đầu"}
          className="text-center min-w-50px"
        />
      ),
      id: "Số bắt đầu",
      Cell: ({ ...props }) => <TableCustomCell
        className="text-center"
        data={props?.data[props?.row?.index]?.soBatDau || ""}
      />,
    },
    {
      Header: (props) => (
        <TableCustomHeader<DanhSachSoThu>
          tableProps={props}
          title={"Tổng số phiếu"}
          className="text-center min-w-50px"
        />
      ),
      id: "Tổng số phiếu",
      Cell: ({ ...props }) => <TableCustomCell
        className="text-center"
        data={props?.data[props?.row?.index]?.tongSoPhieu || ""}
      />,
    },
    {
      Header: (props) => (
        <TableCustomHeader<DanhSachSoThu>
          tableProps={props}
          title={"VAT(%)"}
          className="text-center min-w-50px"
        />
      ),
      id: "VAT(%)",
      Cell: ({ ...props }) => <TableCustomCell
        className="text-center"
        data={props?.data[props?.row?.index]?.vat || ""}
      />,
    },
    {
      Header: (props) => (
        <TableCustomHeader<DanhSachSoThu>
          tableProps={props}
          title={"Ghi chú"}
          className="text-center min-w-100px"
        />
      ),
      id: "Ghi chú",
      Cell: ({ ...props }) => <TableCustomCell
        className="text-align-left"
        data={props?.data[props?.row?.index]?.vat || ""}
      />,
    },
  ]

  return (
    <TableCustom<DanhSachSoThu>
      className="h-100"
      handleDoubleClick={handleDoubleClick}
      hasToolbar={false}
      minHeight={350}
      data={dataDanhSachSoThu}
      columns={danhSachSoThuColumn}
      verticalScroll={true}
    />
  )
}

export default TableDanhSachSoThu;
