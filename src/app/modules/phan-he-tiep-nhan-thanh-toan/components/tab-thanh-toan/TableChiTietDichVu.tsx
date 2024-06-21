import { Form } from "formik";
import { useContext, useEffect, useRef, useState } from "react";
import { useIntl } from "react-intl";
import { AppContext } from "../../../appContext/AppContext";
import { ConfirmDialog } from "../../../component/ConfirmDialog";
import ContextMenu from "../../../component/ContextMenuV2";
import { CODE_ITEM_MENU, contextMenuDSThanhToan } from "../../constants/constants";
import ModalSuaSoLuong from "./ModalSuaSoLuong";
import InputSearch from "../../../component/InputSearch";
import { toast } from "react-toastify";
import { convertNumberPrice } from "../../../utils/FormatUtils";
import { CODE_DOI_TUONG } from "../../constants/PhanHeTiepNhan";
import CombinedTable from "../../../component/table/combined-table/CombinedTable";
import { Column } from "react-table";
import { TableCustomHeader } from "../../../component/table/components/TableCustomHeader";
import { TableCustomCell } from "../../../component/table/components/TableCustomCell";

interface IProps {
  selectedRow: any;
  isTaoPhieu?: boolean;
}

const TableChiTietDichVu = ({ selectedRow, isTaoPhieu }: IProps) => {
  const { setIsLoading } = useContext(AppContext);
  const intl = useIntl();
  const [shouldOpenConfirmDialog, setShouldOpenConfirmDialog] = useState(false);
  const [shouldOpenSuaSoLuongDialog, setShouldOpenSuaSoLuongDialog] = useState(false);
  const [messageConfirm, setMessageConfirm] = useState("");
  const [rowSelected, setRowSelected] = useState<any>();
  const contextRef = useRef<HTMLDivElement | null>(null);
  const [contextMenu, setContextMenu] = useState<null | {
    x: number;
    y: number;
  }>(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleContextMenu = (e: any, row: any) => {
    e.preventDefault();
    setRowSelected(row?.values);
    setContextMenu({ x: e.clientX, y: e.clientY });
  };

  const handleClickOutside = (e: any) => {
    if (contextRef.current && !contextRef.current.contains(e.target as Node)) {
      setContextMenu(null);
    }
  };

  const handleClickOptionContextMenu = (value: any) => {
    const menuActions = {
      [CODE_ITEM_MENU.SUA_SO_LUONG]: () => {
        setShouldOpenSuaSoLuongDialog(true);
        setContextMenu(null);
      },
      [CODE_ITEM_MENU.SUA_GIA]: () => {
        toast.warning(`Dịch vụ [${rowSelected?.tenDichVu}] không được sửa đơn giá`);
        setContextMenu(null);
      },
      [CODE_ITEM_MENU.BO_DICH_VU]: () => {
        setShouldOpenConfirmDialog(true);
        setMessageConfirm("Bạn có chắc chắn muốn bỏ các dịch vụ này không?")
        setContextMenu(null);
      },
    };

    menuActions[value?.code]();
  };

  const handleOnYesClick = () => {
    console.log(rowSelected);
    setShouldOpenConfirmDialog(false);
  }

  const columnsTableTest: ReadonlyArray<Column<any>> = [
    {
      Header: (props: any) => {
        return (
          <TableCustomHeader
            tableProps={props}
            title={"Tên dịch vụ"}
            className="text-center min-w-200px p-2 border-x"
          />
        )
      },
      accessor: "tenDichVu",
      id: "tenDichVu",
      // isSticky: true,
      Cell: (props: any) => (
        <TableCustomCell
          tableProps={props}
          className="text-start spaces py-4 h-100"
          data={props?.value}
        />
      ),
    },
    {
      Header: (props: any) => {
        return (
          <TableCustomHeader
            tableProps={props}
            title={"Đơn vị"}
            className="text-center min-w-70px p-2 border-x"
          />
        )
      },
      accessor: "donVi",
      id: "donVi",
      Cell: (props: any) => (
        <TableCustomCell
          tableProps={props}
          className="text-center spaces py-4 h-100"
          data={props?.value}
        />
      ),
    },
    {
      Header: (props: any) => {
        return (
          <TableCustomHeader
            tableProps={props}
            title={"Đối tượng"}
            className="text-center min-w-90px p-0 p-2 border-x"
          />
        )
      },
      accessor: "doiTuong",
      id: "douTuong",
      Cell: (props: any) => (
        <TableCustomCell
          tableProps={props}
          className="text-center spaces py-4 h-100"
          data={props?.value}
        />
      ),
    },
    {
      Header: (props: any) => {
        return (
          <TableCustomHeader
            tableProps={props}
            title={"SL"}
            className="text-center min-w-30px p-0 p-2 border-x"
          />
        )
      },
      accessor: "sl",
      id: "sl",
      Cell: (props: any) => (
        <TableCustomCell
          tableProps={props}
          className="text-center spaces py-4 h-100"
          data={props?.value}
        />
      ),
    },
    {
      Header: (props: any) => {
        return (
          <TableCustomHeader
            tableProps={props}
            title={"Đơn giá"}
            className="text-center min-w-80px p-0 p-2 border-x"
          />
        )
      },
      accessor: "donGia",
      id: "donGia",
      Cell: (props: any) => (
        <TableCustomCell
          tableProps={props}
          className="text-end spaces py-4 h-100"
          hiddenParentData={true}
          data={convertNumberPrice(props?.value)}
        />
      ),
    },
    {
      Header: (props: any) => {
        return (
          <TableCustomHeader
            tableProps={props}
            title={"% TT"}
            className="text-center min-w-50px p-0 p-2 border-x"
          />
        )
      },
      accessor: "tt",
      id: "tt",
      Cell: (props: any) => (
        <TableCustomCell
          tableProps={props}
          className="text-center spaces py-4 h-100"
          data={props?.value}
        />
      ),
    },
    {
      Header: (props: any) => {
        return (
          <TableCustomHeader
            tableProps={props}
            title={"Thành tiền"}
            className="text-center min-w-100px p-0 p-2 border-x"
          />
        )
      },
      accessor: "thanhTien",
      id: "thanhTien",
      Cell: (props: any) => (
        <TableCustomCell
          tableProps={props}
          className="text-end spaces py-4 h-100"
          hiddenParentData={true}
          data={convertNumberPrice(props?.value)}
        />
      ),
    },
    ...((selectedRow?.[0]?.loaiDoiTuong === CODE_DOI_TUONG.MIEN_PHI) ? [{
      Header: (props: any) => {
        return (
          <TableCustomHeader
            tableProps={props}
            title={"Miễn giảm"}
            className="text-center min-w-100px p-0 p-2 border-x"
          />
        )
      },
      accessor: "mienGiam",
      id: "mienGiam",
      Cell: (props: any) => (
        <TableCustomCell
          tableProps={props}
          className="text-end spaces py-4 h-100"
          hiddenParentData={true}
          data={convertNumberPrice(props?.value)}
        />
      ),
    }] : []),
    ...((selectedRow?.[0]?.loaiDoiTuong === CODE_DOI_TUONG.BAO_HIEM) ? [{
      Header: (props: any) => {
        return (
          <TableCustomHeader
            tableProps={props}
            title={"BHYT trả"}
            className="text-center min-w-90px p-0 p-2 border-x"
          />
        )
      },
      accessor: "bhytTra",
      id: "bhytTra",
      Cell: (props: any) => (
        <TableCustomCell
          tableProps={props}
          className="text-end spaces py-4 h-100"
          hiddenParentData={true}
          data={convertNumberPrice(props?.value)}
        />
      ),
    },
    {
      Header: (props: any) => {
        return (
          <TableCustomHeader
            tableProps={props}
            title={"% BH"}
            className="text-center min-w-50px p-0 p-2 border-x"
          />
        )
      },
      accessor: "bh",
      id: "bh",
      Cell: (props: any) => (
        <TableCustomCell
          tableProps={props}
          className="text-center spaces py-4 h-100"
          data={props?.value}
        />
      ),
    }] : []),
    {
      Header: (props: any) => {
        return (
          <TableCustomHeader
            tableProps={props}
            title={"BN trả"}
            className="text-center min-w-90px p-0 p-2 border-x"
          />
        )
      },
      accessor: "bnTra",
      id: "bnTra",
      Cell: (props: any) => (
        <TableCustomCell
          tableProps={props}
          className="text-end spaces py-4 h-100"
          hiddenParentData={true}
          data={convertNumberPrice(props?.value)}
        />
      ),
    },
    {
      Header: (props: any) => {
        return (
          <TableCustomHeader
            tableProps={props}
            title={"#BNCCT"}
            className="text-center min-w-50px p-0 p-2 border-x"
          />
        )
      },
      accessor: "bncct",
      id: "bncct",
      Cell: (props: any) => (
        <TableCustomCell
          tableProps={props}
          className="text-end spaces py-4 h-100"
          hiddenParentData={true}
          data={convertNumberPrice(props?.value)}
        />
      ),
    },
    {
      Header: (props: any) => {
        return (
          <TableCustomHeader
            tableProps={props}
            title={"#BNTT"}
            className="text-center min-w-50px p-0 p-2 border-x"
          />
        )
      },
      accessor: "bntt",
      id: "bntt",
      Cell: (props: any) => (
        <TableCustomCell
          tableProps={props}
          className="text-end spaces py-4 h-100"
          hiddenParentData={true}
          data={convertNumberPrice(props?.value)}
        />
      ),
    },
    {
      Header: (props: any) => {
        return (
          <TableCustomHeader
            tableProps={props}
            title={"Đã thu"}
            className="text-center min-w-100px p-0 p-2 border-x"
          />
        )
      },
      accessor: "daThu",
      id: "daThu",
      Cell: (props: any) => (
        <TableCustomCell
          tableProps={props}
          className="text-end spaces py-4 h-100"
          hiddenParentData={true}
          data={convertNumberPrice(props?.value)}
        />
      ),
    },
    {
      Header: (props: any) => {
        return (
          <TableCustomHeader
            tableProps={props}
            title={"#Đã thu-cct"}
            className="text-center min-w-125px p-2 border-x"
          />
        )
      },
      accessor: "daThuCct",
      id: "daThuCct",
      Cell: (props: any) => (
        <TableCustomCell
          tableProps={props}
          className="text-end spaces py-4 h-100"
          hiddenParentData={true}
          data={convertNumberPrice(props?.value)}
        />
      ),
    },
    {
      Header: (props: any) => {
        return (
          <TableCustomHeader
            tableProps={props}
            title={"#Đã thu-bntt"}
            className="text-center min-w-125px p-0 p-2 border-x"
          />
        )
      },
      accessor: "daThuBntt",
      id: "daThuBntt",
      Cell: (props: any) => (
        <TableCustomCell
          tableProps={props}
          className="text-end spaces py-4 h-100"
          hiddenParentData={true}
          data={convertNumberPrice(props?.value)}
        />
      ),
    },
    {
      Header: (props: any) => {
        return (
          <TableCustomHeader
            tableProps={props}
            title={"YC thu"}
            className="text-center min-w-90px p-0 p-2 border-x"
          />
        )
      },
      accessor: "yeuCauThu",
      id: "yeuCauThu",
      Cell: (props: any) => (
        <TableCustomCell
          tableProps={props}
          className="text-end spaces py-4 h-100"
          hiddenParentData={true}
          data={convertNumberPrice(props?.value)}
        />
      ),
    },
  ]

  return (
    <Form id="form-thanh-toan">
      <InputSearch
        handleChange={() => { }}
        placeholder="Tìm kiếm"
        type="text"
      />
      
      <div className="overflow-auto fw-500 h-table-chi-tiet-dich-vu">
        <div className="col-md-12">
          <CombinedTable
            className={isTaoPhieu ? "h-chi-tiet-dich-vu-tao-phieu" : "h-chi-tiet-dich-vu"}
            userColumns={columnsTableTest}
            data={selectedRow[0]?.dsDichVu || []}
            treeTable
            handleRightClick={handleContextMenu}
          />

          <div ref={contextRef}>
            {contextMenu && (
              <ContextMenu data={contextMenuDSThanhToan} x={contextMenu.x} y={contextMenu.y} handleClickOptionContextMenu={handleClickOptionContextMenu} />
            )}
          </div>
        </div>
      </div>


      <ConfirmDialog
        show={shouldOpenConfirmDialog}
        title={"Xác nhận"}
        message={messageConfirm}
        yes={intl.formatMessage({ id: 'BTN.CONFIRM' })}
        onYesClick={handleOnYesClick}
        cancel={intl.formatMessage({ id: 'BTN.CANCEL' })}
        onCancelClick={() => setShouldOpenConfirmDialog(false)}
      />
      <ModalSuaSoLuong show={shouldOpenSuaSoLuongDialog} handleCloseDialog={() => setShouldOpenSuaSoLuongDialog(false)} />
    </Form>
  );
};
export default TableChiTietDichVu;
