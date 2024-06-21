import { Button, Col, Row } from "react-bootstrap";
import CustomMenu from "../../../component/menu/Menu";
import LabelRequired from "../../../component/LabelRequired";
import CustomTextarea from "../../../component/custom-textarea/CustomTextarea";
import { TableCustom } from "../../../component/table/table-custom/TableCustom";
import { PhieuColumn, PhieuVatTuColumn } from "../../columns/ColumnnChiTietPhieuThuoc";
import { mangPhieuThuoc, mangPhieuVatTu } from "../../constants/FakeData";
import InputSearch from "../../../component/InputSearch";
import { useState } from "react";
import ModalPhieuIn from "../../../component/ModalPhieuIn";
import PhieuLinhHaoPhi from "../../components/phieu-in/PhieuLinhHaoPhi";
import { stylePrint } from "../../../component/phieu-in/constant";
import ModalHaoPhiThuoc from "../../components/modal-quan-ly-thuoc/ModalHaoPhiThuoc";
import { CODE_MENU_HANH_CHINH } from "../../constants/ConstantMenu";
import { toast } from "react-toastify";
import { ConfirmDialog } from "../../../component/ConfirmDialog";
import { CONSTANTS_HANH_CHINH } from "../../constants/ConstantPhanHeHanhChinh";
import { IRenderPhieuIn, IValuePhieuIn } from "../../../phan-he-tiep-nhan-thanh-toan/models/ThanhToanModel";
import PhieuXuatVatTu from "../../components/phieu-in/PhieuXuatVatTu";

type Props = {
  handleCloseDialog: () => void;
  loaiQuanLy: string;
};

const ModalChiTietPhieu = ({ handleCloseDialog, loaiQuanLy }: Props) => {
  const [openPhieuIn, setOpenPhieuIn] = useState(false);
  const [openModalSuaPhieu, setOpenModalSuaPhieu] = useState(false);
  const [guiYeuCau, setGuiYeuCau] = useState(false);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const [renderPhieuIn, setRenderPhieuIn] = useState<IValuePhieuIn>();
  const checkLoaiQuanLy = (loaiQuanLy === CONSTANTS_HANH_CHINH.THUOC) || (loaiQuanLy === CONSTANTS_HANH_CHINH.MAU);

  const handleOpenPhieuIn = (loaiQuanLy: string) => {
    const options: IRenderPhieuIn = {
      [CONSTANTS_HANH_CHINH.THUOC]: {
        title: "phiếu lĩnh thuốc khoa phòng",
        stylePrint: stylePrint,
        size: "lg",
        component: <PhieuLinhHaoPhi />
      },
      [CONSTANTS_HANH_CHINH.VAT_TU]: {
        title: "phiếu xuất vật tư bệnh nhân",
        stylePrint: stylePrint,
        size: "lg",
        component: <PhieuXuatVatTu />
      },
    }

    setOpenPhieuIn(true);
    setRenderPhieuIn(options[loaiQuanLy]);
  };

  const handleOpenSuaPhieu = () => {
    setOpenModalSuaPhieu(true);
  };

  const handleGuiYeuCau = () => {
    setGuiYeuCau(true);
    toast.success("Đã gửi phiếu thành công");
  };

  const handleHuyYeuCau = () => {
    setGuiYeuCau(false);
    toast.success("Đã hủy gửi phiếu thành công");
  };

  const handleOpenConfirmDialog = () => {
    setOpenConfirmDialog(true);
  }

  const handleHuyPhieu = () => {
    handleCloseDialog();
  }

  return (
    <>
      <Row className="border-bottom py-1">
        <Col xs={3} className="d-flex align-items-center">
          <CustomMenu
            className="ms-1"
            handleSelectOption={() => { }}
            listMenuItem={[]}
            menuLabel={
              <Button className="btn-outline spaces h-29 d-flex justify-content-center min-w-40px">
                <i className="bi bi-list spaces scale-15 m-0 p-0"></i>
              </Button>
            }
          />
        </Col>

        <Col xs={9} className="d-flex justify-content-end align-items-center">
          <div className="text-end fw-bold text-danger text-uppercase pe-2">
            {checkLoaiQuanLy ?
              <>
                <div>Phiếu lĩnh hao phí khoa phòng</div>
                <div>Mới tạo</div>
              </>
              :
              <div className="d-flex justify-content-end h-100">
                <div className="text-break fw-500 text-end me-2">
                  <span className="text-uppercase fw-600 fs-7">Nguyễn Văn A</span>{" "}
                  <span className="fs-7">
                    | 0004441 | 2003(21 tuổi) | Nam
                  </span>
                  <div className="fs-7">
                    Yêu cầu
                  </div>{" "}
                  <div className="text-truncate fs-7">Địa chỉ: Phường Quán Thánh, Quận Ba Đình, Thành phố Hà Nội</div>
                </div>
              </div>
            }
          </div>
        </Col>
      </Row>

      <div className="p-2">
        <Row className="mb-1 spaces h-25">
          <Col xs={2} className="d-flex">
            <LabelRequired label="Khoa phòng" className="min-w-100px mb-1" />
            <CustomTextarea />
          </Col>

          <Col xs={3} className="d-flex">
            <LabelRequired
              label="Người tạo phiếu"
              className="min-w-100px mb-1"
            />
            <CustomTextarea />
          </Col>

          <Col xs={3} className="d-flex">
            <LabelRequired
              label="Ngày tạo phiếu"
              className="min-w-100px mb-1"
            />
            <CustomTextarea />
          </Col>
        </Row>

        <Row className="mb-1 spaces h-25">
          <Col xs={5} className="d-flex">
            <LabelRequired label="Mã phiếu" className="min-w-100px mb-1" />
            <CustomTextarea />
          </Col>

          <Col xs={3} className="d-flex">
            <LabelRequired label="Người duyệt" className="min-w-100px mb-1" />
            <CustomTextarea />
          </Col>
        </Row>

        <Row className="mb-1 spaces h-25">
          <Col xs={2} className="d-flex">
            <LabelRequired label="Kho xuất" className="min-w-100px mb-1" />
            <CustomTextarea />
          </Col>

          <Col xs={3} className="d-flex">
            <LabelRequired label="Ngày xuất" className="min-w-100px mb-1" />
            <CustomTextarea />
          </Col>

          <Col xs={3} className="d-flex">
            <LabelRequired label="người xuất" className="min-w-100px mb-1" />
            <CustomTextarea />
          </Col>
        </Row>
      </div>

      <div className="px-1">
        <InputSearch handleChange={() => { }} />
        <TableCustom
          className={`spaces h-calc-vh-${checkLoaiQuanLy ? "296" : "313"}`}
          columns={checkLoaiQuanLy ? PhieuColumn(loaiQuanLy) : PhieuVatTuColumn}
          data={checkLoaiQuanLy ? mangPhieuThuoc : mangPhieuVatTu}
        />
      </div>

      <div className="d-flex gap-2 justify-content-end p-2 border-top">
        {!guiYeuCau && (
          <>
            <Button className="btn-fill" onClick={() => handleOpenPhieuIn(loaiQuanLy)}>
              In phiếu
            </Button>
            <Button className="btn-fill" onClick={handleOpenSuaPhieu}>
              Sửa phiếu
            </Button>
            <Button className="btn-fill" onClick={handleGuiYeuCau}>
              Gửi yêu cầu
            </Button>
            <Button className="btn-fill" onClick={handleOpenConfirmDialog}>Hủy phiếu</Button>
          </>
        )}

        {guiYeuCau && (
          <>
            <Button className="btn-fill">In phiếu</Button>
            <Button className="btn-fill" onClick={handleHuyYeuCau}>
              Hủy yêu cầu
            </Button>
          </>
        )}
      </div>

      <ModalPhieuIn
        show={openPhieuIn}
        handleCloseDialog={() => setOpenPhieuIn(false)}
        title={renderPhieuIn?.title}
        stylePrint={renderPhieuIn?.stylePrint}
        size={renderPhieuIn?.size}
      >
        {renderPhieuIn?.component || <></>}
      </ModalPhieuIn>

      <ModalHaoPhiThuoc
        show={openModalSuaPhieu}
        handleCloseDialog={() => setOpenModalSuaPhieu(false)}
        loaiTraHaoPhiThuoc={CODE_MENU_HANH_CHINH.LINH_HAO_PHI_THUOC}
        loaiQuanLy={loaiQuanLy}
      />

      <ConfirmDialog
        show={openConfirmDialog}
        close="Không"
        yes="Có"
        title="Xác nhận"
        message="Bạn có chắc chắn muốn hủy phiếu lĩnh hao phí này không?"
        onYesClick={handleHuyPhieu}
        onCloseClick={() => setOpenConfirmDialog(false)}
      />
    </>
  );
};

export default ModalChiTietPhieu;
