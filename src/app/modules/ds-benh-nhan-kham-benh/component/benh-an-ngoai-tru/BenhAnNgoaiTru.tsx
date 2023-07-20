import React, { FC } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import * as Yup from "yup";
import { Formik, FormikErrors, FormikProps } from "formik";
import { TTHanhChinhModel } from "../../models/BenhAnNgoaiTruModel";
import TTNgoaiTru from "./TTNgoaiTru";
import TTHanhChinh from "./TTHanhChinh";
import TTDieuTri from "./TTDieuTri";
import Divider from "../../../component/Divider";

interface FormValues {
  thongTinHanhChinh: TTHanhChinhModel[]
}

interface CustomFormikProps {
  values: FormValues
  setFieldValue: FormikProps<FormValues>['setFieldValue']
}

interface BenhAnNgoaiTruProps {
  handleClose: () => void;
  open: boolean;
}

export const BenhAnNgoaiTru: FC<BenhAnNgoaiTruProps> = (props: BenhAnNgoaiTruProps) => {
  const {handleClose, open} = props;

  let initialValues: FormValues = {
    thongTinHanhChinh: [{}],
  }

  const validationSchema = Yup.object({
  })

  const handleFormSubmit = (values: any) => {
  }

  return (
    <Modal show={open} onHide={handleClose} size="xl" fullscreen="md-down">
      <Formik<FormValues>
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnChange={true}
        validate={(values) => {
          const errors: FormikErrors<FormValues> = {}
          return errors
        }}
        onSubmit={(values) => {
          handleFormSubmit(values)
        }}
      >
        {({ setFieldValue, values, errors, handleSubmit }) => (
          <Form className="receive" >
            <Modal.Header>
              <TTNgoaiTru />
            </Modal.Header>
            <Modal.Body className="custom-modal-body">
              <TTHanhChinh />
              <Divider />
              <TTDieuTri />
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center">
              <Button
                type="button"
                size="sm"
                className="btn-navy-outlined spaces px-12 py-8 min-w-80px"
                onClick={handleClose}
              >
                Đóng
              </Button>
              <Button
                size="sm"
                className="btn-navy spaces px-12 py-8 min-w-80px"
                onClick={handleClose}
              >
                Lưu
              </Button>
            </Modal.Footer>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}

export default BenhAnNgoaiTru;
