import CustomTabMenu from "../component/CustomTabMenu";
import { KEY_DS_TAB_XET_NGHIEM } from "../utils/Constant";
import { DS_TAB_KHO_DUOC } from "./consts/PhanHeKhoDuocConst";
import "./PhanHeKhoDuoc.scss"

const PhanHeKhoDuoc = () => {
  return (
    <div className="phanHeKhoDuoc">
      <CustomTabMenu
        danhsachTabs={DS_TAB_KHO_DUOC}
        keyDanhSachTabs={KEY_DS_TAB_XET_NGHIEM}
      />
    </div>
  );
};

export default  PhanHeKhoDuoc ;
