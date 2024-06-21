import { styles } from "../constant";

export const HeaderPhieuXetNghiem = ({ children }: any) => {
  return (
    <>
      <div style={{ ...styles.d_flex_j_between, alignItems: "flex-start",marginBottom:"20px"}}>
        <div style={{ ...styles.w_25, ...styles.overflow.hidden }}>
          <div style={{ ...styles.position.relative, lineHeight: "25px" }}>
            Sở y tế:&nbsp;<span style={styles.hr}></span>
          </div>
          <div style={{ ...styles.position.relative, lineHeight: "25px" }}>
            Bệnh viện:&nbsp;<span style={styles.hr}></span>
          </div>
        </div>
        {children}
        <div style={{ ...styles.w_25, ...styles.overflow.hidden }}>
          <div style={{ ...styles.position.relative, lineHeight: "25px" }}>
            MS:&nbsp;<span style={styles.hr}></span>
          </div>
          <div style={{ ...styles.position.relative, lineHeight: "25px" }}>
            Số:&nbsp;<span style={styles.hr}></span>
          </div>
        </div>
      </div>
      <div style={styles.d_flex}>
        <div style={{ ...styles.d_flex, lineHeight: "25px", ...styles.w_100 }}>
          <div style={styles.w_70}>
            - Họ tên người bệnh:&nbsp;
            <span
              style={{ ...styles.textDataUnderline, width: "350px" }}
            ></span>
          </div>
          <div style={styles.w_20}>
            Tuổi:&nbsp;
            <span
              style={{ ...styles.textDataUnderline, width: "100px" }}
            ></span>
          </div>
          <div style={styles.w_10}>Nam/Nữ</div>
        </div>
      </div>
      <div style={styles.d_flex}>
        <div style={{ ...styles.d_flex, lineHeight: "25px", ...styles.w_100 }}>
          <div style={styles.w_50}>
            - Địa chỉ:&nbsp;
            <span
              style={{ ...styles.textDataUnderline, width: "80%" }}
            ></span>
          </div>
          <div style={{...styles.w_50,...styles.d_flex}}>
            Số thẻ BHYT:&nbsp;
            <span style={{...styles.box,width:"40px"}}>&nbsp;HS</span>
            <span style={{...styles.box,width:"40px"}}>&nbsp;01</span>&nbsp;
            <span style={{...styles.box,width:"40px"}}>&nbsp;23</span>
            <span style={{...styles.box,width:"40px"}}>&nbsp;45</span>&nbsp;
            <span style={{...styles.box,width:"80px"}}>&nbsp;6789</span>
          </div>
        </div>
      </div>
      <div style={styles.d_flex}>
        <div style={{ ...styles.d_flex, lineHeight: "25px", ...styles.w_100 }}>
          <div style={styles.w_60}>
            - Khoa:&nbsp;
            <span
              style={{ ...styles.textDataUnderline, width: "370px" }}
            ></span>
          </div>
          <div style={styles.w_25}>
            Buồng:&nbsp;
            <span
              style={{ ...styles.textDataUnderline, width: "128px" }}
            ></span>
          </div>
          <div style={styles.w_15}>
            Giường:&nbsp;
            <span style={{ ...styles.textDataUnderline, width: "50px" }}></span>
          </div>
        </div>
      </div>
    </>
  );
};
