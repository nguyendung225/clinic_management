import { FC } from "react";
import { Column } from "react-table";
import { TableCustomHeader } from "../../../component/table/components/TableCustomHeader";
import { TableCustomCell } from "../../../component/table/components/TableCustomCell";
import { SELECTION_MODE } from "../../../utils/Constant";
import { TableCustom } from "../../../component/table/table-custom/TableCustom";

type Props = {
  data: any;
  updatePageData: () => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  page: number;
  rowsPerPage: number;
  setDataCauHinh: any
};

const NgayNghiTable: FC<Props> = (props) => {
  let { data, updatePageData, handleChange, setDataCauHinh } = props;

  const danhSachTiepNhanColumn: ReadonlyArray<Column<any>> = [
    {
      Header: (props) => (
        <TableCustomHeader<any>
          tableProps={props}
          title={("Ngày nghỉ")}
          className="text-center min-w-100px "
        />
      ),
      id: "Ngày nghỉ",
      Cell: ({ ...props }) => (
        <TableCustomCell
          className=""
          data={`${props?.data[props?.row?.index]?.tu} - ${props?.data[props?.row?.index]?.den}` || ""}
        />
      ),
    },
  ];

  return (
    <TableCustom<any>
      hasToolbar={false}    
      data={data}
      columns={danhSachTiepNhanColumn}
      handleSearchByPage={updatePageData}
      handleChangeValueInput={handleChange}
      verticalScroll={true}
      selectionMode={SELECTION_MODE.SINGLE_NO_RADIO_BUTTON}
      getSelectedRowsData={setDataCauHinh}
      maxHeight={172}
    />
  );
};

export default NgayNghiTable;
