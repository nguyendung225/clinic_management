import { useState } from "react";
import { TablePagination } from "../../../component/TablePagination";
import { TableCustomV2 } from "../../../component/table-custom-v2/TableCustomV2";
import { DichVuDaChiDinh } from "../../models/DichVuDaChiDinhModel";
import { DichVuDaChiDinhColumns } from "./DichVuDaChiDinhColumns";
import { handlePagesChange, handleRowsPerPageChange, rowsForPage } from "../../../utils/PageUtils";
import { DichVuDaChiDinhData } from "./FakeData";
import { BangDanhSachKetQua } from "./BangDanhSachKetQua";
import { DanhSachKetQua } from "./FakeData";
import { Button } from "react-bootstrap";

const KetQuaCLS = () => {
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [totalPages, setTotalPage] = useState<number>(50)
  const [totalElements, setTotalElements] = useState<number>(500);
  return (
    <div className="p-5">
      <div className="mb-5">
        <TableCustomV2<DichVuDaChiDinh>
          columns={DichVuDaChiDinhColumns}
          data={DichVuDaChiDinhData}
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
      <div className="mb-5">
        <BangDanhSachKetQua data={DanhSachKetQua}/>
      </div>
      <div className="d-flex gap-4 justify-content-center">
        <Button className="min-w-80px btn-navy">Bắt đầu</Button>
        <Button className="min-w-80px btn-navy">Khám bệnh</Button>
        <Button className="min-w-80px btn-navy">Chỉ định CLS</Button>
        <Button className="min-w-80px btn-navy">Thuốc</Button>
        <Button className="min-w-80px btn-navy">Bệnh án</Button>
        <Button className="min-w-80px btn-navy">Phiếu thu</Button>
        <Button className="min-w-80px btn-navy">Chuyển PK</Button>
      </div>
    </div>
  );
};

export { KetQuaCLS };
