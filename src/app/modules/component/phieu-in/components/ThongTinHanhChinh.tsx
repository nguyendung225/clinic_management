import { styles } from "../constant";

export const ThongTinHanhChinh = () => {
    return (
        <section>
            <div style={styles.mainContent}>I. HÀNH CHÍNH:</div>
            <div style={{ ...styles.d_flex, alignItems: "center", lineHeight: "25px" }}>
                <div style={{ ...styles.firstLineLetter, ...styles.w_50 }}>
                    <span>1. Họ và tên <i>(In hoa)</i>:<span style={styles.hr}></span></span>
                </div>
                <div style={{ ...styles.d_flex, ...styles.w_50, justifyContent: "space-between", paddingLeft: "8px" }}>
                    <div>
                        <span style={{ marginRight: "8px" }}>2. Ngày sinh:</span>
                        <span style={styles.box_square}></span>
                        <span style={styles.box_square}></span>
                        <span style={styles.box_square}></span>
                        <span style={styles.box_square}></span>
                        <span style={styles.box_square}></span>
                        <span style={styles.box_square}></span>
                        <span style={styles.box_square}></span>
                    </div>
                    <div style={{ ...styles.position.relative }}>
                        <span style={{ position: "absolute", bottom: "100%", width: "100%", textAlign: "center" }}>Tuổi</span>
                        <span style={styles.box_square}></span>
                        <span style={styles.box_square}></span>
                    </div>
                </div>
            </div>
            <div style={{ ...styles.d_flex, lineHeight: "25px" }}>
                <div style={{ ...styles.w_50, ...styles.d_flex }}>
                    3. Giới:
                    <div style={styles.w_10}></div> 1.Nam <span style={styles.box_square}></span>
                    <div style={styles.w_10}></div> 2.Nữ <span style={styles.box_square}></span>
                </div>
                <div style={{ ...styles.firstLineLetter, ...styles.w_50, paddingLeft: "8px" }}>
                    4. Nghề nghiệp:<span style={styles.hr}></span>
                    <span style={styles.lastLetter}>
                        <span style={styles.box_square}></span>
                        <span style={styles.box_square}></span>
                    </span>
                </div>
            </div>
            <div style={{ ...styles.d_flex, lineHeight: "25px" }}>
                <div style={{ ...styles.firstLineLetter, ...styles.w_50 }}>
                    5. Dân tộc:<span style={styles.hr}></span>
                    <span style={styles.lastLetter}>
                        <span style={styles.box_square}></span>
                        <span style={styles.box_square}></span>
                    </span>
                </div>
                <div style={{ ...styles.firstLineLetter, ...styles.w_50, paddingLeft: "8px" }}>
                    6. Ngoại kiều:<span style={styles.hr}></span>
                    <span style={styles.lastLetter}>
                        <span style={styles.box_square}></span>
                        <span style={styles.box_square}></span>
                    </span>
                </div>
            </div>
            <div style={{ ...styles.d_flex, lineHeight: "25px" }}>
                <div style={{ ...styles.firstLineLetter, ...styles.w_20 }}>
                    7. Địa chỉ: Số nhà<span style={styles.hr}></span>
                </div>
                <div style={{ ...styles.firstLineLetter, ...styles.w_30 }}>
                    Thôn, phố<span style={styles.hr}></span>
                </div>
                <div style={{ ...styles.firstLineLetter, ...styles.w_50, paddingLeft: "8px" }}>
                    Xã, phường:<span style={styles.hr}></span>
                </div>
            </div>
            <div style={{ ...styles.d_flex, lineHeight: "25px" }}>
                <div style={{ ...styles.firstLineLetter, ...styles.w_50 }}>
                    Huyện(Q, Tx)<span style={styles.hr}></span>
                    <span style={styles.lastLetter}>
                        <span style={styles.box_square}></span>
                        <span style={styles.box_square}></span>
                    </span>
                </div>
                <div style={{ ...styles.firstLineLetter, ...styles.w_50, paddingLeft: "8px" }}>
                    Tỉnh, thành phố:<span style={styles.hr}></span>
                    <span style={styles.lastLetter}>
                        <span style={styles.box_square}></span>
                        <span style={styles.box_square}></span>
                    </span>
                </div>
            </div>
            <div style={{ ...styles.d_flex, lineHeight: "25px" }}>
                <div style={styles.firstLineLetter}>
                    8. Nơi làm việc:<span style={styles.hr}></span>
                    <div style={{ ...styles.lastLetter, paddingLeft: "8px" }}>
                        <div style={styles.d_flex}>
                            9. Đối tượng: &nbsp;
                            1.BHYT <span style={styles.box_square}></span> &nbsp;
                            2.Thu phí <span style={styles.box_square}></span>&nbsp;
                            3.Miễn <span style={styles.box_square}></span>&nbsp;
                            4.Khác <span style={styles.box_square}></span>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ ...styles.d_flex, lineHeight: "25px" }}>
                <div style={styles.firstLineLetter}>
                    10. BHYT giá trị đến ngày.......tháng.......năm <span style={styles.hr}></span>
                    <div style={{ ...styles.lastLetter, paddingLeft: "8px" }}>
                        <div style={styles.d_flex}>
                            Số thẻ BHYT &nbsp;
                            <span style={{ ...styles.box_square, width: "40px" }}></span>
                            <span style={{ ...styles.box_square, width: "40px" }}></span>
                            <span style={{ ...styles.box_square, width: "40px" }}></span>
                            <span style={{ ...styles.box_square, width: "40px" }}></span>
                            <span style={{ ...styles.box_square, width: "80px" }}></span>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ ...styles.d_flex, lineHeight: "25px" }}>
                <div style={styles.firstLineLetter}>
                    11. Họ tên, địa chỉ người nhà khi cần báo tin <span style={styles.hr}></span>
                </div>
            </div>
            <div style={{ ...styles.d_flex, lineHeight: "25px" }}>
                <div style={{ ...styles.firstLineLetter, ...styles.w_50 }}>
                    <span style={styles.hr}></span>
                </div>
                <div style={{ ...styles.firstLineLetter, ...styles.w_50, paddingLeft: "8px" }}>
                    Điện thoại số <span style={styles.hr}></span>
                </div>
            </div>
            <div style={{ ...styles.d_flex, lineHeight: "25px" }}>
                <div style={styles.firstLineLetter}>
                    12. Đến khám bệnh lúc.........giờ.........phút &nbsp; ngày.........tháng........năm.........
                </div>
            </div>
            <div style={{ ...styles.d_flex, lineHeight: "25px" }}>
                <div style={styles.firstLineLetter}>
                    13. Chẩn đoán của nơi giới thiệu <span style={styles.hr}></span>
                    <div style={{ ...styles.lastLetter, paddingLeft: "8px" }}>
                        <div style={styles.d_flex}>
                            1.Y tế &nbsp;<span style={styles.box_square}></span>&nbsp;
                            2.Tự đến &nbsp;<span style={styles.box_square}></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}