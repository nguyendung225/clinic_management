import { Button, Modal } from "react-bootstrap";
import { UnderLineDots } from "./components";
import { RenderUnderLineDots } from "./components/RenderUnderLineDots";
import { styles } from "./constant";

type Props = {
  show: boolean;
  handleClose: () => void;
  setXuTri: any;
};

const PhieuChuyenTuyen = (props: Props) => {
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
            Phiếu in chuyển tuyến
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
              <div
                style={{
                  ...styles.position.relative,
                  lineHeight: "15px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                CƠ QUAN CHỦ QUẢN (BYT/SYT..)
              </div>
              <div
                style={{
                  ...styles.position.relative,
                  lineHeight: "15px",
                  textAlign: "center",
                  fontWeight: "bold",
                  marginTop: "15px",
                }}
              >
                TÊN CƠ SỞ KHÁM BỆNH, CHỮA BỆNH
              </div>
              <div style={{ ...styles.position.relative, lineHeight: "25px" }}>
                Số: ...../20.../GCT:&nbsp;<span style={styles.hr}></span>
              </div>
            </div>
            <div style={{ ...styles.w_40, ...styles.overflow.hidden }}>
              <div style={{ ...styles.textAlign.center, fontWeight: "bold" }}>
                CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
              </div>
              <div
                style={{
                  ...styles.textAlign.center,
                  fontWeight: "bold",
                }}
              >
                Độc lập - Tự do - Hạnh phúc
              </div>
              <div style={styles.textAlign.center}>---------------</div>
            </div>
            <div style={{ ...styles.w_25, ...styles.overflow.hidden }}>
              <div style={{ ...styles.position.relative, lineHeight: "25px" }}>
                Số Hồ sơ:&nbsp;<span style={styles.hr}></span>
              </div>
              <div style={{ ...styles.position.relative, lineHeight: "25px" }}>
                Vào sổ chuyển tuyến số:&nbsp;<span style={styles.hr}></span>
              </div>
            </div>
          </div>

          <div style={styles.titleFrom}>
            GIẤY CHUYỂN TUYẾN KHÁM BỆNH, CHỮA BỆNH BẢO HIỂM Y TẾ
          </div>
          <div
            style={{
              ...styles.position.relative,
              ...styles.w_100,
              lineHeight: "25px",
              ...styles.overflow.hidden,
            }}
          >
            <div
              style={{
                ...styles.position.relative,
                lineHeight: "25px",
              }}
            >
              Kính gửi:&nbsp;<span style={styles.hr}></span>
            </div>
            <div style={styles.d_flex}>
              <div
                style={{
                  ...styles.d_flex,
                  lineHeight: "25px",
                  ...styles.w_100,
                }}
              >
                <div style={styles.w_75}>
                  Cơ sở khám bệnh, chữa bệnh:&nbsp;
                  <span
                    style={{ ...styles.textDataUnderline, width: "64%" }}
                  ></span>
                </div>
                <div style={styles.w_25}>trân trọng giới thiệu:&nbsp;</div>
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
                <div style={styles.w_70}>
                  - Họ và tên người bệnh:&nbsp;
                  <span
                    style={{ ...styles.textDataUnderline, width: "68%" }}
                  ></span>
                </div>
                <div style={styles.w_20}>
                  Nam/Nữ:&nbsp;
                  <span
                    style={{ ...styles.textDataUnderline, width: "55%" }}
                  ></span>
                </div>
                <div style={styles.w_10}>
                  Tuổi:&nbsp;
                  <span
                    style={{ ...styles.textDataUnderline, width: "47%" }}
                  ></span>
                </div>
              </div>
            </div>
            <div
              style={{
                ...styles.position.relative,
                ...styles.w_100,
                lineHeight: "25px",
              }}
            >
              - Địa chỉ:&nbsp;<span style={styles.hr}></span>
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
                  - Dân tộc:&nbsp;
                  <span
                    style={{ ...styles.textDataUnderline, width: "80%" }}
                  ></span>
                </div>
                <div style={styles.w_50}>
                  Quốc tịch:&nbsp;
                  <span
                    style={{ ...styles.textDataUnderline, width: "80%" }}
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
                  - Nghề nghiệp:&nbsp;
                  <span
                    style={{ ...styles.textDataUnderline, width: "70%" }}
                  ></span>
                </div>
                <div style={styles.w_50}>
                  Nơi làm việc:&nbsp;
                  <span
                    style={{ ...styles.textDataUnderline, width: "74%" }}
                  ></span>
                </div>
              </div>
            </div>

            <div style={{ ...styles.position.relative, ...styles.w_100 }}>
              Số thẻ:&nbsp;
              <span style={styles.hr}></span>
            </div>
            <div style={{ ...styles.position.relative, ...styles.w_100 }}>
              Hạn sử dụng:&nbsp;
              <span style={styles.hr}></span>
            </div>
            <div style={{ ...styles.position.relative, ...styles.w_100 }}>
              Đã được khám bệnh/điều trị:&nbsp;
              <span style={styles.hr}></span>
            </div>
            <div style={styles.d_flex}>
              <div
                style={{
                  ...styles.d_flex,
                  lineHeight: "25px",
                  ...styles.w_100,
                }}
              >
                <div style={styles.w_30}>
                  - Tại:&nbsp;
                  <span
                    style={{ ...styles.textDataUnderline, width: "80%" }}
                  ></span>
                </div>
                <div style={styles.w_20}>
                  (Tuyến:&nbsp;
                  <span
                    style={{ ...styles.textDataUnderline, width: "58%" }}
                  ></span>
                  )
                </div>
                <div style={styles.w_50}>
                  Từ ngày ......./ ........./ ....... đến ngày ....../ ....../
                  ....... &nbsp;
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
                <div style={styles.w_30}>
                  - Tại:&nbsp;
                  <span
                    style={{ ...styles.textDataUnderline, width: "80%" }}
                  ></span>
                </div>
                <div style={styles.w_20}>
                  (Tuyến:&nbsp;
                  <span
                    style={{ ...styles.textDataUnderline, width: "58%" }}
                  ></span>
                  )
                </div>
                <div style={styles.w_50}>
                  Từ ngày ......./ ........./ ....... đến ngày ....../ ....../
                  ....... &nbsp;
                </div>
              </div>
            </div>

            <div style={{ ...styles.titleFrom, margin: "15px" }}>
              TÓM TẮT BỆNH ÁN
            </div>

            <div style={{ ...styles.position.relative, lineHeight: "25px" }}>
              - Dấu hiệu lâm sàng:&nbsp;<span style={styles.hr}></span>
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
              - Kết quả xét nghiệm, cận lâm sàng:&nbsp;
              <span style={styles.hr}></span>
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
              - Chẩn đoán:&nbsp;<span style={styles.hr}></span>
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
              - Phương pháp, thủ thuật, kỹ thuật, thuốc đã sử dụng trong điều
              trị:&nbsp;<span style={styles.hr}></span>
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
              - Tình trạng người bệnh lúc chuyển tuyến:&nbsp;
              <span style={styles.hr}></span>
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

            <div>
              - Lí do chuyển tuyến: Khoanh tròn vào lý do chuyển tuyến phù hợp
              sau đây:
            </div>
            <div>1. Đủ điều kiện chuyển tuyến.</div>

            <div>
              2. Theo yêu cầu của người bệnh hoặc người đại diện hợp pháp của
              người bệnh.
            </div>

            <div style={{ ...styles.position.relative, lineHeight: "25px" }}>
              - Hướng điều trị:&nbsp;
              <span style={styles.hr}></span>
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

            <div>
              - Chuyển tuyến hồi: ..... giờ ....... phút, ngày ..... tháng
              ...... năm 20.........
            </div>

            <div style={{ ...styles.position.relative, lineHeight: "25px" }}>
              - Phương tiện vận chuyển::&nbsp;<span style={styles.hr}></span>
            </div>
            <div style={{ ...styles.position.relative, lineHeight: "25px" }}>
              - Họ tên, chức danh, trình độ chuyên môn của người hộ tống:&nbsp;
              <span style={styles.hr}></span>
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
          </div>

          <div style={{...styles.d_flex_j_between,marginTop:"15px"}}>
                <div style={{ ...styles.w_40, ...styles.overflow.hidden }}>
                <div style={styles.textAlign.center}>&nbsp;</div>
                    <div style={styles.textAlign.center}><strong>Y, BÁC SĨ KHÁM, ĐIỀU TRỊ</strong></div>
                    <div style={{ ...styles.position.relative,...styles.textAlign.center,  lineHeight: "25px" }}>(Ký và ghi rõ họ tên)</div>
                </div>
                <div style={{ ...styles.w_15, ...styles.overflow.hidden }}>
                </div>
                <div style={{ ...styles.w_45, ...styles.overflow.hidden }}>
                    <div style={styles.textAlign.center}><i>Ngày ....... tháng ...... năm .......</i></div>
                    <div style={styles.textAlign.center}><strong>NGƯỜI CÓ THẨM QUYỀN CHUYỂN TUYẾN</strong></div>
                    <div style={{ ...styles.position.relative,...styles.textAlign.center,marginBottom: "50px" , lineHeight: "25px" }}>(Ký và ghi rõ họ tên)</div>
                </div>
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
              setXuTri({ ["chuyenVien"]: true });
            }}
          >
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PhieuChuyenTuyen;
