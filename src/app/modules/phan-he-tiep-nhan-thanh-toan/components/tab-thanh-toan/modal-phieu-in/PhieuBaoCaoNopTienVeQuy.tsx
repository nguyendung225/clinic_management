import moment from "moment"
import { styles } from "../../../../component/phieu-in/constant"
import { convertNumberPrice } from "../../../../utils/FormatUtils"

type Props = {}

const PhieuBaoCaoNopTienVeQuy = (props: Props) => {
  return (
    <div>
      <div style={styles.marginBottom._10px}>
        <div style={{ ...styles.fontBold, ...styles.fontSize._24px, ...styles.textAlign.center }}>BÁO CÁO NỘP TIỀN VỀ QUỸ</div>
        <div style={{ ...styles.fontBold, ...styles.textAlign.center, ...styles.fontSize._16px }}>Từ {moment().format("00:00 DD/MM/YYYY")} đến {moment().format("23:59 DD/MM/YYYY")}</div>
      </div>

      <div style={styles.marginBottom._5px}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.fontSize._13px }} rowSpan={2}>STT</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.fontSize._13px }} rowSpan={2}>ID Phiếu</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.fontSize._13px }} rowSpan={2}>Ngày phiếu thu</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.fontSize._13px }} rowSpan={2}>Mã viện phí</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.fontSize._13px }} rowSpan={2}>Mã bệnh nhân</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.fontSize._13px }} rowSpan={2}>Tên bệnh nhân</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.fontSize._13px }} colSpan={2}>Năm sinh</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.fontSize._13px }} rowSpan={2}>Loại phiếu</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.fontSize._13px }} rowSpan={2}>Hình thức phiếu thu</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.fontSize._13px }} colSpan={4}>Số tiền</th>
            </tr>

            <tr>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.fontSize._13px }}>Nam</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.fontSize._13px }}>Nữ</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.fontSize._13px }}>Thu tiền</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.fontSize._13px }}>Tạm ứng</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.fontSize._13px }}>Hoàn ứng</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.fontSize._13px }}>Miễn giảm</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={{ ...styles.border1, ...styles.fontBold, ...styles.fontSize._13px }} colSpan={10}>TỔNG CỘNG</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontSize._13px }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontSize._13px }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontSize._13px }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontSize._13px }}>{convertNumberPrice(0)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{ color: "red", ...styles.fontBold }}>
        <span>TỔNG TIỀN NỘP VỀ QUỸ:</span>
        <span style={{ ...styles.paddingLeft._50px }}>{convertNumberPrice(0)}</span>
      </div>
    </div>
  )
}

export default PhieuBaoCaoNopTienVeQuy