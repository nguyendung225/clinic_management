import { Form, Formik, FormikErrors } from "formik";
import { Dispatch, FC, SetStateAction, useContext, useEffect, useRef, useState } from "react";
import { Button, Col, Dropdown, FormCheck, Modal, Row } from "react-bootstrap";
import * as Yup from "yup";
import AutocompleteV2 from "../../../component/AutocompleteObjectV2";
import ContextMenu from "../../../component/ContextMenuV3";
import { IconBack, IconButtonSave } from "../../../component/IconSvg";
import InputSearch from "../../../component/InputSearch";
import LabelRequired from "../../../component/LabelRequired";
import SelectTree from "../../../component/SelectTree";
import TextField from "../../../component/TextField";
import { TableCustom } from "../../../component/table/table-custom/TableCustom";
import { DEFAULT_PAGE_INDEX, SELECTION_MODE } from "../../../utils/Constant";
import { OptionBenhKemTheo, chidinhDVData } from "../../components/FakeData";
import InfoPatientRight from "../../components/InfoPatientRight";
import ModalBenhKemTheo from "../../components/ModalBenhKemTheo";
import ModalLuuMau from "../../components/modal-chi-dinh-dich-vu/ModalLuuMau";
import ModalDsMauDaTao from "../../components/modal-chi-dinh-dich-vu/modal-ds-mau-da-tao/ModalDsMauDaTao";
import ModalThemPhieuDieuTri from "../../components/modal-chi-dinh-dich-vu/modal-them-phieu-dieu-tri/ModalThemPhieuDieuTri";
import { TreeChiDinhDichVu, constTypeBenhKemTheo } from "../../constants/KhamBenh";
import { PhanHeTiepDonContext } from "../../contexts/PhanHeTiepDonContext";
import { DsDichVuChiDinhColumn, DsDichVuColumn } from "./ChiDinhDichVuColumn";
import { IContextMenu } from "../../../phan-he-tiep-nhan-thanh-toan/models/ModelTabDSDangKy";
import { toast } from "react-toastify";
import { ConfirmDialog } from "../../../component/ConfirmDialog";
import ModalEditOneColumn from "../../components/modal-ke-thuoc/ModalEditOneColumn";

interface Props {
  handleClose: Dispatch<SetStateAction<boolean>>;
  dieuTri?: boolean;
}

const PageChiDinhDichVu: FC<Props> = (props) => {
  let { handleClose, dieuTri } = props;
  const { benhNhanInfo } = useContext(PhanHeTiepDonContext);
  const [selectedRow, setSelectedRow] = useState<any>({});
  const [openLuuMauThuocMoiDialog, setOpenLuuMauThuocMoiDialog] = useState<boolean>(false);
  const [openDanhSachMauDialog, setOpenDanhSachMauDialog] = useState<boolean>(false);
  const [openModalBenhKemTheo, setOpenModalBenhKemTheo] = useState<boolean>(false);
  const [codeCollapses, setCodeCollapses] = useState<string[]>([]);
  const [idSelected, setIdSelected] = useState<string>("");
  const [dsDichVuChiDinh, setDSDichVuChiDinh] = useState<any[]>([]);
  const [shouldOpenLuuMauModal, setShouldOpenLuuMauModal] = useState<boolean>(false);
  const [shouldOpenDsMauModal, setShouldOpenDsMauModal] = useState<boolean>(false);
  const [shouldOpenPhieuDieuTriModal, setShouldOpenPhieuDieuTriModal] = useState<boolean>(false);
  const [shouldOpenGhiChuPopup, setShouldOpenGhiChuPopup] = useState<boolean>(false);
  const [shouldOpenSoLuongPopup, setShouldOpenSoLuongPopup] = useState<boolean>(false);
  const [shouldOpenConfirmDialog, setShouldOpenConfirmDialog] = useState<boolean>(false);
  const [openModalThemPhieuDieuTri, setOpenModalThemPhieuDieuTri] = useState<boolean>(false);
  const [contextMenu, setContextMenu] = useState<null | {
    x: number;
    y: number;
  }>(null);
  const [indexRowContext, setIndexRowContext] = useState<number>();

  const handleSubmit = async (values: any) => {
    // handleClose(false);
  };
  const handleContextMenu = (e: any, row: any) => {
    e.preventDefault();
    setSelectedRow(row?.original);
    setContextMenu({ x: e.clientX, y: e.clientY });
    setIndexRowContext(row?.index);
  };
  const CODE_MENU = {
    SUA_SO_LUONG: {
      MOT: 1,
      HAI: 2,
      BA: 3,
      BON: 4,
      NHAP_SO_LUONG: "nhapSoLuong",
    },
    SUA_GIA: "suaGia",
    GHI_CHU: "ghiChu",
    XOA_THUOC: "xoaThuoc",
  };

  const updateColumnDSDichVuChiDinh = (column: string, newValue: any) => {
    setDSDichVuChiDinh(
      dsDichVuChiDinh?.map((item) => {
        if (item?.maDichVu === selectedRow?.maDichVu) {
          item[column] = newValue;
        }
        return item;
      })
    );
  };

  const handleClickOptionContextMenu = (value: any) => {
    const menuActions = {
      [CODE_MENU.SUA_SO_LUONG.NHAP_SO_LUONG]: () => setShouldOpenSoLuongPopup(true),
      [CODE_MENU.SUA_SO_LUONG.MOT]: () => updateColumnDSDichVuChiDinh("soLuong", CODE_MENU.SUA_SO_LUONG.MOT),
      [CODE_MENU.SUA_SO_LUONG.HAI]: () => updateColumnDSDichVuChiDinh("soLuong", CODE_MENU.SUA_SO_LUONG.HAI),
      [CODE_MENU.SUA_SO_LUONG.BA]: () => updateColumnDSDichVuChiDinh("soLuong", CODE_MENU.SUA_SO_LUONG.BA),
      [CODE_MENU.SUA_SO_LUONG.BON]: () => updateColumnDSDichVuChiDinh("soLuong", CODE_MENU.SUA_SO_LUONG.BON),
      [CODE_MENU.SUA_GIA]: () => toast.warning(`Dịch vụ [${selectedRow?.tenDichVu}] không được sửa đơn giá`),
      [CODE_MENU.GHI_CHU]: () => setShouldOpenGhiChuPopup(true),
      [CODE_MENU.XOA_THUOC]: () => setShouldOpenConfirmDialog(true),
    };
    menuActions[value?.code]?.();
    setContextMenu(null);
  };
  const validationSchema = Yup.object().shape({});
  const dropListChiDinhDichVu: IContextMenu[] = [
    {
      title: "Dịch vụ",
    },
    {
      icon: <i className="bi bi-pencil-square text-pri"></i>,
      code: "suaSoLuong",
      name: "Sửa số lượng",
      children: [
        { code: "1", name: "1" },
        { code: "2", name: "2" },
        { code: "3", name: "3" },
        { code: "4", name: "4" },
        { code: "nhapSoLuong", name: "Nhập số lượng" },
      ],
    },
    {
      icon: <i className="bi bi-currency-exchange text-pri"></i>,
      code: "suaGia",
      name: "Sửa giá",
    },
    {
      icon: <i className="fa-solid fa-message text-pri"></i>,
      code: "ghiChu",
      name: "Ghi chú",
    },
    {
      icon: <i className="bi bi-x-lg text-danger"></i>,
      code: "xoaDichVu",
      name: "Xóa dịch vụ",
    },
  ];
  const handleDelete = () => {
    let newArr = [...dsDichVuChiDinh];
    if (indexRowContext || indexRowContext === 0) {
      newArr.splice(indexRowContext, 1);
    }
    setDSDichVuChiDinh(newArr);
    setShouldOpenConfirmDialog(false);
  };

  const handleSaveGhiChu = (values: { ghiChu: string }) => {
    updateColumnDSDichVuChiDinh("ghiChu", values.ghiChu)
  };

  const handleOpenThemPhieuDieuTri = () => {
    setOpenModalThemPhieuDieuTri(true);
  }

  return (
    <Modal
      className="page-full"
      fullscreen
      dialogClassName="h-modal"
      size="xl"
      show={true}
      animation={false}
      centered
      backdropClassName="spaces top-50"
    >
      <Formik<any>
        initialValues={{}}
        validationSchema={validationSchema}
        validateOnChange={true}
        validate={(values) => {
          const errors: FormikErrors<any> = {};
          return errors;
        }}
        onSubmit={handleSubmit}
      >
        {({ touched, errors, setFieldValue, values }) => (
          <Form id="form-thuoc" className="spaces h-calc-vh-50">
            <div className="h-100">
              <Modal.Header className="py-3 header-modal">
                <div className="d-flex gap-6">
                  <div className="d-flex align-items-center gap-3 cursor-pointer" onClick={() => handleClose(false)}>
                    <IconBack />
                    <span className="fw-500">Quay lại</span>
                  </div>
                  <div className="d-flex gap-4">
                    <Dropdown className="dropdown-btn menu-icon">
                      <Dropdown.Toggle className="btn-fill">
                        <i className="bi bi-caret-down-fill"></i>
                        Mẫu chỉ định
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>
                          <div className="ps-5 spaces line-height-30" onClick={() => setShouldOpenLuuMauModal(true)}>Lưu vào mẫu mới</div>
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => setShouldOpenDsMauModal(true)}>
                          <div className="ps-5 spaces line-height-30">Danh sách các mẫu đã tạo</div>
                        </Dropdown.Item>
                        <Dropdown.Item className="bg-light spaces line-height-30">
                          <b>Tổng hợp</b>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <div className="ps-5 spaces line-height-30">1</div>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <div className="ps-5 spaces line-height-30">2</div>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Button className="btn-fill">
                      Phiếu chỉ định cũ
                    </Button>
                  </div>
                </div>
                {benhNhanInfo?.hoTen ? <InfoPatientRight benhNhanInfo={benhNhanInfo} /> : <div className="spaces h-65"></div>}
              </Modal.Header>
              <Modal.Body className="py-6 px-0 spaces overflow-hidden spaces h-calc-vh-180">
                <div className="d-flex">
                  <div className="spaces width-20 h-calc-vh-185 bg-white radius-2 spaces">
                    <SelectTree
                      className="w-100 h-100 border py-2 ps-4 border-top-0"
                      codeCollapses={codeCollapses}
                      handleChangeCollapsesCode={setCodeCollapses}
                      idSelected={idSelected}
                      handleChangeSelectId={setIdSelected}
                      selectTree={TreeChiDinhDichVu}
                    />
                  </div>
                  <div className="spaces width-80 bg-light radius-2 spaces">
                    <div className="bg-white radius-2 spaces py-10 px-10 d-flex justify-content-between">
                      <div className="text-pri fw-bold">Chỉ định dịch vụ</div>
                      {dieuTri && <a href="/" onClick={(e) => { e.preventDefault(); handleOpenThemPhieuDieuTri() }} className="text-black"><u>Thêm phiếu điều trị</u></a>}
                    </div>
                    <div className="bg-white radius-2 spaces py-10 px-10 mt-3">
                      <Row className="spaces mt-4">
                        <Col xs={3} className="mb-2">
                          <TextField
                            inputClassName="w-100"
                            label="Ngày y lệnh"
                            name="ngayYLenh"
                            type="date"
                            labelClassName="ms-0 min-w-100px"
                          />
                        </Col>
                        <Col xs={3} className="ps-4 pe-0 mb-2">
                          <TextField
                            label="Chẩn đoán"
                            className="spaces w-100"
                            inputClassName="w-100"
                            name="chanDoan"
                            labelClassName="ms-0 min-w-95px"
                          />
                        </Col>
                        <Col xs={6} className="ps-0 mb-2">
                          <TextField
                            // className="spaces w-100"
                            inputClassName="w-100"
                            name="chanDoan"
                            labelClassName="ms-0 min-w-95px"
                          />
                        </Col>
                        <Col xs={8} className="d-flex align-items-end mb-2">
                          <LabelRequired label="Bệnh kèm theo" className="min-w-100px" />
                          <TextField
                            className="spaces w-100"
                            inputClassName="w-100"
                            name="benhKemTheo"
                          />
                        </Col>
                        <Col xs={4} className="mb-2">
                          <TextField
                            className="spaces"
                            inputClassName="w-100"
                            label="Bác sĩ điều trị"
                            name="bacSiDieuTri"
                            value="Nguyễn Văn A"
                            labelClassName="ms-0 min-w-95px"
                            disabled
                          />
                        </Col>
                        <Col className="spaces flex-auto">
                          <TextField
                            className="spaces"
                            inputClassName="w-100"
                            label="Ghi chú"
                            name="ghiChu"
                            labelClassName="ms-0 min-w-100 spaces"
                          />
                        </Col>
                      </Row>
                    </div>
                    <div className="spaces h-calc-vh-315 bg-white spaces pb-10 px-0 radius-2 mt-6 table-ke-thuoc">
                      <div className="spaces width-100 bg-light h-100">
                        <div className="spaces h-calc-180 bg-white">
                          <div className="px-10 py-5 h-35 spaces">
                            <InputSearch
                              placeholder="Tìm kiếm"
                              handleChange={() => { }}
                              className="spaces h-25 pr-4 radius-3"
                            />
                          </div>
                          <div className="min-h-180 spaces bg-white mb-6 h-calc-40">
                            <TableCustom
                              columns={DsDichVuColumn}
                              data={chidinhDVData}
                              selectionMode={SELECTION_MODE.MULTI}
                              getSelectedRowsData={setDSDichVuChiDinh}
                            />
                          </div>
                        </div>
                        <div className="mt-2 bg-white">
                          <div className="d-flex spaces pt-10 pb-6 px-10 text-pri fw-bold">Phiếu chỉ định</div>
                          <div className="min-h-155 spaces">
                            <TableCustom
                              columns={DsDichVuChiDinhColumn}
                              data={dsDichVuChiDinh || []}
                              handleContextMenu={handleContextMenu}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer className="d-flex justify-content-between position-relative tien-don spaces pl-130 pt-4">
                <div className="bg-light position-absolute left-0 spaces W-120 h-62 p-0 m-0 text-center d-flex align-items-center justify-content-center flex-column">
                  <div className="fw-bold mt-2">Tiền đơn</div>
                  <div className="text-danger fw-bold text-center">0</div>
                </div>
                <div className="d-flex mb-4px ">
                  <div>
                    <div className="spaces d-flex width-50 align-items-center mb-10">
                      <LabelRequired label="Tiền dịch vụ" className="ms-0 min-w-175px" />
                      <span className="text-danger me-5 fw-500">0</span>
                    </div>
                    <div className="spaces d-flex width-50 align-items-center">
                      <LabelRequired label="Tiền thuốc & vật tư" className="ms-0 min-w-175px" />
                      <span className="text-pri me-5 fw-500">0</span>
                    </div>
                  </div>
                  <div>
                    <div className="spaces d-flex width-50 align-items-center mb-10">
                      <LabelRequired label="Đã thu" className="ms-0 min-w-175px" />
                      <span className="text-pri me-5 fw-500">0</span>
                    </div>
                    <div className="spaces d-flex width-50 align-items-center">
                      <LabelRequired label="Tổng chi phí" className="ms-0 min-w-175px text-danger" />
                      <span className="text-danger me-5 fw-500">0</span>
                    </div>
                  </div>
                  <div>
                    <div className="spaces d-flex width-50 align-items-center mb-10">
                      <LabelRequired label="Giảm dịch vụ" className="ms-0 min-w-175px" />
                      <span className="text-pri me-5 fw-500">0</span>
                    </div>
                    <div className="spaces d-flex width-50 align-items-center">
                      <LabelRequired label="Giảm phiếu thu" className="ms-0 min-w-175px" />
                      <span className="text-pri me-5 fw-500">0</span>
                    </div>
                  </div>
                  <div>
                    <div className="spaces d-flex flex-column align-items-center  mt-2">
                      <LabelRequired label="Số tiền còn phải thanh toán" className="ms-0 text-pri fw-bold" />
                      <span className="text-danger me-5 fw-500 text-center">0</span>
                    </div>
                  </div>
                </div>
                <div className="d-flex gap-3">
                  <Button className="btn-outline min-w-100px">
                    <i className="bi bi-printer" /> In
                  </Button>
                  <Button className="btn-fill min-w-100px">
                    <IconButtonSave /> Lưu
                  </Button>
                </div>
              </Modal.Footer>
            </div>
            {openModalBenhKemTheo && (
              <ModalBenhKemTheo
                type={constTypeBenhKemTheo.ICD10.code}
                handleClose={() => {
                  setOpenModalBenhKemTheo(false);
                }}
                setListBenhKemTheo={(item) => setFieldValue("benhKemTheo", item)}
              />
            )}
          </Form>
        )}
      </Formik>
      {shouldOpenLuuMauModal && <ModalLuuMau handleClose={() => setShouldOpenLuuMauModal(false)} />}
      {shouldOpenDsMauModal && (
        <ModalDsMauDaTao
          dsDichVuChiDinh={dsDichVuChiDinh}
          setDsDichVuChiDinh={(data: any) => setDSDichVuChiDinh(data)}
          handleClose={() => setShouldOpenDsMauModal(false)}
        />
      )}
      {shouldOpenPhieuDieuTriModal && (
        <ModalThemPhieuDieuTri handleClose={() => setShouldOpenPhieuDieuTriModal(false)} />
      )}
      {contextMenu && (
        <ContextMenu
          handleClickOptionContextMenu={handleClickOptionContextMenu}
          handleCloseMenu={() => setContextMenu(null)}
          data={dropListChiDinhDichVu}
          target={contextMenu}
        />
      )}
      <ConfirmDialog
        className="z-index-1060"
        show={shouldOpenConfirmDialog}
        title="Thông báo"
        message="Bạn có chắc chắn muốn bỏ dịch vụ này không ?"
        yes="Xác nhận"
        close="Đóng"
        onCloseClick={() => setShouldOpenConfirmDialog(false)}
        onYesClick={() => handleDelete()}
      />
      {shouldOpenGhiChuPopup && (
        <ModalEditOneColumn
          handleSave={handleSaveGhiChu}
          code="ghiChu"
          name="Ghi chú"
          handleClose={() => setShouldOpenGhiChuPopup(false)}
        />
      )}
      {shouldOpenSoLuongPopup && (
        <ModalEditOneColumn
          handleSave={(values) => updateColumnDSDichVuChiDinh("soLuong", values?.soLuong)}
          code="soLuong"
          name="Chỉnh sửa số lượng"
          handleClose={() => setShouldOpenSoLuongPopup(false)}
        />
      )}

      {
        openModalThemPhieuDieuTri && <ModalThemPhieuDieuTri handleClose={() => setOpenModalThemPhieuDieuTri(false)} />
      }
    </Modal>
  );
};

export default PageChiDinhDichVu;
