import React, { FC, useContext, useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import XetNghiem from "./XetNghiem";
import DichVu from "./DichVu";
import { ChiDinhDVContext } from "./ContextChiDinhDV";
import { createDSChiDinhDV, getDSDVDaChiDinh, updateDSChiDinhDV } from "../../../service/ChiDinhDVService";
import { PhanHeTiepDonContext } from "../../../PhanHeTiepDonContext";
import { toast } from "react-toastify";
import { AppContext } from "../../../../appContext/AppContext";
import { iDichVuChiDinh } from "../../../models/ChiDinhDVModel";
import { CODE } from "../../../const/ChiDinhDVConst";

const TabChiDinhDV: FC = () => {
    let {
        benhNhan,
        dataDichVu,
        setDataDichVu,
        dataXetNghiem,
        dataCDHA,
        dataTDCN,
        dataPT,
        dataTT,
        setBenhNhan,
        setDataXetNghiem,
        setDataCDHA,
        setDataTDCN,
        setDataPT,
        setDataTT
    } = useContext(ChiDinhDVContext);
    const { benhNhanInfo } = useContext(PhanHeTiepDonContext);
    const { setIsLoading } = useContext(AppContext)

    const checkValidate = () => {
        let isCheck = dataDichVu?.length > 0 && dataDichVu.some((dichVu: iDichVuChiDinh) => dichVu?.departmentId && dichVu?.quantity)
        if (dataDichVu?.length === 0) {
            toast.warning("Vui lòng chọn dịch vụ")
            return false;
        }
        if (!isCheck) {
            toast.warning("Vui lòng điền đủ thông tin số lượng và phòng thực hiện")
            return false;
        }
        return true;
    }
    const getDataBenhNhan = async () => {
        try {
            setIsLoading(true);
            let { data } = await getDSDVDaChiDinh(benhNhanInfo?.personId);
            setBenhNhan(data[0])
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            toast.error("Có lỗi xảy ra")
        }
    }

    const handleSubmit = async () => {
        try {
            if (!checkValidate()) return;
            if (benhNhan?.dichVus?.length > 0) {
                benhNhan?.dichVus.forEach((dichVu: iDichVuChiDinh) => {
                    let index = dataDichVu.findIndex((dv: iDichVuChiDinh) => dichVu?.id === dv?.id)
                    if (index > -1) {
                        dataDichVu[index].quantity = Number(dataDichVu[index].quantity) + Number(dichVu?.quantity)
                    } else {
                        dataDichVu.push(dichVu)
                    }
                })
            }

            let { data } = await saveDichVu();
            if (data) {
                getDataBenhNhan();
                setIsLoading(false);
                handleResetDataDichVu();
                toast.success("Lưu thành công")
            } else {
                setIsLoading(false);
                toast.error("Có lỗi xảy ra")
            }

        } catch (error) {
            toast.error("Có lỗi xảy ra")
        }
    }

    const saveDichVu = async () => {
        let dataChiDichDV = {
            ...benhNhanInfo,
            benhNhanId: benhNhanInfo?.personId,
            dichVus: dataDichVu
        }
        setIsLoading(true);
        if (benhNhan?.id) {
            return await updateDSChiDinhDV(dataChiDichDV, benhNhan?.id)
        } else {
            return await createDSChiDinhDV(dataChiDichDV)
        }
    }

    const handleResetDataDichVu = () => {
        dataDichVu.forEach((dichVu: iDichVuChiDinh) => {
            checkGroup(dichVu, true)
        });
        setDataDichVu([]);
    }

    useEffect(() => {
        handleResetDataDichVu();
        getDataBenhNhan();
    }, [benhNhanInfo])

    const checkGroup = (dichVu: iDichVuChiDinh | null, reset?: boolean) => {
        const isChecked = false;
        switch (dichVu?.parentCode) {
            case CODE.XET_NGHIEM:
                let updateDataXetNghiem = updateCheckedStatus(dataXetNghiem, dichVu?.id, isChecked, reset)
                setDataXetNghiem(updateDataXetNghiem)
                break;
            case CODE.CDHA:
                let updateDataCDHA = updateCheckedStatus(dataCDHA, dichVu?.id, isChecked, reset)
                setDataCDHA(updateDataCDHA)
                break;
            case CODE.TDCN:
                let updateDataTDCN = updateCheckedStatus(dataTDCN, dichVu?.id, isChecked, reset)
                setDataTDCN(updateDataTDCN)
                break;
            case CODE.PT:
                let updateDataPT = updateCheckedStatus(dataPT, dichVu?.id, isChecked, reset)
                setDataPT(updateDataPT)
                break;
            case CODE.TT:
                let updateDataTT = updateCheckedStatus(dataTT, dichVu?.id, isChecked, reset)
                setDataTT(updateDataTT)
                break;
        }
    }

    const updateCheckedStatus = (
        data: any[],
        id: number | string | undefined,
        isChecked: boolean,
        reset?: boolean,
    ): any[] => {
        let updateData: any = (data?.length > 0) && data.map((item) => {
            if (reset) {
                return {
                    ...item,
                    isChecked,
                    services: (item?.services?.length > 0) && updateCheckedStatus(item.services, id, isChecked, reset),
                };
            } else if (item?.id === id) {
                return { ...item, isChecked };
            } else if (item?.services?.length > 0) {
                return {
                    ...item,
                    services: updateCheckedStatus(item.services, id, isChecked, reset),
                };
            }
            return item;
        });
        return updateData;
    };

    return (
        <div className="chiDinhCLS">
            <div >
                <Row className="m-4 mb-3">
                    <Col sm="5" className="box-shadow-36 p-0">
                        <XetNghiem />
                    </Col>
                    <Col sm="7" className="box-shadow-36 p-0" >
                        <DichVu checkGroup={checkGroup} getDataBenhNhan={getDataBenhNhan} />
                    </Col>
                </Row>
            </div>
            <div className="flex flex-center pb-3">
                <Button
                    className="btn-navy mr-5 w-80px"
                    type="submit"
                    onClick={handleSubmit}
                >
                    Lưu
                </Button>
            </div>
        </div>
    )
};


export default TabChiDinhDV;
