import Signature from "../../../component/phieu-in/Signature"
import { styles } from "../../../component/phieu-in/constant"

type Props = {}

const PhieuKetQua = (props: Props) => {
  return (
    <div>
      <div style={{ ...styles.d_flex_j_between }}>
        <div>
          <div style={{ ...styles.textUppercase, ...styles.fontSize_16 }}>Sở y tế</div>
          <div style={{ ...styles.textUppercase, ...styles.fontSize_16 }}>Bệnh viện đa khoa</div>
        </div>

        <div>
          <div style={{ ...styles.textUppercase, ...styles.fontBold, ...styles.fontSize._18px }}>KẾT QUẢ CHẨN ĐOÁN HÌNH ẢNH</div>
          <div style={{ ...styles.textAlign.center, ...styles.fontSize_16 }}><span style={{ ...styles.fontBold, ...styles.fontSize_16 }}>Số phiếu: </span>HA245678</div>
        </div>

        <div style={{ ...styles.textAlign.right }}>
          <div style={{ ...styles.fontSize_16 }}>PID: 24000026</div>
          <img style={{ width: "150px" }} src="/media/images/Barcode.png" alt="barcode" />
        </div>
      </div>

      <div style={{ ...styles.marginBottom._5px }}>
        <div style={{ ...styles.d_flex }}>
          <div style={{ ...styles.fontSize_16, ...styles.minWidth._455px }}>- Họ tên người bệnh: <span style={{ ...styles.textUppercase, ...styles.fontSize_16, ...styles.fontBold }}>Trần Quang Bá</span></div>
          <div style={{ ...styles.fontSize_16, ...styles.minWidth._30px }}>Tuổi: 26</div>
          <div style={{ ...styles.fontSize_16 }}>Nam</div>
        </div>
        <div style={{ ...styles.fontSize_16 }}>- Địa chỉ: Phường Quán Thánh, Quận Ba Đình, Thành phố Hà Nội</div>
        <div style={{ ...styles.fontSize_16 }}>- Đối tượng: Yêu cầu</div>
        <div style={{ ...styles.fontSize_16 }}>- Khoa phòng: Điều trị Truyền Nhiễm</div>
        <div style={{ ...styles.fontSize_16 }}>- Chẩn đoán: Z40-Phẫu thuật dự phòng</div>
      </div>

      <div style={{ ...styles.w_100 }}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.textUppercase }}>Dịch vụ</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.textUppercase }}>Kết luận</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.textUppercase }}>Ghi chú</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={{ ...styles.border1 }}></td>
              <td style={{ ...styles.border1 }}></td>
              <td style={{ ...styles.border1 }}></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{ ...styles.marginTop._20px, ...styles.d_flex_j_between, padding: "0 75px" }}>
        <img style={{ width: "75px", height: "75px" }} src="/media/images/QrCode2.png" alt="qrCode" />
        <Signature date={new Date()} title={"Bác sĩ chỉ định"} isDate />
      </div>
    </div>
  )
}

export default PhieuKetQua