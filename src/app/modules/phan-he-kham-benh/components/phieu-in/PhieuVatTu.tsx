import Signature from "../../../component/phieu-in/Signature"
import { styles } from "../../../component/phieu-in/constant"

type Props = {}

const PhieuVatTu = (props: Props) => {
  return (
    <div>
      <div style={{ ...styles.d_flex_j_between }}>
        <div>
          <div style={{ ...styles.fontSize_16, ...styles.textUppercase }}>sở y tế</div>
          <div style={{ ...styles.fontSize_16, ...styles.textUppercase }}>bệnh viện đa khoa</div>
        </div>
        <div style={{ ...styles.textAlign.center, ...styles.paddingRight._80px }}>
          <div style={{ ...styles.fontBold, ...styles.fontSize._24px }}>ĐƠN VẬT TƯ</div>
          <div style={{ ...styles.fontSize_16 }}><span style={{ ...styles.fontBold, ...styles.fontSize_16 }}>Số: </span>VT123456</div>
        </div>
      </div>

      <div>
        <div style={{ ...styles.fontSize_16, ...styles.marginBottom._5px }}>- Mã người bệnh: 24000143</div>
        <div style={{ ...styles.d_flex, ...styles.marginBottom._5px }}>
          <div style={{ ...styles.fontSize_16, ...styles.minWidth._355px }}>- Họ tên: <span style={{ ...styles.fontSize_16, ...styles.fontBold, ...styles.textUppercase }}>Trần Quang Bá</span></div>
          <div style={{ ...styles.fontSize_16, ...styles.minWidth._90px }}>Tuổi: 26</div>
          <div style={{ ...styles.fontSize_16 }}>Nam</div>
        </div>
        <div style={{ ...styles.fontSize_16, ...styles.marginBottom._5px }}>- Địa chỉ: Thành phố Hà Nội</div>
        <div style={{ ...styles.fontSize_16, ...styles.marginBottom._5px }}>- Đối tượng: Yêu cầu</div>
        <div style={{ ...styles.fontSize_16, ...styles.marginBottom._5px }}>- Khoa phòng: Điều trị Truyền Nhiễm</div>
        <div style={{ ...styles.fontSize_16, ...styles.marginBottom._5px }}>- Chẩn đoán: Z40.8-Phẫu thuật dự phòng khác</div>
        <div style={{ ...styles.fontSize_16, ...styles.marginBottom._5px }}>- Kho vật tư: Kho Vật Tư Nội Trú</div>
      </div>

      <div style={{ ...styles.d_flex, ...styles.marginBottom._30px }}>
        <div style={{ ...styles.minWidth._30px, ...styles.fontSize_16 }}>1.</div>
        <div style={{ ...styles.minWidth._375px }}>
          <div style={{ ...styles.fontSize._16px, ...styles.fontBold }}>Fuji 2-15g vật liệu hàn răng- GC Gold Label Universal Restorative 1-1Pkg 22 (15g powder, 10g Liquid) (Fuji 2-15g vật liệu hàn răng- GC Gold Label Universal Restorative 1-1Pkg 22 (15g powder, 10g Liquid))</div>
        </div>
        <div style={{ ...styles.minWidth._50px, ...styles.fontSize._16px, ...styles.fontBold, ...styles.textAlign.center }}>3</div>
        <div style={{ ...styles.fontSize_16 }}>Hộp</div>
      </div>

      <div style={{ ...styles.marginBottom._10px }}>
        <div style={{ ...styles.fontSize_16 }}>- Cộng khoản: 1</div>
        <div style={{ ...styles.fontSize_16 }}>- Lời dặn: Chú ý</div>
      </div>

      <div style={{ ...styles.d_flex_j_around }}>
        <img style={{ width: "75px", height: "75px" }} src="/media/images/QrCode2.png" alt="qrCode" />
        <Signature title="Bác sĩ khám bệnh" isDate date={new Date()} isHours subTitle="(Ghi rõ họ tên)" />
      </div>
    </div>
  )
}

export default PhieuVatTu