import { useContext, useEffect, useState } from "react";
import CustomTabMenu from "../component/CustomTabMenu";
import { KEY_DS_TAB_XET_NGHIEM } from "../utils/Constant";
import { danhSachMenuXetNghiem, danhsachTabXetNghiem } from "./const/constants";
import { AppContext } from "../appContext/AppContext";
import "./PhanHeXetNghiem.scss";

const PhanHeXetNghiem = () => {
  const { setDSMenu } = useContext(AppContext);
  const [isDataTab, setIsDataTab] = useState(false);

  useEffect(() => {
    setDSMenu(danhSachMenuXetNghiem);
    return () => {
      setDSMenu([]);
    };
  }, []);
  return (
    <div className="reception-list">
      <div className="reception__header spaces">
        <CustomTabMenu
          danhsachTabs={danhsachTabXetNghiem}
          keyDanhSachTabs={KEY_DS_TAB_XET_NGHIEM}
          setIsDataTab={setIsDataTab}
        />
      </div>
    </div>
  );
};

export { PhanHeXetNghiem };
