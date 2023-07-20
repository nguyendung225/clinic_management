import { useState } from "react";
import { TablePagination } from "../../../component/TablePagination";
import { TableCustomV2 } from "../../../component/table-custom-v2/TableCustomV2";
import { DanhSachBenhPhamInterface } from "../../models/DanhSachBenhPhamModels";
import { DanhSachBenhPhamColumns } from "./DanhSachBenhPhamColumns";
import { DanhSachBenhPhamFakeData } from "./FakeData";
import { handlePagesChange, handleRowsPerPageChange, rowsForPage } from "../../../utils/PageUtils";

const BangDanhSachBenhPham = () => {
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [totalPages, setTotalPage] = useState<number>(50)
  const [totalElements, setTotalElements] = useState<number>(500);
  return (
    <div className="mt-5">
      <TableCustomV2<DanhSachBenhPhamInterface>
        columns={DanhSachBenhPhamColumns}
        data={DanhSachBenhPhamFakeData}
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

export { BangDanhSachBenhPham };
