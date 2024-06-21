import { styles } from "../../../../component/phieu-in/constant"

type Props = {}

export const ModalPhieuInDSBenhNhan = (props: Props) => {
  return (
    <div style={{...styles.w_100}} className="overflow-auto">
       <table style={{borderCollapse: "collapse"}}>
        <thead>
            <tr>
                <th style={{...styles.textAlign.center, ...styles.minWidth._15px, ...styles.fontSize._11px, ...styles.borderRightNone}}>STT</th>
                <th style={{...styles.textAlign.center, ...styles.minWidth._30px, ...styles.fontSize._11px, ...styles.borderRightNone}}>Mã BN</th>
                <th style={{...styles.textAlign.center, ...styles.minWidth._80px, ...styles.fontSize._11px, ...styles.borderRightNone}}>Tên bệnh nhân</th>
                <th style={{...styles.textAlign.center, ...styles.minWidth._60px, ...styles.fontSize._11px, ...styles.borderRightNone}}>Mã viện phí</th>
                <th style={{...styles.textAlign.center, ...styles.minWidth._50px, ...styles.fontSize._11px, ...styles.borderRightNone}}>Số BHYT</th>
                <th style={{...styles.textAlign.center, ...styles.minWidth._50px, ...styles.fontSize._11px, ...styles.borderRightNone}}>Giới tính</th>
                <th style={{...styles.textAlign.center, ...styles.minWidth._20px, ...styles.fontSize._11px, ...styles.borderRightNone}}>Tuổi</th>
                <th style={{...styles.textAlign.center, ...styles.minWidth._70px, ...styles.fontSize._11px, ...styles.borderRightNone}}>Khoa điều trị</th>
                <th style={{...styles.textAlign.center, ...styles.minWidth._70px, ...styles.fontSize._11px, ...styles.borderRightNone}}>Phòng điều trị</th>
                <th style={{...styles.textAlign.center, ...styles.minWidth._30px, ...styles.fontSize._11px, ...styles.borderRightNone}}>Giường</th>
                <th style={{...styles.textAlign.center, ...styles.minWidth._70px, ...styles.fontSize._11px, ...styles.borderRightNone}}>Bác sĩ điều trị</th>
                <th style={{...styles.textAlign.center, ...styles.minWidth._110px, ...styles.fontSize._11px, ...styles.borderRightNone}}>Ngày bắt đầu điều trị</th>
                <th style={{...styles.textAlign.center, ...styles.minWidth._70px, ...styles.fontSize._11px, ...styles.borderRightNone}}>Khoa ban đầu</th>
                <th style={{...styles.textAlign.center, ...styles.minWidth._80px, ...styles.fontSize._11px, ...styles.borderRightNone}}>Phòng ban đầu</th>
                <th style={{...styles.textAlign.center, ...styles.minWidth._60px, ...styles.fontSize._11px, ...styles.borderRightNone}}>Mã ICD10</th>
                <th style={{...styles.textAlign.center, ...styles.minWidth._60px, ...styles.fontSize._11px, ...styles.borderRightNone}}>Chuẩn đoán</th>
                <th style={{...styles.textAlign.center, ...styles.minWidth._80px, ...styles.fontSize._11px, ...styles.borderRightNone}}>Bắt đầu BHYT</th>
                <th style={{...styles.textAlign.center, ...styles.minWidth._80px, ...styles.fontSize._11px, ...styles.borderRightNone}}>Kết thúc BHYT</th>
                <th style={{...styles.textAlign.center, ...styles.minWidth._50px, ...styles.fontSize._11px, ...styles.border1}}>Số tiền dư</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td  style={{...styles.fontSize._11px, ...styles.border1}} colSpan={19}>(Không nhóm dữ liệu)</td>
            </tr>
            <tr>
                <td style={{...styles.textAlign.center, ...styles.fontSize._11px, ...styles.borderRightNone}}>1</td>
                <td style={{...styles.textAlign.center, ...styles.fontSize._11px, ...styles.borderRightNone}}>12345678</td>
                <td style={{...styles.fontSize._11px, ...styles.borderRightNone}}>Nguyễn Văn A</td>
                <td style={{...styles.fontSize._11px, ...styles.borderRightNone}}>16</td>
                <td style={{...styles.fontSize._11px, ...styles.borderRightNone}}>MB00112123456</td>
                <td style={{...styles.textAlign.center, ...styles.fontSize._11px, ...styles.borderRightNone}}>Nam</td>
                <td style={{...styles.textAlign.center, ...styles.fontSize._11px, ...styles.borderRightNone}}>24</td>
                <td style={{...styles.fontSize._11px, ...styles.borderRightNone}}>Khoa Covid-2</td>
                <td style={{...styles.fontSize._11px, ...styles.borderRightNone}}>Phòng 1</td>
                <td style={{...styles.fontSize._11px, ...styles.borderRightNone}}>Giường 1</td>
                <td style={{...styles.fontSize._11px, ...styles.borderRightNone}}>Bác sĩ A</td>
                <td style={{...styles.textAlign.center, ...styles.fontSize._11px, ...styles.borderRightNone}}>01/01/2023</td>
                <td style={{...styles.fontSize._11px, ...styles.borderRightNone}}>Khoa Covid-2</td>
                <td style={{...styles.fontSize._11px, ...styles.borderRightNone}}>Phòng 1</td>
                <td style={{...styles.textAlign.center, ...styles.fontSize._11px, ...styles.borderRightNone}}>123456</td>
                <td style={{...styles.fontSize._11px, ...styles.borderRightNone}}>không sao</td>
                <td style={{...styles.fontSize._11px, ...styles.borderRightNone}}>01/01/2024</td>
                <td style={{...styles.fontSize._11px, ...styles.borderRightNone}}>01/01/2024</td>
                <td style={{...styles.fontSize._11px, ...styles.border1, ...styles.textAlign.right}}>10.000đ</td>
            </tr>
        </tbody>
    </table>
    </div>
  )
}
