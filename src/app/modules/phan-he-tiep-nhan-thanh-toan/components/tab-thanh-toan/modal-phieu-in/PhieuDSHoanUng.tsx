import moment from "moment"
import { styles } from "../../../../component/phieu-in/constant"
import { convertNumberPrice } from "../../../../utils/FormatUtils"

type Props = {}

const PhieuDSHoanUng = (props: Props) => {
  return (
    <div>
      <div style={styles.marginBottom._10px}>
        <div style={{ ...styles.fontBold, ...styles.fontSize._24px, ...styles.textAlign.center }}>DANH SÁCH PHIẾU HOÀN ỨNG</div>
        <div style={{ ...styles.textAlign.center, ...styles.fontSize._16px }}>Từ {moment().format("00:00 DD/MM/YYYY")} đến {moment().format("23:59 DD/MM/YYYY")}</div>
      </div>

      <div className="overflow-auto">
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._35px }}>TT</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._130px }}>Số phiếu thu</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._125px }}>Ngày phiếu thu</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._125px }}>Mã bệnh nhân</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._170px }}>Tên bệnh nhân</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._160px }}>Số tiền</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={{ ...styles.border1, ...styles.fontBold }} colSpan={5}>TỔNG CỘNG</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PhieuDSHoanUng