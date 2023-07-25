import { Button, Col, Form, Row } from "react-bootstrap";
import GridLichSuKham from "./GridLichSuKham";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { localStorageItem } from "../../../utils/LocalStorage";
import { KEY_DS_TAB_TIEP_DON } from "../../../utils/Constant";
import { AppContext } from "../../../appContext/AppContext";
import DienBienBenh from "./DienBienBenh";
import { PHAN_LOAI, KEY_NAME, MUC_BMI } from "../../const/BenhAnNgoaiTruConst";
import InputComponent from "../../../component/input-component";
import { searchByPage } from "../../service/KhamBenhService";
import { toast } from "react-toastify";
import { convertDto, listItemChild } from "../../../component/input-component/utils/constFunction";
import { PhanHeTiepDonContext } from "../../PhanHeTiepDonContext";
import TextGroup from "../../../component/TextGroup";

export type KhamBenh = {
    thongTinKhamBenh?: any;
    setThongTinKhamBenh: ((data: any) => void) | undefined;
}

export const ThongTinKhamBenh = () => {
    const { setEventKey } = useContext(AppContext)
    const [formData, setFormData] = useState<any>();
    const [sinhHieu, setSinhHieu] = useState<any>();
    const [thongTinKhamBenh, setThongTinKhamBenh] = useState<any>();
    const { benhNhanInfo } = useContext(PhanHeTiepDonContext);

    const handleAddTab = (eventKey: string) => {
        let data = localStorageItem.get(KEY_DS_TAB_TIEP_DON) ? localStorageItem.get(KEY_DS_TAB_TIEP_DON) : [];
        if (!data.includes(eventKey)) {
            data.push(eventKey);
            data.sort((a: string, b: string) => a > b ? 1 : -1);
            localStorageItem.set(KEY_DS_TAB_TIEP_DON, data)
        }
        setEventKey(eventKey)
    }

    const getDat = async () => {
        try {
            let { data } = await searchByPage()
            let listData = listItemChild(data.data);
            setFormData(listData);
        } catch (error) {
            toast.error("Lỗi gọi api")
        }
    }

    useEffect(() => {
        getDat();
    }, []);

    useEffect(() => {
        setThongTinKhamBenh(formData?.thongTinKhamBenh)
        setSinhHieu(formData?.sinhHieu)
    }, [formData]);

    const handleBMI = () => {
        let chieuCao = sinhHieu?.chieuCao?.value;
        let canNang = sinhHieu?.canNang?.value
        let bmi: string | number = "";
        let phanLoai: string = "";

        if (chieuCao && canNang) {
            bmi = (canNang / (chieuCao * chieuCao)).toFixed(1);
            let bmiValue = parseFloat(bmi);

            for (const [tenPhanLoai, mucBMI] of Object.entries(MUC_BMI)) {
                if (bmiValue < mucBMI) {
                    phanLoai = PHAN_LOAI[tenPhanLoai];
                    break;
                }
            }
        }

        setSinhHieu({
            ...sinhHieu,
            [KEY_NAME.BMI]: {
                ...sinhHieu?.BMI,
                value: bmi + " " + phanLoai
            }
        });
    };

    useEffect(() => {
        handleBMI()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sinhHieu?.chieuCao?.value, sinhHieu?.canNang?.value]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>, index: number, item: any) => {
        setSinhHieu({
            ...sinhHieu,
            [item?.code]: {
                ...sinhHieu?.[item?.code],
                value: event.target.value
            }
        });
    };

    const handleSubmit = () => {
        let concept = convertDto([thongTinKhamBenh, sinhHieu])
    }

    return (
        <div>
            <Form>
                <Row>
                    <Col sm="9" className="spaces pr-0">
                        <div className=" box_shadow-93">
                            <p className='text-center fw-bold mb-2 pt-2'>Lịch sử khám</p>
                            <GridLichSuKham />
                        </div>
                        <div className=" box_shadow-93" style={{ height: 'calc(100vh - 170px)', overflowY: 'auto' }}>
                            <DienBienBenh thongTinKhamBenh={thongTinKhamBenh} setThongTinKhamBenh={setThongTinKhamBenh} />
                        </div>
                    </Col>
                    <Col sm="3" className="spaces pl-0">
                        <div className="box_shadow-93 px-3 py-2">
                            <p className='text-center fw-bold mb-2'>Thông tin hành chính</p>
                            <TextGroup
                                label='Mã BN:'
                                labelClass='col-sm-4 label-fw'
                                value={benhNhanInfo?.maBenhNhan}
                                valueClass='col-sm-8 text-fw'
                            />
                            <TextGroup
                                label='Họ tên:'
                                labelClass='col-sm-4 label-fw'
                                value={benhNhanInfo?.hoTen}
                                valueClass='col-sm-8 text-fw'
                            />
                            <TextGroup
                                label='Ngày sinh:'
                                labelClass='col-sm-4 label-fw'
                                value={benhNhanInfo?.ngaySinh}
                                valueClass='col-sm-8 text-fw'
                            />
                            <TextGroup
                                label='Giới tính:'
                                labelClass='col-sm-4 label-fw'
                                value={benhNhanInfo?.gioiTinh}
                                valueClass='col-sm-8 text-fw'
                            />
                            <TextGroup
                                label='Đối tượng:'
                                labelClass='col-sm-4 label-fw'
                                value={benhNhanInfo?.doiTuong}
                                valueClass='col-sm-8 text-fw'
                            />
                            <TextGroup
                                label='Địa chỉ:'
                                labelClass='col-sm-4 label-fw'
                                value={benhNhanInfo?.diaChi}
                                valueClass='col-sm-8 text-fw'
                            />
                            <TextGroup
                                label='Nghề nghiệp:'
                                labelClass='col-sm-4 label-fw'
                                value={benhNhanInfo?.ngheNghiep}
                                valueClass='col-sm-8 text-fw'
                            />
                            <TextGroup
                                label='Số BHYT:'
                                labelClass='col-sm-4 label-fw'
                                value={benhNhanInfo?.soBHYT}
                                valueClass='col-sm-8 text-fw'
                            />
                        </div>
                        <div className="box_shadow-93 p-2">
                            <p className='text-center fw-bold mb-0'>Sinh hiệu</p>
                            <Row>
                                <InputComponent
                                    layout={"horizontal"}
                                    sm={12}
                                    widthLable={6}
                                    data={sinhHieu}
                                    onChange={handleChange}
                                />
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Form>
            <div className="flex flex-center pt-6 pb-3">
                <Button className="btn-navy mr-5 w-50px" onClick={handleSubmit}>Lưu</Button>
                <Button className="btn-navy mr-5 w-110px">Chỉ định CLS</Button>
                <Button className="btn-navy mr-5 w-100px">Thuốc</Button>
                <Button className="btn-navy mr-5 w-90px">Bệnh án</Button>
                <Button className="btn-navy mr-5 w-90px">Phiếu thu</Button>
                <Button className="btn-navy mr-5 w-100px">Chuyển PK</Button>
                <Button className="btn-navy mr-5 w-110px" onClick={() => handleAddTab('3')}>Xem kết quả CLS</Button>
                <Button className="btn-navy mr-5 w-80px">Kết thúc</Button>
            </div>
        </div>
    )
}

export default ThongTinKhamBenh