import { useCallback, useContext, useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { AppContext } from '../../../appContext/AppContext'
import SearchAdvanced from '../../../component/SearchAdvanced'
import { KEY_DS_TAB_TIEP_DON } from '../../../utils/Constant'
import { localStorageItem } from '../../../utils/LocalStorage'
import { PhanHeTiepDonContext } from '../../PhanHeTiepDonContext'
import { danhSachTabTiepDon } from '../../const/PhanHeTiepDonConst'
import BenhAnNgoaiTru from '../benh-an-ngoai-tru/BenhAnNgoaiTru'
import ChiDinhThuocModal from '../modal-thuoc/ChiDinhThuocModal'
import ChuyenPhongKhamModal from './ChuyenPhongKhamModal'
import GridDsBenhNhan from './GridDsBenhNhan'
import ThongTinBenhNhan from './ThongTinBenhNhan'
import { encountersApi } from '../../service/KhamBenhService'
import { TablePagination } from '../../../component/TablePagination'
import { handlePagesChange, handleRowsPerPageChange, rowsForPage } from '../../../utils/PageUtils'
import { searchPatientParams } from '../../models/IParams'
import { toast } from 'react-toastify'

export const DSBenhNhanKhamBenh = () => {
    const [shouldOpenThuocModal, setShouldOpenThuocModal] = useState<boolean>(false);
    const [shouldOpenChuyenPKModal, setShouldOpenChuyenModalPK] = useState<boolean>(false);
    const [shouldOpenBenhAnNgoaiTruDialog, setShouldOpenBenhAnNgoaiTruDialog] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const [rowsPerPage, setRowsPerPage] = useState<number>(10);
    const [searchPatientParams, setSearchPatientParams] = useState<searchPatientParams>({
        pageIndex: page,
        pageSize: rowsPerPage
    });

    const { setEventKey } = useContext(AppContext);
    const { benhNhanInfo, setBenhNhanList, totalPages, totalElements, setTotalPages } = useContext(PhanHeTiepDonContext);

    const removeTabInfo = useCallback(() => {
        let keyTabList = localStorageItem.get(KEY_DS_TAB_TIEP_DON) ? localStorageItem.get(KEY_DS_TAB_TIEP_DON) : [];
        let eventKey = danhSachTabTiepDon[4].eventKey;
        let newKeyTablist = keyTabList.filter((item: string) => item !== eventKey);
        localStorageItem.set(KEY_DS_TAB_TIEP_DON, newKeyTablist);
        setEventKey('');
    },[setEventKey])
    
    useEffect(() => {
        if(!benhNhanInfo){
            removeTabInfo();
        }
    },[benhNhanInfo, removeTabInfo])

    const handleOpenThuocModal = () => {
        setShouldOpenThuocModal(true);
    }

    const handleCloseModal = () => {
        setShouldOpenThuocModal(false);
        setShouldOpenChuyenModalPK(false);
    }

    const handleChuyenPhongKham = () => {
        setShouldOpenChuyenModalPK(true);
    }

    const handleAddTab = (eventKey: string) => {
        let data = localStorageItem.get(KEY_DS_TAB_TIEP_DON) ? localStorageItem.get(KEY_DS_TAB_TIEP_DON) : [];
        if (!data.includes(eventKey)) {
            data.push(eventKey);
            data.sort((a: string, b: string) => a > b ? 1 : -1);
            localStorageItem.set(KEY_DS_TAB_TIEP_DON, data)
        }
        setEventKey(eventKey)
    }

    useEffect(() => {
        const params = {
            ...searchPatientParams,
            pageSize: rowsPerPage,
            pageIndex: page
        }
        try {
            encountersApi.searchPatient(params)
            .then(data => {
                setBenhNhanList(data?.data?.data?.content);
                setTotalPages(data?.data?.data?.totalPages);
            })
            .catch(err => toast.error(`Lỗi gọi API ${err}`));
        } catch (error) {
            toast.error(`Đã có lỗi xảy ra ${error}`);
        }
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[setBenhNhanList, page, rowsPerPage])

    const handleSearchPatient = (objSearch: any) => {
        setSearchPatientParams({...searchPatientParams, ...objSearch});
        try {
            encountersApi.searchPatient({pageSize: rowsPerPage, pageIndex: page,...objSearch})
            .then(data => setBenhNhanList(data?.data?.data?.content))
            .catch(err => toast.error(`Lỗi gọi API ${err}`));
        } catch (error) {
            toast.error(`Đã có lỗi xảy ra ${error}`);
        }
    }

    const handleOpenBANgoaiTruDialog = () => {
        setShouldOpenBenhAnNgoaiTruDialog(true);
    }

    const handleCloseDialog = () => {
        setShouldOpenBenhAnNgoaiTruDialog(false);
    }

    return (
        <>
            <Row className='full-width m-0'>
                <Col sm="9" className='box_shadow-93'>
                    <div className='ds-benh-nhan p-4'>
                        <SearchAdvanced handleSearch={handleSearchPatient}/>
                        <div className='pt-3'>
                            <GridDsBenhNhan />
                            <TablePagination
                                page={page}
                                setPage={setPage}
                                handlePagesChange={handlePagesChange}
                                handleRowsPerPageChange={handleRowsPerPageChange}
                                rowsForPage={rowsForPage}
                                rowsPerPage={rowsPerPage}
                                setRowsPerPage={setRowsPerPage}
                                totalPages={totalPages}
                                totalElements={totalElements}
                            />
                        </div>
                    </div>
                </Col>
                <Col sm="3" className='box_shadow-93 px-4 py-2'>
                    <ThongTinBenhNhan/>
                </Col>
            </Row>
            <div className="flex flex-center py-4 box_shadow-93">
                <Button 
                    className="btn-navy mr-5 w-80px"
                >
                    Bắt đầu
                </Button>
                <Button
                    className="btn-navy mr-5 "
                    onClick={() => handleAddTab(danhSachTabTiepDon[4].eventKey)}
                >
                    Khám bệnh
                </Button>
                <Button className="btn-navy mr-5 ">Chỉ định dịch vụ</Button>
                <Button
                    className="btn-navy mr-5 "
                    onClick={handleOpenThuocModal}
                >
                    Thuốc
                </Button>
                <Button
                    className="btn-navy mr-5 "
                    onClick={handleOpenBANgoaiTruDialog}
                >
                    Bệnh án
                </Button>
                <Button className="btn-navy mr-5 ">Phiếu thu</Button>
                <Button
                    className="btn-navy mr-5 "
                    onClick={handleChuyenPhongKham}
                >
                    Chuyển PK
                </Button>
            </div>

            {shouldOpenThuocModal && (
                <ChiDinhThuocModal
                    shouldOpenThuocModal={shouldOpenThuocModal}
                    handleCloseModal={handleCloseModal}
                />
            )}

            {shouldOpenBenhAnNgoaiTruDialog &&
                <BenhAnNgoaiTru
                    handleClose={handleCloseDialog}
                    open={shouldOpenBenhAnNgoaiTruDialog}
                />}

            {shouldOpenChuyenPKModal && (
                <ChuyenPhongKhamModal
                    shouldOpenChuyenPKModal={shouldOpenChuyenPKModal}
                    handleCloseModal={handleCloseModal}
                />
            )}
        </>
    )
}

export default DSBenhNhanKhamBenh;