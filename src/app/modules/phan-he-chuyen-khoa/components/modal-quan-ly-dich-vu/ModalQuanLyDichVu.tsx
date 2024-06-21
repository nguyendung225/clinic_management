import { Button, Col, Modal, Row } from 'react-bootstrap';
import CustomMenu from '../../../component/menu/Menu';
import { DSMenuQuanLyDichVu, DSMenuXML, listMenuIn } from '../../constants/PhanHeChuyenKhoaConstants';
import { KTSVG } from '../../../../../_metronic/helpers';
import { LIST_DOI_TUONG_TIEP_NHAN } from '../../../phan-he-tiep-nhan-thanh-toan/constants/PhanHeTiepNhan';
import CustomTabMenu from '../../../component/CustomTabMenu';
import LabelRequired from '../../../component/LabelRequired';
import CustomTextarea from '../../../component/custom-textarea/CustomTextarea';

type Props = {
  show: boolean;
  handleCloseDialog: () => void;
  selectedRow?: any;
}

const ModalQuanLyDichVu = ({ show, handleCloseDialog, selectedRow }: Props) => {
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
          Danh sách dịch vụ đi kèm
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="p-0 spaces bg-white overflow-hidden">
        <Row className='border-bottom'>
          <Col xs={8} className="d-flex align-items-center mt-1">
            <div className="position-relative">
              <CustomMenu
                handleSelectOption={() => { }}
                listMenuItem={[]}
                menuLabel={<KTSVG path="/media/icons/duotune/layouts/lay002.svg" svgClassName="spaces h-100 w-100" />} />
            </div>

            <div className='text-center cursor-pointer'>
              <div><i className="bi bi-clipboard2-check-fill text-info" style={{ fontSize: "30px" }}></i></div>
              <div className='fs-5'>Dịch vụ</div>
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

        <Row className='m-0'>
        <Col xs={8}>
          <Row>
            <Col xs={4} className='d-flex'>
              <LabelRequired label="Mã phiếu:" className="min-w-100px mb-1" />
              <CustomTextarea disabled marginUnderline={8} />
            </Col>
            <Col xs={4} className='d-flex'>
              <LabelRequired label="Ngày y lệnh:" className="min-w-80px mb-1" />
              <CustomTextarea disabled marginUnderline={8} />
            </Col>
            <Col xs={4} className='d-flex'>
              <LabelRequired label="Ngày chỉ định:" className="min-w-90px mb-1" />
              <CustomTextarea disabled marginUnderline={8} />
            </Col>
          </Row>

          <Row>
            <Col xs={4} className='d-flex'>
              <LabelRequired label="Người chỉ định:" className="min-w-100px mb-1" />
              <CustomTextarea disabled marginUnderline={8} />
            </Col>
            <Col className='d-flex'>
              <LabelRequired label="Nơi chỉ định:" className="min-w-80px mb-1" />
              <CustomTextarea disabled marginUnderline={8} />
            </Col>
          </Row>

          <Row>
            <Col className='d-flex'>
              <LabelRequired label="Chẩn đoán:" className="min-w-100px mb-1" />
              <CustomTextarea disabled marginUnderline={8} />
            </Col>
          </Row>
        </Col>

        <Col className='mt-10'>
          <div className='d-flex justify-content-end mb-4'><i className="fa-solid fa-clock-rotate-left fs-1 me-2"></i>Lịch sử</div>
          <div className='d-flex justify-content-end'><i className="fa-solid fa-chart-simple fs-1 me-2"></i>Biểu đồ</div>
        </Col>
      </Row>

        <div>
          <CustomTabMenu classNameTabContent='h-menu-quan-ly-dich-vu border-bottom px-2' danhsachTabs={DSMenuQuanLyDichVu} />
        </div>

        <div className='d-flex justify-content-end py-1'>
          <Button className='btn-fill me-2'>Phiếu chỉ định</Button>
          <Button className='btn-fill me-2'>Phiếu kết quả</Button>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default ModalQuanLyDichVu