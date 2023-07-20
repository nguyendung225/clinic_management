import { FC, createContext, useEffect, useState } from "react";
import React from "react";
import { BangDanhSachDichVuProps, danhSachDichVuPTTT } from "../../../model/DanhSachDichVuPTTTModel";
import { TableCustom } from "../../../../component/table-custom/TableCustom";
import { danhSachDichVuPtttData } from "../fakeData";
import { DanhSachDichVu } from "./BangDanhSachDichVuPTTTColumn";


export const DanhSachDichVuContext = createContext(()=> {})

const BangDanhSachDichVu: FC<BangDanhSachDichVuProps> = () => {
  const [itemList, setItemList] = useState<danhSachDichVuPTTT[]>();
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

      <TableCustom<danhSachDichVuPTTT>
        isReceptionList={true}
        compact={true}
        // data={itemList}
        data={danhSachDichVuPtttData}
        columns={DanhSachDichVu}
        handleSearchByPage={handleSearchByPage}
        handleChangeValueInput={handleChangeValueInput}
      />
    </DanhSachDichVuContext.Provider>
  );
};
export { BangDanhSachDichVu };
