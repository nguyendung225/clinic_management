import { FC } from "react";
import { DanhMucDichVuModel } from "../../models/ModelDatHen";
import { CustomColumn } from "../../../component/table/table-custom/tableCustomeModel";
import { TableCustomHeader } from "../../../component/table/components/TableCustomHeader";
import { TableCustomCell } from "../../../component/table/components/TableCustomCell";
import { SELECTION_MODE } from "../../../utils/Constant";
import { TableCustom } from "../../../component/table/table-custom/TableCustom";


type DSTiepNhan = {
    getSelectedRowsData: React.Dispatch<React.SetStateAction<DanhMucDichVuModel[]>> | undefined,
    handleSearchByPage: () => void,
    handleChangeValueInput: (event: React.ChangeEvent<HTMLInputElement>) => void,
    setShouldOpenFilterSearch: React.Dispatch<React.SetStateAction<boolean>>,
    shouldOpenFilterSearch: boolean,
    data: any,
    rowsPerPage: number,
    page: number,
}

const DanhMucDichVuTable: FC<DSTiepNhan> = (props) => {
    let {
        getSelectedRowsData,
        handleSearchByPage,
        handleChangeValueInput,
        setShouldOpenFilterSearch,
        shouldOpenFilterSearch,
        data,
    } = props;

    const TimKiemBenhNhanColumns: ReadonlyArray<CustomColumn<DanhMucDichVuModel>> = [
        {
            Header: (props) => (
                <TableCustomHeader<DanhMucDichVuModel>
                    tableProps={props}
                    title={"Mã dịch vụ"}
                    className="d-flex justify-content-center text-center text-white align-middle min-w-150px "
                />
            ),
            id: "Mã dịch vụ",
            name:'mpi',
            typeSorting: "text",
            sorting: true,
            Cell: ({ ...props }) => (
                <TableCustomCell data={props?.data[props?.row?.index]?.maDichVu} className="text-center text-uppercase " />
            ),
        },
        {
            Header: (props) => (
                <TableCustomHeader<DanhMucDichVuModel>
                    tableProps={props}
                    title={"Tên dịch vụ"}
                    className="text-white align-middle min-w-200px "
                />
            ),
            typeSorting: "text",
            sorting: true,
            id: "Tên dịch vụ",
            name: "hoTen",
            Cell: ({ ...props }) => (
                <TableCustomCell data={props?.data[props?.row?.index]?.tenDichVu} className=""/>
            ),
        },
        {
            Header: (props) => (
                <TableCustomHeader<DanhMucDichVuModel>
                    tableProps={props}
                    title={"Giá BHYT"}
                    className="d-flex justify-content-end text-end text-white align-middle min-w-100px "
                />
            ),
            typeSorting: "text",
            sorting: false,
            id: "Giá BHYT",
            Cell: ({ ...props }) => {
                let gioiTinh = props?.data[props?.row?.index]?.giaBhyt
                return <TableCustomCell data={gioiTinh || ""} className="d-flex justify-content-end text-end " />
            }
        },
        {
            Header: (props) => (
                <TableCustomHeader<DanhMucDichVuModel>
                    tableProps={props}
                    title={"Giá viện phí"}
                    className="d-flex justify-content-end text-end text-white align-middle min-w-150px "
                />
            ),
            id: "Giá viện phí",
            Cell: ({ ...props }) => (
                <TableCustomCell data={props?.data[props?.row?.index]?.giaVienPhi} className="d-flex justify-content-end text-end " />
            ),
        },
        {
            Header: (props) => (
                <TableCustomHeader<DanhMucDichVuModel>
                    tableProps={props}
                    title={"Giá dịch vụ"}
                    className="d-flex justify-content-end text-end text-white align-middle min-w-150px "
                />
            ),
            id: "Giá dịch vụ",
            Cell: ({ ...props }) => (
                <TableCustomCell data={props?.data[props?.row?.index]?.giaDichVu} className="d-flex justify-content-end text-end " />
            ),
        },
    ];

    return (
        <TableCustom<DanhMucDichVuModel>
            columns={TimKiemBenhNhanColumns}
            data={data || data?.data}
            getSelectedRowsData={getSelectedRowsData}
            handleSearchByPage={handleSearchByPage}
            handleChangeValueInput={handleChangeValueInput}
            setShouldOpenFilterSearch={setShouldOpenFilterSearch}
            shouldOpenFilterSearch={shouldOpenFilterSearch}
            selectionMode={SELECTION_MODE.MULTI}
            minHeight={400}
        />
    )
}

export default DanhMucDichVuTable;
