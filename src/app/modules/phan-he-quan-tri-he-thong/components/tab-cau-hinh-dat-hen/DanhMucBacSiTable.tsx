import { FC } from "react";
import { DanhMucBacSiModel } from "../../models/ModelDatHen";
import { CustomColumn } from "../../../component/table/table-custom/tableCustomeModel";
import { TableCustomHeader } from "../../../component/table/components/TableCustomHeader";
import { TableCustomCell } from "../../../component/table/components/TableCustomCell";
import { TableCustom } from "../../../component/table/table-custom/TableCustom";

type DSTiepNhan = {
    getSelectedRowsData: React.Dispatch<React.SetStateAction<DanhMucBacSiModel[]>> | undefined,
    handleSearchByPage: () => void,
    handleChangeValueInput: (event: React.ChangeEvent<HTMLInputElement>) => void,
    setShouldOpenFilterSearch: React.Dispatch<React.SetStateAction<boolean>>,
    shouldOpenFilterSearch: boolean,
    data: any,
    rowsPerPage: number,
    page: number,
}

const DanhMucBacSiTable: FC<DSTiepNhan> = (props) => {
    let {
        getSelectedRowsData,
        handleSearchByPage,
        handleChangeValueInput,
        setShouldOpenFilterSearch,
        shouldOpenFilterSearch,
        data,
    } = props;

    const BacSiColumns: ReadonlyArray<CustomColumn<DanhMucBacSiModel>> = [
        {
            Header: (props) => (
                <TableCustomHeader<DanhMucBacSiModel>
                    tableProps={props}
                    title={"Mã phòng"}
                    className="d-flex justify-content-center text-center text-white align-middle min-w-100px "
                />
            ),
            id: "Mã phòng",
            name:'mpi',
            typeSorting: "text",
            sorting: true,
            Cell: ({ ...props }) => (
                <TableCustomCell data={props?.data[props?.row?.index]?.maChucDanh} className="text-center text-uppercase " />
            ),
        },
        {
            Header: (props) => (
                <TableCustomHeader<DanhMucBacSiModel>
                    tableProps={props}
                    title={"Họ tên"}
                    className="text-white align-middle min-w-400px "
                />
            ),
            typeSorting: "text",
            sorting: true,
            id: "Họ tên",
            name: "hoTen",
            Cell: ({ ...props }) => (
                <TableCustomCell data={props?.data[props?.row?.index]?.hoTen} className=""/>
            ),
        },
        {
            Header: (props) => (
                <TableCustomHeader<DanhMucBacSiModel>
                    tableProps={props}
                    title={"Phòng ban"}
                    className="d-flex justify-content-center text-center text-white align-middle min-w-100px "
                />
            ),
            typeSorting: "text",
            sorting: false,
            id: "Phòng ban",
            Cell: ({ ...props }) => {
                let soPhong = props?.data[props?.row?.index]?.phongBan
                return <TableCustomCell data={soPhong || ""} className="d-flex justify-content-center text-center " />
            }
        },
    ];

    return (
        <TableCustom<DanhMucBacSiModel>
            columns={BacSiColumns}
            data={data || data?.data}
            getSelectedRowsData={getSelectedRowsData}
            handleSearchByPage={handleSearchByPage}
            handleChangeValueInput={handleChangeValueInput}
            setShouldOpenFilterSearch={setShouldOpenFilterSearch}
            shouldOpenFilterSearch={shouldOpenFilterSearch}
            selectionMode="single"
            minHeight={400}
        />
    )
}

export default DanhMucBacSiTable;
