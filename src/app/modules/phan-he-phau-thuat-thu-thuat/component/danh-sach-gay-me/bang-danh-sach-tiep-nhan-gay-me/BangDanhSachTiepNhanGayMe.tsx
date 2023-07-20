import { FC, createContext, useEffect, useState } from "react";
import React from "react";
import { TableCustom } from "../../../../component/table-custom/TableCustom";
import { DanhSachTiepNhanGayMeColumn } from "./DanhSachTiepNhanGayMeColumn";
import { BangDanhSachTiepNhanGayMeProps, DanhSachTiepNhanGayMeModel } from "../../../model/DanhSachTiepNhanGayMeModel";
import { danhSachTiepNhanGayMeData } from "../../tra-ket-qua-pttt/fakeData";


export const DanhSachDichVuContext = createContext(()=> {})

const BangDanhSachTiepNhanGayMe: FC<BangDanhSachTiepNhanGayMeProps> = () => {
  const [itemList, setItemList] = useState<DanhSachTiepNhanGayMeModel[]>();
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
    <DanhSachDichVuContext.Provider value={handleSearchByPage}>
      <div className="profile-title bg-light-dark">
        <span className="fs-4 fw-bold spaces py-8 px-10">
          Danh sách dịch vụ Phẫu thuật thủ thuật
        </span>
      </div>

      <TableCustom<DanhSachTiepNhanGayMeModel>
        isReceptionList={true}
        compact={true}
        minHeight={310}
        // data={itemList}
        data={danhSachTiepNhanGayMeData}
        columns={DanhSachTiepNhanGayMeColumn}
        handleSearchByPage={handleSearchByPage}
        handleChangeValueInput={handleChangeValueInput}
      />
    </DanhSachDichVuContext.Provider>
  );
};
export { BangDanhSachTiepNhanGayMe };
