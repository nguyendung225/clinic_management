import  { useState } from "react";
import { DS_SO_DO_KHO } from "../../../consts/QuanLyKhoConst";
import { Tab, Tabs } from "react-bootstrap";
import { iTabSoDo } from "../../../models/PhanHeKhoDuocModels";

export default function SoDo() {
  const [activeTab, setActiveTab] = useState<string>("0");
  const handleTabSelect: (eventKey: string | null) => void = (eventKey) => {
    if (eventKey) {
      setActiveTab(eventKey)
    }
  };

  return (
    <div className="soDo">
      <Tabs className="customs-tabs" activeKey={activeTab} onSelect={handleTabSelect}>
        {DS_SO_DO_KHO.map((item: iTabSoDo, index: number) => {
          let Component = item?.component;
          return (
            <Tab className="tab"
              eventKey={item?.eventKey}
              key={item?.eventKey}
              title={item?.title}
            >
              <Component data={{}} />
            </Tab>
          )
        })}
      </Tabs>
    </div>
  );
}
