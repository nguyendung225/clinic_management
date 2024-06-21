import { useRef, useState } from 'react'
import ContextMenu from '../../component/ContextMenuV2'
import InputSearch from '../../component/InputSearch'
import { TableCustom } from '../../component/table/table-custom/TableCustom'
import { dataDSBenhNhan } from '../../phan-he-tiep-nhan-thanh-toan/components/fakeData'
import { IContextMenu } from '../../phan-he-tiep-nhan-thanh-toan/models/ModelTabDSDangKy'
import { SELECTION_MODE } from '../../utils/Constant'
import { DanhSachBenhNhanColumns } from '../columns/Columns'
import { CODE_CONTEXT_BENH_NHAN, listContextBenhNhan } from '../constants/PhanHeChuyenKhoaConstants'
import DialogLichSuKham from '../../phan-he-xet-nghiem/components/tab-lay-mau-benh-pham/DialogLichSuKham'
import { LIST_DOI_TUONG_TIEP_NHAN } from '../../phan-he-tiep-nhan-thanh-toan/constants/PhanHeTiepNhan'

type Props = {
  setSelectedRow: React.Dispatch<any>;
  selectedRow: any;
}

const TableBenhNhan = ({ setSelectedRow, selectedRow }: Props) => {
  const [openDialogLichSuKhamBenh, setOpenDialogLichSuKhamBenh] = useState<boolean>(false);
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
      [CODE_CONTEXT_BENH_NHAN.LICH_SU_KHAM_BENH]: () => setOpenDialogLichSuKhamBenh(true),
    }

    options[value?.code as string]();
  }


  return (
    <div className='spaces h-calc-vh-117'>
      <InputSearch
        handleChange={() => { }}
        placeholder="Tìm kiếm"
        type="text"
      />

      <div className="fw-500 my-4 info-patient-cdha spaces text-start min-h-94 px-2">
        {
          selectedRow?.length > 0 && <>
            <span className="text-uppercase fw-600">
              {selectedRow?.[0]?.hoTen} | {selectedRow?.[0]?.maBn} | Tuổi: {selectedRow?.[0]?.age} | {selectedRow?.[0]?.gioiTinh}
            </span>
            <div className="text-truncate">
              VP: 240 | {LIST_DOI_TUONG_TIEP_NHAN.find(item => item?.code === selectedRow?.[0]?.loaiDoiTuong)?.name}
            </div>
            <div className="text-truncate">
              Địa chỉ: {selectedRow?.[0]?.diaChi}
            </div>
          </>
        }
      </div>

      <TableCustom
        columns={DanhSachBenhNhanColumns}
        data={dataDSBenhNhan}
        selectionMode={SELECTION_MODE.SINGLE_NO_RADIO_BUTTON}
        getSelectedRowsData={setSelectedRow}
        handleContextMenu={handleContextMenu}
      />

      {contextMenu && (
        <div ref={contextRef}>
          <ContextMenu
            contextClientX={contextClientX}
            data={listContextBenhNhan}
            x={contextMenu.x}
            y={contextMenu.y}
            handleClickOptionContextMenu={handleClickOptionContextMenu}
            contextRef={contextRef}
            setContextMenu={setContextMenu}
          />
        </div>
      )}

      <DialogLichSuKham open={openDialogLichSuKhamBenh} handleClose={setOpenDialogLichSuKhamBenh} />
    </div>
  )
}

export default TableBenhNhan