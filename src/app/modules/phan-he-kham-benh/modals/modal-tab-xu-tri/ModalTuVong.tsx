import { Form, Formik, useFormikContext } from "formik";
import moment from "moment";
import { Button, Col, FormCheck, FormGroup, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "react-bootstrap";
import * as Yup from "yup";
import AutocompleteV2 from "../../../component/AutocompleteObjectV2";
import { IconButtonSave } from "../../../component/IconSvg";
import LabelRequired from "../../../component/LabelRequired";
import { ObjectSelectAutocomplete } from "../../../phan-he-tiep-nhan-thanh-toan/models/PhanHeTiepNhanModel";
import { OptionBenhKemTheo } from "../../components/FakeData";
import { optionNguyenNhanTuVong, optionThoiDiemTuVong } from "../../constants/KhamBenh";
import TextField from "../../../component/TextField";
type Props = {
  open: boolean;
  handleCloseModal: () => void;
};
interface ITuVong {
  thoiGianRaVien: string;
  thoiDiemTuVong: string;
  capGiayChungTu: boolean;
  thoiGianTuVong: string;
  nguyenNhan: ObjectSelectAutocomplete;
  nguyenNhanChinh: ObjectSelectAutocomplete;
  khamNghiemTuThi: boolean;
  chanDoanGiaiPhauTuThi: ObjectSelectAutocomplete | null;
  quaTrinhBenhLy: string;
  tomTatKetQuaCLS: string;
  phuongPhapDieuTri: string;
  loiDanBacSi?: string;
}

const initialValues = {
  thoiGianRaVien: "",
  thoiDiemTuVong: "",
  capGiayChungTu: false,
  thoiGianTuVong: "",
  nguyenNhan: {},
  nguyenNhanChinh: {},
  khamNghiemTuThi: false,
  chanDoanGiaiPhauTuThi: { code: "", name: "" },
  quaTrinhBenhLy: "",
  tomTatKetQuaCLS: "",
  phuongPhapDieuTri: "",
  loiDanBacSi: "",
};
const TuVongModal = ({ open, handleCloseModal }: Props) => {
  let { setFieldValue } = useFormikContext<any>();

  const handleSubmit = (values: any) => {
    setFieldValue("loiDanCuaBacSi", values.loiDanCuaBacSi);
    setFieldValue(
      "thoiDiemTuVong",
      `${moment(values.thoiDiemTuVong).format("hh:mm DD/MM/YYYY")} - ${values.nguyenNhan.name}`
    );
    handleCloseModal();
  };

  const validationSchema = Yup.object({});
  return (
    <Modal centered className="modal fade" role="dialog" show={open} dialogClassName="modal-xl" aria-hidden="true">
      <Formik<ITuVong> initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ values, setFieldValue }) => (
          <Form className="h-100">
            <ModalHeader closeButton onHide={handleCloseModal} className="py-4">
              <Modal.Title>Tử vong</Modal.Title>
            </ModalHeader>
            <ModalBody>
              <Row>
                <Col xs={5} className="d-flex mb-3 align-items-center text-lable-input">
                  <LabelRequired label="Thời gian ra viện" className="min-w-125px" />
                  <TextField className="w-100" name="thoiGianRaVien" value={values?.thoiGianRaVien} type="date" />
                </Col>
                <Col xs={5} className="d-flex mb-3 align-items-center text-lable-input">
                  <LabelRequired label="Thời gian tử vong" className="min-w-125px" />
                  <TextField
                    className="w-100"
                    name="thoiGianTuVong"
                    value={values?.thoiGianTuVong}
                    type="dateTime-Local"
                  />
                </Col>
                <Col xs={2}>
                  <FormCheck
                    label="Cấp giấy chứng tử"
                    name="capGiayChungTu"
                    className="d-flex align-items-center gap-2"
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={5} className="d-flex mb-3 align-items-center text-lable-input">
                  <LabelRequired label="Thời điểm tử vong" className="min-w-125px" />
                  <AutocompleteV2
                    options={optionThoiDiemTuVong}
                    name="thoiDiemTuVong"
                    className="autocomplete-custom radius spaces width-100 "
                    onChange={(option) => {
                      setFieldValue("thoiDiemTuVong", option);
                    }}
                  />
                </Col>
                <Col xs={7} className="d-flex mb-3 align-items-center text-lable-input">
                  <LabelRequired label="Nguyên nhân" className="min-w-125px" />
                  <AutocompleteV2
                    options={optionNguyenNhanTuVong}
                    name="nguyenNhan"
                    value={values.nguyenNhan}
                    className="autocomplete-custom radius spaces width-100 "
                    onChange={(option) => {
                      setFieldValue("nguyenNhan", option);
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={12} className="d-flex mb-3 align-items-center text-lable-input">
                  <LabelRequired label="Nguyên nhân chính" className="min-w-125px" />
                  <AutocompleteV2
                    options={OptionBenhKemTheo}
                    name="nguyenNhanChinh"
                    className="autocomplete-custom radius spaces width-100 "
                    getOptionLabel={(option) => `${option.code} - ${option.name}`}
                    onChange={(option) => {
                      setFieldValue("nguyenNhanChinh", option);
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={12} className="d-flex mb-3 align-items-center text-lable-input">
                  <div className="min-w-125px"></div>
                  <FormCheck
                    label="Khám nghiệm tử thi"
                    name="khamNghiemTuThi"
                    className="d-flex align-items-center gap-2"
                    onChange={(e) => {
                      setFieldValue("chanDoanGiaiPhauTuThi", { code: "", name: "" });
                      setFieldValue("khamNghiemTuThi", e.target.checked);
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={12} className="d-flex mb-3 align-items-center text-lable-input">
                  <LabelRequired label="Chẩn đoán giải phẫu tử thi" className="spaces max-w-125" />
                  <AutocompleteV2
                    options={OptionBenhKemTheo}
                    name="chanDoanGiaiPhauTuThi"
                    isDisabled={!values.khamNghiemTuThi}
                    value={values.chanDoanGiaiPhauTuThi}
                    className="autocomplete-custom radius spaces width-100 "
                    onChange={(option) => {
                      setFieldValue("chanDoanGiaiPhauTuThi", option);
                    }}
                    getOptionLabel={(option) => `${option.code} ${option.code ? "-" : ""} ${option.name}`}
                  />
                </Col>
              </Row>

              <Row className="mb-4">
                <Col xs={12}>
                  <LabelRequired label="Quá trình bệnh lý và diễn biến lâm sàng" />
                  <FormGroup>
                    <TextField name="quaTrinhBenhLy" as={"textarea"} rows={3} className="resize-none" />
                  </FormGroup>
                </Col>
              </Row>
              <Row className="mb-4">
                <Col xs={12}>
                  <div className="d-flex justify-content-between">
                    <LabelRequired label="Tóm tắt kết quả CLS có giá trị chẩn đoán" />
                    <u className="text-pri fw-bold">Chọn kết quả</u>
                  </div>
                  <FormGroup>
                    <TextField name="tomTatKetQuaCLS" as={"textarea"} rows={3} className="resize-none" />
                  </FormGroup>
                </Col>
              </Row>
              <Row className="mb-4">
                <Col xs={12}>
                  <LabelRequired label="Phương pháp điều trị" />
                  <FormGroup>
                    <TextField name="phuongPhapDieuTri" as={"textarea"} rows={3} className="resize-none" />
                  </FormGroup>
                </Col>
              </Row>
              <Row className="mb-4">
                <Col xs={12}>
                  <LabelRequired label="Lời dặn của bác sĩ" />
                  <FormGroup>
                    <TextField name="loiDanCuaBacSi" as={"textarea"} rows={3} className="resize-none" />
                  </FormGroup>
                </Col>
              </Row>
            </ModalBody>
            <ModalFooter className="d-flex justify-content-between py-2">
              <div>
                <Button className="btn-fill">Đặt lịch hẹn</Button>
              </div>
              <div className="d-flex gap-2">
                <Button className="btn-fill">Cập nhật từ bệnh án</Button>
                <Button className="btn-fill" type="submit">
                  <IconButtonSave /> Lưu
                </Button>
              </div>
            </ModalFooter>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default TuVongModal;
