import { useRef, useState } from 'react'
import InputSearch from '../../../component/InputSearch'
import CombinedTable from '../../../component/table/combined-table/CombinedTable'
import { dataVatTuTrongTatCaCacKho } from '../../const/FakeData'
import { vatTuTrongTatCaKhoColumn } from './DSVatTuTrongTatCaCacKhoColumn'
import { IContextMenu } from '../../../phan-he-tiep-nhan-thanh-toan/models/ModelTabDSDangKy'
import { CODE_LIST_CONTEXT_VAT_TU, listContextDSVatTuTrongTatCaKho } from '../../const/constants'
import ContextMenu from '../../../component/ContextMenuV2'
import ModalLichSuNhapXuat from '../modal-danh-sach-vat-tu-trong-kho/modal-lich-su-nhap-xuat/ModalLichSuNhapXuat'
import ModalLichSuThayDoiDauKy from '../modal-danh-sach-vat-tu-trong-kho/modal-lich-thay-doi-dau-ky/ModalLichSuThayDoiDauKy'
import ModalDSPhieuChoXuat from '../modal-danh-sach-vat-tu-trong-kho/modal-danh-sach-phieu-cho-xuat/ModalDSPhieuChoXuat'
import ModalTuyChonBaoCao from '../../../phan-he-tiep-nhan-thanh-toan/components/tab-thanh-toan/modal-tuy-chon-bao-cao/ModalTuyChonBaoCao'

type Props = {}

const TableDSVatTuTrongTatCaCacKho = (props: Props) => {
  const [openModalLichSuNhapXuat, setOpenModalLichSuNhapXuat] = useState(false);
  const [openModalLichSuThayDoiDauKy, setOpenModalLichSuThayDoiDauKy] = useState(false);
  const [openModalDSPhieuChoXuat, setOpenModalDSPhieuChoXuat] = useState(false);
  const [openModalTheKho, setOpenModalTheKho] = useState(false);
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
    setContextMenu(null);
    const options = {
      [CODE_LIST_CONTEXT_VAT_TU.LICH_SU_NHAP_XUAT]: () => setOpenModalLichSuNhapXuat(true),
      [CODE_LIST_CONTEXT_VAT_TU.LICH_SU_THAY_DOI_DAU_KY]: () => setOpenModalLichSuThayDoiDauKy(true),
      [CODE_LIST_CONTEXT_VAT_TU.DANH_SACH_PHIEU_CHO_XUAT]: () => setOpenModalDSPhieuChoXuat(true),
      [CODE_LIST_CONTEXT_VAT_TU.THE_KHO]: () => setOpenModalTheKho(true),
    }

    options[value?.code as string]();
  }
  return (
    <div>
      <InputSearch
        handleChange={() => { }}
        placeholder='Tìm kiếm'
      />

      <CombinedTable className='h-table-ds-vat-tu-trong-kho' userColumns={vatTuTrongTatCaKhoColumn} data={dataVatTuTrongTatCaCacKho} treeTable handleRightClick={handleContextMenu} />
      {contextMenu && (
        <div ref={contextRef}>
          <ContextMenu
            contextClientX={contextClientX}
            data={listContextDSVatTuTrongTatCaKho}
            x={contextMenu.x}
            y={contextMenu.y}
            handleClickOptionContextMenu={handleClickOptionContextMenu}
            contextRef={contextRef}
            setContextMenu={setContextMenu}
          />
        </div>
      )}

      <ModalLichSuNhapXuat show={openModalLichSuNhapXuat} handleCloseDialog={() => setOpenModalLichSuNhapXuat(false)} />
      <ModalLichSuThayDoiDauKy show={openModalLichSuThayDoiDauKy} handleCloseDialog={() => setOpenModalLichSuThayDoiDauKy(false)} />
      <ModalDSPhieuChoXuat show={openModalDSPhieuChoXuat} handleCloseDialog={() => setOpenModalDSPhieuChoXuat(false)} />
      <ModalTuyChonBaoCao show={openModalTheKho} handleCloseDialog={() => setOpenModalTheKho(false)} loaiPhieu={CODE_LIST_CONTEXT_VAT_TU.THE_KHO} />
    </div>
  )
}

export default TableDSVatTuTrongTatCaCacKho