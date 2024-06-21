import { Column } from "react-table";
import { TableCustomCell } from "../../../../component/table/components/TableCustomCell";
import { TableCustomHeader } from "../../../../component/table/components/TableCustomHeader";
import { TableCustom } from "../../../../component/table/table-custom/TableCustom";

type Props = {
  data: any;
  rowsPerPage: number
  page: number
};

export default function MauTable(props: Props) {
  const { data, rowsPerPage, page } = props;
  const NhaCungCapColumns: ReadonlyArray<Column<any>> = [
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"STT"}
          className="text-center text-white min-w-30px"
        />
      ),
      id: "stt",
      Cell: ({ ...props }) => (
        <TableCustomCell className="text-center" data={String(((page - 1) * rowsPerPage + props?.row?.index) + 1)} />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Mã máu"}
          className="text-center text-whites min-w-100px"
        />
      ),
      id: "Mã máu",
      Cell: ({ ...props }) => (
        <TableCustomCell className="text-center" data={props.data[props.row.index]?.codeBlood} />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Đơn vị máu và chế phẩm"}
          className="text-center text-white min-w-200px"
        />
      ),
      id: "Đơn vị máu và chế phẩm",
      Cell: ({ ...props }) => (
        <TableCustomCell className="text-start" data={props.data[props.row.index]?.bloodUnitsAndProducts} />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"thể tích"}
          className="text-center text-white min-w-100px"
        />
      ),
      id: "Thể tích",
      Cell: ({ ...props }) => (
        <TableCustomCell className="text-center" data={props.data[props.row.index]?.actualVolume} />
      ),
    },
  ];

  return (
    <div className="dsMau-table">
      <TableCustom<any>
        data={data || []}
        hasToolbar={false}
        minHeight={400}
        columns={NhaCungCapColumns}
        verticalScroll={true}
      />
    </div>
  );
}
