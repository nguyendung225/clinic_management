import moment from "moment";
import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import { ConfirmDialog } from "../../component/ConfirmDialog";
import InputSearch from "../../component/InputSearch";
import LabelRequired from "../../component/LabelRequired";
import CustomTextarea from "../../component/custom-textarea/CustomTextarea";
import ComponentPrint from "../../component/templateComponent/ComponentPrint";
import { IBenhNhan } from "../../phan-he-kham-benh/models/DSBenhNhanKhamBenhModels";
import BangXetNghiem from "../components/tab-xet-nghiem/BangXetNghiem";
import DsBenhNhan from "../components/tab-xet-nghiem/DsBenhNhan";
import { templatePhieuKQNX } from "../components/tab-xet-nghiem/phieu-ket-qua/TemplatePhieuKetQuaXN";
import TextValidator from './../../component/TextValidator';

const TabXetNghiem = () => {
    const [infoBenhNhan, setInfoBenhNhan] = useState<IBenhNhan>();
    const [openInKetQua, setOpenInKetQua] = useState<boolean>(false)
    const handleThucHienXN = () => {
        if (!infoBenhNhan?.layMauBenhPham?.daLayMau) {
            toast.warning("Cần thực hiện in lại Barcode")
        }
        else {
            setInfoBenhNhan({ ...infoBenhNhan, thongTinXetNghiem: { ...infoBenhNhan?.thongTinXetNghiem, dangThucHien: true, thongTinThucHien: "Quản Trị Hệ Thống thực hiện lúc 17:33 30/10/2023 tại Xét nghiệm nước tiểu" } } as IBenhNhan)
        }
    }
    const handleHuyThucHienXN = () => {
        setInfoBenhNhan({ ...infoBenhNhan, thongTinXetNghiem: { ...infoBenhNhan?.thongTinXetNghiem, dangThucHien: false, thongTinThucHien: "" } } as IBenhNhan)
        setConfirmDialogInfo({ show: false })
    }

    const handleHuyKQ = () => {
        setInfoBenhNhan({ ...infoBenhNhan, thongTinXetNghiem: { ...infoBenhNhan?.thongTinXetNghiem, thongTinTraKq: "", } } as IBenhNhan)
        setConfirmDialogInfo({ show: false })
    }

    const handleTraKetQua = () => {
        const data = infoBenhNhan?.thongTinXetNghiem
        let allItemsHaveMayCLS = true
        for (let i = 0; i < data?.dsXetNghiem?.length; i++) {
            for (let j = 0; j < data?.dsXetNghiem?.[i]?.items?.length; j++) {
                if (!data?.dsXetNghiem?.[i].items[j].mayCLS) {
                    toast.warning(`${data?.dsXetNghiem?.[i].items[j]?.tenXetNghiem} chưa có máy CLS`)
                    allItemsHaveMayCLS = false;
                    break;
                }
            }
        }
        if (allItemsHaveMayCLS) {
            setInfoBenhNhan({ ...infoBenhNhan, thongTinXetNghiem: { ...infoBenhNhan?.thongTinXetNghiem, daTraKq: true, thongTinTraKq: "Quản Trị Hệ Thống thực hiện lúc 17:33 30/10/2023 tại Xét nghiệm nước tiểu" } } as IBenhNhan)
            toast.success("Trả kết quả thành công")
        }
        return allItemsHaveMayCLS

    }

    const handleTraInKetQua = () => {
        if (handleTraKetQua()) setOpenInKetQua(true)

    }


    const convertDataBenhNhan = (data: IBenhNhan) => {
        return {
            hoTen: data?.hoTen,
            maBn: data?.maBn,
            barcode: data?.maBn,
            diaChi: data?.diaChi,
            bsChiDinh: data?.layMauBenhPham?.nguoiChiDinh,
            namSinh: data?.age ? moment().year() - data?.age : "",
            ngayLayMau: data?.layMauBenhPham?.batDauLayMau,
            noiChiDinh: data?.layMauBenhPham?.noiChiDinh,
            list: data?.thongTinXetNghiem?.dsXetNghiem
        }
    }

    const [confirmDialogInfo, setConfirmDialogInfo] = useState<any>()

    return (
        <>
            <div>
                <Row className="h-100 w-100 m-0">
                    <Col xs={12} className='border'>
                        <div className='d-flex spaces h-58 align-items-center gap-10'>
                            <Button className="btn-outline spaces h-29 d-flex justify-content-center min-w-40px">
                                <i className="bi bi-list spaces scale-15 m-0 p-0"></i>
                            </Button>
                            <Button className='btn-fill h-auto min-w-50px'>In</Button>
                            <Button className='btn-fill h-auto'>Màn hình chờ</Button>
                        </div>
                    </Col>
                    <Col xs={3} className="p-0 dsBenhNhan h-100 d-flex flex-column mt-2 border">
                        <div>
                            <InputSearch placeholder='Tìm kiếm' handleChange={() => { }} className="flex-fill spaces h-32" />
                        </div>
                        <div className="fw-500 my-4 info-patient-cdha spaces text-start min-h-94">
                            {
                                infoBenhNhan && <>
                                    <span className="text-uppercase fw-600">
                                        {infoBenhNhan?.hoTen} | {infoBenhNhan?.maBn} | {infoBenhNhan?.age} | {infoBenhNhan?.gioiTinh}
                                    </span>
                                    <div className="text-truncate">
                                        Hình thức: Bệnh mới | Ưu tiên : Có
                                    </div>
                                    <div className="text-truncate">
                                        Địa chỉ: {infoBenhNhan?.diaChi}
                                    </div>
                                </>
                            }
                        </div>
                        <div className="flex-1">
                            <DsBenhNhan setInfoBenhNhan={setInfoBenhNhan} />
                        </div>
                    </Col>
                    <Col xs={9} className="h-100 pb-0">
                        <div>
                            <Row className="spaces h-25">
                                <Col
                                    xs={4}
                                    className="d-flex align-items-center"
                                >
                                    <LabelRequired
                                        label="Mã bệnh phẩm: "
                                        className="spaces min-w-140 mb-2"
                                    />
                                    <CustomTextarea className="" value={infoBenhNhan?.maBenhPham || ""} disabled  />
                                </Col>
                                <Col
                                    xs={4}
                                    className="d-flex align-items-center"
                                >
                                    <LabelRequired
                                        label="Mã phiếu thực hiện: "
                                        className="spaces min-w-140 mb-2"
                                    />
                                    <CustomTextarea value={infoBenhNhan?.thongTinXetNghiem?.maPhieuThucHien || ""} disabled />
                                </Col>
                                <Col
                                    xs={4}
                                    className="d-flex align-items-center"
                                >
                                    <LabelRequired
                                        label="Barcode: "
                                        className="min-w-75px mb-1"
                                    />
                                    <CustomTextarea value={infoBenhNhan?.barCode || ""} disabled />
                                </Col>
                            </Row>
                            <Row>
                                <Col
                                    xs={12}
                                    className="d-flex align-items-center spaces h-25"
                                >
                                    <LabelRequired
                                        label="Chẩn đoán: "
                                        className="spaces min-w-140 mb-2"
                                    />
                                    <CustomTextarea value={infoBenhNhan?.thongTinXetNghiem?.chanDoan || ""} disabled />
                                </Col>
                                <Col
                                    xs={12}
                                    className="d-flex align-items-center spaces h-25"
                                >
                                    <LabelRequired
                                        label="Thông tin chỉ định: "
                                        className="spaces min-w-140 mb-2"
                                    />
                                    <CustomTextarea value={infoBenhNhan?.thongTinXetNghiem?.thongTinChiDinh || ""} disabled />
                                </Col>

                                <Col
                                    xs={12}
                                    className="d-flex align-items-center spaces h-25"
                                >
                                    <LabelRequired
                                        label="Thông tin lấy mẫu: "
                                        className="spaces min-w-140 mb-2"
                                    />
                                    <CustomTextarea value={infoBenhNhan?.layMauBenhPham?.thongTinLayMau || ""} disabled />
                                </Col>

                                <Col
                                    xs={12}
                                    className="d-flex align-items-center spaces h-25"
                                >
                                    <LabelRequired
                                        label="Thông tin thực hiện: "
                                        className="spaces min-w-140 mb-2"
                                    />
                                    <CustomTextarea value={infoBenhNhan?.thongTinXetNghiem?.thongTinThucHien || ""} disabled />
                                </Col>
                                <Col
                                    xs={12}
                                    className="d-flex align-items-center spaces h-25"
                                >
                                    <LabelRequired
                                        label="Thông tin trả kết quả: "
                                        className="spaces min-w-140 mb-2"
                                    />
                                    <CustomTextarea value={infoBenhNhan?.thongTinXetNghiem?.thongTinTraKq || ""} disabled />
                                </Col>
                            </Row>
                        </div>
                        <div className="table-xet-nghiem border">
                            <BangXetNghiem dangThucHien={infoBenhNhan?.thongTinXetNghiem?.thongTinThucHien || infoBenhNhan?.thongTinXetNghiem?.dangThucHien} data={infoBenhNhan?.thongTinXetNghiem?.dsXetNghiem} />
                        </div>
                        <div className="spaces my-4">
                            <LabelRequired
                                label="Kết Luận: "
                                className="spaces min-w-90"
                            />
                            <div className="d-flex spaces gap-8">
                                <TextValidator className="w-100" />
                                <div className="d-flex align-items-center spaces pe-2 cursor-pointer fw-5"><i className="bi bi-arrows-fullscreen fs-2 spaces pe-2"></i>Phóng to</div>
                                <Button className='btn-fill min-w-80px spaces h-29'>Lưu</Button>
                            </div>
                        </div>
                        {infoBenhNhan?.thongTinXetNghiem?.dsXetNghiem?.length > 0 &&
                            <>

                                <div className="d-flex justify-content-between">
                                    <div className="d-flex align-items-center spaces gap-4 fw-5">
                                        <div className="d-flex align-items-center spaces pe-2 cursor-pointer"><i className="bi bi-clock-history fs-2 spaces pe-2"></i>Lịch sử</div>
                                        <div className="d-flex align-items-center spaces pe-2 cursor-pointer"><i className="bi bi-bar-chart-fill fs-2 spaces pe-2 text-primary"></i>Biểu đồ</div>
                                    </div>
                                    <div className="d-flex justify-content-end spaces mt-4 mb-8 gap-4">
                                        {!infoBenhNhan?.thongTinXetNghiem?.dangThucHien && <> <Button className='btn-fill min-w-80px' onClick={handleThucHienXN}>Thực hiện</Button></>}


                                        {(infoBenhNhan?.thongTinXetNghiem?.dangThucHien && !infoBenhNhan?.thongTinXetNghiem?.thongTinTraKq) && <>
                                            <Button className='btn-fill'>Chạy công thức</Button>
                                            <Button className='btn-fill' onClick={() => {
                                                setConfirmDialogInfo({
                                                    show: true,
                                                    message: "Bạn có chắc chắn muốn hủy thực hiện phiếu này không?",
                                                    onYes: handleHuyThucHienXN
                                                })
                                            }}>Hủy thực hiện</Button>
                                            <Button className='btn-fill' onClick={handleTraKetQua}>Trả kết quả</Button>
                                            <Button className='btn-fill' onClick={handleTraInKetQua}>Trả +In Kết quả</Button>

                                        </>}
                                        {
                                            infoBenhNhan?.thongTinXetNghiem?.thongTinTraKq && (
                                                <>
                                                    <Button className='btn-fill' onClick={() => {
                                                        setConfirmDialogInfo({
                                                            show: true,
                                                            message: "Bạn có chắc chắn muốn hủy trả kết quả phiếu này không?",
                                                            onYes: handleHuyKQ
                                                        })
                                                    }}>Hủy kết quả</Button>
                                                    <Button className='btn-fill' onClick={() => setOpenInKetQua(true)}>In Kết quả</Button>
                                                </>
                                            )
                                        }

                                        {(!infoBenhNhan?.layMauBenhPham?.daLayMau) && <Button className='btn-fill'>Barcode</Button>}
                                    </div>
                                </div>
                            </>
                        }
                    </Col>
                </Row>
                <ComponentPrint
                    open={openInKetQua}
                    title={"Phiếu kết quả xét nghiệm"}
                    handleClose={() => setOpenInKetQua(false)}
                    data={convertDataBenhNhan(infoBenhNhan as IBenhNhan)}
                    size="lg"
                    template={templatePhieuKQNX}
                />
                {
                    <ConfirmDialog title='Thông báo' show={confirmDialogInfo?.show} onYesClick={confirmDialogInfo?.onYes} message={confirmDialogInfo?.message} yes='Có' close='Không' onCloseClick={() => setConfirmDialogInfo({ show: false })} />
                }
            </div>
        </>
    )
}

export default TabXetNghiem