import moment from "moment"
import Signature from "../../../../component/phieu-in/Signature"
import { styles } from "../../../../component/phieu-in/constant"
import { convertNumberPrice } from "../../../../utils/FormatUtils"

type Props = {}

const PhieuBaoCaoDoanhThuTongHop = (props: Props) => {
  return (
    <div>
      <div>
        <div>SỞ Y TẾ TEST</div>
        <div style={{ ...styles.fontBold }}>BỆNH VIỆN ĐA KHOA</div>
      </div>

      <div style={styles.marginBottom._10px}>
        <div style={{ ...styles.fontBold, ...styles.textAlign.center, ...styles.textUppercase }}>BÁO CÁO DOANH THU TỔNG HỢP (THEO KHOA CHỈ ĐỊNH)</div>
        <div style={{ ...styles.textAlign.center }}>Từ {moment().format("00:00 DD/MM/YYYY")} đến {moment().format("23:59 DD/MM/YYYY")}</div>
      </div>

      <div className="overflow-auto" style={styles.marginBottom._10px}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._90px }}>Tên khoa</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._90px }}>Khám</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._90px }}>Xét nghiệm</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._100px }}>CĐHA-TDCN</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._90px }}>PTTT</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._90px }}>Thuốc</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._90px }}>Vật tư</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._90px }}>Máu</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._90px }}>Ngày giường</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._90px }}>Vận chuyển</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._90px }}>Dịch vụ khác</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._90px }}>Tổng chi</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._90px }}>BHYT</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._90px }}>Bệnh nhân</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._90px }}>Nguồn khác</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={{ ...styles.border1, ...styles.textAlign.center, ...styles.colorRed, ...styles.fontBold }}>Tổng cộng</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={styles.d_flex_j_end}>
        <Signature style={styles.paddingRight._115px} title="Người lập" isHours date={new Date()} />
      </div>
    </div>
  )
}

export default PhieuBaoCaoDoanhThuTongHop