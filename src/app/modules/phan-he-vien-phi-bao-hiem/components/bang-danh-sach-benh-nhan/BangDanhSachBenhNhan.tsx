import React, { useEffect, useState } from "react";
import { Badge, Row } from "react-bootstrap";
import { TableCustomV2 } from "../../../component/table-custom-v2/TableCustomV2";
import { DanhSachBenhNhanInterface } from "../../models/DanhSachBenhNhanModel";
import { DanhSachBenhNhanColumns } from "./DanhSachBenhNhanColumns";
import { DanhSachBenhNhanFakeData } from "./FakeData";
import { TablePagination } from "../../../component/TablePagination";
import { handlePagesChange, handleRowsPerPageChange, rowsForPage } from "../../../utils/PageUtils";

const BangDanhSachBenhNhan = () => {
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [totalPages, setTotalPage] = useState<number>(50)
  const [totalElements, setTotalElements] = useState<number>(500);
  const [selectedRow, setSelectedRow] = useState([]);
  return (
    <div className="mt-5">
      <Row className="mt-3 ms-3">
        <h2>Danh sách bệnh nhân</h2>
      </Row>
      <TableCustomV2<DanhSachBenhNhanInterface>
        data={DanhSachBenhNhanFakeData}
        columns={DanhSachBenhNhanColumns}
        selectionMode="single"
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

export { BangDanhSachBenhNhan };
