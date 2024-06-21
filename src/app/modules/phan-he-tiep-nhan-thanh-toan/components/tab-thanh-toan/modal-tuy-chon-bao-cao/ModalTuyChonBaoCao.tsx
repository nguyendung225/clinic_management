import { useState } from 'react';
import { Button, Col, FormCheck, Modal, Row } from 'react-bootstrap';
import AutocompleteV2 from '../../../../component/AutocompleteObjectV2';
import LabelRequired from '../../../../component/LabelRequired';
import ModalPhieuIn from '../../../../component/ModalPhieuIn';
import TextField from '../../../../component/TextField';
import { stylePrint, stylePrintLandscape, stylePrintLandscapeBgColor } from '../../../../component/phieu-in/constant';
import { TableCustom } from '../../../../component/table/table-custom/TableCustom';
import { SELECTION_MODE } from '../../../../utils/Constant';
import { MOC_THOI_GIAN } from '../../../constants/TabThanhToanConstant';
import { CODE_LIST_BAO_CAO, CODE_LIST_HUONG_DAN_SU_DUNG, CODE_LIST_LO_LAI_PTTT, CODE_LIST_OPTION, CODE_LIST_OPTION_DOANH_THU_THEO_PHIEU_THU, CODE_LIST_PATIENT, CODE_LIST_PHU_CAP_PTTT, CODE_LIST_REPORT_TIME, CODE_LIST_TIEP_TUC_LAY_BAO_CAO } from '../../../constants/constants';
import { IRenderPhieuIn } from '../../../models/ThanhToanModel';
import { dataPTTT, locDuLieuData } from '../../fakeData';
import PhieuBaoCaoDSMienGiam from '../modal-phieu-in/PhieuBaoCaoDSMienGiam';
import PhieuBaoCaoDSThuTien from '../modal-phieu-in/PhieuBaoCaoDSThuTien';
import PhieuBaoCaoDoanhThuTheoDVDT from '../modal-phieu-in/PhieuBaoCaoDoanhThuTheoDVDT';
import PhieuBaoCaoDoanhThuTheoDVKT from '../modal-phieu-in/PhieuBaoCaoDoanhThuTheoDVKT';
import PhieuBaoCaoHoatDongTaiChinh from '../modal-phieu-in/PhieuBaoCaoHoatDongTaiChinh';
import PhieuBaoCaoLoLaiPTTT from '../modal-phieu-in/PhieuBaoCaoLoLaiPTTT';
import PhieuBaoCaoNopTienVeQuy from '../modal-phieu-in/PhieuBaoCaoNopTienVeQuy';
import PhieuBaoCaoSuDungHoaDonDienTu from '../modal-phieu-in/PhieuBaoCaoSuDungHoaDonDienTu';
import PhieuBaoCaoThuTienDichVu from '../modal-phieu-in/PhieuBaoCaoThuTienDichVu';
import PhieuDSHoanUng from '../modal-phieu-in/PhieuDSHoanUng';
import PhieuDSPhieuHuy from '../modal-phieu-in/PhieuDSPhieuHuy';
import PhieuDSTamUng from '../modal-phieu-in/PhieuDSTamUng';
import PhieuDanhSachPhoiThanhToan from '../modal-phieu-in/PhieuDanhSachPhoiThanhToan';
import PhieuNopTienVeQuy from '../modal-phieu-in/PhieuNopTienVeQuy';
import { locDuLieuColumn, PTTTColumn } from './Columns';
import PhieuBaoCaoPhuCapPTTT from '../modal-phieu-in/PhieuBaoCaoPhuCapPTTT';
import PhieuBaoCaoDoanhThuTongHop from '../modal-phieu-in/PhieuBaoCaoDoanhThuTongHop';
import PhieuBaoCaoThuTienVienPhiBaoHiem from '../modal-phieu-in/PhieuBaoCaoThuTienVienPhiBaoHiem';
import { Formik } from 'formik';
import { CODE_LIST_CONTEXT_VAT_TU } from '../../../../phan-he-kho-vat-tu/const/constants';
import PhieuTheKho from '../../../../phan-he-kho-vat-tu/components/phieu-in/PhieuTheKho';

type Props = {
  show: boolean;
  handleCloseDialog: () => void;
  loaiPhieu?: string;
}

const ModalTuyChonBaoCao = ({ show, handleCloseDialog, loaiPhieu }: Props) => {
  const [valueRadio, setValueRadio] = useState("");
  const [openPhieuIn, setOpenPhieuIn] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>();

  const handleClickLuu = () => {
    setOpenPhieuIn(true);
  }

  const initialValues = {
    name: "name",
  }

  const renderPhieuIn = (loaiPhieu: string) => {
    const options: IRenderPhieuIn = {
      [CODE_LIST_BAO_CAO.BAO_CAO.HOAT_DONG_TAI_CHINH]: {
        title: "Phiếu báo cáo hoạt động tài chính",
        stylePrint: stylePrint,
        size: "lg",
        component: <PhieuBaoCaoHoatDongTaiChinh />
      },
      [CODE_LIST_BAO_CAO.BAO_CAO.DOANH_THU_THEO_PHIEU_THU]: {
        title: "Phiếu báo cáo nộp tiền về quỹ",
        stylePrint: stylePrintLandscape,
        size: "xl",
        component: <PhieuBaoCaoNopTienVeQuy />
      },
      [CODE_LIST_BAO_CAO.BAO_CAO.DOANH_THU_THEO_DICH_VU_CHI_TIET]: {
        title: "Phiếu BÁO CÁO DOANH THU THEO DỊCH VỤ ĐÃ THU TIỀN",
        stylePrint: stylePrintLandscapeBgColor,
        size: "xl",
        component: <PhieuBaoCaoDoanhThuTheoDVDT />
      },
      [CODE_LIST_BAO_CAO.BAO_CAO.THU_TIEN_DICH_VU]: {
        title: "Phiếu báo cáo thu tiền dịch vụ",
        stylePrint: stylePrintLandscapeBgColor,
        size: "xl",
        component: <PhieuBaoCaoThuTienDichVu />
      },
      [CODE_LIST_BAO_CAO.BAO_CAO.DOANH_THU_THEO_DICH_VU_KY_THUAT]: {
        title: "Phiếu báo cáo doanh thu theo dịch vụ kỹ thuật",
        stylePrint: stylePrintLandscape,
        size: "xl",
        component: <PhieuBaoCaoDoanhThuTheoDVKT />
      },
      [CODE_LIST_BAO_CAO.BAO_CAO.SU_DUNG_HOA_DON_DIEN_TU]: {
        title: "Phiếu báo cáo sử dụng hóa đơn điện tử",
        stylePrint: stylePrintLandscapeBgColor,
        size: "xl",
        component: <PhieuBaoCaoSuDungHoaDonDienTu />
      },
      [CODE_LIST_BAO_CAO.BAO_CAO.DS_MIEN_GIAM]: {
        title: "danh sách miễn giảm",
        stylePrint: stylePrintLandscape,
        size: "xl",
        component: <PhieuBaoCaoDSMienGiam />
      },
      [CODE_LIST_BAO_CAO.BAO_CAO.DS_PHIEU_THU_TIEN]: {
        title: "danh sách phiếu thu tiền",
        stylePrint: stylePrintLandscape,
        size: "xl",
        component: <PhieuBaoCaoDSThuTien />
      },
      [CODE_LIST_BAO_CAO.BAO_CAO.DS_PHIEU_TAM_UNG]: {
        title: "danh sách phiếu tạm ứng",
        stylePrint: stylePrint,
        size: "lg",
        component: <PhieuDSTamUng />
      },
      [CODE_LIST_BAO_CAO.BAO_CAO.NOP_TIEN_VE_QUY]: {
        title: "Phiếu báo cáo nộp tiền về quỹ",
        stylePrint: stylePrintLandscape,
        size: "xl",
        component: <PhieuNopTienVeQuy />
      },
      [CODE_LIST_BAO_CAO.BAO_CAO.DS_PHIEU_HOAN_UNG]: {
        title: "Danh sách phiếu hoàn ứng",
        stylePrint: stylePrint,
        size: "lg",
        component: <PhieuDSHoanUng />
      },
      [CODE_LIST_BAO_CAO.BAO_CAO.DS_PHIEU_HUY]: {
        title: "Danh sách phiếu hủy",
        stylePrint: stylePrintLandscape,
        size: "xl",
        component: <PhieuDSPhieuHuy />
      },
      [CODE_LIST_BAO_CAO.BAO_CAO.DS_PHOI_THANH_TOAN]: {
        title: "báo cáo danh sách phơi thanh toán",
        stylePrint: stylePrintLandscape,
        size: "xl",
        component: <PhieuDanhSachPhoiThanhToan />
      },
      [CODE_LIST_BAO_CAO.BAO_CAO.LO_LAI_THU_THUAT]: {
        title: "báo cáo lỗ lãi thủ thuật",
        stylePrint: stylePrintLandscape,
        size: "xl",
        component: <PhieuBaoCaoLoLaiPTTT loaiPhieu={CODE_LIST_BAO_CAO.BAO_CAO.LO_LAI_THU_THUAT} />
      },
      [CODE_LIST_BAO_CAO.BAO_CAO.LO_LAI_PHAU_THUAT]: {
        title: "báo cáo lỗ lãi phẫu thuật",
        stylePrint: stylePrintLandscape,
        size: "xl",
        component: <PhieuBaoCaoLoLaiPTTT loaiPhieu={CODE_LIST_BAO_CAO.BAO_CAO.LO_LAI_PHAU_THUAT} />
      },
      [CODE_LIST_BAO_CAO.BAO_CAO.PHU_CAP_THU_THUAT]: {
        title: "báo cáo phụ cấp thủ thuật",
        stylePrint: stylePrintLandscape,
        size: "xl",
        component: <PhieuBaoCaoPhuCapPTTT loaiPhieu={CODE_LIST_BAO_CAO.BAO_CAO.PHU_CAP_THU_THUAT} />
      },
      [CODE_LIST_BAO_CAO.BAO_CAO.PHU_CAP_PHAU_THUAT]: {
        title: "báo cáo phụ cấp phẫu thuật",
        stylePrint: stylePrintLandscape,
        size: "xl",
        component: <PhieuBaoCaoPhuCapPTTT loaiPhieu={CODE_LIST_BAO_CAO.BAO_CAO.PHU_CAP_PHAU_THUAT} />
      },
      [CODE_LIST_BAO_CAO.BAO_CAO.DOANH_THU_TONG_HOP]: {
        title: "báo cáo doanh thu tổng hợp",
        stylePrint: stylePrintLandscape,
        size: "xl",
        component: <PhieuBaoCaoDoanhThuTongHop />
      },
      [CODE_LIST_BAO_CAO.BAO_CAO.THU_TIEN_DICH_VU_VIEN_PHI]: {
        title: "báo cáo thu tiền viện phí - bảo hiểm",
        stylePrint: stylePrint,
        size: "lg",
        component: <PhieuBaoCaoThuTienVienPhiBaoHiem />
      },
      [CODE_LIST_CONTEXT_VAT_TU.THE_KHO]: {
        title: "thẻ kho",
        stylePrint: stylePrint,
        size: "lg",
        component: <PhieuTheKho />
      },
    }

    return options[loaiPhieu];
  }

  return (
    <>
      <Modal centered show={show} onHide={handleCloseDialog} size='xl'>
        <Modal.Header className='py-4' closeButton>
          <Modal.Title>
            Tuỳ chọn báo cáo
          </Modal.Title>
        </Modal.Header>

        <Formik initialValues={initialValues} onSubmit={() => { }} >
          {({ values }) => (
            <>
              <Modal.Body>
                <fieldset className="scheduler-border">
                  <legend className="scheduler-border">Thời gian lấy báo cáo</legend>
                  {CODE_LIST_REPORT_TIME.includes(loaiPhieu as string) &&
                    <Row className="mb-2">
                      <Col xl={4} className='d-flex'>
                        <LabelRequired label='Tìm theo' className='min-w-90px' />
                        <AutocompleteV2
                          options={[]}
                          name="timTheo"
                          className="autocomplete-custom-tiep-nhan radius spaces width-100 h-25 min-w-160"
                        />
                      </Col>

                      {!CODE_LIST_PHU_CAP_PTTT.includes(loaiPhieu as string) &&
                        <Col xl={4} className='d-flex'>
                          <LabelRequired label={CODE_LIST_LO_LAI_PTTT.includes(loaiPhieu as string) ? "Loại PTTT" : 'Bệnh án'} className='min-w-80px' />
                          <AutocompleteV2
                            options={[]}
                            name="benhAn"
                            className="autocomplete-custom-tiep-nhan radius spaces width-100 h-25 min-w-160"
                          />
                        </Col>}

                      <Col xl={4}></Col>
                    </Row>}

                  <Row className="mb-2">
                    <Col xl={4} className='d-flex align-items-center'>
                      <FormCheck
                        type='radio'
                        className='d-flex me-1'
                        name={MOC_THOI_GIAN.NGAY}
                        value={MOC_THOI_GIAN.NGAY}
                        checked={valueRadio === MOC_THOI_GIAN.NGAY}
                        onChange={(e) => setValueRadio(e.target.value)}
                      />
                      <TextField
                        label="Từ ngày"
                        type="dateTime-local"
                        name="tuNgay"
                        className="w-100"
                        labelClassName="spaces min-w-72"
                        disabled={valueRadio !== MOC_THOI_GIAN.NGAY}
                      />
                    </Col>

                    <Col xl={4}>
                      <TextField
                        label="Đến ngày"
                        type="dateTime-local"
                        name="denNgay"
                        labelClassName="min-w-80px"
                        disabled={valueRadio !== MOC_THOI_GIAN.NGAY}
                      />
                    </Col>

                    <Col xl={4} className='d-flex align-items-center'>
                      <a href="/" onClick={(e) => { e.preventDefault(); }} className='w-50'><u>Trong ngày</u></a>
                      <a href="/" onClick={(e) => { e.preventDefault(); }}><u>Hôm qua</u></a>
                    </Col>
                  </Row>

                  <Row className="mb-2">
                    <Col xl={4} className='d-flex align-items-center'>
                      <FormCheck
                        type='radio'
                        className='d-flex me-1'
                        name={MOC_THOI_GIAN.THANG}
                        value={MOC_THOI_GIAN.THANG}
                        checked={valueRadio === MOC_THOI_GIAN.THANG}
                        onChange={(e) => setValueRadio(e.target.value)}
                      />
                      <LabelRequired label='Tháng' className='spaces min-w-72' />
                      <AutocompleteV2
                        options={[]}
                        name="thang"
                        className="autocomplete-custom-tiep-nhan radius spaces width-100 h-25 min-w-160"
                        isDisabled={valueRadio !== MOC_THOI_GIAN.THANG}
                      />
                    </Col>

                    <Col xl={4} className='d-flex'>
                      <LabelRequired label='Năm' className='min-w-80px' />
                      <AutocompleteV2
                        options={[]}
                        name="nam"
                        className="autocomplete-custom-tiep-nhan radius spaces width-100 h-25 min-w-160"
                        isDisabled={valueRadio !== MOC_THOI_GIAN.THANG}
                      />
                    </Col>

                    <Col xl={4} className='d-flex align-items-center'>
                      <a href="/" onClick={(e) => { e.preventDefault(); }} className='w-50'><u>Trong tuần</u></a>
                      <a href="/" onClick={(e) => { e.preventDefault(); }}><u>7 ngày gần đây</u></a>
                    </Col>
                  </Row>

                  <Row className="mb-2">
                    <Col xl={4} className='d-flex align-items-center'>
                      <FormCheck
                        type='radio'
                        className='d-flex me-1'
                        name={MOC_THOI_GIAN.QUY}
                        value={MOC_THOI_GIAN.QUY}
                        checked={valueRadio === MOC_THOI_GIAN.QUY}
                        onChange={(e) => setValueRadio(e.target.value)}
                      />
                      <LabelRequired label='Quý' className='spaces min-w-72' />
                      <AutocompleteV2
                        options={[]}
                        name="quy"
                        className="autocomplete-custom-tiep-nhan radius spaces width-100 h-25 min-w-160"
                        isDisabled={valueRadio !== MOC_THOI_GIAN.QUY}
                      />
                    </Col>

                    <Col xl={4} className='d-flex'>
                      <LabelRequired label='Năm' className='min-w-80px' />
                      <AutocompleteV2
                        options={[]}
                        name="nam"
                        className="autocomplete-custom-tiep-nhan radius spaces width-100 h-25 min-w-160"
                        isDisabled={valueRadio !== MOC_THOI_GIAN.QUY}
                      />
                    </Col>

                    <Col xl={4} className='d-flex align-items-center'>
                      <a href="/" onClick={(e) => { e.preventDefault(); }} className='w-50'><u>Trong tháng</u></a>
                      <a href="/" onClick={(e) => { e.preventDefault(); }}><u>30 ngày gần đây</u></a>
                    </Col>
                  </Row>

                  {CODE_LIST_BAO_CAO.BAO_CAO.DOANH_THU_THEO_DICH_VU_CHI_TIET === loaiPhieu &&
                    <Row>
                      <Col xl={4} className='d-flex align-items-center'>
                        <FormCheck
                          type='radio'
                          className='d-flex me-1'
                          name={MOC_THOI_GIAN.KHAC}
                          value={MOC_THOI_GIAN.KHAC}
                          checked={valueRadio === MOC_THOI_GIAN.KHAC}
                          onChange={(e) => setValueRadio(e.target.value)}
                        />
                        <LabelRequired label='Khác' className='spaces min-w-62' />
                        <div>Chọn nhiều khoảng thời gian</div>
                      </Col>
                    </Row>
                  }
                </fieldset>

                {CODE_LIST_OPTION.includes(loaiPhieu as string) &&
                  <fieldset className="scheduler-border">
                    <legend className="scheduler-border">Tùy chọn</legend>
                    {CODE_LIST_BAO_CAO.XUAT_XXML === loaiPhieu &&
                      <>
                        <Row className='ps-3'>
                          <FormCheck
                            type='checkbox'
                            className='d-flex'
                            label="Lấy ngày ra viện là ngày thanh toán, quyết toán (ngay_ttoan, thang_qt, nam_qt)" />
                        </Row>
                        <Row className='ps-3'>
                          <FormCheck
                            type='checkbox'
                            className='d-flex'
                            label="Tự động thay ngày thanh toán bằng ngày giám định BHYT nếu bệnh nhân không có ngày thanh toán" />
                        </Row>
                        <Row className='ps-3'>
                          <FormCheck
                            type='checkbox'
                            className='d-flex'
                            label='Tự động thay mã dịch vụ/mã thuốc bằng chuỗi "KHONG_CO_MA" với dịch vụ/thuốc không có mã' />
                        </Row>
                        <Row className='ps-3'>
                          <FormCheck
                            type='checkbox'
                            className='d-flex'
                            label="Không xuất các hồ sơ có tổng chi = 0" />
                        </Row>
                        <Row className='ps-3'>
                          <FormCheck
                            type='checkbox'
                            className='d-flex'
                            label="Bộ mã hóa dữ liệu" />
                        </Row>
                        <Row className='ps-3'>
                          <FormCheck
                            type='checkbox'
                            className='d-flex'
                            label="Dừng xuất XML khi phát hiện ra lỗi" />
                        </Row>
                      </>
                    }

                    {CODE_LIST_OPTION_DOANH_THU_THEO_PHIEU_THU.includes(loaiPhieu as string) &&
                      <>
                        <Row>
                          <Col xl={3}>
                            <FormCheck
                              type='radio'
                              className='d-flex'
                              label="Không nhóm dữ liệu"
                            // name={MOC_THOI_GIAN.NGAY}
                            // value={MOC_THOI_GIAN.NGAY}
                            // checked={valueRadio === MOC_THOI_GIAN.NGAY}
                            // onChange={(e) => setValueRadio(e.target.value)}
                            />
                          </Col>

                          <Col xl={3}>
                            <FormCheck
                              type='radio'
                              className='d-flex'
                              label="Nhóm theo ngày"
                            />
                          </Col>

                          <Col xl={3}>
                            <FormCheck
                              type='radio'
                              className='d-flex'
                              label="Nhóm theo thu ngân"
                            />
                          </Col>

                          <Col></Col>
                        </Row>

                        <Row className='mb-1'>
                          <Col xl={3}>
                            <FormCheck
                              type='checkbox'
                              className='d-flex'
                              label="Chỉ in nhóm"
                            />
                          </Col>

                          <Col xl={3}>
                            <FormCheck
                              type='checkbox'
                              className='d-flex'
                              label="In cả phiếu thu đã hủy"
                            />
                          </Col>

                          <Col xl={3}>
                            <FormCheck
                              type='checkbox'
                              className='d-flex'
                              label="Chỉ in phiếu thu đã hủy"
                            />
                          </Col>

                          <Col xl={3}>
                            <FormCheck
                              type='checkbox'
                              className='d-flex'
                              label="In chi tiết dịch vụ"
                            />
                          </Col>
                        </Row>

                        <Row>
                          <Col xl={2}>
                            <a href="/" onClick={(e) => { e.preventDefault(); }}><u>Lọc theo nhóm tài khoản</u></a>
                          </Col>

                          <Col xl={1} className='min-w-125px'>
                            <a href="/" onClick={(e) => { e.preventDefault(); }}><u>Lọc theo sổ thu</u></a>
                          </Col>

                          <Col xl={2} className='min-w-225px'>
                            <a href="/" onClick={(e) => { e.preventDefault(); }}><u>Lọc theo hình thức phiếu thu</u></a>
                          </Col>

                          <Col xl={2} className='spaces min-w-190'>
                            <a href="/" onClick={(e) => { e.preventDefault(); }}><u>Lọc theo loại phiếu thu</u></a>
                          </Col>

                          <Col xl={2}>
                            <a href="/" onClick={(e) => { e.preventDefault(); }}><u>Lọc theo thu ngân</u></a>
                          </Col>

                          <Col xl={2}>
                            <a href="/" onClick={(e) => { e.preventDefault(); }}><u>Lọc theo khoa</u></a>
                          </Col>
                        </Row>

                        <Row className='mb-1'>
                          <Col xl={2}>
                            <a href="/" onClick={(e) => { e.preventDefault(); }}><u>Lọc theo phòng chỉ định</u></a>
                          </Col>

                          <Col xl={1} className='min-w-125px'>
                            <a href="/" onClick={(e) => { e.preventDefault(); }}><u>Lọc theo thứ</u></a>
                          </Col>

                          <Col xl={2} className='min-w-225px'>
                            <a href="/" onClick={(e) => { e.preventDefault(); }}><u>Lọc theo loại phiếu thu chi tiết</u></a>
                          </Col>

                          <Col xl={2} className='spaces min-w-190'>
                            <a href="/" onClick={(e) => { e.preventDefault(); }}><u>Lọc theo đối tượng chi tiết</u></a>
                          </Col>

                          <Col xl={2}>
                            <a href="/" onClick={(e) => { e.preventDefault(); }}><u>Lọc theo loại công khám</u></a>
                          </Col>
                        </Row>

                        <Row className='mb-2'>
                          <Col xl={3}>
                            <FormCheck
                              type='checkbox'
                              className='d-flex'
                              label="Tất cả loại phiếu thu"
                            />

                            <FormCheck
                              type='checkbox'
                              className='d-flex'
                              label="Chỉ lấy báo cáo tạm ứng"
                            />

                            <FormCheck
                              type='checkbox'
                              className='d-flex'
                              label="Chỉ lấy báo cáo hoàn ứng"
                            />

                            <div className='mt-2 fw-bold'>Sổ thu</div>

                            <FormCheck
                              type='checkbox'
                              className='d-flex'
                              label="Số trực"
                            />

                            <FormCheck
                              type='checkbox'
                              className='d-flex'
                              label="Không phải số trực"
                            />
                          </Col>

                          <Col xl={3}>
                            <FormCheck
                              type='checkbox'
                              className='d-flex'
                              label="Tất cả loại tài khoản"
                            />
                            <FormCheck
                              type='checkbox'
                              className='d-flex'
                              label="Chỉ lấy báo cáo thu tiền ĐCT BH"
                            />
                            <FormCheck
                              type='checkbox'
                              className='d-flex'
                              label="Chỉ lấy báo cáo thu tiền dịch vụ"
                            />

                            <div className='mt-2 fw-bold'>Bệnh án (thời điểm tạo phiếu)</div>

                            <FormCheck
                              type='checkbox'
                              className='d-flex'
                              label="Nội trú"
                            />

                            <FormCheck
                              type='checkbox'
                              className='d-flex'
                              label="Ngoại trú"
                            />

                            <FormCheck
                              type='checkbox'
                              className='d-flex'
                              label="Khám bệnh"
                            />
                          </Col>

                          <Col xl={3}>
                            <div className='fw-bold'>Đối tượng bệnh nhân</div>
                            <FormCheck
                              type='checkbox'
                              className='d-flex'
                              label="BHYT"
                            />
                            <FormCheck
                              type='checkbox'
                              className='d-flex'
                              label="Viện phí"
                            />
                          </Col>

                          <Col xl={3}>
                            <div className='fw-bold'>Đối tượng dịch vụ</div>
                            <Row>
                              <Col>
                                <FormCheck
                                  type='checkbox'
                                  className='d-flex'
                                  label="BHYT"
                                />
                              </Col>

                              <Col>
                                <FormCheck
                                  type='checkbox'
                                  className='d-flex'
                                  label="Dịch vụ"
                                />
                              </Col>
                            </Row>

                            <FormCheck
                              type='checkbox'
                              className='d-flex'
                              label="Viện phí"
                            />

                            <div className="spaces h-22 mt-1"></div>

                            <FormCheck
                              type='checkbox'
                              className='d-flex'
                              label="Chưa chốt số liệu"
                            />

                            <FormCheck
                              type='checkbox'
                              className='d-flex'
                              label="Đã chốt số liệu"
                            />
                          </Col>
                        </Row>

                        <Row>
                          <Col xl={3}>
                            <FormCheck
                              type='radio'
                              className='d-flex'
                              label="Sắp xếp theo thời gian"
                            />
                          </Col>

                          <Col xl={3}>
                            <FormCheck
                              type='radio'
                              className='d-flex'
                              label="Sắp xếp theo loại"
                            />
                          </Col>

                          <Col xl={3}>
                            <FormCheck
                              type='radio'
                              className='d-flex'
                              label="Sắp xếp theo ký hiệu"
                            />
                          </Col>

                          <Col>
                            <FormCheck
                              type='radio'
                              className='d-flex'
                              label="Sắp xếp theo mã viện phí"
                            />
                          </Col>
                        </Row>
                      </>
                    }

                    {CODE_LIST_BAO_CAO.BAO_CAO.DOANH_THU_THEO_DICH_VU_CHI_TIET === loaiPhieu &&
                      <>
                        <Row className='mb-2'>
                          {/* Cột 1 */}
                          <Col xl={3}>
                            <FormCheck
                              type='radio'
                              className='d-flex'
                              label="Không nhóm dữ liệu"
                            />

                            <FormCheck
                              type='radio'
                              className='d-flex'
                              label="Nhóm theo nhóm tài khoản"
                            />

                            <FormCheck
                              type='checkbox'
                              className='d-flex'
                              label="Chi tiết bệnh nhân"
                            />
                          </Col>

                          {/* Cột 2 */}
                          <Col xl={2} className='min-w-225px'>
                            <FormCheck
                              type='radio'
                              className='d-flex'
                              label="Nhóm theo ngày"
                            />

                            <FormCheck
                              type='radio'
                              className='d-flex'
                              label="Nhóm theo loại dịch vụ"
                            />

                            <FormCheck
                              type='checkbox'
                              className='d-flex'
                              label="In gộp chênh lệch dịch vụ"
                            />
                          </Col>

                          {/* Cột 3 */}
                          <Col xl={3} className='spaces min-w-310'>
                            <FormCheck
                              type='radio'
                              className='d-flex'
                              label="Nhóm theo phòng chỉ định"
                            />

                            <FormCheck
                              type='radio'
                              className='d-flex'
                              label="Nhóm theo nhóm chi phí BHYT/loại dịch vụ"
                            />
                          </Col>

                          {/* Cột 4 */}
                          <Col>
                            <FormCheck
                              type='radio'
                              className='d-flex'
                              label="Nhóm theo phòng phòng thực hiện"
                            />
                          </Col>
                        </Row>

                        <Row>
                          <Col>
                            <a href="/" onClick={(e) => { e.preventDefault(); }} className='d-inline-block min-w-175px'><u>Lọc phòng chỉ định</u></a> <span className='text-danger'>---</span>
                          </Col>
                          <Col className='text-end'><a href="/" onClick={(e) => { e.preventDefault(); }} className="text-danger"><u>Bỏ (X)</u></a></Col>
                        </Row>

                        <Row>
                          <Col>
                            <a href="/" onClick={(e) => { e.preventDefault(); }} className='d-inline-block min-w-175px'><u>Lọc phòng thực hiện</u></a> <span className='text-danger'>---</span>
                          </Col>
                          <Col className='text-end'><a href="/" onClick={(e) => { e.preventDefault(); }} className="text-danger"><u>Bỏ (X)</u></a></Col>
                        </Row>

                        <Row>
                          <Col>
                            <a href="/" onClick={(e) => { e.preventDefault(); }} className='d-inline-block min-w-175px'><u>Lọc nhóm - loại dịch vụ</u></a> <span className='text-danger'>---</span>
                          </Col>
                          <Col className='text-end'><a href="/" onClick={(e) => { e.preventDefault(); }} className="text-danger"><u>Bỏ (X)</u></a></Col>
                        </Row>

                        <Row>
                          <Col>
                            <a href="/" onClick={(e) => { e.preventDefault(); }} className='d-inline-block min-w-175px'><u></u></a> <span className='text-danger'>---</span>
                          </Col>
                          <Col className='text-end'><a href="/" onClick={(e) => { e.preventDefault(); }} className="text-danger"><u></u></a></Col>
                        </Row>

                        <Row>
                          <Col>
                            <a href="/" onClick={(e) => { e.preventDefault(); }} className='d-inline-block min-w-175px'><u>Lọc dịch vụ</u></a> <span className='text-danger'>---</span>
                          </Col>
                          <Col className='text-end'><a href="/" onClick={(e) => { e.preventDefault(); }} className="text-danger"><u>Bỏ (X)</u></a></Col>
                        </Row>

                        <Row>
                          <Col>
                            <a href="/" onClick={(e) => { e.preventDefault(); }} className='d-inline-block min-w-175px'><u>Lọc thuốc, vật tư</u></a> <span className='text-danger'>---</span>
                          </Col>
                          <Col className='text-end'><a href="/" onClick={(e) => { e.preventDefault(); }} className="text-danger"><u>Bỏ (X)</u></a></Col>
                        </Row>

                        <Row>
                          <Col>
                            <a href="/" onClick={(e) => { e.preventDefault(); }} className='d-inline-block min-w-175px'><u>Lọc nhóm tài khoản</u></a> <span className='text-danger'>---</span>
                          </Col>
                          <Col className='text-end'><a href="/" onClick={(e) => { e.preventDefault(); }} className="text-danger"><u>Bỏ (X)</u></a></Col>
                        </Row>

                        <Row>
                          <Col>
                            <a href="/" onClick={(e) => { e.preventDefault(); }} className='d-inline-block min-w-175px'><u>Lọc đối tượng dịch vụ</u></a> <span className='text-danger'>---</span>
                          </Col>
                          <Col className='text-end'><a href="/" onClick={(e) => { e.preventDefault(); }} className="text-danger"><u>Bỏ (X)</u></a></Col>
                        </Row>

                        <Row>
                          <Col>
                            <a href="/" onClick={(e) => { e.preventDefault(); }} className='d-inline-block min-w-175px'><u>Lọc sổ thu</u></a> <span className='text-danger'>---</span>
                          </Col>
                          <Col className='text-end'><a href="/" onClick={(e) => { e.preventDefault(); }} className="text-danger"><u>Bỏ (X)</u></a></Col>
                        </Row>

                        <Row>
                          <Col>
                            <a href="/" onClick={(e) => { e.preventDefault(); }} className='d-inline-block min-w-175px'><u>Lọc thu ngân</u></a> <span className='text-danger'>---</span>
                          </Col>
                          <Col className='text-end'><a href="/" onClick={(e) => { e.preventDefault(); }} className="text-danger"><u>Bỏ (X)</u></a></Col>
                        </Row>

                        <Row>
                          <Col>
                            <a href="/" onClick={(e) => { e.preventDefault(); }} className='d-inline-block min-w-175px'><u>Lọc nhóm chi phí BHYT</u></a> <span className='text-danger'>---</span>
                          </Col>
                          <Col className='text-end'><a href="/" onClick={(e) => { e.preventDefault(); }} className="text-danger"><u>Bỏ (X)</u></a></Col>
                        </Row>

                        <Row>
                          <Col>
                            <a href="/" onClick={(e) => { e.preventDefault(); }} className='d-inline-block min-w-175px'><u>Lọc nhân viên chỉ định</u></a> <span className='text-danger'>---</span>
                          </Col>
                          <Col className='text-end'><a href="/" onClick={(e) => { e.preventDefault(); }} className="text-danger"><u>Bỏ (X)</u></a></Col>
                        </Row>

                        <Row>
                          <Col>
                            <a href="/" onClick={(e) => { e.preventDefault(); }} className='d-inline-block min-w-175px'><u>Lọc đối tượng BN</u></a> <span className='text-danger'>---</span>
                          </Col>
                          <Col className='text-end'><a href="/" onClick={(e) => { e.preventDefault(); }} className="text-danger"><u>Bỏ (X)</u></a></Col>
                        </Row>
                      </>
                    }

                    {CODE_LIST_BAO_CAO.BAO_CAO.DOANH_THU_THEO_DICH_VU_KY_THUAT === loaiPhieu &&
                      <>
                        <Row>
                          <Col xl={2}>Loại viện phí</Col>
                          <Col xl={2}><FormCheck type='checkbox' label="Ngoại trú" /></Col>
                          <Col xl={2}><FormCheck type='checkbox' label="Nội trú" /></Col>
                        </Row>

                        <Row className='mb-4'>
                          <Col xl={2}>Loại dịch vụ</Col>
                          <Col xl={2}><FormCheck type='checkbox' label="Đã thu tiền" /></Col>
                        </Row>

                        <Row>
                          <a href="/" onClick={(e) => { e.preventDefault(); }}><u>Lọc theo đối tượng bệnh nhân: Bảo hiểm; Viện phí; Yêu cầu</u></a>
                        </Row>

                        <Row>
                          <a href="/" onClick={(e) => { e.preventDefault(); }}><u>Lọc theo khoa y lệnh</u></a>
                        </Row>

                        <Row>
                          <a href="/" onClick={(e) => { e.preventDefault(); }}><u>Lọc theo phòng y lệnh</u></a>
                        </Row>
                      </>
                    }

                    {CODE_LIST_BAO_CAO.BAO_CAO.SU_DUNG_HOA_DON_DIEN_TU === loaiPhieu &&
                      <>
                        <Row className='mb-4'>
                          <Col xl={3}>
                            <FormCheck
                              type='radio'
                              className='d-flex'
                              label="Không nhóm dữ liệu" />
                          </Col>

                          <Col xl={3}>
                            <FormCheck
                              type='radio'
                              className='d-flex'
                              label="Nhóm theo ngày tạo" />
                          </Col>

                          <Col xl={3}>
                            <FormCheck
                              type='radio'
                              className='d-flex'
                              label="Nhóm theo người tạo" />
                          </Col>
                        </Row>

                        <Row>
                          <Col xl={3}>
                            <FormCheck
                              type='checkbox'
                              className='d-flex'
                              label="In chi tiết dịch vụ" />
                          </Col>

                          <Col xl={3}>
                            <FormCheck
                              type='checkbox'
                              className='d-flex'
                              label="Bỏ phiếu đã hủy" />
                          </Col>
                        </Row>
                      </>
                    }

                    {CODE_LIST_BAO_CAO.BAO_CAO.DS_PHOI_THANH_TOAN === loaiPhieu &&
                      <>
                        <Row>
                          <Col xl={3}>
                            <FormCheck
                              type='radio'
                              className='d-flex'
                              label="Không nhóm dữ liệu"
                            // name={MOC_THOI_GIAN.NGAY}
                            // value={MOC_THOI_GIAN.NGAY}
                            // checked={valueRadio === MOC_THOI_GIAN.NGAY}
                            // onChange={(e) => setValueRadio(e.target.value)}
                            />
                          </Col>

                          <Col xl={3}>
                            <FormCheck
                              type='radio'
                              className='d-flex'
                              label="Nhóm theo khoa"
                            />
                          </Col>

                          <Col xl={3}>
                            <FormCheck
                              type='radio'
                              className='d-flex'
                              label="Nhóm theo khoa y lệnh"
                            />
                          </Col>

                          <Col xl={3}><a href="/" onClick={(e) => { e.preventDefault(); }}><u>Lọc theo đối tượng bệnh nhân</u></a></Col>
                        </Row>

                        <Row>
                          <Col xl={3}>
                            <FormCheck
                              type='radio'
                              className='d-flex'
                              label="Nhóm theo phòng y lệnh"
                            />
                          </Col>

                          <Col xl={3}>
                            <FormCheck
                              type='radio'
                              className='d-flex'
                              label="Nhóm theo phòng thực hiện"
                            />
                          </Col>

                          <Col xl={3}>
                            <FormCheck
                              type='checkbox'
                              className='d-flex'
                              label="Chỉ in nhóm"
                            />
                          </Col>

                          <Col xl={3}><a href="/" onClick={(e) => { e.preventDefault(); }}><u>Lọc theo người duyệt thanh toán</u></a></Col>
                        </Row>

                        <Row>
                          <Col xl={3}>
                            <FormCheck
                              type='checkbox'
                              className='d-flex'
                              label="Khám bệnh"
                            />
                          </Col>

                          <Col xl={3}>
                            <FormCheck
                              type='checkbox'
                              className='d-flex'
                              label="Chưa duyệt kế toán"
                            />
                          </Col>

                          <Col xl={3}>
                            <FormCheck
                              type='checkbox'
                              className='d-flex'
                              label="Không thu, trả"
                            />
                          </Col>

                          <Col xl={3}><a href="/" onClick={(e) => { e.preventDefault(); }}><u>Lọc theo khoa</u></a></Col>
                        </Row>

                        <Row>
                          <Col xl={3}>
                            <FormCheck
                              type='checkbox'
                              className='d-flex'
                              label="Ngoại trú"
                            />
                          </Col>

                          <Col xl={3}>
                            <FormCheck
                              type='checkbox'
                              className='d-flex'
                              label="Chưa đóng bệnh án"
                            />
                          </Col>

                          <Col xl={3}>
                            <FormCheck
                              type='checkbox'
                              className='d-flex'
                              label="Thu thêm"
                            />
                          </Col>

                          <Col xl={3}><a href="/" onClick={(e) => { e.preventDefault(); }}><u>Lọc theo phòng</u></a></Col>
                        </Row>

                        <Row>
                          <Col xl={3}>
                            <FormCheck
                              type='checkbox'
                              className='d-flex'
                              label="Nội trú"
                            />
                          </Col>

                          <Col xl={3}></Col>

                          <Col xl={3}>
                            <FormCheck
                              type='checkbox'
                              className='d-flex'
                              label="Trả lại"
                            />
                          </Col>

                          <Col xl={3}><a href="/" onClick={(e) => { e.preventDefault(); }}><u>Lọc theo hình thức xử trí</u></a></Col>
                        </Row>

                        <Row>
                          <Col xl={3}></Col>

                          <Col xl={3}></Col>

                          <Col xl={3}></Col>

                          <Col xl={3}><a href="/" onClick={(e) => { e.preventDefault(); }}><u>Lọc theo đối tượng dịch vụ</u></a></Col>
                        </Row>
                      </>
                    }

                    {CODE_LIST_LO_LAI_PTTT.includes(loaiPhieu as string) &&
                      <>
                        <Row>
                          <Col xl={2}>
                            <FormCheck
                              type='radio'
                              className='d-flex'
                              label="Không nhóm dữ liệu"
                            />
                          </Col>

                          <Col xl={2}>
                            <FormCheck
                              type='radio'
                              className='d-flex'
                              label="Nhóm theo ngày"
                            />
                          </Col>

                          <Col xl={2}>
                            <FormCheck
                              type='radio'
                              className='d-flex'
                              label="Nhóm theo loại PTTT"
                            />
                          </Col>
                        </Row>

                        <Row className='mt-3'>
                          <Col xl={3}><a href='/' onClick={(e) => { e.preventDefault() }}><u>Lọc theo nhóm - loại dịch vụ</u></a></Col>
                          <Col xl={3}><a href='/' onClick={(e) => { e.preventDefault() }}><u>Lọc theo đối tượng dịch vụ</u></a></Col>
                          <Col xl={2}><a href='/' onClick={(e) => { e.preventDefault() }}><u>Lọc dịch vụ</u></a></Col>
                          <Col xl={2}><a href='/' onClick={(e) => { e.preventDefault() }}><u>Lọc theo khoa chỉ định</u></a></Col>
                          <Col xl={2}><a href='/' onClick={(e) => { e.preventDefault() }}><u>Lọc theo phòng chỉ định</u></a></Col>
                        </Row>

                        <Row className='mb-3'>
                          <Col xl={3}><a href='/' onClick={(e) => { e.preventDefault() }}><u>Lọc theo khoa nhập thông tin</u></a></Col>
                          <Col xl={3}><a href='/' onClick={(e) => { e.preventDefault() }}><u>Lọc theo đối tượng bệnh nhân</u></a></Col>
                          <Col xl={2}><a href='/' onClick={(e) => { e.preventDefault() }}><u>Lọc theo phòng thực hiện</u></a></Col>
                          <Col xl={3}><a href='/' onClick={(e) => { e.preventDefault() }}><u>Lọc theo phòng nhập thông tin</u></a></Col>
                        </Row>

                        <Row className='mb-3'>
                          <Col xl={2}>
                            <FormCheck
                              type='checkbox'
                              className='d-flex'
                              label="Khám bệnh"
                            />
                          </Col>

                          <Col xl={2}>
                            <FormCheck
                              type='checkbox'
                              className='d-flex'
                              label="Ngoại trú"
                            />
                          </Col>

                          <Col xl={2}>
                            <FormCheck
                              type='checkbox'
                              className='d-flex'
                              label="Nội trú"
                            />
                          </Col>
                        </Row>

                        <TableCustom columns={PTTTColumn} data={dataPTTT} selectionMode={SELECTION_MODE.MULTI} getSelectedRowsData={setSelectedRow} />
                      </>
                    }

                    {CODE_LIST_PHU_CAP_PTTT.includes(loaiPhieu as string) &&
                      <>
                        <Row>
                          <Col xl={3}>
                            <FormCheck type='radio' className='d-flex' label="Không nhóm dữ liệu" />
                          </Col>

                          <Col xl={3}>
                            <FormCheck type='radio' className='d-flex' label="Nhóm theo khoa thực hiện" />
                          </Col>

                          <Col xl={3}>
                            <FormCheck type='radio' className='d-flex' label="Nhóm theo nhân viên" />
                          </Col>
                        </Row>

                        <Row>
                          <Col xl={3}>
                            <FormCheck type='checkbox' className='d-flex' label="Trong giờ" />
                          </Col>

                          <Col xl={3}>
                            <FormCheck type='checkbox' className='d-flex' label="Ngoài giờ" />
                          </Col>

                          <Col xl={3}>
                            <FormCheck type='checkbox' className='d-flex' label="Nhóm nhân viên trong nhóm khoa" />
                          </Col>
                        </Row>

                        <Row>
                          <Col xl={3}><a href='/' onClick={(e) => { e.preventDefault() }}><u>Lọc theo khoa thực hiện</u></a></Col>
                          <Col xl={3}><a href='/' onClick={(e) => { e.preventDefault() }}><u>Lọc theo loại phẫu thuật, thủ thuật</u></a></Col>
                          <Col xl={3}><a href='/' onClick={(e) => { e.preventDefault() }}><u>Lọc theo loại bệnh án</u></a></Col>
                        </Row>
                        <Row>
                          <Col xl={3}><a href='/' onClick={(e) => { e.preventDefault() }}><u>Lọc theo khoa chỉ định</u></a></Col>
                          <Col xl={3}><a href='/' onClick={(e) => { e.preventDefault() }}><u>Lọc theo phòng chỉ định</u></a></Col>
                          <Col xl={3}><a href='/' onClick={(e) => { e.preventDefault() }}><u>Lọc theo khoa nhập thông tin</u></a></Col>
                          <Col xl={3}><a href='/' onClick={(e) => { e.preventDefault() }}><u>Lọc theo phòng nhập thông tin</u></a></Col>
                        </Row>
                        <Row>
                          <Col xl={3}><a href='/' onClick={(e) => { e.preventDefault() }}><u>Lọc theo nhân viên</u></a></Col>
                          <Col xl={3}><a href='/' onClick={(e) => { e.preventDefault() }}><u>Lọc theo dịch vụ</u></a></Col>
                        </Row>
                      </>
                    }

                    {CODE_LIST_HUONG_DAN_SU_DUNG.includes(loaiPhieu as string) &&
                      <>
                        <Row>
                          <Col xl={4} className='d-flex'>
                            <LabelRequired label='Nhóm dữ liệu' className='min-w-90px' />
                            <AutocompleteV2
                              options={[]}
                              name="nhomDuLieu"
                              className="autocomplete-custom-tiep-nhan radius spaces width-100 h-25 min-w-160"
                            />
                          </Col>

                          <Col>
                            <FormCheck type='checkbox' className='d-flex' label='Tiếp tục lấy báo cáo' />
                          </Col>
                        </Row>

                        <div>Lọc dữ liệu</div>
                        <TableCustom columns={locDuLieuColumn} data={locDuLieuData} />
                      </>
                    }

                    {
                      CODE_LIST_CONTEXT_VAT_TU.THE_KHO === loaiPhieu &&
                      <>
                        <Row>
                          <Col xl={3}><FormCheck type='checkbox' label="In gộp thuốc cùng mã" /></Col>
                          <Col xl={3}><FormCheck type='checkbox' label="In đơn giá" /></Col>
                          <Col xl={3}><FormCheck type='checkbox' label="In tên bệnh nhân" /></Col>
                          <Col xl={3}><FormCheck type='checkbox' label="In phòng chỉ định + tên bệnh nhân" /></Col>
                        </Row>

                        <Row>
                          <Col xl={3}><FormCheck type='radio' label="Định dạng word" /></Col>
                          <Col xl={3}><FormCheck type='radio' label="Định dạng excel" /></Col>
                        </Row>
                      </>
                    }
                  </fieldset>
                }

                {CODE_LIST_PATIENT.includes(loaiPhieu as string) &&
                  <fieldset className="scheduler-border">
                    <legend className="scheduler-border">Đối tượng bệnh nhân</legend>
                    <Row className='ps-3'><FormCheck type='checkbox' className='d-flex' label="Bệnh nhân đối tượng BHYT" /></Row>
                    <Row className='ps-3'><FormCheck type='checkbox' className='d-flex' label="Bệnh nhân không phải đổi tượng BHYT" /></Row>
                  </fieldset>
                }
              </Modal.Body>

              <Modal.Footer className='py-3 d-flex justify-content-between'>
                {CODE_LIST_TIEP_TUC_LAY_BAO_CAO.includes(loaiPhieu as string) ?
                  <FormCheck
                    type='checkbox'
                    className='d-flex form-check-label-red'
                    label="Tiếp tục lấy báo cáo"
                  />
                  :
                  <></>
                }

                {
                  CODE_LIST_HUONG_DAN_SU_DUNG.includes(loaiPhieu as string) ?
                    <Row>
                      <Col className='spaces min-w-160'>
                        <Button className='btn-fill '>Hướng dẫn sử dụng</Button>
                      </Col>
                      <Col>
                        <Button className='btn-fill'>Mẫu tùy chọn</Button>
                      </Col>
                    </Row>
                    :
                    <div></div>
                }

                <Button className='btn-fill' onClick={handleClickLuu}>Lưu</Button>
              </Modal.Footer>
            </>
          )}
        </Formik>
      </Modal>

      <ModalPhieuIn
        show={openPhieuIn}
        handleCloseDialog={() => setOpenPhieuIn(false)}
        title={renderPhieuIn(loaiPhieu as string)?.title}
        stylePrint={renderPhieuIn(loaiPhieu as string)?.stylePrint}
        size={renderPhieuIn(loaiPhieu as string)?.size}
      >
        {renderPhieuIn(loaiPhieu as string)?.component}
      </ModalPhieuIn>
    </>
  )
}

export default ModalTuyChonBaoCao