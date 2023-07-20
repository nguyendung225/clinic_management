import React, { FC } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import * as Yup from "yup";
import { Formik, FormikErrors, FormikProps } from "formik";
import { PhieuKhamTienMeBody } from "./PhieuKhamTienMeBody";

interface FormValues {
  // thongTinHanhChinh: TTHanhChinhModel[]
}

interface CustomFormikProps {
  values: FormValues
  setFieldValue: FormikProps<FormValues>['setFieldValue']
}

interface BenhAnNgoaiTruProps {
  handleClose: () => void;
  open: boolean;
}

export const PhieuKhamTienMeDialog: FC<BenhAnNgoaiTruProps> = (props: BenhAnNgoaiTruProps) => {
  const {handleClose, open} = props;

  let initialValues: FormValues = {
    thongTinHanhChinh: [{}],
  }

  const validationSchema = Yup.object({
  })

  const handleFormSubmit = (values: any) => {
  }

  return (
    <Modal show={open} onHide={handleClose} fullscreen className="spaces pl-0">
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
          <>
            <Modal.Header closeButton className="spaces p-10 fs-1">
              <h1>
                Phiếu khám tiền mê
              </h1>
            </Modal.Header>
            <Modal.Body className="spaces pb-0">
              <PhieuKhamTienMeBody />
            </Modal.Body>
            <Modal.Footer className="flex justify-content-center" >
              <Button
                className="btn-navy spaces min-w-70px"
                onClick={handleClose}
              >
                Lưu
              </Button>
              <Button
                className="btn-navy-outlined  min-w-80px"
                onClick={handleClose}
              >
                Đóng
              </Button>
            </Modal.Footer>
          </>
        )}
      </Formik>
    </Modal>
  );
}

export default PhieuKhamTienMeDialog;
