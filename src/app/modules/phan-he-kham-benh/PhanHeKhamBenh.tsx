import { FC, useContext, useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { AppContext } from "../appContext/AppContext";
import CustomTabMenu from "../component/CustomTabMenu";
import "../phan-he-tiep-nhan-thanh-toan/PhanHeTiepNhan.scss";
import { KEY_DS_TAB_TIEP_DON, SELECTION_MODE } from "../utils/Constant";
import { PhanHeTiepDonContext } from "./contexts/PhanHeTiepDonContext";
import { KEY_TAB_DS_TIEP_DON, danhSachMenu, danhSachTabTiepDon } from "./constants/phan-he-kham-benh/ConstantPhanHeKhamBenh";
import { IBenhNhan, iBangKhamBenh } from "./models/DSBenhNhanKhamBenhModels";
import { Row } from "react-bootstrap";
import "./PhanHeKhamBenh.scss";
import { KHAM_BO_PHAN } from "./constants/KhamBenh";
import DSBenhNhanKhamBenh from "./components/phan-he-kham-benh/DSBenhNhanKhamBenh";
import InputSearch from "../component/InputSearch";
import { ILichSuModel } from "../phan-he-xet-nghiem/models/DanhSachBenhNhanModels";
import { columnsLichSuKham } from "../phan-he-xet-nghiem/const/constants";
import { TableCustom } from "../component/table/table-custom/TableCustom";
interface Props {
  isLichSuKham?: boolean;
  childrenTab?: boolean;
}
export const PhanHeKhamBenh: FC<Props> = (props) => {
  const { isLichSuKham, childrenTab } = props;
  const { setBreakCrumb, setDSMenu, setCurrentTab, thongTinBenhNhan } = useContext(AppContext);
  const intl = useIntl();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let [isDataTab, setIsDataTab] = useState(false);
  const [benhNhanInfo, setBenhNhanInfo] = useState<IBenhNhan>();
  const [thongTinKhamBenh, setThongTinKhamBenh] = useState<any>({ khamBoPhan: { ...KHAM_BO_PHAN } });
  const [benhNhanList, setBenhNhanList] = useState<iBangKhamBenh[]>([]);
  const [listDisabledTab, setListDisabledTab] = useState<string[]>([]);

  useEffect(() => {
    let breakCrumb = [
      { text: intl.formatMessage({ id: "MENU.RECEIVE" }), url: "" },
      { text: intl.formatMessage({ id: "MENU.RECEIVE" }), url: "/receive" },
    ];
    setBreakCrumb(breakCrumb);
    setDSMenu(danhSachMenu);
    return () => {
      setBreakCrumb([]);
    };
  }, [setBreakCrumb, setDSMenu, intl]);

  useEffect(() => {
    if (benhNhanInfo?.caseId) {
      setListDisabledTab([]);
    } else {
      let newArr = [...listDisabledTab];
      // Object.entries(KEY_TAB_DS_TIEP_DON).forEach(([key, value]) => {
      //     if (key !== "PHIEU_KHAM_BENH") {
      //         newArr.push(value);
      //     }
      // })
      setListDisabledTab(newArr);
      setCurrentTab(KEY_TAB_DS_TIEP_DON.PHIEU_KHAM_BENH);
    }
  }, [benhNhanInfo?.caseId]);
  
  const updatePageData = async () => {};
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): any => {};
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {};
  const handleSelectRowData = (rowData: any[]) => {};
  return (
    <PhanHeTiepDonContext.Provider
      value={{
        setBenhNhanInfo,
        benhNhanInfo,
        benhNhanList,
        setBenhNhanList,
        thongTinKhamBenh,
        setThongTinKhamBenh,
      }}
    >
      <div className="reception-list bg-gray">
        <div className="reception__header spaces">
          <Row className="phanHeTiepDon bg-light h-100">
            <div className="pe-0 dsBenhNhan spaces width-27_4 h-calc-vh-35">
              {isLichSuKham ? (
                <div className="h-100 border bg-white">
                  <div className="my-2 mx-2">
                    <InputSearch
                      handleChange={handleChange}
                      handleSearch={updatePageData}
                      handleKeyDown={handleKeyDown}
                      placeholder="Tìm kiếm"
                      type="text"
                    />
                  </div>
                  <TableCustom<ILichSuModel>
                    verticalScroll
                    columns={columnsLichSuKham}
                    data={thongTinBenhNhan?.xetNghiem || []}
                    selectionMode={SELECTION_MODE.SINGLE_NO_RADIO_BUTTON}
                    getSelectedRowsData={handleSelectRowData}
                  />
                </div>
              ) : (
                <DSBenhNhanKhamBenh/>
              )}
            </div>
            <div className="h-calc-vh-35 pl-0 ml-pt-0_6 spaces border width-72 ">
              <div className="p-0">
                <CustomTabMenu
                  danhsachTabs={danhSachTabTiepDon}
                  keyDanhSachTabs={KEY_DS_TAB_TIEP_DON}
                  isCloseTab={false}
                  listDisabledTab={listDisabledTab}
                  childrenTab={childrenTab}
                />
              </div>
            </div>
          </Row>
        </div>
      </div>
    </PhanHeTiepDonContext.Provider>
  );
};

export default PhanHeKhamBenh;
