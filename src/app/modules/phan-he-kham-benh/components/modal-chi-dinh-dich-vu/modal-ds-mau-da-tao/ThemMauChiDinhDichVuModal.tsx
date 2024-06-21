import React, { useState } from 'react'
import { Button, Col, Container, Form, FormCheck, Modal, Row, } from 'react-bootstrap'
import { Formik } from 'formik'
import TextField from '../../../../component/TextField';
import SelectTree from '../../../../component/SelectTree';
import { DsDichVuTree } from '../../FakeData';
import InputSearch from '../../../../component/InputSearch';
import { DsMauChiDinhDichVuColumn } from './DsMauColumn';
import { TableCustom } from '../../../../component/table/table-custom/TableCustom';

type Props = {
    handleClose: () => void
}
const ThemMauChiDinhDichVuModal = ({
    handleClose,
}: Props) => {
    const [codeCollapses, setCodeCollapses] = useState<string[]>([]);
    const [idSelected, setIdSelected] = useState<string>("");

    return (
        <Container>
            <Modal
                show={true}
                onHide={handleClose}
                size='xl'
                className='dialog__container'
                centered
            >
                <Modal.Header closeButton className='header-modal'>
                    <Modal.Title>
                        Cập nhật mẫu chỉ định dịch vụ
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='dialog__content'>
                    <Formik
                        initialValues={{}}
                        // validationSchema={{}}
                        onSubmit={() => { }}
                    >
                        <Form className="px-7 h-100">
                            <Row>
                                <Col xs={4}>
                                   <TextField 
                                    name="bs"
                                    label="Bác sĩ sử dụng"
                                        labelClassName="min-w-100px"
                                   />
                                </Col>
                                <Col xs={3}>
                                    <TextField
                                        name="maDon"
                                        label="Mã đơn mẫu"
                                        labelClassName="min-w-85px"
                                    />
                                </Col>
                                <Col xs={5}>
                                    <TextField
                                        name="tenDon"
                                        label="Tên đơn mẫu"
                                        labelClassName="min-w-100px"
                                    />
                                </Col>
                            </Row>
                        </Form>
                    </Formik>

                    <div className="spaces h-100 d-flex mt-10">
                        <SelectTree
                            codeCollapses={codeCollapses}
                            handleChangeCollapsesCode={setCodeCollapses}
                            idSelected={idSelected}
                            handleChangeSelectId={setIdSelected}
                            selectTree={DsDichVuTree as any}
                            className='spaces width-25 h-50vh overflow-auto'
                        />
                        <div className='w-100'>
                            <InputSearch placeholder='Tìm kiếm' handleChange={() => { }} />
                            <TableCustom
                                columns={DsMauChiDinhDichVuColumn}
                                data={[]}
                                minHeight={300}
                            />
                            <div className='d-flex spaces p-8'>
                                <FormCheck
                                    type="checkbox"
                                    label="Mặc định"
                                    className="min-w-150px d-flex align-items-end gap-2"
                                />
                                <FormCheck
                                    type="checkbox"
                                    label="BHYT"
                                    className="min-w-150px d-flex align-items-end gap-2"
                                />
                                <FormCheck
                                    type="checkbox"
                                    label="BHYT + DV"
                                    className="min-w-150px d-flex align-items-end gap-2"
                                />
                                <FormCheck
                                    type="checkbox"
                                    label="Viện phí"
                                    className="min-w-150px d-flex align-items-end gap-2"
                                />
                                <FormCheck
                                    type="checkbox"
                                    label="Dịch vụ"
                                    className="min-w-150px d-flex align-items-end gap-2"
                                />
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className='d-flex justify-content-end p-2 pe-5'>
                    <Button className="btn-fill" onClick={handleClose}>
                      Lưu
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}

export default ThemMauChiDinhDichVuModal