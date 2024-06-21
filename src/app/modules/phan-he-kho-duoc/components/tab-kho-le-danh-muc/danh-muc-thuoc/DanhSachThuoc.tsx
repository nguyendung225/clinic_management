import { useContext, useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import InputSearch from "../../../../component/InputSearch";
import { TablePagination } from "../../../../component/table/components/TablePagination";
import {
  handlePagesChange,
  handleRowsPerPageChange,
  rowsForPage,
} from "../../../../utils/PageUtils";
import DSThuocTable from "./DSThuocTable";
import { Thuoc, ThuocConvert } from "../../../models/ThuocModel";
import { initFormThuoc } from "../../../consts/ThuocConst";
import { CODE, DEFAULT_TOTAL_ELEMENTS, DEFAULT_TOTAL_PAGES, KEY, STATUS_ACTION } from "../../../../utils/Constant";
import { deleteDSThuoc, searchByPage as getDSThuocAPI } from "../../../services/DSThuocServices";
import { toast } from "react-toastify";
import { ConfirmDialog } from "../../../../component/ConfirmDialog";
import { convertData } from "../../../utils/Utils";
import { AppContext } from "../../../../appContext/AppContext";
import { IResponseData } from "../../../../utils/models";
import { TYPE_PRODUCT } from "../../../consts/PhanHeKhoDuocConst";
import { KEY_TAB_DS_KHO_DUOC } from "../../../consts/PhanHeKhoDuocConst";
import DSThuocDialogV3 from "./DSThuocDialogV3";
type Props = {
  eventKey: string;
  onTabChange?: (activeTab: string | null) => void;
  activeTab?: string;
};
function DanhSachThuoc(props: Props) {
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [openDSThuoc, setOpenDSThuoc] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>("");
  const { setIsLoading, currentTab } = useContext(AppContext);
  const [totalElements, setTotalElements] = useState<number>(DEFAULT_TOTAL_ELEMENTS);
  const [totalPages, setTotalPages] = useState<number>(DEFAULT_TOTAL_PAGES);
  const [isView, setIsView] = useState<boolean>(false);
  const [thongTinThuoc, setThongTinThuoc] = useState<ThuocConvert>(initFormThuoc);
  const [titleDialog, setTitleDialog] = useState<string>("");
  const [dsThuoc, setDsThuoc] = useState<Thuoc[]>([]);
  const [openDeleteDialog, setOpenDeleteDialog] = useState<boolean>(false);
  const handleCloseDSThuocDialog = () => {
    setOpenDSThuoc(false);
    setThongTinThuoc(initFormThuoc);
    setIsView(false);
  };

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
    setThongTinThuoc(initFormThuoc);
  };

  const handleOpenDeleteDialog = (data: Thuoc) => {
    setOpenDeleteDialog(true);
    setThongTinThuoc({ ...data, attributeValues: convertData(data?.attributeValues) });
  };

  const handleOpenDSThuocDialog = (data: Thuoc, method?: string) => {
    if (method === STATUS_ACTION.VIEW) {
      setTitleDialog("Thông tin thuốc");
      setIsView(true);
    } else if (method === STATUS_ACTION.EDIT) {
      setTitleDialog("Sửa thông tin thuốc");
    } else {
      setTitleDialog("Thêm mới thông tin thuốc");
    }
    setThongTinThuoc({ ...data, attributeValues: convertData(data?.attributeValues) });
    setOpenDSThuoc(true);
  };

   const getDSThuoc = async () => {
     try {
       let searchObject = {
         pageIndex: page,
         pageSize: rowsPerPage,
         productType: TYPE_PRODUCT.THUOC,
         keyword: keyword,
         hasDeleted: false
       };
       setIsLoading(true);
       let { data }: IResponseData = await getDSThuocAPI(searchObject);
       setIsLoading(false);

       if (CODE.SUCCESS === data?.code) {
         setTotalPages(data?.data?.totalPages);
         setTotalElements(data?.data?.totalElements);
         setDsThuoc(data?.data?.content);
         return;
       }

       toast.error(data?.message);
     } catch (error) {
       setIsLoading(false);
       toast.error("Xảy ra lỗi, vui lòng thử lại!");
     }
   };

  const handleDeleteItem = async () => {
    try {
      let { data }: IResponseData = await deleteDSThuoc(thongTinThuoc?.id);
      if (CODE.SUCCESS === data?.code) {
        toast.success("Thành Công");
        await getDSThuoc();
        handleCloseDeleteDialog();
        return
      }
       toast.error(data?.message);
    } catch (error) {
      toast.error("Xảy ra lỗi, vui lòng thử lại!");
    }
  };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (KEY.ENTER === event.key) {
        getDSThuoc();
      }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setKeyword(e.target.value);
    };

    const handleSearch = () => {
      getDSThuoc();
    };

    useEffect(() => {
      // if (currentTab === KEY_TAB_DS_KHO_DUOC.DANH_MUC && props.eventKey === props.activeTab) {
      //   getDSThuoc();
      // }
    }, [page, rowsPerPage, currentTab, props.activeTab]);
  return (
    <div className="dsThuoc">
      <Row className="d-flex justify-content-between pb-2">
        <Col>
          <Button
            className="btn-navy min-w-80px"
            size="sm"
            onClick={() => handleOpenDSThuocDialog(initFormThuoc)}
          >
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
            placeholder="Tìm kiếm"
          />
        </Col>
      </Row>
      <DSThuocTable
        rowsPerPage={rowsPerPage}
        page={page}
        handleOpenDSThuocDialog={handleOpenDSThuocDialog}
        dsThuoc={dsThuoc}
        handleOpenDeleteDialog={handleOpenDeleteDialog}
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
      {
        openDSThuoc
        && (
          // <DSThuocDialogV2
          //   handleReload={getDSThuoc}
          //   isView={isView}
          //   handleCloseModal={handleCloseDSThuocDialog}
          //   thongTinThuoc={thongTinThuoc}
          //   titleDialog={titleDialog}
          // />
          <DSThuocDialogV3
            handleReload={getDSThuoc}
            isView={isView}
            handleCloseModal={handleCloseDSThuocDialog}
            thongTinThuoc={thongTinThuoc}
            titleDialog={titleDialog}
          />
        )}
      {
        <ConfirmDialog
          show={openDeleteDialog}
          title={"Xác nhận xóa"}
          message={"Bạn có chắc chắn muốn xóa không?"}
          yes={"Xác nhận"}
          onCancelClick={handleCloseDeleteDialog}
          cancel={"Hủy"}
          onYesClick={handleDeleteItem}
        />
      }
    </div>
  );
}

export default DanhSachThuoc;
