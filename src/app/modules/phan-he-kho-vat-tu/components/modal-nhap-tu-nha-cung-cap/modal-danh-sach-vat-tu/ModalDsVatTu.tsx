import { useState } from 'react';
import { Button, Col, FormCheck, Modal, Row } from 'react-bootstrap';
import SelectTree from '../../../../component/SelectTree';
import CustomMenu from '../../../../component/menu/Menu';
import { IItemMenu } from '../../../../phan-he-tiep-nhan-thanh-toan/models/ThanhToanModel';
import { CODE_LIST_CONTEXT_VAT_TU, listMenuDSVatTu, treeDSVatTu } from '../../../const/constants';
import TableDsVatTu from './TableDsVatTu';
import ModalThemMoiVatTu from '../modal-them-moi-vat-tu/ModalThemMoiVatTu';

type Props = {
  show: boolean;
  handleCloseDialog: () => void;
}

const ModalDsVatTu = ({ show, handleCloseDialog }: Props) => {
  const [codeCollapses, setCodeCollapses] = useState<string[]>([]);
  const [idSelected, setIdSelected] = useState<string>("");
  const [openModalThemMoiVatTu, setOpenModalThemMoiVatTu] = useState(false);

  const handleSelectOptionMenu = (value: IItemMenu) => {
    const options = {
      [CODE_LIST_CONTEXT_VAT_TU.THEM_MOI_VAT_TU]: () => setOpenModalThemMoiVatTu(true),
    }

    options[value?.code]();
  }

  return (
    <Modal
      className="modal-thuoc page-full"
      fullscreen
      show={show}
      animation={false}
      centered
      backdropClassName="spaces top-50"
      onHide={handleCloseDialog}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          Danh sách vật tư y tế
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="p-0 spaces bg-white overflow-hidden">
        <Row className='border-bottom py-1'>
          <Col className='d-flex align-items-center'>
            <CustomMenu
              className='ms-1'
              handleSelectOption={handleSelectOptionMenu}
              listMenuItem={listMenuDSVatTu}
              menuLabel={
                <Button className="btn-outline spaces h-29 d-flex justify-content-center min-w-40px">
                  <i className="bi bi-list spaces scale-15 m-0 p-0"></i>
                </Button>
              }
            />

            <CustomMenu
              className='h-29 me-2'
              handleSelectOption={() => { }}
              listMenuItem={[]}
              menuLabel={
                <Button className='btn-fill'>Thêm</Button>
              }
            />

            <CustomMenu
              className='h-29 min-w-200px'
              handleSelectOption={() => { }}
              listMenuItem={[]}
              menuLabel={
                <Button className='btn-fill'>Ánh xạ danh mục phê duyệt</Button>
              }
            />

            <FormCheck type="checkbox" label="Hiển thị tổng hợp" />
          </Col>
        </Row>

        <Row className='px-1'>
          <Col xs={3} className='pe-0'>
            <SelectTree
              className="w-100 border border-top-0 h-tree-ds-vat-tu"
              codeCollapses={codeCollapses}
              handleChangeCollapsesCode={setCodeCollapses}
              idSelected={idSelected}
              handleChangeSelectId={setIdSelected}
              selectTree={treeDSVatTu}
            />
          </Col>

          <Col xs={9} className='ps-0'>
            <TableDsVatTu />
          </Col>
        </Row>
      </Modal.Body>
      
      <ModalThemMoiVatTu show={openModalThemMoiVatTu} handleCloseDialog={() => setOpenModalThemMoiVatTu(false)} />
    </Modal>
  )
}

export default ModalDsVatTu