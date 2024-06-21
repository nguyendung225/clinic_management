import { useFormik } from 'formik'
import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

type Props = {
    open: boolean
    handleClose: () => void
    className?: string
    handleSelectDroplist: (value: any) => void
}

const GhiChuPopup = ({
    open,
    handleClose,
    className,
    handleSelectDroplist
}: Props) => {
    const handleSubmit = () => {
        handleSelectDroplist(formik.values?.ghiChu);
        handleClose();
    }

    const formik = useFormik({
        initialValues: {
            ghiChu: "",
        },
        onSubmit: handleSubmit
    })

    return (
        <Modal 
        show={open} onHide={handleClose} 
        centered className={`dialog-background ${className}`}
        onClick={(e: any) => {
            e.stopPropagation();
        }}
        >
            <Modal.Header closeButton className='header-modal'>
                <Modal.Title>
                    Ghi chú
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control name="ghiChu" as="textarea" rows={3} className='resize-none' onChange={formik.handleChange} />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer className='d-flex justify-content-end p-2 pe-5'>
                <Button className="btn-fill w-60px"
                    onClick={handleSubmit}>
                    Lưu
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default GhiChuPopup