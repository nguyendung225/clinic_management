import moment from "moment"
import { styles } from "../../../../component/phieu-in/constant"
import { convertNumberPrice } from "../../../../utils/FormatUtils"
import { CODE_LIST_BAO_CAO } from "../../../constants/constants";

type Props = {
  loaiPhieu?: string;
}

const PhieuBaoCaoLoLaiPTTT = ({ loaiPhieu }: Props) => {
  return (
    <div>
      <div>
        <div>SỞ Y TẾ TEST</div>
        <div style={{ ...styles.fontBold }}>BỆNH VIỆN ĐA KHOA</div>
      </div>

      <div style={styles.marginBottom._10px}>
        <div style={{ ...styles.fontBold, ...styles.fontSize._24px, ...styles.textAlign.center }}>BÁO CÁO LỖ LÃI {loaiPhieu === CODE_LIST_BAO_CAO.BAO_CAO.LO_LAI_THU_THUAT ? "THỦ THUẬT" : "PHẪU THUẬT"}</div>
        <div style={{ ...styles.textAlign.center, ...styles.fontSize._16px }}>Từ {moment().format("00:00 DD/MM/YYYY")} đến {moment().format("23:59 DD/MM/YYYY")}</div>
      </div>

      <div className="overflow-auto">
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._45px }} rowSpan={2}>STT</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._70px }} rowSpan={2}>Mã bệnh nhân</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._55px }} rowSpan={2}>Mã viện phí</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._85px }} rowSpan={2}>Họ và tên</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center }} colSpan={2}>Tuổi</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._130px }} rowSpan={2}>Tên dịch vụ PTTT</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._95px }} rowSpan={2}>Loại</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._65px }} rowSpan={2}>Đối tượng dịch vụ</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._45px }} rowSpan={2}>Số lượng</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._85px }} rowSpan={2}>Đơn giá</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._85px }} rowSpan={2}>Thành tiền</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._85px }} rowSpan={2}>Chi phí vật tư</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._85px }} rowSpan={2}>Chi phí thuốc</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._85px }} rowSpan={2}>Chi phí người thực hiện</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._85px, ...styles.colorRed }} rowSpan={2}>
                {loaiPhieu === CODE_LIST_BAO_CAO.BAO_CAO.LO_LAI_THU_THUAT ? "Hoạch toán lỗ lãi" : "LỖ/LÃI PTTT"}
              </th>
            </tr>

            <tr>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._30px }}>Nam</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._30px }}>Nữ</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={{ ...styles.border1, ...styles.textAlign.center, ...styles.colorRed, ...styles.fontBold }} colSpan={11}>TỔNG CỘNG</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.colorRed }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.colorRed }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.colorRed }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.colorRed }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.colorRed }}>{convertNumberPrice(0)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PhieuBaoCaoLoLaiPTTT