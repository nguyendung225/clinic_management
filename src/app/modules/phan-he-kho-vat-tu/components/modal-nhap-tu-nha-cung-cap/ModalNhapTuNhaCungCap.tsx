import { useState } from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import Autocomplete from '../../../component/AutocompleteObject';
import LabelRequired from '../../../component/LabelRequired';
import TextValidator from '../../../component/TextValidator';
import CustomMenu from '../../../component/menu/Menu';
import { TableCustom } from '../../../component/table/table-custom/TableCustom';
import { IItemMenu } from '../../../phan-he-tiep-nhan-thanh-toan/models/ThanhToanModel';
import { dataDsVatTu } from '../../const/FakeData';
import { DsPhieuColumn, DsVatTuColumn } from '../../const/columns';
import { CODE_LIST_CONTEXT_VAT_TU, listMenuNhapTuNhacungCap } from '../../const/constants';
import ModalDsVatTu from './modal-danh-sach-vat-tu/ModalDsVatTu';

type Props = {
  show: boolean;
  handleCloseDialog: () => void;
}

const ModalNhapTuNhaCungCap = ({ show, handleCloseDialog }: Props) => {
  const [openModalDsVatTu, setOpenModalDsVatTu] = useState(false);

  const handleSelectOptionMenu = (value: IItemMenu) => {
    const options = {
      [CODE_LIST_CONTEXT_VAT_TU.DANH_SACH_VAT_TU]: () => setOpenModalDsVatTu(true),
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
          Nhập từ nhà cung cấp
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="p-0 spaces bg-white overflow-hidden">
        <Row className='border-bottom'>
          <Col className='py-1'>
            <CustomMenu
              className='ms-1'
              handleSelectOption={handleSelectOptionMenu}
              listMenuItem={listMenuNhapTuNhacungCap}
              menuLabel={
                <Button className="btn-outline spaces h-29 d-flex justify-content-center min-w-40px">
                  <i className="bi bi-list spaces scale-15 m-0 p-0"></i>
                </Button>
              }
            />
          </Col>
        </Row>

        <div className='p-1'>
          <Row className='mb-1'>
            <Col xs={4} className='d-flex align-items-center'>
              <LabelRequired label='Kho vật tư' className='min-w-80px' />
              <Autocomplete options={[]} className='spaces h-25 w-100 autocomplete-custom-tiep-nhan' />
            </Col>

            <Col xs={4} className='d-flex align-items-center ps-0'>
              <div className='d-flex w-100'>
                <LabelRequired label='Ngày lập' className="min-w-80px" />
                <TextValidator type="date" className="w-input-116" />
              </div>

              <div className='d-flex ms-3 w-100'>
                <LabelRequired label='Ngày hợp đồng' className="min-w-100px" />
                <TextValidator type="date" className="w-input-116" />
              </div>
            </Col>

            <Col xs={4} className='d-flex align-items-center ps-0'>
              <div className='d-flex w-100'>
                <LabelRequired label='Số HĐ-3' className="min-w-80px" />
                <TextValidator type="text" />
              </div>

              <div className='d-flex ms-2 w-100'>
                <LabelRequired label='Mã phiếu' className="min-w-80px" />
                <TextValidator type="text" />
              </div>
            </Col>
          </Row>

          <Row className='mb-1'>
            <Col xs={4} className='d-flex align-items-center'>
              <LabelRequired label='Tên NCC' className='min-w-80px' />
              <Autocomplete options={[]} className='spaces h-25 w-100 autocomplete-custom-tiep-nhan' />
            </Col>

            <Col xs={4} className='d-flex align-items-center ps-0'>
              <LabelRequired label='QĐ thầu' className='min-w-80px' />
              <Autocomplete options={[]} className='spaces h-25 w-100 autocomplete-custom-tiep-nhan' />
            </Col>

            <Col xs={4} className='d-flex align-items-center ps-0'>
              <LabelRequired label='Địa chỉ' className="min-w-80px" />
              <TextValidator type="text" />
            </Col>
          </Row>

          <Row className='mb-1'>
            <Col xs={4} className='d-flex align-items-center'>
              <div className='d-flex w-100'>
                <LabelRequired label='Mã số thuế' className="min-w-80px" />
                <TextValidator type="text" className="spaces min-w-128" />
              </div>

              <div className='d-flex ms-3 w-100'>
                <LabelRequired label='Nội dung' className="min-w-65px" />
                <TextValidator type="text" />
              </div>
            </Col>

            <Col xs={4} className='d-flex align-items-center ps-0'>
              <LabelRequired label='Người lập' className="min-w-80px" />
              <TextValidator type="text" />
            </Col>

            <Col xs={4} className='d-flex align-items-center ps-0'>
              <LabelRequired label='Người giao' className="min-w-80px" />
              <TextValidator type="text" />
            </Col>
          </Row>

          <Row className='mb-1'>
            <Col xs={4} className='d-flex align-items-center'>
              <LabelRequired label='Người nhận' className="min-w-80px" />
              <TextValidator type="text" />
            </Col>

            <Col xs={4} className='d-flex align-items-center ps-0'>
              <LabelRequired label='Hợp đồng' className="min-w-80px" />
              <TextValidator type="text" />
            </Col>

            <Col xs={4} className='d-flex align-items-center ps-0'>
              <div className='d-flex w-100'>
                <LabelRequired label='Ngày HĐ' className="min-w-80px" />
                <TextValidator type="date" className="w-input-127" />
              </div>

              <div className='d-flex ms-2 w-100'>
                <LabelRequired label='Số seri' className="min-w-80px" />
                <TextValidator type="text" />
              </div>
            </Col>
          </Row>

          <Row className='mb-1'>
            <Col xs={4} className='d-flex align-items-center'>
              <LabelRequired label='Tên vật tư' className="min-w-80px" />
              <TextValidator type="text" />
            </Col>

            <Col xs={4} className='d-flex align-items-center ps-0'>
              <LabelRequired label='Mã vật tư' className="min-w-80px" />
              <TextValidator type="text" />
            </Col>

            <Col xs={4} className='d-flex align-items-center ps-0'>
              <div className='d-flex w-100'>
                <LabelRequired label='Nồng độ' className="min-w-80px" />
                <TextValidator type="text" />
              </div>

              <div className='d-flex ms-2 w-100'>
                <LabelRequired label='Hàm lượng' className="min-w-80px" />
                <TextValidator type="text" />
              </div>
            </Col>
          </Row>

          <Row className='mb-1'>
            <Col xs={4} className='d-flex align-items-center'>
              <LabelRequired label='Nước XS' className="min-w-80px" />
              <TextValidator type="text" />
            </Col>

            <Col xs={4} className='d-flex align-items-center ps-0'>
              <LabelRequired label='Hãng SX' className="min-w-80px" />
              <TextValidator type="text" />
            </Col>

            <Col xs={4} className='d-flex align-items-center ps-0'>
              <div className='d-flex w-100'>
                <LabelRequired label='Phòng lưu' className="min-w-80px" />
                <Autocomplete options={[]} className='spaces h-25 autocomplete-custom-tiep-nhan spaces min-w-127 w-100' />
              </div>

              <div className='d-flex ms-2 w-100'>
                <LabelRequired label='Nguồn' className="min-w-80px" />
                <Autocomplete options={[]} className='spaces h-25 autocomplete-custom-tiep-nhan spaces min-w-127 w-100' />
              </div>
            </Col>
          </Row>

          <Row className='mb-1'>
            <Col xs={4} className='d-flex align-items-center'>
              <div className='d-flex w-100'>
                <LabelRequired label='ĐV nhập' className="min-w-80px" />
                <Autocomplete options={[]} className='spaces h-25 autocomplete-custom-tiep-nhan spaces min-w-128 w-100' />
              </div>

              <div className='d-flex ms-2 w-100'>
                <LabelRequired label='SL nhập' className="min-w-65px" />
                <Autocomplete options={[]} className='spaces h-25 autocomplete-custom-tiep-nhan spaces min-w-132 w-100' />
              </div>
            </Col>

            <Col xs={4} className='d-flex align-items-center ps-0'>
              <div className='d-flex w-100'>
                <LabelRequired label='Số lượng' className="min-w-80px" />
                <TextValidator type="text" className="spaces min-w-116" />
              </div>

              <div className='d-flex ms-2 w-100'>
                <LabelRequired label='Đơn vị tính' className="min-w-100px" />
                <TextValidator type="text" />
              </div>
            </Col>

            <Col xs={4} className='d-flex align-items-center ps-0'>
              <div className='d-flex w-100'>
                <LabelRequired label='Cơ số nhập' className="min-w-80px" />
                <TextValidator type="text" />
              </div>

              <div className='d-flex ms-2 w-100'>
                <LabelRequired label='Giá thầu' className="min-w-80px" />
                <TextValidator type="text" />
              </div>
            </Col>
          </Row>

          <Row className='mb-1'>
            <Col xs={4} className='d-flex align-items-center'>
              <div className='d-flex w-100'>
                <LabelRequired label='Giá nhập' className="min-w-80px" />
                <TextValidator type="text" className="spaces min-w-128" />
              </div>
              <div className='d-flex ms-2 w-100'>
                <LabelRequired label='% VAT' className="min-w-65px" />
                <TextValidator type="text" />
              </div>
            </Col>

            <Col xs={4} className='d-flex align-items-center ps-0'>
              <div className='d-flex w-100'>
                <LabelRequired label='Giá có VAT' className="min-w-80px" />
                <TextValidator type="text" />
              </div>

              <div className='d-flex ms-2 w-100'>
                <LabelRequired label='Thành tiền' className="min-w-100px" />
                <TextValidator type="text" />
              </div>
            </Col>

            <Col xs={4} className='d-flex align-items-center ps-0'>
              <div className='d-flex w-100'>
                <LabelRequired label='QĐ thầu' className="min-w-80px" />
                <TextValidator type="text" />
              </div>

              <div className='d-flex ms-2 w-100'>
                <LabelRequired label='Gói thầu' className="min-w-80px" />
                <TextValidator type="text" />
              </div>
            </Col>
          </Row>

          <Row className='mb-1'>
            <Col xs={4} className='d-flex align-items-center'>
              <div className='d-flex w-100'>
                <LabelRequired label='Nhóm thầu' className="min-w-80px" />
                <TextValidator type="text" className="spaces min-w-128" />
              </div>
              <div className='d-flex ms-2 w-100'>
                <LabelRequired label='Năm thầu' className="min-w-65px" />
                <TextValidator type="text" />
              </div>
            </Col>

            <Col xs={4} className='d-flex align-items-center ps-0'>
              <LabelRequired label='Ghi chú' className="min-w-80px" />
              <TextValidator type="text" />
            </Col>

            <Col xs={4} className='d-flex align-items-center ps-0'>
              <div className='d-flex w-100'>
                <LabelRequired label='Số ĐK' className="min-w-80px" />
                <TextValidator type="text" />
              </div>

              <div className='d-flex ms-2 w-100'>
                <LabelRequired label='Số lô' className="min-w-80px" />
                <TextValidator type="text" />
              </div>
            </Col>
          </Row>

          <Row className='mb-1'>
            <Col xs={4} className='d-flex align-items-center'>
              <div className='d-flex w-100'>
                <LabelRequired label='Hạn SD' className="min-w-80px" />
                <TextValidator type="date" className="w-input-128" />
              </div>
              <div className='d-flex ms-2 w-100'>
                <LabelRequired label="Giá bán" className="min-w-65px" />
                <TextValidator type="text" />
              </div>
            </Col>

            <Col xs={4} className='d-flex align-items-center ps-0'>
              <div className='d-flex w-100'>
                <LabelRequired label='Giá BHYT' className="min-w-80px" />
                <TextValidator type="text" />
              </div>

              <div className='d-flex ms-2 w-100'>
                <LabelRequired label='Giá VP' className="min-w-100px" />
                <TextValidator type="text" />
              </div>
            </Col>

            <Col xs={4} className='d-flex align-items-center ps-0'>
              <div className='d-flex w-100'>
                <LabelRequired label='Giá DV' className="min-w-80px" />
                <TextValidator type="text" />
              </div>

              <div className='d-flex ms-2 w-100'>
                <LabelRequired label='Giá NNN' className="min-w-80px" />
                <TextValidator type="text" />
              </div>
            </Col>
          </Row>

          <Row className='border-top h-table-nhap-vat-tu'>
            <Col xs={9} className='pe-0'>
              <TableCustom className='h-100' columns={DsVatTuColumn} data={dataDsVatTu} />
            </Col>

            <Col xs={3} className='ps-0 border'>
              <div className='border-bottom text-center'>Thanh toán hóa đơn</div>

              <div className='p-1'>
                <div className='mb-1'>
                  <LabelRequired label='Số phiếu:' />
                </div>

                <div className='d-flex mb-1'>
                  <LabelRequired label='Loại phiếu:' className="min-w-80px" />
                  <Autocomplete options={[]} className='spaces h-25 autocomplete-custom-tiep-nhan w-100' />
                </div>

                <div className='d-flex mb-1'>
                  <LabelRequired label='Số tiền:' className="min-w-80px" />
                  <TextValidator type="number" className="no-spinners" />
                </div>

                <div className='d-flex mb-1'>
                  <LabelRequired label='Ghi chú:' className="min-w-80px" />
                  <TextValidator type="text" as="textarea" rows={1} />
                </div>

                <div className='d-flex justify-content-around mb-1'>
                  <Button className='btn-fill'>Thêm</Button>
                  <Button className='btn-fill'>Lưu</Button>
                  <Button className='btn-fill'>Hủy</Button>
                  <Button className='btn-fill'>Hủy Phiếu</Button>
                </div>

                <div>
                  <TableCustom className='h-100' columns={DsPhieuColumn} data={[]} />
                </div>
              </div>
            </Col>
          </Row>

          <div className='d-flex justify-content-between align-items-center py-1 bg-light'>
            <div className='d-flex'>
              <div className='d-flex justify-content-between min-w-250px me-2'>
                <div>Tổng hóa đơn:</div>
                <div className='fw-bold'>0 đ</div>
              </div>

              <div className='d-flex justify-content-between min-w-250px me-2'>
                <div>Đã thanh toán:</div>
                <div className='fw-bold text-info'>0 đ</div>
              </div>

              <div className='d-flex justify-content-between min-w-250px'>
                <div>Còn nợ:</div>
                <div className='fw-bold text-danger'>0 đ</div>
              </div>
            </div>

            <div className='d-flex'>
              <Button className='btn-fill me-2'>Lưu tạm</Button>
              <Button className='btn-fill'>Nhập kho</Button>
            </div>
          </div>
        </div>
      </Modal.Body>

      <ModalDsVatTu show={openModalDsVatTu} handleCloseDialog={() => setOpenModalDsVatTu(false)} />
    </Modal>
  )
}

export default ModalNhapTuNhaCungCap