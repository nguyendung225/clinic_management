import NumberToText from "../../../component/NumberToText"
import Signature from "../../../component/phieu-in/Signature"
import { styles } from "../../../component/phieu-in/constant"
import { convertNumberPrice } from "../../../utils/FormatUtils"

type Props = {}

const PhieuXuatVatTu = (props: Props) => {
  return (
    <div>
      <div style={{ ...styles.d_flex_j_between }}>
        <div>
          <div style={{ ...styles.fontSize_16, ...styles.textUppercase }}>Sở y tế</div>
          <div style={{ ...styles.fontSize_16, ...styles.textUppercase }}>bệnh viện đa khoa</div>
        </div>

        <div>
          <div style={{ ...styles.fontSize._18px, ...styles.textUppercase, ...styles.fontBold }}>Phiếu xuất vật tư</div>
          <div style={{ ...styles.fontSize._18px, ...styles.textAlign.center }}>Kho vật tư nội trú</div>
        </div>

        <div style={{ ...styles.fontSize_16 }}>Mã phiếu: 000183</div>
      </div>

      <div>
        <div style={{ ...styles.d_flex, ...styles.marginBottom._5px }}>
          <div style={{ ...styles.minWidth._460px, ...styles.fontSize_16 }}>- Họ tên người bệnh: <span style={{ ...styles.fontBold, ...styles.fontSize_16 }}>Trần Quang Bá</span></div>
          <div style={{ ...styles.minWidth._85px, ...styles.fontSize_16 }}>Tuổi: 26</div>
          <div style={{ ...styles.fontSize_16 }}>Nam</div>
        </div>
        <div style={{ ...styles.fontSize_16, ...styles.marginBottom._5px }}>- Địa chỉ: Phường Quán Thánh, Quận Ba Đình, Thành Phố Hà Nội</div>
        <div style={{ ...styles.fontSize_16, ...styles.marginBottom._5px }}>- Đối tượng: Yêu cầu</div>
        <div style={{ ...styles.fontSize_16, ...styles.marginBottom._5px }}>- Khoa phòng: Điều tri truyền nhiễm</div>
        <div style={{ ...styles.fontSize_16, ...styles.marginBottom._5px }}>- Chẩn đoán: Z40.0-Phẫu thuật dự phòng các nguy cơ liên quan đến khối u ác tính</div>
      </div>

      <div style={{ ...styles.w_100, ...styles.marginBottom._5px }}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={{ ...styles.border1, ...styles.textAlign.center }}>STT</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._355px }}>Tên, nhãn hiệu, qui cách, phẩm chất vật tư(SP, hàng hóa)</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center }}>Đơn vị tính</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center }}>Số lượng</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center }}>Đơn giá</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center }}>Thành tiền</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={{ ...styles.border1, ...styles.textAlign.center }}>1</td>
              <td style={{ ...styles.border1 }}>Fuji 2-15g vật liệu hàn răng</td>
              <td style={{ ...styles.border1, ...styles.textAlign.center }}>Hộp</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right }}>0</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right }}>1.400.000</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right }}>0</td>
            </tr>

            <tr>
              <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontBold }} colSpan={4}>Tổng tiền thanh toán:</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontBold }} colSpan={2}>0</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <div style={{ ...styles.fontSize_16 }}>- Thành tiền: {convertNumberPrice(0)} đồng</div>
        <div style={{ ...styles.fontSize_16 }}>- Bằng chữ: {NumberToText(0)}</div>
      </div>

      <div style={{ ...styles.d_flex_j_around }}>
        <Signature title="bn/ng.nhà ký" subTitle="(Ký, họ tên)" />
        <Signature title="người xuất vật tư" subTitle="(Ký, họ tên)" isDate isHours date={new Date()} />
      </div>
    </div>
  )
}

export default PhieuXuatVatTu