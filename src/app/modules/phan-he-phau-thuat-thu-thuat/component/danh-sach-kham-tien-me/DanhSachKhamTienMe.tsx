import { Button, Row } from "react-bootstrap";
import { BoLocKetQua } from "../../../component/BoLocKetQua";

import { danhSachKhamTienMeData } from "../tra-ket-qua-pttt/fakeData";
import { DanhSachKhamTienMeColumns } from "./DanhSachKhamTienMeColumns";
import { TablePagination } from "../../../component/table/components/TablePagination";
import { useState } from "react";
import { handlePagesChange, handleRowsPerPageChange, rowsForPage } from "../../../utils/PageUtils";
import { DanhSachKhamTienMeModel } from "../../model/DanhSachKhamTienMeModel";
// import { STATUS_CHO_KHAM, STATUS_DA_KHAM } from "../../const/StatusConst";
import PhieuKhamTienMeDialog from "../phieu-kham-tien-me/PhieuKhamTienMe";
import { TableCustom } from "../../../component/table/table-custom/TableCustom";

const DanhSachKhamTienMe = () => {
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [totalPages, setTotalPage] = useState<number>(50)
  const [totalElements, setTotalElements] = useState<number>(500);
  const [dataBenhPham, setDataBenhPham] = useState<any>()

  const [shouldOpenPhieuKhamTienMeDialog, setShouldOpenPhieuKhamTienMeDialog] = useState<boolean>(false);


  const handleClickRow = (rowData: any) => {
    setDataBenhPham(rowData?.[0]);
  }

  const handleOpenPhieuKhamTienMeDialog = () => {
    setShouldOpenPhieuKhamTienMeDialog(true);
  }

  const handleClosePhieuKhamTienMeDialog = () => {
    setShouldOpenPhieuKhamTienMeDialog(false);
  }

  return (
    <div className="p-5">
      <BoLocKetQua label1="Chỉ định" label2="Đã khám" />
      <Row className="mt-3">
        <h2>Danh sách khám tiền mê</h2>
      </Row>
      <TableCustom<DanhSachKhamTienMeModel>
        data={danhSachKhamTienMeData}
        columns={DanhSachKhamTienMeColumns}
        selectionMode="single"
        getSelectedRowsData={(rowData: any) => handleClickRow(rowData)}
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

      <div className="flex flex-center mt-5">
        <Button size="sm"
          // disabled={!dataBenhPham || dataBenhPham?.status === STATUS_DA_KHAM}
          className="btn-navy mr-5 spaces px-16 py-10"
          onClick={handleOpenPhieuKhamTienMeDialog}
        >Khám</Button>
        <Button size="sm"
          // disabled={!dataBenhPham || dataBenhPham?.status === STATUS_CHO_KHAM}
          className="btn-navy mr-5 spaces px-16 py-10"
          onClick={handleOpenPhieuKhamTienMeDialog}
        >Cập nhật KTM</Button>
        <Button size="sm" className="btn-navy mr-5 spaces px-16 py-10">In Phiếu</Button>
      </div>

      {shouldOpenPhieuKhamTienMeDialog && <PhieuKhamTienMeDialog
        open={shouldOpenPhieuKhamTienMeDialog}
        handleClose={handleClosePhieuKhamTienMeDialog}
      />
      }
    </div>
  );
};

export { DanhSachKhamTienMe };
