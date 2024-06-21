import { Column } from "react-table";
import { TableCustomHeader } from "../../component/table/components/TableCustomHeader";
import { TableCustomCell } from "../../component/table/components/TableCustomCell";
import { statusOptions } from "../../phan-he-tiep-nhan-thanh-toan/constants/constants";
import { formatTrangThaiBenhNhanCDHA } from "../../phan-he-cdha-va-tdcn/constants/Constants";

export const DanhSachBenhNhanColumns: ReadonlyArray<
  Column<any>
> = [
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title=' '
          className="spaces W-20"
        />
      ),
      id: "TT",
      Cell: ({ ...props }) => (
        <TableCustomCell
          data={formatTrangThaiBenhNhanCDHA(props?.row?.original?.trangThai)}
          className="text-center"
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"STT"}
          className=" text-center spaces W-30"
        />
      ),
      id: "stt",
      Cell: ({ ...props }) => (
        <TableCustomCell
          data={props?.row?.index + 1}
          className="text-center"
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Tên bệnh nhân"}
          className=" text-center min-w-200px"
        />
      ),
      id: "tenBenhNhan",
      Cell: ({ ...props }) => (
        <TableCustomCell
          data={props?.row?.original?.hoTen}
          className="text-center"
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Tuổi"}
          className=" text-center text-white align-middle bg-pri"
        />
      ),
      id: "tuoi",
      Cell: ({ ...props }) => (
        <TableCustomCell
          data={props?.row?.original?.age}
          className="text-center"
        />
      ),
    },
  ]

export const DanhSachDichVuColumns: ReadonlyArray<
  Column<any>
> = [
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title=' '
          className="spaces W-20"
        />
      ),
      id: "TT",
      Cell: ({ ...props }) => (
        <TableCustomCell
          data={
            props.data[props.row.index].status ===
              statusOptions.chuaThanhToan.name ? (
              <i className="bi bi-circle-fill text-danger"></i>
            ) : props.data[props.row.index].status ===
              statusOptions.daThanhToan.name ? (
              <i className="bi bi-circle-fill text-success"></i>
            ) : (
              <i className="bi bi-circle-fill text-primary"></i>
            )
          }
          className="text-center"
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"STT"}
          className=" text-center spaces W-40"
        />
      ),
      id: "stt",
      Cell: ({ ...props }) => (
        <TableCustomCell
          data={props?.row?.index + 1}
          className="text-center"
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Tên dịch vụ"}
          className="min-w-450px"
        />
      ),
      id: "tenDichVu",
      Cell: ({ ...props }) => (
        <TableCustomCell
          data={props?.row?.original?.tenDichVu}
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Số lượng"}
          className=" text-center "
        />
      ),
      id: "soLuong",
      Cell: ({ ...props }) => (
        <TableCustomCell
          data={props?.row?.original?.soLuong}
          className="text-center"
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Kết luận"}
          className=" text-center min-w-275px"
        />
      ),
      id: "ketLuan",
      Cell: ({ ...props }) => (
        <TableCustomCell
          data={props?.row?.original?.ketLuan}
        />
      ),
    },
  ]