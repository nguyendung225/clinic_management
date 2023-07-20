import { useState } from "react";
import { TablePagination } from "../../../component/TablePagination";
import { TableCustomV2 } from "../../../component/table-custom-v2/TableCustomV2";
import { handlePagesChange, handleRowsPerPageChange, rowsForPage } from "../../../utils/PageUtils";
import { NoiTruCapCuuInterface } from "../../models/NoiTruCapCuuModel";
import { NoiTruCapCuuColumns } from "./NoiTruCapCuuColumns";
import { NoiTruCapCuuFakeData } from "./FakeData";

const BangNoiTruCapCuu = () => {
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [totalPages, setTotalPage] = useState<number>(50)
  const [totalElements, setTotalElements] = useState<number>(500);
  return (
    <>
      <TableCustomV2<NoiTruCapCuuInterface>
        data={NoiTruCapCuuFakeData}
        columns={NoiTruCapCuuColumns}
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
    </>
  );
};

export {BangNoiTruCapCuu}