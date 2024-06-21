import { FC, createContext, useEffect, useState } from "react";
import React from "react";
import { DanhSachTiepNhanGayMeColumn } from "./DanhSachTiepNhanGayMeColumn";
import { BangDanhSachTiepNhanGayMeProps, DanhSachTiepNhanGayMeModel } from "../../../model/DanhSachTiepNhanGayMeModel";
import { danhSachTiepNhanGayMeData } from "../../tra-ket-qua-pttt/fakeData";
import { TableCustom } from "../../../../component/table/table-custom/TableCustom";


export const DanhSachDichVuContext = createContext(()=> {})

const BangDanhSachTiepNhanGayMe: FC<BangDanhSachTiepNhanGayMeProps> = (props) => {
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
        minHeight={310}
        maxHeight={450}
        data={danhSachTiepNhanGayMeData}
        columns={DanhSachTiepNhanGayMeColumn}
        handleSearchByPage={handleSearchByPage}
        handleChangeValueInput={handleChangeValueInput}
        selectionMode="single"
        getSelectedRowsData={(rowData: any) => props.handleClickRow(rowData)}
      />
    </DanhSachDichVuContext.Provider>
  );
};
export { BangDanhSachTiepNhanGayMe };
