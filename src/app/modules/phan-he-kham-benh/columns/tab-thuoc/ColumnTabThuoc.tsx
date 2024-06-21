// @ts-nocheck
import { Column } from "react-table";
import { TableCustomHeader } from "../../../component/table/components/TableCustomHeader";
import { TableCustomCell } from "../../../component/table/components/TableCustomCell";
import { Col, Row } from "react-bootstrap";
import { IDanhSachMauThuocCu, IMauThuocCu } from "../../models/ThuocModels";
import { FC } from "react";

const chiDinhThuocColumn: ReadonlyArray<Column<any>> = [
  {
    Header: (props) => <></>,
    id: "dv",
    Cell: ({ ...props }) => (
      <TableCustomCell
        data={
          <div className="ms-2">
            <Row>
              <Col xs="12">
                <div>
                  <span className="my-1">
                    {props.data[props.row.index]?.maPhieu}
                  </span>{" "}
                  -{" "}
                  <span className="my-1">
                    {props.data[props.row.index]?.ngayChiDinh}
                  </span>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                <span className="my-1">
                  {props.data[props.row.index]?.benhAn}
                </span>{" "}
                -{" "}
                <span className="my-1">
                  {props.data[props.row.index]?.thoiGian}
                </span>
              </Col>
            </Row>
          </div>
        }
      />
    ),
  },
];

const columnsDSThuoc = [
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"STT"}
        className=" text-center min-w-30px "
      />
    ),
    id: "STT",
    accessor: "stt",
    Cell: ({ ...props }) => (
      <TableCustomCell
        data={String(props?.row?.index + 1)}
        className=" cell-first-child text-center ps-0"
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"Tên thuốc"}
        className=" text-center min-w-250px"
      />
    ),
    id: "Tên thuốc",
    accessor: "tenThuoc",
    Cell: ({ value }: any) => (
      <TableCustomCell
          className="text-start"
          data={value}
      />
  ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"Mã thuốc"}
        className=" text-center spaces min-w-110"
      />
    ),
    id: "Mã thuốc",
    accessor: "maThuoc",
    Cell: ({ value }: any) => (
      <TableCustomCell
          className="text-start"
          data={value}
      />
  ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"Đơn vị"}
        className=" text-center spaces min-w-80"
      />
    ),
    id: "Đơn vị",
    accessor: "donVi",
    Cell: ({ value }: any) => (
      <TableCustomCell
          className="text-start"
          data={value}
      />
  ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"Kê"}
        className=" text-center spaces min-w-50"
      />
    ),
    id: "Kê",
    accessor: "ke",
    Cell: ({ value }: any) => (
      <TableCustomCell
          className="text-start"
          data={value}
      />
  ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"Lĩnh"}
        className=" text-center spaces min-w-65"
      />
    ),
    id: "Lĩnh",
    accessor: "linh",
    Cell: ({ value }: any) => (
      <TableCustomCell
          className="text-start"
          data={value}
      />
  ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"Đường dùng"}
        className=" text-center min-w-150px"
      />
    ),
    id: "Đường dùng",
    accessor: "duongDung",
    Cell: ({ value }: any) => (
      <TableCustomCell
          className="text-start"
          data={value}
      />
  ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"HDSD"}
        className=" text-center min-w-200px"
      />
    ),
    id: "HDSD",
    accessor: "huongDanSuDungThuoc",
    Cell: ({ value }: any) => (
      <TableCustomCell
          className="text-start"
          data={value}
      />
  ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"Số lượng"}
        className=" text-center min-w-200px"
      />
    ),
    id: "Số lượng",
    accessor: "soLuong",
    Cell: ({ value }: any) => (
      <TableCustomCell
          className="text-start"
          data={value}
      />
  ),
  },
];

export const columnsDSThuocCollaspe = (tiemTruyen: string) =>
{
  return [
  {
    className:"spaces min-w-40 text-center",
    title: "STT",
    name: "STT",
    field: "stt",
    headerCellProps: {
      minWidth: 30,
    },
    render: (rowData: any, index) => index + 1
  },
  {
    className:"spaces min-w-250",
    title: "Tên thuốc",
    name: "Tên thuốc",
    field: "tenThuoc",
    headerCellProps: {
      minWidth: 250,
    },
  },
  {
    className:"spaces min-w-110",
    title: "Mã thuốc",         
    name: "Mã thuốc",                
    field: "maThuoc",
    headerCellProps: {
      minWidth: 50,
    },
  },
  {
    className:"spaces min-w-80",
    title: "Đơn vị",           
    name: "Đơn vị",               
    field: "donVi",
    headerCellProps: {
      minWidth: 50,
    },
  },
  {
    className:"spaces min-w-50",
    title: "Kê",               
    name: "Kê",                
    field: "ke",
    headerCellProps: {
      minWidth: 30,
    },
  },
  {
    className:"spaces min-w-65",
    title: "Lĩnh",             
    name: "Lĩnh",                  
    field: "linh",
    headerCellProps: {
      minWidth: 30,
    },
  },
  {
    className:"spaces min-w-150",
    title: "Ngày dùng",       
    name: "Ngày dùng",           
    field: "ngayDung",
    headerCellProps: {
      minWidth: 80,
    },
  },
  {
    className:"spaces min-w-150",
    title: "Đường dùng",       
    name: "Đường dùng",           
    field: "duongDung",
    headerCellProps: {
      minWidth: 80,
    },
  },
  ...tiemTruyen?[{
    className:"spaces min-w-150",
    title: "Tiêm truyền",       
    name: "Tiêm truyền",           
    field: "tiemTruyen",
    headerCellProps: {
      minWidth: 80,
    },
  }]:[],
  {
    className:"spaces min-w-200",
    title: "Hướng dẫn sử dụng",
    name: "Hướng dẫn sử dụng",               
    field: "huongDanSuDungThuoc",
    headerCellProps: {
      minWidth: 100,
    },
  },
  {
    className:"spaces min-w-200",
    title: "Số lượng",         
    name: "Số lượng",           
    field: "soLuong",
    headerCellProps: {
      minWidth: 200,
    },
  },
]}
const columnsDSChiTietMau = [
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"Mã chỉ định"}
        className=" text-center min-w-150px "
      />
    ),
    id: "Mã chỉ định",
    Cell: ({ ...props }) => (
      <TableCustomCell
        data={props?.data[props?.row?.index]?.maChiDinh}
        className=" cell-first-child text-center ps-0"
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"Tên chỉ định"}
        className=" text-center min-w-175px"
      />
    ),
    id: "Tên chỉ định",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className=" text-center text-uppercase"
        data={props?.data[props?.row?.index]?.tenChiDinh || ""}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"Nhóm dịch vụ"}
        className=" text-center min-w-175px"
      />
    ),
    id: "Nhóm dịch vụ",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className=" text-center text-uppercase"
        data={props?.data[props?.row?.index]?.nhomDichVu || ""}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"Loại dịch vụ"}
        className=" text-center min-w-175px"
      />
    ),
    id: "Loại dịch vụ",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className=" text-center text-uppercase"
        data={props?.data[props?.row?.index]?.loaiDichVu || ""}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"Mẫu riêng của bác sĩ"}
        className=" text-center min-w-250px"
      />
    ),
    id: "Mẫu riêng của bác sĩ",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className=" text-center text-uppercase"
        data={props?.data[props?.row?.index]?.mauRienCuaBacSi || ""}
      />
    ),
  },
];
const columnsPhieuChiDinhCu = [
  {
    Header: (props) => (
      <TableCustomHeader<IDanhSachMauThuocCu>
        tableProps={props}
        title={"Ngày y lệnh"}
        className=" text-center min-w-100px "
      />
    ),
    id: "Ngày y lệnh",
    Cell: ({ ...props }) => (
      <TableCustomCell
        data={props?.data[props?.row?.index]?.ngayYLenh}
        className=" cell-first-child text-center ps-0"
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<IDanhSachMauThuocCu>
        tableProps={props}
        title={"Người kê"}
        className=" text-center min-w-150px"
      />
    ),
    id: "nguoiKe",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className=" text-start"
        data={props?.data[props?.row?.index]?.nguoiKe || ""}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<IDanhSachMauThuocCu>
        tableProps={props}
        title={"Phòng khám"}
        className=" text-center min-w-150px"
      />
    ),
    id: "Phòng khám",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className=" text-start"
        data={props?.data[props?.row?.index]?.phongKham || ""}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<IDanhSachMauThuocCu>
        tableProps={props}
        title={"Chẩn đoán"}
        className=" text-center min-w-150px"
      />
    ),
    id: "Chẩn đoán",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className=" text-start"
        data={props?.data[props?.row?.index]?.chanDoan || ""}
      />
    ),
  },
];
const columnsPhieuChiDinhCuThuoc = [
  {
    Header: (props) => (
      <TableCustomHeader<IMauThuocCu>
        tableProps={props}
        title={"STT"}
        className=" text-center min-w-40px "
      />
    ),
    id: "STT",
    Cell: ({ ...props }) => (
      <TableCustomCell
        data={String(props?.row?.index + 1)}
        className=" cell-first-child text-center ps-0"
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<IMauThuocCu>
        tableProps={props}
        title={"Tên thuốc"}
        className=" text-center min-w-175px "
      />
    ),
    id: "Tên thuốc",
    Cell: ({ ...props }) => (
      <TableCustomCell
        data={props?.data[props?.row?.index]?.tenThuoc}
        className=" cell-first-child text-center ps-0"
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<IMauThuocCu>
        tableProps={props}
        title={"Đơn vị"}
        className=" text-center min-w-150px"
      />
    ),
    id: "Đơn vị",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className=" text-center"
        data={props?.data[props?.row?.index]?.donVi || ""}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<IMauThuocCu>
        tableProps={props}
        title={"Ngày dùng"}
        className=" text-center min-w-150px"
      />
    ),
    id: "Ngày dùng",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className=" text-center"
        data={props?.data[props?.row?.index]?.ngayDung || ""}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<IMauThuocCu>
        tableProps={props}
        title={"Đường dùng"}
        className=" text-center min-w-150px"
      />
    ),
    id: "Đường dùng",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className=" text-center"
        data={props?.data[props?.row?.index]?.duongDung || ""}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<IMauThuocCu>
        tableProps={props}
        title={"Đối tượng DV"}
        className=" text-center min-w-150px"
      />
    ),
    id: "Đối tượng DV",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className=" text-center"
        data={props?.data[props?.row?.index]?.doiTuongDichVu || ""}
      />
    ),
  },
];

const columnsDSMauChiDinhThuoc = [
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"Mã thuốc"}
        className=" text-center min-w-150px "
      />
    ),
    id: "Mã thuốc",
    Cell: ({ ...props }) => (
      <TableCustomCell
        data={props?.data[props?.row?.index]?.maThuoc}
        className=" cell-first-child text-center ps-0"
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"Tên thuốc"}
        className=" text-center min-w-175px"
      />
    ),
    id: "Tên thuốc",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className=" text-start text-uppercase"
        data={props?.data[props?.row?.index]?.tenThuoc || ""}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"Đơn vị"}
        className=" text-center min-w-175px"
      />
    ),
    id: "Đơn vị",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className=" text-center text-uppercase"
        data={props?.data[props?.row?.index]?.donVi || ""}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"Nồng độ"}
        className=" text-center min-w-175px"
      />
    ),
    id: "Nồng độ",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className=" text-center text-uppercase"
        data={props?.data[props?.row?.index]?.nongDo || ""}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"Quy cách"}
        className=" text-center min-w-250px"
      />
    ),
    id: "Quy cách",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className=" text-center text-uppercase"
        data={props?.data[props?.row?.index]?.quyCach || ""}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"Hoạt chất"}
        className=" text-center min-w-250px"
      />
    ),
    id: "Hoạt chất",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className=" text-start text-uppercase"
        data={props?.data[props?.row?.index]?.hoatChat || ""}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"Giá BHYT"}
        className=" text-center min-w-250px"
      />
    ),
    id: "Giá BHYT",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className=" text-end text-uppercase"
        data={props?.data[props?.row?.index]?.giaBhyt || ""}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"Giá viện phí"}
        className=" text-center min-w-250px"
      />
    ),
    id: "Giá viện phí",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className=" text-end text-uppercase"
        data={props?.data[props?.row?.index]?.giaVienPhi || ""}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"Giá dịch vụ"}
        className=" text-center min-w-250px"
      />
    ),
    id: "Giá dịch vụ",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className=" text-end text-uppercase"
        data={props?.data[props?.row?.index]?.giaDichVu || ""}
      />
    ),
  },
];
const columnsPhieuChiDinh = [
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"STT"}
        className=" text-center min-w-80x"
      />
    ),
    id: "STT",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className=" text-center text-uppercase"
        data={props?.data[props?.row?.index]?.tenThuoc || ""}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"Tên thuốc"}
        className=" text-center min-w-175px"
      />
    ),
    id: "Tên thuốc",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className=" text-center text-uppercase"
        data={props?.data[props?.row?.index]?.tenThuoc || ""}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"Đơn vị"}
        className=" text-center min-w-175px"
      />
    ),
    id: "Đơn vị",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className=" text-center text-uppercase"
        data={props?.data[props?.row?.index]?.donVi || ""}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"Ngày dùng"}
        className=" text-center min-w-175px"
      />
    ),
    id: "Nồng độ",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className=" text-center text-uppercase"
        data={props?.data[props?.row?.index]?.nongDo || ""}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"Số lượng"}
        className=" text-center min-w-250px"
      />
    ),
    id: "Quy cách",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className=" text-center text-uppercase"
        data={props?.data[props?.row?.index]?.quyCach || ""}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"Đường dùng"}
        className=" text-center min-w-250px"
      />
    ),
    id: "Hoạt chất",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className=" text-center text-uppercase"
        data={props?.data[props?.row?.index]?.hoatChat || ""}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"HDSD"}
        className=" text-center min-w-250px"
      />
    ),
    id: "Giá BHYT",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className=" text-center text-uppercase"
        data={props?.data[props?.row?.index]?.giaBhyt || ""}
      />
    ),
  },
];

const columnsDSMau: ReadonlyArray<Column<any>> = [
  {
    Header: (props) => (
      <TableCustomHeader<danhSachHenKham>
        tableProps={props}
        title={"Tất cả các mẫu chỉ định"}
        className=" text-start min-w-150px "
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
                    {props.data[props.row.index]?.maPhieu}
                  </span>{" "}
                  -{" "}
                  <span className="my-1">
                    {props.data[props.row.index]?.ngayChiDinh}
                  </span>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                <span className="my-1">
                  {props.data[props.row.index]?.benhAn}
                </span>{" "}
                -{" "}
                <span className="my-1">
                  {props.data[props.row.index]?.thoiGian}
                </span>
              </Col>
            </Row>
          </div>
        }
      />
    ),
  },
];

const columnDanhSachMauChiDinhThuoc = [
    { title: "Mã chỉ định", field: "maChiDinh", className: "spaces w-15 text-center" },
    { title: "Tên chỉ định", field: "tenChiDinh", className: "spaces w-30" },
    { title: "Nhóm dịch vụ", field: "nhomDichVu", className: "spaces w-20 text-center" },
    { title: "Loại dịch vụ", field: "loaiDichVu", className: "spaces w-15 text-center" },
    { title: "Mẫu riêng của BS", field: "mauRiengCuaBS", className: "spaces w-20" },
]

const DsThuocChiDinhColumn: ReadonlyArray<Column<any>> = [
  {
    Header: (props) => (
      <TableCustomHeader<any>
        tableProps={props}
        title={"STT"}
        className="text-center  text-light min-w-40px"
      />
    ),
    id: "STT",
    Cell: ({ ...props }) => <TableCustomCell className="text-center " data={props?.row?.index + 1} />,
  },
  {
    Header: (props) => (
      <TableCustomHeader<any>
        tableProps={props}
        title={"Tên thuốc"}
        className="text-center  text-light min-w-200px"
      />
    ),
    id: "Tên thuốc",
    Cell: ({ ...props }) => {
      let data = props?.data[props?.row?.index].tenThuoc;
      return <TableCustomCell className="text-start " data={data} />;
    },
  },
  {
    Header: (props) => (
      <TableCustomHeader<any>
        tableProps={props}
        title={"Đơn vị"}
        className="text-center  text-light min-w-60px"
      />
    ),
    id: "Đơn vị",
    Cell: ({ ...props }) => {
      let data = props?.data[props?.row?.index].donVi;
      return <TableCustomCell className="text-center " data={data} />;
    },
  },
  {
    Header: (props) => (
      <TableCustomHeader<any>
        tableProps={props}
        title={"Ngày dùng"}
        className="text-center  text-light min-w-60px"
      />
    ),
    id: "Ngày dùng",
    Cell: ({ ...props }) => {
      let data = props?.data[props?.row?.index].ngayDung;
      return <TableCustomCell className="text-center " data={data} />;
    },
  },
  {
    Header: (props) => (
      <TableCustomHeader<any>
        tableProps={props}
        title={"Số lượng"}
        className="text-center  text-light min-w-100px"
      />
    ),
    id: "Số lượng",
    Cell: ({ ...props }) => {
      let data = props?.data[props?.row?.index].soLuong;
      return <TableCustomCell className=" text-center" data={data} />;
    },
  },
  {
    Header: (props) => (
      <TableCustomHeader<any>
        tableProps={props}
        title={"Đường dùng"}
        className="text-center  text-light min-w-100px"
      />
    ),
    id: "Đường dùng",
    Cell: ({ ...props }) => {
      let data = props?.data[props?.row?.index].duongDung;
      return <TableCustomCell className="" data={data} />;
    },
  },
  {
    Header: (props) => (
      <TableCustomHeader<any>
        tableProps={props}
        title={"Hướng dẫn sử dụng"}
        className="text-center  text-light min-w-100px"
      />
    ),
    id: "Hướng dẫn sử dụng",
    Cell: ({ ...props }) => {
      let data = props?.data[props?.row?.index].huongDanSuDungThuoc;
      return <TableCustomCell className="" data={data} />;
    },
  },
];



export { DsThuocChiDinhColumn ,columnDanhSachMauChiDinhThuoc, chiDinhThuocColumn, columnsDSThuoc, columnsDSMau, columnsDSChiTietMau, columnsDSMauChiDinhThuoc, columnsPhieuChiDinh, columnsPhieuChiDinhCu, columnsPhieuChiDinhCuThuoc };
