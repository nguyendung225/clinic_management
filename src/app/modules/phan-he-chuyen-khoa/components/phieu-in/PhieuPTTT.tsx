import Signature from "../../../component/phieu-in/Signature"
import { styles } from "../../../component/phieu-in/constant"

type Props = {}

const PhieuPTTT = (props: Props) => {
  return (
    <div>
      <div style={{ ...styles.d_flex_j_between, ...styles.marginBottom._10px }}>
        <div>
          <div style={{ ...styles.textUppercase, ...styles.fontSize_16 }}>Sở y tế</div>
          <div style={{ ...styles.textUppercase, ...styles.fontSize_16 }}>Bệnh viện đa khoa</div>
        </div>

        <div>
          <div style={{ ...styles.fontBold, ...styles.textUppercase, ...styles.textAlign.center, ...styles.fontSize._18px }}>Phiếu phẫu thuật thủ thuật</div>
          <div style={{ ...styles.fontSize_16, ...styles.textAlign.center }}>Phẫu thuật định hình mũi</div>
        </div>

        <div>
          <div style={{ ...styles.fontSize_16 }}>PID: <span style={{ ...styles.fontSize_16 }}>2400006</span></div>
          <div style={{ ...styles.width._120px }}><img style={{ ...styles.w_100 }} src="/media/images/Barcode.png" alt="" /></div>
        </div>
      </div>

      <div style={{ ...styles.d_flex, ...styles.marginBottom._5px }}>
        <div style={{ ...styles.minWidth._275px, ...styles.fontSize_16 }}>- Họ tên người bệnh: <span style={{ ...styles.fontBold, ...styles.textUppercase, ...styles.fontSize_16 }}>Trần Miến</span></div>
        <div style={{ ...styles.minWidth._180px, ...styles.fontSize_16 }}>Tuổi: <span style={{ ...styles.fontSize_16 }}>24</span></div>
        <div style={{ ...styles.fontSize_16 }}>Nam</div>
      </div>

      <div style={{ ...styles.marginBottom._5px, ...styles.fontSize_16 }}>- Địa chỉ: Phường Quán Thánh, Quận Ba Đình, Thành Phố Hà Nội</div>

      <div style={{ ...styles.marginBottom._5px, ...styles.fontSize_16 }}>- Đối tượng: Yêu cầu</div>

      <div style={{ ...styles.d_flex, ...styles.marginBottom._5px }}>
        <div style={{ ...styles.minWidth._385px, ...styles.fontSize_16 }}>- Khoa phòng: <span style={{ ...styles.fontSize_16 }}>Phòng khám Ngoại</span></div>
        <div style={{ ...styles.fontSize_16 }}>Bác sĩ chỉ định: <span style={{ ...styles.fontSize_16 }}>Quản trị hệ thống</span></div>
      </div>

      <div style={{ ...styles.marginBottom._5px, ...styles.fontSize_16 }}>- Chẩn đoán: Bị thương</div>

      <div style={{ ...styles.marginBottom._5px, ...styles.fontSize_16 }}>- Yêu cầu: Phẫu thuật nâng ngực</div>

      <div style={{ ...styles.fontBold, ...styles.textAlign.center, ...styles.fontSize_16, ...styles.marginBottom._10px }}>KẾT QUẢ</div>

      <div style={styles.d_flex_j_around}>
        <div style={{ ...styles.width._100px }}><img style={{ ...styles.w_100 }} src="/media/images/QrCode2.png" alt="" /></div>
        <Signature title="người thực hiện" date={new Date()} />
      </div>
    </div>
  )
}

export default PhieuPTTT