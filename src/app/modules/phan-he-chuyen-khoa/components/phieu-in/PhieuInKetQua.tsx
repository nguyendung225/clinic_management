import React from 'react'
import { styles } from '../../../component/phieu-in/constant'
import Signature from '../../../component/phieu-in/Signature'

type Props = {}

const PhieuInKetQua = (props: Props) => {
  return (
    <div>
      <div style={{ ...styles.d_flex_j_around, ...styles.marginBottom._5px }}>
        <div>
          <div style={{ ...styles.fontBold, ...styles.textUppercase, ...styles.fontSize_16 }}>Sở y tế</div>
          <div style={{ ...styles.fontBold, ...styles.textUppercase, ...styles.fontSize_16 }}>Bệnh viện đa khoa</div>
          <div style={{ ...styles.fontBold, ...styles.font_italic, ...styles.fontSize_16 }}>Địa chỉ: Thành phố Hà Nội</div>
        </div>

        <div>
          <div style={{ ...styles.width._120px }}><img style={{ ...styles.w_100 }} src="/media/images/Barcode.png" alt="" /></div>
          <div style={{ ...styles.fontSize_16 }}>Mã BN: <span style={{ ...styles.fontBold, ...styles.fontSize_16 }}>2400006</span></div>
          <div style={{ ...styles.fontSize_16 }}>Mã VP: <span style={{ ...styles.fontBold, ...styles.fontSize_16 }}>189</span></div>
          <div style={{ ...styles.fontSize_16 }}>Số phiếu: <span style={{ ...styles.fontBold, ...styles.fontSize_16 }}>CK2402.09</span></div>
        </div>
      </div>

      <div style={{ ...styles.fontBold, ...styles.textUppercase, ...styles.textAlign.center, ...styles.marginBottom._10px, ...styles.fontSize_16 }}>Phiếu kết quả phẫu thuật nâng ngực</div>

      <div style={{ ...styles.d_flex, ...styles.marginBottom._5px }}>
        <div style={{ ...styles.minWidth._275px, ...styles.fontSize_16 }}>Họ tên người bệnh: <span style={{ ...styles.fontBold, ...styles.textUppercase, ...styles.fontSize_16 }}>Trần Miến</span></div>
        <div style={{ ...styles.minWidth._180px, ...styles.fontSize_16 }}>Năm sinh: <span style={{ ...styles.fontBold, ...styles.fontSize_16 }}>2000 (24 tuổi)</span></div>
        <div style={{ ...styles.fontSize_16 }}>Giới tính: <span style={{ ...styles.fontBold, ...styles.fontSize_16 }}>Nam</span></div>
      </div>

      <div style={{ ...styles.marginBottom._5px, ...styles.fontSize_16 }}>Địa chỉ: Phường Quán Thánh, Quận Ba Đình, Thành Phố Hà Nội</div>

      <div style={{ ...styles.d_flex, ...styles.marginBottom._5px }}>
        <div style={{ ...styles.minWidth._385px, ...styles.fontSize_16 }}>Bác sĩ chỉ định: <span style={{ ...styles.fontBold, ...styles.fontSize_16 }}>Nguyễn Văn A</span></div>
        <div style={{ ...styles.fontSize_16 }}>Nơi chỉ định: <span style={{ ...styles.fontBold, ...styles.fontSize_16 }}>Phòng khám ngoại (NGOẠI VIỆN)</span></div>
      </div>

      <div style={{ ...styles.d_flex, ...styles.marginBottom._5px }}>
        <div style={{ ...styles.minWidth._385px, ...styles.fontSize_16 }}>Phòng điều trị: <span style={{ ...styles.fontBold, ...styles.fontSize_16 }}>101</span></div>
        <div style={{ ...styles.fontSize_16 }}>Giường: <span style={{ ...styles.fontBold, ...styles.fontSize_16 }}>1</span></div>
      </div>

      <div style={{ ...styles.marginBottom._5px, ...styles.fontSize_16 }}>Chẩn đoán: Bị thương</div>

      <div style={{ ...styles.marginBottom._5px, ...styles.fontSize_16 }}>Kỹ thuật chỉ định: Phẫu thuật nâng ngực</div>

      <div style={{ ...styles.fontBold, ...styles.textAlign.center, ...styles.fontSize_16 }}>KẾT QUẢ</div>

      <div style={styles.d_flex_j_end}>
        <Signature style={styles.paddingRight._115px} title="bác sĩ" date={new Date()} />
      </div>
    </div>
  )
}

export default PhieuInKetQua