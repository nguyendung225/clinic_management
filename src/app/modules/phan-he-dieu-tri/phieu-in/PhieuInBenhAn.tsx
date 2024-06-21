import Signature from "../../component/phieu-in/Signature"
import { styles } from "../../component/phieu-in/constant"

type Props = {}

const PhieuInBenhAn = (props: Props) => {
  return (
    <div>
      <div style={{ ...styles.d_flex_j_between }}>
        <div style={{ ...styles.paddingLeft._100px }}>
          <div style={{ ...styles.textUppercase, ...styles.fontSize_16 }}>Sở y tế</div>
          <div style={{ ...styles.textUppercase, ...styles.fontSize_16, ...styles.fontBold }}>Bệnh viện đa khoa</div>
          <div style={{ ...styles.fontSize_16 }}>Khoa truyền nhiễm</div>
        </div>

        <div>
          <div style={{ ...styles.fontSize_16 }}>Số lưu trữ:</div>
          <div style={{ ...styles.fontSize_16 }}>Mã YT: 01/01817/24/000019</div>
        </div>
      </div>

      <div style={{ ...styles.fontBold, ...styles.fontSize._20px, ...styles.textAlign.center }}>BỆNH ÁN NỘI KHOA</div>

      <div style={{ ...styles.fontBold, ...styles.fontSize._16px, ...styles.marginBottom._5px }}>I. HÀNH CHÍNH</div>

      <div style={{ ...styles.d_flex }}>
        <div style={{ ...styles.w_45 }}>
          <div style={{ ...styles.fontSize_16, ...styles.marginBottom._5px }}>1. Họ và tên: <span style={{ ...styles.fontSize_16, ...styles.textUppercase, ...styles.fontBold }}>Trần Quang Bá</span></div>
          <div style={{ ...styles.d_flex_align_center, ...styles.marginBottom._5px }}>
            <div style={{ ...styles.minWidth._115px, ...styles.fontSize_16 }}>3. Giới tính</div>
            <div style={{ ...styles.d_flex_align_center, ...styles.minWidth._115px }}>
              <div style={{ ...styles.fontSize_16, ...styles.paddingRight._25px }}>1. Nam</div>
              <div style={{ ...styles.box("25px") }}>X</div>
            </div>

            <div style={{ ...styles.d_flex_align_center }}>
              <div style={{ ...styles.fontSize_16, ...styles.paddingRight._20px }}>2. Nữ</div>
              <div style={{ ...styles.box("25px") }}></div>
            </div>
          </div>

          <div style={{ ...styles.d_flex_j_between, ...styles.marginBottom._5px }}>
            <div style={{ ...styles.fontSize_16 }}>5. Dân tộc: Kinh</div>
            <div>
              <div style={{ ...styles.box("25px"), ...styles.marginRight._1px }}></div>
              <div style={{ ...styles.box("25px") }}></div>
            </div>
          </div>

          <div style={{ ...styles.fontSize_16, ...styles.marginBottom._5px }}>7. Địa chỉ: Số nhà - Thôn, phố:</div>

          <div style={{ ...styles.d_flex_j_between, ...styles.marginBottom._5px }}>
            <div style={{ ...styles.fontSize_16 }}>Huyện (Q,Tx): Quận Ba Đình</div>
            <div>
              <div style={{ ...styles.box("25px"), ...styles.marginRight._1px }}></div>
              <div style={{ ...styles.box("25px") }}></div>
            </div>
          </div>

          <div style={{ ...styles.fontSize_16, ...styles.marginBottom._5px }}>8. Nơi làm việc:</div>
        </div>

        <div style={{ ...styles.w_55, ...styles.paddingLeft._5px }}>
          <div style={{ ...styles.d_flex_j_between, ...styles.marginBottom._5px }}>
            <div style={{ ...styles.d_flex }}>
              <div style={{ ...styles.fontSize_16, ...styles.paddingRight._10px }}>2. Sinh ngày</div>
              <div style={{ ...styles.box("25px", "none") }}></div>
              <div style={{ ...styles.box("25px", "none") }}></div>
              <div style={{ ...styles.box("25px", "none") }}></div>
              <div style={{ ...styles.box("25px", "none") }}></div>
              <div style={{ ...styles.box("25px", "none") }}></div>
              <div style={{ ...styles.box("25px", "none") }}></div>
              <div style={{ ...styles.box("25px", "none") }}></div>
              <div style={{ ...styles.box("25px") }}></div>
            </div>

            <div style={{ ...styles.d_flex }}>
              <div style={{ ...styles.fontSize_16, ...styles.paddingRight._10px }}>Tuổi</div>
              <div style={{ ...styles.box("25px", "none") }}></div>
              <div style={{ ...styles.box("25px") }}></div>
            </div>
          </div>

          <div style={{ ...styles.d_flex_j_between, ...styles.marginBottom._5px }}>
            <div style={{ ...styles.fontSize_16 }}>4. Nghề nghiệp: Nhân dân</div>
            <div>
              <div style={{ ...styles.box("25px", "none") }}></div>
              <div style={{ ...styles.box("25px") }}></div>
            </div>
          </div>

          <div style={{ ...styles.d_flex_j_between, ...styles.marginBottom._5px }}>
            <div style={{ ...styles.fontSize_16 }}>6. Ngoại kiều: Việt Nam</div>
            <div>
              <div style={{ ...styles.box("25px", "none") }}></div>
              <div style={{ ...styles.box("25px") }}></div>
            </div>
          </div>

          <div style={{ ...styles.fontSize_16, ...styles.marginBottom._5px }}>Xã, phường: Phường Quán Thánh</div>
          <div style={{ ...styles.d_flex_j_between, ...styles.marginBottom._5px }}>
            <div style={{ ...styles.fontSize_16 }}>Tỉnh, thành phố: Thành phố Hà Nội</div>
            <div>
              <div style={{ ...styles.box("25px", "none") }}></div>
              <div style={{ ...styles.box("25px", "none") }}></div>
              <div style={{ ...styles.box("25px") }}></div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ ...styles.d_flex_align_center, ...styles.marginBottom._5px }}>
        <div style={{ ...styles.minWidth._155px, ...styles.fontSize_16 }}>9. Đối tượng:</div>
        <div style={{ ...styles.d_flex_align_center, ...styles.minWidth._120px }}>
          <div style={{ ...styles.fontSize_16, ...styles.paddingRight._25px }}>BHYT</div>
          <div style={{ ...styles.box("25px") }}>X</div>
        </div>

        <div style={{ ...styles.d_flex_align_center, ...styles.minWidth._115px }}>
          <div style={{ ...styles.fontSize_16, ...styles.paddingRight._20px }}>Thu phí</div>
          <div style={{ ...styles.box("25px") }}></div>
        </div>

        <div style={{ ...styles.d_flex_align_center, ...styles.minWidth._150px }}>
          <div style={{ ...styles.fontSize_16, ...styles.paddingRight._20px }}>Miễn</div>
          <div style={{ ...styles.box("25px") }}></div>
        </div>

        <div style={{ ...styles.d_flex_align_center }}>
          <div style={{ ...styles.fontSize_16, ...styles.paddingRight._20px }}>Khác</div>
          <div style={{ ...styles.box("25px") }}></div>
        </div>
      </div>

      <div style={{ ...styles.d_flex, ...styles.marginBottom._5px }}>
        <div style={{ ...styles.fontSize_16, ...styles.w_45 }}>10. BHYT giá trị đến</div>
        <div style={{ ...styles.w_55, ...styles.paddingLeft._5px }}>
          <div style={{ ...styles.box("37px", "none") }}></div>
          <div style={{ ...styles.box("25px", "none") }}></div>
          <div style={{ ...styles.box("25px", "none") }}></div>
          <div style={{ ...styles.box("37px", "none") }}></div>
          <div style={{ ...styles.box("40px", "none") }}></div>
          <div style={{ ...styles.box("60px", "none") }}></div>
          <div style={{ ...styles.box("60px") }}></div>
        </div>
      </div>

      <div style={{ ...styles.d_flex, ...styles.marginBottom._5px }}>
        <div style={{ ...styles.fontSize_16, ...styles.minWidth._490px }}>11. Họ tên, địa chỉ người nhà khi cần báo tin:</div>
        <div style={{ ...styles.fontSize_16 }}>Số điện thoại:</div>
      </div>

      <div style={{ ...styles.fontBold, ...styles.fontSize._16px, ...styles.marginBottom._5px }}>II. QUẢN LÝ NGƯỜI BỆNH</div>

      <div style={{ ...styles.d_flex, ...styles.marginBottom._5px }}>
        <div style={{ ...styles.w_50, ...styles.divBorder, ...styles.borderRightNone }}>
          <div style={{ ...styles.borderBottom, ...styles.padding._5px, ...styles.height._55px }}>
            <div style={{ ...styles.fontSize._13px, ...styles.marginBottom._5px }}>12.Vào viện lúc: 09 giờ 14 phút, Ngày 01 tháng 03 năm 2024</div>
            <div style={{ ...styles.d_flex_align_center }}>
              <div style={{ ...styles.minWidth._90px, ...styles.fontSize._13px }}>13.Trực tiếp vào:</div>
              <div style={{ ...styles.d_flex_align_center }}>
                <div style={{ ...styles.fontSize._13px, ...styles.minWidth._60px }}>1.Cấp cứu</div>
                <div style={{ ...styles.box("25px") }}>X</div>
              </div>

              <div style={{ ...styles.d_flex_align_center }}>
                <div style={{ ...styles.fontSize._13px, ...styles.minWidth._40px }}>2.KKB</div>
                <div style={{ ...styles.box("25px") }}></div>
              </div>

              <div style={{ ...styles.d_flex_align_center }}>
                <div style={{ ...styles.fontSize._13px, ...styles.minWidth._80px }}>3.Khoa điều trị</div>
                <div style={{ ...styles.box("25px") }}></div>
              </div>
            </div>
          </div>

          <div style={{ ...styles.padding._5px }}>
            <div style={{ ...styles.d_flex, ...styles.marginBottom._5px }}>
              <div style={{ ...styles.minWidth._75px }}></div>
              <div style={{ ...styles.minWidth._130px, ...styles.textAlign.center, ...styles.fontSize._13px }}>Khoa</div>
              <div style={{ ...styles.fontSize._13px, ...styles.minWidth._90px, ...styles.textAlign.center }}>Thời gian</div>
              <div style={{ ...styles.fontSize._13px }}>Ngày ĐT</div>
            </div>

            <div style={{ ...styles.d_flex, ...styles.marginBottom._5px }}>
              <div style={{ ...styles.width._75px, ...styles.fontSize._13px }}>15.Vào khoa</div>
              <div style={{ ...styles.box("130px", "", "auto"), ...styles.fontSize._13px }}></div>
              <div style={{ ...styles.fontSize._13px, ...styles.width._90px }}></div>
              <div>
                <div style={{ ...styles.box("25px", "none") }}></div>
                <div style={{ ...styles.box("25px") }}></div>
              </div>
            </div>

            <div style={{ ...styles.d_flex, ...styles.marginBottom._5px }}>
              <div style={{ ...styles.width._75px, ...styles.fontSize._13px }}>16.Chuyển khoa</div>
              <div style={{ ...styles.box("130px", "", "auto"), ...styles.fontSize._13px }}></div>
              <div style={{ ...styles.fontSize._13px, ...styles.width._90px }}></div>
              <div>
                <div style={{ ...styles.box("25px", "none") }}></div>
                <div style={{ ...styles.box("25px") }}></div>
              </div>
            </div>

            <div style={{ ...styles.d_flex, ...styles.marginBottom._5px }}>
              <div style={{ ...styles.width._75px, ...styles.fontSize._13px }}></div>
              <div style={{ ...styles.box("130px", "", "auto"), ...styles.fontSize._13px }}></div>
              <div style={{ ...styles.fontSize._13px, ...styles.width._90px }}></div>
              <div>
                <div style={{ ...styles.box("25px", "none") }}></div>
                <div style={{ ...styles.box("25px") }}></div>
              </div>
            </div>

            <div style={{ ...styles.d_flex, ...styles.marginBottom._5px }}>
              <div style={{ ...styles.width._75px, ...styles.fontSize._13px }}></div>
              <div style={{ ...styles.box("130px", "", "auto"), ...styles.fontSize._13px }}></div>
              <div style={{ ...styles.fontSize._13px, ...styles.width._90px }}></div>
              <div>
                <div style={{ ...styles.box("25px", "none") }}></div>
                <div style={{ ...styles.box("25px") }}></div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ ...styles.w_50, ...styles.divBorder }}>
          <div style={{ ...styles.borderBottom, ...styles.padding._5px, ...styles.height._55px }}>
            <div style={{ ...styles.d_flex_align_center, ...styles.marginBottom._5px }}>
              <div style={{ ...styles.minWidth._95px, ...styles.fontSize._13px }}>14.Nơi giới thiệu:</div>
              <div style={{ ...styles.d_flex_align_center, ...styles.paddingRight._5px }}>
                <div style={{ ...styles.fontSize._13px, ...styles.minWidth._80px }}>1.Cơ quan y tế</div>
                <div style={{ ...styles.box("25px") }}>X</div>
              </div>

              <div style={{ ...styles.d_flex_align_center, ...styles.paddingRight._5px }}>
                <div style={{ ...styles.fontSize._13px, ...styles.minWidth._50px }}>2.Tự đến</div>
                <div style={{ ...styles.box("25px") }}></div>
              </div>

              <div style={{ ...styles.d_flex_align_center }}>
                <div style={{ ...styles.fontSize._13px, ...styles.minWidth._30px }}>3.CK</div>
                <div style={{ ...styles.box("25px") }}></div>
              </div>
            </div>

            <div style={{ ...styles.d_flex_align_center }}>
              <div style={{ ...styles.fontSize._13px }}>- Vào viện do bệnh này lần thứ: </div>
              <div style={{ ...styles.box("25px") }}></div>
            </div>
          </div>

          <div style={{ ...styles.padding._5px }}>
            <div style={{ ...styles.d_flex_align_center, ...styles.marginBottom._5px }}>
              <div style={{ ...styles.minWidth._90px, ...styles.fontSize._13px }}>17.Chuyển viện:</div>
              <div style={{ ...styles.d_flex_align_center, ...styles.paddingRight._5px }}>
                <div style={{ ...styles.fontSize._13px, ...styles.minWidth._70px }}>1.Tuyến trên</div>
                <div style={{ ...styles.box("25px") }}>X</div>
              </div>

              <div style={{ ...styles.d_flex_align_center, ...styles.paddingRight._5px }}>
                <div style={{ ...styles.fontSize._13px, ...styles.minWidth._75px }}>2.Tuyến dưới</div>
                <div style={{ ...styles.box("25px") }}></div>
              </div>

              <div style={{ ...styles.d_flex_align_center }}>
                <div style={{ ...styles.fontSize._13px, ...styles.minWidth._30px }}>3.CK</div>
                <div style={{ ...styles.box("25px") }}></div>
              </div>
            </div>

            <div style={{ ...styles.fontSize._13px, ...styles.marginBottom._5px }}>- Chuyển đến: </div>
            <div style={{ ...styles.fontSize._13px, ...styles.marginBottom._5px }}>18.Ra viện: &ensp;&ensp;giờ &ensp;&ensp; phút, ngày &ensp;&ensp; tháng &ensp;&ensp; năm</div>

            <div style={{ ...styles.d_flex_align_center, ...styles.marginBottom._5px, ...styles.paddingLeft._5px }}>
              <div style={{ ...styles.d_flex_align_center, ...styles.paddingRight._5px }}>
                <div style={{ ...styles.fontSize._13px, ...styles.minWidth._60px }}>1.Ra viện</div>
                <div style={{ ...styles.box("25px") }}></div>
              </div>
              <div style={{ ...styles.d_flex_align_center, ...styles.paddingRight._5px }}>
                <div style={{ ...styles.fontSize._13px, ...styles.minWidth._55px }}>2.Xin về</div>
                <div style={{ ...styles.box("25px") }}>X</div>
              </div>

              <div style={{ ...styles.d_flex_align_center, ...styles.paddingRight._5px }}>
                <div style={{ ...styles.fontSize._13px, ...styles.minWidth._50px }}>3.Bỏ về</div>
                <div style={{ ...styles.box("25px") }}></div>
              </div>

              <div style={{ ...styles.d_flex_align_center }}>
                <div style={{ ...styles.fontSize._13px, ...styles.minWidth._50px }}>4.Đưa về</div>
                <div style={{ ...styles.box("25px") }}></div>
              </div>
            </div>

            <div style={{ ...styles.d_flex_j_between, ...styles.marginBottom._5px }}>
              <div style={{ ...styles.fontSize._13px, ...styles.marginBottom._5px }}>19.Tổng số ngày điều trị</div>

              <div>
                <div style={{ ...styles.box("25px", "none") }}></div>
                <div style={{ ...styles.box("25px", "none") }}></div>
                <div style={{ ...styles.box("25px") }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ ...styles.fontBold, ...styles.fontSize._16px, ...styles.marginBottom._5px }}>III. CHẨN ĐOÁN</div>

      <div style={{ ...styles.d_flex, ...styles.marginBottom._5px }}>
        <div style={{ ...styles.w_50, ...styles.divBorder, ...styles.borderRightNone }}>
          <div style={{ ...styles.borderBottom, ...styles.d_flex_j_between }}>
            <div></div>
            <div style={{ ...styles.minWidth._105px, ...styles.textAlign.center, ...styles.borderLeft }}>MÃ</div>
          </div>

          <div style={{ ...styles.padding._5px }}>
            <div style={{ ...styles.d_flex_j_between, ...styles.marginBottom._5px }}>
              <div style={{ ...styles.fontSize._13px }}>20.Nơi chuyển đến:</div>

              <div>
                <div style={{ ...styles.box("25px", "none") }}></div>
                <div style={{ ...styles.box("25px", "none") }}></div>
                <div style={{ ...styles.box("25px", "none") }}></div>
                <div style={{ ...styles.box("25px") }}></div>
              </div>
            </div>
          </div>

          <div style={{ ...styles.padding._5px }}>
            <div style={{ ...styles.d_flex_j_between, ...styles.marginBottom._5px }}>
              <div style={{ ...styles.fontSize._13px }}>21.KKB, Cấp cứu:</div>

              <div>
                <div style={{ ...styles.box("25px", "none") }}></div>
                <div style={{ ...styles.box("25px", "none") }}></div>
                <div style={{ ...styles.box("25px", "none") }}></div>
                <div style={{ ...styles.box("25px") }}></div>
              </div>
            </div>
          </div>

          <div style={{ ...styles.padding._5px }}>
            <div style={{ ...styles.d_flex_j_between, ...styles.marginBottom._5px }}>
              <div style={{ ...styles.fontSize._13px }}>22.Khi vào khoa điều trị:</div>

              <div>
                <div style={{ ...styles.box("25px", "none") }}></div>
                <div style={{ ...styles.box("25px", "none") }}></div>
                <div style={{ ...styles.box("25px", "none") }}></div>
                <div style={{ ...styles.box("25px") }}></div>
              </div>
            </div>
          </div>

          <div style={{ ...styles.d_flex_j_around, ...styles.padding._5px }}>
            <div style={{ ...styles.d_flex }}>
              <div style={{ ...styles.fontSize._13px }}>+ Thủ thuật</div>
              <div style={{ ...styles.box("25px"), ...styles.marginLeft._10px }}></div>
            </div>

            <div style={{ ...styles.d_flex }}>
              <div style={{ ...styles.fontSize._13px }}>+ Phẫu thuật</div>
              <div style={{ ...styles.box("25px"), ...styles.marginLeft._10px }}></div>
            </div>
          </div>
        </div>

        <div style={{ ...styles.w_50, ...styles.divBorder }}>
          <div style={{ ...styles.borderBottom, ...styles.d_flex_j_between }}>
            <div></div>
            <div style={{ ...styles.minWidth._105px, ...styles.textAlign.center, ...styles.borderLeft }}>MÃ</div>
          </div>

          <div style={{ ...styles.padding._5px }}>
            <div style={{ ...styles.marginBottom._5px }}>
              <div style={{ ...styles.fontSize._13px, ...styles.height._26px }}>23.Ra viện:</div>
            </div>
          </div>

          <div style={{ ...styles.padding._5px }}>
            <div style={{ ...styles.d_flex_j_between, ...styles.marginBottom._5px }}>
              <div style={{ ...styles.fontSize._13px }}>+ Bệnh chính:</div>

              <div>
                <div style={{ ...styles.box("25px", "none") }}></div>
                <div style={{ ...styles.box("25px", "none") }}></div>
                <div style={{ ...styles.box("25px", "none") }}></div>
                <div style={{ ...styles.box("25px") }}></div>
              </div>
            </div>
          </div>

          <div style={{ ...styles.padding._5px }}>
            <div style={{ ...styles.d_flex_j_between, ...styles.marginBottom._5px }}>
              <div style={{ ...styles.fontSize._13px }}>+ Bệnh kèm theo:</div>

              <div>
                <div style={{ ...styles.box("25px", "none") }}></div>
                <div style={{ ...styles.box("25px", "none") }}></div>
                <div style={{ ...styles.box("25px", "none") }}></div>
                <div style={{ ...styles.box("25px") }}></div>
              </div>
            </div>
          </div>

          <div style={{ ...styles.d_flex_j_around, ...styles.padding._5px }}>
            <div style={{ ...styles.d_flex }}>
              <div style={{ ...styles.fontSize._13px }}>+ Tai biến</div>
              <div style={{ ...styles.box("25px"), ...styles.marginLeft._10px }}></div>
            </div>

            <div style={{ ...styles.d_flex }}>
              <div style={{ ...styles.fontSize._13px }}>Biến chứng</div>
              <div style={{ ...styles.box("25px"), ...styles.marginLeft._10px }}></div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ ...styles.fontBold, ...styles.fontSize._16px, ...styles.marginBottom._5px }}>IV. TÌNH TRẠNG RA VIỆN</div>

      <div style={{ ...styles.d_flex, ...styles.marginBottom._20px }}>
        <div style={{ ...styles.w_45, ...styles.divBorder, ...styles.borderRightNone, ...styles.padding._5px }}>
          <div style={{ ...styles.fontSize._13px, ...styles.marginBottom._5px }}>24.Kết quả điều trị</div>
          <div style={{ ...styles.d_flex, ...styles.marginBottom._5px }}>
            <div style={{ ...styles.d_flex, ...styles.marginRight._5px }}>
              <div style={{ ...styles.minWidth._115px, ...styles.fontSize._13px }}>1.Khỏi</div>
              <div style={{ ...styles.box("25px"), ...styles.marginLeft._10px }}></div>
            </div>

            <div style={{ ...styles.d_flex }}>
              <div style={{ ...styles.minWidth._115px, ...styles.fontSize._13px }}>4.Nặng hơn</div>
              <div style={{ ...styles.box("25px"), ...styles.marginLeft._10px }}></div>
            </div>
          </div>

          <div style={{ ...styles.d_flex, ...styles.marginBottom._5px }}>
            <div style={{ ...styles.d_flex, ...styles.marginRight._5px }}>
              <div style={{ ...styles.minWidth._115px, ...styles.fontSize._13px }}>2.Đỡ, giảm</div>
              <div style={{ ...styles.box("25px"), ...styles.marginLeft._10px }}></div>
            </div>

            <div style={{ ...styles.d_flex }}>
              <div style={{ ...styles.minWidth._115px, ...styles.fontSize._13px }}>5.Tử vong</div>
              <div style={{ ...styles.box("25px"), ...styles.marginLeft._10px }}></div>
            </div>
          </div>

          <div style={{ ...styles.d_flex, ...styles.marginBottom._5px }}>
            <div style={{ ...styles.d_flex, ...styles.marginRight._5px }}>
              <div style={{ ...styles.minWidth._115px, ...styles.fontSize._13px }}>3.Không thay đổi</div>
              <div style={{ ...styles.box("25px"), ...styles.marginLeft._10px }}></div>
            </div>
          </div>

          <div style={{ ...styles.fontSize._13px, ...styles.marginBottom._5px }}>25.Giải phẫu bệnh (khi có sinh thiết):</div>

          <div style={{ ...styles.d_flex_align_center, ...styles.marginBottom._5px, ...styles.paddingLeft._5px }}>
            <div style={{ ...styles.d_flex_align_center, ...styles.paddingRight._5px }}>
              <div style={{ ...styles.fontSize._13px, ...styles.minWidth._75px }}>1.Lành tính</div>
              <div style={{ ...styles.box("25px") }}></div>
            </div>
            <div style={{ ...styles.d_flex_align_center, ...styles.paddingRight._5px }}>
              <div style={{ ...styles.fontSize._13px, ...styles.minWidth._70px }}>2.Nghi ngờ</div>
              <div style={{ ...styles.box("25px") }}>X</div>
            </div>

            <div style={{ ...styles.d_flex_align_center, ...styles.paddingRight._5px }}>
              <div style={{ ...styles.fontSize._13px, ...styles.minWidth._60px }}>3.Ác tính</div>
              <div style={{ ...styles.box("25px") }}></div>
            </div>
          </div>
        </div>

        <div style={{ ...styles.w_55, ...styles.divBorder, ...styles.padding._5px }}>
          <div style={{ ...styles.fontSize._13px, ...styles.marginBottom._5px }}>26.Tình hình tử vong:</div>

          <div style={{ ...styles.d_flex_align_center, ...styles.marginBottom._5px, ...styles.paddingLeft._5px }}>
            <div style={{ ...styles.d_flex_align_center, ...styles.paddingRight._5px }}>
              <div style={{ ...styles.fontSize._13px, ...styles.minWidth._70px }}>1.Do bệnh</div>
              <div style={{ ...styles.box("25px") }}></div>
            </div>
            <div style={{ ...styles.d_flex_align_center, ...styles.paddingRight._5px }}>
              <div style={{ ...styles.fontSize._13px, ...styles.minWidth._125px }}>2.Do tai biến điều trị</div>
              <div style={{ ...styles.box("25px") }}>X</div>
            </div>

            <div style={{ ...styles.d_flex_align_center, ...styles.paddingRight._5px }}>
              <div style={{ ...styles.fontSize._13px, ...styles.minWidth._60px }}>3.Khác</div>
              <div style={{ ...styles.box("25px") }}></div>
            </div>
          </div>

          <div style={{ ...styles.d_flex_align_center, ...styles.marginBottom._5px, ...styles.paddingLeft._5px }}>
            <div style={{ ...styles.d_flex_align_center, ...styles.paddingRight._5px }}>
              <div style={{ ...styles.fontSize._13px, ...styles.minWidth._125px }}>1.Trong 24h vào viện</div>
              <div style={{ ...styles.box("25px") }}></div>
            </div>
            <div style={{ ...styles.d_flex_align_center, ...styles.paddingRight._5px }}>
              <div style={{ ...styles.fontSize._13px, ...styles.minWidth._125px }}>2.Sau 24h vào viện</div>
              <div style={{ ...styles.box("25px") }}>X</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ ...styles.d_flex_j_around }}>
        <Signature title="lãnh đạo bệnh viện" />
        <Signature title="trưởng khoa/tl.trưởng khoa" isDate />
      </div>

      {/* BỆNH ÁN */}
      <div>
        <div style={{ ...styles.fontBold, ...styles.marginBottom._5px, ...styles.fontSize_16 }}>A - BỆNH ÁN</div>

        <div style={{ ...styles.d_flex, ...styles.marginBottom._5px }}>
          <div style={{ ...styles.minWidth._500px, ...styles.fontBold, ...styles.fontSize_16 }}>I. LÝ DO VÀO VIỆN:</div>
          <div style={{ ...styles.fontSize_16 }}>Vào ngày thứ &ensp;&ensp; của bệnh</div>
        </div>

        <div style={{ ...styles.fontBold, ...styles.marginBottom._5px, ...styles.fontSize_16 }}>II. HỎI BỆNH</div>

        <div>
          <div style={{ ...styles.fontSize_16, ...styles.fontBold }}>1. Quá trình bệnh lý: <span style={{ ...styles.fontSize_16, ...styles.font_italic, ...styles.fontNormal }}>(khởi phát, diễn biến, chẩn đoán, điều trị của tuyến dưới v.v...)</span></div>
          <div style={{ ...styles.fontSize_16 }}>Đau ốm mệt mỏi</div>
          <div style={{ ...styles.fontSize_16 }}>Hoa mắt chóng mặt</div>
          <div style={{ ...styles.fontSize_16 }}>Ho hắt hơi sổ mũi</div>
        </div>

        <div>
          <div style={{ ...styles.fontSize_16, ...styles.fontBold }}>2. Tiền sử bệnh:</div>
          <div style={{ ...styles.fontSize_16 }}>+ Bản thân: <span style={{ ...styles.fontSize_16, ...styles.font_italic }}>(phát triển thể lực từ nhỏ đến lớn, những bệnh đã mắc, phương pháp điều trị, tiêm phòng, ăn uống, sinh hoạt v.v...)</span></div>
        </div>

        <div style={{ ...styles.fontSize_16 }}>Đặc điểm liên quan bệnh:</div>

        <div style={{ ...styles.w_100 }}>
          <table style={{ ...styles.table }}>
            <thead>
              <tr>
                <th style={{ ...styles.border1, ...styles.textAlign.center }}>STT</th>
                <th style={{ ...styles.border1, ...styles.textAlign.right }}>Ký hiệu</th>
                <th style={{ ...styles.border1, ...styles.textAlign.center }}>Thời gian(tính theo tháng)</th>
                <th style={{ ...styles.border1, ...styles.textAlign.center }}>STT</th>
                <th style={{ ...styles.border1, ...styles.textAlign.right }}>Ký hiệu</th>
                <th style={{ ...styles.border1, ...styles.textAlign.center }}>Thời gian(tính theo tháng)</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td style={{ ...styles.border1, ...styles.textAlign.center }}>01</td>
                <td style={{ ...styles.border1, }}><div style={{ ...styles.d_flex_j_between }}>-Dị ứng <div style={{ ...styles.box("25px") }}></div></div></td>
                <td style={{ ...styles.border1, }}></td>
                <td style={{ ...styles.border1, ...styles.textAlign.center }}>04</td>
                <td style={{ ...styles.border1, }}><div style={{ ...styles.d_flex_j_between }}>-Thuốc lá <div style={{ ...styles.box("25px") }}></div></div></td>
                <td style={{ ...styles.border1, }}></td>
              </tr>

              <tr>
                <td style={{ ...styles.border1, ...styles.textAlign.center }}>02</td>
                <td style={{ ...styles.border1, }}><div style={{ ...styles.d_flex_j_between }}>-Ma túy <div style={{ ...styles.box("25px") }}></div></div></td>
                <td style={{ ...styles.border1, }}></td>
                <td style={{ ...styles.border1, ...styles.textAlign.center }}>05</td>
                <td style={{ ...styles.border1, }}><div style={{ ...styles.d_flex_j_between }}>-Thuốc lào <div style={{ ...styles.box("25px") }}></div></div></td>
                <td style={{ ...styles.border1, }}></td>
              </tr>

              <tr>
                <td style={{ ...styles.border1, ...styles.textAlign.center }}>03</td>
                <td style={{ ...styles.border1, }}><div style={{ ...styles.d_flex_j_between }}>-Rượu bia <div style={{ ...styles.box("25px") }}></div></div></td>
                <td style={{ ...styles.border1, }}></td>
                <td style={{ ...styles.border1, ...styles.textAlign.center }}>06</td>
                <td style={{ ...styles.border1, }}><div style={{ ...styles.d_flex_j_between }}>-Khác <div style={{ ...styles.box("25px") }}></div></div></td>
                <td style={{ ...styles.border1, }}></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{ ...styles.fontSize_16 }}>+ Gia đình: <span style={{ ...styles.fontSize_16, ...styles.font_italic }}>(Những người trong gia đình: bệnh đã mắc, đời sống, tinh thần, vật chất v.v...)</span></div>

        <div style={{ ...styles.fontBold, ...styles.marginBottom._5px, ...styles.fontSize_16 }}>III. KHÁM BỆNH</div>
        <div style={{ ...styles.fontSize_16, ...styles.fontBold }}>1. Toàn thân:
          <span style={{ ...styles.fontSize_16, ...styles.font_italic, ...styles.fontNormal }}>(ý thức, da niêm mạc, hệ thống hạch, tuyến giáp, vị trí, kích thước, số lượng, di động v.v...)</span>
        </div>
        <div style={{ ...styles.d_flex_j_end }}>
          <div style={{ ...styles.divBorder, ...styles.padding._5px, ...styles.minWidth._180px }}>
            <div style={{ ...styles.d_flex_j_between, ...styles.marginBottom._5px }}>
              <div style={{ ...styles.font_italic }}>Mạch</div>
              <div style={{ ...styles.font_italic }}>lần/ph</div>
            </div>
            <div style={{ ...styles.d_flex_j_between, ...styles.marginBottom._5px }}>
              <div style={{ ...styles.font_italic }}>Nhiệt độ</div>
              <div style={{ ...styles.font_italic }}>°C</div>
            </div>
            <div style={{ ...styles.d_flex_j_between, ...styles.marginBottom._5px }}>
              <div style={{ ...styles.font_italic }}>Huyết áp</div>
              <div style={{ ...styles.font_italic }}>mmHG</div>
            </div>
            <div style={{ ...styles.d_flex_j_between, ...styles.marginBottom._5px }}>
              <div style={{ ...styles.font_italic }}>Nhịp thở</div>
              <div style={{ ...styles.font_italic }}>lần/ph</div>
            </div>
            <div style={{ ...styles.d_flex_j_between, ...styles.marginBottom._5px }}>
              <div style={{ ...styles.font_italic }}>Cân nặng</div>
              <div style={{ ...styles.font_italic }}>kg</div>
            </div>
            <div style={{ ...styles.d_flex_j_between, ...styles.marginBottom._5px }}>
              <div style={{ ...styles.font_italic }}>Chiều cao</div>
              <div style={{ ...styles.font_italic }}>Cm</div>
            </div>
            <div style={{ ...styles.d_flex_j_between, ...styles.marginBottom._5px }}>
              <div style={{ ...styles.font_italic }}>BMI</div>
              <div style={{ ...styles.font_italic }}>Kg/m²</div>
            </div>
          </div>
        </div>

        <div style={{ ...styles.fontSize_16, ...styles.fontBold }}>2. Các cơ quan:</div>
        <div style={{ ...styles.fontSize_16, ...styles.height._60px }}>+ Tuần hoàn:</div>
        <div style={{ ...styles.fontSize_16, ...styles.height._60px }}>+ Hô hấp:</div>
        <div style={{ ...styles.fontSize_16, ...styles.height._60px }}>+ Tiêu hóa:</div>
        <div style={{ ...styles.fontSize_16, ...styles.height._60px }}>+ Thần kinh:</div>
        <div style={{ ...styles.fontSize_16, ...styles.height._60px }}>+ Cơ-Xương-Khớp:</div>
        <div style={{ ...styles.fontSize_16, ...styles.height._60px }}>+ Tai-Mũi-Họng:</div>
        <div style={{ ...styles.fontSize_16, ...styles.height._60px }}>+ Răng-Hàm-Mặt:</div>
        <div style={{ ...styles.fontSize_16, ...styles.height._60px }}>+ Mắt:</div>
        <div style={{ ...styles.fontSize_16, ...styles.height._60px }}>+ Nội tiết, dinh dưỡng và các bệnh lý khác:</div>

        <div style={{ ...styles.fontSize_16, ...styles.fontBold, ...styles.height._60px }}>3. Các xét nghiệm cận lâm sàng cần làm:</div>
        <div style={{ ...styles.fontSize_16, ...styles.fontBold, ...styles.height._60px }}>4. Tóm tắt bệnh án:</div>

        <div style={{ ...styles.fontBold, ...styles.marginBottom._5px, ...styles.fontSize_16 }}>IV. CHẨN ĐOÁN KHI VÀO KHOA ĐIỀU TRỊ:</div>
        <div style={{ ...styles.fontSize_16 }}>+ Bệnh chính:</div>
        <div style={{ ...styles.fontSize_16 }}>+ Bệnh kèm theo <span style={{ ...styles.font_italic }}>(nếu có)</span>:</div>
        <div style={{ ...styles.fontSize_16 }}>+ Phân biệt:</div>

        <div style={{ ...styles.fontBold, ...styles.marginBottom._5px, ...styles.fontSize_16, ...styles.height._60px }}>V. TIÊN LƯỢNG:</div>
        <div style={{ ...styles.fontBold, ...styles.marginBottom._5px, ...styles.fontSize_16, ...styles.height._60px }}>VI. HƯỚNG ĐIỀU TRỊ:</div>
      </div>

      {/* TỔNG KẾT BỆNH ÁN */}
      <div>
        <div style={{ ...styles.fontBold, ...styles.marginBottom._5px, ...styles.fontSize_16 }}>B - TỔNG KẾT BỆNH ÁN</div>
        <div>
          <div style={{ ...styles.fontBold, ...styles.marginBottom._5px, ...styles.fontSize_16, ...styles.height._60px }}>1. Quá trình bệnh lý và diễn biến lâm sàng:</div>
        </div>
        <div>
          <div style={{ ...styles.fontBold, ...styles.marginBottom._5px, ...styles.fontSize_16, ...styles.height._60px }}>2. Tóm tắt kết quả xét nghiệm cận lâm sàng có giá trị chẩn đoán:</div>
        </div>
        <div>
          <div style={{ ...styles.fontBold, ...styles.marginBottom._5px, ...styles.fontSize_16, ...styles.height._60px }}>3. Phương pháp điều trị:</div>
        </div>
        <div>
          <div style={{ ...styles.fontBold, ...styles.marginBottom._5px, ...styles.fontSize_16, ...styles.height._60px }}>4. Tình trạng người bệnh ra viện:</div>
        </div>
        <div>
          <div style={{ ...styles.fontBold, ...styles.marginBottom._5px, ...styles.fontSize_16, ...styles.height._60px }}>5. Hướng điều trị và các chế độ tiếp theo:</div>
        </div>

        <div style={{ ...styles.w_100 }}>
          <table style={{ ...styles.table }}>
            <tr>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._275px }} colSpan={2}>Hồ sơ, phim, ảnh</th>
              <th style={{ ...styles.border1, ...styles.minWidth._180px, ...styles.verticalTop }} rowSpan={4}>
                <div style={{ ...styles.textAlign.center, ...styles.height._70px }}>Người giao hồ sơ:</div>
                <div style={{ ...styles.fontNormal, ...styles.textAlign.left }}>Họ tên:</div>
              </th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._265px, ...styles.fontNormal }}>Ngày &ensp;&ensp; tháng &ensp;&ensp; năm</th>
            </tr>

            <tr>
              <th style={{ ...styles.border1, ...styles.textAlign.center }}>Loại</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center }}>Số tờ</th>
              <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._265px, ...styles.verticalTop }} rowSpan={7}>Bác sĩ điều trị</th>
            </tr>

            <tr>
              <td style={{ ...styles.border1 }}>- X-Quang</td>
              <td style={{ ...styles.border1 }}></td>
            </tr>

            <tr>
              <td style={{ ...styles.border1 }}>- CT Scanner</td>
              <td style={{ ...styles.border1 }}></td>
            </tr>

            <tr>
              <td style={{ ...styles.border1 }}>- Siêu âm</td>
              <td style={{ ...styles.border1 }}></td>
              <td style={{ ...styles.border1 }} rowSpan={4}>
                <div style={{ ...styles.textAlign.center, ...styles.height._70px, ...styles.verticalTop, ...styles.fontBold }}>Người nhận hồ sơ:</div>
                <div style={{ ...styles.textAlign.left }}>Họ tên:</div>
              </td>
            </tr>

            <tr>
              <td style={{ ...styles.border1 }}>- Xét nghiệm</td>
              <td style={{ ...styles.border1 }}></td>
            </tr>

            <tr>
              <td style={{ ...styles.border1 }}>- Khác</td>
              <td style={{ ...styles.border1 }}></td>
            </tr>

            <tr>
              <td style={{ ...styles.border1 }}>- Toàn bộ hồ sơ</td>
              <td style={{ ...styles.border1 }}></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

export default PhieuInBenhAn