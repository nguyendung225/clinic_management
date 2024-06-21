import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { Column } from 'react-table'
import moment from 'moment'
import { TableCustomHeader } from '../../../component/table/components/TableCustomHeader'
import { TableCustomCell } from '../../../component/table/components/TableCustomCell'
import InputSearch from '../../../component/InputSearch'
import { SELECTION_MODE } from '../../../utils/Constant'
import { TableCustom } from '../../../component/table/table-custom/TableCustom'

interface IMauDsKetQuaDichVu {
    tenDichVu: string,
    ketQua: string,
    khoaChiDinh: string,
    ngayYLenh: string,
    ngayTraKQ: string,
}

type Props = {
    handleClose: () => void
}

const ModalKetQuaDichVu = ({ handleClose }: Props) => {
    const updatePageData = async () => { };
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => { };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): any => { };
    const data: IMauDsKetQuaDichVu[] = [
        {
            tenDichVu: "Đo chức năng hô hấp",
            ketQua: "Đúng",
            khoaChiDinh: "Khoa nội",
            ngayYLenh: moment().format("DD/MM/YYYY"),
            ngayTraKQ: moment().format("DD/MM/YYYY"),
        },

        {
            tenDichVu: "Xét nghiệm nước tiểu",
            ketQua: "Đúng",
            khoaChiDinh: "Khoa nội",
            ngayYLenh: moment().format("DD/MM/YYYY"),
            ngayTraKQ: moment().format("DD/MM/YYYY"),
        },
    ];

    const columns: ReadonlyArray<Column<IMauDsKetQuaDichVu>> = [
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
                    title={"Tên dịch vụ"}
                    className='col-1 text-center text-white px-3 min-w-50px'
                />
            ),
            id: 'tenDichVu',
            Cell: ({ ...props }: any) => {
                return <TableCustomCell
                    className="px-3"
                    data={props.row.original.tenDichVu || ""}
                />
            },
        },
        {
            Header: (props: any) => (
                <TableCustomHeader
                    tableProps={props}
                    title={"Kết quả"}
                    className='col-1 text-center text-white px-3 min-w-50px'
                />
            ),
            id: 'ketQua',
            Cell: ({ ...props }: any) => {
                return <TableCustomCell 
                    className="px-3"
                    data={props.row.original.ketQua || ""}
                />
            },
        },
        {
            Header: (props: any) => (
                <TableCustomHeader
                    tableProps={props}
                    title={"Khoa chỉ định"}
                    className='col-1 text-center text-white px-3 min-w-50px'
                />
            ),
            id: 'khoaChiDinh',
            Cell: ({ ...props }: any) => {
                return <TableCustomCell
                    className="px-3"
                    data={props.row.original.khoaChiDinh || ""}
                />
            },
        },
        {
            Header: (props: any) => (
                <TableCustomHeader
                    tableProps={props}
                    title={"Ngày y lệnh"}
                    className='col-1 text-center text-white px-3 min-w-50px'
                />
            ),
            id: 'ngayYLenh',
            Cell: ({ ...props }: any) => {
                return <TableCustomCell
                    className="px-3"
                    data={props.row.original.ngayYLenh || ""}
                />
            },
        },
        {
            Header: (props: any) => (
                <TableCustomHeader
                    tableProps={props}
                    title={"Ngày trả kết quả"}
                    className='col-1 text-center text-white px-3 min-w-50px'
                />
            ),
            id: 'ngayTraKQ',
            Cell: ({ ...props }: any) => {
                return <TableCustomCell
                    className="px-3"
                    data={props.row.original.ngayTraKQ || ""}
                />
            },
        }
    ];

    return (
        <Modal show={true} onHide={handleClose} centered className='dialog__container background__modal' size='xl' aria-hidden="true">

            <Modal.Header closeButton className='header-modal'>
                <Modal.Title className='text-uppercase'>Kết quả dịch vụ</Modal.Title>
            </Modal.Header>
            <Modal.Body className='body-modal'>
                <div>
                    <InputSearch
                        className='border-3px mb-5'
                        placeholder='Tìm kiếm'
                        handleChange={handleChange}
                        handleSearch={updatePageData}
                        handleKeyDown={handleKeyDown} />
                </div>
                <TableCustom
                    columns={columns}
                    data={data}
                    className="table table-striped table-bordered table-hover table-custom"
                    pageSize={10}
                    minHeight={400}
                    selectionMode={SELECTION_MODE.MULTI}
                />
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex gap-2">
                        <Button className="btn-fill">
                            Chọn tất cả
                        </Button>
                        <Button className="btn-fill">
                            Bỏ chọn tất cả
                        </Button>
                        <Button className="btn-fill" type="submit">
                            Đã trả kết quả
                        </Button>
                    </div>
                    <div>
                        <Button className="btn-fill" type="submit" onClick={handleClose}>
                            Lưu
                        </Button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default ModalKetQuaDichVu