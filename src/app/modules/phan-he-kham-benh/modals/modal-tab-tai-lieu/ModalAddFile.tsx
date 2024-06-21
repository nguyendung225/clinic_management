import { Form, Formik, FormikErrors } from "formik";
import React, { useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import { useIntl } from "react-intl";
import * as Yup from "yup";
import LabelRequired from "../../../component/LabelRequired";
import TextField from "../../../component/TextField";
import { TaiLieuModel } from "../../models/TaiLieuModel";
import { iUploadImage } from "../../../phan-he-tiep-nhan-thanh-toan/models/PhanHeTiepNhanModel";

type Props = {
  open: boolean;
  handleClose: () => void;
  setListTaiLieu: React.Dispatch<React.SetStateAction<TaiLieuModel[]>>;
  listTaiLieu: TaiLieuModel[];
  taiLieu: TaiLieuModel;
};

const ModalAddFile = (props: Props) => {
  const intl = useIntl();
  let { open, handleClose, setListTaiLieu, listTaiLieu, taiLieu } = props;
  const [state, setState] = useState<iUploadImage>({
    files: [],
    isEmpty: true,
    src: null,
    formData: "",
  });

  const handleFileSelect = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      let files = [...e.target.files];
      fileReaderImage(files);
    }
  };

  const fileReaderImage = (files: any) => {
    const reader = new FileReader();
    reader.addEventListener("load", () =>
      setState({
        ...state,
        src: reader.result,
        isEmpty: false,
        files: files,
      })
    );
    reader.readAsDataURL(files[0]);
  };

  let validationSchema = Yup.object({
    tenTaiLieu: Yup.string()
      .required(intl.formatMessage({ id: "VALIDATION.REQUIRE" }))
      .nullable(),
  });
  const handleFormSubmit = (values: TaiLieuModel) => {
    let uniqueID = Date.now().toString();
    if (taiLieu?.id) {
      const formatList = listTaiLieu?.map((item) => {
        if (item?.id === taiLieu?.id) item = values;
        return item;
      });
      setListTaiLieu(formatList)
    } else {
      const formatValue = { ...values, id: uniqueID };
      setListTaiLieu([...listTaiLieu, formatValue]);
    }
    handleClose();
  };
  return (
    <Container>
      <Modal
        show={open || false}
        centered
        className="dialog-nhap-ket-qua upload"
      >
        <Formik<TaiLieuModel>
          initialValues={taiLieu}
          validationSchema={validationSchema}
          validateOnChange={true}
          validate={(values) => {
            const errors: FormikErrors<TaiLieuModel> = {};
            return errors;
          }}
          onSubmit={handleFormSubmit}
        >
          {({ touched, errors, setValues, setFieldValue, values }) => (
            <>
              <Form id="form-tai-lieu">
                <Modal.Header className="header-modal p-4">
                  <Modal.Title>Thêm tài liệu</Modal.Title>
                </Modal.Header>
                <Modal.Body className="dialog-body p-4">
                  <div className="upload-form">
                    <TextField
                      className="mb-5 spaces "
                      label="Tên tài liệu"
                      name="tenTaiLieu"
                      labelClassName="ms-0 min-w-75px"
                    />

                    <TextField
                      className="mb-5 spaces "
                      label="Ghi chú"
                      name="ghiChu"
                      labelClassName="ms-0 min-w-75px"
                    />
                    <div className="d-flex align-items-center justify-content-between">
                      <LabelRequired
                        label="File"
                        className="ms-0 min-w-75px"
                      ></LabelRequired>
                      <span className="ms-0 max-w-245px text-break">
                        {values?.tenFile ? values?.tenFile : ""}
                      </span>

                      <div className="flex flex-wrap ">
                        <label
                          htmlFor="upload-single-file"
                          className="upload-single btn-fill"
                        >
                          <div className="flex flex-middle">
                            <i className="bi bi-cloud-arrow-up"></i>
                            <span>Chọn tệp</span>
                          </div>
                        </label>
                        <input
                          className="display-none"
                          onChange={(e) => {
                            handleFileSelect(e);
                            if (e.target.files && e.target.files.length > 0) {
                              setValues({
                                ...values,
                                loaiFile: e.target.files[0].type,
                                tenFile: e.target.files[0].name,
                              });
                            }
                          }}
                          id="upload-single-file"
                          type="file"
                          accept="image/*"
                        />
                      </div>
                    </div>
                  </div>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center p-4">
                  <Button
                    type="submit"
                    className="btn-fill min-w-80px"
                    // onClick={() => handleUpdate(state)}
                  >
                    <i className="bi bi-cloud-arrow-up"></i>
                    Tải file
                  </Button>
                  <Button
                    onClick={handleClose}
                    className="btn-outline min-w-80px"
                  >
                    Đóng
                  </Button>
                </Modal.Footer>
              </Form>
            </>
          )}
        </Formik>
      </Modal>
    </Container>
  );
};

export default ModalAddFile;
