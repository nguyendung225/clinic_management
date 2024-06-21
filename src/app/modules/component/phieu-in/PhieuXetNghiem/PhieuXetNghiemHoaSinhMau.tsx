import { Button, Modal } from "react-bootstrap";
import { styles } from "../constant";
import { HeaderPhieuXetNghiem } from "../components/HeaderPhieuXetNghiem";
import { KyTenCuoiTrangPhieuXetNghiem } from "../components/KyTenCuoiTrangPhieuXetNghiem";

type Props = {
  show: boolean;
  handleClose: () => void;
};

const PhieuXetNghiemHoaSinhMau = (props: Props) => {
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
          fontSize:"12px"
        }}
      ></iframe>
      <Modal.Body id="print-contents1" className="dialog-body-scroll">
        <HeaderPhieuXetNghiem>
          <div style={{ ...styles.w_50, ...styles.overflow.hidden }}>
            <div style={styles.titleFrom}>PHIẾU XÉT NGHIỆM HOÁ SINH MÁU</div>
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
              <span style={{marginLeft:"20px"}}>
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

          <div style={{ margin: "15px 0" }}>
            <table style={styles.table}>
              <tr>
                <th
                  style={{
                    ...styles.border,
                    ...styles.w_15,
                    ...styles.textAlign.center,
                  }}
                >
                  Tên xét nghiệm
                </th>
                <th
                  style={{
                    ...styles.border,
                    ...styles.w_25,
                    ...styles.textAlign.center,
                  }}
                >
                  Trị số bình thường
                </th>
                <th
                  style={{
                    ...styles.border,
                    ...styles.w_10,
                    ...styles.textAlign.center,
                  }}
                >
                  Kết quả
                </th>
                <th
                  style={{
                    ...styles.border,
                    ...styles.w_15,
                    ...styles.textAlign.center,
                  }}
                >
                  Tên xét nghiệm
                </th>
                <th
                  style={{
                    ...styles.border,
                    ...styles.w_25,
                    ...styles.textAlign.center,
                  }}
                >
                  Trị số bình thường
                </th>
                <th
                  style={{
                    ...styles.border,
                    ...styles.w_10,
                    ...styles.textAlign.center,
                  }}
                >
                  Kết quả
                </th>
              </tr>
              <tbody>
                <tr>
                  <td style={styles.border}>
                    Urê
                  </td>
                  <td style={{...styles.border,textAlign:'right'}}>2,5-7,5 &micro;mol/L</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}>
                  Sắt
                  </td>
                  <td style={{...styles.border,textAlign:'right'}}>Nam: 11-27 &micro;mol/L<br/>Nữ : 7-26 &micro;mol/L</td>
                  <td style={styles.border}></td>
                </tr>

                <tr>
                  <td style={styles.border}>
                  Glucose
                  </td>
                  <td style={{...styles.border,textAlign:'right'}}>3,9-6,4 mmol/L</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}>
                  Magiê
                  </td>
                  <td style={{...styles.border,textAlign:'right'}}>0,8- 1,00 mmol/L</td>
                  <td style={styles.border}></td>
                </tr>

                <tr>
                  <td style={styles.border}>
                  Creatinin
                  </td>
                  <td style={{...styles.border,textAlign:'right'}}>Nam: 62- 120 &micro;mol/L<br/>Nữ : 53- 100 &micro;mol/L</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}>
                  AST (GOT)
                  </td>
                  <td style={{...styles.border,textAlign:'right'}}>&le;37 U/L- 37<sup>0</sup> C</td>
                  <td style={styles.border}></td>
                </tr>

                <tr>
                  <td style={styles.border}>
                  Acid Uric
                  </td>
                  <td style={{...styles.border,textAlign:'right'}}>Nam:180- 420 &micro;mol/L<br/>Nữ : 150- 360 &micro;mol/L</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}>
                  ALT (GPT)
                  </td>
                  <td style={{...styles.border,textAlign:'right'}}>&le;40 U/L- 37<sup>0</sup> C</td>
                  <td style={styles.border}></td>
                </tr>

                <tr>
                  <td style={styles.border}>
                  BilirubinT.P
                  </td>
                  <td style={{...styles.border,textAlign:'right'}}>&le;17 &micro;mol/L</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}>
                  Amylase
                  </td>
                  <td style={{...styles.border,textAlign:'right'}}></td>
                  <td style={styles.border}></td>
                </tr>

                <tr>
                  <td style={styles.border}>
                  BilirubinT.T
                  </td>
                  <td style={{...styles.border,textAlign:'right'}}>&le;4,3 &micro;mol/L</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}>
                  CK
                  </td>
                  <td style={{...styles.border,textAlign:'right'}}>Nam: 24-190U/L- 37<sup>0</sup><br/>Nữ: 24- 167 U/L- 37<sup>0</sup></td>
                  <td style={styles.border}></td>
                </tr>

                <tr>
                  <td style={styles.border}>
                  BilirubinG.T
                  </td>
                  <td style={{...styles.border,textAlign:'right'}}>&le;12,7 &micro;mol/L</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}>
                  CK-MB
                  </td>
                  <td style={{...styles.border,textAlign:'right'}}>&le;24 U/L- 37<sup>0</sup></td>
                  <td style={styles.border}></td>
                </tr>

                <tr>
                  <td style={styles.border}>
                  ProteinT.P
                  </td>
                  <td style={{...styles.border,textAlign:'right'}}>65- 82 g/L</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}>
                  LDH
                  </td>
                  <td style={{...styles.border,textAlign:'right'}}>230- 460 U/L- 37<sup>0</sup></td>
                  <td style={styles.border}></td>
                </tr>

                <tr>
                  <td style={styles.border}>
                  Albumin
                  </td>
                  <td style={{...styles.border,textAlign:'right'}}>35- 50 g/L</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}>
                  GGT
                  </td>
                  <td style={{...styles.border,textAlign:'right'}}>Nam: 11- 50 U/L- 37<sup>0</sup><br/>Nữ : 7- 32 U/L- 37<sup>0</sup></td>
                  <td style={styles.border}></td>
                </tr>

                <tr>
                  <td style={styles.border}>
                  Globulin
                  </td>
                  <td style={{...styles.border,textAlign:'right'}}>24- 38 g/L</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}>
                  Cholinesterase
                  </td>
                  <td style={{...styles.border,textAlign:'right'}}>5300- 12900 U/L- 37<sup>0</sup></td>
                  <td style={styles.border}></td>
                </tr>

                <tr>
                  <td style={styles.border}>
                  Tỷ lệ A/G
                  </td>
                  <td style={{...styles.border,textAlign:'right'}}>1,3-1,8</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}>
                  Phosphatase kiềm
                  </td>
                  <td style={{...styles.border,textAlign:'right'}}></td>
                  <td style={styles.border}></td>
                </tr>

                <tr>
                  <td style={styles.border}>
                  Fibrinogen
                  </td>
                  <td style={{...styles.border,textAlign:'right'}}>2- 4 g/L</td>
                  <td style={styles.border}></td>
                  <td style={{...styles.border,fontWeight:"bold",textAlign:"center"}} colSpan={2}>
                    Các xét nghiệm khí máu
                  </td>
                  <td style={styles.border}></td>
                </tr>

                <tr>
                  <td style={styles.border}>
                  Cholesterol
                  </td>
                  <td style={{...styles.border,textAlign:'right'}}>3,9- 5,2 mmol/L</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}>
                  pH động mạch
                  </td>
                  <td style={{...styles.border,textAlign:'right'}}>7,37- 7,45</td>
                  <td style={styles.border}></td>
                </tr>

                <tr>
                  <td style={styles.border}>
                  Triglycerid
                  </td>
                  <td style={{...styles.border,textAlign:'right'}}>0,46- 1,88 mmol/L</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}>
                  pCO<sub>2</sub>
                  </td>
                  <td style={{...styles.border,textAlign:'right'}}>Nam: 35- 46 mmHg<br/>Nữ : 32- 43 mmHg</td>
                  <td style={styles.border}></td>
                </tr>

                <tr>
                  <td style={styles.border}>
                  HDL- cho.
                  </td>
                  <td style={{...styles.border,textAlign:'right'}}>&ge;0,9 mmol/L</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}>
                  pCO<sub>2</sub> động mạch
                  </td>
                  <td style={{...styles.border,textAlign:'right'}}>71- 104 mmHg</td>
                  <td style={styles.border}></td>
                </tr>

                <tr>
                  <td style={styles.border}>
                  LDL- cho.
                  </td>
                  <td style={{...styles.border,textAlign:'right'}}>&le;3,4 mmol/L</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}>
                  HCO<sub>3</sub> chẩn
                  </td>
                  <td style={{...styles.border,textAlign:'right'}}>21- 26 mmol/L</td>
                  <td style={styles.border}></td>
                </tr>

                <tr>
                  <td style={styles.border}>
                  K<sup>+</sup>
                  </td>
                  <td style={{...styles.border,textAlign:'right'}}>3,5- 5 mmol/L</td>
                  <td style={styles.border}></td>
                  <td style={{...styles.border,fontWeight:"bold",textAlign:"center"}} colSpan={2}>
                  Các xét nghiệm khác
                  </td>
                  <td style={styles.border}></td>
                </tr>

                <tr>
                  <td style={styles.border}>
                  Cl-<sup>-</sup>
                  </td>
                  <td style={{...styles.border,textAlign:'right'}}>98- 106 mmol/L</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}>
                  -
                  </td>
                  <td style={{...styles.border,textAlign:'right'}}></td>
                  <td style={styles.border}></td>
                </tr>

                <tr>
                  <td style={styles.border}>
                  Calci
                  </td>
                  <td style={{...styles.border,textAlign:'right'}}>2,15- 2,6 mmol/L</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}>
                  -
                  </td>
                  <td style={{...styles.border,textAlign:'right'}}></td>
                  <td style={styles.border}></td>
                </tr>

                <tr>
                  <td style={styles.border}>
                  Calci ion hoá
                  </td>
                  <td style={{...styles.border,textAlign:'right'}}>1,17- 1,29 mmol/L</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}>
                  -
                  </td>
                  <td style={{...styles.border,textAlign:'right'}}></td>
                  <td style={styles.border}></td>
                </tr>

                <tr>
                  <td style={styles.border}>
                  Phospho
                  </td>
                  <td style={{...styles.border,textAlign:'right'}}>TE: 1,3- 2,2 mmol/L<br/>NL: 0,9- 1,5 mmol/L</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}>
                  -
                  </td>
                  <td style={{...styles.border,textAlign:'right'}}></td>
                  <td style={styles.border}></td>
                </tr>

              </tbody>
            </table>
          </div>
        
          <KyTenCuoiTrangPhieuXetNghiem />
          <div>
            <b>Hướng dẫn:</b><i> - In khổ A4 dọc, 1 mặt.</i><br />
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

export default PhieuXetNghiemHoaSinhMau;
