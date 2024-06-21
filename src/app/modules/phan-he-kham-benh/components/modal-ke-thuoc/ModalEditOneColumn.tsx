import { Form, Formik, FormikErrors } from "formik";
import { FC } from "react";
import { Button, Modal } from "react-bootstrap";
import * as Yup from "yup";
import { IconButtonSave } from "../../../component/IconSvg";
import TextField from "../../../component/TextField";

interface Props {
  name: string;
  code: string;
  handleClose: () => void;
  handleSave?: (values: any) => void;
}

interface IEditOneColumn {
  [code: string]: string;
}

const ModalEditOneColumn: FC<Props> = (props) => {
  let { name, handleClose, code, handleSave } = props;

  let validationSchema = Yup.object({
    [code]: code === "soLuong" ? Yup.number().typeError("Vui lòng nhập số!").required("Trường này là bắt buộc !") : Yup.string().required("Trường này là bắt buộc !"),
  });
  
  const handleFormSubmit = (values: any) => {
    handleSave && handleSave(values);
    handleClose();
  };

  return (
    <Modal show={true} animation centered onHide={handleClose} className="dialog-background">
      <Formik<IEditOneColumn> initialValues={{[code]:""}} validationSchema={validationSchema} onSubmit={handleFormSubmit}>
        <Form>
          <div className="timKiemBenhNhan">
            <Modal.Header className="py-3 header-modal" closeButton>
              <Modal.Title className="text-pri">{name}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="py-16 px-24 spaces">
              <div>
                <div className="spaces flex-2 mb-4">
                  <TextField name={code} className="custom-input " labelClassName="min-w-75px" as="textarea" />
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center py-1">
              <Button
                className="btn-fill"
                type="submit"
                // onClick={() => handleFormSubmit(values)}
              >
                <IconButtonSave />
                <span>Lưu</span>
              </Button>
              <Button className="btn-outline" onClick={handleClose}>
                Đóng
              </Button>
            </Modal.Footer>
          </div>
        </Form>
      </Formik>
    </Modal>
  );
};

export default ModalEditOneColumn;
