import { Form, Formik, FormikErrors } from "formik";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import * as Yup from "yup";
import TextField from "../../../component/TextField";
import { DEFAULT_PAGE_INDEX } from "../../../utils/Constant";
import moment from "moment";
import { IconButtonSave } from "../../../component/IconSvg";
import ModalPhieuInToDieuTri from "./ModalPhieuInToDieuTri";

interface Props {
  handleClose: Dispatch<SetStateAction<boolean>>;
}

const ModalTuyChonBaoCao: FC<Props> = (props) => {
  let { handleClose } = props;
  let [openModalPhieuInToDieuTri, setOpenModalPhieuInToDieuTri] = useState<boolean>(false)

  let validationSchema = Yup.object({
    tu: Yup.date().max(Yup.ref("den"), "Phải nhỏ hơn ngày đến ngày"),
    den: Yup.date().min(Yup.ref("tu"), "Phải nhỏ hơn ngày từ ngày"),
  });
  const handleFormSubmit = (values: any) => {
    console.log(values, "Values tùy chọn báo cáo");
    setOpenModalPhieuInToDieuTri(true)
  };
  return (
    <Modal show={true} animation centered size="lg" className="dialog-background">
      <Formik<any>
        initialValues={{}}
        validationSchema={validationSchema}
        validateOnChange={true}
        validate={(values) => {
          const errors: FormikErrors<any> = {};
          return errors;
        }}
        onSubmit={handleFormSubmit}
      >
        {({ touched, errors, setFieldValue, values }) => (
          <Form>
            <div className="timKiemBenhNhan">
              <Modal.Header className="py-3 header-modal">
                <Modal.Title className="text-pri">Tùy chọn báo cáo</Modal.Title>
                <button className="btn-close" onClick={() => handleClose(false)}></button>
              </Modal.Header>
              <Modal.Body className="py-16 px-24 spaces">
                <div className="d-flex">
                  <div className="spaces flex-2 mb-4">
                    <TextField
                      name="tu"
                      type="dateTime-local "
                      label="Từ ngày"
                      labelClassName="min-w-70px"
                      placeholder="Ngày"
                      value={values.tu}
                    />
                  </div>
                  <div className="spaces flex-2 mb-4 ms-4">
                    <TextField
                      name="den"
                      type="dateTime-local "
                      label="Đến ngày"
                      labelClassName="min-w-70px"
                      placeholder="Ngày"
                      value={values.den}
                    />
                  </div>
                </div>
                <Row className="mx-5 mt-3 justify-content-around">
                  <Col xs="auto">
                    <div>
                      <a
                        href="/"
                        className="text-underline"
                        onClick={(e) => {
                          e.preventDefault();
                          setFieldValue("tu", moment().format("YYYY-MM-DDT00:00"));
                          setFieldValue("den", moment().format("YYYY-MM-DDT23:59"));
                        }}
                      >
                        <u>Trong ngày</u>
                      </a>
                    </div>
                    <div>
                      <a
                        href="/"
                        className="text-underline"
                        onClick={(e) => {
                          e.preventDefault();
                          setFieldValue("tu", moment().subtract(1, "d").format("YYYY-MM-DDT00:00"));
                          setFieldValue("den", moment().subtract(1, "d").format("YYYY-MM-DDT23:59"));
                        }}
                      >
                        <u>Hôm qua</u>
                      </a>
                    </div>
                  </Col>
                  <Col xs="auto">
                    <div>
                      <a
                        href="/"
                        className="text-underline"
                        onClick={(e) => {
                          e.preventDefault();
                          setFieldValue("tu", moment().startOf("isoWeek").format("YYYY-MM-DDT00:00"));
                          setFieldValue("den", moment().format("YYYY-MM-DDT23:59"));
                        }}
                      >
                        <u>Trong tuần</u>
                      </a>
                    </div>
                    <div>
                      <a
                        href="/"
                        className="text-underline"
                        onClick={(e) => {
                          e.preventDefault();
                          setFieldValue("tu", moment().subtract(7, "d").format("YYYY-MM-DDT00:00"));
                          setFieldValue("den", moment().format("YYYY-MM-DDT23:59"));
                        }}
                      >
                        <u>7 ngày gần đây</u>
                      </a>
                    </div>
                  </Col>
                  <Col xs="auto">
                    <div>
                      <a
                        href="/"
                        className="text-underline"
                        onClick={(e) => {
                          e.preventDefault();
                          setFieldValue("tu", moment().startOf("month").format("YYYY-MM-DDT00:00"));
                          setFieldValue("den", moment().format("YYYY-MM-DDT23:59"));
                        }}
                      >
                        <u>Trong tháng</u>
                      </a>
                    </div>
                    <div>
                      <a
                        href="/"
                        className="text-underline"
                        onClick={(e) => {
                          e.preventDefault();
                          setFieldValue("tu", moment().subtract(30, "d").format("YYYY-MM-DDT00:00"));
                          setFieldValue("den", moment().format("YYYY-MM-DDT23:59"));
                        }}
                      >
                        <u>30 ngày gần đây</u>
                      </a>
                    </div>
                  </Col>
                </Row>
              </Modal.Body>
              <Modal.Footer className="d-flex justify-content-center py-1">
                <Button
                  className="btn-fill"
                  type="submit"
                  // onClick={() => handleFormSubmit(values)}
                >
                  <IconButtonSave/>
                  <span>Lưu</span>
                </Button>
                <Button className="btn-outline" onClick={() => handleClose(false)}>
                  Đóng
                </Button>
              </Modal.Footer>
            </div>
          </Form>
        )}
      </Formik>
      {openModalPhieuInToDieuTri && <ModalPhieuInToDieuTri handleClose={() => setOpenModalPhieuInToDieuTri(false)} />}
    </Modal>
  );
};

export default ModalTuyChonBaoCao;
