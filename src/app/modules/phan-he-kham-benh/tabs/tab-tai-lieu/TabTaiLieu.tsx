import { Column } from "react-table";
import CustomIconButton from "../../../component/custom-icon-button/CustomIconButton";
import { TableCustomCell } from "../../../component/table/components/TableCustomCell";
import { TableCustomHeader } from "../../../component/table/components/TableCustomHeader";
import "../../PhanHeKhamBenh.scss";
import { TaiLieuModel } from "../../models/TaiLieuModel";
import { Button } from "react-bootstrap";
import { useState } from "react";
import ModalAddFile from "../../modals/modal-tab-tai-lieu/ModalAddFile";
import DialogConfirmDelete from "../../../component/dialog-confirm-delete/DialogConfirmDelete";
import { iUploadImage } from "../../../phan-he-tiep-nhan-thanh-toan/models/PhanHeTiepNhanModel";
import { TableCustom } from "../../../component/table/table-custom/TableCustom";

export type KhamBenh = {
  thongTinKhamBenh?: any;
  setThongTinKhamBenh: ((data: any) => void) | undefined;
};

export const TabTaiLieu = () => {
  const [openDialogAddFile, setOpenDialopAddFile] = useState<boolean>(false);
  const [openConfirmDialog, setOpenConfirmDialog] = useState<boolean>(false);
  const [listTaiLieu, setListTaiLieu] = useState<TaiLieuModel[]>([]);
  const initialTaiLieu = {
    file: "",
    tenFile: "",
    loaiFile: "",
    ghiChu: "",
    tenTaiLieu: "",
  };
  const [taiLieu, setTaiLieu] = useState<TaiLieuModel>(initialTaiLieu);
  const handleEdit = (data: any) => {
    setTaiLieu(data);
    setOpenDialopAddFile(true);
  };
  const handleOpenConfirmDialog = (data: any) => {
    setTaiLieu(data)
    setOpenConfirmDialog(true);
  };
  const handleDelete = () => {
    setListTaiLieu(
      listTaiLieu?.filter((item) => item.id !== taiLieu.id)
    );
    setOpenConfirmDialog(false);
  };

  const TaiLieuColumns: ReadonlyArray<Column<TaiLieuModel>> = [
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"STT"}
          className="text-center text-white px-3 w-30px "
        />
      ),
      id: "STT",
      Cell: ({ ...props }) => (
        <TableCustomCell
          className="text-center "
          data={String(props.row.index + 1)}
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Tên tài liệu"}
          className="text-center text-white px-3 max-w-100px "
        />
      ),
      id: "Tên tài liệu",
      Cell: ({ ...props }) => (
        <TableCustomCell
          className="text-start "
          data={props.data[props.row.index].tenTaiLieu}
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"File"}
          className="text-center text-white px-3 min-w-200px "
        />
      ),
      id: "File",
      Cell: ({ ...props }) => (
        <TableCustomCell
          className="text-start "
          data={props.data[props.row.index].tenFile}
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Loại file"}
          className="text-center text-white px-3 min-w-200px "
        />
      ),
      id: "Loại file",
      Cell: ({ ...props }) => (
        <TableCustomCell
          className="text-center "
          data={props.data[props.row.index].loaiFile}
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Ghi chú"}
          className="text-center text-white px-3 min-w-200px "
        />
      ),
      id: "Ghi chú",
      Cell: ({ ...props }) => (
        <TableCustomCell
          className="text-start "
          data={props.data[props.row.index].ghiChu}
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Thao tác"}
          className="text-center text-white px-3 max-w-50px "
        />
      ),
      id: "Thao tác",
      Cell: ({ ...props }) => (
        <div className="d-flex justify-content-center ">
          <CustomIconButton
            variant="edit"
            onClick={() => handleEdit(props.cell.row.original)}
          >
            <i className="bi bi-pencil-square text-navy"></i>
          </CustomIconButton>

          <CustomIconButton
            variant="delete"
            onClick={() => handleOpenConfirmDialog(props.cell.row.original)}
          >
            <i className="bi bi-trash3-fill text-danger"></i>
          </CustomIconButton>
        </div>
      ),
    },
  ];

  const handleOpenDialogAddFile = () => {
    setTaiLieu(initialTaiLieu);
    setOpenDialopAddFile(true);
  };
  const handleUploadImage = (files: iUploadImage) => {
    let formData = new FormData();
    formData.append("tai-lieu", files?.files[0]);
    files.formData = formData;
    setOpenDialopAddFile(false);
  };

  return (
    <div className="mt-3 tab-tai-lieu h-100 bg-white">
      <TableCustom<TaiLieuModel>
        hasToolbar={false}
        minHeight={450}
        data={listTaiLieu}
        columns={TaiLieuColumns}
      />
      <div className="d-flex justify-content-center py-2">
        <Button
          className="btn-fill"
          onClick={() => handleOpenDialogAddFile()}
        >
          Thêm tài liệu
        </Button>
      </div>
      {openDialogAddFile && (
        <ModalAddFile
          open={openDialogAddFile}
          handleClose={() => setOpenDialopAddFile(false)}
          taiLieu={taiLieu}
          setListTaiLieu={setListTaiLieu}
          listTaiLieu={listTaiLieu}
        />
      )}
      {openConfirmDialog && (
        <DialogConfirmDelete
          dialogDelete={openConfirmDialog}
          setDialogDelete={setOpenConfirmDialog}
          handleDelete={() => handleDelete()}
        />
      )}
    </div>
  );
};

export default TabTaiLieu;
