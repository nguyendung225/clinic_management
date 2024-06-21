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

const PhieuXetNghiemTeBaoNuocDich = (props: Props) => {
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
              PHIẾU XÉT NGHIỆM
            </div>
            <div
              style={{
                ...styles.position.relative,
                ...styles.titleFrom,
              }}
            >
              TẾ BÀO NƯỚC DỊCH
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
            <div
              style={{
                ...styles.position.relative,
                lineHeight: "25px",
              }}
            >
              Bệnh phẩm:&nbsp;
              <span style={{ ...styles.hr, ...styles.w_80 }}></span>
            </div>
          </div>
        </HeaderPhieuXetNghiem>
        <div style={{ ...styles.w_100, ...styles.overflow.hidden }}>
          <div style={{ ...styles.position.relative, lineHeight: "25px" }}>
            - Chẩn đoán:&nbsp;
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
          <div style={{ marginTop: "20px" }}>
            <b>1. Nước tiểu</b>
          </div>
          <div>
            <table style={styles.table}>
              <tr>
                <th
                  style={{
                    ...styles.border,
                    ...styles.w_10,
                    ...styles.textAlign.center,
                  }}
                  rowSpan={2}
                >
                  Hồng cầu
                </th>
                <th
                  style={{
                    ...styles.border,
                    ...styles.w_10,
                    ...styles.textAlign.center,
                  }}
                  rowSpan={2}
                >
                  Bạch cầu
                </th>
                <th
                  style={{
                    ...styles.border,
                    ...styles.w_10,
                    ...styles.textAlign.center,
                  }}
                  rowSpan={2}
                >
                  Trụ hạt
                </th>
                <th
                  style={{
                    ...styles.border,
                    ...styles.w_10,
                    ...styles.textAlign.center,
                  }}
                  rowSpan={2}
                >
                  Trụ trong
                </th>
                <th
                  style={{
                    ...styles.border,
                    ...styles.w_10,
                    ...styles.textAlign.center,
                  }}
                  rowSpan={2}
                >
                  Trụ mỡ
                </th>
                <th
                  style={{
                    ...styles.border,
                    ...styles.w_40,
                    ...styles.textAlign.center,
                  }}
                  colSpan={3}
                >
                  Tế bào biểu mô
                </th>
              </tr>
              <tr>
                <th
                  style={{
                    ...styles.border,
                    ...styles.w_10,
                    ...styles.textAlign.center,
                  }}
                >
                  Thận
                </th>
                <th
                  style={{
                    ...styles.border,
                    ...styles.w_10,
                    ...styles.textAlign.center,
                  }}
                >
                  Niệu đạo
                </th>
                <th
                  style={{
                    ...styles.border,
                    ...styles.w_15,
                    ...styles.textAlign.center,
                  }}
                >
                  Bàng quang
                </th>
              </tr>
              <tbody>
                <tr>
                  <td style={{ ...styles.border, textAlign: "center" }}>
                    &nbsp;
                  </td>
                  <td style={styles.border}></td>
                  <td style={{ ...styles.border, textAlign: "center" }}></td>
                  <td style={{ ...styles.border, textAlign: "center" }}></td>
                  <td style={styles.border}></td>
                  <td style={{ ...styles.border, textAlign: "center" }}></td>
                  <td style={{ ...styles.border, textAlign: "center" }}></td>
                  <td style={styles.border}></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style={{ margin: "20px 0" }}>
            <table style={styles.table}>
              <tr>
                <th
                  style={{
                    ...styles.border,
                    ...styles.w_15,
                    ...styles.textAlign.center,
                  }}
                >
                  Cặn oxalat
                </th>
                <th
                  style={{
                    ...styles.border,
                    ...styles.w_15,
                    ...styles.textAlign.center,
                  }}
                >
                  Cặn cacbonat
                </th>
                <th
                  style={{
                    ...styles.border,
                    ...styles.w_15,
                    ...styles.textAlign.center,
                  }}
                >
                  Cặn sulphat
                </th>
                <th
                  style={{
                    ...styles.border,
                    ...styles.w_15,
                    ...styles.textAlign.center,
                  }}
                >
                  Cặn photphat
                </th>
                <th
                  style={{
                    ...styles.border,
                    ...styles.w_15,
                    ...styles.textAlign.center,
                  }}
                >
                  Cặn urat
                </th>
                <th
                  style={{
                    ...styles.border,
                    ...styles.w_15,
                    ...styles.textAlign.center,
                  }}
                >
                  Cặn khác
                </th>
                <th
                  style={{
                    ...styles.border,
                    ...styles.w_15,
                    ...styles.textAlign.center,
                  }}
                >
                  Tinh trùng
                </th>
              </tr>
              <tbody>
                <tr>
                  <td style={{ ...styles.border, textAlign: "center" }}>
                    &nbsp;
                  </td>
                  <td style={styles.border}></td>
                  <td style={{ ...styles.border, textAlign: "center" }}></td>
                  <td style={{ ...styles.border, textAlign: "center" }}></td>
                  <td style={styles.border}></td>
                  <td style={{ ...styles.border, textAlign: "center" }}></td>
                  <td style={{ ...styles.border, textAlign: "center" }}></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style={styles.d_flex}><b>2. Nước não tuỷ:&nbsp;</b><div><div style={{ ...styles.position.relative, lineHeight: "25px" }}>
            - Số lượng HC (x 10<sup>12</sup>/l):&nbsp;<span style={{...styles.hr,left:"300px"}}></span>
          </div>
          <div style={{ ...styles.position.relative, lineHeight: "25px" }}>
            - Số lượng tế bào có nhân (x 10<sup>9</sup>/l):&nbsp;
            <span style={{...styles.hr,left:"300px"}}></span>
          </div>
          <div style={{ ...styles.position.relative, lineHeight: "25px",textIndent:"10px" }}>
            + Bạch cầu đoạn trung tính (%):&nbsp;
            <span style={{...styles.hr,left:"300px"}}></span>
          </div>
          <div style={{ ...styles.position.relative, lineHeight: "25px",textIndent:"10px" }}>
            + Bạch cầu mono (%):&nbsp;
            <span style={{...styles.hr,left:"300px"}}></span>
          </div>
          <div style={{ ...styles.position.relative, lineHeight: "25px",textIndent:"10px" }}>
            + Các tế bào khác (%):&nbsp;
            <span style={{...styles.hr,left:"300px"}}></span>
          </div></div> </div>
          <b>3. Dịch khác:&nbsp;</b>
          <div style={{...styles.d_flex,marginLeft:"95px"}} className="ml-85"><div><div style={{ ...styles.position.relative, lineHeight: "25px",textIndent:"23px", left:"9px"  }}>
          + Hồng cầu (Có +/ Không -):&nbsp;<span style={{...styles.hr,left:"314px"}}></span>
          </div>
          <div style={{ ...styles.position.relative, lineHeight: "25px",textIndent:"23px", left:"9px"  }}>
          + Bạch cầu đoạn trung tính (%):&nbsp;
            <span style={{...styles.hr,left:"314px"}}></span>
          </div>
          <div style={{ ...styles.position.relative, lineHeight: "25px",textIndent:"23px", left:"9px" }}>
          + Bạch cầu lympho (%):&nbsp;
            <span style={{...styles.hr,left:"314px"}}></span>
          </div>
          <div style={{ ...styles.position.relative, lineHeight: "25px",textIndent:"23px", left:"9px" }}>
            + Bạch cầu mono (%):&nbsp;
            <span style={{...styles.hr,left:"314px"}}></span>
          </div>
          <div style={{ ...styles.position.relative, lineHeight: "25px",textIndent:"23px", left:"9px" }}>
            + Các tế bào khác (%):&nbsp;
            <span style={{...styles.hr,left:"314px"}}></span>
          </div></div> </div>

          <div style={{ ...styles.position.relative, lineHeight: "25px" }}>
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
            <b>Hướng dẫn:</b> <i>In khổ A4 dọc.</i>
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

export default PhieuXetNghiemTeBaoNuocDich;
