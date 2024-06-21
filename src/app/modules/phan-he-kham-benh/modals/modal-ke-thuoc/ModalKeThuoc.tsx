import { Form, Formik, FormikErrors } from "formik";
import {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState
} from "react";
import {
  Button,
  Col,
  Modal,
  Row
} from "react-bootstrap";
import * as Yup from "yup";
import AutocompleteV2 from "../../../component/AutocompleteObjectV2";
import LabelRequired from "../../../component/LabelRequired";
import TextField from "../../../component/TextField";
import {
  DEFAULT_PAGE_INDEX,
  SELECTION_MODE
} from "../../../utils/Constant";
import {
  columnsDSMauChiDinhThuoc,
  columnsPhieuChiDinh
} from "../../columns/tab-thuoc/ColumnTabThuoc";
import DanhSachDichVu from "../../components/modal-ke-thuoc/DanhSachDichVu";
import ModalLuuMauThuocMoi from "../../components/modal-ke-thuoc/ModalLuuMauThuocMoi";
import ModalMauChiDinhThuoc from "../../components/modal-ke-thuoc/ModalMauChiDinhThuoc";
import { CHON_KHO_THUOC } from "../../constants/phan-he-kham-benh/ConstantPhanHeKhamBenh";
import { TableCustom } from "../../../component/table/table-custom/TableCustom";

interface Props {
  open: boolean;
  handleClose: Dispatch<SetStateAction<boolean>>;
}

const ModalKeThuoc: FC<Props> = (props) => {
  let { open, handleClose } = props;
  const [page, setPage] = useState<number>(DEFAULT_PAGE_INDEX);
  const [rowsPerPage, setRowsPerPage] = useState<number>(15);
  const [selectedRow, setSelectedRow] = useState<any>();
  let [objectSearch, setObjectSearch] = useState<any>();
  let [shouldOpenFilterSearch, setShouldOpenFilterSearch] =
    useState<boolean>(false);

  const [openLuuMauThuocMoiDialog, setOpenLuuMauThuocMoiDialog] =
  useState<boolean>(false);
  const [openDanhSachMauDialog, setOpenDanhSachMauDialog] =
  useState<boolean>(false);

  const getListBenhNhan = async () => {};

  useEffect(() => {
    if (!shouldOpenFilterSearch) {
      setObjectSearch({});
    }
    getListBenhNhan();
  }, [page, rowsPerPage, shouldOpenFilterSearch]);
  
  const handleSubmit = async (values: any) => {
    // handleClose(false);
  };

  const validationSchema = Yup.object().shape({});

  return (
    <Modal className="modal-thuoc" dialogClassName="h-modal" size="xl" show={open} animation centered>
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
          <Form id="form-thuoc">
            <div className="thuoc-dialog">
              <Modal.Header className="py-3 header-modal">
                <Modal.Title className="text-pri">
                  Cập nhật mẫu chỉ định thuốc
                </Modal.Title>
                <button
                  className="btn-close"
                  onClick={() => handleClose(false)}
                ></button>
              </Modal.Header>
              <Modal.Body className="py-16 px-24 spaces overflow-hidden">
                <Row>
                  <Col xs={3} className="ms-n10">
                    <TextField
                      className="ps-10 spaces mr-5   w-100"
                      label="Ngày y lệnh"
                      name="ngayChuanDoan"
                      type="date"
                      labelClassName="ms-0 min-w-80px"
                    />
                  </Col>
                  <Col xs={9} className="d-flex gap-2">
                    <TextField
                      
                      label="Người y lệnh"
                      name="ngayChuanDoan"
                      type="date  spaces width-40"
                      labelClassName="ms-0 min-w-90px"
                    />
                    <div className="spaces w-60 d-flex gap-4">
                    <TextField
                      
                      label="Chẩn đoán"
                      name="maDonMau  spaces width-40"
                      labelClassName="ms-0 min-w-100px"
                    />
                    <TextField
                      
                      name="maDonMau  spaces width-60"
                      labelClassName="ms-0 min-w-80px"
                    />
                    </div>
                  </Col>
                </Row>
                <Row>
                </Row>
                <Row className="spaces mt-4">
                  <Col xs={3} className="ms-n10">
                    <div className="table-left">
                      <AutocompleteV2
                        options={CHON_KHO_THUOC}
                        name="tenThuoc"
                        isClearable={false}
                        className="autocomplete-custom-tiep-nhan radius spaces h-26 ps-10"
                      />
                      <DanhSachDichVu />
                    </div>
                  </Col>
                  <Col xs="9">
                    <div className="d-flex mb-4px gap-2">
                      <div className="spaces width-40 d-flex">
                        <LabelRequired
                          className="ms-0 min-w-90px"
                          label="Tên thuốc"
                        />
                        <TextField
                          
                          name="maDonMau"
                          className="spaces width-100"
                          labelClassName="ms-0 min-w-100px"
                        />
                      </div>
                      <div className="d-flex spaces width-60 gap-4">
                        <TextField
                          
                          label="Bệnh kèm theo"
                          name="maDonMau"
                          className="spaces width-40"
                          labelClassName="ms-0 min-w-100px"
                        />
                        <TextField
                          
                          name="maDonMau"
                          className="spaces width-60"
                          labelClassName="ms-0 min-w-80px"
                        />
                      </div>
                    </div>
                    <div className="d-flex mb-4px gap-2">
                      <div className="spaces width-20">
                        <TextField
                          
                          label="Đợt dùng"
                          name="nongDo"
                          labelClassName="ms-0 min-w-90px"
                        />
                      </div>
                      <div className="spaces width-20">
                        <TextField
                          
                          label="Từ ngày"
                          name="dongGoi"
                          labelClassName="ms-0 min-w-60px"
                        />
                      </div>
                      <div className="spaces width-30">
                        <TextField
                          
                          label="Đến ngày"
                          name="donViTinh"
                          labelClassName="ms-0 min-w-100px"
                        />
                      </div>
                      <div className="spaces width-30">
                        <TextField
                          
                          label="Ngày tái khám"
                          name="duongDung"
                          labelClassName="ms-0 min-w-100px"
                        />
                      </div>
                    </div>
                    <div className="d-flex mb-4px gap-2">
                      <div className="spaces width-40">
                        <TextField
                          
                          label="Lời dặn BS"
                          name="moiLanDung"
                          labelClassName="ms-0 min-w-90px"
                        />
                      </div>
                      <div className="d-flex spaces width-60 gap-4">
                        <TextField
                          className=" w-100 spaces width-28"
                          label="Sáng"
                          name="soLanNgay"
                          labelClassName="ms-0 min-w-100px"
                        />
                        <TextField
                          className=" w-100 spaces width-18"
                          label="Trưa"
                          name="soLanNgay"
                          labelClassName="ms-0 min-w-40px"
                        />
                        <TextField
                          className=" w-100 spaces width-18"
                          label="Chiều"
                          name="soLanNgay"
                          labelClassName="ms-0 min-w-40px"
                        />
                        <TextField
                          className=" w-100 spaces width-18"
                          label="Tối"
                          name="soLanNgay"
                          labelClassName="ms-0 min-w-40px"
                        />
                        <TextField
                          className=" w-100 spaces width-18"
                          label="Số ngày"
                          name="soNgay"
                          labelClassName="ms-0 min-w-60px"
                        />
                      </div>
                    </div>
                    <div className="d-flex mb-4px gap-2">
                      <div className="spaces width-40 d-flex">
                        <LabelRequired
                          className="ms-0 min-w-90px"
                          label="HDSD"
                        />
                        <TextField
                          
                          name="maDonMau"
                          className="spaces width-100"
                          labelClassName="ms-0 min-w-100px"
                        />
                      </div>
                      <div className="spaces width-60 d-flex">
                        <TextField
                          
                          label="Số lượng"
                          name="soLuong"
                          className="spaces width-46 me-2"
                          labelClassName="ms-0 min-w-100px"
                        />
                        <Button className="btn-fill spaces h-26">Thêm</Button>
                      </div>
                    </div>
                    <div className="table-right">
                      <TableCustom<any>
                        verticalScroll
                        columns={columnsDSMauChiDinhThuoc}
                        data={[]}
                        selectionMode={SELECTION_MODE.SINGLE_NO_RADIO_BUTTON}
                        getSelectedRowsData={setSelectedRow}
                        className="mt-3"
                        minHeight={250}
                      />
                    </div>
                    <div className="fw-500 fs-5">Phiếu chỉ định</div>
                    <div className="table-right">
                      <TableCustom<any>
                        verticalScroll
                        columns={columnsPhieuChiDinh}
                        data={[]}
                        selectionMode={SELECTION_MODE.SINGLE_NO_RADIO_BUTTON}
                        getSelectedRowsData={setSelectedRow}
                        className="mt-3"
                        minHeight={250}
                      />
                    </div>
                  </Col>
                </Row>
              </Modal.Body>
              <Modal.Footer className="d-flex justify-content-between">
                <div>
                  <div>
                    <div className="d-flex mb-4px ">
                      <div className="spaces d-flex width-50 align-items-center">
                        <LabelRequired
                          label="Đã thu"
                          className="ms-0 min-w-125px"
                        />
                        <span className="text-cyan me-3">18090</span>
                      </div>
                      <div className="spaces d-flex width-50 align-items-center">
                        <LabelRequired
                          label="BHYT"
                          className="ms-0 min-w-125px"
                        />
                        <span className="text-cyan me-3">1890</span>
                      </div>
                      <div className="spaces d-flex width-50 align-items-center">
                        <LabelRequired
                          label="Nguồn khác"
                          className="ms-0 min-w-125px"
                        />
                        <span className="text-cyan me-3">10</span>
                      </div>
                      <div className="spaces d-flex width-50 align-items-center">
                        <LabelRequired
                          label="Còn nợ"
                          className="ms-0 min-w-125px"
                        />
                        <span className="text-cyan me-3">10</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex mb-4px ">
                      <div className="spaces d-flex width-50 align-items-center">
                        <LabelRequired
                          label="Tạm ứng"
                          className="ms-0 min-w-125px"
                        />
                        <span className="text-cyan me-3">18090</span>
                      </div>
                      <div className="spaces d-flex width-50 align-items-center">
                        <LabelRequired
                          label="Tổng chi phí"
                          className="ms-0 min-w-125px"
                        />
                        <span className="text-cyan me-3">1890</span>
                      </div>
                      <div className="spaces d-flex width-50 align-items-center">
                        <LabelRequired
                          label="Miễn giảm"
                          className="ms-0 min-w-125px"
                        />
                        <span className="text-cyan me-3">10</span>
                      </div>
                      <div className="spaces d-flex width-50 align-items-center" />
                    </div>
                  </div>
                </div>
                <div className="d-flex gap-3">
                  <Button
                    className="btn-fill mr-5"
                    onClick={() => setOpenDanhSachMauDialog(true)}
                  >
                    Đơn thuốc mẫu/Đơn thuốc cũ
                  </Button>
                  <Button
                    className="btn-fill mr-5"
                  >
                    Cấp toa cho về
                  </Button>
                  <Button
                    className="btn-fill mr-5"
                  >
                    Lưu
                  </Button>
                  <Button
                    className="btn-fill mr-5"
                    onClick={() => setOpenLuuMauThuocMoiDialog(true)}
                  >
                    Lưu mẫu chỉ định mới
                  </Button>
                </div>
              </Modal.Footer>
            </div>
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
    </Modal>
  );
};

export default ModalKeThuoc;
