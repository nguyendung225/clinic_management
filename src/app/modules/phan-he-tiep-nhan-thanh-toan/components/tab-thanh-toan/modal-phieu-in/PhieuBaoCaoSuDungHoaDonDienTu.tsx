import moment from "moment"
import { styles } from "../../../../component/phieu-in/constant"
import { convertNumberPrice } from "../../../../utils/FormatUtils"

type Props = {}

const PhieuBaoCaoSuDungHoaDonDienTu = (props: Props) => {
  return (
    <div>
      <div style={styles.marginBottom._10px}>
        <div style={{ ...styles.fontBold, ...styles.fontSize._24px, ...styles.textAlign.center }}>BÁO CÁO SỬ DỤNG HÓA ĐƠN ĐIỆN TỬ</div>
        <div style={{ ...styles.fontBold, ...styles.textAlign.center }}>Từ {moment().format("00:00 DD/MM/YYYY")} đến {moment().format("23:59 DD/MM/YYYY")}</div>
      </div>

      <div className="overflow-auto">
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={{ ...styles.border1, ...styles.fontSize._13px, ...styles.textAlign.center, ...styles.minWidth._45px }} rowSpan={2}>STT</th>
              <th style={{ ...styles.border1, ...styles.fontSize._13px, ...styles.textAlign.center, ...styles.minWidth._80px }} rowSpan={2}>Mẫu hóa đơn</th>
              <th style={{ ...styles.border1, ...styles.fontSize._13px, ...styles.textAlign.center, ...styles.minWidth._95px }} rowSpan={2}>Ký hiệu hóa đơn</th>
              <th style={{ ...styles.border1, ...styles.fontSize._13px, ...styles.textAlign.center, ...styles.minWidth._80px }} rowSpan={2}>Số hóa đơn</th>
              <th style={{ ...styles.border1, ...styles.fontSize._13px, ...styles.textAlign.center, ...styles.minWidth._80px }} rowSpan={2}>Số phiếu thu</th>
              <th style={{ ...styles.border1, ...styles.fontSize._13px, ...styles.textAlign.center, ...styles.minWidth._100px }} rowSpan={2}>Ngày tạo hóa đơn</th>
              <th style={{ ...styles.border1, ...styles.fontSize._13px, ...styles.textAlign.center, ...styles.minWidth._105px }} rowSpan={2}>Người tạo hóa đơn</th>
              <th style={{ ...styles.border1, ...styles.fontSize._13px, ...styles.textAlign.center, ...styles.minWidth._85px }} rowSpan={2}>Mã bệnh nhân</th>
              <th style={{ ...styles.border1, ...styles.fontSize._13px, ...styles.textAlign.center, ...styles.minWidth._85px }} rowSpan={2}>Tên bệnh nhân</th>
              <th style={{ ...styles.border1, ...styles.fontSize._13px, ...styles.textAlign.center, ...styles.minWidth._80px }} rowSpan={2}>Số thẻ BHYT</th>
              <th style={{ ...styles.border1, ...styles.fontSize._13px, ...styles.textAlign.center, ...styles.minWidth._80px }} colSpan={2}>Năm sinh</th>
              <th style={{ ...styles.border1, ...styles.fontSize._13px, ...styles.textAlign.center, ...styles.minWidth._150px }} rowSpan={2}>Địa chỉ</th>
              <th style={{ ...styles.border1, ...styles.fontSize._13px, ...styles.textAlign.center, ...styles.minWidth._230px }} rowSpan={2}>Nội dung</th>
              <th style={{ ...styles.border1, ...styles.fontSize._13px, ...styles.textAlign.center, ...styles.minWidth._55px }} rowSpan={2}>Số tiền</th>
            </tr>

            <tr>
              <th style={{ ...styles.border1, ...styles.fontSize._13px, ...styles.textAlign.center, ...styles.minWidth._45px }}>Nam</th>
              <th style={{ ...styles.border1, ...styles.fontSize._13px, ...styles.textAlign.center, ...styles.minWidth._45px }}>Nữ</th>
            </tr>
          </thead>

          <tbody>
            <tr className="bg-color-purple" style={{ backgroundColor: "#e6e0ed" }}>
              <td style={{ ...styles.border1, ...styles.fontSize._13px, ...styles.fontBold }} colSpan={23}>(Không nhóm dữ liệu)</td>
            </tr>

            <tr className="bg-color-yellow" style={{ backgroundColor: "#ecf0df" }}>
              <td style={{ ...styles.border1, ...styles.fontSize._13px, ...styles.textAlign.right, ...styles.fontBold }} colSpan={14}>Tổng cộng</td>
              <td style={{ ...styles.border1, ...styles.fontSize._13px, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PhieuBaoCaoSuDungHoaDonDienTu