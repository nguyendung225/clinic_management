import NumberToText from "../../../../component/NumberToText"
import Signature from "../../../../component/phieu-in/Signature"
import { styles } from "../../../../component/phieu-in/constant"
import { convertNumberPrice } from "../../../../utils/FormatUtils"

type Props = {}

const PhieuThanhToanVienPhiNgoaiTru = (props: Props) => {
  return (
    <div>
      <div style={{ ...styles.d_flex_j_between, ...styles.marginBottom._5px }}>
        <div>
          <div style={styles.fontSize._18px}>SỞ Y TẾ TEST</div>
          <div style={{ ...styles.fontSize._18px }}>BỆNH VIỆN ĐA KHOA TEST</div>
          <div style={styles.fontSize._16px}>Khoa khám bệnh - P317 - Tai Mũi Họng</div>
        </div>

        <div style={{ ...styles.flex_column, ...styles.alignItems.end }}>
          <div style={{ ...styles.fontSize._16px, ...styles.fontBold }}>Mẫu số: 01/BV</div>
          <div style={{ ...styles.fontSize._16px, ...styles.fontBold }}>Số khám bệnh: </div>
          <div style={{ ...styles.fontSize._16px, ...styles.fontBold }}>Mã số người bệnh: 24000087</div>
          <div style={styles.width._120px}><img style={styles.w_100} src="/media/images/Barcode.png" alt="" /></div>
        </div>
      </div>

      <div style={{ ...styles.fontBold, ...styles.fontSize._18px, ...styles.textAlign.center }}>BẢNG KÊ CHI PHÍ KHÁM BỆNH, CHỮA BỆNH NGOẠI TRÚ</div>
      <div style={{ ...styles.textAlign.center, ...styles.fontSize._16px }}>(Đối tượng: nhân dân)</div>

      <div style={{ ...styles.fontSize._16px, ...styles.fontBold }}>I. Hành chính</div>

      <div style={{ ...styles.d_flex_align_center }}>
        <div style={{ ...styles.width._340px, ...styles.fontSize._16px }}>(1) Họ tên người bệnh: <span>Thùy Anh</span></div>
        <div style={{ ...styles.width._170px, ...styles.fontSize._16px }}>Ngày sinh: 2000</div>
        <div style={{ ...styles.d_flex_align_center, ...styles.fontSize._16px }}>
          Giới tính: Nam &nbsp;<div style={{ ...styles.border1, ...styles.minWidth._30px, ...styles.height._25px }}></div>&nbsp;
          Nữ &nbsp;<div style={{ ...styles.border1, ...styles.minWidth._30px, ...styles.height._25px }}></div>
        </div>
      </div>

      <div style={{ ...styles.fontSize._16px }}>(2) Địa chỉ: Phường Quán Thánh, Quận Ba Đình, Thành phố Hà Nội</div>
      <div style={{ ...styles.fontSize._16px }}>(3) Đến khám: 09 giờ 41 phút, ngày 23/01/2024</div>
      <div style={{ ...styles.fontSize._16px }}>(4) Kết thúc đợt điều trị ngoại trú: &nbsp;&nbsp;&nbsp;&nbsp;giờ &nbsp;&nbsp;&nbsp;&nbsp;phút, ngày &nbsp;&nbsp;&nbsp;&nbsp;tháng &nbsp;&nbsp;&nbsp;&nbsp;năm &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tổng số ngày điều trị: 1</div>
      <div style={{ ...styles.d_flex_align_center }}>
        <div style={{ ...styles.fontSize._16px, ...styles.minWidth._475px }}>(5) Chuẩn đoán: </div>
        <div style={{ ...styles.fontSize._16px }}>(6) Mã bệnh (ICD-10):</div>
      </div>

      <div style={{ ...styles.fontSize._16px, ...styles.fontBold }}>II. Chi phí khám, chữa bệnh:</div>
      <div style={{ ...styles.marginBottom._30px }}>
        <table style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._275px }} rowSpan={2}>Nội dung</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center }} rowSpan={2}>Đơn vị tính</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center }} rowSpan={2}>Số lượng</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center }} rowSpan={2}>Giá (đồng)</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center }} rowSpan={2}>Thành tiền (đồng)</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center }} colSpan={2}>Nguồn thanh toán (đồng)</th>
            </tr>

            <tr>
              <th style={{ ...styles.border1, ...styles.textAlign.center }}>Nguồn khác</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center }}>Người bệnh</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={{ ...styles.border1, ...styles.textAlign.center }}>(1)</td>
              <td style={{ ...styles.border1, ...styles.textAlign.center }}>(2)</td>
              <td style={{ ...styles.border1, ...styles.textAlign.center }}>(3)</td>
              <td style={{ ...styles.border1, ...styles.textAlign.center }}>(4)</td>
              <td style={{ ...styles.border1, ...styles.textAlign.center }}>(5)=(3)x(4)</td>
              <td style={{ ...styles.border1, ...styles.textAlign.center }}>(6)</td>
              <td style={{ ...styles.border1, ...styles.textAlign.center }}>(7)=(5)-(6)</td>
            </tr>

            <tr>
              <td style={{ ...styles.border1, ...styles.fontBold }} colSpan={7}>1. Xét nghiệm</td>
            </tr>

            <tr>
              <td style={{ ...styles.border1 }}>1. Double Test</td>
              <td style={{ ...styles.border1, ...styles.textAlign.center }}>Lần</td>
              <td style={{ ...styles.border1, ...styles.textAlign.center }}>1</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(500000)}</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(500000)}</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(500000)}</td>
            </tr>

            <tr>
              <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontBold }} colSpan={4}>Cộng 1</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontBold }}>{convertNumberPrice(500000)}</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontBold }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontBold }}>{convertNumberPrice(500000)}</td>
            </tr>
            <tr>
              <td style={{ ...styles.border1, ...styles.textAlign.center, ...styles.fontBold }} colSpan={4}>Tổng cộng</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontBold }}>{convertNumberPrice(500000)}</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontBold }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontBold }}>{convertNumberPrice(500000)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{ ...styles.fontBold, ...styles.font_italic, ...styles.fontSize._16px }}>Số tiền ghi bằng chữ: </div>
      <div style={{ ...styles.d_flex_align_center, ...styles.marginBottom._30px }}>
        <div style={{ ...styles.marginRight._10px }}>
          <div style={{ ...styles.fontSize._16px }}>Tổng chi phí: </div>
          <div style={{ ...styles.fontSize._16px }}>Số tiền người bệnh trả:</div>
          <div style={{ ...styles.fontSize._16px }}>Nguồn khác:</div>
        </div>

        <div>
          <div style={{ ...styles.font_italic, ...styles.fontSize._16px }}>{convertNumberPrice(500000)} : {NumberToText(500000)}</div>
          <div style={{ ...styles.font_italic, ...styles.fontSize._16px }}>{NumberToText(500000)}</div>
          <div style={{ ...styles.font_italic, ...styles.fontSize._16px }}>{NumberToText(0)}</div>
        </div>
      </div>

      <div style={{...styles.d_flex_j_around}}>
        <Signature title="người bệnh" subTitle="(Ký ghi rõ họ tên)"/>
        <Signature title="bác sĩ điều trị" subTitle="(Ký ghi rõ họ tên)"/>
        <Signature date={new Date()} title="người lập bảng kê" subTitle="(Ký ghi rõ họ tên)"/>
      </div>
    </div>
  )
}

export default PhieuThanhToanVienPhiNgoaiTru