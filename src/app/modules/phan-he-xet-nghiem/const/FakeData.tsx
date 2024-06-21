//@ts-nocheck
import moment from "moment";
import { TableCustomCell } from "../../component/table/components/TableCustomCell";
import { TableCustomHeader } from "../../component/table/components/TableCustomHeader";
import { DanhSachBenhPhamInterface } from "../models/DanhSachBenhPhamModels";
import { DSChiDinh } from "../models/DanhSachChiDinhModels";
import { DSKQ } from "../models/DanhSachKetQuaModels";

export const DanhSachBenhPhamFakeData: DanhSachBenhPhamInterface[] = [
    {
        soGoi: 15,
        trangThai: "Đang thực hiện",
        idTrangThai: 1,
        soPhieu: "048359324",
        barcode: "08413545654",
        maBN: "BN2212456",
        tenBN: "Nguyễn Văn A",
        gioiTinh: "Nam",
        ngaySinh: "01/01/2001",
        BHYT: "094362572453",
        khoa: "Khám bệnh",
        phongChiDinh: "Phòng khám nội tổng quát 1",
        TGChiDinh: "06/08/2023 14:45:00",
        TGLayMau: "06/08/2023 15:15:40",
        DSChiDinh: [
            {
                idNhom: "tsrhyd",
                tenNhom: "Huyết học",
                dsDichVu: [
                    {
                        maDichVu: "2567",
                        tenDichVu:
                            "Tổng phân tích tế bào máu ngoại vi (bằng máy đếm tổng trở)",
                        soLuong: 1,
                        trangThai: "Đã thực hiện",
                        ghiChu: "",
                    },
                ],
            },
            {
                idNhom: "tsrădfhyd",
                tenNhom: "Nước tiểu",
                dsDichVu: [
                    {
                        maDichVu: "6726",
                        tenDichVu: "Tổng phân tích nước tiểu (bằng máy tự động)",
                        soLuong: 1,
                        trangThai: "Chưa thực hiện",
                        ghiChu: "",
                    },
                    {
                        maDichVu: "6726",
                        tenDichVu: "Tổng phân tích nước tiểu (bằng máy tự động)",
                        soLuong: 1,
                        trangThai: "Chưa thực hiện",
                        ghiChu: "",
                    },
                    {
                        maDichVu: "6726",
                        tenDichVu: "Tổng phân tích nước tiểu (bằng máy tự động)",
                        soLuong: 1,
                        trangThai: "Chưa thực hiện",
                        ghiChu: "",
                    },
                    {
                        maDichVu: "6726",
                        tenDichVu: "Tổng phân tích nước tiểu (bằng máy tự động)",
                        soLuong: 1,
                        trangThai: "Chưa thực hiện",
                        ghiChu: "",
                    },
                ],
            },
        ],
    },
    {
        soGoi: 15,
        trangThai: "Chờ thực hiện",
        idTrangThai: 0,
        soPhieu: "048359324",
        barcode: "08413545654",
        maBN: "BN2212456",
        tenBN: "Nguyễn Văn B",
        gioiTinh: "Nam",
        ngaySinh: "01/01/2001",
        BHYT: "094362572453",
        khoa: "Khám bệnh",
        phongChiDinh: "Phòng khám nội tổng quát 1",
        TGChiDinh: "06/08/2023 14:45:00",
        TGLayMau: "06/08/2023 15:15:40",
        DSChiDinh: [
            {
                idNhom: "tsrhyd",
                tenNhom: "X-Quang",
                dsDichVu: [
                    {
                        maDichVu: "2567",
                        tenDichVu:
                            "Tổng phân tích tế bào máu ngoại vi (bằng máy đếm tổng trở)",
                        soLuong: 1,
                        trangThai: "Đã thực hiện",
                        ghiChu: "",
                    },
                ],
            },
            {
                idNhom: "tsrădfhyd",
                tenNhom: "Y học hạt nhân",
                dsDichVu: [
                    {
                        maDichVu: "6726",
                        tenDichVu: "Tổng phân tích nước tiểu (bằng máy tự động)",
                        soLuong: 1,
                        trangThai: "Chưa thực hiện",
                        ghiChu: "",
                    },
                    {
                        maDichVu: "6726",
                        tenDichVu: "Tổng phân tích nước tiểu (bằng máy tự động)",
                        soLuong: 1,
                        trangThai: "Chưa thực hiện",
                        ghiChu: "",
                    },
                    {
                        maDichVu: "6726",
                        tenDichVu: "Tổng phân tích nước tiểu (bằng máy tự động)",
                        soLuong: 1,
                        trangThai: "Chưa thực hiện",
                        ghiChu: "",
                    },
                    {
                        maDichVu: "6726",
                        tenDichVu: "Tổng phân tích nước tiểu (bằng máy tự động)",
                        soLuong: 1,
                        trangThai: "Chưa thực hiện",
                        ghiChu: "",
                    },
                ],
            },
        ],
    },
    {
        soGoi: 18,
        trangThai: "Đã tiếp nhận BP",
        idTrangThai: 2,
        soPhieu: "048359324",
        barcode: "08413545654",
        maBN: "BN2212456",
        tenBN: "Nguyễn Văn C",
        gioiTinh: "Nam",
        ngaySinh: "01/01/2001",
        BHYT: "094362572453",
        khoa: "Khám bệnh",
        phongChiDinh: "Phòng khám nội tổng quát 1",
        TGChiDinh: "06/08/2023 14:45:00",
        TGLayMau: "06/08/2023 15:15:40",
        DSChiDinh: [
            {
                idNhom: "tsrhyd",
                tenNhom: "Y học cổ truyền",
                dsDichVu: [
                    {
                        maDichVu: "2567",
                        tenDichVu:
                            "Tổng phân tích tế bào máu ngoại vi (bằng máy đếm tổng trở)",
                        soLuong: 1,
                        trangThai: "Đã thực hiện",
                        ghiChu: "",
                    },
                ],
            },
            {
                idNhom: "tsrădfhyd",
                tenNhom: "Gây mê hồi sức",
                dsDichVu: [
                    {
                        maDichVu: "6726",
                        tenDichVu: "Tổng phân tích nước tiểu (bằng máy tự động)",
                        soLuong: 1,
                        trangThai: "Chưa thực hiện",
                        ghiChu: "",
                    },
                    {
                        maDichVu: "6726",
                        tenDichVu: "Tổng phân tích nước tiểu (bằng máy tự động)",
                        soLuong: 1,
                        trangThai: "Chưa thực hiện",
                        ghiChu: "",
                    },
                    {
                        maDichVu: "6726",
                        tenDichVu: "Tổng phân tích nước tiểu (bằng máy tự động)",
                        soLuong: 1,
                        trangThai: "Chưa thực hiện",
                        ghiChu: "",
                    },
                    {
                        maDichVu: "6726",
                        tenDichVu: "Tổng phân tích nước tiểu (bằng máy tự động)",
                        soLuong: 1,
                        trangThai: "Chưa thực hiện",
                        ghiChu: "",
                    },
                ],
            },
        ],
    },
    {
        soGoi: 19,
        trangThai: "Từ chối BP",
        idTrangThai: 3,
        soPhieu: "048359324",
        barcode: "08413545654",
        maBN: "BN2212456",
        tenBN: "Nguyễn Văn C",
        gioiTinh: "Nam",
        ngaySinh: "01/01/2001",
        BHYT: "094362572453",
        khoa: "Khám bệnh",
        phongChiDinh: "Phòng khám nội tổng quát 1",
        TGChiDinh: "06/08/2023 14:45:00",
        TGLayMau: "06/08/2023 15:15:40",
        DSChiDinh: [
            {
                idNhom: "tsrhyd",
                tenNhom: "Y học hiện đại",
                dsDichVu: [
                    {
                        maDichVu: "2567",
                        tenDichVu:
                            "Tổng phân tích tế bào máu ngoại vi (bằng máy đếm tổng trở)",
                        soLuong: 1,
                        trangThai: "Đã thực hiện",
                        ghiChu: "",
                    },
                ],
            },
            {
                idNhom: "tsrădfhyd",
                tenNhom: "Châm cứu",
                dsDichVu: [
                    {
                        maDichVu: "6726",
                        tenDichVu: "Tổng phân tích nước tiểu (bằng máy tự động)",
                        soLuong: 1,
                        trangThai: "Chưa thực hiện",
                        ghiChu: "",
                    },
                    {
                        maDichVu: "6726",
                        tenDichVu: "Tổng phân tích nước tiểu (bằng máy tự động)",
                        soLuong: 1,
                        trangThai: "Chưa thực hiện",
                        ghiChu: "",
                    },
                    {
                        maDichVu: "6726",
                        tenDichVu: "Tổng phân tích nước tiểu (bằng máy tự động)",
                        soLuong: 1,
                        trangThai: "Chưa thực hiện",
                        ghiChu: "",
                    },
                    {
                        maDichVu: "6726",
                        tenDichVu: "Tổng phân tích nước tiểu (bằng máy tự động)",
                        soLuong: 1,
                        trangThai: "Chưa thực hiện",
                        ghiChu: "",
                    },
                ],
            },
        ],
    },
    {
        soGoi: 20,
        trangThai: "Đã trả kết quả",
        idTrangThai: 4,
        soPhieu: "048359324",
        barcode: "08413545654",
        maBN: "BN2212456",
        tenBN: "Nguyễn Văn C",
        gioiTinh: "Nam",
        ngaySinh: "01/01/2001",
        BHYT: "094362572453",
        khoa: "Khám bệnh",
        phongChiDinh: "Phòng khám nội tổng quát 1",
        TGChiDinh: "06/08/2023 14:45:00",
        TGLayMau: "06/08/2023 15:15:40",
        DSChiDinh: [
            {
                idNhom: "tsrhyd",
                tenNhom: "Y học cổ truyền",
                dsDichVu: [
                    {
                        maDichVu: "2567",
                        tenDichVu:
                            "Tổng phân tích tế bào máu ngoại vi (bằng máy đếm tổng trở)",
                        soLuong: 1,
                        trangThai: "Đã thực hiện",
                        ghiChu: "",
                    },
                ],
            },
            {
                idNhom: "tsrădfhyd",
                tenNhom: "Gây mê hồi sức",
                dsDichVu: [
                    {
                        maDichVu: "6726",
                        tenDichVu: "Tổng phân tích nước tiểu (bằng máy tự động)",
                        soLuong: 1,
                        trangThai: "Chưa thực hiện",
                        ghiChu: "",
                    },
                    {
                        maDichVu: "6726",
                        tenDichVu: "Tổng phân tích nước tiểu (bằng máy tự động)",
                        soLuong: 1,
                        trangThai: "Chưa thực hiện",
                        ghiChu: "",
                    },
                    {
                        maDichVu: "6726",
                        tenDichVu: "Tổng phân tích nước tiểu (bằng máy tự động)",
                        soLuong: 1,
                        trangThai: "Chưa thực hiện",
                        ghiChu: "",
                    },
                    {
                        maDichVu: "6726",
                        tenDichVu: "Tổng phân tích nước tiểu (bằng máy tự động)",
                        soLuong: 1,
                        trangThai: "Chưa thực hiện",
                        ghiChu: "",
                    },
                ],
            },
        ],
    },
];

export const DanhSachChiDinhData: DSChiDinh[] = [
    {
        idNhom: "tsrhyd",
        tenNhom: "Huyết học",
        dsDichVu: [
            {
                maDichVu: "2567",
                tenDichVu: "Tổng phân tích tế bào máu ngoại vi (bằng máy đếm tổng trở)",
                soLuong: 1,
                trangThai: "Đã thực hiện",
                ghiChu: "",
            },
        ],
    },
    {
        idNhom: "tsrădfhyd",
        tenNhom: "Nước tiểu",
        dsDichVu: [
            {
                maDichVu: "6726",
                tenDichVu: "Tổng phân tích nước tiểu (bằng máy tự động)",
                soLuong: 1,
                trangThai: "Chưa thực hiện",
                ghiChu: "",
            },
            {
                maDichVu: "6726",
                tenDichVu: "Tổng phân tích nước tiểu (bằng máy tự động)",
                soLuong: 1,
                trangThai: "Chưa thực hiện",
                ghiChu: "",
            },
            {
                maDichVu: "6726",
                tenDichVu: "Tổng phân tích nước tiểu (bằng máy tự động)",
                soLuong: 1,
                trangThai: "Chưa thực hiện",
                ghiChu: "",
            },
            {
                maDichVu: "6726",
                tenDichVu: "Tổng phân tích nước tiểu (bằng máy tự động)",
                soLuong: 1,
                trangThai: "Chưa thực hiện",
                ghiChu: "",
            },
        ],
    },
];

export const DanhSachKetQua: DSKQ[] = [
    {
        idNhom: "wegth",
        tenNhom: "Tổng phân tích tế bào máu ngoại vi (bằng máy đếm laser)",
        dsDichVu: [
            {
                barcode: "",
                maChiSo: "TT37.80.01",
                tenChiSo: "WBC: SL Bạch Cầu",
                ketQua: 0,
                triSoBinhThuong: "4 - 10",
                donViTinh: "G/l",
                soLuong: 1,
                trangThai: "Chờ xử lý",
                maMayXN: "MAY1",
                ghiChu: "",
            },
            {
                barcode: "",
                maChiSo: "TT37.80.02",
                tenChiSo: "RBC: SL Hồng cầu",
                ketQua: 0,
                triSoBinhThuong: "3.9 - 5.8",
                donViTinh: "T/l",
                soLuong: 1,
                trangThai: "Đã xử lý",
                maMayXN: "MAY2",
                ghiChu: "",
            },
            {
                barcode: "",
                maChiSo: "TT37.80.02",
                tenChiSo: "RBC: SL Hồng cầu",
                ketQua: 0,
                triSoBinhThuong: "3.9 - 5.8",
                donViTinh: "T/l",
                soLuong: 1,
                trangThai: "Đã xử lý",
                maMayXN: "MAY2",
                ghiChu: "",
            },
            {
                barcode: "",
                maChiSo: "TT37.80.02",
                tenChiSo: "RBC: SL Hồng cầu",
                ketQua: 0,
                triSoBinhThuong: "3.9 - 5.8",
                donViTinh: "T/l",
                soLuong: 1,
                trangThai: "Đã xử lý",
                maMayXN: "MAY2",
                ghiChu: "",
            },
            {
                barcode: "",
                maChiSo: "TT37.80.02",
                tenChiSo: "RBC: SL Hồng cầu",
                ketQua: 0,
                triSoBinhThuong: "3.9 - 5.8",
                donViTinh: "T/l",
                soLuong: 1,
                trangThai: "Đã xử lý",
                maMayXN: "MAY2",
                ghiChu: "",
            },
        ],
    },
    {
        idNhom: "kaej",
        tenNhom: "Tổng phân tích tế bào máu ngoại vi (bằng máy đếm tổng trở)",
        dsDichVu: [
            {
                barcode: "",
                maChiSo: "TT37.80.01",
                tenChiSo: "WBC: SL Bạch Cầu",
                ketQua: 0,
                triSoBinhThuong: "4 - 10",
                donViTinh: "G/l",
                soLuong: 1,
                trangThai: "Chờ xử lý",
                maMayXN: "MAY1",
                ghiChu: "",
            },
            {
                barcode: "",
                maChiSo: "TT37.80.02",
                tenChiSo: "RBC: SL Hồng cầu",
                ketQua: 0,
                triSoBinhThuong: "3.9 - 5.8",
                donViTinh: "T/l",
                soLuong: 1,
                trangThai: "Đã xử lý",
                maMayXN: "MAY2",
                ghiChu: "",
            },
        ],
    },
    {
        idNhom: "srtjtydj",
        tenNhom: "Tổng phân tích nước tiểu (bằng máy tự động)",
        dsDichVu: [
            {
                barcode: "",
                maChiSo: "TT37.80.01",
                tenChiSo: "WBC: SL Bạch Cầu",
                ketQua: 0,
                triSoBinhThuong: "4 - 10",
                donViTinh: "G/l",
                soLuong: 1,
                trangThai: "Chờ xử lý",
                maMayXN: "MAY1",
                ghiChu: "",
            },
            {
                barcode: "",
                maChiSo: "TT37.80.02",
                tenChiSo: "RBC: SL Hồng cầu",
                ketQua: 0,
                triSoBinhThuong: "3.9 - 5.8",
                donViTinh: "T/l",
                soLuong: 1,
                trangThai: "Đã xử lý",
                maMayXN: "MAY2",
                ghiChu: "",
            },
        ],
    },
];

export const dataLayMauBenhPham = [
    {
        idNhom: '123',
        tenXetNghiem: '[XNHH] - Xét nghiệm huyết học, Trạng thái: Đang chờ, Số phiếu: 405',
        items: [
            {
                trangThai: <><i className="bi bi-circle-fill pe-2 text-status-yellow"></i>&nbsp;</>,
                tenXetNghiem: 'Thời gian máu chảy phương pháp Ivy',
                soLuong: '1',
                items: [
                    {
                        trangThai: <><i className="bi bi-circle-fill pe-2 text-status-yellow"></i>&nbsp;</>,
                        tenXetNghiem: 'Thời gian máu chảy phương pháp Ivy',
                        soLuong: '1',
                    },
                    {
                        trangThai: <><i className="bi bi-circle-fill pe-2 text-status-yellow"></i>&nbsp;</>,
                        tenXetNghiem: 'Thời gian máu chảy phương pháp Ivy',
                        soLuong: '1',
                    },
                    {
                        trangThai: <><i className="bi bi-circle-fill pe-2 text-status-yellow"></i>&nbsp;</>,
                        tenXetNghiem: 'Thời gian máu chảy phương pháp Ivy',
                        soLuong: '1',
                    },
                ]
            }
        ],
    },
    {
        idNhom: '124',
        tenXetNghiem: '[XNNT] - Xét nghiệm nước tiểu, Trạng thái: Đang chờ, Số phiếu: 407',
        items: [
            {
                trangThai: <><i className="bi bi-circle-fill pe-2 text-status-yellow"></i>&nbsp;</>,
                tenXetNghiem: 'Đặc tính Prophyrin',
                soLuong: '1',
            }
        ],
    },
    {
        idNhom: '125',
        tenXetNghiem: '[XNVS] - Xét nghiệm vi sinh, Trạng thái: Đang chờ, Số phiếu: 406',
        items: [
            {
                trangThai: <><i className="bi bi-circle-fill pe-2 text-status-yellow"></i>&nbsp;</>,
                tenXetNghiem: 'Vi hệ đường ruột',
                soLuong: '1',
            }
        ],
    },
]

export const DS_PHONG_THUC_HIEN_XN_DATA = [
    { soPhong: 1, tenPhong: "Xét nghiệm huyết học" },
    { soPhong: 2, tenPhong: "Xét nghiệm nước tiểu" },
    { soPhong: 3, tenPhong: "Xét nghiệm vi sinh" },
];
export const columnsTableTest = [

    {
        Header: (props) => (
            <TableCustomHeader
                tableProps={props}
                title={"Tên xét nghiệm"}
                className="text-start text-light min-w-200px p-0"
            />
        ),
        accessor: "tenXetNghiem",
        isSticky: true,
        id: "tenXetNghiem",
        Cell: ({ value }) => (
            <TableCustomCell
                className="text-start"
                data={value}
            />
        ),
    },
    {
        Header: (props) => (
            <TableCustomHeader
                tableProps={props}
                title={"Số lượng"}
                className="text-center text-light min-w-80px p-0"
            />
        ),
        accessor: "soLuong",
        id: "soLuong",

        Cell: ({ value }) => (
            <TableCustomCell
                className="text-center"
                data={value}
            />
        ),
    },
    {
        Header: (props) => (
            <TableCustomHeader
                tableProps={props}
                title={"Kết Quả"}
                className="text-center text-light min-w-100px p-0"
            />
        ),
        accessor: "ketQua",
        id: "ketQua",
        editable: true,
        Cell: ({ value }) => (
            <TableCustomCell
                className="text-start"
                data={value}
            />
        ),
    },
    {
        Header: (props) => (
            <TableCustomHeader
                tableProps={props}
                title={"Loại Bệnh Phẩm"}
                className="text-center text-light min-w-100px p-0"
            />
        ),
        accessor: "loaiBenhPham",
        id: "loaiBenhPham",
        Cell: ({ value }) => (
            <TableCustomCell
                className="text-start"
                data={value}
            />
        ),
    },
    {
        Header: (props) => (
            <TableCustomHeader
                tableProps={props}
                title={"DownLoad"}
                className="text-center text-light min-w-100px p-0"
            />
        ),
        accessor: "download",
        id: "download",
        Cell: ({ value }) => (
            <TableCustomCell
                className="text-start"
                data={value}
            />
        ),
    },
    {
        Header: (props) => (
            <TableCustomHeader
                tableProps={props}
                title={"Máy DownLoad"}
                className="text-center text-light min-w-100px p-0"
            />
        ),
        accessor: "mayDownLoad",
        id: "mayDownLoad",
        Cell: ({ value }) => (
            <TableCustomCell
                className="text-start"
                data={value}
            />
        ),
    },
    {
        Header: (props) => (
            <TableCustomHeader
                tableProps={props}
                title={"Ghi chú(Thực hiện)"}
                className="text-center text-light min-w-100px p-0"
            />
        ),
        accessor: "mayDownLoad",
        id: "mayDownLoad2",
        Cell: ({ value }) => (
            <TableCustomCell
                className="text-start"
                data={value}
            />
        ),
    },
    {
        Header: (props) => (
            <TableCustomHeader
                tableProps={props}
                title={"Máy XN/Người nhập"}
                className="text-center text-light min-w-100px p-0"
            />
        ),
        accessor: "mayDownLoad",
        id: "mayDownLoad3",
        Cell: ({ value }) => (
            <TableCustomCell
                className="text-start"
                data={value}
            />
        ),
    },
    {
        Header: (props) => (
            <TableCustomHeader
                tableProps={props}
                title={"Máy cận lâm sàng"}
                className="text-center text-light min-w-100px p-0"
            />
        ),
        accessor: "mayDownLoad",
        id: "mayDownLoad4",
        Cell: ({ value }) => (
            <TableCustomCell
                className="text-start"
                data={value}
            />
        ),
    },
    {
        Header: (props) => (
            <TableCustomHeader
                tableProps={props}
                title={"Mã quy trình"}
                className="text-center text-light min-w-100px p-0"
            />
        ),
        accessor: "mayDownLoad",
        id: "mayDownLoad5",
        Cell: ({ value }) => (
            <TableCustomCell
                className="text-start"
                data={value}
            />
        ),
    },

]
export const dataTableTest = [
    {
        "tenXetNghiem": "Huyết học",
        "items": [
            {
                "tenXetNghiem": "Tìm Mảnh vỡ hồng cầu",
                "soLuong": "1",
                "ketQua": 6,
                "loaiBenhPham": 1,
                "mayDownLoad": 79,
                "download": "relationship",
            },
            {
                "tenXetNghiem": "Tìm số lượng bạch cầu",
                "soLuong": "1",
                "ketQua": 92,
                "loaiBenhPham": 1,
                "mayDownLoad": 79,
                "download": "relationship",
            },
        ]
    },
    {
        "tenXetNghiem": "Huyết học 2",
        "items": [
            {
                "tenXetNghiem": "Tìm Mảnh vỡ hồng cầu",
                "soLuong": "1",
                "ketQua": 6,
                "loaiBenhPham": 1,
                "mayDownLoad": 79,
                "download": "relationship",
                "items": [
                    {
                        "tenXetNghiem": "Tìm Mảnh vỡ hồng cầu",
                        "soLuong": "1",
                        "ketQua": 6,
                        "loaiBenhPham": 1,
                        "mayDownLoad": 79,
                        "download": "relationship",
                    },
                    {
                        "tenXetNghiem": "Tìm Mảnh vỡ hồng cầu",
                        "soLuong": "1",
                        "ketQua": 6,
                        "loaiBenhPham": 1,
                        "mayDownLoad": 79,
                        "download": "relationship",
                    },]
            },
            {
                "tenXetNghiem": "Tìm số lượng bạch cầu",
                "soLuong": "1",
                "ketQua": 92,
                "loaiBenhPham": 1,
                "mayDownLoad": 79,
                "download": "relationship",
            },
        ]
    },

]

export const fakeListBNXN: any[] = [
    {
        hoTen: "Nguyễn Trần Trung Quân",
        age: 25,
        barCode: "1042",
        maBenhPham: "XN2321152",
        trangThai: 3,
        gioiTinh: "Nam",
        loaiDoiTuong: 1,
        loaiTiepNhan: 1,
        maBn: "BN20023",
        cccd: "00323335967",
        uuTien: 1,
        diaChi: "29 Cát Linh, P. Giảng Võ, Q.Ba Đình, Hà Nội",
        thongTinXetNghiem: {
            chanDoan: "Z-40 - Phẫu thuật dự phòng",
            thongTinChiDinh: "Quản Trị Hệ Thống chỉ định lúc 17:31 30/10/2023 (YL: 17:31 30/10/2023) tại Phòng khám sức khỏe",
            maPhieuThucHien: "MP00065",
            datThucHien: false,
            dsXetNghiem: [
                {
                    "tenXetNghiem": "Huyết học",
                    "items": [
                        {
                            "tenXetNghiem": "Tìm Mảnh vỡ hồng cầu",
                            "soLuong": "1",
                            "ketQua": "",
                            "loaiBenhPham": 1,
                            "mayDownLoad": 79,
                            "download": "relationship",
                        },
                        {
                            "tenXetNghiem": "Tìm Mảnh vỡ hồng cầu",
                            "soLuong": "1",
                            "ketQua": "",
                            "loaiBenhPham": 1,
                            "mayDownLoad": 79,
                            "download": "relationship",
                        },
                        {
                            "tenXetNghiem": "Tìm Mảnh vỡ hồng cầu 1",
                            "soLuong": "1",
                            "ketQua": "",
                            "loaiBenhPham": 1,
                            "mayDownLoad": 79,
                            "download": "relationship",
                        },
                        {
                            "tenXetNghiem": "Tìm Mảnh vỡ hồng cầu 2",
                            "soLuong": "1",
                            "ketQua": "",
                            "loaiBenhPham": 1,
                            "mayDownLoad": 79,
                            "download": "relationship",
                        },
                        {
                            "tenXetNghiem": "Tìm Mảnh vỡ hồng cầu 3",
                            "soLuong": "1",
                            "ketQua": "",
                            "loaiBenhPham": 1,
                            "mayDownLoad": 79,
                            "download": "relationship",
                        },
                    ]
                },
                {
                    "tenXetNghiem": "Xét nghiệm nước tiểu",
                    "items": [
                        {
                            "tenXetNghiem": "Phân tích nồng độ PH",
                            "soLuong": "1",
                            "ketQua": "",
                            "loaiBenhPham": 1,
                            "mayDownLoad": 79,
                            "download": "relationship",
                        },
                        {
                            "tenXetNghiem": "Phân tích nồng độ PH 1",
                            "soLuong": "1",
                            "ketQua": "",
                            "loaiBenhPham": 1,
                            "mayDownLoad": 79,
                            "download": "relationship",
                        },
                        {
                            "tenXetNghiem": "Phân tích nồng độ PH 2",
                            "soLuong": "1",
                            "ketQua": "",
                            "loaiBenhPham": 1,
                            "mayDownLoad": 79,
                            "download": "relationship",
                        },
                        {
                            "tenXetNghiem": "Phân tích nồng độ PH 3",
                            "soLuong": "1",
                            "ketQua": "",
                            "loaiBenhPham": 1,
                            "mayDownLoad": 79,
                            "download": "relationship",
                        },
                        {
                            "tenXetNghiem": "Phân tích nồng độ PH 4",
                            "soLuong": "1",
                            "ketQua": "",
                            "loaiBenhPham": 1,
                            "mayDownLoad": 79,
                            "download": "relationship",
                        },
                        {
                            "tenXetNghiem": "Phân tích nồng độ PH 5",
                            "soLuong": "1",
                            "ketQua": "",
                            "loaiBenhPham": 1,
                            "mayDownLoad": 79,
                            "download": "relationship",
                        },
                        {
                            "tenXetNghiem": "Phân tích nồng độ PH 6",
                            "soLuong": "1",
                            "ketQua": "",
                            "loaiBenhPham": 1,
                            "mayDownLoad": 79,
                            "download": "relationship",
                        },
                    ]
                },
            ]
        },
        layMauBenhPham: {
            daLayMau: false,
            ngayChiDinh: moment().format('HH:mm - DD/MM/YYYY'),
            batDauLayMau: moment().format('HH:mm - DD/MM/YYYY'),
            nguoiChiDinh: "Bs Chung",
            noiChiDinh: "Phòng khám hô hấp",
            noiLayMau: "P.405 OCT",
            nguoiLayMau: "Trung"

        }
    },
    {
        hoTen: "Nguyễn Đức Cường",
        age: 25,
        barCode: "1043",
        maBenhPham: "XN2321952",
        trangThai: 1,
        gioiTinh: "Nam",
        loaiDoiTuong: 2,
        loaiTiepNhan: 2,
        maBn: "BN20024",
        cccd: "00323335967",
        uuTien: 2,
        diaChi: "29 Cát Linh, P. Giảng Võ, Q.Ba Đình, Hà Nội",
        dsDichVu: [],
        xetNghiem: [],
        layMauBenhPham: {
            ngayChiDinh: moment().format('HH:mm - DD/MM/YYYY'),
            batDauLayMau: moment().format('HH:mm - DD/MM/YYYY'),
            nguoiChiDinh: "Bs Chung",
            noiChiDinh: "Phòng khám P12",
            noiLayMau: "P.405 OCT",
            nguoiLayMau: "Trung",
            daLayMau: true,
            thongTinLayMau: "Quản Trị Hệ Thống chỉ định lúc 17:31 30/10/2023 (YL: 17:31 30/10/2023) tại Phòng khám sức khỏe"

        },
        thongTinXetNghiem: {
            chanDoan: "Z-45 - Phẫu thuật dự phòng",
            thongTinChiDinh: "Quản Trị Hệ Thống chỉ định lúc 17:31 30/10/2023 (YL: 17:31 30/10/2023) tại Phòng khám sức khỏe",
            maPhieuThucHien: "MP00065",
            dangThucHien: false,
            dsXetNghiem: [
                {
                    "tenXetNghiem": "Huyết học",
                    "items": [
                        {
                            "tenXetNghiem": "Tìm Mảnh vỡ hồng cầu",
                            "soLuong": "1",
                            "ketQua": "",
                            "loaiBenhPham": 1,
                            "mayDownLoad": 79,
                            "download": "relationship",
                        },
                    ]
                },
            ]
        },
    },
    {
        hoTen: "Phan Mạnh Quỳnh",
        age: 25,
        barCode: "1032",
        maBenhPham: "XN2321152",
        trangThai: 2,
        gioiTinh: "Nam",
        loaiDoiTuong: 1,
        loaiTiepNhan: 1,
        maBn: "BN20025",
        cccd: "00323338967",
        uuTien: 1,
        diaChi: "29 Cát Linh, P. Giảng Võ, Q.Ba Đình, Hà Nội",
        dsDichVu: [],
        layMauBenhPham: {
            daLayMau: true,
            ngayChiDinh: moment().format('HH:mm - DD/MM/YYYY'),
            batDauLayMau: moment().format('HH:mm - DD/MM/YYYY'),
            nguoiChiDinh: "Bs Chung",
            noiChiDinh: "Phòng khám P16",
            noiLayMau: "P.405 OCT",
            nguoiLayMau: "Trung"

        },
        thongTinXetNghiem: {
            chanDoan: "Z-45 - Phẫu thuật dự phòng",
            thongTinChiDinh: "Quản Trị Hệ Thống chỉ định lúc 17:31 30/10/2023 (YL: 17:31 30/10/2023) tại Phòng khám sức khỏe",
            maPhieuThucHien: "MP00065",
            dsXetNghiem: [
                {
                    "tenXetNghiem": "Huyết học",
                    "items": [
                        {
                            "tenXetNghiem": " Tìm Mảnh vỡ hồng cầu",
                            "soLuong": "1",
                            "ketQua": "",
                            "loaiBenhPham": 1,
                            "mayDownLoad": 79,
                            "download": "relationship",
                        },
                    ]
                },
                {
                    "tenXetNghiem": "Xét nghiệm nước tiểu",
                    "items": [
                        {
                            "tenXetNghiem": "Phân tích nồng độ PH",
                            "soLuong": "1",
                            "ketQua": "",
                            "loaiBenhPham": 1,
                            "mayDownLoad": 79,
                            "download": "relationship",
                        },
                    ]
                },
            ]

        },

    },
    {
        hoTen: "Phùng Thanh Độ",
        age: 25,
        barCode: "1342",
        maBenhPham: "XN2361152",
        trangThai: 4,
        gioiTinh: "Nam",
        loaiDoiTuong: 2,
        loaiTiepNhan: 2,
        maBn: "BN20026",
        cccd: "00323335967",
        uuTien: 1,
        diaChi: "29 Cát Linh, P. Giảng Võ, Q.Ba Đình, Hà Nội",
        dsDichVu: [],
        layMauBenhPham: {
            daLayMau: true,
            thongTinLayMau: "Quản Trị Hệ Thống chỉ định lúc 17:31 30/10/2023 (YL: 17:31 30/10/2023) tại Phòng khám sức khỏe",
            ngayChiDinh: moment().format('HH:mm - DD/MM/YYYY'),
            batDauLayMau: moment().format('HH:mm - DD/MM/YYYY'),
            nguoiChiDinh: "Bs Chung",
            noiChiDinh: "Phòng khám P92",
            noiLayMau: "P.405 OCT",
            nguoiLayMau: "Trung"

        },
        thongTinXetNghiem: {
            chanDoan: "Z-40 - Phẫu thuật dự phòng",
            thongTinChiDinh: "Quản Trị Hệ Thống chỉ định lúc 17:31 30/10/2023 (YL: 17:31 30/10/2023) tại Phòng khám sức khỏe",
            maPhieuThucHien: "MP00065",
            dsXetNghiem: [
                {
                    "tenXetNghiem": "Huyết học",
                    "items": [
                        {
                            "tenXetNghiem": "Tìm Mảnh vỡ hồng cầu",
                            "soLuong": "1",
                            "ketQua": "",
                            "loaiBenhPham": 1,
                            "mayDownLoad": 79,
                            "download": "relationship",
                        },
                        {
                            "tenXetNghiem": "Tìm Mảnh vỡ hồng cầu",
                            "soLuong": "1",
                            "ketQua": "",
                            "loaiBenhPham": 1,
                            "mayDownLoad": 79,
                            "download": "relationship",
                        },
                        {
                            "tenXetNghiem": "Tìm Mảnh vỡ hồng cầu 2",
                            "soLuong": "1",
                            "ketQua": "",
                            "loaiBenhPham": 1,
                            "mayDownLoad": 79,
                            "download": "relationship",
                        },
                        {
                            "tenXetNghiem": "Tìm Mảnh vỡ hồng cầu 3",
                            "soLuong": "1",
                            "ketQua": "",
                            "loaiBenhPham": 1,
                            "mayDownLoad": 79,
                            "download": "relationship",
                        },
                    ]
                },
                {
                    "tenXetNghiem": "Xét nghiệm nước tiểu",
                    "items": [
                        {
                            "tenXetNghiem": "Phân tích nồng độ PH",
                            "soLuong": "1",
                            "ketQua": "",
                            "loaiBenhPham": 1,
                            "mayDownLoad": 79,
                            "download": "relationship",
                        },
                    ]
                },
                {
                    "tenXetNghiem": "Xét nghiệm mao mạch",
                    "items": [
                        {
                            "tenXetNghiem": "Đô độ dãn thành mạch",
                            "soLuong": "1",
                            "ketQua": "",
                            "loaiBenhPham": 1,
                            "mayDownLoad": 79,
                            "download": "relationship",
                        },
                    ]
                },
            ]
        },
    },
    {
        hoTen: "Nguyễn Du",
        age: 25,
        barCode: "2042",
        maBenhPham: "XN2324152",
        trangThai: 6,
        gioiTinh: "Nam",
        loaiDoiTuong: 2,
        loaiTiepNhan: 1,
        maBn: "BN20027",
        cccd: "00323335967",
        uuTien: 2,
        diaChi: "29 Cát Linh, P. Giảng Võ, Q.Ba Đình, Hà Nội",
        dsDichVu: [],
        layMauBenhPham: {
            daLayMau: false,
            ngayChiDinh: moment().format('HH:mm - DD/MM/YYYY'),
            batDauLayMau: moment().format('HH:mm - DD/MM/YYYY'),
            nguoiChiDinh: "Bs Chung",
            noiChiDinh: "Phòng khám hô hấp",
            noiLayMau: "P.405 OCT",
            nguoiLayMau: "Trung"

        },
        thongTinXetNghiem: {
            chanDoan: "Z-40 - Phẫu thuật dự phòng",
            thongTinChiDinh: "Quản Trị Hệ Thống chỉ định lúc 17:31 30/10/2023 (YL: 17:31 30/10/2023) tại Phòng khám sức khỏe",
            maPhieuThucHien: "MP00065",
            dangThucHien: false,
            dsXetNghiem: [
                {
                    "tenXetNghiem": "Huyết học",
                    "items": [
                        {
                            "tenXetNghiem": "Tìm Mảnh vỡ hồng cầu",
                            "soLuong": "1",
                            "ketQua": "",
                            "loaiBenhPham": 1,
                            "mayDownLoad": 79,
                            "download": "relationship",
                        },
                    ]
                },
                {
                    "tenXetNghiem": "Xét nghiệm nước tiểu",
                    "items": [
                        {
                            "tenXetNghiem": "Phân tích nồng độ PH",
                            "soLuong": "1",
                            "ketQua": "",
                            "loaiBenhPham": 1,
                            "mayDownLoad": 79,
                            "download": "relationship",
                        },
                    ]
                },
            ]
        },
    },
    {
        hoTen: "Nguyễn Ánh Viên",
        age: 25,
        barCode: "5042",
        maBenhPham: "XN2321152",
        trangThai: 5,
        gioiTinh: "Nữ",
        loaiDoiTuong: 1,
        loaiTiepNhan: 2,
        maBn: "BN20028",
        cccd: "00323335967",
        uuTien: 2,
        diaChi: "29 Cát Linh, P. Giảng Võ, Q.Ba Đình, Hà Nội",
        dsDichVu: [],
        layMauBenhPham: {
            daLayMau: false,
            ngayChiDinh: moment().format('HH:mm - DD/MM/YYYY'),
            batDauLayMau: moment().format('HH:mm - DD/MM/YYYY'),
            nguoiChiDinh: "Bs Chung",
            noiChiDinh: "Phòng khám P38",
            noiLayMau: "P.405 OCT",
            nguoiLayMau: "Trung"

        },
        thongTinXetNghiem: {
            chanDoan: "Z-40 - Phẫu thuật dự phòng",
            thongTinChiDinh: "Quản Trị Hệ Thống chỉ định lúc 17:31 30/10/2023 (YL: 17:31 30/10/2023) tại Phòng khám sức khỏe",
            maPhieuThucHien: "MP00065",
        },
    },
    {
        hoTen: "Trịnh Ánh Hồng",
        age: 25,
        barCode: "5042",
        maBenhPham: "XN2321152",
        trangThai: 5,
        gioiTinh: "Nữ",
        loaiDoiTuong: 1,
        loaiTiepNhan: 2,
        maBn: "BN20028",
        cccd: "00323335967",
        uuTien: 2,
        diaChi: "29 Cát Linh, P. Giảng Võ, Q.Ba Đình, Hà Nội",
        dsDichVu: [],
        layMauBenhPham: {
            daLayMau: false,
            ngayChiDinh: moment().format('HH:mm - DD/MM/YYYY'),
            batDauLayMau: moment().format('HH:mm - DD/MM/YYYY'),
            nguoiChiDinh: "Bs Chung",
            noiChiDinh: "Phòng khám P38",
            noiLayMau: "P.405 OCT",
            nguoiLayMau: "Trung"

        },
        thongTinXetNghiem: {
            chanDoan: "Z-40 - Phẫu thuật dự phòng",
            thongTinChiDinh: "Quản Trị Hệ Thống chỉ định lúc 17:31 30/10/2023 (YL: 17:31 30/10/2023) tại Phòng khám sức khỏe",
            maPhieuThucHien: "MP00065",
            dangThucHien: false,
            dsXetNghiem: [
                {
                    "tenXetNghiem": "Huyết học",
                    "items": [
                        {
                            "tenXetNghiem": "Tìm Mảnh vỡ hồng cầu",
                            "soLuong": "1",
                            "ketQua": 6,
                            "loaiBenhPham": 1,
                            "mayDownLoad": 79,
                            "download": "relationship",
                        },
                    ]
                },
            ]
        },
    },
    {
        hoTen: "Nguyễn Trần Trung Quân",
        age: 25,
        barCode: "1042",
        maBenhPham: "XN2321152",
        trangThai: 3,
        gioiTinh: "Nam",
        loaiDoiTuong: 1,
        loaiTiepNhan: 1,
        maBn: "BN20023",
        cccd: "00323335967",
        uuTien: 1,
        diaChi: "29 Cát Linh, P. Giảng Võ, Q.Ba Đình, Hà Nội",
        thongTinXetNghiem: {
            chanDoan: "Z-40 - Phẫu thuật dự phòng",
            thongTinChiDinh: "Quản Trị Hệ Thống chỉ định lúc 17:31 30/10/2023 (YL: 17:31 30/10/2023) tại Phòng khám sức khỏe",
            maPhieuThucHien: "MP00065",
            datThucHien: false,
            dsXetNghiem: [
                {
                    "tenXetNghiem": "Huyết học",
                    "items": [
                        {
                            "tenXetNghiem": "Tìm Mảnh vỡ hồng cầu",
                            "soLuong": "1",
                            "ketQua": "",
                            "loaiBenhPham": 1,
                            "mayDownLoad": 79,
                            "download": "relationship",
                        },
                        {
                            "tenXetNghiem": "Tìm Mảnh vỡ hồng cầu",
                            "soLuong": "1",
                            "ketQua": "",
                            "loaiBenhPham": 1,
                            "mayDownLoad": 79,
                            "download": "relationship",
                        },
                        {
                            "tenXetNghiem": "Tìm Mảnh vỡ hồng cầu 1",
                            "soLuong": "1",
                            "ketQua": "",
                            "loaiBenhPham": 1,
                            "mayDownLoad": 79,
                            "download": "relationship",
                        },
                        {
                            "tenXetNghiem": "Tìm Mảnh vỡ hồng cầu 2",
                            "soLuong": "1",
                            "ketQua": "",
                            "loaiBenhPham": 1,
                            "mayDownLoad": 79,
                            "download": "relationship",
                        },
                        {
                            "tenXetNghiem": "Tìm Mảnh vỡ hồng cầu 3",
                            "soLuong": "1",
                            "ketQua": "",
                            "loaiBenhPham": 1,
                            "mayDownLoad": 79,
                            "download": "relationship",
                        },
                    ]
                },
                {
                    "tenXetNghiem": "Xét nghiệm nước tiểu",
                    "items": [
                        {
                            "tenXetNghiem": "Phân tích nồng độ PH",
                            "soLuong": "1",
                            "ketQua": "",
                            "loaiBenhPham": 1,
                            "mayDownLoad": 79,
                            "download": "relationship",
                        },
                        {
                            "tenXetNghiem": "Phân tích nồng độ PH 1",
                            "soLuong": "1",
                            "ketQua": "",
                            "loaiBenhPham": 1,
                            "mayDownLoad": 79,
                            "download": "relationship",
                        },
                        {
                            "tenXetNghiem": "Phân tích nồng độ PH 2",
                            "soLuong": "1",
                            "ketQua": "",
                            "loaiBenhPham": 1,
                            "mayDownLoad": 79,
                            "download": "relationship",
                        },
                        {
                            "tenXetNghiem": "Phân tích nồng độ PH 3",
                            "soLuong": "1",
                            "ketQua": "",
                            "loaiBenhPham": 1,
                            "mayDownLoad": 79,
                            "download": "relationship",
                        },
                        {
                            "tenXetNghiem": "Phân tích nồng độ PH 4",
                            "soLuong": "1",
                            "ketQua": "",
                            "loaiBenhPham": 1,
                            "mayDownLoad": 79,
                            "download": "relationship",
                        },
                        {
                            "tenXetNghiem": "Phân tích nồng độ PH 5",
                            "soLuong": "1",
                            "ketQua": "",
                            "loaiBenhPham": 1,
                            "mayDownLoad": 79,
                            "download": "relationship",
                        },
                        {
                            "tenXetNghiem": "Phân tích nồng độ PH 6",
                            "soLuong": "1",
                            "ketQua": "",
                            "loaiBenhPham": 1,
                            "mayDownLoad": 79,
                            "download": "relationship",
                        },
                    ]
                },
            ]
        },
        layMauBenhPham: {
            daLayMau: false,
            ngayChiDinh: moment().format('HH:mm - DD/MM/YYYY'),
            batDauLayMau: moment().format('HH:mm - DD/MM/YYYY'),
            nguoiChiDinh: "Bs Chung",
            noiChiDinh: "Phòng khám hô hấp",
            noiLayMau: "P.405 OCT",
            nguoiLayMau: "Trung"

        }
    },
    {
        hoTen: "Nguyễn Đức Cường",
        age: 25,
        barCode: "1043",
        maBenhPham: "XN2321952",
        trangThai: 1,
        gioiTinh: "Nam",
        loaiDoiTuong: 2,
        loaiTiepNhan: 2,
        maBn: "BN20024",
        cccd: "00323335967",
        uuTien: 2,
        diaChi: "29 Cát Linh, P. Giảng Võ, Q.Ba Đình, Hà Nội",
        dsDichVu: [],
        xetNghiem: [],
        layMauBenhPham: {
            ngayChiDinh: moment().format('HH:mm - DD/MM/YYYY'),
            batDauLayMau: moment().format('HH:mm - DD/MM/YYYY'),
            nguoiChiDinh: "Bs Chung",
            noiChiDinh: "Phòng khám P12",
            noiLayMau: "P.405 OCT",
            nguoiLayMau: "Trung",
            daLayMau: true,
            thongTinLayMau: "Quản Trị Hệ Thống chỉ định lúc 17:31 30/10/2023 (YL: 17:31 30/10/2023) tại Phòng khám sức khỏe"

        },
        thongTinXetNghiem: {
            chanDoan: "Z-45 - Phẫu thuật dự phòng",
            thongTinChiDinh: "Quản Trị Hệ Thống chỉ định lúc 17:31 30/10/2023 (YL: 17:31 30/10/2023) tại Phòng khám sức khỏe",
            maPhieuThucHien: "MP00065",
            dangThucHien: false,
            dsXetNghiem: [
                {
                    "tenXetNghiem": "Huyết học",
                    "items": [
                        {
                            "tenXetNghiem": "Tìm Mảnh vỡ hồng cầu",
                            "soLuong": "1",
                            "ketQua": "",
                            "loaiBenhPham": 1,
                            "mayDownLoad": 79,
                            "download": "relationship",
                        },
                    ]
                },
            ]
        },
    },
    {
        hoTen: "Phan Mạnh Quỳnh",
        age: 25,
        barCode: "1032",
        maBenhPham: "XN2321152",
        trangThai: 2,
        gioiTinh: "Nam",
        loaiDoiTuong: 1,
        loaiTiepNhan: 1,
        maBn: "BN20025",
        cccd: "00323338967",
        uuTien: 1,
        diaChi: "29 Cát Linh, P. Giảng Võ, Q.Ba Đình, Hà Nội",
        dsDichVu: [],
        layMauBenhPham: {
            daLayMau: true,
            ngayChiDinh: moment().format('HH:mm - DD/MM/YYYY'),
            batDauLayMau: moment().format('HH:mm - DD/MM/YYYY'),
            nguoiChiDinh: "Bs Chung",
            noiChiDinh: "Phòng khám P16",
            noiLayMau: "P.405 OCT",
            nguoiLayMau: "Trung"

        },
        thongTinXetNghiem: {
            chanDoan: "Z-45 - Phẫu thuật dự phòng",
            thongTinChiDinh: "Quản Trị Hệ Thống chỉ định lúc 17:31 30/10/2023 (YL: 17:31 30/10/2023) tại Phòng khám sức khỏe",
            maPhieuThucHien: "MP00065",
            dsXetNghiem: [
                {
                    "tenXetNghiem": "Huyết học",
                    "items": [
                        {
                            "tenXetNghiem": " Tìm Mảnh vỡ hồng cầu",
                            "soLuong": "1",
                            "ketQua": "",
                            "loaiBenhPham": 1,
                            "mayDownLoad": 79,
                            "download": "relationship",
                        },
                    ]
                },
                {
                    "tenXetNghiem": "Xét nghiệm nước tiểu",
                    "items": [
                        {
                            "tenXetNghiem": "Phân tích nồng độ PH",
                            "soLuong": "1",
                            "ketQua": "",
                            "loaiBenhPham": 1,
                            "mayDownLoad": 79,
                            "download": "relationship",
                        },
                    ]
                },
            ]

        },

    },
    {
        hoTen: "Phùng Thanh Độ",
        age: 25,
        barCode: "1342",
        maBenhPham: "XN2361152",
        trangThai: 4,
        gioiTinh: "Nam",
        loaiDoiTuong: 2,
        loaiTiepNhan: 2,
        maBn: "BN20026",
        cccd: "00323335967",
        uuTien: 1,
        diaChi: "29 Cát Linh, P. Giảng Võ, Q.Ba Đình, Hà Nội",
        dsDichVu: [],
        layMauBenhPham: {
            daLayMau: true,
            thongTinLayMau: "Quản Trị Hệ Thống chỉ định lúc 17:31 30/10/2023 (YL: 17:31 30/10/2023) tại Phòng khám sức khỏe",
            ngayChiDinh: moment().format('HH:mm - DD/MM/YYYY'),
            batDauLayMau: moment().format('HH:mm - DD/MM/YYYY'),
            nguoiChiDinh: "Bs Chung",
            noiChiDinh: "Phòng khám P92",
            noiLayMau: "P.405 OCT",
            nguoiLayMau: "Trung"

        },
        thongTinXetNghiem: {
            chanDoan: "Z-40 - Phẫu thuật dự phòng",
            thongTinChiDinh: "Quản Trị Hệ Thống chỉ định lúc 17:31 30/10/2023 (YL: 17:31 30/10/2023) tại Phòng khám sức khỏe",
            maPhieuThucHien: "MP00065",
            dsXetNghiem: [
                {
                    "tenXetNghiem": "Huyết học",
                    "items": [
                        {
                            "tenXetNghiem": "Tìm Mảnh vỡ hồng cầu",
                            "soLuong": "1",
                            "ketQua": "",
                            "loaiBenhPham": 1,
                            "mayDownLoad": 79,
                            "download": "relationship",
                        },
                        {
                            "tenXetNghiem": "Tìm Mảnh vỡ hồng cầu",
                            "soLuong": "1",
                            "ketQua": "",
                            "loaiBenhPham": 1,
                            "mayDownLoad": 79,
                            "download": "relationship",
                        },
                        {
                            "tenXetNghiem": "Tìm Mảnh vỡ hồng cầu 2",
                            "soLuong": "1",
                            "ketQua": "",
                            "loaiBenhPham": 1,
                            "mayDownLoad": 79,
                            "download": "relationship",
                        },
                        {
                            "tenXetNghiem": "Tìm Mảnh vỡ hồng cầu 3",
                            "soLuong": "1",
                            "ketQua": "",
                            "loaiBenhPham": 1,
                            "mayDownLoad": 79,
                            "download": "relationship",
                        },
                    ]
                },
                {
                    "tenXetNghiem": "Xét nghiệm nước tiểu",
                    "items": [
                        {
                            "tenXetNghiem": "Phân tích nồng độ PH",
                            "soLuong": "1",
                            "ketQua": "",
                            "loaiBenhPham": 1,
                            "mayDownLoad": 79,
                            "download": "relationship",
                        },
                    ]
                },
                {
                    "tenXetNghiem": "Xét nghiệm mao mạch",
                    "items": [
                        {
                            "tenXetNghiem": "Đô độ dãn thành mạch",
                            "soLuong": "1",
                            "ketQua": "",
                            "loaiBenhPham": 1,
                            "mayDownLoad": 79,
                            "download": "relationship",
                        },
                    ]
                },
            ]
        },
    },
    {
        hoTen: "Nguyễn Du",
        age: 25,
        barCode: "2042",
        maBenhPham: "XN2324152",
        trangThai: 6,
        gioiTinh: "Nam",
        loaiDoiTuong: 2,
        loaiTiepNhan: 1,
        maBn: "BN20027",
        cccd: "00323335967",
        uuTien: 2,
        diaChi: "29 Cát Linh, P. Giảng Võ, Q.Ba Đình, Hà Nội",
        dsDichVu: [],
        layMauBenhPham: {
            daLayMau: false,
            ngayChiDinh: moment().format('HH:mm - DD/MM/YYYY'),
            batDauLayMau: moment().format('HH:mm - DD/MM/YYYY'),
            nguoiChiDinh: "Bs Chung",
            noiChiDinh: "Phòng khám hô hấp",
            noiLayMau: "P.405 OCT",
            nguoiLayMau: "Trung"

        },
        thongTinXetNghiem: {
            chanDoan: "Z-40 - Phẫu thuật dự phòng",
            thongTinChiDinh: "Quản Trị Hệ Thống chỉ định lúc 17:31 30/10/2023 (YL: 17:31 30/10/2023) tại Phòng khám sức khỏe",
            maPhieuThucHien: "MP00065",
            dangThucHien: false,
            dsXetNghiem: [
                {
                    "tenXetNghiem": "Huyết học",
                    "items": [
                        {
                            "tenXetNghiem": "Tìm Mảnh vỡ hồng cầu",
                            "soLuong": "1",
                            "ketQua": "",
                            "loaiBenhPham": 1,
                            "mayDownLoad": 79,
                            "download": "relationship",
                        },
                    ]
                },
                {
                    "tenXetNghiem": "Xét nghiệm nước tiểu",
                    "items": [
                        {
                            "tenXetNghiem": "Phân tích nồng độ PH",
                            "soLuong": "1",
                            "ketQua": "",
                            "loaiBenhPham": 1,
                            "mayDownLoad": 79,
                            "download": "relationship",
                        },
                    ]
                },
            ]
        },
    },
    {
        hoTen: "Nguyễn Ánh Viên",
        age: 25,
        barCode: "5042",
        maBenhPham: "XN2321152",
        trangThai: 5,
        gioiTinh: "Nữ",
        loaiDoiTuong: 1,
        loaiTiepNhan: 2,
        maBn: "BN20028",
        cccd: "00323335967",
        uuTien: 2,
        diaChi: "29 Cát Linh, P. Giảng Võ, Q.Ba Đình, Hà Nội",
        dsDichVu: [],
        layMauBenhPham: {
            daLayMau: false,
            ngayChiDinh: moment().format('HH:mm - DD/MM/YYYY'),
            batDauLayMau: moment().format('HH:mm - DD/MM/YYYY'),
            nguoiChiDinh: "Bs Chung",
            noiChiDinh: "Phòng khám P38",
            noiLayMau: "P.405 OCT",
            nguoiLayMau: "Trung"

        },
        thongTinXetNghiem: {
            chanDoan: "Z-40 - Phẫu thuật dự phòng",
            thongTinChiDinh: "Quản Trị Hệ Thống chỉ định lúc 17:31 30/10/2023 (YL: 17:31 30/10/2023) tại Phòng khám sức khỏe",
            maPhieuThucHien: "MP00065",
        },
    },
    {
        hoTen: "Trịnh Ánh Hồng",
        age: 25,
        barCode: "5042",
        maBenhPham: "XN2321152",
        trangThai: 5,
        gioiTinh: "Nữ",
        loaiDoiTuong: 1,
        loaiTiepNhan: 2,
        maBn: "BN20028",
        cccd: "00323335967",
        uuTien: 2,
        diaChi: "29 Cát Linh, P. Giảng Võ, Q.Ba Đình, Hà Nội",
        dsDichVu: [],
        layMauBenhPham: {
            daLayMau: false,
            ngayChiDinh: moment().format('HH:mm - DD/MM/YYYY'),
            batDauLayMau: moment().format('HH:mm - DD/MM/YYYY'),
            nguoiChiDinh: "Bs Chung",
            noiChiDinh: "Phòng khám P38",
            noiLayMau: "P.405 OCT",
            nguoiLayMau: "Trung"

        },
        thongTinXetNghiem: {
            chanDoan: "Z-40 - Phẫu thuật dự phòng",
            thongTinChiDinh: "Quản Trị Hệ Thống chỉ định lúc 17:31 30/10/2023 (YL: 17:31 30/10/2023) tại Phòng khám sức khỏe",
            maPhieuThucHien: "MP00065",
            dangThucHien: false,
            dsXetNghiem: [
                {
                    "tenXetNghiem": "Huyết học",
                    "items": [
                        {
                            "tenXetNghiem": "Tìm Mảnh vỡ hồng cầu",
                            "soLuong": "1",
                            "ketQua": 6,
                            "loaiBenhPham": 1,
                            "mayDownLoad": 79,
                            "download": "relationship",
                        },
                    ]
                },
            ]
        },
    },
]