import moment from 'moment'
import { styles } from '../../../../component/phieu-in/constant'
import { CODE_LIST_BAO_CAO } from '../../../constants/constants';
import { convertNumberPrice } from '../../../../utils/FormatUtils';

type Props = {
  loaiPhieu?: string;
}

const PhieuBaoCaoPhuCapPTTT = ({ loaiPhieu }: Props) => {

  const loaiPhuCap = loaiPhieu === CODE_LIST_BAO_CAO.BAO_CAO.PHU_CAP_THU_THUAT ? "Thủ thuật " : "Phẫu thuật"

  return (
    <div>
      <div>
        <div>SỞ Y TẾ TEST</div>
        <div style={{ ...styles.fontBold }}>BỆNH VIỆN ĐA KHOA</div>
      </div>

      <div style={styles.marginBottom._10px}>
        <div style={{ ...styles.fontBold, ...styles.textAlign.center, ...styles.textUppercase }}>BÁO CÁO PHỤ CẤP {loaiPhuCap}</div>
        <div style={{ ...styles.textAlign.center }}>Từ {moment().format("00:00 DD/MM/YYYY")} đến {moment().format("23:59 DD/MM/YYYY")}</div>
      </div>

      <div className="overflow-auto">
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._45px }} rowSpan={3}>STT</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._165px }} rowSpan={3}>Họ và tên</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._110px }} rowSpan={3}>Vai trò</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center }} colSpan={14}>PHẦN THANH TOÁN</th>
            </tr>

            <tr>
              <th style={{ ...styles.border1, ...styles.textAlign.center }} colSpan={3}>{loaiPhuCap} đặc biệt</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center }} colSpan={3}>{loaiPhuCap} loại 1</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center }} colSpan={3}>{loaiPhuCap} loại 2</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center }} colSpan={3}>{loaiPhuCap} loại 3</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._90px }} rowSpan={2}>Tổng số tiền phụ cấp phẫu thuật</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._65px }} rowSpan={2}>Ký nhận</th>
            </tr>

            <tr>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._25px }}>Số ca</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._95px }}>Mức phụ cấp đồng/ca</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._80px }}>Thành tiền</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._25px }}>Số ca</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._95px }}>Mức phụ cấp đồng/ca</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._80px }}>Thành tiền</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._25px }}>Số ca</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._95px }}>Mức phụ cấp đồng/ca</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._80px }}>Thành tiền</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._25px }}>Số ca</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._95px }}>Mức phụ cấp đồng/ca</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._80px }}>Thành tiền</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={{ ...styles.border1, ...styles.textAlign.center }} colSpan={3}>Tổng cộng</td>
              <td style={{ ...styles.border1, ...styles.textAlign.center }}></td>
              <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.textAlign.center }}></td>
              <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.textAlign.center }}></td>
              <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.textAlign.center }}></td>
              <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1 }}></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PhieuBaoCaoPhuCapPTTT