import { Dispatch, FC, SetStateAction } from "react";
import { Button, Modal, ModalFooter, ModalHeader, ModalTitle } from "react-bootstrap";
import { stylePrint, styles } from "../../../component/phieu-in/constant";
import moment from "moment";
interface Props {
  handleClose: () => void;
}
const ModalPhieuInToDieuTri: FC<Props> = ({ handleClose }) => {
  let dataIn: any = {};
  dataIn.dataTable = [
    {
      ngayGio: moment().subtract(10, "d"),
      dienBienBenh: `Lý do khám: Đau bất thường \n Quá trình bệnh lý: đau bất thường vùng ngực và cổ \nTriệu chứng: tức ngực \nTiền sử bản thân: Bình thường \nTiền sử gia đình: Bình thưởng 02 \nKhám TT: Khám tổng hợp ngoại, nội. \nKhám CQ: Khám toàn thân Quản Trị Hệ Thống`,
      yLenh:
        `Dịch vụ:\n- Khám Ngoại x 0 Lần\n- Nội soi trực tràng-hậu môn thắt trĩ x 1 Lần \n- Nội soi trực tràng ống cứng không sinh thiết 1 Lần\n- Nội soi tai mũi họng x1 Lần\n- Giường Ngoại khoa loại 1 Hạng II \n- Khoa Lao x1 Ngày\n- Tiêm tĩnh mạch trẻ em dưới 16 tuổi x 1 lần\n- Thông bàng quang x 1 lần\n- Gội đầu tại giường theo yêu cầu x 1 lần\nXét nghiêm: Xét nghiệm NIPT, Vi khuẩn kháng thuốc hệ thống tự động Helicobacter pylori Ag test nhanh. Tìm mảnh vỡ hồng cầu\nChẩn đoán hình ảnh: Nội soi trực tràng-hậu môn thắt trĩ Nội soi trực tràng ống cứng không sinh thiết Nội soi tai mũi họng. Siêu âm Doppler tỉnh hoàn, mào tinh hoàn hai bên, Xác định sơ đồ song thị. \nĐo thỉnh lực trên ngưỡng\nXử trí: Nhập viện làm tiểu phẫu`,
    },
  ];
  const handlePrint = () => {
    let content = document.getElementById("print-contents");
    let pri = (document.getElementById("ifmcontentstoprint") as any).contentWindow;
    pri.document.open();
    pri.document.write(stylePrint);
    pri.document.write((content as HTMLElement).innerHTML);

    pri.document.close();
    pri.focus();
    pri.print();
  };
  
  return (
    <>
      <Modal show={true} centered size="lg" onHide={handleClose} scrollable>
        <ModalHeader closeButton className="header-modal">
          <ModalTitle style={styles.titleFrom}>Tờ điều trị</ModalTitle>
        </ModalHeader>
        <iframe
          id="ifmcontentstoprint"
          style={{
            height: "0px",
            width: "0px",
            position: "absolute",
          }}
        ></iframe>
        <Modal.Body id="print-contents" className="dialog-body-scroll">
          <div style={styles.d_flex_j_between}>
            <div style={{ ...styles.w_30 }}>
              <b>{`SỞ Y TẾ ${dataIn?.soYTe ?? ""}`}</b>
              <br />
              <b>{`BỆNH VIỆN ĐA KHOA ${dataIn?.benhVien ?? ""}`}</b>
            </div>
            <div style={{ ...styles.w_30, ...styles.overflow.hidden }}>
              <div style={styles.titleFrom}>TỜ ĐIỀU TRỊ</div>
              <div
                style={{
                  ...styles.position.relative,
                  fontWeight: "bold",
                  lineHeight: "25px",
                  left: "75px",
                }}
              >
                Số:&nbsp;
                <span style={{ ...styles.hr, ...styles.w_20 }}></span>
              </div>
            </div>
            <div style={{ ...styles.w_20, ...styles.overflow.hidden }}>
              <div style={{ textIndent: "20px" }}>MS: 39/BV-01</div>
              <div style={{ textIndent: "20px" }}>Số vào viện: {dataIn?.soVaoVien ?? ""}</div>
            </div>
          </div>

          <div style={{margin:"20px 0"}}>
            <div style={styles.d_flex_j_between}>
              <span>
                Họ và tên người bệnh: <b>{dataIn?.hoTen || "Nguyễn Đình Công"}</b>
              </span>{" "}
              <span>Tuổi: {dataIn?.tuoi ?? "20"}</span>{" "}
              <span style={{ paddingRight: "10px" }}>{dataIn?.gioiTinh ?? "Nam"}</span>
            </div>
            <div style={styles.d_flex_j_between}>
              <span>Khoa: {dataIn?.khoa || "Khám bệnh"}</span>
              <span>Buồng: {dataIn?.buong}</span>
              <span style={{ paddingRight: "10px" }}>Giường: {dataIn?.giuong ?? "11"}</span>
            </div>
            <div>Chẩn đoán: {dataIn?.chanDoan || ""}</div>
          </div>
          <div style={{ ...styles.w_100, ...styles.overflow.hidden }}>
            <div>
              <table style={styles.table}>
                <tr>
                  <th style={{ ...styles.border, ...styles.w_15, textAlign: "center" }}>NGÀY GIỜ</th>
                  <th style={{ ...styles.border, ...styles.w_50, textAlign: "center" }}>DIỄN BIẾN BỆNH</th>
                  <th style={{ ...styles.border, ...styles.w_35, textAlign: "center" }}>Y LỆNH</th>
                </tr>
                <tbody>
                  {dataIn?.dataTable?.map((item: any) => (
                    <tr>
                      <td style={{ ...styles.tdContent, textAlign: "center" }}>
                        {moment(item?.ngayGio).format("DD/MM/YYYY")}
                      </td>
                      <td style={styles.tdContent}><div>{item?.dienBienBenh}</div></td>
                      <td style={styles.tdContent}><div>{item?.yLenh}</div></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ ...styles.d_flex_j_between, marginTop: "20px" }}>
              <div style={{ ...styles.w_40, ...styles.overflow.hidden }}>
                <div style={{ ...styles.textAlign.center, marginBottom: "50px" }}>
                  <strong>NGƯỜI THỰC HIỆN</strong>
                </div>
              </div>
              <div style={{ ...styles.w_20, ...styles.overflow.hidden }}></div>
              <div style={{ ...styles.w_40, ...styles.overflow.hidden }}>
                <div style={styles.textAlign.center}>
                  <i>....... Giờ ....... ngày ....... tháng ...... năm .......</i>
                </div>
                <div style={{ ...styles.textAlign.center, marginBottom: "50px" }}>
                  <strong>KHOA THỰC HIỆN</strong>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="flex flex-middle flex-center py-1">
          <Button className="btn-fill min-w-50px" onClick={handlePrint}>
            In phiếu
          </Button>
          <Button className="btn-outline" onClick={handleClose}>
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalPhieuInToDieuTri;
