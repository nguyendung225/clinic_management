import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { PhongKhamInfo } from '../../../phan-he-tiep-nhan-thanh-toan/models/PhongKhamModel';
import { DSPhongKhamColumns } from './DSPhongKhamColumns';
import { CODE, DEFAULT_PAGE_INDEX, DEFAULT_PAGE_SIZE, DEFAULT_TOTAL_ELEMENTS, DEFAULT_TOTAL_PAGES, RESPONSE_MESSAGE, SELECTION_MODE } from '../../../utils/Constant';
import { getDSPhongKham } from '../../../phan-he-tiep-nhan-thanh-toan/services/TiepNhanServices';
import { toast } from 'react-toastify';
import { TablePagination } from '../../../component/table/components/TablePagination';
import { handlePagesChange, handleRowsPerPageChange, rowsForPage } from '../../../utils/PageUtils';
import { TableCustom } from '../../../component/table/table-custom/TableCustom';

interface modalProps {
    handleCloseModal?: () => void;
    shouldOpenModalPK: boolean;
    handleSelectRow?: (row: any) => void;
    onSelectedPhongKham?: (phongKham: any) => void
}

const GridPhongKhamModal = (props: modalProps) => {
    const { handleCloseModal, shouldOpenModalPK, handleSelectRow, onSelectedPhongKham } = props;
    const [selectedPK, setSelectedPK] = useState<PhongKhamInfo[]>([]);
    const [phongKhamData, setPhongKhamData] = useState({
        data: [],
        totalPages: DEFAULT_TOTAL_PAGES,
        totalElements: DEFAULT_TOTAL_ELEMENTS
    });
    const [page, setPage] = useState<number>(DEFAULT_PAGE_INDEX);
    const [rowsPerPage, setRowsPerPage] = useState<number>(DEFAULT_PAGE_SIZE);
    const getSelectedPK = () => {
        onSelectedPhongKham?.(selectedPK[0])
        handleCloseModal?.()
    }
    const getListPhongKham = async() => {
        let searchObject = {
            pageSize: rowsPerPage,
            pageIndex: page
        }
        try{
            let res = await getDSPhongKham(searchObject)
            if(res){
                if(res?.data?.code === CODE.SUCCESS) {
                    setPhongKhamData({
                        data: res?.data?.data?.content,
                        totalPages: res?.data?.data?.totalPages,
                        totalElements: res?.data?.data?.totalElements
                    })
                }
            }else{
                toast.error(RESPONSE_MESSAGE.ERROR)
            }
        }catch{
            toast.error(RESPONSE_MESSAGE.ERROR)
        }
    }
    useEffect(() => {
        getListPhongKham()
    }, [page, rowsPerPage]);
    return (
        <>
            <Modal
                className='modal fade'
                role='dialog'
                show={shouldOpenModalPK}
                dialogClassName='modal-lg'
                aria-hidden='true'
                centered
            >
                <Form>
                    <Modal.Header closeButton onHide={handleCloseModal} className='p-4 px-5 header-modal'>
                        <Modal.Title className='text-pri'>Danh sách phòng khám</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className=' p-5'>
                        <TableCustom<PhongKhamInfo>
                            data={phongKhamData.data}
                            columns={DSPhongKhamColumns}
                            selectionMode={SELECTION_MODE.SINGLE}
                            getSelectedRowsData={setSelectedPK}
                            minHeight={450}
                        />
                        <div className='border border-top-0 border-bottom-0'>
                            <TablePagination
                                page={page}
                                setPage={setPage}
                                rowsPerPage={rowsPerPage}
                                setRowsPerPage={setRowsPerPage}
                                rowsForPage={rowsForPage}
                                handlePagesChange={handlePagesChange}
                                handleRowsPerPageChange={handleRowsPerPageChange}
                                totalPages={phongKhamData.totalPages}
                                totalElements={phongKhamData.totalElements}
                            />
                        </div>

                    </Modal.Body>
                    <Modal.Footer className='pt-2 pb-2 justify-content-center'>
                        <Button
                            onClick={getSelectedPK}
                            className='btn btn-navy p-2 min-w-60px'
                            disabled={selectedPK?.length === 0}
                            size='sm'
                        >
                            {'Chọn'}
                        </Button>
                        <Button
                            className='btn btn-navy-outlined p-2 min-w-60px'
                            onClick={handleCloseModal}
                            size='sm'
                        >
                            {'Đóng'}
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}

export default GridPhongKhamModal;