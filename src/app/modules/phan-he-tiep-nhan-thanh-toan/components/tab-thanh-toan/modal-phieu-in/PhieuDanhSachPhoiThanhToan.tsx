import moment from 'moment'
import { styles } from '../../../../component/phieu-in/constant'
import { formatDate } from '../../../../utils/AppFunction'
import { convertNumberPrice } from '../../../../utils/FormatUtils'

type Props = {}

const PhieuDanhSachPhoiThanhToan = (props: Props) => {

  const renderDate = (date: any) => {
    const ngay = formatDate(date?.getDate());
    const thang = formatDate(date?.getMonth() + 1);
    const nam = date?.getFullYear();
    const gio = formatDate(date?.getHours());
    const phut = formatDate(date?.getMinutes());
    return `${gio}:${phut}, ngày ${ngay} tháng ${thang} năm ${nam}`;
  }

  return (
    <div>
      <div style={styles.marginBottom._10px}>
        <div style={{ ...styles.fontBold, ...styles.fontSize._24px, ...styles.textAlign.center }}>BÁO CÁO DANH SÁCH PHƠI THANH TOÁN</div>
        <div style={{ ...styles.textAlign.center, ...styles.fontSize._16px, ...styles.fontBold }}>Từ {moment().format("00:00 DD/MM/YYYY")} đến {moment().format("23:59 DD/MM/YYYY")}</div>
      </div>

      <div className="overflow-auto" style={styles.marginBottom._20px}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._30px }} rowSpan={2}>STT</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._50px }} rowSpan={2}>Mã BN</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._85px }} rowSpan={2}>Mã viện phí</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._120px }} rowSpan={2}>Tên bệnh nhân</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center }} colSpan={2}>Ngày sinh</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._120px }} rowSpan={2}>Địa chỉ</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._70px }} rowSpan={2}>Đối tượng</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._100px }} rowSpan={2}>Số thẻ BHYT</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._90px }} rowSpan={2}>Tổng chi phí</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._90px }} rowSpan={2}>BHYT</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._90px }} rowSpan={2}>Người bệnh</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._90px }} rowSpan={2}>Miễn giảm</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._130px }} rowSpan={2}>Người duyệt kế toán</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._80px }} rowSpan={2}>Ngày duyệt kế toán</th>
            </tr>

            <tr>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._35px }}>Nam</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._35px }}>Nữ</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={{ ...styles.border1, ...styles.fontBold }} colSpan={9}>(Không nhóm dữ liệu) - SL 0</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1 }}></td>
              <td style={{ ...styles.border1 }}></td>
            </tr>

            <tr>
              <td style={{ ...styles.border1, ...styles.colorRed, ...styles.fontBold, ...styles.textAlign.center }} colSpan={9}>Tổng Cộng</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.colorRed }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.colorRed }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.colorRed }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.colorRed }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1 }}></td>
              <td style={{ ...styles.border1 }}></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{...styles.marginBottom._20px, ...styles.d_flex_j_end, ...styles.paddingRight._45px, ...styles.fontBold}}>
        {renderDate(new Date())}
      </div>

      <div className="overflow-auto" style={{width: "83.6%"}}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._135px, ...styles.textUppercase }}>tên nhân viên</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._120px, ...styles.textUppercase }}>tổng số phơi</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._150px, ...styles.textUppercase }}>tổng chi phí</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._145px, ...styles.textUppercase }}>bhyt thanh toán</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._180px, ...styles.textUppercase }}>bệnh nhân thanh toán</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._175px, ...styles.textUppercase }}>miễn giảm</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={{ ...styles.border1 }}>admin</td>
              <td style={{ ...styles.border1, ...styles.textAlign.center }}>0</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PhieuDanhSachPhoiThanhToan