import { Form, FormikErrors, FormikProps, FormikTouched, useFormikContext } from "formik";
import React, { FC, useCallback, useContext, useEffect, useState } from "react";
import { Button, Col, Row, Tab, Tabs } from "react-bootstrap";
import { toast } from "react-toastify";
import { AppContext } from "../../appContext/AppContext";
import { PhanHeDatLichHenContext } from "../../phan-he-dat-lich-hen/PhanHeDatLichHen";
import TabDatHen from "../components/tab-them-lich-hen/TabDatHen";
import TabGiaDinhDatLichHen from "../components/tab-them-lich-hen/TabGiaDinh";
import TabTiemChung from "../components/tab-them-lich-hen/TabTiemChung";
import { TimKiemBenhNhanModel } from "../../phan-he-tiep-nhan/components/timKiemBenhNhan/TimKiemBenhNhanModels";
import { defaultOptionSelect, initialValuesTiepNhan } from "../../phan-he-tiep-nhan-thanh-toan/constants/PhanHeTiepNhan";
import { ObjectSelectAutocomplete, benhNhan } from "../../phan-he-tiep-nhan-thanh-toan/models/PhanHeTiepNhanModel";
import { INPUT_VALUE, VARIABLE_STRING } from "../../utils/Constant";
import { formatDateDTO, handleAgeCalculate } from "../../utils/FormatUtils";
import TTHanhChinhDatLichHen from "../components/tab-them-lich-hen/thong-tin-hanh-chinh-dat-lich-hen/TTHanhChinhDatLichHen";
import TabLichSuKB from "../components/tab-them-lich-hen/tab-lich-su-kb/TabLichSuKB";
import { KEY_TAB_KHAM_BENH_HEN_KHAM } from "../constants/constDatLichHen";
import ModalTimKiemBenhNhan from "../../component/modal-tim-kiem-benh-nhan/ModalTimKiemBenhNhan";
import { IconButtonSave } from "../../component/IconSvg";

export type benhNhanProps = {
  values: benhNhan;
  setFieldValue: (field: string, value: any) => void;
  handleSelectChange: (selectedOption: any, name: string) => void;
  handleInputChangeSinhHieu: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChecked?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors?: FormikErrors<benhNhan>;
  touched?: FormikTouched<benhNhan>;
  handleAddDSDichVu?: (dichVu: any) => void;
  DSDichVu?: any[];
  setValues?: (value: benhNhan) => void;
  onAgeCalculate?: (DOB: string) => string;
  handleClearValue: (name: string, setFieldValue: (field: string, value: any) => void) => void;
  handleChangeSelect: (
    selectedObject: ObjectSelectAutocomplete,
    name: string,
    setFieldValue: (field: string, value: any) => void
  ) => void;
  handleDeleteDichVu?: (data: any) => void;
  handleOpenTKBNDialog?: () => void;
  isDatLichHen?: boolean;
  handleChangeDatLichHen?: (value: boolean) => void;
};

const ThemLichHen: FC = () => {
  const { eventKey, currentTab } = useContext(AppContext);
  const { thongTinBenhNhan, handleAddTab, setDSDichVu, DSDichVu, setThongTinBenhNhan, setIsPrint } =
    useContext(PhanHeDatLichHenContext);
  const [benhNhan, setBenhNhan] = useState<benhNhan>(initialValuesTiepNhan);
  const { handleSubmit, setValues, setTouched, setFieldValue, values, errors, touched, isValid } =
    useFormikContext<benhNhan>();
  const [isDatLichHen, setIsHanKham] = useState<boolean>(false);

  useEffect(() => {
    setTouched({});
  }, []);

  useEffect(() => {
    setValues(thongTinBenhNhan);
  }, [eventKey, currentTab, thongTinBenhNhan?.id, thongTinBenhNhan?.caseId]);

  useEffect(() => {
    setThongTinBenhNhan({ ...values, isDatLichHen });
  }, [values, isDatLichHen]);
  const [activeKey, setActiveKey] = useState<string>(KEY_TAB_KHAM_BENH_HEN_KHAM.LICH_SU);

  const [openTimKiemBNDialog, setOpenTimKiemBNDialog] = useState(false);

  const handleOpenTKBNDialog = () => {
    setOpenTimKiemBNDialog(true);
  };

  const handleCloseTKBNDialog = () => {
    setOpenTimKiemBNDialog(false);
  };

  const handleInputChangeSinhHieu = useCallback(
    (
      e: React.ChangeEvent<HTMLInputElement>,
      values: benhNhan,
      setFieldValue: FormikProps<benhNhan>["setFieldValue"]
    ) => {
      let { name, value, type } = e.target;
      let itemSinhHieu = {
        code: name,
        datatype: type,
        value: Number(value) > 0 && value,
        datetime: formatDateDTO(new Date().toString()),
      };
      setFieldValue(`obs.${name}`, itemSinhHieu);
    },
    []
  );

  const handleChecked = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, setFieldValue: FormikProps<benhNhan>["setFieldValue"]) => {
      const { name, checked } = e.target;
      setFieldValue(`${name}`, checked);
      setBenhNhan({
        ...benhNhan,
        [`${name}`]: checked,
      });
    },
    []
  );

  const handleSelectChange = useCallback(
    (selectedOption: any, name: string, values: benhNhan, setFieldValue: (field: string, value: any) => void) => {
      if (name === INPUT_VALUE.BENH_NHAN.LOAI_DOI_TUONG || name === INPUT_VALUE.BENH_NHAN.LOAI_TIEP_NHAN) {
        setFieldValue(`${name}`, selectedOption?.id || "");
        setBenhNhan({
          ...benhNhan,
          [`${name}`]: selectedOption?.id || "",
        });
        return;
      }
      setFieldValue(`${name}`, selectedOption?.code || "");
      setBenhNhan({
        ...benhNhan,
        [`${name}`]: selectedOption?.code || "",
      });
    },
    []
  );

  const handleChangeSelect = (
    selectedObject: ObjectSelectAutocomplete,
    name: string,
    setFieldValue: (field: string, value: any) => void
  ) => {
    switch (name) {
      case VARIABLE_STRING.PROVINCE:
        setBenhNhan({
          ...benhNhan,
          district: defaultOptionSelect,
          ward: defaultOptionSelect,
        });
        setFieldValue(`${name}`, selectedObject);
        setFieldValue(VARIABLE_STRING.DISTRICT, null);
        setFieldValue(VARIABLE_STRING.WARD, null);
        break;
      case VARIABLE_STRING.DISTRICT:
        setBenhNhan({ ...benhNhan, ward: defaultOptionSelect });
        setFieldValue(`${name}`, selectedObject);
        setFieldValue(VARIABLE_STRING.WARD, null);
        break;
      case VARIABLE_STRING.TEN_DICH_VU:
        setFieldValue(VARIABLE_STRING.PHONG_KHAM, null);
        setFieldValue(`${name}`, selectedObject);
        break;
      default:
        setBenhNhan({ ...benhNhan, [name]: selectedObject });
        setFieldValue(`${name}`, selectedObject);
        break;
    }
  };

  const handleClearValue = (name: string, setFieldValue: (field: string, value: any) => void) => {
    setBenhNhan({ ...benhNhan, [name]: defaultOptionSelect });
    setFieldValue(`${name}`, defaultOptionSelect);
  };

  const handleAddDSDichVu = (dichVu: any) => {
    setDSDichVu([...DSDichVu, dichVu]);
    setFieldValue(VARIABLE_STRING.TEN_DICH_VU, null);
    setFieldValue(VARIABLE_STRING.PHONG_KHAM, null);
  };

  const handleDeleteDichVu = (id: string) => {
    const updatedDSDichVu = DSDichVu.filter((dichVu) => (dichVu.orderId ? dichVu.orderId !== id : dichVu?.id !== id));
    setDSDichVu(updatedDSDichVu);
  };

  const getPatientInformation = useCallback((setValues?: (values: any) => void, patient?: TimKiemBenhNhanModel) => {
    setValues?.({ ...patient, soVaoVien: null });
  }, []);

  const handleClearForm = (setValues: (values: any) => void, setTouched: (touched: object) => void) => {
    setValues(initialValuesTiepNhan);
    setTouched({});
  };

  const handlePrint = () => {
    if (values?.id && setIsPrint) {
      setIsPrint(true);
    } else {
      toast.warn("Chưa có thông tin bệnh nhân");
    }
  };
  const handleTabSelect = (key: string | null) => {
    if (key !== null) {
      setActiveKey(key);
    }
  };

  return (
    <div className="receive h-100">
      <Form id="form-tiep-nhan">
        <Row className="mt-2 px-2">
          <TTHanhChinhDatLichHen
            values={values}
            setFieldValue={setFieldValue}
            handleSelectChange={(selectedOption: ObjectSelectAutocomplete, name: string) =>
              handleSelectChange(selectedOption, name, values, setFieldValue)
            }
            handleInputChangeSinhHieu={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChangeSinhHieu(e, values, setFieldValue)}
            errors={errors}
            touched={touched}
            onAgeCalculate={handleAgeCalculate}
            handleChangeSelect={handleChangeSelect}
            handleClearValue={handleClearValue}
            handleOpenTKBNDialog={handleOpenTKBNDialog}
            isDatLichHen={isDatLichHen}
          />
        </Row>
      </Form>
      <div className="h-dich-vu">
        <Row className="h-100">
          <Col xs={12} className="px-5 h-100">
            <Tabs className="tabs" activeKey={activeKey} onSelect={handleTabSelect}>
              <Tab
                eventKey={KEY_TAB_KHAM_BENH_HEN_KHAM.LICH_SU}
                title={
                  <div className="label">
                    <span>Lịch sử KB</span>
                  </div>
                }
              >
                <div className="spaces h-100">
                  <TabLichSuKB values={values} activeKey={activeKey} />
                </div>
              </Tab>
              <Tab
                tabClassName="h-tab"
                eventKey={KEY_TAB_KHAM_BENH_HEN_KHAM.GIA_DINH}
                title={
                  <div className="label">
                    <span>Gia Đình</span>
                  </div>
                }
              >
                <div className="spaces h-100">
                  <TabGiaDinhDatLichHen
                    values={values}
                    setFieldValue={setFieldValue}
                    handleSelectChange={(selectedOption, name) =>
                      handleSelectChange(selectedOption, name, values, setFieldValue)
                    }
                    handleInputChangeSinhHieu={(e) => handleInputChangeSinhHieu(e, values, setFieldValue)}
                    errors={errors}
                    touched={touched}
                    onAgeCalculate={handleAgeCalculate}
                    handleChangeSelect={handleChangeSelect}
                    handleClearValue={handleClearValue}
                    handleOpenTKBNDialog={handleOpenTKBNDialog}
                    isDatLichHen={isDatLichHen}
                  />
                </div>
              </Tab>
              <Tab
                tabClassName="h-tab"
                eventKey={KEY_TAB_KHAM_BENH_HEN_KHAM.DAT_HEN}
                title={
                  <div className="label">
                    <span>Đặt hẹn</span>
                  </div>
                }
              >
                <div className="spaces h-100">
                  <TabDatHen
                    values={values}
                    setFieldValue={setFieldValue}
                    handleSelectChange={(selectedOption, name) =>
                      handleSelectChange(selectedOption, name, values, setFieldValue)
                    }
                    handleInputChangeSinhHieu={(e) => handleInputChangeSinhHieu(e, values, setFieldValue)}
                    errors={errors}
                    touched={touched}
                    onAgeCalculate={handleAgeCalculate}
                    handleChangeSelect={handleChangeSelect}
                    handleClearValue={handleClearValue}
                    handleOpenTKBNDialog={handleOpenTKBNDialog}
                    isDatLichHen={isDatLichHen}
                  />
                </div>
              </Tab>
              <Tab
                tabClassName="h-tab"
                eventKey={KEY_TAB_KHAM_BENH_HEN_KHAM.TIEM_CHUNG}
                title={
                  <div className="label">
                    <span>Tiêm chủng</span>
                  </div>
                }
              >
                <div className="spaces h-100">
                  <TabTiemChung
                    values={values}
                    setFieldValue={setFieldValue}
                    handleSelectChange={(selectedOption, name) =>
                      handleSelectChange(selectedOption, name, values, setFieldValue)
                    }
                    handleInputChangeSinhHieu={(e) => handleInputChangeSinhHieu(e, values, setFieldValue)}
                    errors={errors}
                    touched={touched}
                    onAgeCalculate={handleAgeCalculate}
                    handleChangeSelect={handleChangeSelect}
                    handleClearValue={handleClearValue}
                    handleOpenTKBNDialog={handleOpenTKBNDialog}
                    isDatLichHen={isDatLichHen}
                  />
                </div>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </div>
      <hr />
      <div className="spaces flex flex-center pb-8">
        <Form id="form" className="spaces flex flex-center">
          <Button className="btn-fill mr-5" type="submit">
            <IconButtonSave/>
            {thongTinBenhNhan?.caseId && thongTinBenhNhan?.id ? <span>Cập nhật</span> : <span>Lưu</span>}
          </Button>
          <Button
            className="btn-outline mr-5"
            onClick={() => {
              handleClearForm(setValues, setTouched);
              setDSDichVu([]);
              setThongTinBenhNhan(initialValuesTiepNhan);
            }}
          >
            <i className="bi bi-file-earmark-plus"></i>
            <span>Nhập mới</span>
          </Button>
          <Button className="btn-outline mr-5 " onClick={handlePrint}>
            <i className="bi bi-printer"></i>
            <span>In Phiếu</span>
          </Button>
          <Button className="btn-outline mr-5 " onClick={handleOpenTKBNDialog}>
            <i className="bi bi-search"></i>
            <span>Tìm kiếm BN</span>
          </Button>
        </Form>
      </div>

      {openTimKiemBNDialog && (
        <ModalTimKiemBenhNhan
          onSelectedPatient={(patient) => getPatientInformation(setValues, patient)}
          open={openTimKiemBNDialog}
          handleClose={handleCloseTKBNDialog}
        />
      )}
    </div>
  );
};
export { ThemLichHen };

