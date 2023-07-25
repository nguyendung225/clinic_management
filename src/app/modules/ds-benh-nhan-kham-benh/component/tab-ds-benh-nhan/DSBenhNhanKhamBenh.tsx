import { useCallback, useContext, useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { AppContext } from '../../../appContext/AppContext'
import SearchAdvanced from '../../../component/SearchAdvanced'
import { KEY_DS_TAB_TIEP_DON } from '../../../utils/Constant'
import { localStorageItem } from '../../../utils/LocalStorage'
import { danhSachTabTiepDon, trangThaiKham } from '../../const/PhanHeTiepDonConst'
import BenhAnNgoaiTru from '../benh-an-ngoai-tru/BenhAnNgoaiTru'
import ChiDinhThuocModal from '../modal-thuoc/ChiDinhThuocModal'
import ChuyenPhongKhamModal from './ChuyenPhongKhamModal'
import GridDsBenhNhan from './GridDsBenhNhan'
import ThongTinBenhNhan from './ThongTinBenhNhan'
import { PhanHeTiepDonContext } from '../../PhanHeTiepDonContext'
import { toast } from "react-toastify";

type Props = {}

export const DSBenhNhanKhamBenh = (props: Props) => {
    const [shouldOpenThuocModal, setShouldOpenThuocModal] = useState<boolean>(false);
    const [shouldOpenChuyenPKModal, setShouldOpenChuyenModalPK] = useState<boolean>(false);
    const [shouldOpenBenhAnNgoaiTruDialog, setShouldOpenBenhAnNgoaiTruDialog] = useState<boolean>(false);
    const [isPaid, setIsPaid] = useState<boolean>(false);
    const [isStart, setIsStart] = useState<boolean>(false);
    const { setEventKey } = useContext(AppContext);
    const { benhNhanInfo, setBenhNhanInfo, setBenhNhanList, benhNhanList } = useContext(PhanHeTiepDonContext);

    const removeTabInfo = useCallback(() => {
        let keyTabList = localStorageItem.get(KEY_DS_TAB_TIEP_DON) ? localStorageItem.get(KEY_DS_TAB_TIEP_DON) : [];
        let eventKey = danhSachTabTiepDon[4].eventKey;
        let newKeyTablist = keyTabList.filter((item: string) => item !== eventKey);
        localStorageItem.set(KEY_DS_TAB_TIEP_DON, newKeyTablist);
        setEventKey('');
    },[setEventKey])
    
    useEffect(() => {
        if(!benhNhanInfo){
            setIsPaid(false);
            setIsStart(false);
            removeTabInfo();
            return
        }
        let tongChiPhi = benhNhanInfo.tongChiPhi;
        let daNop = benhNhanInfo.daNop;
        if(tongChiPhi && daNop && tongChiPhi === daNop){
            setIsPaid(true);
        }else{
            setIsPaid(false);
            removeTabInfo();
        }
    },[benhNhanInfo, setEventKey, removeTabInfo])

    const handleStart = () => {
        if(!isPaid && benhNhanInfo){
            toast.warning("Chưa thanh toán");
        }else if(!benhNhanInfo){
            toast.warning("Vui lòng chọn bệnh nhân");
        }else{
            setIsStart(true);
            const newInfo = {
                ...benhNhanInfo,
                trangThai: isPaid ? trangThaiKham.dangKham : trangThaiKham.choKham
            }
            const index = benhNhanList.findIndex(item => item.maBenhNhan === newInfo.maBenhNhan);
            benhNhanList[index] = newInfo;
            setBenhNhanInfo(newInfo)
            setBenhNhanList(benhNhanList);
        }
    }

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

    const handleOpenBANgoaiTruDialog = () => {
        setShouldOpenBenhAnNgoaiTruDialog(true);
    }

    const handleCloseDialog = () => {
        setShouldOpenBenhAnNgoaiTruDialog(false);
    }

    return (
        <div className="p-5">
            <Row>
                <Col sm="9">
                    <SearchAdvanced />
                    <div className='pt-3'>
                        <GridDsBenhNhan />
                    </div>
                </Col>
                <Col sm="3">
                    <ThongTinBenhNhan/>
                </Col>
            </Row>
            <div className="flex flex-center pt-8 pb-0">
                <Button 
                    className="btn-navy mr-5 w-80px"
                    onClick={handleStart}
                >
                    Bắt đầu
                </Button>
                <Button
                    disabled={!(isPaid && isStart)}
                    className="btn-navy mr-5 "
                    onClick={() => handleAddTab(danhSachTabTiepDon[4].eventKey)}
                >
                    Khám bệnh
                </Button>
                <Button disabled={!(isPaid && isStart)} className="btn-navy mr-5 ">Chỉ định CLS</Button>
                <Button
                    disabled={!(isPaid && isStart)}
                    className="btn-navy mr-5 "
                    onClick={handleOpenThuocModal}
                >
                    Thuốc
                </Button>
                <Button
                    disabled={!(isPaid && isStart)}
                    className="btn-navy mr-5 "
                    onClick={handleOpenBANgoaiTruDialog}
                >
                    Bệnh án
                </Button>
                <Button disabled={!(isPaid && isStart)} className="btn-navy mr-5 ">Phiếu thu</Button>
                <Button
                    disabled={!(isPaid && isStart)}
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
        </div>
    )
}

export default DSBenhNhanKhamBenh;