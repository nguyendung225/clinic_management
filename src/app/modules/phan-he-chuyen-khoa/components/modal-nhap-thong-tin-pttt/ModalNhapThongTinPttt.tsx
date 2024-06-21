import { Button, Col, Modal, Row } from 'react-bootstrap';
import { KTSVG } from '../../../../../_metronic/helpers';
import CustomTabMenu from '../../../component/CustomTabMenu';
import CustomMenu from '../../../component/menu/Menu';
import { dsTabPTTT } from '../../../phan-he-cdha-va-tdcn/constants/Constants';
import { LIST_DOI_TUONG_TIEP_NHAN } from '../../../phan-he-tiep-nhan-thanh-toan/constants/PhanHeTiepNhan';
import { CODE_LIST_MAU_THONG_TIN, listMauThongTin } from '../../constants/ModalNhapThongTinPTTTConstants';
import { IItemMenu, IRenderPhieuIn } from '../../../phan-he-tiep-nhan-thanh-toan/models/ThanhToanModel';
import { useState } from 'react';
import ModalLuuMauMoi from './ModalLuuMauMoi';
import ModalDanhSachMau from './ModalDanhSachMau';
import ModalSuDungPTTTCu from './ModalSuDungPTTTCu';
import GiayChungNhan from '../phieu-in/GiayChungNhan';
import { stylePrint, stylePrintLandscape } from '../../../component/phieu-in/constant';
import ModalPhieuIn from '../../../component/ModalPhieuIn';
import PhieuPhauThuat from '../phieu-in/PhieuPhauThuat';

type Props = {
  show: boolean;
  handleCloseDialog: () => void;
  selectedRow?: any;
}

const ModalNhapThongTinPttt = ({ show, handleCloseDialog, selectedRow }: Props) => {
  const [openModalLuuMauMoi, setOpenModalLuuMauMoi] = useState(false);
  const [openModalDanhSachMau, setOpenModalDanhSachMau] = useState(false);
  const [openModalSuDungPTTTCu, setOpenModalSuDungPTTTCu] = useState(false);
  const [openPhieuIn, setOpenPhieuIn] = useState(false);
  const [loaiPhieu, setLoaiPhieu] = useState("");

  const handleSelectOptionMauThongTin = (data: IItemMenu) => {
    const options = {
      [CODE_LIST_MAU_THONG_TIN.LUU_VAO_MAU_MOI]: () => setOpenModalLuuMauMoi(true),
      [CODE_LIST_MAU_THONG_TIN.DS_CAC_MAU_DA_TAO]: () => setOpenModalDanhSachMau(true),
    }
    options[data?.code]();
  }

  const handleOpenModalSuDungPTTTCu = () => {
    setOpenModalSuDungPTTTCu(true);
  }


  const renderPhieuIn = (loaiPhieu: string) => {
    const options: IRenderPhieuIn = {
      [CODE_LIST_MAU_THONG_TIN.GIAY_CHUNG_NHAN]: {
        title: "Giấy chứng nhận",
        stylePrint: stylePrint,
        size: "lg",
        component: <GiayChungNhan />
      },
      [CODE_LIST_MAU_THONG_TIN.PHIEU_PHAU_THUAT]: {
        title: "Phiếu phẫu thuật",
        stylePrint: stylePrint,
        size: "lg",
        component: <PhieuPhauThuat />
      },
    }

    return options[loaiPhieu]
  }

  const handleOpenPhieuIn = (loaiPhieu: string) => {
    setLoaiPhieu(loaiPhieu);
    setOpenPhieuIn(true);
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
          Cập nhật thông tin phẫu thuật thủ thuật
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="p-0 spaces bg-white">
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
                handleSelectOption={handleSelectOptionMauThongTin}
                listMenuItem={listMauThongTin}
                menuLabel={<div className="text-center">
                  <div><i className="fa-solid fa-tag text-info" style={{ fontSize: "30px" }}></i></div>
                  <div className="fs-5">Mẫu thông tin PTTT</div>
                </div>}
              />
            </div>

            <div className='text-center cursor-pointer' onClick={handleOpenModalSuDungPTTTCu}>
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

        <div>
          <CustomTabMenu classNameTabContent='h-menu-nhap-thong-tin-pttt border-bottom px-2' danhsachTabs={dsTabPTTT} />
        </div>

        <div className='d-flex justify-content-end py-1'>
          <Button className='btn-fill me-2' onClick={() =>handleOpenPhieuIn(CODE_LIST_MAU_THONG_TIN.GIAY_CHUNG_NHAN)}>Giấy chứng nhận</Button>
          <Button className='btn-fill me-2' onClick={() =>handleOpenPhieuIn(CODE_LIST_MAU_THONG_TIN.PHIEU_PHAU_THUAT)}>Phiếu phẫu thuật</Button>
          <Button className='btn-fill me-2'>Lưu</Button>
          <Button className='btn-fill me-2'>Lưu + Đóng</Button>
        </div>
      </Modal.Body>

      <ModalLuuMauMoi show={openModalLuuMauMoi} handleCloseDialog={() => setOpenModalLuuMauMoi(false)}/>
      <ModalDanhSachMau show={openModalDanhSachMau} handleCloseDialog={() => setOpenModalDanhSachMau(false)}/>
      <ModalSuDungPTTTCu show={openModalSuDungPTTTCu} handleCloseDialog={() => setOpenModalSuDungPTTTCu(false)} />

      <ModalPhieuIn
        show={openPhieuIn}
        handleCloseDialog={() => setOpenPhieuIn(false)}
        title={renderPhieuIn(loaiPhieu)?.title}
        size={renderPhieuIn(loaiPhieu)?.size}
        stylePrint={renderPhieuIn(loaiPhieu)?.stylePrint}
      >
        {renderPhieuIn(loaiPhieu)?.component}
      </ModalPhieuIn>
    </Modal>
  )
}

export default ModalNhapThongTinPttt