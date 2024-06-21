import moment from "moment";
import { styles } from "../constant";

type Props = {
  name: string;
};

const PhieuKetQuaXetNghiem = (props: Props) => {
  let { name } = props;
  let dataIn: any = {};

  return (
    <>
        <div style={styles.d_flex_j_around} className="d-flex justify-content-around">
          <div>
            <b>{`SỞ Y TẾ ${dataIn?.soYTe ?? ""}`}</b><br/>
            <b>{`BỆNH VIỆN ĐA KHOA ${dataIn?.benhVien ?? ""}`}</b>
            <div>Thành phố Hà Nội</div>
            <div>Điện thoại: 0988666999</div>
            <div>Website: benhvienhoenhai.vn</div>
          </div>
          <div>
            <img style={{ width: "150px" }} src="/media/images/Barcode.png" alt="barcode" />
            <div>Mã BN: 24000042</div>
            <div>Số phiếu: XN2301123</div>
            <div>Thời gian lấy mẫu: {moment().subtract(10,"m").format("hh:mm DD/MM/YYYY")}</div>
            <div>Thời gian nhận mẫu: {moment().format("hh:mm DD/MM/YYYY")}</div>
            <div>Tình trạng mẫu: <b>Đạt</b></div>
            <b>Barcode: 1114</b>
          </div>
        </div>
        <div style={{ ...styles.w_100, ...styles.overflow.hidden, marginTop:"20px" }}>
          <div style={styles.titleFrom}>{`PHIẾU KẾT QUẢ XÉT NGHIỆM ${name}`}</div>
          <div
            style={{
              ...styles.d_flex,
              justifyContent: "center",
              margin: "5px 0 10px 0",
            }}
          >
            <span style={{
              marginRight: "10px",
              display: "flex"
            }}>
              Thường:&nbsp;
              <input type="checkbox" checked style={styles.checkbox_checked}></input>
            </span>
            <span style={{
              marginRight: "10px",
              display: "flex"
            }}>
              Cấp cứu:&nbsp;
              <input type="checkbox" style={styles.checkbox}></input>
            </span>
          </div>
        </div>
        <div>
          <div style={styles.d_flex_j_between}><span>Họ và tên người bệnh: <b>{dataIn?.hoTen || "Nguyễn Đình Công"}</b></span> <span style={{width: "280px",marginRight:"50px"}}><span>Ngày sinh: {dataIn?.ngaySinh || 2000}</span> <span style={{marginLeft:20}}>Giới tính: {dataIn?.gioiTinh || "Nam"}</span></span> </div>
          <div style={styles.d_flex_j_between}><span>Địa chỉ: {dataIn?.diaChi || "Phường Quán Thánh, Quận Ba Đình, Thành phố Hà Nội"}</span><span style={{width: "280px",marginRight:"50px"}}>Số thẻ BHYT:</span></div>
          <div style={styles.d_flex_j_between}><span>Phòng chỉ định: {dataIn?.phongChiDinh || "P315 - Mắt"}</span><span style={{width: "280px",marginRight:"50px"}}>Khoa <b>Khoa khám bệnh</b></span></div>
          <div style={styles.d_flex_j_between}><span>Bác sĩ chỉ định: {dataIn?.bacSiChiDinh || "Nguyễn Duy Quân"}</span> <span style={{width: "280px",marginRight:"50px"}}>Thời gian chỉ định <b>{moment().format("hh:mm DD/MM/YYYY")} </b></span></div>
          <div style={styles.d_flex_j_between}><span>Buồng: {dataIn?.buong || ""}</span><span style={{width: "280px",marginRight:"50px"}}>Giường:</span> </div>
          <div>Chẩn đoán: {dataIn?.chanDoan || ""}</div>
          <div>Người lấy mẫu: {dataIn?.nguoiLayMau || "Trần Quốc Anh"}</div>
        </div>
        <div style={{ ...styles.w_100, ...styles.overflow.hidden,marginTop: 7 }}>
          <div>
            <table style={styles.table}>
              <tr>
                <th style={styles.th}>TÊN XÉT NGHIỆM</th>
                <th style={styles.th}>KẾT QUẢ</th>
                <th style={styles.th}>ĐƠN VỊ</th>
                <th style={styles.th}>GT THAM CHIẾU</th>
                <th style={styles.th}>MÁY XN/PPXN</th>
              </tr>
              <tbody>
                <tr>
                  <td style={styles.border}>Định tính Dưỡng chất</td>
                  <td style={{...styles.border, ...styles.textAlign.center}}>Tốt</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style={{...styles.d_flex_j_between, marginTop:"20px"}}>
                <div style={{ ...styles.w_40, ...styles.overflow.hidden }}>
                    <div style={{ ...styles.textAlign.center, marginBottom: "50px" }}><strong>NGƯỜI THỰC HIỆN</strong></div>
                </div>
                <div style={{ ...styles.w_20, ...styles.overflow.hidden }}>
                </div>
                <div style={{ ...styles.w_40, ...styles.overflow.hidden }}>
                    <div style={styles.textAlign.center}><i>{moment().format(`Giờ hh:mm [Ngày] DD [tháng] MM [năm] YYYY`)}</i></div>
                    <div style={{ ...styles.textAlign.center, marginBottom: "50px" }}><strong>KHOA THỰC HIỆN</strong></div>
                </div>
            </div>
        </div>
      </>
  );
};

export default PhieuKetQuaXetNghiem;
