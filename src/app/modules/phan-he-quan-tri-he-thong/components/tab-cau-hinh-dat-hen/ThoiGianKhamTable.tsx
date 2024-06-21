import { FC } from "react";
import { Column } from "react-table";
import { TableCustomCell } from "../../../component/table/components/TableCustomCell";
import { TableCustomHeader } from "../../../component/table/components/TableCustomHeader";
import { DanhMucChonThoiGianKhamModel } from "../../models/ModelDatHen";
import { SELECTION_MODE } from "../../../utils/Constant";
import { TableCustom } from "../../../component/table/table-custom/TableCustom";

type Props = {
  data: any;
  updatePageData?: () => void;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  page?: number;
  rowsPerPage?: number;
  setDataCauHinh: any;
};

const ThoiGianKhamTable: FC<Props> = (props) => {
  let { data, updatePageData, handleChange, setDataCauHinh } = props;

  const danhSachChonThoiGianKhamColumn: ReadonlyArray<Column<DanhMucChonThoiGianKhamModel>> = [
    {
      Header: (props) => (
        <TableCustomHeader<DanhMucChonThoiGianKhamModel>
          tableProps={props}
          title={("STT")}
          className="d-flex justify-content-center text-center max-w-30px "
        />
      ),
      id: "STT",
      Cell: ({ ...props }) => (
        <TableCustomCell
          data={props?.data[props?.row?.index]?.stt || ""}
          className="text-center "
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader<DanhMucChonThoiGianKhamModel>
          tableProps={props}
          title={("Thời gian khám")}
          className="text-center min-w-100px "
        />
      ),
      id: "Thời gian khám",
      Cell: ({ ...props }) => (
        <TableCustomCell
          className=""
          data={`${props?.data[props?.row?.index]?.tu} - ${props?.data[props?.row?.index]?.den}`  || ""}
        />
      ),
    },
  ];

  return (
    <TableCustom<DanhMucChonThoiGianKhamModel>
      hasToolbar={false}
      minHeight={350}
      data={data}
      columns={danhSachChonThoiGianKhamColumn}
      handleSearchByPage={updatePageData}
      handleChangeValueInput={handleChange}
      verticalScroll={true}
      selectionMode={SELECTION_MODE.SINGLE_NO_RADIO_BUTTON}
      getSelectedRowsData={setDataCauHinh}
    />
  );
};

export default ThoiGianKhamTable;
