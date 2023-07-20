import { FC, useContext, useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { TableCustomV2 } from "../../../component/table-custom-v2/TableCustomV2";
import { TimKiemBenhNhanColumns } from "./TimKiemBenhNhanColumns";
import { TimKiemBenhNhanInterface, TimKiemBenhNhanModel } from "./TimKiemBenhNhanModels";
import { TimKiemBenhNhanData, TimKiemBenhNhanFakeData } from "./FakeData";
import { TablePagination } from "../../../component/TablePagination";
import { handlePagesChange, handleRowsPerPageChange, rowsForPage } from "../../../utils/PageUtils";
import { getBenhNhan } from "../../services/TiepNhan";
import { toast } from "react-toastify";
import { CODE, DEFAULT_PAGE_INDEX, DEFAULT_PAGE_SIZE } from "../../../utils/Constant";
import { AppContext } from "../../../appContext/AppContext";
import { initialBenhNhanBhyt, initialBenhNhanCase } from "../../const/PhanHeTiepNhan";
import moment from "moment";

interface Props {
  open: boolean;
  handleClose: () => void;
  onSelectedPatient?: (patient: any) => void;
}

const TimKiemBenhNhanDialog: FC<Props> = (props) => {
  let { open, handleClose, onSelectedPatient } = props;
  const [page, setPage] = useState<number>(DEFAULT_PAGE_INDEX);
  const [rowsPerPage, setRowsPerPage] = useState<number>(DEFAULT_PAGE_SIZE);
  const [totalPages, setTotalPage] = useState<number>(0)
  const [totalElements, setTotalElements] = useState<number>(0);
  const [selectedPatients, setSelectedPatients] = useState<TimKiemBenhNhanModel[]>([]);

  const { setIsLoading } = useContext(AppContext);
  const [listBenhNhan, setListBenhNhan] = useState([]);

  const getListBenhNhan = () => {
    let searchObject = {
      pageIndex: page,
      pageSize: rowsPerPage
    }
    getBenhNhan(searchObject).then(({data}) => {
      if(CODE.SUCCESS === data?.code){
        setListBenhNhan(data?.data?.content);
        setTotalPage(data?.data?.totalPages)
        setTotalElements(data?.data?.totalElements)
      }
      else {
        toast.warning(data.message)
        setIsLoading(false);
      }
    }).catch((arg) => {
      toast.error('Có lỗi xảy ra, vui lòng thử lại!')
      setIsLoading(false);
    })

  }

  useEffect(() => {
    getListBenhNhan();
  }, [page, rowsPerPage]);

  const handleSubmit = () => {
    let selectedPatient = selectedPatients[0]
    selectedPatient.benhNhanCase = initialBenhNhanCase
    selectedPatient.benhNhanBhyt = initialBenhNhanBhyt
    selectedPatient.ngaySinh = moment(new Date(selectedPatient.ngaySinh)).format("YYYY-MM-DD")
    onSelectedPatient?.(selectedPatient);
  };

  return (
    <Modal size="xl" show={open} animation centered>
      <Modal.Header className="py-3">
        <Modal.Title className="text-pri">Danh sách BN từng KCB</Modal.Title>
        <button className="btn-close" onClick={() => handleClose()}></button>
      </Modal.Header>
      <Modal.Body className="py-0 spaces">
        <TableCustomV2<TimKiemBenhNhanModel>
          columns={TimKiemBenhNhanColumns}
          data={listBenhNhan}
          // data={TimKiemBenhNhanFakeData}
          getSelectedRowsData={setSelectedPatients}
          selectionMode="single"
          hasToolbar
          minHeight={450}
        />
        <TablePagination
          page={page}
          setPage={setPage}
          handlePagesChange={handlePagesChange}
          handleRowsPerPageChange={handleRowsPerPageChange}
          rowsForPage={rowsForPage}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          totalPages={totalPages}
          totalElements={totalElements}
      />
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center py-1">
        <Button
          size="sm"
          className="bg-pri"
          onClick={() => handleSubmit()}
          disabled={selectedPatients?.length === 0}>
          Chọn
        </Button>
        <Button
          size="sm"
          className="btn btn-outline btn-outline-primary btn-active-light-primary"
          onClick={() => handleClose()}>
          Đóng
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TimKiemBenhNhanDialog;
