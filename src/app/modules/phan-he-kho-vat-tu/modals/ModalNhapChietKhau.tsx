import React from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from 'react-bootstrap'
import TextValidator from '../../component/TextValidator';

type Props = {
  show: boolean;
  handleCloseDialog: () => void;
}

const ModalNhapChietKhau = ({show, handleCloseDialog}: Props) => {
  return (
    <Modal centered show={show} onHide={handleCloseDialog}>
      <ModalHeader closeButton>
        <ModalTitle>
          Cập nhật chết khấu
        </ModalTitle>
      </ModalHeader>

      <ModalBody>
          <div>Chiết khấu ≤ 100 sẽ tương đương với số % chiết khấu</div>
          <div>Chiết khấu &gt; 100 sẽ tương ứng với số tiền chiết khấu </div>
          <div>
            <TextValidator type="number" className="no-spinners text-center"/>
          </div>
      </ModalBody>

      <ModalFooter>
      <Button className='btn-fill'>
        Lưu
      </Button>
      </ModalFooter>
    </Modal>
  )
}

export default ModalNhapChietKhau