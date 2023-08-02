import React from 'react';
import { Column } from 'react-table';
import { GIOI_TINH, IBenhNhan } from '../../models/DSBenhNhanKhamBenhModels';
import { TableCustomHeader } from '../../../component/table-custom-v2/columns/TableCustomHeader';
import { TableCustomCell } from '../../../component/table-custom-v2/columns/TableCustomCell';
import moment from 'moment';
import { handleAgeCalculate } from '../../../utils/FormatUtils';

const DsBenhNhanColumn: ReadonlyArray<Column<IBenhNhan>> = [
    {
        Header: (props) => (
            <TableCustomHeader<IBenhNhan>
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
            <TableCustomHeader<IBenhNhan>
                tableProps={props}
                title={"Số khám"}
                className="text-center text-light min-w-100px"
            />
        ),
        id: "SOKHAM",
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={''} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader<IBenhNhan>
                tableProps={props}
                title={"Họ tên"}
                className="text-center text-light min-w-125px "
            />
        ),
        id: "HOTEN",
        Cell: ({ ...props }) => <TableCustomCell data={props?.data[props.row.index]?.hoTen} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader<IBenhNhan>
                tableProps={props}
                title={"Giới tính"}
                className="text-center text-light min-w-100px "
            />
        ),
        id: "GIOITINH",
        Cell: ({ ...props }) => {
            let gioiTinh = props?.data[props.row.index]?.gioiTinh;
            return (
                <TableCustomCell className="text-center" data={GIOI_TINH[gioiTinh as keyof typeof GIOI_TINH]} />
            );
        }
    },
    {
        Header: (props) => (
            <TableCustomHeader<IBenhNhan>
                tableProps={props}
                title={"Tuổi"}
                className="text-center text-light min-w-100px "
            />
        ),
        id: "TUOI",
        Cell: ({ ...props }) => {
            let ngaySinh = props?.data[props.row.index]?.ngaySinh;
            return (
                <TableCustomCell className="text-center" data={ngaySinh && handleAgeCalculate(ngaySinh)} />
            );
        }
    },
    {
        Header: (props) => (
            <TableCustomHeader<IBenhNhan>
                tableProps={props}
                title={"Mã bệnh nhân"}
                className="text-center text-light min-w-125px "
            />
        ),
        id: "MABENHNHAN",
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={props?.data[props.row.index]?.pin} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader<IBenhNhan>
                tableProps={props}
                title={"Mã bệnh án"}
                className="text-center text-light min-w-125px "
            />
        ),
        id: "MABENHAN",
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={''} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader<IBenhNhan>
                tableProps={props}
                title={"Số BHYT"}
                className="text-center text-light min-w-100px "
            />
        ),
        id: "SOBHYT",
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={props?.data[props.row.index]?.benhNhanBhyt?.soBhyt?.toString()} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader<IBenhNhan>
                tableProps={props}
                title={"Số lần gọi"}
                className="text-center text-light min-w-100px"
            />
        ),
        id: "SOLANGOI",
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={''} />,
    },
    {
        Header: (props) => (
            <TableCustomHeader<IBenhNhan>
                tableProps={props}
                title={"Ưu tiên"}
                className="text-center text-light min-w-75px"
            />
        ),
        id: "UUTIEN",
        Cell: ({ ...props }) => <div className="flex-center cell-last-child">
            <input
                id="flexCheckDefault"
                className="form-check-input customs-input-check"
                type="checkbox"
                value=""
                checked={props?.data[props.row.index]?.benhNhanCase?.isUuTien}
            />
        </div>,
    },
    {
        Header: (props) => (
            <TableCustomHeader<IBenhNhan>
                tableProps={props}
                title={"Trạng thái"}
                className="text-center text-light min-w-100px "
            />
        ),
        id: "TRANGTHAI",
        Cell: ({ ...props }) => <TableCustomCell className="text-center" data={props?.data[props.row.index]?.status} />,
    },
];

export default DsBenhNhanColumn;