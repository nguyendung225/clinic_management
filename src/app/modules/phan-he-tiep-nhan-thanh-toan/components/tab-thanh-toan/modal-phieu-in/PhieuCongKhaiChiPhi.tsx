import React from 'react'
import { styles } from '../../../../component/phieu-in/constant'
import moment from 'moment'
import Signature from '../../../../component/phieu-in/Signature'

type Props = {}

const PhieuCongKhaiChiPhi = (props: Props) => {
  return (
    <div>
      <div style={{ ...styles.d_flex_j_between }}>
        <div>
          <div>Bộ Y tế (Sở Y tế): SỞ Y TẾ TEST</div>
          <div>BV: BỆNH VIỆN ĐA KHOA TEST</div>
          <div>Khoa: Khoa khám bệnh</div>
        </div>

        <div></div>
      </div>

      <div style={{...styles.textAlign.center, ...styles.fontBold, ...styles.marginBottom._20px}}>PHIẾU CÔNG KHAI DỊCH VỤ KHÁM, CHỮA BỆNH NỘI TRÚ</div>
      
      <div>Họ tên người bệnh: <span style={{...styles.textUppercase}}>Thùy anh</span></div>
      <div style={{...styles.d_flex_j_between}}>
        <div>Ngày sinh: 2000</div>
        <div>Giới tính: Nam</div>
        <div>Số giường: </div>
        <div>Số buồng</div>
        <div>Ngày vào viện: {moment().format("DD/MM/YYYY")}</div>
      </div>

      <div>Chuẩn đoán:</div>

      <div>
        <table style={{borderCollapse: "collapse", width: "100%"}}>
          <thead>
            <tr>
              <th style={{...styles.border1, ...styles.textAlign.center, ...styles.width._30px}} rowSpan={2}>STT</th>
              <th style={{...styles.border1, ...styles.textAlign.center, ...styles.width._220px}} rowSpan={2}>Tên dịch vụ khám bệnh, chữa bệnh</th>
              <th style={{...styles.border1, ...styles.textAlign.center, ...styles.minWidth._40px}} rowSpan={2}>Đơn vị</th>
              <th style={{...styles.border1, ...styles.textAlign.center, ...styles.minWidth._630px}} colSpan={20}>Số lượng (theo ngày/tháng)</th>
              <th style={{...styles.border1, ...styles.textAlign.center, ...styles.minWidth._75px}} rowSpan={2}>Ghi chú</th>
            </tr>
            
            <tr>
              <th style={{...styles.border1, ...styles.textAlign.center, ...styles.minWidth._35px}}>23.01</th>
              <th style={{...styles.border1, ...styles.textAlign.center, ...styles.minWidth._35px}}></th>
              <th style={{...styles.border1, ...styles.textAlign.center, ...styles.minWidth._35px}}></th>
              <th style={{...styles.border1, ...styles.textAlign.center, ...styles.minWidth._35px}}></th>
              <th style={{...styles.border1, ...styles.textAlign.center, ...styles.minWidth._35px}}></th>
              <th style={{...styles.border1, ...styles.textAlign.center, ...styles.minWidth._35px}}></th>
              <th style={{...styles.border1, ...styles.textAlign.center, ...styles.minWidth._35px}}></th>
              <th style={{...styles.border1, ...styles.textAlign.center, ...styles.minWidth._35px}}></th>
              <th style={{...styles.border1, ...styles.textAlign.center, ...styles.minWidth._35px}}></th>
              <th style={{...styles.border1, ...styles.textAlign.center, ...styles.minWidth._35px}}></th>
              <th style={{...styles.border1, ...styles.textAlign.center, ...styles.minWidth._35px}}></th>
              <th style={{...styles.border1, ...styles.textAlign.center, ...styles.minWidth._35px}}></th>
              <th style={{...styles.border1, ...styles.textAlign.center, ...styles.minWidth._35px}}></th>
              <th style={{...styles.border1, ...styles.textAlign.center, ...styles.minWidth._35px}}></th>
              <th style={{...styles.border1, ...styles.textAlign.center, ...styles.minWidth._35px}}></th>
              <th style={{...styles.border1, ...styles.textAlign.center, ...styles.minWidth._35px}}></th>
              <th style={{...styles.border1, ...styles.textAlign.center, ...styles.minWidth._35px}}></th>
              <th style={{...styles.border1, ...styles.textAlign.center, ...styles.minWidth._35px}}></th>
              <th style={{...styles.border1, ...styles.textAlign.center, ...styles.minWidth._35px}}></th>
              <th style={{...styles.border1, ...styles.textAlign.center, ...styles.minWidth._35px}}></th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={{...styles.border1}} colSpan={24}>I. Xét nghiệm</td>
            </tr>

            <tr>
                <td style={{...styles.border1}}>1</td>
                <td style={{...styles.border1}}>Double Test</td>
                <td style={{...styles.border1}}>Lần</td>
                <td style={{...styles.border1}}>1</td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
            </tr>

            <tr>
                <td style={{...styles.borderRightNone}}></td>
                <td style={{...styles.borderLeftNone}}>Người lập</td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
            </tr>

            <tr>
                <td style={{...styles.borderRightNone}}></td>
                <td style={{...styles.borderLeftNone}}><div style={{...styles.marginBottom._30px}}>Xác nhận người bệnh</div> <div style={{...styles.marginBottom._30px}}>Xác nhận người nhà</div></td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
                <td style={{...styles.border1}}></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{...styles.textAlign.right, ...styles.paddingRight._75px}}>
        Ngày 23 tháng 01 năm 2024
      </div>
    </div>
  )
}

export default PhieuCongKhaiChiPhi