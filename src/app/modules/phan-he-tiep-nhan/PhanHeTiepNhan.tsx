import React, { createContext, FC, useContext, useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { AppContext } from "../appContext/AppContext";
import './PhanHeTiepNhan.scss'
import { Button } from "react-bootstrap";
import { KEY_DS_TAB_TIEP_NHAN } from "../utils/Constant";
import { danhSachMenu, danhSachTabTiepNhan } from "./const/PhanHeTiepNhan";
import CustomTabMenu from "../component/CustomTabMenu";


interface PhanHeTiepNhanContextProps {
    currentTab: string;
}

const initialContext = {
    currentTab: "0",
}

export const PhanHeTiepNhanContext = createContext<PhanHeTiepNhanContextProps>(initialContext)

export const PhanHeTiepNhan: FC = () => {
    const { setBreakCrumb, setDSMenu } = useContext(AppContext);
    let [isDataTab, setIsDataTab] = useState(false);
    const [currentTab, setCurrentTab] = useState<string>("0");

    const intl = useIntl();
    let breakCrumb = [
        { text: intl.formatMessage({ id: 'MENU.RECEIVE' }), url: '' },
        { text: intl.formatMessage({ id: 'MENU.RECEIVE' }), url: '/receive' },
    ];

    useEffect(() => {
        setBreakCrumb(breakCrumb);
        setDSMenu(danhSachMenu);
        return () => {
            setDSMenu([]);
            setBreakCrumb([]);
        };
    }, []);

    const getCurrentTab = (tab: string) => {
        setCurrentTab(tab);
    }

    return (
      <PhanHeTiepNhanContext.Provider
        value={{
            currentTab: currentTab
        }}
      >
        <div className="reception-list">
            <div className="reception__header">
                <CustomTabMenu
                    danhsachTabs={danhSachTabTiepNhan}
                    keyDanhSachTabs={KEY_DS_TAB_TIEP_NHAN}
                    setIsDataTab={setIsDataTab}
                    getCurrentTab={getCurrentTab}
                />
                {
                    isDataTab &&
                    <div className="call-patient">
                        <p className="m-0">Cổng</p>
                        <p className="spaces m-0 p-4">1</p>
                        <input className="spaces mx-5 input form-control W-40" />
                        <input className="spaces mx-5 input form-control W-40" />
                        <Button className="spaces mx-5 btn call">Gọi</Button>
                        <Button className="spaces mx-5 btn">Gọi lại</Button>
                        <Button className="spaces mx-5 btn"> KT</Button>
                    </div>
                }
            </div>
        </div>
      </PhanHeTiepNhanContext.Provider>
    )
}

export default PhanHeTiepNhan;
