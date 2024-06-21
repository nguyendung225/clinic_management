import { useEffect, useRef, useState } from 'react'
import { useIntl } from 'react-intl'
import { ConfirmDialog } from '../../../../component/ConfirmDialog'
import { CODE_ITEM_MENU, contextMenuDSDangKy } from '../../../constants/constants'
import { IDSDangKy } from '../../../models/ModelTabDSDangKy'
import { fakeDataDSDangKy } from '../../fakeData'
import ModalChuyenPhongKham from '../modal-ds-dang-ky/ModalChuyenPhongKham'
import ModalPhieuKhamBenh from '../modal-ds-dang-ky/ModalPhieuKhamBenh'
import { columnDsDangKy } from './TabDSDangKyColumn'
import ContextMenu from '../../../../component/ContextMenuV2'
import { TableCustom } from '../../../../component/table/table-custom/TableCustom'

type Props = {}

const TabDSDangKy = (props: Props) => {
  const intl = useIntl();
  const [selectRow, setSelectRow] = useState();
  const [shouldOpenPhieuKhamBenhDialog, setShouldOpenPhieuKhamBenhDialog] = useState(false);
  const [shouldOpenThayDoiPhongKhamDialog, setShouldOpenThayDoiPhongKhamDialog] = useState(false);
  const [shouldOpenHuyDangKyKhamDialog, setShouldOpenHuyDangKyKhamDialog] = useState(false);
  const contextRef = useRef<HTMLDivElement | null>(null);
  const [contextMenu, setContextMenu] = useState<null | {
    x: number;
    y: number;
  }>(null);
  const [contextClientX, setContextClientX] = useState<number>(0);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleContextMenu = (e: any, row: any) => {
    e.preventDefault();
    setSelectRow(row?.original);
    setContextClientX(e.clientX);

    const heightDropList = document.getElementById("drop-list")?.clientHeight || 0;
    const isOnRight = (window.innerWidth - e.clientX) < 200;
    const newX = isOnRight ? e.clientX - 200 : e.clientX;
    const isBottom = (window.innerHeight - e.clientY) < 200;
    const newY = isBottom ? e.clientY - heightDropList : e.clientY;
    
    setContextMenu({ x: newX, y: newY });
  };

  const handleClickOutside = (e: any) => {
    if (contextRef.current && !contextRef.current.contains(e.target as Node)) {
      setContextMenu(null);
    }
  };

  const handleClickOptionContextMenu = (value: any) => {
    const menuActions = {
      [CODE_ITEM_MENU.IN_PHIEU_KHAM_BENH]: () => setShouldOpenPhieuKhamBenhDialog(true),
      [CODE_ITEM_MENU.THAY_DOI_PHONG_KHAM]: () => setShouldOpenThayDoiPhongKhamDialog(true),
      [CODE_ITEM_MENU.HUY_DANG_KY_KHAM]: () => setShouldOpenHuyDangKyKhamDialog(true),
    };

    menuActions[value?.code]();
  };

  const handleOnYesClick = () => {
    console.log(selectRow);
  }

  return (
    <div className="mt-3">
      <TableCustom<IDSDangKy>
        data={fakeDataDSDangKy}
        columns={columnDsDangKy}
        handleContextMenu={handleContextMenu}
        className='h-ds-dang-ky'
      />

      <div ref={contextRef}>
        {contextMenu && (
          <ContextMenu
            contextClientX={contextClientX}
            data={contextMenuDSDangKy}
            x={contextMenu.x}
            y={contextMenu.y}
            handleClickOptionContextMenu={handleClickOptionContextMenu}
          />
        )}
      </div>

      <ModalPhieuKhamBenh
        show={shouldOpenPhieuKhamBenhDialog}
        handleCloseDialog={() => setShouldOpenPhieuKhamBenhDialog(false)}
      />

      <ModalChuyenPhongKham
       show={shouldOpenThayDoiPhongKhamDialog}
       handleCloseDialog={() => setShouldOpenThayDoiPhongKhamDialog(false)}
      />

      <ConfirmDialog
        show={shouldOpenHuyDangKyKhamDialog}
        title={"Xác nhận hủy đăng ký khám"}
        message={"Bạn có chắc chắn muốn xóa phiếu khám này không?"}
        yes={intl.formatMessage({ id: 'BTN.CONFIRM' })}
        onYesClick={handleOnYesClick}
        cancel={intl.formatMessage({ id: 'BTN.CANCEL' })}
        onCancelClick={() => setShouldOpenHuyDangKyKhamDialog(false)}
      />
    </div>
  )
}

export default TabDSDangKy