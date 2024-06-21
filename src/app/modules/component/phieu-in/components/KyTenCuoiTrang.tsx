import { styles } from "../constant";

export const KyTenCuoiTrang = () => {
    return (
        <>
            <div style={styles.d_flex}>
                <strong>7. Điều trị ngoại trú từ ngày</strong>........./........./.........đến ngày........./........./.........
            </div>
            <div style={styles.d_flex_j_between}>
                <div style={{ ...styles.w_30, ...styles.overflow.hidden }}>
                    <div style={{ height: "19px" }}></div>
                    <div style={{ ...styles.textAlign.center, marginBottom: "50px" }}><strong>Giám đốc bệnh viện</strong></div>
                    <div style={{ ...styles.position.relative, lineHeight: "25px" }}>Họ và tên:<span style={styles.hr}></span></div>
                </div>
                <div style={{ ...styles.w_40, ...styles.overflow.hidden }}>
                </div>
                <div style={{ ...styles.w_30, ...styles.overflow.hidden }}>
                    <div style={styles.textAlign.center}>Ngày ....... tháng ...... năm .......</div>
                    <div style={{ ...styles.textAlign.center, marginBottom: "50px" }}><strong>Bác sĩ khám bệnh</strong></div>
                    <div style={{ ...styles.position.relative, lineHeight: "25px" }}>Họ và tên:<span style={styles.hr}></span></div>
                </div>
            </div>
        </>
    )
}