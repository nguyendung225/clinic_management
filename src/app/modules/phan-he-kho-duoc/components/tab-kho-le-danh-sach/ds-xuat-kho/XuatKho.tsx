import { useState } from 'react'
import { TablePagination } from '../../../../component/table/components/TablePagination';
import { handlePagesChange, handleRowsPerPageChange, rowsForPage } from '../../../../utils/PageUtils';
import { Button, Col, Row } from 'react-bootstrap';
import InputSearch from '../../../../component/InputSearch';
import XuatKhoTable from './XuatKhoTable';
import XuatKhoDialog from './XuatKhoDialog';

type Props = {}

const XuatKho = (props: Props) => {
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [shouldOpenXuatKhoDialog, setShouldOpenXuatKhoDialog] = useState<boolean>(false);
  const [rowData, setRowData] = useState<any>({})

  const handleShouldOpenXuatKhoDialog = () => {
    setShouldOpenXuatKhoDialog(true);
  }

  const handleCloseXuatKhoDialog = () => {
      setShouldOpenXuatKhoDialog(false);
  }
  return (
    <>
      <Row className="d-flex justify-content-between pb-2">
        <Col>
          <Button className="btn-navy min-w-80px" size="sm" onClick={() => handleShouldOpenXuatKhoDialog()}>
            Thêm mới
          </Button>
        </Col>

        <Col xs={4}>
          <InputSearch handleChange={() => { }} placeholder="Tìm kiếm" />
        </Col>
      </Row>
      <XuatKhoTable
        
      />
      <TablePagination
        handlePagesChange={handlePagesChange}
        handleRowsPerPageChange={handleRowsPerPageChange}
        rowsPerPage={rowsPerPage}
        rowsForPage={rowsForPage}
        page={page}
        setPage={setPage}
        setRowsPerPage={setRowsPerPage}
        totalPages={99}
        totalElements={10}
      />

      {
        shouldOpenXuatKhoDialog && 
        <XuatKhoDialog rowData={rowData} handleCloseDialog={handleCloseXuatKhoDialog}/>
      }
    </>
  )
}

export default XuatKho