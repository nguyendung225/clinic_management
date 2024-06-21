import { TableCustomCell } from "../../../component/table/components/TableCustomCell";
import { TableCustomHeader } from "../../../component/table/components/TableCustomHeader";

export const columnThanhToan = [
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Ngày y lệnh"}
                className='text-center spaces min-w-130px'
            />
        ),
        id: 'ngayYLenh',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center spaces py-4 h-100"
                data={props?.row?.original?.ngayYLenh}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={""}
                className='text-center min-w-30px'
            />
        ),
        id: 'trangThai',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center spaces py-4 h-100"
                data={props?.row?.original?.trangThai}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Mã tương đương"}
                className='text-center spaces min-w-155'
            />
        ),
        id: 'maTuongDuong',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center spaces py-4 h-100"
                data={props?.row?.original?.maTuongDuong}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Tên dịch vụ, thuốc, vật tư"}
                className='text-center min-w-230px'
            />
        ),
        id: 'tenDichVu',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="spaces py-4 h-100"
                data={props?.row?.original?.tenDichVu}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Đối tượng"}
                className='text-center min-w-100px'
            />
        ),
        id: 'doiTuong',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="spaces py-4 h-100"
                data={props?.row?.original?.doiTuong}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Đơn vị"}
                className='text-center min-w-100px'
            />
        ),
        id: 'donVi',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center spaces py-4 h-100"
                data={props?.row?.original?.donVi}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Số lượng"}
                className='text-center min-w-100px'
            />
        ),
        id: 'soLuong',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-end spaces py-4 h-100"
                data={props?.row?.original?.soLuong}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Đơn giá"}
                className='text-center min-w-100px'
            />
        ),
        id: 'donGia',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-end spaces py-4 h-100"
                data={props?.row?.original?.donGia}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Nguồn chi trả"}
                className='text-center min-w-130px'
            />
        ),
        id: 'nguonChiTra',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-end spaces py-4 h-100"
                data={props?.row?.original?.nguonChiTra}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Giá BHYT"}
                className='text-center min-w-100px'
            />
        ),
        id: 'giaBHYT',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-end spaces py-4 h-100"
                data={props?.row?.original?.giaBHYT}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Ngày kết thúc"}
                className='text-center min-w-130px'
            />
        ),
        id: 'ngayKetThuc',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center spaces py-4 h-100"
                data={props?.row?.original?.ngayKetThuc}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Tỷ lệ TT"}
                className='text-center min-w-100px'
            />
        ),
        id: 'tyLeTT',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center spaces py-4 h-100"
                data={props?.row?.original?.tyLeTT}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Thành tiền"}
                className='text-end spaces min-w-110'
            />
        ),
        id: 'thanhTien',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-end spaces py-4 h-100"
                data={props?.row?.original?.thanhTien}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"BH thanh toán"}
                className='text-center min-w-140px'
            />
        ),
        id: 'bhThanhToan',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-end spaces py-4 h-100"
                data={props?.row?.original?.bhThanhToan}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"tỷ lệ BHTT"}
                className='text-center min-w-100px'
            />
        ),
        id: 'tyLeBHYT',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center spaces py-4 h-100"
                data={props?.row?.original?.tyLeBHYT}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"trần tt"}
                className='text-center min-w-100px'
            />
        ),
        id: 'tranTt',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-center spaces py-4 h-100"
                data={props?.row?.original?.tranTt}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Mức hưởng"}
                className='text-center min-w-130px'
            />
        ),
        id: 'mucHuong',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-end spaces py-4 h-100"
                data={props?.row?.original?.mucHuong}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Miễn giảm"}
                className='text-center min-w-100px'
            />
        ),
        id: 'mienGiam',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-end spaces py-4 h-100"
                data={props?.row?.original?.mienGiam}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"BN thanh toán"}
                className='text-center spaces min-w-135'
            />
        ),
        id: 'bnThanhToan',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-end spaces py-4 h-100"
                data={props?.row?.original?.bnThanhToan}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"#Cùng chi trả"}
                className='text-center min-w-130px'
            />
        ),
        id: 'cungChiTra',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-end spaces py-4 h-100"
                data={props?.row?.original?.cungChiTra}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"#Tự chi trả"}
                className='text-center min-w-130px'
            />
        ),
        id: 'tuChiTra',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-end spaces py-4 h-100"
                data={props?.row?.original?.tuChiTra}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Đã thu"}
                className='text-center min-w-100px'
            />
        ),
        id: 'daThu',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-end spaces py-4 h-100"
                data={props?.row?.original?.daThu}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"Còn nợ"}
                className='text-center min-w-100px'
            />
        ),
        id: 'conNo',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-end spaces py-4 h-100"
                data={props?.row?.original?.conNo}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"YC nộp"}
                className='text-center min-w-100px'
            />
        ),
        id: 'ycNop',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="text-end spaces py-4 h-100"
                data={props?.row?.original?.ycNop}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"khoa chỉ định"}
                className='text-center min-w-130px'
            />
        ),
        id: 'khoaChiDinh',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="spaces py-4 h-100"
                data={props?.row?.original?.khoaChiDinh}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"phòng chỉ định"}
                className='text-center spaces min-w-135'
            />
        ),
        id: 'phongChiDinh',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="spaces py-4 h-100"
                data={props?.row?.original?.phongChiDinh}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"người chỉ định"}
                className='text-center min-w-130px'
            />
        ),
        id: 'nguoiChiDinh',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="spaces py-4 h-100"
                data={props?.row?.original?.nguoiChiDinh}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"phòng thực hiện"}
                className='text-center min-w-150px'
            />
        ),
        id: 'phongThucHien',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="spaces py-4 h-100"
                data={props?.row?.original?.phongThucHien}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"người thực hiện"}
                className='text-center min-w-150px'
            />
        ),
        id: 'nguoiThucHien',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="spaces py-4 h-100"
                data={props?.row?.original?.nguoiThucHien}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"loại chi phí"}
                className='text-center min-w-130px'
            />
        ),
        id: 'loaiChiPhi',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="spaces py-4 h-100"
                data={props?.row?.original?.loaiChiPhi}
            />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"ghi chú đối tượng dịch vụ"}
                className='text-center min-w-225px'
            />
        ),
        id: 'ghiChu',
        Cell: ({ ...props }: any) => (
            <TableCustomCell
                tableProps={props}
                className="spaces py-4 h-100"
                data={props?.row?.original?.ghiChu}
            />
        ),
    },
]