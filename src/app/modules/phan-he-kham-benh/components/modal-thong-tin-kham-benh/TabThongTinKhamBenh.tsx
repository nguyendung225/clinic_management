import { Form, Formik } from "formik";
import moment from "moment";
import { FunctionComponent, useContext, useState } from "react";
import { Col, Row, Tab, Tabs } from "react-bootstrap";
import * as Yup from "yup";
import LabelRequired from "../../../component/LabelRequired";
import CustomTextarea from "../../../component/custom-textarea/CustomTextarea";
import { KEY_TAB_THONG_TIN_KHAM_BENH } from "../../constants/BenhNhanConst";
import { columnDichVu, columnDonThuocThongTinKhamBenh, columnsChanDoanHinhAnhThongTinKhamBenh, columnsXetNghiemThongTinKhamBenh } from "../../constants/Columns";
import { DataChanDoanHinhAnhThongTinKhamBenh, DataDichVu, DataDonThuocThongTinKhamBenh, DataXetNghiemThongTinKhamBenh } from "../FakeData";
import TextField from "../../../component/TextField";
import { PhanHeTiepDonContext } from "../../contexts/PhanHeTiepDonContext";
import SinhHieu from "../tab-kham-benh/SinhHieu";
import { iSinhHieu } from "../../models/ThongTinKhamBenhModel";
import AutocompleteV2 from "../../../component/AutocompleteObjectV2";
import CombinedTable from "../../../component/table/combined-table/CombinedTable";
import { TableCustom } from "../../../component/table/table-custom/TableCustom";
interface TabThongTinKhamBenhProps {}

const TabThongTinKhamBenh: FunctionComponent<TabThongTinKhamBenhProps> = () => {
  const [activeKey, setActiveKey] = useState<string>(KEY_TAB_THONG_TIN_KHAM_BENH.DICH_VU);
  const { benhNhanInfo } = useContext(PhanHeTiepDonContext);
  let validationSchema = Yup.object({});
  const [sinhHieu, setSinhHieu] = useState<iSinhHieu>({});
  const handleFormSubmit = (values: any) => {};
  const handleTabSelect = (key: string | null) => {
    key && setActiveKey(key);
  };

  return (
    <>
      <Formik<any>
        initialValues={{}}
        validationSchema={validationSchema}
        validateOnChange={true}
        onSubmit={handleFormSubmit}
      >
        {({ values }) => (
          <Form className="receive">
            <div className="form-tiep-nhan h-100 d-flex flex-column justify-content-between">
              <Row className="mt-2 px-2">
                <div className="d-flex flex-column justify-content-between h-calc-25px">
                  <div>
                    <Row>
                      <Col xs={3} className="d-flex mb-n1 align-items-center text-lable-input">
                        <LabelRequired label="Mã phiếu:" className="spaces min-w-117 mb-1" />
                        <CustomTextarea className="text-pri" value={"KB240112.5"} disabled marginUnderline={8} />
                      </Col>
                      <Col xs={3} className="d-flex mb-n1 align-items-center text-lable-input">
                        <LabelRequired label="Thời gian chỉ định:" className="min-w-125px mb-1" />
                        <CustomTextarea
                          className="text-pri"
                          value={moment().subtract(10, "minutes").format("hh:mm DD/MM/YYYY")}
                          disabled
                          marginUnderline={8}
                        />
                      </Col>
                      <Col xs={3} className="d-flex mb-n1 align-items-center text-lable-input">
                        <LabelRequired label="Người chỉ định:" className="min-w-100px mb-1" />
                        <CustomTextarea
                          className="text-pri"
                          value={"Quản trị hệ thống"}
                          disabled
                          marginUnderline={8}
                        />
                      </Col>
                      <Col xs={3} className="d-flex mb-n1 align-items-center text-lable-input">
                        <LabelRequired label="Phòng chỉ định:" className="min-w-100px mb-1" />
                        <CustomTextarea className="text-pri" value={"Tiếp đón"} disabled marginUnderline={8} />
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={3} className="d-flex mb-n1 align-items-center text-lable-input">
                        <LabelRequired label="Bác sĩ khám:" className="spaces min-w-117 mb-1" />
                        <CustomTextarea
                          className="text-pri"
                          value={"Quản trị hệ thống"}
                          disabled
                          marginUnderline={8}
                        />
                      </Col>
                      <Col xs={3} className="d-flex mb-n1 align-items-center text-lable-input">
                        <LabelRequired label="Phòng khám:" className="spaces min-w-90 mb-1" />
                        <CustomTextarea className="text-pri" value={"P316 - Mắt"} disabled marginUnderline={8} />
                      </Col>
                      <Col xs={6} className="d-flex mb-n1 align-items-center text-lable-input">
                        <LabelRequired label="Dịch vụ khám:" className="min-w-100px mb-1" />
                        <CustomTextarea
                          className="text-pri"
                          value={"Khám lâm sàng chung"}
                          disabled
                          marginUnderline={8}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={3} className="d-flex mb-n1 align-items-center text-lable-input">
                        <LabelRequired label="Số thứ tự khám:" className="spaces min-w-117 mb-1" />
                        <CustomTextarea
                          value={"1"}
                          className="text-danger text-center"
                          disabled
                          marginUnderline={8}
                        />
                      </Col>
                      <Col xs={3} className="d-flex mb-n1 align-items-center text-lable-input">
                        <LabelRequired label="Bắt đầu khám:" className="spaces min-w-90 mb-1" />
                        <CustomTextarea
                          className="text-pri"
                          value={moment().format("hh:mm DD/MM/YYYY")}
                          disabled
                          marginUnderline={8}
                        />
                      </Col>
                      <Col xs={6} className="d-flex mb-n1 align-items-center text-lable-input">
                        <LabelRequired label="Kết thúc khám:" className="min-w-100px mb-1" />
                        <CustomTextarea className="text-pri" value={""} disabled marginUnderline={8} />
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={6} className="d-flex mb-n1 align-items-center text-lable-input">
                        <LabelRequired label="Chẩn đoán:" className="spaces min-w-117 mb-1" />
                        <CustomTextarea className="text-pri" disabled marginUnderline={8} />
                      </Col>
                      <Col xs={6} className="d-flex mb-n1 align-items-center text-lable-input">
                        <LabelRequired label="Bệnh kèm theo:" className="min-w-100px mb-1" />
                        <CustomTextarea className="text-pri" disabled marginUnderline={8} />
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} className="d-flex mb-n1 align-items-center text-lable-input">
                        <LabelRequired label="Xử trí khám bệnh:" className="spaces min-w-117 mb-1" />
                        <CustomTextarea className="text-pri" disabled marginUnderline={8} />
                      </Col>
                    </Row>
                  </div>
                </div>
              </Row>
              <div className="spaces">
                <Row >
                  <Col xs={12} className="px-5">
                    <Tabs className="tabs" activeKey={activeKey} onSelect={handleTabSelect}>
                      <Tab
                        eventKey={KEY_TAB_THONG_TIN_KHAM_BENH.DICH_VU}
                        title={
                          <div className="label">
                            <span>Dịch vụ khám</span>
                          </div>
                        }
                      >
                        <div className="spaces h-100 mt-4 mt-10">
                          <TableCustom data={DataDichVu} columns={columnDichVu} />
                        </div>
                      </Tab>
                      <Tab
                        tabClassName="h-tab"
                        eventKey={KEY_TAB_THONG_TIN_KHAM_BENH.HOI_BENH}
                        title={
                          <div className="label">
                            <span>Hỏi bệnh</span>
                          </div>
                        }
                      >
                        <div className="spaces h-100 mt-4">
                          <Row className="mb-1 pe-0">
                            <TextField
                              label="Lý do khám"
                              labelClassName="pe-2 w-100 text-start mb-1 mt-2"
                              className="d-flex flex-column align-items-start"
                              name="lyDoKham"
                              value={values?.lyDoKham || ""}
                              // onChange={handleChangeKhamBenh}
                              readOnlyText={benhNhanInfo?.isView}
                              disabled={!benhNhanInfo?.isKhamBenh}
                            />
                          </Row>
                          <Row className="mb-1 pe-0">
                            <TextField
                              label={
                                <>
                                  Quá trình bệnh lý:{" "}
                                  <i> (khởi phát, diễn biến, chẩn đoán, điều trị của tuyến dưới, v.v...)</i>
                                </>
                              }
                              labelClassName="pe-2 w-100 text-start mb-1 mt-2"
                              className="d-flex flex-column align-items-start h-54"
                              name="quaTrinhBenhLy"
                              as="textarea"
                              rows={2}
                              value={values?.quaTrinhBenhLy || ""}
                              // onChange={handleChangeKhamBenh}
                              readOnlyText={benhNhanInfo?.isView}
                              disabled={!benhNhanInfo?.isKhamBenh}
                            />
                          </Row>
                          <Row className="mb-1 pe-0">
                            <TextField
                              label={
                                <>
                                  Tiền sử bệnh bản thân:{" "}
                                  <i>
                                    {" "}
                                    (phát triển thể lực từ nhỏ đến lớn, những bệnh đã mắc, phương pháp ĐTr, v.v...)
                                  </i>
                                </>
                              }
                              labelClassName="pe-2 w-100 text-start mb-1 mt-2"
                              className="d-flex flex-column align-items-start h-54"
                              name="tienSuBanThan"
                              as="textarea"
                              rows={2}
                              value={values?.tienSuBanThan || ""}
                              // onChange={handleChangeKhamBenh}
                              readOnlyText={benhNhanInfo?.isView}
                              disabled={!benhNhanInfo?.isKhamBenh}
                            />
                          </Row>
                          <Row className="mb-1 pe-0">
                            <TextField
                              label={
                                <>
                                  Tiền sử bệnh gia đình:{" "}
                                  <i> (những người trong gia đình, đời sống, tinh thần, vật chất, v.v...)</i>
                                </>
                              }
                              labelClassName="pe-2 w-100 text-start mb-1 mt-2"
                              className="spaces h-81 d-flex flex-column align-items-start"
                              name="tienSuGiaDinh"
                              as="textarea"
                              rows={2}
                              value={values?.tienSuGiaDinh || ""}
                              // onChange={handleChangeKhamBenh}
                              readOnlyText={benhNhanInfo?.isView}
                              disabled={!benhNhanInfo?.isKhamBenh}
                            />
                          </Row>
                        </div>
                      </Tab>
                      <Tab
                        tabClassName="h-tab"
                        eventKey={KEY_TAB_THONG_TIN_KHAM_BENH.KHAM_BENH}
                        title={
                          <div className="label">
                            <span>Khám bệnh</span>
                          </div>
                        }
                      >
                        <div className="spaces h-100 mt-4">
                          <Row className="mt-2 mb-1 pe-0">
                            <SinhHieu sinhHieu={sinhHieu} setSinhHieu={setSinhHieu} />
                          </Row>
                          <Row className="mb-1 pe-0">
                            <TextField
                              label="Khám bệnh"
                              labelClassName="pe-2 w-100 text-start mb-1 mt-2"
                              className="d-flex flex-column align-items-start h-54"
                              name="khamBenh"
                              as="textarea"
                              rows={2}
                              value={values?.khamBenh || ""}
                              // onChange={handleChangeKhamBenh}
                              readOnlyText={benhNhanInfo?.isView}
                              disabled={!benhNhanInfo?.isKhamBenh}
                            />
                          </Row>
                          <Row className="mb-1 pe-0">
                            <TextField
                              label="Khám các bộ phận"
                              labelClassName="pe-2 w-100 text-start mb-1 mt-2"
                              className="d-flex flex-column align-items-start h-54"
                              name="khamBoPhan"
                              as="textarea"
                              rows={2}
                              value={values?.khamBoPhan || ""}
                              // onChange={handleChangeKhamBenh}
                              readOnlyText={benhNhanInfo?.isView}
                              disabled={!benhNhanInfo?.isKhamBenh}
                            />
                          </Row>
                          <Row className="my-2 pe-0">
                            <LabelRequired label="Chẩn đoán ban đầu" className="ms-0 min-w-80px " />
                            <AutocompleteV2
                              name="chanDoanBanDau"
                              options={[{ code: "viemGanB", name: "Viêm gan B" }]}
                              value={values?.chanDoanBanDau}
                              getOptionLabel={(option) => (option?.name ? `${option?.code} - ${option?.name}` : "")}
                              className="autocomplete-custom spaces width-100 "
                              isDisabled={!benhNhanInfo?.isKhamBenh}
                            />
                          </Row>
                          <Row className="mb-1 pe-0">
                            <TextField
                              label="Hướng xử lý"
                              labelClassName="pe-2 w-100 text-start mb-1 mt-2"
                              className="d-flex flex-column align-items-start h-54"
                              name="huongXuLy"
                              as="textarea"
                              rows={2}
                              value={values?.huongXuLy || ""}
                              // onChange={handleChangeKhamBenh}
                              readOnlyText={benhNhanInfo?.isView}
                              disabled={!benhNhanInfo?.isKhamBenh}
                            />
                          </Row>
                        </div>
                      </Tab>
                      <Tab
                        tabClassName="h-tab"
                        eventKey={KEY_TAB_THONG_TIN_KHAM_BENH.XET_NGHIEM}
                        title={
                          <div className="label">
                            <span>Xét nghiệm</span>
                          </div>
                        }
                      >
                        <div className="spaces h-100 mt-4">
                          <CombinedTable
                            treeTable
                            data={DataXetNghiemThongTinKhamBenh}
                            userColumns={columnsXetNghiemThongTinKhamBenh}
                          />
                        </div>
                      </Tab>
                      <Tab
                        tabClassName="h-tab"
                        eventKey={KEY_TAB_THONG_TIN_KHAM_BENH.CHAN_DOAN_HINH_ANH}
                        title={
                          <div className="label">
                            <span>Chẩn đoán hình ảnh</span>
                          </div>
                        }
                      >
                        <div className="spaces h-100 mt-4">
                          <TableCustom
                            data={DataChanDoanHinhAnhThongTinKhamBenh}
                            columns={columnsChanDoanHinhAnhThongTinKhamBenh}
                          />
                        </div>
                      </Tab>
                      <Tab
                        tabClassName="h-tab"
                        eventKey={KEY_TAB_THONG_TIN_KHAM_BENH.DON_THUOC}
                        title={
                          <div className="label">
                            <span>Đơn thuốc</span>
                          </div>
                        }
                      >
                        <div className="spaces h-100 mt-4 mt-4">
                          <TableCustom
                            data={DataDonThuocThongTinKhamBenh}
                            columns={columnDonThuocThongTinKhamBenh}
                          />
                        </div>
                      </Tab>
                    </Tabs>
                  </Col>
                </Row>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default TabThongTinKhamBenh;
