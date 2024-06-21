import { Button, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from 'react-bootstrap';
import LabelRequired from '../../../../component/LabelRequired';
import TextValidator from '../../../../component/TextValidator';
import { useState } from 'react';
import ModalChonKho from './ModalChonKho';

type Props = {
  show: boolean;
  handleCloseDialog: () => void;
}

const ModalThemDonViTinh = ({ show, handleCloseDialog }: Props) => {
  const [openModalChonKho, setOpenModalChonKho] = useState(false);

  const handleOpenModalChonKho = () => {
    setOpenModalChonKho(true);
  }
  return (
    <Modal centered show={show} onHide={handleCloseDialog}>
      <ModalHeader closeButton>
        <ModalTitle>
          Cập nhật đơn vị tính theo kho
        </ModalTitle>
      </ModalHeader>

      <ModalBody>
        <div className='mb-2'>
          <LabelRequired label='Đơn vị kho' />
          <TextValidator type="text" />
        </div>

        <div className='mb-2'>
          <LabelRequired label='Giá trị quy đổi: 1 đơn vị tính = [quy đổi] x 1 đơn vị kho' />
          <TextValidator type="number" className="text-end" />
        </div>

        <div>
          <div className='d-flex justify-content-between'>
            <LabelRequired label='Đơn vị kho' />
            <a href="/" onClick={(e) => { e.preventDefault(); handleOpenModalChonKho(); }}><u>Chọn kho</u></a>
          </div>
          <TextValidator type="text" as="textarea" rows={4} />
        </div>
      </ModalBody>

      <ModalFooter>
        <Button className='btn-fill'>Lưu</Button>
      </ModalFooter>

      <ModalChonKho show={openModalChonKho} handleCloseDialog={() => setOpenModalChonKho(false)} />
    </Modal>
  )
}

export default ModalThemDonViTinh