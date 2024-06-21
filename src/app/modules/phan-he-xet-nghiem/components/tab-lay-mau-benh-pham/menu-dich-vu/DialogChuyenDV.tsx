import moment from 'moment'
import { useCallback, useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import { Column } from 'react-table'
import TextValidator from '../../../../component/TextValidator'
import { dataPhongThucHien } from '../../../const/constants'
import CombinedTable from '../../../../component/table/combined-table/CombinedTable'
import { TableCustomHeader } from '../../../../component/table/components/TableCustomHeader'
import { TableCustomCell } from '../../../../component/table/components/TableCustomCell'
import { columnsPhongThucHien } from '../../../const/Columns'

type Props = {
    handleClose: () => void
    handleChuyenPhongDV: (phong: any) => void

}

export default function DialogChuyenDV({ handleClose, handleChuyenPhongDV }: Props) {
    const [statusDV, setStatusDV] = useState<boolean>(true)

    const [rowSelected, setRowSelected] = useState()
    const getRowsSelected = useCallback((row: any) => {
        setRowSelected(row)
    }, [])

    return (
        <Modal show={true} centered onHide={handleClose} size="lg">
            <Modal.Header closeButton className="py-5 header-modal">
                <Modal.Title className="title-dialog-color">
                    Phòng thực hiện xét nghiệm
                </Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <Row className='gap-4'>
                    <Col xs={5}>
                        <div className='d-flex align-items-center'>
                            <label className="min-w-125px form-label m-0">Thời gian thực hiện: </label>
                            <TextValidator
                                type="datetime-local"
                                defaultValue={moment().format("YYYY-MM-DD HH:mm:ss")}
                                
                            />
                        </div>
                    </Col>
                    <Col xs={12}>
                        <CombinedTable data={dataPhongThucHien} singleSelectTable userColumns={columnsPhongThucHien} getRowsSelected={getRowsSelected} />
                    </Col>
                </Row>

            </Modal.Body>

            <Modal.Footer className="d-flex justify-content-between py-2">
                <div className='d-flex gap-4'>
                    <Form.Check type='radio' onChange={() => setStatusDV(prev => !prev)} checked={statusDV} label="Tất cả các phòng xét nghiệm" className='d-flex align-items-center gap-2' />
                    <Form.Check type='radio' onChange={() => setStatusDV(prev => !prev)} checked={!statusDV} label="Các phòng được cấu hình" className='d-flex align-items-center gap-2' />
                </div>
                <div className='d-flex gap-2'>
                    <Button className="btn-fill min-w-80px" size="sm" onClick={() => {
                        handleChuyenPhongDV(rowSelected)
                    }}>
                        Lưu
                    </Button>
                    <Button
                        onClick={handleClose}
                        className="btn-fill min-w-80px"
                        size="sm"
                    >
                        Hủy
                    </Button>
                </div>
            </Modal.Footer>
        </Modal>
    )
}