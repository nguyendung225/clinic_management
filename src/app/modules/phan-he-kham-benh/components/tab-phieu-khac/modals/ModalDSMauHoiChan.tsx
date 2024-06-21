import { Button, Modal } from 'react-bootstrap'
import { Column } from 'react-table'
import { TableCustomHeader } from '../../../../component/table/components/TableCustomHeader'
import { TableCustomCell } from '../../../../component/table/components/TableCustomCell'
import { TableCustom } from '../../../../component/table/table-custom/TableCustom'

type TDSMauHoiChan = {
    tenMau: string,
    hinhThucHoiChan: string,
    chuToa: string,
    thuKi: string,
    thanhVien: string,
    dienBienBenh: string,
    huongDieuTri: string,
}

type TProps = {
    handleClose: () => void
}

const ModalDSMauHoiChan = ({ handleClose }: TProps) => {
    const data: TDSMauHoiChan[] = [
        {
            tenMau: "Mẫu 1",
            hinhThucHoiChan: "Không có",
            chuToa: "Nguyễn Văn A",
            thuKi: "Nguyễn Văn B",
            thanhVien: "Nguyễn Văn C",
            dienBienBenh: "Không có",
            huongDieuTri: "Không có"
        },
        {
            tenMau: "Mẫu 1",
            hinhThucHoiChan: "Không có",
            chuToa: "Nguyễn Văn A",
            thuKi: "Nguyễn Văn B",
            thanhVien: "Nguyễn Văn C",
            dienBienBenh: "Không có",
            huongDieuTri: "Không có"
        },
        {
            tenMau: "Mẫu 1",
            hinhThucHoiChan: "Không có",
            chuToa: "Nguyễn Văn A",
            thuKi: "Nguyễn Văn B",
            thanhVien: "Nguyễn Văn C",
            dienBienBenh: "Không có",
            huongDieuTri: "Không có"
        },
        {
            tenMau: "Mẫu 1",
            hinhThucHoiChan: "Không có",
            chuToa: "Nguyễn Văn A",
            thuKi: "Nguyễn Văn B",
            thanhVien: "Nguyễn Văn C",
            dienBienBenh: "Không có",
            huongDieuTri: "Không có"
        },
        {
            tenMau: "Mẫu 1",
            hinhThucHoiChan: "Không có",
            chuToa: "Nguyễn Văn A",
            thuKi: "Nguyễn Văn B",
            thanhVien: "Nguyễn Văn C",
            dienBienBenh: "Không có",
            huongDieuTri: "Không có"
        },
    ];

    const columns: ReadonlyArray<Column<TDSMauHoiChan>> = [
        {
            Header: (props: any) => (
                <TableCustomHeader
                    tableProps={props}
                    title={"STT"}
                    className='col-1 text-center text-white px-3 min-w-50px spaces line-height-40'
                />
            ),
            id: 'stt',
            Cell: ({ ...props }: any) => {
                return <TableCustomCell
                    className="text-center px-3 spaces line-height-40 "
                    data={+props.row.id + 1}
                />
            },
        },
        {
            Header: (props: any) => (
                <TableCustomHeader
                    tableProps={props}
                    title={"Tên mẫu phiếu hổi chẩn"}
                    className='col-1 text-center text-white px-3 min-w-50px spaces line-height-40'
                />
            ),
            id: 'tenMau',
            Cell: ({ ...props }: any) => {
                return <TableCustomCell
                    className="px-3"
                    data={props.row.original.tenMau || ""}
                />
            },
        },
        {
            Header: (props: any) => (
                <TableCustomHeader
                    tableProps={props}
                    title={"Hình thức hội chẩn"}
                    className='col-1 text-center text-white px-3 min-w-50px spaces line-height-40'
                />
            ),
            id: 'hinhThucHoiChan',
            Cell: ({ ...props }: any) => {
                return <TableCustomCell
                    className="px-3"
                    data={props.row.original.hinhThucHoiChan || ""}
                />
            },
        },
        {
            Header: (props: any) => (
                <TableCustomHeader
                    tableProps={props}
                    title={"Chủ toả"}
                    className='col-1 text-center text-white px-3 min-w-50px spaces line-height-40'
                />
            ),
            id: 'chuToa',
            Cell: ({ ...props }: any) => {
                return <TableCustomCell
                    className="px-3"
                    data={props.row.original.chuToa || ""}
                />
            },
        },
        {
            Header: (props: any) => (
                <TableCustomHeader
                    tableProps={props}
                    title={"Thư kí"}
                    className='col-1 text-center text-white px-3 min-w-50px spaces line-height-40'
                />
            ),
            id: 'thuKi',
            Cell: ({ ...props }: any) => {
                return <TableCustomCell
                    className="px-3"
                    data={props.row.original.thuKi || ""}
                />
            },
        },
        {
            Header: (props: any) => (
                <TableCustomHeader
                    tableProps={props}
                    title={"Thành viên"}
                    className='col-1 text-center text-white px-3 min-w-50px spaces line-height-40'
                />
            ),
            id: 'thanhVien',
            Cell: ({ ...props }: any) => {
                return <TableCustomCell
                    className="px-3"
                    data={props.row.original.thanhVien || ""}
                />
            },
        },
        {
            Header: (props: any) => (
                <TableCustomHeader
                    tableProps={props}
                    title={"Diễn biến bệnh"}
                    className='col-1 text-center text-white px-3 min-w-50px spaces line-height-40'
                />
            ),
            id: 'dienBienBenh',
            Cell: ({ ...props }: any) => {
                return <TableCustomCell
                    className="px-3"
                    data={props.row.original.dienBienBenh || ""}
                />
            },
        },
        {
            Header: (props: any) => (
                <TableCustomHeader
                    tableProps={props}
                    title={"Hướng điều trị tiếp"}
                    className='col-1 text-center text-white px-3 min-w-50px spaces line-height-40'
                />
            ),
            id: 'huongDieuTri',
            Cell: ({ ...props }: any) => {
                return <TableCustomCell
                    className="px-3"
                    data={props.row.original.huongDieuTri || ""}
                />
            },
        },
    ];

    return (
        <Modal show={true} onHide={handleClose} centered className='dialog__container' size='xl'>
            <Modal.Header closeButton className='header-modal'>
                <Modal.Title className='text-uppercase'>Danh sách các mẫu hội chẩn đã tạo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <TableCustom
                    data={data}
                    columns={columns}
                />
            </Modal.Body>
            <Modal.Footer className='d-flex justify-content-end p-4 pt-0 border-top-0'>
                <Button
                    className="btn-fill" onClick={handleClose}>
                    Đóng
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalDSMauHoiChan