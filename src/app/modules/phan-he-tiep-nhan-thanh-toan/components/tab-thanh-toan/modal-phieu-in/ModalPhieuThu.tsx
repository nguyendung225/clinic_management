import { Button, Modal } from 'react-bootstrap'
import { stylePrint, styles } from '../../../../component/phieu-in/constant';
import NumberToText from '../../../../component/NumberToText';
import { convertNumberPrice } from '../../../../utils/FormatUtils';

type Props = {
  show: boolean;
  handleCloseDialog: () => void;
  isPhieuHoanUng: boolean;
}

const ModalPhieuThu = ({ show, handleCloseDialog, isPhieuHoanUng }: Props) => {

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
    <div>
      <Modal centered show={show} onHide={handleCloseDialog} size='lg'>
        <Modal.Header className="py-4" closeButton>
          <Modal.Title>
            Phiếu {isPhieuHoanUng ? "hoàn ứng" : "thu"}
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
        <Modal.Body id="print-contents" style={{ ...styles.fontSize._18px }}>
          <div style={{ ...styles.d_flex_j_between, ...styles.paddingBottom._20px }}>
            <div style={{ ...styles.width._120px }}></div>

            <div style={{ ...styles.textAlign.center }}>
              <div style={{ ...styles.fontBold, ...styles.fontSize._18px }}>BỆNH VIỆN ĐA KHOA</div>
              <div style={styles.fontSize._16px}>Thành phố Hà Nội</div>
              <div style={{ ...styles.fontBold, ...styles.fontSize._18px }}>PHIẾU {isPhieuHoanUng ? "HOÀN ỨNG" : "THU"}</div>
              <div style={styles.fontSize._16px}>(Lưu)</div>
            </div>

            <div>
              <div style={{ ...styles.fontSize._16px, ...styles.textAlign.right }}>PID: 24000052</div>
              <div style={{ ...styles.width._120px }}><img style={{ ...styles.w_100 }} src="/media/images/Barcode.png" alt="" /></div>
            </div>
          </div>

          <div style={{ ...styles.paddingBottom._20px }}>
            <div style={styles.fontSize._16px}>- Số phiếu: 14</div>
            <div style={styles.fontSize._16px}>- Họ tên người bệnh: <span style={{ ...styles.fontBold, ...styles.fontSize._16px }}>Nguyễn Văn A</span> <span style={{ ...styles.paddingLeft._70px, ...styles.fontSize._16px }}>Tuổi: 2000 (24 tuổi)</span> <span style={{ ...styles.paddingLeft._50px, ...styles.fontSize._16px }}>Nam</span></div>
            <div style={styles.fontSize._16px}>- Mã người bệnh: <span style={{ ...styles.fontBold, ...styles.fontSize._16px }}>3525222</span></div>
            <div style={styles.fontSize._16px}>- Địa chỉ: Phường Quán Thánh, Quận Ba Đình, Thành Phố Hà Nội</div>
            {isPhieuHoanUng ? <div>- Lý do chi: Chi hoàn ứng cho phiếu: TamUngHoaUng</div> : <div style={styles.fontSize._16px}>- Lý do thu: Khám bệnh: {convertNumberPrice(84000)}đ</div>}
            <div style={styles.fontSize._16px}>- Số tiền: <span style={{ ...styles.fontBold, ...styles.fontSize._16px }}>{convertNumberPrice(84000)}</span> đồng</div>
            <div style={styles.fontSize._16px}>- Bằng chữ: {NumberToText(84000)}</div>
          </div>

          <div style={{ ...styles.d_flex_j_around, ...styles.paddingBottom._50px }}>
            <div style={{ ...styles.fontBold, ...styles.fontSize._16px }}>Người nộp</div>

            <div style={{ ...styles.textAlign.center }}>
              <div style={{ ...styles.font_italic, ...styles.fontSize._16px }}>15:00 Ngày 12 tháng 01 năm 2024</div>
              <div style={{ ...styles.fontBold, ...styles.fontSize._16px }}>Người lập phiếu</div>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer className='py-3'>
          <Button className='btn-outline' onClick={handleCloseDialog}>
            Hủy
          </Button>

          <Button className='btn-fill' onClick={handlePrint}>In phiếu</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ModalPhieuThu