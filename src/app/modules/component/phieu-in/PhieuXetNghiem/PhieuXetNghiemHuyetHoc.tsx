import { Button, Modal } from "react-bootstrap";
import { styles } from "../constant";
import { HeaderPhieuXetNghiem } from "../components/HeaderPhieuXetNghiem";
import { KyTenCuoiTrangPhieuXetNghiem } from "../components/KyTenCuoiTrangPhieuXetNghiem";

type Props = {
  show: boolean;
  handleClose: () => void;
};

const PhieuXetNghiemHuyetHoc = (props: Props) => {
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
          <div style={{ ...styles.w_30, ...styles.overflow.hidden }}>
            <div style={styles.titleFrom}>PHIẾU XÉT NGHIỆM</div>
            <div
              style={{
                ...styles.position.relative,
                ...styles.titleFrom,
              }}
            >
              HUYẾT HỌC
            </div>
            <div
              style={{
                ...styles.d_flex,
                justifyContent: "space-around",
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
              <span>
                Cấp cứu:&nbsp;
                <input type="checkbox" style={styles.checkbox}></input>
              </span>
            </div>
          </div>
        </HeaderPhieuXetNghiem>
        <div style={{ ...styles.w_100, ...styles.overflow.hidden }}>
          <div style={{ ...styles.position.relative, lineHeight: "25px" }}>
            - Chẩn đoán:&nbsp;<span style={styles.hr}></span>
          </div>
          <div style={{ margin: "0 30px" }}>
            <b>1. Tế bào máu ngoại vi:</b>
          </div>
          <div style={{ marginTop: "15px" }}>
            <table style={styles.table}>
              <tr>
                <th
                  style={{
                    ...styles.border,
                    ...styles.w_30,
                    ...styles.textAlign.center,
                    textTransform: "uppercase",
                  }}
                >
                  Chỉ số
                </th>
                <th
                  style={{
                    ...styles.border,
                    ...styles.w_20,
                    ...styles.textAlign.center,
                    textTransform: "uppercase",
                  }}
                >
                  Kết quả
                </th>
                <th
                  style={{
                    ...styles.border,
                    ...styles.w_30,
                    ...styles.textAlign.center,
                    textTransform: "uppercase",
                  }}
                >
                  Chỉ số
                </th>
                <th
                  style={{
                    ...styles.border,
                    ...styles.w_20,
                    ...styles.textAlign.center,
                    textTransform: "uppercase",
                  }}
                >
                  Kết quả
                </th>
              </tr>
              <tbody>
                <tr>
                  <td style={styles.border}>
                    Số lượng HC: nam (4,0-5,8 x10<sup>12</sup>/l) nữ (3,9-5,4
                    x10<sup>12</sup>/l)
                  </td>
                  <td style={styles.border}></td>
                  <td style={styles.border}>
                    Số lượng BC (4-10 x 10<sup>9</sup>/l)
                  </td>
                  <td style={styles.border}></td>
                </tr>

                <tr>
                  <td style={styles.border}>
                    Huyết sắc tố: nam (140-160 g/l) nữ (125-145 g/l)
                  </td>
                  <td style={styles.border}></td>
                  <td style={styles.border}>Thành phần bạch cầu (%):</td>
                  <td style={styles.border}></td>
                </tr>

                <tr>
                  <th
                    style={{ ...styles.border, fontWeight: "normal" }}
                    rowSpan={2}
                  >
                    Hematocrit nam (0,38-0,50 l/l) nữ (0,35-0,47 l/l)
                  </th>
                  <th
                    style={{ ...styles.border, fontWeight: "normal" }}
                    rowSpan={2}
                  ></th>
                  <td style={styles.border}>- Đoạn trung tính:</td>
                  <td style={styles.border}></td>
                </tr>
                <tr>
                  <td style={styles.border}>- Đoạn ưa a xít:</td>
                </tr>
                <tr>
                  <td style={styles.border}>MCV (83-92 fl)</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}>- Đoạn ưa ba zơ</td>
                  <td style={styles.border}></td>
                </tr>
                <tr>
                  <td style={styles.border}>MCH (27-32 pg)</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}>- Mono</td>
                  <td style={styles.border}></td>
                </tr>
                <tr>
                  <td style={styles.border}>MCHC (320-356 g/l)</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}>- Lympho</td>
                  <td style={styles.border}></td>
                </tr>
                <tr>
                  <td style={styles.border}>
                    Hồng cầu có nhân (0 x 10<sup>9</sup>/l)
                  </td>
                  <td style={styles.border}></td>
                  <td style={styles.border}>- Tế bào bất thường</td>
                  <td style={styles.border}></td>
                </tr>
                <tr>
                  <td style={styles.border}>Hồng cầu lưới (0,1-0,5 %)</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                </tr>
                <tr>
                  <td style={styles.border}>
                    Số lượng tiểu cầu (150-400 x10<sup>9</sup>/l)
                  </td>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                </tr>
                <tr>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                  <td style={styles.border}>{"Máu lắng: giờ 1 (< 15 mm)"}</td>
                  <td style={styles.border}></td>
                </tr>
                <tr>
                  <td style={styles.border}>KSV sốt rét:</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}>{"giờ 2 (< 20 mm)"}</td>
                  <td style={styles.border}></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <b style={{ margin: "0 30px" }}>2. Đông máu:</b>
            <div style={{ ...styles.d_flex, flexDirection: "column" }}>
              <div
                style={{
                  ...styles.d_flex,
                  lineHeight: "25px",
                  ...styles.w_100,
                  justifyContent: "flex-end",
                }}
              >
                <div style={styles.w_30}>
                  Thời gian máu chảy:&nbsp;
                  <span
                    style={{ ...styles.textDataUnderline, width: "35%" }}
                  ></span>
                </div>
                <div style={styles.w_20}>
                  phút:&nbsp;
                  <span
                    style={{ ...styles.textDataUnderline, width: "20%" }}
                  ></span>
                </div>
              </div>
              <div
                style={{
                  ...styles.d_flex,
                  lineHeight: "25px",
                  ...styles.w_100,
                  justifyContent: "flex-end",
                }}
              >
                <div style={styles.w_30}>
                  Thời gian máu đông:&nbsp;
                  <span
                    style={{ ...styles.textDataUnderline, width: "35%" }}
                  ></span>
                </div>
                <div style={styles.w_20}>
                  phút:&nbsp;
                  <span
                    style={{ ...styles.textDataUnderline, width: "20%" }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <b style={{ margin: "0 30px" }}>3. Nhóm máu:</b>
            <div
              style={{
                ...styles.d_flex,
                lineHeight: "25px",
                ...styles.w_100,
                flexDirection: "column",
                alignItems: "center",
                marginLeft: "4%",
              }}
            >
              <div>
                <div>Hệ ABO:</div>
                <div>Hệ Rh:</div>
              </div>
            </div>
          </div>

          <KyTenCuoiTrangPhieuXetNghiem />
          <div>
            <b>Hướng dẫn:</b> <i>In khổ A4 dọc, 1 mặt.</i> <br />
            - Quy ước quốc tế: số lượng hồng cầu, bạch cầu... tính trong đơn vị
            lít (l). <br />- Vì: 1.000.000.000 = 10<sup>9</sup> = G (Giga);
            1.000.000.000.000 = 10<sup>12</sup> = T (Tera).
            <br />- Số lượng hồng cầu trước đây tính trong 1ml, ví dụ là 4
            triệu; nay quy ra trong 1 lít là 4 triệu triệu/ l hay 4 x 10
            <sup>12</sup>/ l hay 4T/l
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

export default PhieuXetNghiemHuyetHoc;
