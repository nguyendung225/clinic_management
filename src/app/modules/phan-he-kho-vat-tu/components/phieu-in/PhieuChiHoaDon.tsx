import NumberToText from '../../../component/NumberToText'
import Signature from '../../../component/phieu-in/Signature'
import { styles } from '../../../component/phieu-in/constant'

type Props = {}

const PhieuChiHoaDon = (props: Props) => {
  return (
    <div>
      <div style={{ ...styles.marginBottom._10px }}>
        <div style={{ ...styles.textAlign.center, ...styles.textUppercase, ...styles.fontBold, ...styles.fontSize._16px }}>Bệnh viện đa khoa</div>
        <div style={{ ...styles.textAlign.center, ...styles.fontSize._16px }}>Thành phố Hà Nội</div>
        <div style={{ ...styles.textAlign.center, ...styles.fontBold, ...styles.fontSize._18px }}>PHIẾU CHI HÓA ĐƠN</div>
        <div style={{ ...styles.textAlign.center, ...styles.fontSize._16px }}>(Lưu)</div>
      </div>

      <div style={{ ...styles.marginBottom._30px }}>
        <div style={{...styles.fontSize._16px}}>- Số phiếu: CT000010</div>
        <div style={{...styles.fontSize._16px}}>- Lý do chi: </div>
        <div style={{...styles.fontSize._16px}}>- Số tiền: <span style={{ ...styles.fontBold, ...styles.fontSize._16px }}>36.122.000</span> đồng</div>
        <div style={{...styles.fontSize._16px}}>- Bằng chữ: {NumberToText(36122000)}</div>
      </div>

      <div style={{ ...styles.d_flex_j_around }}>
        <Signature title='Người nhận' />
        <Signature title='Người lập phiếu' date={new Date()} isHours />
      </div>
    </div>
  )
}

export default PhieuChiHoaDon