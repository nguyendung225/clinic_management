import React, { FC, useContext, useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { AppContext } from "../appContext/AppContext";
import '../phan-he-tiep-nhan/PhanHeTiepNhan.scss';
import { danhSachMenu, danhSachTabTiepDon } from "./const/PhanHeTiepDonConst";
import CustomTabMenu from "../component/CustomTabMenu";
import { KEY_DS_TAB_TIEP_DON } from "../utils/Constant";

export const PhanHeTiepDon: FC = () => {
    const { setBreakCrumb, setDSMenu } = useContext(AppContext);
    const intl = useIntl();
    let [isDataTab, setIsDataTab] = useState(false);

    let breakCrumb = [
        { text: intl.formatMessage({ id: 'MENU.RECEIVE' }), url: '' },
        { text: intl.formatMessage({ id: 'MENU.RECEIVE' }), url: '/receive' },
    ];

    useEffect(() => {
        setBreakCrumb(breakCrumb);
        setDSMenu(danhSachMenu);
        return () => {
            setBreakCrumb([]);
        };
    }, []);

    return (
        <div className="reception-list">
            <div className="reception__header">
                <CustomTabMenu
                    danhsachTabs={danhSachTabTiepDon}
                    keyDanhSachTabs={KEY_DS_TAB_TIEP_DON}
                    setIsDataTab={setIsDataTab}
                />
                {/* {
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
                } */}
            </div>
        </div>
    )
}

export default PhanHeTiepDon;
