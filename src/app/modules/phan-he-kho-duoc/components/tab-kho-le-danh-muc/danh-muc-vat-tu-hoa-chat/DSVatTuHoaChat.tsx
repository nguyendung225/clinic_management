import React, { useContext, useEffect, useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import InputSearch from "../../../../component/InputSearch";
import VatTuHoaChatTable from "./VatTuHoaChatTable";
import { TablePagination } from "../../../../component/table/components/TablePagination";
import {
  handlePagesChange,
  handleRowsPerPageChange,
  rowsForPage,
} from "../../../../utils/PageUtils";
import { initFormVTHC } from "../../../consts/VatTuHoaChatConst";
import { VatTuHoaChat, VatTuHoaChatConvert } from "../../../models/VatTuHoaChatModel";
import { CODE_SUCCESS, DEFAULT_PAGE_INDEX, DEFAULT_PAGE_SIZE, DEFAULT_TOTAL_ELEMENTS, DEFAULT_TOTAL_PAGES, KEY, STATUS_ACTION } from "../../../../utils/Constant";
import { KEY_TAB_DS_KHO_DUOC, TYPE_PRODUCT } from "../../../consts/PhanHeKhoDuocConst";
import { deleteProduct, getDanhSachVatTuHoaChat } from "../../../services/VatTuVaHoaChatServices";
import { toast } from "react-toastify";
import { ConfirmDialog } from "../../../../component/ConfirmDialog";
import { AppContext } from "../../../../appContext/AppContext";
import { convertData } from "../../../utils/Utils";
import VatTuHoaChatDialogV2 from "./VatTuHoaChatDialogV2";

type Props = {
  eventKey: string;
  onTabChange?: (activeTab: string | null) => void;
  activeTab?: string;
};
function DSVatTuHoaChat(props: Props) {
  const { setIsLoading, currentTab } = useContext(AppContext)
  const [danhSachVatTuHoaChat, setDanhSachVatTuHoaChat] = useState<VatTuHoaChat[]>([]);

  const [pageIndex, setPageIndex] = useState<number>(DEFAULT_PAGE_INDEX);
  const [pageSize, setPageSize] = useState<number>(DEFAULT_PAGE_SIZE);
  const [totalPages, setTotalPages] = useState<number>(DEFAULT_TOTAL_PAGES);
  const [totalElements, setTotalElements] = useState<number>(DEFAULT_TOTAL_ELEMENTS);
  const [openDSVatTu, setOpenDSVatTu] = useState<boolean>(false);
  const [isView, setIsView] = useState<boolean>(false);
  const [thongTinVatTu, setThongTinVatTu] = useState<VatTuHoaChatConvert>(initFormVTHC);
  const [titleDialog, setTitleDialog] = useState<string>("");
  const [openDeleteDialog, setOpenDeleteDialog] = useState<boolean>(false);
  const [updateTableData, setUpdateTableData] = useState<boolean>(false);
  const [searchKeywords, setSearchKeywords] = useState<string | number>("");

   const handelCloseDSVatTuDialog = () => {
     setOpenDSVatTu(false);
     setThongTinVatTu(initFormVTHC);
     setIsView(false);
   };
   const handleOpenDSVatTuDialog = (data: VatTuHoaChat, method?: string) => {
     if (method === STATUS_ACTION.VIEW) {
       setTitleDialog("Thông tin vật tư");
       setIsView(true);
     } else if (method === STATUS_ACTION.EDIT) {
       setTitleDialog("Sửa thông tin vật tư");
     } else {
       setTitleDialog("Thêm mới thông tin vật tư");
       setThongTinVatTu(initFormVTHC);
     }
     setThongTinVatTu({
      ...data,
      attributeValues: convertData(data?.attributeValues)
     });
     setOpenDSVatTu(true);
   };

  useEffect(() => {
    // if (currentTab === KEY_TAB_DS_KHO_DUOC.DANH_MUC && props.eventKey === props.activeTab) {
    //   handleGetDanhSachVatTuHoaChat();
    // }
  }, [pageIndex, pageSize, updateTableData, currentTab, props?.activeTab]);

  const handleGetDanhSachVatTuHoaChat = async () => {
    const searchObject = {
      pageIndex,
      pageSize,
      productType: TYPE_PRODUCT.VAT_TU,
      keyword: searchKeywords,
      hasDeleted: false
    }
    setIsLoading(true);
    try {
      const { data } = await getDanhSachVatTuHoaChat(searchObject);
      if (data?.code === CODE_SUCCESS) {
        setDanhSachVatTuHoaChat(data?.data?.content);
        setTotalElements(data?.data?.totalElements);
        setTotalPages(data?.data?.totalPages);
      }

    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }
  
  const handleOpenDeleteDialog = (data: VatTuHoaChat) => {
    setThongTinVatTu({
      ...data,
      attributeValues: convertData(data?.attributeValues)
    });
    setOpenDeleteDialog(true);
  };

  const handleConfirmDelete = async () => {
    setIsLoading(true);
    try {
      const { data } = await deleteProduct(thongTinVatTu?.id as string);
      if (data?.code === CODE_SUCCESS) {
        toast.success("Thành công");
        setUpdateTableData(!updateTableData);
        setOpenDeleteDialog(false);
      } else {
        toast.error("Có lỗi xảy ra!")
      }
    } catch (err) {
      toast.error("Có lỗi xảy ra!")
    } finally {
      setIsLoading(false);
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (KEY.ENTER === event.key) {
      handleGetDanhSachVatTuHoaChat();
    }
  }

  const handleChangeSearchKeywords = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeywords(e.target.value)
  }

  const handleSearch = () => {
    handleGetDanhSachVatTuHoaChat();
  }

  return (
    <>
      <Row className="d-flex justify-content-between pb-2">
        <Col>
          <Button
            className="btn-navy min-w-80px"
            size="sm"
            onClick={() => handleOpenDSVatTuDialog(initFormVTHC)}
          >
            Thêm mới
          </Button>
        </Col>

        <Col xs={4}>
          <InputSearch
            handleChange={handleChangeSearchKeywords}
            handleKeyDown={handleKeyDown}
            handleSearch={handleSearch}
            placeholder="Tìm kiếm" />
        </Col>
      </Row>
      <VatTuHoaChatTable 
        page={pageIndex}
        rowsPerPage={pageSize}
        danhSachVatTuHoaChat={danhSachVatTuHoaChat}
        handleOpenDSVatTuDialog={handleOpenDSVatTuDialog}
        handleOpenDeleteDialog={handleOpenDeleteDialog}
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
      {openDSVatTu && (
        <VatTuHoaChatDialogV2
          isView={isView}
          handleCloseModal={handelCloseDSVatTuDialog}
          dataVatTuHoaChat={thongTinVatTu}
          titleDialog={titleDialog}
          updateTaleData={() => setUpdateTableData(!updateTableData)}
        />
      )}
      {openDeleteDialog && (
        <ConfirmDialog
          show={openDeleteDialog}
          title={"Xác nhận xóa"}
          message={"Bạn có chắc chắn muốn xóa không?"}
          yes={"Xác nhận"}
          onCloseClick={() => setOpenDeleteDialog(false)}
          onCancelClick={() => setOpenDeleteDialog(false)}
          onYesClick={handleConfirmDelete}
          cancel={"Hủy"}
        />
      )}
    </>
  );
}

export default DSVatTuHoaChat;
