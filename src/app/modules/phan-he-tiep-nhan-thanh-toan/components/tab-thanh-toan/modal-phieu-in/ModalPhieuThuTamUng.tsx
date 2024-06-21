import { Button, Modal } from 'react-bootstrap'
import { stylePrint, styles } from '../../../../component/phieu-in/constant';

type Props = {
  show: boolean;
  handleCloseDialog: () => void;
}

const ModalPhieuThuTamUng = ({ show, handleCloseDialog }: Props) => {

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
            Phiếu thu tạm ứng
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
        <Modal.Body id="print-contents" style={{ ...styles.fontSize._16px }}>
          <div style={{ ...styles.d_flex_j_between }}>
            <div style={{ ...styles.paddingLeft._70px }}>
              <div style={styles.fontSize._18px}>SỞ Y TẾ TEST</div>
              <div style={{ ...styles.fontBold, ...styles.fontSize._18px }}>BỆNH VIỆN ĐA KHOA TEST</div>
              <div style={styles.fontSize._16px}>Thành phố Hà Nội</div>
            </div>

            <div style={{ ...styles.flex_column, ...styles.alignItems.end }}>
              <div style={styles.width._120px}><img style={styles.w_100} src="/media/images/Barcode.png" alt="" /></div>
              <div style={styles.fontSize._16px}>PID: 24000052</div>
              <div style={styles.fontSize._16px}>Số quyển: TamUngHoaDon</div>
              <div style={styles.fontSize._16px}>Số phiếu: 35</div>
            </div>
          </div>

          <div style={{ ...styles.textAlign.center, ...styles.paddingBottom._20px }}>
            <div style={{ ...styles.fontBold, ...styles.fontSize._18px }}>PHIẾU THU TẠM ỨNG</div>
            <div style={styles.fontSize._16px}>(Lưu)</div>
          </div>

          <div style={{ ...styles.paddingBottom._20px }}>
            <div style={styles.fontSize._16px}>- Họ và tên: <span style={{ ...styles.fontBold, ...styles.fontSize._16px }}>Nguyễn Văn A</span> <span style={{ ...styles.paddingLeft._50px, ...styles.fontSize._16px }}>Giới tính: Nam</span> <span style={{ ...styles.paddingLeft._50px, ...styles.fontSize._16px }}>Ngày sinh: 2000</span> <span style={{ ...styles.paddingLeft._50px, ...styles.fontSize._16px }}>Tuổi: 24</span> </div>
            <div style={styles.fontSize._16px}>- Địa chỉ: Phường Quán Thánh, Quận Ba Đình, Thành Phố Hà Nội</div>
            <div style={styles.fontSize._16px}>- Khoa: Khoa khám bệnh - Đối tượng: Yêu cầu</div>
            <div style={styles.fontSize._16px}>- Lý do thu: Thu tạm ứng</div>
            <div style={styles.fontSize._16px}>- Số tiền: <span style={{ ...styles.fontBold, ...styles.fontSize._16px }}>10.000đ</span>     - Hình thức thu: <span style={{ ...styles.fontBold, ...styles.fontSize._16px }}>Tiền mặt</span></div>
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

export default ModalPhieuThuTamUng