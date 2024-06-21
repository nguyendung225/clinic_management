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
import { DanhMucNgayLamViecModel } from "../../models/ModelDatHen";
import DanhMucNgayLamViecTable from "../../components/tab-cau-hinh-dat-hen/DanhMucNgayLamViecTable";
import { IconButtonSave } from "../../../component/IconSvg";


interface Props {
  open: boolean;
  handleClose: Dispatch<SetStateAction<boolean>>;
  selectedRow: DanhMucNgayLamViecModel[];
  setSelectedRow?: React.Dispatch<React.SetStateAction<DanhMucNgayLamViecModel[]>>;
  dataNgayLamViec?: any;
  setDataNgayLamViec?: any;
}

export const fakeDataNgayLamViec: DanhMucNgayLamViecModel[] = [
  {
    ngay:"Thứ 2"
  },
  {
    ngay:"Thứ 3"
  },
  {
    ngay:"Thứ 4"
  },
  {
    ngay:"Thứ 5"
  },
  {
    ngay:"Thứ 6"
  },
  {
    ngay:"Thứ 7"
  },
  {
    ngay:"Chủ nhật"
  },
];

const DanhMucNgayLamViecDialog: FC<Props> = (props) => {
  let {
    open,
    handleClose,
    selectedRow,
    setSelectedRow,
    dataNgayLamViec,
    setDataNgayLamViec,
  } = props;
  const [page, setPage] = useState<number>(DEFAULT_PAGE_INDEX);
  const [rowsPerPage, setRowsPerPage] = useState<number>(15);
  let [objectSearch, setObjectSearch] = useState<any>();
  let [shouldOpenFilterSearch, setShouldOpenFilterSearch] =
    useState<boolean>(false);

  const { setIsLoading } = useContext(AppContext);
  const [phongKhamData, setNgayLamViecData] = useState({
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
    if (dataNgayLamViec && selectedRow) {
      if (
        dataNgayLamViec?.find(
          (item: DanhMucNgayLamViecModel) =>
            item.ngay === selectedRow[0]?.ngay
        )
      ) {
        setDataNgayLamViec(dataNgayLamViec);
        toast.warning("Ngày làm việc đã được chọn!");
      } else {
        setDataNgayLamViec([...dataNgayLamViec, ...selectedRow]);
        handleClose(false);
      }
    }
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
    <Modal size="lg" show={open} animation centered>
      <div className="timKiemBenhNhan">
        <Modal.Header className="py-3 header-modal">
          <Modal.Title className="text-pri">Chọn ngày làm việc</Modal.Title>
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
            <DanhMucNgayLamViecTable
              getSelectedRowsData={setSelectedRow}
              handleSearchByPage={handleSearchByPage}
              handleChangeValueInput={handleChangeValueInput}
              setShouldOpenFilterSearch={setShouldOpenFilterSearch}
              shouldOpenFilterSearch={shouldOpenFilterSearch}
              data={fakeDataNgayLamViec || phongKhamData.data}
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
            totalPages={phongKhamData.totalPages}
            totalElements={phongKhamData.totalElements}
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

export default DanhMucNgayLamViecDialog;
