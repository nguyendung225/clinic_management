import { useEffect, useRef, useState } from "react";
import { styles } from "../constant";

export const RenderUnderLineDots = (props: { children: any }) => {
  let { children } = props;
  const divRef = useRef<HTMLDivElement>(null);
  const [line, setLine] = useState<number>(0);
  const lineHeight = 22
  useEffect(() => {
    divRef?.current?.offsetHeight &&
      setLine(Math.floor(divRef?.current?.offsetHeight / lineHeight));
  }, [divRef?.current?.offsetHeight]);

  const addLine = () => {
    const underlineDotteds = [];
    for (let i = 0; i < line; i++) {
      underlineDotteds.push(
        <div
          key={i}
          style={{ ...styles.hr, height: `${lineHeight}`, top: `${i * 25}px` }}
        ></div>
      );
    }
    return underlineDotteds;
  };

  return (
    <>
      <div
        ref={divRef}
        id="myDiv"
        style={{
          ...styles.position.relative,
          width: "98%",
          marginLeft: "1.4%",
        }}
      >
        <div style={{ ...styles.position.relative, top: "-4px" }}>
          {addLine()}
        </div>
        {children}
      </div>
    </>
  );
};
