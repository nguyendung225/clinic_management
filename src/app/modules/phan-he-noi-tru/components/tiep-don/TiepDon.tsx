import { FC, useContext, useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { AppContext } from "../../../appContext/AppContext";
import CustomTabMenu from "../../../component/CustomTabMenu";
import { DS_NOI_TRU_TIEP_DON, } from "../../../utils/Constant";
import { danhSachMenu, danhSachTabTiepDon } from "../../const/PhanHeNoitruConst";

export const TiepDon: FC = () => {
    const { setBreakCrumb, setDSMenu } = useContext(AppContext);
    let [isDataTab, setIsDataTab] = useState(false);
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

    return (
        <div className="reception-list">
            <div className="reception__header">
                <CustomTabMenu
                    danhsachTabs={danhSachTabTiepDon}
                    keyDanhSachTabs={DS_NOI_TRU_TIEP_DON}
                    setIsDataTab={setIsDataTab}
                />
               
            </div>
        </div>
    )
}

export default TiepDon;
