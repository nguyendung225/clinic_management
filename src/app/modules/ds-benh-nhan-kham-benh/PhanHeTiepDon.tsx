import { FC, useContext, useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { AppContext } from "../appContext/AppContext";
import CustomTabMenu from "../component/CustomTabMenu";
import '../phan-he-tiep-nhan/PhanHeTiepNhan.scss';
import { KEY_DS_TAB_TIEP_DON } from "../utils/Constant";
import { PhanHeTiepDonContext } from "./PhanHeTiepDonContext";
import { danhSachMenu, danhSachTabTiepDon } from "./const/PhanHeTiepDonConst";
import { IBenhNhan } from "./models/DSBenhNhanKhamBenhModels";
import { encountersApi } from "./service/KhamBenhService";

export const PhanHeTiepDon: FC = () => {
    const { setBreakCrumb, setDSMenu } = useContext(AppContext);
    const intl = useIntl();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let [isDataTab, setIsDataTab] = useState(false);
    const [benhNhanInfo, setBenhNhanInfo] = useState<IBenhNhan>();
    const [benhNhanList, setBenhNhanList] = useState<IBenhNhan[]>([]);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [totalElements, setTotalElements] = useState<number>(1);

    useEffect(() => {
        let breakCrumb = [
            { text: intl.formatMessage({ id: 'MENU.RECEIVE' }), url: '' },
            { text: intl.formatMessage({ id: 'MENU.RECEIVE' }), url: '/receive' },
        ];
        setBreakCrumb(breakCrumb);
        setDSMenu(danhSachMenu);
        return () => {
            setBreakCrumb([]);
        };
    }, [setBreakCrumb, setDSMenu, intl]);

    useEffect(() => {
        const params = {
            pageSize: 10,
            pageIndex: 1
        }
        encountersApi.searchPatient(params).then(data => {
            setBenhNhanList(data.data.data.content || []);
            setTotalPages(data.data.data.totalPages || 1);
            setTotalElements(data.data.data.totalElements || 1);
        });
    },[setBenhNhanList]);

    return (
        <PhanHeTiepDonContext.Provider value={{setBenhNhanInfo, benhNhanInfo, benhNhanList, setBenhNhanList, totalPages, setTotalPages, totalElements, setTotalElements}}>
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
        </PhanHeTiepDonContext.Provider>
    )
}

export default PhanHeTiepDon;
