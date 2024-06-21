import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../appContext/AppContext";
import { danhSachMenuThanhToan } from "../constants/constants";
import ContextThanhToanProvider from "../components/tab-thanh-toan/ContextThanhToan";
import { NgoaiTru } from "../components/tab-thanh-toan/ThanhToanNgoaiTru";
import "./ThanhToan.scss";

const PhanHeVienPhiBaoHiem = () => {
  const { setDSMenu } = useContext(AppContext);
  const [isDataTab, setIsDataTab] = useState(false);

  useEffect(() => {
    setDSMenu(danhSachMenuThanhToan);
    return () => {
      setDSMenu([]);
    };
  }, []);
  return (
    <div className="bg-white rounded">
      <ContextThanhToanProvider>  
        <NgoaiTru />
        {/* <CustomTabMenu
        danhsachTabs={danhsachTabThanhToan}
        keyDanhSachTabs={KEY_DS_TAB_THANH_TOAN}
        setIsDataTab={setIsDataTab}
      /> */}
      </ContextThanhToanProvider>
    </div>
  );
};

export { PhanHeVienPhiBaoHiem };

