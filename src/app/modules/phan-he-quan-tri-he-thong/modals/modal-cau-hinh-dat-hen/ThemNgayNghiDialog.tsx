import { Formik, FormikErrors } from "formik";
import { Dispatch, FC, SetStateAction } from "react";
import { Button, Modal } from "react-bootstrap";
import * as Yup from "yup";
import LabelRequired from "../../../component/LabelRequired";
import TextValidator from "../../../component/TextValidator";

type Props = {

};

const   ThemNgayNghiDialog: FC<Props> = (props) => {
  const handleChangeSelect = () => {};
  let validationSchema = Yup.object({});
  const handleFormSubmit = () => {};
  const options = [
    { code: 0, name: "Sổ 1" },
    { code: 1, name: "Sổ 2" },
    { code: 2, name: "Sổ 3" },
  ];
  return (
    <>
      <Modal centered show={true} size="lg" contentClassName="w-75 m-auto">
        <Modal.Header closeButton className="py-5 bg-white ">
          <Modal.Title>
            <h2 className="text-cyan">Chọn sổ thu tiền</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-8">
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
              <>
                <div className="d-flex spaces gap-12 w-100">
                  <LabelRequired
                    label="Từ ngày"
                    className="spaces pr-6 min-w-50px justify-content-end"
                  />
                  <TextValidator type="text" name="4" className=" spaces w-100" />
                </div>
                <div className="d-flex spaces gap-12 w-100">
                  <LabelRequired
                    label="Đến ngày"
                    className="spaces pr-6 min-w-50px justify-content-end"
                  />
                  <TextValidator type="text" name="4" className=" spaces w-100" />
                </div>
              </>
            )}
          </Formik>
        </Modal.Body>
        <Modal.Footer className="flex flex-middle flex-center py-1">
          <Button className="btn-fill" type="submit">
            <i className="fs-6 me-1 bi bi-floppy"></i> Lưu
          </Button>
          <Button className="btn-outline">Đóng</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export {  ThemNgayNghiDialog };
