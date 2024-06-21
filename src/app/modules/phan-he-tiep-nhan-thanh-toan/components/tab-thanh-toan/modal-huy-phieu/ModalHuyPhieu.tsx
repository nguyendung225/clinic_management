import { useState } from "react";
import { Button, Modal } from "react-bootstrap"
import ModalNhapLyDo from "./ModalNhapLyDo";

type Props = {
  show: boolean;
  handleCloseDialog: () => void;
  dichVuItems: any;
}

const ModalHuyPhieu = ({ show, handleCloseDialog, dichVuItems }: Props) => {
  const [openModalNhanLyDo, setOpenModalNhanLyDo] = useState(false);

  const handleOpenDialogNhapLyDo = () => {
    setOpenModalNhanLyDo(true);
  }

  return (
    <Modal centered show={show} onHide={handleCloseDialog}>
      <Modal.Header className="py-4" closeButton>
        <Modal.Title>
          Thông báo
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div>Phiếu "00001/19" có các dịch vụ sau đang thực hiện hoặc đã có kết quả:</div>
        {dichVuItems?.slice(0, 3)?.map((item: any, index: number) => {
          return <div>{index + 1}.{item?.tenDichVu}</div>
        })}
        <div>{dichVuItems?.length > 3 ? "..." : ""}</div>
        <div>Bạn có chắc chắn muốn hủy phiếu này không?</div>
      </Modal.Body>

      <Modal.Footer className="py-3">
        <Button className="btn-fill min-w-50px" onClick={handleOpenDialogNhapLyDo}>
          Có
        </Button>
        <Button className="btn-fill" onClick={handleCloseDialog}>
          Không
        </Button>
      </Modal.Footer>

      <ModalNhapLyDo show={openModalNhanLyDo} handleCloseDialog={() => setOpenModalNhanLyDo(false)}/>
    </Modal>
  )
}

export default ModalHuyPhieu