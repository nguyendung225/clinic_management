import moment from "moment"
import { styles } from "../../../../component/phieu-in/constant"
import { convertNumberPrice } from "../../../../utils/FormatUtils"

type Props = {}

const PhieuBaoCaoDoanhThuTheoDVDT = (props: Props) => {
  return (
    <div>
      <div style={styles.marginBottom._10px}>
        <div style={{ ...styles.fontBold, ...styles.fontSize._24px, ...styles.textAlign.center }}>BÁO CÁO DOANH THU THEO DỊCH VỤ ĐÃ THU TIỀN</div>
        <div style={{ ...styles.fontBold, ...styles.textAlign.center }}>Từ {moment().format("00:00 DD/MM/YYYY")} đến {moment().format("23:59 DD/MM/YYYY")}</div>
      </div>

      <div className="overflow-auto">
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={{ ...styles.border1, ...styles.fontSize._14px, ...styles.textAlign.center }} rowSpan={2}>STT</th>
              <th style={{ ...styles.border1, ...styles.fontSize._14px, ...styles.textAlign.center, ...styles.minWidth._300px }} rowSpan={2}>Nội dung</th>
              <th style={{ ...styles.border1, ...styles.fontSize._14px, ...styles.textAlign.center, ...styles.minWidth._45px }} rowSpan={2} className="min-w-125px">Loại thanh toán</th>
              <th style={{ ...styles.border1, ...styles.fontSize._14px, ...styles.textAlign.center, ...styles.minWidth._45px }} rowSpan={2} className="min-w-75px">Số lượng</th>
              <th style={{ ...styles.border1, ...styles.fontSize._14px, ...styles.textAlign.center, ...styles.minWidth._45px }} rowSpan={2} className="min-w-75px">Đơn giá</th>
              <th style={{ ...styles.border1, ...styles.fontSize._14px, ...styles.textAlign.center }} colSpan={2} className="min-w-100px">Thành tiền</th>
              <th style={{ ...styles.border1, ...styles.fontSize._14px, ...styles.textAlign.center, ...styles.minWidth._45px }} rowSpan={2} className="min-w-125px">BHYT thanh toán</th>
              <th style={{ ...styles.border1, ...styles.fontSize._14px, ...styles.textAlign.center, ...styles.minWidth._45px }} rowSpan={2} className="min-w-100px">Miễn giảm</th>
              <th style={{ ...styles.border1, ...styles.fontSize._14px, ...styles.textAlign.center, ...styles.minWidth._45px }} rowSpan={2} className="min-w-125px">Số tiền thu của người bệnh</th>
              <th style={{ ...styles.border1, ...styles.fontSize._14px, ...styles.textAlign.center, ...styles.minWidth._45px }} rowSpan={2} className="min-w-125px">Số tiền đã thu</th>
              <th style={{ ...styles.border1, ...styles.fontSize._14px, ...styles.textAlign.center, ...styles.minWidth._45px }} rowSpan={2} className="min-w-125px">Thu tiền mặt</th>
              <th style={{ ...styles.border1, ...styles.fontSize._14px, ...styles.textAlign.center, ...styles.minWidth._45px }} rowSpan={2} className="min-w-125px">Thu chuyển khoản</th>
              <th style={{ ...styles.border1, ...styles.fontSize._14px, ...styles.textAlign.center, ...styles.minWidth._110px }} rowSpan={2} className="min-w-125px">Người thực hiện</th>
              <th style={{ ...styles.border1, ...styles.fontSize._14px, ...styles.textAlign.center, ...styles.minWidth._45px }} colSpan={8} className="min-w-125px">Người giới thiệu</th>
            </tr>

            <tr>
              <th style={{ ...styles.border1, ...styles.fontSize._14px, ...styles.textAlign.center, ...styles.minWidth._45px }} >BHYT</th>
              <th style={{ ...styles.border1, ...styles.fontSize._14px, ...styles.textAlign.center, ...styles.minWidth._45px }} >Thu phí</th>
              <th style={{ ...styles.border1, ...styles.fontSize._14px, ...styles.textAlign.center, ...styles.minWidth._45px }} >ID</th>
              <th style={{ ...styles.border1, ...styles.fontSize._14px, ...styles.textAlign.center, ...styles.minWidth._45px }} >Mã</th>
              <th style={{ ...styles.border1, ...styles.fontSize._14px, ...styles.textAlign.center, ...styles.minWidth._45px }} >Tên</th>
              <th style={{ ...styles.border1, ...styles.fontSize._14px, ...styles.textAlign.center, ...styles.minWidth._45px }} className="min-w-125px">Địa chỉ</th>
              <th style={{ ...styles.border1, ...styles.fontSize._14px, ...styles.textAlign.center, ...styles.minWidth._45px }} className="min-w-125px">Tỷ lệ hoa hồng</th>
              <th style={{ ...styles.border1, ...styles.fontSize._14px, ...styles.textAlign.center, ...styles.minWidth._45px }} className="min-w-125px">Ngân hàng</th>
              <th style={{ ...styles.border1, ...styles.fontSize._14px, ...styles.textAlign.center, ...styles.minWidth._45px }} className="min-w-125px">Điện thoại</th>
              <th style={{ ...styles.border1, ...styles.fontSize._14px, ...styles.textAlign.center, ...styles.minWidth._45px }} className="min-w-125px">Ghi chú</th>
            </tr>
          </thead>

          <tbody>
            <tr className="bg-color-purple" style={{ backgroundColor: "#e6e0ed" }}>
              <td style={{ ...styles.border1, ...styles.fontSize._14px, ...styles.fontBold }} colSpan={22}>(Không nhóm dữ liệu)</td>
            </tr>

            <tr className="bg-color-yellow" style={{ backgroundColor: "#ecf0df" }}>
              <td style={{ ...styles.border1, ...styles.fontSize._14px, ...styles.textAlign.right, ...styles.fontBold }} colSpan={5}>Tổng Cộng:</td>
              <td style={{ ...styles.border1, ...styles.fontSize._14px, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.fontSize._14px, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.fontSize._14px, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.fontSize._14px, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.fontSize._14px, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.fontSize._14px, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.fontSize._14px, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.fontSize._14px, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.fontSize._14px, }}></td>
              <td style={{ ...styles.border1, ...styles.fontSize._14px, ...styles.textAlign.center }}></td>
              <td style={{ ...styles.border1, ...styles.fontSize._14px, ...styles.textAlign.center }}></td>
              <td style={{ ...styles.border1, ...styles.fontSize._14px, }}></td>
              <td style={{ ...styles.border1, ...styles.fontSize._14px, }}></td>
              <td style={{ ...styles.border1, ...styles.fontSize._14px, ...styles.textAlign.center }}></td>
              <td style={{ ...styles.border1, ...styles.fontSize._14px, }}></td>
              <td style={{ ...styles.border1, ...styles.fontSize._14px, ...styles.textAlign.center }}></td>
              <td style={{ ...styles.border1, ...styles.fontSize._14px, }}></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PhieuBaoCaoDoanhThuTheoDVDT