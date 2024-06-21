import { Button, Col, FormCheck, Modal, Row } from 'react-bootstrap';
import CustomMenu from '../../../component/menu/Menu';
import { KTSVG } from '../../../../../_metronic/helpers';
import { DSMenuChiDinhDichVu, listMenuIn } from '../../constants/PhanHeChuyenKhoaConstants';
import { LIST_DOI_TUONG_TIEP_NHAN } from '../../../phan-he-tiep-nhan-thanh-toan/constants/PhanHeTiepNhan';
import TextField from '../../../component/TextField';
import TextValidator from '../../../component/TextValidator';
import LabelRequired from '../../../component/LabelRequired';
import AutocompleteV2 from '../../../component/AutocompleteObjectV2';
import Autocomplete from '../../../component/AutocompleteObject';
import CustomTabMenu from '../../../component/CustomTabMenu';
import { dsTabPTTT } from '../../../phan-he-cdha-va-tdcn/constants/Constants';

type Props = {
  show: boolean;
  handleCloseDialog: () => void;
  selectedRow?: any;
}

const ModalChiDinhDichVu = ({ show, handleCloseDialog, selectedRow }: Props) => {
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
          Chỉ định dịch vụ
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="p-0 spaces bg-white overflow-hidden">
        <Row className='border-bottom m-0'>
          <Col xs={8} className="d-flex align-items-center mt-1">
            <div className="position-relative">
              <CustomMenu
                handleSelectOption={() => { }}
                listMenuItem={[]}
                menuLabel={<KTSVG path="/media/icons/duotune/layouts/lay002.svg" svgClassName="spaces h-100 w-100" />} />
            </div>

            <div className="">
              <CustomMenu
                className='W-150'
                handleSelectOption={() => { }}
                listMenuItem={listMenuIn}
                menuLabel={<div className="text-center">
                  <div><i className="fa-solid fa-tag text-info" style={{ fontSize: "30px" }}></i></div>
                  <div className="fs-5">Mẫu thông tin PTTT</div>
                </div>}
              />
            </div>

            <div className='text-center cursor-pointer'>
              <div><i className="fa-solid fa-check text-primary" style={{ fontSize: "30px" }}></i></div>
              <div className='fs-5'>Sử dụng PTTT cũ</div>
            </div>
          </Col>


          <Col xs={4}>
            {selectedRow?.length !== 0 ? (
              <div className="d-flex justify-content-end h-100">
                <div className="text-break fw-500 text-end me-2">
                  <span className="text-uppercase fw-600 fs-7">{selectedRow?.[0]?.hoTen}</span>{" "}
                  <span className="fs-7">
                    | Tuổi: {selectedRow?.[0]?.age} | {selectedRow?.[0]?.gioiTinh} |{" "}
                    {selectedRow?.[0]?.loaiDoiTuong}
                  </span>
                  <div className="fs-7">
                    VP: 240 {selectedRow?.[0]?.mpt}
                    {selectedRow?.[0]?.soDinhDanh && `CCCD: ${selectedRow?.[0]?.soDinhDanh}`}
                  </div>{" "}
                  <div className="text-truncate fs-7">Địa chỉ: {selectedRow?.[0]?.diaChi}</div>
                </div>

                <div className="border-start spaces width-17 d-flex align-items-center justify-content-center fw-bold text-danger">
                  {LIST_DOI_TUONG_TIEP_NHAN.find(item => item?.code === selectedRow?.[0]?.loaiDoiTuong)?.name}
                </div>
              </div>
            ) : (
              <div className="text-break"></div>
            )}
          </Col>
        </Row>

        <div className=' p-1 border-bottom bg-light'>
          <div className='d-flex align-items-center'>
            <div className='d-flex w-25 me-2'>
              <LabelRequired label="Ngày y lệnh" className='min-w-85px' />
              <TextValidator type="datetime-local" />
            </div>
          
            <div className='d-flex spaces w-30 me-2'>
              <LabelRequired label="Chẩn đoán" className='min-w-85px' />
              <div className='spaces w-30'>
                <Autocomplete options={[]} name='' className='h-26 w-100' />
              </div>
              <div className='spaces w-70'>
                <Autocomplete options={[]} name='' className='h-26 w-100' />
              </div>
            </div>
          
            <div className='d-flex spaces w-20 me-2'>
              <a href='/' onClick={(e) => { e.preventDefault() }} className='me-2'><u>Bệnh kèm theo</u></a>
              <FormCheck label="Cấp cứu" type="checkbox" className='me-2' />
              <FormCheck label="Thu tiền" type="checkbox" />
            </div>
          
            <div className='d-flex align-items-center w-25'>
              <LabelRequired label='Kê tự động:' className='min-w-100px' />
              <a href='/' onClick={(e) => { e.preventDefault() }}><u>(Chưa chọn ngày kê tự động)</u></a>
            </div>
          </div>
          
          <div className='d-flex align-items-center'>
            <div className='d-flex w-25 me-2'>
              <LabelRequired label="Người y lệnh" className='min-w-85px' />
              <TextValidator type="text" />
            </div>
          
            <div className='d-flex spaces w-30 me-2'>
              <LabelRequired label="Ghi chú" className='min-w-85px' />
              <TextValidator type="text" />
            </div>
          
            <div className='d-flex spaces w-20 me-2'>
              <LabelRequired label="Phiếu điều trị" className='min-w-100px' />
              <Autocomplete options={[]} name='' className='h-26 w-100' />
            </div>
          
            <div className='d-flex align-items-center w-25'>
              <a href='/' onClick={(e) => { e.preventDefault() }}><u>Thêm phiếu điều trị</u></a>
            </div>
          </div>
        </div>

        <div>
          <CustomTabMenu classNameTabContent='h-menu-chi-dinh-dich-vu border-bottom' danhsachTabs={DSMenuChiDinhDichVu} />
        </div>

        <Row className='bg-light p-1'>
          <Col xs={9}>
            <Row className='mb-1'>
              <Col xs={2} className='d-flex spaces w-20'><div className='min-w-85px'>Tổng chi phí:</div> <div className='w-100 text-end'>0</div></Col>
              <Col xs={2} className='d-flex spaces w-20'><div className='min-w-85px'>BHYT:</div> <div className='w-100 text-end'>0</div></Col>
              <Col xs={2} className='d-flex spaces w-20'><div className='spaces min-w-120'>Miễn giảm dịch vụ:</div> <div className='w-100 text-end'>0</div></Col>
              <Col xs={2} className='d-flex spaces w-20'><div className='min-w-85px'>Nguồn khác:</div> <div className='w-100 text-end'>0</div></Col>
              <Col className='d-flex spaces w-20'><div className='min-w-85px'>Bệnh nhân:</div> <div className='w-100 text-end'>0</div></Col>
            </Row>
            
            <Row>
              <Col xs={2} className='d-flex spaces w-20'><div className='min-w-85px'>Tạm ứng:</div> <div className='w-100 text-end'>0</div></Col>
              <Col xs={2} className='d-flex spaces w-20'><div className='min-w-85px'>Đã thu:</div> <div className='w-100 text-end'>0</div></Col>
              <Col xs={2} className='d-flex spaces w-20'><div className='min-w-125px'>Miễn giảm hóa đơn:</div> <div className='w-100 text-end'>0</div></Col>
              <Col xs={2} className='d-flex spaces w-20'><div className='min-w-85px'>Còn nợ:</div> <div className='w-100 text-end'>0</div></Col>
            </Row>
          </Col>

          <Col>
            <div className='d-flex justify-content-end mt-3'>
              <FormCheck type="checkbox" label="In phiếu thực hiện CLS" className='me-2 '/>
              <Button className='btn-fill me-2'>Lưu</Button>
              <Button className='btn-fill me-2'>Lưu + In</Button>
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  )
}

export default ModalChiDinhDichVu