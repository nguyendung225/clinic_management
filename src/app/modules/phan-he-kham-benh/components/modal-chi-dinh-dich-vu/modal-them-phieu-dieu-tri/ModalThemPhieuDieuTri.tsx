import { useFormik } from 'formik'
import { useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import Autocomplete from '../../../../component/AutocompleteObject'
import InputSearch from '../../../../component/InputSearch'
import LabelRequired from '../../../../component/LabelRequired'
import CustomTextarea from '../../../../component/custom-textarea/CustomTextarea'
import { TableCustom } from '../../../../component/table/table-custom/TableCustom'
import { PhieuDieuTriColumn, PhieuDieuTriCuColumn } from '../../../columns/modal-phieu-dieu-tri/ColumnModalPhieuDieuTri'
import { CHON_LOAI_PHIEU_DATA } from '../../FakeData'
import ModalLuuMau from '../ModalLuuMau'
import DsMauPhieuDieuTriModal from '../modal-ds-mau-phieu-dieu-tri/DsMauPhieuDieuTriModal'
import DsPhieuDieuTriCuModal from './DsPhieuDieuTriCuModal'
import TextValidator from '../../../../component/TextValidator'
import { ObjectSelectAutocomplete } from '../../../../phan-he-tiep-nhan-thanh-toan/models/PhanHeTiepNhanModel'
import { CODE_LOAI_PHIEU } from '../../../constants/ChiDinhDVConst'

type Props = {
    handleClose: () => void
    className?: string
}

const ModalThemPhieuDieuTri = ({
    handleClose,
    className,
}: Props) => {
    const [shouldOpenLuuMauModal, setShouldOpenLuuMauModal] = useState<boolean>(false);
    const [shouldOpenDsMauPhieuDieuTriModal, setShouldOpenDsMauPhieuDieuTriModal] = useState<boolean>(false);
    const [shouldOpenDsPhieuDieuTriCuModal, setShouldOpenDsPhieuDieuTriCuModal] = useState<boolean>(false);
    const [loaiPhieu, setLoaiPhieu] = useState<ObjectSelectAutocomplete | null>(null);
    const checkColumnLoaiPhieu = loaiPhieu?.code === CODE_LOAI_PHIEU.MAU_PHIEU_DIEU_TRI ? PhieuDieuTriColumn : PhieuDieuTriCuColumn
    console.log(loaiPhieu);

    const handleSubmit = () => {
        handleClose();
    }

    const formik = useFormik({
        initialValues: {
            ghiChu: "",
        },
        onSubmit: handleSubmit
    })

    const handleSelectOption = (option: ObjectSelectAutocomplete, name: string) => {
    }

    return (
        <>
            <Modal
                show={true} onHide={handleClose}
                centered className={`dialog-background ${className}`}
                size='xl'
            >
                <Modal.Header closeButton className='header-modal'>
                    <Modal.Title>
                        Thêm phiếu điều trị
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col xs={3}>
                            <div className='border h-100 d-flex flex-column justify-content-between'>
                                <InputSearch placeholder='Tìm kiếm' handleChange={() => { }} />
                                <TableCustom columns={checkColumnLoaiPhieu} data={[]} />
                                <Autocomplete
                                    options={CHON_LOAI_PHIEU_DATA}
                                    onChange={(option) => setLoaiPhieu(option)}
                                />
                            </div>
                        </Col>
                        <Col xs={9}>
                            <Form className="h-100">
                                <Row>
                                    <Col xs={4} className="d-flex mb-3 align-items-center text-lable-input">
                                        <LabelRequired
                                            label="Người nhập:"
                                            className="min-w-125px mb-1"
                                        />
                                        <CustomTextarea disabled marginUnderline={8} className='spaces width-55' />
                                    </Col>
                                    <Col xs={5} className="d-flex mb-3 align-items-center text-lable-input">
                                        <LabelRequired label="Ngày y lệnh" className="min-w-85px" />
                                        <Autocomplete
                                            options={[]}
                                            name="ngayYLenh"
                                            className="autocomplete-custom radius spaces width-100 "
                                        />
                                    </Col>
                                    <Col xs={3} className="d-flex mb-3 align-items-center text-lable-input">
                                        <a href="/" onClick={(e) => {
                                            e.preventDefault();
                                        }}>
                                            <u>Cập nhật từ phiếu theo dõi chức năng sống gần nhất</u>
                                        </a>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs className="d-flex mb-3 align-items-center text-lable-input">
                                        <LabelRequired label="Mạch (lần/phút)" className="min-w-125px" />
                                        <TextValidator
                                            name="mach"
                                        />
                                    </Col>
                                    <Col xs className="d-flex mb-3 align-items-center text-lable-input">
                                        <LabelRequired label="Nhiệt độ (C)" className="min-w-100px" />
                                        <TextValidator
                                            name="nhietDo"
                                        />
                                    </Col>
                                    <Col xs={4} className="d-flex mb-3 align-items-center">
                                        <div className='d-flex'>
                                            <LabelRequired label="Huyết áp (mmHg)" className="min-w-125px" />
                                            <TextValidator
                                                name="huyetAp1"
                                                className="min-w-55px"
                                            />
                                        </div>
                                        <div className='mx-2'>/</div>
                                        <TextValidator
                                            name="huyetAp2"
                                        />
                                    </Col>
                                    <Col xs={3} className="d-flex mb-3 align-items-center text-lable-input">
                                        <div className='d-flex'>
                                            <LabelRequired
                                                label="CrCl:"
                                                className='min-w-40px mb-1'
                                            />
                                            <CustomTextarea disabled
                                                marginUnderline={8}
                                                className="spaces width-40"
                                            />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs className="d-flex mb-3 align-items-center text-lable-input">
                                        <LabelRequired label="Nhịp thở (lần/phút)" className="min-w-125px" />
                                        <TextValidator
                                            name="nhipTho"
                                        />
                                    </Col>
                                    <Col xs className="d-flex mb-3 align-items-center text-lable-input">
                                        <LabelRequired label="Cân nặng (kg)" className="min-w-100px" />
                                        <TextValidator
                                            name="canNang"
                                        />
                                    </Col>
                                    <Col xs={2} className="d-flex mb-3 align-items-center text-lable-input">
                                        <LabelRequired label="Chiều cao (cm)" className="min-w-125px" />
                                        <TextValidator
                                            name="chieuCao"
                                            className="min-w-40px"
                                        />
                                    </Col>
                                    <Col xs={5} className="d-flex mb-3 ps-7 align-items-center text-lable-input">
                                        <div className='d-flex spaces ml-20'>
                                            <LabelRequired
                                                label="BMI (kg/m3): "
                                                className='min-w-90px mb-1'
                                            />
                                            <CustomTextarea disabled
                                                marginUnderline={8}
                                                className="spaces width-25"
                                            />
                                        </div>
                                        <div className='d-flex ps-2'>
                                            <LabelRequired
                                                label="Diện tích da (m2): "
                                                className='spaces min-w-120 mb-1'
                                            />
                                            <CustomTextarea disabled
                                                marginUnderline={8}
                                                className="spaces width-25"
                                            />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs className="d-flex mb-3 align-items-center text-lable-input">
                                        <LabelRequired label="SP02(%)" className="min-w-125px" />
                                        <TextValidator
                                            name="SPO2"
                                        />
                                    </Col>
                                    <Col xs className="d-flex mb-3 align-items-center text-lable-input">
                                        <LabelRequired label="TargetAUC" className="min-w-100px" />
                                        <TextValidator
                                            name="targetAUC"
                                        />
                                    </Col>
                                    <Col xs={2} className="d-flex mb-3 align-items-center text-lable-input">
                                        <LabelRequired label="Creatinin" className="min-w-125px" />
                                        <TextValidator
                                            name="creatinin"
                                            className="min-w-40px"
                                        />
                                    </Col>
                                    <Col xs={5} className="d-flex mb-3 ps-7 align-items-center text-lable-input">
                                        <div className='d-flex spaces ml-20'>
                                            <LabelRequired
                                                label="eGFR:"
                                                className=' min-w-90px mb-1'
                                            />
                                            <CustomTextarea disabled
                                                marginUnderline={8}
                                                className="spaces width-25"
                                            />
                                        </div>
                                        <div className='d-flex ps-2'>
                                            <LabelRequired
                                                label="CarboplatinDose: "
                                                className='spaces min-w-120 mb-1'
                                            />
                                            <CustomTextarea disabled
                                                marginUnderline={8}
                                                className="spaces width-25"
                                            />
                                        </div>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col xs={12} className="d-flex mb-3 align-items-center text-lable-input">
                                        <LabelRequired label="Khám toàn thân" className="min-w-125px" />
                                        <TextValidator
                                            name="khamToanThan"
                                            className="w-100"
                                            as="textarea"
                                            rows="3"
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} className="d-flex mb-3 align-items-center text-lable-input">
                                        <LabelRequired label="Triệu chứng" className="min-w-125px" />
                                        <TextValidator
                                            name="trieuChung"
                                            className="w-100"
                                            as="textarea"
                                            rows="3"
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} className="d-flex mb-3 align-items-center text-lable-input">
                                        <LabelRequired label="Thuốc tự túc" className="min-w-125px" />
                                        <TextValidator
                                            name="thuocTuTuc"
                                            className="w-100"
                                            as="textarea"
                                            rows="3"
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12}>
                                        <Row>
                                            <Col xs className="d-flex mb-3 pe-0 align-items-center text-lable-input">
                                                <LabelRequired label="Chẩn đoán" className="min-w-125px" />
                                                <Autocomplete
                                                    options={[]}
                                                    name="chanDoan"
                                                    className="autocomplete-custom radius spaces width-100 "
                                                />
                                            </Col>
                                            <Col xs className="d-flex mb-3 ps-0 align-items-center text-lable-input">
                                                <Autocomplete
                                                    options={[]}
                                                    name="benhKemTheo"
                                                    className="autocomplete-custom radius spaces width-100"
                                                />
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} className="d-flex mb-3 align-items-center text-lable-input">
                                        <LabelRequired label="Bệnh kèm theo" className="min-w-125px" />
                                        <Autocomplete
                                            options={[]}
                                            name="benhKemTheo"
                                            className="autocomplete-custom radius spaces width-100 "
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} className="d-flex mb-3 align-items-center text-lable-input">
                                        <LabelRequired label="Hướng xử lý" className="min-w-125px" />
                                        <Autocomplete
                                            options={[]}
                                            name="huongXuLy"
                                            className="autocomplete-custom radius spaces width-100 "
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12}>
                                        <Row>
                                            <Col xs className="d-flex mb-3 align-items-center text-lable-input">
                                                <LabelRequired label="Chế độ ăn" className="min-w-125px" />
                                                <Autocomplete
                                                    options={[]}
                                                    name="cheDoAn"
                                                    className="autocomplete-custom radius spaces width-100 "
                                                />
                                            </Col>
                                            <Col xs className="d-flex mb-3 align-items-center text-lable-input">
                                                <LabelRequired label="Chế độ chăm sóc" className="min-w-125px" />
                                                <Autocomplete
                                                    options={[]}
                                                    name="cheDoChamSoc"
                                                    className="autocomplete-custom radius spaces width-100 "
                                                />
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} className="d-flex mb-3 align-items-center text-lable-input">
                                        <LabelRequired label="Ghi chú" className="min-w-125px" />
                                        <Autocomplete
                                            options={[]}
                                            name="ghiChu"
                                            className="autocomplete-custom radius spaces width-100 "
                                        />
                                    </Col>
                                    <Col xs={12} className="d-flex mb-3 align-items-center text-lable-input">
                                        <div>
                                            <LabelRequired label="Kết quả CLS:" className="min-w-125px" />
                                            <a href="/" onClick={(e) => {
                                                e.preventDefault();
                                            }}>
                                                <u>Chọn KQCLS</u>
                                            </a>
                                        </div>
                                        <TextValidator
                                            name="trieuChung"
                                            labelClassName="min-w-125px"
                                            className="w-100"
                                            as="textarea"
                                            rows="3"
                                        />
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Modal.Body>

                <Modal.Footer className='d-flex justify-content-end p-2 pe-5'>
                    <Button className="btn-fill" onClick={() => { setShouldOpenLuuMauModal(true) }}>
                        Lưu vào mẫu mới
                    </Button>
                    <Button className="btn-fill">
                        Sử dụng phiếu này
                    </Button>
                    <Button className="btn-fill">
                        Lưu
                    </Button>
                </Modal.Footer>
            </Modal>
            {shouldOpenLuuMauModal && <ModalLuuMau handleClose={() => setShouldOpenLuuMauModal(false)} />}
            {shouldOpenDsMauPhieuDieuTriModal && <DsMauPhieuDieuTriModal handleClose={() => setShouldOpenDsMauPhieuDieuTriModal(false)} />}
            {shouldOpenDsPhieuDieuTriCuModal && <DsPhieuDieuTriCuModal handleClose={() => setShouldOpenDsPhieuDieuTriCuModal(false)} />}

        </>
    )
}

export default ModalThemPhieuDieuTri