import { Button, Col, Row, Tab, Tabs } from "react-bootstrap"
import CustomMenu from "../../../component/menu/Menu"
import InfoPatientRight from "../../../phan-he-kham-benh/components/InfoPatientRight"
import LabelRequired from "../../../component/LabelRequired"
import TextValidator from "../../../component/TextValidator"
import Autocomplete from "../../../component/AutocompleteObject"
import { danhSachTabChiDinhThucPhamChucNang } from "../../constants/ConstantPhanHeDieuTri"
import { useState } from "react"

type Props = {}

const ModalChiDinhThucPhamChucNang = (props: Props) => {
  const [activeKey, setActiveKey] = useState<string>("0");

  const handleTabSelect: (eventKey: string | null) => void = (eventKey) => {
    eventKey && setActiveKey(eventKey);
  };
  return (
    <div>
      <Row className='border-bottom py-1'>
        <Col xs={9} className='d-flex align-items-center'>
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
            className='spaces min-w-135 me-2'
            handleSelectOption={() => { }}
            listMenuItem={[]}
            menuLabel={
              <Button className='btn-fill'>Đơn thuốc mẫu<i className="fa-solid fa-caret-down ms-2 me-0"></i></Button>
            }
          />

          <Button className='btn-fill spaces min-w-135'>Đơn thuốc cũ</Button>
        </Col>

        <Col>
          <InfoPatientRight benhNhanInfo={{}} />
        </Col>
      </Row>

      <div className="p-1">
        <Row className="mb-1">
          <Col xl={4} className="d-flex">
            <LabelRequired label="Ngày y lệnh" className="spaces min-w-120" />
            <TextValidator type="datetime-local" />
          </Col>

          <Col xl={6} className="d-flex">
            <LabelRequired label="Chẩn đoán" className="min-w-100px" />
            <Autocomplete options={[]} />
          </Col>

          <Col xl={2}>
            <a href="/" onClick={(e) => { e.preventDefault() }} className="min-w-125px ms-2"><u>Bệnh kèm theo</u></a>
          </Col>
        </Row>

        <Row className="mb-1">
          <Col xl={4} className="d-flex">
            <LabelRequired label="Bác sĩ điều trị" className="spaces min-w-120" />
            <TextValidator type="text" />
          </Col>

          <Col xl={6} className="d-flex">
            <div className="d-flex">
              <LabelRequired label="Ngày tái khám" className="min-w-100px" />
              <TextValidator type="date" />
            </div>
            <div className="d-flex align-items-center ps-2 spaces min-w-130">
              <LabelRequired label="Sau" className="min-w-30px" />
              <TextValidator type="text" />
              <div className="fw-semibold">Ngày</div>
            </div>
            <div className="d-flex ps-3 w-100">
              <LabelRequired label="Lời dặn BS" className="min-w-70px" />
              <TextValidator type="text" />
            </div>
          </Col>
        </Row>

        <Row className="mb-1">
          <Col xl={4} className="d-flex">
            <LabelRequired label="Chế độ dinh dưỡng" className="spaces min-w-120" />
            <TextValidator type="text" />
          </Col>

          <Col xl={6} className="d-flex">
            <LabelRequired label="Luyện tập" className="min-w-100px" />
            <TextValidator type="text" />
          </Col>
        </Row>
      </div>

      <div>
        <Tabs className="customs-tabs" activeKey={activeKey} onSelect={handleTabSelect}>
          {danhSachTabChiDinhThucPhamChucNang?.map((item, index) => {
            return <Tab
              className="spaces h-calc-vh-341"
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
          <div className="text-center">
            <LabelRequired label="Tiền đơn" className="ms-0 min-w-125px justify-content-center" />
            <span className="text-danger me-3 fw-500">0</span>
          </div>
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
          <Button className="btn-fill">Lưu</Button>
        </div>
      </div>
    </div>
  )
}

export default ModalChiDinhThucPhamChucNang