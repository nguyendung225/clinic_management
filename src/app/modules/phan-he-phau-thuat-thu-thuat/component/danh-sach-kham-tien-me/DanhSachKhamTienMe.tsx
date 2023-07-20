import { Row } from "react-bootstrap";
import { BoLocKetQua } from "../../../component/BoLocKetQua";
import { TableCustomV2 } from "../../../component/table-custom-v2/TableCustomV2";
import { DanhSachTiepNhanGayMeModel } from "../../model/DanhSachTiepNhanGayMeModel";
import { danhSachTiepNhanGayMeData } from "../tra-ket-qua-pttt/fakeData";
import { DanhSachKhamTienMeColumns } from "./DanhSachKhamTienMeColumns";
import { TablePagination } from "../../../component/TablePagination";
import { useState } from "react";
import { handlePagesChange, handleRowsPerPageChange, rowsForPage } from "../../../utils/PageUtils";

const DanhSachKhamTienMe = () => {
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [totalPages, setTotalPage] = useState<number>(50)
  const [totalElements, setTotalElements] = useState<number>(500);
  return (
    <div className="p-5">
      <BoLocKetQua label1="Chỉ định" label2="Đã khám" />
      <Row className="mt-3">
        <h2>Danh sách khám tiền mê</h2>
      </Row>
      <TableCustomV2<DanhSachTiepNhanGayMeModel>
        data={danhSachTiepNhanGayMeData}
        columns={DanhSachKhamTienMeColumns}
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

export { DanhSachKhamTienMe };
