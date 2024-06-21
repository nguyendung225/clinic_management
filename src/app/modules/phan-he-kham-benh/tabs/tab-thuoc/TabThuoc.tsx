import { useContext, useEffect, useRef, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { ConfirmDialog } from "../../../component/ConfirmDialog";
import ContextMenu from "../../../component/ContextMenuV2";
import DanhSachPhieu from "../../../component/DanhSachPhieu";
import LabelRequired from "../../../component/LabelRequired";
import ModalOneColumn from "../../../component/ModalOneColumn";
import ModalPhieuIn from "../../../component/ModalPhieuIn";
import CustomTextarea from "../../../component/custom-textarea/CustomTextarea";
import { stylePrintA5 } from "../../../component/phieu-in/constant";
import { TableCollapse } from "../../../component/table/table-collapse/TableCollapse";
import ModalChonNhanVien from "../../../phan-he-tiep-nhan-thanh-toan/components/tab-thanh-toan/modal-so-thu/ModalChonNhanVien";
import { IDsNhanVien } from "../../../phan-he-tiep-nhan-thanh-toan/models/SoThuModel";
import { MESSAGE, PATH_NAME } from "../../../utils/Constant";
import "../../PhanHeKhamBenh.scss";
import { columnsDSThuocCollaspe } from "../../columns/tab-thuoc/ColumnTabThuoc";
import ModalDungMoiHoanNguyen from "../../components/modal-tab-thuoc/ModalDungMoiHoanNguyen";
import ModalHDSDorPhaCheThuoc from "../../components/modal-tab-thuoc/ModalHDSDorPhaCheThuoc";
import PhieuDonThuoc from "../../components/phieu-in/PhieuDonThuoc";
import { CODE_CONTEXT_TAB_XET_NGHIEM } from "../../constants/ContextConstants";
import { CODE_ITEM_MENU_THUOC, contextMenuTabThuocKhac, contextPhieuTabThuoc } from "../../constants/KhamBenh";
import { PhanHeTiepDonContext } from "../../contexts/PhanHeTiepDonContext";
import ModalChanDoanBenh from "../../modals/modal-chan-doan-benh/ModalChanDoanBenh";
import ModalKeDonThuoc from "../../modals/modal-tab-thuoc/ModalKeDonThuoc";
import { dataThuoc } from "../../components/FakeData";

export type KhamBenh = {
  thongTinKhamBenh?: any;
  setThongTinKhamBenh: ((data: any) => void) | undefined;
};

interface IProps {
  danhSachPhieu?: boolean;
}

export const TabThuoc = ({ danhSachPhieu = true }: IProps) => {
  const { pathname } = useLocation();
  const { benhNhanInfo } = useContext(PhanHeTiepDonContext);
  const [dsThuocDetail, setDsThuocDetail] = useState<any[]>([]);
  const [selectRow, setSelectRow] = useState<any>({});
  const [contextClientX, setContextClientX] = useState<number>(0);
  const [openKeDonThuocDialog, setOpenKeDonThuocDialog] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<any>({});
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const [messageConfirm, setMessageConfirm] = useState("");
  const [tiemTruyen, setTiemTruyen] = useState<any>();
  const [openPhieuIn, setOpenPhieuIn] = useState(false);
  const [idTable, setIdTable] = useState("");
  const [codeItemContext, setCodeItemContext] = useState("");
  const [listNhanVien, setListNhanVien] = useState<IDsNhanVien[]>([]);
  const [guiDon, setGuiDon] = useState(true);
  const checkListContext = idTable === CODE_CONTEXT_TAB_XET_NGHIEM.DS_PHIEU ? contextPhieuTabThuoc : contextMenuTabThuocKhac
  const contextRef = useRef<HTMLDivElement | null>(null);
  const [contextMenu, setContextMenu] = useState<null | {
    x: number;
    y: number;
  }>(null);

  const handleSelectRowData = (rowData: any) => {
    setDsThuocDetail(rowData?.detail);
  };

  useEffect(() => {
    setDsThuocDetail([]);
  }, [benhNhanInfo]);

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

  useEffect(() => {
    setDsThuocDetail([
      ...dsThuocDetail?.map((item) => {
        if (item?.maThuoc === selectRow?.maThuoc) item.tiemTruyen = tiemTruyen;
        return item;
      }),
    ]);
  }, [tiemTruyen])

  const handleClickOptionContextMenu = (value: any) => {
    setCodeItemContext(value?.code as string)
    setContextMenu(null);
    const openConfirmDialog = (message: string) => {
      setOpenConfirmDialog(true);
      setMessageConfirm(message)
    }
    const menuActions = {
      [CODE_ITEM_MENU_THUOC.SUA_CHAN_DOAN_BENH]: () => setOpenModal({ suaChanDoan: true }),
      [CODE_ITEM_MENU_THUOC.SUA_HUONG_DAN_SU_DUNG]: () => setOpenModal({ huongDanSuDung: true }),
      [CODE_ITEM_MENU_THUOC.DUNG_MOI]: () => setOpenModal({ dungMoi: true }),
      [CODE_ITEM_MENU_THUOC.IN_NHAN_PHA_CHE]: () => toast.warning("Không tìm được phiếu truyền dịch !"),
      [CODE_ITEM_MENU_THUOC.CHUYEN_PHIEU_SANG_LAM_TRON]: () => setOpenModal({ chuyenPhieu: true }),
      [CODE_ITEM_MENU_THUOC.NHOM_THUOC_PHA_CHE]: () => setOpenModal({ nhomThuocPhaChe: true }),
      [CODE_ITEM_MENU_THUOC.PHA_TIEM]: () => setTiemTruyen("Pha tiêm"),
      [CODE_ITEM_MENU_THUOC.TRUYEN_DICH]: () => setTiemTruyen("Truyền dịch"),
      [CODE_CONTEXT_TAB_XET_NGHIEM.HUY_GUI_PHIEU]: () => openConfirmDialog(MESSAGE.CONFIRM.HUY_GUI_DON_THUOC),
      [CODE_CONTEXT_TAB_XET_NGHIEM.XOA_PHIEU]: () => openConfirmDialog(MESSAGE.CONFIRM.XOA_DON_THUOC),
      [CODE_CONTEXT_TAB_XET_NGHIEM.GUI_PHIEU]: () => {
        setGuiDon(false);
        toast.success(MESSAGE.SUCCESS.GUI_DON_THUOC)
      },
    };
    menuActions[value?.code]();

  };
  const handleChangeorNhomThuocPhaChe = (values: { huongDanSuDungThuoc?: string; thongTinThuocPhaChe?: string }) => {
    if (openModal.huongDanSuDung === true) {
      setDsThuocDetail(
        dsThuocDetail?.map((item) => {
          if (item?.maThuoc === selectRow?.maThuoc) item.huongDanSuDungThuoc = values?.huongDanSuDungThuoc;
          return item;
        })
      );
    } else {
      if (dsThuocDetail?.some((item) => item?.tenNhom)) {
        setDsThuocDetail(
          dsThuocDetail?.map((item) => {
            item.tenNhom = values?.thongTinThuocPhaChe;
            return item;
          })
        );
      } else {
        setDsThuocDetail(
          dsThuocDetail?.map((item) => {
            item = {
              tenNhom: values?.thongTinThuocPhaChe,
              items: [{ ...item }],
            };
            return item;
          })
        );
      }
    }
  };

  const handleOnYesClick = (code: string) => {
    setOpenConfirmDialog(false);
    const options = {
      [CODE_CONTEXT_TAB_XET_NGHIEM.HUY_GUI_PHIEU]: () => {
        toast.success(MESSAGE.SUCCESS.HUY_DON_THUOC);
        setGuiDon(true);
      },
      [CODE_CONTEXT_TAB_XET_NGHIEM.XOA_PHIEU]: () => {
        toast.success(MESSAGE.SUCCESS.XOA_PHIEU);
      }
    }

    setOpenConfirmDialog(false);
    options[code]();
  }
  const handleCloseModal = () => setOpenModal({});

  useEffect(() => {
    setDsThuocDetail(dataThuoc[0]?.detail);
  }, [])
  return (
    <Row>
      <div>
        <div className="px-2 py-1 bg-white mb-4">
          <Row className="spaces h-25">
            <Col xs={4} className="d-flex align-items-center">
              <LabelRequired label="Loại phiếu:" className="min-w-100px mb-2" />
              <CustomTextarea readOnly />
            </Col>
            <Col xs={4} className="d-flex align-items-center">
              <LabelRequired label="Ngày y lệnh:" className="min-w-95px mb-2" />
              <CustomTextarea readOnly />
            </Col>
            <Col xs={4} className="d-flex align-items-center">
              <LabelRequired label="Ngày chỉ định:" className="min-w-95px mb-2" />
              <CustomTextarea readOnly />
            </Col>
          </Row>

          <Row className="spaces h-25">
            <Col xs={4} className="d-flex align-items-center">
              <LabelRequired label="Mã phiếu:" className="min-w-100px mb-2" />
              <CustomTextarea readOnly />
            </Col>
            <Col xs={8} className="d-flex align-items-center">
              <LabelRequired label="Nơi chỉ định:" className="min-w-95px mb-2" />
              <CustomTextarea readOnly />
            </Col>
          </Row>

          <Row className="spaces h-25">
            <Col xs={4} className="d-flex align-items-center">
              <LabelRequired label="Người chỉ định:" className="min-w-100px mb-2" />
              <CustomTextarea readOnly />
            </Col>
            <Col xs={8} className="d-flex align-items-center">
              <LabelRequired label="Trạng thái:" className="min-w-95px mb-2" />
              <CustomTextarea readOnly />
            </Col>
          </Row>

          <Row className="spaces h-25">
            <Col xs={4} className="d-flex align-items-center">
              <LabelRequired label="Kho:" className="min-w-100px mb-2" />
              <CustomTextarea readOnly />
            </Col>
            <Col xs={8} className="d-flex align-items-center">
              <LabelRequired label="Chẩn đoán:" className="min-w-95px mb-2" />
              <CustomTextarea readOnly />
            </Col>
          </Row>
        </div>

        <div className="bg-white pt-2 mb-2">
          {danhSachPhieu && <DanhSachPhieu
            className="mb-2"
            handleSelectRowData={handleSelectRowData}
            dsPhieu={benhNhanInfo?.thuoc as []}
            handleContextMenu={(e, row) => handleContextMenu(e, row, CODE_CONTEXT_TAB_XET_NGHIEM.DS_PHIEU)}
          />}

          <TableCollapse
            className={`spaces h-calc-vh-${PATH_NAME.KHAM_BENH === pathname ? "319" : !danhSachPhieu ? "326" : "357"}`}
            data={dsThuocDetail}
            collapseHeader="tenNhom"
            collapseBody="items"
            columns={columnsDSThuocCollaspe(tiemTruyen) as any}
            handleContextMenu={(e, row) => handleContextMenu(e, row, CODE_CONTEXT_TAB_XET_NGHIEM.DS_DICH_VU)}
          />
        </div>
        <div className="d-flex gap-3 justify-content-center py-2 bg-white">
          {guiDon ?
            <>
              <Button className="btn-fill mr-5">Sửa đơn thuốc</Button>
              <Button className="btn-fill mr-5" onClick={() => handleClickOptionContextMenu({ code: CODE_CONTEXT_TAB_XET_NGHIEM.GUI_PHIEU })}>
                Gửi đơn thuốc
              </Button>
              <Button className="btn-fill mr-5" onClick={() => handleClickOptionContextMenu({ code: CODE_CONTEXT_TAB_XET_NGHIEM.XOA_PHIEU })}>Xóa đơn thuốc</Button>
            </>
            :
            <>
              <Button className="btn-fill mr-5">Phiếu truyền HC</Button>
              <Button className="btn-fill mr-5" onClick={() => setOpenPhieuIn(true)}>
                Đơn thuốc
              </Button>
              <Button className="btn-fill mr-5" onClick={() => handleClickOptionContextMenu({ code: CODE_CONTEXT_TAB_XET_NGHIEM.HUY_GUI_PHIEU })}>Hủy gửi đơn thuốc</Button>
            </>
          }
        </div>
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
      {openKeDonThuocDialog && (
        <ModalKeDonThuoc open={openKeDonThuocDialog} handleClose={() => setOpenKeDonThuocDialog(false)} />
      )}
      {(openModal.huongDanSuDung || openModal.nhomThuocPhaChe) && (
        <ModalHDSDorPhaCheThuoc
          type={
            openModal.huongDanSuDung === true
              ? CODE_ITEM_MENU_THUOC.SUA_HUONG_DAN_SU_DUNG
              : CODE_ITEM_MENU_THUOC.NHOM_THUOC_PHA_CHE
          }
          handleChangeorNhomThuocPhaChe={handleChangeorNhomThuocPhaChe}
          handleClose={handleCloseModal}
        />
      )}
      {openModal.dungMoi && <ModalDungMoiHoanNguyen handleClose={handleCloseModal} />}
      {openModal.suaChanDoan && <ModalChanDoanBenh handleClose={handleCloseModal} />}
      <ConfirmDialog
        show={openConfirmDialog}
        title="Thông báo"
        message={messageConfirm}
        close="Đóng"
        yes="Đồng ý"
        onYesClick={() => handleOnYesClick(codeItemContext)}
        onCloseClick={() => setOpenConfirmDialog(false)}
      />

      <ModalPhieuIn
        show={openPhieuIn}
        title="Đơn thuốc"
        handleCloseDialog={() => setOpenPhieuIn(false)}
        stylePrint={stylePrintA5}
        contentClassName="spaces W-560 m-auto"
        fullscreen
      >
        <PhieuDonThuoc />
      </ModalPhieuIn>

      <ModalOneColumn
        show={(CODE_CONTEXT_TAB_XET_NGHIEM.CHUYEN_NGAY_Y_LENH === codeItemContext) || (CODE_CONTEXT_TAB_XET_NGHIEM.CHUYEN_PHIEU_DIEU_TRI === codeItemContext)}
        handleCloseDialog={() => setCodeItemContext("")}
        title={CODE_CONTEXT_TAB_XET_NGHIEM.CHUYEN_NGAY_Y_LENH === codeItemContext ? "Cập nhật ngày y lệnh" : "Cập nhật phiếu điều trị"}
        label={CODE_CONTEXT_TAB_XET_NGHIEM.CHUYEN_NGAY_Y_LENH === codeItemContext ? "Ngày y lệnh" : "Phiếu điều trị"}
        type="datetime-local"
        name={CODE_CONTEXT_TAB_XET_NGHIEM.CHUYEN_NGAY_Y_LENH}
      />

      <ModalChonNhanVien show={CODE_CONTEXT_TAB_XET_NGHIEM.CHUYEN_NGUOI_CHI_DINH === codeItemContext} handleCloseDialog={() => setCodeItemContext("")} setListNhanVien={setListNhanVien} />
    </Row>
  );
};

export default TabThuoc;
