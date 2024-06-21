import { Button, Col, FormCheck, Modal, Row } from 'react-bootstrap';
import Autocomplete from '../../../../component/AutocompleteObject';
import LabelRequired from '../../../../component/LabelRequired';
import TextValidator from '../../../../component/TextValidator';
import { LIST_LOAI_DICH_VU, LIST_NHOM_BAO_CAO, LIST_NHOM_CHI_PHI_BHYT, LIST_NHOM_DICH_VU, LIST_NHOM_TAI_KHOAN, LUON_CHON_DOI_TUONG_NAY } from '../../../const/ModalThemMoiVatTuConstant';
import { useState } from 'react';
import ModalCauHinhDonViTinh from './ModalCauHinhDonViTinh';
import ModalThongTinKhac from './ModalThongTinKhac';

type Props = {
  show: boolean;
  handleCloseDialog: () => void;
}

const ModalThemMoiVatTu = ({ show, handleCloseDialog }: Props) => {
  const [openModalCauHinhDonViTinh, setOpenModalCauHinhDonViTinh] = useState(false);
  const [openModalThongTinKhac, setOpenModalThongTinKhac] = useState(false);

  const handleOpenModalCauHinhDonViTinh = () => {
    setOpenModalCauHinhDonViTinh(true);
  }

  const handleOpenModalThongTinKhac = () => {
    setOpenModalThongTinKhac(true);
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
          Cập nhật vật tư y tế
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="p-0 spaces bg-white px-12 max-h-calc-135">
        {/* hàng 1 */}
        <Row className='mb-2'>
          <Col xl={2} className='flex-grow-1 px-1 min-w-300px'>
            <LabelRequired label='Mã vật tư' />
            <TextValidator type="text" />
          </Col>
          <Col xl={4} className='flex-grow-3 px-1'>
            <LabelRequired label='Tên vật tư' />
            <TextValidator type="text" />
          </Col>
          <Col xl={4} className='flex-grow-3 px-1'>
            <LabelRequired label='Tên vật tư bệnh nhân' />
            <TextValidator type="text" />
          </Col>
        </Row>

        {/* hàng 2 */}
        <Row className='mb-2'>
          <Col xl={2} className='flex-grow-1 px-1 min-w-300px d-flex'>
            <div className=' w-100'>
              <LabelRequired label='Đơn vị tính' />
              <TextValidator type="text" />
            </div>
            <div className='ps-2 w-100'>
              <LabelRequired label='STT vật tư (BYT)' />
              <TextValidator type="text" />
            </div>
          </Col>

          <Col xl={4} className='flex-grow-3 d-flex px-1'>
            <div className=' w-100'>
              <LabelRequired label='Mã vật tư (BYT)' />
              <TextValidator type="text" />
            </div>
            <div className='ps-2 w-100'>
              <LabelRequired label='Mã chạy phác đồ' />
              <TextValidator type="text" />
            </div>
          </Col>

          <Col xl={4} className='flex-grow-3 d-flex px-1'>
            <div className=' w-100'>
              <LabelRequired label='Nhóm dịch vụ' />
              <Autocomplete options={LIST_NHOM_DICH_VU} className='autocomplete-custom-tiep-nhan spaces h-25' />
            </div>
            <div className='ps-2 w-100'>
              <LabelRequired label='Loại dịch vụ' />
              <Autocomplete options={LIST_LOAI_DICH_VU} className='autocomplete-custom-tiep-nhan spaces h-25' />
            </div>
          </Col>
        </Row>

        {/* hàng 3 */}
        <Row className='mb-2'>
          <Col xl={2} className='flex-grow-1 px-1 min-w-300px'>
            <LabelRequired label='Nhóm chi phí BHYT' />
            <Autocomplete options={LIST_NHOM_CHI_PHI_BHYT} className='autocomplete-custom-tiep-nhan spaces h-25' />
          </Col>

          <Col xl={4} className='flex-grow-3 px-1 d-flex'>
            <div className=' w-100'>
              <LabelRequired label='Luôn chọn đối tượng này khi chỉ định' />
              <Autocomplete options={LUON_CHON_DOI_TUONG_NAY} className='autocomplete-custom-tiep-nhan spaces h-25' />
            </div>
            <div className='ps-2 spaces width-99'>
              <LabelRequired label='Định mức xét nghiệm' />
              <TextValidator type="number" className="text-end" />
            </div>
          </Col>

          <Col xl={4} className='flex-grow-3 px-1 d-flex'>
            <div className='w-50'>
              <LabelRequired label='Số lần sử dụng' />
              <TextValidator type="number" className="text-end" />
            </div>
            <div className='ps-2 w-100'>
              <LabelRequired label='Nhóm báo cáo' />
              <Autocomplete options={LIST_NHOM_BAO_CAO} className='autocomplete-custom-tiep-nhan spaces h-25' />
            </div>
          </Col>
        </Row>

        {/* hàng 4 */}
        <Row className='mb-2'>
          <Col xl={2} className='flex-grow-1 px-1 min-w-300px'>
            <LabelRequired label='Nhóm tài khoản thu tiền' />
            <Autocomplete options={LIST_NHOM_TAI_KHOAN} className='autocomplete-custom-tiep-nhan spaces h-25' />
          </Col>

          <Col xl={4} className='flex-grow-3 px-1 d-flex'>
            <div className=' w-100'>
              <LabelRequired label='Giá BHYT' />
              <TextValidator type="number" className="text-end" />
            </div>
            <div className='ps-2 spaces width-99'>
              <LabelRequired label='Giá viện phí' />
              <TextValidator type="number" className="text-end" />
            </div>
          </Col>

          <Col xl={4} className='flex-grow-3 px-1 d-flex'>
            <div className='w-50'>
              <LabelRequired label='Giá yêu cầu' />
              <TextValidator type="number" className="text-end" />
            </div>
            <div className='ps-2 w-100'>
              <LabelRequired label='Không cho phép chuyển đối tượng dịch vụ sau' />
              <Autocomplete options={[]} className='autocomplete-custom-tiep-nhan spaces h-25' />
            </div>
          </Col>
        </Row>

        {/* hàng 5 */}
        <Row className='mb-2'>
          <Col xl={2} className='flex-grow-1 px-1 min-w-300px'>
            <LabelRequired label='Phòng chỉ định' />
            <Autocomplete options={[]} className='autocomplete-custom-tiep-nhan spaces h-25' />
          </Col>

          <Col xl={4} className='flex-grow-3 px-1 d-flex'>
            <div className='d-flex w-50'>
              <div className=' w-100'>
                <LabelRequired label='Cảnh báo HSD' />
                <TextValidator type="number" className="text-end" />
              </div>
              <div className='ps-2 spaces width-99'>
                <LabelRequired label='Cảnh báo tồn kho' />
                <TextValidator type="number" className="text-end" />
              </div>
            </div>

            <div className=' w-50 ps-2'>
              <LabelRequired label='Cảnh báo khả dụng' />
              <TextValidator type="number" className="text-end" />
            </div>
          </Col>

          <Col xl={4} className='flex-grow-3 px-1 d-flex'>
            <div className=' w-100'>
              <LabelRequired label='Định mức SL BHYT' />
              <TextValidator type="number" className="text-end" />
            </div>
            <div className='ps-2 w-100'>
              <LabelRequired label='Mã dược quốc gia' />
              <TextValidator type="text" />
            </div>
          </Col>
        </Row>

        {/* hàng 6 */}
        <Row className='mb-2'>
          <Col xl={2} className='flex-grow-1 px-1 min-w-300px'>
            <LabelRequired label='Ghi chú' />
            <TextValidator type="text" />
          </Col>

          <Col xl={4} className='flex-grow-3 px-1 d-flex'>
            <div className=' w-100'>
              <LabelRequired label='Tỷ lệ BHYT thanh toán(đúng tuyến)-%' />
              <TextValidator type="text" />
            </div>
            <div className='ps-2 spaces width-99'>
              <LabelRequired label='Tỷ lệ BHYT thanh toán(đúng tuyến)-%' />
              <TextValidator type="text" />
            </div>
          </Col>

          <Col xl={4} className='flex-grow-3 px-1 d-flex'>
            <div className="w-100">
              <LabelRequired label='Nhóm hoa hồng người giới thiệu' />
              <TextValidator type="text" />
            </div>
            <div className="w-100 ps-2">
              <LabelRequired label='Nhóm quản lý' />
              <TextValidator type="text" />
            </div>
          </Col>
        </Row>

        {/* hàng 7 */}
        <Row className='mb-2'>
          <Col xl={2} className='flex-grow-1 px-1 min-w-300px'>
            <LabelRequired label='Nhà cung cấp' />
            <Autocomplete options={[]} className='autocomplete-custom-tiep-nhan spaces h-25' />
          </Col>

          <Col xl={4} className='flex-grow-3 px-1 d-flex'>
            <div className=' w-100'>
              <LabelRequired label='Hãng sản xuất' />
              <Autocomplete options={[]} className='autocomplete-custom-tiep-nhan spaces h-25' />
            </div>
            <div className='ps-2 spaces width-99'>
              <LabelRequired label='Nước sản xuất' />
              <Autocomplete options={[]} className='autocomplete-custom-tiep-nhan spaces h-25' />
            </div>
          </Col>

          <Col xl={4} className='flex-grow-3 px-1 d-flex'>
            <div className="w-100">
              <LabelRequired label='Số đăng ký' />
              <TextValidator type="text" />
            </div>
            <div className="w-100 ps-2">
              <LabelRequired label='Số lô nhập' />
              <TextValidator type="text" />
            </div>
          </Col>
        </Row>

        {/* hàng 8 */}
        <Row className='mb-2'>
          <Col xl={2} className='flex-grow-1 px-1 min-w-300px d-flex'>
            <div className=' w-100'>
              <LabelRequired label='Hạn sử dụng' />
              <TextValidator type="date" />
            </div>
            <div className='ps-2 w-100'>
              <LabelRequired label='Quy cách đóng gói' />
              <TextValidator type="text" />
            </div>
          </Col>

          <Col xl={4} className='flex-grow-3 px-1 d-flex'>
            <div className=' w-100'>
              <LabelRequired label='Đường dùng' />
              <Autocomplete options={[]} className='autocomplete-custom-tiep-nhan spaces h-25' />
            </div>
            <div className='ps-2 spaces width-99'>
              <LabelRequired label='Chỉ đối tượng này mới được BHTT' />
              <Autocomplete options={[]} className='autocomplete-custom-tiep-nhan spaces h-25' />
            </div>
          </Col>

          <Col xl={4} className='flex-grow-3 px-1 d-flex'>
            <div className="w-100">
              <LabelRequired label='Giá mua' />
              <TextValidator type="number" className="text-end" />
            </div>
            <div className="w-100 ps-2">
              <LabelRequired label='Giá mua VAT(%)' />
              <TextValidator type="number" className="text-end" />
            </div>
          </Col>
        </Row>

        {/* hàng 9 */}
        <Row className='mb-2'>
          <Col xl={2} className='flex-grow-1 px-1 min-w-300px d-flex'>
            <div className=' w-100'>
              <LabelRequired label='Giá bán' />
              <TextValidator type="number" className="text-end" />
            </div>
            <div className='ps-2 w-100'>
              <LabelRequired label='Giá bán VAT(%)' />
              <TextValidator type="number" className="text-end" />
            </div>
          </Col>

          <Col xl={4} className='flex-grow-3 px-1 d-flex'>
            <div className=' w-100'>
              <LabelRequired label='Nhóm chia lợi nhuận' />
              <Autocomplete options={[]} className='autocomplete-custom-tiep-nhan spaces h-25' />
            </div>
            <div className='ps-2 spaces width-99'>
              <LabelRequired label='Số quyết định trúng thầu' />
              <TextValidator type="text" />
            </div>
          </Col>

          <Col xl={4} className='flex-grow-3 px-1 d-flex'>
            <div className="w-100">
              <LabelRequired label='Số gói thầu' />
              <TextValidator type="number" />
            </div>
            <div className="w-100 ps-2">
              <LabelRequired label='Nhóm thầu' />
              <TextValidator type="number" />
            </div>
          </Col>
        </Row>

        {/* hàng 10 */}
        <Row className='mb-2'>
          <Col xl={2} className='flex-grow-1 px-1 min-w-300px d-flex'>
            <div className=' w-100'>
              <LabelRequired label='Năm thầu' />
              <TextValidator type="number" />
            </div>
            <div className='ps-2 w-100'>
              <LabelRequired label='Ngày hết hạn thầu' />
              <TextValidator type="date" />
            </div>
          </Col>

          <Col xl={4} className='flex-grow-3 px-1 d-flex'>
            <div className=' w-100'>
              <LabelRequired label='Cơ sở phân tán' />
              <Autocomplete options={[]} className='autocomplete-custom-tiep-nhan spaces h-25' />
            </div>
            <div className='ps-2 spaces width-99'>
              <FormCheck type='checkbox' label="Thầu cấp tỉnh" />
              <TextValidator type="text" />
            </div>
          </Col>

          <Col xl={4} className='flex-grow-3 px-1 d-flex'>
            <div className="w-100">
              <FormCheck type='checkbox' label="Thầu cấp cơ sở" />
              <TextValidator type="text" />
            </div>
            <div className="w-100 ps-2">
              <LabelRequired label='Mã kế toán' />
              <TextValidator type="text" />
            </div>
          </Col>
        </Row>

        <Row className='mb-2 d-flex'>
          <Col xs={2}>
            <FormCheck type='checkbox' label="Thầu cấp quốc gia" />
          </Col>
          <Col xs={2}>
            <FormCheck type='checkbox' label="Vật tư tài trợ" />
          </Col>
          <Col xs={2}>
            <FormCheck type='checkbox' label="Cho phép miễn giảm" />
          </Col>
          <Col xs={2}>
            <FormCheck type='checkbox' label="Yêu cầu biên bản hội chẩn" />
          </Col>
        </Row>

        <Row>
          <Col xs={2}>
            <FormCheck type='checkbox' label="Hóa chất xét nghiệm" />
          </Col>
          <Col xs={2}>
            <FormCheck type='checkbox' label="Vật tư tái sử dụng" />
          </Col>
          <Col xs={2}>
            <FormCheck type='checkbox' label="Không cho kê lẻ" />
          </Col>
          <Col xs={2}>
            <FormCheck type='checkbox' label="Xuất XML theo QĐ5937" />
          </Col>
          <Col xs={1}>
            <FormCheck type='checkbox' label="Khóa" />
          </Col>
          <Col xs={2}>
            <a href="/" onClick={(e) => {
              e.preventDefault();
              handleOpenModalCauHinhDonViTinh();
            }}>
              <u>Cấu hình đơn vị tính theo kho</u>
            </a>
          </Col>
        </Row>
      </Modal.Body>

      <Modal.Footer className='p-1 spaces h-45 d-flex justify-content-between'>
        <div className='d-flex'>
          <Button className="btn-fill me-2" onClick={handleOpenModalThongTinKhac}>Thông tin khác</Button>
          <Button className="btn-fill">Quy đổi đơn vị</Button>
        </div>
        <Button className="btn-fill">Lưu</Button>
      </Modal.Footer>

      <ModalCauHinhDonViTinh show={openModalCauHinhDonViTinh} handleCloseDialog={() => setOpenModalCauHinhDonViTinh(false)} />
      <ModalThongTinKhac show={openModalThongTinKhac} handleCloseDialog={() => setOpenModalThongTinKhac(false)} />
    </Modal>
  )
}

export default ModalThemMoiVatTu