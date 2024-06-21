// @ts-nocheck
import { Column } from "react-table";
import { TableCustomHeader } from "../../../component/table/components/TableCustomHeader";
import { TableCustomCell } from "../../../component/table/components/TableCustomCell";
import { Col, Row } from "react-bootstrap";

const danhSachBenhAnColumn: ReadonlyArray<Column<any>> = [
  {
    Header: (props) => (
      <TableCustomHeader<TimKiemBenhNhanModel>
        tableProps={props}
        title={"Loại tài liệu"}
        className="p-table text-center min-w-150px"
      />
    ),
    id: "dv",
    Cell: ({ ...props }) => (
      <TableCustomCell
        data={
          <div className="ms-2">
            <Row>
              <Col xs="12">
                <div>
                  <span className="my-1">
                    {props.data[props.row.index]?.tenPhieu}
                  </span>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                <span className="my-1">
                  {props.data[props.row.index]?.soLuong}
                </span>
              </Col>
            </Row>
          </div>
        }
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<TimKiemBenhNhanModel>
        tableProps={props}
        title={"Trạng thái"}
        className="p-table text-center min-w-150px"
      />
    ),
    id: "Trạng thái",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className="p-table text-center"
        data={
          <div>
            {formatTrangThai(props?.data[props?.row?.index]?.trangThai)}
          </div>
        }
      />
    ),
  },
];

const trangThaiBenhAn = {
  daKy:{ code: 1, name: "Đã ký" },
  choKy:{ code: 2, name: "Chờ ký" },
  huy:{ code: 3, name: "Đã hủy" },
}
const formatTrangThai = (trangThai: number | undefined) => {
  switch (trangThai) {
    case 1:
      return (
        <div className="min-w-100px text-start">
          <i className="bi bi-circle-fill pe-2 text-success"></i>&nbsp;
          <span>{trangThaiBenhAn.daKy.name}</span>
        </div>
      );
    case 2:
      return (
        <div className="min-w-100px text-start">
          <i className="bi bi-circle-fill pe-2 text-yellow"></i>&nbsp;
          <span>{trangThaiBenhAn.choKy.name}</span>
        </div>
      );
    case 3:
      return (
        <div className="min-w-100px text-start">
          <i className="bi bi-circle-fill pe-2 text-pink"></i>&nbsp;
          <span>{trangThaiBenhAn.huy.name}</span>
        </div>
      );
    default:
      break;
  }
};
const benhAnColumns = [
  {
    Header: (props) => (
      <TableCustomHeader<TimKiemBenhNhanModel>
        tableProps={props}
        title={"Trạng thái"}
        className="p-table text-center min-w-150px"
      />
    ),
    id: "Trạng thái",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className="p-table text-center"
        data={
          <div>
            {formatTrangThai(props?.data[props?.row?.index]?.trangThai)}
          </div>
        }
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"Tên tài liệu"}
        className="p-table text-center min-w-175px"
      />
    ),
    id: "Tên tài liệu",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className="p-table text-center text-uppercase"
        data={props?.data[props?.row?.index]?.tenTaiLieu || ""}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"Ngày tạo"}
        className="p-table text-center min-w-175px"
      />
    ),
    id: "Ngày tạo",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className="p-table text-center text-uppercase"
        data={props?.data[props?.row?.index]?.ngayTao || ""}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"Người tạo"}
        className="p-table text-center min-w-175px"
      />
    ),
    id: "Người tạo",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className="p-table text-center text-uppercase"
        data={props?.data[props?.row?.index]?.nguoiTao || ""}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"Ngày ký"}
        className="p-table text-center min-w-175px"
      />
    ),
    id: "Ngày ký",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className="p-table text-center text-uppercase"
        data={props?.data[props?.row?.index]?.ngayKy || ""}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"Khoa phòng"}
        className="p-table text-center min-w-175px"
      />
    ),
    id: "Khoa phòng",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className="p-table text-center text-uppercase"
        data={props?.data[props?.row?.index]?.khoa || ""}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"Ghi chú"}
        className="p-table text-center min-w-175px"
      />
    ),
    id: "Ghi chú",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className="p-table text-center text-uppercase"
        data={props?.data[props?.row?.index]?.ghiChu || ""}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"File lưu trữ"}
        className="p-table text-center min-w-175px"
      />
    ),
    id: "File lưu trữ",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className="p-table text-center text-uppercase"
        data={props?.data[props?.row?.index]?.fileLuuTru || ""}
      />
    ),
  },
];


export { danhSachBenhAnColumn, benhAnColumns };
