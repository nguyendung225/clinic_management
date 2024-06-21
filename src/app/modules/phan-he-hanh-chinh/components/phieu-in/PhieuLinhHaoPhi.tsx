import Signature from "../../../component/phieu-in/Signature"
import { styles } from "../../../component/phieu-in/constant"

type Props = {}

const PhieuLinhHaoPhi = (props: Props) => {
  return (
    <div>
      <div style={{ ...styles.fontSize_16, ...styles.d_flex_j_around, ...styles.marginBottom._5px }}>
        <div>
          <div style={{ ...styles.fontSize_16, ...styles.textUppercase }}>sở y tế</div>
          <div style={{ ...styles.fontSize_16, ...styles.textUppercase, ...styles.marginBottom._20px, ...styles.fontBold }}>bệnh viện đa khoa</div>
          <div style={{...styles.fontSize_16}}>Nơi nhập: <span style={{ ...styles.fontSize_16, ...styles.fontBold }}>Đơn nguyên sơ sinh</span></div>
          <div style={{...styles.fontSize_16}}>Nơi xuất: <span style={{ ...styles.fontSize_16, ...styles.fontBold }}>Kho thuốc nội trú</span></div>
        </div>

        <div>
          <div style={{...styles.fontSize_16}}>Số phiếu: <span style={{ ...styles.fontSize_16, ...styles.fontBold }}>000185</span></div>
          <div style={{...styles.fontSize_16}}>Ngày lập: <span style={{ ...styles.fontSize_16, ...styles.fontBold }}>06/03/2024</span></div>
          <div style={{...styles.fontSize_16}}>Lần in: <span style={{ ...styles.fontSize_16, ...styles.fontBold }}>1</span></div>
        </div>
      </div>

      <div style={{ ...styles.textAlign.center, ...styles.marginBottom._20px, ...styles.fontBold, ...styles.fontSize._24px }}>PHIẾU LĨNH HAO PHÍ</div>

      <div style={{ ...styles.fontSize_16, ...styles.w_100, ...styles.marginBottom._30px }}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={{ ...styles.fontSize_16, ...styles.border1, ...styles.textAlign.center }} rowSpan={2}>STT</th>
              <th style={{ ...styles.fontSize_16, ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._330px }} rowSpan={2}>Tên thuốc, hàm lượng</th>
              <th style={{ ...styles.fontSize_16, ...styles.border1, ...styles.textAlign.center }} rowSpan={2}>Đơn vị</th>
              <th style={{ ...styles.fontSize_16, ...styles.border1, ...styles.textAlign.center }} colSpan={2}>Số lượng</th>
              <th style={{ ...styles.fontSize_16, ...styles.border1, ...styles.textAlign.center }} rowSpan={2}>Đơn giá</th>
              <th style={{ ...styles.fontSize_16, ...styles.border1, ...styles.textAlign.center }} rowSpan={2}>Thành tiền</th>
            </tr>

            <tr>
              <th style={{ ...styles.fontSize_16, ...styles.border1, ...styles.textAlign.center }}>Yêu cầu</th>
              <th style={{ ...styles.fontSize_16, ...styles.border1, ...styles.textAlign.center }}>Phát</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={{ ...styles.fontSize_16, ...styles.border1, ...styles.textAlign.center }}>1</td>
              <td style={{ ...styles.fontSize_16, ...styles.border1 }}>Xatral XL 10mg</td>
              <td style={{ ...styles.fontSize_16, ...styles.border1, ...styles.textAlign.center }}>Viên</td>
              <td style={{ ...styles.fontSize_16, ...styles.border1, ...styles.textAlign.right }}>5</td>
              <td style={{ ...styles.fontSize_16, ...styles.border1, ...styles.textAlign.right }}>0</td>
              <td style={{ ...styles.fontSize_16, ...styles.border1, ...styles.textAlign.right }}>15.291</td>
              <td style={{ ...styles.fontSize_16, ...styles.border1, ...styles.textAlign.right }}>0</td>
            </tr>

            <tr>
              <td style={{ ...styles.fontSize_16, ...styles.border1 }}></td>
              <td style={{ ...styles.fontSize_16, ...styles.border1, ...styles.font_italic }}>Công khoản: 1</td>
              <td style={{ ...styles.fontSize_16, ...styles.border1 }}></td>
              <td style={{ ...styles.fontSize_16, ...styles.border1, ...styles.textAlign.right }}></td>
              <td style={{ ...styles.fontSize_16, ...styles.border1, ...styles.textAlign.right }}></td>
              <td style={{ ...styles.fontSize_16, ...styles.border1, ...styles.textAlign.right }}></td>
              <td style={{ ...styles.fontSize_16, ...styles.border1, ...styles.textAlign.right }}></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{...styles.d_flex_j_between }}>
        <Signature title="trưởng khoa dược" />
        <Signature title="người phát" />
        <Signature title="người lĩnh" />
        <Signature isDate title="trưởng khoa điều trị" />
      </div>
    </div>
  )
}

export default PhieuLinhHaoPhi