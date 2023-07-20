import { Formik, FormikErrors, FormikProps, FormikTouched } from "formik";
import { FC, useCallback, useContext, useEffect, useState } from "react";
import { benhNhan } from "../../models/PhanHeTiepNhanModel";
import * as Yup from 'yup'
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import BangKhamBenh from "./bangKhamBenh/BangKhamBenh";
import BangLichSuKham from "./bangLichSuKham/BangLichSuKham";
import TTHanhChinh from "./TTHanhChinh";
import TTKhamBenh from "./TTKhamBenh";
import { danhSachTabTiepNhan, initialValuesTiepNhan } from "../../const/PhanHeTiepNhan";
import TimKiemBenhNhanDialog from "../timKiemBenhNhan/TimKiemBenhNhanDialog";
import { localStorageItem } from "../../../utils/LocalStorage";
import { KEY_DS_TAB_TIEP_NHAN, REGEX } from "../../../utils/Constant";
import { AppContext } from "../../../appContext/AppContext";
import { addBenhNhan } from "../../services/TiepNhan";
import { toast } from "react-toastify";
import { useIntl } from "react-intl";
import moment from "moment";
import { TimKiemBenhNhanModel } from "../timKiemBenhNhan/TimKiemBenhNhanModels";

export type benhNhanProps = {
    values: benhNhan;
    setFieldValue: (field: string, value: any) => void;
    handleSelectChange: (selectedOption: any, name: string) => void;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleChecked?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    errors?: FormikErrors<benhNhan>;
    touched?: FormikTouched<benhNhan>;
    handleAddDSDichVu?: (dichVu: any) => void
    DSDichVu?: any[]
}

const TiepNhan: FC = () => {
    const { setEventKey } = useContext(AppContext);
    const intl = useIntl();
    const [loading, setLoading] = useState(false);
    const [benhNhan, setBenhNhan] = useState<benhNhan>(initialValuesTiepNhan)
    const [DSDichVu, setDSDichVu] = useState<any[]>([]);
    const [state, setState] = useState(true);

    let initialValues: benhNhan = initialValuesTiepNhan

    const [openTimKiemBNDialog, setOpenTimKiemBNDialog] = useState(false);
    const handleOpenTKBNDialog = () => {
        setOpenTimKiemBNDialog(true)
    }

    const handleAddTab = (eventKey: string) => {
        let data = localStorageItem.get(KEY_DS_TAB_TIEP_NHAN) ? localStorageItem.get(KEY_DS_TAB_TIEP_NHAN) : [];
        if (!data.includes(eventKey)) {
            data.push(eventKey);
            data.sort((a: string, b: string) => a > b ? 1 : -1);
            localStorageItem.set(KEY_DS_TAB_TIEP_NHAN, data)
        }
        setEventKey(eventKey)
    }

    const handleCloseTKBNDialog = () => {
        setOpenTimKiemBNDialog(false)
    }

    const validationSchema = Yup.object({
        hoTen: Yup.string()
            .required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' }))
            .matches(REGEX.TEN, intl.formatMessage({ id: 'VALIDATE.TEN' }))
            .matches(REGEX.CHARACTER50, intl.formatMessage({ id: 'VALIDATE.CHARACTER50' })),
        mpi: Yup.string()
            .required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' }))
            .matches(REGEX.AZ_09, intl.formatMessage({ id: 'VALIDATE.AZ_09' }))
            .matches(REGEX.CHARACTER20, intl.formatMessage({ id: 'VALIDATE.CHARACTER20' })),
        ngaySinh: Yup.string().required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })),
        gioiTinh: Yup.string().required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })),
        soDinhDanh: Yup.string()
            .required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' }))
            .matches(REGEX.CHARACTER20, intl.formatMessage({ id: 'VALIDATE.CHARACTER20' })),
        maQuocTich: Yup.string()
            .required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' }))
            .matches(REGEX.CHARACTER50, intl.formatMessage({ id: 'VALIDATE.CHARACTER50' })),
        wardId: Yup.string().required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })),
        districtId: Yup.string().required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })),
        provinceId: Yup.string().required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })),
        diaChi: Yup.string()
            .required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' }))
            .matches(REGEX.CHARACTER255, intl.formatMessage({ id: 'VALIDATE.CHARACTER255' })),
        benhNhanCase: Yup.object().shape({
            loaiTiepNhan: Yup.string().required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })),
            loaiDoiTuong: Yup.string().required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })),
            yeuCauKham: Yup.string().required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })),
            phongKham: Yup.string().required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })),
            loaiGia: Yup.string().required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })),
        }),
        benhNhanBhyt: Yup.object().when('benhNhanCase.loaiDoiTuong', {
            is: 'BHYT',
            then: Yup.object().shape({
                soBhyt: Yup.string()
                    .required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' }))
                    .matches(REGEX.CHARACTER20, intl.formatMessage({ id: 'VALIDATE.CHARACTER20' })),
                noiDangKy: Yup.string()
                    .required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' }))
                    .matches(REGEX.CHARACTER255, intl.formatMessage({ id: 'VALIDATE.CHARACTER255' })),
                denNngay: Yup.string().required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })),
                tuNngay: Yup.string().required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })),
                loaiTuyen: Yup.string().required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })),
            }),
        })
    })

    const handleFormSubmit = (values: benhNhan) => {
        console.log(values);
        debugger
        
        setLoading(true)
        values.benhNhanCase.thoiGianTiepNhan = values.benhNhanCase.thoiGianTiepNhan ? moment(values.benhNhanCase.thoiGianTiepNhan).format("YYYY-MM-DDTHH:mm:ss") : ''
        addBenhNhan(values)
            .then(({ data }) => {
                setLoading(false)
                if (data?.code === 200) {
                    toast.success("Thành Công");
                    return;
                }
                toast.warn("Lỗi rồi")
            })
            .catch(() => {
                setLoading(false)
                toast.error("Thất bại")
            })
    }

    const handleInputChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>, values: benhNhan, setFieldValue: FormikProps<benhNhan>['setFieldValue']) => {
            const { name, value } = e.target;
            if ("benhNhanCase.thoiGianTiepNhan" === name) {
                let formatDate = value ? moment(value).format("YYYY-MM-DDTHH:mm:ss") : ''
                setFieldValue(`${name}`, formatDate);
                return;
            }
            console.log(value);
            setFieldValue(`${name}`, value);
            setBenhNhan({
                ...benhNhan,
                [`${name}`]: value
            })
        },
        []
    );

    const handleChecked = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>, setFieldValue: FormikProps<benhNhan>['setFieldValue']) => {
            const { name, checked } = e.target;
            setFieldValue(`${name}`, checked);
            setBenhNhan({
                ...benhNhan,
                [`${name}`]: checked
            })
        },
        []
    );

    const handleSelectChange = useCallback(
        (selectedOption: any, name: string, values: benhNhan, setFieldValue: (field: string, value: any) => void) => {
            setFieldValue(`${name}`, selectedOption?.code || "");
            setBenhNhan({
                ...benhNhan,
                [`${name}`]: selectedOption?.code || ""
            })
        },
        []
    );

    const handleAddDSDichVu = (dichVu: any) => {
        setDSDichVu([...DSDichVu, dichVu])
    }

    const handleDeleteDichVu = (id: any) => {
        const updatedDSDichVu = DSDichVu.filter(dichVu => dichVu.id !== id)
        setDSDichVu(updatedDSDichVu)
    };

    const getPatientInformation = useCallback((
      selectedPatient: TimKiemBenhNhanModel[],
      setValues?: (values: any) => void
    )=> {
        setValues?.(selectedPatient);
    }, []);

    const handleClearForm = (setValues: (values: any)=>void, setTouched: (touched: object)=>void) => {
        setValues(initialValuesTiepNhan);
        setTouched({})
    }

    return (
        <div >
            {loading && (
                <div className='loading-full-screen'>
                    <Spinner animation='border' variant='primary' className='spinner-lg' />
                </div>
            )}
            <Formik<benhNhan>
                initialValues={initialValues}
                validationSchema={validationSchema}
                validateOnChange={true}
                validate={(values) => {
                    const errors: FormikErrors<benhNhan> = {}
                    return errors
                }}
                onSubmit={handleFormSubmit}
            >
                {({
                    setFieldValue,
                    values,
                    errors,
                    touched,
                    handleSubmit,
                    setValues,
                    setTouched,
                }) => (
                    <Form className="receive" onSubmit={handleSubmit} >
                        <TTHanhChinh
                            values={values}
                            setFieldValue={setFieldValue}
                            handleSelectChange={(selectedOption, name) => handleSelectChange(selectedOption, name, values, setFieldValue)}
                            handleInputChange={(e) => handleInputChange(e, values, setFieldValue)}
                            errors={errors}
                            touched={touched}
                        />

                        <TTKhamBenh
                            values={values}
                            setFieldValue={setFieldValue}
                            handleSelectChange={(selectedOption, name) => handleSelectChange(selectedOption, name, values, setFieldValue)}
                            handleInputChange={(e) => handleInputChange(e, values, setFieldValue)}
                            handleChecked={(e) => handleChecked(e, setFieldValue)}
                            errors={errors}
                            touched={touched}
                            handleAddDSDichVu={handleAddDSDichVu}
                            DSDichVu={DSDichVu}
                        />

                        <div className="spaces px-16 d-flex">
                            <div className="col-7 me-3">
                                <h3 className="pt-4 m-0">Dịch vụ khám</h3>
                                <BangKhamBenh
                                    listData={DSDichVu}
                                    state={state}
                                    keyword={""}
                                    handleDeleteDichVu={handleDeleteDichVu}
                                />
                            </div>
                            <div className="col-5 pe-3">
                                <h3 className="pt-4 m-0">Lịch sử khám</h3>
                                <BangLichSuKham
                                    state={true}
                                    keyword={""}
                                />
                            </div>
                        </div>

                        <div className="spaces flex flex-center pb-14">
                            <Button className="btn-navy mr-5 w-80px" type="submit">Lưu</Button>
                            <Button className="btn-navy mr-5" onClick={()=> handleClearForm(
                                setValues,
                                setTouched
                                )} >Nhập mới</Button>
                            <Button className="btn-navy mr-5 ">In Phiếu</Button>
                            <Button className="btn-navy mr-5 " onClick={handleOpenTKBNDialog}>Tìm kiếm BN</Button>
                            <Button className="btn-navy mr-5 ">Tạo thẻ BN</Button>
                            <Button className="btn-navy mr-5 " onClick={() => handleAddTab(danhSachTabTiepNhan[4].eventKey)}>Chỉ định CLS</Button>
                        </div>

                        {openTimKiemBNDialog &&
                          <TimKiemBenhNhanDialog
                            onSelectedPatient={(patient)=>getPatientInformation(patient, setValues)}
                            open={openTimKiemBNDialog}
                            handleClose={handleCloseTKBNDialog}
                          />
                        }
                    </Form>
                )}
            </Formik>

        </div>
    );
};
export default TiepNhan;
