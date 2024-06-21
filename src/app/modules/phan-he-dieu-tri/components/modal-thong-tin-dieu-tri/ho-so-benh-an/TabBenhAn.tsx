import React from 'react'
import CustomTextarea from '../../../../component/custom-textarea/CustomTextarea'
import LabelRequired from '../../../../component/LabelRequired'
import TextValidator from '../../../../component/TextValidator'
import { TableCustom } from '../../../../component/table/table-custom/TableCustom'
import { dacDiemBenhColumn } from '../../../columns/DsBenhNhanColumn'
import { dacDiemLienQuanBenh, dacDiemLienQuanBenh2 } from '../../../constants/ConstantPhanHeDieuTri'
import { Col, Row } from 'react-bootstrap'

type Props = {}

const TabBenhAn = (props: Props) => {
  return (
    <div className="p-6 overflow-auto spaces h-calc-vh-227">
      <div className='d-flex'>
        <div className="d-flex align-items-center spaces h-29">
          <LabelRequired label="I. LÝ DO VÀO VIỆN" className=" mb-2 min-w-120 spaces text-danger fw-bold" />
          <CustomTextarea className='min-w-225px' />
        </div>

        <div className="d-flex align-items-center spaces h-29">
          <LabelRequired label="Vào ngày thứ" className="min-w-85px mb-1" />
          <CustomTextarea />
          <LabelRequired label="của bệnh" className="min-w-70px mb-1" />
        </div>
      </div>

      <div className='d-flex align-items-center'>
        <div className="text-danger fw-bold spaces min-w-345">II. HỎI BỆNH</div>

        <div className="d-flex align-items-center gap-2">
          <LabelRequired label="Nhóm máu" className="min-w-70px" />
          <TextValidator className="spaces W-75 text-center" />
        </div>

        <div className="d-flex align-items-center gap-2 ms-2">
          <LabelRequired label="RH" className="min-w-20px" />
          <TextValidator className="spaces W-75 text-center" />
        </div>
      </div>

      <div className='mt-2'>
        <div className='fw-bold'>1. Quá trình bệnh lý: <span className='fst-italic fw-semibold'>(khởi phát, diễn biễn, chẩn đoán, điều trị của tuyến dưới v.v...)</span></div>
        <TextValidator as="textarea" rows={3} />
      </div>

      <div className='mt-2'>
        <div className='fw-bold'>2. Tiền sử bệnh</div>
        <div className='fw-bold ms-1'>&bull; Bản thân: <span className='fst-italic fw-semibold'>(phát triển thể lực từ nhỏ đến lớn, những bệnh đã mắc, phương pháp ĐT, tiêm phong, ăn uống, sinh hoạt v.v...)</span></div>
        <TextValidator as="textarea" rows={3} />
      </div>

      <div className='mt-2'>
        <div className='fw-bold'>Đặc điểm liên quan bệnh:</div>

        <div className='d-flex gap-5'>
          <TableCustom columns={dacDiemBenhColumn} data={dacDiemLienQuanBenh} />
          <TableCustom columns={dacDiemBenhColumn} data={dacDiemLienQuanBenh2} />
        </div>
      </div>

      <div className='mt-2'>
        <div className='fw-bold ms-1'>&bull; Gia đình: <span className='fst-italic fw-semibold'>(Những người trong gia đình: bệnh đã mắc, đời sống, tinh thần, vật chất v.v...)</span></div>
        <TextValidator as="textarea" rows={3} />
      </div>

      <Row className='d-flex mt-2'>
        <Col xs={8}>
          <div className="text-danger fw-bold spaces min-w-345">III. KHÁM BỆNH</div>
          <div className='fw-bold'>1. Toàn thân:</div>
          <div className='fst-italic'>(da niêm mạc, hệ thống hạch, tuyến giáp, vị trí, kích thước, số lượng, di động v.v...)</div>
          <TextValidator as="textarea" rows={5} />
        </Col>

        <Col xs={4}>
          <div className='text-center'>
            <a href="/" onClick={(e) => { e.preventDefault() }}><u>Cập nhật từ phiếu điều trị</u></a>
          </div>
          <div className='border p-2'>
            <div className='d-flex justify-content-between align-items-center spaces h-25'>
              <div className='d-flex'>
                <LabelRequired label="Mạch" className='mb-1 min-w-80px' />
                <CustomTextarea />
              </div>

              <div className='fst-italic mb-1'>lần/phút</div>
            </div>

            <div className='d-flex justify-content-between align-items-center spaces h-25'>
              <div className='d-flex'>
                <LabelRequired label="Nhiệt độ" className='mb-1 min-w-80px' />
                <CustomTextarea />
              </div>

              <div className='fst-italic mb-1'>°C</div>
            </div>

            <div className='d-flex justify-content-between align-items-center spaces h-25'>
              <div className='d-flex'>
                <LabelRequired label="Huyết áp" className='mb-1 min-w-80px' />
                <CustomTextarea /> /
                <CustomTextarea />
              </div>

              <div className='fst-italic mb-1'>mmHG</div>
            </div>

            <div className='d-flex justify-content-between align-items-center spaces h-25'>
              <div className='d-flex'>
                <LabelRequired label="Nhịp thở" className='mb-1 min-w-80px' />
                <CustomTextarea />
              </div>

              <div className='fst-italic mb-1'>lần/phút</div>
            </div>

            <div className='d-flex justify-content-between align-items-center spaces h-25'>
              <div className='d-flex'>
                <LabelRequired label="Chiều cao" className='mb-1 min-w-80px' />
                <CustomTextarea />
              </div>

              <div className='fst-italic mb-1'>cm</div>
            </div>

            <div className='d-flex justify-content-between align-items-center spaces h-25'>
              <div className='d-flex'>
                <LabelRequired label="Cân nặng" className='mb-1 min-w-80px' />
                <CustomTextarea />
              </div>

              <div className='fst-italic mb-1'>kg</div>
            </div>
          </div>
        </Col>
      </Row>

      <div className='fw-bold'>2. Các cơ quan:</div>

      <div className="mt-2">
        <div className='fw-bold ms-1'>&bull; Tuần hoàn:</div>
        <TextValidator as="textarea" rows={3} />
      </div>

      <div className="mt-2">
        <div className='fw-bold ms-1'>&bull; Hô hấp:</div>
        <TextValidator as="textarea" rows={3} />
      </div>

      <div className="mt-2">
        <div className='fw-bold ms-1'>&bull; Tiêu hóa:</div>
        <TextValidator as="textarea" rows={3} />
      </div>

      <div className="mt-2">
        <div className='fw-bold ms-1'>&bull; Thận - Tiết niệu - Sinh dục:</div>
        <TextValidator as="textarea" rows={3} />
      </div>

      <div className="mt-2">
        <div className='fw-bold ms-1'>&bull; Thần kinh:</div>
        <TextValidator as="textarea" rows={3} />
      </div>

      <div className="mt-2">
        <div className='fw-bold ms-1'>&bull; Cơ - Xương - Khớp:</div>
        <TextValidator as="textarea" rows={3} />
      </div>

      <div className="mt-2">
        <div className='fw-bold ms-1'>&bull; Tai - Mũi - Họng:</div>
        <TextValidator as="textarea" rows={3} />
      </div>

      <div className="mt-2">
        <div className='fw-bold ms-1'>&bull; Răng - Hàm - Mặt:</div>
        <TextValidator as="textarea" rows={3} />
      </div>

      <div className="mt-2">
        <div className='fw-bold ms-1'>&bull; Mắt:</div>
        <TextValidator as="textarea" rows={3} />
      </div>

      <div className="mt-2">
        <div className='fw-bold ms-1'>&bull; Nội tiết, dinh dưỡng và các bệnh lý khác:</div>
        <TextValidator as="textarea" rows={3} />
      </div>

      <div className="mt-2">
        <div className='d-flex'>
          <div className='fw-bold ms-1 spaces pr-50'>3. Các xét nghiệm cận lâm sàng cần làm:</div>
          <a href="/" onClick={(e) => { e.preventDefault() }}><u>Chọn dịch vụ</u></a>
        </div>
        <TextValidator as="textarea" rows={3} />
      </div>

      <div className="mt-2">
        <div className='fw-bold ms-1'>4. Tóm tắt bệnh án:</div>
        <TextValidator as="textarea" rows={3} />
      </div>

      <div className="text-danger fw-bold mt-2">IV. CHẨN ĐOÁN KHI VÀO KHOA ĐIỀU TRỊ</div>

      <div className="mt-2 d-flex">
        <div className='fw-bold ms-1 min-w-95px'>&bull; Bệnh chính:</div>
        <TextValidator className="spaces min-w-135" classGroup="spaces bottom-7" />
        <CustomTextarea bottom={14} />
      </div>

      <div>
        <div className='fw-bold ms-1 min-w-95px'>&bull; <a href="/" onClick={(e) => { e.preventDefault() }}><u>Bệnh kèm theo (nếu có):</u></a></div>
        <TextValidator as="textarea" rows={3} />
      </div>

      <div className="mt-2 d-flex">
        <div className='fw-bold ms-1 min-w-95px'>&bull; Phân biệt:</div>
        <CustomTextarea bottom={15} />
      </div>

      <div>
        <div className="text-danger fw-bold mt-2">V. TIÊN LƯỢNG</div>
        <TextValidator as="textarea" rows={3} />
      </div>

      <div>
        <div className="text-danger fw-bold mt-2">VI. HƯỚNG ĐIỀU TRỊ</div>
        <TextValidator as="textarea" rows={3} />
      </div>
    </div>
  )
}

export default TabBenhAn