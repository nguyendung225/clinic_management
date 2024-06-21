import moment from 'moment'
import Signature from '../../../../component/phieu-in/Signature'
import { styles } from '../../../../component/phieu-in/constant'
import { convertNumberPrice } from '../../../../utils/FormatUtils'
import { DICH_VU } from '../../fakeData'

type Props = {}

const PhieuBaoCaoThuTienVienPhiBaoHiem = (props: Props) => {

  const renderDichVu = (data: any, index: number) => {
    return (
      <>
        <tr key={index}>
          <td style={{ ...styles.border1, ...styles.textAlign.center, ...styles.fontBold }}>{(data?.items?.length > 0) && index + 1}</td>
          <td style={{ ...styles.border1, ...styles.fontBoldCondition(data?.items?.length > 0) }}>{data?.tenDichVu}</td>
          <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
          <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
          <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
          <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
        </tr>
        {data?.items?.length > 0 && data?.items?.map((item: any, index: number) => renderDichVu(item, index))}
      </>
    )
  }

  return (
    <div>
      <div>
        <div>SỞ Y TẾ TEST</div>
        <div style={{ ...styles.fontBold }}>BỆNH VIỆN ĐA KHOA</div>
      </div>

      <div style={styles.marginBottom._10px}>
        <div style={{ ...styles.fontBold, ...styles.textAlign.center, ...styles.textUppercase }}>BÁO CÁO THU TIỀN VIỆN PHÍ - BẢO HIỂM</div>
        <div style={{ ...styles.textAlign.center, ...styles.fontBold }}>Từ {moment().format("00:00 DD/MM/YYYY")} đến {moment().format("23:59 DD/MM/YYYY")}</div>
      </div>

      <div className="overflow-auto" style={styles.marginBottom._10px}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._45px }} rowSpan={2}>STT</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._200px }} rowSpan={2}>Tên nhóm báo cáo</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._125px }} rowSpan={2}>Viện phí</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center }} colSpan={3}>BHYT</th>
            </tr>

            <tr>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._120px }}>Tổng chi phí</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._120px }}>BH trả</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._120px }}>Bệnh nhân trả</th>
            </tr>
          </thead>

          <tbody>
            {
              DICH_VU.map((item, index) => {
                return renderDichVu(item, index)
              })
            }

            <tr>
              <td style={{ ...styles.border1 }}></td>
              <td style={{ ...styles.border1, ...styles.fontBold, ...styles.colorRed }}>TỔNG CỘNG</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
              <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={styles.d_flex_j_end}>
        <Signature style={styles.paddingRight._70px} title="Người lập" isHours date={new Date()} />
      </div>
    </div>
  )
}

export default PhieuBaoCaoThuTienVienPhiBaoHiem