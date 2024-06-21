import Signature from "../../../component/phieu-in/Signature"
import { styles } from "../../../component/phieu-in/constant"

type Props = {}

const PhieuDonThuoc = (props: Props) => {
  return (
    <div>
      <div style={styles.textAlign.center}>
        <div style={{ ...styles.fontSize_16, ...styles.fontBold, ...styles.textUppercase }}>Bệnh viện đa khoa</div>
        <div style={{ ...styles.marginBottom._5px, ...styles.fontSize_16 }}>Thành phố Hà Nội</div>
        <div style={{ ...styles.fontSize._18px, ...styles.fontBold, ...styles.marginBottom._10px }}>ĐƠN TƯ VẤN (NHÀ THUỐC)</div>
      </div>

      <div>
        <div style={{ ...styles.fontSize_16, ...styles.marginBottom._5px }}>- Mã người bệnh: 24000143</div>
        <div style={{ ...styles.d_flex, ...styles.marginBottom._5px }}>
          <div style={{ ...styles.fontSize_16, ...styles.minWidth._355px }}>- Họ tên: <span style={{ ...styles.fontSize_16, ...styles.fontBold, ...styles.textUppercase }}>Trần Quang Bá</span></div>
          <div style={{ ...styles.fontSize_16, ...styles.minWidth._90px }}>Tuổi: 26</div>
          <div style={{ ...styles.fontSize_16 }}>Nam</div>
        </div>
        <div style={{ ...styles.fontSize_16, ...styles.marginBottom._5px }}>- Địa chỉ: Thành phố Hà Nội</div>
        <div style={{ ...styles.fontSize_16, ...styles.marginBottom._5px }}>- Chẩn đoán: Z40.8-Phẫu thuật dự phòng khác</div>
      </div>

      <div style={{ ...styles.d_flex, ...styles.marginBottom._30px }}>
        <div style={{ ...styles.minWidth._30px, ...styles.fontSize_16 }}>1.</div>
        <div style={{ ...styles.minWidth._375px }}>
          <div style={{ ...styles.fontSize._16px, ...styles.fontBold }}>BERBERIN BM (500 viên)</div>
          <div style={{ ...styles.fontSize_16, ...styles.font_italic }}>Uống, 125 ngày,sáng: 1,trưa: 1,chiều: 1,tối: 1</div>
        </div>
        <div style={{ ...styles.minWidth._50px, ...styles.fontSize._16px, ...styles.fontBold }}>500</div>
        <div style={{ ...styles.fontSize_16 }}>Lọ</div>
      </div>

      <div style={{ ...styles.marginBottom._10px }}>
        <div style={{ ...styles.fontSize_16 }}>- Số tiền: <span style={{ ...styles.fontSize_16, ...styles.fontBold }}>6.687.500 đồng</span></div>
        <div style={{ ...styles.fontSize_16 }}>- Lời dặn: Chú ý thời gian uống nước</div>
        <div style={{ ...styles.fontSize_16 }}>- Chế độ dinh dưỡng</div>
        <div style={{ ...styles.fontSize_16 }}>- Luyện tập:</div>
      </div>

      <div>
        <Signature style={styles.paddingLeft._115px} title="Bác sĩ khám bệnh" isDate date={new Date()} isHours subTitle="(Ghi rõ họ tên)" />
      </div>
    </div>
  )
}

export default PhieuDonThuoc