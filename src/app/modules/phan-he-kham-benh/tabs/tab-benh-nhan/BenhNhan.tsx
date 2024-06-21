import { Formik, FormikErrors } from "formik";
import { FC, useCallback, useState } from "react";
import { Col, Form, Row, Tab, Tabs } from "react-bootstrap";
import * as Yup from "yup";
import { initialValuesTiepNhan } from "../../../phan-he-dat-lich-hen/constants/constDatLichHen";
import TabLichSu from "../../../phan-he-tiep-nhan-thanh-toan/components/tab-tiep-nhan/tab-lich-su-kham/TabLichSu";
import TabXacThuc from "../../../phan-he-tiep-nhan-thanh-toan/components/tab-tiep-nhan/tab-xac-thuc/TabXacThuc";
import { defaultOptionSelect } from "../../../phan-he-tiep-nhan-thanh-toan/constants/PhanHeTiepNhan";
import { ObjectSelectAutocomplete, benhNhan } from "../../../phan-he-tiep-nhan-thanh-toan/models/PhanHeTiepNhanModel";
import { INPUT_VALUE, VARIABLE_STRING } from "../../../utils/Constant";
import TTHanhChinhBenhNhan from "../../components/tab-benh-nhan/TTHanhChinhBenhNhan";
import { KEY_TAB_BENH_NHAN } from "../../constants/BenhNhanConst";

export type benhNhanProps = {};

const BenhNhan: FC = () => {
  const [activeKey, setActiveKey] = useState<string>(KEY_TAB_BENH_NHAN.LICH_SU);
  const [benhNhan, setBenhNhan] = useState<benhNhan>(initialValuesTiepNhan);
  const [isHenKham, setIsHanKham] = useState<boolean>(false);

  const [openTimKiemBNDialog, setOpenTimKiemBNDialog] = useState(false);

  const handleOpenTKBNDialog = () => {
    setOpenTimKiemBNDialog(true);
  };

  const handleCloseTKBNDialog = () => {
    setOpenTimKiemBNDialog(false);
  };

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

  const handleClearValue = () => { };

  const handleTabSelect: (eventKey: string | null) => void = (eventKey) => {
    if (eventKey) {
      setActiveKey(eventKey);
    }
  };
  const handleFormSubmit = (values: any) => { };
  let validationSchema = Yup.object({});

  return (
    <Formik<any>
      initialValues={{}}
      validationSchema={validationSchema}
      validateOnChange={true}
      validate={(values) => {
        const errors: FormikErrors<any> = {};
        return errors;
      }}
      onSubmit={handleFormSubmit}
    >
      {({ touched, errors, setFieldValue, values }) => (
        <Form className="receive h-100 spaces">
          <div className="">
            <div className="p-2 mb-2 bg-white">
              <TTHanhChinhBenhNhan
                values={values}
                setFieldValue={setFieldValue}
                handleSelectChange={(selectedOption, name) =>
                  handleSelectChange(selectedOption, name, values, setFieldValue)
                }
                errors={errors}
                touched={touched}
                handleChangeSelect={handleChangeSelect}
                handleClearValue={handleClearValue}
                handleOpenTKBNDialog={handleOpenTKBNDialog}
                isHenKham={isHenKham}
              />
            </div>
            <div className="spaces bg-white">
              <Tabs className="tabs" activeKey={activeKey} onSelect={handleTabSelect}>
                <Tab
                  eventKey={KEY_TAB_BENH_NHAN.LICH_SU}
                  title={
                    <div className="label">
                      <span>Lịch sử khám</span>
                    </div>
                  }
                >
                  <TabLichSu heightTable="spaces h-calc-vh-430" values={values} activeKey={activeKey} />
                </Tab>
                <Tab
                  className="spaces h-calc-vh-378 "
                  eventKey={KEY_TAB_BENH_NHAN.TT_XAC_THUC}
                  title={
                    <div className="label">
                      <span>TT xác thực</span>
                    </div>
                  }
                  tabIndex={-1}
                >
                  <div className="spaces h-100 benh-nhan-xac-thuc"><TabXacThuc /> </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};
export { BenhNhan };

