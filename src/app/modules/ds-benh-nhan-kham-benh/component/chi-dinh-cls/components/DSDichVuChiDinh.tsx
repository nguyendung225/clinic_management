import React, { ChangeEvent, FC, memo } from 'react';
import { ButtonToolbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Autocomplete } from '../../../../component/Autocomplete';
import { getPhongThucHien } from '../../../service/ChiDinhDVService';
import TableCustom from '../../../../component/table-custom-v3/TableCustom';
import { TablePagination } from '../../../../component/TablePagination';

interface DanhSachDichVuChiDinhColumnProps {
    data: any;
    handleDelete: (data: any) => void;
    handleChange: (e: ChangeEvent<HTMLInputElement>, index: number) => void;
    handleChangeSelect: (data: any, index: number) => void;
}

const DanhSachDichVuChiDinh: FC<DanhSachDichVuChiDinhColumnProps> = ({ handleDelete, handleChange, handleChangeSelect, data }) => {
    const columns = [
        {
            name: 'STT',
            field: '',
            headerStyle: {
                width: 50,
            },
            cellStyle: {
                textAlign: "center"
            },
            render: (rowData: any, index: number) => (index + 1),
        },
        {
            name: 'Thao tác',
            field: '',
            headerStyle: {
                width: 100,
            },
            cellStyle: {
                textAlign: "center"
            },
            render: (rowData: any, index: number) => (
                <ButtonToolbar className='flex-center' >
                    <OverlayTrigger
                        placement="top"
                        delay={150}
                        overlay={
                            <Tooltip id="tooltip" className="in">
                                <b className="fs-7">Xóa</b>
                            </Tooltip>
                        }

                    >
                        <div onClick={() => handleDelete(rowData)}>
                            <i className="fa-solid fa-trash text-danger fs-4 cursor-pointer" />
                        </div>
                    </OverlayTrigger>
                </ButtonToolbar >
            ),
        },
        {
            name: 'Tên dịch vụ',
            field: 'conceptAnswerName',
            sorting: true,
            headerStyle: {
                minWidth: 80,
            }
        },
        {
            name: 'SL',
            field: 'quantity',
            headerStyle: {
                width: 60,
            },
            cellStyle: {
                textAlign: "center"
            },
            render: (rowData: any, index: number) => (
                <input
                    className={"form-control customs-input w-100 px-1 text-center no-spinners"}
                    value={rowData.quantity}
                    type='number'
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e, index)}
                    name="quantity"
                />
            ),
        },
        {
            name: 'Loại MBP',
            field: 'loaiMBP',
            headerStyle: {
                width: 100,
            },
            render: (rowData: any, index: number) => (
                <input
                    className={"form-control customs-input w-100 px-2 text-center no-spinners"}
                    value={rowData.loaiMBP}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e, index)}
                    name="loaiMBP"
                />
            ),
        },
        {
            name: 'Phòng thực hiện',
            field: 'departmentName',
            headerStyle: {
                width: 200,
            },
            render: (rowData: any, index: number) => (
                <Autocomplete
                    options={[]}
                    onChange={(option) => handleChangeSelect(option, index)}
                    value={rowData.departmentName}
                    searchFunction={getPhongThucHien}
                    searchObject={{}}
                    urlData="data.data.content"
                    displayLable="name"
                    menuPortalTarget={document.body}
                />
            ),
        },
    ]

    return (
        <div>
            <TableCustom
                data={data}
                columns={columns}
                height={300}
            />
        </div>
    )
};

export default memo(DanhSachDichVuChiDinh);
