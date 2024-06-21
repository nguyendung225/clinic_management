import moment from "moment"
import { styles } from "../../../../component/phieu-in/constant"
import { convertNumberPrice } from "../../../../utils/FormatUtils"
import NumberToText from "../../../../component/NumberToText"
import Signature from "../../../../component/phieu-in/Signature"

type Props = {}

const PhieuBaoCaoHoatDongTaiChinh = (props: Props) => {
  return (
    <div>
      <div style={{ ...styles.d_flex_j_between, ...styles.marginBottom._20px }}>
        <div>
          <div>SỞ Y TẾ TEST</div>
          <div>BỆNH VIỆN ĐA KHOA TEST</div>
        </div>

        <div style={{ ...styles.textAlign.center }}>
          <div style={{ ...styles.fontBold, ...styles.fontSize._18px }}>BÁO CÁO HOẠT ĐỘNG TÀI CHÍNH</div>
          <div style={{ ...styles.font_italic }}>Từ {moment().format("hh:mm DD/MM/YYYY")} đến {moment().format("hh:mm DD/MM/YYYY")}</div>
        </div>
      </div>

      <div style={{ ...styles.marginBottom._20px }}>
        <div style={{ ...styles.fontBold, ...styles.marginBottom._5px }}>1-Hoạt động chỉ định dịch vụ, thuốc, vật tư:</div>
        <div>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.width._300px }}>Nội dung</th>
                <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.width._150px }}>Nhân dân</th>
                <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.width._150px }}>BHYT</th>
                <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.width._150px }}>Tổng</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td style={{ ...styles.border1 }}>Tổng số tiền doanh thu:</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontBold }}>{convertNumberPrice(669000)}</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontBold }}>{convertNumberPrice(0)}</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontBold }}>{convertNumberPrice(669000)}</td>
              </tr>

              <tr>
                <td style={{ ...styles.border1 }}>Tổng số tiền BHYT chi trả:</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontBold }}>{convertNumberPrice(669000)}</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontBold }}>{convertNumberPrice(0)}</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontBold }}>{convertNumberPrice(669000)}</td>
              </tr>

              <tr>
                <td style={{ ...styles.border1 }}>Tổng số tiền miễn giảm dịch vụ:</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontBold }}>{convertNumberPrice(669000)}</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontBold }}>{convertNumberPrice(0)}</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontBold }}>{convertNumberPrice(669000)}</td>
              </tr>

              <tr>
                <td style={{ ...styles.border1 }}>Tổng số tiền cần thu của bệnh nhân:</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontBold }}>{convertNumberPrice(669000)}</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontBold }}>{convertNumberPrice(0)}</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontBold }}>{convertNumberPrice(669000)}</td>
              </tr>

              <tr>
                <td style={{ ...styles.border1 }}>Tổng số tiền đã thu dịch vụ thuốc:</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontBold }}>{convertNumberPrice(669000)}</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontBold }}>{convertNumberPrice(0)}</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontBold }}>{convertNumberPrice(669000)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ ...styles.marginBottom._20px }}>
        <div style={{ ...styles.fontBold, ...styles.marginBottom._5px }}>2-Hoạt động thu ngân:</div>
        <div>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.width._300px }}>Nội dung</th>
                <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.width._150px }}>Nhân dân</th>
                <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.width._150px }}>BHYT</th>
                <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.width._150px }}>Tổng</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td style={{ ...styles.border1 }}>Tổng số tiền đã thu:</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontBold }}>{convertNumberPrice(669000)}</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontBold }}>{convertNumberPrice(0)}</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontBold }}>{convertNumberPrice(669000)}</td>
              </tr>

              <tr>
                <td style={{ ...styles.border1 }}>Tổng số tiền đã hoàn trả:</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontBold }}>{convertNumberPrice(669000)}</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontBold }}>{convertNumberPrice(0)}</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontBold }}>{convertNumberPrice(669000)}</td>
              </tr>

              <tr>
                <td style={{ ...styles.border1 }}>Tổng số tiền tạm ứng:</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontBold }}>{convertNumberPrice(669000)}</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontBold }}>{convertNumberPrice(0)}</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontBold }}>{convertNumberPrice(669000)}</td>
              </tr>

              <tr>
                <td style={{ ...styles.border1 }}>Tổng số tiền hoàn ứng</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontBold }}>{convertNumberPrice(669000)}</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontBold }}>{convertNumberPrice(0)}</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontBold }}>{convertNumberPrice(669000)}</td>
              </tr>

              <tr>
                <td style={{ ...styles.border1 }}>Tổng số tiền phiếu miễn giảm:</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontBold }}>{convertNumberPrice(669000)}</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontBold }}>{convertNumberPrice(0)}</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontBold }}>{convertNumberPrice(669000)}</td>
              </tr>

              <tr>
                <td style={{ ...styles.border1 }}>Tổng số tiền phiếu thu đã hủy:</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontBold }}>{convertNumberPrice(669000)}</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontBold }}>{convertNumberPrice(0)}</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontBold }}>{convertNumberPrice(669000)}</td>
              </tr>

              <tr>
                <td style={{ ...styles.border1 }}>Tổng số bệnh nhân vượt trần BH:</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontBold }}>{convertNumberPrice(669000)}</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontBold }}>{convertNumberPrice(0)}</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontBold }}>{convertNumberPrice(669000)}</td>
              </tr>

              <tr>
                <td style={{ ...styles.border1 }}>Tổng số tiền thực thu:</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontBold }}>{convertNumberPrice(669000)}</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontBold }}>{convertNumberPrice(0)}</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontBold }}>{convertNumberPrice(669000)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div style={{...styles.marginBottom._20px}}>
        <div style={{ ...styles.fontBold}}>3-Tổng số tiền cần nộp quỹ (thu tiền + tạm ứng - hoàn tiền - hoàn ứng): {convertNumberPrice(0)} đồng</div>
        <div style={{ ...styles.fontBold, ...styles.font_italic}}>Số tiền ghi bằng chữ: <span>{NumberToText(0)}</span></div>
      </div>

      <div style={{...styles.d_flex_j_between}}>
        <div></div>
        <Signature title="Người lập phiếu" isHours date={new Date()} style={{...styles.paddingRight._50px}}/>
      </div>
    </div>
  )
}

export default PhieuBaoCaoHoatDongTaiChinh