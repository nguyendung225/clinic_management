import { TextAlign } from "chart.js";
import moment from "moment";
import { FC, useContext, useEffect, useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import { AppContext } from "../../appContext/AppContext";
import { PhieuThanhToanModel } from "../../phan-he-tiep-nhan-thanh-toan/models/DanhSachPhieuModel";
import { getDataPhieu } from "../../phan-he-tiep-nhan-thanh-toan/services/ThanhToanServices";
import { CODE, ERROR_MESSAGE } from "../../utils/Constant";
import { convertNumberPrice } from "../../utils/FormatUtils";
import { localStorageItem } from "../../utils/LocalStorage";
import NumberToText from "../NumberToText";
import "./PhieuIn.scss";
import { PropsHoaDon } from "./constant";

const st = {
  text_center: {
    textAlign: "center" as TextAlign,
  },
  text_uppercase: {
    textTransform: "uppercase" as any,
  },
  text_underline: {
    textDecorationLine: "underline" as any,
  },
  text_capitalize: {
    textTransform: "capitalize" as any,
  },
  fw_bold: {
    fontWeight: "bold" as any,
  },
  position_relative: {
    position: "relative" as any,
  },
  fs_3: {
    fontSize: "1.2em",
  },
  fs_2: {
    fontSize: "1.5em",
  },
  ls_3: {
    letterSpacing: "3px",
  },
  fst_italic: {
    fontStyle: "italic",
  },
  mt_130: {
    marginTop: "130px",
  },
  mt_5: {
    marginTop: "5px",
  },
  mt_20: {
    margin: "20px 0 5px 0",
  },
  mt_25: {
    marginTop: "25px",
  },
  pt_20: {
    paddingTop: "20px",
  },
  d_flex: {
    display: "flex",
  },
  align_items_end: {
    alignItems: "end",
  },
  dotted: {
    borderBottom: "1px dotted black" as any,
    position: "absolute" as any,
    top: "16px",
    width: "100%",
  },
  w: {
    10: {
      width: "10%",
      display: "inline-block",
    },
    90: {
      width: "90%",
      display: "inline-block",
    },
    20: {
      width: "20%",
      display: "inline-block",
    },
    80: {
      width: "80%",
      display: "inline-block",
    },
    55: {
      width: "55%",
      display: "inline-block",
    },
    69: {
      width: "69%",
      display: "inline-block",
    },
    81: {
      width: "81%",
      display: "inline-block",
    },
    79: {
      width: "79%",
      display: "inline-block",
    },
    91: {
      width: "91%",
      display: "inline-block",
    },
  },
  row: {
    bsGutterX: "1.5rem",
    bsGutterY: "0",
    display: "flex",
    flexWrap: "wrap",
    marginTop: "calc(-1 * var(--bs-gutter-y))",
    marginRight: "calc(-0.5 * var(--bs-gutter-x))",
    marginLeft: "calc(-0.5 * var(--bs-gutter-x))",
  } as any,
  col_3: {
    flex: "0 0 auto",
    width: "25%",
  },
  col_6: {
    flex: "0 0 auto",
    width: "50%",
  },
  col_4: {
    flex: "0 0 auto",
    width: "33.33333333%",
  },
  col_5: {
    flex: "0 0 auto",
    width: "41.66666667%",
  },
  col_7: {
    flex: "0 0 auto",
    width: "58.33333333%",
  },
  col_12: {
    flex: "0 0 auto",
    width: "100%",
  },
  font_family: {
    fontFamily: "Times New Roman, Times, serif",
  } as any,
};

const TamUng: FC<PropsHoaDon> = (props) => {
  let { objectId, show, handleClose } = props;
  let { setIsLoading } = useContext(AppContext);
  const [dataPhieu, setDataPhieu] = useState<PhieuThanhToanModel>();
  const dataUser = localStorageItem.get("access-token-decode-patient");

  useEffect(() => {
    objectId && getThongTinPhieu();
  }, [objectId]);

  const getThongTinPhieu = async () => {
    try {
      const res = await getDataPhieu(objectId);
      if (res?.data?.code === CODE.SUCCESS) {
        setDataPhieu(res?.data?.data);
        console.log("tamung");

      }
    } catch (error) {
      toast.error(ERROR_MESSAGE);
    }
  };

  const handlePrint = () => {
    let content = document.getElementById("print_contents");
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
      <Modal
        size="lg"
        animation
        centered
        id="kt_header_search_modal"
        aria_hidden="true"
        dialogClassName="modal_dialog modal_dialog_centered min_w_690px"
        onHide={handleClose}
        show={show}
      >
        <Modal.Header closeButton className="header-modal">
          <Modal.Title>Biên lai thu tiền tạm ứng</Modal.Title>
        </Modal.Header>
        <iframe
          id="ifmcontentstoprint"
          style={{
            height: "0px",
            width: "0px",
            position: "absolute",
          }}
        ></iframe>
        <Modal.Body
          id="print_contents"
          className="dialog_body_scroll phieu_in"
          style={st.font_family}
        >
          <div>
            <Container fluid>
              <Row style={st.row}>
                <Col style={st.col_3} lg={3}>
                  <div style={st.text_center}>
                    <div style={{ ...st.fw_bold, ...st.text_uppercase }}>
                      Bộ y tế
                    </div>
                    <div style={{ ...st.fw_bold, ...st.text_uppercase }}>
                      {dataUser?.location_name}
                    </div>
                    <div>201B Nguyễn Chí Thanh, Phường 12, Quận 5, TPHCM</div>
                    <div>Điện thoại: 0987654321</div>
                    <div>
                      <span>Mã số thuế:</span>
                      <span style={{ ...st.ls_3, ...st.fw_bold }}>
                        &nbsp;00000001
                      </span>
                    </div>
                  </div>
                </Col>
                <Col
                  lg={6}
                  style={{ ...st.col_6, ...st.text_center, ...st.fw_bold }}
                >
                  <div style={st.text_uppercase}>
                    Cộng hòa xã hội Chủ nghĩa Việt Nam
                  </div>
                  <div style={st.text_underline}>
                    Độc lập _ Tự do _ Hạnh phúc
                  </div>
                </Col>
                <Col lg={3}>
                  <div>
                    <span>Số:</span>
                    <span style={st.fs_3}> {dataPhieu?.code}</span>
                  </div>
                </Col>
              </Row>
              <Row style={st.row}>
                <Col
                  style={{
                    ...st.col_12,
                    ...st.fw_bold,
                    ...st.text_uppercase,
                    ...st.fs_2,
                    ...st.text_center,
                    ...st.mt_20,
                  }}
                >
                  Biên lai thu tiền tạm ứng
                </Col>
              </Row>
              <Row style={st.row}>
                <Col style={{ ...st.col_12, ...st.text_center }}>
                  Liên 2: Giao
                </Col>
              </Row>
              <Row style={{ ...st.row, ...st.mt_25 }}>
                <Col style={st.col_5} lg={5}>
                  <span>Họ tên bệnh nhân:</span>
                  <div style={{ ...st.position_relative, ...st.w[55] }}>
                    <div style={st.text_capitalize}>
                      &nbsp;{dataPhieu?.benhNhan?.hoTen}
                    </div>
                    <div style={st.dotted}></div>
                  </div>
                </Col>
                <Col style={st.col_4} lg={4}>
                  <span>Khoa:&nbsp;</span>
                  <div style={{ ...st.position_relative, ...st.w[81] }}>
                    <div style={st.text_capitalize}>Khoa khám bệnh</div>
                    <div style={st.dotted}></div>
                  </div>
                </Col>
                <Col style={st.col_3} lg={3}>
                  <span>Mã BN:</span>
                  <div style={{ ...st.position_relative, ...st.w[69] }}>
                    <div style={st.text_capitalize}>
                      &nbsp;{dataPhieu?.benhNhan?.mpi}
                    </div>
                    <div style={st.dotted}></div>
                  </div>
                </Col>
              </Row>
              <Row style={{ ...st.row, ...st.mt_5 }}>
                <Col style={st.col_5} lg={5}>
                  <span>Số tiền:</span>
                  <div style={{ ...st.position_relative, ...st.w[79] }}>
                    <div>&nbsp;{convertNumberPrice(dataPhieu?.paidMoney)}</div>
                    <div style={st.dotted}></div>
                  </div>
                </Col>
                <Col style={st.col_7} lg={7}>
                  <span
                    style={{ ...st.text_capitalize, ...st.position_relative }}
                  >
                    (Bằng chữ):
                  </span>
                  <div
                    className="w-83"
                    style={{ ...st.position_relative, ...st.w[81] }}
                  >
                    <div style={st.text_capitalize}>
                      &nbsp;{NumberToText(dataPhieu?.paidMoney)}&nbsp;đồng
                    </div>
                    <div style={st.dotted}></div>
                  </div>
                </Col>
              </Row>
              <Row style={{ ...st.row, ...st.mt_5 }}>
                <Col style={st.col_12} lg={12}>
                  <div style={st.position_relative}>
                    <div style={st.text_capitalize}>&nbsp;</div>
                    <div style={st.dotted}></div>
                  </div>
                </Col>
              </Row>
              <Row style={{ ...st.row, ...st.mt_5 }}>
                <Col style={st.col_12} lg="12">
                  <span>Nội dung:</span>
                  <div style={{ ...st.position_relative, ...st.w[91] }}>
                    <div>&nbsp;{dataPhieu?.description} </div>
                    <div style={st.dotted}></div>
                  </div>
                </Col>
              </Row>
              <Row
                style={{
                  ...st.row,
                  ...st.mt_25,
                }}
              >
                <Col
                  lg="6"
                  style={{
                    ...st.col_6,
                    ...st.fw_bold,
                    ...st.text_center,
                    ...st.pt_20,
                  }}
                >
                  Người nộp tiền
                </Col>
                <Col lg="6" style={{ ...st.col_6, ...st.text_center }}>
                  <div style={st.fst_italic}>
                    Ngày {moment(dataPhieu?.createDate).format("DD")}, tháng{" "}
                    {moment(dataPhieu?.createDate).format("MM")}, năm{" "}
                    {moment(dataPhieu?.createDate).format("YYYY")}
                  </div>
                  <div style={st.fw_bold}>Người thu tiền</div>
                  <div style={{ ...st.fw_bold, ...st.mt_130 }}>
                    {dataUser?.username}
                  </div>
                </Col>
              </Row>
              <Row style={{ ...st.row, ...st.mt_25 }}>
                <Col
                  lg="12"
                  style={{
                    ...st.col_12,
                    ...st.fw_bold,
                    ...st.text_center,
                    ...st.fst_italic,
                  }}
                >
                  Lưu ý: Bệnh nhân giữ biên lai đến khi thanh toán ra viện
                </Col>
              </Row>
            </Container>
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

export { TamUng };
