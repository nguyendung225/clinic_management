import Signature from "../../../component/phieu-in/Signature";
import { styles } from "../../../component/phieu-in/constant";
import { RomanNumeralsConverter } from "../../../utils/AppFunction";

const PhieuInChiDinhCanLamSang = () => {
  let dataIn: any = {};
  dataIn.table = [
    {
      danhMuc: "LMBP TẠI KHOA XN, STT [1], Barcode [1100]",
      tenNhom: "Xét nghiệm Huyết Học, Số phiếu [714]",
      dichVus: [{ tenDichVu: "Tìm mảnh vỡ hồng cầu (thu phí)", donViTinh: "Lần", soLuong: "1", ghiChu: "", daTH: "" }],
    },
    {
      danhMuc: "XÉT NGHIỆM NGOẠI VIỆN, STT [1], Barcode [1099]",
      tenNhom: "Xét nghiệm khác",
      dichVus: [{ tenDichVu: "Xét nghiệm NIPT (thu phí)", donViTinh: "Lần", soLuong: "1", ghiChu: "", daTH: "" }],
    },
  ];
  return (
    <>
      <div style={styles.d_flex_j_around} className="d-flex justify-content-around">
        <div>
          <b>{`SỞ Y TẾ ${dataIn?.soYTe ?? "TEST"}`}</b>
          <br />
          <b>{`BỆNH VIỆN ĐA KHOA ${dataIn?.benhVien ?? "ABC"}`}</b>
        </div>
        <div>
          <div style={{ textAlign: "end" }}>PID: 24000026</div>
          <img style={{ width: "150px" }} src="/media/images/Barcode.png" alt="barcode" />
        </div>
      </div>
      <div style={{ ...styles.w_100, ...styles.overflow.hidden, marginTop: "20px" }}>
        <div style={styles.titleFrom}>{`PHIẾU CHỈ ĐỊNH CẬN LÂM SÀNG`}</div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <div>
          <span>
            - Họ và tên người bệnh: <b style={{ ...styles.textUppercase }}>{dataIn?.hoTen || "TRẦN MIÊN"}</b>
          </span>
          <span style={{ marginLeft: "60px", marginRight: "15px" }}>
            <span>NS: {dataIn?.ngaySinh || 2000} (24 tuổi)</span>
            <span style={{ marginLeft: 20 }}>Giới tính: {dataIn?.gioiTinh || "Nam"}</span>
          </span>
        </div>
        <div style={styles.d_flex_j_between}>
          <span>- Địa chỉ: {dataIn?.diaChi || "Phường Quán Thánh, Quận Ba Đình, Thành phố Hà Nội"}</span>
        </div>
        <div style={styles.d_flex_j_between}>
          <span>- Đối tượng: {dataIn?.doiTuong || "Yêu cầu"}</span>
        </div>
        <div style={styles.d_flex_j_between}>
          <span>- Khoa phòng: {dataIn?.khoaPhong || "Phòng khám ngoại (NGOẠI VIỆN)"}</span>
        </div>
        <div style={styles.d_flex_j_between}>
          <span>- Phòng: {dataIn?.phong || ""}</span>
        </div>
        <div style={styles.d_flex_j_between}>
          <span>- Giường: {dataIn?.giuong || ""}</span>
        </div>
        <div>- Chẩn đoán: {dataIn?.chanDoan || ""}</div>
      </div>
      <div style={{ ...styles.w_100, ...styles.overflow.hidden, marginTop: 7 }}>
        <div>
          <table style={styles.table}>
            <tr>
              <th style={styles.th}>Tên dịch vụ</th>
              <th style={styles.th}>Đơn vị tính</th>
              <th style={styles.th}>Số lượng</th>
              <th style={styles.th}>Ghi chú</th>
              <th style={styles.th}>Đã TH</th>
            </tr>
            <tbody>
              {dataIn?.table?.map((item: any, index: number) => (
                <>
                  <tr>
                    <td style={{ ...styles.border, ...styles.textUppercase, ...styles.fontBold }} colSpan={5}>
                      {RomanNumeralsConverter(index + 1)}. {item?.danhMuc}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ ...styles.border, paddingLeft: "15px", ...styles.font_italic }} colSpan={5}>
                      {item?.tenNhom}
                    </td>
                  </tr>
                  {item?.dichVus?.map((dichVu: any, i: number) => (
                    <tr>
                      <td style={{ ...styles.border, paddingLeft: "20px" }}>
                        {i + 1}. {dichVu?.tenDichVu}
                      </td>
                      <td style={{ ...styles.border, textAlign: "center" }}>{dichVu?.donViTinh}</td>
                      <td style={{ ...styles.border, textAlign: "center" }}>{dichVu?.soLuong}</td>
                      <td style={styles.border}>{dichVu?.ghiChu}</td>
                      <td style={styles.border}>{dichVu?.daTH}</td>
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ ...styles.marginTop._20px, ...styles.d_flex_j_between, padding: "0 75px" }}>
          <img style={{ width: "75px", height: "75px" }} src="/media/images/QrCode2.png" alt="qrCode" />
          <Signature date={new Date()} title={"Bác sĩ chỉ định"} isDate/>
        </div>
      </div>
    </>
  );
};

export default PhieuInChiDinhCanLamSang;
