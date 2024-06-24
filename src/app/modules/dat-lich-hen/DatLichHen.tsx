import React from "react";
import "./datLichHen.scss";
import FormDatLich from "./components/DatLichForm";
import ListDatLich from "./components/DatLichList";
import { Button } from "react-bootstrap";
import { Form, Formik } from "formik";
import { initialValuesTiepNhan } from "./constants/datLichHenConstants";

type Props = {};

const DatLichHen = (props: Props) => {
  const handleSubmit = (values: any) => {};

  return (
    <div className="datLichContainer">
      <Formik
        initialValues={initialValuesTiepNhan}
        onSubmit={handleSubmit}
        // validationSchema={validationSchema}
      >
        <Form noValidate>
          <FormDatLich />
          <ListDatLich />
          <div className="spaces w-100 d-flex ps-2 justify-content-end mt-10 bg-white border py-20 pr-10">
            <Button className="btn-fill me-2 min-w-90px spaces h-26 px-40 py-10">
              <span>Lịch hẹn mới</span>
            </Button>
            <Button className="btn-fill min-w-100px spaces h-26 px-40 py-10">
              <span>Lưu thông tin</span>
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default DatLichHen;
