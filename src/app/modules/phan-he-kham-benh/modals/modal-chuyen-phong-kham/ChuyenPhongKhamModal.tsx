import React from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import AutocompleteObject from '../../../component/AutocompleteObject';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { useIntl } from 'react-intl';
import { getDSPhongKham, getDanhSachYeuCauKham } from '../../../phan-he-tiep-nhan-thanh-toan/services/TiepNhanServices';
import { SEARCH_OBJECT_MAX_SIZE } from '../../../utils/Constant';


type modalProps = {
    handleCloseModal?: () => void;
    shouldOpenChuyenPKModal: boolean;
}

export const ChuyenPhongKhamModal = (props: modalProps) => {
    const { handleCloseModal, shouldOpenChuyenPKModal } = props;
    const intl = useIntl();
    const validationSchema = Yup.object({
        tenDichVu: Yup.object().required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })).nullable(),
        phongKham: Yup.object().required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })).nullable()
    });

    const handleSubmit = (values: any) => {

    }

    const initialValues: any = {
        tenDichVu: null,
        phongKham: null
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: handleSubmit,
    });


    const handleChangeSelect = (e: any, name: string) => {
        formik?.setFieldValue(name, e)
    }
    return (
        <Modal
            className='modal fade'
            role='dialog'
            show={shouldOpenChuyenPKModal}
            dialogClassName='modal-md'
            aria-hidden='true'
            centered
        >
            <Modal.Header closeButton onHide={handleCloseModal} className="p-4 header-modal">
                <Modal.Title className='text-pri'>Chuyển phòng khám</Modal.Title>
            </Modal.Header>
            <Form onSubmit={formik.handleSubmit}>
                <Modal.Body>
                    <Form.Group as={Row} className="mb-3 align-items-center">
                        <Form.Label column sm="3">Dịch vụ</Form.Label>
                        <Col sm="9">
                            <AutocompleteObject
                                options={[]}
                                value={formik?.values?.tenDichVu || null}
                                name="tenDichVu"
                                onChange={(selectedOption) => {
                                    handleChangeSelect(selectedOption, "tenDichVu");
                                }}
                                getOptionLabel={option => `${option.code} - ${option.name}`}
                                touched={formik?.touched?.tenDichVu}
                                errors={formik?.errors?.tenDichVu}
                                searchFunction={getDanhSachYeuCauKham}
                                searchObject={{}}
                                urlData={"data.data"}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3 align-items-center">
                        <Form.Label column sm="3">Phòng khám</Form.Label>
                        <Col sm="9">
                            <AutocompleteObject
                                options={[]}
                                value={formik?.values?.phongKham || ""}
                                name="phongKham"
                                onChange={(selectedOption) => handleChangeSelect(selectedOption, "phongKham")}
                                searchFunction={formik?.values.tenDichVu?.id ? getDSPhongKham : undefined}
                                searchObject={{...SEARCH_OBJECT_MAX_SIZE }}
                                getOptionLabel={option => `${option.code} - ${option.name}`}
                                touched={formik?.touched?.phongKham}
                                errors={formik?.errors?.phongKham}
                            />
                        </Col>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer className='pt-2 pb-2 justify-content-center'>
                    <Button
                        type='submit'
                        className='btn-navy min-w-60px'
                    >
                        {'Lưu'}
                    </Button>
                    <Button
                        className='btn-navy min-w-60px'
                        onClick={handleCloseModal}
                    >
                        {'In phiếu khám'}
                    </Button>
                    <Button
                        className='btn-navy-outlined min-w-60px'
                        onClick={handleCloseModal}
                    >
                        {'Đóng'}
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default ChuyenPhongKhamModal