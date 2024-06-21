import moment from 'moment'
import React from 'react'
import { styles } from '../../../../component/phieu-in/constant'
import { convertNumberPrice } from '../../../../utils/FormatUtils'
import Signature from '../../../../component/phieu-in/Signature'

type Props = {}

const PhieuDSTamUng = (props: Props) => {
  return (
    <div>
       <div style={styles.marginBottom._10px}>
        <div style={{ ...styles.fontBold, ...styles.fontSize._24px, ...styles.textAlign.center }}>DANH SÁCH PHIẾU TẠM ỨNG</div>
        <div style={{ ...styles.textAlign.center, ...styles.fontSize._16px }}>Từ {moment().format("00:00 DD/MM/YYYY")} đến {moment().format("23:59 DD/MM/YYYY")}</div>
      </div>

      <div className="overflow-auto">
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._40px }} rowSpan={2}>STT</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._90px }} rowSpan={2}>Số phiếu thu</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._105px }} rowSpan={2}>Ngày phiếu thu</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._100px }} rowSpan={2}>Mã bệnh nhân</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._225px }} rowSpan={2}>Tên bệnh nhân</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._180px }} rowSpan={2}>Số tiền</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={{ ...styles.border1, ...styles.fontBold }} colSpan={5}>TỔNG CỘNG</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{ ...styles.d_flex_j_end, ...styles.paddingRight._45px }}>
        <Signature title="Nguời lập" isHours date={new Date()} />
      </div>
    </div>
  )
}

export default PhieuDSTamUng