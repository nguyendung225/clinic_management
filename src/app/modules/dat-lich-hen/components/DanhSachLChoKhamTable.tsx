import { FC } from "react";
import { Column } from "react-table";
import { TableCustomCell } from "../../component/table/components/TableCustomCell";
import { TableCustomHeader } from "../../component/table/components/TableCustomHeader";
import { TableCustom } from "../../component/table/table-custom/TableCustom";
import { danhSachChoKham } from "../models/datLichHenModels";
import { benhNhanData } from "../models/datLichHenModels";
import { fakeDataDsChoKham } from "../constants/fakeData";

type IDSChoKham = {
  benhNhanData?: benhNhanData;
  updatePageData?: () => void;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleUpdate?: (row: any) => void;
  handlePay?: (row: any) => void;
  page: number;
  rowsPerPage: number;
  handleContextMenu?: (e: any, row: any) => void;
};

export const DanhSachLichChoTable: FC<IDSChoKham> = (props) => {
  let { benhNhanData, updatePageData, handleChange, handleContextMenu } = props;

  const danhSachChoKhamColumn: ReadonlyArray<Column<danhSachChoKham>> = [
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

  return (
    <TableCustom<danhSachChoKham>
      hasToolbar={false}
      className={"h-ds-lich-hen-table"}
      minHeight={420}
      data={fakeDataDsChoKham || benhNhanData?.data}
      columns={danhSachChoKhamColumn}
      handleSearchByPage={updatePageData}
      handleChangeValueInput={handleChange}
      verticalScroll={true}
      handleContextMenu={handleContextMenu}
    />
  );
};

export default DanhSachLichChoTable;
