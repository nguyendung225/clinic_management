import React from "react";
import "./datLichHen.scss";
import FormDatLich from "./components/DatLichForm";
import { Button } from "react-bootstrap";
import { Form, Formik } from "formik";
import { initialValuesTiepNhan } from "./constants/datLichHenConstants";
import DanhSachLichHenTable from "./components/DanhSachLichHenTable";
import DanhSachLHenKhamTable from "./components/DanhSachChoKhamTable";

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
          <div className="d-flex mt-10 spaces gap-8">
            <DanhSachLichHenTable />
            <DanhSachLHenKhamTable />
          </div>
          <div className="spaces w-100 d-flex justify-content-end mt-10 bg-white gap-6 py-20 pr-10 position-fixed z-index-2 bottom-0">
            <Button className="btn-fill btn-createNew spaces h-26 px-40 py-10">
              <span>Lịch hẹn mới</span>
            </Button>
            <Button className="btn-fill btn-save min-w-100px spaces h-26 px-40 py-10">
              <span>Lưu thông tin</span>
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default DatLichHen;
