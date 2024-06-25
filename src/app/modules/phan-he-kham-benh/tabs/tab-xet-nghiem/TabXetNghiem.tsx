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
import PhieuKetQuaXetNghiem from "../../../component/phieu-in/PhieuXetNghiem/PhieuKetQuaXetNghiem";
import PhieuXetNghiemViSinh from "../../../component/phieu-in/PhieuXetNghiem/PhieuXetNghiemViSinh";
import { TableCollapse } from "../../../component/table/table-collapse/TableCollapse";
import ModalChonNhanVien from "../../../phan-he-tiep-nhan-thanh-toan/components/tab-thanh-toan/modal-so-thu/ModalChonNhanVien";
import { IContextMenu } from "../../../phan-he-tiep-nhan-thanh-toan/models/ModelTabDSDangKy";
import { IDsNhanVien } from "../../../phan-he-tiep-nhan-thanh-toan/models/SoThuModel";
import { LIST_COLOR_TRANG_THAI_PHIEU, PATH_NAME } from "../../../utils/Constant";
import "../../PhanHeKhamBenh.scss";
import { columnsDSXetNghiem } from "../../columns/tab-xet-nghiem/ColumnTabXetNghiem";
import ModalChonPhong from "../../components/tab-chuyen-khoa/modals/ModalChonPhong";
import PhieuInChiDinhCanLamSang from "../../components/tab-xet-nghiem/PhieuInChiDinhCanLamSang";
import { CODE_CONTEXT_TAB_XET_NGHIEM, listContextPhieuXetNghiem, listContextXetNghiem } from "../../constants/ContextConstants";
import { PhanHeTiepDonContext } from "../../contexts/PhanHeTiepDonContext";
import ModalCapNhatNgayTraKetQua from "../../modals/modal-cap-nhat-ngay-tra-ket-qua/ModalCapNhatNgayTraKetQua";
import ModalChanDoanBenh from "../../modals/modal-chan-doan-benh/ModalChanDoanBenh";
import { dataDvXetNghiem } from "../../components/FakeData";
import PageChiDinhDichVu from "../../modals/modal-chi-dinh-dich-vu/PageChiDinhDichVu";

export type KhamBenh = {
  thongTinKhamBenh?: any;
  setThongTinKhamBenh: ((data: any) => void) | undefined;
};

interface Iprops {
  danhSachPhieu?: boolean;
}

export const TabXetNghiem = ({ danhSachPhieu = true }: Iprops) => {
  const { pathname } = useLocation();
  const { benhNhanInfo } = useContext(PhanHeTiepDonContext);
  const [dsXetNghiemDetail, setDsXetNghiemDetail] = useState<any[]>([]);
  const [dataPhieuXetNghiem, setDataPhieuXetNghiem] = useState<any>();
  const [phieuHuy, setPhieuHuy] = useState<any>(null);
  const [openPhieuIn, setOpenPhieuIn] = useState<any>(null);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const [messageConfirm, setMessageConfirm] = useState("");
  const [openModalChonPhong, setOpenModalChonPhong] = useState(false);
  const [codeItemContext, setCodeItemContext] = useState("");
  const [rowSelected, setRowSelected] = useState<any>();
  const [guiPhieu, setGuiPhieu] = useState(false);
  const [idTable, setIdTable] = useState("");
  const [listNhanVien, setListNhanVien] = useState<IDsNhanVien[]>([]);
  const checkListContext = idTable === CODE_CONTEXT_TAB_XET_NGHIEM.DS_PHIEU ? listContextPhieuXetNghiem : listContextXetNghiem;
  const [openModalSuaPhieu, setOpenModalSuaPhieu] = useState(false);
  const initialValues: any = {
    maPhieu: "",
    ngayYLenh: "",
    nguoiThucHien: "",
    noiChiDinh: "",
    trangThai: "",
    noiThucHien: "",
    chuanDoan: "",
  };
  const contextRef = useRef<HTMLDivElement | null>(null);
  const [contextMenu, setContextMenu] = useState<null | {
    x: number;
    y: number;
  }>(null);
  const [contextClientX, setContextClientX] = useState<number>(0);

  const handleContextMenu = (e: any, row: any, code?: string) => {
    setRowSelected(row);
    setIdTable(code as string);
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
    setCodeItemContext(value?.code as string);
    const options = {
      [CODE_CONTEXT_TAB_XET_NGHIEM.PHIEU_CHI_DINH]: () => setOpenPhieuIn({ phieuChiDinh: true }),
      [CODE_CONTEXT_TAB_XET_NGHIEM.CHUYEN_PHONG_THUC_HIEN]: () => setOpenModalChonPhong(true),
      [CODE_CONTEXT_TAB_XET_NGHIEM.BO_DICH_VU_KHONG_LAM]: () => {
        setOpenConfirmDialog(true);
        setMessageConfirm("Bạn có chắc chắn muốn bỏ dịch vụ này không?")
      },
      [CODE_CONTEXT_TAB_XET_NGHIEM.HUY_GUI_PHIEU]: () => {
        setOpenConfirmDialog(true)
        setMessageConfirm("Bạn có chắc chắn muốn hủy gửi phiếu xét nghiệm này không?")
      },
      [CODE_CONTEXT_TAB_XET_NGHIEM.XOA_PHIEU]: () => {
        setOpenConfirmDialog(true)
        setMessageConfirm("Bạn có chắc chắn muốn xóa phiếu này không?")
      },
      [CODE_CONTEXT_TAB_XET_NGHIEM.THAY_THE_DICH_VU_KHAC]: () => {
        toast.warning("Dịch vụ không được phép thay thế!");
      },
    }

    options[value?.code as string]();
  }

  const handleSelectRowData = (rowData: any) => {
    setDsXetNghiemDetail(rowData?.nhomDichVu);
  };

  useEffect(() => {
    setDsXetNghiemDetail([]);
  }, [benhNhanInfo]);

  useEffect(() => {
    setDsXetNghiemDetail(dataDvXetNghiem);
  }, [])

  const handleOpenPhieuIn = (code: string) => {
    switch (code) {
      case "phieuXetNghiemViSinh":
        return <PhieuXetNghiemViSinh handleClose={() => setOpenPhieuIn(null)} />;
      case "phieuChiDinh":
        return (
          <ModalPhieuIn size="lg" show={openPhieuIn?.phieuChiDinh} handleCloseDialog={() => setOpenPhieuIn(null)}>
            <PhieuInChiDinhCanLamSang />
          </ModalPhieuIn>
        );
      default:
        return (
          <ModalPhieuIn size="lg" show={openPhieuIn?.phieuKetQuaXetNghiem} handleCloseDialog={() => setOpenPhieuIn(false)}>
            <PhieuKetQuaXetNghiem name="Nước tiểu" />
          </ModalPhieuIn>
        );
    }
  };

  const handleOnYesClick = (code: string) => {
    const options = {
      [CODE_CONTEXT_TAB_XET_NGHIEM.BO_DICH_VU_KHONG_LAM]: () => {
        setPhieuHuy(rowSelected?.id);
      },
      [CODE_CONTEXT_TAB_XET_NGHIEM.HUY_GUI_PHIEU]: () => {
        setPhieuHuy(dataPhieuXetNghiem?.id);
        setGuiPhieu(false);
      },
    }

    setOpenConfirmDialog(false);
    options[code]();
  }

  const handleGuiPhieu = () => {
    setGuiPhieu(true);
    toast.success("Gửi phiếu thành công!")
  }

  const handleSuaPhieu = () => {
    setOpenModalSuaPhieu(true);
  }

  return (
    <Row className="h-100">
      <div>
        <div className="px-2 py-1 bg-white mb-4">
          <Row className="spaces h-25">
            <Col xs={4} className="d-flex align-items-center">
              <LabelRequired label="Mã phiếu:" className="min-w-65px mb-2" />
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
              <LabelRequired label="Người chỉ định:" className="min-w-100px mb-2" />
              <CustomTextarea readOnly />
            </Col>
            <Col xs={8} className="d-flex align-items-center text-lable-input">
              <LabelRequired label="Nơi chỉ định:" className="min-w-80px mb-2" />
              <CustomTextarea readOnly />
            </Col>
          </Row>

          <Row className="spaces h-25">
            <Col xs={12} className="d-flex align-items-center text-lable-input">
              <LabelRequired label="Chẩn đoán:" className="min-w-80px mb-2" />
              <CustomTextarea readOnly />
            </Col>
          </Row>
        </div>
        <div className="bg-white pt-2 mb-2">
          {danhSachPhieu && <DanhSachPhieu
            className="mb-2"
            title="title"
            handleSelectRowData={handleSelectRowData}
            dsPhieu={benhNhanInfo?.dsDichVu as []}
            listColorPhieu={LIST_COLOR_TRANG_THAI_PHIEU}
            handleContextMenu={(e, row) => handleContextMenu(e, row, CODE_CONTEXT_TAB_XET_NGHIEM.DS_PHIEU)}
          />}

          <div>
            <TableCollapse
              className={`spaces h-calc-vh-${PATH_NAME.KHAM_BENH === pathname ? "294" : !danhSachPhieu ? "300" : "333"} border-bottom`}
              data={dsXetNghiemDetail || []}
              columns={columnsDSXetNghiem}
              collapseHeader="tenNhom"
              collapseBody="dsDichVu"
              handleContextMenu={(e, row) => handleContextMenu(e, row, CODE_CONTEXT_TAB_XET_NGHIEM.DS_DICH_VU)}
              handleClickRow={(item) => setDataPhieuXetNghiem(item)}
              phieuHuy={phieuHuy}
            />
          </div>
        </div>

        <div className="d-flex justify-content-center p-2 gap-3 bg-white">
          <Button className="btn-fill">Lịch sử</Button>
          <Button className="btn-fill">Biểu đồ</Button>
          <Button className="btn-fill" onClick={() => setOpenPhieuIn({ phieuChiDinh: true })}>
            Phiếu chỉ định
          </Button>
          <Button className="btn-fill" onClick={() => setOpenPhieuIn({ phieuKetQuaXetNghiem: true })}>
            Phiếu kết quả
          </Button>
          {guiPhieu && (
            <Button className="btn-fill" onClick={() => handleClickOptionContextMenu({ code: CODE_CONTEXT_TAB_XET_NGHIEM.HUY_GUI_PHIEU })}>
              Hủy gửi phiếu
            </Button>
          )}
          {!guiPhieu && (
            <div className="d-flex gap-3 justify-content-center">
              <Button className="btn-fill" onClick={handleSuaPhieu}>Sửa phiếu</Button>
              <Button className="btn-fill" onClick={handleGuiPhieu}>Gửi phiếu</Button>
              <Button className="btn-fill" onClick={() => handleClickOptionContextMenu({ code: CODE_CONTEXT_TAB_XET_NGHIEM.XOA_PHIEU })}>Xóa phiếu</Button>
            </div>
          )}
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
      <ModalCapNhatNgayTraKetQua
        open={CODE_CONTEXT_TAB_XET_NGHIEM.SUA_NGAY_TRA_KET_QUA === codeItemContext}
        handleClose={() => setCodeItemContext("")}
      />
      {CODE_CONTEXT_TAB_XET_NGHIEM.SUA_CHAN_DOAN_BENH === codeItemContext && <ModalChanDoanBenh handleClose={() => setCodeItemContext("")} />}
      <ConfirmDialog
        show={openConfirmDialog}
        title="Thông báo"
        message={messageConfirm}
        yes="Xác nhận"
        close="Đóng"
        onCloseClick={() => setOpenConfirmDialog(false)}
        onYesClick={() => handleOnYesClick(codeItemContext)}
      />
      {openPhieuIn?.phieuKetQuaXetNghiem && handleOpenPhieuIn("phieuKetQuaXetNghiem")}
      {openPhieuIn?.phieuChiDinh && handleOpenPhieuIn("phieuChiDinh")}
      <ModalChonPhong show={openModalChonPhong} handleCloseDialog={() => setOpenModalChonPhong(false)} />
      <ModalChonNhanVien show={CODE_CONTEXT_TAB_XET_NGHIEM.CHUYEN_NGUOI_CHI_DINH === codeItemContext} handleCloseDialog={() => setCodeItemContext("")} setListNhanVien={setListNhanVien} />
      <ModalOneColumn
        show={(CODE_CONTEXT_TAB_XET_NGHIEM.CHUYEN_NGAY_Y_LENH === codeItemContext) || (CODE_CONTEXT_TAB_XET_NGHIEM.CHUYEN_PHIEU_DIEU_TRI === codeItemContext)}
        handleCloseDialog={() => setCodeItemContext("")}
        title={CODE_CONTEXT_TAB_XET_NGHIEM.CHUYEN_NGAY_Y_LENH === codeItemContext ? "Cập nhật ngày y lệnh" : "Cập nhật phiếu điều trị"}
        label={CODE_CONTEXT_TAB_XET_NGHIEM.CHUYEN_NGAY_Y_LENH === codeItemContext ? "Ngày y lệnh" : "Phiếu điều trị"}
        type="datetime-local"
        name={CODE_CONTEXT_TAB_XET_NGHIEM.CHUYEN_NGAY_Y_LENH}
      />

      {
        openModalSuaPhieu && <PageChiDinhDichVu handleClose={() => setOpenModalSuaPhieu(false)} dieuTri/>
      }
    </Row>
  );
};

export default TabXetNghiem;