import { Column } from "react-table";
import { TableCustomCell } from "../../../component/table/components/TableCustomCell";

export const dsPhieuChuyenKhoaColumn: ReadonlyArray<Column<any>> = [
  {
    Header: (props) => (<div className='p-0'></div>),
    id: "dv",
    Cell: ({ ...props }) => (
      <TableCustomCell
        data={
          <div className='ms-5'>
            <p className='my-1'>{props.data[props.row.index]?.date}</p>
          </div>
        } />
    ),
  },
];

export const dichVuColumn = [
  { title: "Tên dịch vụ", field: "tenDichVu", className: "spaces W-300" },
  { title: "SL", field: "sl", className: "spaces min-w-40px" },
  { title: "Loại PTTT", field: "loaiPTTT", className: "spaces min-w-100px" },
  { title: "Ghi chú", field: "ghiChu", className: "spaces min-w-100px" },
  { title: "Bắt đầu", field: "batDau", className: "spaces min-w-100px" },
  { title: "Kết thúc", field: "ketThuc", className: "spaces min-w-100px" },
  { title: "kết luận", field: "ketLuan", className: "spaces min-w-100px" },
  { title: "Đối tượng", field: "doiTuong", className: "spaces min-w-100px" },
]