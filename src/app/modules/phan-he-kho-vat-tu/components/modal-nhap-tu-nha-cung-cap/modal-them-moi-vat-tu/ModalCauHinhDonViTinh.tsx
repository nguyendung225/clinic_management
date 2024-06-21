import { useState } from 'react';
import { Button, Col, Modal, ModalBody, ModalHeader, ModalTitle, Row } from 'react-bootstrap';
import InputSearch from '../../../../component/InputSearch';
import CustomMenu from '../../../../component/menu/Menu';
import { TableCustom } from '../../../../component/table/table-custom/TableCustom';
import { donViColumn } from '../modal-danh-sach-vat-tu/ColumnDsVatTu';
import ModalThemDonViTinh from './ModalThemDonViTinh';

type Props = {
  show: boolean;
  handleCloseDialog: () => void;
}

const ModalCauHinhDonViTinh = ({ show, handleCloseDialog }: Props) => {
  const [openModalThemDonViTinh, setOpenModalThemDonViTinh] = useState(false);

  const handleOpenModalCauHinhDonViTinh = () => {
    setOpenModalThemDonViTinh(true);
  }
  return (
    <Modal centered show={show} onHide={handleCloseDialog} size='lg'>
      <ModalHeader closeButton>
        <ModalTitle>
          Cập nhật đơn vị tính theo kho
        </ModalTitle>
      </ModalHeader>

      <ModalBody>
        <Row className='mb-2'>
          <Col className='d-flex align-items-center'>
            <CustomMenu
              handleSelectOption={() => { }}
              listMenuItem={[]}
              menuLabel={
                <Button className="btn-outline spaces h-29 d-flex justify-content-center min-w-40px">
                  <i className="bi bi-list spaces scale-15 m-0 p-0"></i>
                </Button>
              }
            />

            <Button className='btn-fill' onClick={handleOpenModalCauHinhDonViTinh}>Thêm</Button>
          </Col>
        </Row>

        <div>
          <InputSearch handleChange={() => { }} />
          <TableCustom columns={donViColumn} data={[]} />
        </div>
      </ModalBody>

      <ModalThemDonViTinh show={openModalThemDonViTinh} handleCloseDialog={() => setOpenModalThemDonViTinh(false)} />
    </Modal>
  )
}

export default ModalCauHinhDonViTinh