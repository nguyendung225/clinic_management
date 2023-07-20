import React from 'react'
import { Form, Row } from 'react-bootstrap'

type Props = {}

const ThongTinDieuTri = (props: Props) => {
    return (
        <div className="">
            <h2>Thông tin điều trị</h2>
            <div className="d-flex">
                <label>Lý do vào viện:</label>
            </div>
            <div className="d-flex pt-2">
                <label>Chuẩn đoán vào viện:</label>
            </div>
            <div className="d-flex pt-2">
                <label>Chuẩn đoán điều trị:</label>
            </div>
            <hr />
            <div className="d-flex">
                <label>Họ và tên: </label>
            </div>
            <div className="d-flex pt-2">
                <label>Địa chỉ:</label>
            </div>
            <div className="d-flex pt-2">
                <label className='col-sm-7'>Ngày sinh:</label>
                <label className='col-sm-3'>Giới tính:</label>
            </div>
            <div className="d-flex pt-2">
                <label>Đối tượng:</label>
            </div>
            <div className="d-flex pt-2">
                <label className='col-sm-7'>Số thẻ BHYT:</label>
                <label className='col-sm-3'>Tuyến:</label>
            </div>
            <div className="d-flex pt-2 flex-space-between">
                <label >Bảo hiểm:</label>
                <Form.Check
                    className='customs-form-check'
                    label={"5 năm"}
                />
                <Form.Check
                    className='customs-form-check spaces pr-30'
                    label={"6 tháng"}
                />
            </div>
            <div className="d-flex pt-2">
                <label className='col-sm-7'>Vào khoa:</label>
                <label className='col-sm-3'>Ra khoa:</label>
            </div>
            <div className="d-flex pt-2">
                <label>Ngày ra viện:</label>
            </div>
            <div className="d-flex pt-2">
                <label>Kết quả điều trị:</label>
            </div>
            <div className="d-flex pt-2">
                <label className='col-sm-7'>Tạm ứng:</label>
                <label className='col-sm-3'>Tổng:</label>
            </div>
            <div className="d-flex pt-2">
                <label className='col-sm-7'>BH thanh toán:</label>
                <label className='col-sm-3'>Đã nộp:</label>
            </div>
        </div>
    )
}

export default ThongTinDieuTri;