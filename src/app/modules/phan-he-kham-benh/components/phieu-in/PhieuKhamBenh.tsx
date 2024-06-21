import React from 'react'
import { styles } from '../../../component/phieu-in/constant'
import Signature from '../../../component/phieu-in/Signature'

type Props = {}

const PhieuKhamBenh = (props: Props) => {
  return (
    <div>
      <div style={{...styles.d_flex_j_between, ...styles.marginBottom._20px}}>
        <div style={styles.paddingLeft._215px}>
          <div style={{ ...styles.fontBold, ...styles.textUppercase, ...styles.fontSize_16, ...styles.textAlign.center }}>Sở y tế Hà Nội</div>
          <div style={{ ...styles.fontBold, ...styles.textUppercase, ...styles.fontSize_16, ...styles.textAlign.center }}>Bệnh viện đa khoa</div>
        </div>
        <div>
          <div style={{ ...styles.fontBold, ...styles.fontSize_16, ...styles.textAlign.right }}>Mã BN: 24000143</div>
          <div style={{ ...styles.fontBold, ...styles.fontSize_16, ...styles.textAlign.right }}>Mã LK: 322</div>
        </div>
      </div>

      <div style={{ ...styles.fontBold, ...styles.textAlign.center, ...styles.fontSize._16px, ...styles.borderBottom, ...styles.marginBottom._20px }}>PHIẾU CHỈ ĐỊNH KHÁM BỆNH</div>

      <div>
        <div style={styles.d_flex}>
          <div style={{...styles.fontSize_16}}>Người bệnh: <span style={{ ...styles.fontBold, ...styles.fontSize_16, ...styles.textUppercase }}>Trần Quang Bá</span></div>
          <div style={{...styles.fontSize_16}}>Năm sinh: <span style={{ ...styles.fontBold, ...styles.fontSize_16}}>1998 (26 tuổi)</span></div>
          <div style={{...styles.fontSize_16}}>Giới tính: Nam</div>
        </div>
        <div style={{...styles.fontSize_16}}>Địa chỉ: Phường Quán Thánh, Quận Ba Đình, Thành phố Hà Nội</div>
        <div>
          <div style={{...styles.fontSize_16}}>Nơi chỉ định: <span style={{ ...styles.fontBold, ...styles.fontSize_16}}>Điều trị truyền nhiễm</span></div>
          <div style={{...styles.fontSize_16}}>Đối tượng</div>
        </div>
        <div style={{...styles.fontSize_16}}>Chẩn đoán:</div>
        <div style={{...styles.fontSize_16}}>Lý do:</div>
        <div style={{...styles.fontSize_16, ...styles.marginBottom._20px}}>Ghi chú:</div>
      </div>

      <div style={{ ...styles.w_100, ...styles.marginBottom._20px }}>
        <table style={{ ...styles.table }}>
          <thead>
            <tr>
              <th style={{...styles.border1, ...styles.textAlign.center}}>STT</th>
              <th style={{...styles.border1, ...styles.textAlign.center}}>Nội dung</th>
              <th style={{...styles.border1, ...styles.textAlign.center}}>SL</th>
              <th style={{...styles.border1, ...styles.textAlign.center}}>Nơi thực hiện</th>
              <th style={{...styles.border1, ...styles.textAlign.center}}>Khẩn</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={{...styles.border1, ...styles.fontBold}} colSpan={5}>Khám bệnh</td>
            </tr>
            <tr>
              <td style={{...styles.border1, ...styles.textAlign.center}}>1</td>
              <td style={{...styles.border1}}>Khám lâm sàng chung</td>
              <td style={{...styles.border1, ...styles.textAlign.center}}>1</td>
              <td style={{...styles.border1}}>Điều Trị Truyền Nhiễm</td>
              <td style={{...styles.border1}}></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{...styles.d_flex_j_end}}>
        <Signature style={{...styles.paddingRight._70px}} title='Bác sĩ chỉ định' isDate date={new Date()} />
      </div>
    </div>
  )
}

export default PhieuKhamBenh