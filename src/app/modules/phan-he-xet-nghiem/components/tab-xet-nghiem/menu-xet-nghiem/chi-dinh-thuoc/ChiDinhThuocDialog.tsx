import { Form, Formik } from 'formik';
import { useState } from 'react';
import { Button, Col, Form as FormBS, Modal, Row } from 'react-bootstrap';
import Autocomplete from '../../../../../component/AutocompleteObject';
import SelectTree from '../../../../../component/SelectTree';
import TextField from '../../../../../component/TextField';
import { TableCustom } from '../../../../../component/table/table-custom/TableCustom';
import { columnsDSMauChiDinhThuoc, columnsPhieuChiDinh } from '../../../../const/Columns';
import { TreeChiDinhThuoc } from '../../../../const/constants';
import LabelRequired from './../../../../../component/LabelRequired';
type Props = {
    handleClose: () => void
}

export default function ChiDinhThuocDialog({ handleClose }: Props) {
    const [codeCollapses, setCodeCollapses] = useState<string[]>([]);
    const [idSelected, setIdSelected] = useState<string>("");

    return (
        <Modal show animation centered className="" size='xl' onHide={handleClose}>
            <Formik<any>
                initialValues={{}}
                validateOnChange={true}
                onSubmit={() => { }}
            >
                {({ touched, errors, setFieldValue, values }) => (
                    <Form id="form-thuoc">
                        <Modal.Header className="py-3 header-modal">
                            <Modal.Title className="text-pri">
                                Chỉ định thuốc
                            </Modal.Title>
                            <button
                                className="btn-close"
                                onClick={handleClose}
                            ></button>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="d-flex gap-4">
                                <Button className="btn-fill">
                                    Đơn thuốc mẫu
                                </Button>
                                <Button className="btn-fill">
                                    Đơn thuốc cũ
                                </Button>
                            </div>
                            <Row className='mt-4'>
                                <Col xs={12}>
                                    <div className="d-flex align-items-center pb-1">
                                        <div className='spaces width-25 pe-4'>
                                            <TextField
                                                className="w-100"
                                                label="Ngày y lệnh"
                                                name="ngayYLenh"
                                                type="date"
                                                labelClassName="min-w-100px"
                                            />
                                        </div>
                                        <div className="d-flex spaces width-65 pe-4">
                                            <div className='d-flex spaces width-41'>
                                                <LabelRequired label='Chẩn đoán' className='min-w-100px' />
                                                <Autocomplete
                                                    placeholder=''
                                                    options={[]}
                                                    className="autocomplete-custom-tiep-nhan radius spaces  h-26 w-100"
                                                />

                                            </div>
                                            <Autocomplete
                                                placeholder=''
                                                options={[]}
                                                className="autocomplete-custom-tiep-nhan radius spaces  h-26 width-60"
                                            />

                                        </div>
                                        <u className="text-pri spaces width-10 pe-4">
                                            <LabelRequired label="Bệnh kèm theo" className="min-w-95px text-pri" />
                                        </u>
                                    </div>
                                    <div className="d-flex align-items-center pb-1">
                                        <div className='spaces width-25 pe-4'>
                                            <TextField
                                                className="w-100"
                                                label="Bác sĩ điều trị"
                                                name="ngayYLenh"
                                                type="text"
                                                labelClassName="min-w-100px"
                                            />
                                        </div>
                                        <div className='spaces width-26'>
                                            <TextField
                                                label="Ngày tái khám"
                                                name="ngayYLenh"
                                                type="date"
                                                labelClassName="min-w-100px"
                                            />
                                        </div>
                                        <div className='spaces width-23 px-4'>
                                            <TextField
                                                label="Sau(Ngày)"
                                                name="ngayYLenh"
                                                type="text"
                                                labelClassName="min-w-70px"
                                            />
                                        </div>
                                        <div className='spaces width-26 pe-4'>
                                            <TextField
                                                className="w-100"
                                                label="Lời dặn bác sĩ"
                                                name="ngayYLenh"
                                                type="text"
                                                labelClassName="min-w-100px"
                                            />
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center pb-4">
                                        <div className='spaces width-25 pe-4'>
                                            <TextField
                                                className="spaces"
                                                label="Đợt dùng thuốc"
                                                name="ngayYLenh"
                                                type="text"

                                                labelClassName="min-w-100px"
                                            />
                                        </div>
                                        <div className='spaces width-26'>
                                            <TextField
                                                label="Từ ngày"
                                                name="ngayYLenh"
                                                type="date"
                                                labelClassName="min-w-100px"
                                            />
                                        </div>
                                        <div className='spaces width-23 px-4'>
                                            <TextField
                                                className="spaces"
                                                label="Đến ngày"
                                                name="ngayYLenh"
                                                type="date"
                                                labelClassName="min-w-70px"
                                            />
                                        </div>
                                        <div className='spaces width-26 pe-4'>
                                            <FormBS.Check label="Thu tiền" className='d-flex align-items-center' />
                                        </div>
                                    </div>

                                </Col>
                                <Col xs={3} className='border px-0'>
                                    <div className="text-pri fw-bold fs-4 spaces">Cập nhật mẫu chỉ định thuốc</div>
                                    <Autocomplete
                                        placeholder='Kho thuốc nội trú'
                                        options={[]}
                                        className="autocomplete-custom-tiep-nhan radius spaces h-32 "
                                    />
                                    <SelectTree
                                        className="w-100 border border-top-0"
                                        codeCollapses={codeCollapses}
                                        handleChangeCollapsesCode={setCodeCollapses}
                                        idSelected={idSelected}
                                        handleChangeSelectId={setIdSelected}
                                        selectTree={TreeChiDinhThuoc}
                                    />
                                </Col>
                                <Col xs="9">
                                    <div className="d-flex mb-4px">
                                        <div className="spaces width-64 d-flex pe-4">
                                            <TextField

                                                label="Tên thuốc"
                                                name="maDonMau"
                                                className="spaces width-100"
                                                labelClassName="ms-0 min-w-90px"
                                            />
                                        </div>
                                        <div className="d-flex spaces width-18 pe-4">
                                            <TextField
                                                label="Tồn kho"
                                                name="maDonMau"
                                                className=""
                                                labelClassName="ms-0 min-w-80px"
                                            />
                                        </div>
                                        <div className="d-flex spaces width-18">
                                            <TextField
                                                label="Đóng gói"
                                                name="maDonMau"
                                                className=""
                                                labelClassName="ms-0 min-w-60px"
                                            />
                                        </div>
                                    </div>
                                    <div className="d-flex mb-4px">
                                        <div className="spaces width-30 pe-4">
                                            <TextField
                                                label="Đơn vị"
                                                name="nongDo"
                                                labelClassName="ms-0 min-w-90px"
                                            />
                                        </div>
                                        <div className="spaces width-34 pe-4">
                                            <TextField
                                                label="Số lượng"
                                                name="dongGoi"
                                                labelClassName="ms-0 min-w-80px"
                                            />
                                        </div>
                                        <div className="spaces width-36">
                                            <TextField

                                                label="Đường dùng"
                                                name="donViTinh"
                                                labelClassName="ms-0 min-w-80px"
                                            />
                                        </div>
                                    </div>
                                    <div className="d-flex mb-4px">
                                        <div className="spaces width-40 d-flex pe-4">
                                            <TextField
                                                className="w-100"
                                                label="HDSD"
                                                name="donViTinh"
                                                labelClassName="ms-0 min-w-90px"
                                            />
                                        </div>
                                        <div className="d-flex spaces width-60">
                                            <div className='spaces w-20 pe-4'>
                                                <TextField
                                                    className=" w-100"
                                                    label="Sáng"
                                                    name="soLanNgay"
                                                    labelClassName="ms-0 min-w-40px"
                                                />
                                            </div>
                                            <div className='spaces width-20 pe-4'>
                                                <TextField
                                                    className=" w-100"
                                                    label="Trưa"
                                                    name="soLanNgay"
                                                    labelClassName="ms-0 min-w-40px"
                                                />
                                            </div>
                                            <div className='spaces width-20 pe-4'>
                                                <TextField
                                                    className=" w-100"
                                                    label="Chiều"
                                                    name="soLanNgay"
                                                    labelClassName="ms-0 min-w-40px"
                                                />
                                            </div>
                                            <div className='spaces width-18 pe-4'>
                                                <TextField
                                                    className=" w-100 "
                                                    label="Tối"
                                                    name="soLanNgay"
                                                    labelClassName="ms-0 min-w-30px"
                                                />
                                            </div>
                                            <div className=' spaces width-22'>
                                                <TextField
                                                    className=" w-100"
                                                    label="Số ngày"
                                                    name="soNgay"
                                                    labelClassName="ms-0 min-w-60px"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='overflow-scroll spaces h-calc-vh-360'>
                                        <TableCustom<any>
                                            verticalScroll
                                            columns={columnsDSMauChiDinhThuoc}
                                            data={[]}
                                            className="mt-3"
                                            minHeight={250}
                                        />
                                        <div className="fw-bold fs-4">Phiếu chỉ định</div>
                                        <TableCustom<any>
                                            verticalScroll
                                            columns={columnsPhieuChiDinh}
                                            data={[]}
                                            className="mt-3"
                                            minHeight={250}
                                        />
                                    </div>

                                </Col>
                            </Row>

                        </Modal.Body>
                        <Modal.Footer className="d-flex justify-content-end py-1">
                        </Modal.Footer>
                    </Form>
                )}
            </Formik>

        </Modal>
    )
}