import { Button, Col, FormCheck, Modal, Row } from 'react-bootstrap';
import CustomMenu from '../../../component/menu/Menu';
import { baoCaoMenu, listMenuDSVatTuTrongKho, treeDSVatTuTrongKho } from '../../const/constants';
import SelectTree from '../../../component/SelectTree';
import { TreeDichVu } from '../../../phan-he-chuyen-khoa/constants/PhanHeChuyenKhoaConstants';
import TableThanhToan from '../../../phan-he-chuyen-khoa/components/modal-thanh-toan/TableThanhToan';
import { useState } from 'react';
import Autocomplete from '../../../component/AutocompleteObject';
import TableDSVatTuTrongKho from './TableDSVatTuTrongKho';
import ModalTheKho from './modal-the-kho/ModalTheKho';

type Props = {
  show: boolean;
  handleCloseDialog: () => void;
}

const ModalDSVatTuTrongKho = ({ show, handleCloseDialog }: Props) => {
  const [codeCollapses, setCodeCollapses] = useState<string[]>([]);
  const [idSelected, setIdSelected] = useState<string>("");
  const [openModalTheKho, setOpenModalTheKho] = useState(false);

  const handleOpenModalTheKho = () => {
    setOpenModalTheKho(true);
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
          Danh sách thuốc, vật tư trong kho
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="p-0 spaces bg-white overflow-hidden">
        <Row className='border-bottom'>
          <Col xs={9} className='d-flex align-items-center'>
            <CustomMenu
              className='ms-1'
              handleSelectOption={() => { }}
              listMenuItem={listMenuDSVatTuTrongKho}
              menuLabel={
                <Button className="btn-outline spaces h-29 d-flex justify-content-center min-w-40px">
                  <i className="bi bi-list spaces scale-15 m-0 p-0"></i>
                </Button>
              }
            />

            <Button className='btn-fill h-29 min-w-70px me-2' onClick={handleOpenModalTheKho}>Thẻ kho</Button>

            <div className='me-5'>
              <FormCheck type='checkbox' label="Hiển thị lô đã hết" />
              <FormCheck type='checkbox' label="Hiển thị cảnh báo tồn kho = 0" />
            </div>

            <div>
              <FormCheck type='checkbox' label="Hiển thị tổng hợp" />
              <FormCheck type='checkbox' label="Hiển thị tổng hợp khi cùng giá, số lô, HSD, SĐK" />
            </div>
          </Col>

          <Col xs={3} className='d-flex align-items-center justify-content-end text-uppercase text-danger fw-bold'>
            <div className='pe-1'>Danh sách vật tư trong kho</div>
          </Col>
        </Row>

        <Row className='px-1'>
          <Col xs={3} className='pe-0'>
            <Autocomplete options={[]} className='spaces h-25 autocomplete-custom-tiep-nhan' />
            <SelectTree
              className="w-100 border border-top-0 h-tree-ds-vat-tu-trong-kho"
              codeCollapses={codeCollapses}
              handleChangeCollapsesCode={setCodeCollapses}
              idSelected={idSelected}
              handleChangeSelectId={setIdSelected}
              selectTree={treeDSVatTuTrongKho}
            />
          </Col>

          <Col xs={9} className='ps-0'>
            <TableDSVatTuTrongKho />
          </Col>
        </Row>
      </Modal.Body>

      <ModalTheKho show={openModalTheKho} handleCloseDialog={() => setOpenModalTheKho(false)}/>
    </Modal>
  )
}

export default ModalDSVatTuTrongKho