//@ts-nocheck
import { TableCustomCell } from "../../component/table/components/TableCustomCell";
import { TableCustomHeader } from "../../component/table/components/TableCustomHeader";
import { formatTrangThaiBenhNhan } from "../../utils/FormatUtils";

export const DsBenhNhanColumn = [
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"TT"}
                className="text-light min-w-30px p-2 border-x"
            />
        ),
        id: "TT",
        Cell: ({ ...props }) => (
            <TableCustomCell
                className="d-flex align-items-center justify-content-center border spaces py-4 h-100"
                data={formatTrangThaiBenhNhan(props?.data[props?.row?.index]?.trangThai)}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Tên khách hàng"}
                className="text-center text-light min-w-150px p-2 border-x"
            />
        ),
        id: "tenBN",
        Cell: ({ ...props }) => (
            <TableCustomCell
                className="text-start border spaces py-4 h-100"
                data={<>
                    <div className="text-uppercase fs-13px">{props?.data[props?.row?.index]?.hoTen}</div>
                    <div color="text-gray text-capitalize fs-13px">Xuất lẻ</div>
                </>}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Mã phiếu"}
                className="text-center text-light min-w-90px p-2 border-x"
            />
        ),
        id: "Mã phiếu",
        Cell: ({ ...props }) => (
            <TableCustomCell
                className="text-center border spaces py-4 h-100"
                data={props?.data[props?.row?.index]?.barCode}
            />
        ),
    },

    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Tuổi"}
                className="text-light min-w-60px p-2 border-x"
            />
        ),
        id: "Tuổi",
        Cell: ({ ...props }) => (
            <TableCustomCell
                className="text-center border spaces py-4 h-100"
                data={props?.data[props?.row?.index]?.age}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Địa chỉ"}
                className="text-light min-w-200px p-2 border-x"
            />
        ),
        id: "Địa chỉ",
        Cell: ({ ...props }) => (
            <TableCustomCell
                className="text-center border spaces py-4 h-100"
                data={props?.data[props?.row?.index]?.diaChi}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Tổng tiền"}
                className="text-light min-w-100px p-2 border-x"
            />
        ),
        id: "Tổng tiền",
        Cell: ({ ...props }) => (
            <TableCustomCell
                className="text-center border spaces py-4 h-100"
                data={props?.data[props?.row?.index]?.tongTien}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Bác sĩ"}
                className="text-light min-w-100px p-2 border-x"
            />
        ),
        id: "Bác sĩ",
        Cell: ({ ...props }) => (
            <TableCustomCell
                className="text-center border spaces py-4 h-100"
                data={props?.data[props?.row?.index]?.bacSi}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Ghi chú"}
                className="text-light min-w-100px p-2 border-x"
            />
        ),
        id: "Ghi chú",
        Cell: ({ ...props }) => (
            <TableCustomCell
                className="text-center border spaces py-4 h-100"
                data={props?.data[props?.row?.index]?.ghiChu}
            />
        ),
    },
];

export const dsPhieuColumn = [
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"STT"}
                className='text-center min-w-50px p-2 border-x'
            />
        ),
        id: 'tt',
        isSticky: true,
        accessor: 'tt',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center border spaces py-4 h-100"
                data={props.row.index + 1}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Mã"}
                className='text-center min-w-50px p-2 border-x'
            />
        ),
        id: 'ma',
        isSticky: true,
        accessor: 'ma',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center border spaces py-4 h-100"
                data={props.row.original.ma}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Tên thuốc/ Vật tư"}
                className='text-center min-w-150px p-2 border-x'
            />
        ),
        isSticky: true,
        id: 'tenThuocVatTu',
        accessor: 'tenThuocVatTu',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-start border spaces py-4 h-100"
                data={props.row.original.tenThuocVatTu}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Đơn vị"}
                className='text-center min-w-100px p-2 border-x'
            />
        ),
        id: 'donVi',
        accessor: 'donVi',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center border spaces py-4 h-100"
                data={props.row.original.donVi}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"SL Tồn"}
                className='text-center min-w-100px p-2 border-x'
            />
        ),
        id: 'slTon',
        accessor: 'slTon',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center border spaces py-4 h-100"
                data={props.row.original.slTon}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Yêu cầu"}
                className='text-center min-w-100px p-2 border-x'
            />
        ),
        id: 'yeuCau',
        accessor: 'yeuCau',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center border spaces py-4 h-100"
                data={props.row.original.yeuCau}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Duyệt"}
                className='text-center min-w-100px p-2 border-x'
            />
        ),
        id: 'duyet',
        accessor: 'duyet',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center border spaces py-4 h-100"
                data={props.row.original.duyet}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Đơn giá"}
                className='text-center min-w-100px p-2 border-x'
            />
        ),
        id: 'donGia',
        accessor: 'donGia',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center border spaces py-4 h-100"
                data={props.row.original.donGia}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"VAT"}
                className='text-center min-w-100px p-2 border-x'
            />
        ),
        id: 'vat',
        accessor: 'vat',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center border spaces py-4 h-100"
                data={props.row.original.vat}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Đơn giá +VAT"}
                className='text-center min-w-150px p-2 border-x'
            />
        ),
        id: 'donGiaVat',
        accessor: 'donGiaVat',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center border spaces py-4 h-100"
                data={props.row.original.donGiaVat}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Thành tiền"}
                className='text-center min-w-125px p-2 border-x'
            />
        ),
        id: 'thanhTien',
        accessor: 'thanhTien',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center border spaces py-4 h-100"
                data={props.row.original.thanhTien}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Miễn giảm"}
                className='text-center min-w-125px p-2 border-x'
            />
        ),
        id: 'mienGiam',
        accessor: 'mienGiam',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center border spaces py-4 h-100"
                data={props.row.original.mienGiam
                    || 0}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Lý do miễn giảm"}
                className='text-center min-w-150px p-2 border-x'
            />
        ),
        id: 'lyDoMienGiam',
        accessor: 'lyDoMienGiam',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center border spaces py-4 h-100"
                data={props.row.original.lyDoMienGiam}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Hướng dẫn sử dụng"}
                className='text-center min-w-175px p-2 border-x'
            />
        ),
        id: 'huongDanSuDung',
        accessor: 'huongDanSuDung',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center border spaces py-4 h-100"
                data={props.row.original.huongDanSuDung}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Hoạt chất"}
                className='text-center min-w-150px p-2 border-x'
            />
        ),
        id: 'hoatChat',
        accessor: 'hoatChat',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center border spaces py-4 h-100"
                data={props.row.original.hoatChat}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"SDK"}
                className='text-center min-w-125px p-2 border-x'
            />
        ),
        id: 'sdk',
        accessor: 'sdk',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center border spaces py-4 h-100"
                data={props.row.original.sdk}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Số lô"}
                className='text-center min-w-125px p-2 border-x'
            />
        ),
        id: 'soLo',
        accessor: 'soLo',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center border spaces py-4 h-100"
                data={props.row.original.soLo}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"HSD"}
                className='text-center min-w-125px p-2 border-x'
            />
        ),
        id: 'hsd',
        accessor: 'hsd',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center border spaces py-4 h-100"
                data={props.row.original.hsd}
            />
        ),
    },
];

export const dsThuocColumn = [
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"STT"}
                className='text-center min-w-50px p-2 border-x'
            />
        ),
        id: 'tt',
        isSticky: true,
        accessor: 'tt',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center border spaces py-4 h-100"
                data={props.row.index + 1}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Mã thuốc"}
                className='text-center min-w-50px p-2 border-x min-w-100px'
            />
        ),
        id: 'ma',
        isSticky: true,
        accessor: 'ma',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center border spaces py-4 h-100"
                data={props.row.original.ma}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Tên thuốc"}
                className='text-center min-w-150px p-2 border-x'
            />
        ),
        isSticky: true,
        id: 'tenThuocVatTu',
        accessor: 'tenThuocVatTu',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-start border spaces py-4 h-100"
                data={props.row.original.tenThuocVatTu}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Đơn vị tính"}
                className='text-center min-w-100px p-2 border-x'
            />
        ),
        id: 'donVi',
        accessor: 'donVi',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center border spaces py-4 h-100"
                data={props.row.original.donVi}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Số lượng"}
                className='text-center min-w-100px p-2 border-x'
            />
        ),
        id: 'soLuong',
        accessor: 'yeuCau',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center border spaces py-4 h-100"
                data={props.row.original.yeuCau}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Đơn giá"}
                className='text-center min-w-100px p-2 border-x'
            />
        ),
        id: 'donGia',
        accessor: 'donGia',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center border spaces py-4 h-100"
                data={props.row.original.donGia}
            />
        ),
    },

    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"VAT(%)"}
                className='text-center min-w-100px p-2 border-x'
            />
        ),
        id: 'vat',
        accessor: 'vat',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center border spaces py-4 h-100"
                data={props.row.original.vat}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Thành tiền"}
                className='text-center min-w-125px p-2 border-x'
            />
        ),
        id: 'thanhTien',
        accessor: 'thanhTien',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center border spaces py-4 h-100"
                data={props.row.original.thanhTien}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Miễn giảm(%)"}
                className='text-center min-w-125px p-2 border-x'
            />
        ),
        id: 'mienGiam',
        accessor: 'mienGiam',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center border spaces py-4 h-100"
                data={props.row.original.mienGiam
                    || 0}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"SDK"}
                className='text-center min-w-125px p-2 border-x'
            />
        ),
        id: 'sdk',
        accessor: 'sdk',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center border spaces py-4 h-100"
                data={props.row.original.sdk}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Số lô"}
                className='text-center min-w-125px p-2 border-x'
            />
        ),
        id: 'soLo',
        accessor: 'soLo',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center border spaces py-4 h-100"
                data={props.row.original.soLo}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"HSD"}
                className='text-center min-w-125px p-2 border-x'
            />
        ),
        id: 'hsd',
        accessor: 'hsd',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center border spaces py-4 h-100"
                data={props.row.original.hsd}
            />
        ),
    },
];