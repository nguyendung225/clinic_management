import { Button, Modal } from 'react-bootstrap'
import { Column } from 'react-table';
import { INguoiGioiThieu } from '../../../models/DSTiepNhanModel';
import { TableCustomHeader } from '../../../../component/table/components/TableCustomHeader';
import { TableCustomCell } from '../../../../component/table/components/TableCustomCell';
import { useState } from 'react';
import NguoiGioiThieuDialog from './ModalNguoiGioiThieu';
import ActionTable from '../../../../component/action-table/ActionTable';
import { STATUS_ACTION } from '../../../../utils/Constant';
import { ConfirmDialog } from '../../../../component/ConfirmDialog';
import { TableCustom } from '../../../../component/table/table-custom/TableCustom';

type Props = {
  handleCloseDialogDSNguoiGioiThieu: () => void;
}

const ModalDSNguoiGioiThieu = ({ handleCloseDialogDSNguoiGioiThieu }: Props) => {
  const [openDialogNguoiGioiThieu, setOpenDialogNguoiGioiThieu] = useState(false);
  const [dsNguoiGioiThieu, setDSNguoiGioiThieu] = useState<INguoiGioiThieu[]>([]);
  const [nguoiGioiThieu, setNguoiGioiThieu] = useState<INguoiGioiThieu>();
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const handleSelectAction = (data: INguoiGioiThieu, method: string) => {
    setNguoiGioiThieu(data);
    switch (method) {
      case STATUS_ACTION.EDIT:
        setOpenDialogNguoiGioiThieu(true);
        break;

      case STATUS_ACTION.DELETE:
        setOpenDeleteDialog(true);
        break;

      default:
        break;
    }
  }

  const handleAddNguoiGioiThieu = (data: INguoiGioiThieu) => {
    setDSNguoiGioiThieu([...dsNguoiGioiThieu, data]);
  }

  const handleUpdateNguoiGioiThieu = (data: INguoiGioiThieu) => {
    const updateNguoiGioiThieu = dsNguoiGioiThieu?.map(item => item?.id === data?.id ? data : item);
    setDSNguoiGioiThieu(updateNguoiGioiThieu);
  }

  const handleOpenDialogNguoiGioiThieu = () => {
    setOpenDialogNguoiGioiThieu(true);
  }

  const handleCloseDialogNguoiGioiThieu = () => {
    setOpenDialogNguoiGioiThieu(false);
  }

  const handleDeleteBenhNhan = () => {
    setDSNguoiGioiThieu(dsNguoiGioiThieu?.filter(item => item?.id !== nguoiGioiThieu?.id));
    handleCloseDeleteDialog();
  }

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
  }

  const columns: ReadonlyArray<Column<INguoiGioiThieu>> = [
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"STT"}
          className=" text-center min-w-30px "
        />
      ),
      id: "STT",
      Cell: ({ ...props }) => (
        <TableCustomCell
          // data={String((page - 1) * rowsPerPage + props?.row?.index + 1)}
          data={String(props.row.index + 1)}
          className=" cell-first-child text-center ps-0"
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Thao tác"}
          className=" text-center min-w-100px "
        />
      ),
      id: "action",
      Cell: ({ ...props }) => (
        <TableCustomCell
          data={<ActionTable isEdit isDelete data={props.row.original} handleSelectAction={handleSelectAction} />}
          className=" cell-first-child text-center p-2"
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Mã"}
          className=" text-center min-w-75px "
        />
      ),
      id: "maNguoiGioiThieu",
      Cell: ({ ...props }) => (
        <TableCustomCell
          data={props.row.original?.maNguoiGioiThieu}
          className=" cell-first-child text-center p-2"
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Họ tên"}
          className=" text-center min-w-175px "
        />
      ),
      id: "hoTen",
      Cell: ({ ...props }) => (
        <TableCustomCell
          data={props.row.original?.tenNguoiGioiThieu}
          className='p-1'
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Khoa"}
          className=" text-center min-w-150px "
        />
      ),
      id: "khoa",
      Cell: ({ ...props }) => (
        <TableCustomCell
          data={props.row.original?.khoa?.name}
          className=" cell-first-child text-center p-1"
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Điện thoại"}
          className="text-center min-w-125px "
        />
      ),
      id: "dienThoai",
      Cell: ({ ...props }) => (
        <TableCustomCell
          data={props.row.original?.soDienThoai}
          className=" cell-first-child text-center p-1"
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Thông tin chuyển tiền"}
          className=" text-center min-w-225px "
        />
      ),
      id: "thongTinChuyeTien",
      Cell: ({ ...props }) => (
        <TableCustomCell
          data={props.row.original?.thongTinChuyenTien}
          className=" cell-first-child p-1"
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Nhóm người giới thiệu"}
          className=" text-center min-w-225px "
        />
      ),
      id: "nhomNguoiGioiThieu",
      Cell: ({ ...props }) => (
        <TableCustomCell
          data={props.row.original?.nhomHoaHong?.name}
          className=" cell-first-child text-center p-1"
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader
          tableProps={props}
          title={"Ghi chú"}
          className=" text-center min-w-100px "
        />
      ),
      id: "ghiChu",
      Cell: ({ ...props }) => (
        <TableCustomCell
          data={props.row.original?.ghiChu}
          className=" cell-first-child p-1"
        />
      ),
    },
  ]

  return (
    <>
      <Modal centered show={true} onHide={handleCloseDialogDSNguoiGioiThieu} fullscreen contentClassName="modal-xxl">
        <Modal.Header closeButton className='header-modal'>
          <Modal.Title className='text-pri'>Danh sách người giới thiệu</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Button className="mb-2 btn-fill" onClick={handleOpenDialogNguoiGioiThieu}>Thêm mới</Button>
          <TableCustom<INguoiGioiThieu> columns={columns} data={dsNguoiGioiThieu} />
        </Modal.Body>
      </Modal>

      {openDialogNguoiGioiThieu &&
        <NguoiGioiThieuDialog
          nguoiGioiThieu={nguoiGioiThieu}
          handleCloseDialogNguoiGioiThieu={handleCloseDialogNguoiGioiThieu}
          handleAddNguoiGioiThieu={handleAddNguoiGioiThieu}
          handleUpdateNguoiGioiThieu={handleUpdateNguoiGioiThieu}
        />
      }

      <ConfirmDialog
        show={openDeleteDialog}
        title={"Xác nhận xóa"}
        message={"Bạn có chắc chắn muốn xóa không?"}
        yes={"Xác nhận"}
        onCancelClick={handleCloseDeleteDialog}
        cancel={"Hủy"}
        onYesClick={handleDeleteBenhNhan}
      />
    </>
  )
}

export default ModalDSNguoiGioiThieu