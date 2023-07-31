import React, { ChangeEvent, FC, useCallback, useContext, useEffect, useState } from "react";
import { Row, Tab, Tabs } from "react-bootstrap";
import DanhSachDichVuChiDinh from "./DSDichVuChiDinh";
import { ConfirmDialog } from "../../../../component/ConfirmDialog";
import { CODE } from "../../../const/ChiDinhDVConst";
import { ChiDinhDVContext } from "./ContextChiDinhDV";
import { PhanHeTiepDonContext } from "../../../PhanHeTiepDonContext";
import TextGroup from "../../../../component/TextGroup";
import { formatDateToString } from "../../../../utils/FormatUtils";

const DichVu: FC = () => {
    const { benhNhanInfo } = useContext(PhanHeTiepDonContext);
    const [activeTab, setActiveTab] = useState<string>("0");
    const [shouldOpenConfirmDialog, setShouldOpenConfirmDialog] = useState<boolean>(false)
    const [dichVu, setDichVu] = useState<any>()
    const [tongChiPhi, setTongChiPhi] = useState<any>()

    let {
        dataDichVu,
        setDataDichVu,
        dataXetNghiem,
        dataCDHA,
        dataTDCN,
        dataPT,
        dataTT,
        setDataXetNghiem,
        setDataCDHA,
        setDataTDCN,
        setDataPT,
        setDataTT
    } = useContext(ChiDinhDVContext);

    const handleTabSelect: (eventKey: string | null) => void = (eventKey) => {
        if (eventKey) {
            setActiveTab(eventKey);
        }
    };
    const handleConfirmDialog = () => {
        if (dataDichVu?.length > 0) {
            let updateDataDichVu = dataDichVu.filter((item: any) => item?.id !== dichVu?.id)
            checkGroup(dichVu);
            setDataDichVu(updateDataDichVu)
            handleClose();
        }
    }

    const checkGroup = (dichVu: any) => {
        const isChecked = false;
        switch (dichVu?.parentCode) {
            case CODE.XET_NGHIEM:
                let updateDataXetNghiem = updateCheckedStatus(dataXetNghiem, dichVu?.id, isChecked)
                setDataXetNghiem(updateDataXetNghiem)
                break;
            case CODE.CDHA:
                let updateDataCDHA = updateCheckedStatus(dataCDHA, dichVu?.id, isChecked)
                setDataCDHA(updateDataCDHA)
                break;
            case CODE.TDCN:
                let updateDataTDCN = updateCheckedStatus(dataTDCN, dichVu?.id, isChecked)
                setDataTDCN(updateDataTDCN)
                break;
            case CODE.PT:
                let updateDataPT = updateCheckedStatus(dataPT, dichVu?.id, isChecked)
                setDataPT(updateDataPT)
                break;
            case CODE.TT:
                let updateDataTT = updateCheckedStatus(dataTT, dichVu?.id, isChecked)
                setDataTT(updateDataTT)
                break;
        }
    }

    const updateCheckedStatus = (
        data: any[],
        id: number | undefined,
        isChecked: boolean
    ): any[] => {
        let updateData:any = (data?.length > 0) && data.map((item) => {
            if (item?.id === id) {
                return { ...item, isChecked };
            } else if (item.services && item.services.length > 0) {
                return {
                    ...item,
                    services: updateCheckedStatus(item.services, id, isChecked),
                };
            }
            return item;
        });

        return updateData;
    };

    const handleClose = () => {
        setShouldOpenConfirmDialog(false)
        setDichVu(null)
    }

    const handleDelete = (data: any) => {
        setShouldOpenConfirmDialog(true)
        setDichVu(data)
    }

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>, index: number) => {
        const newData = [...dataDichVu];
        newData[index][e.target.name] = e.target.value;
        setDataDichVu(newData);
    }, [dataDichVu]);

    const handleChangeSelect = (option: any, index: number) => {
        dataDichVu[index].departmentName = option?.name
        dataDichVu[index].departmentId = option?.id
        setDataDichVu(dataDichVu)
    }

    useEffect(() => {
        handleTotalPrice()
    }, [dataDichVu.length])

    const handleTotalPrice = () => {
        const sum = dataDichVu.reduce((accumulator: number, dichVu: any) => accumulator + Number(dichVu?.servicePrice), 0)
        setTongChiPhi(sum)
    }

    return (
        <div>
            <div className="spaces px-16">
                <Row className="spaces py-5">
                    <TextGroup
                        className='spaces pr-0 py-4'
                        sx={12}
                        sm={3}
                        label="Mã BN"
                        value={benhNhanInfo?.mpi}
                    />
                    <TextGroup
                        className='spaces pr-0 py-4'
                        sx={12}
                        sm={3}
                        label="Họ và tên"
                        value={benhNhanInfo?.hoTen}
                    />
                    <TextGroup
                        className='spaces pr-0 py-4'
                        sx={12}
                        sm={3}
                        label="Năm sinh"
                        value={benhNhanInfo?.ngaySinh}
                    />
                    <TextGroup
                        className='spaces pr-0 py-4'
                        sx={12}
                        sm={3}
                        label="Đối tượng"
                        value={benhNhanInfo?.benhNhanCase?.loaiDoiTuongName}
                    />
                    <TextGroup
                        className='spaces pr-0 py-4'
                        sx={12}
                        sm={6}
                        label="Địa chỉ"
                        value={benhNhanInfo?.person?.fullAddress}
                    />
                    <TextGroup
                        className='spaces pr-0 py-4'
                        sx={12}
                        sm={6}
                        label="Số BHYT"
                        value={benhNhanInfo?.benhNhanBhyt?.soBhyt}
                    />
                    <TextGroup
                        className='spaces pr-0 py-4'
                        sx={12}
                        sm={12}
                        label="TG chỉ định"
                        value={formatDateToString(benhNhanInfo?.createDate)}
                    />
                    <TextGroup
                        className='spaces pr-0 py-4'
                        sx={12}
                        sm={12}
                        label="Chuẩn đoán"
                        value={benhNhanInfo?.benhNhanBhyt?.soBhyt}
                    />
                </Row>
            </div>
            <div>
                <Tabs className="customs-tabs tabXetNghiem" fill justify activeKey={activeTab} onSelect={handleTabSelect}>
                    <Tab eventKey={"0"} title="Danh sách dich vụ chỉ định">
                        <div className="mt-4 z-index-2">
                            <DanhSachDichVuChiDinh
                                data={dataDichVu}
                                handleDelete={handleDelete}
                                handleChange={handleChange}
                                handleChangeSelect={handleChangeSelect}
                            />
                        </div>
                    </Tab>
                    <Tab eventKey={"1"} title="Danh sách dịch  vụ đã chỉ định">

                    </Tab>
                </Tabs>
            </div>

            <div className="spaces p-16">
                <Row className="spaces py-5">
                    <TextGroup
                        className='spaces pr-0 py-4'
                        sx={12}
                        sm={4}
                        label="Tổng chi phí"
                        value={tongChiPhi}
                    />
                </Row>
            </div>
            {
                shouldOpenConfirmDialog &&
                <ConfirmDialog
                    show={shouldOpenConfirmDialog}
                    title={"Xác nhận xóa"}
                    message={"Bạn có chắc chắn muốn xóa không?"}
                    yes={"Xác nhận"}
                    onYesClick={() => handleConfirmDialog()}
                    cancel={"Hủy"}
                    onCancelClick={() => handleClose()}
                />
            }
        </div>
    )
};


export default DichVu;
