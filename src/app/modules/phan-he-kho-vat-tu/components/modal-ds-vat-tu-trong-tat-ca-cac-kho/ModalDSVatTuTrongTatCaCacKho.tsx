import { useState } from 'react';
import { Button, Col, FormCheck, Modal, Row } from 'react-bootstrap';
import SelectTree from '../../../component/SelectTree';
import CustomMenu from '../../../component/menu/Menu';
import { treeDSVatTuTrongTatCaCacKho } from '../../const/constants';
import TableDSVatTuTrongTatCaCacKho from './TableDSVatTuTrongTatCaCacKho';

type Props = {
  show: boolean;
  handleCloseDialog: () => void;
}

const ModalDSVatTuTrongTatCaCacKho = ({ show, handleCloseDialog }: Props) => {
  const [codeCollapses, setCodeCollapses] = useState<string[]>([]);
  const [idSelected, setIdSelected] = useState<string>("");
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
          Danh sách thuốc, vật tư trong tất cả các kho
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="p-0 spaces bg-white overflow-hidden">
        <Row className='border-bottom'>
          <Col className='d-flex align-items-center'>
            <CustomMenu
              className='ms-1'
              handleSelectOption={() => { }}
              listMenuItem={[]}
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
                <Button className='btn-fill min-w-50px'>In</Button>
              }
            />

            <div className='me-5'>
              <FormCheck type='checkbox' label="Hiển thị lô đã hết" />
              <FormCheck type='checkbox' label="Hiển thị cảnh báo tồn kho = 0" />
            </div>

            <div className='me-5'>
              <FormCheck type='checkbox' label="Hiển thị tổng hợp" />
              <FormCheck type='checkbox' label="Hiển thị tổng hợp khi cùng giá, số lô, HSD, SĐK" />
            </div>

            <div className='me-5'>
              <FormCheck type='checkbox' label="Thuốc" />
              <FormCheck type='checkbox' label="Vật tư" />
            </div>

            <div>
              <FormCheck type='checkbox' label="Tủ trực" />
              <FormCheck type='checkbox' label="Kho" />
            </div>
          </Col>
        </Row>

        <Row className='px-1'>
          <Col xs={3} className='pe-0'>
            <SelectTree
              className="w-100 border border-top-0 h-tree-ds-vat-tu-trong-tat-ca-cac-kho"
              codeCollapses={codeCollapses}
              handleChangeCollapsesCode={setCodeCollapses}
              idSelected={idSelected}
              handleChangeSelectId={setIdSelected}
              selectTree={treeDSVatTuTrongTatCaCacKho}
            />
          </Col>

          <Col xs={9} className='ps-0'>
            <TableDSVatTuTrongTatCaCacKho />
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  )
}

export default ModalDSVatTuTrongTatCaCacKho