import { FC, useState } from "react";
import { Button   } from "react-bootstrap";
import { TablePagination } from "../../../component/table/components/TablePagination";
import { handlePagesChange, handleRowsPerPageChange, rowsForPage } from "../../../utils/PageUtils";
import BoLocPTTT from "../BoLocPTTT";
import { BangDanhSachTiepNhanGayMe } from "./bang-danh-sach-tiep-nhan-gay-me/BangDanhSachTiepNhanGayMe";
import { danhSachTiepNhanGayMeData } from "../tra-ket-qua-pttt/fakeData";
import { phongThucHien } from "../../const/PhanHePhauThuatThuThuatconst";
import { STATUS_CHO_KHAM, STATUS_CHO_THUC_HIEN } from "../../const/StatusConst";
import PhieuKhamTienMeDialog from "../phieu-kham-tien-me/PhieuKhamTienMe";

const DanhSachTiepNhanGayMe: FC = () => {

  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [totalPages, setTotalPage] = useState<number>(50)
  const [totalElements, setTotalElements] = useState<number>(500);

  const [dataBenhPham, setDataBenhPham] = useState<any>()
  const [shouldOpenPhieuKhamTienMeDialog, setShouldOpenPhieuKhamTienMeDialog] = useState<boolean>(false);

  const handleOpenPhieuKhamTienMeDialog = () => {
    setShouldOpenPhieuKhamTienMeDialog(true);
  }

  const handleClosePhieuKhamTienMeDialog = () => {
    setShouldOpenPhieuKhamTienMeDialog(false);
  }

  const handleClickRow = (rowData: any) => {
    setDataBenhPham(rowData?.[0]);
  }
  
  return (
    <div className="p-5">
      <BoLocPTTT departmentList={phongThucHien} />

      <div className="call-patient position-relative justify-content-start spaces px-5 pb-10">
        <input
          className="form-control customs-input w-60px spaces px-5 py-1 mx-5"
          name="ten"
          type="text"
        />
        <input
          className="form-control customs-input w-60px spaces px-5 py-1 mx-5"
          name="ten"
          type="text"
        />
        <Button className="spaces mx-5 btn-navy customs-input">Gọi</Button>
        <Button className="spaces mx-5 btn-navy customs-input">Gọi lại</Button>
        <Button className="spaces mx-5 btn-navy customs-input"> KT</Button>
      </div>

      <div>
        <BangDanhSachTiepNhanGayMe
          listData={danhSachTiepNhanGayMeData}
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

      <div className="flex flex-center mt-5">
        <Button size="sm"
          disabled={!dataBenhPham || dataBenhPham?.status !== STATUS_CHO_KHAM}
          className="btn-navy mr-5 spaces px-16 py-10"
          onClick={handleOpenPhieuKhamTienMeDialog}
        >Khám</Button>
        <Button size="sm"
          disabled={!dataBenhPham || dataBenhPham?.status !== STATUS_CHO_THUC_HIEN}
          className="btn-navy mr-5 spaces px-16 py-10"
          onClick={handleOpenPhieuKhamTienMeDialog}
        >Cập nhật KTM</Button>
        <Button size="sm"
          disabled={!dataBenhPham || dataBenhPham?.status !== STATUS_CHO_THUC_HIEN}
          className="btn-navy mr-5 spaces px-16 py-10"
        >Thực hiện</Button>
        <Button size="sm" className="btn-navy mr-5 spaces px-16 py-10">In Phiếu</Button>
        <Button size="sm" className="btn-navy mr-5 spaces px-16 py-10">Thuốc, VT đi kèm</Button>
        <Button size="sm" className="btn-navy mr-5 spaces px-16 py-10">Phụ thu</Button>
        <Button size="sm" className="btn-navy mr-5 spaces px-16 py-10">Khác</Button>
      </div>

      {shouldOpenPhieuKhamTienMeDialog && <PhieuKhamTienMeDialog
        open={shouldOpenPhieuKhamTienMeDialog}
        handleClose={handleClosePhieuKhamTienMeDialog}
      />
      }

    </div>
  );
};
export default DanhSachTiepNhanGayMe;
