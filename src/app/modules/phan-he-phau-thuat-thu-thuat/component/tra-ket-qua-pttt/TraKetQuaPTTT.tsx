import { FormikProps } from "formik";
import React, { FC, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { BangDanhSachDichVu } from "./bang-ds-dv-pttt/BangDanhSachDichVuPTTT";
import { chiTietGiaDichVuPtttData, danhSachDichVuPtttData } from "./fakeData";
import { TablePagination } from "../../../component/TablePagination";
import { handlePagesChange, handleRowsPerPageChange, rowsForPage } from "../../../utils/PageUtils";
import { BangChiTietGiaDichVuPTTT } from "./bang-gia-dv-pttt/BangGiaDichVuPTTT";
import BoLocPTTT, { BoLocPTTTProps } from "../BoLocPTTT";
import { phongThucHien } from "../../const/PhanHePhauThuatThuThuatconst";


interface FormValues {
  page: number;
  pageSize: number;
}

interface CustomFormikProps {
  values: FormValues
  setFieldValue: FormikProps<FormValues>['setFieldValue']
}
const TraKetQuaPTTT: FC = () => {

  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [totalPages, setTotalPage] = useState<number>(50)
  const [totalElements, setTotalElements] = useState<number>(500);

  return (
    <div>
      <BoLocPTTT
        departmentList={phongThucHien}
        onCheck={(id)=>{}}
        onSelect={(value)=>{}}
        onDateChange={(event)=>{}}
      />

      <div>
        <BangDanhSachDichVu
          listData={danhSachDichVuPtttData}
          keyword={""}
        />
        <TablePagination
          handlePagesChange={handlePagesChange}
          handleRowsPerPageChange={handleRowsPerPageChange}
          rowsPerPage={rowsPerPage}
          rowsForPage={rowsForPage}
          page={page}
          setPage={setPage}
          setRowsPerPage={setRowsPerPage}
          totalPages={totalPages}
          totalElements={totalElements}
        />
      </div>

      <div>
        <BangChiTietGiaDichVuPTTT
          listData={chiTietGiaDichVuPtttData}
          keyword={""}
        />
      </div>
    </div>
  );
};
export default TraKetQuaPTTT;
