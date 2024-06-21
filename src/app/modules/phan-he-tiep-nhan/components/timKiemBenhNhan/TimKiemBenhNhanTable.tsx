import { TableCustomHeader } from "../../../component/table/components/TableCustomHeader";
import { TableCustomCell } from "../../../component/table/components/TableCustomCell";
import { Dispatch, FC, SetStateAction } from "react";
import { formatDateToString, newDate } from "../../../utils/FormatUtils";
import { TimKiemBenhNhanModel } from "./TimKiemBenhNhanModels";
import { CustomColumn } from "../../../component/table/table-custom/tableCustomeModel";
import { TableCustom } from "../../../component/table/table-custom/TableCustom";

type DSTiepNhan = {
    getSelectedRowsData: Dispatch<SetStateAction<any>>,
    handleSearchByPage: () => void,
    handleChangeValueInput: (event: React.ChangeEvent<HTMLInputElement>) => void,
    setShouldOpenFilterSearch: React.Dispatch<React.SetStateAction<boolean>>,
    shouldOpenFilterSearch: boolean,
    benhNhanData: any,
    rowsPerPage: number,
    page: number,
}

const TimKiemBenhNhanTable: FC<DSTiepNhan> = (props) => {
    let {
        getSelectedRowsData,
        handleSearchByPage,
        handleChangeValueInput,
        setShouldOpenFilterSearch,
        shouldOpenFilterSearch,
        benhNhanData,
        rowsPerPage,
        page,
    } = props;

    const TimKiemBenhNhanColumns: ReadonlyArray<CustomColumn<TimKiemBenhNhanModel>> = [
        {
            Header: (props) => (
                <TableCustomHeader<TimKiemBenhNhanModel>
                    tableProps={props}
                    title={"STT"}
                    className="text-center text-white align-middle min-w-50px "
                />
            ),
            typeSorting: "text",
            sorting: false,
            id: "Số thứ tự",
            name:"stt",
            Cell: ({ ...props }) => <TableCustomCell data={String(((page - 1) * rowsPerPage + props?.row?.index) + 1)} className="text-center " />
        },
        {
            Header: (props) => (
                <TableCustomHeader<TimKiemBenhNhanModel>
                    tableProps={props}
                    title={"Mã BN"}
                    className="text-center text-white align-middle min-w-150px "
                />
            ),
            id: "Mã BN",
            name:'mpi',
            typeSorting: "text",
            sorting: true,
            Cell: ({ ...props }) => (
                <TableCustomCell data={props?.data[props?.row?.index]?.mpi} className="text-center " />
            ),
        },
        {
            Header: (props) => (
                <TableCustomHeader<TimKiemBenhNhanModel>
                    tableProps={props}
                    title={"Tên bệnh nhân"}
                    className="text-white align-middle min-w-200px "
                />
            ),
            typeSorting: "text",
            sorting: true,
            id: "Tên bệnh nhân",
            name: "hoTen",
            Cell: ({ ...props }) => (
                <TableCustomCell data={props?.data[props?.row?.index]?.hoTen} className=""/>
            ),
        },
        {
            Header: (props) => (
                <TableCustomHeader<TimKiemBenhNhanModel>
                    tableProps={props}
                    title={"Ngày sinh"}
                    className="text-center text-white align-middle min-w-125px "
                />
            ),
            id: "Ngày sinh",
            typeSorting: "text",
            sorting: false,
            Cell: ({ ...props }) => {
                const ngaySinh = props?.data[props?.row?.index]?.ngaySinh || 1
                const thangSinh = props?.data[props?.row?.index]?.thangSinh || 1
                const namSinh = props?.data[props?.row?.index]?.namSinh || 0
                return (
                    <TableCustomCell data={formatDateToString(newDate(namSinh, thangSinh, ngaySinh))} className="text-center " />
                )
            }
        },
        {
            Header: (props) => (
                <TableCustomHeader<TimKiemBenhNhanModel>
                    tableProps={props}
                    title={"Giới tính"}
                    className="text-center text-white align-middle min-w-100px "
                />
            ),
            typeSorting: "text",
            sorting: false,
            id: "Giới tính",
            Cell: ({ ...props }) => {
                let gioiTinh = props?.data[props?.row?.index]?.gioiTinh
                return <TableCustomCell data={gioiTinh || ""} className="text-center " />
            }
        },
        {
            Header: (props) => (
                <TableCustomHeader<TimKiemBenhNhanModel>
                    tableProps={props}
                    title={"Mã BHYT"}
                    className="text-center text-white align-middle min-w-150px "
                />
            ),
            id: "Mã BHYT",
            Cell: ({ ...props }) => (
                <TableCustomCell data={props?.data[props?.row?.index]?.soBhyt} className="text-center " />
            ),
        },
        {
            Header: (props) => (
                <TableCustomHeader<TimKiemBenhNhanModel>
                    tableProps={props}
                    title={"CMND"}
                    className="text-center text-white align-middle min-w-150px "
                />
            ),
            id: "CMND",
            typeSorting: "number",
            name: "soDinhDanh",
            sorting: true,
            Cell: ({ ...props }) => (
                <TableCustomCell
                    data={props?.data[props?.row?.index]?.soDinhDanh}
                    className="text-center "
                />
            ),
        },
        {
            Header: (props) => (
                <TableCustomHeader<TimKiemBenhNhanModel>
                    tableProps={props}
                    title={"SĐT"}
                    className="text-white align-middle min-w-150px "
                />
            ),
            id: "Số điện thoại",
            typeSorting: "text",
            name:"soDienThoai",
            sorting: true,
            Cell: ({ ...props }) => (
                <TableCustomCell data={props?.data[props?.row?.index]?.soDienThoai || ""} className="" />
            ),
        },
        {
            Header: (props) => (
                <TableCustomHeader<TimKiemBenhNhanModel>
                    tableProps={props}
                    title={"PK/KĐT hẹn"}
                    className="text-center text-white align-middle min-w-200px "
                />
            ),
            typeSorting: "text",
            sorting: false,
            id: "PK/KĐT hẹn",
            Cell: ({ ...props }) => (
                <TableCustomCell data={props?.data[props?.row?.index]?.appointmentClinic || ''} className="" />
            ),
        },
        {
            Header: (props) => (
                <TableCustomHeader<TimKiemBenhNhanModel>
                    tableProps={props}
                    title={"Địa chỉ"}
                    className="text-white align-middle min-w-300px "
                />
            ),
            typeSorting: "text",
            sorting: false,
            id: "Địa chỉ",
            Cell: ({ ...props }) => (
                <TableCustomCell data={props?.data[props?.row?.index]?.diaChi || ""} className="" />
            ),
        },
    ];

    return (
        <div className="border">
            <TableCustom<TimKiemBenhNhanModel>
                columns={TimKiemBenhNhanColumns}
                data={benhNhanData?.data}
                getSelectedRowsData={getSelectedRowsData}
                handleSearchByPage={handleSearchByPage}
                handleChangeValueInput={handleChangeValueInput}
                setShouldOpenFilterSearch={setShouldOpenFilterSearch}
                shouldOpenFilterSearch={shouldOpenFilterSearch}
                selectionMode="single"
                minHeight={400}
            />
        </div>
    )
}

export default TimKiemBenhNhanTable;
