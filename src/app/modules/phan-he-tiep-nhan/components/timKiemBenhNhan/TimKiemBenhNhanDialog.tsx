import { FC, useContext, useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import { AppContext } from "../../../appContext/AppContext";
import InputSearch from "../../../component/InputSearch";
import { TablePagination } from "../../../component/table/components/TablePagination";
import { PhanHeTiepNhanContext } from "../../../phan-he-tiep-nhan-thanh-toan/PhanHeTiepNhan";
import { getBenhNhan, getByIdBenhNhan } from "../../../phan-he-tiep-nhan-thanh-toan/services/TiepNhanServices";
import { CODE, DEFAULT_PAGE_INDEX, DEFAULT_TOTAL_ELEMENTS, DEFAULT_TOTAL_PAGES, KEY, RESPONSE_MESSAGE } from "../../../utils/Constant";
import { covertDataTiepNhanNew } from "../../../utils/FormatUtils";
import { handlePagesChange, handleRowsPerPageChange, rowsForPage } from "../../../utils/PageUtils";
import '../../PhanHeTiepNhan.scss';
import { TimKiemBenhNhanModel } from "./TimKiemBenhNhanModels";
import TimKiemBenhNhanTable from "./TimKiemBenhNhanTable";

interface Props {
  open: boolean;
  handleClose: () => void;
  onSelectedPatient?: (patient: any) => void;
}

const TimKiemBenhNhanDialog: FC<Props> = (props) => {
  let { open, handleClose, onSelectedPatient } = props;
  const [page, setPage] = useState<number>(DEFAULT_PAGE_INDEX);
  const [rowsPerPage, setRowsPerPage] = useState<number>(15);
  const [selectedPatients, setSelectedPatients] = useState<TimKiemBenhNhanModel[]>([]);
  let [objectSearch, setObjectSearch] = useState<any>()
  let [shouldOpenFilterSearch, setShouldOpenFilterSearch] = useState<boolean>(false);

  const { setIsLoading } = useContext(AppContext);
  const { setDSDichVu } = useContext(PhanHeTiepNhanContext);
  const [benhNhanData, setBenhNhanData] = useState({
    data: [],
    totalElements: DEFAULT_TOTAL_ELEMENTS,
    totalPages: DEFAULT_TOTAL_PAGES
  });

  const getListBenhNhan = async () => {
    objectSearch = shouldOpenFilterSearch ? objectSearch : {};
    let searchObject = {
      ...objectSearch,
      pageIndex: page,
      pageSize: rowsPerPage
    }
    try {
      const res = await getBenhNhan(searchObject)
      if (res?.data?.code === CODE.SUCCESS) {
        setBenhNhanData({
          data: res?.data?.data?.content || [],
          totalPages: res?.data?.data?.totalPages,
          totalElements: res?.data?.data?.totalElements
        })
      }
      else {
        toast.warning(RESPONSE_MESSAGE.ERROR)
        setIsLoading(false);
      }
    } catch {
      toast.warning(RESPONSE_MESSAGE.ERROR)
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (!shouldOpenFilterSearch) {
      setObjectSearch({})
    }
    getListBenhNhan();
  }, [page, rowsPerPage, shouldOpenFilterSearch]);

  const handleSubmit = async () => {
    let selectedPatient: any = selectedPatients[0]

    let { data } = await getByIdBenhNhan(selectedPatient?.id)
    let dataTTBenhNhan = covertDataTiepNhanNew(data?.data)

    setDSDichVu([])
    onSelectedPatient?.({ ...dataTTBenhNhan });
    handleClose()
  };

  const checkPage = () => {
    if (page !== DEFAULT_PAGE_INDEX) {
      setPage(DEFAULT_PAGE_INDEX)
    } else {
      getListBenhNhan()
    }
  }

  const handleSearchByPage = () => {
    checkPage()
  }

  const handleChangeValueInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setObjectSearch({
      ...objectSearch,
      [event.target.name]: event.target.value
    })
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): any => {
    const value = (event.target as HTMLInputElement).value;
  };

  const updatePageData = () => {
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    KEY.ENTER === event.key && updatePageData();
  };


  return (
    <Modal size="xl" show={open} animation centered>
      <div className="timKiemBenhNhan">
        <Modal.Header className="py-3 header-modal">
          <Modal.Title className="text-pri">Danh sách BN từng KCB</Modal.Title>
          <button className="btn-close" onClick={() => handleClose()}></button>
        </Modal.Header>
        <Modal.Body className="spaces pb-0 pt-16 px-24">
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
            <TimKiemBenhNhanTable
              getSelectedRowsData={setSelectedPatients}
              handleSearchByPage={handleSearchByPage}
              handleChangeValueInput={handleChangeValueInput}
              setShouldOpenFilterSearch={setShouldOpenFilterSearch}
              shouldOpenFilterSearch={shouldOpenFilterSearch}
              benhNhanData={benhNhanData}
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
            totalPages={benhNhanData.totalPages}
            totalElements={benhNhanData.totalElements}
          />
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center py-1">
          <Button
            className="btn-fill"
            onClick={() => handleSubmit()}
            disabled={selectedPatients?.length === 0}>
            Chọn
          </Button>
          <Button
            className="btn-outline"
            onClick={() => handleClose()}>
            Đóng
          </Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
};

export default TimKiemBenhNhanDialog;
