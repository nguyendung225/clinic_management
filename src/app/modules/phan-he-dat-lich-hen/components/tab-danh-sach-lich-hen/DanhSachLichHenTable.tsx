import moment from "moment";
import { FC } from "react";
import { useIntl } from "react-intl";
import { Column } from "react-table";
import { TableCustomCell } from "../../../component/table/components/TableCustomCell";
import { TableCustomHeader } from "../../../component/table/components/TableCustomHeader";
import { danhSachHenKham } from "../../constants/constDatLichHen";
import { benhNhanData } from "../../tab-danh-sach-lich-hen/DanhSachLichHen";
import { formatDateToString, formatTrangThaiBenhNhan } from "../../../utils/FormatUtils";
import { TableCustom } from "../../../component/table/table-custom/TableCustom";

function useCustomIntl(messageId: string) {
  const intl = useIntl();
  return intl.formatMessage({ id: messageId });
}
type DSTiepNhan = {
  benhNhanData: benhNhanData;
  updatePageData: () => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleUpdate: (row: any) => void;
  handlePay: (row: any) => void;
  page: number;
  rowsPerPage: number;
  handleContextMenu: (e: any, row: any) => void;
};

const fakeDataDsHenKham: danhSachHenKham[] = [
  {
    trangThai: 1,
    lienHe: "",
    soDatHen: 1,
    maBN: "BNHK1",
    hoTen: "Nguyễn Văn Cốc",
    ngaySinh: moment().format("DD/MM/YYYY"),
    gioiTinh: "Nam",
    sdt: "0987768965",
    cccd: "002400069874",
    doiTuong: "Ưu tiên",
  },
  {
    trangThai: 1,
    lienHe: "",
    soDatHen: 2,
    maBN: "BNHK2",
    hoTen: "Nguyễn Văn Công",
    ngaySinh: moment().format("DD/MM/YYYY"),
    gioiTinh: "Nam",
    sdt: "0987768965",
    cccd: "002400069874",
    doiTuong: "Không",
  },
  {
    trangThai: 2,
    lienHe: "",
    soDatHen: 3,
    maBN: "BNHK3",
    hoTen: "Nguyễn Thị Nụ",
    ngaySinh: moment().format("DD/MM/YYYY"),
    gioiTinh: "Nữ",
    sdt: "0987768965",
    cccd: "002400069874",
    doiTuong: "Ưu tiên",
  },
  {
    trangThai: 4,
    lienHe: "",
    soDatHen: 4,
    maBN: "BNHK5",
    hoTen: "Nguyễn Cao Kỳ",
    ngaySinh: moment().format("DD/MM/YYYY"),
    gioiTinh: "Nam",
    sdt: "0987768965",
    cccd: "002400069874",
    doiTuong: "BHYT",
  },
  {
    trangThai: 3,
    lienHe: "",
    soDatHen: 5,
    maBN: "BNHK8",
    hoTen: "Trần Văn Cường",
    ngaySinh: moment().format("DD/MM/YYYY"),
    gioiTinh: "Nam",
    sdt: "0987768965",
    cccd: "002400069874",
    doiTuong: "BHYT",
  },
  {
    trangThai: 6,
    lienHe: "",
    soDatHen: 6,
    maBN: "BNHK4",
    hoTen: "Nguyễn Thị Vân",
    ngaySinh: moment().format("DD/MM/YYYY"),
    gioiTinh: "Nữ",
    sdt: "0987768965",
    cccd: "002400069874",
    doiTuong: "Không",
  },
  {
    trangThai: 4,
    lienHe: "",
    soDatHen: 7,
    maBN: "BNHK7",
    hoTen: "Nguyễn Cao Kỳ",
    ngaySinh: moment().format("DD/MM/YYYY"),
    gioiTinh: "Nam",
    sdt: "0987768965",
    cccd: "002400069874",
    doiTuong: "BHYT",
  },
  {
    trangThai: 3,
    lienHe: "",
    soDatHen: 8,
    maBN: "BNHK10",
    hoTen: "Trần Văn Cường",
    ngaySinh: moment().format("DD/MM/YYYY"),
    gioiTinh: "Nam",
    sdt: "0987768965",
    cccd: "002400069874",
    doiTuong: "BHYT",
  },
  {
    trangThai: 5,
    lienHe: "",
    soDatHen: 9,
    maBN: "BNHK9",
    hoTen: "Nguyễn Thị Vân",
    ngaySinh: moment().format("DD/MM/YYYY"),
    gioiTinh: "Nữ",
    sdt: "0987768965",
    cccd: "002400069874",
    doiTuong: "Không",
  },
  {
    trangThai: 6,
    lienHe: "",
    soDatHen: 10,
    maBN: "BNHK11",
    hoTen: "Nguyễn Thị Vân",
    ngaySinh: moment().format("DD/MM/YYYY"),
    gioiTinh: "Nữ",
    sdt: "0987768965",
    cccd: "002400069874",
    doiTuong: "Không",
  },
];

const DanhSachLichHenTable: FC<DSTiepNhan> = (props) => {
  let {
    benhNhanData,
    updatePageData,
    handleChange,
    page,
    rowsPerPage,
    handleContextMenu,
  } = props;

  const danhSachHenKhamColumn: ReadonlyArray<Column<danhSachHenKham>> = [
    {
      Header: (props) => (
        <TableCustomHeader<danhSachHenKham>
          tableProps={props}
          title={useCustomIntl("TABLE.INDEX")}
          className="p-table text-center min-w-30px "
        />
      ),
      id: "STT",
      Cell: ({ ...props }) => (
        <TableCustomCell
          data={String((page - 1) * rowsPerPage + props?.row?.index + 1)}
          className="p-table cell-first-child text-center ps-0"
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader<danhSachHenKham>
          tableProps={props}
          title={"T.THÁI"}
          className="p-table text-center min-w-150px"
        />
      ),
      id: "T.Thái đặt hẹn",
      Cell: ({ ...props }) => (
        <TableCustomCell
          className="p-table text-center"
          data={<div> {formatTrangThaiBenhNhan(props?.data[props?.row?.index]?.trangThai)}</div>}
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader<danhSachHenKham>
          tableProps={props}
          title={"Số đặt hẹn"}
          className="p-table text-center min-w-175px"
        />
      ),
      id: "Số đặt hẹn",
      Cell: ({ ...props }) => (
        <TableCustomCell
          className="p-table text-center text-uppercase"
          data={props?.data[props?.row?.index]?.soDatHen || ""}
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader<danhSachHenKham>
          tableProps={props}
          title={"Mã BN"}
          className="p-table text-center min-w-175px"
        />
      ),
      id: "Mã BN",
      Cell: ({ ...props }) => (
        <TableCustomCell
          className="p-table text-start text-uppercase"
          data={props?.data[props?.row?.index]?.maBN || ""}
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader<danhSachHenKham>
          tableProps={props}
          title={"Họ tên"}
          className="p-table text-center min-w-175px"
        />
      ),
      id: "Họ tên",
      Cell: ({ ...props }) => (
        <TableCustomCell
          className="p-table text-align-left text-uppercase"
          data={props?.data[props?.row?.index]?.hoTen || ""}
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader<danhSachHenKham>
          tableProps={props}
          title={"Ngày sinh"}
          className="p-table text-center min-w-175px"
        />
      ),
      id: "Ngày sinh",
      Cell: ({ ...props }) => (
        <TableCustomCell
          className="p-table text-center text-uppercase"
          data={props?.data[props?.row?.index]?.ngaySinh || ""}
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader<danhSachHenKham>
          tableProps={props}
          title={"Tuổi"}
          className="p-table text-center min-w-175px"
        />
      ),
      id: "Tuổi",
      Cell: ({ ...props }) => (
        <TableCustomCell
          className="p-table text-center text-uppercase"
          data={props?.data[props?.row?.index]?.tuoi || ""}
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader<danhSachHenKham>
          tableProps={props}
          title={"Giới tính"}
          className="p-table text-center text-white align-middle min-w-100px"
        />
      ),
      id: "Giới tính",
      Cell: ({ ...props }) => (
        <TableCustomCell
          data={props?.data[props?.row?.index]?.gioiTinh || ""}
          className="p-table text-center"
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader<danhSachHenKham>
          tableProps={props}
          title={"SĐT"}
          className="p-table text-center min-w-150px"
        />
      ),
      id: "SĐT",
      Cell: ({ ...props }) => (
        <TableCustomCell
          className="p-table text-center"
          data={props?.data[props?.row?.index]?.sdt || ""}
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader<danhSachHenKham>
          tableProps={props}
          title={"CCCD"}
          className="p-table text-center min-w-250px"
        />
      ),
      id: "CCCD",
      Cell: ({ ...props }) => (
        <TableCustomCell
          className="p-table text-align-left"
          data={props?.data[props?.row?.index]?.cccd || ""}
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader<danhSachHenKham>
          tableProps={props}
          title={"Đối tượng"}
          className="p-table text-center min-w-250px"
        />
      ),
      id: "Đối tượng",
      Cell: ({ ...props }) => (
        <TableCustomCell
          className="p-table text-align-left"
          data={props?.data[props?.row?.index]?.doiTuong || ""}
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader<danhSachHenKham>
          tableProps={props}
          title={"Ngày hẹn khám"}
          className="p-table text-center min-w-250px"
        />
      ),
      id: "Ngày hẹn khám",
      Cell: ({ ...props }) => (
        <TableCustomCell
          className="p-table text-align-left"
          data={formatDateToString(props?.data[props?.row?.index]?.ngayHenKham) || ""}
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader<danhSachHenKham>
          tableProps={props}
          title={"Dịch vụ khám"}
          className="p-table text-center min-w-250px"
        />
      ),
      id: "Dịch vụ khám",
      Cell: ({ ...props }) => (
        <TableCustomCell
          className="p-table text-align-left"
          data={props?.data[props?.row?.index]?.dichVuKham || ""}
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader<danhSachHenKham>
          tableProps={props}
          title={"Phòng khám"}
          className="p-table text-center min-w-250px"
        />
      ),
      id: "Phòng khám",
      Cell: ({ ...props }) => (
        <TableCustomCell
          className="p-table text-align-left"
          data={props?.data[props?.row?.index]?.phongKham || ""}
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader<danhSachHenKham>
          tableProps={props}
          title={"Số thẻ KCB"}
          className="p-table text-center min-w-250px"
        />
      ),
      id: "Số thẻ KCB",
      Cell: ({ ...props }) => (
        <TableCustomCell
          className="p-table text-align-left"
          data={props?.data[props?.row?.index]?.soTheKCB || ""}
        />
      ),
    },
  ];

  return (
    <TableCustom<danhSachHenKham>
      hasToolbar={false}
      className={"h-ds-tiep-nhan-table"}
      minHeight={450}
      data={fakeDataDsHenKham || benhNhanData?.data}
      columns={danhSachHenKhamColumn}
      handleSearchByPage={updatePageData}
      handleChangeValueInput={handleChange}
      verticalScroll={true}
      handleContextMenu={handleContextMenu}
    />
  );
};

export default DanhSachLichHenTable;
