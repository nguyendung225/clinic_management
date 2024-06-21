import moment from "moment"
import { styles } from "../../../component/phieu-in/constant"

type Props = {}

const GiayChungNhan = (props: Props) => {
  return (
    <div style={{ ...styles.d_flex, ...styles.divBorder }}>
      <div style={{ ...styles.w_50, ...styles.borderRight }}>
        <div style={{ ...styles.borderBottom, ...styles.flex_column_center, ...styles.height._45px }}>
          <div style={{ ...styles.fontSize._18px }}>Cộng Hòa Xã Hội Chủ Nghĩa Việt Nam</div>
          <div style={{ ...styles.fontSize._18px }}>Độc lập - Tự do - Hạnh phúc</div>
        </div>

        <div style={{ ...styles.paddingLeft._130px }}>
          <div style={{ ...styles.fontSize._16px }}>Mã BN: 2400006</div>
          <div style={{ ...styles.fontSize._16px }}>Số BA: </div>
          <div style={{ ...styles.fontSize._16px }}>Mã Y Tế:</div>
        </div>

        <div style={{ ...styles.textAlign.center, ...styles.marginBottom._5px }}>
          <div style={{ ...styles.fontSize._18px, ...styles.fontBold }}>GIẤY CHỨNG NHẬN PHẪU THUẬT</div>
          <div style={{ ...styles.fontSize._18px }}>BỆNH VIỆN ĐA KHOA</div>
        </div>

        <div style={{ ...styles.padding._5px }}>
          <div style={{ ...styles.fontSize._16px, ...styles.marginBottom._5px }}>- Chứng nhận Ông/Bà: <span style={{ ...styles.fontSize._16px }}>Trần Miến</span></div>
          <div style={{ ...styles.fontSize._16px, ...styles.marginBottom._5px }}>- Năm sinh: 2000 - Giới tính: Nam</div>
          <div style={{ ...styles.fontSize._16px, ...styles.marginBottom._5px }}>- Địa chỉ: Phường Quán Thánh, Quận Ba Đình, Thành phố Hà Nội</div>
          <div style={{ ...styles.fontSize._16px, ...styles.marginBottom._5px }}>- Vào viện ngày: Ngày&ensp;&ensp;&ensp;tháng&ensp;&ensp;&ensp;năm </div>
          <div style={{ ...styles.fontSize._16px, ...styles.marginBottom._5px }}>- Ra viện ngày: Ngày&ensp;&ensp;&ensp;tháng&ensp;&ensp;&ensp;năm</div>
          <div style={{ ...styles.fontSize._16px, ...styles.marginBottom._5px }}>- Phẫu thuật ngày: {moment().format("hh:mm DD/MM/YYYY")}</div>
          <div style={{ ...styles.fontSize._16px, ...styles.marginBottom._5px }}>- Đã phẫu thuật: Phẫu thuật định hình mũi</div>
        </div>
      </div>

      <div style={{ ...styles.w_50 }}>
        <div style={{ ...styles.borderBottom, ...styles.flex_column_center, ...styles.height._45px, ...styles.fontSize._18px, ...styles.fontBold }}>CÁCH THỨC PHẪU THUẬT</div>

        <div>
          <div style={{ ...styles.padding._5px }}>
            <div style={{ ...styles.fontSize._16px }}>- Chẩn đoán:</div>
            <div style={{ ...styles.fontSize._16px }}>- Phương pháp vô cảm:</div>
            <div style={{ ...styles.fontSize._16px, ...styles.height._165px }}>- Kết quả điều trị:</div>
          </div>

          <div style={{ ...styles.paddingLeft._30px, ...styles.borderBottom }}>
            <div style={{ ...styles.fontSize._16px }}>- Nhóm máu:</div>
            <div><span style={{ ...styles.fontSize._16px }}>- Hệ Rh:&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</span> <span style={{ ...styles.fontSize._16px }}>Ngày&ensp;&ensp;&ensp;tháng&ensp;&ensp;&ensp;năm</span></div>
          </div>
        </div>

        <div style={{...styles.borderBottom, ...styles.d_flex, ...styles.textAlign.center}}>
          <div style={{ ...styles.fontSize._18px, ...styles.borderRight, ...styles.w_50, ...styles.fontBold, ...styles.padding._5px  }}>TRƯỞNG KHOA/ TL.TRƯỞNG KHOA</div>
          <div style={{ ...styles.fontSize._18px, ...styles.w_50, ...styles.fontBold, ...styles.padding._5px  }}>LÃNH ĐẠO ĐƠN VỊ</div>
        </div>

        <div style={{...styles.height._120px}}></div>

      </div>
    </div>
  )
}

export default GiayChungNhan