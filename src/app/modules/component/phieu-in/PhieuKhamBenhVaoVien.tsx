import React from "react";
import { Button, Modal } from "react-bootstrap";
import { styles } from "./constant";
import { ThongTinHanhChinh, UnderLineDots } from "./components";
import { RenderUnderLineDots } from "./components/RenderUnderLineDots";

type Props = {
  show: boolean;
  handleClose: () => void;
  setXuTri: any;
};

const PhieuKhamBenhVaoVien = (props: Props) => {
  let { show, handleClose, setXuTri } = props;

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
            Phiếu in khám bệnh vào viện
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
          <div
            style={{
              ...styles.d_flex_j_between,
              alignItems: "flex-start",
              marginBottom: "20px",
            }}
          >
            <div style={{ ...styles.w_25, ...styles.overflow.hidden }}>
              <div style={{ ...styles.position.relative, lineHeight: "25px" }}>
                Sở y tế:&nbsp;<span style={styles.hr}></span>
              </div>
              <div style={{ ...styles.position.relative, lineHeight: "25px" }}>
                Bệnh viện:&nbsp;<span style={styles.hr}></span>
              </div>
            </div>
            <div style={{ ...styles.w_40, ...styles.overflow.hidden }}>
              <div style={{ ...styles.titleFrom }}>
                PHIẾU KHÁM BỆNH VÀO VIỆN
              </div>
              <div
                style={{
                  ...styles.position.relative,
                  ...styles.titleFrom,
                  fontWeight: "normal",
                }}
              >
                BUỒNG KHÁM
              </div>
              <div
                style={{
                  ...styles.position.relative,
                  ...styles.titleFrom,
                  fontWeight: "normal",
                  textAlign: "left",
                }}
              >
                BỆNH:<span style={styles.hr}></span>
              </div>
            </div>
            <div style={{ ...styles.w_25, ...styles.overflow.hidden }}>
              <div style={{ ...styles.position.relative, lineHeight: "25px" }}>
                MS:&nbsp;<span style={styles.hr}></span>
              </div>
              <div style={{ ...styles.position.relative, lineHeight: "25px" }}>
                Số:&nbsp;<span style={styles.hr}></span>
              </div>
            </div>
          </div>
          <ThongTinHanhChinh />
          <div
            style={{
              ...styles.position.relative,
              lineHeight: "25px",
              fontWeight: "bold",
            }}
          >
            II. LÝ DO VÀO VIỆN:&nbsp;<span style={styles.hr}></span>
          </div>
          <div style={{ fontWeight: "bold" }}>III.HỎI BỆNH:</div>
          <div style={{ ...styles.position.relative, lineHeight: "25px" }}>
            1. Quá trình bệnh lí:&nbsp;<span style={styles.hr}></span>
          </div>
          <div>2. Tiền sử bệnh:</div>
          <div style={{ ...styles.position.relative, lineHeight: "25px" }}>
            - Bản thân:&nbsp;<span style={styles.hr}></span>
          </div>
          <div style={{ ...styles.position.relative, lineHeight: "25px" }}>
            - Gia đình:&nbsp;<span style={styles.hr}></span>
          </div>
          <div style={{ fontWeight: "bold" }}>IV.KHÁM XÉT:</div>
          <div style={{ ...styles.position.relative, lineHeight: "25px" }}>
            1. Toàn thân:&nbsp;<span style={styles.hr}></span>
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
          <div style={{ ...styles.position.relative, lineHeight: "25px" }}>
            2. Các bộ phận:&nbsp;<span style={styles.hr}></span>
          </div>
          <div style={{ ...styles.position.relative, lineHeight: "25px" }}>
            3. Tóm tắt kết quả lâm sàng:&nbsp;<span style={styles.hr}></span>
          </div>
          <div style={{ ...styles.position.relative, lineHeight: "25px" }}>
            4. Chẩn đoán vào viện:&nbsp;<span style={styles.hr}></span>
          </div>
          <div style={{ ...styles.position.relative, lineHeight: "25px" }}>
            5. Đã xử lí (thuốc, chăm sóc...):&nbsp;
            <span style={styles.hr}></span>
          </div>
          <div style={{ ...styles.position.relative, lineHeight: "25px" }}>
            6. Cho vào điều trị tại khoa:&nbsp;<span style={styles.hr}></span>
          </div>
          <div style={{ ...styles.position.relative, lineHeight: "25px" }}>
            7. Chú ý:&nbsp;<span style={styles.hr}></span>
          </div>

          <div style={{ ...styles.d_flex, justifyContent: "end" }}>
            <div style={{ ...styles.w_40, ...styles.overflow.hidden }}>
              <div style={styles.textAlign.center}>
                <i>Ngày ....... tháng ...... năm .......</i>
              </div>
              <div style={{ ...styles.textAlign.center, marginBottom: "50px" }}>
                <strong>BÁC SĨ KHÁM BỆNH</strong>
              </div>
              <div style={{ ...styles.position.relative, lineHeight: "25px" }}>
                Họ và tên:<span style={styles.hr}></span>
              </div>
            </div>
          </div>
          <div>
            <b>Hướng dẫn:</b> <i>In khổ A4 dọc, 2 mặt.</i>
          </div>
        </Modal.Body>
        <Modal.Footer className="flex flex-middle flex-center py-1">
          <Button
            className="btn-navy min-w-50px"
            onClick={() => {
              handlePrint();
            }}
          >
            In phiếu
          </Button>
          <Button
            className="btn-navy-outlined"
            onClick={() => {
              handleClose();
              setXuTri({ ["nhapVien"]: true });
            }}
          >
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PhieuKhamBenhVaoVien;
