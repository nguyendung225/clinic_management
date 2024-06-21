import { styles } from "../constant";

export const KyTenCuoiTrangPhieuXetNghiem = () => {
    return (
        <>
            <div style={styles.d_flex_j_between}>
                <div style={{ ...styles.w_40, ...styles.overflow.hidden }}>
                <div style={styles.textAlign.center}><i>....... Giờ ....... ngày ....... tháng ...... năm .......</i></div>
                    <div style={{ ...styles.textAlign.center, marginBottom: "50px" }}><strong>BÁC SĨ ĐIỀU TRỊ</strong></div>
                    <div style={{ ...styles.position.relative, lineHeight: "25px" }}>Họ và tên:<span style={styles.hr}></span></div>
                </div>
                <div style={{ ...styles.w_20, ...styles.overflow.hidden }}>
                </div>
                <div style={{ ...styles.w_40, ...styles.overflow.hidden }}>
                    <div style={styles.textAlign.center}><i>....... Giờ ....... ngày ....... tháng ...... năm .......</i></div>
                    <div style={{ ...styles.textAlign.center, marginBottom: "50px" }}><strong>TRƯỞNG KHOA XÉT NGHIỆM</strong></div>
                    <div style={{ ...styles.position.relative, lineHeight: "25px" }}>Họ và tên:<span style={styles.hr}></span></div>
                </div>
            </div>
        </>
    )
}