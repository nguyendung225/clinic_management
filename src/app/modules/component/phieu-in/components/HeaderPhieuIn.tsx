import { styles } from "../constant";

type Props = {
    title: string,
    subTitle: string
}

export const HeaderPhieuIn = ({title, subTitle}: Props) => {
    return (
        <div style={{ ...styles.d_flex_j_between, alignItems: "center" }}>
            <div style={{ ...styles.w_25, ...styles.overflow.hidden }}>
                <div style={{ ...styles.position.relative, lineHeight: "25px" }}>Sở y tế:<span style={styles.hr}></span></div>
                <div style={{ ...styles.position.relative, lineHeight: "25px" }}>Bệnh viện:<span style={styles.hr}></span></div>
                <div style={{ ...styles.position.relative, lineHeight: "25px" }}>Khoa:<span style={styles.hr}></span></div>
            </div>
            <div style={{ ...styles.w_40, ...styles.overflow.hidden }}>
                <div style={{ ...styles.titleFrom, fontSize: "18px" }}>{title}</div>
                <div style={{ ...styles.position.relative, ...styles.textAlign.center, fontWeight: "bold", lineHeight: "25px", fontSize: "16px" }}>{subTitle}</div>
            </div>
            <div style={{ ...styles.w_25, ...styles.overflow.hidden }}>
                <div style={{ ...styles.position.relative, lineHeight: "25px" }}>Số ngoại trú:<span style={styles.hr}></span></div>
                <div style={{ ...styles.position.relative, lineHeight: "25px" }}>Số lưu trữ:<span style={styles.hr}></span></div>
            </div>
        </div>
    )
}
