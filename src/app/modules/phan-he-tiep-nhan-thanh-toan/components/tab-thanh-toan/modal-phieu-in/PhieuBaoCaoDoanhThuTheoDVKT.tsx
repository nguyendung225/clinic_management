import moment from "moment"
import { styles } from "../../../../component/phieu-in/constant"
import { convertNumberPrice } from "../../../../utils/FormatUtils"
import NumberToText from "../../../../component/NumberToText"
import Signature from "../../../../component/phieu-in/Signature"

type Props = {}

const PhieuBaoCaoDoanhThuTheoDVKT = (props: Props) => {
  return (
    <div>
      <div>
        <div style={{...styles.textUppercase, ...styles.fontBold}}>Bệnh viện đa khoa</div>
        <div style={{...styles.textUppercase, ...styles.fontBold}}>Mã cơ sở: 01817</div>
      </div>

      <div style={styles.marginBottom._10px}>
        <div style={{ ...styles.fontBold, ...styles.fontSize._24px, ...styles.textAlign.center }}>BÁO CÁO THU TIỀN DỊCH VỤ</div>
        <div style={{ ...styles.fontBold, ...styles.textAlign.center }}>Từ {moment().format("00:00 DD/MM/YYYY")} đến {moment().format("23:59 DD/MM/YYYY")}</div>
      </div>

      <div className="overflow-auto" style={styles.marginBottom._20px}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={{...styles.border1, ...styles.textAlign.center}} rowSpan={2}>STT</th>
              <th style={{...styles.border1, ...styles.textAlign.center, ...styles.minWidth._275px}} rowSpan={2}>Dịch vụ kỹ thuật</th>
              <th style={{...styles.border1, ...styles.textAlign.center}} colSpan={3}>BHYT</th>
              <th style={{...styles.border1, ...styles.textAlign.center}} colSpan={3}>Viện phí</th>
              <th style={{...styles.border1, ...styles.textAlign.center}} colSpan={3}>Dịch vụ theo yêu cầu</th>
            </tr>

            <tr>
              <th style={{...styles.border1, ...styles.textAlign.center}}>Số lượng</th>
              <th style={{...styles.border1, ...styles.textAlign.center}}>Đơn giá</th>
              <th style={{...styles.border1, ...styles.textAlign.center}}>Thành tiền</th>
              <th style={{...styles.border1, ...styles.textAlign.center}}>Số lượng</th>
              <th style={{...styles.border1, ...styles.textAlign.center}}>Đơn giá</th>
              <th style={{...styles.border1, ...styles.textAlign.center}}>Thành tiền</th>
              <th style={{...styles.border1, ...styles.textAlign.center}}>Số lượng</th>
              <th style={{...styles.border1, ...styles.textAlign.center}}>Đơn giá</th>
              <th style={{...styles.border1, ...styles.textAlign.center}}>Thành tiền</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={{...styles.border1, ...styles.textAlign.center, ...styles.fontBold}}>I</td>
              <td style={{...styles.border1, ...styles.fontBold}} colSpan={10}>Khám bệnh</td>
            </tr>

            <tr>
              <td style={{...styles.border1, ...styles.textAlign.center, ...styles.fontBold}}>II</td>
              <td style={{...styles.border1, ...styles.fontBold}} colSpan={10}>Giường bệnh</td>
            </tr>

            <tr>
              <td style={{...styles.border1, ...styles.textAlign.center, ...styles.fontBold}}>III</td>
              <td style={{...styles.border1, ...styles.fontBold}} colSpan={10}>Xét nghiệm</td>
            </tr>

            <tr>
              <td style={{...styles.border1, ...styles.textAlign.center, ...styles.fontBold}}>IV</td>
              <td style={{...styles.border1, ...styles.fontBold}} colSpan={10}>Chuẩn đoán hình ảnh</td>
            </tr>

            <tr>
              <td style={{...styles.border1, ...styles.textAlign.center, ...styles.fontBold}}>V</td>
              <td style={{...styles.border1, ...styles.fontBold}} colSpan={10}>Phẫu thuật thủ thuật</td>
            </tr>

            <tr>
              <td style={{...styles.border1, ...styles.textAlign.center, ...styles.fontBold}}>VI</td>
              <td style={{...styles.border1, ...styles.fontBold}} colSpan={10}>Dịch vụ kỹ thuật cao</td>
            </tr>

            <tr>
              <td style={{...styles.border1, ...styles.textAlign.center, ...styles.fontBold}}>VII</td>
              <td style={{...styles.border1, ...styles.fontBold}} colSpan={10}>Vận chuyển</td>
            </tr>

            <tr>
              <td style={{...styles.border1, ...styles.textAlign.center, ...styles.fontBold}} colSpan={2}>Tổng cộng</td>
              <td style={{...styles.border1, ...styles.textAlign.right}} colSpan={3}>{convertNumberPrice(0)}</td>
              <td style={{...styles.border1, ...styles.textAlign.right}} colSpan={3}>{convertNumberPrice(0)}</td>
              <td style={{...styles.border1, ...styles.textAlign.right}} colSpan={3}>{convertNumberPrice(0)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={styles.marginBottom._10px}>
        Tổng số doanh thu (viết bằng chữ): {NumberToText(0)}
      </div>

      <div style={{...styles.d_flex_j_around}}>
        <Signature style={styles.marginLeft._245px} title="Người lập bảng" subTitle="(Ký, ghi rõ họ tên)"/>
        <Signature title="Trưởng phòng" subTitle="(Ký, ghi rõ họ tên)"/>
        <Signature title="Giám đốc" subTitle="(Ký, ghi rõ họ tên)" date={new Date()} isHours/>
      </div>
    </div>
  )
}

export default PhieuBaoCaoDoanhThuTheoDVKT