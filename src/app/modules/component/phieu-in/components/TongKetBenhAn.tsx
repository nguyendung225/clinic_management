import { styles } from "../constant";
import { UnderLineDots } from "./UnderLineDots";

export const TongKetBenhAn = () => {
    return (
        <section style={{ marginTop: "100px" }}>
            <div style={{ fontSize: "17px" }}><strong>TỔNG KẾT BỆNH ÁN:</strong></div>
            <div style={{ border: "2px solid" }}>
                <div style={{ padding: "8px" }}>
                    <div style={styles.d_flex}>
                        <div style={styles.firstLineLetter}>
                            <strong>1. Quá trình bệnh lý và diễn biến lâm sàng:</strong><span style={styles.hr}></span>
                        </div>
                    </div>
                    <UnderLineDots lineNumber={9} />
                    <div style={styles.d_flex}>
                        <div style={styles.firstLineLetter}>
                            <strong>2. Tóm tắt kết quả xét nghiệm cận lâm sàng có giá trị chẩn đoán:</strong><span style={styles.hr}></span>
                        </div>
                    </div>
                    <UnderLineDots lineNumber={5} />
                    <div>
                        <strong>3. Chẩn đoán ra viện:</strong>
                    </div>
                    <div style={styles.d_flex}>
                        <div style={{ ...styles.firstLineLetter, lineHeight: "25px" }}>
                            - Bệnh chính: <span style={styles.hr}></span>
                            <span style={styles.lastLetter}>
                                <span style={styles.box_square}></span>
                                <span style={styles.box_square}></span>
                                <span style={styles.box_square}></span>
                                <span style={styles.box_square}></span>
                            </span>
                        </div>
                    </div>
                    <div style={styles.d_flex}>
                        <div style={{ ...styles.firstLineLetter, lineHeight: "25px" }}>
                            - Bệnh kèm theo <i>(nếu có)</i>: <span style={styles.hr}></span>
                            <span style={styles.lastLetter}>
                                <span style={styles.box_square}></span>
                                <span style={styles.box_square}></span>
                                <span style={styles.box_square}></span>
                                <span style={styles.box_square}></span>
                            </span>
                        </div>
                    </div>
                    <div style={styles.d_flex}>
                        <div style={styles.firstLineLetter}>
                            <strong>4. Phương pháp điều trị:</strong><span style={styles.hr}></span>
                        </div>
                    </div>
                    <UnderLineDots lineNumber={4} />
                    <div style={styles.d_flex}>
                        <div style={styles.firstLineLetter}>
                            <strong>5. Tình trạng nguòi bệnh ra viện:</strong><span style={styles.hr}></span>
                        </div>
                    </div>
                    <UnderLineDots lineNumber={5} />
                    <div style={styles.d_flex}>
                        <div style={styles.firstLineLetter}>
                            <strong>6. Hướng điều trị và các chế độ tiếp theo:</strong><span style={styles.hr}></span>
                        </div>
                    </div>
                    <UnderLineDots lineNumber={4} />
                </div>
                <footer style={styles.d_flex}>
                    <div style={{ ...styles.w_40, ...styles.position.relative, ...styles.overflow.hidden, borderTop: "1px solid" }}>
                        <div style={styles.textAlign.center}><strong>Hồ sơ, phim, ảnh</strong></div>
                        <div style={styles.d_flex}>
                            <div style={{ ...styles.w_70, ...styles.overflow.hidden, borderTop: "1px solid", borderRight: "1px solid" }}>
                                <div style={styles.textAlign.center}><strong>Loại</strong></div>
                                <div style={{ ...styles.position.relative, height: "23px", borderBottom: "1px dotted", borderTop: "1px solid", padding: "0 8px" }}>- X-quang</div>
                                <div style={{ ...styles.position.relative, height: "22px", borderBottom: "1px dotted", padding: "0 8px" }}>- CT Scanner</div>
                                <div style={{ ...styles.position.relative, height: "22px", borderBottom: "1px dotted", padding: "0 8px" }}>- Siêu âm</div>
                                <div style={{ ...styles.position.relative, height: "22px", borderBottom: "1px dotted", padding: "0 8px" }}>- Xét nghiệm</div>
                                <div style={{ ...styles.position.relative, height: "22px", borderBottom: "1px dotted", padding: "0 8px" }}>- Khác<span style={{ ...styles.hr, ...styles.w_70 }}></span></div>
                                <div style={{ ...styles.position.relative, height: "22px", borderBottom: "1px dotted", padding: "0 8px" }}>Toàn bộ hồ sơ</div>
                            </div>
                            <div style={{ ...styles.w_30, borderTop: "1px solid" }}>
                                <div style={styles.textAlign.center}><strong>Số tờ</strong></div>
                                <div style={{ height: "23px", borderBottom: "1px dotted", borderTop: "1px solid", padding: "0 8px" }}></div>
                                <div style={{ height: "22px", borderBottom: "1px dotted", padding: "0 8px" }}></div>
                                <div style={{ height: "22px", borderBottom: "1px dotted", padding: "0 8px" }}></div>
                                <div style={{ height: "22px", borderBottom: "1px dotted", padding: "0 8px" }}></div>
                                <div style={{ height: "22px", borderBottom: "1px dotted", padding: "0 8px" }}></div>
                                <div style={{ height: "22px", borderBottom: "1px dotted", padding: "0 8px" }}></div>
                            </div>
                        </div>
                    </div>
                    <div style={{ ...styles.w_25, ...styles.position.relative, ...styles.overflow.hidden, borderTop: "1px solid", borderLeft: "1px solid", borderRight: "1px solid" }}>
                        <div style={{ padding: "6px" }}>
                            <div style={styles.textAlign.center}><strong>Người giao hồ sơ:</strong></div>
                            <div style={{ ...styles.position.relative, marginTop: "40px" }}>Họ và tên:<span style={{ ...styles.hr, ...styles.w_60 }}></span></div>
                        </div>
                        <div style={{ borderTop: "1px solid", padding: "6px" }}>
                            <div style={styles.textAlign.center}><strong>Người nhận hồ sơ:</strong></div>
                            <div style={{ ...styles.position.relative, marginTop: "40px" }}>Họ và tên:<span style={{ ...styles.hr, ...styles.w_60 }}></span></div>
                        </div>
                    </div>
                    <div style={{ ...styles.w_35, ...styles.position.relative, ...styles.overflow.hidden, borderTop: "1px solid", padding: "8px" }}>
                        <div style={styles.textAlign.center}>Ngày.........tháng.........năm..........</div>
                        <div style={styles.textAlign.center}><strong>Bác sĩ điều trị</strong></div>
                        <div style={{ ...styles.position.relative, marginTop: "100px" }}>Họ và tên:<span style={{ ...styles.hr, ...styles.w_70 }}></span></div>
                    </div>
                </footer>
            </div>
        </section>
    )
}