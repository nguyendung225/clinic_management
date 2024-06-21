import { Dispatch, FC, SetStateAction, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { IconButtonSave } from "../../../../component/IconSvg";
import InputSearch from "../../../../component/InputSearch";
import { TablePagination } from "../../../../component/table/components/TablePagination";
import { DEFAULT_PAGE_INDEX, KEY, SELECTION_MODE } from "../../../../utils/Constant";
import { handlePagesChange, handleRowsPerPageChange, rowsForPage } from "../../../../utils/PageUtils";
import { KetQuaDichVuColumn } from "../../../constants/Columns";
import { DICH_VU_CAN_LAM_SANG } from "../../../constants/KhamBenh";
import { KetQuaDichVu } from "../../../models/ThongTinKhamBenhModel";
import { DataKetQuaDichVuFake } from "../../FakeData";
import { TableCustom } from "../../../../component/table/table-custom/TableCustom";

interface Props {
  handleClose: Dispatch<SetStateAction<boolean>>;
  setKetQuaCLS: Dispatch<SetStateAction<KetQuaDichVu[]>>;
  name: string;
}

const ModalChonKetQuaDichVu: FC<Props> = ({ handleClose, setKetQuaCLS, name }) => {
  const [page, setPage] = useState<number>(DEFAULT_PAGE_INDEX);
  const [rowsPerPage, setRowsPerPage] = useState<number>(15);
  const [selectedRows, setSelectRows] = useState<KetQuaDichVu[]>([]);
  const [isCoKetQua, setIsCoKetQua] = useState<boolean>(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): any => {
    const value = (event.target as HTMLInputElement).value;
  };

  const updatePageData = () => {};
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    KEY.ENTER === event.key && updatePageData();
  };

  const handleSubmit = () => {
    setKetQuaCLS(selectedRows);
    handleClose(false);
  };
  const switchDicVu = () => {
    switch (name) {
      case DICH_VU_CAN_LAM_SANG.XET_NGHIEM_MAU.code:
        //call api lấy ds dịch vụ xét nghiệm máu
        break;

      default:
        break;
    }
  };

  const handleCheckResult = () => {
    setIsCoKetQua(!isCoKetQua);
  };

  const handleConditionSelectRows = (rows: any, setSelectedRows: any ) => {
    rows?.forEach((row: any)=>{
      if(row?.original?.ketQua){
        row.isSelected = isCoKetQua
      }
     })
     setSelectedRows(rows?.filter((row: any)=> row?.isSelected))
  };
  return (
    <>
      <Modal size="xl" show={true} animation centered className="dialog-background">
        <div className="timKiemBenhNhan">
          <Modal.Header className="py-3 header-modal">
            <Modal.Title className="text-pri">Kết quả dịch vụ</Modal.Title>
            <button className="btn-close" onClick={() => handleClose(false)}></button>
          </Modal.Header>
          <Modal.Body className="py-16 px-24 spaces">
            <div className="d-flex align-items-center pb-5">
              <div className="fw-semibold me-2">Tìm kiếm</div>
              <InputSearch
                className="w-325px"
                handleChange={handleChange}
                handleSearch={updatePageData}
                handleKeyDown={handleKeyDown}
                placeholder="Tìm kiếm"
                type="text"
              />
            </div>
            <TableCustom
              data={DataKetQuaDichVuFake}
              columns={KetQuaDichVuColumn}
              selectionMode={SELECTION_MODE.MULTI}
              getSelectedRowsData={setSelectRows}
              minHeight={450}
              handleConditionSelectRows={handleConditionSelectRows}
              isCondition={isCoKetQua}
            />
            <TablePagination
              page={page}
              setPage={setPage}
              handlePagesChange={handlePagesChange}
              handleRowsPerPageChange={handleRowsPerPageChange}
              rowsForPage={rowsForPage}
              rowsPerPage={rowsPerPage}
              setRowsPerPage={setRowsPerPage}
              totalPages={5}
              totalElements={20}
            />
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-center py-1">
            <Button className="btn-fill" onClick={handleCheckResult}>
              
              <span>{isCoKetQua ?<> <i className="bi bi-x-lg"></i>Hủy chọn đã trả kết quả</> : <><i className="bi bi-check-lg"></i> Đã trả kết quả</>}</span>
            </Button>
            <Button className="btn-fill" type="submit" onClick={handleSubmit}>
              <IconButtonSave />
              <span>Lưu</span>
            </Button>
            <Button className="btn-outline" onClick={() => handleClose(false)}>
              Đóng
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
};

export default ModalChonKetQuaDichVu;
