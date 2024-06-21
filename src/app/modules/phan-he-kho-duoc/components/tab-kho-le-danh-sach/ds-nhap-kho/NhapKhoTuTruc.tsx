import { useContext, useState } from 'react'
import { TablePagination } from '../../../../component/table/components/TablePagination';
import { handlePagesChange, handleRowsPerPageChange, rowsForPage } from '../../../../utils/PageUtils';
import { Col, Row } from 'react-bootstrap';
import InputSearch from '../../../../component/InputSearch';
import KhoTuTrucTable from './KhoTuTrucTable';
import XuatKhoDialog from '../ds-xuat-kho/XuatKhoDialog';
import { STATUS_ACTION } from '../../../../utils/Constant';
import { AppContext } from '../../../../appContext/AppContext';
import { toast } from 'react-toastify';

type Props = {
  eventKey: string;
  onTabChange?: (activeTab: string | null) => void;
  activeTab?: string;
};

const NhapKhoTuTruc = (props: Props) => {
  let { setIsLoading, currentTab } = useContext(AppContext)
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [shouldOpenDialog, setShouldOpenDialog] = useState<boolean>(false);
  const [rowData, setRowData] = useState<any>({})

  const handleShouldOpenDialog = () => {
    setShouldOpenDialog(true);
  }

  const handleCloseDialog = () => {
    setShouldOpenDialog(false);
  }

  const handleSelectAction = (data: any, method: string) => {
    switch (method) {
      case STATUS_ACTION.VIEW:
        break;
      case STATUS_ACTION.IMPORT:
        handelImport(data)
        break;
    }
  };

  const handleOpenDSKhoDialog = (rowData: any) => {
    setShouldOpenDialog(true);
    setRowData(rowData)
  }

  const handelImport = async (rowData: any) => {
    try {
      let itemData: any = {
        ...rowData,
        isView: false,
      }

      handleOpenDSKhoDialog(itemData)
    } catch (error) {
      setIsLoading(false);
      toast.error("Xảy ra lỗi, vui lòng thử lại!")
    }
  }

  return (
    <>
      <Row className="d-flex justify-content-between pb-2">
        <Col></Col>

        <Col xs={4}>
          <InputSearch handleChange={() => { }} placeholder="Tìm kiếm" />
        </Col>
      </Row>
      <KhoTuTrucTable
        handleSelectAction={handleSelectAction}

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
        shouldOpenDialog &&
        <XuatKhoDialog rowData={rowData} handleCloseDialog={handleCloseDialog} />
      }
    </>
  )
}

export default NhapKhoTuTruc