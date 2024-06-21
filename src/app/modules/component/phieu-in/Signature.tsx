import { formatDate } from '../../utils/AppFunction';
import { styles } from './constant';

type Props = {
  date?: any;
  title: string;
  subTitle?: string;
  content?: string;
  isHours?: boolean;
  style?: React.CSSProperties | undefined;
  isDate?: boolean;
}

const Signature = ({ date, title, subTitle, content, isHours, style, isDate }: Props) => {
  const renderDate = (date: any) => {
    const ngay = formatDate(date?.getDate()) || ".....";
    const thang = formatDate(date?.getMonth() + 1) || ".....";
    const nam = date?.getFullYear() || "..........";
    const gio = formatDate(date?.getHours()) || "....";
    const phut = formatDate(date?.getMinutes()) || "....";

    const checkTime = isHours ? `${gio}:${phut}` : "";
    const checkUppercase = isHours ? ", ngày" : "Ngày";
    return `${checkTime}${checkUppercase} ${ngay} tháng ${thang} năm ${nam}`;
  }

  return (
    <div style={{ ...style, ...styles.textAlign.center, ...styles.paddingTopCondition(isDate), ...styles.height._120px }} className={isDate ? "" : "spaces pt-21"}>
      {isDate ? <div style={{ ...styles.font_italic, ...styles.fontSize_16 }}>{renderDate(date)}</div> : <></>}
      <div style={{ ...styles.textUppercase, ...styles.fontBold }}>
        {title}
      </div>
      <div style={{ ...styles.font_italic }}>{subTitle}</div>
      <div style={{ ...styles.font_italic }}>{content}</div>
    </div>
  )
}

export default Signature