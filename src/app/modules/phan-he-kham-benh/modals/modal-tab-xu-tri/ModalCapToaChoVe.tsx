import { Form, Formik, useFormikContext } from "formik";
import moment from "moment";
import { Button, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "react-bootstrap";
import * as Yup from "yup";
import { IconButtonSave } from "../../../component/IconSvg";
import LabelRequired from "../../../component/LabelRequired";
import TextField from "../../../component/TextField";

type Props = {
  open: boolean;
  handleCloseModal: () => void;
};
interface ICapToaChoVe {
    loiDanBacSi?: string;
}

const CapToaChoVeModal = ({ open, handleCloseModal }: Props) => {
  let { values, setFieldValue } = useFormikContext<any>();
  
  const handleSubmit = (values: any) => {
    setFieldValue("loiDanCuaBacSi", values.loiDanCuaBacSi);
    handleCloseModal();
  };

  const validationSchema = Yup.object({
  });
  return (
    <Modal centered className="modal fade dialog-background" role="dialog" show={open} dialogClassName="modal-lg" aria-hidden="true">
      <Formik<ICapToaChoVe>
        initialValues={{...values}}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
          <Form className="h-100">
            <ModalHeader closeButton onHide={handleCloseModal} className="py-4">
              <Modal.Title>Cấp toa cho về</Modal.Title>
            </ModalHeader>
            <ModalBody>
              <Row className="mb-4">
                <Col xs={5} className="d-flex mb-3 align-items-center text-lable-input">
                  <LabelRequired label="Thời gian ra viện" className="min-w-125px" />
                  <TextField name="thoiGianRaVien" value={values?.thoiGianRaVien || moment().format("YYYY-MM-DD")} type="date" />
                </Col>
              </Row>
              <Row className="mb-4">
                <Col xs={6}>
                  <LabelRequired label="Tình trạng bệnh nhân" />
                  <TextField name="tinhTrangBenhNhan" as={"textarea"} rows={3} className="resize-none" />
                </Col>
                <Col xs={6}>
                  <LabelRequired label="Quá trình bệnh lý và diễn biến lâm sàng" />
                  <TextField name="quaTrinhBenhLyVaDienBien" as={"textarea"} rows={3} className="resize-none" />
                </Col>
              </Row>
              <Row className="mb-4">
                <Col xs={6}>
                  <LabelRequired label="Hướng điều trị tiếp theo" />
                  <TextField name="huongDieuTri" as={"textarea"} rows={3} className="resize-none" />
                </Col>
                <Col xs={6}>
                  <div className="d-flex justify-content-between">
                    <LabelRequired label="Tóm tắt kết quả CLS có giá trị chẩn đoán" />
                    <u className="text-pri fw-bold">Chọn kết quả</u>
                  </div>
                  <TextField name="tomTatKetQuaCLS" as={"textarea"} rows={3} className="resize-none" />
                </Col>
              </Row>
              <Row className="mb-4">
                <Col xs={6}>
                  <LabelRequired label="Lời dặn của bác sĩ" />
                  <TextField name="loiDanCuaBacSi" as={"textarea"} rows={3} className="resize-none" />
                </Col>
                <Col xs={6}>
                  <LabelRequired label="Phương pháp điều trị" />
                  <TextField name="phuongPhapDieuTri" as={"textarea"} rows={3} className="resize-none" />
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
      </Formik>
    </Modal>
  );
};

export default CapToaChoVeModal;
