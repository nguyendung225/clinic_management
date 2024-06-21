import { Formik } from "formik";
import { Dispatch, FC, SetStateAction, createContext, useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useIntl } from "react-intl";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { AppContext } from "../appContext/AppContext";
import CustomTabMenu from "../component/CustomTabMenu";
import ComponentPrint from "../component/templateComponent/ComponentPrint";
import { phieuTiepNhan } from "../component/templateComponent/conponents/PhieuTiepNhan";
import { convertDataTiepNhan } from "../component/templateComponent/conponents/Utils";
import { initialValuesTiepNhan } from "../phan-he-dat-lich-hen/constants/constDatLichHen";
import { TimKiemBenhNhanModel } from "../phan-he-tiep-nhan/components/timKiemBenhNhan/TimKiemBenhNhanModels";
import { CODE, KEY_DS_TAB_TIEP_NHAN, REGEX, VARIABLE_STRING } from "../utils/Constant";
import { validateNgay } from "../utils/FormatUtils";
import { localStorageItem } from "../utils/LocalStorage";
import './PhanHeTiepNhan.scss';
import { CODE_DOI_TUONG, KEY_TAB_DS_TIEP_NHAN, danhSachMenu, danhSachTabTiepNhan } from "./constants/PhanHeTiepNhan";
import { benhNhan } from "./models/PhanHeTiepNhanModel";
import { uploadImage } from "./services/TiepNhanServices";
interface PhanHeTiepNhanContextProps {
    DSDichVu: any[];
    thongTinBenhNhan: benhNhan;
    setThongTinBenhNhan: (value: TimKiemBenhNhanModel) => void;
    handleAddTab: (eventKey: string) => void;
    setDSDichVu: Dispatch<SetStateAction<any[]>>;
    isPrint?: boolean;
    setIsPrint?: (isPrint: boolean) => void;
    isPay: { boolean: boolean, page: number, pageSize: number};
    setIsPay: (isPay: { boolean: boolean, page: number, pageSize: number}) => void;
}

const initialContext = {
    thongTinBenhNhan: initialValuesTiepNhan,
    setThongTinBenhNhan: () => { },
    handleAddTab: () => { },
    setDSDichVu: () => { },
    DSDichVu: [],
    isPrint: false,
    isPay: {boolean: false, page: 0, pageSize: 0},
    setIsPay: () => { }
}

export const PhanHeTiepNhanContext = createContext<PhanHeTiepNhanContextProps>(initialContext)

export const PhanHeTiepNhan: FC = () => {
    const { setBreakCrumb, setDSMenu, setEventKey, setIsLoading, setCurrentTab } = useContext(AppContext);
    let [isPrint, setIsPrint] = useState<boolean>(false);
    let [isPay, setIsPay] = useState<{ boolean: boolean, page: number, pageSize: number}>( { boolean: false, page: 0, pageSize: 0});
    const [thongTinBenhNhan, setThongTinBenhNhan] = useState<benhNhan>(initialValuesTiepNhan);
    const [DSDichVu, setDSDichVu] = useState<any[]>([]);
    const [listDisabledTab, setListDisabledTab] = useState<string[]>([]);

    const intl = useIntl();
    let breakCrumb = [
        { text: intl.formatMessage({ id: 'MENU.RECEIVE' }), url: '' },
        { text: intl.formatMessage({ id: 'MENU.RECEIVE' }), url: '/receive' },
    ];

    useEffect(() => {
        setBreakCrumb(breakCrumb);
        setDSMenu(danhSachMenu);
        return () => {
            setDSMenu([]);
            setBreakCrumb([]);
        };
    }, []);
    
    const handleAddTab = (eventKey: string) => {
        let data = localStorageItem.get(KEY_DS_TAB_TIEP_NHAN) ? localStorageItem.get(KEY_DS_TAB_TIEP_NHAN) : [];
        if (!data.includes(eventKey)) {
            data.push(eventKey);
        }
        data.sort((a: string, b: string) => a > b ? 1 : -1);
        localStorageItem.set(KEY_DS_TAB_TIEP_NHAN, data)
        setEventKey(eventKey)
    }

    let validationSchema = Yup.object({
        hoTen: Yup.string()
            .required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })).nullable()
            .matches(REGEX.TEN, intl.formatMessage({ id: 'VALIDATE.TEN' }))
            .matches(REGEX.CHARACTER50, intl.formatMessage({ id: 'VALIDATE.CHARACTER50' })),
        ngaySinh: Yup.number().typeError("Vui lòng nhập số")
            .nullable()
            .min(1, 'Ngày không hợp lệ')
            .max(31, 'Ngày không hợp lệ')
            .test('is-valid-date', 'Ngày không hợp lệ', function (value) {
                const { ngaySinh, thangSinh, namSinh } = this.parent;
                if (!value) return true;
                return validateNgay(ngaySinh, thangSinh, namSinh)
            }),
        thangSinh: Yup.number().typeError("Vui lòng nhập số")
            .nullable()
            .min(1, 'Tháng không hợp lệ')
            .max(12, 'Tháng không hợp lệ'),
        namSinh: Yup.number().typeError("Vui lòng nhập số")
            .required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })).nullable()
            .min(1900, 'Năm lớn hơn bằng 1900')
            .max(new Date().getFullYear(), 'Năm nhỏ hiện tại'),
        loaiDoiTuong: Yup.object().required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })).nullable(),
        province: Yup.object().required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })).nullable(),
        district: Yup.object().required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })).nullable(),
        ward: Yup.object().required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })).nullable(),
        BHYT: Yup.object().when('loaiDoiTuong.code', {
            is: CODE_DOI_TUONG.BAO_HIEM,
            then: Yup.object().shape({
                soThe1: Yup.string().required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })).nullable(),
                soThe2: Yup.string().required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })).nullable(),
                soThe3: Yup.string().required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })).nullable(),
                soThe4: Yup.string().required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })).nullable(),
                KCBBD: Yup.string().required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })).nullable(),
                hanThe: Yup.object().shape({
                    ngayStart: Yup.string().required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })).nullable(),
                    thangStart: Yup.string().required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })).nullable(),
                    namStart: Yup.string().required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })).nullable(),
                    ngayEnd: Yup.string().required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })).nullable(),
                    thangEnd: Yup.string().required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })).nullable(),
                    namEnd: Yup.string().required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })).nullable(),
                }),
            }),
        }),
    })

    if(thongTinBenhNhan.isDatLichHen) {
        validationSchema = validationSchema.shape({
            email: Yup.string().email().test("required", "Vui lòng nhập email", function () {
                if(!thongTinBenhNhan.isDatLichHen) return true;
                return false
            }),
        });
    }

    if (DSDichVu?.length === 0) {
        validationSchema = validationSchema.shape({
            tenDichVu: Yup.object().required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })).nullable(),
            phongKham: Yup.object().required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })).nullable()
        });
    }

    const covertDTOObs = (data: any) => {
        let obs = []
        for (const [key, value] of Object.entries(data)) {
            obs.push(value)
        }
        return obs;
    }

    const handleFormSubmit = async (values: benhNhan) => {
        console.log(values);
    }

    const addImage = async (patientId: string, values: benhNhan) => {
        if (values?.avatar?.formData && patientId) {
            let res = await uploadImage(patientId, values?.avatar?.formData)
            if (CODE.SUCCESS === res.data.code) {
                return res?.data?.data?.avatar
            }
        }
    }

    const checkCodeResponse = async (data: any, values: benhNhan) => {
        // if (CODE.SUCCESS === data.code) {
            if (data.id) {
            let avatar = await addImage(data?.data?.id, values)
            setThongTinBenhNhan({
                ...values,
                id: data?.data?.id,
                mpi: data?.data?.pin,
                caseId: data?.data?.caseId,
                [VARIABLE_STRING.TEN_DICH_VU]: null,
                [VARIABLE_STRING.PHONG_KHAM]: null
            })
            toast.success("Thành Công");
        } else {
            toast.warning("Xảy ra lỗi, vui lòng thử lại!");
        }
    }

    const handleClosePrint = () => {
        setIsPrint(false)
    }

    useEffect(() => {
        if (thongTinBenhNhan?.caseId) {
            setListDisabledTab([]);
        } else {
            let newArr = [...listDisabledTab];
            newArr.push(KEY_TAB_DS_TIEP_NHAN.CD_DICH_VU);
            setListDisabledTab(newArr);
        }
    }, [thongTinBenhNhan?.caseId])
    
    return (
        <Formik<benhNhan>
            initialValues={{ ...thongTinBenhNhan }}
            validationSchema={validationSchema}
            onSubmit={handleFormSubmit} 
        >
            <PhanHeTiepNhanContext.Provider
                value={{
                    thongTinBenhNhan, setThongTinBenhNhan,
                    isPrint, setIsPrint,
                    handleAddTab,
                    DSDichVu, setDSDichVu,
                    isPay, setIsPay
                }}
            >
                <div className="reception-list">
                    <div className="reception__header spaces">
                        <CustomTabMenu
                            danhsachTabs={danhSachTabTiepNhan}
                            keyDanhSachTabs={KEY_DS_TAB_TIEP_NHAN}
                            isCloseTab={false}
                            listDisabledTab={listDisabledTab}
                        />
                        <div className="call-patient">
                            <Button className="btn-fill mr-5"><i className="bi bi-telephone icon-call me-2"></i><span>Gọi</span></Button>
                        </div>
                        <div className="call-again">
                            <Button className="btn-fill btn mr-5"><i className="bi bi-arrow-clockwise icon-call-again me-2"></i><span>Gọi lại</span></Button>
                        </div>
                    </div>
                </div>
                {isPrint &&
                    <ComponentPrint 
                        open={isPrint}
                        size="sm"
                        title="Phiếu tiếp đón"
                        handleClose={handleClosePrint}
                        data={convertDataTiepNhan({...thongTinBenhNhan, DSDichVu: DSDichVu})}
                        template={phieuTiepNhan}
                    />
                }
            </PhanHeTiepNhanContext.Provider>
        </Formik>
    )
}

export default PhanHeTiepNhan;
