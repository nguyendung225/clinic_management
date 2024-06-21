import {useContext, useEffect, useState} from "react"
import {AppContext} from "../../appContext/AppContext"
import CustomTabMenu from "../../component/CustomTabMenu"
import {
  DS_MENU,
  DS_TAB_MENU_DV_GIA,
} from "../constants/TabTaiKhoanConst"
import {DM_DICH_VU_GIA} from "../../utils/Constant"

type Props = {}

const DanhMucDichVuGia = (props: Props) => {
  let [isDataTab, setIsDataTab] = useState(false)
  const {setBreakCrumb, setDSMenu} = useContext(AppContext)
  useEffect(() => {
    setDSMenu(DS_MENU)
  }, [])
  return (
    <div className="reception-list">
      <div className="reception__header">
        <CustomTabMenu
          danhsachTabs={DS_TAB_MENU_DV_GIA}
          keyDanhSachTabs={DM_DICH_VU_GIA}
          setIsDataTab={setIsDataTab}
        />
      </div>
    </div>
  )
}

export default DanhMucDichVuGia
