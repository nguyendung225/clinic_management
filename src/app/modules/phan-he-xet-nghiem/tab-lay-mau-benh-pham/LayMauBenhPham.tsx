import moment from 'moment'
import { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { ConfirmDialog } from '../../component/ConfirmDialog'
import InputSearch from '../../component/InputSearch'
import LabelRequired from '../../component/LabelRequired'
import CustomTextarea from '../../component/custom-textarea/CustomTextarea'
import ComponentPrint from '../../component/templateComponent/ComponentPrint'
import { IBenhNhan } from '../../phan-he-kham-benh/models/DSBenhNhanKhamBenhModels'
import DsBenhNhan from '../components/tab-lay-mau-benh-pham/DsBenhNhan'
import { dataLayMauBenhPham } from '../const/FakeData'
import BangLayMauBenhPham from '../components/tab-lay-mau-benh-pham/BangLayMauBenhPham'
import { LIST_PHIEU_IN } from './../const/constants'
import { LOAI_DOI_TUONG_CONST } from '../../phan-he-kham-benh/constants/BenhNhanConst'
import Autocomplete from './../../component/AutocompleteObject';

type Props = {}

const LayMauBenhPham = (props: Props) => {
    const [infoBenhNhan, setInfoBenhNhan] = useState<IBenhNhan>();
    const [openHuyBP, setOpenHuyBP] = useState(false)
    const [inPhieu, setInPhieu] = useState(false)
    const [infoPrint, setInfoPrint] = useState<any>()

    const handleLayMauBP = () => {
        setInfoBenhNhan({ ...infoBenhNhan, layMauBenhPham: { ...infoBenhNhan?.layMauBenhPham, daLayMau: true } } as IBenhNhan)
        toast.success("Đã lấy mẫu thành công")
    }

    const handleHuyLayMauBP = () => {
        setOpenHuyBP(false)
        setInfoBenhNhan({ ...infoBenhNhan, layMauBenhPham: { ...infoBenhNhan?.layMauBenhPham, daLayMau: false } } as IBenhNhan)
    }

    const handleInBarcode = () => {
        toast.warning("Không có xét nghiệm nào có mã TubeCode")
    }

    const convertDataBenhNhan = (data: IBenhNhan) => {
        return {
            hoTen: data?.hoTen,
            diaChi: data?.diaChi,
            gioiTinh: data?.gioiTinh,
            tuoi: data?.age,
            namSinh: data?.age ? moment().year() - data?.age : "",
            ngayLayMau: data?.layMauBenhPham?.batDauLayMau,
            noiChiDinh: data?.layMauBenhPham?.noiChiDinh
        }
    }

    const handlePrint = (key: string) => {
        setInPhieu(true)
        switch (key) {
            case LIST_PHIEU_IN.PHIEU_CHI_DINH.key:
                setInfoPrint(LIST_PHIEU_IN.PHIEU_CHI_DINH)
                break;
            case LIST_PHIEU_IN.PHIEU_HEN_TRA_KQ.key:
                setInfoPrint(LIST_PHIEU_IN.PHIEU_HEN_TRA_KQ)
                break;

            default:
                break;
        }
    }

    return (
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
                <Col xs={9} className="h-100 pb-0 mt-2">
                    <div>
                        <Row>
                            <Col xs={6}>
                                <div>
                                    <InputSearch placeholder='Tìm theo mã bệnh phẩm' handleChange={() => { }} className="flex-fill spaces h-32" />
                                </div>
                            </Col>
                            <Col xs={6}>
                                <div>
                                    <InputSearch placeholder='Tìm theo barcode' handleChange={() => { }} className="flex-fill spaces h-32" />
                                </div>
                            </Col>
                            <Col
                                xs={4}
                                className="d-flex mb-1 align-items-center spaces h-25 mt-10"
                            >
                                <LabelRequired
                                    label="Mã bệnh phẩm: "
                                    className="spaces min-w-120 mb-2"
                                />
                                <CustomTextarea value={infoBenhNhan?.maBenhPham || ""} disabled />
                            </Col>
                            <Col
                                xs={4}
                                className="d-flex mb-1 align-items-center spaces h-25 mt-10"
                            >
                                <LabelRequired
                                    label="Barcode:"
                                    className="spaces min-w-100 mb-2"
                                />
                                <CustomTextarea value={infoBenhNhan?.barCode || ""} disabled />
                            </Col>
                            <Col
                                xs={4}
                                className="d-flex mb-1 align-items-center spaces h-25 mt-10"
                            >
                                <LabelRequired
                                    label="Chẩn đoán:"
                                    className="spaces min-w-100 mb-2"
                                />
                                <CustomTextarea disabled />
                            </Col>
                        </Row>
                        <Row>
                            <Col
                                xs={4}
                                className="d-flex mb-1 align-items-center spaces h-25"
                            >
                                <LabelRequired
                                    label="Ngày chỉ định:"
                                    className="spaces min-w-120 mb-2"
                                />
                                <CustomTextarea value={infoBenhNhan?.layMauBenhPham?.ngayChiDinh || ""} disabled />
                            </Col>
                            <Col
                                xs={4}
                                className="d-flex mb-1 align-items-center spaces h-25"
                            >
                                <LabelRequired
                                    label="Người chỉ định:"
                                    className="spaces min-w-100 mb-2"
                                />
                                <CustomTextarea value={infoBenhNhan?.layMauBenhPham?.nguoiChiDinh || ""} disabled />
                            </Col>
                            <Col
                                xs={4}
                                className="d-flex mb-1 align-items-center spaces h-25"
                            >
                                <LabelRequired
                                    label="Nơi chỉ định:"
                                    className="spaces min-w-100 mb-2"
                                />
                                <CustomTextarea value={infoBenhNhan?.layMauBenhPham?.noiChiDinh || ""} disabled />
                            </Col>
                        </Row>
                        <Row>
                            <Col
                                xs={4}
                                className="d-flex mb-1 align-items-center spaces h-25"
                            >
                                <LabelRequired
                                    label="Bắt đầu lấy mẫu:"
                                    className="spaces min-w-120 mb-2"
                                />
                                <CustomTextarea value={infoBenhNhan?.layMauBenhPham?.daLayMau ? infoBenhNhan?.layMauBenhPham?.batDauLayMau : ""} disabled />
                            </Col>
                            <Col
                                xs={4}
                                className="d-flex mb-1 align-items-center spaces h-25"
                            >
                                <LabelRequired
                                    label="Người lấy mẫu:"
                                    className="spaces min-w-100 mb-2"
                                />
                                <CustomTextarea value={infoBenhNhan?.layMauBenhPham?.daLayMau ? infoBenhNhan?.layMauBenhPham?.nguoiLayMau : ""} disabled />
                            </Col>
                            <Col
                                xs={4}
                                className="d-flex mb-1 align-items-center spaces h-25"
                            >
                                <LabelRequired
                                    label="Nơi lấy mẫu:"
                                    className="spaces min-w-100 mb-2"
                                />
                                <CustomTextarea value={infoBenhNhan?.layMauBenhPham?.noiLayMau || ""} disabled />
                            </Col>
                        </Row>
                        <Row>
                            <Col
                                xs={4}
                                className="d-flex mb-1 align-items-center spaces h-25"
                            >
                                <LabelRequired
                                    label="Người nhận mẫu:"
                                    className="spaces min-w-120 mb-2"
                                />
                                <CustomTextarea disabled />
                            </Col>
                            <Col
                                xs={4}
                                className="d-flex mb-1 align-items-center spaces h-25"
                            >
                                <LabelRequired
                                    label="Tình trạng BN:"
                                    className="spaces min-w-100 mb-2"
                                />
                                <CustomTextarea disabled />
                            </Col>
                        </Row>
                    </div>
                    <div className="table-lay-mau-benh-pham h-100">
                        <BangLayMauBenhPham data={infoBenhNhan?.barCode ? dataLayMauBenhPham : []} />
                    </div>
                    {infoBenhNhan?.barCode && (<div className='d-flex gap-2 justify-content-end spaces mt-6 pb-8'>
                        <Button className='btn-fill'>Gửi hẹn</Button>
                        {(infoBenhNhan?.layMauBenhPham?.daLayMau) ? <>
                            <Button className='btn-fill' onClick={() => setOpenHuyBP(true)}>Hủy lấy mẫu</Button>
                            <Button className='btn-fill' onClick={() => handlePrint(LIST_PHIEU_IN.PHIEU_HEN_TRA_KQ.key)}>Phiếu hẹn trả KQ</Button>
                        </> : <Button className='btn-fill' onClick={handleLayMauBP}>Lấy mẫu</Button>}
                        <Button className='btn-fill' onClick={() => handlePrint(LIST_PHIEU_IN.PHIEU_CHI_DINH.key)}>Phiếu chỉ định</Button>
                        <Button className='btn-fill' onClick={handleInBarcode}>Barcode</Button>
                    </div>)}
                    {
                        <ConfirmDialog title='Thông báo' show={openHuyBP} onYesClick={handleHuyLayMauBP} message='Bạn có muốn hủy mẫu bệnh phẩm này không ?' yes='Có' close='Không' onCloseClick={() => setOpenHuyBP(false)} />
                    }
                    <ComponentPrint
                        open={inPhieu}
                        title={infoPrint?.title}
                        handleClose={() => setInPhieu(false)}
                        data={convertDataBenhNhan(infoBenhNhan as IBenhNhan)}
                        template={infoPrint?.template}
                    />
                </Col>
            </Row>

        </div>
    )
}

export default LayMauBenhPham