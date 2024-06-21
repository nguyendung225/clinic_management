import { useState } from "react";
import { TablePagination } from "../../../../component/table/components/TablePagination";
import { handlePagesChange, handleRowsPerPageChange, rowsForPage } from "../../../../utils/PageUtils";
import { NoiTruCapCuuInterface } from "../../../models/NoiTruCapCuuModel";
import { NoiTruCapCuuColumns } from "./NoiTruCapCuuColumns";
import { NoiTruCapCuuFakeData } from "../../fakeData";
import { TableCustom } from "../../../../component/table/table-custom/TableCustom";

const BangNoiTruCapCuu = () => {
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [totalPages, setTotalPage] = useState<number>(50)
  const [totalElements, setTotalElements] = useState<number>(500);
  return (
    <>
      <TableCustom<NoiTruCapCuuInterface>
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