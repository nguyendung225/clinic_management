import moment from "moment"
import Signature from "../../../../component/phieu-in/Signature"
import { styles } from "../../../../component/phieu-in/constant"
import { convertNumberPrice } from "../../../../utils/FormatUtils"

type Props = {}

const PhieuNopTienVeQuy = (props: Props) => {
  return (
    <div>
      <div style={styles.marginBottom._10px}>
        <div style={{ ...styles.fontBold, ...styles.fontSize._24px, ...styles.textAlign.center }}>BÁO CÁO NỘP TIỀN VỀ QUỸ</div>
        <div style={{ ...styles.textAlign.center, ...styles.fontSize._16px }}>Từ {moment().format("00:00 DD/MM/YYYY")} đến {moment().format("23:59 DD/MM/YYYY")}</div>
      </div>

      <div className="overflow-auto" style={styles.marginBottom._5px}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.fontSize._12px, ...styles.minWidth._35px }} rowSpan={2}>STT</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.fontSize._12px, ...styles.minWidth._50px }} rowSpan={2}>Số phiếu</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.fontSize._12px, ...styles.minWidth._55px }} rowSpan={2}>Số HDDT</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.fontSize._12px, ...styles.minWidth._90px }} rowSpan={2}>Ngày phiếu thu</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.fontSize._12px, ...styles.minWidth._50px }} rowSpan={2}>Mã viện phí</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.fontSize._12px, ...styles.minWidth._80px }} rowSpan={2}>Mã bệnh nhân</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.fontSize._12px, ...styles.minWidth._105px }} rowSpan={2}>Tên bệnh nhân</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.fontSize._12px, ...styles.minWidth._105px }} rowSpan={2}>Tên khoa</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.fontSize._12px, ...styles.minWidth._35px }} colSpan={2}>Năm sinh</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.fontSize._12px, ...styles.minWidth._50px }} rowSpan={2}>Loại phiếu</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.fontSize._12px, ...styles.minWidth._65px }} rowSpan={2}>Hình thức phiếu thu</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.fontSize._12px }} colSpan={4}>Số tiền</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.fontSize._12px, color: "red", ...styles.minWidth._75px }} rowSpan={2}>Nộp Quỹ</th>
            </tr>

            <tr>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.fontSize._12px, ...styles.minWidth._35px }}>Nam</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.fontSize._12px, ...styles.minWidth._35px }}>Nữ</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.fontSize._12px, ...styles.minWidth._60px }}>Thu tiền</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.fontSize._12px, ...styles.minWidth._60px }}>Tạm ứng</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.fontSize._12px, ...styles.minWidth._60px }}>Hoàn ứng</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.fontSize._12px, ...styles.minWidth._60px }}>Miễn giảm</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={{ ...styles.border1, ...styles.fontBold, ...styles.fontSize._12px }} colSpan={12}>TỔNG CỘNG</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontSize._12px }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontSize._12px }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontSize._12px }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontSize._12px }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontSize._12px, color: "red" }}>{convertNumberPrice(0)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{ color: "red", ...styles.fontBold }}>
        <span>TIỀN NỘP QUỸ:</span>
        <span style={{ ...styles.paddingLeft._50px }}>{convertNumberPrice(0)}</span>
      </div>

      <div style={styles.d_flex_j_around}>
        <Signature title="nguời lập" />
        <Signature title="thủ quỹ" />
        <Signature title="kế toán trưởng" isHours date={new Date()} />
      </div>
    </div>
  )
}

export default PhieuNopTienVeQuy