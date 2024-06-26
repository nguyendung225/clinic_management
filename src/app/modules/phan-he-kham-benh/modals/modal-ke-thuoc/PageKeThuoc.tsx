import { Form, Formik, FormikErrors } from "formik";
import { Dispatch, FC, SetStateAction, useContext, useState } from "react";
import { Button, Col, Dropdown, FormCheck, Modal, Row } from "react-bootstrap";
import * as Yup from "yup";
import AutocompleteV2 from "../../../component/AutocompleteObjectV2";
import { IconBack, IconButtonSave, IconDoubleCheck } from "../../../component/IconSvg";
import LabelRequired from "../../../component/LabelRequired";
import TextField from "../../../component/TextField";
import { DataDanhSachThuoc, OptionBenhKemTheo } from "../../components/FakeData";
import InfoPatientRight from "../../components/InfoPatientRight";
import ModalBenhKemTheo from "../../components/ModalBenhKemTheo";
import ModalLuuMauThuocMoi from "../../components/modal-ke-thuoc/ModalLuuMauThuocMoi";
import ModalMauChiDinhThuoc from "../../components/modal-ke-thuoc/ModalMauChiDinhThuoc";
import { ThuocColumns } from "../../components/modal-tab-thuoc/ThuocColumns";
import { constTypeBenhKemTheo } from "../../constants/KhamBenh";
import { CHON_KHO_THUOC } from "../../constants/phan-he-kham-benh/ConstantPhanHeKhamBenh";
import { PhanHeTiepDonContext } from "../../contexts/PhanHeTiepDonContext";
import { ThuocInfo } from "../../models/DSBenhNhanKhamBenhModels";
import { TableCustom } from "../../../component/table/table-custom/TableCustom";
import ModalDonThuocCu from "../../components/modal-ke-thuoc/ModalDonThuocCu";
import { toast } from "react-toastify";

interface Props {
  open: boolean;
  handleClose: Dispatch<SetStateAction<boolean>>;
}

const PageKeThuoc: FC<Props> = (props) => {
  let { open, handleClose } = props;
  const { benhNhanInfo } = useContext(PhanHeTiepDonContext);

  const [openLuuMauThuocMoiDialog, setOpenLuuMauThuocMoiDialog] = useState<boolean>(false);
  const [openDanhSachMauDialog, setOpenDanhSachMauDialog] = useState<boolean>(false);
  const [openModalBenhKemTheo, setOpenModalBenhKemTheo] = useState<boolean>(false);
  const [openModalDonThuocCu, setOpenModalDonThuocCu] = useState<boolean>(false);

  const handleSubmit = async (values: any) => {
    // handleClose(false);
  };

  const validationSchema = Yup.object().shape({});

  return (
    <Modal
      className="modal-thuoc page-full"
      fullscreen
      dialogClassName="h-modal"
      size="xl"
      show={open}
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
            <div className="thuoc-dialog h-100">
              <Modal.Header className="py-3 header-modal">
                <div className="d-flex gap-6">
                  <div className="d-flex align-items-center gap-3" onClick={() => handleClose(false)}>
                    <IconBack />
                    <span className="fw-500">Quay lại</span>
                  </div>
                  <div className="d-flex gap-4">
                    <Dropdown className="dropdown-btn menu-icon">
                      <Dropdown.Toggle className="btn-fill">
                        <i className="bi bi-caret-down-fill"></i>
                        Đơn thuốc mẫu
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>
                          <div className="ps-5 spaces line-height-30">Lưu vào mẫu mới</div>
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => setOpenDanhSachMauDialog(true)}>
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
                    <Button className="btn-fill" onClick={() => setOpenModalDonThuocCu(true)}>
                      <i className="bi bi-caret-down-fill"></i>
                      Đơn thuốc cũ
                    </Button>
                    <Button className="btn-fill" onClick={() => toast.warning("Không tìm thấy cấu hình phác đồ cho các mã bệnh : V16")}>
                      <i className="bi bi-caret-down-fill"></i>
                      Sử dụng phác đồ
                    </Button>
                    <Button className="btn-fill spaces min-w-76">Kê vật tư</Button>
                  </div>
                </div>
                {benhNhanInfo?.hoTen && <InfoPatientRight benhNhanInfo={benhNhanInfo} />}
              </Modal.Header>
              <Modal.Body className="py-6 px-0 spaces overflow-hidden spaces h-calc-vh-154">
                <div className="bg-white radius-2 spaces py-10 px-10">
                  <Row>
                    <Col xs={2}>
                      <TextField
                        inputClassName="w-100"
                        label="Ngày y lệnh"
                        name="ngayYLenh"
                        type="date"
                        labelClassName="ms-0 min-w-95px"
                      />
                    </Col>
                    <Col xs={3} className="d-flex ps-4 pe-0">
                      <LabelRequired label="Chẩn đoán" className="min-w-90px" />
                      <TextField
                        className="spaces w-100"
                        inputClassName="w-100"
                        name="chanDoan"
                        labelClassName="ms-0 min-w-95px"
                      />
                    </Col>
                    <Col xs={7} className="ps-0">
                      <TextField
                        // className="spaces w-100"
                        inputClassName="w-100"
                        name="chanDoan"
                        labelClassName="ms-0 min-w-95px"
                      />
                    </Col>
                  </Row>
                  <Row className="spaces mt-4">
                    <Col xs={6} className="d-flex">
                      <u className="text-pri" onClick={() => setOpenModalBenhKemTheo(true)}>
                        <LabelRequired label="Bệnh kèm theo" className="min-w-95px text-pri" />
                      </u>
                      <TextField
                        className="w-100 d-flex flex-column align-items-start"
                        inputClassName="flex-auto spaces h-25 radius-3px pre-line"
                        name="benhKemTheo"
                        labelClassName="ms-0 min-w-145px"
                      />
                    </Col>
                    <Col xs={6}>
                      <TextField
                        className="spaces w-100"
                        inputClassName="w-100"
                        label="Ghi chú"
                        name="ghiChu"
                        labelClassName="ms-0 min-w-95px"
                      />
                    </Col>
                  </Row>
                  <Row className="spaces mt-4">
                    <Col xs={3} className="d-flex">
                      <LabelRequired label="Kho thuốc" className="min-w-95px" />
                      <AutocompleteV2
                        options={CHON_KHO_THUOC}
                        name="khoThuoc"
                        isClearable={false}
                        className="autocomplete-custom-tiep-nhan radius spaces h-26"
                      />
                    </Col>
                    <Col xs={3}>
                      <TextField
                        className="spaces w-100"
                        inputClassName="w-100"
                        label="BS điều trị"
                        name="bacSiDieuTri"
                        labelClassName="ms-0 min-w-95px"
                      />
                    </Col>
                    <Col xs={6}>
                      <TextField
                        className="spaces w-100"
                        inputClassName="w-100"
                        label="Lời dặn BS"
                        name="loiDanCuaBacSi"
                        labelClassName="ms-0 spaces min-w-85"
                      />
                    </Col>
                  </Row>
                  <Row className="spaces mt-4">
                    <Col xs={3}>
                      <TextField
                        className="spaces w-100"
                        inputClassName="w-100"
                        label="Đợt dùng"
                        name="dotDung"
                        labelClassName="ms-0 min-w-95px"
                      />
                    </Col>
                    <Col xs={3}>
                      <TextField
                        className="spaces w-100"
                        inputClassName="w-100"
                        label="Ngày tái khám"
                        name="ngayTaiKham"
                        type="date"
                        labelClassName="ms-0 spaces min-w-95"
                      />
                    </Col>
                  </Row>
                </div>
                <div className="bg-white radius-2 spaces py-10 px-10 mt-6">
                  <Row className="spaces mt-4">
                    <Col xs={9}>
                      <TextField
                        className="spaces w-100"
                        inputClassName="w-100"
                        label="Tên thuốc"
                        name="tenThuoc"
                        labelClassName="ms-0 min-w-95px"
                      />
                    </Col>
                    <Col>
                      <TextField
                        className="spaces w-100"
                        inputClassName="w-100"
                        label="Đơn vị"
                        name="donVi"
                        labelClassName="ms-0 min-w-56 spaces"
                      />
                    </Col>
                    <Col>
                      <TextField
                        className="spaces w-100"
                        inputClassName="w-100"
                        label="SL khả dụng"
                        name="slKhaDung"
                        labelClassName="ms-0 spaces min-w-85"
                      />
                    </Col>
                  </Row>
                  <div className="d-flex spaces w-100 gap-4 mt-4">
                    <div className="spaces width-18">
                      <TextField
                        inputClassName="w-100"
                        label="Số ngày"
                        name="soNgay"
                        labelClassName="ms-0 min-w-95px"
                      />
                    </div>
                    <div className="spaces width-12">
                      <TextField
                        inputClassName="w-100"
                        label="SL sáng"
                        name="slSang"
                        labelClassName="ms-0 min-w-70px"
                      />
                    </div>
                    <div className="spaces width-12">
                      <TextField
                        inputClassName="w-100"
                        label="SL trưa"
                        name="slTrua"
                        labelClassName="ms-0 min-w-70px"
                      />
                    </div>
                    <div className="spaces width-12">
                      <TextField
                        inputClassName="w-100"
                        label="SL chiều"
                        name="slChieu"
                        labelClassName="ms-0 min-w-70px"
                      />
                    </div>
                    <div className="spaces width-12">
                      <TextField inputClassName="w-100" label="SL tối" name="slToi" labelClassName="ms-0 min-w-70px" />
                    </div>
                    <div className="spaces w-input-ke-thuoc">
                      <TextField
                        inputClassName="w-100"
                        label="Số lượng"
                        name="soLuong"
                        labelClassName="ms-0 min-w-70px "
                      />
                    </div>
                    <div className="spaces width-27 p-input-ke-thuoc">
                      <TextField
                        inputClassName="w-100"
                        label="Đường dùng"
                        name="duongDung"
                        labelClassName="ms-0 min-w-95px"
                      />
                    </div>
                  </div>
                  <Row className="spaces mt-4 d-flex flex-nowrap">
                    <Col xs={5}>
                      <TextField
                        className="spaces w-100"
                        inputClassName="w-100"
                        label="Liều dùng"
                        name="lieuDung"
                        placeholder="Liều dùng/lần , Số lần/ngày"
                        labelClassName="ms-0 min-w-95px"
                      />
                    </Col>
                    <Col className="spaces flex-auto">
                      <TextField
                        className="spaces w-100"
                        inputClassName="w-100"
                        label="Hướng dẫn sử dụng"
                        name="huongDanSuDungThuoc"
                        placeholder="Khoảng cách dùng, thời điểm dùng, lưu ý"
                        labelClassName="ms-0 min-w-140 spaces"
                      />
                    </Col>
                    <Col className="spaces min-w-217">
                      <div className="d-flex gap-4">
                        <Button className="btn-fill">
                          <i className="bi bi-check-lg"></i> Xác nhận
                        </Button>
                        <Button className="btn-outline">
                          <i className="bi bi-x-lg"></i> Hủy bỏ
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="spaces h-calc-vh-442 bg-white spaces py-10 px-0 radius-2 mt-6 table-ke-thuoc">
                  <TableCustom<ThuocInfo> data={DataDanhSachThuoc} columns={ThuocColumns} maxHeight={300}/>
                </div>
              </Modal.Body>
              <Modal.Footer className="d-flex justify-content-between position-relative tien-don spaces pl-130 bottom-10 pt-4">
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
                  {/* <Button className="btn-fill mr-5" onClick={() => setOpenDanhSachMauDialog(true)}>
                    Đơn thuốc mẫu/Đơn thuốc cũ
                  </Button> */}
                  <Button className="btn-fill min-w-130px">
                    <IconDoubleCheck /> Cấp toa cho về
                  </Button>
                  <Button className="btn-outline min-w-100px">
                    <i className="bi bi-printer" /> In
                  </Button>
                  <Button className="btn-fill min-w-100px">
                    <IconButtonSave /> Lưu lại
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
      {openLuuMauThuocMoiDialog && (
        <ModalLuuMauThuocMoi
          open={openLuuMauThuocMoiDialog}
          handleClose={() => {
            setOpenLuuMauThuocMoiDialog(false);
          }}
        />
      )}
      {openDanhSachMauDialog && (
        <ModalMauChiDinhThuoc
          open={openDanhSachMauDialog}
          handleClose={() => {
            setOpenDanhSachMauDialog(false);
          }}
        />
      )}
      {openModalDonThuocCu && (
        <ModalDonThuocCu
          open={openModalDonThuocCu}
          handleClose={() => {
            setOpenModalDonThuocCu(false);
          }}
        />
      )}
    </Modal>
  );
};

export default PageKeThuoc;
