import React, { useContext, useEffect, useState } from "react";
import { Column } from "react-table";
import { toast } from "react-toastify";
import { AppContext } from "../../../appContext/AppContext";
import InputSearch from "../../../component/InputSearch";
import { TableCustomCell } from "../../../component/table/components/TableCustomCell";
import { TableCustomHeader } from "../../../component/table/components/TableCustomHeader";
import { PhanHeTiepNhanContext } from "../../PhanHeTiepNhan";
import { danhSachTabTiepNhan } from "../../constants/PhanHeTiepNhan";
import {
  CODE,
  DEFAULT_PAGE_INDEX,
  DEFAULT_PAGE_SIZE,
  DEFAULT_TOTAL_ELEMENTS,
  DEFAULT_TOTAL_PAGES,
  KEY,
  RESPONSE_MESSAGE,
  SELECTION_MODE,
} from "../../../utils/Constant";
import { ThanhToanContext } from "./ContextThanhToan";
import { statusOptions } from "../../constants/constants";
import { DanhSachBenhNhanInterface } from "../../models/DanhSachBenhNhanModel";
import { dsBenhNhan } from "../../models/ThanhToanModel";
import { getDsBenhNhanDangKham } from "../../services/ThanhToanServices";
import { dataDSBenhNhan } from "../fakeData";
import { TableCustom } from "../../../component/table/table-custom/TableCustom";

interface Props {
  setSelectedRow: React.Dispatch<any>;
  selectedRow: any;
}

const TableDanhSachBenhNhan = ({ setSelectedRow, selectedRow }: Props) => {
  
  const { setIsLoading, currentTab } = useContext(AppContext);
  let { setInforBenhNhan, updateDanhSachBenhNhan, inforBenhNhan } =
    useContext(ThanhToanContext);
  const { thongTinBenhNhan, isPay } = useContext(PhanHeTiepNhanContext);
  const [dsBenhNhan, setDsBenhNhan] = useState<dsBenhNhan>({
    data: [],
    totalElements: DEFAULT_TOTAL_ELEMENTS,
    totalPages: DEFAULT_TOTAL_PAGES,
  });
  const [keyword, setKeyword] = useState<string>("");
  const [page, setPage] = useState<number>(DEFAULT_PAGE_INDEX);
  const [rowsPerPage, setRowsPerPage] = useState<number>(DEFAULT_PAGE_SIZE);

  useEffect(() => {
    setSelectedRow([dataDSBenhNhan[0]])
  }, []);

  useEffect(() => {
    if (currentTab === danhSachTabTiepNhan[2].eventKey) getListBenhNhan();
  }, [page, rowsPerPage, updateDanhSachBenhNhan, currentTab]);

  useEffect(() => {
    isPay.boolean && setPage(isPay.page);
    isPay.boolean && setRowsPerPage(isPay.pageSize);
  }, [isPay]);

  const getListBenhNhan = async () => {
    let searchObject = {
      pageIndex: page,
      pageSize: rowsPerPage,
    };
    try {
      const res = await getDsBenhNhanDangKham(searchObject);
      if (res?.data?.code === CODE.SUCCESS) {
        setDsBenhNhan({
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
    setInforBenhNhan(selectedRow[0]);
  }, [selectedRow[0]]);

  const updatePageData = async () => {
    setIsLoading(true);
    let searchObject = {
      keyword: keyword,
      pageIndex: page,
      pageSize: rowsPerPage,
    };
    try {
      let res = await getDsBenhNhanDangKham(searchObject);
      if (res?.data?.code === CODE.SUCCESS) {
        setDsBenhNhan({
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
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    KEY.ENTER === event.key && updatePageData();
  };

  const DanhSachBenhNhanColumns: ReadonlyArray<
    Column<DanhSachBenhNhanInterface>
  > = [
    {
      Header: (props) => (
        <TableCustomHeader<DanhSachBenhNhanInterface>
          tableProps={props}
          title={"TT"}
          className=" text-center text-white align-middle bg-pri"
        />
      ),
      id: "TT",
      Cell: ({ ...props }) => (
        <TableCustomCell
          data={
            props.data[props.row.index].status ===
            statusOptions.chuaThanhToan.name ? (
              <i className="bi bi-circle-fill text-danger"></i>
            ) : props.data[props.row.index].status ===
              statusOptions.daThanhToan.name ? (
              <i className="bi bi-circle-fill text-success"></i>
            ) : (
              <i className="bi bi-circle-fill text-primary"></i>
            )
          }
          className="text-center"
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader<DanhSachBenhNhanInterface>
          tableProps={props}
          title={"Tên bệnh nhân"}
          className="text-center text-white align-middle bg-pri min-w-200px"
        />
      ),
      id: "name",
      Cell: ({ ...props }) => (
        <TableCustomCell
          className="text-uppercase ps-2"
          data={props.data[props.row.index]?.hoTen}
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader<DanhSachBenhNhanInterface>
          tableProps={props}
          title={"Tuổi"}
          className="text-center text-white align-middle bg-pri min-w-50px"
        />
      ),
      id: "age",
      Cell: ({ ...props }) => (
        <TableCustomCell
          data={props.data[props.row.index]?.age}
          className="text-center"
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader<DanhSachBenhNhanInterface>
          tableProps={props}
          title={"Duyệt chỉ định"}
          className=" text-center text-white align-middle bg-pri min-w-150px"
        />
      ),
      id: "duyetChiDinh",
      Cell: ({ ...props }) => (
        <TableCustomCell
          data={props.data[props.row.index]?.duyetChiDinh}
          className="text-uppercase"
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader<DanhSachBenhNhanInterface>
          tableProps={props}
          title={"ngoài giờ"}
          className=" text-center text-white align-middle bg-pri min-w-100px"
        />
      ),
      id: "ngoaiGio",
      Cell: ({ ...props }) => (
        <TableCustomCell
          data={props.data[props.row.index]?.ngoaiGio}
          className="text-center"
        />
      ),
    },
  ];

  return (
    <>
      <div className="border-left-0 h-calc-10px">
        <InputSearch
            handleChange={handleChange}
            handleSearch={updatePageData}
            handleKeyDown={handleKeyDown}
            placeholder="Tìm kiếm"
            type="text"
        />
        <TableCustom<any>
          className={"h-bang-ds-bn"}
          data={dataDSBenhNhan}
          columns={DanhSachBenhNhanColumns}
          selectionMode={SELECTION_MODE.SINGLE_NO_RADIO_BUTTON}
          getSelectedRowsData={setSelectedRow}
          rowSelected={selectedRow?.length === 0 ? thongTinBenhNhan?.caseId : null}
        />
      </div>
    </>
  );
};

export { TableDanhSachBenhNhan };

