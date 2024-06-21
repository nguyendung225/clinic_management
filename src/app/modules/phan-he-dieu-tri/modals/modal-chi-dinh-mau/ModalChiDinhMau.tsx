import { Button, Col, FormCheck, Row, Tab, Tabs } from "react-bootstrap"
import CustomMenu from "../../../component/menu/Menu"
import LabelRequired from "../../../component/LabelRequired"
import TextValidator from "../../../component/TextValidator"
import Autocomplete from "../../../component/AutocompleteObject"
import { useState } from "react"
import { danhSachTabChiDinhMau } from "../../constants/ConstantPhanHeDieuTri"

type Props = {}

const ModalChiDinhMau = (props: Props) => {
  const [activeKey, setActiveKey] = useState<string>("0");

  const handleTabSelect: (eventKey: string | null) => void = (eventKey) => {
    eventKey && setActiveKey(eventKey);
  };
  return (
    <div>
      <Row className='border-bottom py-1'>
        <Col xs={3} className='d-flex align-items-center gap-2'>
          <CustomMenu
            className='ms-1'
            handleSelectOption={() => { }}
            listMenuItem={[]}
            menuLabel={
              <Button className="btn-outline spaces h-29 d-flex justify-content-center min-w-40px">
                <i className="bi bi-list spaces scale-15 m-0 p-0"></i>
              </Button>
            }
          />

          <CustomMenu
            className='spaces min-w-186'
            handleSelectOption={() => { }}
            listMenuItem={[]}
            menuLabel={
              <Button className='btn-fill'>Phiếu chỉ định máu mẫu<i className="fa-solid fa-caret-down ms-2 me-0"></i></Button>
            }
          />

          <Button className='btn-fill spaces min-w-135'>Chỉ định máu khác</Button>
        </Col>
      </Row>

      <Row className="p-1">
        <Col xl={3} className="d-flex">
          <LabelRequired label="Ngày y lệnh" className="min-w-75px" />
          <TextValidator type="datetime-local" />
        </Col>

        <Col xl={5} className="d-flex">
          <LabelRequired label="Chẩn đoán" className="min-w-70px" />
          <Autocomplete options={[]} />
        </Col>

        <Col xl={4}>
          <div className="d-flex">
            <LabelRequired label="Phiếu điều trị" className="min-w-85px" />
            <Autocomplete options={[]} />
            <a href="/" onClick={(e) => { e.preventDefault() }} className="min-w-125px ms-2"><u>Thêm phiếu điều trị</u></a>
          </div>
        </Col>
      </Row>

      <div>
        <Tabs className="customs-tabs" activeKey={activeKey} onSelect={handleTabSelect}>
          {danhSachTabChiDinhMau?.map((item, index) => {
            return <Tab
              className="spaces h-calc-vh-246"
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
      </div>

      <div className="d-flex justify-content-between align-items-center p-2 border-top">
        <div className="d-flex mb-4px ">
          <div>
            <div className="spaces d-flex width-50 align-items-center">
              <LabelRequired label="Tổng chi phí" className="ms-0 min-w-125px" />
              <span className="text-danger me-3 fw-500">0</span>
            </div>
            <div className="spaces d-flex width-50 align-items-center">
              <LabelRequired label="Tạm ứng" className="ms-0 min-w-125px" />
              <span className="text-pri me-3 fw-500">0</span>
            </div>
          </div>
          <div>
            <div className="spaces d-flex width-50 align-items-center">
              <LabelRequired label="BHYT" className="ms-0 min-w-125px" />
              <span className="text-pri me-3 fw-500">0</span>
            </div>
            <div className="spaces d-flex width-50 align-items-center">
              <LabelRequired label="Đã thu" className="ms-0 min-w-125px" />
              <span className="text-pri me-3 fw-500">0</span>
            </div>
          </div>
          <div>
            <div className="spaces d-flex width-50 align-items-center">
              <LabelRequired label="Nguồn khác" className="ms-0 min-w-125px" />
              <span className="text-pri me-3 fw-500">0</span>
            </div>
            <div className="spaces d-flex width-50 align-items-center">
              <LabelRequired label="Miễn giảm" className="ms-0 min-w-125px" />
              <span className="text-pri me-3 fw-500">0</span>
            </div>
          </div>
          <div>
            <div className="spaces d-flex width-50 align-items-center">
              <LabelRequired label="Bệnh nhân" className="ms-0 min-w-125px" />
              <span className="text-pri me-3 fw-500">0</span>
            </div>
            <div className="spaces d-flex width-50 align-items-center">
              <LabelRequired label="Còn nợ" className="ms-0 min-w-125px" />
              <span className="text-warning me-3 fw-500">0</span>
            </div>
          </div>
        </div>

        <div className="d-flex gap-2">
          <FormCheck type="checkbox" label="In phiếu dự trù" />
          <Button className="btn-fill">Lưu</Button>
          <Button className="btn-fill">Lưu + đóng</Button>
        </div>
      </div>
    </div>
  )
}

export default ModalChiDinhMau