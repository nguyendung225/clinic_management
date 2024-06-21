import { Button, Modal } from 'react-bootstrap'
import { Column } from 'react-table'
import { TableCustomHeader } from '../../../component/table/components/TableCustomHeader'
import { TableCustomCell } from '../../../component/table/components/TableCustomCell'
import { TableCustom } from '../../../component/table/table-custom/TableCustom'

interface IMauDsTongKetBenhAn {
    tenMau: string,
    dienBienBenhAn: string,
    tomTatKQCLS: string,
    phuongPhapDieuTri: string,
    tinhTrangNguoiBenh: string,
    huongDieuTri: string,
}

type Props = {
    handleClose: () => void
}

const ModalDSMauBenhAn = ({ handleClose }: Props) => {

    const data: IMauDsTongKetBenhAn[] = [
        { tenMau: "Mẫu 1", dienBienBenhAn: "Người bệnh khoẻ mạnh", tomTatKQCLS: "Không có", phuongPhapDieuTri: "Không có", tinhTrangNguoiBenh: "Khỏe mạnh", huongDieuTri: "Không có" },
        { tenMau: "Mẫu 2", dienBienBenhAn: "Người bệnh bình thường", tomTatKQCLS: "Không có", phuongPhapDieuTri: "Không có", tinhTrangNguoiBenh: "Bình thường", huongDieuTri: "Không có" },
        { tenMau: "Mẫu 3", dienBienBenhAn: "Người bệnh bình thường", tomTatKQCLS: "Không có", phuongPhapDieuTri: "Không có", tinhTrangNguoiBenh: "Bình thường", huongDieuTri: "Không có" },
        { tenMau: "Mẫu 4", dienBienBenhAn: "Người bệnh bình thường", tomTatKQCLS: "Không có", phuongPhapDieuTri: "Không có", tinhTrangNguoiBenh: "Bình thường", huongDieuTri: "Không có" },
        { tenMau: "Mẫu 5", dienBienBenhAn: "Người bệnh bình thường", tomTatKQCLS: "Không có", phuongPhapDieuTri: "Không có", tinhTrangNguoiBenh: "Bình thường", huongDieuTri: "Không có" },
        { tenMau: "Mẫu 6", dienBienBenhAn: "Người bệnh bình thường", tomTatKQCLS: "Không có", phuongPhapDieuTri: "Không có", tinhTrangNguoiBenh: "Bình thường", huongDieuTri: "Không có" },
        { tenMau: "Mẫu 7", dienBienBenhAn: "Người bệnh bình thường", tomTatKQCLS: "Không có", phuongPhapDieuTri: "Không có", tinhTrangNguoiBenh: "Bình thường", huongDieuTri: "Không có" },
    ];

    const columns: ReadonlyArray<Column<IMauDsTongKetBenhAn>> = [
        {
            Header: (props: any) => (
                <TableCustomHeader
                    tableProps={props}
                    title={"STT"}
                    className='col-1 text-center text-white px-3 min-w-50px'
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
                    title={"Tên mãu tổng kết bệnh án"}
                    className='col-1 text-center text-white px-3 min-w-50px'
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
                    title={"Diễn biến"}
                    className='col-1 text-center text-white px-3 min-w-50px'
                />
            ),
            id: 'dienBienBenhAn',
            Cell: ({ ...props }: any) => {
                return <TableCustomCell
                    className="px-3"
                    data={props.row.original.dienBienBenhAn || ""}
                />
            },
        },
        {
            Header: (props: any) => (
                <TableCustomHeader
                    tableProps={props}
                    title={"Tóm tắt KQCLS"}
                    className='col-1 text-center text-white px-3 min-w-50px'
                />
            ),
            id: 'tomTatKQCLS',
            Cell: ({ ...props }: any) => {
                return <TableCustomCell
                    className="px-3"
                    data={props.row.original.tomTatKQCLS || ""}
                />
            },
        },
        {
            Header: (props: any) => (
                <TableCustomHeader
                    tableProps={props}
                    title={"Phương pháp điều trị"}
                    className='col-1 text-center text-white px-3 min-w-50px'
                />
            ),
            id: 'phuongPhapDieuTri',
            Cell: ({ ...props }: any) => {
                return <TableCustomCell
                    className="px-3"
                    data={props.row.original.phuongPhapDieuTri || ""}
                />
            },
        },
        {
            Header: (props: any) => (
                <TableCustomHeader
                    tableProps={props}
                    title={"Tình trạng người bệnh"}
                    className='col-1 text-center text-white px-3 min-w-50px'
                />
            ),
            id: 'tinhTrangNguoiBenh',
            Cell: ({ ...props }: any) => {
                return <TableCustomCell
                    className="px-3"
                    data={props.row.original.tinhTrangNguoiBenh || ""}
                />
            },
        },
        {
            Header: (props: any) => (
                <TableCustomHeader
                    tableProps={props}
                    title={"Hướng điều trị"}
                    className='col-1 text-center text-white px-3 min-w-50px'
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
                <Modal.Title className='text-uppercase'>Danh sách mẫu bệnh án</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <TableCustom
                    data={data}
                    columns={columns}
                    // compact
                    selectionMode='single'
                />
            </Modal.Body>
            <Modal.Footer className='d-flex justify-content-end p-4 pt-0  border-top-0'>
                <Button
                    className="btn-fill" onClick={handleClose}>
                    Đóng
                </Button>
                <Button className="btn-fill" onClick={handleClose}>
                    Sử dụng mẫu
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalDSMauBenhAn