import { useRef, useState } from "react"
import { TableCustom } from "../../component/table/table-custom/TableCustom"
import { DanhSachDichVuColumns } from "../columns/Columns"
import ContextMenu from "../../component/ContextMenuV2"
import { CODE_LIST_DICH_VU, listContextDichVu } from "../constants/PhanHeChuyenKhoaConstants"
import { IContextMenu } from "../../phan-he-tiep-nhan-thanh-toan/models/ModelTabDSDangKy"
import ModalThanhToan from "./modal-thanh-toan/ModalThanhToan"
import ModalNhapThongTinPttt from "./modal-nhap-thong-tin-pttt/ModalNhapThongTinPttt"
import ModalQuanLyDichVu from "./modal-quan-ly-dich-vu/ModalQuanLyDichVu"
import ModalChiDinhDichVu from "./modal-chi-dinh-dich-vu/ModalChiDinhDichVu"
import ModalThucHienCDHA from "../../phan-he-cdha-va-tdcn/modals/ModalThucHienCDHA"
import { trangThaiBenhNhanCDHA } from "../../phan-he-cdha-va-tdcn/constants/Constants"
import ModalPhieuIn from "../../component/ModalPhieuIn"
import PhieuInKetQua from "./phieu-in/PhieuInKetQua"
import { stylePrint } from "../../component/phieu-in/constant"

type Props = {
  selectedRow: any
}

const TableDichVu = ({ selectedRow }: Props) => {
  const [openModalThanhToan, setOpenModalThanhToan] = useState(false);
  const [openModalNhapThongTinPttt, setOpenModalNhapThongTinPttt] = useState(false);
  const [openModalQuanLyDichVu, setOpenModalQuanLyDichVu] = useState(false);
  const [openModalChiDinhDichVu, setOpenModalChiDinhDichVu] = useState(false);
  const [openModalThucHien, setOpenModalThucHien] = useState(false);
  const [openPhieuInKetQua, setOpenPhieuInKetQua] = useState(false);
  const contextRef = useRef<HTMLDivElement | null>(null);
  const [contextMenu, setContextMenu] = useState<null | {
    x: number;
    y: number;
  }>(null);
  const [contextClientX, setContextClientX] = useState<number>(0);

  const handleContextMenu = (e: any, row: any) => {
    e.preventDefault();
    setContextClientX(e.clientX);

    const heightDropList = document.getElementById("drop-list")?.clientHeight || 0;
    const isOnRight = (window.innerWidth - e.clientX) < 200;
    const newX = isOnRight ? e.clientX - 200 : e.clientX;
    const isBottom = (window.innerHeight - e.clientY) < 200;
    const newY = isBottom ? e.clientY - heightDropList : e.clientY;

    setContextMenu({ x: newX, y: newY });
  };

  const handleClickOptionContextMenu = (value: IContextMenu) => {
    const options = {
      [CODE_LIST_DICH_VU.THANH_TOAN]: () => setOpenModalThanhToan(true),
      [CODE_LIST_DICH_VU.NHAP_THONG_TIN_PTTT]: () => setOpenModalNhapThongTinPttt(true),
      [CODE_LIST_DICH_VU.QUAN_LY_DICH_VU]: () => setOpenModalQuanLyDichVu(true),
      [CODE_LIST_DICH_VU.CHI_DINH_DICH_VU]: () => setOpenModalChiDinhDichVu(true),
    }

    options[value?.code as string]();
    setContextMenu(null)
  }

  const handleDoubleClick = (rowData: any) => {
    const options = {
      [trangThaiBenhNhanCDHA.dangThucHien.code]: () => setOpenModalThucHien(true),
      [trangThaiBenhNhanCDHA.daTraKetQua.code]: () => setOpenPhieuInKetQua(true),
    }

    options[selectedRow?.[0]?.trangThai]();
  }

  return (
    <div className="ps-0">
      <TableCustom columns={DanhSachDichVuColumns} data={selectedRow?.[0]?.dsDichVu || []} handleContextMenu={handleContextMenu} handleDoubleClick={handleDoubleClick} />

      {contextMenu && (
        <div ref={contextRef}>
          <ContextMenu
            contextClientX={contextClientX}
            data={listContextDichVu}
            x={contextMenu.x}
            y={contextMenu.y}
            handleClickOptionContextMenu={handleClickOptionContextMenu}
            contextRef={contextRef}
            setContextMenu={setContextMenu}
          />
        </div>
      )}

      <ModalThanhToan show={openModalThanhToan} handleCloseDialog={() => setOpenModalThanhToan(false)} selectedRow={selectedRow} />
      <ModalNhapThongTinPttt show={openModalNhapThongTinPttt} handleCloseDialog={() => setOpenModalNhapThongTinPttt(false)} selectedRow={selectedRow} />
      <ModalQuanLyDichVu show={openModalQuanLyDichVu} handleCloseDialog={() => setOpenModalQuanLyDichVu(false)} selectedRow={selectedRow} />
      <ModalChiDinhDichVu show={openModalChiDinhDichVu} handleCloseDialog={() => setOpenModalChiDinhDichVu(false)} selectedRow={selectedRow} />
      {openModalThucHien &&
        <ModalThucHienCDHA handleClose={() => setOpenModalThucHien(false)} handleTraKetQua={() => { }} infoBenhNhan={selectedRow} />
      }

      <ModalPhieuIn
        show={openPhieuInKetQua}
        handleCloseDialog={() => setOpenPhieuInKetQua(false)}
        title='Phiếu kết quả'
        size='lg'
        stylePrint={stylePrint}
      >
        <PhieuInKetQua />
      </ModalPhieuIn>
    </div>
  )
}

export default TableDichVu