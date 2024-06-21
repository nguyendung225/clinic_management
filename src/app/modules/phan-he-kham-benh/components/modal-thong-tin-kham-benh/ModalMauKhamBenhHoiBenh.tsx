import { Form, Formik, FormikHelpers } from "formik";
import { Dispatch, FC, SetStateAction, useEffect, useRef, useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { IconButtonSave } from "../../../component/IconSvg";
import LabelRequired from "../../../component/LabelRequired";
import TextField from "../../../component/TextField";
import { initialValuesMauKhamBenh } from "../../constants/KhamBenh";
import { MauKhamBenh } from "../../models/ThongTinKhamBenhModel";
import ModalTrieuChung from "./ModalTrieuChung";
import * as Yup from "yup";
interface Props {
  handleClose: () => void;
  mauSelected: MauKhamBenh;
  setMauSelected?: Dispatch<SetStateAction<MauKhamBenh | null>>;
  dataDanhSachMau: MauKhamBenh[];
  setDataDanhSachMau: Dispatch<SetStateAction<MauKhamBenh[]>>;
}
const ModalMauKhamBenhHoiBenh: FC<Props> = ({
  handleClose,
  mauSelected = {},
  setMauSelected,
  dataDanhSachMau,
  setDataDanhSachMau,
}) => {
  const refForm = useRef<any>(null);
  const [openModalTrieuChung, setOpenModalTrieuChung] = useState<boolean>(false);
  useEffect(() => {
    (mauSelected as MauKhamBenh).tenMau && refForm.current?.setValues({ ...mauSelected });
  }, []);

  const validationSchema = Yup.object().shape({
    tenMau: Yup.string().required("Trường này là bắt buộc !"),
  });

  const handleSubmit = (values: MauKhamBenh) => {
    if (values?.id) {
      let newData: MauKhamBenh[] = dataDanhSachMau.map((item) => {
        if (item?.id === values?.id) item = values;
        return item;
      }) as MauKhamBenh[];
      newData && setDataDanhSachMau?.(newData);
      setMauSelected && setMauSelected({ ...values });
    } else {
      dataDanhSachMau?.unshift({ ...values, id: dataDanhSachMau.length + 1 });
      setMauSelected && setMauSelected({ ...values, id: dataDanhSachMau.length + 1 });
      setDataDanhSachMau?.(dataDanhSachMau as any);
    }
    handleClose();
  };

  return (
    <>
      <Modal
        show
        centered
        size="xl"
        className="dialog-background"
        onHide={() => {
          handleClose();
        }}
      >
        <Modal.Header closeButton className="modal-header">
          <Modal.Title>Thêm mới/ Cập nhật mẫu khám bệnh hỏi bệnh</Modal.Title>
        </Modal.Header>
        <Formik<MauKhamBenh>
          innerRef={refForm}
          validationSchema={validationSchema}
          initialValues={initialValuesMauKhamBenh}
          onSubmit={handleSubmit}
        >
          {({ values }) => (
            <Form>
              <Modal.Body>
                <div>
                  <Row className="mb-1 pe-0">
                    <Col xs="6">
                      <TextField
                        label="Người tạo mẫu"
                        labelClassName="min-w-120 max-w-120 spaces pe-2 w-100 text-start mb-1 mt-2"
                        className="align-items-start"
                        name="nguoiTaoMau"
                        readOnly
                        value={values?.nguoiTaoMau || "Quản trị hệ thống"}
                      />
                    </Col>
                    <Col xs="6">
                      <TextField
                        label="Tên mẫu"
                        labelClassName="min-w-120 max-w-120 spaces pe-2 w-100 text-start mb-1 mt-2"
                        className="align-items-start"
                        name="tenMau"
                        value={values?.tenMau}
                      />
                    </Col>
                  </Row>
                  <Row className="mb-1 pe-0">
                    <TextField
                      label="Lý do khám"
                      labelClassName="min-w-120 max-w-120 spaces pe-2 w-100 text-start mb-1 mt-2    align-items-start"
                      name="lyDoKham"
                      value={values?.lyDoKham || ""}
                    />
                  </Row>
                  <Row className="mb-1 pe-0">
                    <TextField
                      label="Quá trình bệnh lý"
                      labelClassName="min-w-120 max-w-120 spaces pe-2 w-100 text-start mb-1 mt-2  align-items-start h-54"
                      name="quaTrinhBenhLy"
                      as="textarea"
                      rows={2}
                      value={values?.quaTrinhBenhLy || ""}
                    />
                  </Row>
                  <Row className="mb-1 pe-0">
                    <div className="d-flex align-items-center">
                      <u className="text-pri min-w-120 max-w-120 spaces" onClick={() => setOpenModalTrieuChung(true)}>
                        <LabelRequired label="Triệu chứng bệnh" />
                      </u>
                      <TextField
                        className="w-100"
                        name="trieuChung"
                        as="textarea"
                        rows={2}
                        value={values?.trieuChung || ""}
                      />
                    </div>
                  </Row>
                  <Row className="mb-1 pe-0">
                    <TextField
                      label="Tiền sử bản thân"
                      labelClassName="min-w-120 max-w-120 spaces pe-2 w-100 text-start mb-1 mt-2    align-items-start h-54"
                      name="tienSuBanThan"
                      as="textarea"
                      rows={2}
                      value={values?.tienSuBanThan || ""}
                    />
                  </Row>
                  <Row className="mb-1 pe-0">
                    <TextField
                      label="Tiền sử gia đình"
                      labelClassName="min-w-120 max-w-120 spaces pe-2 w-100 text-start mb-1 mt-2    align-items-start h-54"
                      name="tienSuGiaDinh"
                      as="textarea"
                      rows={2}
                      value={values?.tienSuGiaDinh || ""}
                    />
                  </Row>
                  <Row className="mb-1 pe-0">
                    <TextField
                      label="Khám toàn thân"
                      labelClassName="min-w-120 max-w-120 spaces pe-2 w-100 text-start mb-1 mt-2    align-items-start h-54"
                      name="khamToanThan"
                      as="textarea"
                      rows={2}
                      value={values?.khamToanThan || ""}
                    />
                  </Row>
                  <Row className="mb-1 pe-0">
                    <TextField
                      label="Khám bộ phận"
                      labelClassName="min-w-120 max-w-120 spaces pe-2 w-100 text-start mb-1 mt-2    align-items-start h-54"
                      name="khamBoPhan"
                      as="textarea"
                      rows={2}
                      value={values?.khamBoPhan || ""}
                    />
                  </Row>
                  <Row className="mb-1 pe-0">
                    <TextField
                      label="Hướng xử lý"
                      labelClassName="min-w-120 max-w-120 spaces pe-2 w-100 text-start mb-1 mt-2    align-items-start h-54"
                      name="huongXuLy"
                      as="textarea"
                      rows={2}
                      value={values?.huongXuLy || ""}
                    />
                  </Row>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button className="btn-fill" type="submit">
                  <IconButtonSave />
                  Lưu
                </Button>
                <Button
                  className="btn-outline"
                  onClick={() => {
                    handleClose();
                  }}
                >
                  Đóng
                </Button>
              </Modal.Footer>
            </Form>
          )}
        </Formik>
        {openModalTrieuChung && (
          <ModalTrieuChung
            setListTrieuChung={(item: string) => refForm.current.setFieldValue("trieuChung", item)}
            handleClose={() => setOpenModalTrieuChung(false)}
          />
        )}
      </Modal>
    </>
  );
};
export default ModalMauKhamBenhHoiBenh;
