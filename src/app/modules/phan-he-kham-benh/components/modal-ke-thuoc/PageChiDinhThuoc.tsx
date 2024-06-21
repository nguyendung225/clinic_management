import { Form, Formik, FormikErrors } from "formik";
import { FC, useContext, useRef, useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import * as Yup from "yup";
import { IconButtonSave, IconDoubleCheck } from "../../../component/IconSvg";
import LabelRequired from "../../../component/LabelRequired";
import SelectTree from "../../../component/SelectTree";
import TextField from "../../../component/TextField";
// import { TableCustom } from "../../../component/table-custom-v2/TableCustom";
import AutocompleteV2 from "../../../component/AutocompleteObjectV2";
import { ConfirmDialog } from "../../../component/ConfirmDialog";
import ContextMenu from "../../../component/ContextMenuV3";
import { TableCustom } from "../../../component/table/table-custom/TableCustom";
import { IContextMenu } from "../../../phan-he-tiep-nhan-thanh-toan/models/ModelTabDSDangKy";
import { SELECTION_MODE } from "../../../utils/Constant";
import { DsThuocChiDinhColumn, columnsDSMauChiDinhThuoc } from "../../columns/tab-thuoc/ColumnTabThuoc";
import { TreeChiDinhThuoc, constTypeBenhKemTheo } from "../../constants/KhamBenh";
import { PhanHeTiepDonContext } from "../../contexts/PhanHeTiepDonContext";
import { DataDanhSachMauChiDinhThuoc } from "../FakeData";
import ModalBenhKemTheo from "../ModalBenhKemTheo";
import ModalLuuMau from "../modal-chi-dinh-dich-vu/ModalLuuMau";
import ModalDsMauDaTao from "../modal-chi-dinh-dich-vu/modal-ds-mau-da-tao/ModalDsMauDaTao";
import ModalThemPhieuDieuTri from "../modal-chi-dinh-dich-vu/modal-them-phieu-dieu-tri/ModalThemPhieuDieuTri";
import ModalEditOneColumn from "./ModalEditOneColumn";

interface Props {
  handleClose: () => void;
}

const PageChiDinhThuoc: FC<Props> = (props) => {
  let { handleClose } = props;
  const { benhNhanInfo } = useContext(PhanHeTiepDonContext);
  const [selectedRow, setSelectedRow] = useState<any>();
  const [openDanhSachMauDialog, setOpenDanhSachMauDialog] = useState<boolean>(false);
  const [openModalBenhKemTheo, setOpenModalBenhKemTheo] = useState<boolean>(false);
  const [codeCollapses, setCodeCollapses] = useState<string[]>([]);
  const [idSelected, setIdSelected] = useState<string>("");
  const [dsDichVuChiDinh, setDSDichVuChiDinh] = useState<any[]>([]);
  const [shouldOpenLuuMauModal, setShouldOpenLuuMauModal] = useState<boolean>(false);
  const [shouldOpenDsMauModal, setShouldOpenDsMauModal] = useState<boolean>(false);
  const [shouldOpenPhieuDieuTriModal, setShouldOpenPhieuDieuTriModal] = useState<boolean>(false);
  const [shouldOpenGhiChuPopup, setShouldOpenGhiChuPopup] = useState<boolean>(false);
  const [shouldOpenConfirmDialog, setShouldOpenConfirmDialog] = useState<boolean>(false);
  const [contextMenu, setContextMenu] = useState<null | {
    x: number;
    y: number;
  }>(null);
  const contextRef = useRef<HTMLDivElement | null>(null);
  const [indexRowContext, setIndexRowContext] = useState<number>();

  const handleSubmit = async (values: any) => {
    // handleClose(false);
  };

  const validationSchema = Yup.object().shape({});
  const handleContextMenu = (e: any, row: any) => {
    e.preventDefault();
    setContextMenu({ x: e.clientX, y: e.clientY });
    setIndexRowContext(row?.index);
  };
  const CODE_MENU = {
    SUA_DOI_TUONG: "suaDoiTuong",
    GHI_CHU: "ghiChu",
    XOA_THUOC: "xoaThuoc",
  };
  const handleClickOptionContextMenu = (value: any) => {
    const menuActions = {
      // [CODE_MENU.SUA_DOI_TUONG]: () => setOpenModalTuyChonThuocThayThe(true),
      [CODE_MENU.GHI_CHU]: () => setShouldOpenGhiChuPopup(true),
      [CODE_MENU.XOA_THUOC]: () => setShouldOpenConfirmDialog(true),
    };
    menuActions[value?.code]?.();
  };
  const dropListChiDinhThuoc: IContextMenu[] = [
    {
      title: "Thuốc",
    },
    {
      icon: <i className="bi bi-pencil-square text-pri"></i>,
      code: "suaDoiTuong",
      name: "Sửa đối tượng",
      children: [
        { code: "bhyt", name: "Bảo hiểm y tế" },
        { code: "bhytYeuCau", name: "Bảo hiểm y tế + dịch vụ" },
        { code: "vienPhi", name: "Viện phí" },
        { code: "yeuCau", name: "Yêu cầu" },
        { code: "hoaPhiKhac", name: "Hao phí khác" },
      ],
    },
    {
      icon: <i className="fa-solid fa-message text-pri"></i>,
      code: "ghiChu",
      name: "Ghi chú",
    },
    {
      icon: <i className="bi bi-x-lg text-danger"></i>,
      code: "xoaThuoc",
      name: "Xóa thuốc",
    },
    // {
    //   title: "Bảo hiểm y tế",
    //   action: () => handleSelectDroplist("doiTuong", "Bảo hiểm y tế"),
    // },
    // {
    //   title: "Bảo hiểm y tế + dịch vụ",
    //   action: () => handleSelectDroplist("doiTuong", "Bảo hiểm y tế + dịch vụ"),
    // },
    // {
    //   title: "Thu phí",
    //   action: () => handleSelectDroplist("doiTuong", "Thu phí"),
    // },
    // {
    //   title: "Dịch vụ",
    //   action: () => handleSelectDroplist("doiTuong", "Dịch vụ"),
    // },
    // {
    //   title: "Hao phí khác",
    //   action: () => handleSelectDroplist("doiTuong", "Hao phí khác"),
    // },
    // {
    //   title: "Sửa số lượng",
    //   children: [
    //     {
    //       title: "1",
    //       action: () => handleSelectDroplist("soLuong", "1"),
    //     },
    //     {
    //       title: "2",
    //       action: () => handleSelectDroplist("soLuong", "2"),
    //     },
    //     {
    //       title: "3",
    //       action: () => handleSelectDroplist("soLuong", "3"),
    //     },
    //     {
    //       title: "Nhập số lượng",
    //       action: () => setShouldOpenSoLuongPopup(true),
    //       component: (
    //         <SoLuongPopup
    //           className="z-index-1060"
    //           open={shouldOpenSoLuongPopup}
    //           handleClose={() => setShouldOpenSoLuongPopup(false)}
    //           handleSelectDroplist={(value: any) => handleSelectDroplist("soLuong", value)}
    //         />
    //       ),
    //     },
    //   ],
    // },
    // {
    //   title: "Ghi chú",
    //   action: () => setShouldOpenGhiChuPopup(true),
    //   component: (
    //     <GhiChuPopup
    //       className="z-index-1060"
    //       open={shouldOpenGhiChuPopup}
    //       handleClose={() => setShouldOpenGhiChuPopup(false)}
    //       handleSelectDroplist={(value: any) => handleSelectDroplist("ghiChu", value)}
    //     />
    //   ),
    // },
    // {
    //   title: "Xóa dịch vụ",
    //   action: () => setShouldOpenConfirmDialog(true),
    //   component: (
    //     <ConfirmDialog
    //       className="z-index-1060"
    //       show={shouldOpenConfirmDialog}
    //       title="Thông báo"
    //       message="Bạn có chắc chắn muốn bỏ dịch vụ này không ?"
    //       yes="Xác nhận"
    //       close="Đóng"
    //       onCloseClick={() => setShouldOpenConfirmDialog(false)}
    //       onYesClick={() => handleDelete()}
    //     />
    //   ),
    // },
  ];
  const handleDelete = () => {
    let newArr = [...dsDichVuChiDinh];
    if (indexRowContext || indexRowContext === 0) {
      newArr.splice(indexRowContext, 1);
    }
    setDSDichVuChiDinh(newArr);
    setShouldOpenConfirmDialog(false)
  };
  return (
    <Modal
    dialogClassName="spaces min-w-calc-50"
    size="xl"
    show={true}
    animation={false}
    centered
    onHide={handleClose}
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
              <Modal.Header className="py-3 header-modal" closeButton>
                <Modal.Title>Chỉ định thuốc</Modal.Title>
                {/* <div className="d-flex gap-6">
                  <div className="d-flex align-items-center gap-3" onClick={() => handleClose(false)}>
                    <IconBack />
                    <span className="fw-500">Quay lại</span>
                  </div>
                </div> */}
                {/* {benhNhanInfo?.hoTen && <InfoPatientRight benhNhanInfo={benhNhanInfo} />} */}
              </Modal.Header>
              <Modal.Body className="py-6 px-0 spaces overflow-hidden spaces h-calc-vh-170">
                <Row className="bg-white px-12 pt-12 pb-2 radius-2 spaces">
                  <Col xs={3}>
                    <TextField
                      className="spaces"
                      inputClassName="w-100"
                      label="Bác sĩ sử dụng"
                      name="bacSiSuDung"
                      labelClassName="ms-0 min-w-95px"
                    />
                  </Col>
                  <Col xs={3}>
                    <div className="spaces d-flex">
                      <LabelRequired label="Nhóm đơn mẫu" className="min-w-125px " />
                      <AutocompleteV2
                        options={[{ code: "tongHop", name: "Tổng hợp" }]}
                        value={{ code: "tongHop", name: "Tổng hợp" }}
                        name="nhomDonMau"
                        className="radius-3 spaces width-100 h-25"
                      />
                    </div>
                  </Col>
                  <Col xs={3}>
                    <TextField
                      className="spaces"
                      inputClassName="w-100"
                      label="Mã đơn mẫu"
                      name="maDonMau"
                      labelClassName="ms-0 min-w-95px"
                    />
                  </Col>
                  <Col xs={3}>
                    <TextField
                      className="spaces"
                      inputClassName="w-100"
                      label="Tên đơn mẫu"
                      name="tenDonMau"
                      labelClassName="ms-0 min-w-95px"
                    />
                  </Col>
                </Row>
                <div className="d-flex">
                  <div className="spaces width-20 border-end h-calc-vh-185 bg-white mr-2 radius-2 spaces">
                    <div className="text-pri fw-bold p-12 spaces">Cập nhật mẫu chỉ định thuốc</div>
                    <div className="spaces px-12 pb-12 pt-0 w-100 overflow-hidden">
                        <TextField
                          className="max-w-calc-20 spaces"
                          label="Ngày y lệnh"
                          name="ngayYLenh"
                          type="date"
                          labelClassName="ms-0 min-w-85px"
                        />
                    </div>
                    <SelectTree
                      className="w-100 h-100 border py-2 ps-4 border-top-0"
                      codeCollapses={codeCollapses}
                      handleChangeCollapsesCode={setCodeCollapses}
                      idSelected={idSelected}
                      handleChangeSelectId={setIdSelected}
                      selectTree={TreeChiDinhThuoc}
                    />
                  </div>
                  <div className="spaces width-80 bg-light radius-2 spaces">
                    <div className="bg-white radius-2 spaces py-10 px-10">
                      <Row className="spaces mt-4">
                        <Col xs={6}>
                          <TextField
                            className="spaces"
                            inputClassName="w-100"
                            label="Tên thuốc"
                            name="tenThuoc"
                            labelClassName="ms-0 min-w-95px"
                          />
                        </Col>
                      </Row>
                      <Row className="spaces mt-4">
                        <Col xs={6}>
                          <TextField
                            className="spaces"
                            inputClassName="w-100"
                            label="Hoạt chất"
                            name="hoatChat"
                            labelClassName="ms-0 min-w-95px"
                          />
                        </Col>
                        <Col xs={2}>
                          <TextField
                            className="spaces"
                            inputClassName="w-100"
                            label="Nồng độ"
                            name="nongDo"
                            labelClassName="ms-0 min-w-95px"
                          />
                        </Col>
                        <Col xs={2}>
                          <TextField
                            className="spaces"
                            inputClassName="w-100"
                            label="Đóng gói"
                            name="dongGoi"
                            labelClassName="ms-0 min-w-95px"
                          />
                        </Col>
                        <Col xs={2}>
                          <TextField
                            className="spaces"
                            inputClassName="w-100"
                            label="Đơn vị tính"
                            name="donViTinh"
                            labelClassName="ms-0 min-w-95px"
                          />
                        </Col>
                      </Row>
                      <Row className="spaces mt-4">
                        <Col xs={3}>
                          <TextField
                            className="spaces"
                            inputClassName="w-100"
                            label="Mỗi lần dùng"
                            name="moiLanDung"
                            labelClassName="ms-0 min-w-95px"
                          />
                        </Col>
                        <Col xs={3}>
                          <TextField
                            className="spaces"
                            inputClassName="w-100"
                            label="Đơn vị dùng"
                            name="donViDung"
                            labelClassName="ms-0 min-w-95px"
                          />
                        </Col>
                        <Col xs={2}>
                          <TextField
                            className="spaces"
                            inputClassName="w-100"
                            label="Số lần/ngày"
                            name="soLanNgay"
                            labelClassName="ms-0 min-w-95px"
                          />
                        </Col>
                        <Col xs={2}>
                          <TextField
                            className="spaces"
                            inputClassName="w-100"
                            label="Đường dùng"
                            name="duongDung"
                            labelClassName="ms-0 min-w-95px"
                          />
                        </Col>
                      </Row>
                      <Row className="spaces mt-4">
                        <Col xs={6}>
                          <TextField
                            className="spaces"
                            inputClassName="w-100"
                            label="HDSD"
                            name="huongDanSuDungThuoc"
                            labelClassName="ms-0 min-w-95px"
                          />
                        </Col>
                        <Col xs={2} className="d-flex">
                          <TextField
                            className="spaces text-center"
                            inputClassName="w-100"
                            label="Số ngày"
                            name="soNgay"
                            type="number"
                            labelClassName="ms-0 min-w-95px"
                          />
                        </Col>
                        <Col xs={2} className="d-flex">
                          <TextField
                            className="spaces text-center"
                            inputClassName="w-100"
                            label="Số lượng"
                            name="soLuong"
                            type="number"
                            labelClassName="ms-0 min-w-95px"
                          />
                        </Col>
                        <Col>
                          <Button className="btn-fill" disabled>
                            <i className="bi bi-plus"></i>Thêm
                          </Button>
                        </Col>
                      </Row>
                    </div>
                    <div className="spaces h-calc-vh-343 bg-white spaces pb-10 px-0 radius-2 mt-6 table-ke-thuoc">
                      <div className="spaces width-100 bg-light h-100">
                        <div className="spaces h-calc-165 bg-white">
                          <div className="min-h-180 spaces bg-white mb-6 h-calc-40">
                            <TableCustom<any>
                              verticalScroll
                              columns={columnsDSMauChiDinhThuoc}
                              data={DataDanhSachMauChiDinhThuoc}
                              selectionMode={SELECTION_MODE.SINGLE_NO_RADIO_BUTTON}
                              getSelectedRowsData={setSelectedRow}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="d-flex spaces py-0 h-22 px-10 text-white bg-blue">Phiếu chỉ định</div>
                          <div className="min-h-140 spaces bg-white">
                            <TableCustom
                              columns={DsThuocChiDinhColumn}
                              data={DataDanhSachMauChiDinhThuoc || []}
                              handleContextMenu={handleContextMenu}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer className="d-flex justify-content-between position-relative tien-don ps-2">
                <div>
                  <div>
                    <div className="d-flex mb-4px ">
                      <div>
                        <div className="spaces d-flex width-50 align-items-center">
                          <LabelRequired label="Tổng chi phí" className="ms-0 min-w-125px" />
                          <span className="text-danger me-3 fw-500">0</span>
                        </div>
                        <div className="spaces d-flex width-50 align-items-center">
                          <LabelRequired label="Tạm ứng" className="ms-0 min-w-125px" />
                          <span className="text-pri me-3 fw-500">0</span>
                        </div>
                      </div>
                      <div>
                        <div className="spaces d-flex width-50 align-items-center">
                          <LabelRequired label="BHYT" className="ms-0 min-w-125px" />
                          <span className="text-pri me-3 fw-500">0</span>
                        </div>
                        <div className="spaces d-flex width-50 align-items-center">
                          <LabelRequired label="Đã thu" className="ms-0 min-w-125px" />
                          <span className="text-pri me-3 fw-500">0</span>
                        </div>
                      </div>
                      <div>
                        <div className="spaces d-flex width-50 align-items-center">
                          <LabelRequired label="Nguồn khác" className="ms-0 min-w-125px" />
                          <span className="text-pri me-3 fw-500">0</span>
                        </div>
                        <div className="spaces d-flex width-50 align-items-center">
                          <LabelRequired label="Miễn giảm" className="ms-0 min-w-125px" />
                          <span className="text-pri me-3 fw-500">0</span>
                        </div>
                      </div>
                      <div>
                        <div className="spaces d-flex width-50 align-items-center">
                          <LabelRequired label="Bệnh nhân" className="ms-0 min-w-125px" />
                          <span className="text-pri me-3 fw-500">0</span>
                        </div>
                        <div className="spaces d-flex width-50 align-items-center">
                          <LabelRequired label="Còn nợ" className="ms-0 min-w-125px" />
                          <span className="text-warning me-3 fw-500">0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex gap-3">
                  <Button className="btn-fill mr-5" onClick={() => setOpenDanhSachMauDialog(true)}>
                    Đơn thuốc mẫu
                  </Button>
                  <Button className="btn-fill">
                    <IconDoubleCheck /> Cấp toa cho về
                  </Button>
                  <Button className="btn-outline">
                    <i className="bi bi-printer" /> In
                  </Button>
                  <Button className="btn-fill">
                    <IconButtonSave /> Lưu
                  </Button>
                  {/* <Button className="btn-fill mr-5" onClick={() => setOpenLuuMauThuocMoiDialog(true)}>
                    Lưu mẫu chỉ định mới
                  </Button> */}
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
          data={dropListChiDinhThuoc}
          target={contextMenu}
        />
      )}
      <ConfirmDialog
        className="z-index-1060"
        show={shouldOpenConfirmDialog}
        title="Thông báo"
        message="Bạn có chắc chắn xóa thuốc này không ?"
        yes="Xác nhận"
        close="Đóng"
        onCloseClick={() => setShouldOpenConfirmDialog(false)}
        onYesClick={() => handleDelete()}
      />
      {shouldOpenGhiChuPopup && (
        <ModalEditOneColumn code="ghiChu" name="Ghi chú" handleClose={() => setShouldOpenGhiChuPopup(false)} />
      )}
    </Modal>
  );
};

export default PageChiDinhThuoc;
