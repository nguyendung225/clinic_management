import { Form } from "formik";
import { useEffect, useRef, useState } from "react";
import { Button, Col, FormCheck, Row } from "react-bootstrap";
import { KTSVG } from "../../../../../_metronic/helpers";
import AutocompleteV2 from "../../../component/AutocompleteObjectV2";
import ContextMenu from "../../../component/ContextMenuV2";
import ModalPhieuIn from "../../../component/ModalPhieuIn";
import { stylePrint, stylePrintA3 } from "../../../component/phieu-in/constant";
import { LIST_DOI_TUONG_TIEP_NHAN } from "../../constants/PhanHeTiepNhan";
import { CODE_HINH_THUC } from "../../constants/TabThanhToanConstant";
import {
  CODE_LIST_BAO_CAO,
  LIST_BAO_CAO,
  ThanhToanMenu, contextMenuDsPhieu
} from "../../constants/constants";
import { IItemMenu, IPhieu } from "../../models/ThanhToanModel";
import Menu from './../../../component/menu/Menu';
import DSPhieuTable from "./DSPhieuTable";
import { PhieuThanhToanV2 } from "./PhieuThanhToan";
import TableChiTietDichVu from "./TableChiTietDichVu";
import { TableDanhSachBenhNhan } from "./TableDanhSachBenhNhan";
import { BangKeChiPhiKhamBenhChuaBenh } from "./modal-phieu-in/PhieuBangKeKhamBenhChuaBenh";
import { ModalChonSoThu } from "./modal-so-thu/ModalChonSoThu";
import { ModalDanhSachSoThu } from "./modal-so-thu/ModalDanhSachSoThu";
import { ModalTaoSoThu } from "./modal-so-thu/ModalTaoSoThu";
import ModalTuyChonBaoCao from "./modal-tuy-chon-bao-cao/ModalTuyChonBaoCao";
import PhieuThanhToanVienPhiNgoaiTru from "./modal-phieu-in/PhieuThanhToanVienPhiNgoaiTru";
import ModalTCBCCongKhaiChiPhi from "./modal-tuy-chon-bao-cao/ModalTCBCCongKhaiChiPhi";

const NgoaiTru = () => {
  const [shouldOpenSoThu, setShouldOpenSoThu] = useState<{
    openChonSoThu: boolean;
    openDanhSachSoThu: boolean;
    openTaoMoiSoThu: boolean;
  }>({
    openChonSoThu: false,
    openDanhSachSoThu: false,
    openTaoMoiSoThu: false,
  });
  const [openDanhSachSoThu, setOpenDanhSachSoThu] = useState<boolean>(false);
  const [selectedRow, setSelectedRow] = useState<any>([]);
  const [openDialogTuyChonBaoCao, setOpenDialogTuyChonBaoCao] = useState(false);
  const [dsPhieu, setDsPhieu] = useState<IPhieu[]>([]);
  const [hinhThuc, setHinhThuc] = useState<string>("");
  const [isTaoHoaDonDienTu, setIsTaoHoaDonDienTu] = useState(false);
  const [isTaoPhieu, setIsTaoPhieu] = useState(false);
  const contextRef = useRef<HTMLDivElement | null>(null);
  const [contextMenu, setContextMenu] = useState<null | {
    x: number;
    y: number;
  }>(null);
  const [contextClientX, setContextClientX] = useState<number>(0);
  const [openPhieuKhamChuaBenh, setOpenPhieuKhamChuaBenh] = useState(false);
  const [openPhieuThanhToanVPNgoaiTru, setOpenPhieuThanhToanVPNgoaiTru] = useState(false);
  const [openTCBCCongKhaiChiPhi, setOpenTCBCCongKhaiChiPhi] = useState(false);
  const [loaiPhieu, setLoaiPhieu] = useState<string>("");

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

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

  const handleClickOutside = (e: any) => {
    if (contextRef.current && !contextRef.current.contains(e.target as Node)) {
      setContextMenu(null);
    }
  };

  const handleClickOptionContextMenu = (option: any) => {
    if (option?.code === CODE_HINH_THUC.CHUYEN_KHOAN || option?.code === CODE_HINH_THUC.TIEN_MAT) {
      setHinhThuc(option);
      setContextMenu(null);
    } else {
      setIsTaoHoaDonDienTu(true);
    }
  };

  const handleAddPhieu = (phieu: IPhieu) => {
    setDsPhieu([...dsPhieu, phieu])
  }

  const handleSelectOption = (option: IItemMenu) => {
    setLoaiPhieu(option?.code);

    const actions = {
      [CODE_LIST_BAO_CAO.CHON_SO_THU_TIEN]: () => setShouldOpenSoThu({ ...shouldOpenSoThu, openChonSoThu: true }),
      [CODE_LIST_BAO_CAO.XUAT_XXML]: () => setOpenDialogTuyChonBaoCao(true),
      [CODE_LIST_BAO_CAO.PHIEU.KHAM_CHUA_BENH_6556]: () => setOpenPhieuKhamChuaBenh(true),
      [CODE_LIST_BAO_CAO.PHIEU.KHAM_CHUA_BENH_6556_BHYT]: () => setOpenPhieuKhamChuaBenh(true),
      [CODE_LIST_BAO_CAO.PHIEU.KHAM_CHUA_BENH_6556_VIEN_PHI]: () => setOpenPhieuKhamChuaBenh(true),
      [CODE_LIST_BAO_CAO.PHIEU.KHAM_CHUA_BENH_6556_VP_CHUA_THU_TIEN]: () => setOpenPhieuKhamChuaBenh(true),
      [CODE_LIST_BAO_CAO.PHIEU.VIEN_PHI_NGOAI_TRU]: () => setOpenPhieuThanhToanVPNgoaiTru(true),
      [CODE_LIST_BAO_CAO.PHIEU.CONG_KHAI_CHI_PHI]: () => setOpenTCBCCongKhaiChiPhi(true),
      [CODE_LIST_BAO_CAO.BAO_CAO.HOAT_DONG_TAI_CHINH]: () => setOpenDialogTuyChonBaoCao(true),
      [CODE_LIST_BAO_CAO.BAO_CAO.DOANH_THU_THEO_PHIEU_THU]: () => setOpenDialogTuyChonBaoCao(true),
      [CODE_LIST_BAO_CAO.BAO_CAO.DOANH_THU_THEO_DICH_VU_CHI_TIET]: () => setOpenDialogTuyChonBaoCao(true),
      [CODE_LIST_BAO_CAO.BAO_CAO.THU_TIEN_DICH_VU]: () => setOpenDialogTuyChonBaoCao(true),
      [CODE_LIST_BAO_CAO.BAO_CAO.DOANH_THU_THEO_DICH_VU_KY_THUAT]: () => setOpenDialogTuyChonBaoCao(true),
      [CODE_LIST_BAO_CAO.BAO_CAO.SU_DUNG_HOA_DON_DIEN_TU]: () => setOpenDialogTuyChonBaoCao(true),
      [CODE_LIST_BAO_CAO.BAO_CAO.DS_MIEN_GIAM]: () => setOpenDialogTuyChonBaoCao(true),
      [CODE_LIST_BAO_CAO.BAO_CAO.DS_PHIEU_THU_TIEN]: () => setOpenDialogTuyChonBaoCao(true),
      [CODE_LIST_BAO_CAO.BAO_CAO.DS_PHIEU_TAM_UNG]: () => setOpenDialogTuyChonBaoCao(true),
      [CODE_LIST_BAO_CAO.BAO_CAO.NOP_TIEN_VE_QUY]: () => setOpenDialogTuyChonBaoCao(true),
      [CODE_LIST_BAO_CAO.BAO_CAO.DS_PHIEU_HOAN_UNG]: () => setOpenDialogTuyChonBaoCao(true),
      [CODE_LIST_BAO_CAO.BAO_CAO.DS_PHIEU_HUY]: () => setOpenDialogTuyChonBaoCao(true),
      [CODE_LIST_BAO_CAO.BAO_CAO.DS_PHOI_THANH_TOAN]: () => setOpenDialogTuyChonBaoCao(true),
      [CODE_LIST_BAO_CAO.BAO_CAO.LO_LAI_THU_THUAT]: () => setOpenDialogTuyChonBaoCao(true),
      [CODE_LIST_BAO_CAO.BAO_CAO.LO_LAI_PHAU_THUAT]: () => setOpenDialogTuyChonBaoCao(true),
      [CODE_LIST_BAO_CAO.BAO_CAO.PHU_CAP_THU_THUAT]: () => setOpenDialogTuyChonBaoCao(true),
      [CODE_LIST_BAO_CAO.BAO_CAO.PHU_CAP_PHAU_THUAT]: () => setOpenDialogTuyChonBaoCao(true),
      [CODE_LIST_BAO_CAO.BAO_CAO.DOANH_THU_TONG_HOP]: () => setOpenDialogTuyChonBaoCao(true),
      [CODE_LIST_BAO_CAO.BAO_CAO.THU_TIEN_DICH_VU_VIEN_PHI]: () => setOpenDialogTuyChonBaoCao(true),
    };

    actions[option?.code]();
  }

  return (
    <>
      <div className="phanHeTiepDon">
        <Row>
          <Col xs={8} className="d-flex align-items-center mt-1">
            <div className="thanh-toan-loc">
              <div className="position-relative px-2">
                <Menu
                  handleSelectOption={handleSelectOption}
                  listMenuItem={ThanhToanMenu}
                  menuLabel={<KTSVG path="/media/icons/duotune/layouts/lay002.svg" svgClassName="spaces h-100 w-100" />} />
              </div>
            </div>

            <div className="me-2 p-1">
              <Menu
                handleSelectOption={handleSelectOption}
                listMenuItem={LIST_BAO_CAO}
                menuLabel={<div className="d-flex align-items-center justify-content-center">
                  <div><i className="fa-solid fa-print pe-1" style={{ fontSize: "40px" }}></i></div>
                  <div className="fs-5">In</div>
                </div>}
              />
            </div>

            <div className="min-w-175px">
              <div className="mb-1">
                <AutocompleteV2
                  className="autocomplete-custom-tiep-nhan h-26 pe-2 w-100"
                  options={[]}
                  name="hinhThuc"
                />
              </div>
              <div>
                <AutocompleteV2
                  className="autocomplete-custom-tiep-nhan h-26 pe-2 w-100"
                  options={[]}
                  name="hinhThuc"
                />
              </div>
            </div>

            <div className="min-w-100px">
              <div className="spaces d-flex">
                <FormCheck
                  type="checkbox"
                  label="BHYT"
                  className="d-flex align-items-center gap-2"
                />
              </div>
              <div className="spaces d-flex">
                <FormCheck
                  type="checkbox"
                  label="Viện phí"
                  className="d-flex align-items-center gap-2"
                />
              </div>
              <div className="spaces d-flex">
                <FormCheck
                  type="checkbox"
                  label="Khám bệnh"
                  className="d-flex align-items-center gap-2"
                />
              </div>
            </div>

            <div className="min-w-100px">
              <div className="spaces d-flex">
                <FormCheck
                  type="checkbox"
                  label="Ngoại trú"
                  className="d-flex align-items-center gap-2"
                />
              </div>
              <div className="spaces d-flex min-w-80px">
                <FormCheck
                  type="checkbox"
                  label="Nội trú"
                  className="d-flex align-items-center gap-2"
                />
              </div>
            </div>

            <div>
              <Button className="btn-fill mb-1 h-26 w-100">Kiểm tra thẻ BH</Button>
              <div className="d-flex">
                <Button className="btn-fill me-2 h-26">Thanh toán</Button>
                <Button className="btn-fill h-26">Tìm kiếm</Button>
              </div>
            </div>
          </Col>


          <Col xs={4}>
            {selectedRow?.length !== 0 ? (
              <div className="d-flex justify-content-end h-100">
                <div className="text-break fw-500 text-end me-2">
                  <span className="text-uppercase fw-600 fs-7">{selectedRow[0]?.hoTen}</span>{" "}
                  <span className="fs-7">
                    | Tuổi: {selectedRow[0]?.age} | {selectedRow[0]?.gioiTinh} |{" "}
                    {selectedRow[0]?.loaiDoiTuong}
                  </span>
                  <br />
                  <span className="fs-7">
                    VP: 240 {selectedRow[0]?.mpt}
                    {selectedRow[0]?.soDinhDanh && `CCCD: ${selectedRow[0]?.soDinhDanh}`}
                  </span>{" "}
                  <br />
                  <div className="text-truncate fs-7">Địa chỉ: {selectedRow[0]?.diaChi}</div>
                </div>

                <div className="border-start spaces width-17 d-flex align-items-center justify-content-center fw-bold text-danger">
                  {LIST_DOI_TUONG_TIEP_NHAN.find(item => item?.code === selectedRow?.[0]?.loaiDoiTuong)?.name}
                </div>
              </div>
            ) : (
              <div className="text-break"></div>
            )}
          </Col>
        </Row>

        <Row className="h-100">
          <Col xs="3" className="pe-0 border-end">
            <div>
              <TableDanhSachBenhNhan selectedRow={selectedRow} setSelectedRow={setSelectedRow} />
            </div>
          </Col>

          <Col xs="8" className="px-0">
            <Form id="form-thanh-toan" className="d-flex justify-content-between flex-column spaces h-form-thanh-toan">
              <div className="h-thanh-toan-dich-vu tab-dich-vu">
                <TableChiTietDichVu selectedRow={selectedRow} isTaoPhieu={isTaoPhieu} />
              </div>
              <div>
                <PhieuThanhToanV2
                  selectedRow={selectedRow}
                  handleAddPhieu={handleAddPhieu}
                  hinhThuc={hinhThuc}
                  isTaoHoaDonDienTu={isTaoHoaDonDienTu}
                  isTaoPhieu={isTaoPhieu}
                  setIsTaoPhieu={setIsTaoPhieu}
                />
              </div>
            </Form>
          </Col>

          <Col xs={1} className="ps-0 border-start border-top">
            <DSPhieuTable dsPhieu={dsPhieu} handleContextMenu={handleContextMenu} />
            <div ref={contextRef}>
              {contextMenu && (
                <ContextMenu contextClientX={contextClientX} data={contextMenuDsPhieu} x={contextMenu.x} y={contextMenu.y} handleClickOptionContextMenu={handleClickOptionContextMenu} />
              )}
            </div>
          </Col>
        </Row>

        {shouldOpenSoThu && (
          <ModalChonSoThu show={shouldOpenSoThu} onHide={setShouldOpenSoThu} />
        )}

        {shouldOpenSoThu.openTaoMoiSoThu && (
          <ModalTaoSoThu
            show={shouldOpenSoThu.openTaoMoiSoThu}
            onHide={setShouldOpenSoThu}
            openDanhSachSoThu={openDanhSachSoThu}
            setOpenDanhSachSoThu={setOpenDanhSachSoThu}
          />
        )}

        {shouldOpenSoThu.openDanhSachSoThu && (
          <ModalDanhSachSoThu
            show={shouldOpenSoThu.openDanhSachSoThu}
            onHide={setShouldOpenSoThu}
            setOpenDanhSachSoThu={setOpenDanhSachSoThu}
          />
        )}
      </div>

      <ModalTuyChonBaoCao show={openDialogTuyChonBaoCao} handleCloseDialog={() => setOpenDialogTuyChonBaoCao(false)} loaiPhieu={loaiPhieu}/>

      <ModalPhieuIn
        show={openPhieuKhamChuaBenh}
        handleCloseDialog={() => setOpenPhieuKhamChuaBenh(false)}
        title="Bảng kê chi phí khám bệnh, chữa bệnh"
        size="xl"
        stylePrint={stylePrintA3}
      >
        <BangKeChiPhiKhamBenhChuaBenh />
      </ModalPhieuIn>

      <ModalPhieuIn
        show={openPhieuThanhToanVPNgoaiTru}
        handleCloseDialog={() => setOpenPhieuThanhToanVPNgoaiTru(false)}
        title="Phiếu thanh toán viện phí ngoại trú"
        size="lg"
        stylePrint={stylePrint}
      >
        <PhieuThanhToanVienPhiNgoaiTru />
      </ModalPhieuIn>

      <ModalTCBCCongKhaiChiPhi show={openTCBCCongKhaiChiPhi} handleCloseDialog={() => setOpenTCBCCongKhaiChiPhi(false)}/>
    </>
  );
};

export { NgoaiTru };

