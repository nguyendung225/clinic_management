import { TableCustomCell } from "../../component/table/components/TableCustomCell";
import { TableCustomHeader } from "../../component/table/components/TableCustomHeader";
import { formatTrangThaiBenhNhanDatLich } from "../../utils/FormatUtils";
import { useIntl } from "react-intl";
import { danhSachLichHen } from "../models/datLichHenModels";
import { Column } from "react-table";

function useCustomIntl(messageId: string) {
    const intl = useIntl();
    return intl.formatMessage({ id: messageId });
  }

export const LichHenColumns: ReadonlyArray<Column<danhSachLichHen>> = [
    {
      Header: (props) => (
        <TableCustomHeader<danhSachLichHen>
          tableProps={props}
          title={"TT"}
          className="p-table text-center min-w-50px"
        />
      ),
      id: "tt",
      Cell: ({ ...props }) => (
        <TableCustomCell
          className="p-table text-center"
          data={
            <div>
              {formatTrangThaiBenhNhanDatLich(
                props?.data[props?.row?.index]?.trangThai
              )}
            </div>
          }
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader<danhSachLichHen>
          tableProps={props}
          title={useCustomIntl("TABLE.INDEX")}
          className="p-table text-center min-w-30px "
        />
      ),
      id: "stt",
      Cell: ({ ...props }) => (
        <TableCustomCell
          data={String(props?.row?.index + 1)}
          className="p-table cell-first-child text-center ps-0"
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader<danhSachLichHen>
          tableProps={props}
          title={"Họ và tên"}
          className="p-table text-center min-w-250px"
        />
      ),
      id: "hoTen",
      Cell: ({ ...props }) => (
        <TableCustomCell
          className="p-table text-uppercase"
          data={props?.data[props?.row?.index]?.hoTen || ""}
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader<danhSachLichHen>
          tableProps={props}
          title={"SĐT"}
          className="p-table text-center min-w-175px"
        />
      ),
      id: "sdt",
      Cell: ({ ...props }) => (
        <TableCustomCell
          className="p-table text-uppercase text-center"
          data={props?.data[props?.row?.index]?.sdt || ""}
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader<danhSachLichHen>
          tableProps={props}
          title={"Ngày đặt lịch"}
          className="p-table text-center min-w-175px"
        />
      ),
      id: "ngayDatLich",
      Cell: ({ ...props }) => (
        <TableCustomCell
          className="p-table text-center text-uppercase"
          data={props?.data[props?.row?.index]?.ngayHenKham || ""}
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader<danhSachLichHen>
          tableProps={props}
          title={"Ngày hẹn khám"}
          className="p-table text-center min-w-175px"
        />
      ),
      id: "ngayHenKham",
      Cell: ({ ...props }) => (
        <TableCustomCell
          className="p-table text-center text-uppercase"
          data={props?.data[props?.row?.index]?.ngayHenKham || ""}
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader<danhSachLichHen>
          tableProps={props}
          title={"Chuyên khoa"}
          className="p-table text-center min-w-175px"
        />
      ),
      id: "chuyenKhoa",
      Cell: ({ ...props }) => (
        <TableCustomCell
          className="p-table text-align-left text-uppercase"
          data={props?.data[props?.row?.index]?.dichVuKham || ""}
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader<danhSachLichHen>
          tableProps={props}
          title={"Phòng"}
          className="p-table text-center min-w-175px"
        />
      ),
      id: "phong",
      Cell: ({ ...props }) => (
        <TableCustomCell
          className="p-table text-align-left text-uppercase"
          data={props?.data[props?.row?.index]?.phongKham || ""}
        />
      ),
    },
  ];