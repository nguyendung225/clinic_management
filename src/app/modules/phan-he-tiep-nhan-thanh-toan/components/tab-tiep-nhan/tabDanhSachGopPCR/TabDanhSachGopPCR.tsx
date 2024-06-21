import { useState } from 'react'
import ThongTinBenhNhan from './ThongTinBenhNhan'
import DanhSachBenhNhan from './DanhSachBenhNhan'
import { Col } from 'react-bootstrap'
import { IBenhNhan } from '../../../models/PhanHeTiepNhanModel'
import { ConfirmDialog } from '../../../../component/ConfirmDialog'

type Props = {}

const TabDanhSachGopPCR = (props: Props) => {
  const [danhSachBenhNhan, setDanhSachBenhNhan] = useState<IBenhNhan[]>([]);
  const [benhNhan, setBenhNhan] = useState<IBenhNhan[]>([]);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const handleSelectAction = () => {
    setOpenDeleteDialog(true);
  };

  const handleUpdateBenhNhan = (data: IBenhNhan) => {
    const updatedList = danhSachBenhNhan?.map(item =>
      item?.id === data?.id ? data : item
    );
    setDanhSachBenhNhan(updatedList);
  };

  const handleDeleteBenhNhan = () => {
    setDanhSachBenhNhan(danhSachBenhNhan?.filter(item => item?.id !== benhNhan[0]?.id));
    setBenhNhan([])
    handleCloseDeleteDialog();
  }

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
  }

  const handleAddBenhNhan = (benhNhan: IBenhNhan) => {
    setDanhSachBenhNhan([...danhSachBenhNhan, benhNhan])
  }

  return (
    <div className="tableKhamBenh border d-flex">
      <Col xs={4}>
        <ThongTinBenhNhan
          benhNhan={benhNhan[0]}
          handleAddBenhNhan={handleAddBenhNhan}
          handleUpdateBenhNhan={handleUpdateBenhNhan}
        />
      </Col>

      <Col xs={8}>
        <DanhSachBenhNhan
          danhSachBenhNhan={danhSachBenhNhan}
          setBenhNhan={setBenhNhan}
          handleSelectAction={handleSelectAction}
        />
      </Col>

      <ConfirmDialog
        show={openDeleteDialog}
        title={"Xác nhận xóa"}
        message={"Bạn có chắc chắn muốn xóa không?"}
        yes={"Xác nhận"}
        onCancelClick={handleCloseDeleteDialog}
        cancel={"Hủy"}
        onYesClick={handleDeleteBenhNhan}
      />
    </div>
  )
}

export default TabDanhSachGopPCR