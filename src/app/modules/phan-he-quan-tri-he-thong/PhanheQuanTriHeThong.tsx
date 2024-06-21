import { FC } from "react";
import TabMenu from "../component/TabMenu";
import './PhanHeQTHT.scss';
import { DS_Tab_MENU } from "./constants/PhanHeQuanTriHeThongConstant";
export const PhanHeQuanTriHeThong: FC = () => {
    return (
      <div className="reception-list">
        <div className="reception__header he-thong-tab">
          <TabMenu danhsachTabs={DS_Tab_MENU} />
        </div>
      </div>
    );
}

export default PhanHeQuanTriHeThong;
