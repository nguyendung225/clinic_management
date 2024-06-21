import { styles } from '../../../../component/phieu-in/constant';

export const PhieuThuTamUng = ({ data }: any) => {
  return (
    <div>
      <div style={{ ...styles.d_flex_j_between }}>
        <div style={{ ...styles.paddingLeft._70px }}>
          <div style={{ ...styles.fontBold, ...styles.fontSize._16px }}>SỞ Y TẾ TEST</div>
          <div style={{ ...styles.fontBold, ...styles.fontSize._16px }}>BỆNH VIỆN ĐA KHOA TEST</div>
        </div>

        <div style={{ ...styles.flex_column, ...styles.alignItems.end }}>
          <div style={{ ...styles.fontSize._18px }}>Số quyển: <span style={{ ...styles.fontBold, ...styles.fontSize._18px }}>TamUngHoaDon</span></div>
          <div style={{ ...styles.fontSize._18px }}>Sổ chứng từ: <span style={{ ...styles.fontBold, ...styles.fontSize._18px }}>27</span></div>
          <div style={{ ...styles.font_italic, ...styles.fontSize._18px }}>Ngày in: 17:52 09/01/2024</div>
        </div>
      </div>

      <div style={{ ...styles.textAlign.center, ...styles.paddingBottom._20px }}>
        <div style={{ ...styles.fontBold, ...styles.fontSize._18px }}>PHIẾU THU TẠM ỨNG</div>
        <div style={styles.fontSize._16px}>Liên 2: Giao cho người bệnh</div>
      </div>

      <div style={{ ...styles.paddingBottom._20px }}>
        <div style={{ ...styles.fontSize._18px }}>Họ và tên người bệnh: <span style={{ ...styles.fontBold, ...styles.fontSize._18px }}>Nguyễn Văn A</span> <span style={{ ...styles.paddingLeft._70px, ...styles.fontSize._18px }}>Năm sinh: 2000 (24 tuổi)</span> <span style={{ ...styles.paddingLeft._50px, ...styles.fontSize._18px }}>Giới tính: Nam</span></div>
        <div style={{ ...styles.fontSize._18px }}>Mã người bệnh: <span style={{ ...styles.fontBold, ...styles.fontSize._18px }}>123456</span> <span style={{ ...styles.paddingLeft._174px, ...styles.fontSize._18px }}>Mã viện phí: <span style={{ ...styles.fontBold, ...styles.fontSize._18px }}>190</span></span></div>
        <div style={{ ...styles.fontSize._18px }}>Khoa: <span style={{ ...styles.fontBold, ...styles.fontSize._18px }}>Phòng khám Nội (NGOẠI VIỆN)</span>  <span style={{ ...styles.paddingLeft._44px, ...styles.fontSize._18px }}>Số bệnh án: <span style={styles.fontSize._18px}>012</span></span></div>
        <div style={{ ...styles.fontSize._18px }}>Địa chỉ: Phường Quán Thánh, Quận Ba Đình, Thành Phố Hà Nội</div>
        <div style={{ ...styles.fontSize._18px }}>Đối tượng: Yêu cầu</div>
        <div style={{ ...styles.fontSize._18px }}>Số tiền thanh toán: 50.000 đồng.</div>
        <div style={{ ...styles.fontSize._18px }}>Số tiền viết bằng chữ: Năm mươi nghìn đồng</div>
        <div style={{ ...styles.fontSize._18px }}>Hình thức thu: <span style={{ ...styles.fontBold, ...styles.fontSize._18px }}>Tiền mặt</span> <span style={styles.fontSize._18px}>- Nội dung: Thu tạm ứng</span></div>
        <div style={{ ...styles.fontBold, ...styles.font_italic, ...styles.fontSize._18px }}>Lưu ý: Bệnh nhân giữ gìn phiếu tạm ứng cẩn thận, nếu mất không thanh toán được.</div>
      </div>

      <div style={{ ...styles.d_flex_j_around, ...styles.paddingBottom._50px }}>
        <div style={{ ...styles.fontBold, ...styles.fontSize._18px }}>Người nộp</div>

        <div style={{ ...styles.textAlign.center }}>
          <div style={{ ...styles.font_italic, ...styles.fontSize._18px }}>15:00 Ngày 12 tháng 01 năm 2024</div>
          <div style={{ ...styles.fontBold, ...styles.fontSize._18px }}>Người lập phiếu</div>
        </div>
      </div>
    </div>
  )
}