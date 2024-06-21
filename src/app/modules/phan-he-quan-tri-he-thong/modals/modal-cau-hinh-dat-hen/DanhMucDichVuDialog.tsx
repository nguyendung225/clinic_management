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
import DanhMucDichVuTable from "../../components/tab-cau-hinh-dat-hen/DanhMucDichVuTable";
import { DanhMucDichVuModel } from "../../models/ModelDatHen";
import { IconButtonSave } from "../../../component/IconSvg";

interface Props {
  open: boolean;
  handleClose: Dispatch<SetStateAction<boolean>>;
  selectedRow: DanhMucDichVuModel[];
  setSelectedRow?: React.Dispatch<React.SetStateAction<DanhMucDichVuModel[]>>;
  dataDichVu?: any;
  setDataDichVu?: any;
}

export const fakeDataDichVu: DanhMucDichVuModel[] = [
  {
    maDichVu: "klsc",
    tenDichVu: "Khám lâm sàng chung",
    giaBhyt: 200000,
    giaDichVu: 400000,
    giaVienPhi: 500000,
  },
  {
    maDichVu: "xq",
    tenDichVu: "Chụp X-quang",
    giaBhyt: 200000,
    giaDichVu: 400000,
    giaVienPhi: 500000,
  },
  {
    maDichVu: "cnstt",
    tenDichVu: "Chụp nội soi tổng thể",
    giaBhyt: 200000,
    giaDichVu: 400000,
    giaVienPhi: 500000,
  },
  {
    maDichVu: "kn",
    tenDichVu: "Khám nội",
    giaBhyt: 200000,
    giaDichVu: 400000,
    giaVienPhi: 500000,
  },
  {
    maDichVu: "kng",
    tenDichVu: "Khám ngoại",
    giaBhyt: 200000,
    giaDichVu: 400000,
    giaVienPhi: 500000,
  },
  {
    maDichVu: "knh",
    tenDichVu: "Khám nhi",
    giaBhyt: 200000,
    giaDichVu: 400000,
    giaVienPhi: 500000,
  },
  {
    maDichVu: "yhct",
    tenDichVu: "Y học cổ truyền",
    giaBhyt: 200000,
    giaDichVu: 400000,
    giaVienPhi: 500000,
  },
];

const DanhMucDichVuDialog: FC<Props> = (props) => {
  let {
    open,
    handleClose,
    selectedRow,
    setSelectedRow,
    dataDichVu,
    setDataDichVu,
  } = props;
  const [page, setPage] = useState<number>(DEFAULT_PAGE_INDEX);
  const [rowsPerPage, setRowsPerPage] = useState<number>(15);
  let [objectSearch, setObjectSearch] = useState<any>();
  let [shouldOpenFilterSearch, setShouldOpenFilterSearch] =
    useState<boolean>(false);

  const { setIsLoading } = useContext(AppContext);
  const [dichVuData, setDichVuData] = useState({
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
    if (dataDichVu && selectedRow) {
      if (
        dataDichVu?.find(
          (item: DanhMucDichVuModel) =>
            item.maDichVu === selectedRow[0]?.maDichVu
        )
      ) {
        setDataDichVu(dataDichVu);
        toast.warning("Dịch vụ đã được chọn!");
      } else {
        setDataDichVu([...dataDichVu, ...selectedRow]);
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
          <div className="tableHenKham">
            <DanhMucDichVuTable
              getSelectedRowsData={setSelectedRow}
              handleSearchByPage={handleSearchByPage}
              handleChangeValueInput={handleChangeValueInput}
              setShouldOpenFilterSearch={setShouldOpenFilterSearch}
              shouldOpenFilterSearch={shouldOpenFilterSearch}
              data={fakeDataDichVu || dichVuData.data}
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
            totalPages={dichVuData.totalPages}
            totalElements={dichVuData.totalElements}
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

export default DanhMucDichVuDialog;
