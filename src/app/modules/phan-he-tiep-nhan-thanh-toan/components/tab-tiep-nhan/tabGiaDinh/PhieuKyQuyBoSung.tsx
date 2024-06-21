import moment from "moment"
import { styles } from "../../../../component/phieu-in/constant"

export const PhieuKyQuyBoSung = () => {
  return (
    <div>
      <div style={{...styles.d_flex_j_center, ...styles.paddingBottom._20px}}>
        <div style={{ ...styles.fontBold, ...styles.textAlign.center }}>
          <div style={{...styles.paddingBottom._20px, ...styles.paddingLeft._146px}}>
            <div style={styles.fontSize._16px}>BỆNH VIỆN ĐA KHOA ABC</div>
            <div style={styles.fontSize._16px}>Thành phố Hà Nội</div>
          </div>

          <div>
            <div style={styles.fontSize._18px}>KÝ QUỸ BỔ SUNG</div>
            <div style={styles.fontSize._16px}>Ngày {moment(new Date()).format("DD/MM/YYYY")}</div>
          </div>
        </div>
      </div>

      <div style={{ ...styles.paddingBottom._20px }}>
        <div style={styles.fontSize._18px}>- Mã người bệnh: 23000016</div>
        <div style={styles.fontSize._18px}>- Họ tên: <span style={{ ...styles.fontBold, ...styles.fontSize._18px }}>Nguyễn Văn A</span> <span style={{ ...styles.paddingLeft._100px, ...styles.fontSize._18px }}>Tuổi: 24</span> <span style={{ ...styles.paddingLeft._50px, ...styles.fontSize._18px }}>Nam</span></div>
        <div style={styles.fontSize._18px}>- Địa chỉ: Phường Quán Thánh, Quận Ba Đình, Thành Phố Hà Nội</div>
        <div style={styles.fontSize._18px}>- Chuẩn đoán: Người đi bộ bị thương trong tai nạn giao thông không xác định</div>
        <div style={styles.fontSize._18px}>- Mã thẻ BHYT: MBB123456789</div>
        <div style={styles.fontSize._18px}>- Khoa điều trị: <span style={{ ...styles.fontBold, ...styles.fontSize._18px }}>Khoa 1</span></div>
        <div style={styles.fontSize._18px}>- Lý do ký quỹ: <span style={{ ...styles.fontBold, ...styles.fontSize._18px }}>Thẻ BHYT hết hạn, ký quỹ như đối tượng nhân dân</span></div>
      </div>

      <div style={{ ...styles.d_flex_j_end, ...styles.paddingBottom._50px, ...styles.paddingRight._70px }}>
        <div style={styles.textAlign.center}>
          <div style={{ ...styles.fontBold, ...styles.fontSize._18px  }}>Người viết</div>
          <div style={{...styles.font_italic, ...styles.fontSize._18px}}>(Ghi rõ họ tên)</div>
        </div>
      </div>
    </div>
  )
}