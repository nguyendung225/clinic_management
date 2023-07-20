import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { TableCustomV2 } from '../../../component/table-custom-v2/TableCustomV2';
import { PhongKhamInfo } from '../../models/PhongKhamModel';
import { DSPhongKhamColumns } from './DSPhongKhamColumns';
import { CODE, DEFAULT_PAGE_INDEX, DEFAULT_PAGE_SIZE, SELECTION_MODE } from '../../../utils/Constant';
import { getDSPhongKham } from '../../services/TiepNhan';
import { toast } from 'react-toastify';
import { TablePagination } from '../../../component/TablePagination';
import { handlePagesChange, handleRowsPerPageChange, rowsForPage } from '../../../utils/PageUtils';

interface modalProps {
    handleCloseModal?: () => void;
    shouldOpenModalPK: boolean;
    handleSelectRow?: (row: any) => void;
    setFieldValue?: (value: any) => void
}

const data: PhongKhamInfo[] = [
    {
        name: "Phòng khám 1",
        tenBacSi: "Ths. Bác sĩ 1",
        slChoKham: '12',
        slDangKham: '1',
        slDangLamCLS: '20',
    },
    {
        name: "Phòng khám 2",
        tenBacSi: "Ths. Bác sĩ 2",
        slChoKham: '12',
        slDangKham: '1',
        slDangLamCLS: '20',
    },
    {
        name: "Phòng khám 3",
        tenBacSi: "Ts. Bác sĩ 3",
        slChoKham: '12',
        slDangKham: '1',
        slDangLamCLS: '20',
    },
    {
        name: "Phòng khám 4",
        tenBacSi: "Ths. Bác sĩ 4",
        slChoKham: '12',
        slDangKham: '1',
        slDangLamCLS: '20',
    },
]

const GridPhongKhamModal = (props: modalProps) => {
    const { handleCloseModal, shouldOpenModalPK, handleSelectRow, setFieldValue } = props;
    const [selectedPK, setSelectedPK] = useState<PhongKhamInfo[]>([]);
    const [listPhongKham, setListPhongKham] = useState<PhongKhamInfo[]>([]);
    const [page, setPage] = useState<number>(DEFAULT_PAGE_INDEX);
    const [rowsPerPage, setRowsPerPage] = useState<number>(DEFAULT_PAGE_SIZE);
    const [totalElements, setTotalElements] = useState<number>(0);
    const [totalPages, setTotalPages] = useState(0);
    const getSelectedPK = () => {
        setFieldValue?.(selectedPK[0].name)
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
                    setListPhongKham(res?.data?.data?.content)
                    setTotalElements(res?.data?.data?.totalElements)
                    setTotalPages(res?.data?.data?.totalPages)
                }
            }else{
                toast.error('Xảy ra lỗi, vui lòng thử lại!')
            }
        }catch{
            toast.error('Xảy ra lỗi, vui lòng thử lại!')
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
                    <Modal.Header closeButton onHide={handleCloseModal} className='p-4 px-5'>
                        <Modal.Title className='text-pri'>Danh sách phòng khám</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className=' p-5'>
                        <TableCustomV2<PhongKhamInfo>
                            data={listPhongKham}
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
                                totalPages={totalPages}
                                totalElements={totalElements}
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