import { styles } from "../../../../component/phieu-in/constant"
import { PhieuKyQuyBoSung } from "./PhieuKyQuyBoSung"

type Props = {}

export const ModalPhieuKyQuyBoSung = (props: Props) => {
  return (
    <div style={{...styles.d_flex_j_center, ...styles.w_100, ...styles.h_100}}>
     <div style={{...styles.w_50, ...styles.borderRightDashed}}>
       <PhieuKyQuyBoSung/>
     </div>
      
      <div style={{...styles.w_50, ...styles.paddingLeft._10px}}>
        <PhieuKyQuyBoSung/>
      </div>
    </div>
  )
}
