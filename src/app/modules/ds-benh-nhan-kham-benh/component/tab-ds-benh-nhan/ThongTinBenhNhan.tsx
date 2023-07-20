import React from 'react'
import { Row } from 'react-bootstrap'

type Props = {}

const ThongTinBenhNhan = (props: Props) => {
    return (
        <div className="">
            <div className="d-flex">
                <label className='col-sm-3 label-fw'>Đã khám: </label>
                <p className='m-0 text-pri col-sm-7'>Tổng số: 0 BHYT: 0 VPI: 0</p>
            </div>
            <div className="d-flex pt-2">
                <label className='label-fw'>Mã bệnh nhân:</label>
            </div>
            <div className="d-flex pt-2">
                <label className='label-fw'>Tổng chi phí:</label>
            </div>
            <div className="d-flex pt-2">
                <label className='label-fw'>Đã nộp:</label>
            </div>
            <div className="d-flex pt-2">
                <label className='label-fw'>Tiền tạm ứng:</label>
            </div>
            <hr />
            <div className="d-flex">
                <label className='label-fw'>Họ và tên: </label>
            </div>
            <div className="d-flex pt-2">
                <label className='label-fw'>Địa chỉ:</label>
            </div>
            <div className="d-flex pt-2">
                <label className='col-sm-7 label-fw'>Ngày sinh:</label>
                <label className='col-sm-3 label-fw'>Giới tính:</label>
            </div>
            <div className="d-flex pt-2">
                <label className='label-fw'>Yêu cầu khám:</label>
            </div>
            <div className="d-flex pt-2">
                <label className='label-fw'>Đối tượng:</label>
            </div>
            <div className="d-flex pt-2">
                <label className='col-sm-7 label-fw'>Thời hạn BHYT:</label>
                <label className='col-sm-3 label-fw'>Tuyến:</label>
            </div>
            <div className="d-flex pt-2">
                <label className='label-fw'>Số thẻ BHYT:</label>
            </div>
            <div className="d-flex pt-2">
                <label className='label-fw'>Nơi KCBBĐ:</label>
            </div>
            <div className="d-flex pt-2">
                <label className='label-fw'>Xử trí:</label>
            </div>
            <div className="d-flex pt-2">
                <label className='label-fw'>Chẩn đoán TD:</label>
            </div>
            <div className="d-flex pt-2">
                <label className='label-fw'>Chẩn đoán chính:</label>
            </div>
            <div className="d-flex pt-2">
                <label className='label-fw'>Chẩn đoán phụ:</label>
            </div>
        </div>
    )
}

export default ThongTinBenhNhan;