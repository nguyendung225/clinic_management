import { FC, createContext, useEffect, useState } from "react";
import React from "react";
import { chiTietGiaDichVuPtttData } from "../fakeData";
import { GiaDichVuPTTTColumn } from "./BangGiaDichVuPTTTColumn";
import { BangGiaDichVuProps, ChiTietGiaDichVuPTTTModel } from "../../../model/GiaDichVuPTTTModel";
import { TableCustom } from "../../../../component/table/table-custom/TableCustom";

export const ChiTietGiaDichVuContext = createContext(()=> {})

const BangChiTietGiaDichVuPTTT: FC<BangGiaDichVuProps> = () => {
  const [searchObject, setSearchObject] = useState({});

  useEffect(() => {
    handleSearchByPage();
  }, []);

  const handleSearchByPage = (): any => {
    // let object: SearchObject = {
    //   ...searchObject,
    //   keyword: "",
    //   pageIndex: 1,
    //   pageSize: 10,
    // };
    // searchByPage(object).then(({ data }) => {
    //   setItemList(data.data.content);
    // });
  };
  const handleChangeValueInput = (event: React.ChangeEvent<HTMLInputElement>): any => {
    const value = (event.target as HTMLInputElement).value;
    setSearchObject({ ...searchObject, [event.target.name]: value });
  };


  return (
    <ChiTietGiaDichVuContext.Provider value={handleSearchByPage}>
      <div className="profile-title bg-light-dark">
        <span className="fs-4 fw-bold spaces py-8 px-10">
          Danh sách chi tiết giá dịch vụ
        </span>
      </div>

      <TableCustom<ChiTietGiaDichVuPTTTModel>
        minHeight={160}
        data={chiTietGiaDichVuPtttData}
        columns={GiaDichVuPTTTColumn}
        handleSearchByPage={handleSearchByPage}
        handleChangeValueInput={handleChangeValueInput}
      />
    </ChiTietGiaDichVuContext.Provider>
  );
};
export { BangChiTietGiaDichVuPTTT };
