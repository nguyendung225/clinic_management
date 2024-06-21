import React from 'react'
import { styles } from '../../../component/phieu-in/constant'
import moment from 'moment'
import Signature from '../../../component/phieu-in/Signature'

type Props = {}

const PhieuTheKho = (props: Props) => {
  return (
    <div>
      <div style={{...styles.d_flex_j_between, ...styles.marginBottom._10px}}>
        <div>
          <div style={{...styles.textUppercase}}>Sở y tế</div>
          <div style={{...styles.textUppercase, ...styles.fontBold}}>bệnh viện đa khoa</div>
          <div style={{...styles.fontBold}}>Khoa Huyết Học - Kho vật tư Huyết Học</div>
        </div>

        <div>
          <div>MS: 04D/BV-01</div>
          <div>Số: ................</div>
        </div>
      </div>

      <div style={styles.marginBottom._10px}>
        <div style={{...styles.fontBold, ...styles.textAlign.center}}>THẺ KHO</div>
        <div style={{...styles.textAlign.center}}>Từ {moment().format("00:00 DD/MM/YYYY")} đến {moment().format("23:59 DD/MM/YYYY")}</div>
      </div>

      <div style={styles.marginBottom._10px}>
        <div>Mã số thuốc: <span style={{...styles.fontBold}}>NCDXD</span></div>
        <div>Tên thuốc/Hóa chất/Vật dụng y tế tiêu hao: <span style={{...styles.fontBold}}>Nẹp cố định xương đùi</span></div>
        <div style={{...styles.d_flex}}>
          <div style={{...styles.minWidth._490px}}>Hàm lượng/Nồng độ/Quy cách:</div>
          <div>Mã vạch: </div>
        </div>
        <div>Đơn vị: <span style={{...styles.fontBold}}>Bộ</span></div>
      </div>

      <div className='overflow-auto' style={styles.marginBottom._10px}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={{...styles.border1, ...styles.textAlign.center}} rowSpan={2}>Ngày tháng</th>
              <th style={{...styles.border1, ...styles.textAlign.center}} colSpan={2}>Số chứng từ</th>
              <th style={{...styles.border1, ...styles.textAlign.center}} rowSpan={2}>Số lô</th>
              <th style={{...styles.border1, ...styles.textAlign.center}} rowSpan={2}>Hạn sử dụng</th>
              <th style={{...styles.border1, ...styles.textAlign.center}} rowSpan={2}>Diễn giải</th>
              <th style={{...styles.border1, ...styles.textAlign.center}} colSpan={4}>Số lượng</th>
              <th style={{...styles.border1, ...styles.textAlign.center}} rowSpan={2}>Ghi chú</th>
            </tr>

            <tr>
              <th style={{...styles.border1, ...styles.textAlign.center}}>nhập</th>
              <th style={{...styles.border1, ...styles.textAlign.center}}>xuất</th>
              <th style={{...styles.border1, ...styles.textAlign.center}}>đầu kỳ</th>
              <th style={{...styles.border1, ...styles.textAlign.center}}>nhập</th>
              <th style={{...styles.border1, ...styles.textAlign.center}}>xuất</th>
              <th style={{...styles.border1, ...styles.textAlign.center}}>tồn</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={{...styles.border1, ...styles.textAlign.center}}>1</td>
              <td style={{...styles.border1, ...styles.textAlign.center}}>2</td>
              <td style={{...styles.border1, ...styles.textAlign.center}}>3</td>
              <td style={{...styles.border1, ...styles.textAlign.center}}>4</td>
              <td style={{...styles.border1, ...styles.textAlign.center}}>5</td>
              <td style={{...styles.border1, ...styles.textAlign.center}}>6</td>
              <td style={{...styles.border1, ...styles.textAlign.center}}>7</td>
              <td style={{...styles.border1, ...styles.textAlign.center}}>8</td>
              <td style={{...styles.border1, ...styles.textAlign.center}}>9</td>
              <td style={{...styles.border1, ...styles.textAlign.center}}>10</td>
              <td style={{...styles.border1, ...styles.textAlign.center}}>11</td>
            </tr>

            <tr>
              <td style={{...styles.border1, ...styles.fontBold, ...styles.textAlign.center}} colSpan={6}>Tồn kỳ trước</td>
              <td style={{...styles.border1, ...styles.textAlign.right}}>0</td>
              <td style={{...styles.border1, ...styles.textAlign.right}}>15</td>
              <td style={{...styles.border1, ...styles.textAlign.right}}>0</td>
              <td style={{...styles.border1, ...styles.textAlign.right}}>15</td>
              <td style={{...styles.border1}}></td>
            </tr>

            <tr>
              <td style={{...styles.border1, ...styles.fontBold, ...styles.textAlign.center}} colSpan={6}>Cộng trong kỳ</td>
              <td style={{...styles.border1, ...styles.textAlign.right}}>15</td>
              <td style={{...styles.border1, ...styles.textAlign.right}}>0</td>
              <td style={{...styles.border1, ...styles.textAlign.right}}>0</td>
              <td style={{...styles.border1, ...styles.textAlign.right, ...styles.fontBold}}>15</td>
              <td style={{...styles.border1}}></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{...styles.d_flex_j_around}}>
        <Signature title='Thủ kho' subTitle='(Ký, ghi rõ họ tên)'/>
        <Signature title='trưởng khoa dược/phòng vtyt' subTitle='(Ký, ghi rõ họ tên)'/>
        <Signature title='phó giám đốc' subTitle='(Ký, ghi rõ họ tên)'/>
      </div>
    </div>
  )
}

export default PhieuTheKho