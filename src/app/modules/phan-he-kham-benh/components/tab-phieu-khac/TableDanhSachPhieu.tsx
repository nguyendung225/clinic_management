import { FC } from "react";
import { Column } from "react-table";
import { TableCustomCell } from "../../../component/table/components/TableCustomCell";
import { SELECTION_MODE } from "../../../utils/Constant";
import { TableCustom } from "../../../component/table/table-custom/TableCustom";

interface Props {
  handleSelectRowData: (rowData: any[]) => void;
}
export interface dsPhieuModel {
  code: string;
  name: string;
}

const TableDanhSachPhieu: FC<Props> = (props) => {
  const { handleSelectRowData } = props;
  const dataDSPhieu: dsPhieuModel[] = [
    { code: "khamChuyenKhoa", name: "Khám chuyên khoa" },
    { code: "kskLaiXe", name: "KSK lái xe" },
    { code: "soKhamThai", name: "Sổ khám thai" },
    { code: "soDatVong", name: "Sổ đặt vòng" },
    { code: "bangBanGiaoNguoiBenhDiMo", name: "Bảng bàn giao người bệnh đi mổ" },
    { code: "bienBanHoiChan", name: "Biên bản hội chẩn" },
    { code: "giayNghiOm", name: "Giấy nghỉ ốm" },
    { code: "phieuChuyenTuyen", name: "Phiếu chuyển tuyến" },
    { code: "phieuTruyenNhiem", name: "Phiếu truyền nhiễm" },
    { code: "giayBaoTu", name: "Giấy báo tử" },
    { code: "phieuNghiDuongThai", name: "Phiếu nghỉ dưỡng thai" },
    { code: "tongKetBenhAn", name: "Tổng kết bệnh án" },
  ];
  const chiDinhThuocColumn: ReadonlyArray<Column<dsPhieuModel>> = [
    {
      Header: () => <></>,
      id: "dv",
      Cell: ({ ...props }) => (
        <TableCustomCell
          className="p-table"
          data={<div>{props.data[props.row.index]?.name}</div>}
        />
      ),
    },
  ];
  
  return (
    <TableCustom<dsPhieuModel>
      verticalScroll
      columns={chiDinhThuocColumn}
      data={dataDSPhieu || []}
      selectionMode={SELECTION_MODE.SINGLE_NO_RADIO_BUTTON}
      getSelectedRowsData={handleSelectRowData}
    />
  );
};

export { TableDanhSachPhieu };

