import { FC } from "react";
import { DanhMucNgayLamViecModel } from "../../models/ModelDatHen";
import { CustomColumn } from "../../../component/table/table-custom/tableCustomeModel";
import { TableCustomHeader } from "../../../component/table/components/TableCustomHeader";
import { TableCustomCell } from "../../../component/table/components/TableCustomCell";
import { SELECTION_MODE } from "../../../utils/Constant";
import { TableCustom } from "../../../component/table/table-custom/TableCustom";

type DSTiepNhan = {
    getSelectedRowsData: React.Dispatch<React.SetStateAction<DanhMucNgayLamViecModel[]>> | undefined,
    handleSearchByPage: () => void,
    handleChangeValueInput: (event: React.ChangeEvent<HTMLInputElement>) => void,
    setShouldOpenFilterSearch: React.Dispatch<React.SetStateAction<boolean>>,
    shouldOpenFilterSearch: boolean,
    data: any,
    rowsPerPage: number,
    page: number,
}

const DanhMucNgayLamViecTable: FC<DSTiepNhan> = (props) => {
    let {
        getSelectedRowsData,
        handleSearchByPage,
        handleChangeValueInput,
        setShouldOpenFilterSearch,
        shouldOpenFilterSearch,
        data,
    } = props;

    const NgayLamViecColumns: ReadonlyArray<CustomColumn<DanhMucNgayLamViecModel>> = [
        {
            Header: (props) => (
                <TableCustomHeader<DanhMucNgayLamViecModel>
                    tableProps={props}
                    title={"Các ngày trong tuần"}
                    className="text-white align-middle min-w-600px "
                />
            ),
            id: "Các ngày trong tuần",
            name:'cacNgayTrongTuan',
            typeSorting: "text",
            sorting: true,
            Cell: ({ ...props }) => (
                <TableCustomCell data={props?.data[props?.row?.index]?.ngay} className="text-uppercase " />
            ),
        },
    ];

    return (
        <TableCustom<DanhMucNgayLamViecModel>
            columns={NgayLamViecColumns}
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

export default DanhMucNgayLamViecTable;
