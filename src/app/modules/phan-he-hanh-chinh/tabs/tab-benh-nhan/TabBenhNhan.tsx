import { Formik } from "formik"
import { useState } from "react"
import { Col, Row, Tab, Tabs } from "react-bootstrap"
import Autocomplete from "../../../component/AutocompleteObject"
import LabelRequired from "../../../component/LabelRequired"
import TextValidator from "../../../component/TextValidator"
import { KEY_TAB_BENH_NHAN } from "../../../phan-he-kham-benh/constants/BenhNhanConst"
import TabLichSu from "../../../phan-he-tiep-nhan-thanh-toan/components/tab-tiep-nhan/tab-lich-su-kham/TabLichSu"
import TabXacThuc from "../../../phan-he-tiep-nhan-thanh-toan/components/tab-tiep-nhan/tab-xac-thuc/TabXacThuc"

type Props = {}

const TabBenhNhan = (props: Props) => {
  const [activeKey, setActiveKey] = useState<string>(KEY_TAB_BENH_NHAN.LICH_SU);

  const handleTabSelect: (eventKey: string | null) => void = (eventKey) => {
    eventKey && setActiveKey(eventKey);
  };

  return (
    <Formik
      initialValues={{}}
      onSubmit={() => { }}
    >
      {({ values }) => (
        <div className="">
         <div className="p-3 mb-2 bg-white">
           <Row className="mb-1">
             <Col xs={3} className="d-flex  pe-0">
               <LabelRequired label="Mã BN" className="min-w-90px" />
               <TextValidator />
             </Col>
          
             <Col xs={3} className="d-flex pe-0">
               <LabelRequired label="Mã BA" className="min-w-90px" />
               <TextValidator />
             </Col>
          
             <Col xs={3} className="d-flex pe-0">
               <LabelRequired label="Bệnh nhân" className="min-w-90px" />
               <TextValidator />
             </Col>
          
             <Col xs={3} className="d-flex pe-0">
               <LabelRequired label="Giới tính" className="min-w-90px" />
               <Autocomplete options={[]} className="autocomplete-custom-tiep-nhan w-100"/>
             </Col>
           </Row>
          
           <Row className="mb-1">
             <Col xs={3} className="d-flex  pe-0">
               <LabelRequired label="Tuổi" className="min-w-90px" />
               <TextValidator />
             </Col>
          
             <Col xs={3} className="d-flex pe-0">
               <LabelRequired label="Ngày sinh" className="min-w-90px" />
               <div className="spaces ms-0 d-flex">
                 <div className="spaces width-25">
                   <TextValidator
                     name="ngaySinh"
                     type="text"
                     maxLength="2"
                     className="text-center "
                   />
                 </div>
                 <div className="spaces width-25">
                   <TextValidator
                     name="thangSinh"
                     type="text"
                     maxLength="2"
                     className="text-center "
                   />
                 </div>
                 <div className="spaces width-50">
                   <TextValidator
                     name="namSinh"
                     type="text"
                     maxLength="4"
                     className="text-center "
                   />
                 </div>
               </div>
             </Col>
          
             <Col xs={3} className="d-flex pe-0">
               <LabelRequired label="Dân tộc" className="min-w-90px" />
               <Autocomplete options={[]} className="autocomplete-custom-tiep-nhan w-100"/>
             </Col>
          
             <Col xs={3} className="d-flex pe-0">
               <LabelRequired label="Quốc tịch" className="min-w-90px" />
               <Autocomplete options={[]} className="autocomplete-custom-tiep-nhan w-100"/>
             </Col>
           </Row>
          
           <Row className="mb-1">
             <Col xs={3} className="d-flex  pe-0">
               <LabelRequired label="Nghề nghiệp" className="min-w-90px" />
               <Autocomplete options={[]} className="autocomplete-custom-tiep-nhan w-100"/>
             </Col>
          
             <Col xs={3} className="d-flex pe-0">
               <LabelRequired label="Điện thoại" className="min-w-90px" />
               <TextValidator />
             </Col>
          
             <Col xs={6} className="d-flex pe-0">
               <LabelRequired label="Địa chỉ" className="min-w-90px" />
               <TextValidator />
             </Col>
           </Row>
          
           <Row className="mb-1">
             <Col xs={3} className="d-flex  pe-0">
               <LabelRequired label="Nhóm máu" className="min-w-90px" />
               <TextValidator />
             </Col>
          
             <Col xs={3} className="d-flex pe-0">
               <LabelRequired label="CCCD" className="min-w-90px" />
               <TextValidator />
             </Col>
          
             <Col xs={6} className="d-flex pe-0">
               <LabelRequired label="Nơi làm việc" className="min-w-90px" />
               <TextValidator />
             </Col>
           </Row>
          
           <Row className="mb-1">
             <Col xs={6} className="d-flex  pe-0">
               <LabelRequired label="Người nhà" className="min-w-90px" />
               <Autocomplete options={[]} className="autocomplete-custom-tiep-nhan w-100"/>
             </Col>
          
             <Col xs={3} className="d-flex pe-0">
               <LabelRequired label="Đón tiếp lúc" className="min-w-90px" />
               <TextValidator type="datetime-local" className="w-input-140" />
             </Col>
          
             <Col xs={3} className="d-flex pe-0">
               <LabelRequired label="Loại đón tiếp" className="min-w-90px" />
               <TextValidator type="text" />
             </Col>
           </Row>
          
           <Row className="mb-1">
             <Col xs={3} className="d-flex  pe-0">
               <LabelRequired label="Đối tượng" className="min-w-90px" />
               <Autocomplete options={[]} className="autocomplete-custom-tiep-nhan w-100"/>
             </Col>
             <Col xs={3} className="d-flex  pe-0">
               <LabelRequired label="Số BHYT" className="min-w-90px" />
               <TextValidator />
             </Col>
          
             <Col xs={3} className="d-flex pe-0">
               <LabelRequired label="Mức hưởng" className="min-w-90px" />
               <TextValidator />
             </Col>
          
             <Col xs={3} className="d-flex pe-0">
               <LabelRequired label="Tuyến BHYT" className="min-w-90px" />
               <TextValidator />
             </Col>
           </Row>
          
           <Row className="mb-1">
             <Col xs={6} className="d-flex  pe-0">
               <LabelRequired label="Nơi KCBBĐ" className="min-w-90px" />
               <TextValidator />
             </Col>
          
             <Col xs={3} className="d-flex pe-0">
               <LabelRequired label="Hạn thẻ" className="min-w-90px" />
               <TextValidator />
             </Col>
          
             <Col xs={3} className="d-flex pe-0">
               <LabelRequired label="Số vào viện" className="min-w-90px" />
               <TextValidator />
             </Col>
           </Row>
          
           <Row className="mb-1">
             <Col xs={3} className="d-flex  pe-0">
               <LabelRequired label="Số vào khoa" className="min-w-90px" />
               <TextValidator />
             </Col>
          
             <Col xs={3} className="d-flex pe-0">
               <LabelRequired label="Mã điều trị" className="min-w-90px" />
               <TextValidator />
             </Col>
          
             <Col xs={6} className="d-flex pe-0">
               <LabelRequired label="Lý do khám" className="min-w-90px" />
               <TextValidator />
             </Col>
           </Row>
          
           <Row className="mb-1">
             <Col xs={6} className="d-flex  pe-0">
               <LabelRequired label="Khoa phòng" className="min-w-90px" />
               <TextValidator />
             </Col>
          
             <Col xs={3} className="d-flex pe-0">
               <LabelRequired label="Bác sĩ" className="min-w-90px" />
               <Autocomplete options={[]} className="autocomplete-custom-tiep-nhan w-100"/>
             </Col>
          
             <Col xs={3} className="d-flex pe-0">
               <LabelRequired label="Bệnh án" className="min-w-90px" />
               <TextValidator />
             </Col>
           </Row>
          
           <Row className="mb-1">
             <Col xs={6} className="d-flex pe-0">
               <LabelRequired label="Chẩn đoán" className="min-w-90px" />
               <TextValidator />
             </Col>
          
             <Col xs={6} className="d-flex pe-0">
               <LabelRequired label="Bệnh khác" className="min-w-90px" />
               <TextValidator />
             </Col>
           </Row>
          
           <Row className="mb-1">
             <Col xs={3} className="d-flex  pe-0">
               <LabelRequired label="Ngày vào" className="min-w-90px" />
               <TextValidator />
             </Col>
          
             <Col xs={3} className="d-flex pe-0">
               <LabelRequired label="Ngày ra" className="min-w-90px" />
               <TextValidator />
             </Col>
          
             <Col xs={3} className="d-flex pe-0">
               <LabelRequired label="Xử trí" className="min-w-90px" />
               <TextValidator />
             </Col>
          
             <Col xs={3} className="d-flex pe-0">
               <LabelRequired label="Số ngày ĐT" className="min-w-90px" />
               <TextValidator />
             </Col>
           </Row>
         </div>

          <div className="bg-white">
            <Tabs className="tabs" activeKey={activeKey} onSelect={handleTabSelect}>
              <Tab
                eventKey={KEY_TAB_BENH_NHAN.LICH_SU}
                title={
                  <div className="label">
                    <span>Lịch sử khám</span>
                  </div>
                }
              >
                <div>
                  <TabLichSu activeKey={activeKey} heightTable="spaces h-calc-vh-549"/>
                </div>
              </Tab>

              <Tab
                tabClassName="h-tab"
                eventKey={KEY_TAB_BENH_NHAN.TT_XAC_THUC}
                title={
                  <div className="label">
                    <span>TT xác thực</span>
                  </div>
                }
                tabIndex={-1}
              >
                <div className="spaces h-100 benh-nhan-xac-thuc">
                  <TabXacThuc />
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      )}
    </Formik>
  )
}

export default TabBenhNhan