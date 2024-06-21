import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import InputSearch from "../../../../component/InputSearch";
import { TablePagination } from "../../../../component/table/components/TablePagination";
import DSKhoTable from "./DSKhoTable";
import { handlePagesChange, handleRowsPerPageChange, rowsForPage } from "../../../../utils/PageUtils";
import DSKhoDialog from "./DSKhoDialog";
import { ConfirmDialog } from "../../../../component/ConfirmDialog";
import { IKho } from "../../../models/QuanLyKhoModels";
import { deleteWarehouse, getByIdWarehouse, searchWarehouse } from "../../../services/DSKhoServices";
import { INITIAL_DS_KHO } from "../../../consts/QuanLyKhoConst";
import { IResponseData } from "../../../../utils/models";
import { CODE, DEFAULT_TOTAL_ELEMENTS, DEFAULT_TOTAL_PAGES, KEY, STATUS_ACTION } from "../../../../utils/Constant";
import { AppContext } from "../../../../appContext/AppContext";
import { toast } from "react-toastify";
import "../../../PhanHeKhoDuoc.scss"

type Props = {
  eventKey: string;
  onTabChange?: (activeTab: string | null) => void;
  activeTab?: string;
};

export default function DSKho(props: Props) {
  let { setIsLoading, currentTab } = useContext(AppContext)
  const [page, setPage] = useState<number>(1);
  const [keyword, setKeyword] = useState<string>("");
  const [rowsPerPage, setRowsPerPage] = useState<number>(15);
  const [totalElements, setTotalElements] = useState<number>(DEFAULT_TOTAL_ELEMENTS);
  const [totalPages, setTotalPages] = useState<number>(DEFAULT_TOTAL_PAGES);
  const [shouldOpenDSKhoDialog, setShouldOpenDSKhoDialog] = useState<boolean>(false);
  const [shouldOpenConfirmDialog, setShouldOpenConfirmDialog] = useState<boolean>(false);
  const [rowData, setRowData] = useState<IKho>(INITIAL_DS_KHO)
  const [listWarehouse, setListWarehouse] = useState<any>([])

  const handleOpenDSKhoDialog = (rowData: IKho) => {
    setShouldOpenDSKhoDialog(true);
    setRowData(rowData?.id ? rowData : INITIAL_DS_KHO)
  }

  const handleCloseKhoDialog = () => {
    setShouldOpenConfirmDialog(false);
    setShouldOpenDSKhoDialog(false);
  }

  const handleCloseAllKhoDialog = () => {
    setShouldOpenConfirmDialog(false);
    setShouldOpenDSKhoDialog(false);
    getListWarehouse();
  }

  const getListWarehouse = async () => {
    try {
      let searchObject = {
        pageIndex: page,
        pageSize: rowsPerPage,
        keyword: keyword,
      }
      setIsLoading(true);
      let { data }: IResponseData = await searchWarehouse(searchObject)
      setIsLoading(false);

      if (CODE.SUCCESS === data?.code) {
        setTotalPages(data?.data?.totalPages)
        setTotalElements(data?.data?.totalElements)
        setListWarehouse(data?.data?.content)
        return;
      }

      toast.error(data?.message);
    } catch (error) {
      setIsLoading(false)
      toast.error("Xảy ra lỗi, vui lòng thử lại!");
    }
  }

  useEffect(() => {
    // if (currentTab === KEY_TAB_DS_KHO_DUOC.KHO && props.eventKey === props.activeTab) {
    //   getListWarehouse()
    // }
  }, [page, rowsPerPage, currentTab, props.activeTab])

  const handleSelectAction = (data: IKho, method: string) => {
    switch (method) {
      case STATUS_ACTION.VIEW:
        handelView(data);
        break;
      case STATUS_ACTION.DELETE:
        handleShouldOpenConfirmDialog(data);
        break;
      case STATUS_ACTION.EDIT:
        handelEdit(data);
        break;
    }
  };

  const handelEdit = async (rowData: IKho) => {
    try {
      setIsLoading(true);
      let { data }: IResponseData = await getByIdWarehouse(rowData?.id)
      setIsLoading(false);

      if (CODE.SUCCESS === data?.code) {
        let itemData = {
          ...data?.data,
          isView: false,
        }
        handleOpenDSKhoDialog(itemData)
        return;
      }

      toast.error(data?.message)
    } catch (error) {
      setIsLoading(false);
      toast.error("Xảy ra lỗi, vui lòng thử lại!")
    }
  }

  const handelView = async (rowData: IKho) => {
    try {
      setIsLoading(true);
      let { data }: IResponseData = await getByIdWarehouse(rowData?.id)
      setIsLoading(false);

      if (CODE.SUCCESS === data?.code) {
        let itemData = {
          ...data?.data,
          isView: true,
        }
        handleOpenDSKhoDialog(itemData)
        return;
      }

      toast.error(data?.message)
    } catch (error) {
      setIsLoading(false);
      toast.error("Xảy ra lỗi, vui lòng thử lại!")
    }
  }

  const handleShouldOpenConfirmDialog = (rowData: IKho) => {
    setShouldOpenConfirmDialog(true);
    setRowData(rowData)
  }

  const handleConfirmDelete = async () => {
    try {
      setIsLoading(true);
      let { data }: IResponseData = await deleteWarehouse(rowData?.id)
      setIsLoading(false);

      if (CODE.SUCCESS === data?.code) {
        handleCloseAllKhoDialog()
        toast.success(data?.message);
        return;
      }

      toast.error(data?.message);
    } catch (error) {
      setIsLoading(false)
      toast.error("Xảy ra lỗi, vui lòng thử lại!");
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (KEY.ENTER === event.key) {
      getListWarehouse()
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
  }

  const handleSearch = () => {
    getListWarehouse()
  }

  return (
    <div className="dsKho">
      <Row className="d-flex justify-content-between pb-2">
        <Col>
          <Button className="btn-navy min-w-80px" size="sm" onClick={() => handleOpenDSKhoDialog(INITIAL_DS_KHO)}>
            Thêm mới
          </Button>
        </Col>

        <Col xs={4}>
          <InputSearch
            value={keyword}
            name="keyword"
            handleChange={handleChange}
            handleKeyDown={handleKeyDown}
            handleSearch={handleSearch}
            placeholder="Tìm kiếm" />
        </Col>
      </Row>
      <DSKhoTable
        data={listWarehouse}
        handleSelectAction={handleSelectAction}
        handleShouldOpenConfirmDialog={handleShouldOpenConfirmDialog}
        page={page}
        rowsPerPage={rowsPerPage}
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

      {shouldOpenDSKhoDialog &&
        <DSKhoDialog
          rowData={rowData}
          handleCloseDialog={handleCloseKhoDialog}
          handleCloseAllDialog={handleCloseAllKhoDialog}
        />
      }

      {shouldOpenConfirmDialog &&
        <ConfirmDialog
          show={true}
          title="Xác nhận xóa"
          message="Bạn có chắc chắn muốn xóa không?"
          yes="Xác nhận"
          close="Hủy"
          onCloseClick={handleCloseKhoDialog}
          onYesClick={handleConfirmDelete}
        />
      }
    </div>
  );
}
