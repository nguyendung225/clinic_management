import React, {
  FC,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { AppContext } from "../../appContext/AppContext";
import AutocompleteV2 from "../../component/AutocompleteObjectV2";
import ContextMenu from "../../component/ContextMenu";
import InputSearch from "../../component/InputSearch";
import SelectTree from "../../component/SelectTree";
import DialogConfirmDelete from "../../component/dialog-confirm-delete/DialogConfirmDelete";
import DialogLichSuKham from "../../phan-he-xet-nghiem/components/tab-lay-mau-benh-pham/DialogLichSuKham";
import {
  CODE,
  DEFAULT_TOTAL_ELEMENTS,
  DEFAULT_TOTAL_PAGES,
  KEY,
  RESPONSE_MESSAGE,
} from "../../utils/Constant";
import { covertDataTiepNhanUpdate } from "../../utils/FormatUtils";
import {
  handlePagesChange,
  handleRowsPerPageChange,
  rowsForPage,
} from "../../utils/PageUtils";
import { PhanHeTiepNhanContext } from "../PhanHeTiepNhan";
import DanhSachTiepNhanTableV2 from "../components/tab-danh-sach-tiep-nhan/DanhSachTiepNhanTableV2";
import ModalDSNguoiGioiThieu from "../components/tab-danh-sach-tiep-nhan/Modals/ModalDSNguoiGioiThieu";
import { danhSachTabTiepNhan, fakeDSTiepNhan } from "../constants/PhanHeTiepNhan";
import { SearchObject } from "../models/DSTiepNhanModel";
import { deleteBenhNhanFake, getChiTietBenhNhanFake, getListBenhNhanFake } from "../services/TiepNhanServices";
import { Tree } from "../components/fakeData";
import { TablePagination } from "../../component/table/components/TablePagination";

export const ReceptionContext = createContext(() => {});

type Props = {
  eventkey?: string;
};

export type benhNhanData = {
  data: any;
  totalPages: number;
  totalElements: number;
};

const Reception: FC<Props> = (props) => {
  const [benhNhanData, setBenhNhanData] = useState<benhNhanData>({
    data: fakeDSTiepNhan,
    totalPages: DEFAULT_TOTAL_PAGES,
    totalElements: DEFAULT_TOTAL_ELEMENTS,
  });
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [keyword, setKeyword] = useState<string>("");
  const [selectedRow, setSelectedRow] = useState<any>({});
  const contextRef = useRef<HTMLDivElement | null>(null);
  const [codeCollapses, setCodeCollapses] = useState<string[]>([]);
  const [idSelected, setIdSelected] = useState<string>("");
  const [openDialogConfirmDelete, setOpenDialogConfirmDelete] = useState<boolean>(false);
  const [shouldOpenDialogDSNguoiGioiThieu, setShouldOpenDialogDSNguoiGioiThieu] = useState<boolean>(false);
  const { setIsLoading, setInfoBenhNhanContext } = useContext(AppContext);
  const { setThongTinBenhNhan, setDSDichVu, setIsPay } = useContext(
    PhanHeTiepNhanContext
  );
  const [contextMenu, setContextMenu] = useState<null | {
    x: number;
    y: number;
  }>(null);
  const { currentTab, setCurrentTab } = useContext(AppContext);
  const [openDialogLichSuKhamBenh, setOpenDialogLichSuKhamBenh] = useState<boolean>(false);


  useEffect(() => {
    setCodeCollapses([Tree.code, ...Tree.filter.map((item: any) => item.code)]);
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (props?.eventkey === currentTab) {
      updatePageData();
    }
  }, [page, rowsPerPage, currentTab]);

  const handleContextMenu = (e: any, row: any) => {
    e.preventDefault();
    setSelectedRow(row);
    setContextMenu({ x: e.clientX, y: e.clientY });
  };

  const handleClickOutside = (e: any) => {
    if (contextRef.current && !contextRef.current.contains(e.target as Node)) {
      setContextMenu(null);
    }
  };

  const updatePageData = async () => {
    setIsLoading(true);
    let searchObject: SearchObject = {
      keyword: keyword,
      pageIndex: page,
      pageSize: rowsPerPage,
    };
    try {
      // let res = await getDSTiepNhan(searchObject);
      let res = await getListBenhNhanFake();
      // if (res?.status?.code === CODE.SUCCESS) {
      //   setBenhNhanData({
      //     data: res?.data?.data?.content || [],
      //     totalPages: res?.data?.data?.totalPages,
      //     totalElements: res?.data?.data?.totalElements,
      //   });
      // } 
      if (res?.status === CODE.SUCCESS) {
        setBenhNhanData({
          data: res?.data || [],
          totalPages: res?.data?.data?.totalPages,
          totalElements: res?.data?.data?.totalElements,
        });
      } 
      else {
        toast.warning(RESPONSE_MESSAGE.ERROR);
      }
      setIsLoading(false);
    } catch (e) {
      toast.error(RESPONSE_MESSAGE.ERROR);
      setIsLoading(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): any => {
    const value = (event.target as HTMLInputElement).value;
    setKeyword(value);
  };

  const handleUpdate = (row: any) => {
    redirectTab(row, danhSachTabTiepNhan[0].eventKey);
  };

  const handlePay = (row: any) => {
    redirectTab(row, danhSachTabTiepNhan[2].eventKey);
    setIsPay({ boolean: true, page: page, pageSize: rowsPerPage });
  };

  const redirectTab = async (row: any, eventKey: string) => {
    setIsLoading(true);
    try {
      // let { data } = await getChiTietBenhNhan(row?.caseId, {});
      let data = await getChiTietBenhNhanFake(row?.id, {});
      setIsLoading(false);
      // let dataTTBenhNhan: any = covertDataTiepNhanUpdate(data?.data);
      let dataTTBenhNhan: any = covertDataTiepNhanUpdate(data?.data);
      setDSDichVu(dataTTBenhNhan?.encounter?.orders);
      setThongTinBenhNhan({ ...dataTTBenhNhan });
      setCurrentTab?.(eventKey);
      
    } catch (error) {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    KEY.ENTER === event.key && updatePageData();
  };

  const deleteBenhNhan = async() =>{
    try {
      await deleteBenhNhanFake(selectedRow?.original?.id)
    } catch (error) {
      
    }
  }
  
  const handleDelete = () => {
    deleteBenhNhan()
    updatePageData()
    setOpenDialogConfirmDelete(false);
  };
  
  const handleShouldOpenDialogDSNguoiGioiThieu = () => {
    setShouldOpenDialogDSNguoiGioiThieu(true);
  }

  const handleCloseDialogDSNguoiGioiThieu = () => {
    setShouldOpenDialogDSNguoiGioiThieu(false);
  }

  const handleOpenDialogLichSuKhamBenh = () => {
    setOpenDialogLichSuKhamBenh(true);
    setInfoBenhNhanContext(selectedRow?.original);
  }

  return (
    <ReceptionContext.Provider value={updatePageData}>
      <div className="p-5 ps-0 h-ds-tiep-nhan">
        <div className="d-flex mb-5 justify-content-between align-items-center ms-2">
          <div className="w-res-filter">
            <AutocompleteV2
              className="autocomplete-custom spaces "
              placeholder="Tất cả phòng đón tiếp"
              options={[]}
              name="filter"
            />
          </div>

          <div className="d-flex align-items-center flex-auto me-3 ms-6">
            <label className="text-nowrap m-0 me-2">Từ ngày</label>
            <input className="form-control customs-input " type="date" />
          </div>
          
          <div className="d-flex align-items-center flex-auto me-3">
            <label className="text-nowrap m-0 me-2">Đến ngày</label>
            <input className="form-control customs-input " type="date" />
          </div>

          <div className="flex-10-1 me-3">
            <InputSearch
              
              handleChange={handleChange}
              handleSearch={updatePageData}
              handleKeyDown={handleKeyDown}
              placeholder="Tìm kiếm"
              type="text"
            />
          </div>

          <div>
            <Button className="me-3 btn-outline" type="submit">
              <i className="bi bi-person-plus"></i> <span>Tạo thẻ BN</span>
            </Button>
          </div>

          <div>
            <Button className="btn-outline">
              <i className="bi bi-search"></i>&nbsp; <span>DS hẹn khám</span>
            </Button>
          </div>

        </div>
        <div className="d-flex w-100">
          <SelectTree 
            codeCollapses={codeCollapses} 
            handleChangeCollapsesCode={setCodeCollapses} 
            idSelected={idSelected}
            handleChangeSelectId={setIdSelected}
            selectTree={Tree}
            className="h-tree-ds-tiep-nhan overflow-auto"
          />
          <div className="w-80 ms-6">
            <div className="border">
              <DanhSachTiepNhanTableV2
                benhNhanData={benhNhanData}
                updatePageData={updatePageData}
                handleChange={handleChange}
                handleUpdate={handleUpdate}
                handlePay={handlePay}
                page={page}
                rowsPerPage={rowsPerPage}
                handleContextMenu={handleContextMenu}
              />
            </div>
            <TablePagination
              handlePagesChange={handlePagesChange}
              handleRowsPerPageChange={handleRowsPerPageChange}
              rowsPerPage={rowsPerPage}
              rowsForPage={rowsForPage}
              page={page}
              setPage={setPage}
              setRowsPerPage={setRowsPerPage}
              totalPages={benhNhanData?.data?.length/rowsPerPage || benhNhanData.totalPages}
              totalElements={benhNhanData?.data?.length || benhNhanData.totalElements}
            />
          </div>
          <div ref={contextRef}>
            {contextMenu && (
              <ContextMenu x={contextMenu.x - 20} y={contextMenu.y - 60} className="h-auto w-auto">
                <div>
                  <div
                    className="custom-context-menu"
                    onClick={handleShouldOpenDialogDSNguoiGioiThieu}
                  >
                    <i className="fa-solid fa-star text-info me-4 ps-2"></i>
                    Nguời giới thiệu
                  </div>
                  <div
                    className="custom-context-menu"
                    onClick={handleOpenDialogLichSuKhamBenh}
                  >
                    <i className="fa-solid fa-clock-rotate-left text-warning me-4 ps-2"></i>
                    Lịch sử khám bệnh
                  </div>
                  <div
                    className="custom-context-menu"
                    // onClick={() => handleUpdate(selectedRow?.original)}
                  >
                    <i className="fa-solid fa-check text-success me-4 ps-2"></i>
                    Duyệt tạm ứng/Thu sau 
                  </div>
                  <div
                    className="custom-context-menu"
                    onClick={() => handleUpdate(selectedRow?.original)}
                  >
                    <i className="bi bi-pencil-square text-navy me-4 ps-2" />
                    Sửa
                  </div>
                  <div
                    className="custom-context-menu"
                    onClick={() => setOpenDialogConfirmDelete(true)}
                  >
                    <i className="bi bi-trash3-fill text-danger text-danger cursor-pointer ps-2 me-4" />
                    Xóa
                  </div>
                </div>
              </ContextMenu>
            )}
          </div>
        </div>
      </div>
      {openDialogConfirmDelete && (
        <DialogConfirmDelete
          dialogDelete={openDialogConfirmDelete}
          setDialogDelete={setOpenDialogConfirmDelete}
          handleDelete={handleDelete}
        />
      )}

      {shouldOpenDialogDSNguoiGioiThieu && <ModalDSNguoiGioiThieu handleCloseDialogDSNguoiGioiThieu={handleCloseDialogDSNguoiGioiThieu}/>}

      {
        openDialogLichSuKhamBenh && <DialogLichSuKham open={openDialogLichSuKhamBenh} handleClose={setOpenDialogLichSuKhamBenh}/>
      }
    </ReceptionContext.Provider>
  );
};
export { Reception };

