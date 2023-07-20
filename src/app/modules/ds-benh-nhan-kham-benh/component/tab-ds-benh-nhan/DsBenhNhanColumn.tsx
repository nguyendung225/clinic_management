import React from 'react';
import { Column } from 'react-table';
import { BenhNhanKhamBenhInfo } from '../../models/DSBenhNhanKhamBenhModels';
import { TableCustomHeader } from '../../../component/table-custom-v2/columns/TableCustomHeader';
import { TableCustomCell } from '../../../component/table-custom-v2/columns/TableCustomCell';

const DsBenhNhanColumn: ReadonlyArray<Column<BenhNhanKhamBenhInfo>> = [
    {
        Header: (props) => (
            <TableCustomHeader<BenhNhanKhamBenhInfo>
                tableProps={props}
                title={"STT"}
                className="text-center text-light min-w-20px "
            />
        ),
        id: "INDEX",
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={(props.row.index + 1).toString()} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader<BenhNhanKhamBenhInfo>
                tableProps={props}
                title={"Số khám"}
                className="text-center text-light min-w-40px "
            />
        ),
        id: "SOKHAM",
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={props.data[props.row.index].soKham} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader<BenhNhanKhamBenhInfo>
                tableProps={props}
                title={"Họ tên"}
                className="text-center text-light min-w-125px "
            />
        ),
        id: "HOTEN",
        Cell: ({ ...props }) => <TableCustomCell data={props.data[props.row.index].hoTen} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader<BenhNhanKhamBenhInfo>
                tableProps={props}
                title={"Giới tính"}
                className="text-center text-light min-w-50px "
            />
        ),
        id: "GIOITINH",
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={props.data[props.row.index].gioiTinh} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader<BenhNhanKhamBenhInfo>
                tableProps={props}
                title={"Tuổi"}
                className="text-center text-light min-w-30px "
            />
        ),
        id: "TUOI",
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={props.data[props.row.index].tuoi} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader<BenhNhanKhamBenhInfo>
                tableProps={props}
                title={"Mã bệnh án"}
                className="text-center text-light min-w-50px "
            />
        ),
        id: "MABENHNHAN",
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={props.data[props.row.index].maBenhNhan} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader<BenhNhanKhamBenhInfo>
                tableProps={props}
                title={"Số khám"}
                className="text-center text-light min-w-50px "
            />
        ),
        id: "MABENHAN",
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={props.data[props.row.index].maBenhAn} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader<BenhNhanKhamBenhInfo>
                tableProps={props}
                title={"Số BHYT"}
                className="text-center text-light min-w-30px "
            />
        ),
        id: "SOBHYT",
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={props.data[props.row.index].soBHYT} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader<BenhNhanKhamBenhInfo>
                tableProps={props}
                title={"Số lần gọi"}
                className="text-center text-light min-w-50px "
            />
        ),
        id: "SOLANGOI",
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={props.data[props.row.index].soLanGoi} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader<BenhNhanKhamBenhInfo>
                tableProps={props}
                title={"Ưu tiên"}
                className="text-center text-light"
            />
        ),
        id: "UUTIEN",
        Cell: ({ ...props }) => <div className="flex-center cell-last-child">
            <input
                id="flexCheckDefault"
                className="form-check-input customs-input-check"
                type="checkbox"
                value=""
                checked={props.data[props.row.index].uuTien}
            />
        </div>,
    },
    {
        Header: (props) => (
            <TableCustomHeader<BenhNhanKhamBenhInfo>
                tableProps={props}
                title={"Trạng thái"}
                className="text-center text-light min-w-50px "
            />
        ),
        id: "TRANGTHAI",
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={props.data[props.row.index].trangThai} />,
    },
]

export default DsBenhNhanColumn;