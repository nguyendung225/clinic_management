import moment from 'moment'
import Signature from '../../../component/phieu-in/Signature'
import { styles } from '../../../component/phieu-in/constant'

type Props = {}

const PhieuPhauThuat = (props: Props) => {
  return (
    <div>
      <div style={{ ...styles.d_flex_j_between, ...styles.marginBottom._5px }}>
        <div style={{...styles.paddingLeft._130px}}>
          <div style={{...styles.textUppercase, ...styles.fontSize_16 }}>Sở y tế</div>
          <div style={{ ...styles.fontBold, ...styles.textUppercase, ...styles.fontSize_16 }}>Bệnh viện đa khoa</div>
          <div style={{ ...styles.fontSize_16 }}>Khoa khám bệnh</div>
        </div>

        <div style={{...styles.textAlign.right}}>
          <div style={{ ...styles.fontBold, ...styles.fontSize_16 }}>MS: CK2402.09</div>
          <div style={{ ...styles.width._120px }}><img style={{ ...styles.w_100 }} src="/media/images/Barcode.png" alt="" /></div>
          <div style={{ ...styles.fontSize_16 }}>Mã BN: <span style={{ ...styles.fontBold, ...styles.fontSize_16 }}>2400006</span></div>
          <div style={{ ...styles.fontSize_16 }}>Mã VP: <span style={{ ...styles.fontBold, ...styles.fontSize_16 }}>189</span></div>
        </div>
      </div>

      <div style={{ ...styles.fontBold, ...styles.textUppercase, ...styles.textAlign.center, ...styles.marginBottom._10px, ...styles.fontSize_16 }}>Phiếu tường trình phẫu thuật/thủ thuật</div>

      <div style={{ ...styles.d_flex, ...styles.marginBottom._5px }}>
        <div style={{ ...styles.minWidth._275px, ...styles.fontSize_16 }}>- Họ tên người bệnh: <span style={{ ...styles.fontBold, ...styles.textUppercase, ...styles.fontSize_16 }}>Trần Miến</span></div>
        <div style={{ ...styles.minWidth._180px, ...styles.fontSize_16 }}>Năm sinh: <span style={{ ...styles.fontBold, ...styles.fontSize_16 }}>2000</span></div>
        <div style={{ ...styles.fontSize_16 }}>Giới tính: <span style={{ ...styles.fontBold, ...styles.fontSize_16 }}>Nam</span></div>
      </div>

      <div style={{ ...styles.d_flex, ...styles.marginBottom._5px }}>
        <div style={{ ...styles.minWidth._275px, ...styles.fontSize_16 }}>- Khoa: <span style={{ ...styles.fontBold, ...styles.fontSize_16 }}>Khoa khám bệnh</span></div>
        <div style={{ ...styles.fontSize_16, ...styles.minWidth._180px }}>Buồng: <span style={{ ...styles.fontBold, ...styles.fontSize_16 }}>1</span></div>
        <div style={{ ...styles.fontSize_16 }}>Giường: <span style={{ ...styles.fontBold, ...styles.fontSize_16 }}>1</span></div>
      </div>

      <div style={{...styles.fontSize_16}}>- Khởi mê: <span>Bác sĩ gây mê</span></div>
      <div style={{...styles.fontSize_16}}>- Phẫu thuật/thủ thuật lúc: {moment().format("hh:mm DD/MM/YYYY")}</div>
      <div style={{...styles.fontSize_16}}>- Kết thúc lúc: {moment().format("hh:mm DD/MM/YYYY")}</div>
      <div style={{...styles.fontSize_16}}>- Chẩn đoán trước phẫu thuật/thủ thuật: <span style={{...styles.fontBold}}>Theo dõi thường quy sau đẻ</span></div>
      <div style={{...styles.fontSize_16}}>- Chẩn đoán sau phẫu thuật/thủ thuật: <span style={{...styles.fontBold}}></span></div>
      <div style={{...styles.fontSize_16}}>- Phương pháp phẫu thuật thủ thuật: <span style={{...styles.fontBold}}></span></div>
      <div style={{...styles.fontSize_16}}>- Loại phẫu thuật/thủ thuật: <span style={{...styles.fontBold}}></span></div>
      <div style={{...styles.fontSize_16}}>- Phương pháp vô cảm: <span style={{...styles.fontBold}}></span></div>
      <div style={{...styles.fontSize_16}}>- Bác sĩ phẫu thuật/thủ thuật chính: <span style={{...styles.fontBold}}></span></div>
      <div style={{...styles.fontSize_16}}>- Phụ mổ: <span style={{...styles.fontBold}}></span></div>
      <div style={{...styles.fontSize_16}}>- DC viên: <span style={{...styles.fontBold}}></span></div>
      <div style={{...styles.fontSize_16}}>- Bác sĩ gây mê hồi sức/gây tê: <span style={{...styles.fontBold}}></span></div>
      <div style={{...styles.fontSize_16}}>- Gây tê/ Gây mê phụ: <span style={{...styles.fontBold}}></span></div>
      <div style={{...styles.fontSize_16}}>- Giúp việc: <span style={{...styles.fontBold}}></span></div>

      <div className="overflow-auto">
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={{...styles.w_50, ...styles.border1, ...styles.textAlign.center}}>Lược đồ</th>
              <th style={{...styles.w_50, ...styles.border1, ...styles.textAlign.center}}>Các bước tiến hành</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={{...styles.border1, ...styles.padding._0px}}>
                <div style={{...styles.height._165px, ...styles.borderBottom, ...styles.paddingLeft._5px}}></div>
                <div>
                  <div>* Dẫn lưu:</div>
                  <div>* Bắc:</div>
                  <div>* Ngày rút:</div>
                  <div>* Ngày cắt chỉ:</div>
                  <div>* Khác:</div>
                </div>
              </td>

              <td style={{...styles.border1}} valign="top">
                <div>Mô tả:</div>
                <div style={{...styles.h_100}}>Phẫu thuật kéo dài</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={styles.d_flex_j_end}>
        <Signature style={styles.paddingRight._75px} title="phẫu thuật/thủ thuật viên" subTitle='(Ký, ghi rõ họ tên)' isHours date={new Date()} />
      </div>
    </div>
  )
}

export default PhieuPhauThuat