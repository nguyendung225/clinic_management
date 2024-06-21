import { useContext, useRef, useState } from 'react'
import { toast } from 'react-toastify'
import Autocomplete from '../../../component/AutocompleteObject'
import { ConfirmDialog } from '../../../component/ConfirmDialog'
import ContextMenu from '../../../component/ContextMenuV2'
import InputSearch from '../../../component/InputSearch'
import { TableCustom } from '../../../component/table/table-custom/TableCustom'
import { fakeListBN } from '../../../phan-he-kham-benh/components/FakeData'
import InfoPatient from '../../../phan-he-kham-benh/components/InfoPatient'
import { IBenhNhan } from '../../../phan-he-kham-benh/models/DSBenhNhanKhamBenhModels'
import { IContextMenu } from '../../../phan-he-tiep-nhan-thanh-toan/models/ModelTabDSDangKy'
import DialogLichSuKham from '../../../phan-he-xet-nghiem/components/tab-lay-mau-benh-pham/DialogLichSuKham'
import { SELECTION_MODE } from '../../../utils/Constant'
import { dsBenhNhanColumn } from '../../columns/ColumnDSBenhNhan'
import { CODE_CONTEXT_HANH_CHINH, listContextDsBenhNhan } from '../../constants/Context'
import { PhanHeTiepDonContext } from '../../../phan-he-kham-benh/contexts/PhanHeTiepDonContext'

type Props = {}

const DanhSachBenhNhan = (props: Props) => {
  const { benhNhanInfo, setBenhNhanInfo } = useContext(PhanHeTiepDonContext);
  const contextRef = useRef<HTMLDivElement | null>(null);
  const [openModalLichSuKhamDieuTri, setOpenModalLichSuKhamDieuTri] = useState(false);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
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
      [CODE_CONTEXT_HANH_CHINH.LICH_SU_KHAM_VA_DIEU_TRI]: () => setOpenModalLichSuKhamDieuTri(true),
      [CODE_CONTEXT_HANH_CHINH.HUY_TIEP_NHAN]: () => setOpenConfirmDialog(true),
    }

    options[value?.code as string]();
  }

  const handleYesClick = () => {
    setOpenConfirmDialog(false);
    toast.success("Đã hủy nhập viện thành công!")
    //NB được đổi trạng thái thành “chưa tiếp nhận”
  }

  const handleSelectBenhNhan = (benhNhan: IBenhNhan[]) => {
    setBenhNhanInfo(benhNhan[0])
  }

  return (
    <div>
      <div className='mb-1'>
        <InfoPatient infoBenhNhan={benhNhanInfo} />
      </div>

      <InputSearch handleChange={() => { }} />

      <TableCustom
        columns={dsBenhNhanColumn}
        data={fakeListBN}
        className='mb-1 spaces h-calc-vh-489'
        handleContextMenu={handleContextMenu}
        selectionMode={SELECTION_MODE.SINGLE_NO_RADIO_BUTTON}
        getSelectedRowsData={handleSelectBenhNhan}
      />
      {contextMenu && (
        <div ref={contextRef}>
          <ContextMenu
            contextClientX={contextClientX}
            data={listContextDsBenhNhan}
            x={contextMenu.x}
            y={contextMenu.y}
            handleClickOptionContextMenu={handleClickOptionContextMenu}
            contextRef={contextRef}
            setContextMenu={setContextMenu}
          />
        </div>
      )}

      <Autocomplete placeholder='Tất cả bệnh nhân' options={[]} className='mb-1 autocomplete-custom-tiep-nhan w-100' />
      <Autocomplete placeholder='Tất cả khoa' options={[]} className="autocomplete-custom-tiep-nhan w-100" />

      <DialogLichSuKham open={openModalLichSuKhamDieuTri} handleClose={setOpenModalLichSuKhamDieuTri} />

      <ConfirmDialog
        show={openConfirmDialog}
        title='Xác nhận'
        message='Bạn có chắc chắn muốn hủy nhập viện không?'
        yes='Có'
        close='Không'
        onYesClick={handleYesClick}
        onCloseClick={() => setOpenConfirmDialog(false)}
      />
    </div>
  )
}

export default DanhSachBenhNhan