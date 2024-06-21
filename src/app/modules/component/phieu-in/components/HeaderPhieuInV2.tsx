import React from 'react'
import { styles } from "../constant";
import CustomTextarea from '../../custom-textarea/CustomTextarea'

type Props = {
    data?: any
}

const HeaderPhieuInV2 = (props: Props) => {
    return (
        <div style={{ ...styles.d_flex_j_between, marginBottom: "25px" }}>
            <div style={{ ...styles.w_25, ...styles.overflow.hidden }}>
                <div style={{ ...styles.w_100, display: "flex", alignItems: "center" }}>
                    <span
                        className="mb-6-px"
                        style={{ marginBottom: "-2px", width: "70px" }}>Sở y tế:</span>
                    <CustomTextarea
                        disabled
                    />
                </div>
                <div style={{ ...styles.w_100, display: "flex", alignItems: "center" }}>
                    <span
                        className="mb-6-px"
                        style={{ marginBottom: "-2px", width: "120px" }}>Bệnh viện:</span>
                    <CustomTextarea
                        disabled
                    />
                </div>
            </div>
            <div style={{ ...styles.w_40, ...styles.overflow.hidden, ...styles.d_flex_j_between, flexDirection: "column", alignItems: "center" }}>
                <div style={styles.titleFrom}>{props?.data?.title ?? ""}</div>
                <div style={{ ...styles.w_50, display: "flex", alignItems: "center" }}>
                    (<span
                        className="mb-6-px"
                        style={{ marginBottom: "-2px", width: "105px" }}>Lần thứ:</span>
                    <CustomTextarea
                        disabled
                    />)
                </div>
            </div>
            <div style={{ ...styles.w_25, ...styles.overflow.hidden }}>
                <div style={{ ...styles.w_100, display: "flex", alignItems: "center" }}>
                    <span
                        className="mb-6-px"
                        style={{ marginBottom: "-2px", width: "30px" }}>MS:</span>
                    <CustomTextarea
                        value={props?.data?.maSo ?? ""}
                        disabled
                    />
                </div>
                <div style={{ ...styles.w_100, display: "flex", alignItems: "center" }}>
                    <span
                        className="mb-6-px"
                        style={{ marginBottom: "-2px", width: "30px" }}>Số:</span>
                    <CustomTextarea
                        disabled
                    />
                </div>
            </div>
        </div>
    )
}

export default HeaderPhieuInV2