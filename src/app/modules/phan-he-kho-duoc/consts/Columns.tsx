import { TableCustomCell } from "../../component/table/components/TableCustomCell";
import { TableCustomHeader } from "../../component/table/components/TableCustomHeader";

export const dsPhieuKhoNoiTruColumn = [
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"TT"}
                className='text-center min-w-50px p-2 border-x'
            />
        ),
        id: 'tt',
        accessor: 'tt',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center spaces py-4 h-100"
                data={<i className="bi bi-circle-fill text-status-green"></i>}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Trạng thái phiếu"}
                className='text-center min-w-150px p-2 border-x'
            />
        ),
        id: 'trangThaiPhieu',
        accessor: 'trangThaiPhieu',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center spaces py-4 h-100"
                data={props.row.original.trangThaiPhieu}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Mã phiếu"}
                className='text-center min-w-100px p-2 border-x'
            />
        ),
        id: 'maPhieu',
        accessor: 'maPhieu',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center spaces py-4 h-100"
                data={props.row.original.maPhieu}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Loại phiếu"}
                className='text-center text-white min-w-100px p-2 border-x'
            />
        ),
        id: 'loaiPhieu',
        accessor: 'loaiPhieu',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center spaces py-4 h-100"
                data={props.row.original.loaiPhieu}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Ngày tạo"}
                className='text-center text-white min-w-100px p-2 border-x'
            />
        ),
        id: 'ngayTao',
        accessor: 'ngayTao',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center spaces py-4 h-100"
                data={props.row.original.ngayTao}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Ngày duyệt"}
                className='text-center text-white min-w-100px p-2 border-x'
            />
        ),
        id: 'ngayDuyet',
        accessor: 'ngayDuyet',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center spaces py-4 h-100"
                data={props.row.original.ngayDuyet}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Ngày nhập xuất"}
                className='text-center text-white min-w-140px p-2 border-x'
            />
        ),
        id: 'ngayNhapXuat',
        accessor: 'ngayNhapXuat',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center spaces py-4 h-100"
                data={props.row.original.ngayNhapXuat}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Nơi lập phiếu"}
                className='text-center text-white min-w-125px p-2 border-x'
            />
        ),
        id: 'noiLapPhieu',
        accessor: 'noiLapPhieu',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center spaces py-4 h-100"
                data={props.row.original.noiLapPhieu}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Nhà cung cấp"}
                className='text-center text-white min-w-125px p-2 border-x'
            />
        ),
        id: 'nhaCungCap',
        accessor: 'nhaCungCap',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center spaces py-4 h-100"
                data={props.row.original.nhaCungCap}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Số hóa đơn"}
                className='text-center text-white min-w-100px p-2 border-x'
            />
        ),
        id: 'soHoaDon',
        accessor: 'soHoaDon',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center spaces py-4 h-100"
                data={props.row.original.soHoaDon}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Ngày hóa đơn"}
                className='text-center text-white min-w-125px p-2 border-x'
            />
        ),
        id: 'ngayHoaDon',
        accessor: 'ngayHoaDon',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center spaces py-4 h-100"
                data={props.row.original.ngayHoaDon}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Chiết khấu"}
                className='text-center text-white min-w-100px p-2 border-x'
            />
        ),
        id: 'chietKhau',
        accessor: 'chietKhau',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center spaces py-4 h-100"
                data={props.row.original.chietKhau}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Nội dung"}
                className='text-center text-white min-w-100px p-2 border-x'
            />
        ),
        id: 'noiDung',
        accessor: 'noiDung',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center spaces py-4 h-100"
                data={props.row.original.noiDung}
            />
        ),
    },
];
export const dsPhieuKhoNgoaiTruColumn = [
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"TT"}
                className='text-center min-w-50px p-2 border-x'
            />
        ),
        id: 'tt',
        accessor: 'tt',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center spaces py-4 h-100"
                data={<i className="bi bi-circle-fill text-status-green"></i>}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Trạng thái phiếu"}
                className='text-center min-w-150px p-2 border-x'
            />
        ),
        id: 'trangThaiPhieu',
        accessor: 'trangThaiPhieu',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center spaces py-4 h-100"
                data={props.row.original.trangThaiPhieu}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Ngày tạo"}
                className='text-center min-w-100px p-2 border-x'
            />
        ),
        id: 'ngayTao',
        accessor: 'ngayTao',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center spaces py-4 h-100"
                data={props.row.original.ngayTao}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Mã phiếu"}
                className='text-center text-white min-w-100px p-2 border-x'
            />
        ),
        id: 'maPhieu',
        accessor: 'maPhieu',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center spaces py-4 h-100"
                data={props.row.original.maPhieu}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Loại phiếu"}
                className='text-center text-white min-w-100px p-2 border-x'
            />
        ),
        id: 'loaiPhieu',
        accessor: 'loaiPhieu',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center spaces py-4 h-100"
                data={props.row.original.loaiPhieu}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Mã bệnh nhân"}
                className='text-center text-white min-w-125px p-2 border-x'
            />
        ),
        id: 'maBenhNhan',
        accessor: 'maBenhNhan',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center spaces py-4 h-100"
                data={props.row.original.maBenhNhan}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Tên bệnh nhân"}
                className='text-center text-white min-w-125px p-2 border-x'
            />
        ),
        id: 'tenBenhNhan',
        accessor: 'tenBenhNhan',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center spaces py-4 h-100"
                data={props.row.original.tenBenhNhan}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Giới tính"}
                className='text-center text-white min-w-100px p-2 border-x'
            />
        ),
        id: 'gioiTinh',
        accessor: 'gioiTinh',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center spaces py-4 h-100"
                data={props.row.original.gioiTinh}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Tuổi"}
                className='text-center text-white min-w-100px p-2 border-x'
            />
        ),
        id: 'tuoi',
        accessor: 'tuoi',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center spaces py-4 h-100"
                data={props.row.original.tuoi}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Kho xuất"}
                className='text-center text-white min-w-100px p-2 border-x'
            />
        ),
        id: 'khoXuat',
        accessor: 'khoXuat',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center spaces py-4 h-100"
                data={props.row.original.khoXuat}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Kho nhập"}
                className='text-center text-white min-w-100px p-2 border-x'
            />
        ),
        id: 'khoNhap',
        accessor: 'khoNhap',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center spaces py-4 h-100"
                data={props.row.original.khoNhap}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Nhà cung cấp"}
                className='text-center text-white min-w-125px p-2 border-x'
            />
        ),
        id: 'nhaCungCap',
        accessor: 'nhaCungCap',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center spaces py-4 h-100"
                data={props.row.original.nhaCungCap}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Số hóa đơn"}
                className='text-center text-white min-w-100px p-2 border-x'
            />
        ),
        id: 'soHoaDon',
        accessor: 'soHoaDon',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center spaces py-4 h-100"
                data={props.row.original.soHoaDon}
            />
        ),
    },
];


