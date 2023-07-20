import { useContext, useEffect, useState } from "react";
import CustomTabMenu from "../component/CustomTabMenu";
import { KEY_DS_TAB_CDHA_TDCN } from "../utils/Constant";
import { danhSachMenuCDHAVaTDCN, danhsachTabCDHAVaTDCN } from "./const/constants";
import { AppContext } from "../appContext/AppContext";
import { Button } from "react-bootstrap";

const PhanHeCDHAVaTDCN = () => {
  const { setDSMenu } = useContext(AppContext);
  const [isDataTab, setIsDataTab] = useState(false);

  useEffect(() => {
    setDSMenu(danhSachMenuCDHAVaTDCN);
    return () => {
      setDSMenu([]);
    };
  }, []);
  return (
    <div className="reception-list">
      <div className="reception__header">
        <CustomTabMenu
          danhsachTabs={danhsachTabCDHAVaTDCN}
          keyDanhSachTabs={KEY_DS_TAB_CDHA_TDCN}
          setIsDataTab={setIsDataTab}
        />
        {
          isDataTab &&
          <div className="call-patient">
            <Button className="spaces mx-5 btn call fs-6">Gọi</Button>
            <Button className="spaces mx-5 btn fs-6">Gọi lại</Button>
          </div>
        }
      </div>
    </div>
  );
}

export {PhanHeCDHAVaTDCN}