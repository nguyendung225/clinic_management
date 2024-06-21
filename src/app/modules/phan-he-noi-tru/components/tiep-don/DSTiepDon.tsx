import { FC, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import SearchAdvanced from "../../../component/SearchAdvanced";
import ThongTinDieuTri from "./ThongTinDieuTri";
import GridDSTiepDonBenhNhan from "./GridDSTiepDonBenhNhan";
import TiepNhanVaoKhoaModal from "./TiepNhanVaoKhoaModal";
import { TablePagination } from "../../../component/table/components/TablePagination";
import { handlePagesChange, handleRowsPerPageChange, rowsForPage } from "../../../utils/PageUtils";
import { trangThaiNhapVienOptions } from "../../const/PhanHeNoitruConst";

const DSTiepDon: FC = () => {
    const [benhNhan, setBenhNhan] = useState();
    const [isOpenTiepNhanModal, setIsOpenTiepNhanModal] = useState<boolean>(false);;
    const [page, setPage] = useState<number>(1);
    const [rowsPerPage, setRowsPerPage] = useState<number>(10);

    const handleClickRowData = (data :any) => {
        setBenhNhan(data[0]);
    }
    const handleCloseTiepNhanModal = () => {
        setIsOpenTiepNhanModal(false);
    }
    const handleOpenTiepNhanModal = () => {
        setIsOpenTiepNhanModal(true);
    }
    return (
      <div className='pt-0 px-3 pb-3'>
        <Row>
          <Col className='p-4 box-shadow' sm='9'>
            <SearchAdvanced
              handleSearch={() => {}}
              statusOption={trangThaiNhapVienOptions}
            />
            <div className='pt-3'>
              <GridDSTiepDonBenhNhan handleClickRowData={handleClickRowData} />
              <TablePagination
                className='border-0'
                page={page}
                setPage={setPage}
                handlePagesChange={handlePagesChange}
                handleRowsPerPageChange={handleRowsPerPageChange}
                rowsForPage={rowsForPage}
                rowsPerPage={rowsPerPage}
                setRowsPerPage={setRowsPerPage}
                totalPages={10}
                totalElements={100}
              />
            </div>
          </Col>
          <Col className='p-4 box-shadow' sm='3'>
            <ThongTinDieuTri data={benhNhan} />
          </Col>
        </Row>
        <div className='flex flex-center pt-8 pb-0'>
          <Button className='btn-navy mr-5 ' onClick={handleOpenTiepNhanModal}>Nhập khoa</Button>
          <Button className='btn-navy mr-5 '>Bệnh án</Button>
          <Button className='btn-navy mr-5 '>Hủy tiếp nhận</Button>
            <TiepNhanVaoKhoaModal handleCloseModal={handleCloseTiepNhanModal} isOpenTiepNhanModal={isOpenTiepNhanModal}/>
        </div>
      </div>
    );
};
export default DSTiepDon;
