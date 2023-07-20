import React, { FC, useContext, useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { AppContext } from "../appContext/AppContext";
import { Button } from "react-bootstrap";
import { KEY_DS_TAB_TIEP_NHAN } from "../utils/Constant";
import CustomTabMenu from "../component/CustomTabMenu";
import { danhSachMenu, danhSachTabTiepDon } from "./const/PhanHeNoitruConst";

export const PhanHeNoiTru: FC = () => {
    const { setDSMenu } = useContext(AppContext);
    let [isDataTab, setIsDataTab] = useState(false);

    useEffect(() => {
        setDSMenu(danhSachMenu);
        return () => {
            setDSMenu([]);
        };
    }, []);

    return (
        <div className="reception-list">
            <div className="reception__header">
                <CustomTabMenu
                    danhsachTabs={danhSachTabTiepDon}
                    keyDanhSachTabs={KEY_DS_TAB_TIEP_NHAN}
                    setIsDataTab={setIsDataTab}
                />
                {
                    isDataTab &&
                    <div className="call-patient">
                        <p className="m-0 ">Cổng</p>
                        <p className="spaces m-0 p-4">1</p>
                        <input className="spaces mx-5 input form-control " />
                        <input className="spaces mx-5 input form-control" />
                        <Button className="spaces mx-5 btn call">Gọi</Button>
                        <Button className="spaces mx-5 btn">Gọi lại</Button>
                        <Button className="spaces mx-5 btn"> KT</Button>
                    </div>
                }
            </div>
        </div>
    )
}

export default PhanHeNoiTru;
