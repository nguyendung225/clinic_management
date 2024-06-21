import React, { useEffect, useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import InputSearch from "../../../../component/InputSearch";
import NhaCungCapTable from "./NhaCungCapTable";
import Autocomplete from "../../../../component/AutocompleteObject";
import { getAllProvince } from "../../../../phan-he-tiep-nhan-thanh-toan/services/TiepNhanServices";
import { CODE_SUCCESS, DEFAULT_PAGE_INDEX, DEFAULT_PAGE_SIZE, DEFAULT_TOTAL_ELEMENTS, DEFAULT_TOTAL_PAGES, ERROR_MESSAGE, KEY, RESPONSE_MESSAGE, SEARCH_OBJECT_MAX_SIZE, STATUS_ACTION } from "../../../../utils/Constant";
import { TablePagination } from "../../../../component/table/components/TablePagination";
import {
  handlePagesChange,
  handleRowsPerPageChange,
  rowsForPage,
} from "../../../../utils/PageUtils";
import { INITIAL_NCC } from "../../../consts/DanhMucConst";
import { ConfirmDialog } from "../../../../component/ConfirmDialog";
import { INhaCungCap } from "../../../models/NhaCungCapModel";
import { deleteNhaCungCap, getListNhaCungCap, getLoaiNhaCungCap, getNhaCungCapById } from "../../../services/NhaCungCapServices";
import { toast } from "react-toastify";
import { TYPE_SIMPLE_CATEGORIES } from "../../../consts/PhanHeKhoDuocConst";
import NhaCungCapDialogV2 from "./NhaCungCapDialogV2";

function DSNhaCungCap() {
  const [pageIndex, setPageIndex] = useState<number>(DEFAULT_PAGE_INDEX);
  const [pageSize, setPageSize] = useState<number>(DEFAULT_PAGE_SIZE);
  const [totalPages, setTotalPages] = useState<number>(DEFAULT_TOTAL_PAGES);
  const [totalElements, setTotalElements] = useState<number>(DEFAULT_TOTAL_ELEMENTS);
  const [objectSearch, setObjectSearch] = useState({
    unitId: "",
    provinceId: "",
  })
  const [keyword, setKeyword] = useState<string>("");

  const [shouldOpenNCCDialog, setShouldOpenNCCDialog] = useState<boolean>(false);
  const [rowData, setRowData] = useState<INhaCungCap>(INITIAL_NCC);
  const [shouldOpenConfirmDialog, setShouldOpenConfirmDialog] = useState<boolean>(false);
  const [listNhaCungCap, setListNhaCungCap] = useState<INhaCungCap[]>([]);
  const [reloadData, setReloadData] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);

  useEffect(() => {
    handleGetListNhaCungCap();
  }, [pageIndex, pageSize, reloadData, objectSearch?.unitId, objectSearch?.provinceId])

  const handleSelectSearch = (searchObject: any, name: string) => {
    setObjectSearch({ ...objectSearch, [name]: searchObject?.id })
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (KEY.ENTER === event.key) {
      handleGetListNhaCungCap();
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
  }

  const handleSearch = () => {
    handleGetListNhaCungCap();
  }

  const handleGetListNhaCungCap = async () => {
    const searchObject = {
      pageIndex,
      pageSize,
      unitId: objectSearch?.unitId,
      provinceId: objectSearch?.provinceId,
      keyword
    }
    try {
      const { data } = await getListNhaCungCap(searchObject)
      if (data?.code === CODE_SUCCESS) {
        setListNhaCungCap(data?.data?.content);
        setTotalElements(data?.data?.totalElements);
        setTotalPages(data?.data?.totalPages);
      }
      else {
        toast.error(ERROR_MESSAGE)
      }
    } catch (error) {
      toast.error(ERROR_MESSAGE)
    }
  }

  const handleShouldOpenNCCDialog = (rowData: INhaCungCap, method?: string) => {
    if (rowData?.id) {
      handleGetNhaCungCapById(rowData?.id);
      setDisabled(method === STATUS_ACTION.VIEW);
    } else {
      setRowData(INITIAL_NCC);
      setShouldOpenNCCDialog(true);
      setDisabled(false);
    }
  }

  const handleGetNhaCungCapById = async (id: string) => {
    try {
      const { data } = await getNhaCungCapById(id);
      if (data?.code === CODE_SUCCESS) {
        setRowData(data?.data);
        setShouldOpenNCCDialog(true);
      }
      else {
        toast.error(ERROR_MESSAGE);
      }
    } catch (error) {
      toast.error(ERROR_MESSAGE);
    }
  }

  const handleCloseNCCDialog = () => {
    setShouldOpenNCCDialog(false);
    setReloadData(!reloadData);
  }

  const handleShouldOpenConfirmDialog = (rowData: INhaCungCap) => {
    setShouldOpenConfirmDialog(true);
    setRowData(rowData)
  }

  const handleCloseConfirmDialog = () => {
    setShouldOpenConfirmDialog(false);
  }

  const handleConfirmDelete = () => {
    handleDeleteNhaCungCap(rowData?.id as string)
  }

  const handleDeleteNhaCungCap = async (id: string) => {
    try {
      const { data } = await deleteNhaCungCap(id);
      if (data?.code === CODE_SUCCESS) {
        toast.success(RESPONSE_MESSAGE.DELETE.SUCCESS);
        setShouldOpenConfirmDialog(false);
        setReloadData(!reloadData);
      } else {
        toast.error(ERROR_MESSAGE);
      }
    } catch (error) {
      toast.error(ERROR_MESSAGE);
    }
  }

  return (
    <>
      <Row className="d-flex justify-content-between pb-2">
        <Col>
          <Button className="btn-navy min-w-80px" size="sm" onClick={() => handleShouldOpenNCCDialog(INITIAL_NCC)}>
            Thêm mới
          </Button>
        </Col>
        <Col className="px-1 z-index-11">
          <Autocomplete
            options={[]}
            value={""}
            placeholder="Chọn loại NCC"
            valueField="id"
            getOptionLabel={(option) => `${option.code} - ${option.name}`}
            onChange={(selectOption) => handleSelectSearch(selectOption, "unitId")}
            searchFunction={() => getLoaiNhaCungCap(TYPE_SIMPLE_CATEGORIES.LOAI_NHA_CUNG_CAP)}
            searchObject={{}}
          />
        </Col>
        <Col className="px-1 z-index-11">
          <Autocomplete
            placeholder="Chọn tỉnh"
            options={[]}
            value={""}
            valueField="id"
            getOptionLabel={(option) => `${option.code} - ${option.name}`}
            onChange={(selectOption) => handleSelectSearch(selectOption, "provinceId")}
            searchFunction={getAllProvince}
            searchObject={SEARCH_OBJECT_MAX_SIZE}
          />
        </Col>
        <Col className="px-1" xs={4}>
          <InputSearch
            handleChange={handleChange}
            handleKeyDown={handleKeyDown}
            handleSearch={handleSearch}
            placeholder="Tìm kiếm"
          />
        </Col>
      </Row>
      <NhaCungCapTable
        listNhaCungCap={listNhaCungCap}
        handleOpenNCCDialog={handleShouldOpenNCCDialog}
        handleShouldOpenConfirmDialog={handleShouldOpenConfirmDialog}
        page={pageIndex}
        rowsPerPage={pageSize}
      />
      <TablePagination
        handlePagesChange={handlePagesChange}
        handleRowsPerPageChange={handleRowsPerPageChange}
        rowsPerPage={pageSize}
        rowsForPage={rowsForPage}
        page={pageIndex}
        setPage={setPageIndex}
        setRowsPerPage={setPageSize}
        totalPages={totalPages}
        totalElements={totalElements}
      />

      {shouldOpenNCCDialog &&
        <NhaCungCapDialogV2
          disabled={disabled}
          rowData={rowData}
          handleCloseDialog={handleCloseNCCDialog}
        />
      }

      {shouldOpenConfirmDialog &&
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

export default DSNhaCungCap;
