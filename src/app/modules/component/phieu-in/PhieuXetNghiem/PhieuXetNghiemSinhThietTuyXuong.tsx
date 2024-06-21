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

const PhieuXetNghiemSinhThietTuyXuong = (props: Props) => {
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
                SINH THIẾT TUỶ XƯƠNG
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

            <div style={styles.d_flex}>
              <i>
                Sinh thiết: ........ giờ ....... .ngày ....... tháng ........
                năm ..........
              </i>
              <i style={{ marginLeft: "15%" }}>
                Số:....................................
              </i>
            </div>

            <h2 style={{ ...styles.textAlign.center, margin: "30px 0 0px" }}>
              KẾT QUẢ
            </h2>
            {true ? (
              <>
                <UnderLineDots lineNumber={7} />
              </>
            ) : (
              <RenderUnderLineDots>
                <div>{/* nội dung */}</div>
              </RenderUnderLineDots>
            )}

            <div style={{ ...styles.position.relative, lineHeight: "25px" }}>
              <b>KẾT LUẬN:</b>
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
              <div style={{ ...styles.position.relative, lineHeight: "25px" }}>
                <b>ĐỀ NGHỊ:</b>
                {true ? (
                  <>
                    <span style={styles.hr}></span>
                    <UnderLineDots lineNumber={3} />
                  </>
                ) : (
                  <RenderUnderLineDots>
                    <div>{/* nội dung */}</div>
                  </RenderUnderLineDots>
                )}
              </div>
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
                  <strong>TRƯỞNG KHOA XÉT NGHIỆM</strong>
                </div>
                <div
                  style={{ ...styles.position.relative, lineHeight: "25px" }}
                >
                  Họ và tên:<span style={styles.hr}></span>
                </div>
              </div>
            </div>
            <div>
              <b>Hướng dẫn:</b> <i>In khổ A4, dọc.</i>
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

export default PhieuXetNghiemSinhThietTuyXuong;
