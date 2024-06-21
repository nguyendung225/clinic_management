import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { useState } from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import { KTSVG } from '../../../../../_metronic/helpers';
import CustomMenu from '../../../component/menu/Menu';
import { listMauMoTa } from '../../constants/ModalNhapThongTinPTTTConstants';
import ModalDanhSachMau from './ModalDanhSachMau';
import ModalPhieuIn from '../../../component/ModalPhieuIn';
import { stylePrint } from '../../../component/phieu-in/constant';
import PhieuPTTT from '../phieu-in/PhieuPTTT';

type Props = {
  show: boolean;
  handleCloseDialog: () => void;
}

const ModalMoTaChiTiet = ({ show, handleCloseDialog }: Props) => {
  const [noiDungMauKetQua, setNoiDungMauKetQua] = useState();
  const [openModalDanhSachMau, setOpenModalDanhSachMau] = useState(false);
  const [openPhieuPTTT, setOpenPhieuPTTT] = useState(false);

  const hanldeClickMauMoTa = () => {
    setOpenModalDanhSachMau(true)
  }

  const handleLuuIn = () => {
    setOpenPhieuPTTT(true);
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
          Nhập mô tả PTTT
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="p-0 spaces bg-white">
        <Row className='m-0 h-modal-mo-ta-chi-tiet'>
          <Col xs={3} className='d-flex flex-column justify-content-between px-0 border-end'>
            <div  className="d-flex mt-1 border-bottom ps-1">
              <div className="position-relative">
                <CustomMenu
                  handleSelectOption={() => { }}
                  listMenuItem={[]}
                  menuLabel={<KTSVG path="/media/icons/duotune/layouts/lay002.svg" svgClassName="spaces h-100 w-100" />} />
              </div>
              
              <div className="">
                <CustomMenu
                  className='W-150'
                  handleSelectOption={hanldeClickMauMoTa}
                  listMenuItem={listMauMoTa}
                  menuLabel={<div className="text-center">
                    <div><i className="fa-solid fa-tag text-info" style={{ fontSize: "30px" }}></i></div>
                    <div className="fs-5">Mẫu mô tả PTTT</div>
                  </div>}
                />
              </div>
            </div>

            <div className='d-flex ps-1 border-top pt-1'>
              <Button className='btn-fill me-2' onClick={handleLuuIn}>Lưu + In</Button>
              <Button className='btn-fill me-2'>In kết quả</Button>
              <Button className='btn-fill me-2'>Lưu</Button>
            </div>
          </Col>

          <Col
            xs={9}
            className="d-flex ckeditor-custom-mo-ta ps-0 pe-1"
          >
            <CKEditor
              editor={ClassicEditor}
              onChange={(event: any, editor: any) => {
                setNoiDungMauKetQua(editor.getData());
              }}
              data={noiDungMauKetQua ? noiDungMauKetQua : ""}
            />
          </Col>
        </Row>
      </Modal.Body>

      <ModalDanhSachMau show={openModalDanhSachMau} handleCloseDialog={() => setOpenModalDanhSachMau(false)}/>

      <ModalPhieuIn
        show={openPhieuPTTT}
        handleCloseDialog={() => setOpenPhieuPTTT(false)}
        title='Phiếu mô tả phẫu thuật thủ thuật'
        size='lg'
        stylePrint={stylePrint}
      >
        <PhieuPTTT />
      </ModalPhieuIn>
    </Modal>
  )
}

export default ModalMoTaChiTiet