import React from "react";
import { Button, Modal } from "react-bootstrap";
import { styles } from "../constant";
import { HeaderPhieuXetNghiem } from "../components/HeaderPhieuXetNghiem";
import { RenderUnderLineDots } from "../components/RenderUnderLineDots";
import { UnderLineDots } from "../components";

type Props = {
  show: boolean;
  handleClose: () => void;
};

const PhieuXetNghiemSinhGiaiPhauBenhSinhThiet = (props: Props) => {
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
    <>
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
            <div style={{ ...styles.w_40, ...styles.overflow.hidden }}>
              <div style={{ ...styles.titleFrom, fontWeight: "normal" }}>
                PHIẾU XÉT NGHIỆM
              </div>
              <div
                style={{
                  ...styles.position.relative,
                  ...styles.titleFrom,
                }}
              >
                GIẢI PHẪU BỆNH SINH THIẾT
              </div>
            </div>
          </HeaderPhieuXetNghiem>
          <div style={{ ...styles.w_100, ...styles.overflow.hidden }}>
            <div style={{ ...styles.position.relative, lineHeight: "25px" }}>
              - Yêu cầu xét nghiệm:&nbsp;
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

            <div style={{ ...styles.position.relative, lineHeight: "25px" }}>
              - Sinh thiết được lấy từ:&nbsp;
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

            <div style={styles.d_flex}>
              <div
                style={{
                  ...styles.d_flex,
                  lineHeight: "25px",
                  ...styles.w_100,
                }}
              >
                <div style={styles.w_65}>
                  - Cố định bằng dung dịch:&nbsp;
                  <span
                    style={{ ...styles.textDataUnderline, width: "58%" }}
                  ></span>
                </div>
                <div style={styles.w_35}>
                  lúc: ....... giờ......., ngày ......./......./.......&nbsp;
                </div>
              </div>
            </div>

            <div style={{ ...styles.position.relative, lineHeight: "25px" }}>
              - Tóm tắt dấu hiệu lâm sàng chính và các xét nghiệm khác:&nbsp;
              {true ? (
                <>
                  <span style={styles.hr}></span>
                  <UnderLineDots lineNumber={4} />
                </>
              ) : (
                <RenderUnderLineDots>
                  <div>{/* nội dung */}</div>
                </RenderUnderLineDots>
              )}
            </div>

            <div style={{ ...styles.position.relative, lineHeight: "25px" }}>
              - Quá trình điều trị::&nbsp;
              {true ? (
                <>
                  <span style={styles.hr}></span>
                  <UnderLineDots lineNumber={6} />
                </>
              ) : (
                <RenderUnderLineDots>
                  <div>{/* nội dung */}</div>
                </RenderUnderLineDots>
              )}
            </div>

            <div style={{ ...styles.position.relative, lineHeight: "25px" }}>
              - Nhận xét đại thể khi lấy sinh thiết:&nbsp;
              {true ? (
                <>
                  <span style={styles.hr}></span>
                  <UnderLineDots lineNumber={4} />
                </>
              ) : (
                <RenderUnderLineDots>
                  <div>{/* nội dung */}</div>
                </RenderUnderLineDots>
              )}
            </div>

            <div style={{ ...styles.position.relative, lineHeight: "25px" }}>
              - Kết quả sinh thiết lần trước (nếu có):&nbsp;
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

            <div style={{ ...styles.position.relative, lineHeight: "25px" }}>
              - Chẩn đoán lâm sàng:&nbsp;
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

            <div
              style={{
                ...styles.d_flex,
                justifyContent: "end",
                margin: "20px",
              }}
            >
              <div
                style={{
                  ...styles.overflow.hidden,
                  ...styles.w_40,
                }}
              >
                <div style={styles.textAlign.center}>
                  <i>Ngày ....... tháng ...... năm .......</i>
                </div>
                <div
                  style={{ ...styles.textAlign.center, marginBottom: "50px" }}
                >
                  <strong>BÁC SĨ ĐIỀU TRỊ</strong>
                </div>
                <div
                  style={{ ...styles.position.relative, lineHeight: "25px" }}
                >
                  Họ và tên:<span style={styles.hr}></span>
                </div>
              </div>
            </div>

            <b>KẾT QUẢ SINH THIẾT:</b>

            <div style={styles.d_flex}>
              <div
                style={{
                  ...styles.d_flex,
                  lineHeight: "25px",
                  ...styles.w_100,
                }}
              >
                <div style={styles.w_75}>
                  - Người pha bệnh phẩm:&nbsp;
                  <span
                    style={{ ...styles.textDataUnderline, width: "70%" }}
                  ></span>
                </div>
                <div style={styles.w_25}>
                  Pha ngày ......./......./.......&nbsp;
                </div>
              </div>
            </div>

            <div style={styles.d_flex}>
              <div
                style={{
                  ...styles.d_flex,
                  lineHeight: "25px",
                  ...styles.w_100,
                }}
              >
                <div style={styles.w_20}>
                  - Số mảnh:&nbsp;
                  <span
                    style={{ ...styles.textDataUnderline, width: "40%" }}
                  ></span>
                </div>
                <div style={styles.w_80}>
                - Phương pháp nhuộm:&nbsp;
                <span
                    style={{ ...styles.textDataUnderline, width: "73%" }}
                  ></span>
                </div>
              </div>
            </div>

            <div style={styles.d_flex}>
              <div
                style={{
                  ...styles.d_flex,
                  lineHeight: "25px",
                  ...styles.w_100,
                }}
              >
                <div style={styles.w_50}>
                  - Tiêu bản làm xong ngày ......../......./............&nbsp;
                </div>
                <div style={styles.w_65}>
                - Người làm tiêu bản:&nbsp;
                <span
                    style={{ ...styles.textDataUnderline, width: "65%" }}
                  ></span>
                </div>
              </div>
            </div>


            <div style={{ ...styles.position.relative, lineHeight: "25px", marginTop:"20px"}}>
            <b>1. NHẬN XÉT ĐẠI THỂ:&nbsp;</b>
              {true ? (
                <>
                  <UnderLineDots lineNumber={6} />
                </>
              ) : (
                <RenderUnderLineDots>
                  <div>{/* nội dung */}</div>
                </RenderUnderLineDots>
              )}
            </div>

            <div style={{ ...styles.position.relative, lineHeight: "25px" }}>
            <b>2. NHẬN XÉT VI THỂ:&nbsp;</b>
              {true ? (
                <>
                  <UnderLineDots lineNumber={6} />
                </>
              ) : (
                <RenderUnderLineDots>
                  <div>{/* nội dung */}</div>
                </RenderUnderLineDots>
              )}
            </div>

            <div style={{ ...styles.position.relative, lineHeight: "25px" }}>
            <b>3. CHẨN ĐOÁN GIẢI PHẪU BỆNH&nbsp;</b>
              {true ? (
                <>
                  <UnderLineDots lineNumber={6} />
                </>
              ) : (
                <RenderUnderLineDots>
                  <div>{/* nội dung */}</div>
                </RenderUnderLineDots>
              )}
            </div>

            <div style={{ ...styles.position.relative, lineHeight: "25px" }}>
            <b>4. SỰ PHÙ HỢP VỚI CHẨN ĐOÁN LÂM SÀNG:&nbsp;</b>
              {true ? (
                <>
                  <UnderLineDots lineNumber={3} />
                </>
              ) : (
                <RenderUnderLineDots>
                  <div>{/* nội dung */}</div>
                </RenderUnderLineDots>
              )}
            </div>

            <div style={{...styles.d_flex_j_between,marginTop:"20px"}}>
                <div style={{ ...styles.w_40, ...styles.overflow.hidden }}>
                <div style={{marginTop:"16px"}}></div>
                    <div style={{ ...styles.textAlign.center, marginBottom: "50px" }}><strong>BÁC SĨ ĐỌC KẾT QUẢ</strong></div>
                    <div style={{ ...styles.position.relative, lineHeight: "25px" }}>Họ và tên:<span style={styles.hr}></span></div>
                </div>
                <div style={{ ...styles.w_20, ...styles.overflow.hidden }}>
                </div>
                <div style={{ ...styles.w_40, ...styles.overflow.hidden }}>
                    <div style={styles.textAlign.center}><i>Trả ngày ....... tháng ...... năm .......</i></div>
                    <div style={{ ...styles.textAlign.center, marginBottom: "50px" }}><strong>BÁC SĨ ĐIỀU TRỊ</strong></div>
                    <div style={{ ...styles.position.relative, lineHeight: "25px" }}>Họ và tên:<span style={styles.hr}></span></div>
                </div>
            </div>
            <div>
              <b>Hướng dẫn:</b> <i>In khổ A4 dọc, 2 mặt.</i>
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
    </>
  );
};

export default PhieuXetNghiemSinhGiaiPhauBenhSinhThiet;
