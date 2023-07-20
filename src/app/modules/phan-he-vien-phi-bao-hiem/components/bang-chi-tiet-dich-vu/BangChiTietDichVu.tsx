import React, { useState } from "react";
import { Row } from "react-bootstrap";
import { TableCustomV2 } from "../../../component/table-custom-v2/TableCustomV2";
import { ChiTietDichVuInterface } from "../../models/ChiTietDichVuModel";
import { ChiTietDichVuFakeData } from "./FakeData";
import { ChiTietDichVuColumns } from "./ChiTietDichVuColumns";
import { TablePagination } from "../../../component/TablePagination";
import { handlePagesChange, handleRowsPerPageChange, rowsForPage } from "../../../utils/PageUtils";


const BangChiTietDichVu = () => {
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [totalPages, setTotalPage] = useState<number>(50)
  const [totalElements, setTotalElements] = useState<number>(500);
  return (
    <div className="table-box-shadow border rounded mt-3 overflow-hidden">
      <Row className="mt-3 ms-3">
        <h2>Chi tiết dịch vụ</h2>
      </Row>
      <TableCustomV2<ChiTietDichVuInterface>
        data={ChiTietDichVuFakeData}
        columns={ChiTietDichVuColumns}
      />
      <TablePagination
        page={page}
        setPage={setPage}
        handlePagesChange={handlePagesChange}
        handleRowsPerPageChange={handleRowsPerPageChange}
        rowsForPage={rowsForPage}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        totalPages={totalPages}
        totalElements={totalElements}
      />
    </div>
  );
};

export { BangChiTietDichVu };