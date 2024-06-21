import { FC, useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { AppContext } from "../appContext/AppContext";
import CustomTabMenu from "../component/CustomTabMenu";
import { KEY_DS_TAB_TIEP_NHAN } from "../utils/Constant";
import { danhSachMenu, danhSachTabTiepDon } from "./const/PhanHeNoitruConst";
import PhanHeNoiTruProvider from "./PhanHeNoiTruContext";

export const PhanHeNoiTru: FC = () => {
    const { setDSMenu } = useContext(AppContext);
    let [isDataTab, setIsDataTab] = useState(false);

    useEffect(() => {
        setDSMenu(danhSachMenu);
        return () => {
            setDSMenu([]);
        };
    }, [setDSMenu]);

    return (
        <PhanHeNoiTruProvider>
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
                            <Button className="spaces mx-5 btn-navy">Gọi</Button>
                            <Button className="spaces mx-5 btn-navy">Gọi lại</Button>
                            <Button className="spaces mx-5 btn-navy"> KT</Button>
                        </div>
                    }
                </div>
            </div>
        </PhanHeNoiTruProvider>
    )
}

export default PhanHeNoiTru;
