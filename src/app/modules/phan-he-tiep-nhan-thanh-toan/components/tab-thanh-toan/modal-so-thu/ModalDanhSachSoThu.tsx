import {
  Dispatch,
  FC,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import { AppContext } from "../../../../appContext/AppContext";
import { TablePagination } from "../../../../component/table/components/TablePagination";
import { getDSTiepNhan } from "../../../services/TiepNhanServices";
import {
  CODE,
  DEFAULT_TOTAL_ELEMENTS,
  DEFAULT_TOTAL_PAGES,
  KEY,
  RESPONSE_MESSAGE,
} from "../../../../utils/Constant";
import {
  handlePagesChange,
  handleRowsPerPageChange,
  rowsForPage,
} from "../../../../utils/PageUtils";
import { SearchObject } from "../../../models/DanhSachPhieuModel";
import { TreeSoThu, danhSachSoThu } from "../../fakeData";
import TableDanhSachSoThu from "./TableDanhSachSoThu";
import InputSearch from "../../../../component/InputSearch";
import SelectTree from "../../../../component/SelectTree";

export const ReceptionContext = createContext(() => {});

type Props = {
  show: boolean;
  onHide: Dispatch<
    SetStateAction<{
      openChonSoThu: boolean;
      openDanhSachSoThu: boolean;
      openTaoMoiSoThu: boolean;
    }>
  >;
  setOpenDanhSachSoThu: Dispatch<SetStateAction<boolean>>
};

export type benhNhanData = {
  data: any;
  totalPages: number;
  totalElements: number;
};

const ModalDanhSachSoThu: FC<Props> = (props) => {
  const { show, onHide, setOpenDanhSachSoThu } = props;
  const [benhNhanData, setBenhNhanData] = useState<benhNhanData>({
    data: [],
    totalPages: DEFAULT_TOTAL_PAGES,
    totalElements: DEFAULT_TOTAL_ELEMENTS,
  });
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [keyword, setKeyword] = useState<string>("");
  const [selectedRow, setSelectedRow] = useState<any>({});
  const [codeCollapses, setCodeCollapses] = useState<string[]>([]);
  const [idSelected, setIdSelected] = useState<string>("");

  const { setIsLoading } = useContext(AppContext);

  useEffect(() => {
    setCodeCollapses([
      TreeSoThu.code,
      ...TreeSoThu.filter.map((item: any) => item.code),
    ]);
    setOpenDanhSachSoThu(true)
  }, []);

  useEffect(() => {
    updatePageData();
  }, [page, rowsPerPage]);

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
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): any => {
    const value = (event.target as HTMLInputElement).value;
    setKeyword(value);
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    KEY.ENTER === event.key && updatePageData();
  };
  const handleDoubleClick = (row: any) => {
    onHide({
      openChonSoThu: false,
      openDanhSachSoThu: false,
      openTaoMoiSoThu: true,
    });
  };

  return (
    <>
      <Modal
        centered
        show={show}
        onHide={() =>
          onHide({
            openChonSoThu: false,
            openDanhSachSoThu: false,
            openTaoMoiSoThu: false,
          })
        }
        size="xl"
      >
        <Modal.Header closeButton className="py-5 header-modal">
          <Modal.Title>Danh sách sổ thu tiền</Modal.Title>
        </Modal.Header>
        <Modal.Body className="spaces pl-0 pr-12">
          <Row>
            <Col xs={{ span: 4, offset: 8 }} >
              <InputSearch
                handleChange={handleChange}
                handleSearch={updatePageData}
                handleKeyDown={handleKeyDown}
                placeholder="Tìm kiếm"
                type="text"
              />
            </Col>
          </Row>
          <div className="d-flex mb-5 justify-content-between align-items-center"></div>
          <div className="d-flex w-100">
            <SelectTree
              codeCollapses={codeCollapses} 
              handleChangeCollapsesCode={setCodeCollapses} 
              idSelected={idSelected}
              handleChangeSelectId={setIdSelected}
              selectTree={TreeSoThu}
            />
            <div className="spaces w-85">
              <div className="h-table border">
                <TableDanhSachSoThu
                  dataDanhSachSoThu={danhSachSoThu}
                  handleDoubleClick={handleDoubleClick}
                />
              </div>
              <TablePagination
                page={page}
                setPage={setPage}
                handlePagesChange={handlePagesChange}
                handleRowsPerPageChange={handleRowsPerPageChange}
                rowsForPage={rowsForPage}
                rowsPerPage={rowsPerPage}
                setRowsPerPage={setRowsPerPage}
                totalPages={benhNhanData.totalPages}
                totalElements={benhNhanData.totalElements}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="flex flex-middle flex-center py-1">
          <Button
            className="btn-fill"
            onClick={() =>
              onHide({
                openChonSoThu: false,
                openDanhSachSoThu: false,
                openTaoMoiSoThu: true,
              })
            }
          >
            Thêm mới sổ
          </Button>
          <Button
            className="btn-outline"
            onClick={() =>
              onHide({
                openChonSoThu: false,
                openDanhSachSoThu: false,
                openTaoMoiSoThu: false,
              })
            }
          >
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export { ModalDanhSachSoThu };
