import { styles } from "../../component/phieu-in/constant"

export const TemplatePhieuThu = ({ data }: any) => {
    return (
        <div>
            <div style={{ ...styles.d_flex_j_between }}>
                <div style={{ ...styles.paddingLeft._10px }}>
                    <div style={{ ...styles.fontBold, ...styles.fontSize._16px }}>SỞ Y TẾ TEST</div>
                    <div style={{ ...styles.fontBold, ...styles.fontSize._16px }}>BỆNH VIỆN ĐA KHOA TEST</div>
                </div>

                <div style={{ ...styles.textAlign.center, ...styles.paddingBottom._20px }}>
                    <div style={{ ...styles.fontBold, ...styles.fontSize._18px }}>PHIẾU THU</div>
                    <div style={styles.fontSize._16px}>(Lưu)</div>
                </div>


                <div style={{ ...styles.flex_column, ...styles.alignItems.start }}>
                    <div style={{ ...styles.fontSize._18px }}>Số quyển: <span style={{ ...styles.fontBold, ...styles.fontSize._18px }}>TamUngHoaDon</span></div>
                    <div style={{ ...styles.fontSize._18px }}>Số CT: <span style={{ ...styles.fontBold, ...styles.fontSize._18px }}>27</span></div>
                </div>
            </div>

            <div style={{ ...styles.paddingBottom._20px }}>
                <div style={{ ...styles.fontSize._18px }}>Họ và tên người bệnh: <span style={{ ...styles.fontBold, ...styles.fontSize._18px }}>Nguyễn Văn A</span> <span style={{ ...styles.paddingLeft._70px, ...styles.fontSize._18px }}>Tuổi: 24 </span> <span style={{ ...styles.paddingLeft._50px, ...styles.fontSize._18px }}>Giới tính: Nam</span></div>
                <div style={{ ...styles.fontSize._18px }}>Địa chỉ: Phường Quán Thánh, Quận Ba Đình, Thành Phố Hà Nội</div>
                <div style={{ ...styles.fontSize._18px }}>Khoa phòng: <span style={{ ...styles.fontBold, ...styles.fontSize._18px }}>Thu ngân nhà thuốc</span></div>
                <div style={{ ...styles.fontSize._18px }}>Số tiền thanh toán: <span style={{ ...styles.fontBold, ...styles.fontSize._18px }}>50.000</span> đồng.</div>
                <div style={{ ...styles.fontSize._18px }}>Số tiền viết bằng chữ: Năm mươi nghìn đồng</div>
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