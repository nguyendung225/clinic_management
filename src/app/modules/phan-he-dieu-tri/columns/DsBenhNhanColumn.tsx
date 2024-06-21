import { Column } from "react-table";
import { TableCustomHeader } from "../../component/table/components/TableCustomHeader";
import { TableCustomCell } from "../../component/table/components/TableCustomCell";
import { renderTrangThaiHanhChinh } from "../../utils/FormatUtils";
import { listTamUng, listTrangThai } from "../../phan-he-hanh-chinh/constants/ConstantPhanHeHanhChinh";
import { FormCheck } from "react-bootstrap";
import TextValidator from "../../component/TextValidator";
import moment from "moment";

export const dsBenhNhanColumn: ReadonlyArray<Column<any>> = [
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"TT"}
        className='text-center min-w-30px'
      />
    ),
    id: 'trangThai',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-center"
        data={renderTrangThaiHanhChinh(props?.row?.original?.trangThai, listTrangThai)}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"STT"}
        className='text-center min-w-30px'
      />
    ),
    id: 'stt',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-center"
        data={props?.row?.index + 1}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Tên bệnh nhân"}
        className='text-center min-w-200px'
      />
    ),
    id: 'hoTen',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={
          <div>
            <div className="fw-bolder text-uppercase">{props?.row?.original?.hoTen}</div>
            <div>{props?.row?.original?.maBn} - {props?.row?.original?.doiTuong}</div>
          </div>
        }
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Tuổi"}
        className='text-center min-w-50px'
      />
    ),
    id: 'age',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-center"
        data={props?.row?.original?.age}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Giường"}
        className='text-center min-w-100px'
      />
    ),
    id: 'giuong',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.giuong}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"BHYT"}
        className='text-center min-w-50px'
      />
    ),
    id: 'bhyt',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-center"
        data={renderTrangThaiHanhChinh(props?.row?.original?.bhyt)}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Tạm ứng"}
        className='text-center min-w-90px'
      />
    ),
    id: 'tamUng',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-center"
        data={renderTrangThaiHanhChinh(props?.row?.original?.tamUng, listTamUng)}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Ngoài giờ"}
        className='text-center min-w-90px'
      />
    ),
    id: 'ngoaiGio',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-center"
        data={props?.row?.original?.ngoaiGio}
      />
    ),
  }
]

export const dacDiemBenhColumn: ReadonlyArray<Column<any>> = [
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"STT"}
        className='text-center min-w-40px'
      />
    ),
    id: 'stt',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-center"
        data={props?.row?.original?.stt}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Ký hiệu"}
        className='text-end min-w-200px'
      />
    ),
    id: 'kyHieu',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-center"
        data={<div className="d-flex justify-content-between">
          <div>&bull;<span className="ms-1">{props?.row?.original?.kyHieu}</span></div>
          <FormCheck type="checkbox" className="form-check-w-25" />
        </div>}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Thời gian (tính theo tháng)"}
        className='text-center min-w-200px'
      />
    ),
    id: 'thoiGian',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-center"
        data={<TextValidator type="number" className="text-center" />}
      />
    ),
  },
]

export const dsPhieuDieuTriColumn: ReadonlyArray<Column<any>> = [
  {
    Header: (props) => <></>,
    id: 'phieu',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-center"
        data={
          <div className="d-flex align-items-center">
            <div className="pe-3"><i className="fa-solid fa-circle"></i></div>
            <div>
              <div>{moment(props?.row?.original?.ngay).format("DD/MM/YYYY hh:mm")}</div>
              <div>{props?.row?.original?.khoa}</div>
            </div>
          </div>
        }
      />
    ),
  },
]