import React, { useContext, useEffect, useState } from "react";
import "./phan-he-vien-phi-bao-hiem.scss";
import CustomTabMenu from "../component/CustomTabMenu";
import { danhSachMenuThanhToan, danhsachTabThanhToan } from "./const/constants";
import { KEY_DS_TAB_THANH_TOAN } from "../utils/Constant";
import { AppContext } from "../appContext/AppContext";

const PhanHeVienPhiBaoHiem = () => {
  const {setDSMenu } = useContext(AppContext);
  const [isDataTab, setIsDataTab] = useState(false);

  useEffect(() => {
    setDSMenu(danhSachMenuThanhToan);
    return () => {
        setDSMenu([]);
    };
}, []);
  return (
    <div className="bg-white rounded">
      <CustomTabMenu
        danhsachTabs={danhsachTabThanhToan}
        keyDanhSachTabs={KEY_DS_TAB_THANH_TOAN}
        setIsDataTab={setIsDataTab}
      />
    </div>
  );
};

export { PhanHeVienPhiBaoHiem };
