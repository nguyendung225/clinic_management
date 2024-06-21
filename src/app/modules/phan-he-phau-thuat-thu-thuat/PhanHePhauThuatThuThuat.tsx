import React, { FC, useContext, useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { AppContext } from "../appContext/AppContext";
import { KEY_DS_TAB_PHAU_THUAT_THU_THUAT } from "../utils/Constant";
import CustomTabMenu from "../component/CustomTabMenu";
import { danhSachMenu, danhSachTabPTTT } from "./const/PhanHePhauThuatThuThuatconst";
import { Button } from "react-bootstrap";
import PhieuKhamTienMeDialog from "./component/phieu-kham-tien-me/PhieuKhamTienMe";
import { PhieuPhauThuatThuThuat } from "./component/phieu-phau-thuat-thu-thuat/PhieuPhauThuatThuThuat";

export const PhanHePhauThuatThuThuat: FC = () => {
  const { setBreakCrumb, setDSMenu } = useContext(AppContext);
  let [isDataTab, setIsDataTab] = useState(false);
  const [shouldOpenPhieuKhamTienMeDialog, setShouldOpenPhieuKhamTienMeDialog] = useState<boolean>(false);
  const [openDialogCapNhatPTTT, setOpenDialogCapNhatPTTT] = useState<boolean>(false);

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

  // const handleOpenPhieuKhamTienMeDialog = () => {
  //   setShouldOpenPhieuKhamTienMeDialog(true);
  // }

  const handleCloseDialog = () => {
    setShouldOpenPhieuKhamTienMeDialog(false);
    setOpenDialogCapNhatPTTT(false);
  }

  const handleOpenDialogCapNhatPTTT = () => {
    setOpenDialogCapNhatPTTT(true)
  }

  return (
    <div className="reception-list">
      <div className="reception__header">
        <CustomTabMenu
          danhsachTabs={danhSachTabPTTT}
          keyDanhSachTabs={KEY_DS_TAB_PHAU_THUAT_THU_THUAT}
          setIsDataTab={setIsDataTab}
        />

        {/* {isDataTab &&
          <div className="flex flex-center py-4">
            {!isDSKhamTienMe && <>
              <Button
                className="btn-navy mr-5 spaces px-16 py-10"
                onClick={handleOpenDialogCapNhatPTTT}
              >
                Cập nhật PTTT
              </Button>
              <Button
                className="btn-navy mr-5 spaces px-16 py-10"
                onClick={handleOpenPhieuKhamTienMeDialog}
              >
                Cập nhật KTM
              </Button>
            </>}
            {isDSKhamTienMe && <Button className="btn-navy mr-5 spaces px-16 py-10">Khám</Button>}
            <Button className="btn-navy mr-5 spaces px-16 py-10">In Phiếu</Button>
            {!isDSKhamTienMe && <>
              <Button className="btn-navy mr-5 spaces px-16 py-10">Thuốc, VT đi kèm</Button>
              <Button className="btn-navy mr-5 spaces px-16 py-10">Phụ thu</Button>
              <Button className="btn-navy mr-5 spaces px-16 py-10">Khác</Button>
            </>}
          </div>
        } */}

        {/* {shouldOpenPhieuKhamTienMeDialog && <PhieuKhamTienMeDialog
          open={shouldOpenPhieuKhamTienMeDialog}
          handleClose={handleCloseDialog}
        />} */}

      </div>
      {/* {openDialogCapNhatPTTT && <PhieuPhauThuatThuThuat 
        open={openDialogCapNhatPTTT} 
        onClose={handleCloseDialog}
      />} */}
    </div>
  )
}

export default PhanHePhauThuatThuThuat;
