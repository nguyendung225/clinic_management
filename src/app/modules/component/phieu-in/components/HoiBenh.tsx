import { styles } from "../constant";
import { UnderLineDots } from "./UnderLineDots";

export const HoiBenh = () => {
    return (
        <section>
            <div style={styles.mainContent}><strong>III. HỎI BỆNH:</strong></div>
            <div style={styles.d_flex}>
                <div style={styles.firstLineLetter}>
                    <strong>1. Quá trình bệnh lý:</strong><span style={styles.hr}></span>
                </div>
            </div>
            <UnderLineDots lineNumber={2}/>
            <div>
                <strong>2. Tiền sử bệnh:</strong>
            </div>
            <div style={{ ...styles.firstLineLetter, height: "22px" }}>
                + Bản thân: <span style={styles.hr}></span>
            </div>
            <div style={{ ...styles.firstLineLetter, height: "22px" }}>
                + Gia đình: <span style={styles.hr}></span>
            </div>
        </section>
    )
}