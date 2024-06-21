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
  setDataCauHinh: any;
};

const CacNgayTrongTuanTable: FC<Props> = (props) => {
  let { data, updatePageData, handleChange, setDataCauHinh } = props;

  const ngayLamViecColumn: ReadonlyArray<Column<any>> = [
    {
      Header: (props) => (
        <TableCustomHeader<any>
          tableProps={props}
          title={"Các ngày trong tuần"}
          className="p-table min-w-200px"
        />
      ),
      id: "Các ngày trong tuần",
      Cell: ({ ...props }) => (
        <TableCustomCell
          className="p-table"
          data={props?.data[props?.row?.index]?.ngay || ""}
        />
      ),
    },
  ];

  return (
    <div className="h-100">
      <TableCustom<any>
        hasToolbar={false}
        data={data}
        columns={ngayLamViecColumn}
        handleSearchByPage={updatePageData}
        handleChangeValueInput={handleChange}
        verticalScroll={true}
        maxHeight={320}
        selectionMode={SELECTION_MODE.SINGLE_NO_RADIO_BUTTON}
        getSelectedRowsData={setDataCauHinh}
      />
    </div>
  );
};

export default CacNgayTrongTuanTable;
