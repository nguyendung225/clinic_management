import React, { useEffect, useState } from "react";
import { Badge, Row } from "react-bootstrap";
import { TableCustomV2 } from "../../../component/table-custom-v2/TableCustomV2";
import { DSKetQuaData } from "./FakeData";
import { TablePagination } from "../../../component/TablePagination";
import { handlePagesChange, handleRowsPerPageChange, rowsForPage } from "../../../utils/PageUtils";
import { DSKetQua } from "../../models/DanhSachKetQuaModels";
import { DanhSachKetQuaColumns } from "./DanhSachKetQuaColumns";

const BangDanhSachKetQua = () => {
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [totalPages, setTotalPage] = useState<number>(50)
  const [totalElements, setTotalElements] = useState<number>(500);
  const [selectedRow, setSelectedRow] = useState([]);
  return (
    <div className="border-top">
      <TableCustomV2<DSKetQua>
        data={DSKetQuaData}
        columns={DanhSachKetQuaColumns}
        selectionMode="multi"
        getSelectedRowsData={setSelectedRow}
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

export { BangDanhSachKetQua };