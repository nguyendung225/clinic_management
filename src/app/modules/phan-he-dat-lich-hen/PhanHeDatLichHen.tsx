import { Formik, FormikErrors } from "formik";
import moment from "moment";
import { Dispatch, FC, SetStateAction, createContext, useContext, useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { AppContext } from "../appContext/AppContext";
import CustomTabMenu from "../component/CustomTabMenu";
import ComponentPrint from "../component/templateComponent/ComponentPrint";
import { phieuTiepNhan } from "../component/templateComponent/conponents/PhieuTiepNhan";
import { convertDataTiepNhan } from "../component/templateComponent/conponents/Utils";
import { TimKiemBenhNhanModel } from "../phan-he-tiep-nhan/components/timKiemBenhNhan/TimKiemBenhNhanModels";
import { KEY_TAB_DS_TIEP_NHAN, danhSachMenu } from "../phan-he-tiep-nhan-thanh-toan/constants/PhanHeTiepNhan";
import { benhNhan } from "../phan-he-tiep-nhan-thanh-toan/models/PhanHeTiepNhanModel";
import { addBenhNhan, uploadImage } from "../phan-he-tiep-nhan-thanh-toan/services/TiepNhanServices";
import { CODE, KEY_DS_TAB_HEN_KHAM, KEY_DS_TAB_TIEP_NHAN, REGEX, VARIABLE_STRING } from "../utils/Constant";
import { formatDateDTO, handleAgeCalculate, newDate, validateNgay } from "../utils/FormatUtils";
import { localStorageItem } from "../utils/LocalStorage";
import "./PhanHeDatLichHen.scss";
import { KEY_TAB_DS_HEN_KHAM, initialValuesTiepNhan } from "./constants/constDatLichHen";
import { DanhSachLichHen } from "./tab-danh-sach-lich-hen/DanhSachLichHen";
import { ThemLichHen } from "./tab-them-lich-hen/ThemLichHen";

interface PhanHeDatLichHenContextProps {
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

export const PhanHeDatLichHenContext = createContext<PhanHeDatLichHenContextProps>(initialContext)

export const PhanHeDatLichHen: FC = () => {
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
        ngaySinh: Yup.number()
            .nullable()
            .min(1, 'Ngày không hợp lệ')
            .max(31, 'Ngày không hợp lệ')
            .test('is-valid-date', 'Ngày không hợp lệ', function (value) {
                const { ngaySinh, thangSinh, namSinh } = this.parent;
                if (!value) return true;
                return validateNgay(ngaySinh, thangSinh, namSinh)
            }),
        thangSinh: Yup.number()
            .nullable()
            .min(1, 'Tháng không hợp lệ')
            .max(12, 'Tháng không hợp lệ'),
        namSinh: Yup.number()
            .required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })).nullable()
            .min(1900, 'Năm lớn hơn bằng 1900')
            .max(new Date().getFullYear(), 'Năm nhỏ hiện tại'),
        soDinhDanh: Yup.string()
            .nullable()
            .matches(REGEX.CHARACTER9or12, intl.formatMessage({ id: 'VALIDATE.CHARACTER9OR12' })),
        gender: Yup.object().required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })).nullable(),
        soDienThoai: Yup.string()
            .matches(REGEX.CHECK_PHONE, "Số điện thoại không đúng").nullable()
            .test("required", "Vui lòng nhập số điện thoại", function () {
                if (!thongTinBenhNhan.isDatLichHen) return true;
                return false
            }),
        loaiTiepNhan: Yup.object().required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })).nullable(),
        loaiDoiTuong: Yup.object().required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })).nullable(),
        benhNhanBhyt: Yup.object().when('loaiDoiTuong.name', {
            is: 'BHYT',
            then: Yup.object().shape({
                soBhyt: Yup.string()
                    .required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })).nullable()
                    .matches(REGEX.CHARACTER20, intl.formatMessage({ id: 'VALIDATE.CHARACTER20' })),
                noiDangKy: Yup.string()
                    .required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })).nullable()
                    .matches(REGEX.CHARACTER255, intl.formatMessage({ id: 'VALIDATE.CHARACTER255' })),
                denNgay: Yup.date()
                    .required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })).nullable()
                    .min(Yup.ref('tuNgay'), 'Không được nhỏ hơn ngày bắt đầu.'),
                tuNgay: Yup.date()
                    .required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })).nullable()
                    .max(Yup.ref('denNgay'), 'Không được lớn hơn ngày đến'),
                loaiTuyen: Yup.string().required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })),
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

    const handleConvertBenhNhan = (values: benhNhan) => {

        let benhNhan = {
            ...values,
            tuoi: values?.namSinh ? handleAgeCalculate?.(newDate(values?.namSinh || 1, values?.ngaySinh || 1)) : "",
            maDanToc: values.danToc?.id,
            maQuocTich: values.quocTich?.id,
            gioiTinh: values.gender?.id,
            person: {
                name: values.hoTen,
                ngaySinh: values.ngaySinh,
                thangSinh: values.thangSinh || 1,
                namSinh: values.namSinh,
                gender: values.gender?.id || '',
                ethnicId: values.danToc?.id || '',
                nationalityId: values.quocTich?.id || '',
                address: values.soNha,
                fullAddress: values.diaChi,
                communeId: values.ward?.id || '',
                districtId: values.district?.id || '',
                provinceId: values.province?.id || '',
                phoneNumber: values.soDienThoai,
                citizenId: values.soDinhDanh,
                jobId: values.job?.id || ''
            },
            benhNhanMqh: {
                ...values.benhNhanMqh,
                maQuanHe: values.quanHe?.code,
                tenQuanHe: values.quanHe?.name,
            },
            encounter: {
                id: null,
                patentId: null,
                soPhieu: null,
                departmentId: "0f0b6fcd-90c9-42e4-b5b0-e953d71d72c1",
                departmentName: "Khoa nhi",
                roomName: "R1-001",
                roomId: "1189af0f-3134-483b-9d8e-3d2a87e413b8",
                encounterType: 1,
                encounterDatetime: formatDateDTO((new Date().toString())),
                orders: DSDichVu || [],
                caseRequest: {
                    id: null,
                    patientId: null,
                    cin: null,
                    loaiDoiTuong: values.loaiDoiTuong?.id,
                    tenLoaiDoiTuong: values.loaiDoiTuong?.name,
                    loaiTiepNhan: values.loaiTiepNhan?.id,
                    tenLoaiTiepNhan: values.loaiTiepNhan?.name,
                    thoiGianTiepNhan: moment(new Date()).format("YYYY-MM-DDTHH:mm:ss"),
                    isUuTien: values.benhNhanCase.isUuTien,
                    isCapCuu: values.benhNhanCase.isCapCuu,
                },
                obs: covertDTOObs(values?.obs),
            },
        };
        let {
            danToc, district, gender, job, province, quocTich, quanHe, ward, districtId, wardId, provinceId, benhNhanCase, obs, loaiDoiTuong, loaiTiepNhan, avatar, danhSachDichVu, ...newObj
        } = benhNhan;

        return newObj;
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
        let payload = handleConvertBenhNhan(values)
        if (payload.encounter.orders?.length === 0) {
            toast.warning('Vui lòng chọn dịch vụ')
        } else {
            try {
                setIsLoading(true)
                let res = await addBenhNhan(payload)
                await checkCodeResponse(res?.data, values)
                setIsLoading(false)
            } catch (err) {
                setIsLoading(false)
                toast.error("Xảy ra lỗi, vui lòng thử lại!")
            }
        }
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
        if (CODE.SUCCESS === data.code) {
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
            validateOnChange={true}
            validate={(values) => {
                const errors: FormikErrors<benhNhan> = {}
                return errors
            }}
            onSubmit={handleFormSubmit}
        >
            <PhanHeDatLichHenContext.Provider
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
                            <div className="tabDatLichHen">
                                <CustomTabMenu
                                className="ps-6"
                                    danhsachTabs={[
                                        {
                                          eventKey: KEY_TAB_DS_HEN_KHAM.TIEP_NHAN,
                                          title: "Thêm lịch hẹn",
                                          component: <ThemLichHen/> ,
                                        },
                                          {
                                            eventKey: KEY_TAB_DS_HEN_KHAM.DS_HEN_KHAM,
                                            title: "DS lịch hẹn",
                                            component: <DanhSachLichHen eventkey={KEY_TAB_DS_HEN_KHAM.DS_HEN_KHAM} />,
                                          },
                                    ]}
                                    keyDanhSachTabs={KEY_DS_TAB_HEN_KHAM}
                                    isCloseTab={false}
                                    listDisabledTab={listDisabledTab}
                                />
                            </div>
                         {/* <div className="call-patient top-6px">
                            <Button className="btn-fill mr-5"><i className="bi bi-telephone icon-call me-2"></i><span>Gọi</span></Button>
                        </div>
                        <div className="call-again top-5px">
                            <Button className="btn-fill btn mr-5"><i className="bi bi-arrow-clockwise icon-call-again me-2"></i><span>Gọi lại</span></Button>
                        </div> */}
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
            </PhanHeDatLichHenContext.Provider>
        </Formik>
    )
}

export default PhanHeDatLichHen;
