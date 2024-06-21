import React, { FC, useState } from "react";
import { Col, Row, Tab, Tabs } from "react-bootstrap";
import TabXetNghiem from "./TabXetNghiem";


const XetNghiem: FC = () => {
    const [activeTab, setActiveTab] = useState<string>("0");

    const handleTabSelect: (eventKey: string | null) => void = (eventKey) => {
        if (eventKey) {
            setActiveTab(eventKey);
        }
    };

    return (
        <div>
            <div >
                <Tabs className="customs-tabs tabXetNghiem" fill justify activeKey={activeTab} onSelect={handleTabSelect}>
                    <Tab eventKey={"0"} title="Xét nghiệm">
                        <TabXetNghiem />
                    </Tab>
                    <Tab eventKey={"1"} title="CĐHA & TDCN">
                        <TabXetNghiem />
                    </Tab>
                    <Tab eventKey={"2"} title="PTTT">
                        <TabXetNghiem />
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
};


export default XetNghiem;
