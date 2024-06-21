import React, { FC, useContext, useEffect, useState } from "react";
import { AppContext } from "../appContext/AppContext";
import { Tab, Tabs } from "react-bootstrap";
import { tab } from "../appContext/AppContextModel";
import { localStorageItem } from "../utils/LocalStorage";
import { PhanHeTiepNhanContext } from "../phan-he-tiep-nhan-thanh-toan/PhanHeTiepNhan";

type TabMenuProps = {
    danhsachTabs: tab[];
    keyDanhSachTabs?: string;
}

export const TabMenu: FC<TabMenuProps> = (props) => {
    const { danhsachTabs, keyDanhSachTabs} = props;
    let data = localStorageItem.get(keyDanhSachTabs) || [];
    const [activeTab, setActiveTab] = useState<string>("0");
    const [tabs, setTabs] = useState<tab[]>([]);

    useEffect(() => {
        setTabs(danhsachTabs);
    }, [danhsachTabs])

    const handleTabSelect: (eventKey: string | null) => void = (eventKey) => {
        if (eventKey) {
            setActiveTab(eventKey);
        }
    };

    return (
      <Tabs
        className="tabs nav nav-tabs customs-tabs"
        activeKey={activeTab}
        onSelect={handleTabSelect}
      >
        {tabs.map((item, index) => {
          return (
            <Tab
              className="tab"
              eventKey={index}
              key={item.eventKey}
              title={
                <div className="label">
                  <span>{item?.title}</span>
                </div>
              }
            >
              {item.component}
            </Tab>
          );
        })}
      </Tabs>
    );
}

export default TabMenu;
