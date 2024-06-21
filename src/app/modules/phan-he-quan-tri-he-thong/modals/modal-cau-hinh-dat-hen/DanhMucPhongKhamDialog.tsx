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
import {
  DEFAULT_PAGE_INDEX,
  DEFAULT_TOTAL_ELEMENTS,
  DEFAULT_TOTAL_PAGES,
  KEY,
} from "../../../utils/Constant";
import InputSearch from "../../../component/InputSearch";
import { TablePagination } from "../../../component/table/components/TablePagination";
import {
  handlePagesChange,
  handleRowsPerPageChange,
  rowsForPage,
} from "../../../utils/PageUtils";
import TimKiemBenhNhanTable from "../../../phan-he-tiep-nhan/components/timKiemBenhNhan/TimKiemBenhNhanTable";
import DanhMucPhongKhamTable from "../../components/tab-cau-hinh-dat-hen/DanhMucPhongKhamTable";
import { DanhMucPhongKhamModel } from "../../models/ModelDatHen";
import { IconButtonSave } from "../../../component/IconSvg";

interface Props {
  open: boolean;
  handleClose: Dispatch<SetStateAction<boolean>>;
  selectedRow: DanhMucPhongKhamModel[];
  setSelectedRow?: React.Dispatch<React.SetStateAction<DanhMucPhongKhamModel[]>>;
  dataPhongKham?: any;
  setDataPhongKham?: any;
}

export const fakeDataPhongKham: DanhMucPhongKhamModel[] = [
  {
    maPhong: "klsc",
    tenKhoaPhong: "Khám lâm sàng chung",
    soPhong: 200000,
  },
  {
    maPhong: "xq",
    tenKhoaPhong: "Chụp X-quang",
    soPhong: 200000,
  },
  {
    maPhong: "cnstt",
    tenKhoaPhong: "Chụp nội soi tổng thể",
    soPhong: 200000,
  },
  {
    maPhong: "kn",
    tenKhoaPhong: "Khám nội",
    soPhong: 200000,
  },
  {
    maPhong: "kng",
    tenKhoaPhong: "Khám ngoại",
    soPhong: 200000,
  },
  {
    maPhong: "knh",
    tenKhoaPhong: "Khám nhi",
    soPhong: 200000,
  },
  {
    maPhong: "yhct",
    tenKhoaPhong: "Y học cổ truyền",
    soPhong: 200000,
  },
];

const DanhMucPhongKhamDialog: FC<Props> = (props) => {
  let {
    open,
    handleClose,
    selectedRow,
    setSelectedRow,
    dataPhongKham,
    setDataPhongKham,
  } = props;
  const [page, setPage] = useState<number>(DEFAULT_PAGE_INDEX);
  const [rowsPerPage, setRowsPerPage] = useState<number>(15);
  let [objectSearch, setObjectSearch] = useState<any>();
  let [shouldOpenFilterSearch, setShouldOpenFilterSearch] =
    useState<boolean>(false);

  const { setIsLoading } = useContext(AppContext);
  const [phongKhamData, setPhongKhamData] = useState({
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
    if (dataPhongKham && selectedRow) {
      if (
        dataPhongKham?.find(
          (item: DanhMucPhongKhamModel) =>
            item.maPhong === selectedRow[0]?.maPhong
        )
      ) {
        setDataPhongKham(dataPhongKham);
        toast.warning("Phòng khám đã được chọn!");
      } else {
        setDataPhongKham([...dataPhongKham, ...selectedRow]);
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
    <Modal size="xl" show={open} animation centered>
      <div className="timKiemBenhNhan">
        <Modal.Header className="py-3 header-modal">
          <Modal.Title className="text-pri">Danh mục phòng khám</Modal.Title>
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
            <DanhMucPhongKhamTable
              getSelectedRowsData={setSelectedRow}
              handleSearchByPage={handleSearchByPage}
              handleChangeValueInput={handleChangeValueInput}
              setShouldOpenFilterSearch={setShouldOpenFilterSearch}
              shouldOpenFilterSearch={shouldOpenFilterSearch}
              data={fakeDataPhongKham || phongKhamData.data}
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

export default DanhMucPhongKhamDialog;
