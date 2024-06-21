import { Button, Modal } from "react-bootstrap";
import { styles } from "../constant";
import { KyTenCuoiTrangPhieuXetNghiem } from "../components/KyTenCuoiTrangPhieuXetNghiem";
import { HeaderPhieuXetNghiem } from "../components/HeaderPhieuXetNghiem";
import { RenderUnderLineDots } from "../components/RenderUnderLineDots";

type Props = {
  handleClose: () => void;
};

const PhieuXetNghiemChung = (props: Props) => {
  let { handleClose } = props;

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
    <Modal show={true} centered size="lg" onHide={handleClose} scrollable>
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
          <div style={{ ...styles.w_30, ...styles.overflow.hidden }}>
            <div style={styles.titleFrom}>PHIẾU XÉT NGHIỆM</div>
            <div
              style={{
                ...styles.position.relative,
                fontWeight: "bold",
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
          <div>
            <table style={styles.table}>
              <tr>
                <th style={styles.border}>YÊU CẦU XÉT NGHIỆM</th>
                <th style={styles.border}>KẾT QUẢ XÉT NGHIỆM</th>
              </tr>
              <tbody>
                <tr style={{ height: "150px" }}>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                </tr>
              </tbody>
            </table>
          </div>
          <KyTenCuoiTrangPhieuXetNghiem />
          <div>
            <b>Hướng dẫn:</b> <i>2 mẫu này in khổ A5 ngang, 1 mặt</i>
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

export default PhieuXetNghiemChung;
