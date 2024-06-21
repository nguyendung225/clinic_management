import React from 'react'
import { styles } from "../constant";
import CustomTextarea from '../../custom-textarea/CustomTextarea'

type Props = {
    isPhieuDienTim?: boolean;
    isPhieuChupCongHuongTu?: boolean;
    isPhieuChieuChupXQuang?: boolean;
    isPhieuSieuAm?: boolean;
    isPhieuChupCatLopViTinh?: boolean;
    isPhieuDoChucNangHoHap?: boolean;
}

const ThongTinChung = ({
    isPhieuDienTim,
    isPhieuChupCongHuongTu,
    isPhieuChieuChupXQuang,
    isPhieuSieuAm,
    isPhieuChupCatLopViTinh,
    isPhieuDoChucNangHoHap
}: Props) => {
  return (
      <div>
          <div style={{ ...styles.d_flex, alignItems: "center", lineHeight: "20px" }}>
              <div style={{ ...styles.w_60, display: "flex", alignItems: "center" }}>
                  <span
                      className="mb-6-px w-220-px"
                      style={{ marginBottom: "-2px", width: "242px" }}
                  >- Họ và tên người bệnh:</span>
                  <CustomTextarea
                      disabled
                  />
              </div>
              <div style={{ ...styles.w_20, display: "flex", alignItems: "center", marginLeft: "5px" }}>
                  <span
                      className="mb-6-px"
                      style={{ marginBottom: "-2px", width: "40px" }}>Tuổi:</span>
                  <CustomTextarea
                      disabled
                  />
              </div>
              <div style={{ ...styles.w_20, display: "flex", alignItems: "center", marginLeft: "5px" }}>
                  <span
                      className="mb-6-px w-95-px"
                      style={{ marginBottom: "-2px", width: "115px" }}>Giới tính:</span>
                  <CustomTextarea
                      disabled
                  />
              </div>
          </div>

          {isPhieuDienTim && <div style={{ ...styles.d_flex_j_between, alignItems: "center", lineHeight: "20px" }}>
              <div style={{ ...styles.w_40, display: "flex", alignItems: "center" }}>
                  <span
                      className="mb-6-px"
                      style={{ marginBottom: "-2px", width: "120px" }}
                  >- Chiều cao:</span>
                  <CustomTextarea
                      disabled
                  />
                  <span
                      className="mb-6-px"
                      style={{ marginBottom: "-2px" }}
                  >cm</span>
              </div>
              <div style={{ ...styles.w_40, display: "flex", alignItems: "center", marginLeft: "5px" }}>
                  <span
                      className="mb-6-px"
                      style={{ marginBottom: "-2px", width: "95px" }}>Cân nặng:</span>
                  <CustomTextarea
                      disabled
                  />
                  <span style={{ marginBottom: "6px" }}>cm</span>
              </div>
          </div>}

          <div style={{ ...styles.d_flex, alignItems: "center", lineHeight: "20px" }}>
              <div style={{ ...(isPhieuSieuAm ? styles.w_70 : styles.w_100), display: "flex", alignItems: "center" }}>
                  <span
                      className="mb-6-px w-62-px"
                      style={{ marginBottom: "-2px", width: "70px" }}>- Địa chỉ:</span>
                  <CustomTextarea
                      disabled
                  />
              </div>
              {isPhieuSieuAm && <div style={{ ...styles.w_30, display: "flex", alignItems: "center", marginLeft: "5px" }}>
                  <span
                      className="mb-6-px"
                      style={{ marginBottom: "-2px", width: "52px" }}>BHYT:</span>
                  <CustomTextarea
                      disabled
                  />
              </div>}
          </div>

          <div style={{ ...styles.d_flex, alignItems: "center", lineHeight: "20px" }}>
              <div style={{ ...styles.w_50, display: "flex", alignItems: "center" }}>
                  <span
                      className="mb-6-px"
                      style={{ marginBottom: "-2px", width: "60px" }}>- Khoa:</span>
                  <CustomTextarea
                      disabled
                  />
              </div>
              <div style={{ ...styles.w_25, display: "flex", alignItems: "center", marginLeft: "5px" }}>
                  <span
                      className="mb-6-px"
                      style={{ marginBottom: "-2px", width: "62px" }}>Buồng:</span>
                  <CustomTextarea
                      disabled
                  />
              </div>
              <div style={{ ...styles.w_25, display: "flex", alignItems: "center", marginLeft: "5px" }}>
                  <span
                      className="mb-6-px"
                      style={{ marginBottom: "-2px", width: "65px" }}>Giường:</span>
                  <CustomTextarea
                      disabled
                  />
              </div>
          </div>

          <div style={{ ...styles.d_flex, alignItems: "center", lineHeight: "20px" }}>
              <div style={{ ...styles.w_100, display: "flex", alignItems: "center" }}>
                  <span
                      className="mb-6-px"
                      style={{ marginBottom: "-2px", width: "105px" }}>- Chẩn đoán:</span>
                  <CustomTextarea
                      disabled
                  />
              </div>
          </div>
          {(!isPhieuChieuChupXQuang && !isPhieuDoChucNangHoHap) && <div style={{ ...styles.d_flex, alignItems: "center", lineHeight: "20px" }}>
              <div style={{ ...styles.w_100 }}>
                  <span
                      className="mb-6-px"
                      style={{ marginBottom: "-2px", width: "200px" }}>- Yêu cầu kiểm tra:</span>
                  <CustomTextarea
                      disabled
                      rows={2} />
              </div>
          </div>}
          {isPhieuChupCatLopViTinh && <div style={{ ...styles.d_flex, alignItems: "center", lineHeight: "20px" }}>
              <div style={{ ...styles.w_100, display: "flex", alignItems: "center" }}>
                  <span
                      className="mb-6-px w-250-px"
                      style={{ marginBottom: "-2px", width: "280px" }}>- Người bệnh có cơ địa dị ứng:</span>
                  <CustomTextarea
                      disabled
                  />
              </div>
          </div>}
          {isPhieuChupCongHuongTu &&
              <>
                  <div style={{ ...styles.d_flex, alignItems: "center", lineHeight: "20px" }}>
                      <div style={{ ...styles.w_100, display: "flex", alignItems: "center" }}>
                          <span
                              className="mb-6-px w-430-px"
                              style={{ marginBottom: "-2px", width: "490px" }}>- Người bệnh có dị vật kim loại trong cơ thể:</span>
                          <CustomTextarea
                              disabled
                          />
                      </div>
                  </div>
                  <div style={{ ...styles.d_flex, alignItems: "center", lineHeight: "20px" }}>
                      <div style={{ ...styles.w_100 }}>
                          <span
                              className="mb-6-px"
                              style={{ marginBottom: "-2px", width: "200px" }}>- Các kết quả xét nghiệm, chẩn đoán hình ảnh đã có:</span>
                          <CustomTextarea
                              disabled
                              rows={2} />
                      </div>
                  </div>
              </>}
      </div>
  )
}

export default ThongTinChung