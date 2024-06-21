import NumberToText from "../../../component/NumberToText"
import Signature from "../../../component/phieu-in/Signature"
import { styles } from "../../../component/phieu-in/constant"
import { convertNumberPrice } from "../../../utils/FormatUtils"

type Props = {}

const PhieuChiDinhCongKham = (props: Props) => {
  return (
    <div>
      <div style={{ ...styles.d_flex_j_around, ...styles.marginBottom._10px }}>
        <div>
          <div style={{ ...styles.fontBold, ...styles.textUppercase, ...styles.fontSize_16, ...styles.textAlign.center }}>Sở y tế test</div>
          <div style={{ ...styles.fontBold, ...styles.textUppercase, ...styles.fontSize_16, ...styles.textAlign.center }}>Bệnh viện đa khoa</div>
        </div>

        <div>
          <img style={{ width: "150px" }} src="/media/images/Barcode.png" alt="barcode" />
          <div style={{ ...styles.fontSize_16 }}>Mã YT: <span style={{ ...styles.fontBold, ...styles.fontSize_16 }}>1234567</span></div>
          <div style={{ ...styles.fontSize_16 }}>Số BA: <span style={{ ...styles.fontBold, ...styles.fontSize_16 }}>223</span></div>
          <div style={{ ...styles.fontSize_16 }}>Số phiếu: <span style={{ ...styles.fontBold, ...styles.fontSize_16 }}>SK1234567</span></div>
        </div>
      </div>

      <div>
        <div style={{ ...styles.fontBold, ...styles.textAlign.center, ...styles.fontSize._20px }}>BẢNG KÊ KHÁM BỆNH, CHỮA BỆNH NGOẠI TRÚ</div>
        <div style={{ ...styles.fontBold, ...styles.textAlign.center, ...styles.fontSize_16, ...styles.marginBottom._10px }}>Đối tượng: Dịch vụ</div>
      </div>

      <div>
        <div style={{ ...styles.fontBold, ...styles.fontSize_16 }}>I. HÀNH CHÍNH</div>
        <div style={{ ...styles.d_flex }}>
          <div style={{ ...styles.fontSize_16, ...styles.minWidth._335px }}>Họ tên người bệnh: <span style={{ ...styles.fontBold, ...styles.fontSize_16, ...styles.textUppercase }}>Trần Quang Bá</span></div>
          <div style={{ ...styles.fontSize_16, ...styles.minWidth._180px }}>Ngày sinh: 1998</div>
          <div style={{ ...styles.fontSize_16, ...styles.minWidth._85px }}>Tuổi: 26</div>
          <div style={{ ...styles.fontSize_16 }}>Giới tính: Nam</div>
        </div>
        <div style={{ ...styles.fontSize_16 }}>Địa chỉ: Phường Quán Thánh, Quận Ba Đình, Thành phố Hà Nội</div>
        <div style={{ ...styles.fontSize_16 }}>Chẩn đoán: Z40-Phẫu thuật dự phòng</div>
        <div style={{ ...styles.fontSize_16 }}>Số điện thoại:</div>
      </div>

      <div>
        <div style={{ ...styles.fontBold, ...styles.fontSize_16 }}>II. CHI PHÍ KHÁM, CHỮA BỆNH</div>
        <div style={{ ...styles.w_100, ...styles.marginBottom._20px }}>
          <table style={{ ...styles.table }}>
            <thead>
              <tr>
                <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._300px }} rowSpan={2} colSpan={2}>Nội dung</th>
                <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._50px }} rowSpan={2}>SL</th>
                <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._80px }} rowSpan={2}>Đơn giá <span style={styles.fontNormal}>(đồng)</span></th>
                <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._80px }} rowSpan={2}>Thành tiền <span style={styles.fontNormal}>(đồng)</span></th>
                <th style={{ ...styles.border1, ...styles.textAlign.center }} colSpan={3}>Nguồn thành toán</th>
              </tr>

              <tr>
                <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._75px }}>Quỹ BHYT <span style={styles.fontNormal}>(đồng)</span></th>
                <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._75px }}>Khác <span style={styles.fontNormal}>(đồng)</span></th>
                <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._75px }}>Người bệnh <span style={styles.fontNormal}>(đồng)</span></th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td style={{ ...styles.border1, ...styles.textAlign.center }} colSpan={2}>(1)</td>
                <td style={{ ...styles.border1, ...styles.textAlign.center }}>(2)</td>
                <td style={{ ...styles.border1, ...styles.textAlign.center }}>(3)</td>
                <td style={{ ...styles.border1, ...styles.textAlign.center }}>(4)</td>
                <td style={{ ...styles.border1, ...styles.textAlign.center }}>(5)</td>
                <td style={{ ...styles.border1, ...styles.textAlign.center }}>(6)</td>
                <td style={{ ...styles.border1, ...styles.textAlign.center }}>(7) = (4)-(5)-(6)</td>
              </tr>

              <tr>
                <td style={{ ...styles.border1, ...styles.fontBold, ...styles.textAlign.center }}>KD</td>
                <td style={{ ...styles.border1 }}>Khám lâm sàng chung</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right }}>1</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(160000)}</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(160000)}</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(160000)}</td>
              </tr>

              <tr>
                <td style={{ ...styles.border1, ...styles.textAlign.center, ...styles.fontBold }} colSpan={4}>TỔNG CỘNG:</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontBold }}>{convertNumberPrice(160000)}</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontBold }}>{convertNumberPrice(0)}</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontBold }}>{convertNumberPrice(0)}</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontBold }}>{convertNumberPrice(160000)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ ...styles.fontBold }}>Số tiền ghi bằng chữ: {NumberToText(160000)}</div>

      <div style={{ ...styles.d_flex_j_between }}>
        <Signature title="nguời lập bảng kê" subTitle="(Ký, ghi rõ họ tên)" />
        <Signature title="kế toán viện phí" subTitle="(Ký, ghi rõ họ tên)" />
        <Signature title="người bệnh" subTitle="(Ký, ghi rõ họ tên)" />
        <Signature isDate isHours date={new Date()} title="bác sĩ điều trị" subTitle="(Ký, ghi rõ họ tên)" />
      </div>
    </div>
  )
}

export default PhieuChiDinhCongKham