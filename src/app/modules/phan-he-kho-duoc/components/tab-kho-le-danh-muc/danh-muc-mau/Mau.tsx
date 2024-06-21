import React, { useContext, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import InputSearch from "../../../../component/InputSearch";
import { TablePagination } from "../../../../component/table/components/TablePagination";
import {
  handlePagesChange,
  handleRowsPerPageChange,
  rowsForPage,
} from "../../../../utils/PageUtils";
import MauTable from "./MauTable";
import {
  CODE,
  DEFAULT_TOTAL_ELEMENTS,
  DEFAULT_TOTAL_PAGES,
  KEY,
} from "../../../../utils/Constant";
import { AppContext } from "../../../../appContext/AppContext";
import { IResponseData } from "../../../../utils/models";
import { searchMau } from "../../../services/MauService";
import { toast } from "react-toastify";
import "../../../PhanHeKhoDuoc.scss";
import { KEY_TAB_DS_KHO_DUOC, TYPE_PRODUCT } from "../../../consts/PhanHeKhoDuocConst";

type Props = {
  eventKey: string;
  onTabChange?: (activeTab: string | null) => void;
  activeTab?: string;
};

export default function Mau(props: Props) {
  const { setIsLoading, currentTab } = useContext(AppContext);
  const [page, setPage] = useState<number>(1);
  const [keyword, setKeyword] = useState<string>("");
  const [rowsPerPage, setRowsPerPage] = useState<number>(15);
  const [totalElements, setTotalElements] = useState<number>(DEFAULT_TOTAL_ELEMENTS);
  const [totalPages, setTotalPages] = useState<number>(DEFAULT_TOTAL_PAGES);
  const [listMau, setListMau] = useState<any[]>([]);

  const getListMau = async () => {
    try {
      let searchObject = {
        pageIndex: page,
        pageSize: rowsPerPage,
        productType: TYPE_PRODUCT.MAU,
        keyword: keyword,
      };
      setIsLoading(true);
      let { data }: IResponseData = await searchMau(searchObject);
      setIsLoading(false);

      if (CODE.SUCCESS === data?.code) {
        setTotalPages(data?.data?.totalPages);
        setTotalElements(data?.data?.totalElements);
        setListMau(data?.data?.content);
        return;
      }

      toast.error(data?.message);
    } catch (error) {
      setIsLoading(false);
      toast.error("Xảy ra lỗi, vui lòng thử lại!");
    }
  };

  useEffect(() => {
    // if (currentTab === KEY_TAB_DS_KHO_DUOC.DANH_MUC && props.eventKey === props.activeTab) {
    //   getListMau();
    // }
  }, [page, rowsPerPage, currentTab, props.activeTab]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (KEY.ENTER === event.key) {
      getListMau();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleSearch = () => {
    getListMau();
  };

  return (
    <div className="danh-muc-mau">
      <Row className="d-flex justify-content-between pb-2">
        <Col></Col>
        <Col xs={4}>
          <InputSearch
            value={keyword}
            name="keyword"
            handleChange={handleChange}
            handleKeyDown={handleKeyDown}
            handleSearch={handleSearch}
            placeholder="Tìm kiếm"
          />
        </Col>
      </Row>
      <MauTable
        data={listMau}
        page={page}
        rowsPerPage={rowsPerPage}
      />
      <TablePagination
        handlePagesChange={handlePagesChange}
        handleRowsPerPageChange={handleRowsPerPageChange}
        rowsPerPage={rowsPerPage}
        rowsForPage={rowsForPage}
        page={page}
        setPage={setPage}
        setRowsPerPage={setRowsPerPage}
        totalPages={totalPages}
        totalElements={totalElements}
      />
    </div>
  );
}
