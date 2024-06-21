import {
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { Button, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import { AppContext } from "../../../appContext/AppContext";
import InputSearch from "../../../component/InputSearch";
import { TablePagination } from "../../../component/table/components/TablePagination";
import {
  DEFAULT_PAGE_INDEX,
  DEFAULT_TOTAL_ELEMENTS,
  DEFAULT_TOTAL_PAGES,
  KEY,
} from "../../../utils/Constant";
import {
  handlePagesChange,
  handleRowsPerPageChange,
  rowsForPage,
} from "../../../utils/PageUtils";
import { DanhMucBacSiModel } from "../../models/ModelDatHen";
import DanhMucBacSiTable from "../../components/tab-cau-hinh-dat-hen/DanhMucBacSiTable";
import { IconButtonSave } from "../../../component/IconSvg";

interface Props {
  open: boolean;
  handleClose: Dispatch<SetStateAction<boolean>>;
  selectedRow: any[];
  setSelectedRow?: React.Dispatch<React.SetStateAction<any[]>>;
  dataBacSi?: any;
  setDataBacSi?: any;
}

export const fakeDataBacSi: DanhMucBacSiModel[] = [
  {
    maChucDanh: "bsklsc",
    phongBan: "Khám lâm sàng chung",
    hoTen: "Nguyễn Thị Tường",
  },
  {
    maChucDanh: "bsxq",
    phongBan: "Chụp X-quang",
    hoTen: "Tô Hoài",
  },
  {
    maChucDanh: "bscnstt",
    phongBan: "Chụp nội soi tổng thể",
    hoTen: "Trân Châu",
  },
  {
    maChucDanh: "bskn",
    phongBan: "Khám nội",
    hoTen: "Thanh Xuân",
  },
  {
    maChucDanh: "bskng",
    phongBan: "Khám ngoại",
    hoTen: "Khang Hy",
  },
  {
    maChucDanh: "bsknh",
    phongBan: "Khám nhi",
    hoTen: "Lò Thị Bảy",
  },
  {
    maChucDanh: "bsyhct",
    phongBan: "Y học cổ truyền",
    hoTen: "Trần Vi Vi",
  },
];

const DanhMucBacSiDialog: FC<Props> = (props) => {
  let {
    open,
    handleClose,
    selectedRow,
    setSelectedRow,
    dataBacSi,
    setDataBacSi,
  } = props;
  const [page, setPage] = useState<number>(DEFAULT_PAGE_INDEX);
  const [rowsPerPage, setRowsPerPage] = useState<number>(15);
  let [objectSearch, setObjectSearch] = useState<any>();
  let [shouldOpenFilterSearch, setShouldOpenFilterSearch] =
    useState<boolean>(false);

  const { setIsLoading } = useContext(AppContext);
  const [bacSiData, setBacSiData] = useState({
    data: [],
    totalElements: DEFAULT_TOTAL_ELEMENTS,
    totalPages: DEFAULT_TOTAL_PAGES,
  });

  const getListBenhNhan = async () => {};

  useEffect(() => {
    if (!shouldOpenFilterSearch) {
      setObjectSearch({});
    }
    getListBenhNhan();
  }, [page, rowsPerPage, shouldOpenFilterSearch]);

  const handleSubmit = async () => {
    setDataBacSi([...selectedRow]);
    handleClose(false)
  };

  const checkPage = () => {
    if (page !== DEFAULT_PAGE_INDEX) {
      setPage(DEFAULT_PAGE_INDEX);
    } else {
      getListBenhNhan();
    }
  };

  const handleSearchByPage = () => {
    checkPage();
  };

  const handleChangeValueInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setObjectSearch({
      ...objectSearch,
      [event.target.name]: event.target.value,
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): any => {
    const value = (event.target as HTMLInputElement).value;
  };

  const updatePageData = () => {};
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    KEY.ENTER === event.key && updatePageData();
  };

  return (
    <Modal size="xl" show={open} animation centered>
      <div className="timKiemBenhNhan">
        <Modal.Header className="py-3 header-modal">
          <Modal.Title className="text-pri">Danh mục bác sĩ</Modal.Title>
          <button
            className="btn-close"
            onClick={() => handleClose(false)}
          ></button>
        </Modal.Header>
        <Modal.Body className="py-16 px-24 spaces">
          <div className="d-flex align-items-center pb-5">
            <div className="fw-semibold me-2">Tìm kiếm</div>
            <InputSearch
              className="w-325px"
              handleChange={handleChange}
              handleSearch={updatePageData}
              handleKeyDown={handleKeyDown}
              placeholder="Tìm kiếm"
              type="text"
            />
          </div>
          <div className="tableTimKiem">
            <DanhMucBacSiTable
              getSelectedRowsData={setSelectedRow}
              handleSearchByPage={handleSearchByPage}
              handleChangeValueInput={handleChangeValueInput}
              setShouldOpenFilterSearch={setShouldOpenFilterSearch}
              shouldOpenFilterSearch={shouldOpenFilterSearch}
              data={fakeDataBacSi || bacSiData.data}
              page={page}
              rowsPerPage={rowsPerPage}
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
            totalPages={bacSiData.totalPages}
            totalElements={bacSiData.totalElements}
          />
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center py-1">
          <Button
            className="btn-fill"
            type="submit"
            onClick={() => handleSubmit()}
          >
            <IconButtonSave/>
            <span>Lưu</span>
          </Button>
          <Button className="btn-outline" onClick={() => handleClose(false)}>
            Đóng
          </Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
};

export default DanhMucBacSiDialog;
