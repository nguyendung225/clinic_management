import { Column } from 'react-table'
import { IBenhNhan } from '../../../models/PhanHeTiepNhanModel'
import moment from 'moment'
import ActionTable from '../../../../component/action-table/ActionTable'
import { TableCustom } from '../../../../component/table/table-custom/TableCustom'
import { TableCustomHeader } from '../../../../component/table/components/TableCustomHeader'
import { TableCustomCell } from '../../../../component/table/components/TableCustomCell'

type Props = {
  danhSachBenhNhan: IBenhNhan[];
  setBenhNhan: React.Dispatch<React.SetStateAction<IBenhNhan[]>>;
  handleSelectAction: () => void;
}

const DanhSachBenhNhan = ({ danhSachBenhNhan, setBenhNhan, handleSelectAction }: Props) => {
  
  const columns: ReadonlyArray<Column<IBenhNhan>> = [
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"STT"}
          className="text-center text-white px-3 min-w-30px"
        />
      ),
      id: "STT",
      Cell: ({ ...props }) => (
        <TableCustomCell className="text-center" data={String(props.row.index + 1)} />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Thao tác"}
          className="text-center text-white px-3 min-w-125px"
        />
      ),
      id: "acrion",
      Cell: ({ ...props }) => (
        <TableCustomCell className="text-center" data={<ActionTable data={props.row.original} isDelete handleSelectAction={handleSelectAction} />} />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Họ và tên"}
          className="text-center text-white px-3 min-w-150px"
        />
      ),
      id: "hoTenBenhNhan",
      Cell: ({ ...props }) => (
        <TableCustomCell data={props.row.original?.hoTenBenhNhan} />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Ngày sinh"}
          className="text-center text-white px-3 min-w-125px"
        />
      ),
      id: "ngaySinh",
      Cell: ({ ...props }) => {
        const ngaySinh = `${props.row.original?.ngaySinh}/${props.row.original?.thangSinh}/${props.row.original?.namSinh}`
        return <TableCustomCell className="text-center" data={moment(ngaySinh, 'D/M/YYYY').format("DD/MM/YYYY")} />
      },
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Giới tính"}
          className="text-center text-white px-3 min-w-90px"
        />
      ),
      id: "gioiTinh",
      Cell: ({ ...props }) => (
        <TableCustomCell className="text-center" data={props.row.original?.gioiTinh?.name} />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"CCCD"}
          className="text-center text-white px-3 min-w-125px"
        />
      ),
      id: "cccd",
      Cell: ({ ...props }) => (
        <TableCustomCell className="text-center" data={props.row.original?.cccd} />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Quốc tịch"}
          className="text-center text-white px-3 min-w-125px"
        />
      ),
      id: "quocTich",
      Cell: ({ ...props }) => (
        <TableCustomCell className="text-center" data={props.row.original?.quocTich?.name} />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Điện thoại"}
          className="text-center text-white px-3 min-w-150px"
        />
      ),
      id: "soDienThoai",
      Cell: ({ ...props }) => (
        <TableCustomCell className="text-center" data={props.row.original?.soDienThoai} />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Địa chỉ"}
          className="text-center text-white px-3 min-w-150px"
        />
      ),
      id: "address",
      Cell: ({ ...props }) => (
        <TableCustomCell data={props.row.original?.address} />
      ),
    },
  ]

  return (
    <div>
      <TableCustom<IBenhNhan>
        columns={columns}
        data={danhSachBenhNhan}
        selectionMode='singleNoRadioButton'
        getSelectedRowsData={setBenhNhan} />
    </div>
  )
}

export default DanhSachBenhNhan