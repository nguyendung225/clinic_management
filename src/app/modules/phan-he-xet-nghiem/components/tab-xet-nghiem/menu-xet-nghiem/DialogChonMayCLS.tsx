import { useCallback, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import CombinedTable from '../../../../component/table/combined-table/CombinedTable';
import { mayCLSColumn } from '../../../const/Columns';
import { dsMayCLS } from '../../../const/constants';
type Props = {
    handleClose: () => void
    selectMayCLS:any
}

export default function DialogChonMayCLS({ handleClose, selectMayCLS }: Props) {
    const [selection, setSelection] = useState<any>()
    const getRowsSelected = useCallback((row:any) => {
        setSelection(row)
      }, [])
    
    return (
        <Modal show animation centered className="dialog-background" size='lg' onHide={handleClose}>
            <Modal.Header className="py-3 header-modal">
                <Modal.Title className="text-pri">
                    Chọn máy thực hiện cận lâm sàng
                </Modal.Title>
                <button
                    className="btn-close"
                    onClick={handleClose}
                ></button>
            </Modal.Header>
            <Modal.Body className="py-16 px-24 spaces">
                <CombinedTable
                    data={dsMayCLS}
                    singleSelectTable
                    getRowsSelected={getRowsSelected}
                    userColumns={mayCLSColumn}
                    minHeight={250}
                />
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-end py-1">
                <Button
                    className="btn-fill min-w-80px"
                    type="submit"
                    onClick={()=>{
                        selectMayCLS(selection)
                    }}
                >
                    <span>Lưu</span>
                </Button>
            </Modal.Footer>
        </Modal>
    )
}