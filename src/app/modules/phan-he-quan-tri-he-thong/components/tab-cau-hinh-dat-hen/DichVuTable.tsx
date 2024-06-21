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

const DichVuTable: FC<Props> = (props) => {
  let { data, updatePageData, handleChange, setDataCauHinh } = props;

  const danhSachTiepNhanColumn: ReadonlyArray<Column<any>> = [
    {
      Header: (props) => (
        <TableCustomHeader<any>
          tableProps={props}
          title={("Tên dịch vụ")}
          className="min-w-200px "
        />
      ),
      id: "Tên dịch vụ",
      Cell: ({ ...props }) => (
        <TableCustomCell className="" data={props?.data[props?.row?.index]?.tenDichVu || ""} />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader<any>
          tableProps={props}
          title={("Báo Giá")}
          className="d-flex justify-content-end min-w-100px "
        />
      ),
      id: "Báo giá",
      Cell: ({ ...props }) => (
        <TableCustomCell
          className="text-end text-uppercase "
          data={props?.data[props?.row?.index]?.giaVienPhi || ""}
        />
      ),
    },
  ];

  return (
    <TableCustom<any>
      hasToolbar={false}
      minHeight={350}
      data={data}
      columns={danhSachTiepNhanColumn}
      handleSearchByPage={updatePageData}
      handleChangeValueInput={handleChange}
      verticalScroll={true}
      selectionMode={SELECTION_MODE.SINGLE_NO_RADIO_BUTTON}
      getSelectedRowsData={setDataCauHinh}
    />
  );
};

export default DichVuTable;
