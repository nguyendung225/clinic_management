import { useState } from "react";
import { Button } from "react-bootstrap";
import LabelRequired from "../component/LabelRequired";
import "./NhaThuocVaThuNgan.scss";
import DanhSachLSPhieu from "./components/DanhSachLSPhieu";
import DsPhieu from "./components/DanhSachPhieu";
import TableChiTietPhieu from "./components/TableChiTietPhieu";
import { toast } from "react-toastify";
import moment from "moment";
import { ConfirmDialog } from "../component/ConfirmDialog";
import ModalEditOneColumn from "../phan-he-kham-benh/components/modal-ke-thuoc/ModalEditOneColumn";
import SuaPhieuDialog from "./components/SuaPhieuDialog";
import ModalPhieuIn from "../component/ModalPhieuIn";
import { TemplatePhieuThu } from "./components/TemplatePhieuThu";
import { stylePrint, stylePrintLandscapeA5 } from "../component/phieu-in/constant";
type Props = {};

const NhaThuocVaThuNgan = (props: Props) => {
    const [TTPhieu, setTTPhieu] = useState<any>();
    const [statusView, setStatusView] = useState<any>();
    const [openConfirmDialog, setOpenConfirmDialog] = useState<any>();
    const [confirmInfo, setConfirmInfo] = useState<any>();
    const [openLydoHuyDialog, setOpenLydoHuyDialog] = useState<any>();
    const [openInPhieu, setOpenInPhieu] = useState<any>();
    const [openSuaPhieuDialog, setOpenSuaPhieuDialog] = useState<any>();
    const STATUS_VIEW = {
        XEM_PHIEU_DA_LAP: 0,
        PHIEU_THUOC_MOI_TAO: 1,
        DUYET_PHIEU: 2,
        TAO_PHIEU_THU: 3,
        LUU_PHIEU_THU: 4,
        XUAT_KHO: 5,
    };

    const handleLuuPhieu = () => {
        setStatusView(STATUS_VIEW.LUU_PHIEU_THU);
        toast.success("Lưu phiếu thành công");
        const TTPhieuVuaTao = {
            id: Math.floor(Math.random() * 100),
            ngay: moment().format("DD/MM/YY"),
            loaiPhieu: "Thuốc",
        };
        TTPhieu?.lsPhieu.unshift(TTPhieuVuaTao);
        setTTPhieu({ ...TTPhieu });
    };
    const handleHuyPhieu = () => {
        setStatusView(STATUS_VIEW.PHIEU_THUOC_MOI_TAO);
        const TTPhieuVuaHuy = {
            id: Math.floor(Math.random() * 100),
            ngay: moment().format("DD/MM/YY"),
            loaiPhieu: "Thuốc",
            ngayHuy: moment("2024-02-22").format("DD/MM/YY"),
        };
        TTPhieu?.lsPhieu.unshift(TTPhieuVuaHuy);
        setTTPhieu({ ...TTPhieu });
        toast.success("Hủy phiếu thành công");
    };

    const handleHuyXuatKho = () => {
        setStatusView(STATUS_VIEW.LUU_PHIEU_THU);
        toast.success("Hủy xuất phiếu thành công");
    };

    const handleSetInfoConfirm = (message: any, handleYesClick: Function) => {
        setConfirmInfo({ message: message, handleYesClick: handleYesClick });
        setOpenConfirmDialog(true);
    };

    const handleHuyBoPhieu = () => {
        setStatusView(
            STATUS_VIEW.DUYET_PHIEU
        );
        toast.success("Hủy thành công");
    }

    const getThongTinMienGiam = (data: any) => {

    }

    const handleLuuPhieuSua = () => {
        setStatusView(STATUS_VIEW?.DUYET_PHIEU)

    }



    return (
        <div className="nha-thuoc-thu-ngan-container">
            <div className="nha-thuoc-thu-ngan-menu border">
                <div className="d-flex spaces h-53 align-items-center gap-10 ">
                    <Button className="btn-outline spaces h-29 d-flex justify-content-center min-w-40px">
                        <i className="bi bi-list spaces scale-15 m-0 p-0"></i>
                    </Button>
                    <Button className="btn-fill h-auto min-w-50px">
                        Báo cáo
                    </Button>
                    <Button className="btn-fill h-auto">Danh sách</Button>
                    <Button className="btn-fill h-auto">Tạo phiếu</Button>
                </div>
            </div>
            <div className="nha-thuoc-thu-ngan-content">
                <div className="spaces width-27">
                    <DsPhieu
                        getRowData={(data: any) => {
                            setTTPhieu({
                                ...data?.original,
                                taoPhieu:
                                    "Quản trị hệ thống lúc 21/02/2024 lúc 17:29 21/02/2024",
                                duyetPhieu:
                                    "Quản trị hệ thống lúc 21/02/2024 lúc 17:29 21/02/2024",
                                chanDoan: "Chẩn đoán 001",
                                kho: "Kho Thuốc 001",
                            });
                            setStatusView(STATUS_VIEW.PHIEU_THUOC_MOI_TAO);
                        }}
                    />
                </div>
                <div className="spaces width-73 d-flex flex-column">
                    <div className="form-phieu flex-column spaces gap-10 bg-white">
                        <div className="d-flex spaces gap-10">
                            <div className="form-field spaces width-55">
                                <LabelRequired
                                    label="Tạo phiếu"
                                    className="min-w-90px"
                                />
                                <input
                                    type="text"
                                    className="form-control customs-input"
                                    value={TTPhieu?.taoPhieu || ""}
                                />
                            </div>
                            <div className="form-field spaces  width-45">
                                <LabelRequired
                                    label="Kho"
                                    className="min-w-80px"
                                />
                                <input
                                    type="text"
                                    className="form-control customs-input"
                                    value={TTPhieu?.kho || ""}
                                />
                            </div>
                        </div>
                        <div className="form-field spaces width-100">
                            <LabelRequired
                                label="Chẩn đoán"
                                className="min-w-90px"
                            />
                            <input
                                type="text"
                                className="form-control customs-input"
                                value={TTPhieu?.chanDoan || ""}
                            />
                        </div>
                        <div className="d-flex spaces gap-10">
                            <div className="form-field spaces width-55">
                                <LabelRequired
                                    label="Duyệt phiếu"
                                    className="min-w-90px"
                                />
                                <input
                                    type="text"
                                    className="form-control customs-input"
                                    value={TTPhieu?.duyetPhieu || ""}
                                />
                            </div>
                            <div className="form-field spaces width-45">
                                <LabelRequired
                                    label="Xuất phiếu"
                                    className="min-w-80px"
                                />
                                <input
                                    type="text"
                                    className="form-control customs-input"
                                />
                            </div>
                        </div>
                    </div>

                    <DanhSachLSPhieu
                        setTTPhieu={(data: any) => {
                            setStatusView(STATUS_VIEW.XEM_PHIEU_DA_LAP);
                            setTTPhieu({ lsPhieu: TTPhieu.lsPhieu, ...data });
                        }}
                        dataDSPhieu={TTPhieu?.lsPhieu}
                    />
                    <div className="table-chi-tiet-phieu">
                        <TableChiTietPhieu
                            getThongTinMienGiam={getThongTinMienGiam}
                            dataChiTietPhieu={TTPhieu?.dataChiTietPhieu}
                        />
                    </div>
                    <div className="form-phieu flex-column spaces gap-4 bg-white">
                        {!(statusView === STATUS_VIEW.PHIEU_THUOC_MOI_TAO) && (
                            <>
                                <div className="d-flex spaces gap-10">
                                    <div className="form-field spaces width-33">
                                        <LabelRequired
                                            label="Số phiếu"
                                            className="min-w-80px"
                                        />
                                        <input
                                            value={TTPhieu?.soPhieu || ""}
                                            type="text"
                                            className="form-control customs-input"
                                        />
                                    </div>
                                    <div className="form-field spaces  width-33">
                                        <LabelRequired
                                            label="Người thu"
                                            className="spaces min-w-110"
                                        />
                                        <input
                                            value={TTPhieu?.nguoiThu || ""}
                                            type="text"
                                            className="form-control customs-input"
                                        />
                                    </div>
                                    <div className="form-field spaces  width-33">
                                        <LabelRequired
                                            label="Ngày thu"
                                            className="spaces min-w-110"
                                        />
                                        <input
                                            value={TTPhieu?.ngayThu || ""}
                                            type="text"
                                            className="form-control customs-input"
                                        />
                                    </div>
                                </div>
                                <div className="d-flex spaces gap-10">
                                    <div className="form-field spaces width-33">
                                        <LabelRequired
                                            label="Loại phiếu"
                                            className="min-w-80px"
                                        />
                                        <input
                                            value={TTPhieu?.loaiPhieu || ""}
                                            type="text"
                                            className="form-control customs-input"
                                        />
                                    </div>
                                    <div className="form-field spaces  width-33">
                                        <LabelRequired
                                            label="Số tiền"
                                            className="spaces min-w-110"
                                        />
                                        <input
                                            value={TTPhieu?.soTien || ""}
                                            type="text"
                                            className="form-control customs-input"
                                        />
                                    </div>
                                    <div className="form-field spaces  width-33">
                                        <LabelRequired
                                            label="Miễn giảm"
                                            className="spaces min-w-110"
                                        />
                                        <input
                                            value={TTPhieu?.mienGiam || ""}
                                            type="text"
                                            className="form-control customs-input"
                                        />
                                    </div>
                                </div>
                                <div className="d-flex spaces gap-10">
                                    <div className="form-field spaces width-33">
                                        <LabelRequired
                                            label="Hình thức"
                                            className="min-w-80px"
                                        />
                                        <input
                                            value={TTPhieu?.hinhThuc || ""}
                                            type="text"
                                            className="form-control customs-input"
                                        />
                                    </div>
                                    <div className="form-field spaces  width-33">
                                        <LabelRequired
                                            label="Nội dung thu"
                                            className="spaces min-w-110"
                                        />
                                        <input
                                            value={TTPhieu?.noiDungThu || ""}
                                            type="text"
                                            className="form-control customs-input"
                                        />
                                    </div>
                                    <div className="form-field spaces  width-33">
                                        <LabelRequired
                                            label="Lý do miễn giảm"
                                            className="spaces min-w-110"
                                        />
                                        <input
                                            value={TTPhieu?.lyDoMienGiam || ""}
                                            type="text"
                                            className="form-control customs-input"
                                        />
                                    </div>
                                </div>
                                <div className="d-flex spaces gap-10">
                                    <div className="form-field spaces width-50">
                                        <LabelRequired
                                            label="Ghi chú"
                                            className="min-w-80px"
                                        />
                                        <input
                                            value={TTPhieu?.ghiChu || ""}
                                            type="text"
                                            className="form-control customs-input"
                                        />
                                    </div>
                                    <div className="form-field spaces width-50">
                                        <LabelRequired
                                            label="Chi tiết giảm"
                                            className="min-w-100px"
                                        />
                                        <input
                                            value={TTPhieu?.chiTietGiam || ""}
                                            type="text"
                                            className="form-control customs-input"
                                        />
                                    </div>
                                </div>
                                <div className="d-flex spaces gap-10 min-h-25">
                                    {TTPhieu?.ngayHuy && (
                                        <>
                                            <div className="form-field spaces width-33">
                                                <LabelRequired
                                                    label="Ngày hủy"
                                                    className="min-w-80px"
                                                />
                                                <input
                                                    value={
                                                        TTPhieu?.ngayHuy || ""
                                                    }
                                                    type="text"
                                                    className="form-control customs-input"
                                                />
                                            </div>
                                            <div className="form-field spaces  width-33">
                                                <LabelRequired
                                                    label="Người hủy"
                                                    className="spaces min-w-110"
                                                />
                                                <input
                                                    value={
                                                        TTPhieu?.nguoiHuy || ""
                                                    }
                                                    type="text"
                                                    className="form-control customs-input"
                                                />
                                            </div>
                                            <div className="form-field spaces  width-33">
                                                <LabelRequired
                                                    label="Lý do hủy"
                                                    className="spaces min-w-110"
                                                />
                                                <input
                                                    value={
                                                        TTPhieu?.lyDoHuy || ""
                                                    }
                                                    type="text"
                                                    className="form-control customs-input"
                                                />
                                            </div>
                                        </>
                                    )}
                                </div>
                            </>
                        )}
                    </div>

                    <div className="thong-tin-thu-ngan">
                        <div className="d-flex gap-16 spaces fw-5">
                            <div>
                                <div className="d-flex">
                                    <div className="min-w-80px">
                                        Tổng chi phí
                                    </div>{" "}
                                    <div className="min-w-70px text-end text-danger">
                                        {TTPhieu?.tongChiPhi || 0}
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="min-w-80px">Miễn giảm</div>{" "}
                                    <div className="min-w-70px  text-end text-pri">
                                        {TTPhieu?.mienGiam || 0}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="d-flex">
                                    <div className="min-w-80px">Thực thu</div>{" "}
                                    <div className="min-w-70px text-end text-pri">
                                        {TTPhieu?.tongChiPhi -
                                            TTPhieu?.mienGiam || 0}
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="min-w-80px">Còn nợ</div>{" "}
                                    <div className="min-w-70px  text-end text-warning">
                                        {TTPhieu?.thucThu - TTPhieu?.daThu || 0}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="d-flex">
                                    <div className="min-w-80px">Đã thu</div>{" "}
                                    <div className="min-w-70px text-end text-pri">
                                        {TTPhieu?.daThu || 0}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {TTPhieu && (
                            <div className="d-flex spaces gap-10">
                                {statusView ===
                                    STATUS_VIEW.PHIEU_THUOC_MOI_TAO ? (
                                    <>
                                        <Button className="btn-fill" onClick={() => setOpenSuaPhieuDialog(true)}>
                                            Sửa phiếu
                                        </Button>
                                        <Button
                                            className="btn-fill"
                                            onClick={() => {
                                                setStatusView(
                                                    STATUS_VIEW.DUYET_PHIEU
                                                );
                                                toast.success(
                                                    "Duyệt thành công"
                                                );
                                            }}
                                        >
                                            Duyệt
                                        </Button>
                                    </>
                                ) : statusView === STATUS_VIEW.DUYET_PHIEU ? (
                                    <>
                                        <Button
                                            className="btn-fill"
                                            onClick={() => {
                                                setStatusView(
                                                    STATUS_VIEW.PHIEU_THUOC_MOI_TAO
                                                );
                                                toast.success(
                                                    "Hủy duyệt thành công"
                                                );
                                            }}
                                        >
                                            Hủy duyệt
                                        </Button>
                                        <Button
                                            className="btn-fill"
                                            onClick={() => {
                                                setStatusView(
                                                    STATUS_VIEW.TAO_PHIEU_THU
                                                );
                                                toast.success(
                                                    "Bắt đầu tạo phiếu"
                                                );
                                            }}
                                        >
                                            Tạo phiếu
                                        </Button>
                                    </>
                                ) : statusView === STATUS_VIEW.TAO_PHIEU_THU ? (
                                    <>
                                        <Button
                                            className="btn-fill"
                                            onClick={() => {
                                                handleSetInfoConfirm(
                                                    "Bạn có chắc chắn muốn hủy phiếu đang tạo không ?",
                                                    handleHuyBoPhieu
                                                );
                                            }}
                                        >
                                            Hủy bỏ
                                        </Button>
                                        <Button
                                            className="btn-fill"
                                            onClick={handleLuuPhieu}
                                        >
                                            Lưu phiếu
                                        </Button>
                                    </>
                                ) : (statusView === STATUS_VIEW.LUU_PHIEU_THU ||
                                    statusView === STATUS_VIEW.XUAT_KHO || statusView === STATUS_VIEW.XEM_PHIEU_DA_LAP) ? (
                                    <>
                                        {statusView === STATUS_VIEW.XUAT_KHO ? (
                                            <Button
                                                className="btn-fill"
                                                onClick={() => {
                                                    handleSetInfoConfirm(
                                                        "Bạn có chắc chắn muốn hủy xuất phiếu này không ?",
                                                        handleHuyXuatKho
                                                    );
                                                }}
                                            >
                                                Hủy xuất
                                            </Button>
                                        ) : (
                                            <Button
                                                className="btn-fill"
                                                onClick={() => {
                                                    setStatusView(
                                                        STATUS_VIEW.XUAT_KHO
                                                    );
                                                    toast.success(
                                                        "Đã xuất phiếu thành công"
                                                    );
                                                }}
                                            >
                                                Xuất kho
                                            </Button>
                                        )}

                                        <Button
                                            className="btn-fill"
                                            onClick={() =>
                                                toast.warning(
                                                    "Chưa cấu hình thông tin phát hành hóa đơn"
                                                )
                                            }
                                        >
                                            Tạo HĐĐT
                                        </Button>
                                        <Button className="btn-fill" onClick={() => setOpenInPhieu(true)}>
                                            In phiếu thu
                                        </Button>
                                        <Button
                                            className="btn-fill"
                                            onClick={() =>
                                                setOpenLydoHuyDialog(true)
                                            }
                                        >
                                            Hủy phiếu
                                        </Button>
                                    </>
                                ) : (
                                    <></>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <ConfirmDialog
                show={openConfirmDialog}
                title={"Thông báo"}
                message={confirmInfo?.message}
                yes={"Có"}
                close={"Không"}
                onYesClick={() => {
                    confirmInfo?.handleYesClick();
                    setOpenConfirmDialog(false);
                }}
                onCloseClick={() => setOpenConfirmDialog(false)}
            />

            {openLydoHuyDialog && (
                <ModalEditOneColumn
                    name="Lý do hủy phiếu"
                    code="lyDoHuyPhieu"
                    handleClose={() => setOpenLydoHuyDialog(false)}
                    handleSave={handleHuyPhieu}
                />
            )}

            {
                openSuaPhieuDialog && <SuaPhieuDialog TTPhieu={TTPhieu} handleLuuPhieuSua={handleLuuPhieuSua} setTTPhieu={setTTPhieu} handleClose={() => setOpenSuaPhieuDialog(false)} />
            }

            {
                openInPhieu && <ModalPhieuIn
                    title="In Phiếu thu"
                    show={openInPhieu}
                    handleCloseDialog={() => setOpenInPhieu(false)}
                    size="lg"
                    stylePrint={stylePrintLandscapeA5}
                >
                    <TemplatePhieuThu />
                </ModalPhieuIn>
            }


        </div>
    );
};

export default NhaThuocVaThuNgan;
