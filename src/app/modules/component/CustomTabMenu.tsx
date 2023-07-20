import React, { FC, useContext, useEffect, useState } from "react";
import { AppContext } from "../appContext/AppContext";
import { Tab, Tabs } from "react-bootstrap";
import { tab } from "../appContext/AppContextModel";
import { localStorageItem } from "../utils/LocalStorage";

type TabMenuProps = {
    danhsachTabs: tab[];
    keyDanhSachTabs: string;
    setIsDataTab: (value: boolean) => void;
    getCurrentTab?: (value: string) => void;
}

export const CustomTabMenu: FC<TabMenuProps> = (props) => {
    const { danhsachTabs, keyDanhSachTabs, setIsDataTab, getCurrentTab, } = props;
    let data = localStorageItem.get(keyDanhSachTabs) || [];
    const { eventKey, setEventKey } = useContext(AppContext);

    const [activeTab, setActiveTab] = useState<string>(data[0] || "0");
    const [activeTabNow, setActiveTabNow] = useState<string>(data[0] || "0");
    const [tabs, setTabs] = useState<tab[]>([]);

    useEffect(() => {
        setEventKey('')
        let data = localStorageItem.get(keyDanhSachTabs) || [];
        if (!(data.length > 0)) {
            data.push("0");
            localStorageItem.set(keyDanhSachTabs, data);
        }
    }, []);

    useEffect(() => {
        if (tabs.length > 0 && !eventKey) {
            handleActive(activeTabNow)
        }
    }, [tabs.length])

    useEffect(() => {
        menuTab();
    }, [eventKey])


    const menuTab = () => {
        let data = localStorageItem.get(keyDanhSachTabs) || [];
        let danhSachTab: Array<tab> = [];

        if (data.length > 0) {
            setIsDataTab(true);
            data.forEach((id: string) => {
                let tab = danhsachTabs.find(tab => tab?.eventKey === id) as tab
                danhSachTab.push(tab);
                danhSachTab.sort((a, b) => a?.eventKey > b?.eventKey ? 1 : -1);
            });
        }
        setTabs(danhSachTab);

        if (eventKey) {
            handleActive(eventKey)
        }
    }
    const saveActive = (eventKey: string) => {
        let data = localStorageItem.get(keyDanhSachTabs) || [];
        const index = data.indexOf(eventKey);
        if (index !== -1) {
            data.splice(index, 1);
            data.unshift(eventKey);
            localStorageItem.set(keyDanhSachTabs, data);
        }
    };

    const handleActive = (eventKey: string) => {
        setActiveTab(eventKey);
        saveActive(eventKey);
        getCurrentTab?.(eventKey);
    }

    const handleTabSelect: (eventKey: string | null) => void = (eventKey) => {
        if (eventKey) {
            handleActive(eventKey)
        }
    };

    const handleTabDelete = (eventKey: string) => {
        let data = localStorageItem.get(keyDanhSachTabs) || [];
        const index = tabs.findIndex((tab) => tab.eventKey === eventKey);
        const updatedTabs = tabs.filter((tab) => tab.eventKey !== eventKey);
        const updateIdTabs = data.filter((id: string) => id !== eventKey);

        if (updatedTabs.length > 0) {
            setActiveTabNow(activeTab !== eventKey ? activeTab : (index > 0 ? tabs[index - 1].eventKey : tabs[index + 1].eventKey))
        } else {
            setIsDataTab(false)
        }

        setEventKey("");
        setTabs(updatedTabs);
        localStorageItem.set(keyDanhSachTabs, updateIdTabs);
    };

    return (
        <Tabs className="customs-tabs" activeKey={activeTab} onSelect={handleTabSelect}>
            {tabs.map((item, index) => {
                return (
                    <Tab className="tab"
                        eventKey={item?.eventKey}
                        title={
                            <div className="lable">
                                <span>{item?.title}</span>
                                <i className="fa-solid fa-xmark" onClick={() => handleTabDelete(item?.eventKey)}></i>
                            </div>
                        }
                    >
                        {item.component}
                    </Tab>
                )
            })}
        </Tabs>
    )
}

export default CustomTabMenu;
