import { Button, Modal } from "react-bootstrap";
import { styles } from "../constant";
import { KyTenCuoiTrang, UnderLineDots } from "../components";
import { HeaderPhieuXetNghiem } from "../components/HeaderPhieuXetNghiem";
import { KyTenCuoiTrangPhieuXetNghiem } from "../components/KyTenCuoiTrangPhieuXetNghiem";
import { RenderUnderLineDots } from "../components/RenderUnderLineDots";

type Props = {
  show: boolean;
  handleClose: () => void;
};

const PhieuXetNghiemHuyetTuyDo = (props: Props) => {
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
            <div style={{...styles.titleFrom,fontWeight:"normal"}}>PHIẾU XÉT NGHIỆM</div>
            <div
              style={{
                ...styles.position.relative,
                ...styles.titleFrom,
              }}
            >
              HUYẾT - TỦY ĐỒ
            </div>
          </div>
        </HeaderPhieuXetNghiem>
        <div style={{ ...styles.w_100, ...styles.overflow.hidden }}>
          <div style={{ ...styles.position.relative, lineHeight: "25px" }}>
            - Tóm tắt quá trình bệnh lí, triệu chứng thực thể (gan, lách, hạch):
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
            - Chẩn đoán lâm sàng:
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
            - Yêu cầu xét nghiệm:
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
          <div style={{ ...styles.d_flex, justifyContent: "space-between" }}>
            <div>
              <div style={{ marginTop: "16px" }}>
                <i>
                  Làm xét nghiệm ...... giờ ...... ngày ...... tháng ....... năm
                  ........
                </i>
              </div>
              <div>
                <i>Kết quả test xylocain 2%</i>
              </div>
              <div>Bác sỹ đọc test xylocain 2%:</div>
            </div>
            <div style={{ ...styles.overflow.hidden }}>
              <div style={styles.textAlign.center}>
                <i>Ngày ....... tháng ...... năm .......</i>
              </div>
              <div style={{ ...styles.textAlign.center, marginBottom: "50px" }}>
                <strong>BÁC SĨ ĐIỀU TRỊ</strong>
              </div>
              <div style={{ ...styles.position.relative, lineHeight: "25px" }}>
                Họ và tên:<span style={styles.hr}></span>
              </div>
            </div>
          </div>
          <div style={{ ...styles.textAlign.center, margin: "10px 0 " }}>
            <b>KẾT QUẢ</b>
          </div>
          <div>
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
                  Huyết đồ
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
                  HOÁ HỌC TẾ BÀO
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
                    Số lượng hồng cầu (x 10<sup>12</sup>/l)
                  </td>
                  <td style={styles.border}></td>
                  <td style={styles.border}>Peroxydase (+/-)</td>
                  <td style={styles.border}></td>
                </tr>

                <tr>
                  <td style={styles.border}>Lượng huyết sắc tố (g/l)</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}>Sudan đen (+/-)</td>
                  <td style={styles.border}></td>
                </tr>

                <tr>
                  <td style={styles.border}>Hematocrit (l/l)</td>
                  <td style={styles.border}></td>
                  <th
                    style={{ ...styles.border, fontWeight: "normal" }}
                    rowSpan={3}
                  >
                    Esterase không đặc hiệu:
                    <br />
                    - Không ức chế (điểm)
                    <br />
                    - Có ức chế (điểm)
                  </th>
                  <th
                    style={{ ...styles.border, fontWeight: "normal" }}
                    rowSpan={2}
                  ></th>
                </tr>
                <tr>
                  <td style={styles.border}>MCV (fl)</td>
                  <td style={styles.border}></td>
                </tr>
                <tr>
                  <td style={styles.border}>MCH (pg)</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                </tr>
                <tr>
                  <td style={styles.border}>MCHC (g/l)</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}>Esterase đặc hiệu (điểm)</td>
                  <td style={styles.border}></td>
                </tr>
                <tr>
                  <td style={styles.border}>Hồng cầu có nhân (x 10<sup>9</sup>/l)</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}>P. A. S (+/-)</td>
                  <td style={styles.border}></td>
                </tr>
                <tr>
                  <td style={styles.border}>Hồng cầu lưới (%)</td>
                  <td style={styles.border}></td>
                  <th
                    style={{ ...styles.border, fontWeight: "normal" }}
                    rowSpan={2}
                  >
                    Phosphatase kiềm BC (điểm) (L.A.P)
                  </th>
                  <td style={styles.border}></td>
                </tr>
                <tr>
                  <td style={styles.border}>Số lượng bạch cầu (x 10<sup>9</sup>/l)</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                </tr>
                <tr>
                  <td style={styles.border}>Số lượng tiểu cầu (x 10<sup>9</sup>/l)</td>
                  <td style={styles.border}></td>
                  <td
                    style={{ ...styles.border, fontWeight: "normal" }}
                    rowSpan={2}
                  >
                    Hồng cầu nhiễm sắt: (%) (Sideroblast) (điểm)
                  </td>
                  <td style={styles.border}></td>
                </tr>
                <tr>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                  <td style={styles.border}>&nbsp;</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style={{ ...styles.position.relative, lineHeight: "25px" }}>
            <b>Nhận xét:</b>
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
            <b>Kết luận:</b>
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
            <b>Đề nghị:</b>
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

          <div style={{...styles.d_flex,justifyContent:"end"}}>
            <div
              style={{
                ...styles.overflow.hidden,
                ...styles.w_40,
              }}
            >
              <div style={styles.textAlign.center}>
                <i>Ngày ....... tháng ...... năm .......</i>
              </div>
              <div style={{ ...styles.textAlign.center, marginBottom: "50px" }}>
                <strong>TRƯỞNG KHOA XÉT NGHIỆM</strong>
              </div>
              <div style={{ ...styles.position.relative, lineHeight: "25px" }}>
                Họ và tên:<span style={styles.hr}></span>
              </div>
            </div>
          </div>

          <div style={{ ...styles.textAlign.center, margin: "10px 0 " }}>
            <b>TỦY ĐỒ</b>
          </div>
          <div>
            <table style={styles.table}>
              <tr>
                <th
                  style={{
                    ...styles.border,
                    ...styles.w_60,
                    ...styles.textAlign.center,
                    textTransform: "uppercase",
                  }}
                  rowSpan={2}
                  colSpan={2}
                >
                  TẾ BÀO
                </th>
                <th
                  style={{
                    ...styles.border,
                    ...styles.w_20,
                    ...styles.textAlign.center,
                    textTransform: "uppercase",
                  }}
                  rowSpan={2}
                >
                  TUỶ BÌNH THƯỜNG (%)
                </th>
                  <th
                    style={{
                      ...styles.border,
                      ...styles.w_20,
                      ...styles.textAlign.center,
                      textTransform: "uppercase",
                    }}
                    colSpan={2}
                  >
                    KẾT QUẢ
                  </th>
              </tr>
              <tr>
                <th style={{
                      ...styles.border,
                      ...styles.w_10,
                      ...styles.textAlign.center,
                    }}>Tủy</th>
                <th style={{
                      ...styles.border,
                      ...styles.w_10,
                      ...styles.textAlign.center,
                    }}>Máu</th>
              </tr>
              <tbody>
                <tr>
                  <td style={styles.border} colSpan={2}>
                  Số lượng tế bào tuỷ xương (25-85 x 10<sup>9</sup>/l)
                  Nguyên tuỷ bào (Myeloblast)
                  </td>
                  <td style={{...styles.border,textAlign:"center"}}>0 - 1</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                </tr>

                <tr>
                  <td style={styles.border} colSpan={2}>Tiền tuỷ bào (Promyelocyte)</td>
                  <td style={{...styles.border,textAlign:"center"}}>0 - 2</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                </tr>

                <tr>
                  <th
                    style={{ ...styles.border, fontWeight: "normal" }}
                    rowSpan={3}
                  >
                   Tuỷ bào (Myelocyte)
                  </th>
                  <td style={styles.border}>Trung tính (Neutrophil)</td>
                  <td style={{...styles.border,textAlign:"center"}}>3 - 8</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                </tr>
                <tr>
                  <td style={styles.border}>Ưa a xít (Eosinophil)</td>
                  <td style={{...styles.border,textAlign:"center"}}>0 - 1</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                </tr>
                <tr>
                  <td style={styles.border}>Ưa ba zơ (Basophil)</td>
                  <td style={{...styles.border,textAlign:"center"}}>0 - 1</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                </tr>

                <tr>
                  <th
                    style={{ ...styles.border, fontWeight: "normal" }}
                    rowSpan={3}
                  >
                   Hậu tủy bào (Metamyelocyte)
                  </th>
                  <td style={styles.border}>Trung tính (Neutrophil)</td>
                  <td style={{...styles.border,textAlign:"center"}}>5 - 12</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                </tr>
                <tr>
                  <td style={styles.border}>Ưa a xít (Eosinophil)</td>
                  <td style={{...styles.border,textAlign:"center"}}>0 - 1</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                </tr>
                <tr>
                  <td style={styles.border}>Ưa ba zơ (Basophil)</td>
                  <td style={{...styles.border,textAlign:"center"}}>0 - 1</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                </tr>
                
                <tr>
                  <th
                    style={{ ...styles.border, fontWeight: "normal" }}
                    rowSpan={3}
                  >
                   Bạch cầu đũa (Band)
                  </th>
                  <td style={styles.border}>Trung tính (Neutrophil)</td>
                  <td style={{...styles.border,textAlign:"center"}}>5 - 12</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                </tr>
                <tr>
                  <td style={styles.border}>Ưa a xít (Eosinophil)</td>
                  <td style={{...styles.border,textAlign:"center"}}>0 - 1</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                </tr>
                <tr>
                  <td style={styles.border}>Ưa ba zơ (Basophil)</td>
                  <td style={{...styles.border,textAlign:"center"}}>0 - 1</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                </tr>
                
                <tr>
                  <th
                    style={{ ...styles.border, fontWeight: "normal" }}
                    rowSpan={3}
                  >
                   BC đoạn (Segment)
                  </th>
                  <td style={styles.border}>Trung tính (Neutrophil)</td>
                  <td style={{...styles.border,textAlign:"center"}}>25 - 41</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                </tr>
                <tr>
                  <td style={styles.border}>Ưa a xít (Eosinophil)</td>
                  <td style={{...styles.border,textAlign:"center"}}>1 - 4</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                </tr>
                <tr>
                  <td style={styles.border}>Ưa ba zơ (Basophil)</td>
                  <td style={{...styles.border,textAlign:"center"}}>0 - 1</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                </tr>

                <tr>
                  <td style={styles.border} colSpan={2}>Nguyên lympho bào (Lymphoblast)</td>
                  <td style={{...styles.border,textAlign:"center"}}>0 - 1</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                </tr>

                <tr>
                  <td style={styles.border} colSpan={2}>Tiền lympho (Prolymphocyte)</td>
                  <td style={{...styles.border,textAlign:"center"}}>0 - 1</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                </tr>

                <tr>
                  <td style={styles.border} colSpan={2}>Lympho (Lymphocyte)</td>
                  <td style={{...styles.border,textAlign:"center"}}>11 - 26</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                </tr>  

                <tr>
                  <td style={styles.border} colSpan={2}>Nguyên tương bào (Plasmoblast)</td>
                  <td style={{...styles.border,textAlign:"center"}}>0 - 1</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                </tr>  
                  
                <tr>
                  <td style={styles.border} colSpan={2}>Tiền tương bào (Proplasmocyte)</td>
                  <td style={{...styles.border,textAlign:"center"}}>0 - 1</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                </tr>  

                <tr>
                  <td style={styles.border} colSpan={2}>Tương bào (Plasmocyte)</td>
                  <td style={{...styles.border,textAlign:"center"}}>0 - 1</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                </tr>  

                <tr>
                  <td style={styles.border} colSpan={2}>Nguyên mono bào (Monoblast)</td>
                  <td style={{...styles.border,textAlign:"center"}}>0 - 1</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                </tr> 

                <tr>
                  <td style={styles.border} colSpan={2}>Tiền mono (Promonocyte)</td>
                  <td style={{...styles.border,textAlign:"center"}}>0 - 1</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                </tr> 

                <tr>
                  <td style={styles.border} colSpan={2}>Mono (Monocyte)</td>
                  <td style={{...styles.border,textAlign:"center"}}>0 - 2</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                </tr> 

                <tr>
                  <td style={styles.border} colSpan={2}>Nguyên tiền hồng cầu (Proerythroblast)</td>
                  <td style={{...styles.border,textAlign:"center"}}>0 - 1</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                </tr> 

                <tr>
                  <td style={styles.border} colSpan={2}>Nguyên hồng cầu ưa ba zơ (Erythroblast basophil)</td>
                  <td style={{...styles.border,textAlign:"center"}}>0,1 - 4</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                </tr> 

                <tr>
                  <td style={styles.border} colSpan={2}>Nguyên hồng cầu đa sắc (Erythroblast polycromatophil)</td>
                  <td style={{...styles.border,textAlign:"center"}}>0,8 - 8</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                </tr> 

                <tr>
                  <td style={styles.border} colSpan={2}>Nguyên hồng cầu ưa a xít (Erythroblast acidophil)</td>
                  <td style={{...styles.border,textAlign:"center"}}>2,6 - 12</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                </tr> 

                <tr>
                  <td style={styles.border} colSpan={2}>Hồng cầu lưới</td>
                  <td style={{...styles.border,textAlign:"center"}}>0,5 - 1,2</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                </tr> 

                <tr>
                  <td style={styles.border}>Nguyên mẫu tiểu cầu (Megakaryoblast)</td>
                  <td style={{...styles.border,width:"10%"}} rowSpan={4}>% tế bào dòng MTC</td>
                  <td style={{...styles.border,textAlign:"center"}}>0 - 3</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                </tr> 

                <tr>
                  <td style={styles.border}>Mẫu tiểu cầu ưa ba zơ (Megakaryocyte basophil)</td>
                  <td style={{...styles.border,textAlign:"center"}}>5 - 18</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                </tr> 

                <tr>
                  <td style={styles.border}>MTC hạt chưa sinh tiểu cầu (Megakariocyte granular)</td>
                  <td style={{...styles.border,textAlign:"center"}}>38 - 54</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                </tr> 

                <tr>
                  <td style={styles.border}>MTC hạt đang sinh tiểu cầu (Megakariocyte mature)</td>
                  <td style={{...styles.border,textAlign:"center"}}>21 - 41</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                </tr> 

                <tr>
                  <td style={styles.border} colSpan={2}>MTC nhân tự do (nhân trơ)</td>
                  <td style={{...styles.border,textAlign:"center"}}>{`< 5`}</td>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                </tr> 

                <tr>
                  <td style={styles.border} colSpan={2}>Tế bào khác</td>
                  <td style={{...styles.border,textAlign:"center"}}></td>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                </tr> 

                <tr>
                  <td style={styles.border} colSpan={2}>&nbsp;</td>
                  <td style={{...styles.border,textAlign:"center"}}></td>
                  <td style={styles.border}></td>
                  <td style={styles.border}></td>
                </tr> 
              </tbody>
            </table>
          </div>
          <div>
            <b>Hướng dẫn:</b> <i>In khổ A4 dọc, 2 mặt.</i> <br />
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

export default PhieuXetNghiemHuyetTuyDo;
