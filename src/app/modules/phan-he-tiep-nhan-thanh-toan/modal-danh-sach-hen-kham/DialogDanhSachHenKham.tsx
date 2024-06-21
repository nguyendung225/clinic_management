import React, {
  FC,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Button, Col, Modal, Row, Stack } from "react-bootstrap";
import { toast } from "react-toastify";
import { AppContext } from "../../appContext/AppContext";
import AutocompleteV2 from "../../component/AutocompleteObjectV2";
import InputSearch from "../../component/InputSearch";
import DialogConfirmDelete from "../../component/dialog-confirm-delete/DialogConfirmDelete";
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
import { danhSachTabTiepNhan } from "../constants/PhanHeTiepNhan";
import { SearchObject } from "../models/DSTiepNhanModel";
import { getChiTietBenhNhan, getDSTiepNhan } from "../services/TiepNhanServices";
import ContextMenu from "../../component/ContextMenu";
import DanhSachTiepNhanTableV2 from "../components/tab-danh-sach-tiep-nhan/DanhSachTiepNhanTableV2";
import { TablePagination } from "../../component/table/components/TablePagination";

export const ReceptionContext = createContext(() => {});

type Props = {
  show: boolean;
  onHide: (show: boolean) => void;
};

export type benhNhanData = {
  data: any;
  totalPages: number;
  totalElements: number;
};

const DialogDanhSachHenKham: FC<Props> = (props) => {
  const {show, onHide} = props
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
  const [openDialogConfirmDelete, setOpenDialogConfirmDelete] =
    useState<boolean>(false);

  const { setThongTinBenhNhan, setDSDichVu, setIsPay } = useContext(
    PhanHeTiepNhanContext
  );
  const [contextMenu, setContextMenu] = useState<null | {
    x: number;
    y: number;
  }>(null);
  const { setIsLoading, currentTab, setCurrentTab } = useContext(AppContext);

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
      updatePageData();
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

  return (
    <ReceptionContext.Provider value={updatePageData}>
      <Modal centered show={show} onHide={() => onHide(false)} size="xl">
        <Modal.Header closeButton className="py-5 header-modal">
          <Modal.Title>
            <div>Danh sách hẹn khám</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="spaces pb-0 pt-16 px-24">
          <div>
            <Stack direction="horizontal" gap={3} className="mb-4">
              <div className="flex-auto">
                <AutocompleteV2
                  className="autocomplete-custom spaces "
                  placeholder="Tất cả phòng đón tiếp"
                  options={[{code: "pcc", name:"Phòng cấp cứu"},{code: "phs", name:"Phòng hồi sức"}]}
                  name="fiter"
                />
              </div>
              <Row className="d-flex align-items-center w-67 ">
                <Col xs={3} className="d-flex align-items-center w-28">
                  <label className="text-nowrap m-0 me-2">Từ ngày</label>
                  <input className="form-control customs-input " type="date" />
                </Col>
                <Col xs={3} className="d-flex align-items-center ps-0 w-28">
                  <label className="text-nowrap m-0 me-2">Đến ngày</label>
                  <input className="form-control customs-input " type="date" />
                </Col>
                <Col className="ps-0">
                  <InputSearch
                    
                    handleChange={handleChange}
                    handleSearch={updatePageData}
                    handleKeyDown={handleKeyDown}
                    placeholder="Tìm kiếm"
                    type="text"
                  />
                </Col>
              </Row>
                <div>
                  <Button className="btn-fill min-w-50px" type="submit">
                    Tìm kiếm
                  </Button>
                </div>
                <div><Button className="btn-fill">Báo cáo</Button></div>
            </Stack>
            <div className="d-flex w-100">
              <div className="w-100">
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
                  totalPages={benhNhanData.totalPages}
                  totalElements={benhNhanData.totalElements}
                />
              </div>
              <div ref={contextRef}>
                {contextMenu && (
                  <ContextMenu x={contextMenu.x - 53} y={contextMenu.y - 90}>
                    <div>
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
        </Modal.Body>
        <Modal.Footer className="flex flex-middle flex-center py-1">
          <Button
            className="btn-outline"
            onClick={() => onHide(false)}
          >
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>
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
export { DialogDanhSachHenKham };

