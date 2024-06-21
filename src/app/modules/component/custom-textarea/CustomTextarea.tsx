import React, { useState, useRef, useEffect } from "react";
import "./CustomTextarea.scss";

type Props = {
    rows?: number
    value?: any
    disabled?: boolean
    marginUnderline?: number
    className?: string,
    bottom?: number
    readOnly?: boolean
}

function CustomTextarea(props: Props) {
    const [rowQuantity, setRowQuantity] = useState(1);
    const ref = useRef<any>();
    const lineHeight = 30;

    useEffect(() => {
        if (props?.rows) {
            setRowQuantity(props?.rows + 1);
        }
        const textFieldMultiline = ref.current;
        const textarea = textFieldMultiline.getElementsByTagName("textarea")[0];
        textarea.addEventListener('keydown', autosize);

        return () => {
            textarea.removeEventListener('keydown', autosize);
        }
    }, [])


    const renderLines = () => {
        const lines = [];
        for (let i = 1; i <= rowQuantity; i++) {
            lines.push(<div key={i} className="dotted-line"
                style={{
                    borderBottom: "1px dotted #000",
                    width: "100%",
                    height: "30px",
                }}
            />);
        }
        return lines;
    };

    function autosize() {
        const textFieldMultiline = ref.current;
        const textarea = textFieldMultiline.getElementsByTagName("textarea")[0];

        setTimeout(function () {
            textarea.style.height = 'auto';
            textarea.style.height = textarea.scrollHeight + 'px';
        }, 0);

        const calculatedRows = Math.floor(textarea?.scrollHeight / lineHeight);
        setRowQuantity(calculatedRows + 1);
    }

    return (
        <div
            ref={ref}
            className={`${props?.className || ""} overflow-hidden`}
            style={{
                position: "relative",
                width: "100%",
                pointerEvents: props?.disabled ? "none" : "auto"
            }}
        >
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: `${props?.bottom ? props?.bottom : "12"}px`,
                    pointerEvents: "none",
                    overflow: "hidden"
                }}
            >
                {renderLines()}
            </div>
            <textarea
                rows={props?.rows ? props?.rows : 1}
                value={props?.value}
                className={`${props?.className} textarea-custom`}
                style={{
                    width: "100%",
                    border: "none",
                    outline: "none",
                    resize: "none"
                }}
                {...props}
            />
        </div>

    );
}

export default CustomTextarea;
