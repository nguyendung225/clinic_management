import { Column } from "react-table";
import { PhongKhamInfo } from "../../../phan-he-tiep-nhan-thanh-toan/models/PhongKhamModel";
import { TableCustomHeader } from "../../../component/table/components/TableCustomHeader";
import { TableCustomCell } from "../../../component/table/components/TableCustomCell";

export const DSPhongKhamColumns: ReadonlyArray<Column<PhongKhamInfo>> = [
  {
      Header: (props) => (
          <TableCustomHeader<PhongKhamInfo>
              tableProps={props}
              title={"STT"}
              className="text-center text-light min-w-30px "
          />
      ),
      id: "INDEX",
      Cell: ({ ...props }) => <TableCustomCell data={(props.row.index + 1).toString()} className='text-center'/>,
  },
  {
      Header: (props) => (
          <TableCustomHeader<PhongKhamInfo>
              tableProps={props}
              title={"Tên Phòng Khám"}
              className="text-center text-light min-w-150px "
          />
      ),
      id: "TENPHONGKHAM",
      Cell: ({ ...props }) => <TableCustomCell data={props.data[props.row.index].name} className='text-center'/>,
  },
  {
      Header: (props) => (
          <TableCustomHeader<PhongKhamInfo>
              tableProps={props}
              title={"Tên Bác Sĩ"}
              className="text-center min-w-140px "
          />
      ),
      id: "TENBACSI",
      Cell: ({ ...props }) => <TableCustomCell data={props.data[props.row.index].tenBacSi || ''} className='text-center'/>,
  },
  {
      Header: (props) => (
          <TableCustomHeader<PhongKhamInfo>
              tableProps={props}
              title={"Chờ Khám"}
              className="text-center text-light min-w-90px"
          />
      ),
      id: "CHOKHAM",
      Cell: ({ ...props }) => (
          <TableCustomCell data={props.data[props.row.index].slChoKham || ''} className='text-center'/>
      ),
  },
  {
      Header: (props) => (
          <TableCustomHeader<PhongKhamInfo>
              tableProps={props}
              title={"Đang Khám"}
              className="text-center text-light min-w-100px"
          />
      ),
      id: "DANGKHAM",
      Cell: ({ ...props }) => (
          <TableCustomCell data={props.data[props.row.index].slDangKham || ''} className='text-center'/>
      ),
  },
  {
      Header: (props) => (
          <TableCustomHeader<PhongKhamInfo>
              tableProps={props}
              title={"Đang Làm CLS"}
              className="text-center text-light min-w-125px"
          />
      ),
      id: "DANGLAMCLS",
      Cell: ({ ...props }) => (
          <TableCustomCell data={props.data[props.row.index].slDangLamCLS || ''} className='text-center'/>
      ),
  },
]