import { FC, createContext, useEffect, useState, useContext } from "react";
import React from "react";
import { TableCustom } from "../../../component/table-custom/TableCustom";
import { SearchObject, receptionList } from "../../models/DSTiepNhanModel";
import { useIntl } from "react-intl";
import { searchByPage } from "../../services/DSTiepNhanServices";
import { receptionColumn } from "./receptionColumn";
import { TablePagination } from "../../../component/TablePagination";
import { handlePagesChange, handleRowsPerPageChange, rowsForPage } from "../../../utils/PageUtils";
import { toast } from "react-toastify";
import { AppContext } from "../../../appContext/AppContext";
import { CODE } from "../../../utils/Constant";
import { PhanHeTiepNhanContext } from "../../PhanHeTiepNhan";


export const ReceptionContext = createContext(()=> {})

const Reception: FC = () => {
  const [itemList, setItemList] = useState<receptionList[]>([]);
  const [searchObject, setSearchObject] = useState({});
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [totalPages, setTotalPage] = useState<number>(50)
  const [totalElements, setTotalElements] = useState<number>(500);
  const [keyword, setKeyword] = useState<string>("");

  const { setIsLoading } = useContext(AppContext);
  const { currentTab } = useContext(PhanHeTiepNhanContext);
  const intl = useIntl();

  useEffect(() => {
    ("2" === currentTab) && updatePageData();
  }, [page, rowsPerPage, currentTab]);

  const updatePageData = (): any => {
    setIsLoading(true);
    let payload: SearchObject = {
      ...searchObject,
      keyword: keyword,
      pageIndex: page,
      pageSize: rowsPerPage,
    };
    searchByPage(payload).then(({ data }) => {
      if(CODE.SUCCESS === data?.code){
        setItemList(data?.data?.content);
        setTotalPage(data?.data?.totalPages)
        setTotalElements(data?.data?.totalElements)
      }
      else {
        toast.warning(data.message)
      }
      setIsLoading(false);
    }).catch((err) => {
      toast.error("Xảy ra lỗi, vui lòng thử lại!")
      setIsLoading(false);
    })
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): any => {
    const value = (event.target as HTMLInputElement).value;
    setKeyword(value)
    setSearchObject({ ...searchObject, [event.target.name]: value });
  };


  return (
    <ReceptionContext.Provider value={updatePageData}>
      <div className="spaces my-10 w-25 px-10">
        <input
          onChange={handleChange}
          placeholder="Tìm kiếm"
          className="form-control customs-input"
          type="text"
        />
      </div>

      <TableCustom<receptionList>
        isReceptionList={true}
        compact={true}
        minHeight={450}
        data={itemList}
        columns={receptionColumn}
        handleSearchByPage={updatePageData}
        handleChangeValueInput={handleChange}
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
    </ReceptionContext.Provider>
  );
};
export { Reception };
