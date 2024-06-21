import React, { useState } from "react";
import VerticalTabs from "../../../../component/tab-menu/VerticalTabs";
import { DS_TAB_QUAN_LY_KHO } from "../../../consts/QuanLyKhoConst";

export default function QuanLykho() {
    const [activeTab, setActiveTab] = useState(DS_TAB_QUAN_LY_KHO[0].eventKey);

    const handleTabChange = (eventKey: string | null) => {
        if (eventKey) {
            setActiveTab(eventKey)
        }
    };
    
    return (
        <VerticalTabs
            danhsachTabs={DS_TAB_QUAN_LY_KHO}
            activeTab={activeTab}
            onTabChange={handleTabChange}
        />
    )
}