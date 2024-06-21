import { FormikProps } from "formik";
import React, { FC, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { BangDanhSachDichVu } from "./bang-ds-dv-pttt/BangDanhSachDichVuPTTT";
import { chiTietGiaDichVuPtttData, danhSachDichVuPtttData } from "./fakeData";
import { TablePagination } from "../../../component/table/components/TablePagination";
import { handlePagesChange, handleRowsPerPageChange, rowsForPage } from "../../../utils/PageUtils";
import { BangChiTietGiaDichVuPTTT } from "./bang-gia-dv-pttt/BangGiaDichVuPTTT";
import BoLocPTTT, { BoLocPTTTProps } from "../BoLocPTTT";
import { phongThucHien } from "../../const/PhanHePhauThuatThuThuatconst";
import { PhieuPhauThuatThuThuat } from "../phieu-phau-thuat-thu-thuat/PhieuPhauThuatThuThuat";


const TraKetQuaPTTT: FC = () => {

  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [totalPages, setTotalPage] = useState<number>(50)
  const [totalElements, setTotalElements] = useState<number>(500);
  const [openDialogCapNhatPTTT, setOpenDialogCapNhatPTTT] = useState<boolean>(false);
  const [dataDichVu, setDataDichVu] = useState<any>();

  const handleOpenDialogCapNhatPTTT = () => {
    setOpenDialogCapNhatPTTT(true)
  }

  const handleCloseDialogCapNhatPTTT = () => {
    setOpenDialogCapNhatPTTT(false)
  }

  const handleClickRow = (rowData: any) => {
    setDataDichVu(rowData?.[0]);
  }


  return (
    <div className="p-5">
      <BoLocPTTT
        departmentList={phongThucHien}
        onCheck={(id)=>{}}
        onSelect={(value)=>{}}
        onDateChange={(event)=>{}}
      />

      <div>
        <BangDanhSachDichVu
          listData={danhSachDichVuPtttData}
          handleClickRow={handleClickRow}
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

      <div className="flex flex-center mt-5">
        <Button size="sm"

          onClick={handleOpenDialogCapNhatPTTT}
          disabled={!dataDichVu}
          className="btn-navy mr-5 spaces px-16 py-10"
        >Thực hiện</Button>
        <Button size="sm" className="btn-navy mr-5 spaces px-16 py-10">In Phiếu</Button>
        <Button size="sm" className="btn-navy mr-5 spaces px-16 py-10">Thuốc, VT đi kèm</Button>
        <Button size="sm" className="btn-navy mr-5 spaces px-16 py-10">Phụ thu</Button>
        <Button size="sm" className="btn-navy mr-5 spaces px-16 py-10">Khác</Button>
      </div>

      {openDialogCapNhatPTTT && <PhieuPhauThuatThuThuat
        open={openDialogCapNhatPTTT}
        onClose={handleCloseDialogCapNhatPTTT}
      />}
    </div>
  );
};
export default TraKetQuaPTTT;
