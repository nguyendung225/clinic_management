import React from "react"

type IProps = {
  label: string;
  labelClass?: string;
  value: string | undefined;
  valueClass?: string;
}

const TextGroup: React.FunctionComponent<IProps> = ({label, labelClass, value, valueClass}) => {
  return(
    <div className="d-flex pt-2 align-items-center">
      <label className={labelClass}>{label}</label>
      <p className={valueClass}>{value}</p>
    </div>
  )
}

export default TextGroup