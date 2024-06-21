import React from 'react'
import { styles } from "../constant";
import CustomTextarea from '../../custom-textarea/CustomTextarea'

type Props = {
    title: string
}

const KyTen = (props: Props) => {
  return (
      <div style={{ ...styles.w_30, ...styles.overflow.hidden, marginTop: "10px" }}>
          <div style={styles.textAlign.center}>Ngày ....... tháng ...... năm .......</div>
          <div style={{ ...styles.textAlign.center,marginTop: "4px", marginBottom: "50px" }}><strong style={{ fontSize: "16px" }}>{props?.title}</strong></div>
          <div style={{ ...styles.w_100, display: "flex", alignItems: "center" }}>
              <span
                  className="mb-6-px"
                  style={{ marginBottom: "-2px", width: "100px" }}>Họ và tên:</span>
              <CustomTextarea
                  disabled
              />
          </div>
      </div>
  )
}

export default KyTen