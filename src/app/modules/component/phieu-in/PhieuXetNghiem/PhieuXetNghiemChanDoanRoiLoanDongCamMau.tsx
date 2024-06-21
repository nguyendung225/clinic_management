import React from "react";
import { Button, Modal } from "react-bootstrap";
import { styles } from "../constant";
import { HeaderPhieuXetNghiem } from "../components/HeaderPhieuXetNghiem";
import { KyTenCuoiTrangPhieuXetNghiem } from "../components/KyTenCuoiTrangPhieuXetNghiem";
import { RenderUnderLineDots } from "../components/RenderUnderLineDots";
import { UnderLineDots } from "../components";

type Props = {
  show: boolean;
  handleClose: () => void;
};

const PhieuXetNghiemChanDoanRoiLoanDongCamMau = (props: Props) => {
  let { show, handleClose } = props;

  const handlePrint = () => {
    let content = document.getElementById("print-contents1");
    let pri = (document.getElementById("ifmcontentstoprint") as any)
      .contentWindow;
    pri.document.open();

    pri.document.write((content as HTMLElement).innerHTML);

    pri.document.close();
    pri.focus();
    pri.print();
  };

  return (
    <Modal show={show} centered size="lg" onHide={handleClose} scrollable>
      <Modal.Header closeButton className="header-modal">
        <Modal.Title id="example-custom-modal-styling-title">
          Phiếu in xét nghiệm
        </Modal.Title>
      </Modal.Header>
      <iframe
        id="ifmcontentstoprint"
        style={{
          height: "0px",
          width: "0px",
          position: "absolute",
        }}
      ></iframe>
      <Modal.Body id="print-contents1" className="dialog-body-scroll">
        <HeaderPhieuXetNghiem>
          <div style={{ ...styles.w_60, ...styles.overflow.hidden }}>
            <div style={{ ...styles.titleFrom, fontWeight: "normal" }}>
              PHIẾU XÉT NGHIỆM CHẨN ĐOÁN
            </div>
            <div
              style={{
                ...styles.position.relative,
                ...styles.titleFrom,
              }}
            >
              RỐI LOẠN ĐÔNG CẦM MÁU
            </div>
            <div
              style={{
                ...styles.d_flex,
                justifyContent: "center",
                marginTop: "5px",
              }}
            >
              <span>
                Thường:&nbsp;
                <input
                  type="checkbox"
                  checked
                  style={styles.checkbox_checked}
                ></input>
              </span>
              <span style={{ marginLeft: "10%" }}>
                Cấp cứu:&nbsp;
                <input type="checkbox" style={styles.checkbox}></input>
              </span>
            </div>
          </div>
        </HeaderPhieuXetNghiem>
        <div style={{ ...styles.w_100, ...styles.overflow.hidden }}>
          <div style={{ ...styles.position.relative, lineHeight: "25px" }}>
            - Chẩn đoán lâm sàng:&nbsp;
            {true ? (
              <>
                <span style={styles.hr}></span>
              </>
            ) : (
              <RenderUnderLineDots>
                <div>{/* nội dung */}</div>
              </RenderUnderLineDots>
            )}
          </div>
          <div style={{ ...styles.position.relative, lineHeight: "25px" }}>
            - Tóm tắt bệnh lý:&nbsp;
            {true ? (
              <>
                <span style={styles.hr}></span>
                <UnderLineDots lineNumber={1} />
              </>
            ) : (
              <RenderUnderLineDots>
                <div>{/* nội dung */}</div>
              </RenderUnderLineDots>
            )}
          </div>

          <div style={{ marginTop: "15px" }}>
            <table style={styles.table}>
              <tr>
                <th
                  style={{
                    ...styles.border,
                    ...styles.w_5,
                    ...styles.textAlign.center,
                    textTransform: "uppercase",
                  }}
                >
                  STT
                </th>
                <th
                  style={{
                    ...styles.border,
                    ...styles.w_40,
                    ...styles.textAlign.center,
                    textTransform: "uppercase",
                  }}
                >
                  TÊN XÉT NGHIỆM
                </th>
                <th
                  style={{
                    ...styles.border,
                    ...styles.w_10,
                    ...styles.textAlign.center,
                    textTransform: "uppercase",
                  }}
                >
                  ĐƠN VỊ
                </th>
                <th
                  style={{
                    ...styles.border,
                    ...styles.w_20,
                    ...styles.textAlign.center,
                    textTransform: "uppercase",
                  }}
                >
                  CHỈ SỐ BÌNH THƯỜNG
                </th>
                <th
                  style={{
                    ...styles.border,
                    ...styles.w_25,
                    ...styles.textAlign.center,
                    textTransform: "uppercase",
                  }}
                >
                  KẾT QUẢ CỦA BỆNH NHÂN
                </th>
              </tr>
              <tbody>
                <tr>
                  <td style={{ ...styles.border, textAlign: "center" }}>1</td>
                  <td style={styles.border}>Thời gian máu chảy</td>
                  <td style={{ ...styles.border, textAlign: "center" }}>Phút</td>
                  <td style={{ ...styles.border, textAlign: "center" }}>&le;4</td>
                  <td style={styles.border}></td>
                </tr>

                <tr>
                  <td style={{ ...styles.border, textAlign: "center" }}>2</td>
                  <td style={styles.border}>Thời gian máu đông</td>
                  <td style={{ ...styles.border, textAlign: "center" }}>Phút</td>
                  <td style={{ ...styles.border, textAlign: "center" }}>7-10</td>
                  <td style={styles.border}></td>
                </tr>

                <tr>
                  <td style={{ ...styles.border, textAlign: "center" }}>3</td>
                  <td style={styles.border}>Co cục máu</td>
                  <td style={{ ...styles.border, textAlign: "center" }}>Mức độ</td>
                  <td style={{ ...styles.border, textAlign: "center" }}>Co hoàn toàn</td>
                  <td style={styles.border}></td>
                </tr>

                <tr>
                  <td
                    style={{ ...styles.border, textAlign: "center" }}
                    rowSpan={3}
                  >
                    4
                  </td>
                  <td style={styles.border} rowSpan={3}>
                    PT(Prothrombin Time - thời gian Prothrombin)
                  </td>
                  <td style={{ ...styles.border, textAlign: "center" }}>Giây</td>
                  <td style={{ ...styles.border, textAlign: "center" }}></td>
                  <td style={styles.border}></td>
                </tr>

                <tr>
                  <td style={{ ...styles.border, textAlign: "center" }}>%</td>
                  <td style={{ ...styles.border, textAlign: "center" }}>{"> 70"}</td>
                  <td style={styles.border}></td>
                </tr>

                <tr>
                  <td style={{ ...styles.border, textAlign: "center" }}>ING</td>
                  <td style={{ ...styles.border, textAlign: "center" }}></td>
                  <td style={styles.border}></td>
                </tr>

                <tr>
                  <td style={{ ...styles.border, textAlign: "center" }}>5</td>
                  <td style={styles.border}>Thời gian Howell</td>
                  <td style={{ ...styles.border, textAlign: "center" }}>Phút</td>
                  <td style={{ ...styles.border, textAlign: "center" }}>1’15” - 2’30”</td>
                  <td style={styles.border}></td>
                </tr>

                <tr>
                  <td
                    style={{ ...styles.border, textAlign: "center" }}
                    rowSpan={2}
                  >
                    6
                  </td>
                  <td style={styles.border} rowSpan={2}>
                    APTT (Activated Partial Thromboplastin Time Giây - thời gian
                    thromboplastin từng phần hoạt hóa)
                  </td>
                  <td style={{ ...styles.border, textAlign: "center" }}>Giây</td>
                  <td style={{ ...styles.border, textAlign: "center" }}></td>
                  <td style={styles.border}></td>
                </tr>

                <tr>
                  <td style={{ ...styles.border, textAlign: "center" }}>Chỉ số bệnh/chứng</td>
                  <td style={{ ...styles.border, textAlign: "center" }}></td>
                  <td style={styles.border}></td>
                </tr>

                <tr>
                  <td
                    style={{ ...styles.border, textAlign: "center" }}
                    rowSpan={2}
                  >
                    7
                  </td>
                  <td style={styles.border} rowSpan={2}>
                    TT (Thrombin Time - thời gian thrombin)
                  </td>
                  <td style={{ ...styles.border, textAlign: "center" }}>Giây</td>
                  <td style={{ ...styles.border, textAlign: "center" }}></td>
                  <td style={styles.border}></td>
                </tr>

                <tr>
                  <td style={{ ...styles.border, textAlign: "center" }}>Chỉ số bệnh/chứng</td>
                  <td style={{ ...styles.border, textAlign: "center" }}></td>
                  <td style={styles.border}></td>
                </tr>

                <tr>
                  <td style={{ ...styles.border, textAlign: "center" }}>8</td>
                  <td style={styles.border}>Nghiệm pháp rượu</td>
                  <td style={{ ...styles.border, textAlign: "center" }}>Dương, âm</td>
                  <td style={{ ...styles.border, textAlign: "center" }}>Âm</td>
                  <td style={styles.border}></td>
                </tr>

                <tr>
                  <td style={{ ...styles.border, textAlign: "center" }}>9</td>
                  <td style={styles.border}>Nghiệm pháp Von Kaulla</td>
                  <td style={{ ...styles.border, textAlign: "center" }}>Dương, âm</td>
                  <td style={{ ...styles.border, textAlign: "center" }}>Âm</td>
                  <td style={styles.border}></td>
                </tr>

                <tr>
                  <td style={{ ...styles.border, textAlign: "center" }}>10</td>
                  <td style={styles.border}>Ngưng tập tiểu cầu với ADP</td>
                  <td style={{ ...styles.border, textAlign: "center" }}>%</td>
                  <td style={{ ...styles.border, textAlign: "center" }}></td>
                  <td style={styles.border}></td>
                </tr>

                <tr>
                  <td style={{ ...styles.border, textAlign: "center" }}>11</td>
                  <td style={styles.border}>Ngưng tập tiểu cầu với collagen</td>
                  <td style={{ ...styles.border, textAlign: "center" }}>%</td>
                  <td style={{ ...styles.border, textAlign: "center" }}></td>
                  <td style={styles.border}></td>
                </tr>

                <tr>
                  <td style={{ ...styles.border, textAlign: "center" }}>12</td>
                  <td style={styles.border}>Ngưng tập tiểu cầu với Ristocetin</td>
                  <td style={{ ...styles.border, textAlign: "center" }}>%</td>
                  <td style={{ ...styles.border, textAlign: "center" }}></td>
                  <td style={styles.border}></td>
                </tr>

                <tr>
                  <td style={{ ...styles.border, textAlign: "center" }}>13</td>
                  <td style={styles.border}>Yếu tố 3 tiểu cầu</td>
                  <td style={{ ...styles.border, textAlign: "center" }}>%</td>
                  <td style={{ ...styles.border, textAlign: "center" }}></td>
                  <td style={styles.border}></td>
                </tr>

                <tr>
                  <td style={{ ...styles.border, textAlign: "center" }}>14</td>
                  <td style={styles.border}>Yếu tố 4 tiểu cầu</td>
                  <td style={{ ...styles.border, textAlign: "center" }}>Giây</td>
                  <td style={{ ...styles.border, textAlign: "center" }}></td>
                  <td style={styles.border}></td>
                </tr>

                <tr>
                  <td style={{ ...styles.border, textAlign: "center" }}>15</td>
                  <td style={styles.border}>Định lượng yếu tố đông máu :</td>
                  <td style={{ ...styles.border, textAlign: "center" }}>%</td>
                  <td style={{ ...styles.border, textAlign: "center" }}></td>
                  <td style={styles.border}></td>
                </tr>

                <tr>
                  <td style={{ ...styles.border, textAlign: "center" }}>&nbsp;</td>
                  <td style={styles.border}></td>
                  <td style={{ ...styles.border, textAlign: "center" }}></td>
                  <td style={{ ...styles.border, textAlign: "center" }}></td>
                  <td style={styles.border}></td>
                </tr>

                <tr>
                  <td style={{ ...styles.border, textAlign: "center" }}>&nbsp;</td>
                  <td style={styles.border}></td>
                  <td style={{ ...styles.border, textAlign: "center" }}></td>
                  <td style={{ ...styles.border, textAlign: "center" }}></td>
                  <td style={styles.border}></td>
                </tr>

                <tr>
                  <td style={{ ...styles.border, textAlign: "center" }}>&nbsp;</td>
                  <td style={styles.border}></td>
                  <td style={{ ...styles.border, textAlign: "center" }}></td>
                  <td style={{ ...styles.border, textAlign: "center" }}></td>
                  <td style={styles.border}></td>
                </tr>

                <tr>
                  <td style={{ ...styles.border, textAlign: "center" }}>16</td>
                  <td style={styles.border}>F.D.P (Fibrin Degradation Product - sản phẩm thoái giáng sợi huyết)</td>
                  <td style={{ ...styles.border, textAlign: "center" }}>&micro;g/ml</td>
                  <td style={{ ...styles.border, textAlign: "center" }}>{`< 5`} &micro;g/ml</td>
                  <td style={styles.border}></td>
                </tr>

                <tr>
                  <td style={{ ...styles.border, textAlign: "center" }}>17</td>
                  <td style={styles.border}>D -dimer</td>
                  <td style={{ ...styles.border, textAlign: "center" }}>&micro;g/ml</td>
                  <td style={{ ...styles.border, textAlign: "center" }}>{`<`} 5 &micro;g/ml</td>
                  <td style={styles.border}></td>
                </tr>

                <tr>
                  <td style={{ ...styles.border, textAlign: "center" }}>18</td>
                  <td style={styles.border}>Xét nghiệm khác</td>
                  <td style={{ ...styles.border, textAlign: "center" }}></td>
                  <td style={{ ...styles.border, textAlign: "center" }}></td>
                  <td style={styles.border}></td>
                </tr>
                
                <tr>
                  <td style={{ ...styles.border, textAlign: "center" }}>&nbsp;</td>
                  <td style={styles.border}></td>
                  <td style={{ ...styles.border, textAlign: "center" }}></td>
                  <td style={{ ...styles.border, textAlign: "center" }}></td>
                  <td style={styles.border}></td>
                </tr>

                <tr>
                  <td style={{ ...styles.border, textAlign: "center" }}>&nbsp;</td>
                  <td style={styles.border}></td>
                  <td style={{ ...styles.border, textAlign: "center" }}></td>
                  <td style={{ ...styles.border, textAlign: "center" }}></td>
                  <td style={styles.border}></td>
                </tr>

                <tr>
                  <td style={{ ...styles.border, textAlign: "center" }}>&nbsp;</td>
                  <td style={styles.border}></td>
                  <td style={{ ...styles.border, textAlign: "center" }}></td>
                  <td style={{ ...styles.border, textAlign: "center" }}></td>
                  <td style={styles.border}></td>
                </tr>

              </tbody>
            </table>
          </div>
          <div style={{ ...styles.position.relative, lineHeight: "25px" }}>
            <b>Nhận xét:</b>
            {true ? (
              <>
                <span style={styles.hr}></span>
                <UnderLineDots lineNumber={2} />
              </>
            ) : (
              <RenderUnderLineDots>
                <div>{/* nội dung */}</div>
              </RenderUnderLineDots>
            )}
          </div>

          <KyTenCuoiTrangPhieuXetNghiem />
          <div>
            <b>Hướng dẫn:</b> <i>In khổ A4 dọc, 1 mặt.</i>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="flex flex-middle flex-center py-1">
          <Button className="btn-navy min-w-50px" onClick={handlePrint}>
            {"In phiếu"}
          </Button>
          <Button className="btn-navy-outlined" onClick={handleClose}>
            {"Đóng"}
          </Button>
        </Modal.Footer>
    </Modal>
  );
};

export default PhieuXetNghiemChanDoanRoiLoanDongCamMau;
