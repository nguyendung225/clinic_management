import { useContext, useEffect, useRef, useState } from 'react'
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
import { SELECTION_MODE, VARIABLE_STRING } from '../../../utils/Constant'
import { PhanHeTiepDonContext } from '../../../phan-he-kham-benh/contexts/PhanHeTiepDonContext'
import { dsBenhNhanColumn } from '../../columns/DsBenhNhanColumn'
import { CODE_CONTEXT_DIEU_TRI, listContextDsBenhNhan } from '../../constants/ConstantContext'
import { CODE_CONTEXT_BENH_NHAN } from '../../../phan-he-chuyen-khoa/constants/PhanHeChuyenKhoaConstants'
import ModalFullPage from '../../../component/modal-full-page/ModalFullPage'
import ModalNhatKySuKienBenhAn from '../../modals/modal-nhat-ky-su-kien/ModalNhatKySuKienBenhAn'
import ModalThongTinDieuTri from '../../modals/modal-thong-tin-dieu-tri/ModalThongTinDieuTri'

type Props = {}

const DanhSachBenhNhan = (props: Props) => {
  const { benhNhanInfo, setBenhNhanInfo } = useContext(PhanHeTiepDonContext);
  const contextRef = useRef<HTMLDivElement | null>(null);
  const [openModalLichSuKhamDieuTri, setOpenModalLichSuKhamDieuTri] = useState(false);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const [openModalFullPage, setOpenModalFullPage] = useState(false);
  const [codeClick, setCodeClick] = useState("");
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
    setCodeClick(value?.code as string);
    const options = {
      [CODE_CONTEXT_BENH_NHAN.LICH_SU_KHAM_BENH]: () => setOpenModalLichSuKhamDieuTri(true),
      [CODE_CONTEXT_DIEU_TRI.NHAT_KY_SU_KIEN_BENH_AN]: () => setOpenModalFullPage(true),
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

  const handleDoubleClickRow = (row: any) => {
    setOpenModalFullPage(true);
    setBenhNhanInfo(row?.original);
    setCodeClick(VARIABLE_STRING.DOUBLE_CLICK)
  }

  const renderModalFullPage = (code: string) => {
    const options = {
      [CODE_CONTEXT_DIEU_TRI.NHAT_KY_SU_KIEN_BENH_AN]: {
        title: "Lịch sử thay đổi hồ sơ bệnh án",
        component: <ModalNhatKySuKienBenhAn />,
      },
      [VARIABLE_STRING.DOUBLE_CLICK]: {
        title: "Thông tin điều trị",
        component: <ModalThongTinDieuTri />,
      }
    }

    return options[code];
  }

  useEffect(() => {
    handleSelectBenhNhan(fakeListBN)
  },[])

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
        handleDoubleClick={handleDoubleClickRow}
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

      <ModalFullPage
        show={openModalFullPage}
        handleCloseDialog={() => setOpenModalFullPage(false)}
        title={renderModalFullPage(codeClick)?.title}
      >
        {renderModalFullPage(codeClick)?.component}
      </ModalFullPage>
    </div>
  )
}

export default DanhSachBenhNhan