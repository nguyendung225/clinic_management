import { useContext, useEffect, useRef, useState } from "react"
import { Button, Col, Row } from "react-bootstrap"
import { useLocation } from "react-router-dom"
import { toast } from "react-toastify"
import { ConfirmDialog } from "../../../component/ConfirmDialog"
import ContextMenu from "../../../component/ContextMenuV2"
import DanhSachPhieu from "../../../component/DanhSachPhieu"
import LabelRequired from "../../../component/LabelRequired"
import ModalOneColumn from "../../../component/ModalOneColumn"
import ModalPhieuIn from "../../../component/ModalPhieuIn"
import CustomTextarea from "../../../component/custom-textarea/CustomTextarea"
import { stylePrint } from "../../../component/phieu-in/constant"
import { TableCollapse } from "../../../component/table/table-collapse/TableCollapse"
import { IContextMenu } from "../../../phan-he-tiep-nhan-thanh-toan/models/ModelTabDSDangKy"
import { MESSAGE, PATH_NAME } from "../../../utils/Constant"
import { dichVuColumn } from "../../columns/tab-chuyen-khoa/ColumnTabChuyenKhoa"
import ModalEditOneColumn from "../../components/modal-ke-thuoc/ModalEditOneColumn"
import PhieuChuyenKhoa from "../../components/phieu-in/PhieuChuyenKhoa"
import ModalChonPhong from "../../components/tab-chuyen-khoa/modals/ModalChonPhong"
import ModalSuaNgayTraKetQua from "../../components/tab-chuyen-khoa/modals/ModalSuaNgayTraKetQua"
import { CODE_LIST_CHUYEN_KHOA, listContextDichVu } from "../../constants/ChuyenKhoa"
import { CODE_CONTEXT_TAB_XET_NGHIEM, listContextPhieuChuyenKhoa } from "../../constants/ContextConstants"
import { PhanHeTiepDonContext } from "../../contexts/PhanHeTiepDonContext"
import ModalChanDoanBenh from "../../modals/modal-chan-doan-benh/ModalChanDoanBenh"
import { dataDvChuyenKhoa } from "../../components/FakeData"
import PageChiDinhDichVu from "../../modals/modal-chi-dinh-dich-vu/PageChiDinhDichVu"

type Props = {
  danhSachPhieu?: boolean;
}

const TabChuyenKhoa = ({ danhSachPhieu = true }: Props) => {
  const { benhNhanInfo } = useContext(PhanHeTiepDonContext);
  const { pathname } = useLocation();
  const [openModalChonPhong, setOpenModalChonPhong] = useState(false);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const [openModalSuaNgayTraKetQua, setOpenModalSuaNgayTraKetQua] = useState(false);
  const [openModalSuaGhiChu, setOpenModalSuaGhiChu] = useState(false);
  const [dsDichVu, setDsDichVu] = useState<any[]>([]);
  const [selectRowDichVu, setSelectRowDichVu] = useState<any>();
  const [openPhieuIn, setOpenPhieuIn] = useState(false);
  const [messageConfirm, setMessageConfirm] = useState("");
  const [codeClick, setCodeClick] = useState("");
  const [guiPhieu, setGuiPhieu] = useState(true);
  const [idTable, setIdTable] = useState("");
  const checkListContext = idTable === CODE_CONTEXT_TAB_XET_NGHIEM.DS_PHIEU ? listContextPhieuChuyenKhoa : listContextDichVu;
  const [openModalSuaPhieu, setOpenModalSuaPhieu] = useState(false);
  const contextRef = useRef<HTMLDivElement | null>(null);
  const [contextMenu, setContextMenu] = useState<null | {
    x: number;
    y: number;
  }>(null);
  const [contextClientX, setContextClientX] = useState<number>(0);

  const handleContextMenu = (e: any, row: any, code: string) => {
    e.preventDefault();
    setContextClientX(e.clientX);
    setIdTable(code as string);

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
    const openConfirmDialog = (message: string) => {
      setOpenConfirmDialog(true);
      setMessageConfirm(message);
    }

    const options = {
      [CODE_LIST_CHUYEN_KHOA.CHUYEN_PHONG_THUC_HIEN]: () => setOpenModalChonPhong(true),
      [CODE_LIST_CHUYEN_KHOA.BO_DICH_VU_KHONG_LAM]: () => openConfirmDialog(MESSAGE.CONFIRM.BO_DICH_VU_KHONG_LAM),
      [CODE_CONTEXT_TAB_XET_NGHIEM.HUY_GUI_PHIEU]: () => openConfirmDialog(MESSAGE.CONFIRM.HUY_GUI_PHIEU_CDHA),
      [CODE_CONTEXT_TAB_XET_NGHIEM.XOA_PHIEU]: () => openConfirmDialog(MESSAGE.CONFIRM.XOA_PHIEU),
      [CODE_CONTEXT_TAB_XET_NGHIEM.GUI_PHIEU]: () => {
        setGuiPhieu(false);
        toast.success(MESSAGE.SUCCESS.GUI_PHIEU)
      },
      [CODE_LIST_CHUYEN_KHOA.SUA_NGAY_TRA_KET_QUA]: () => setOpenModalSuaNgayTraKetQua(true),
      [CODE_LIST_CHUYEN_KHOA.SUA_GHI_CHU]: () => setOpenModalSuaGhiChu(true),
    }

    options[value?.code as string]();
  }

  const handleYesClick = (code: string) => {
    setOpenConfirmDialog(false);
    const options = {
      [CODE_CONTEXT_TAB_XET_NGHIEM.HUY_GUI_PHIEU]: () => {
        // Chỉ hủy được phiếu khi chưa 
        // có dịch vụ nào trong phiếu đó 
        // được thực hiện
        toast.success(MESSAGE.SUCCESS.HUY_GUI_PHIEU);
        setGuiPhieu(true);
        // toast.warning(MESSAGE.WARNING.HUY_GUI_PHIEU) Khi không hủy được thì sẽ hiện toast này
      },
      [CODE_CONTEXT_TAB_XET_NGHIEM.XOA_PHIEU]: () => {
        toast.success(MESSAGE.SUCCESS.XOA_PHIEU);
      }
    }

    options[code]();
  }

  const handleSaveGhiChu = (value: any) => {
    // Nhập thông tin -> Lưu -> Thông tin được lưu vào cột “Ghi chú(Chỉ định)” 
  }

  const handleSelectRowData = (rowData: any) => {
    setDsDichVu(rowData?.chuyenKhoa);
  };

  const handleOpenPhieuIn = () => {
    setOpenPhieuIn(true);
  }

  useEffect(() => {
    setDsDichVu(dataDvChuyenKhoa);
  }, [])

  const handleSuaPhieu = () => {
    setOpenModalSuaPhieu(true);
  }

  return (
    <Row>
      <div>
        <div className="px-2 py-1 bg-white mb-4">
          <Row className="spaces h-25">
            <Col xs={4} className="d-flex align-items-center">
              <LabelRequired label="Mã phiếu:" className="min-w-65px mb-2" />
              <CustomTextarea readOnly />
            </Col>
            <Col xs={4} className="d-flex align-items-center">
              <LabelRequired label="Ngày y lệnh:" className="min-w-80px mb-2" />
              <CustomTextarea readOnly />
            </Col>
            <Col xs={4} className="d-flex align-items-center">
              <LabelRequired label="Ngày chỉ định:" className="min-w-95px mb-2" />
              <CustomTextarea readOnly />
            </Col>
          </Row>
          <Row className="spaces h-25">
            <Col xs={4} className="d-flex align-items-center">
              <LabelRequired label="Người chỉ định:" className="min-w-100px mb-2" />
              <CustomTextarea readOnly />
            </Col>
            <Col xs={8} className="d-flex align-items-center">
              <LabelRequired label="Nơi chỉ định:" className="min-w-80px mb-2" />
              <CustomTextarea readOnly />
            </Col>
          </Row>
          <Row className="spaces h-25">
            <Col xs={12} className="d-flex align-items-center">
              <LabelRequired label="Chẩn đoán:" className="min-w-80px mb-2" />
              <CustomTextarea readOnly />
            </Col>
          </Row>
        </div>

        <div className="bg-white pt-2 mb-2">
          {danhSachPhieu && <DanhSachPhieu
            className="mb-2"
            handleSelectRowData={handleSelectRowData}
            dsPhieu={benhNhanInfo?.dsDichVu as []}
            handleContextMenu={(e, row) => handleContextMenu(e, row, CODE_CONTEXT_TAB_XET_NGHIEM.DS_PHIEU)}
          />}

          <TableCollapse
            className={`spaces h-calc-vh-${PATH_NAME.KHAM_BENH === pathname ? "294" : !danhSachPhieu ? "300" : "333"} border-bottom`}
            data={dsDichVu || []}
            columns={dichVuColumn}
            collapseHeader="tenNhom"
            collapseBody="dsDichVu"
            handleContextMenu={(e, row) => handleContextMenu(e, row, CODE_CONTEXT_TAB_XET_NGHIEM.DS_DICH_VU)}
            handleClickRow={(item) => setSelectRowDichVu(item)}
          />

          {contextMenu && (
            <div ref={contextRef}>
              <ContextMenu
                contextClientX={contextClientX}
                data={checkListContext}
                x={contextMenu.x}
                y={contextMenu.y}
                handleClickOptionContextMenu={handleClickOptionContextMenu}
                contextRef={contextRef}
                setContextMenu={setContextMenu}
              />
            </div>
          )}
        </div>

        <div className="d-flex justify-content-center py-2 gap-2 bg-white">
          <Button className="btn-fill" onClick={handleOpenPhieuIn}>Phiếu chỉ định</Button>
          {guiPhieu ?
            <>
              <Button className="btn-fill" onClick={handleSuaPhieu}>Sửa phiếu</Button>
              <Button className="btn-fill" onClick={() => handleClickOptionContextMenu({ code: CODE_CONTEXT_TAB_XET_NGHIEM.GUI_PHIEU })}>Gửi phiếu</Button>
              <Button className="btn-fill" onClick={() => handleClickOptionContextMenu({ code: CODE_CONTEXT_TAB_XET_NGHIEM.XOA_PHIEU })}>Xóa phiếu</Button>
            </>
            :
            <Button className="btn-fill" onClick={() => handleClickOptionContextMenu({ code: CODE_CONTEXT_TAB_XET_NGHIEM.HUY_GUI_PHIEU })}>Hủy gửi phiếu</Button>
          }
        </div>
      </div>

      <ModalChonPhong show={openModalChonPhong} handleCloseDialog={() => setOpenModalChonPhong(false)} />
      <ModalSuaNgayTraKetQua show={openModalSuaNgayTraKetQua} handleCloseDialog={() => setOpenModalSuaNgayTraKetQua(false)} />
      <ConfirmDialog
        show={openConfirmDialog}
        yes="Có"
        close="Không"
        title="Xác nhận"
        message={messageConfirm}
        onYesClick={() => handleYesClick(codeClick)}
        onCloseClick={() => setOpenConfirmDialog(false)}
      />
      {
        openModalSuaGhiChu && <ModalEditOneColumn name="Ghi chú" code="ghiChu" handleClose={() => setOpenModalSuaGhiChu(false)} handleSave={handleSaveGhiChu} />
      }

      <ModalPhieuIn
        size="lg"
        stylePrint={stylePrint}
        show={openPhieuIn}
        handleCloseDialog={() => setOpenPhieuIn(false)}
        title="Phiếu chuyên khoa"
      >
        <PhieuChuyenKhoa />
      </ModalPhieuIn>
      {CODE_CONTEXT_TAB_XET_NGHIEM.SUA_CHAN_DOAN_BENH === codeClick && <ModalChanDoanBenh handleClose={() => setCodeClick("")} />}
      <ModalOneColumn
        show={(CODE_CONTEXT_TAB_XET_NGHIEM.CHUYEN_NGAY_Y_LENH === codeClick) || (CODE_CONTEXT_TAB_XET_NGHIEM.CHUYEN_PHIEU_DIEU_TRI === codeClick)}
        handleCloseDialog={() => setCodeClick("")}
        title={CODE_CONTEXT_TAB_XET_NGHIEM.CHUYEN_NGAY_Y_LENH === codeClick ? "Cập nhật ngày y lệnh" : "Cập nhật phiếu điều trị"}
        label={CODE_CONTEXT_TAB_XET_NGHIEM.CHUYEN_NGAY_Y_LENH === codeClick ? "Ngày y lệnh" : "Phiếu điều trị"}
        type="datetime-local"
        name={CODE_CONTEXT_TAB_XET_NGHIEM.CHUYEN_NGAY_Y_LENH}
      />

      {
        openModalSuaPhieu && <PageChiDinhDichVu handleClose={() => setOpenModalSuaPhieu(false)} dieuTri />
      }
    </Row>
  )
}

export default TabChuyenKhoa