import React, { ChangeEvent, FC, useCallback, useContext, useState } from "react";
import { ButtonToolbar, OverlayTrigger, Row, Tab, Tabs, Tooltip } from "react-bootstrap";
import DanhSachDichVuChiDinh from "./DSDichVuChiDinh";
import DanhSachDichDaVuChiDinh from "./DSDichVuDaChiDinh";
import { ConfirmDialog } from "../../../../component/ConfirmDialog";
import { ChiDinhDVContext } from "./ContextChiDinhDV";
import { PhanHeTiepDonContext } from "../../../PhanHeTiepDonContext";
import TextGroup from "../../../../component/TextGroup";
import { formatDateToString } from "../../../../utils/FormatUtils";
import { Autocomplete } from "../../../../component/Autocomplete";
import { getPhongThucHien, updateDSChiDinhDV } from "../../../service/ChiDinhDVService";
import { iDichVuChiDinh } from "../../../models/ChiDinhDVModel";
import { KEY_TAB_DICH_VU } from "../../../const/ChiDinhDVConst";

interface DichVu {
    checkGroup: (dichVu: iDichVuChiDinh | null) => void;
    getDataBenhNhan: () => void;
}

const DichVu: FC<DichVu> = ({ checkGroup, getDataBenhNhan }) => {
    let { dataDichVu, setDataDichVu, benhNhan } = useContext(ChiDinhDVContext);
    const { benhNhanInfo } = useContext(PhanHeTiepDonContext);
    const [activeTab, setActiveTab] = useState<string>("0");
    const [isTabDaChiDinh, setIsTabDaChiDinh] = useState<boolean | undefined>(false);
    const [shouldOpenConfirmDialog, setShouldOpenConfirmDialog] = useState<boolean>(false)
    const [dichVu, setDichVu] = useState<iDichVuChiDinh | null>(null);

    const handleTabSelect: (eventKey: string | null) => void = (eventKey) => {
        if (eventKey) {
            setActiveTab(eventKey);
            setIsTabDaChiDinh(eventKey === KEY_TAB_DICH_VU.DA_CHI_DINH_DV)
        }
    };
    const handleConfirmDialog = async () => {
        if (benhNhan?.id && isTabDaChiDinh) {
            let dichVus = benhNhan?.dichVus.filter((dv: iDichVuChiDinh) => dv?.id !== dichVu?.id)
            benhNhan.dichVus = dichVus
            await updateDSChiDinhDV(benhNhan, benhNhan?.id)
            getDataBenhNhan();
        } else {
            let updateDataDichVu = dataDichVu.filter((item: iDichVuChiDinh) => item?.id !== dichVu?.id)
            checkGroup(dichVu);
            setDataDichVu(updateDataDichVu)
        }
        handleClose();
    }

    const handleClose = () => {
        setShouldOpenConfirmDialog(false)
        setDichVu(null)
    }

    const handleDelete = (data: iDichVuChiDinh) => {
        setShouldOpenConfirmDialog(true)
        setDichVu(data)
    }

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>, index: number) => {
        const newData: any = [...dataDichVu];
        newData[index][e.target.name] = e.target.value;
        setDataDichVu(newData);
    }, [dataDichVu]);

    const handleChangeSelect = (option: any, index: number) => {
        const newData: any = [...dataDichVu];
        newData[index].departmentName = option?.name
        newData[index].departmentId = option?.id
        setDataDichVu(newData)
    }

    const handleSum = (array: any) => {
        return array?.length > 0 ? array.reduce((accumulator: number, dichVu: any) => accumulator + (Number(dichVu?.servicePrice) * Number(dichVu?.quantity)), 0) : 0;
    }

    const columns = [
        {
            name: 'STT',
            field: '',
            headerStyle: {
                width: 50,
            },
            cellStyle: {
                textAlign: "center"
            },
            render: (rowData: iDichVuChiDinh, index: number) => (index + 1),
        },
        {
            name: 'Thao tác',
            field: '',
            headerStyle: {
                width: 100,
            },
            cellStyle: {
                textAlign: "center"
            },
            render: (rowData: iDichVuChiDinh, index: number) => (
                <ButtonToolbar className='flex-center' >
                    <OverlayTrigger
                        placement="top"
                        delay={150}
                        overlay={
                            <Tooltip id="tooltip" className="in">
                                <b className="fs-7">Xóa</b>
                            </Tooltip>
                        }
                    >
                        <div onClick={() => handleDelete(rowData)}>
                            <i className="fa-solid fa-trash text-danger fs-4 cursor-pointer" />
                        </div>
                    </OverlayTrigger>
                </ButtonToolbar >
            ),
        },
        {
            name: 'Tên dịch vụ',
            field: 'conceptAnswerName',
            sorting: true,
            headerStyle: {
                minWidth: 80,
            }
        },
        {
            name: 'SL',
            field: 'quantity',
            headerStyle: {
                width: 60,
            },
            cellStyle: {
                textAlign: "center"
            },
            render: (rowData: iDichVuChiDinh, index: number) => (
                <input
                    className={"form-control customs-input w-100 px-1 text-center no-spinners"}
                    value={rowData?.quantity || ""}
                    type='number'
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e, index)}
                    name="quantity"
                    disabled={isTabDaChiDinh}
                />
            ),
        },
        {
            name: 'Loại MBP',
            field: 'loaiMBP',
            headerStyle: {
                width: 100,
            },
            render: (rowData: iDichVuChiDinh, index: number) => (
                <input
                    className={"form-control customs-input w-100 px-2 text-center no-spinners"}
                    value={rowData?.loaiMBP || ""}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e, index)}
                    name="loaiMBP"
                    disabled={isTabDaChiDinh}
                />
            ),
        },
        {
            name: 'Phòng thực hiện',
            field: 'departmentName',
            headerStyle: {
                width: 200,
            },
            render: (rowData: iDichVuChiDinh, index: number) => (
                <Autocomplete
                    options={[]}
                    onChange={(option) => handleChangeSelect(option, index)}
                    value={rowData?.departmentName || ""}
                    searchFunction={getPhongThucHien}
                    searchObject={{}}
                    urlData="data.data.content"
                    displayLable="name"
                    menuPortalTarget={document.body}
                    isDisabled={isTabDaChiDinh}
                />
            ),
        },
    ]

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
                    <Tab eventKey={KEY_TAB_DICH_VU.CHI_DINH_DV} title="Danh sách dich vụ chỉ định">
                        <div className="mt-4">
                            <DanhSachDichVuChiDinh
                                data={dataDichVu}
                                benhNhanInfo={benhNhanInfo}
                                columns={columns}
                                handleSum={handleSum}
                            />
                        </div>
                    </Tab>
                    <Tab eventKey={KEY_TAB_DICH_VU.DA_CHI_DINH_DV} title="Danh sách dịch  vụ đã chỉ định">
                        <div className="mt-4">
                            <DanhSachDichDaVuChiDinh
                                data={benhNhan?.dichVus}
                                benhNhanInfo={benhNhanInfo}
                                columns={columns}
                                active={isTabDaChiDinh}
                                handleSum={handleSum}
                            />
                        </div>
                    </Tab>
                </Tabs>
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
