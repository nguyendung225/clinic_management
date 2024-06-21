import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Column } from 'react-table';
import { TablePagination } from '../../../../component/table/components/TablePagination';
import TextValidator from '../../../../component/TextValidator';
import ActionTable from '../../../../component/action-table/ActionTable';
import { TableCustomCell } from '../../../../component/table/components/TableCustomCell';
import { TableCustomHeader } from '../../../../component/table/components/TableCustomHeader';
import { handlePagesChange, handleRowsPerPageChange, rowsForPage } from '../../../../utils/PageUtils';
import { CODE_LOAI_HANG_HOA, hangHoaMauData, hangHoaVatTuData, xuatKhoMauData, xuatKhoThuocData, xuatKhoVatTuData } from '../../../consts/QuanLyKhoConst';
import { IXuatKho, xuatKhoMau, xuatKhoThuoc, xuatKhoVatTu } from '../../../models/QuanLyKhoModels';
import LoaiHangHoaDialog from './LoaiHangHoaDialog';
import { TableCustom } from '../../../../component/table/table-custom/TableCustom';

type Props = {
  formikValuesXuatKhoDialog: IXuatKho;
  handleSelectAction: (data: any) => void;
  handleChangSLXuat: (event: any, index: number, name: string) => void
}
const LoaiHangHoaTable = (props: Props) => {
  const { formikValuesXuatKhoDialog, handleSelectAction, handleChangSLXuat } = props;
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [shouldOpenLoaiHangHoaDialog, setShouldOpenLoaiHangHoaDialog] = useState<boolean>(false);
  const typeTable =formikValuesXuatKhoDialog.typeGoods?.name
  const [dataTable, setDataTable] = useState<any>([]);
  const checkTypeTable = (type?: string) => {
    switch (type) {
      case CODE_LOAI_HANG_HOA.MAU:
        setDataTable(xuatKhoMauData);
        break;
      case CODE_LOAI_HANG_HOA.THUOC:
        setDataTable(xuatKhoThuocData);
        break;
      case CODE_LOAI_HANG_HOA.VAC_XIN:
        break;
      case CODE_LOAI_HANG_HOA.VAT_TU_HOA_CHAT:
        setDataTable(xuatKhoVatTuData);
        break;
      default:
        setDataTable([]);
        break;
    }
  };

  const handleShouldOpenLoaiHangHoaDialog = () => {
    setShouldOpenLoaiHangHoaDialog(true);
  }

  const handleCloseLoaiHangHoaDialog = () => {
    setShouldOpenLoaiHangHoaDialog(false);
  }
  const mauColumns: ReadonlyArray<Column<xuatKhoMau>> = [
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={" Nồng độ"}
          className="text-center text-white px-3 min-w-150px"
        />
      ),
      id: "nongDo",
      Cell: ({ ...props }) => (
        <TableCustomCell className="text-center" data={props.data[props.row.index]?.nongDo} />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Hàm lượng"}
          className="text-center text-white px-3 min-w-150px"
        />
      ),
      id: "hamLuong",
      Cell: ({ ...props }) => (
        <TableCustomCell className="text-center" data={props.data[props.row.index]?.hamLuong} />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Thể tích"}
          className="text-center text-white px-3 min-w-150px"
        />
      ),
      id: "theTich",
      Cell: ({ ...props }) => (
        <TableCustomCell className="text-center" data={props.data[props.row.index]?.theTich} />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Ngày lấy"}
          className="text-center text-white px-3 min-w-150px"
        />
      ),
      id: "ngayLay",
      Cell: ({ ...props }) => (
        <TableCustomCell className="text-center" data={props.data[props.row.index]?.ngayLay} />
      ),
    },
  ];
  const thuocColumns: ReadonlyArray<Column<xuatKhoThuoc>> = [
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={" Nồng độ"}
          className="text-center text-white px-3 min-w-150px"
        />
      ),
      id: "nongDo",
      Cell: ({ ...props }) => (
        <TableCustomCell className="text-center" data={props.data[props.row.index]?.nongDo} />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Hàm lượng"}
          className="text-center text-white px-3 min-w-150px"
        />
      ),
      id: "hamLuong",
      Cell: ({ ...props }) => (
        <TableCustomCell className="text-center" data={props.data[props.row.index]?.hamLuong} />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Hoạt chất"}
          className="text-center text-white px-3 min-w-150px"
        />
      ),
      id: "hoatChat",
      Cell: ({ ...props }) => (
        <TableCustomCell className="text-center" data={props.data[props.row.index]?.hoatChat} />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Nước sản xuất"}
          className="text-center text-white px-3 min-w-150px"
        />
      ),
      id: "nuocSanXuat",
      Cell: ({ ...props }) => (
        <TableCustomCell className="text-center" data={props.data[props.row.index]?.nuocSanXuat} />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Hãng sản xuất"}
          className="text-center text-white px-3 min-w-150px"
        />
      ),
      id: "hangSanXuat",
      Cell: ({ ...props }) => (
        <TableCustomCell className="text-center" data={props.data[props.row.index]?.hangSanXuat} />
      ),
    },
  ];
  const vatTuColumns: ReadonlyArray<Column<xuatKhoVatTu>> = [
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Nước sản xuất"}
          className="text-center text-white px-3 min-w-150px"
        />
      ),
      id: "nuocSanXuat",
      Cell: ({ ...props }) => (
        <TableCustomCell className="text-center" data={props.data[props.row.index]?.nuocSanXuat} />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Hãng sản xuất"}
          className="text-center text-white px-3 min-w-150px"
        />
      ),
      id: "hangSanXuat",
      Cell: ({ ...props }) => (
        <TableCustomCell className="text-center" data={props.data[props.row.index]?.hangSanXuat} />
      ),
    },
  ];
  const commonColumns: ReadonlyArray<Column<any>> = [
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"STT"}
          className="text-center text-white px-3 w-60px"
        />
      ),
      id: "stt",
      Cell: ({ ...props }) => (
        <TableCustomCell className="text-center" data={String(props.row.index + 1)} />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Thao tác"}
          className="text-center text-white px-3 min-w-100px"
        />
      ),
      id: "actions",
      Cell: ({ ...props }) => (
        <ActionTable
          data={props.data[props.row.index]}
          handleSelectAction={handleSelectAction}
          isDelete
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Mã"}
          className="text-center text-white px-3 min-w-150px"
        />
      ),
      id: "ma",
      Cell: ({ ...props }) => (
        <TableCustomCell className="text-center" data={props.data[props.row.index]?.ma} />
      ),
    },

    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Tên"}
          className="text-center text-white px-3 min-w-150px"
        />
      ),
      id: "ten",
      Cell: ({ ...props }) => (
        <TableCustomCell className="text-center" data={props.data[props.row.index]?.ten} />
      ),
    },
    // ...(typeTable === CODE_LOAI_HANG_HOA.MAU
    //   ? mauColumns
    //   : typeTable === CODE_LOAI_HANG_HOA.THUOC
    //   ? thuocColumns
    //   : typeTable === CODE_LOAI_HANG_HOA.VAT_TU_HOA_CHAT
    //   ? vatTuColumns
    //   : []),

    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Hạn sử dụng"}
          className="text-center text-white px-3 min-w-150px"
        />
      ),
      id: "hanSuDung",
      Cell: ({ ...props }) => (
        <TableCustomCell className="text-center" data={props.data[props.row.index]?.hanSuDung} />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Số đăng ký"}
          className="text-center text-white px-3 min-w-150px"
        />
      ),
      id: "soDangKi",
      Cell: ({ ...props }) => (
        <TableCustomCell className="text-center" data={props.data[props.row.index]?.soDangKi} />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"SL tồn"}
          className="text-center text-white px-3 min-w-70px"
        />
      ),
      id: "soLuonTon",
      Cell: ({ ...props }) => (
        <TableCustomCell className="text-center" data={props.data[props.row.index]?.soLuongTon} />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"SL xuất"}
          className="text-center text-white px-3 min-w-70px"
        />
      ),
      id: "soLuongXuat",
      Cell: ({ ...props }) => (
        <TableCustomCell
          className="text-center"
          data={
            <>
              <TextValidator
                className="px-1 text-center no-spinners"
                name="soLuongXuat"
                type="number"
                onChange={(e: any) => handleChangSLXuat(e, props.row.index, "soLuongXuat")}
              />
            </>
          }
        />
      ),
    },
  ];

  useEffect(() => {
    checkTypeTable(typeTable);
  }, [typeTable]);

  return (
    <div>
      <Button
        className="btn-navy min-w-80px mb-2"
        size="sm"
        onClick={handleShouldOpenLoaiHangHoaDialog}
      >
        Chọn
      </Button>
      <TableCustom<any> columns={commonColumns} data={dataTable} minHeight={250} />
      <TablePagination
        handlePagesChange={handlePagesChange}
        handleRowsPerPageChange={handleRowsPerPageChange}
        rowsPerPage={rowsPerPage}
        rowsForPage={rowsForPage}
        page={page}
        setPage={setPage}
        setRowsPerPage={setRowsPerPage}
        totalPages={99}
        totalElements={10}
      />

      {shouldOpenLoaiHangHoaDialog && (
        <LoaiHangHoaDialog handleCloseDialog={handleCloseLoaiHangHoaDialog} />
      )}
    </div>
  );
}

export default LoaiHangHoaTable