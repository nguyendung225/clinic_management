import React, { useContext, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import GridDsBenhNhan from './GridDsBenhNhan'
import ThongTinBenhNhan from './ThongTinBenhNhan'
import SearchAdvanced from '../../../component/SearchAdvanced'
import ChiDinhThuocModal from '../modal-thuoc/ChiDinhThuocModal'
import ThongTinKhamBenh from '../model-kham-benh/ThongTinKhamBenh'
import ChuyenPhongKhamModal from './ChuyenPhongKhamModal'
import BenhAnNgoaiTru from '../benh-an-ngoai-tru/BenhAnNgoaiTru';
import { danhSachTabTiepDon } from '../../const/PhanHeTiepDonConst'
import { localStorageItem } from '../../../utils/LocalStorage'
import { KEY_DS_TAB_TIEP_DON } from '../../../utils/Constant'
import { AppContext } from '../../../appContext/AppContext'

type Props = {}

export const DSBenhNhanKhamBenh = (props: Props) => {
    const [shouldOpenThuocModal, setShouldOpenThuocModal] = useState<boolean>(false);
    const [shouldOpenChuyenPKModal, setShouldOpenChuyenModalPK] = useState<boolean>(false);
    const [shouldOpenBenhAnNgoaiTruDialog, setShouldOpenBenhAnNgoaiTruDialog] = useState<boolean>(false);
    const { setEventKey } = useContext(AppContext);

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
                    <ThongTinBenhNhan />
                </Col>
            </Row>
            <div className="flex flex-center pt-8 pb-0">
                <Button className="btn-navy mr-5 w-80px">Bắt đầu</Button>
                <Button
                    className="btn-navy mr-5 "
                    onClick={() => handleAddTab(danhSachTabTiepDon[4].eventKey)}
                >
                    Khám bệnh
                </Button>
                <Button className="btn-navy mr-5 ">Chỉ định CLS</Button>
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
        </div>
    )
}

export default DSBenhNhanKhamBenh;