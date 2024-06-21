import { FC, useContext, useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import { AppContext } from "../../appContext/AppContext";
import InputSearch from "../InputSearch";
import { TablePagination } from "../table/components/TablePagination";
import {
  getBenhNhan,
  getByIdBenhNhan,
} from "../../phan-he-tiep-nhan-thanh-toan/services/TiepNhanServices";
import {
  CODE,
  DEFAULT_PAGE_INDEX,
  DEFAULT_TOTAL_ELEMENTS,
  DEFAULT_TOTAL_PAGES,
  KEY,
  RESPONSE_MESSAGE
} from "../../utils/Constant";
import {
  covertDataTiepNhanNew
} from "../../utils/FormatUtils";
import {
  handlePagesChange,
  handleRowsPerPageChange,
  rowsForPage,
} from "../../utils/PageUtils";
import { PhanHeDatLichHenContext } from "../../phan-he-dat-lich-hen/PhanHeDatLichHen";
import { TimKiemBenhNhanModel } from "./ModelsTimKiemBenhNhan";
import { CustomColumn } from "../table/table-custom/tableCustomeModel";
import CombinedTable from "../table/combined-table/CombinedTable";
import { fakeData } from "../../phan-he-tiep-nhan-thanh-toan/components/fakeData";
import { TableCustomHeader } from "../table/components/TableCustomHeader";
import { TableCustomCell } from "../table/components/TableCustomCell";
// import "../../PhanHeDatLichHen.scss"
interface Props {
  open: boolean;
  handleClose: () => void;
  onSelectedPatient?: (patient: any) => void;
}

const ModalTimKiemBenhNhan: FC<Props> = (props) => {
  let { open, handleClose, onSelectedPatient } = props;
  const [page, setPage] = useState<number>(DEFAULT_PAGE_INDEX);
  const [rowsPerPage, setRowsPerPage] = useState<number>(15);
  const [selectedPatients, setSelectedPatients] = useState<
    TimKiemBenhNhanModel[]
  >([]);
  let [objectSearch, setObjectSearch] = useState<any>();
  let [shouldOpenFilterSearch, setShouldOpenFilterSearch] =
    useState<boolean>(false);

  const { setIsLoading } = useContext(AppContext);
  const { setDSDichVu } = useContext(PhanHeDatLichHenContext);
  const [benhNhanData, setBenhNhanData] = useState({
    data: [],
    totalElements: DEFAULT_TOTAL_ELEMENTS,
    totalPages: DEFAULT_TOTAL_PAGES,
  });

  const getListBenhNhan = async () => {
    objectSearch = shouldOpenFilterSearch ? objectSearch : {};
    let searchObject = {
      ...objectSearch,
      pageIndex: page,
      pageSize: rowsPerPage,
    };
    try {
      const res = await getBenhNhan(searchObject);
      if (res?.data?.code === CODE.SUCCESS) {
        setBenhNhanData({
          data: res?.data?.data?.content || [],
          totalPages: res?.data?.data?.totalPages,
          totalElements: res?.data?.data?.totalElements,
        });
      } else {
        toast.warning(RESPONSE_MESSAGE.ERROR);
        setIsLoading(false);
      }
    } catch {
      toast.warning(RESPONSE_MESSAGE.ERROR);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!shouldOpenFilterSearch) {
      setObjectSearch({});
    }
    getListBenhNhan();
  }, [page, rowsPerPage, shouldOpenFilterSearch]);

  const handleSubmit = async () => {
    let selectedPatient: any = selectedPatients[0];

    let { data } = await getByIdBenhNhan(selectedPatient?.id);
    let dataTTBenhNhan = covertDataTiepNhanNew(data?.data);

    setDSDichVu([]);
    onSelectedPatient?.({ ...dataTTBenhNhan });
    handleClose();
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

  const updatePageData = () => { };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    KEY.ENTER === event.key && updatePageData();
  };

  const TimKiemBenhNhanColumns: ReadonlyArray<CustomColumn<TimKiemBenhNhanModel>> = [
    {
      Header: (props) => (
        <TableCustomHeader<TimKiemBenhNhanModel>
          tableProps={props}
          title={"STT"}
          className="text-center text-white align-middle min-w-25px p-2 border-x"
        />
      ),
      typeSorting: "text",
      sorting: false,
      id: "Số thứ tự",
      name: "stt",
      Cell: ({ ...props }) => (
        <TableCustomCell
          tableProps={props}
          data={String((page - 1) * rowsPerPage + props?.row?.index + 1)}
          className="text-center border spaces py-4 h-100"
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader<TimKiemBenhNhanModel>
          tableProps={props}
          title={"Mã BN"}
          className=" text-center min-w-100px p-2 border-x"
        />
      ),
      id: "Mã BN",
      Cell: ({ ...props }) => (
        <TableCustomCell
          tableProps={props}
          className=" text-center border spaces py-4 h-100"
          data={props?.data[props?.row?.index]?.maBN || ""}
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader<TimKiemBenhNhanModel>
          tableProps={props}
          title={"Họ tên"}
          className=" text-center min-w-175px p-2 border-x"
        />
      ),
      id: "Họ tên",
      Cell: ({ ...props }) => (
        <TableCustomCell
          tableProps={props}
          className=" text-align-left text-uppercase border spaces py-4 h-100"
          data={props?.data[props?.row?.index]?.hoTen || ""}
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader<TimKiemBenhNhanModel>
          tableProps={props}
          title={"Ngày sinh"}
          className=" text-center text-white align-middle min-w-100px p-2 border-x"
        />
      ),
      id: "ngaySinh",
      Cell: ({ ...props }) => (
        <TableCustomCell
          tableProps={props}
          data={props?.data[props?.row?.index]?.ngaySinh || ""}
          className=" text-center border spaces py-4 h-100"
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader<TimKiemBenhNhanModel>
          tableProps={props}
          title={"Giới tính"}
          className=" text-center text-white align-middle min-w-50px p-2 border-x"
        />
      ),
      id: "Giới tính",
      Cell: ({ ...props }) => (
        <TableCustomCell
          tableProps={props}
          data={props?.data[props?.row?.index]?.gioiTinh || ""}
          className=" text-center border spaces py-4 h-100"
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader<TimKiemBenhNhanModel>
          tableProps={props}
          title={"Địa chỉ"}
          className=" text-center min-w-150px p-2 border-x"
        />
      ),
      id: "Địa chỉ",
      Cell: ({ ...props }) => (
        <TableCustomCell
          tableProps={props}
          className="text-start border spaces py-4 h-100"
          data={
            <div>
              {props?.data[props?.row?.index]?.diaChi}
            </div>
          }
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader<TimKiemBenhNhanModel>
          tableProps={props}
          title={"Nghề nghiệp"}
          className=" text-center min-w-150px p-2 border-x"
        />
      ),
      id: "ngheNgiep",
      Cell: ({ ...props }) => (
        <TableCustomCell
          tableProps={props}
          className="text-start border spaces py-4 h-100"
          data={
            <div>
              {props?.data[props?.row?.index]?.ngheNghiep}
            </div>
          }
        />
      ),
    },
  ];

  return (
    <Modal size="xl" show={open} animation centered>
      <div className="timKiemBenhNhanDatLichHen">
        <Modal.Header className="py-3 header-modal">
          <Modal.Title className="text-pri">Tìm kiếm bệnh nhân</Modal.Title>
          <button className="btn-close" onClick={() => handleClose()}></button>
        </Modal.Header>
        <Modal.Body className="py-16 px-24 spaces">
          <div className="tableTimKiem">
            <InputSearch
              handleChange={handleChange}
              handleSearch={updatePageData}
              handleKeyDown={handleKeyDown}
              placeholder="Tìm kiếm"
              type="text"
            />
            <CombinedTable
              userColumns={TimKiemBenhNhanColumns}
              data={fakeData || benhNhanData}
              singleSelectTable
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
            disabled={selectedPatients?.length === 0}
          >
            Chọn
          </Button>
          <Button className="btn-outline" onClick={() => handleClose()}>
            Đóng
          </Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
};

export default ModalTimKiemBenhNhan;
