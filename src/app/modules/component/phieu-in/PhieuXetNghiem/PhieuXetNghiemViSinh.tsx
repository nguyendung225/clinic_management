import { Button, Modal } from "react-bootstrap";
import { styles } from "../constant";
import { HeaderPhieuXetNghiem } from "../components/HeaderPhieuXetNghiem";
import { KyTenCuoiTrangPhieuXetNghiem } from "../components/KyTenCuoiTrangPhieuXetNghiem";

type Props = {
  handleClose: () => void;
};

const PhieuXetNghiemViSinh = (props: Props) => {
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
            <div style={styles.titleFrom}>PHIẾU XÉT NGHIỆM VI SINH</div>
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
                  colSpan={2}
                >
                  YÊU CẦU XÉT NGHIỆM
                </th>
                <th
                  style={{
                    ...styles.border,
                    ...styles.w_20,
                    ...styles.textAlign.center,
                    textTransform: "uppercase",
                  }}
                >
                  KẾT QUẢ
                </th>
              </tr>
              <tbody>
                <tr>
                  <td style={{...styles.border,width:"7%"}} rowSpan={3}>
                    Trực tiếp
                  </td>
                  <td style={styles.border}>&nbsp;</td>
                  <td style={styles.border}></td>
                </tr>
                <tr>
                  <td style={styles.border}>&nbsp;</td>
                  <td style={styles.border}></td>
                </tr>
                <tr>
                  <td style={styles.border}>&nbsp;</td>
                  <td style={styles.border}></td>
                </tr>

                <tr>
                  <td style={styles.border} rowSpan={3}>
                    Nuôi cấy
                  </td>
                  <td style={styles.border}>Vi khuẩn ái khí:</td>
                  <td style={styles.border}>&nbsp;</td>
                </tr>
                <tr>
                  <td style={styles.border}>Vi khuẩn ái khí:</td>
                  <td style={styles.border}>&nbsp;</td>
                </tr>
                <tr>
                  <td style={styles.border}>&nbsp;</td>
                  <td style={styles.border}>&nbsp;</td>
                </tr>

                <tr>
                  <td style={styles.border} rowSpan={3}>
                    Phản ứng HT
                  </td>
                  <td style={styles.border}>&nbsp;</td>
                  <td style={styles.border}>&nbsp;</td>
                </tr>
                <tr>
                  <td style={styles.border}>&nbsp;</td>
                  <td style={styles.border}>&nbsp;</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{...styles.d_flex,justifyContent:"end"}}>
            <div
              style={{
                ...styles.overflow.hidden,
                ...styles.w_40,
              }}
            >
              <div style={styles.textAlign.center}>
                <i> ..... Giờ ..... ngày .... tháng .... năm .......</i>
              </div>
              <div style={{ ...styles.textAlign.center, marginBottom: "50px" }}>
                <strong>BÁC SĨ ĐIỀU TRỊ</strong>
              </div>
              <div style={{ ...styles.position.relative, lineHeight: "25px" }}>
                Họ và tên:<span style={styles.hr}></span>
              </div>
            </div>
          </div>

          <div style={{ ...styles.position.relative, lineHeight: "25px" }}>
               <b>Chủng vi khuẩn làm kháng sinh đồ:</b><span style={styles.hr}></span>
              </div>
          <div style={{...styles.d_flex,justifyContent:"end",marginRight:"20px", marginTop: "15px"}}>S: nhậy cảm; I: trung gian; R: kháng</div>
          
          <div>
            <table style={styles.table}>
              <tr>
                <th
                  style={{
                    ...styles.border,
                    ...styles.w_20,
                    ...styles.textAlign.center,
                  }}
                >
                  Kháng sinh
                </th>
                <th
                  style={{
                    ...styles.border,
                    ...styles.w_10,
                    ...styles.textAlign.center,
                    textTransform: "uppercase",
                  }}
                >
                  S
                </th>
                <th
                  style={{
                    ...styles.border,
                    ...styles.w_10,
                    ...styles.textAlign.center,
                    textTransform: "uppercase",
                  }}
                >
                  I
                </th>
                <th
                  style={{
                    ...styles.border,
                    ...styles.w_10,
                    ...styles.textAlign.center,
                    textTransform: "uppercase",
                  }}
                >
                  R
                </th>
                <th
                  style={{
                    ...styles.border,
                    ...styles.w_20,
                    ...styles.textAlign.center,
                  }}
                >
                  Kháng sinh
                </th>
                <th
                  style={{
                    ...styles.border,
                    ...styles.w_10,
                    ...styles.textAlign.center,
                    textTransform: "uppercase",
                  }}
                >
                  S
                </th>
                <th
                  style={{
                    ...styles.border,
                    ...styles.w_10,
                    ...styles.textAlign.center,
                    textTransform: "uppercase",
                  }}
                >
                  I
                </th>
                <th
                  style={{
                    ...styles.border,
                    ...styles.w_10,
                    ...styles.textAlign.center,
                    textTransform: "uppercase",
                  }}
                >
                  R
                </th>
              </tr>
              <tbody>
                <tr>
                  <td style={styles.border}>
                  Penicilline
                  </td>
                  <td style={styles.border}>&nbsp;</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}>&nbsp;</td>
                  <td style={styles.border}>Erythromycine</td>
                  <td style={styles.border}>&nbsp;</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                </tr>
                <tr>
                  <td style={styles.border}>
                  Ampicilline
                  </td>
                  <td style={styles.border}>&nbsp;</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}>&nbsp;</td>
                  <td style={styles.border}>Tetracycline</td>
                  <td style={styles.border}>&nbsp;</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                </tr>
                <tr>
                  <td style={styles.border}>
                  Amo+A.clavulanic
                  </td>
                  <td style={styles.border}>&nbsp;</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}>&nbsp;</td>
                  <td style={styles.border}>Doxycycline</td>
                  <td style={styles.border}>&nbsp;</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                </tr>
                <tr>
                  <td style={styles.border}>
                  Aztreonam
                  </td>
                  <td style={styles.border}>&nbsp;</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}>&nbsp;</td>
                  <td style={styles.border}>Nalidixic acid</td>
                  <td style={styles.border}>&nbsp;</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                </tr>
                <tr>
                  <td style={styles.border}>
                  Mezlocilline
                  </td>
                  <td style={styles.border}>&nbsp;</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}>&nbsp;</td>
                  <td style={styles.border}>Nofloxacine</td>
                  <td style={styles.border}>&nbsp;</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                </tr>
                <tr>
                  <td style={styles.border}>
                  Oxacilline/ phế
                  </td>
                  <td style={styles.border}>&nbsp;</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}>&nbsp;</td>
                  <td style={styles.border}>Ciprofloxacine</td>
                  <td style={styles.border}>&nbsp;</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                </tr>
                <tr>
                  <td style={styles.border}>
                  Oxacilline/ tụ
                  </td>
                  <td style={styles.border}>&nbsp;</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}>&nbsp;</td>
                  <td style={styles.border}>Ofloxacine</td>
                  <td style={styles.border}>&nbsp;</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                </tr>
                <tr>
                  <td style={styles.border}>
                  Cephalotine
                  </td>
                  <td style={styles.border}>&nbsp;</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}>&nbsp;</td>
                  <td style={styles.border}>Gentamycine</td>
                  <td style={styles.border}>&nbsp;</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                </tr>
                <tr>
                  <td style={styles.border}>
                  Cefuroxime
                  </td>
                  <td style={styles.border}>&nbsp;</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}>&nbsp;</td>
                  <td style={styles.border}>Tobramycine</td>
                  <td style={styles.border}>&nbsp;</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                </tr>
                <tr>
                  <td style={styles.border}>
                  Ceftazidime
                  </td>
                  <td style={styles.border}>&nbsp;</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}>&nbsp;</td>
                  <td style={styles.border}>Amikacine</td>
                  <td style={styles.border}>&nbsp;</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                </tr>
                <tr>
                  <td style={styles.border}>
                  Cefotaxime
                  </td>
                  <td style={styles.border}>&nbsp;</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}>&nbsp;</td>
                  <td style={styles.border}>Netromycine</td>
                  <td style={styles.border}>&nbsp;</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                </tr>
                <tr>
                  <td style={styles.border}>
                  Ceftriaxone
                  </td>
                  <td style={styles.border}>&nbsp;</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}>&nbsp;</td>
                  <td style={styles.border}>Co-trimoxazol</td>
                  <td style={styles.border}>&nbsp;</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                </tr>
                <tr>
                  <td style={styles.border}>
                  Cefoperazone
                  </td>
                  <td style={styles.border}>&nbsp;</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}>&nbsp;</td>
                  <td style={styles.border}>Nitroxoline</td>
                  <td style={styles.border}>&nbsp;</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                </tr>
                <tr>
                  <td style={styles.border}>
                  Cefepime
                  </td>
                  <td style={styles.border}>&nbsp;</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}>&nbsp;</td>
                  <td style={{...styles.border,fontWeight:"bold"}}>Kháng sinh khác:</td>
                  <td style={styles.border}>&nbsp;</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                </tr>
                <tr>
                  <td style={styles.border}>
                  Vancomycin
                  </td>
                  <td style={styles.border}>&nbsp;</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}>&nbsp;</td>
                  <td style={styles.border}>-</td>
                  <td style={styles.border}>&nbsp;</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                </tr>
                <tr>
                  <td style={styles.border}>
                  Clindamycin
                  </td>
                  <td style={styles.border}>&nbsp;</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}>&nbsp;</td>
                  <td style={styles.border}>-</td>
                  <td style={styles.border}>&nbsp;</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                </tr>
                <tr>
                  <td style={styles.border}>
                  Chloramphenicol
                  </td>
                  <td style={styles.border}>&nbsp;</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}>&nbsp;</td>
                  <td style={styles.border}>-</td>
                  <td style={styles.border}>&nbsp;</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{...styles.d_flex,justifyContent:"end"}}>
            <div
              style={{
                ...styles.overflow.hidden,
                ...styles.w_40,
              }}
            >
              <div style={styles.textAlign.center}>
                <i> ..... Giờ ..... ngày .... tháng .... năm .......</i>
              </div>
              <div style={{ ...styles.textAlign.center, marginBottom: "50px" }}>
                <b style={{textTransform:"uppercase"}}>Bác sĩ trưởng khoa xét nghiệm</b>
              </div>
              <div style={{ ...styles.position.relative, lineHeight: "25px" }}>
                Họ và tên:<span style={styles.hr}></span>
              </div>
            </div>
          </div>

          <div>
            <b>Hướng dẫn:</b> <i>In khổ A5 ngang, 2 mặt.</i> <br />
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

export default PhieuXetNghiemViSinh;
