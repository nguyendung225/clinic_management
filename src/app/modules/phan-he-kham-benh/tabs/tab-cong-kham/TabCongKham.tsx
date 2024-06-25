import { useContext, useEffect, useRef, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { ConfirmDialog } from "../../../component/ConfirmDialog";
import ContextMenu from "../../../component/ContextMenuV2";
import DanhSachPhieu from "../../../component/DanhSachPhieu";
import LabelRequired from "../../../component/LabelRequired";
import ModalOneColumn from "../../../component/ModalOneColumn";
import ModalPhieuIn from "../../../component/ModalPhieuIn";
import CustomTextarea from "../../../component/custom-textarea/CustomTextarea";
import { stylePrint } from "../../../component/phieu-in/constant";
import { TableCustom } from "../../../component/table/table-custom/TableCustom";
import { IItemMenu } from "../../../phan-he-tiep-nhan-thanh-toan/models/ThanhToanModel";
import { MESSAGE, PATH_NAME, SELECTION_MODE } from "../../../utils/Constant";
import "../../PhanHeKhamBenh.scss";
import { congKhamColumn } from "../../columns/tab-cong-kham/ColumnTabCongKham";
import PhieuChiDinhCongKham from "../../components/phieu-in/PhieuChiDinhCongKham";
import PhieuKhamBenh from "../../components/phieu-in/PhieuKhamBenh";
import { CODE_CONTEXT_TAB_XET_NGHIEM, listContextDichVuCongKham, listContextPhieuCongKham } from "../../constants/ContextConstants";
import { PhanHeTiepDonContext } from "../../contexts/PhanHeTiepDonContext";
import PageChiDinhDichVu from "../../modals/modal-chi-dinh-dich-vu/PageChiDinhDichVu";

export type KhamBenh = {
    thongTinKhamBenh?: any;
    setThongTinKhamBenh: ((data: any) => void) | undefined;
};

export const TabCongKham = () => {
    const { pathname } = useLocation();
    const { benhNhanInfo } = useContext(PhanHeTiepDonContext);
    const [dsDichVuDetail, setDsDichVuDetail] = useState<any[]>([]);
    const [openPhieuIn, setOpenPhieuIn] = useState(false);
    const [codeClick, setCodeClick] = useState("");
    const [openModalSuaPhieu, setOpenModalSuaPhieu] = useState(false);
    const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
    const [idTable, setIdTable] = useState("");
    const checkListContext = idTable === CODE_CONTEXT_TAB_XET_NGHIEM.DS_PHIEU ? listContextPhieuCongKham : listContextDichVuCongKham
    const contextRef = useRef<HTMLDivElement | null>(null);
    const [contextMenu, setContextMenu] = useState<null | {
        x: number;
        y: number;
    }>(null);
    const [contextClientX, setContextClientX] = useState<number>(0);

    const handleContextMenu = (e: any, row: any, code: string) => {
        e.preventDefault();
        setContextClientX(e.clientX);
        setIdTable(code as string);

        const heightDropList = document.getElementById("drop-list")?.clientHeight || 0;
        const isOnRight = (window.innerWidth - e.clientX) < 200;
        const newX = isOnRight ? e.clientX - 200 : e.clientX;
        const isBottom = (window.innerHeight - e.clientY) < 200;
        const newY = isBottom ? e.clientY - heightDropList : e.clientY;

        setContextMenu({ x: newX, y: newY });
    };

    const handleClickOptionContextMenu = (value: IItemMenu) => {
        // - Chuyển loại công khám -> Chọn công khám phù hợp -> Thay đổi ở cột “Loại công khám” 
        setContextMenu(null);
        setCodeClick(value?.code as string);

    }

    const handleSelectRowData = (rowData: any) => {
        setDsDichVuDetail(rowData?.detail);
    }

    useEffect(() => {
        setDsDichVuDetail([]);
    }, [benhNhanInfo]);

    const handleOpenPhieuIn = (code: string) => {
        setOpenPhieuIn(true);
        setCodeClick(code);
    }

    const renderPhieuIn = (code: string) => {
        const options = {
            [CODE_CONTEXT_TAB_XET_NGHIEM.PHIEU_CHI_DINH]: {
                title: "Phiếu chỉ định",
                component: <PhieuChiDinhCongKham />
            },
            [CODE_CONTEXT_TAB_XET_NGHIEM.PHIEU_KHAM_BENH]: {
                title: "Phiếu khám bệnh",
                component: <PhieuKhamBenh />
            }
        }

        return options[code];
    }

    const handleSuaPhieu = () => {
        setOpenModalSuaPhieu(true);
    }

    const handleOpenConfirmDialog = () => {
        setOpenConfirmDialog(true);
    }

    const handleYesClick = () => {
        setOpenConfirmDialog(false);
        toast.success(MESSAGE.SUCCESS.XOA_PHIEU)
    }
    return (
        <Row className="spaces h-calc-vh-364">
            <div>
                <div className="pt-4 bg-white">
                    <Row className="mx-0">
                        <Col xs={4} className="d-flex align-items-center mb-3">
                            <LabelRequired label="Mã phiếu" className="min-w-100px" />
                            {/* <CustomTextarea readOnly /> */}
                            <span className="fw-light">BN2202400001</span>
                        </Col>
                        <Col xs={4} className="d-flex align-items-center text-lable-input mb-3">
                            <LabelRequired label="Ngày y lệnh" className="min-w-100px" />
                            {/* <CustomTextarea readOnly /> */}
                            <span className="fw-light">25-06-2024</span>
                        </Col>
                        <Col xs={4} className="d-flex align-items-center text-lable-input mb-3">
                            <LabelRequired label="Người chỉ định" className="min-w-100px" />
                            {/* <CustomTextarea readOnly /> */}
                            <span className="fw-light">Nguyễn Văn A</span>
                        </Col>
                        <Col xs={4} className="d-flex align-items-center text-lable-input mb-3">
                            <LabelRequired label="Nơi chỉ định" className="min-w-100px" />
                            {/* <CustomTextarea readOnly /> */}
                            <span className="fw-light">Bệnh viện đa khoa Hòe Nhai</span>
                        </Col>
                        <Col xs={4} className="d-flex align-items-center text-lable-input mb-3">
                            <LabelRequired label="Trạng thái" className="min-w-100px" />
                            {/* <CustomTextarea readOnly /> */}
                            <span className="fw-light">Dịch vụ</span>
                        </Col>
                        <Col xs={4} className="d-flex align-items-center text-lable-input mb-3">
                            <LabelRequired label="Nơi thực hiện" className="min-w-100px" />
                            {/* <CustomTextarea readOnly /> */}
                            <span className="fw-light">Bệnh viện đa khoa Hòe Nhai</span>
                        </Col>
                        <Col xs={12} className="d-flex align-items-center text-lable-input mb-3">
                            <LabelRequired label="Chẩn đoán" className="min-w-100px" />
                            {/* <CustomTextarea readOnly /> */}
                            <span className="fw-light">...</span>
                        </Col>
                    </Row>
                </div>

                <div className="bg-white pt-2 mb-2">
                    <DanhSachPhieu
                        className="mb-2"
                        handleSelectRowData={handleSelectRowData}
                        dsPhieu={benhNhanInfo?.dsDichVu as []}
                        handleContextMenu={(e, row) => handleContextMenu(e, row, CODE_CONTEXT_TAB_XET_NGHIEM.DS_PHIEU)}
                    />

                    <div className="tableLichSu border">
                        <TableCustom<any>
                            className={`spaces h-calc-vh-${PATH_NAME.KHAM_BENH === pathname ? "297" : "335"}`}
                            selectionMode={SELECTION_MODE.SINGLE_NO_RADIO_BUTTON}
                            columns={congKhamColumn}
                            data={dsDichVuDetail || []}
                            handleContextMenu={(e, row) => handleContextMenu(e, row, CODE_CONTEXT_TAB_XET_NGHIEM.DS_DICH_VU)}
                        />

                        {contextMenu && (
                            <div ref={contextRef}>
                                <ContextMenu
                                    contextClientX={contextClientX}
                                    data={checkListContext}
                                    x={contextMenu.x}
                                    y={contextMenu.y}
                                    handleClickOptionContextMenu={handleClickOptionContextMenu}
                                    contextRef={contextRef}
                                    setContextMenu={setContextMenu}
                                />
                            </div>
                        )}
                    </div>
                </div>
                <div className="d-flex justify-content-end gap-3 py-4 me-4 bg-white position-sticky bottom-0">
                    <Button className="btn-fill mr-5" onClick={() => handleOpenPhieuIn(CODE_CONTEXT_TAB_XET_NGHIEM.PHIEU_CHI_DINH)}>
                        Phiếu chỉ định
                    </Button>
                    {/* <Button className="btn-fill mr-5" onClick={() => handleOpenPhieuIn(CODE_CONTEXT_TAB_XET_NGHIEM.PHIEU_KHAM_BENH)}>
                        In phiếu khám bệnh
                    </Button> */}
                    <Button className="btn-fill mr-5" onClick={handleSuaPhieu}>
                        Sửa phiếu
                    </Button>
                    <Button className="btn-fill mr-5" onClick={handleOpenConfirmDialog}>
                        Xóa phiếu
                    </Button>
                </div>
            </div>

            <ModalPhieuIn
                title={renderPhieuIn(codeClick)?.title}
                size="lg"
                show={openPhieuIn}
                handleCloseDialog={() => setOpenPhieuIn(false)}
                stylePrint={stylePrint}
            >
                {renderPhieuIn(codeClick)?.component}
            </ModalPhieuIn>

            {
                openModalSuaPhieu && <PageChiDinhDichVu handleClose={() => setOpenModalSuaPhieu(false)} />
            }

            <ConfirmDialog
                title="Thông báo"
                yes="Có"
                close="Không"
                message={MESSAGE.CONFIRM.XOA_PHIEU}
                show={openConfirmDialog}
                onYesClick={handleYesClick}
                onCloseClick={() => setOpenConfirmDialog(false)}
            />

            <ModalOneColumn
                show={(CODE_CONTEXT_TAB_XET_NGHIEM.CHUYEN_NGAY_Y_LENH === codeClick)}
                handleCloseDialog={() => setCodeClick("")}
                title={"Cập nhật ngày y lệnh"}
                label={"Ngày y lệnh"}
                type="datetime-local"
                name={CODE_CONTEXT_TAB_XET_NGHIEM.CHUYEN_NGAY_Y_LENH}
            />
        </Row>
    );
};

export default TabCongKham;
