import moment from "moment"
import Signature from "../../../../component/phieu-in/Signature"
import { styles } from "../../../../component/phieu-in/constant"
import { convertNumberPrice } from "../../../../utils/FormatUtils"

type Props = {}

const PhieuDSPhieuHuy = (props: Props) => {
  return (
    <div>
      <div style={styles.marginBottom._10px}>
        <div style={{ ...styles.fontBold, ...styles.fontSize._24px, ...styles.textAlign.center }}>DANH SÁCH PHIẾU HỦY</div>
        <div style={{ ...styles.textAlign.center, ...styles.fontSize._16px }}>Từ {moment().format("00:00 DD/MM/YYYY")} đến {moment().format("23:59 DD/MM/YYYY")}</div>
      </div>

      <div className="overflow-auto">
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._45px }} rowSpan={2}>STT</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._60px }} rowSpan={2}>Số phiếu thu</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._115px }} rowSpan={2}>Ngày phiếu thu</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._75px }} rowSpan={2}>Mã viện phí</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._115px }} rowSpan={2}>Mã bệnh nhân</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._140px }} rowSpan={2}>Tên bệnh nhân</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._140px }} rowSpan={2}>Tên khoa</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center }} colSpan={2}>Năm sinh</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._100px }} rowSpan={2}>Loại phiếu</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._85px }} rowSpan={2}>Hình thức phiếu</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._100px }} rowSpan={2}>Số tiền</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._175px }} rowSpan={2}>Lý do hủy</th>
            </tr>

            <tr>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._45px }}>Nam</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._45px }}>Nữ</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={{ ...styles.border1, ...styles.fontBold }} colSpan={11}>TỔNG CỘNG</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1 }}></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{ ...styles.d_flex_j_end, ...styles.paddingRight._45px }}>
        <Signature title="Nguời lập" isHours date={new Date()} />
      </div>
    </div>
  )
}

export default PhieuDSPhieuHuy