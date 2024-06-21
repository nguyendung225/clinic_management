import { styles } from "../constant";

export const UnderLineDots = (props: { lineNumber: number }) => {
  return (
    <>
      {[...Array(props.lineNumber)].map((_, index) => (
        <div style={{ ...styles.firstLineLetter, height: "22px" }} key={index}>
          <span style={styles.hr}></span>
        </div>
      ))}
    </>
  );
};
