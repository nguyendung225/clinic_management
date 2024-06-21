import moment from "moment"
import { styles } from "../../../../component/phieu-in/constant"
import { convertNumberPrice } from "../../../../utils/FormatUtils"

type Props = {}

const PhieuBaoCaoThuTienDichVu = (props: Props) => {
  return (
    <div>
      <div style={styles.marginBottom._10px}>
        <div style={{ ...styles.fontBold, ...styles.fontSize._24px, ...styles.textAlign.center }}>BÁO CÁO THU TIỀN DỊCH VỤ</div>
        <div style={{ ...styles.fontBold, ...styles.textAlign.center }}>Từ {moment().format("00:00 DD/MM/YYYY")} đến {moment().format("23:59 DD/MM/YYYY")}</div>
      </div>

      <div className="overflow-auto">
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={{ ...styles.border1, ...styles.fontSize._13px, ...styles.textAlign.center, ...styles.minWidth._30px }} rowSpan={2}>STT</th>
              <th style={{ ...styles.border1, ...styles.fontSize._13px, ...styles.textAlign.center, ...styles.minWidth._80px }} rowSpan={2}>Số phiếu thu</th>
              <th style={{ ...styles.border1, ...styles.fontSize._13px, ...styles.textAlign.center, ...styles.minWidth._70px }} rowSpan={2}>Số hóa đơn</th>
              <th style={{ ...styles.border1, ...styles.fontSize._13px, ...styles.textAlign.center, ...styles.minWidth._95px }} rowSpan={2}>Ngày phiếu thu</th>
              <th style={{ ...styles.border1, ...styles.fontSize._13px, ...styles.textAlign.center, ...styles.minWidth._100px }} rowSpan={2}>Ngày đến khám</th>
              <th style={{ ...styles.border1, ...styles.fontSize._13px, ...styles.textAlign.center, ...styles.minWidth._95px }} rowSpan={2}>Tên bệnh nhân</th>
              <th style={{ ...styles.border1, ...styles.fontSize._13px, ...styles.textAlign.center, ...styles.minWidth._45px }} colSpan={2}>Năm sinh</th>
              <th style={{ ...styles.border1, ...styles.fontSize._13px, ...styles.textAlign.center, ...styles.minWidth._75px }} rowSpan={2}>Địa chỉ</th>
              <th style={{ ...styles.border1, ...styles.fontSize._13px, ...styles.textAlign.center, ...styles.minWidth._50px }} rowSpan={2}>Ghi chú</th>
              <th style={{ ...styles.border1, ...styles.fontSize._13px, ...styles.textAlign.center }} colSpan={13}>Nhóm dịch vụ</th>
            </tr>

            <tr>
              <th style={{ ...styles.border1, ...styles.fontSize._13px, ...styles.textAlign.center, ...styles.minWidth._45px }}>Nam</th>
              <th style={{ ...styles.border1, ...styles.fontSize._13px, ...styles.textAlign.center, ...styles.minWidth._45px }}>Nữ</th>
              <th style={{ ...styles.border1, ...styles.fontSize._13px, ...styles.textAlign.center, ...styles.minWidth._45px }}>Khám bệnh</th>
              <th style={{ ...styles.border1, ...styles.fontSize._13px, ...styles.textAlign.center, ...styles.minWidth._45px }}>Ngày giường</th>
              <th style={{ ...styles.border1, ...styles.fontSize._13px, ...styles.textAlign.center, ...styles.minWidth._45px }}>Xét nghiệm</th>
              <th style={{ ...styles.border1, ...styles.fontSize._13px, ...styles.textAlign.center, ...styles.minWidth._55px }}>GPB-TB</th>
              <th style={{ ...styles.border1, ...styles.fontSize._13px, ...styles.textAlign.center, ...styles.minWidth._60px }}>Chẩn đoán HA</th>
              <th style={{ ...styles.border1, ...styles.fontSize._13px, ...styles.textAlign.center, ...styles.minWidth._45px }}>Ngày giường</th>
              <th style={{ ...styles.border1, ...styles.fontSize._13px, ...styles.textAlign.center, ...styles.minWidth._45px }}>Ngày điều trị</th>
              <th style={{ ...styles.border1, ...styles.fontSize._13px, ...styles.textAlign.center, ...styles.minWidth._45px }}>Nội soi</th>
              <th style={{ ...styles.border1, ...styles.fontSize._13px, ...styles.textAlign.center, ...styles.minWidth._45px }}>PTTT</th>
              <th style={{ ...styles.border1, ...styles.fontSize._13px, ...styles.textAlign.center, ...styles.minWidth._65px }}>DV kỹ thuật cao</th>
              <th style={{ ...styles.border1, ...styles.fontSize._13px, ...styles.textAlign.center, ...styles.minWidth._45px }}>Máu</th>
              <th style={{ ...styles.border1, ...styles.fontSize._13px, ...styles.textAlign.center, ...styles.minWidth._45px }}>Thuốc</th>
              <th style={{ ...styles.border1, ...styles.fontSize._13px, ...styles.textAlign.center, ...styles.minWidth._45px }}>Vật tư</th>
            </tr>
          </thead>

          <tbody>
            <tr className="bg-color-purple" style={{ backgroundColor: "#e6e0ed" }}>
              <td style={{ ...styles.border1, ...styles.fontSize._13px, ...styles.fontBold }} colSpan={23}>(Không nhóm dữ liệu)</td>
            </tr>

            <tr className="bg-color-yellow" style={{ backgroundColor: "#ecf0df" }}>
              <td style={{ ...styles.border1, ...styles.fontSize._13px, ...styles.textAlign.right, ...styles.fontBold }} colSpan={10}>Tổng cộng</td>
              <td style={{ ...styles.border1, ...styles.fontSize._13px, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.fontSize._13px, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.fontSize._13px, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.fontSize._13px, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.fontSize._13px, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.fontSize._13px, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.fontSize._13px, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.fontSize._13px, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.fontSize._13px, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.fontSize._13px, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.fontSize._13px, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.fontSize._13px, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.fontSize._13px, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PhieuBaoCaoThuTienDichVu