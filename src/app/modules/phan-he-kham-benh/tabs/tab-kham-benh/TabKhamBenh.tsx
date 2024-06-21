import { Form, Formik } from "formik";
import { useIntl } from "react-intl";
import * as Yup from "yup";
import "../../PhanHeKhamBenh.scss";
import PhieuKhamBenh from "../../components/tab-kham-benh/PhieuKhamBenh";

export type KhamBenh = {
  thongTinKhamBenh?: any;
  setThongTinKhamBenh: ((data: any) => void) | undefined;
};

export const TabKhamBenh = () => {

  const intl = useIntl();
  const validationSchema = Yup.object({
    mach: Yup.string().required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })),
    nhipTho: Yup.string().required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })),
    spo2: Yup.string().required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })),
    nhietDo: Yup.string().required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })),
    canNang: Yup.string().required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })),
    bmi: Yup.string().required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })),
    huyetAp1: Yup.string().required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })),
    huyetAp2: Yup.string().required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })),
    chieuCao: Yup.string().required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })),
    creatinin: Yup.string().required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })),
    crcl: Yup.string().required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })),
    egfr: Yup.string().required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })),
  });
  const initialValues = {
    mach: "",
    nhipTho: "",
    spo2: "",
    nhietDo: "",
    canNang: "",
    bmi: "",
    huyetAp1: "",
    huyetAp2: "",
    chieuCao: "",
    creatinin: "",
    crcl: "",
    egfr: "",
  }
  const handleSubmit = (values: any) => {
    console.log(values, "values submit khám bệnh");
  };

  return (
    <Formik<any>
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="pe-2 tab-kham-benh bg-white">
        <PhieuKhamBenh />
      </Form>
    </Formik>
  );
};

export default TabKhamBenh;
