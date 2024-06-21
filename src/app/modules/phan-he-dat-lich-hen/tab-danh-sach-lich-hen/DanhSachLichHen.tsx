import React, { FC, createContext, useContext, useEffect, useRef, useState } from "react";
import { Form, FormCheck } from "react-bootstrap";
import { toast } from "react-toastify";
import { AppContext } from "../../appContext/AppContext";
import AutocompleteField from "../../component/AutocompleteField";
import InputSearch from "../../component/InputSearch";
import { TablePagination } from "../../component/table/components/TablePagination";
import DialogConfirmDelete from "../../component/dialog-confirm-delete/DialogConfirmDelete";
import ContextMenu from "../../component/ContextMenu";
import { danhSachTabTiepNhan } from "../../phan-he-tiep-nhan-thanh-toan/constants/PhanHeTiepNhan";
import { SearchObject } from "../../phan-he-tiep-nhan-thanh-toan/models/DSTiepNhanModel";
import { getChiTietBenhNhan, getDSTiepNhan } from "../../phan-he-tiep-nhan-thanh-toan/services/TiepNhanServices";
import { CODE, DEFAULT_TOTAL_ELEMENTS, DEFAULT_TOTAL_PAGES, KEY, RESPONSE_MESSAGE } from "../../utils/Constant";
import { covertDataTiepNhanUpdate } from "../../utils/FormatUtils";
import { handlePagesChange, handleRowsPerPageChange, rowsForPage } from "../../utils/PageUtils";
import { PhanHeDatLichHenContext } from "../PhanHeDatLichHen";
import DanhSachLichHenTable from "../components/tab-danh-sach-lich-hen/DanhSachLichHenTable";
import { Tree } from "../../phan-he-tiep-nhan-thanh-toan/components/fakeData";

export const ReceptionContext = createContext(() => {});

type Props = {
  eventkey?: string;
};

export type benhNhanData = {
  data: any;
  totalPages: number;
  totalElements: number;
};

const DanhSachLichHen: FC<Props> = (props) => {
  const [benhNhanData, setBenhNhanData] = useState<benhNhanData>({
    data: [],
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

  const { setIsLoading } = useContext(AppContext);
  const { setThongTinBenhNhan, setDSDichVu, setIsPay } = useContext(PhanHeDatLichHenContext);
  const [contextMenu, setContextMenu] = useState<null | {
    x: number;
    y: number;
  }>(null);
  const { currentTab, setCurrentTab } = useContext(AppContext);

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
      let res = await getDSTiepNhan(searchObject);
      if (res?.data?.code === CODE.SUCCESS) {
        setBenhNhanData({
          data: res?.data?.data?.content || [],
          totalPages: res?.data?.data?.totalPages,
          totalElements: res?.data?.data?.totalElements,
        });
      } else {
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
      let { data } = await getChiTietBenhNhan(row?.caseId, {});
      setIsLoading(false);
      let dataTTBenhNhan: any = covertDataTiepNhanUpdate(data?.data);
      setDSDichVu(dataTTBenhNhan?.danhSachDichVu);
      setThongTinBenhNhan({ ...dataTTBenhNhan });
      setCurrentTab?.(eventKey);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    KEY.ENTER === event.key && updatePageData();
  };

  const handleCollapse = (code: string) => {
    if (codeCollapses.includes(code)) {
      setCodeCollapses(codeCollapses.filter((item: string) => item !== code));
    } else {
      setCodeCollapses([...codeCollapses, code]);
    }
  };

  const handleSelected = (code: string) => {
    if (idSelected === code) {
      setIdSelected("");
    } else {
      setIdSelected(code);
    }
  };

  const handleDelete = () => {
    setOpenDialogConfirmDelete(false);
  };
  const filter = [
    { code: 1, name: "Lịch hẹn hôm nay" },
    { code: 2, name: "Lịch hẹn tuần này" },
    { code: 3, name: "Lịch hẹn tháng này" },
  ];

  return (
    <ReceptionContext.Provider value={updatePageData}>
      <div className="p-5 ps-0 h-ds-tiep-nhan">
        <div className="d-flex mb-5 justify-content-between align-items-center ms-2">
          <div className="w-res-filter">
            <AutocompleteField
              className="autocomplete-custom spaces "
              options={filter}
              name="filter"
              defaultValue={filter[0]}
            />
          </div>
          <Form>
            <div className="spaces d-flex ms-5">
              <FormCheck type="radio" name="ngayDatLich" label="Ngày đặt lịch" className="min-w-150px d-flex align-items-end gap-2" />
              <FormCheck type="radio" name="ngayDenKham" label="Ngày đến khám" className="min-w-150px d-flex align-items-end gap-2" />
            </div>
          </Form>
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

          {/* <div>
            <Button className="btn-outline">
              <i className="bi bi-file-earmark-zip"></i>&nbsp;{" "}
              <span>Báo cáo</span>
            </Button>
          </div> */}
        </div>
        <div className="d-flex w-100">
          <div className="tree h-ds-hen-kham">
            <div>
              <div onClick={() => handleCollapse(Tree.code)} className="d-flex justify-content-between ms-4">
                <span className="me-10 text-cyan">{Tree.name}</span>
                <span>
                  {codeCollapses.includes(Tree.code) ? (
                    <i className="bi bi-chevron-up me-5 text-black" />
                  ) : (
                    <i className="bi bi-chevron-down me-5 text-black"></i>
                  )}
                </span>
              </div>
              <div>
                {codeCollapses.includes(Tree.code) &&
                  Tree.filter?.map((item: any) => (
                    <div>
                      <div className="ps-10 d-flex justify-content-between" onClick={() => handleCollapse(item.code)}>
                        <span>{item.name}</span>
                        <span>
                          {codeCollapses.includes(item.code) ? (
                            <i className="bi bi-chevron-up me-5 text-black" />
                          ) : (
                            <i className="bi bi-chevron-down me-5 text-black" />
                          )}
                        </span>
                      </div>
                      {codeCollapses.includes(item.code) &&
                        item?.filter?.map((i: any) => (
                          <div
                            className={idSelected.includes(i.code) ? "isFilterSelected ps-15" : "ps-15 hover-row"}
                            onClick={() => handleSelected(i.code)}
                          >
                            {i.name}
                            <span className="quantity">&nbsp;({i.quantity})</span>
                          </div>
                        ))}
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="w-80 ms-6">
            <div className="border">
              <DanhSachLichHenTable
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
              totalPages={benhNhanData.totalPages}
              totalElements={benhNhanData.totalElements}
            />
          </div>
          <div ref={contextRef}>
            {contextMenu && (
              <ContextMenu x={contextMenu.x - 20} y={contextMenu.y - 60}>
                <div>
                  <div className="custom-context-menu" onClick={() => handleUpdate(selectedRow?.original)}>
                    <i className="bi bi-pencil-square text-navy me-4 ps-2" />
                    Sửa
                  </div>
                  <div className="custom-context-menu" onClick={() => setOpenDialogConfirmDelete(true)}>
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
    </ReceptionContext.Provider>
  );
};
export { DanhSachLichHen };
