import Signature from '../../../component/phieu-in/Signature'
import { styles } from '../../../component/phieu-in/constant'

type Props = {}

const PhieuChuyenKhoa = (props: Props) => {
  return (
    <div>
      <div style={{...styles.d_flex_j_around, ...styles.marginBottom._10px}}>
        <div>
          <div style={{...styles.fontBold, ...styles.textUppercase, ...styles.fontSize_16}}>sở y tế</div>
          <div style={{...styles.fontBold, ...styles.textUppercase, ...styles.fontSize_16}}>bệnh viện đa khoa</div>
          <div style={{...styles.fontBold, ...styles.font_italic, ...styles.fontSize_16}}>Địa chỉ: Thành phố Hà Nội</div>
        </div>

        <div>
          <img style={{ width: "150px" }} src="/media/images/Barcode.png" alt="barcode" />
          <div style={{...styles.fontSize_16}}>Mã BN: <span style={{...styles.fontBold, ...styles.fontSize_16}}>1234567</span></div>
          <div style={{...styles.fontSize_16}}>Mã VP: <span style={{...styles.fontBold, ...styles.fontSize_16}}>223</span></div>
          <div style={{...styles.fontSize_16}}>Số phiếu: <span style={{...styles.fontBold, ...styles.fontSize_16}}>SK1234567</span></div>
        </div>
      </div>

      <div style={{...styles.marginBottom._10px}}>
        <div style={{...styles.fontBold, ...styles.textAlign.center, ...styles.fontSize._18px}}>PHIẾU CHUYÊN KHOA</div>
        <div
          style={{
            ...styles.d_flex,
            justifyContent: "center",
            margin: "5px 0 10px 0",
          }}
        >
          <span style={{
            marginRight: "10px",
            display: "flex"
          }}>
            Cấp cứu:&nbsp;
            <input type="checkbox" checked style={styles.checkbox_checked}></input>
          </span>
          <span style={{
            marginRight: "10px",
            display: "flex"
          }}>
            Thường:&nbsp;
            <input type="checkbox" style={styles.checkbox}></input>
          </span>
        </div>
      </div>

      <div>
        <div style={{...styles.d_flex, ...styles.marginBottom._5px}}>
          <div style={{...styles.fontSize_16, ...styles.minWidth._315px}}>Họ tên người bệnh: <span style={{...styles.fontSize_16, ...styles.fontBold,...styles.textUppercase }}>Trần Quang Bá</span></div>
          <div style={{...styles.fontSize_16, ...styles.minWidth._175px}}>Năm sinh: <span style={{...styles.fontSize_16, ...styles.fontBold}}>1998(26 tuổi)</span></div>
          <div style={{...styles.fontSize_16}}>Giới tính: <span style={{...styles.fontSize_16, ...styles.fontBold}}>Nam</span></div>
        </div>

        <div style={{...styles.fontSize_16, ...styles.marginBottom._5px}}>Địa chỉ: Phường Quán Thánh, Quận Ba Đình, Thành phố Hà Nội</div>

        <div style={{...styles.fontSize_16, ...styles.marginBottom._5px}}>Nơi điều trị: <span style={{...styles.fontSize_16, ...styles.fontBold}}>Điều trị Truyền nhiễm</span></div>

        <div>
          <div style={{...styles.fontSize_16, ...styles.marginBottom._5px}}>Phòng bệnh: <span style={{...styles.fontSize_16, ...styles.fontBold}}>Buồng 103A</span></div>
          <div style={{...styles.fontSize_16, ...styles.marginBottom._5px}}>Giường bệnh: <span style={{...styles.fontSize_16, ...styles.fontBold}}>Giường H043</span></div>
        </div>

        <div style={{...styles.fontSize_16, ...styles.marginBottom._5px}}>Chẩn đoán: Z40.8-Phẫu thuật dự phòng khác</div>

        <div style={{...styles.fontSize_16, ...styles.marginBottom._10px}}>Ghi chú:</div>
      </div>

      <div style={{...styles.w_100, ...styles.marginBottom._20px}}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={{...styles.border1, ...styles.textAlign.center}}>YÊU CẦU</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={{...styles.border1}}>
                <div>1. Phẫu thuật định hình mũi</div>
                <div>2. Phẫu thuật nâng ngực</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{...styles.d_flex_j_end, ...styles.paddingRight._30px}}>
        <Signature title='Bác sĩ chỉ định' isDate date={new Date()} isHours/>
      </div>
    </div>
  )
}

export default PhieuChuyenKhoa