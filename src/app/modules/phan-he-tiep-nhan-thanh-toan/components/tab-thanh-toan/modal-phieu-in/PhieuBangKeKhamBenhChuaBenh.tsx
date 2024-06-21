import NumberToText from "../../../../component/NumberToText";
import Signature from "../../../../component/phieu-in/Signature";
import { styles } from "../../../../component/phieu-in/constant";
import { convertNumberPrice } from "../../../../utils/FormatUtils";

export const BangKeChiPhiKhamBenhChuaBenh = (props: any) => {

  return (
    <div>
      <div style={styles.d_flex_j_around}>
        <div>
          <div style={{}}>
            <span style={{ ...styles.fontBold }}>Bộ Y tế/ Sở Y tế/ Y tế ngành: </span>SỞ Y TẾ TEST
          </div>
          <div style={{}}>
            <span style={{ ...styles.fontBold }}>Cơ sở khám, chữa bệnh: </span>BỆNH VIỆN ĐA KHOA ABC
          </div>
          <div style={{}}>
            <span style={{ ...styles.fontBold }}>Khoa: </span>Khoa Khám Bệnh
          </div>
          <div style={{}}>
            <span style={{ ...styles.fontBold }}>Mã khoa BYT: </span>T01
          </div>
        </div>

        <div>
          <div style={{ ...styles.fontBold }}>Mẫu số: 01/BV</div>
          <div style={{ ...styles.fontBold }}>
            Mã số người bệnh: 24000087
          </div>
          <div style={{ ...styles.fontBold }}>
            Số khám bệnh: 254
          </div>
          <div>
            <div style={{ ...styles.width._120px }}><img style={styles.w_100} src="/media/images/Barcode.png" alt="" /></div>
          </div>
        </div>
      </div>
      <div style={styles.d_flex_j_between}>
        <div style={{ ...styles.w_10 }}>

        </div>

        <div style={{ ...styles.textAlign.center, ...styles.fontSize._18px, ...styles.fontBold }}>
          BẢNG KÊ CHI PHÍ KHÁM BỆNH
        </div>

        <div style={{ ...styles.border1, ...styles.minWidth._70px, ...styles.textAlign.center, ...styles.fontBold }}>1</div>
      </div>
      <div>
        <div>
          <div style={styles.fontBold}>I. Phần hành chính:</div>
          <div style={{ ...styles.d_flex_j_between, ...styles.marginBottom._1px }}>
            <div style={{ ...styles.minWidth._370px }}>(1) Họ tên người bệnh: <span style={{ ...styles.fontBold, ...styles.textUppercase }}>Thùy Anh</span></div>
            <div style={{ ...styles.minWidth._215px }}>Ngày, tháng, năm sinh: 2000</div>
            <div style={{ ...styles.minWidth._130px }}>Giới tính: Nam</div>
            <div style={{ ...styles.border1, ...styles.minWidth._130px, ...styles.textAlign.center, ...styles.fontBold }}>1</div>
          </div>

          <div style={{ ...styles.d_flex_j_between, ...styles.alignItems.center }}>
            <div style={styles.minWidth._573px}>(2) Địa chỉ hiện tại: Phường Quán Thánh, Quận Ba Đình, Thành phố Hà Nội</div>
            <div style={{ ...styles.d_flex_align_center }}>
              <div style={{ ...styles.minWidth._150px }}>(3) Mã khu vực (K1/K2/K3)</div>
              <div style={{ ...styles.border1, ...styles.minWidth._130px, ...styles.height._25px }}></div>
            </div>
          </div>

          <div style={{ ...styles.d_flex_align_center }}>
            <div style={{ ...styles.d_flex_align_center, ...styles.paddingRight._45px }}>
              <div style={{ ...styles.marginRight._48px }}>(4) Mã thẻ BHYT:</div>
              <div style={{ ...styles.borderRightNone, ...styles.width._36px, ...styles.height._25px }}></div>
              <div style={{ ...styles.borderRightNone, ...styles.width._30px, ...styles.height._25px }}></div>
              <div style={{ ...styles.borderRightNone, ...styles.width._30px, ...styles.height._25px }}></div>
              <div style={{ ...styles.borderRightNone, ...styles.width._30px, ...styles.height._25px }}></div>
              <div style={{ ...styles.borderRightNone, ...styles.width._30px, ...styles.height._25px }}></div>
              <div style={{ ...styles.border1, ...styles.height._25px, ...styles.width._90px }}></div>
            </div>
            <div> Giá trị từ đến</div>
            <div></div>
          </div>

          <div style={{ ...styles.d_flex_j_between, ...styles.alignItems.center }}>
            <div>
              (5) Cơ sở đăng ký KCB BHYT ban đầu:
            </div>
            <div style={{ ...styles.d_flex_align_center }}>
              <div style={{ ...styles.minWidth._130px }}>(6) Mã:</div>
              <div style={{ ...styles.border1, ...styles.minWidth._130px, ...styles.height._25px }}></div>
            </div>
          </div>

          <div style={{ ...styles.marginBottom._5px }}>
            (7) Đến khám: 09 giờ 42 phút, ngày 23/01/2024
          </div>

          <div style={{ ...styles.d_flex, ...styles.marginBottom._5px }}>
            <div style={{ ...styles.minWidth._520px }}>
              <div style={{ ...styles.marginBottom._5px }}>(8) Điều trị ngoại trú/nội trú: .....giờ.....phút, ngày...../...../..........</div>
              <div>Tổng số ngày điều trị: 1</div>
            </div>
            <div>
              <div style={{ ...styles.marginBottom._5px }}>(9) Kết thúc khám/điều trị: .....giờ.....phút, ngày...../...../..........</div>
              <div>(10) Tình trạng ra viện:</div>
            </div>
          </div>

          <div style={{ ...styles.d_flex_align_center, ...styles.marginBottom._10px }} className="mb-1">
            <div style={{ ...styles.d_flex_align_center, ...styles.paddingRight._15px }}>
              <div style={{ ...styles.minWidth._80px }}>(11) Cấp cứu</div>
              <div style={{ ...styles.border1, ...styles.minWidth._55px, ...styles.height._25px }}></div>
            </div>

            <div style={{ ...styles.d_flex_align_center, ...styles.paddingRight._35px }}>
              <div style={{ ...styles.minWidth._110px }}>(12) Đúng tuyến</div>
              <div style={{ ...styles.border1, ...styles.minWidth._75px, ...styles.height._25px }}></div>
            </div>

            <div style={styles.minWidth._130px}>Nơi chuyển:</div>
            <div style={styles.minWidth._130px}>Nơi chuyển đi:</div>

            <div style={{ ...styles.d_flex_align_center, ...styles.paddingRight._15px }}>
              <div style={{ ...styles.minWidth._120px }}>(13) Thông tuyến</div>
              <div style={{ ...styles.border1, ...styles.minWidth._75px, ...styles.height._25px }}></div>
            </div>

            <div style={{ ...styles.d_flex_align_center }}>
              <div style={{ ...styles.minWidth._110px }}>(14) Trái tuyến</div>
              <div style={{ ...styles.border1, ...styles.minWidth._75px, ...styles.height._25px }}></div>
            </div>
          </div>

          <div style={{ ...styles.d_flex_align_center, ...styles.marginBottom._5px }}>
            <div style={styles.minWidth._675px}>(15) Chẩn đoán xác định:</div>
            <div>(16) Mã bệnh (ICD-10):</div>
          </div>

          <div style={{ ...styles.marginBottom._5px }}>
            (17) Bệnh kèm theo:
          </div>

          <div style={{ ...styles.d_flex_align_center, ...styles.marginBottom._5px }}>
            <div style={{ ...styles.minWidth._165px }}>(18) Mã bệnh kèm theo:</div>
            <div style={{ ...styles.border1, ...styles.w_100, ...styles.height._25px }}></div>
          </div>

          <div style={{ ...styles.d_flex, ...styles.marginBottom._5px }}>
            <div style={{ ...styles.minWidth._520px }}>
              <div style={{ ...styles.marginBottom._5px }}>(19)Thời điểm đủ 5 năm liên tục ngày: ...../...../..........</div>
            </div>
            <div style={{ ...styles.marginBottom._5px }}>(20) Miễn cùng chi trả trong năm từ ngày...../...../..........</div>
          </div>
        </div>

        <div style={styles.marginBottom._10px}>
          <div style={styles.fontBold}>II. Phần chi phí khám, chữa bệnh:</div>

          <div style={{ ...styles.d_flex_align_center, ...styles.marginBottom._10px }}>
            <div style={{ ...styles.d_flex_align_center, ...styles.paddingRight._45px }}>
              <div style={{ ...styles.marginRight._48px }}>(4) Mã thẻ BHYT:</div>
              <div style={{ ...styles.borderRightNone, ...styles.width._36px, ...styles.height._25px }}></div>
              <div style={{ ...styles.borderRightNone, ...styles.width._30px, ...styles.height._25px }}></div>
              <div style={{ ...styles.borderRightNone, ...styles.width._30px, ...styles.height._25px }}></div>
              <div style={{ ...styles.borderRightNone, ...styles.width._30px, ...styles.height._25px }}></div>
              <div style={{ ...styles.borderRightNone, ...styles.width._30px, ...styles.height._25px }}></div>
              <div style={{ ...styles.border1, ...styles.height._25px, ...styles.width._90px }}></div>
            </div>
            <div style={{ ...styles.minWidth._370px }}> Giá trị từ đến</div>
            <div style={{ ...styles.d_flex_align_center, ...styles.marginBottom._5px }}>
              <div style={{ ...styles.minWidth._80px }}>Mức:</div>
              <div style={{ ...styles.border1, ...styles.minWidth._145px, ...styles.height._25px }}></div>
            </div>
          </div>

          <table style={{ borderCollapse: "collapse", width: "100%" }}>
            <thead>
              <tr>
                <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._230px }} rowSpan={2}>
                  Nội dung
                </th>
                <th style={{ ...styles.border1, ...styles.textAlign.center }} rowSpan={2}>
                  Đơn vị tính
                </th>
                <th style={{ ...styles.border1, ...styles.textAlign.center }} rowSpan={2}>
                  Số lượng
                </th>
                <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._80px }} rowSpan={2}>
                  Đơn giá BV (đồng)
                </th>
                <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._80px }} rowSpan={2}>
                  Đơn giá BH (đồng)
                </th>
                <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._80px }} rowSpan={2}>
                  Tỷ lệ thanh toán theo dịch vụ %
                </th>
                <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._80px }} rowSpan={2}>
                  Thành tiền BV (đồng)
                </th>
                <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._80px }} rowSpan={2}>
                  Tỷ lệ thanh toán BHYT %
                </th>
                <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._80px }} rowSpan={2}>
                  Thành tiền BH (đồng)
                </th>
                <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._80px }} colSpan={4}>
                  Nguồn thanh toán (đồng)
                </th>
              </tr>
              <tr>
                <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._80px }}>
                  Quỹ BHYT
                </th>
                <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._80px }}>
                  Người bệnh cùng chi trả
                </th>
                <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._80px }}>
                  Khác
                </th>
                <th style={{ ...styles.border1, ...styles.textAlign.center, ...styles.minWidth._80px }}>
                  Người bệnh tự chi trả
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td style={{ ...styles.border1, ...styles.textAlign.center }}>(1)</td>
                <td style={{ ...styles.border1, ...styles.textAlign.center }}>(2)</td>
                <td style={{ ...styles.border1, ...styles.textAlign.center }}>(3)</td>
                <td style={{ ...styles.border1, ...styles.textAlign.center }}>(4)</td>
                <td style={{ ...styles.border1, ...styles.textAlign.center }}>(5)</td>
                <td style={{ ...styles.border1, ...styles.textAlign.center }}>(6)</td>
                <td style={{ ...styles.border1, ...styles.textAlign.center }}>(7)</td>
                <td style={{ ...styles.border1, ...styles.textAlign.center }}>(8)</td>
                <td style={{ ...styles.border1, ...styles.textAlign.center }}>(9)</td>
                <td style={{ ...styles.border1, ...styles.textAlign.center }}>(10)</td>
                <td style={{ ...styles.border1, ...styles.textAlign.center }}>(11)</td>
                <td style={{ ...styles.border1, ...styles.textAlign.center }}>(12)</td>
                <td style={{ ...styles.border1, ...styles.textAlign.center }}>(13)</td>
              </tr>

              <tr>
                <td
                  style={{ ...styles.border1, ...styles.fontBold}}
                  colSpan={6}
                >
                  I. Chi phí trong danh mục BHYT thanh toán
                </td>
                <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontBold }}>0</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontBold }}>{convertNumberPrice(0)}</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontBold }}>{convertNumberPrice(0)}</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontBold }}>{convertNumberPrice(0)}</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontBold }}>{convertNumberPrice(0)}</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontBold }}>{convertNumberPrice(0)}</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right, ...styles.fontBold }}>{convertNumberPrice(0)}</td>
              </tr>

              <tr>
                <td style={{ ...styles.border1 }}>Khám tai mũi họng</td>
                <td style={{ ...styles.border1, ...styles.textAlign.center }}>Lần</td>
                <td style={{ ...styles.border1, ...styles.textAlign.center }}>1</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
                <td style={{ ...styles.border1, ...styles.textAlign.right }}>{convertNumberPrice(0)}</td>
              </tr>

              <tr>
                <td
                  style={{ ...styles.border1, ...styles.textAlign.center }}
                  colSpan={6}
                >
                  Cộng
                </td>
                <td style={{ ...styles.border1, ...styles.textAlign.right }}></td>
                <td style={{ ...styles.border1, ...styles.textAlign.right }}></td>
                <td style={{ ...styles.border1, ...styles.textAlign.right }}></td>
                <td style={{ ...styles.border1, ...styles.textAlign.right }}></td>
                <td style={{ ...styles.border1, ...styles.textAlign.right }}></td>
                <td style={{ ...styles.border1, ...styles.textAlign.right }}></td>
                <td style={{ ...styles.border1, ...styles.textAlign.right }}></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{ ...styles.marginBottom._50px }}>
          <div>Tổng chi phi lần khám bệnh/cả đợt điều trị (làm tròn đến đơn vị đồng): <span style={styles.fontBold}>669.000</span> đồng</div>
          <div>(Viết bằng chữ: <span style={{ ...styles.font_italic, ...styles.fontBold }}>{NumberToText(669000)}</span>)</div>
          <div>Tổng chi phí trong danh mục BHYT thanh toán (làm tròn đến đơn vị đồng): <span style={styles.fontBold}>0</span> đồng</div>
          <div>(Viết bằng chữ: <span style={{ ...styles.font_italic, ...styles.fontBold }}>{NumberToText(0)}</span>)</div>
          <div>Tổng chi phí ngoài danh mục BHYT thanh toán (làm tròn đến đơn vị đồng): <span style={styles.fontBold}>669.000</span> đồng</div>
          <div>(Viết bằng chữ: <span style={{ ...styles.font_italic, ...styles.fontBold }}>{NumberToText(669000)}</span>)</div>
          <div><span style={styles.fontBold}>Trong đó</span>, số tiền do:</div>
          <div>- Quỹ BHYT thanh toán theo giá dịch vụ y tế: 0 đồng</div>
          <div>- Người bệnh trả, trong đó:</div>
          <div style={styles.paddingLeft._10px}>+ Cùng trả trong phạm vi BHYT: 0 đồng</div>
          <div style={styles.paddingLeft._10px}>+ Các khoản phải trả khác: 669.000 đồng</div>
          <div>- Nguồn khác: 0 đồng</div>
          <div style={{ ...styles.paddingLeft._10px, ...styles.width._455px, ...styles.d_flex_j_between }}>
            <span>- Tạm ứng:</span> <span style={styles.fontBold}>0 đ</span>
          </div>
          <div style={{ ...styles.d_flex }}>
            <div style={{ ...styles.paddingLeft._10px, ...styles.width._455px, ...styles.d_flex_j_between, ...styles.marginRight._10px }}>
              <span>- Tổng chi phí KCB:</span> <span style={styles.fontBold}>84.500 đ</span>
            </div>
            <div style={styles.fontBold}>{NumberToText(84500)}</div>
          </div>

          <div style={{ ...styles.d_flex }}>
            <div style={{ ...styles.paddingLeft._10px, ...styles.width._455px, ...styles.d_flex_j_between, ...styles.marginRight._10px }}>
              <span>- Bệnh viện phải chỉ trả:</span> <span style={styles.fontBold}>0 đ</span>
            </div>
            <div style={styles.fontBold}>{NumberToText(0)}</div>
          </div>

          <div style={{ ...styles.d_flex }}>
            <div style={{ ...styles.paddingLeft._10px, ...styles.width._455px, ...styles.d_flex_j_between, ...styles.marginRight._10px }}>
              <span>- Bệnh nhân còn nợ:</span> <span style={styles.fontBold}>84.500 đ</span>
            </div>
            <div style={styles.fontBold}>{NumberToText(84500)}</div>
          </div>
        </div>

        <div style={{ ...styles.d_flex_j_around }}>
          <Signature
            title="Người lập bảng kê"
            subTitle="(Ký, ghi rõ họ tên)"
          />

          <Signature
            isHours={true}
            date={new Date()}
            title="kế toán viện phí"
            subTitle="(Ký, ghi rõ họ tên)"
          />
        </div>
        <div style={{ ...styles.d_flex_j_around }}>
          <Signature
            title="Xác nhận của người bệnh"
            subTitle="(Ký, ghi rõ họ tên)"
            content="Tôi đã nhận ..... phim ....."
          />

          <Signature
            isHours={true}
            date={new Date()}
            title="Giám đinh BHYT"
            subTitle="(Ký, ghi rõ họ tên)"
          />
        </div>
      </div>
    </div>
  );
};

