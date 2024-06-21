import { useState } from "react";
import { Button, Tab, Tabs } from "react-bootstrap";
import { TAB_ACTIVE, danhSachTabHoSoBenhAn } from "../../../constants/ConstantPhanHeDieuTri";
import CustomMenu from "../../../../component/menu/Menu";
import ModalPhieuIn from "../../../../component/ModalPhieuIn";
import PhieuInBenhAn from "../../../phieu-in/PhieuInBenhAn";
import { stylePrint } from "../../../../component/phieu-in/constant";

type Props = {}

const HoSoBenhAn = (props: Props) => {
  const [activeKey, setActiveKey] = useState<string>("0");
  const [openPhieuIn, setOpenPhieuIn] = useState(false);

  const handleTabSelect: (eventKey: string | null) => void = (eventKey) => {
    eventKey && setActiveKey(eventKey);
  };

  const handleOpenPhieuIn = () => {
    setOpenPhieuIn(true);
  }
  return (
    <div>
      <Tabs className="customs-tabs" activeKey={activeKey} onSelect={handleTabSelect}>
        {danhSachTabHoSoBenhAn?.map((item, index) => {
          return <Tab
            className="spaces h-calc-vh-227"
            eventKey={index}
            title={
              <div className="label">
                <span>{item?.title}</span>
              </div>
            }
          >
            {item?.component}
          </Tab>
        })}
      </Tabs>

      <div className="d-flex justify-content-end gap-2 p-2 border-top">
        <Button className="btn-fill">Bệnh án gần nhất</Button>
        {[TAB_ACTIVE.BENH_AN, TAB_ACTIVE.TONG_KET_BENH_AN].includes(activeKey) && <CustomMenu
          className="spaces min-w-117"
          handleSelectOption={() => { }}
          listMenuItem={[]}
          menuLabel={
            <Button className='btn-fill'>Mẫu bệnh án<i className="fa-solid fa-caret-down ms-2 me-0"></i></Button>
          }
        />}
        <Button className="btn-fill">Lưu</Button>
        <Button className="btn-fill" onClick={handleOpenPhieuIn}>In bệnh án</Button>
      </div>

      <ModalPhieuIn
        show={openPhieuIn}
        size="lg"
        handleCloseDialog={() => setOpenPhieuIn(false)}
        stylePrint={stylePrint}
        title="Phiếu in bệnh án"
      >
        <PhieuInBenhAn />
      </ModalPhieuIn>
    </div>
  )
}

export default HoSoBenhAn