import { TextAlign } from "chart.js";
import moment from "moment";
import { useContext, useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import { getDataPhieu } from "../../phan-he-tiep-nhan-thanh-toan/services/ThanhToanServices";
import { CODE, ERROR_MESSAGE } from "../../utils/Constant";
import { convertNumberPrice } from "../../utils/FormatUtils";
import { localStorageItem } from "../../utils/LocalStorage";
import NumberToText from "../NumberToText";
import { GIOI_TINH } from "./constant";
import { ThanhToanContext } from "../../phan-he-tiep-nhan-thanh-toan/components/tab-thanh-toan/ContextThanhToan";

const st = {
  w_90: {
    width: "90%",
  },
  min_w: {
    100: {
      minWidth: "100px",
    },
    200: {
      minWidth: "200px",
    },
  },
  margin: {
    top: {
      10: {
        marginTop: "10px",
      },
      18: {
        marginTop: "18px",
      },
      50: {
        marginTop: "50px",
      },
      100: {
        marginTop: "100px",
      },
    },
    y: {
      10: {
        margin: "10px 0",
      },
    },
    title: {
      margin: "35px 0",
    },
  },
  d_flex: {
    display: "flex",
  },
  d_flex_j_between: {
    display: "flex",
    justifyContent: "space-between",
  },
  textDataUnderline: {
    display: "inline-block",
    height: "16px",
    borderBottom: "1px dotted",
  },
  border: {
    borderTop: "1px solid",
    borderLeft: "1px solid",
    borderBottom: "1px solid",
    borderRight: "1px solid",
  },
  border_right: {
    width: "85px",
    borderTop: "1px solid",
    borderLeft: "1px solid",
    borderBottom: "1px solid",
    borderRight: "1px solid",
  },
  box: {
    display: "inline-block",
    width: "25px",
    height: "25px",
    padding: "2px",
    borderRight: "none",
    marginTop: "8px",
  },
  list_box: {
    display: "inline-block",
    height: "22px",
    margin: "-17px 12px",
    textAlign: "center" as TextAlign,
  },
  long_box: {
    display: "inline-block",
    textAlign: "center" as TextAlign,
    width: "100px",
    height: "25px",
    padding: "2px",
    marginTop: "8px",
  },
  header_content: {
    marginBottom: "6px",
  },
  checkbox: {
    display: "inline-block",
    padding: "6px",
    marginRight: "10px",
  },
  text_center: {
    textAlign: "center" as TextAlign,
  },
  text_end: {
    textAlign: "right" as TextAlign,
  },
  table_cell: {
    padding: "2px 4px",
  },
  text_capitalize: {
    textTransform: "capitalize" as any,
  },
  signature: {
    container: {
      display: "flex",
      flexDirection: "row" as any,
      flexWrap: "wrap" as any,
      justifyContent: "space-around",
      // width: '100%'
    },
    content: {
      display: "flex",
      flexDirection: "column" as any,
      alignItems: "center",
      width: "200px",
      minHeight: "200px",
      margin: "0 10px",
    },
    title: {
      textTransform: "uppercase" as any,
      fontSize: "15px",
      textAlign: "center" as TextAlign,
    },
  },
};

const BangKeChiPhiNgoaiTru = (props: any) => {
  let { show, handleClose, objectId, phieuTong } = props;
  const [dataPhieu, setDataPhieu] = useState<any>();
  const dataUser = localStorageItem.get("access-token-decode-patient");
  const department = localStorageItem.get("department");
  let { dataBN } = useContext(ThanhToanContext);

  useEffect(() => {
    if (phieuTong) {
      setDataPhieu({
        ...dataBN,
        danhSachDichVus: dataBN.danhSachDichVuThanhToan,
      });
    } else {
      objectId && getThongTinPhieu();
    }
  }, [phieuTong, objectId]);

  const handlePrint = () => {
    let content = document.getElementById("print-contents");
    let pri = (document.getElementById("ifmcontentstoprint") as any)
      .contentWindow;
    pri.document.open();

    pri.document.write((content as HTMLElement).innerHTML);

    pri.document.close();
    pri.focus();
    pri.print();
  };

  const getThongTinPhieu = async () => {
    try {
      const res = await getDataPhieu(objectId);
      if (res?.data?.code === CODE.SUCCESS) {
        setDataPhieu(res?.data?.data);
        console.log("bienlai");
      }
    } catch (error) {
      toast.error(ERROR_MESSAGE);
    }
  };

  return (
    <Modal show={show} centered size="lg" onHide={handleClose} scrollable>
      <Modal.Header closeButton className="header-modal">
        <Modal.Title id="example-custom-modal-styling-title">
          Biên lai
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
      <Modal.Body id="print-contents" className="dialog-body-scroll">
        <div style={st.d_flex_j_between}>
          <div>
            <div style={st.header_content}>
              Bộ Y tế/ Sở Y tế/ Y tế ngành:
              <span style={{ ...st.textDataUnderline, ...st.min_w[100] }}>
                &nbsp;{dataUser?.location_name}
              </span>
            </div>
            <div style={st.header_content}>
              Cơ sở khám, chữa bệnh:
              <span style={{ ...st.textDataUnderline, ...st.min_w[100] }}>
                &nbsp;{department?.place}
              </span>
            </div>
            <div style={st.header_content}>
              Khoa:
              <span style={{ ...st.textDataUnderline, ...st.min_w[200] }}>
                &nbsp;{department?.name}
              </span>
            </div>
          </div>
          <div>
            <div style={st.header_content}>Mẫu số: 01/BV</div>
            <div style={st.header_content}>
              Số khám bệnh:
              <span style={{ ...st.textDataUnderline, ...st.min_w[100] }}>
                &nbsp;{dataPhieu?.code}
              </span>
            </div>
            <div style={st.header_content}>
              Mã số người bệnh:
              <span style={{ ...st.textDataUnderline, ...st.min_w[100] }}>
                &nbsp;{dataPhieu?.benhNhan?.mpi}
              </span>
            </div>
          </div>
        </div>
        <h3 style={{ ...st.text_center, ...st.margin.title }}>
          BẢNG KÊ CHI PHÍ KHÁM BỆNH, CHỮA BỆNH NGOẠI TRÚ
        </h3>
        <div>
          <div>
            <h4>I. Hành chính:</h4>
            <div>
              (1) Họ tên người bệnh:
              <span
                style={{
                  ...st.textDataUnderline,
                  ...st.min_w[200],
                  ...st.text_capitalize,
                }}
              >
                &nbsp;{dataPhieu?.benhNhan?.hoTen}
              </span>
              &nbsp; Ngày sinh:
              <span>
                &nbsp;
                {dataPhieu?.benhNhan?.ngaySinh
                  ? dataPhieu?.benhNhan?.ngaySinh + "/"
                  : "...../"}
                {dataPhieu?.benhNhan?.thangSinh
                  ? dataPhieu?.benhNhan?.thangSinh + "/"
                  : "...../"}
                {dataPhieu?.benhNhan?.namSinh}
              </span>
              &nbsp; Giới tính:
              <span>
                &nbsp;
                {dataPhieu?.benhNhan?.gioiTinh === GIOI_TINH.MALE
                  ? "Nam"
                  : "Nữ"}
              </span>
            </div>
            <div style={st.d_flex}>
              (2) Địa chỉ:
              <span style={{ ...st.textDataUnderline, ...st.min_w[200] }}>
                &nbsp;{dataPhieu?.benhNhan?.diaChi}
              </span>
            </div>
            <div
              className="d-flex"
              style={{ ...st.margin.top[18], display: "flex" }}
            >
              (3) Có BHYT&nbsp;
              <span>
                <input
                  type={"checkbox"}
                  checked={dataPhieu?.benhNhan?.benhNhanBhyt?.id}
                />
              </span>
              &nbsp;Mã&nbsp;
              <span style={{ ...st.list_box, display: "flex" }}>
                <div style={{ ...st.border, ...st.box }}>
                  {dataPhieu?.benhNhan?.benhNhanBhyt?.soBhyt?.substring(0, 2)}
                </div>
                <div style={{ ...st.border, ...st.box }}>
                  {dataPhieu?.benhNhan?.benhNhanBhyt?.soBhyt?.substring(2, 3)}
                </div>
                <div style={{ ...st.border, ...st.box }}>
                  {dataPhieu?.benhNhan?.benhNhanBhyt?.soBhyt?.substring(3, 5)}
                </div>
                <div style={{ ...st.border, ...st.box, ...st.border_right }}>
                  {dataPhieu?.benhNhan?.benhNhanBhyt?.soBhyt?.substring(5, 8)}
                  &nbsp;
                  {dataPhieu?.benhNhan?.benhNhanBhyt?.soBhyt?.substring(8, 11)}
                  &nbsp;
                  {dataPhieu?.benhNhan?.benhNhanBhyt?.soBhyt?.substring(11, 14)}
                </div>
                &nbsp;
              </span>
              Giá trị từ &nbsp;
              <span>
                {dataPhieu?.benhNhan?.benhNhanBhyt?.tuNgay?moment(dataPhieu?.benhNhan?.benhNhanBhyt?.tuNgay).format(
                  "DD/MM/YYYY"
                ) : "..../..../...."}
              </span>{" "}
              &nbsp;đến&nbsp;
              <span>
                {dataPhieu?.benhNhan?.benhNhanBhyt?.denNgay?moment(dataPhieu?.benhNhan?.benhNhanBhyt?.denNgay).format(
                  "DD/MM/YYYY"
                ) : "..../..../...."}
              </span>
            </div>
            <div className="d-flex">
              Không có BHYT&nbsp;
              <span>
                {/* <div style={{ ...st.checkbox, ...st.border }}></div> */}
                <input
                  type={"checkbox"}
                  checked={!dataPhieu?.benhNhan?.benhNhanBhyt?.id}
                />
              </span>
            </div>
            <div>
              (4) Cơ sở đăng ký KCB BHYT ban đầu:
              <span style={{ ...st.textDataUnderline, ...st.min_w[200] }}>
                {dataPhieu?.benhNhan?.benhNhanBhyt?.noiDangKy}
              </span>
            </div>
            <div>
              (5) Mã số của cơ sở đăng ký KCB BHYT ban đầu:&nbsp;
              <span>
                <div style={{ ...st.long_box, ...st.border }}>
                  {dataPhieu?.benhNhan?.benhNhanBhyt?.maKv}
                </div>
              </span>
            </div>
            <div>
              (6) Đến khám:
              <span>
                {moment(dataPhieu?.benhNhan?.createDate).format(`HH giờ mm,`)}
                &nbsp;ngày&nbsp;
                {moment(dataPhieu?.benhNhan?.createDate).format(`DD/MM/YYYY`)}
              </span>
            </div>
            <div>
              (8) Kết thúc đợt điều trị ngoại trú
              <span>.....giờ..... ngày..../..../....</span> Tổng số ngày điều
              trị:
              <span
                style={{ ...st.textDataUnderline, ...st.min_w[100] }}
              ></span>
            </div>
            <div className="d-flex">
              (9) Cấp cứu&nbsp;
              <span>
                <input type={"checkbox"} />
              </span>
              &nbsp;
              {/* <input type='checkbox' /> */}
              Đúng tuyến&nbsp;
              <span>
                <input type={"checkbox"} />
              </span>
              &nbsp; Nơi chuyển đến
              <span
                style={{ ...st.textDataUnderline, ...st.min_w[200] }}
              ></span>
              (10) Trái tuyến&nbsp;
              <span>
                <input type={"checkbox"} />
              </span>
            </div>
            <div>
              (11) Chẩn đoán
              <span
                style={{ ...st.textDataUnderline, ...st.min_w[200] }}
              ></span>
              (12) Mã bệnh (ICD-10):&nbsp;
              <span>
                <div style={{ ...st.long_box, ...st.border }}></div>
              </span>
            </div>
          </div>

          <div>
            <h4>II. Chi phí khám, chữa bệnh</h4>
            <table style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={{ ...st.border, ...st.text_center }} rowSpan={2}>
                    Nội dung
                  </th>
                  <th style={{ ...st.border, ...st.text_center }} rowSpan={2}>
                    Đơn vị tính
                  </th>
                  <th style={{ ...st.border, ...st.text_center }} rowSpan={2}>
                    Số lượng
                  </th>
                  <th style={{ ...st.border, ...st.text_center }} rowSpan={2}>
                    Đơn giá (đồng)
                  </th>
                  <th style={{ ...st.border, ...st.text_center }} rowSpan={2}>
                    Thành tiền (đồng)
                  </th>
                  <th style={{ ...st.border, ...st.text_center }} colSpan={3}>
                    Nguồn thanh toán
                  </th>
                </tr>
                <tr>
                  <th style={{ ...st.border, ...st.text_center }}>
                    Quỹ BHYT (đồng)
                  </th>
                  <th style={{ ...st.border, ...st.text_center }}>
                    Khác (đồng)
                  </th>
                  <th style={{ ...st.border, ...st.text_center }}>
                    Người bệnh đóng (đồng)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ ...st.border, ...st.text_center }}>(1)</td>
                  <td style={{ ...st.border, ...st.text_center }}>(2)</td>
                  <td style={{ ...st.border, ...st.text_center }}>(3)</td>
                  <td style={{ ...st.border, ...st.text_center }}>(4)</td>
                  <td style={{ ...st.border, ...st.text_center }}>(5)</td>
                  <td style={{ ...st.border, ...st.text_center }}>(6)</td>
                  <td style={{ ...st.border, ...st.text_center }}>(7)</td>
                  <td style={{ ...st.border, ...st.text_center }}>
                    (8)=(5)-(6)-(7)
                  </td>
                </tr>
                <>
                  {dataPhieu?.danhSachDichVus?.map(
                    (item: any, index: number) => (
                      <>
                        <tr>
                          <td
                            style={{ ...st.border, ...st.table_cell }}
                            colSpan={8}
                          >
                            {`${index + 1}. ${item?.name}`}
                          </td>
                        </tr>
                        {item?.groups?.map((group: any) => (
                          <>
                            {group?.services?.map((dichVu: any) => (
                              <>
                                <tr>
                                  <td
                                    style={{ ...st.border, ...st.table_cell }}
                                  >
                                    {dichVu?.conceptName}
                                  </td>
                                  <td
                                    style={{ ...st.border, ...st.table_cell }}
                                  ></td>
                                  <td
                                    style={{
                                      ...st.border,
                                      ...st.table_cell,
                                      ...st.text_center,
                                    }}
                                  >
                                    {dichVu?.quantity}
                                  </td>
                                  <td
                                    style={{
                                      ...st.border,
                                      ...st.table_cell,
                                      ...st.text_end,
                                    }}
                                  >
                                    {convertNumberPrice(dichVu?.price)}
                                  </td>
                                  <td
                                    style={{
                                      ...st.border,
                                      ...st.table_cell,
                                      ...st.text_end,
                                    }}
                                  >
                                    {convertNumberPrice(
                                      dichVu?.price * dichVu?.quantity
                                    )}
                                  </td>
                                  <td
                                    style={{ ...st.border, ...st.table_cell }}
                                  ></td>
                                  <td
                                    style={{
                                      ...st.border,
                                      ...st.table_cell,
                                      ...st.text_end,
                                    }}
                                  >
                                    {/* {convertNumberPrice(dichVu?.promotionPrice)} */}
                                  </td>
                                  <td
                                    style={{
                                      ...st.border,
                                      ...st.table_cell,
                                      ...st.text_end,
                                    }}
                                  >
                                    {convertNumberPrice(
                                      dichVu?.totalPrice * dichVu?.quantity
                                    )}
                                  </td>
                                </tr>
                              </>
                            ))}
                            <tr>
                              <td
                                style={{
                                  ...st.border,
                                  ...st.table_cell,
                                  ...st.text_end,
                                }}
                                colSpan={4}
                              >
                                Cộng {index + 1}
                              </td>
                              <td
                                style={{
                                  ...st.border,
                                  ...st.table_cell,
                                  ...st.text_end,
                                }}
                              >
                                {convertNumberPrice(
                                  group?.services?.reduce(
                                    (acc: number, cur: any) =>
                                      acc + cur?.price * cur?.quantity,
                                    0
                                  )
                                )}
                              </td>
                              <td
                                style={{ ...st.border, ...st.table_cell }}
                              ></td>
                              <td
                                style={{
                                  ...st.border,
                                  ...st.table_cell,
                                  ...st.text_end,
                                }}
                              >
                                {convertNumberPrice(
                                  group?.services?.reduce(
                                    (acc: number, cur: any) =>
                                      acc + cur?.promotionPrice,
                                    0
                                  )
                                )}
                              </td>
                              <td
                                style={{
                                  ...st.border,
                                  ...st.table_cell,
                                  ...st.text_end,
                                }}
                              >
                                {convertNumberPrice(
                                  group?.services?.reduce(
                                    (acc: number, cur: any) =>
                                      acc + cur?.totalPrice,
                                    0
                                  )
                                )}
                              </td>
                            </tr>
                          </>
                        ))}
                      </>
                    )
                  )}
                </>
              </tbody>
            </table>
          </div>

          <div style={st.margin.top[10]}>
            <div style={{ fontStyle: "italic", fontWeight: "bold" }}>
              Số tiền ghi bằng chữ: <span style={{textTransform:"capitalize"}}>{NumberToText(dataPhieu?.totalMoney)}</span> Đồng
            </div>
            <div style={st.header_content}>
              Tổng chi phí đợt điều trị:
              <span style={{ ...st.textDataUnderline, ...st.min_w[200] }}>
                &nbsp;{convertNumberPrice(dataPhieu?.totalMoney)} VNĐ
              </span>
            </div>
            <div style={st.header_content}>
              Số tiền quỹ BHYT thanh toán:
              <span
                style={{ ...st.textDataUnderline, ...st.min_w[200] }}
              ></span>
            </div>
            <div style={st.header_content}>
              Số tiền người bệnh trả:
              <span style={{ ...st.textDataUnderline, ...st.min_w[200] }}>
                &nbsp;
                {convertNumberPrice(
                  dataPhieu?.paidMoney || dataPhieu?.payMoney
                )}{" "}
                VNĐ
              </span>
            </div>
            <div style={st.header_content}>
              Nguồn khác:
              <span style={{ ...st.textDataUnderline, ...st.min_w[200] }}>
                &nbsp;{convertNumberPrice(dataPhieu?.promotionMoney)} VNĐ
              </span>
            </div>
          </div>

          <div style={{ ...st.margin.top[50], ...st.signature.container }}>
            <div style={st.signature.content}>
              <div style={{ ...st.signature.title, ...st.margin.top[18] }}>
                Người lập bảng kê
              </div>
              <div>(Ký, ghi rõ họ tên)</div>
              <div style={st.margin.top[100]}>{dataUser?.username}</div>
            </div>
            <div style={st.signature.content}>
              <div style={{ ...st.signature.title, ...st.margin.top[18] }}>
                Kết toán viện phí
              </div>
              <div>(Ký, ghi rõ họ tên)</div>
              <div style={st.margin.top[100]}>{dataUser?.username}</div>
            </div>
            <div style={st.signature.content}>
              <div>
                Ngày {moment(dataPhieu?.createDate).format("DD")} tháng
                {moment(dataPhieu?.createDate).format("MM")} năm
                {moment(dataPhieu?.createDate).format("YYYY")}
              </div>
              <div style={{ ...st.signature.title }}>
                Đại diện cơ sở khám bệnh, chữa bệnh
              </div>
              <div>(Ký, ghi rõ họ tên)</div>
            </div>
            <div style={st.signature.content}>
              <div>
                Ngày {moment(dataPhieu?.createDate).format("DD")} tháng
                {moment(dataPhieu?.createDate).format("MM")} năm
                {moment(dataPhieu?.createDate).format("YYYY")}
              </div>
              <div style={{ ...st.signature.title }}>Giám định BHYT</div>
              <div>(Ký, ghi rõ họ tên)</div>
            </div>
            <div style={st.signature.content}>
              <div style={{ ...st.signature.title, ...st.margin.top[18] }}>
                Xác nhận của người bệnh
              </div>
              <div>(Ký, ghi rõ họ tên)</div>
            </div>
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

export default BangKeChiPhiNgoaiTru;
