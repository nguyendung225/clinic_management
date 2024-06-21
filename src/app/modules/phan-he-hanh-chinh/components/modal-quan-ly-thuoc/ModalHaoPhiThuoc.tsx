import { Button, Col, Modal, Row } from 'react-bootstrap';
import CustomMenu from '../../../component/menu/Menu';
import LabelRequired from '../../../component/LabelRequired';
import Autocomplete from '../../../component/AutocompleteObject';
import TextValidator from '../../../component/TextValidator';
import { TableCustom } from '../../../component/table/table-custom/TableCustom';
import { MauColumn, ThuocColumn, vatTuColumn } from '../../columns/ColumnQuanLyThuoc';
import { CODE_MENU_HANH_CHINH } from '../../constants/ConstantMenu';
import { CONSTANTS_HANH_CHINH } from '../../constants/ConstantPhanHeHanhChinh';

type Props = {
  show: boolean;
  handleCloseDialog: () => void;
  loaiTraHaoPhiThuoc: string;
  loaiQuanLy: string;
}

const ModalHaoPhiThuoc = ({ show, handleCloseDialog, loaiTraHaoPhiThuoc, loaiQuanLy }: Props) => {

  const renderType = loaiTraHaoPhiThuoc === CODE_MENU_HANH_CHINH.LINH_HAO_PHI_THUOC ? "lĩnh" : "trả"
  const renderLoaiQuanLy = (loaiQuanLy: string) => {
    const options = {
      [CONSTANTS_HANH_CHINH.THUOC]: { title: "thuốc", name: "Thuoc", column: ThuocColumn },
      [CONSTANTS_HANH_CHINH.VAT_TU]: { title: "vật tư", name: "VatTu", column: vatTuColumn },
      [CONSTANTS_HANH_CHINH.MAU]: { title: "máu", name: "Mau", column: MauColumn },
    }
    return options[loaiQuanLy]
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
          {renderType} hao phí khoa phòng
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
          </Col>

          <Col className='d-flex align-items-center justify-content-end'>
            <div className='pe-2 fw-bold text-danger text-uppercase'>{renderType} HAO PHÍ {renderLoaiQuanLy(loaiQuanLy)?.title} CHO KHOA PHÒNG</div>
          </Col>
        </Row>

        <div className='border-bottom p-1'>
          <Row className="mb-1">
            <Col xs={4} className='d-flex'>
              <LabelRequired label='Khoa' className='min-w-90px' />
              <Autocomplete options={[]} />
            </Col>

            <Col xs={6} className='d-flex ps-0'>
              <div className='d-flex w-60'>
                <LabelRequired label='Ngày lập' className='min-w-95px' />
                <TextValidator type="datetime-local" />
              </div>

              <div className='d-flex w-100 ps-2'>
                <LabelRequired label='Người lập' className='min-w-70px' />
                <TextValidator type="text" />
              </div>
            </Col>
          </Row>

          <Row>
            <Col xs={4} className='d-flex'>
              <LabelRequired label='Kho nội trú' className='min-w-90px' />
              <Autocomplete options={[]} />
            </Col>

            <Col xs={6} className='d-flex ps-0'>
              <LabelRequired label='Nội dung' className='min-w-95px' />
              <TextValidator type="text" />
            </Col>
          </Row>
        </div>

        <div className='border-bottom p-1'>
          <Row className="mb-1">
            <Col xs={4} className='d-flex'>
              <LabelRequired label={`Tên ${renderLoaiQuanLy(loaiQuanLy)?.title}`} className='min-w-90px' />
              <Autocomplete options={[]} name={`ten${renderLoaiQuanLy(loaiQuanLy)?.name}`} />
            </Col>

            <Col xs={6} className='d-flex ps-0'>
              <div className='d-flex w-100'>
                <LabelRequired label={`Mã ${renderLoaiQuanLy(loaiQuanLy)?.title}`} className='min-w-95px' />
                <TextValidator type="text" name={`ma${renderLoaiQuanLy(loaiQuanLy)?.name}`} />
              </div>

              <div className='d-flex w-100 ps-2'>
                <LabelRequired label='Đơn vị' className='min-w-70px' />
                <TextValidator type="text" />
              </div>

              <div className='d-flex w-100 ps-2'>
                <LabelRequired label='Nồng độ' className='min-w-75px' />
                <TextValidator type="text" />
              </div>
            </Col>

            <Col xs={2} className='d-flex ps-0'>
              <LabelRequired label='Hàm lượng' className='min-w-75px' />
              <TextValidator type="text" />
            </Col>
          </Row>

          <Row className='mb-1'>
            <Col xs={4} className='d-flex'>
              <div className='d-flex w-100'>
                <LabelRequired label='Nước SX' className='min-w-90px' />
                <TextValidator type="text" />
              </div>
            </Col>

            <Col xs={6} className='d-flex ps-0'>
              <div className='d-flex w-100'>
                <LabelRequired label='Hãng sản xuất' className='min-w-95px' />
                <TextValidator type="text" />
              </div>
            </Col>

            <Col xs={2} className='d-flex ps-0'>
              <LabelRequired label='Tồn kho' className='min-w-75px' />
              <TextValidator type="text" />
            </Col>
          </Row>

          <Row className="mb-1">
            <Col xs={4} className='d-flex'>
              <div className='d-flex w-100'>
                <LabelRequired label='Số lượng' className='min-w-90px' />
                <TextValidator type="text" />
              </div>
              <div className='d-flex w-100'>
                <LabelRequired label='Đơn giá' className='min-w-80px ps-2' />
                <TextValidator type="text" />
              </div>
            </Col>

            <Col xs={6} className='d-flex ps-0'>
              <div className='d-flex w-100'>
                <LabelRequired label='% VAT' className='min-w-95px' />
                <TextValidator type="text" />
              </div>

              <div className='d-flex w-100 ps-2'>
                <LabelRequired label='Thành tiền' className='min-w-70px' />
                <TextValidator type="text" />
              </div>

              <div className='d-flex w-100 ps-2'>
                <LabelRequired label='Số ĐK' className='min-w-75px' />
                <TextValidator type="text" />
              </div>
            </Col>

            <Col xs={2} className='d-flex ps-0'>
              <LabelRequired label='Số lô' className='min-w-75px' />
              <TextValidator type="text" />
            </Col>
          </Row>

          <Row>
            <Col xs={4} className='d-flex'>
              <div className='d-flex w-100'>
                <LabelRequired label='Hạn sử dụng' className='min-w-90px' />
                <div className="spaces d-flex width-100">
                  <div className="spaces width-25">
                    <TextValidator
                      name="ngay"
                      type="text"
                      maxLength="2 "
                      className="text-center"
                    />
                  </div>
                  <div className="spaces width-25">
                    <TextValidator
                      name="thang"
                      type="text"
                      maxLength="2 "
                      className="text-center"
                    />
                  </div>
                  <div className="spaces width-50">
                    <TextValidator
                      name="nam"
                      type="text"
                      maxLength="4 "
                      className="text-center"
                    />
                  </div>
                </div>
              </div>

              <div className='d-flex w-100'>
                <Button className="btn-fill spaces h-25 ms-2">Cập nhật</Button>
              </div>
            </Col>
          </Row>
        </div>

        <div className='border-bottom'>
          <TableCustom className='spaces h-calc-vh-347' columns={renderLoaiQuanLy(loaiQuanLy)?.column} data={[]} />
        </div>

        <div className='d-flex gap-2 justify-content-end p-2'>
          <Button className='btn-fill'>Lưu</Button>
          <Button className='btn-fill'>Gửi yêu cầu {renderType}</Button>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default ModalHaoPhiThuoc