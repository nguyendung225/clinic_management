import { Col, Row } from "react-bootstrap";
import { Column } from "react-table";
import Autocomplete from "../../../component/AutocompleteObject";
import {
    HINH_THUC,
    LOAI_DOI_TUONG_CONST,
    UU_TIEN,
    trangThaiBenhNhan,
} from "../../../phan-he-kham-benh/constants/BenhNhanConst";
import { formatTrangThaiBenhNhan } from "../../../utils/FormatUtils";
import { IBenhNhanModel } from "../../models/DanhSachBenhNhanModels";
import { fakeListBNXN } from "../../const/FakeData";
import { useState } from "react";
import ContextMenu from '../../../component/ContextMenuV3';
import { CODE_DSBP_LAY_MAU } from "../../const/constants";
import { toast } from "react-toastify";
import DialogLichSuKham from "./DialogLichSuKham";
import { TableCustomHeader } from "../../../component/table/components/TableCustomHeader";
import CombinedTable from "../../../component/table/combined-table/CombinedTable";
import { TableCustomCell } from "../../../component/table/components/TableCustomCell";

const DsBenhNhan = (props: any) => {
    const { setInfoBenhNhan } = props;
    ;
    const handleSelectedBenhNhan = async (benhNhans: any) => {
        setInfoBenhNhan(benhNhans.original);
    };
    const DsBenhNhanColumnV2: ReadonlyArray<Column<IBenhNhanModel>> = [
        {
            Header: (props) => (
                <TableCustomHeader<IBenhNhanModel>
                    tableProps={props}
                    title={"TT"}
                    className=" text-light min-w-30px p-2 border-x"
                />
            ),
            id: "TT",
            Cell: ({ ...props }) => (
                <TableCustomCell
                    className="text-center border spaces py-4 h-100"
                    data={formatTrangThaiBenhNhan(props?.data[props?.row?.index]?.trangThai)}
                />
            ),
        },
        {
            Header: (props) => (
                <TableCustomHeader<IBenhNhanModel>
                    tableProps={props}
                    title={"Barcode"}
                    className="text-center text-light min-w-70px p-2 border-x"
                />
            ),
            id: "Barcode",
            Cell: ({ ...props }) => (
                <TableCustomCell
                    className="text-center border spaces py-4 h-100"
                    data={props?.data[props?.row?.index]?.barCode}
                />
            ),
        },
        {
            Header: (props) => (
                <TableCustomHeader<IBenhNhanModel>
                    tableProps={props}
                    title={"Tên bệnh nhân"}
                    className="text-center text-light min-w-225px p-2 border-x"
                />
            ),
            id: "tenBN",
            Cell: ({ ...props }) => (
                <div className="text-system border-bottom spaces py-4 p-1">
                    <div className="flex m-0">
                        <span className="text-capitalize">{props?.data[props?.row?.index]?.hoTen}</span>
                        {props?.data[props?.row?.index]?.uuTien === UU_TIEN.uuTien.code ? (
                            <span>
                                <i className="bi bi-check-circle-fill text-cyan ms-2"></i>
                            </span>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="flex m-0">
                        <span className="text-uppercase fw-semibold">{props?.data[props?.row?.index]?.maBn}</span>
                        <span className="px-1"> - </span>
                        <span>
                            {props?.data[props?.row?.index]?.loaiDoiTuong === LOAI_DOI_TUONG_CONST.dichVu.code ? "Dịch vụ" : "BHYT"}
                        </span>
                        <span className="px-1"> - </span>
                        <span>
                            {props?.data[props?.row?.index]?.loaiTiepNhan === HINH_THUC.benhMoi.code ? "Bệnh mới" : "Tái khám"}
                        </span>
                    </div>
                </div>
            ),
        },
        {
            Header: (props) => (
                <TableCustomHeader<IBenhNhanModel>
                    tableProps={props}
                    title={"Mã BP"}
                    className=" text-light min-w-100px p-2 border-x"
                />
            ),
            id: "Mã BP",
            Cell: ({ ...props }) => (
                <TableCustomCell
                    className="text-center border spaces py-4 h-100"
                    data={props?.data[props?.row?.index]?.maBenhPham}
                />
            ),
        },
        {
            Header: (props) => (
                <TableCustomHeader<IBenhNhanModel>
                    tableProps={props}
                    title={" STTLM"}
                    className=" text-light min-w-60px p-2 border-x"
                />
            ),
            id: "STTLM",
            Cell: ({ ...props }) => (
                <TableCustomCell
                    className="text-center border spaces py-4 h-100"
                    data={""}
                />
            ),
        },
        {
            Header: (props) => (
                <TableCustomHeader<IBenhNhanModel>
                    tableProps={props}
                    title={" STT"}
                    className=" text-light min-w-60px p-2 border-x"
                />
            ),
            id: "STT",
            Cell: ({ ...props }) => (
                <TableCustomCell
                    className="text-center border spaces py-4 h-100"
                    data={""}
                />
            ),
        },
    ];

    const [contextMenu, setContextMenu] = useState<null | {
        x: number;
        y: number;
    }>(null);

    const handleClickOptionContextMenu = (value: any) => {
        setContextMenu(null)
        const menuActions = {
            [CODE_DSBP_LAY_MAU.BARCODE_MOI]: () => { toast.success("Cấp barcode mới thành công") },
            [CODE_DSBP_LAY_MAU.LICH_SU_KHAM]: () => { setOpenLSKham(true) },

        };
        menuActions[value?.code]?.();
    };

    const handleRightClick = (e: any, row: any) => {
        e.preventDefault()
        setContextMenu({ x: e.clientX, y: e.clientY });
    }
    const menuDsBenhNhan = [
        {
            code: "0",
            name: "Cấp barcode mới",
        },
        {
            code: "1",
            name: "Lịch sử khám bệnh",
        },
        {
            code: "2",
            name: "Chức năng khác",
        },
    ]

    const [openLSKham, setOpenLSKham] = useState(false)

    return (
        <>
            <div className="overflow-auto">
                <CombinedTable
                    data={fakeListBNXN}
                    userColumns={DsBenhNhanColumnV2}
                    getRowData={handleSelectedBenhNhan}
                    height={"calc(100vh - 390px)"}
                    handleRightClick={handleRightClick}
                />
            </div>
            <div className="d-flex justify-content-center">
                <div className="spaces w-100">
                    <Row className="d-flex ">
                        <Col xs={12}>
                            <Autocomplete
                                placeholder='Tất cả các phòng lấy mẫu bệnh phẩm'
                                options={[]}
                                className="autocomplete-custom-tiep-nhan radius spaces h-32 my-4"
                            />
                        </Col>
                        <Col xs={12}>
                            <Row className="px-2">
                                <Col xs={6} className="min-w-90px text-start">
                                    <i className="bi bi-circle-fill text-status-blue"></i>&nbsp;
                                    <span>{trangThaiBenhNhan.choKham.name}</span>
                                </Col>
                                <Col xs={6} className="min-w-120px text-start">
                                    <i className="bi bi-circle-fill text-status-ocean"></i>&nbsp;
                                    <span>{trangThaiBenhNhan.khamBenhKetHop.name}</span>
                                </Col>
                                <Col xs={6} className="min-w-90px text-start">
                                    <i className="bi bi-circle-fill text-status-green"></i>&nbsp;
                                    <span>{trangThaiBenhNhan.ketThucKham.name}</span>
                                </Col>
                                <Col xs={6} className="min-w-90px text-start">
                                    <i className="bi bi-circle-fill text-status-yellow"></i>&nbsp;
                                    <span>{trangThaiBenhNhan.daCoKQCLS.name}</span>
                                </Col>
                                <Col xs={6} className="min-w-120px text-start">
                                    <i className="bi bi-circle-fill text-status-orange"></i>&nbsp;
                                    <span>{trangThaiBenhNhan.dangKham.name}</span>
                                </Col>
                                <Col xs={6} className="min-w-90px text-start">
                                    <i className="bi bi-circle-fill  text-status-purple"></i>&nbsp;
                                    <span>{trangThaiBenhNhan.choKQCLS.name}</span>
                                </Col>
                            </Row>

                        </Col>

                    </Row>
                </div>
            </div>
            {contextMenu && <ContextMenu data={menuDsBenhNhan} target={contextMenu} handleCloseMenu={() => setContextMenu(null)} handleClickOptionContextMenu={handleClickOptionContextMenu} />}
            <DialogLichSuKham open={openLSKham} handleClose={() => setOpenLSKham(false)} />
        </>
    );
};

export default DsBenhNhan;
