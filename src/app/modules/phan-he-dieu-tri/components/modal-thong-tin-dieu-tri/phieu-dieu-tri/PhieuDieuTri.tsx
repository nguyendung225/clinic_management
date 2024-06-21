import { useState } from "react"
import { Button, Col, Row, Tab, Tabs } from "react-bootstrap"
import Autocomplete from "../../../../component/AutocompleteObject"
import LabelRequired from "../../../../component/LabelRequired"
import TextValidator from "../../../../component/TextValidator"
import CustomTextarea from "../../../../component/custom-textarea/CustomTextarea"
import CustomMenu from "../../../../component/menu/Menu"
import { danhSachTabPhieuDieuTri } from "../../../constants/ConstantPhanHeDieuTri"
import DanhSachDichVu from "./DanhSachDichVu"

type Props = {}

const PhieuDieuTri = (props: Props) => {
  const [activeKey, setActiveKey] = useState<string>("0");

  const handleTabSelect: (eventKey: string | null) => void = (eventKey) => {
    eventKey && setActiveKey(eventKey);
  };
  return (
    <div>
      <Row>
        <Col xs={2} className="pe-0 border-end min-w-200px">
          <DanhSachDichVu />
        </Col>

        <Col className="ps-0 spaces h-calc-vh-188 overflow-auto">
          <div className="p-1">
            <div className="d-flex gap-2">
              <CustomMenu
                className='spaces min-w-102'
                handleSelectOption={() => { }}
                listMenuItem={[]}
                menuLabel={<Button className='btn-fill'>Phiếu mẫu <i className="fa-solid fa-caret-down ms-2 me-0"></i></Button>}
              />
              <Button className='btn-fill'>Dịch vụ</Button>
              <Button className='btn-fill'>Thuốc</Button>
              <Button className='btn-fill'>Vật tư</Button>
              <Button className='btn-fill'>Khám kết hợp</Button>
            </div>

            <Row className="mb-1">
              <Col xs={6} className="d-flex">
                <LabelRequired label="Nguời nhập:" className="spaces min-w-120 mb-2" />
                <CustomTextarea />
              </Col>
              <Col xs={6} className="d-flex">
                <LabelRequired label="Ngày nhập:" className="min-w-100px mb-2" />
                <CustomTextarea />
              </Col>
            </Row>

            <Row className="mb-1">
              <Col xs={3} className="d-flex pe-0">
                <LabelRequired label="Mạch(lần/phút):" className="spaces min-w-120" />
                <TextValidator />
              </Col>
              <Col xs={3} className="d-flex">
                <LabelRequired label="Nhiệt độ(°C):" className="spaces min-w-110" />
                <TextValidator />
              </Col>
              <Col xs={3} className="d-flex pe-0">
                <LabelRequired label="Huyết áp(mmHG):" className="spaces min-w-115" />
                <TextValidator />/
                <TextValidator />
              </Col>
              <Col xs={3} className="d-flex">
                <LabelRequired label="Nhịp thở(lần/phút):" className="spaces min-w-120" />
                <TextValidator />
              </Col>
            </Row>

            <Row className="mb-1">
              <Col xs={3} className="d-flex pe-0">
                <LabelRequired label="Cân nặng(kg):" className="spaces min-w-120" />
                <TextValidator />
              </Col>
              <Col xs={3} className="d-flex">
                <LabelRequired label="Chiều cao(cm):" className="spaces min-w-110" />
                <TextValidator />
              </Col>
              <Col xs={3} className="d-flex pe-0">
                <LabelRequired label="SPO2(%):" className="spaces min-w-115" />
                <TextValidator />
              </Col>
              <Col xs={3} className="d-flex">
                <LabelRequired label="BMI(kg/m2):" className="spaces min-w-120" />
                <TextValidator />
              </Col>
            </Row>

            <Row className="mb-1">
              <Col xs={3} className="d-flex pe-0">
                <LabelRequired label="Diện tích da(m2):" className="spaces min-w-120" />
                <TextValidator />
              </Col>
              <Col xs={3} className="d-flex">
                <LabelRequired label="TargetAUC:" className="spaces min-w-110" />
                <TextValidator />
              </Col>
              <Col xs={3} className="d-flex pe-0">
                <LabelRequired label="Creatinin:" className="spaces min-w-115" />
                <TextValidator />
              </Col>
              <Col xs={3} className="d-flex">
                <LabelRequired label="CrCl:" className="spaces min-w-120" />
                <TextValidator />
              </Col>
            </Row>

            <Row className="mb-1">
              <Col xs={3} className="d-flex pe-0">
                <LabelRequired label="eGFR:" className="spaces min-w-120" />
                <TextValidator />
              </Col>
              <Col xs={6} className="d-flex pe-0">
                <LabelRequired label="CarboplatinDose:" className="spaces min-w-110" />
                <TextValidator />
              </Col>
            </Row>

            <Row>
              <Col xs={8} className="pe-0">
                <div className="d-flex mb-1">
                  <a href="/"><u>Cập nhật từ phiếu theo dõi chức năng sống gần nhất</u></a>
                  <div className="fst-italic ms-5 text-danger">0 ký tự (tối đa 2000)</div>
                </div>

                <div className="mb-1">
                  <LabelRequired label="Khám bệnh:" />
                  <TextValidator as="textarea" rows={4} />
                </div>

                <div className="mb-1">
                  <LabelRequired label="Triệu chứng:" />
                  <div className="d-flex">
                    <TextValidator as="textarea" />
                    <Button className="btn-fill"><i className="fa-solid fa-file-pen m-0 p-0 fs-3"></i></Button>
                  </div>
                </div>

                <div className="mb-1">
                  <LabelRequired label="Chẩn đoán:" />
                  <Autocomplete options={[]} />
                </div>

                <div className="mb-1">
                  <LabelRequired label="Bệnh kèm theo:" />
                  <div className="d-flex">
                    <TextValidator as="textarea" />
                    <Button className="btn-fill"><i className="fa-solid fa-file-pen m-0 p-0 fs-3"></i></Button>
                  </div>
                </div>

                <div className="mb-1">
                  <LabelRequired label="Hướng xử lý:" />
                  <TextValidator as="textarea" />
                </div>

                <Row className="mb-1">
                  <Col>
                    <LabelRequired label="Chế độ ăn:" />
                    <TextValidator as="textarea" />
                  </Col>
                  <Col>
                    <LabelRequired label="Chế độ chăm sóc:" />
                    <TextValidator as="textarea" />
                  </Col>
                </Row>

                <div>
                  <LabelRequired label="Ghi chú:" />
                  <TextValidator as="textarea" />
                </div>
              </Col>

              <Col xs={4} className="ps-0">
                <Tabs className="customs-tabs" activeKey={activeKey} onSelect={handleTabSelect}>
                  {danhSachTabPhieuDieuTri?.map((item, index) => {
                    return <Tab
                      className="spaces h-calc-vh-471"
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

                <div>
                  <div className="d-flex justify-content-between">
                    <LabelRequired label="Thuốc tự túc:" />
                    <a href="/" onClick={(e) => { e.preventDefault() }}><u>Chọn kết quả cận lâm sàng</u></a>
                  </div>
                  <TextValidator as="textarea" />
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      <div className="d-flex justify-content-end gap-2 border-top p-1">
        <Button className="btn-fill">Thêm</Button>
        <Button className="btn-fill">Xóa</Button>
        <Button className="btn-fill">Lưu</Button>
        <Button className="btn-fill">Tờ điều trị</Button>
        <Button className="btn-fill">Phiếu truyền hóa chất</Button>
      </div>
    </div>
  )
}

export default PhieuDieuTri