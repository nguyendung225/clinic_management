import Signature from "../../../component/phieu-in/Signature"
import { styles } from "../../../component/phieu-in/constant"

type Props = {}

const PhieuDuTruMau = (props: Props) => {
  return (
    <div>
      <div style={{ ...styles.padding._5px, ...styles.borderBottom }}>
        <div style={{ ...styles.d_flex_j_between, ...styles.marginBottom._10px }}>
          <div style={{ ...styles.textAlign.center, ...styles.w_25 }}>
            <div style={{ ...styles.fontSize_16, ...styles.fontBold, ...styles.textUppercase }}>Sở y tế</div>
            <div style={{ ...styles.fontSize_16, ...styles.fontBold, ...styles.textUppercase }}>Bệnh viện đa khoa</div>
          </div>
          <div style={{ ...styles.fontSize._14px, ...styles.fontBold }}>PHIẾU DỰ TRÙ VÀ CUNG CẤP MÁU, THÀNH PHẦN MÁU</div>
        </div>

        <div>
          <div style={{ ...styles.d_flex }}>
            <div style={{ ...styles.minWidth._365px, ...styles.fontSize_16 }}>
              Họ tên người bệnh: <span style={{ ...styles.fontBold, ...styles.textUppercase, ...styles.fontSize_16 }}>Trần Quang Bá</span>
            </div>
            <div style={{ ...styles.fontSize_16, ...styles.minWidth._65px }}>Tuổi: 26</div>
            <div style={{ ...styles.fontSize_16 }}>Nam</div>
          </div>
          <div style={{ ...styles.fontSize_16 }}>Chẩn đoán: Z40.8-Phẫu thuật dự phòng khác</div>
          <div style={{ ...styles.d_flex }}>
            <div style={{ ...styles.fontSize_16, ...styles.minWidth._365px }}>Khoa phòng: Điều trị truyền nhiễm</div>
            <div style={{ ...styles.fontSize_16 }}>Số giường: Giường</div>
          </div>
          <div style={{ ...styles.d_flex }}>
            <div style={{ ...styles.fontSize_16, ...styles.minWidth._180px }}>Nhóm máu ABO:</div>
            <div style={{ ...styles.fontSize_16, ...styles.minWidth._185px }}>Nhóm máu RH:</div>
            <div style={{ ...styles.fontSize_16 }}>Số lần đã truyền:</div>
          </div>
          <div style={{ ...styles.fontSize_16 }}>
            Lưu ý bất thường(lâm sàng, xet nghiệm):
          </div>
        </div>

        <div>
          <div style={{ ...styles.fontSize_16 }}>Loại chế phẩm máu cần truyền:</div>
          <div style={{ ...styles.d_flex }}>
            <div style={{ ...styles.fontSize_16, ...styles.minWidth._415px }}>1.</div>
            <div style={{ ...styles.fontSize_16, ...styles.minWidth._180px }}>Số lượng:</div>
          </div>
          <div style={{ ...styles.d_flex }}>
            <div style={{ ...styles.fontSize_16, ...styles.minWidth._415px }}>2.</div>
            <div style={{ ...styles.fontSize_16, ...styles.minWidth._180px }}>Số lượng:</div>
          </div>
          <div style={{ ...styles.d_flex }}>
            <div style={{ ...styles.fontSize_16, ...styles.minWidth._415px }}>3.</div>
            <div style={{ ...styles.fontSize_16, ...styles.minWidth._180px }}>Số lượng:</div>
          </div>
          <div style={{ ...styles.d_flex }}>
            <div style={{ ...styles.fontSize_16, ...styles.minWidth._415px }}>4.</div>
            <div style={{ ...styles.fontSize_16, ...styles.minWidth._180px }}>Số lượng:</div>
          </div>
        </div>

        <div style={{ ...styles.fontSize_16, ...styles.textAlign.center }}>Hồi 15 giờ 01 ngày 01 tháng 03 năm 2024</div>

        <div style={{ ...styles.d_flex_j_around }}>
          <Signature title="Trưởng khoa lâm sàng" subTitle="(Họ tên và chữ ký)" />
          <Signature title="Bác sĩ điều trị" subTitle="(Họ tên và chữ ký)" />
        </div>
      </div>

      <div style={{ ...styles.padding._5px }}>
        <div style={{ ...styles.d_flex }}>
          <div style={{ ...styles.fontSize_16, ...styles.minWidth._375px }}>Loại chế phẩm máu đã cấp: </div>
          <div style={{ ...styles.fontSize_16 }}>Số lượng:&nbsp;&nbsp; đv (&nbsp;&nbsp;ml)</div>
        </div>
        <div>
          <div style={{ ...styles.fontSize_16 }}>Bao gồm các đơn vị máu và chế phẩm máu có mã hiệu như sau:</div>
          <div style={{ ...styles.d_flex }}>
            <div style={{ ...styles.minWidth._270px }}>1.</div>
            <div style={{ ...styles.minWidth._105px }}>Nhóm máu:</div>
            <div>Thể tích: &nbsp;&nbsp;ml</div>
          </div>
          <div style={{ ...styles.d_flex }}>
            <div style={{ ...styles.minWidth._270px }}>2.</div>
            <div style={{ ...styles.minWidth._105px }}>Nhóm máu:</div>
            <div>Thể tích: &nbsp;&nbsp;ml</div>
          </div>
          <div style={{ ...styles.d_flex }}>
            <div style={{ ...styles.minWidth._270px }}>3.</div>
            <div style={{ ...styles.minWidth._105px }}>Nhóm máu:</div>
            <div>Thể tích: &nbsp;&nbsp;ml</div>
          </div>
          <div style={{ ...styles.d_flex }}>
            <div style={{ ...styles.minWidth._270px }}>4.</div>
            <div style={{ ...styles.minWidth._105px }}>Nhóm máu:</div>
            <div>Thể tích: &nbsp;&nbsp;ml</div>
          </div>
        </div>
        <div style={{ ...styles.fontSize_16, ...styles.textAlign.center }}>Hồi &nbsp;&nbsp;&nbsp; giờ &nbsp;&nbsp;&nbsp; ngày &nbsp;&nbsp;&nbsp; tháng &nbsp;&nbsp;&nbsp; năm </div>
        <div style={{ ...styles.d_flex_j_around }}>
          <Signature title="Điều dưỡng" subTitle="(Họ tên và chữ ký)" />
          <Signature title="Người phát" subTitle="(Họ tên và chữ ký)" />
        </div>
      </div>
    </div>
  )
}

export default PhieuDuTruMau