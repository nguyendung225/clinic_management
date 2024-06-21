import { FC } from "react";
import { DanhMucPhongKhamModel } from "../../models/ModelDatHen";
import { CustomColumn } from "../../../component/table/table-custom/tableCustomeModel";
import { TableCustomHeader } from "../../../component/table/components/TableCustomHeader";
import { TableCustomCell } from "../../../component/table/components/TableCustomCell";
import { SELECTION_MODE } from "../../../utils/Constant";
import { TableCustom } from "../../../component/table/table-custom/TableCustom";

type DSTiepNhan = {
    getSelectedRowsData: React.Dispatch<React.SetStateAction<DanhMucPhongKhamModel[]>> | undefined,
    handleSearchByPage: () => void,
    handleChangeValueInput: (event: React.ChangeEvent<HTMLInputElement>) => void,
    setShouldOpenFilterSearch: React.Dispatch<React.SetStateAction<boolean>>,
    shouldOpenFilterSearch: boolean,
    data: any,
    rowsPerPage: number,
    page: number,
}

const DanhMucPhongKhamTable: FC<DSTiepNhan> = (props) => {
    let {
        getSelectedRowsData,
        handleSearchByPage,
        handleChangeValueInput,
        setShouldOpenFilterSearch,
        shouldOpenFilterSearch,
        data,
    } = props;

    const PhongKhamColumns: ReadonlyArray<CustomColumn<DanhMucPhongKhamModel>> = [
        {
            Header: (props) => (
                <TableCustomHeader<DanhMucPhongKhamModel>
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
                <TableCustomCell data={props?.data[props?.row?.index]?.maPhong} className="text-center text-uppercase " />
            ),
        },
        {
            Header: (props) => (
                <TableCustomHeader<DanhMucPhongKhamModel>
                    tableProps={props}
                    title={"Tên khoa/phòng"}
                    className="text-white align-middle min-w-400px "
                />
            ),
            typeSorting: "text",
            sorting: true,
            id: "Tên khoa/phòng",
            name: "hoTen",
            Cell: ({ ...props }) => (
                <TableCustomCell data={props?.data[props?.row?.index]?.tenKhoaPhong} className=""/>
            ),
        },
        {
            Header: (props) => (
                <TableCustomHeader<DanhMucPhongKhamModel>
                    tableProps={props}
                    title={"Số phòng"}
                    className="d-flex justify-content-center text-center text-white align-middle min-w-100px "
                />
            ),
            typeSorting: "text",
            sorting: false,
            id: "Số phòng",
            Cell: ({ ...props }) => {
                let soPhong = props?.data[props?.row?.index]?.soPhong
                return <TableCustomCell data={soPhong || ""} className="d-flex justify-content-center text-center " />
            }
        },
    ];

    return (
        <TableCustom<DanhMucPhongKhamModel>
            columns={PhongKhamColumns}
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

export default DanhMucPhongKhamTable;
