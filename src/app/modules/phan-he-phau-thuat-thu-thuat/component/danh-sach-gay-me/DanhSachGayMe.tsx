import { FormikProps } from "formik";
import React, { FC, useState } from "react";
import { Button   } from "react-bootstrap";
import { TablePagination } from "../../../component/TablePagination";
import { handlePagesChange, handleRowsPerPageChange, rowsForPage } from "../../../utils/PageUtils";
import BoLocPTTT from "../BoLocPTTT";
import { BangDanhSachTiepNhanGayMe } from "./bang-danh-sach-tiep-nhan-gay-me/BangDanhSachTiepNhanGayMe";
import { danhSachTiepNhanGayMeData } from "../tra-ket-qua-pttt/fakeData";
import { phongThucHien } from "../../const/PhanHePhauThuatThuThuatconst";


interface FormValues {
  page: number;
  pageSize: number;
}

interface CustomFormikProps {
  values: FormValues
  setFieldValue: FormikProps<FormValues>['setFieldValue']
}
const DanhSachTiepNhanGayMe: FC = () => {

  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [totalPages, setTotalPage] = useState<number>(50)
  const [totalElements, setTotalElements] = useState<number>(500);

  return (
    <div >
      <BoLocPTTT departmentList={phongThucHien} />

      <div className="call-patient position-relative justify-content-start spaces px-5 pb-10">
        <input
          className="form-control customs-input w-60px spaces px-5 py-1 mx-5"
          name="ten"
          type="text"
        />
        <input
          className="form-control customs-input w-60px spaces px-5 py-1 mx-5"
          name="ten"
          type="text"
        />
        <Button className="spaces mx-5 btn call customs-input">Gọi</Button>
        <Button className="spaces mx-5 btn customs-input">Gọi lại</Button>
        <Button className="spaces mx-5 btn customs-input"> KT</Button>
      </div>

      <div>
        <BangDanhSachTiepNhanGayMe
          listData={danhSachTiepNhanGayMeData}
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
    </div>
  );
};
export default DanhSachTiepNhanGayMe;
