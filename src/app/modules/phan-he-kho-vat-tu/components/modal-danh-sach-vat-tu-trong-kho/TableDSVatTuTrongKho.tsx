import { useRef, useState } from 'react'
import ContextMenu from '../../../component/ContextMenuV2'
import InputSearch from '../../../component/InputSearch'
import { TableCustom } from '../../../component/table/table-custom/TableCustom'
import ModalTuyChonBaoCao from '../../../phan-he-tiep-nhan-thanh-toan/components/tab-thanh-toan/modal-tuy-chon-bao-cao/ModalTuyChonBaoCao'
import { IContextMenu } from '../../../phan-he-tiep-nhan-thanh-toan/models/ModelTabDSDangKy'
import { dataVatTuTrongKho } from '../../const/FakeData'
import { CODE_LIST_CONTEXT_VAT_TU, listContextDSVatTuTrongKho } from '../../const/constants'
import { vatTuTrongKhoColumn } from './DSVatTuTrongKhoColumn'
import ModalSuaSoLuong from './ModalSuaSoLuong'
import ModalThemSuaPhongLuu from './ModalThemSuaPhongLuu'
import ModalDSPhieuChoXuat from './modal-danh-sach-phieu-cho-xuat/ModalDSPhieuChoXuat'
import ModalLichSuNhapXuat from './modal-lich-su-nhap-xuat/ModalLichSuNhapXuat'
import ModalLichSuThayDoiDauKy from './modal-lich-thay-doi-dau-ky/ModalLichSuThayDoiDauKy'

type Props = {}

const TableDSVatTuTrongKho = (props: Props) => {
  const [openModalLichSuNhapXuat, setOpenModalLichSuNhapXuat] = useState(false);
  const [openModalLichSuThayDoiDauKy, setOpenModalLichSuThayDoiDauKy] = useState(false);
  const [openModalDSPhieuChoXuat, setOpenModalDSPhieuChoXuat] = useState(false);
  const [openModalTheKho, setOpenModalTheKho] = useState(false);
  const [openModalSuaSoLuong, setOpenModalSuaSoLuong] = useState(false);
  const [openModalThemSuaPhongLuu, setOpenModalThemSuaPhongLuu] = useState(false);
  const [titleModalSuaSoLuong, setTitleModalSuaSoLuong] = useState("");
  const [labelModalSuaSoLuong, setLabelModalSuaSoLuong] = useState("");
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
    const openModalSuaSoLuong = (title: string, label: string) => {
      setOpenModalSuaSoLuong(true);
      setTitleModalSuaSoLuong(title);
      setLabelModalSuaSoLuong(label);
    };

    setContextMenu(null);
    const options = {
      [CODE_LIST_CONTEXT_VAT_TU.LICH_SU_NHAP_XUAT]: () => setOpenModalLichSuNhapXuat(true),
      [CODE_LIST_CONTEXT_VAT_TU.LICH_SU_THAY_DOI_DAU_KY]: () => setOpenModalLichSuThayDoiDauKy(true),
      [CODE_LIST_CONTEXT_VAT_TU.DANH_SACH_PHIEU_CHO_XUAT]: () => setOpenModalDSPhieuChoXuat(true),
      [CODE_LIST_CONTEXT_VAT_TU.THE_KHO]: () => setOpenModalTheKho(true),
      [CODE_LIST_CONTEXT_VAT_TU.SUA_SO_LUONG_DONG_BANG]: () => openModalSuaSoLuong("Cập nhật số lượng đóng băng", "Số lượng tồn đóng băng"),
      [CODE_LIST_CONTEXT_VAT_TU.SUA_SO_LUONG_SU_DUNG]: () => openModalSuaSoLuong("Cập nhật số lượng sử dụng", "Số lượng sử dụng"),
      [CODE_LIST_CONTEXT_VAT_TU.THEM_SUA_PHONG_LUU]: () => setOpenModalThemSuaPhongLuu(true),
    }

    options[value?.code as string]();
  }

  return (
    <div>
      <InputSearch
        handleChange={() => { }}
        placeholder='Tìm kiếm'
      />

      <TableCustom className='h-table-ds-vat-tu-trong-kho' columns={vatTuTrongKhoColumn} data={dataVatTuTrongKho} handleContextMenu={handleContextMenu} />
      {contextMenu && (
        <div ref={contextRef}>
          <ContextMenu
            contextClientX={contextClientX}
            data={listContextDSVatTuTrongKho}
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
      <ModalSuaSoLuong show={openModalSuaSoLuong} handleCloseDialog={() => setOpenModalSuaSoLuong(false)} title={titleModalSuaSoLuong} label={labelModalSuaSoLuong} />
      <ModalThemSuaPhongLuu show={openModalThemSuaPhongLuu} handleCloseDialog={() => setOpenModalThemSuaPhongLuu(false)} />
    </div>
  )
}

export default TableDSVatTuTrongKho