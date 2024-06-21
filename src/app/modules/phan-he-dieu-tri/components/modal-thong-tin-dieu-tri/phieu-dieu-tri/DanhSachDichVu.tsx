import { TableCustom } from '../../../../component/table/table-custom/TableCustom'
import { dsPhieuDieuTriColumn } from '../../../columns/DsBenhNhanColumn'
import { dsPhieuDieuTri } from '../../../constants/FakeData'

type Props = {}

const DanhSachDichVu = (props: Props) => {
  return (
    <TableCustom columns={dsPhieuDieuTriColumn} data={dsPhieuDieuTri} />
  )
}

export default DanhSachDichVu