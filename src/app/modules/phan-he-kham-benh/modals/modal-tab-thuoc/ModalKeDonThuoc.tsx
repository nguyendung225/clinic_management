import { Field, Form, Formik, FormikErrors } from "formik";
import {
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  Button,
  Col,
  Modal,
  Row
} from "react-bootstrap";
import * as Yup from "yup";
import { AppContext } from "../../../appContext/AppContext";
import { IconButtonSave } from "../../../component/IconSvg";
import LabelRequired from "../../../component/LabelRequired";
import TextField from "../../../component/TextField";
import {
  DEFAULT_PAGE_INDEX,
  DEFAULT_TOTAL_ELEMENTS,
  DEFAULT_TOTAL_PAGES,
} from "../../../utils/Constant";
import ModalLuuMauThuocMoi from "../../components/modal-ke-thuoc/ModalLuuMauThuocMoi";
import ModalMauChiDinhThuoc from "../../components/modal-ke-thuoc/ModalMauChiDinhThuoc";
import GridThuoc from "../../components/modal-tab-thuoc/GridThuoc";

interface Props {
  open: boolean;
  handleClose: Dispatch<SetStateAction<boolean>>;
}

const ModalKeDonThuoc: FC<Props> = (props) => {
  let { open, handleClose } = props;
  const [page, setPage] = useState<number>(DEFAULT_PAGE_INDEX);
  const [rowsPerPage, setRowsPerPage] = useState<number>(15);
  let [objectSearch, setObjectSearch] = useState<any>();
  const [openDanhSachMauDialog, setOpenDanhSachMauDialog] =
    useState<boolean>(false);
  const [openLuuMauThuocMoiDialog, setOpenLuuMauThuocMoiDialog] =
    useState<boolean>(false);
  let [shouldOpenFilterSearch, setShouldOpenFilterSearch] =
    useState<boolean>(false);
  type ZIndex = string | undefined;
  const [zIndex, setZIndex] = useState<ZIndex>(undefined);
  const { setIsLoading } = useContext(AppContext);
  const [bacSiData, setBacSiData] = useState({
    data: [],
    totalElements: DEFAULT_TOTAL_ELEMENTS,
    totalPages: DEFAULT_TOTAL_PAGES,
  });

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
    <>
      <Modal
        className="modal-thuoc dialog-background"
        size="xl"
        show={open}
        animation
        centered
        style={{ zIndex: `${zIndex}` }}
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
            <Form id="form-thuoc">
              <div className="thuoc-dialog">
                <Modal.Header className="py-3 header-modal">
                  <Modal.Title className="text-pri">Kê đơn thuốc </Modal.Title>
                  <button
                    className="btn-close"
                    onClick={() => handleClose(false)}
                  ></button>
                </Modal.Header>
                <Modal.Body className="py-16 px-24 spaces">
                  <div className="chiDinhThuoc box-shadow-36">
                    <div className="flex-1 flex flex-column">
                      <Row className="m-0">
                        <Col sm="8" className="box-shadow-36 spaces p-8">
                          <div className="d-flex mb-4px ">
                            <div className="spaces width-50">
                              <TextField
                                
                                label="Bệnh chính"
                                name="benhChinh"
                                labelClassName="ms-0 min-w-125px"
                              />
                            </div>
                            <div className="spaces width-50">
                              <TextField
                                label="Ngày chỉ định"
                                name="ngayChiDinh"
                                type="date"
                                labelClassName="ps-2 min-w-125px"
                                className="text-uppercase "
                              />
                            </div>
                          </div>
                          <div className="d-flex mb-4px ">
                            <div className="spaces width-50">
                              <TextField
                                
                                label="Bệnh phụ"
                                name="benhPhu"
                                labelClassName="ms-0 min-w-125px"
                              />
                            </div>
                            <div className="spaces width-50">
                              <TextField
                                label="Số ngày hẹn TK"
                                name="soNgayHenTaiKham"
                                type="date"
                                labelClassName="ps-2 min-w-125px"
                                className="text-uppercase "
                              />
                            </div>
                          </div>
                          <div className="d-flex mb-4px ">
                            <div className="spaces width-50">
                              <TextField
                                
                                label="Ngày chẩn đoán"
                                name="ngayChuanDoan"
                                type="date"
                                labelClassName="ms-0 min-w-125px"
                              />
                            </div>
                            <div className="spaces width-50">
                              <TextField
                                label="Ngày dùng"
                                name="ngayDung"
                                type="date"
                                labelClassName="ps-2 min-w-125px"
                                className="text-uppercase "
                              />
                            </div>
                          </div>
                          <div className="d-flex mb-4px ">
                            <div className="spaces width-50">
                              <TextField
                                
                                label="Bác sĩ điều trị"
                                name="bacSi"
                                labelClassName="ms-0 min-w-125px"
                              />
                            </div>
                            <div className="spaces width-50">
                              <TextField
                                label="Lời dặn bác sĩ"
                                name="LoiDan"
                                labelClassName="ps-2 min-w-125px"
                                className="text-uppercase "
                              />
                            </div>
                          </div>
                          <div className="d-flex mb-4px ">
                            <div className="ps-2 min-w-125px"></div>
                            <div className="spaces d-flex width-50">
                              <div className="spaces d-flex width-100">
                                <label className="me-4 d-flex align-items-center">
                                  <Field type="checkbox" name="coThai" />
                                  &nbsp;Có thai
                                </label>
                                <label className="me-4 d-flex align-items-center">
                                  <Field
                                    type="checkbox"
                                    name="daCapPhieuHenKham"
                                  />
                                  &nbsp;Đã cấp phiếu hẹn khám
                                </label>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col sm="4" className="box-shadow-36 spaces p-8">
                          <div className="d-flex justify-content-center">
                            <LabelRequired
                              label="Sinh hiệu"
                              className="ms-0 min-w-125px fs-4"
                            />
                          </div>
                          <div className="d-flex mb-4px ">
                            <div className="spaces d-flex width-50">
                              <LabelRequired
                                label="Mạch (lần/phút)"
                                className="ms-0 min-w-125px"
                              />
                              <span className="text-cyan me-2">180/90</span>
                            </div>
                            <div className="spaces d-flex width-50">
                              <LabelRequired
                                label="SP02 (%)"
                                className="ms-0 min-w-125px"
                              />
                              <span className="text-cyan me-2">180/90</span>
                            </div>
                          </div>
                          <div className="d-flex mb-4px ">
                            <div className="spaces d-flex width-50">
                              <LabelRequired
                                label="Nhiệt độ (°C)"
                                className="ms-0 min-w-125px"
                              />
                              <span className="text-cyan me-2">37</span>
                            </div>
                            <div className="spaces d-flex width-50">
                              <LabelRequired
                                label="Chiều cao (cm)"
                                className="ms-0 min-w-125px"
                              />
                              <span className="text-cyan me-2">180</span>
                            </div>
                          </div>
                          <div className="d-flex mb-4px ">
                            <div className="spaces d-flex width-50">
                              <LabelRequired
                                label="Nhịp thở (lần/phút)"
                                className="ms-0 min-w-125px"
                              />
                              <span className="text-cyan me-2">89</span>
                            </div>
                            <div className="spaces d-flex width-50">
                              <LabelRequired
                                label="Cân nặng (kg)"
                                className="ms-0 min-w-125px"
                              />
                              <span className="text-cyan me-2">80</span>
                            </div>
                          </div>
                          <div className="d-flex mb-4px ">
                            <div className="spaces d-flex width-50">
                              <LabelRequired
                                label="Huyết áp (mmHg)"
                                className="ms-0 min-w-125px"
                              />
                              <span className="text-cyan me-2">89</span>
                            </div>
                            <div className="spaces d-flex width-50">
                              <LabelRequired
                                label="BMI (kg/m²)"
                                className="ms-0 min-w-125px"
                              />
                              <span className="text-cyan me-2">18</span>
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <Row className="flex-1 m-0">
                        <GridThuoc />
                      </Row>
                    </div>
                  </div>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                  <div>
                    <div>
                      <div className="d-flex mb-4px ">
                        <div className="spaces d-flex width-50 align-items-center">
                          <LabelRequired
                            label="Tổng chi phí"
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
                            label="Miễn giảm"
                            className="ms-0 min-w-125px"
                          />
                          <span className="text-cyan me-3">10</span>
                        </div>
                        <div className="spaces d-flex width-50 align-items-center">
                          <LabelRequired
                            label="Nguồn khác"
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
                            label="Còn nợ"
                            className="ms-0 min-w-125px"
                          />
                          <span className="text-cyan me-3">10</span>
                        </div>
                        <div className="spaces d-flex width-50 align-items-center">
                          <LabelRequired
                            label="Bệnh nhân"
                            className="ms-0 min-w-125px"
                          />
                          <span className="text-cyan me-3">10</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex gap-3">
                    <Button className="btn-fill" type="submit">
                    <IconButtonSave/>
                      <span>Lưu</span>
                    </Button>
                    <Button className="btn-fill mr-5">In phiếu thuốc</Button>
                    {/* <DropdownButton
                      id="dropdown-basic-button"
                      title={
                        <div>
                          Đơn mẫu thuốc
                          <i className="ps-1 bi bi-chevron-down m-0"></i>
                        </div>
                      }
                      className="dropdown-btn"
                    >
                      <Dropdown.Item
                        onClick={() => {
                          setZIndex("1");
                          setOpenDanhSachMauDialog(true);
                        }}
                      >
                        Danh sách các mẫu đã tạo
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          setZIndex("1");
                          setOpenLuuMauThuocMoiDialog(true);
                        }}
                      >
                        Lưu vào mẫu mới
                      </Dropdown.Item>
                    </DropdownButton> */}
                    <Button
                      className="btn-fill mr-5"
                    >
                      Đơn thuốc mẫu
                    </Button>
                  </div>
                </Modal.Footer>
              </div>
            </Form>
          )}
        </Formik>
      </Modal>
      {openDanhSachMauDialog && (
        <ModalMauChiDinhThuoc
          open={openDanhSachMauDialog}
          handleClose={() => {
            setOpenDanhSachMauDialog(false);
            setZIndex("1055");
          }}
        />
      )}
      {openLuuMauThuocMoiDialog && (
        <ModalLuuMauThuocMoi
          open={openLuuMauThuocMoiDialog}
          handleClose={() => {
            setOpenLuuMauThuocMoiDialog(false);
            setZIndex("1055");
          }}
        />
      )}
    </>
  );
};

export default ModalKeDonThuoc;
