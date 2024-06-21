import { useContext, useEffect, useRef, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import ContextMenu from "../../../component/ContextMenuV2";
import InputSearch from "../../../component/InputSearch";
import LabelRequired from "../../../component/LabelRequired";
import ModalOneColumn from "../../../component/ModalOneColumn";
import ModalPhieuIn from "../../../component/ModalPhieuIn";
import CustomTextarea from "../../../component/custom-textarea/CustomTextarea";
import { stylePrintA5 } from "../../../component/phieu-in/constant";
import { TableCustom } from "../../../component/table/table-custom/TableCustom";
import ModalChonNhanVien from "../../../phan-he-tiep-nhan-thanh-toan/components/tab-thanh-toan/modal-so-thu/ModalChonNhanVien";
import { IDsNhanVien } from "../../../phan-he-tiep-nhan-thanh-toan/models/SoThuModel";
import { MESSAGE, PATH_NAME, SELECTION_MODE } from "../../../utils/Constant";
import PhieuVatTu from "../../components/phieu-in/PhieuVatTu";
import { phieuVatTuColumn, vatTuColumn } from "../../constants/Columns";
import { CODE_CONTEXT_TAB_XET_NGHIEM, listContextVatTu } from "../../constants/ContextConstants";
import { contextPhieuTabThuoc } from "../../constants/KhamBenh";
import { PhanHeTiepDonContext } from "../../contexts/PhanHeTiepDonContext";
import DanhSachPhieu from "../../../component/DanhSachPhieu";
import { dataVatTu } from "../../components/FakeData";
import { toast } from "react-toastify";
import { ConfirmDialog } from "../../../component/ConfirmDialog";

type Props = {
  danhSachPhieu?: boolean;
}

const TabVatTu = ({ danhSachPhieu = true }: Props) => {
  const { pathname } = useLocation();
  const { benhNhanInfo } = useContext(PhanHeTiepDonContext);
  const [dsVatTu, setDsVatTu] = useState<any[]>([]);
  const [selectRow, setSelectRow] = useState<any>({});
  const [contextClientX, setContextClientX] = useState<number>(0);
  const [idTable, setIdTable] = useState("");
  const [codeItemContext, setCodeItemContext] = useState("");
  const [listNhanVien, setListNhanVien] = useState<IDsNhanVien[]>([]);
  const checkListContext = idTable === CODE_CONTEXT_TAB_XET_NGHIEM.DS_PHIEU ? contextPhieuTabThuoc : listContextVatTu;
  const [guiPhieu, setGuiPhieu] = useState(false);
  const [openPhieuIn, setOpenPhieuIn] = useState(false);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const [messageConfirm, setMessageConfirm] = useState("");
  const contextRef = useRef<HTMLDivElement | null>(null);
  const [contextMenu, setContextMenu] = useState<null | {
    x: number;
    y: number;
  }>(null);

  const handleContextMenu = (e: any, row: any, code?: string) => {
    e.preventDefault();
    setSelectRow(row);
    setContextClientX(e.clientX);
    setIdTable(code as string)

    const heightDropList = document.getElementById("drop-list")?.clientHeight || 0;
    const isOnRight = window.innerWidth - e.clientX < 200;
    const newX = isOnRight ? e.clientX - 200 : e.clientX;
    const isBottom = window.innerHeight - e.clientY < 200;
    const newY = isBottom ? e.clientY - heightDropList : e.clientY;

    setContextMenu({ x: newX, y: newY });
  };

  const handleClickOptionContextMenu = (value: any) => {
    setCodeItemContext(value?.code as string);
    setContextMenu(null);

    const options = {
      [CODE_CONTEXT_TAB_XET_NGHIEM.HUY_GUI_PHIEU]: () => {
        setOpenConfirmDialog(true)
        setMessageConfirm(MESSAGE.CONFIRM.HUY_GUI_PHIEU_MAU)
      },
      [CODE_CONTEXT_TAB_XET_NGHIEM.XOA_PHIEU]: () => {
        setOpenConfirmDialog(true)
        setMessageConfirm(MESSAGE.CONFIRM.XOA_PHIEU)
      },
    }

    options[value?.code as string]();
  };

  const handleSelectRowData = (rowData: any) => {
    setDsVatTu(rowData?.detail || []);
  };

  useEffect(() => {
    setDsVatTu([]);
  }, [benhNhanInfo]);

  useEffect(() => {
    setDsVatTu(dataVatTu[0]?.detail);
  }, []);

  const handleOpenPhieuIn = () => {
    setOpenPhieuIn(true);
  }

  const handleGuiPhieu = () => {
    setGuiPhieu(true);
    toast.success(MESSAGE.SUCCESS.GUI_PHIEU)
  }

  const handleOnYesClick = (code: string) => {
    const options = {
      [CODE_CONTEXT_TAB_XET_NGHIEM.XOA_PHIEU]: () => {
        toast.success(MESSAGE.SUCCESS.XOA_PHIEU);
      },
      [CODE_CONTEXT_TAB_XET_NGHIEM.HUY_GUI_PHIEU]: () => {
        toast.success(MESSAGE.SUCCESS.HUY_GUI_PHIEU)
      }
    }
    options[code]();
    setOpenConfirmDialog(false);
    setGuiPhieu(false);
  }

  return (
    <Row className={`spaces h-calc-vh-${PATH_NAME.KHAM_BENH === pathname ? "85" : "123"}`}>
      <div>
        <div className="">
          <div className="px-2 py-1 bg-white mb-4">
            <Row className="spaces h-25">
              <Col xs={4} className="d-flex align-items-center">
                <LabelRequired label="Loại phiếu:" className="min-w-100px mb-2" />
                <CustomTextarea readOnly />
              </Col>
              <Col xs={4} className="d-flex align-items-center text-lable-input">
                <LabelRequired label="Ngày y lệnh:" className="min-w-80px mb-2" />
                <CustomTextarea readOnly />
              </Col>
              <Col xs={4} className="d-flex align-items-center text-lable-input">
                <LabelRequired label="Ngày chỉ định:" className="min-w-95px mb-2" />
                <CustomTextarea readOnly />
              </Col>
            </Row>

            <Row className="spaces h-25">
              <Col xs={4} className="d-flex align-items-center text-lable-input">
                <LabelRequired label="Mã phiếu:" className="min-w-100px mb-2" />
                <CustomTextarea readOnly />
              </Col>
              <Col xs={8} className="d-flex align-items-center text-lable-input">
                <LabelRequired label="Nơi chỉ định:" className="min-w-80px mb-2" />
                <CustomTextarea readOnly />
              </Col>
            </Row>

            <Row className="spaces h-25">
              <Col xs={4} className="d-flex align-items-center text-lable-input">
                <LabelRequired label="Người chỉ định:" className="min-w-100px mb-2" />
                <CustomTextarea readOnly />
              </Col>
              <Col xs={8} className="d-flex align-items-center text-lable-input">
                <LabelRequired label="Trạng thái:" className="min-w-80px mb-2" />
                <CustomTextarea readOnly />
              </Col>
            </Row>

            <Row className="spaces h-25">
              <Col xs={4} className="d-flex align-items-center text-lable-input">
                <LabelRequired label="Kho:" className="min-w-100px mb-2" />
                <CustomTextarea readOnly />
              </Col>
              <Col xs={8} className="d-flex align-items-center text-lable-input">
                <LabelRequired label="Chuẩn đoán:" className="min-w-80px mb-2" />
                <CustomTextarea readOnly />
              </Col>
            </Row>
          </div>

          <div className="bg-white pt-2 mb-2">
            {danhSachPhieu && <DanhSachPhieu
              className="mb-2"
              handleSelectRowData={handleSelectRowData}
              dsPhieu={benhNhanInfo?.vatTu as []}
              handleContextMenu={(e, row) => handleContextMenu(e, row, CODE_CONTEXT_TAB_XET_NGHIEM.DS_PHIEU)}
            />}

            <TableCustom
              className={`spaces border-bottom h-calc-vh-${!danhSachPhieu ? "326" : "358"}`}
              columns={vatTuColumn}
              data={dsVatTu}
              handleContextMenu={(e, row) => handleContextMenu(e, row, CODE_CONTEXT_TAB_XET_NGHIEM.DS_DICH_VU)}
            />
          </div>

          <div className="d-flex gap-3 justify-content-center py-2 bg-white">
            {guiPhieu ?
              <div className="d-flex gap-3 justify-content-center">
                <Button className="btn-fill mr-5" onClick={handleOpenPhieuIn}>In phiếu</Button>
                <Button className="btn-fill mr-5" onClick={() => handleClickOptionContextMenu({ code: CODE_CONTEXT_TAB_XET_NGHIEM.HUY_GUI_PHIEU })}>
                  Hủy phiếu
                </Button>
              </div>
              : <div className="d-flex gap-3 justify-content-center">
                <Button className="btn-fill">Sửa phiếu</Button>
                <Button className="btn-fill" onClick={handleGuiPhieu}>Gửi phiếu</Button>
                <Button className="btn-fill" onClick={() => handleClickOptionContextMenu({ code: CODE_CONTEXT_TAB_XET_NGHIEM.XOA_PHIEU })}>Xóa phiếu</Button>
              </div>}
          </div>

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

          <ModalOneColumn
            show={(CODE_CONTEXT_TAB_XET_NGHIEM.CHUYEN_NGAY_Y_LENH === codeItemContext) || (CODE_CONTEXT_TAB_XET_NGHIEM.CHUYEN_PHIEU_DIEU_TRI === codeItemContext)}
            handleCloseDialog={() => setCodeItemContext("")}
            title={CODE_CONTEXT_TAB_XET_NGHIEM.CHUYEN_NGAY_Y_LENH === codeItemContext ? "Cập nhật ngày y lệnh" : "Cập nhật phiếu điều trị"}
            label={CODE_CONTEXT_TAB_XET_NGHIEM.CHUYEN_NGAY_Y_LENH === codeItemContext ? "Ngày y lệnh" : "Phiếu điều trị"}
            type="datetime-local"
            name={CODE_CONTEXT_TAB_XET_NGHIEM.CHUYEN_NGAY_Y_LENH}
          />

          <ModalChonNhanVien
            show={CODE_CONTEXT_TAB_XET_NGHIEM.CHUYEN_NGUOI_CHI_DINH === codeItemContext}
            handleCloseDialog={() => setCodeItemContext("")}
            setListNhanVien={setListNhanVien}
          />

          <ModalPhieuIn
            show={openPhieuIn}
            title="Đơn vật tư"
            handleCloseDialog={() => setOpenPhieuIn(false)}
            stylePrint={stylePrintA5}
            contentClassName="spaces W-560 m-auto"
            fullscreen
          >
            <PhieuVatTu />
          </ModalPhieuIn>

          <ConfirmDialog
            show={openConfirmDialog}
            title="Thông báo"
            message={messageConfirm}
            yes="Xác nhận"
            close="Đóng"
            onCloseClick={() => setOpenConfirmDialog(false)}
            onYesClick={() => handleOnYesClick(codeItemContext)}
          />
        </div>
      </div>
    </Row>
  )
}

export default TabVatTu