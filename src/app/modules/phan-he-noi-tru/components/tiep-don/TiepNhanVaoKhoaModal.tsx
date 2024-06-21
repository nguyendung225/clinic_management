import { Button, Modal, Row } from 'react-bootstrap';
import SearchBed from './SearchBed';
import { dsGiuongBenh } from '../../const/PhanHeNoitruConst';
import Giuong from './Giuong';

interface modalProps {
  handleCloseModal?: () => void;
  isOpenTiepNhanModal: boolean;
}

export const TiepNhanVaoKhoaModal = (props: modalProps) => {
  const { handleCloseModal, isOpenTiepNhanModal } = props;

  return (
    <Modal
      className='modal fade'
      role='dialog'
      show={isOpenTiepNhanModal}
      aria-hidden='true'
      size='xl'
      dialogClassName='modal-fullscreen-xl-down'
      centered
    >
      <Modal.Header closeButton onHide={handleCloseModal} className='p-3 header-modal'>
        <Modal.Title className='text-pri'>Tiếp nhận vào khoa</Modal.Title>
      </Modal.Header>
      <Modal.Body className='py-0'>
        <SearchBed />
        <Row className='danhsach__giuong p-4 form-border'>
          {dsGiuongBenh.map((giuong, index) => (
            <Giuong data={giuong} key={index} />
          ))}
        </Row>
      </Modal.Body>
      <Modal.Footer className='flex flex-center pt-3 pb-3'>
        <Button className='btn-navy mr-5 w-100px' onClick={handleCloseModal}>
          Đóng
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TiepNhanVaoKhoaModal;