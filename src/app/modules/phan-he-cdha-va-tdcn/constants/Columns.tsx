import { Column } from 'react-table';

import { TableCustomCell } from '../../component/table/components/TableCustomCell';
import { TableCustomHeader } from '../../component/table/components/TableCustomHeader';
import {
    HINH_THUC, LOAI_DOI_TUONG_CONST, UU_TIEN
} from '../../phan-he-kham-benh/constants/BenhNhanConst';
import { IBenhNhanModel } from '../../phan-he-xet-nghiem/models/DanhSachBenhNhanModels';
import { IDanhSachDVCdhaTdcn } from '../models/ModelsPhanHeCDHAVaTDCN';
import { formatTrangThaiBenhNhanCDHA } from './Constants';

export const columnsDSChiDinh = [
    { title: "Mã dịch vụ", field: "maDichVu", className: "spaces fs-8 w-10" },
    { title: "Tên dịch vụ", field: "tenDichVu", className: "spaces fs-8 w-20" },
    { title: "Phương pháp", field: "phuongPhap", className: "spaces fs-8 w-20" },
    { title: "Số lượng", field: "soLuong", className: "spaces fs-8 w-10" },
    { title: "Trạng thái", field: "trangThai", className: "spaces fs-8 w-20" },
    { title: "Ghi chú", field: "ghiChu", className: "spaces fs-8 w-20" },
]

export const ColumnsDsBenhNhanCDHA: ReadonlyArray<Column<IBenhNhanModel>> = [
    {
        Header: (props) => (
            <TableCustomHeader<IBenhNhanModel>
                tableProps={props}
                title={"STT"}
                className="text-center text-light min-w-30px"
            />
        ),
        id: "STT",
        Cell: ({ ...props }) => (
            <TableCustomCell
                className="text-center"
                data={+props.row.id + 1}
            />
        ),
    },
    {
        Header: (props) => (
            <TableCustomHeader<IBenhNhanModel>
                tableProps={props}
                title={"Tên bệnh nhân"}
                className="text-center text-light min-w-250px"
            />
        ),
        id: "tenBN",
        Cell: ({ ...props }) => (
            <div className="text-system">
                <div className="flex m-0">
                    <span className="text-uppercase fs-13px">{props?.data[props?.row?.index]?.hoTen}</span>
                    {props?.data[props?.row?.index]?.uuTien === UU_TIEN.uuTien.code ? (
                        <span>
                            <i className="bi bi-check-circle-fill text-cyan ms-2"></i>
                        </span>
                    ) : (
                        ""
                    )}
                </div>
                <div className="flex m-0">
                    <span className="text-uppercase fw-semibold fs-13px">{props?.data[props?.row?.index]?.maBn}</span>
                    <span className="px-1 fs-13px"> - </span>
                    <span className='fs-13px'>
                        {props?.data[props?.row?.index]?.loaiDoiTuong === LOAI_DOI_TUONG_CONST.dichVu.code ? "Dịch vụ" : "BHYT"}
                    </span>
                    <span className="px-1 fs-13px"> - </span>
                    <span className='fs-13px'>
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
                title={"TT"}
                className="text-light min-w-30px"
            />
        ),
        id: "TT",
        Cell: ({ ...props }) => (
            <TableCustomCell
                className="text-center"
                data={formatTrangThaiBenhNhanCDHA(props?.data[props?.row?.index]?.trangThai)}
            />
        ),
    },
    {
        Header: (props) => (
            <TableCustomHeader<IBenhNhanModel>
                tableProps={props}
                title={"Tuổi"}
                className="text-center text-light min-w-60px"
            />
        ),
        id: "Tuổi",
        Cell: ({ ...props }) => (
            <TableCustomCell
                className="text-center"
                data={props?.data[props?.row?.index]?.age}
            />
        ),
    },
];

export const columnsDSDVCdhaTdcn: ReadonlyArray<Column<IDanhSachDVCdhaTdcn>> = [
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"TT"}
                className='col-1 text-center'
            />
        ),
        id: 'trangThai',
        Cell: ({ ...props }: any) => {
            return <TableCustomCell
                className="text-center px-3 spaces line-height-40"
                data={formatTrangThaiBenhNhanCDHA(props?.data[props?.row?.index]?.trangThai)}
            />
        },
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"STT"}
                className='col-1 text-center'
            />
        ),
        id: 'stt',
        Cell: ({ ...props }: any) => {
            return <TableCustomCell
                className="text-center px-3 spaces line-height-40"
                data={+props.row.id + 1}
            />
        },
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Tên dịch vụ"}
                className='col-4 text-center'
            />
        ),
        id: 'tenDichVu',
        Cell: ({ ...props }: any) => {
            return <TableCustomCell
                className="text-center px-3 spaces line-height-40"
                data={props.row.original.tenDichVu}
            />
        },
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Số lượng"}
                className='col-1 text-center px-3 min-w-100px'
            />
        ),
        id: 'soLuong',
        Cell: ({ ...props }: any) => {
            return <TableCustomCell
                className="text-center px-3 spaces line-height-40"
                data={props.row.original.soLuong}
            />
        },
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Kết luận"}
                className='col-2 text-center px-3 min-w-50px'
            />
        ),
        id: 'ketLuan',
        Cell: ({ ...props }: any) => {
            return <TableCustomCell
                className="text-center px-3 spaces line-height-40"
                data={props.row.original.ketLuan}
            />
        },
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Trả kết quả"}
                className='col-1 text-center px-3 min-w-125px'
            />
        ),
        id: 'traKetQua',
        Cell: ({ ...props }: any) => {
            return <TableCustomCell
                className="text-center px-3 spaces line-height-40"
                data={props.row.original.traKetQua}
            />
        },
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Máy thực hiện"}
                className='col-1 text-center px-3 min-w-150px'
            />
        ),
        id: 'mayThucHien',
        Cell: ({ ...props }: any) => {
            return <TableCustomCell
                className="text-center px-3 spaces line-height-40"
                data={props.row.original.mayThucHien}
            />
        },
    },
];

export const columnMauDSKetQuaThucHien: ReadonlyArray<Column<any>> = [
    {
        Header: (props: any) => (
            <div className="text-center text-dark min-w-30px p-2 border-x">
                <span>Tên mẫu</span>
            </div>
        ),
        id: 'Tên mẫu',
        Cell: ({ ...props }: any) => {
            return <TableCustomCell
                tableProps={props}
                className="px-3 spaces line-height-30 border"
                data={props.row.original.tenMau}
            />
        },
    },
];