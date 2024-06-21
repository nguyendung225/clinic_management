import { useContext, useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import { AppContext } from "../../../../appContext/AppContext";
import Autocomplete from "../../../../component/AutocompleteObject";
import { ConfirmDialog } from "../../../../component/ConfirmDialog";
import InputSearch from "../../../../component/InputSearch";
import { TablePagination } from "../../../../component/table/components/TablePagination";
import { getAllProvince } from "../../../../phan-he-tiep-nhan-thanh-toan/services/TiepNhanServices";
import { CODE_SUCCESS, DEFAULT_TOTAL_ELEMENTS, DEFAULT_TOTAL_PAGES, ERROR_MESSAGE, KEY, RESPONSE_MESSAGE, SEARCH_OBJECT_MAX_SIZE, STATUS_ACTION } from "../../../../utils/Constant";
import { handlePagesChange, handleRowsPerPageChange, rowsForPage, } from "../../../../utils/PageUtils";
import { INIT_PHIEUNHAPKHO, KEY_TAB_DS_QUAN_LY_KHO } from '../../../consts/QuanLyKhoConst';
import NhapKhoDialog from "./NhapKhoDialog";
import NhapKhoTable from "./NhapKhoTable";
import { deletePhieuNhapKho, getListPhieuNhapKho, getPhieuNhapKhoById } from "../../../services/NhapKhoServices";
import { IPhieuNhapKho } from "../../../models/NhapKhoModels";

type Props = {
  eventKey: string;
  onTabChange?: (activeTab: string | null) => void;
  activeTab?: string;
};

function DSNhapKho(props: Props) {
  let { setIsLoading, currentTab } = useContext(AppContext)
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [totalElements, setTotalElements] = useState<number>(DEFAULT_TOTAL_ELEMENTS);
  const [totalPages, setTotalPages] = useState<number>(DEFAULT_TOTAL_PAGES);
  const [keyword, setKeyword] = useState<string>("")

  const [data, setData] = useState<IPhieuNhapKho>({ ...INIT_PHIEUNHAPKHO });
  const [openPhieuNhapKho, setPhieuNhapKho] = useState<boolean>(false);
  const [listPhieuNhapKho, setListPhieuNhapKho] = useState<IPhieuNhapKho[]>([]);
  const [openConfirmDialog, setOpenConfirmDialog] = useState<boolean>(false);

  useEffect(() => {
    if (currentTab === KEY_TAB_DS_QUAN_LY_KHO.NHAP_KHO && props.eventKey === props.activeTab) {
      handleGetListPhieuNhapKho()
    }
  }, [page, rowsPerPage, currentTab, props.activeTab])

  const handleSelectAction = (data: IPhieuNhapKho, method: string) => {
    switch (method) {
      case STATUS_ACTION.VIEW:
        handleGetPhieuNhapKhoById(data);
        break;
      case STATUS_ACTION.DELETE:
        handleOpenConfirmDialog(data);
        break;
      case STATUS_ACTION.EDIT:
        handleGetPhieuNhapKhoById(data);
        break;
    }
  };

  const handleGetListPhieuNhapKho = async () => {
    const searchObject = {
      pageIndex: page,
      pageSize: rowsPerPage,
      keyword: keyword
    }

    try {
      const { data } = await getListPhieuNhapKho(searchObject);
      if (data?.code === CODE_SUCCESS) {
        setListPhieuNhapKho(data?.data?.content);
        setTotalPages(data?.data?.totalPages);
        setTotalElements(data?.data?.totalElements);
      }
    } catch (error) {
      toast.error(ERROR_MESSAGE)
    }
  }

  const handleGetPhieuNhapKhoById = async (item: IPhieuNhapKho) => {
    try {
      const { data } = await getPhieuNhapKhoById(item?.id as string);
      if (data?.code === CODE_SUCCESS) {
        handleOpenPhieuNhapKhoDialog(data?.data)
      }
    } catch (error) {
      toast.error(ERROR_MESSAGE)
    }
  }

  const handleDeletePhieuNhapKho = async (id: string) => {
    try {
      const { data } = await deletePhieuNhapKho(id);
      if (data?.code === CODE_SUCCESS) {
        toast.success(RESPONSE_MESSAGE.DELETE.SUCCESS);
        setOpenConfirmDialog(false);
        handleGetListPhieuNhapKho();
      }
    } catch (error) {
      toast.error(ERROR_MESSAGE)
    }
  }

  const handleOpenPhieuNhapKhoDialog = (rowData: IPhieuNhapKho) => {
    setData(rowData?.id ? rowData : INIT_PHIEUNHAPKHO)
    setPhieuNhapKho(true);
  }

  const handleOpenConfirmDialog = (rowData: IPhieuNhapKho) => {
    setOpenConfirmDialog(true);
    setData(rowData)
  }

  const handleClosePhieuNhapKhoDialog = () => {
    setPhieuNhapKho(false);
    handleGetListPhieuNhapKho();
  }

  const handleCloseConfirmDialog = () => {
    setOpenConfirmDialog(false);
  }

  const handleConfirmDelete = () => {
    handleDeletePhieuNhapKho(data?.id as string);
    setOpenConfirmDialog(false);
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (KEY.ENTER === event.key) {
      handleGetListPhieuNhapKho()
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
  }

  const handleSearch = () => {
    handleGetListPhieuNhapKho()
  }

  return (
    <>
      <Row className="d-flex justify-content-between pb-2">
        <Col>
          <Button className="btn-navy min-w-80px" size="sm" onClick={() => handleOpenPhieuNhapKhoDialog(INIT_PHIEUNHAPKHO)}>
            Thêm mới
          </Button>
        </Col>
        <Col xs={4} className="px-1">
          <InputSearch
            handleChange={handleChange}
            handleKeyDown={handleKeyDown}
            handleSearch={handleSearch}
            placeholder="Tìm kiếm"
          />
        </Col>
      </Row>
      <NhapKhoTable
        handleSelectAction={handleSelectAction}
        data={listPhieuNhapKho}
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
      {openPhieuNhapKho && (
        <NhapKhoDialog
          show={openPhieuNhapKho}
          handleClose={handleClosePhieuNhapKhoDialog}
          data={data}
        />
      )}
      {openConfirmDialog &&
        <ConfirmDialog
          show={true}
          title="Xác nhận xóa"
          message="Bạn có chắc chắn muốn xóa không?"
          yes="Xác nhận"
          close="Hủy"
          onCloseClick={handleCloseConfirmDialog}
          onYesClick={handleConfirmDelete}
        />
      }
    </>
  );
}

export default DSNhapKho;
