import React, { useState } from "react";
import VerticalTabs from "../../component/tab-menu/VerticalTabs";
import { DS_TAB_DANH_MUC } from "../consts/DanhMucConst";
import CollapseTabs from "../../component/tab-menu/CollapseTabs";
import { DS_COLLAPSE_KHO_LE, DS_KHO_THUOC_KHO_LE } from "../consts/KhoLeConst";

const KhoLe = () => {
    const [activeTab, setActiveTab] = useState<string | null>(DS_TAB_DANH_MUC[0].eventKey);

    return (
        <>
            <CollapseTabs
                collapseTabs={DS_COLLAPSE_KHO_LE}
                activeTab={activeTab}
                onTabChange={setActiveTab}
                dsKhoThuoc={DS_KHO_THUOC_KHO_LE}
            />
        </>
    )
}

export default KhoLe;