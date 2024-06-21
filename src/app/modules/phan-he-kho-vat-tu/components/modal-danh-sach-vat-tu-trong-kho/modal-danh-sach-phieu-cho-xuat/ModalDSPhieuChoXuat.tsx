import { useState } from 'react';
import { Button, Col, FormCheck, Modal, Row } from 'react-bootstrap';
import LabelRequired from '../../../../component/LabelRequired';
import SelectTree from '../../../../component/SelectTree';
import TextValidator from '../../../../component/TextValidator';
import CustomMenu from '../../../../component/menu/Menu';
import ModalTuyChonBaoCao from '../../../../phan-he-tiep-nhan-thanh-toan/components/tab-thanh-toan/modal-tuy-chon-bao-cao/ModalTuyChonBaoCao';
import { IItemMenu } from '../../../../phan-he-tiep-nhan-thanh-toan/models/ThanhToanModel';
import { CODE_LIST_CONTEXT_VAT_TU, baoCaoLichSuNhapXuatMenu, treeLichSuNhapXuat } from '../../../const/constants';
import TableLichSuNhapXuat from '../modal-lich-su-nhap-xuat/TableLichSuNhapXuat';
import TableDsPhieuChoXuat from './TableDsPhieuChoXuat';

type Props = {
  show: boolean;
  handleCloseDialog: () => void;
}

const ModalDSPhieuChoXuat = ({ show, handleCloseDialog }: Props) => {
  const [codeCollapses, setCodeCollapses] = useState<string[]>([]);
  const [idSelected, setIdSelected] = useState<string>("");
  const [openModalTheKho, setOpenModalTheKho] = useState(false);

  const handleSelectOption = (value: IItemMenu) => {
    const options = {
      [CODE_LIST_CONTEXT_VAT_TU.THE_KHO]: () => setOpenModalTheKho(true),
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
          Danh sách phiếu chờ xuất
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="p-0 spaces bg-white overflow-hidden">
        <Row className='border-bottom py-1'>
          <Col xs={3} className='d-flex align-items-center'>
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
              className='h-29 min-w-70px me-2'
              handleSelectOption={handleSelectOption}
              listMenuItem={baoCaoLichSuNhapXuatMenu}
              menuLabel={
                <Button className='btn-fill'>Báo cáo</Button>
              }
            />
          </Col>

          <Col xs={9} className='d-flex justify-content-end align-items-center gap-4'>
            <div className='d-flex'>
              <LabelRequired label='Từ ngày' className='min-w-60px' />
              <TextValidator type="datetime-local" />
            </div>

            <div className='d-flex'>
              <LabelRequired label='Đến ngày' className='min-w-60px' />
              <TextValidator type="datetime-local" />
            </div>

            <Button className='btn-fill me-1'>Tìm kiếm</Button>
          </Col>
        </Row>

        <div className='px-1'>
          <Row>
            <Col xs={3} className='pe-0'>
              <SelectTree
                className="w-100 border border-top-0 h-tree-lich-su-nhap-xuat"
                codeCollapses={codeCollapses}
                handleChangeCollapsesCode={setCodeCollapses}
                idSelected={idSelected}
                handleChangeSelectId={setIdSelected}
                selectTree={treeLichSuNhapXuat}
              />
            </Col>

            <Col xs={9} className='ps-0'>
              <TableDsPhieuChoXuat />
            </Col>
          </Row>
        </div>
      </Modal.Body>

      <ModalTuyChonBaoCao show={openModalTheKho} handleCloseDialog={() => setOpenModalTheKho(false)} loaiPhieu={CODE_LIST_CONTEXT_VAT_TU.THE_KHO} />
    </Modal>
  )
}

export default ModalDSPhieuChoXuat