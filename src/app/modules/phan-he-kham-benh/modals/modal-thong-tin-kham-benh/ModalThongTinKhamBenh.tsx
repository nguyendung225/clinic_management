import { Form, Formik } from "formik";
import { FC, ReactNode, createContext, useContext, useEffect, useRef, useState } from "react";
import { Button, Dropdown, DropdownButton, Modal } from "react-bootstrap";
import { useIntl } from "react-intl";
import * as Yup from "yup";
import { IconButtonSave, IconMedicine } from "../../../component/IconSvg";
import SelectTree from "../../../component/SelectTree";
import { DataDanhSachMauKhamBenh } from "../../components/FakeData";
import InfoPatientRight from "../../components/InfoPatientRight";
import ModalDanhSachMauKhamBenhHoiBenh from "../../components/modal-thong-tin-kham-benh/ModalDanhSachMauKhamBenhHoiBenh";
import ModalMauKhamBenhHoiBenh from "../../components/modal-thong-tin-kham-benh/ModalMauKhamBenhHoiBenh";
import ModalTuyChonBaoCao from "../../components/modal-thong-tin-kham-benh/ModalTuyChonBaoCao";
import TabThongTinKhamBenh from "../../components/modal-thong-tin-kham-benh/TabThongTinKhamBenh";
import PhieuKhamBenh from "../../components/tab-kham-benh/PhieuKhamBenh";
import BangBanGiaoNguoiBenhDiMo from "../../components/tab-phieu-khac/danh-sach-phieu/BangBanGiaoNguoiBenhDiMo";
import BienBanHoiChan from "../../components/tab-phieu-khac/danh-sach-phieu/BienBanHoiChan";
import GiayBaoTu from "../../components/tab-phieu-khac/danh-sach-phieu/GiayBaoTu";
import GiayNghiOm from "../../components/tab-phieu-khac/danh-sach-phieu/GiayNghiOm";
import KhamChuyenKhoa from "../../components/tab-phieu-khac/danh-sach-phieu/KhamChuyenKhoa";
import KhamSucKhoeLaiXe from "../../components/tab-phieu-khac/danh-sach-phieu/KhamSucKhoeLaiXe";
import PhieuCamKetSuDungDichVuYeuCau from "../../components/tab-phieu-khac/danh-sach-phieu/PhieuCamKetSuDungDichVuYeuCau";
import PhieuChuyenTuyen from "../../components/tab-phieu-khac/danh-sach-phieu/PhieuChuyenTuyen";
import PhieuNghiDuongThai from "../../components/tab-phieu-khac/danh-sach-phieu/PhieuNghiDuongThai";
import PhieuTruyenNhiem from "../../components/tab-phieu-khac/danh-sach-phieu/PhieuTruyenNhiem";
import SoDatVong from "../../components/tab-phieu-khac/danh-sach-phieu/SoDatVong";
import SoKhamThai from "../../components/tab-phieu-khac/danh-sach-phieu/SoKhamThai";
import TaiLieu from "../../components/tab-phieu-khac/danh-sach-phieu/TaiLieu";
import TongKetBenhAn from "../../components/tab-phieu-khac/danh-sach-phieu/TongKetBenhAn";
import XuTri from "../../components/tab-phieu-khac/danh-sach-phieu/XuTri";
import ModalDSMauHoiChan from "../../components/tab-phieu-khac/modals/ModalDSMauHoiChan";
import ModalThemMauHoiChan from "../../components/tab-phieu-khac/modals/ModalThemMauHoiChan";
import { ThongTinKhamBenhTree } from "../../constants/phan-he-kham-benh/ConstantPhanHeKhamBenh";
import { dsPhieu } from "../../constants/tab-phieu-khac/ConstantTabPhieuKhac";
import { PhanHeTiepDonContext } from "../../contexts/PhanHeTiepDonContext";
import { MauKhamBenh } from "../../models/ThongTinKhamBenhModel";
import { BenhNhan } from "../../tabs/tab-benh-nhan/BenhNhan";
import TaiNanThuongTich from "../../tabs/tab-tai-nan-thuong-tich/TabTaiNanThuongTich";
import { trangThaiBenhNhan } from "../../constants/BenhNhanConst";
export const ReceptionContext = createContext(() => {});

type Props = {
  handleClose: () => void;
};
export type benhNhanData = {
  data: any;
  totalPages: number;
  totalElements: number;
};

const ModalThongTinKhamBenh: FC<Props> = ({ handleClose }) => {
  const [codeCollapses, setCodeCollapses] = useState<string[]>([]);
  const [idSelected, setIdSelected] = useState<string>("khamBenhHoiBenh");
  const [openModalTuyChonBaoCao, setOpenModalTuyChonBaoCao] = useState<boolean>(false);
  const [mauSelected, setMauSelected] = useState<MauKhamBenh | null>(null);
  const [openModalDanhSachMauKhamBenhHoiBenh, setOpenModalDanhSachMauKhamBenhHoiBenh] = useState<boolean>(false);
  const [openModalMauKhamBenh, setOpenModalMauKhamBenh] = useState<boolean>(false);
  const [dataDanhSachMau, setDataDanhSachMau] = useState<MauKhamBenh[]>(DataDanhSachMauKhamBenh);
  const [shouldOpenThemMauModal, setShouldOpenThemMauModal] = useState<boolean>(false);
  const [shouldOpenDSMauHoiChanModal, setShouldOpenDSMauHoiChanModal] = useState<boolean>(false);

  const { benhNhanInfo } = useContext(PhanHeTiepDonContext);

  const refFormik = useRef<any>(null);
  useEffect(() => {
    refFormik?.current?.setValues({ ...mauSelected });
  }, [mauSelected]);
  console.log(refFormik?.current?.touched);
  
  const intl = useIntl();
  const validationSchema = Yup.object({
    mach: Yup.string().required(intl.formatMessage({ id: "VALIDATION.REQUIRE" })),
    nhipTho: Yup.string().required(intl.formatMessage({ id: "VALIDATION.REQUIRE" })),
    spo2: Yup.string().required(intl.formatMessage({ id: "VALIDATION.REQUIRE" })),
    nhietDo: Yup.string().required(intl.formatMessage({ id: "VALIDATION.REQUIRE" })),
    canNang: Yup.string().required(intl.formatMessage({ id: "VALIDATION.REQUIRE" })),
    bmi: Yup.string().required(intl.formatMessage({ id: "VALIDATION.REQUIRE" })),
    huyetAp1: Yup.string().required(intl.formatMessage({ id: "VALIDATION.REQUIRE" })),
    huyetAp2: Yup.string().required(intl.formatMessage({ id: "VALIDATION.REQUIRE" })),
    chieuCao: Yup.string().required(intl.formatMessage({ id: "VALIDATION.REQUIRE" })),
    creatinin: Yup.string().required(intl.formatMessage({ id: "VALIDATION.REQUIRE" })),
    crcl: Yup.string().required(intl.formatMessage({ id: "VALIDATION.REQUIRE" })),
    egfr: Yup.string().required(intl.formatMessage({ id: "VALIDATION.REQUIRE" })),
  });
  const initialValues = {
    mach: "",
    nhipTho: "",
    spo2: "",
    nhietDo: "",
    canNang: "",
    bmi: "",
    huyetAp1: "",
    huyetAp2: "",
    chieuCao: "",
    creatinin: "",
    crcl: "",
    egfr: "",
  };
  const handleSubmit = (values: any) => {
    console.log(values, "values submit khám bệnh");
  };
  useEffect(() => {
    setCodeCollapses([...ThongTinKhamBenhTree.filter.map((item: any) => item.code)]);
  }, []);
  let disabledButtonSave = (refFormik?.current?.touched && Object.keys(refFormik?.current?.touched)?.length === 0) || benhNhanInfo?.trangThai === trangThaiBenhNhan.ketThucKham.code || !benhNhanInfo?.isKhamBenh
  interface IFooterDefaut {
    isDelete?: boolean;
    isCopy?: boolean;
    isList?: boolean;
    isAdd?: boolean;
    isXml?: boolean;
  }
  const FooterDefaut: FC<IFooterDefaut> = (props) => {
    let { isDelete, isCopy, isList = true, isAdd = true, isXml } = props;
    return (
      <div className="flex flex-center justify-content-between w-100 py-2 btn-luu">
        <div className="d-flex gap-2">
          {isList && (
            <Button className="btn-fill">
              <i className="bi bi-list-ul"></i>
              <span>Danh sách</span>
            </Button>
          )}
          {isXml && (
            <Button className="btn-fill">
              <i className="bi bi-filetype-xml"></i>
              <span>Xem XML</span>
            </Button>
          )}
        </div>
        <div className="d-flex gap-2">
          {isAdd && (
            <Button className="btn-fill">
              <i className="bi bi-plus"></i>
              <span>Thêm</span>
            </Button>
          )}
          {isCopy && (
            <Button className="btn-fill">
              <i className="bi bi-clipboard2-plus"></i>Sao chép
            </Button>
          )}
          <Button className="btn-fill">
            <i className="bi bi-x-lg"></i>
            <span>{isDelete ? "Xóa" : "Hủy"}</span>
          </Button>
          <Button
            className="btn-fill"
            type="submit"
            disabled={disabledButtonSave}
          >
            <IconButtonSave />
            <span>Lưu</span>
          </Button>
          <Button className="btn-fill" type="submit">
            <i className="bi bi-printer"></i>
            <span>In</span>
          </Button>
        </div>
      </div>
    );
  };
  const handleRenderContent = (code: string) => {
    switch (code) {
      case "thongTinBenhNhan":
        return <BenhNhan />;
      case "thongTinKhamBenh":
        return <TabThongTinKhamBenh />;
      case "khamBenhHoiBenh":
        return <PhieuKhamBenh hideFooter />;
      case "khamChuyenKhoa":
        return <KhamChuyenKhoa />;
      case "taiLieu":
        return <TaiLieu />;
      case "kskLaiXe":
        return <KhamSucKhoeLaiXe />;
      case "chanDoanXuTri":
        return <XuTri />;
      case "thongTinTaiNanThuongTich":
        return <TaiNanThuongTich />;
      case "soKhamThai":
        return <SoKhamThai />;
      case "soDatVong":
        return <SoDatVong />;
      case "bangBanGiaoNguoiBenhDiMo":
        return <BangBanGiaoNguoiBenhDiMo />;
      case "bienBanHoiChan":
        return <BienBanHoiChan />;
      case "giayNghiOm":
        return <GiayNghiOm />;
      case "phieuCamKetSuDungDichVuYeuCau":
        return <PhieuCamKetSuDungDichVuYeuCau />;
      case "giayBaoTu":
        return <GiayBaoTu />;
      case "phieuNghiDuongThai":
        return <PhieuNghiDuongThai />;
      case "tongKetBenhAn":
        return <TongKetBenhAn />;
      case "phieuChuyenTuyen":
        return <PhieuChuyenTuyen />;
      case "phieuTruyenNhiem":
        return <PhieuTruyenNhiem />;
      default:
        return <BenhNhan />;
    }
  };
  const handleRenderFooter = (code: string) => {
    switch (code) {
      case "khamBenhHoiBenh":
        return (
          <>
            <Button className="btn-fill">
              <i className="bi bi-check2"></i>
              Đợt khám gần nhất
            </Button>
            <Button className="btn-fill" onClick={() => setOpenModalTuyChonBaoCao(true)}>
              <i className="bi bi-printer"></i>
              Tờ điều trị
            </Button>
            <Dropdown className="dropdown-btn menu-icon  ">
              <Dropdown.Toggle className="btn-fill">
                <i className="bi bi-tag rotate-90 spaces mt-6"></i>
                Mẫu khám bệnh
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() => {
                    refFormik?.current?.setFieldValue("tenMau", null);
                    setMauSelected({ ...refFormik?.current?.values, id: null });
                    setOpenModalMauKhamBenh(true);
                  }}
                >
                  <div className="ps-5 spaces line-height-30">Lưu vào mẫu mới</div>
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setOpenModalDanhSachMauKhamBenhHoiBenh(true)}>
                  <div className="ps-5 spaces line-height-30">Danh sách các mẫu đã tạo</div>
                </Dropdown.Item>
                <Dropdown.Item className="bg-light spaces line-height-30">
                  <b>Mẫu khám bệnh hỏi bệnh</b>
                </Dropdown.Item>
                {dataDanhSachMau?.map((item) => (
                  <Dropdown.Item
                    onClick={() => {
                      refFormik?.current?.setValues(item);
                    }}
                  >
                    <div className="ps-5 spaces line-height-30">{item?.tenMau}</div>
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Button
              className="btn-fill"
              type="submit"
              disabled={disabledButtonSave}
            >
              <IconButtonSave />
              Lưu
            </Button>
          </>
        );
      case "khamChuyenKhoa":
        return <KhamChuyenKhoa />;
      case "taiLieu":
        return (
          <>
            <Button className="btn-fill">
              <i className="bi bi-plus"></i>
              Thêm tài liệu
            </Button>
            <Button className="btn-fill">
              <i className="bi bi-pencil-square"></i>
              Sửa tài liệu
            </Button>
            <Button className="btn-fill">
              <i className="bi bi-x-lg"></i>
              Xóa tài liệu
            </Button>
          </>
        );
      case "kskLaiXe":
        return (
          <>
            <FooterDefaut />
          </>
        );
      case "chanDoanXuTri":
        return (
          <>
            <div className="d-flex gap-3 justify-content-center">
              <Button className="btn-fill">
                <i className="bi bi-printer"></i>
                <span>In giấy hẹn</span>
              </Button>
              <Button className="btn-fill" type="submit" disabled={disabledButtonSave}>
                {!refFormik?.current?.values?.hinhThucXuTri?.code ? (
                  <div>
                    <IconButtonSave />
                    <span>Lưu</span>
                  </div>
                ) : (
                  <div>
                    <i className="bi bi-check-lg"></i>
                    <span>Xử trí</span>
                  </div>
                )}
              </Button>
            </div>
          </>
        );
      case "thongTinTaiNanThuongTich":
        return (
          <>
            <div className="flex flex-center justify-content-center pt-3 pb-2 btn-luu">
              <div className="d-flex gap-2">
                <Button className="btn-fill">
                  <i className="bi bi-x-lg"></i>
                  <span>Xóa</span>
                </Button>
                <Button className="btn-fill" type="submit" disabled={disabledButtonSave}>
                  <IconButtonSave />
                  <span>Lưu</span>
                </Button>
              </div>
            </div>
          </>
        );
      case "soKhamThai":
        return <FooterDefaut />;
      case "soDatVong":
        return <FooterDefaut />;
      case "bangBanGiaoNguoiBenhDiMo":
        return <></>;
      case "bienBanHoiChan":
        return (
          <>
            <div className="flex flex-center justify-content-between pt-3 w-100 pb-2 btn-luu">
              <div className="d-flex gap-2">
                <DropdownButton
                  id="dropdown-basic-button"
                  title={
                    <div>
                      <i className="bi bi-list-ul"></i>
                      Danh sách
                      <i className="ps-1 bi bi-chevron-down m-0"></i>
                    </div>
                  }
                  className="dropdown-btn"
                >
                  {dsPhieu.map((item) => (
                    <>
                      <Dropdown.Item>{item?.name}</Dropdown.Item>
                    </>
                  ))}
                </DropdownButton>
              </div>
              <div className="d-flex gap-2 align-items-center">
                <DropdownButton
                  id="dropdown-basic-button"
                  title={
                    <div>
                      <i className="bi bi-tag rotate-90 spaces mt-6"></i>
                      Mẫu hội chẩn
                      <i className="ps-1 bi bi-chevron-down m-0"></i>
                    </div>
                  }
                  className="dropdown-btn"
                >
                  <Dropdown.Item onClick={() => setShouldOpenDSMauHoiChanModal(true)}>
                    Danh sách các mẫu đã tạo
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setShouldOpenThemMauModal(true)}>Lưu vào mẫu mới</Dropdown.Item>
                </DropdownButton>
                <FooterDefaut isList={false} isDelete isCopy />
              </div>
            </div>
          </>
        );
      case "giayNghiOm":
        return <FooterDefaut isAdd={false} />;
      case "phieuCamKetSuDungDichVuYeuCau":
        return <>{FooterDefaut({ isDelete: true })}</>;
      case "giayBaoTu":
        return (
          <>
            <FooterDefaut isXml isDelete />
          </>
        );
      case "phieuNghiDuongThai":
        return <></>;
      case "tongKetBenhAn":
        return (
          <>
            <div className="flex flex-center justify-content-end pt-3 w-100 pb-2 btn-luu">
              <div className="d-flex gap-2">
                <DropdownButton
                  id="dropdown-basic-button"
                  title={
                    <div>
                      Mẫu tổng kết
                      <i className="ps-1 bi bi-chevron-down m-0"></i>
                    </div>
                  }
                  className="dropdown-btn"
                >
                  <Dropdown.Item>Lưu mẫu</Dropdown.Item>
                  <Dropdown.Item>Danh sách mẫu</Dropdown.Item>
                </DropdownButton>
                <Button className="btn-fill" type="submit" disabled={disabledButtonSave}>
                  <IconButtonSave />
                  <span>Lưu</span>
                </Button>
                <Button className="btn-fill">
                  <i className="bi bi-printer"></i>
                  <span>In</span>
                </Button>
              </div>
            </div>
          </>
        );
      case "phieuChuyenTuyen":
        return <FooterDefaut />;
      case "phieuTruyenNhiem":
        return <FooterDefaut isDelete isCopy />;
      default:
      // return <PhieuKhamBenh hideFooter />;
    }
  };
  return (
    <Modal
      show={true}
      onHide={handleClose}
      size="xl"
      className="modal-kham-benh"
      // fullscreen
      animation
      centered
    >
      <Formik<any>
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        innerRef={refFormik}
      >
        {({ setValues, setFieldValue, values }) => (
          <Form className="spaces h-calc-vh-130">
            <Modal.Header closeButton className="header-modal">
              <Modal.Title>Thông tin khám bệnh</Modal.Title>
            </Modal.Header>
            <Modal.Body className="dialog__content h-100">
              <div className="p-5 ps-0 spaces h-calc-vh-210">
                <div className="d-flex border p-2 justify-content-between">
                  <div className="d-flex spaces gap-10 align-items-center">
                    <Button className="btn-outline spaces h-29">
                      <i className="bi bi-list m-0 p-0"></i>
                    </Button>
                    <Button className="btn-fill spaces ">
                      <i className="bi bi-printer"></i>
                      In
                    </Button>
                    <Button className="btn-fill spaces ">
                      <i className="bi bi-arrow-repeat"></i>
                      Làm mới
                    </Button>
                    <Button className="btn-fill spaces ">
                      <i className="bi bi-megaphone"></i>
                      Gọi BN
                    </Button>
                    <Button className="btn-fill spaces ">
                      <i className="bi bi-clipboard2-check"></i>
                      Dịch vụ
                    </Button>
                    <Button className="btn-fill spaces ">
                      <IconMedicine />
                      Thuốc
                    </Button>
                    <Button className="btn-fill spaces ">
                      <i className="bi bi-credit-card"></i>
                      Thanh toán
                    </Button>
                  </div>
                  <InfoPatientRight benhNhanInfo={benhNhanInfo} />
                </div>
                <div className="d-flex ps-3 w-100 border border-top-0 spaces h-calc-vh-310">
                  <SelectTree
                    codeCollapses={codeCollapses}
                    handleChangeCollapsesCode={setCodeCollapses}
                    idSelected={idSelected}
                    handleChangeSelectId={setIdSelected}
                    selectTree={ThongTinKhamBenhTree}
                    className="spaces h-calc-vh-200 overflow-auto border-top-0 w-20"
                    onClickIcon
                  />
                  <div className="w-80 overflow-y-auto overflow-x-hidden p-15 spaces">
                    {handleRenderContent(idSelected) as ReactNode}
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-end p-2 gap-5 pr-5 spaces py-5">
              <div className="spaces width-80 d-flex gap-8 justify-content-end">
                {handleRenderFooter(idSelected) as ReactNode}
              </div>
            </Modal.Footer>
          </Form>
        )}
      </Formik>
      {openModalMauKhamBenh && (
        <ModalMauKhamBenhHoiBenh
          mauSelected={mauSelected as MauKhamBenh}
          setMauSelected={setMauSelected}
          dataDanhSachMau={dataDanhSachMau}
          setDataDanhSachMau={setDataDanhSachMau}
          handleClose={() => setOpenModalMauKhamBenh(false)}
        />
      )}
      {openModalTuyChonBaoCao && <ModalTuyChonBaoCao handleClose={() => setOpenModalTuyChonBaoCao(false)} />}
      {openModalDanhSachMauKhamBenhHoiBenh && (
        <ModalDanhSachMauKhamBenhHoiBenh
          setMauSelected={setMauSelected}
          handleClose={() => setOpenModalDanhSachMauKhamBenhHoiBenh(false)}
        />
      )}
      {shouldOpenThemMauModal && <ModalThemMauHoiChan handleClose={() => setShouldOpenThemMauModal(false)} />}

      {shouldOpenDSMauHoiChanModal && <ModalDSMauHoiChan handleClose={() => setShouldOpenDSMauHoiChanModal(false)} />}
    </Modal>
  );
};
export { ModalThongTinKhamBenh };
